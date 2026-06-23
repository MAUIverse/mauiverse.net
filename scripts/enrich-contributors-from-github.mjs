#!/usr/bin/env node
// scripts/enrich-contributors-from-github.mjs
// Usage: node scripts/enrich-contributors-from-github.mjs
/**
 * Script: enrich-contributors-from-github
 * Purpose: Fill empty social/blog fields in community-contributor YAML files
 *          from public GitHub profile data. Never overwrites existing values.
 */

import { promises as fs } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const contributorsDir = path.resolve(__dirname, '../src/content/community-contributors');
const API_BASE = 'https://api.github.com';
const REQUEST_DELAY_MS = 300;

const token =
  process.env.CONTRIBUTOR_ENRICH_GITHUB_TOKEN ??
  process.env.GITHUB_TOKEN ??
  process.env.GH_TOKEN;

const ENRICHABLE_FIELDS = [
  'bskyUrl',
  'twitterUrl',
  'instagramUrl',
  'linkedInUrl',
  'youTubeUrl',
  'tikTokUrl',
  'blogUrl',
  'twitchProfileUrl',
];

const PROVIDER_TO_FIELD = {
  bluesky: 'bskyUrl',
  twitter: 'twitterUrl',
  instagram: 'instagramUrl',
  linkedin: 'linkedInUrl',
  youtube: 'youTubeUrl',
  twitch: 'twitchProfileUrl',
};

