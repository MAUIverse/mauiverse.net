#!/usr/bin/env node
// scripts/discover-rss-feeds.mjs
// Usage: node scripts/discover-rss-feeds.mjs [--force] [--dry-run] [--concurrency N]
/**
 * Script: discover-rss-feeds
 * Purpose: Discover blog RSS/Atom feeds for community contributors, write feed URLs
 *          back into YAML, save downloaded feeds, and generate contributors.opml.
 */

import { promises as fs } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const contributorsDir = path.resolve(__dirname, '../src/content/community-contributors');
const projectRoot = path.resolve(__dirname, '..');
const feedsDownloadDir = path.resolve(projectRoot, 'tmp/rss-feeds');
const opmlPath = path.resolve(projectRoot, 'contributors.opml');

const REQUEST_DELAY_MS = 100;
const FETCH_TIMEOUT_MS = 5_000;
const DEFAULT_CONCURRENCY = 8;
const USER_AGENT = 'mauiverse.net RSS feed discovery';

const SOCIAL_HOST_DENYLIST = [
  'linkedin.com',
  'twitter.com',
  'x.com',
  'twitch.tv',
  'stackoverflow.com',
  'bento.me',
  'mas.to',
  'mastodon.social',
  'wixsite.com',
  'instagram.com',
  'tiktok.com',
  'youtube.com',
  'youtu.be',
  'facebook.com',
  'bsky.app',
];

const GENERIC_FEED_PATHS = [
  '/feed',
  '/feed/',
  '/rss',
  '/rss.xml',
  '/feed.xml',
  '/atom.xml',
  '/index.xml',
  '/feed/rss',
  '/rss/feed',
  '/blog/feed',
  '/blog/rss.xml',
];

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

function getHostname(url) {
  try {
    return new URL(normalizeUrl(url)).hostname.toLowerCase();
  } catch {
    return '';
  }
}

