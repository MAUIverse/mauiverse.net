import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';

const SOURCE_URL =
  'https://raw.githubusercontent.com/jfversluis/built-with-maui/refs/heads/main/README.md';
const OUTPUT_PATH = resolve(process.cwd(), 'src/content/built-with-maui/apps.md');
const SECTION_HEADING = '## Apps built with .NET MAUI';

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
  // Upstream occasionally contains nested markdown links in a cell:
  // [label]([https://foo](https://bar)) -> [label](https://bar)
  return markdown.replace(/\]\(\[[^\]]+\]\((https?:\/\/[^)\s]+)\)\)/g, ']($1)');
}

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

async function run() {
  const response = await fetch(SOURCE_URL);
  if (!response.ok) {
    throw new Error(`Failed to fetch markdown: ${response.status} ${response.statusText}`);
  }

  const markdown = await response.text();
  const appsSection = replaceIconLinks(normalizeNestedLinks(extractAppsSection(markdown)));
  const fetchedAt = new Date().toISOString();

  const output = `---
title: Apps built with .NET MAUI
source: ${SOURCE_URL}
fetchedAt: ${fetchedAt}
---

${appsSection}
`;

  await mkdir(dirname(OUTPUT_PATH), { recursive: true });
  await writeFile(OUTPUT_PATH, output, 'utf8');
  console.log(`Wrote ${OUTPUT_PATH}`);
}

run().catch((error) => {
  console.error(error instanceof Error ? error.message : String(error));
  process.exit(1);
});
