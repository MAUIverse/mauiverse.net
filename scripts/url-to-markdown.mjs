#!/usr/bin/env node

import fs from 'node:fs/promises';
import path from 'node:path';
import TurndownService from 'turndown';

function toSafeFileName(input) {
  return input
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 80) || 'page';
}

function getTimeStamp() {
  return new Date().toISOString().replace(/[:.]/g, '-');
}

async function downloadUrlToMarkdown(url) {
  const parsedUrl = new URL(url);
  const response = await fetch(parsedUrl.toString());
  if (!response.ok) {
    throw new Error(`HTTP ${response.status} ${response.statusText}`);
  }

  const html = await response.text();
  const tempRoot = path.resolve(process.cwd(), '.tmp');
  const folderName = `${toSafeFileName(parsedUrl.hostname)}-${getTimeStamp()}`;
  const outputDir = path.join(tempRoot, folderName);

  await fs.mkdir(outputDir, { recursive: true });

  const baseName = toSafeFileName(parsedUrl.pathname.split('/').filter(Boolean).pop() || parsedUrl.hostname);
  const htmlPath = path.join(outputDir, `${baseName}.html`);
  const markdownPath = path.join(outputDir, `${baseName}.md`);

  await fs.writeFile(htmlPath, html, 'utf8');

  const turndown = new TurndownService({
    headingStyle: 'atx',
    codeBlockStyle: 'fenced',
    bulletListMarker: '-',
    emDelimiter: '_'
  });

  turndown.remove(['script', 'style', 'noscript', 'iframe']);
  const markdown = turndown.turndown(html).trim();

  await fs.writeFile(markdownPath, `${markdown}\n`, 'utf8');
  return markdownPath;
}

async function main() {
  const inputUrl = process.argv[2];
  if (!inputUrl) {
    throw new Error('Usage: npm run url:to-markdown -- <url>');
  }

  const markdownPath = await downloadUrlToMarkdown(inputUrl);
  console.log(markdownPath);
  return markdownPath;
}

main().catch((error) => {
  console.error('Failed to download/convert URL:', error);
  process.exit(1);
});