function isSocialOrNonBlogHost(url) {
  const host = getHostname(url);
  if (host.length === 0) return true;

  return SOCIAL_HOST_DENYLIST.some((denied) => host === denied || host.endsWith(`.${denied}`));
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

function dedupePreserveOrder(urls) {
  const seen = new Set();
  const result = [];

  for (const url of urls) {
    const normalized = normalizeUrl(url);
    if (normalized.length === 0 || seen.has(normalized)) continue;
    seen.add(normalized);
    result.push(normalized);
  }

  return result;
}

function getUrlParts(blogUrl) {
  try {
    const url = new URL(normalizeUrl(blogUrl));
    const origin = url.origin;
    const pathname = url.pathname.replace(/\/+$/, '') || '';
    const host = url.hostname.toLowerCase();
    const basePath = pathname.length > 0 ? `${origin}${pathname}` : origin;

    return { url, origin, pathname, host, basePath };
  } catch {
    return null;
  }
}

function buildPlatformSpecificCandidates(blogUrl) {
  const parts = getUrlParts(blogUrl);
  if (!parts) return [];

  const { url, origin, pathname, host, basePath } = parts;
  const candidates = [];

  if (host === 'dev.to') {
    const segments = pathname.split('/').filter(Boolean);
    if (segments.length > 0) {
      candidates.push(`${origin}/feed/${segments[0]}`);
    }
  }

  if (host === 'medium.com' || host.endsWith('.medium.com')) {
    const segments = pathname.split('/').filter(Boolean);
    if (segments[0]?.startsWith('@')) {
      candidates.push(`https://medium.com/feed/${segments[0]}`);
    } else if (host !== 'medium.com') {
      const subdomain = host.replace(/\.medium\.com$/, '');
      candidates.push(`https://medium.com/feed/${subdomain}`);
    }
  }

  if (host.endsWith('.hashnode.dev')) {
    candidates.push(`${origin}/rss.xml`);
  }

  if (host.endsWith('.wordpress.com') || host.includes('wordpress')) {
    candidates.push(`${origin}/feed/`);
  }

  if (host.endsWith('.github.io')) {
    candidates.push(`${basePath}/feed.xml`);
    candidates.push(`${basePath}/index.xml`);
    candidates.push(`${basePath}/atom.xml`);
    if (pathname.length === 0) {
      candidates.push(`${origin}/feed.xml`);
      candidates.push(`${origin}/index.xml`);
      candidates.push(`${origin}/atom.xml`);
    }
  }

  return candidates;
}

function buildGenericCandidates(blogUrl) {
  const parts = getUrlParts(blogUrl);
  if (!parts) return [];

  const { origin, basePath } = parts;
  const candidates = [normalizeUrl(blogUrl)];

  for (const feedPath of GENERIC_FEED_PATHS) {
    candidates.push(`${origin}${feedPath}`);
    if (basePath !== origin) {
      candidates.push(`${basePath}${feedPath}`);
    }
  }

  return candidates;
}

function extractAutodiscoveryFeeds(html, pageUrl) {
  const feeds = [];
  const linkTagPattern =
    /<link\b[^>]*\brel=["']alternate["'][^>]*>/gi;
  const matches = html.match(linkTagPattern) ?? [];

  for (const tag of matches) {
    const typeMatch = tag.match(/\btype=["']([^"']+)["']/i);
    const hrefMatch = tag.match(/\bhref=["']([^"']+)["']/i);
    if (!typeMatch || !hrefMatch) continue;

    const type = typeMatch[1].toLowerCase();
    if (
      !type.includes('rss') &&
      !type.includes('atom') &&
      type !== 'application/xml' &&
      type !== 'text/xml'
    ) {
      continue;
    }

    try {
      feeds.push(new URL(hrefMatch[1], pageUrl).href);
    } catch {
      // ignore invalid href
    }
  }

  return dedupePreserveOrder(feeds);
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

async function fetchResource(url) {
  return fetchWithTimeout(url);
}

function validateFeedResponse(response) {
  if (!response.ok || response.status !== 200) {
    return false;
  }

  const hasFeedContentType = looksLikeFeedContentType(response.contentType);
  const hasFeedBody = looksLikeFeedBody(response.body);

  return hasFeedContentType || hasFeedBody;
}

async function probeFeedUrl(feedUrl) {
  const response = await fetchResource(feedUrl);
  await sleep(REQUEST_DELAY_MS);

  if (!validateFeedResponse(response)) {
    return null;
  }

  return {
    feedUrl: response.finalUrl || feedUrl,
    body: response.body,
  };
}

async function discoverFeedForBlog(blogUrl) {
  const platformCandidates = buildPlatformSpecificCandidates(blogUrl);
  let autodiscoveryCandidates = [];

  try {
    const pageResponse = await fetchResource(blogUrl);
    await sleep(REQUEST_DELAY_MS);

    if (pageResponse.ok && pageResponse.contentType.toLowerCase().includes('html')) {
      autodiscoveryCandidates = extractAutodiscoveryFeeds(pageResponse.body, pageResponse.finalUrl || blogUrl);
    } else if (validateFeedResponse(pageResponse)) {
      return {
        feedUrl: pageResponse.finalUrl || blogUrl,
        body: pageResponse.body,
        source: 'direct-blog-url',
      };
    }
  } catch (error) {
    const reason = error instanceof Error ? error.message : String(error);
    console.warn(`Failed to fetch blog page ${blogUrl}: ${reason}`);
  }

  const genericCandidates = buildGenericCandidates(blogUrl);
  const candidates = dedupePreserveOrder([
    ...platformCandidates,
    ...autodiscoveryCandidates,
    ...genericCandidates,
  ]);

  for (const candidate of candidates) {
    try {
      const result = await probeFeedUrl(candidate);
      if (result) {
        return {
          ...result,
          source: 'candidate-probe',
        };
      }
    } catch (error) {
      const reason = error instanceof Error ? error.message : String(error);
      console.warn(`Failed probing ${candidate}: ${reason}`);
    }
  }

  return null;
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
        `htmlUrl="${escapeXmlAttribute(entry.blogUrl)}"`,
      ].join(' ');

      return `    <outline ${attrs} />`;
    })
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<opml version="2.0">
  <head>
    <title>Mauiverse Community Blogs</title>
    <dateCreated>${new Date().toUTCString()}</dateCreated>
  </head>
  <body>
${outlines}
  </body>
</opml>
`;
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
      blogUrl: String(data.blogUrl ?? '').trim(),
      blogRSSFeedUrl: String(data.blogRSSFeedUrl ?? '').trim(),
    });
  }

  return contributors;
}

async function processContributor(contributor, { force, dryRun }) {
  const { fileName, slug, displayName, blogUrl, blogRSSFeedUrl, fullPath, content } = contributor;

  if (isEmpty(blogUrl)) {
    return { status: 'skippedNoBlog' };
  }

  if (isSocialOrNonBlogHost(blogUrl)) {
    console.log(`Skipped ${fileName}: social/non-blog host (${blogUrl})`);
    return { status: 'skippedSocial' };
  }

  if (!force && !isEmpty(blogRSSFeedUrl)) {
    return {
      status: 'skippedExisting',
      feedEntry: {
        displayName,
        blogUrl: normalizeUrl(blogUrl),
        feedUrl: normalizeUrl(blogRSSFeedUrl),
      },
    };
  }

  console.log(`Discovering feed for ${displayName} (${blogUrl})...`);

  try {
    const discovery = await discoverFeedForBlog(normalizeUrl(blogUrl));

    if (!discovery) {
      console.log(`  No feed found for ${displayName}`);
      return { status: 'notFound' };
    }

    console.log(`  Found feed for ${displayName}: ${discovery.feedUrl}`);

    const normalizedBlogUrl = normalizeUrl(blogUrl);
    const normalizedFeedUrl = normalizeUrl(discovery.feedUrl);
    const feedEntry = {
      displayName,
      blogUrl: normalizedBlogUrl,
      feedUrl: normalizedFeedUrl,
    };

    let yamlUpdated = 0;

    if (!dryRun) {
      const feedFilePath = path.join(feedsDownloadDir, `${slug}.xml`);
      await fs.writeFile(feedFilePath, discovery.body, 'utf8');

      if (isEmpty(blogRSSFeedUrl) || force) {
        const updatedContent = applyUpdates(content, {
          blogRSSFeedUrl: normalizedFeedUrl,
        });

        if (updatedContent !== content) {
          await fs.writeFile(fullPath, updatedContent, 'utf8');
          yamlUpdated = 1;
        }
      }
    }

    return { status: 'discovered', feedEntry, yamlUpdated };
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

  await fs.mkdir(feedsDownloadDir, { recursive: true });

  const contributors = await loadContributors();
  const summary = {
    total: contributors.length,
    skippedNoBlog: 0,
    skippedSocial: 0,
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

  const feedEntries = [];

  for (const result of results) {
    if (!result) continue;

    if (result.status === 'skippedNoBlog') {
      summary.skippedNoBlog += 1;
      continue;
    }

    if (result.status === 'skippedSocial') {
      summary.skippedSocial += 1;
      continue;
    }

    if (result.status === 'skippedExisting') {
      summary.skippedExisting += 1;
      if (result.feedEntry) feedEntries.push(result.feedEntry);
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
      if (result.feedEntry) feedEntries.push(result.feedEntry);
    }
  }

  const opml = buildOpml(feedEntries);

  if (!dryRun) {
    await fs.writeFile(opmlPath, opml, 'utf8');
  }

  console.log('');
  console.log('RSS discovery summary:');
  console.log(`  Contributors total: ${summary.total}`);
  console.log(`  Skipped (no blogUrl): ${summary.skippedNoBlog}`);
  console.log(`  Skipped (social/non-blog): ${summary.skippedSocial}`);
  console.log(`  Skipped (existing feed URL): ${summary.skippedExisting}`);
  console.log(`  Feeds discovered: ${summary.discovered}`);
  console.log(`  No feed found: ${summary.notFound}`);
  console.log(`  Errors: ${summary.errors}`);
  console.log(`  YAML files updated: ${summary.yamlUpdated}`);
  console.log(`  OPML entries: ${feedEntries.length}`);
  if (!dryRun) {
    console.log(`  OPML written to: ${opmlPath}`);
    console.log(`  Feed downloads: ${feedsDownloadDir}`);
  }
}

await main();
