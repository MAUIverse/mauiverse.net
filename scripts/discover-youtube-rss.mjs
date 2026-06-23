#!/usr/bin/env node
// scripts/discover-youtube-rss.mjs
// Usage: node scripts/discover-youtube-rss.mjs [--force] [--dry-run] [--concurrency N]
/**
 * Script: discover-youtube-rss
 * Purpose: Discover YouTube long-form uploads RSS feeds for community contributors
 *          and write youTubeRSS back into YAML without overwriting existing values.
 */

import { promises as fs } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const contributorsDir = path.resolve(__dirname, '../src/content/community-contributors');
const projectRoot = path.resolve(__dirname, '..');
const opmlPath = path.resolve(projectRoot, 'contributors-youtube.opml');

const REQUEST_DELAY_MS = 100;
const FETCH_TIMEOUT_MS = 10_000;
const DEFAULT_CONCURRENCY = 4;
const USER_AGENT =
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36';

const CHANNEL_ID_PATTERN = /UC[\w-]{22}/;

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

function normalizeUrl(value) {
  const trimmed = String(value ?? '').trim();
  if (trimmed.length === 0) return '';

  if (/^https?:\/\//i.test(trimmed)) {
    return trimmed;
  }

  return `https://${trimmed}`;
}

function isYouTubeHost(hostname) {
  const host = hostname.toLowerCase();
  return host === 'youtube.com' || host === 'www.youtube.com' || host === 'youtu.be';
}

function normalizeYouTubeUrl(youTubeUrl) {
  const normalized = normalizeUrl(youTubeUrl);
  if (normalized.length === 0) return null;

  let url;
  try {
    url = new URL(normalized);
  } catch {
    return null;
  }

  if (!isYouTubeHost(url.hostname)) {
    return null;
  }

  url.hostname = 'www.youtube.com';
  url.protocol = 'https:';
  url.hash = '';
  url.search = '';

  return url;
}

function extractChannelIdFromPath(pathname) {
  const channelMatch = pathname.match(/\/channel\/(UC[\w-]{22})/i);
  if (channelMatch) {
    return channelMatch[1];
  }

  return null;
}

function buildAboutPageUrl(youTubeUrl) {
  const url = normalizeYouTubeUrl(youTubeUrl);
  if (!url) return null;

  const directChannelId = extractChannelIdFromPath(url.pathname);
  if (directChannelId) {
    return { aboutUrl: null, channelId: directChannelId };
  }

  let pathname = url.pathname.replace(/\/+$/, '');
  if (pathname.length === 0) {
    return null;
  }

  if (!pathname.endsWith('/about')) {
    pathname = `${pathname}/about`;
  }

  url.pathname = pathname;
  return { aboutUrl: url.href, channelId: null };
}

