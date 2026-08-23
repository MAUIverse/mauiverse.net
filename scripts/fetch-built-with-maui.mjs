import { access, mkdir, writeFile } from 'node:fs/promises';
import { constants } from 'node:fs';
import { dirname, resolve } from 'node:path';

const CONTENTS_API_URL =
  'https://api.github.com/repos/jfversluis/built-with-maui/contents/data/apps';
const SOURCE_LABEL =
  'https://github.com/jfversluis/built-with-maui/tree/main/data/apps';
const TS_OUTPUT_PATH = resolve(process.cwd(), 'src/data/built-with-maui-apps.generated.ts');

const forceRefresh = /^(1|true|yes)$/i.test(
  process.env.BUILT_WITH_MAUI_SYNC_FORCE_REFRESH ?? ''
);

const FETCH_CONCURRENCY = 6;
const ICON_CONCURRENCY = 6;

const VALID_PLATFORMS = new Set(['ios', 'android', 'windows', 'website', 'github', 'macos']);

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

async function hasExistingDataset() {
  try {
    await access(TS_OUTPUT_PATH, constants.F_OK);
    return true;
  } catch {
    return false;
  }
}

function githubHeaders() {
  const headers = {
    Accept: 'application/vnd.github+json',
    'User-Agent': 'mauiverse-net-built-with-maui-sync',
  };
  if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  }
  return headers;
}

// ---------------------------------------------------------------------------
// Load app data from upstream JSON files
// ---------------------------------------------------------------------------

async function listAppFiles() {
  const response = await fetch(CONTENTS_API_URL, {
    headers: githubHeaders(),
    signal: AbortSignal.timeout(15000),
  });
  if (!response.ok) {
    throw new Error(
      `Failed to list app JSON files: ${response.status} ${response.statusText}`
    );
  }
  const entries = await response.json();
  if (!Array.isArray(entries)) {
    throw new Error('Unexpected GitHub contents API response (expected an array).');
  }
  return entries
    .filter((entry) => entry.type === 'file' && typeof entry.name === 'string' && entry.name.endsWith('.json'))
    .map((entry) => entry.download_url)
    .filter(Boolean);
}

async function fetchAppJson(url) {
  const response = await fetch(url, {
    signal: AbortSignal.timeout(15000),
    headers: { 'User-Agent': 'mauiverse-net-built-with-maui-sync' },
  });
  if (!response.ok) {
    throw new Error(`Failed to fetch ${url}: ${response.status} ${response.statusText}`);
  }
  return response.json();
}

function mapAppJson(json) {
  if (!json || typeof json.name !== 'string' || !json.name.trim()) {
    return null;
  }

  const platforms = {};
  for (const link of json.links ?? []) {
    const platform = typeof link?.platform === 'string' ? link.platform.toLowerCase() : '';
    const url = typeof link?.url === 'string' ? link.url.trim() : '';
    if (VALID_PLATFORMS.has(platform) && /^https?:\/\//i.test(url)) {
      platforms[platform] = url;
    }
  }

  return {
    name: json.name.trim(),
    description: typeof json.description === 'string' ? json.description.trim() : '',
    downloads: typeof json.users === 'string' ? json.users.trim() : '',
    iconUrl: null,
    platforms,
  };
}

async function fetchAllApps(downloadUrls) {
  const apps = [];
  for (let i = 0; i < downloadUrls.length; i += FETCH_CONCURRENCY) {
    const batch = downloadUrls.slice(i, i + FETCH_CONCURRENCY);
    const results = await Promise.all(batch.map((url) => fetchAppJson(url)));
    for (const json of results) {
      const app = mapAppJson(json);
      if (app) apps.push(app);
    }
  }
  apps.sort((a, b) => a.name.localeCompare(b.name));
  return apps;
}

// ---------------------------------------------------------------------------
// Fetch app icons from stores
// ---------------------------------------------------------------------------

function extractIosAppId(url) {
  const match = url.match(/\/id(\d+)/);
  return match ? match[1] : null;
}

function extractGooglePlayPackage(url) {
  const match = url.match(/[?&]id=([^&]+)/);
  return match ? match[1] : null;
}

async function fetchIosIcon(iosUrl) {
  try {
    // Try scraping the App Store web page for AppIcon
    const res = await fetch(iosUrl, {
      signal: AbortSignal.timeout(10000),
      headers: { 'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36' },
    });
    if (!res.ok) return null;
    const html = await res.text();
    const iconBaseMatch = html.match(
      /https:\/\/is\d+-ssl\.mzstatic\.com\/image\/thumb\/[^"\\}\s)]*?AppIcon[^"\\}\s)]*?\.(png|jpg)\//i
    );
    if (iconBaseMatch) return iconBaseMatch[0] + '512x512bb.jpg';

    // Fallback: iTunes API
    const appId = extractIosAppId(iosUrl);
    if (appId) {
      const apiRes = await fetch(`https://itunes.apple.com/lookup?id=${appId}`, {
        signal: AbortSignal.timeout(8000),
      });
      if (apiRes.ok) {
        const data = await apiRes.json();
        const result = data.results?.[0];
        if (result) return result.artworkUrl512 || result.artworkUrl100 || null;
      }
    }
  } catch {
    // Silently skip
  }
  return null;
}

