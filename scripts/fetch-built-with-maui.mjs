import { access, mkdir, writeFile } from 'node:fs/promises';
import { constants } from 'node:fs';
import { dirname, resolve } from 'node:path';

const SOURCE_URL =
  'https://raw.githubusercontent.com/jfversluis/built-with-maui/refs/heads/main/README.md';
const MD_OUTPUT_PATH = resolve(process.cwd(), 'src/content/built-with-maui/apps.md');
const TS_OUTPUT_PATH = resolve(process.cwd(), 'src/data/built-with-maui-apps.generated.ts');
const SECTION_HEADING = '## Apps built with .NET MAUI';

const forceRefresh = /^(1|true|yes)$/i.test(
  process.env.BUILT_WITH_MAUI_SYNC_FORCE_REFRESH ?? ''
);

const ICON_CONCURRENCY = 6;

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

async function hasExistingDataset() {
  try {
    await access(TS_OUTPUT_PATH, constants.F_OK);
    await access(MD_OUTPUT_PATH, constants.F_OK);
    return true;
  } catch {
    return false;
  }
}

function extractAppsSection(markdown) {
  const start = markdown.indexOf(SECTION_HEADING);
  if (start === -1) {
    throw new Error(`Could not find section heading "${SECTION_HEADING}".`);
  }
  const rest = markdown.slice(start);
  const nextHeadingMatch = rest.slice(SECTION_HEADING.length).match(/\n##\s+/);
  const end =
    nextHeadingMatch === null
      ? markdown.length
      : start + SECTION_HEADING.length + nextHeadingMatch.index + 1;
  return markdown.slice(start, end).trim();
}

function normalizeNestedLinks(markdown) {
  return markdown.replace(/\]\(\[[^\]]+\]\((https?:\/\/[^)\s]+)\)\)/g, ']($1)');
}

// ---------------------------------------------------------------------------
// Parse the markdown table into structured data
// ---------------------------------------------------------------------------

function parseTableRow(row) {
  const cells = row.split('|').map((c) => c.trim()).filter((_, i, a) => i > 0 && i < a.length);
  if (cells.length < 4) return null;

  const [rawName, description, downloads, rawLinks] = cells;

  const nameMatch = rawName.match(/\*\*(.+?)\*\*/);
  const name = nameMatch ? nameMatch[1].trim() : rawName.trim();
  if (!name) return null;

  const platforms = {};
  const linkRegex = /\[\s*<img[^>]*src="assets\/([^"./]+)\.png"[^>]*>\s*\]\((https?:\/\/[^)\s]+)\)/gi;
  let match;
  while ((match = linkRegex.exec(rawLinks)) !== null) {
    const key = match[1].toLowerCase();
    const url = match[2];
    if (['ios', 'android', 'windows', 'website', 'github'].includes(key)) {
      platforms[key] = url;
    }
  }

  return {
    name,
    description: description.trim(),
    downloads: downloads.trim().replace(/<br\s*\/?>/gi, ' · '),
    iconUrl: null,
    platforms,
  };
}

function parseAppsTable(markdown) {
  const lines = markdown.split('\n');
  const apps = [];
  let inTable = false;
  let headerSkipped = false;

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed.startsWith('|')) {
      if (inTable) {
        // Allow blank lines within the table; break on headings or non-table content
        if (trimmed === '' || trimmed.startsWith('#')) { if (trimmed.startsWith('#')) break; continue; }
        break;
      }
      continue;
    }
    inTable = true;
    if (!headerSkipped) {
      if (trimmed.includes('---')) {
        headerSkipped = true;
      }
      continue;
    }
    const app = parseTableRow(trimmed);
    if (app) apps.push(app);
  }

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
// Generate the markdown content file (backward compat)
// ---------------------------------------------------------------------------

function replaceIconLinks(markdown) {
  const iconLabelMap = {
    android: 'Android',
    ios: 'iOS',
    windows: 'Windows',
    website: 'Website',
    github: 'GitHub',
  };
  return markdown.replace(
    /\[\s*<img[^>]*src="assets\/([^"./]+)\.png"[^>]*>\s*\]\((https?:\/\/[^)\s]+)\)/gi,
    (_match, iconName, url) => {
      const key = String(iconName).toLowerCase();
      const label = iconLabelMap[key] ?? 'Link';
      return `[${label}](${url})`;
    }
  );
}

// ---------------------------------------------------------------------------
// Build the generated TypeScript file
// ---------------------------------------------------------------------------

function buildTsOutput(apps) {
  const fetchedAt = new Date().toISOString();
  const appsLiteral = JSON.stringify(apps, null, 2);

  return `// This file is generated by scripts/fetch-built-with-maui.mjs.
// Do not edit manually.

export const builtWithMauiSource = ${JSON.stringify(SOURCE_URL)};
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

  console.log('Fetching built-with-maui data…');
  const response = await fetch(SOURCE_URL);
  if (!response.ok) {
    throw new Error(`Failed to fetch markdown: ${response.status} ${response.statusText}`);
  }

  const rawMarkdown = await response.text();
  const normalized = normalizeNestedLinks(rawMarkdown);
  const appsSection = extractAppsSection(normalized);

  let apps = parseAppsTable(appsSection);
  console.log(`Parsed ${apps.length} apps from upstream table.`);

  console.log('Fetching app store icons…');
  apps = await fetchAllIcons(apps);
  const iconCount = apps.filter((a) => a.iconUrl).length;
  console.log(`Fetched icons for ${iconCount}/${apps.length} apps.`);

  await mkdir(dirname(TS_OUTPUT_PATH), { recursive: true });
  await writeFile(TS_OUTPUT_PATH, buildTsOutput(apps), 'utf8');
  console.log(`Wrote ${TS_OUTPUT_PATH}`);

  const mdAppsSection = replaceIconLinks(appsSection);
  const fetchedAt = new Date().toISOString();
  const mdOutput = `---
title: Apps built with .NET MAUI
source: ${SOURCE_URL}
fetchedAt: ${fetchedAt}
---

${mdAppsSection}
`;
  await mkdir(dirname(MD_OUTPUT_PATH), { recursive: true });
  await writeFile(MD_OUTPUT_PATH, mdOutput, 'utf8');
  console.log(`Wrote ${MD_OUTPUT_PATH}`);
}

run().catch((error) => {
  console.error(error instanceof Error ? error.message : String(error));
  process.exit(1);
});
