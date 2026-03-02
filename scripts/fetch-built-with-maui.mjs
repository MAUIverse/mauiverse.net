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
  // Split on | but ignore the leading/trailing empties
  const cells = row.split('|').map((c) => c.trim()).filter((_, i, a) => i > 0 && i < a.length);
  if (cells.length < 4) return null;

  const [rawName, description, downloads, rawLinks] = cells;

  // Extract bold app name: **Name**
  const nameMatch = rawName.match(/\*\*(.+?)\*\*/);
  const name = nameMatch ? nameMatch[1].trim() : rawName.trim();
  if (!name) return null;

  // Parse platform links from the "More information" cell
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
    screenshots: [],
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
      if (inTable) break; // end of table
      continue;
    }
    inTable = true;
    // Skip header row and separator row
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

async function fetchIosData(appId) {
  try {
    const res = await fetch(`https://itunes.apple.com/lookup?id=${appId}`, {
      signal: AbortSignal.timeout(8000),
    });
    if (!res.ok) return { icon: null, screenshots: [] };
    const data = await res.json();
    if (data.results && data.results.length > 0) {
      const r = data.results[0];
      const screenshots = (r.screenshotUrls && r.screenshotUrls.length > 0)
        ? r.screenshotUrls
        : (r.ipadScreenshotUrls ?? []);
      return {
        icon: r.artworkUrl512 ?? r.artworkUrl100 ?? null,
        screenshots,
      };
    }
  } catch {
    // Silently skip
  }
  return { icon: null, screenshots: [] };
}

async function fetchGooglePlayData(packageId) {
  try {
    const res = await fetch(
      `https://play.google.com/store/apps/details?id=${packageId}&hl=en`,
      {
        signal: AbortSignal.timeout(10000),
        headers: { 'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36' },
      }
    );
    if (!res.ok) return { icon: null, screenshots: [] };
    const html = await res.text();

    // Extract icon from og:image meta tag
    const ogMatch = html.match(/<meta\s+property="og:image"\s+content="([^"]+)"/i)
      ?? html.match(/<meta\s+content="([^"]+)"\s+property="og:image"/i);
    const icon = ogMatch ? ogMatch[1] : null;

    // Extract screenshot URLs from srcset attributes
    // Portrait phone screenshots use =w480-h960, landscape use =w1052-h592
    const screenshotSet = new Set();
    const srcsetRegex = /srcset="(https:\/\/play-lh\.googleusercontent\.com\/[^=]+)=w(?:480-h960|1052-h592)\b/g;
    let match;
    while ((match = srcsetRegex.exec(html)) !== null) {
      screenshotSet.add(match[1]);
    }
    // Remove the icon base URL from screenshots (it often appears in both)
    const iconBase = icon?.replace(/=[^=]*$/, '');
    if (iconBase) screenshotSet.delete(iconBase);
    // Re-request at a good display size and deduplicate
    const screenshots = [...screenshotSet].map((base) => base + '=w600-h1200');

    return { icon, screenshots };
  } catch {
    // Silently skip
  }
  return { icon: null, screenshots: [] };
}

async function fetchStoreDataForApp(app) {
  let icon = null;
  let screenshots = [];

  // Try iOS first (iTunes API is more reliable for icons + screenshots)
  if (app.platforms.ios) {
    const appId = extractIosAppId(app.platforms.ios);
    if (appId) {
      const iosData = await fetchIosData(appId);
      if (iosData.icon) icon = iosData.icon;
      if (iosData.screenshots.length > 0) screenshots = iosData.screenshots;
    }
  }

  // Try Google Play for missing icon or screenshots
  if (app.platforms.android && (!icon || screenshots.length === 0)) {
    const packageId = extractGooglePlayPackage(app.platforms.android);
    if (packageId) {
      const gpData = await fetchGooglePlayData(packageId);
      if (!icon && gpData.icon) icon = gpData.icon;
      if (screenshots.length === 0 && gpData.screenshots.length > 0) screenshots = gpData.screenshots;
    }
  }

  return { icon, screenshots };
}

async function fetchAllStoreData(apps) {
  // Process in batches to avoid overwhelming APIs
  const results = [...apps];
  for (let i = 0; i < results.length; i += ICON_CONCURRENCY) {
    const batch = results.slice(i, i + ICON_CONCURRENCY);
    const storeData = await Promise.all(batch.map((app) => fetchStoreDataForApp(app)));
    for (let j = 0; j < batch.length; j++) {
      results[i + j] = {
        ...results[i + j],
        iconUrl: storeData[j].icon,
        screenshots: storeData[j].screenshots,
      };
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
  screenshots: string[];
  platforms: {
    ios?: string;
    android?: string;
    windows?: string;
    website?: string;
    github?: string;
  };
};

export const builtWithMauiApps: BuiltWithMauiApp[] = ${appsLiteral} as const;
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

  // Parse structured data from the raw table (before icon replacement)
  let apps = parseAppsTable(appsSection);
  console.log(`Parsed ${apps.length} apps from upstream table.`);

  // Fetch icons and screenshots from app stores
  console.log('Fetching app store data (icons + screenshots)…');
  apps = await fetchAllStoreData(apps);
  const iconCount = apps.filter((a) => a.iconUrl).length;
  const screenshotCount = apps.filter((a) => a.screenshots.length > 0).length;
  console.log(`Fetched icons for ${iconCount}/${apps.length} apps, screenshots for ${screenshotCount}/${apps.length} apps.`);

  // Write generated TypeScript data
  await mkdir(dirname(TS_OUTPUT_PATH), { recursive: true });
  await writeFile(TS_OUTPUT_PATH, buildTsOutput(apps), 'utf8');
  console.log(`Wrote ${TS_OUTPUT_PATH}`);

  // Write markdown content file (backward compatibility)
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