async function fetchGooglePlayIcon(packageId) {
  try {
    const res = await fetch(
      `https://play.google.com/store/apps/details?id=${packageId}&hl=en`,
      {
        signal: AbortSignal.timeout(10000),
        headers: { 'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36' },
      }
    );
    if (!res.ok) return null;
    const html = await res.text();
    const ogMatch = html.match(/<meta\s+property="og:image"\s+content="([^"]+)"/i)
      ?? html.match(/<meta\s+content="([^"]+)"\s+property="og:image"/i);
    return ogMatch ? ogMatch[1] : null;
  } catch {
    // Silently skip
  }
  return null;
}

async function fetchWindowsStoreIcon(windowsUrl) {
  try {
    const res = await fetch(windowsUrl, {
      signal: AbortSignal.timeout(10000),
      redirect: 'follow',
      headers: { 'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36' },
    });
    if (!res.ok) return null;
    const html = await res.text();
    const iconMatch = html.match(/"iconUrl":"(https:\/\/store-images\.s-microsoft\.com\/image\/[^"]+)"/);
    return iconMatch ? iconMatch[1] : null;
  } catch {
    // Silently skip
  }
  return null;
}

async function fetchIconForApp(app) {
  let icon = null;

  if (app.platforms.ios) {
    icon = await fetchIosIcon(app.platforms.ios);
  }

  if (!icon && app.platforms.android) {
    const packageId = extractGooglePlayPackage(app.platforms.android);
    if (packageId) icon = await fetchGooglePlayIcon(packageId);
  }

  if (!icon && app.platforms.windows && /apps\.microsoft\.com|microsoft\.com\/store/i.test(app.platforms.windows)) {
    icon = await fetchWindowsStoreIcon(app.platforms.windows);
  }

  return icon;
}

async function fetchAllIcons(apps) {
  const results = [...apps];
  for (let i = 0; i < results.length; i += ICON_CONCURRENCY) {
    const batch = results.slice(i, i + ICON_CONCURRENCY);
    const icons = await Promise.all(batch.map((app) => fetchIconForApp(app)));
    for (let j = 0; j < batch.length; j++) {
      results[i + j] = { ...results[i + j], iconUrl: icons[j] };
    }
    if (i + ICON_CONCURRENCY < results.length) {
      await new Promise((r) => setTimeout(r, 200));
    }
  }
  return results;
}

// ---------------------------------------------------------------------------
// Build the generated TypeScript file
// ---------------------------------------------------------------------------

function buildTsOutput(apps) {
  const fetchedAt = new Date().toISOString();
  const appsLiteral = JSON.stringify(apps, null, 2);

  return `// This file is generated by scripts/fetch-built-with-maui.mjs.
// Do not edit manually.

export const builtWithMauiSource = ${JSON.stringify(SOURCE_LABEL)};
export const builtWithMauiFetchedAt = ${JSON.stringify(fetchedAt)};

export type BuiltWithMauiApp = {
  name: string;
  description: string;
  downloads: string;
  iconUrl: string | null;
  platforms: {
    ios?: string;
    android?: string;
    windows?: string;
    website?: string;
    github?: string;
  };
};

export const builtWithMauiApps: BuiltWithMauiApp[] = ${appsLiteral};
`;
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

async function run() {
  if (!forceRefresh && (await hasExistingDataset())) {
    console.log(`Skipping fetch: ${TS_OUTPUT_PATH} already exists. Set BUILT_WITH_MAUI_SYNC_FORCE_REFRESH=true to re-fetch.`);
    return;
  }

  console.log('Fetching built-with-maui app JSON files…');
  const downloadUrls = await listAppFiles();
  console.log(`Found ${downloadUrls.length} app JSON files.`);

  let apps = await fetchAllApps(downloadUrls);
  console.log(`Parsed ${apps.length} apps from upstream JSON.`);

  console.log('Fetching app store icons…');
  apps = await fetchAllIcons(apps);
  const iconCount = apps.filter((a) => a.iconUrl).length;
  console.log(`Fetched icons for ${iconCount}/${apps.length} apps.`);

  await mkdir(dirname(TS_OUTPUT_PATH), { recursive: true });
  await writeFile(TS_OUTPUT_PATH, buildTsOutput(apps), 'utf8');
  console.log(`Wrote ${TS_OUTPUT_PATH}`);
}

run().catch((error) => {
  console.error(error instanceof Error ? error.message : String(error));
  process.exit(1);
});