function parseYamlValue(rawValue) {
  const value = rawValue.trim();

  if (value === 'true') return true;
  if (value === 'false') return false;

  if (value.startsWith('"') && value.endsWith('"')) {
    return value.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
  }

  if (value.startsWith("'") && value.endsWith("'")) {
    return value.slice(1, -1).replace(/\\'/g, "'").replace(/\\\\/g, '\\');
  }

  return value;
}

function parseSimpleYaml(content) {
  const record = {};
  const lines = content.split(/\r?\n/);

  for (const line of lines) {
    const trimmed = line.trim();
    if (trimmed === '' || trimmed.startsWith('#')) continue;

    const match = line.match(/^([A-Za-z0-9_]+):\s*(.*)$/);
    if (!match) continue;

    const [, key, rawValue] = match;
    record[key] = parseYamlValue(rawValue);
  }

  return record;
}

function isEmpty(value) {
  return value == null || (typeof value === 'string' && value.trim() === '');
}

function escapeYamlString(value) {
  return JSON.stringify(value);
}

function looksLikeUrl(value) {
  const trimmed = String(value ?? '').trim();
  if (trimmed.length === 0) return false;

  if (/^https?:\/\//i.test(trimmed)) {
    return true;
  }

  return /^[a-z0-9][a-z0-9.-]*\.[a-z]{2,}(?:\/.*)?$/i.test(trimmed);
}

function normalizeUrl(value) {
  const trimmed = String(value ?? '').trim();
  if (trimmed.length === 0) return '';

  if (/^https?:\/\//i.test(trimmed)) {
    return trimmed;
  }

  return `https://${trimmed}`;
}

function getHostname(url) {
  try {
    return new URL(normalizeUrl(url)).hostname.toLowerCase();
  } catch {
    return '';
  }
}

function classifyGenericUrl(url) {
  const host = getHostname(url);

  if (host.includes('bsky.app')) {
    return 'bskyUrl';
  }

  if (host.includes('tiktok.com')) {
    return 'tikTokUrl';
  }

  if (
    host.includes('twitter.com') ||
    host.includes('x.com')
  ) {
    return 'twitterUrl';
  }

  if (host.includes('instagram.com')) {
    return 'instagramUrl';
  }

  if (host.includes('linkedin.com')) {
    return 'linkedInUrl';
  }

  if (host.includes('youtube.com') || host.includes('youtu.be')) {
    return 'youTubeUrl';
  }

  if (host.includes('twitch.tv')) {
    return 'twitchProfileUrl';
  }

  return 'blogUrl';
}

function createHeaders() {
  const headers = {
    Accept: 'application/vnd.github+json',
    'User-Agent': 'mauiverse.net contributor enrich',
    'X-GitHub-Api-Version': '2022-11-28',
  };

  if (token && token.trim().length > 0) {
    headers.Authorization = `Bearer ${token.trim()}`;
  }

  return headers;
}

async function sleep(ms) {
  await new Promise((resolve) => setTimeout(resolve, ms));
}

function getRateLimitResetAt(response) {
  const resetHeader = response.headers.get('x-ratelimit-reset');
  return resetHeader ? Number(resetHeader) * 1000 : null;
}

async function waitForRateLimitReset(resetAt, label) {
  if (!resetAt) {
    throw new Error(`GitHub API rate limit reached${label ? ` while ${label}` : ''}.`);
  }

  const waitMs = Math.max(resetAt - Date.now(), 0) + 1000;
  console.warn(
    `Rate limit reached${label ? ` while ${label}` : ''}; waiting ~${Math.ceil(waitMs / 1000)}s before retrying...`
  );
  await sleep(waitMs);
}

async function fetchGitHubJson(pathname, label = pathname) {
  for (let attempt = 0; attempt < 5; attempt += 1) {
    try {
      const response = await fetch(`${API_BASE}${pathname}`, { headers: createHeaders() });

      if (response.status === 404) {
        return { ok: false, status: 404, data: null };
      }

      if (response.status === 403) {
        const resetAt = getRateLimitResetAt(response);
        await waitForRateLimitReset(resetAt, label);
        continue;
      }

      if (!response.ok) {
        throw new Error(`GitHub API request failed: ${response.status} ${response.statusText}`);
      }

      const remaining = Number(response.headers.get('x-ratelimit-remaining') ?? Number.NaN);
      if (!Number.isNaN(remaining) && remaining <= 2) {
        const resetAt = getRateLimitResetAt(response);
        if (resetAt) {
          await waitForRateLimitReset(resetAt, 'approaching rate limit');
        }
      }

      return { ok: true, status: response.status, data: await response.json() };
    } catch (error) {
      const isLastAttempt = attempt === 4;
      if (isLastAttempt) {
        throw error;
      }

      const waitMs = 1000 * (attempt + 1);
      const reason = error instanceof Error ? error.message : String(error);
      console.warn(`Request failed for ${label}; retrying in ${waitMs}ms (${reason})`);
      await sleep(waitMs);
    }
  }

  throw new Error(`GitHub API request failed after retries for ${label}.`);
}

function buildCandidateValues(userProfile, socialAccounts) {
  const candidates = {};

  const blog = userProfile?.blog;
  if (looksLikeUrl(blog)) {
    candidates.blogUrl = normalizeUrl(blog);
  }

  const twitterUsername = String(userProfile?.twitter_username ?? '').trim();
  if (twitterUsername.length > 0) {
    candidates.twitterUrl = `https://twitter.com/${twitterUsername}`;
  }

  if (Array.isArray(socialAccounts)) {
    for (const account of socialAccounts) {
      const provider = String(account?.provider ?? '').trim().toLowerCase();
      const url = normalizeUrl(account?.url);
      if (url.length === 0) continue;

      const mappedField = PROVIDER_TO_FIELD[provider] ?? null;

      if (mappedField) {
        if (!(mappedField in candidates)) {
          candidates[mappedField] = url;
        }
        continue;
      }

      if (provider === 'generic') {
        const genericField = classifyGenericUrl(url);
        if (!(genericField in candidates)) {
          candidates[genericField] = url;
        }
      }
    }
  }

  return candidates;
}

function applyUpdates(content, updates) {
  let updatedContent = content;
  const lines = updatedContent.split(/\r?\n/);
  const existingKeys = new Set();

  for (const line of lines) {
    const match = line.match(/^([A-Za-z0-9_]+):\s*(.*)$/);
    if (match) {
      existingKeys.add(match[1]);
    }
  }

  for (const [field, value] of Object.entries(updates)) {
    const quotedValue = escapeYamlString(value);
    const emptyValuePattern = new RegExp(
      `^(${field}:\\s*)(?:""|''|)\\s*$`,
      'm'
    );

    if (emptyValuePattern.test(updatedContent)) {
      updatedContent = updatedContent.replace(
        emptyValuePattern,
        `$1${quotedValue}`
      );
      continue;
    }

    if (!existingKeys.has(field)) {
      const suffix = updatedContent.endsWith('\n') ? '' : '\n';
      updatedContent = `${updatedContent}${suffix}${field}: ${quotedValue}\n`;
    }
  }

  return updatedContent;
}

function hasEmptyEnrichableField(data) {
  return ENRICHABLE_FIELDS.some((field) => isEmpty(data[field]));
}

async function enrichContributorFile(fileName) {
  const fullPath = path.join(contributorsDir, fileName);
  const originalContent = await fs.readFile(fullPath, 'utf8');
  const data = parseSimpleYaml(originalContent);

  const gitHubUsername = String(data.gitHubUsername ?? '').trim();
  if (gitHubUsername.length === 0) {
    return {
      fileName,
      status: 'skipped',
      reason: 'missing gitHubUsername',
      updates: {},
    };
  }

  if (!hasEmptyEnrichableField(data)) {
    return {
      fileName,
      gitHubUsername,
      status: 'unchanged',
      reason: 'no empty enrichable fields',
      updates: {},
    };
  }

  const userResult = await fetchGitHubJson(
    `/users/${encodeURIComponent(gitHubUsername)}`,
    `fetching user ${gitHubUsername}`
  );
  await sleep(REQUEST_DELAY_MS);

  if (!userResult.ok) {
    if (userResult.status === 404) {
      return {
        fileName,
        gitHubUsername,
        status: 'skipped',
        reason: 'GitHub user not found',
        updates: {},
      };
    }
  }

  const socialResult = await fetchGitHubJson(
    `/users/${encodeURIComponent(gitHubUsername)}/social_accounts`,
    `fetching social accounts for ${gitHubUsername}`
  );
  await sleep(REQUEST_DELAY_MS);

  const candidates = buildCandidateValues(
    userResult.data,
    socialResult.ok ? socialResult.data : []
  );

  const updates = {};
  for (const field of ENRICHABLE_FIELDS) {
    if (!(field in candidates)) continue;
    if (!isEmpty(data[field])) continue;
    updates[field] = candidates[field];
  }

  if (Object.keys(updates).length === 0) {
    return {
      fileName,
      gitHubUsername,
      status: 'unchanged',
      updates: {},
    };
  }

  const updatedContent = applyUpdates(originalContent, updates);
  if (updatedContent !== originalContent) {
    await fs.writeFile(fullPath, updatedContent, 'utf8');
  }

  return {
    fileName,
    gitHubUsername,
    status: 'updated',
    updates,
  };
}

function parseFromArg(argv) {
  const fromIndex = argv.indexOf('--from');
  if (fromIndex === -1) {
    return null;
  }

  const value = argv[fromIndex + 1];
  if (!value || value.startsWith('--')) {
    throw new Error('Usage: node scripts/enrich-contributors-from-github.mjs [--from <filename>]');
  }

  return value;
}

async function main() {
  const fromFile = parseFromArg(process.argv);

  if (!token) {
    console.warn(
      'No GitHub token found in CONTRIBUTOR_ENRICH_GITHUB_TOKEN, GITHUB_TOKEN, or GH_TOKEN; continuing unauthenticated (lower rate limit).'
    );
  }

  const files = (await fs.readdir(contributorsDir))
    .filter((name) => name.endsWith('.yaml') || name.endsWith('.yml'))
    .sort((left, right) => left.localeCompare(right));

  const startIndex =
    fromFile == null ? 0 : files.findIndex((name) => name === fromFile || name.startsWith(`${fromFile}.`));

  if (fromFile != null && startIndex === -1) {
    throw new Error(`Could not find contributor file matching --from ${fromFile}`);
  }

  const filesToProcess = startIndex === -1 ? files : files.slice(startIndex);

  if (fromFile != null) {
    console.log(`Resuming from ${filesToProcess[0]} (${filesToProcess.length} files remaining).`);
  }

  const results = {
    updated: 0,
    unchanged: 0,
    skipped: 0,
    fieldsAdded: 0,
    details: [],
  };

  for (const fileName of filesToProcess) {
    const result = await enrichContributorFile(fileName);
    results.details.push(result);

    if (result.status === 'updated') {
      results.updated += 1;
      results.fieldsAdded += Object.keys(result.updates).length;
      console.log(
        `Updated ${fileName}: ${Object.entries(result.updates)
          .map(([field, value]) => `${field}=${value}`)
          .join(', ')}`
      );
      continue;
    }

    if (result.status === 'unchanged') {
      results.unchanged += 1;
      continue;
    }

    results.skipped += 1;
    if (result.reason) {
      console.warn(`Skipped ${fileName}: ${result.reason}`);
    }
  }

  console.log('');
  console.log('Contributor enrichment summary:');
  console.log(`  Files processed: ${results.details.length}/${filesToProcess.length}`);
  console.log(`  Files updated: ${results.updated}`);
  console.log(`  Fields added: ${results.fieldsAdded}`);
  console.log(`  Files unchanged: ${results.unchanged}`);
  console.log(`  Files skipped: ${results.skipped}`);
}

await main();
