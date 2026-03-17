import { readdir, readFile, mkdir, writeFile } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OWNER = 'dotnet';
const REPO = 'maui';
const PER_PAGE = 100;
const API_BASE = `https://api.github.com/repos/${OWNER}/${REPO}/releases`;
const CONTENT_DIR = resolve(__dirname, '../src/content/maui-release');
const CONTRIBUTORS_DIR = resolve(__dirname, '../src/content/community-contributors');

const token =
  process.env.MAUI_CONTRIBUTORS_GITHUB_TOKEN ?? process.env.GITHUB_TOKEN ?? process.env.GH_TOKEN;

const BOT_LOGINS = new Set(
  ['copilot', 'github-actions', 'dotnet-maestro', 'dependabot', 'greenkeeper'].map((s) =>
    s.toLowerCase()
  )
);

function isBotOrExcluded(login) {
  const lower = String(login).toLowerCase();
  if (BOT_LOGINS.has(lower)) return true;
  if (/\[bot\]$/i.test(lower)) return true;
  if (/(?:^|[-_])bot(?:$|[-_])/i.test(lower)) return true;
  return false;
}

function parseYamlValue(rawValue) {
  const value = String(rawValue).trim();
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
  for (const line of content.split(/\r?\n/)) {
    const trimmed = line.trim();
    if (trimmed === '' || trimmed.startsWith('#')) continue;
    const match = line.match(/^([A-Za-z0-9_]+):\s*(.*)$/);
    if (!match) continue;
    const [, key, rawValue] = match;
    record[key] = parseYamlValue(rawValue);
  }
  return record;
}

async function loadAuthorMap() {
  const files = (await readdir(CONTRIBUTORS_DIR))
    .filter((n) => n.endsWith('.yaml') || n.endsWith('.yml'));
  const authorKeyToDisplayName = {};
  for (const file of files) {
    const content = await readFile(join(CONTRIBUTORS_DIR, file), 'utf8');
    const data = parseSimpleYaml(content);
    const gitHubUsername = data.gitHubUsername;
    const displayName = data.displayName;
    if (gitHubUsername && displayName) {
      authorKeyToDisplayName[gitHubUsername] = displayName;
    }
  }
  return authorKeyToDisplayName;
}

function createHeaders() {
  const headers = {
    Accept: 'application/vnd.github+json',
    'User-Agent': 'mauiverse.net release sync',
    'X-GitHub-Api-Version': '2022-11-28',
  };
  if (token && token.trim().length > 0) {
    headers.Authorization = `Bearer ${token.trim()}`;
  }
  return headers;
}

async function fetchReleasesPage(page) {
  const url = `${API_BASE}?per_page=${PER_PAGE}&page=${page}`;
  const res = await fetch(url, { headers: createHeaders() });
  if (!res.ok) {
    throw new Error(`Failed to fetch releases page ${page}: ${res.status} ${res.statusText}`);
  }
  const data = await res.json();
  if (!Array.isArray(data)) {
    throw new Error('Unexpected response payload from GitHub releases API.');
  }
  return data;
}

async function fetchAllReleases() {
  const all = [];
  for (let page = 1; ; page += 1) {
    const pageData = await fetchReleasesPage(page);
    if (pageData.length === 0) break;
    all.push(...pageData);
    if (pageData.length < PER_PAGE) break;
  }
  return all;
}

const AT_MENTION_REGEX = /@([a-zA-Z0-9_-]+)/g;

function parseContributorsFromBody(body, authorKeyToDisplayName) {
  const seen = new Set();
  const contributors = [];
  if (!body || typeof body !== 'string') return contributors;
  let m;
  AT_MENTION_REGEX.lastIndex = 0;
  while ((m = AT_MENTION_REGEX.exec(body)) !== null) {
    const username = m[1];
    const lower = username.toLowerCase();
    if (lower === 'copilot') continue;
    if (isBotOrExcluded(username)) continue;
    if (seen.has(lower)) continue;
    seen.add(lower);
    contributors.push(username);
  }
  return contributors;
}

function transformBodyLinks(body, authorKeyToDisplayName) {
  if (!body || typeof body !== 'string') return body;
  return body.replace(AT_MENTION_REGEX, (match, username) => {
    const lower = username.toLowerCase();
    if (lower === 'copilot') {
      return match;
    }
    if (isBotOrExcluded(username)) return match;
    const displayName = authorKeyToDisplayName[username];
    if (displayName) {
      return `[${displayName}](/community-contributors/${encodeURIComponent(username)}/)`;
    }
    return `[@${username}](/repo-contributors/maui/?q=${encodeURIComponent(username)})`;
  });
}

function sanitizeTagForFilename(tag) {
  return String(tag).replace(/\//g, '-');
}

function escapeYamlString(s) {
  if (s.includes('\n') || s.includes('"') || s.includes("'") || s.includes(':')) {
    return JSON.stringify(s);
  }
  return s;
}

async function run() {
  if (!token) {
    console.warn(
      'No GitHub token in MAUI_CONTRIBUTORS_GITHUB_TOKEN, GITHUB_TOKEN, or GH_TOKEN; continuing unauthenticated (lower rate limit).'
    );
  }

  const authorKeyToDisplayName = await loadAuthorMap();
  console.log(`Loaded ${Object.keys(authorKeyToDisplayName).length} author profiles.`);

  const releases = await fetchAllReleases();
  console.log(`Fetched ${releases.length} releases.`);

  await mkdir(CONTENT_DIR, { recursive: true });

  for (const release of releases) {
    const tag = release.tag_name;
    const name = (release.name != null && String(release.name).trim() !== '') ? String(release.name).trim() : tag;
    const body = release.body ?? '';
    const htmlUrl = release.html_url ?? `https://github.com/${OWNER}/${REPO}/releases/tag/${tag}`;
    const publishedAt = release.published_at || release.created_at;
    const date = publishedAt ? new Date(publishedAt).toISOString().slice(0, 10) : new Date().toISOString().slice(0, 10);
    const prerelease = Boolean(release.prerelease);

    const contributors = parseContributorsFromBody(body, authorKeyToDisplayName);
    const processedBody = transformBodyLinks(body, authorKeyToDisplayName);

    const contributorsYaml =
      contributors.length === 0
        ? 'contributors: []'
        : 'contributors:\n' + contributors.map((c) => `  - ${c}`).join('\n');
    const frontmatter = [
      '---',
      `title: ${escapeYamlString(name)}`,
      `link: ${JSON.stringify(htmlUrl)}`,
      `date: ${date}`,
      contributorsYaml,
      `prerelease: ${prerelease}`,
      'contentType: "release"',
      '---',
      '',
      processedBody.trimEnd(),
      '',
    ].join('\n');

    const filename = `${sanitizeTagForFilename(tag)}.md`;
    const filepath = join(CONTENT_DIR, filename);
    await writeFile(filepath, frontmatter, 'utf8');
  }

  console.log(`Wrote ${releases.length} release files to ${CONTENT_DIR}.`);
}

run().catch((err) => {
  console.error(err instanceof Error ? err.message : String(err));
  process.exit(1);
});