function extractChannelIdFromRssLink(html) {
  const linkTagPattern =
    /<link\b[^>]*\brel=["']alternate["'][^>]*\btype=["']application\/rss\+xml["'][^>]*>/gi;
  const matches = html.match(linkTagPattern) ?? [];

  for (const tag of matches) {
    const hrefMatch = tag.match(/\bhref=["']([^"']+)["']/i);
    if (!hrefMatch) continue;

    const channelIdMatch = hrefMatch[1].match(/[?&]channel_id=(UC[\w-]{22})/i);
    if (channelIdMatch) {
      return channelIdMatch[1];
    }
  }

  const reversePattern =
    /<link\b[^>]*\btype=["']application\/rss\+xml["'][^>]*\brel=["']alternate["'][^>]*>/gi;
  const reverseMatches = html.match(reversePattern) ?? [];

  for (const tag of reverseMatches) {
    const hrefMatch = tag.match(/\bhref=["']([^"']+)["']/i);
    if (!hrefMatch) continue;

    const channelIdMatch = hrefMatch[1].match(/[?&]channel_id=(UC[\w-]{22})/i);
    if (channelIdMatch) {
      return channelIdMatch[1];
    }
  }

  return null;
}

function extractChannelIdFromPageJson(html) {
  const patterns = [
    /"channelId":"(UC[\w-]{22})"/,
    /"externalId":"(UC[\w-]{22})"/,
    /"browseId":"(UC[\w-]{22})"/,
    /channel_id=(UC[\w-]{22})/,
  ];

  for (const pattern of patterns) {
    const match = html.match(pattern);
    if (match) {
      return match[1];
    }
  }

  const genericMatch = html.match(CHANNEL_ID_PATTERN);
  return genericMatch ? genericMatch[0] : null;
}

function extractChannelIdFromHtml(html) {
  return extractChannelIdFromRssLink(html) ?? extractChannelIdFromPageJson(html);
}

function channelIdToUploadsPlaylistFeedUrl(channelId) {
  if (!CHANNEL_ID_PATTERN.test(channelId)) {
    return null;
  }

  if (!channelId.startsWith('UC')) {
    return null;
  }

  const playlistId = `UULF${channelId.slice(2)}`;
  return `https://www.youtube.com/feeds/videos.xml?playlist_id=${playlistId}`;
}

async function sleep(ms) {
  await new Promise((resolve) => setTimeout(resolve, ms));
}

function looksLikeFeedBody(body) {
  const sample = body.slice(0, 8000).toLowerCase();
  return (
    sample.includes('<rss') ||
    sample.includes('<feed') ||
    sample.includes('<rdf:rdf')
  );
}

function looksLikeFeedContentType(contentType) {
  const type = String(contentType ?? '').toLowerCase();
  return (
    type.includes('xml') ||
    type.includes('rss') ||
    type.includes('atom')
  );
}

async function fetchWithTimeout(url, options = {}) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);

  try {
    const response = await fetch(url, {
      ...options,
      signal: controller.signal,
      headers: {
        Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.9',
        'User-Agent': USER_AGENT,
        ...(options.headers ?? {}),
      },
      redirect: 'follow',
    });

    const contentType = response.headers.get('content-type') ?? '';
    const body = await response.text();

    return {
      ok: response.ok,
      status: response.status,
      contentType,
      body,
      finalUrl: response.url,
    };
  } finally {
    clearTimeout(timeout);
  }
}

function validateFeedResponse(response) {
  if (!response.ok || response.status !== 200) {
    return false;
  }

  const hasFeedContentType = looksLikeFeedContentType(response.contentType);
  const hasFeedBody = looksLikeFeedBody(response.body);

  return hasFeedContentType || hasFeedBody;
}

async function validateFeedUrl(feedUrl) {
  try {
    const response = await fetchWithTimeout(feedUrl);
    await sleep(REQUEST_DELAY_MS);
    return validateFeedResponse(response);
  } catch {
    return false;
  }
}

async function discoverYouTubeRssFeed(youTubeUrl) {
  const aboutInfo = buildAboutPageUrl(youTubeUrl);
  if (!aboutInfo) {
    return null;
  }

  let channelId = aboutInfo.channelId;

  if (!channelId && aboutInfo.aboutUrl) {
    const pageResponse = await fetchWithTimeout(aboutInfo.aboutUrl);
    await sleep(REQUEST_DELAY_MS);

    if (!pageResponse.ok) {
      return null;
    }

    channelId = extractChannelIdFromHtml(pageResponse.body);
  }

  if (!channelId) {
    return null;
  }

  const feedUrl = channelIdToUploadsPlaylistFeedUrl(channelId);
  if (!feedUrl) {
    return null;
  }

  const isValid = await validateFeedUrl(feedUrl);
  if (!isValid) {
    return null;
  }

  return {
    channelId,
    feedUrl,
  };
}

function escapeXmlAttribute(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function buildOpml(feedEntries) {
  const sorted = [...feedEntries].sort((left, right) =>
    left.displayName.localeCompare(right.displayName, undefined, { sensitivity: 'base' })
  );

  const outlines = sorted
    .map((entry) => {
      const attrs = [
        `type="rss"`,
        `text="${escapeXmlAttribute(entry.displayName)}"`,
        `title="${escapeXmlAttribute(entry.displayName)}"`,
        `xmlUrl="${escapeXmlAttribute(entry.feedUrl)}"`,
        `htmlUrl="${escapeXmlAttribute(entry.youTubeUrl)}"`,
      ];

      if (!isEmpty(entry.gitHubUsername)) {
        attrs.push(`gitHubUsername="${escapeXmlAttribute(entry.gitHubUsername)}"`);
      }

      return `    <outline ${attrs.join(' ')} />`;
    })
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<opml version="2.0">
  <head>
    <title>Mauiverse Community YouTube Channels</title>
    <dateCreated>${new Date().toUTCString()}</dateCreated>
  </head>
  <body>
${outlines}
  </body>
</opml>
`;
}

function collectYouTubeFeedEntries(contributors) {
  return contributors
    .filter((contributor) => !isEmpty(contributor.youTubeRSS) && !isEmpty(contributor.youTubeUrl))
    .map((contributor) => ({
      displayName: contributor.displayName,
      feedUrl: normalizeUrl(contributor.youTubeRSS),
      youTubeUrl: normalizeUrl(contributor.youTubeUrl),
      gitHubUsername: contributor.gitHubUsername,
    }));
}

function insertYouTubeRssAfterYouTubeUrl(content, feedUrl) {
  const quotedValue = escapeYamlString(feedUrl);
  const lines = content.split(/\r?\n/);
  const updatedLines = [];
  let inserted = false;

  for (let index = 0; index < lines.length; index += 1) {
    const line = lines[index];
    updatedLines.push(line);

    if (inserted) continue;

    const youTubeUrlMatch = line.match(/^youTubeUrl:\s*(.*)$/);
    if (!youTubeUrlMatch) continue;

    const nextLine = lines[index + 1] ?? '';
    const nextIsYouTubeRss = /^youTubeRSS:\s*/.test(nextLine);

    if (nextIsYouTubeRss) {
      const emptyYouTubeRssPattern = /^youTubeRSS:\s*(?:""|''|)\s*$/;
      if (emptyYouTubeRssPattern.test(nextLine)) {
        updatedLines.push(`youTubeRSS: ${quotedValue}`);
        index += 1;
        inserted = true;
      }
      continue;
    }

    updatedLines.push(`youTubeRSS: ${quotedValue}`);
    inserted = true;
  }

  if (!inserted) {
    return content;
  }

  return `${updatedLines.join('\n')}\n`;
}

function parseArgs(argv) {
  let concurrency = DEFAULT_CONCURRENCY;
  const concurrencyIndex = argv.indexOf('--concurrency');
  if (concurrencyIndex !== -1) {
    const value = Number(argv[concurrencyIndex + 1]);
    if (!Number.isNaN(value) && value > 0) {
      concurrency = Math.floor(value);
    }
  }

  return {
    force: argv.includes('--force'),
    dryRun: argv.includes('--dry-run'),
    concurrency,
  };
}

async function mapWithConcurrency(items, concurrency, mapper) {
  if (items.length === 0) return [];

  const results = new Array(items.length);
  let nextIndex = 0;
  const workerCount = Math.min(concurrency, items.length);

  async function worker() {
    while (nextIndex < items.length) {
      const index = nextIndex;
      nextIndex += 1;
      results[index] = await mapper(items[index], index);
    }
  }

  await Promise.all(Array.from({ length: workerCount }, () => worker()));
  return results;
}

async function loadContributors() {
  const files = (await fs.readdir(contributorsDir))
    .filter((name) => name.endsWith('.yaml') || name.endsWith('.yml'))
    .sort((left, right) => left.localeCompare(right));

  const contributors = [];

  for (const fileName of files) {
    const fullPath = path.join(contributorsDir, fileName);
    const content = await fs.readFile(fullPath, 'utf8');
    const data = parseSimpleYaml(content);
    const slug = fileName.replace(/\.(yaml|yml)$/i, '');

    contributors.push({
      fileName,
      slug,
      fullPath,
      content,
      displayName: String(data.displayName ?? slug),
      youTubeUrl: String(data.youTubeUrl ?? '').trim(),
      youTubeRSS: String(data.youTubeRSS ?? '').trim(),
      gitHubUsername: String(data.gitHubUsername ?? '').trim(),
    });
  }

  return contributors;
}

async function processContributor(contributor, { force, dryRun }) {
  const { fileName, displayName, youTubeUrl, youTubeRSS, fullPath, content } = contributor;

  if (isEmpty(youTubeUrl)) {
    return { status: 'skippedNoYouTube' };
  }

  if (!force && !isEmpty(youTubeRSS)) {
    return { status: 'skippedExisting' };
  }

  console.log(`Discovering YouTube RSS for ${displayName} (${youTubeUrl})...`);

  try {
    const discovery = await discoverYouTubeRssFeed(youTubeUrl);

    if (!discovery) {
      console.log(`  No YouTube RSS feed found for ${displayName}`);
      return { status: 'notFound' };
    }

    console.log(`  Found YouTube RSS for ${displayName}: ${discovery.feedUrl}`);

    let yamlUpdated = 0;

    if (!dryRun) {
      const updatedContent = insertYouTubeRssAfterYouTubeUrl(content, discovery.feedUrl);

      if (updatedContent !== content) {
        await fs.writeFile(fullPath, updatedContent, 'utf8');
        yamlUpdated = 1;
      }
    }

    return {
      status: 'discovered',
      feedUrl: discovery.feedUrl,
      channelId: discovery.channelId,
      yamlUpdated,
    };
  } catch (error) {
    const reason = error instanceof Error ? error.message : String(error);
    console.warn(`Error processing ${fileName}: ${reason}`);
    return { status: 'error' };
  }
}

async function main() {
  const { force, dryRun, concurrency } = parseArgs(process.argv);

  if (dryRun) {
    console.log('Dry run enabled: no files will be written.');
  }

  console.log(`Processing contributors with concurrency: ${concurrency}`);

  const contributors = await loadContributors();
  const summary = {
    total: contributors.length,
    skippedNoYouTube: 0,
    skippedExisting: 0,
    discovered: 0,
    notFound: 0,
    errors: 0,
    yamlUpdated: 0,
  };

  const results = await mapWithConcurrency(
    contributors,
    concurrency,
    (contributor) => processContributor(contributor, { force, dryRun })
  );

  for (const result of results) {
    if (!result) continue;

    if (result.status === 'skippedNoYouTube') {
      summary.skippedNoYouTube += 1;
      continue;
    }

    if (result.status === 'skippedExisting') {
      summary.skippedExisting += 1;
      continue;
    }

    if (result.status === 'notFound') {
      summary.notFound += 1;
      continue;
    }

    if (result.status === 'error') {
      summary.errors += 1;
      continue;
    }

    if (result.status === 'discovered') {
      summary.discovered += 1;
      summary.yamlUpdated += result.yamlUpdated ?? 0;
    }
  }

  const contributorsForOpml = dryRun ? contributors : await loadContributors();
  const feedEntries = collectYouTubeFeedEntries(contributorsForOpml);
  const opml = buildOpml(feedEntries);

  if (!dryRun) {
    await fs.writeFile(opmlPath, opml, 'utf8');
  }

  console.log('');
  console.log('YouTube RSS discovery summary:');
  console.log(`  Contributors total: ${summary.total}`);
  console.log(`  Skipped (no youTubeUrl): ${summary.skippedNoYouTube}`);
  console.log(`  Skipped (existing youTubeRSS): ${summary.skippedExisting}`);
  console.log(`  Feeds discovered: ${summary.discovered}`);
  console.log(`  No feed found: ${summary.notFound}`);
  console.log(`  Errors: ${summary.errors}`);
  console.log(`  YAML files updated: ${summary.yamlUpdated}`);
  console.log(`  OPML entries: ${feedEntries.length}`);
  if (!dryRun) {
    console.log(`  OPML written to: ${opmlPath}`);
  }
}

await main();
