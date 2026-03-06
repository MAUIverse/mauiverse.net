#!/usr/bin/env node
// scripts/create-community-standup-item.mjs
/**
 * Script: create-community-standup-item
 * Purpose: Create a new .NET MAUI Community Standup markdown file.
 *
 * Usage:
 *   npm run create:community-standup-item -- <date> <youtubeUrl>
 *
 * Example:
 *   npm run create:community-standup-item -- 2026-03-06 https://www.youtube.com/watch?v=abc123XYZ
 */

import fs from 'fs';
import path from 'path';

function parseDateInput(input) {
  if (!input || !/^\d{4}-\d{2}-\d{2}$/.test(input)) return null;

  const [yearStr, monthStr, dayStr] = input.split('-');
  const year = Number(yearStr);
  const month = Number(monthStr);
  const day = Number(dayStr);
  const utcDate = new Date(Date.UTC(year, month - 1, day));

  if (
    utcDate.getUTCFullYear() !== year ||
    utcDate.getUTCMonth() + 1 !== month ||
    utcDate.getUTCDate() !== day
  ) {
    return null;
  }

  return utcDate;
}

function monthNameFromDate(date) {
  return date.toLocaleString('en-US', { month: 'long', timeZone: 'UTC' });
}

function isValidYouTubeUrl(input) {
  try {
    const url = new URL(input);
    const host = url.hostname.toLowerCase().replace(/^www\./, '');
    return host === 'youtube.com' || host === 'm.youtube.com' || host === 'youtu.be';
  } catch {
    return false;
  }
}

function slugify(str) {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .replace(/--+/g, '-');
}

const [, , ...args] = process.argv;

if (args.length < 2) {
  console.error('Usage: npm run create:community-standup-item -- <date> <youtubeUrl>');
  console.error('Example: npm run create:community-standup-item -- 2026-03-06 https://www.youtube.com/watch?v=abc123XYZ');
  process.exit(1);
}

const dateInput = args[0];
const youtubeUrl = args[1];

const parsedDate = parseDateInput(dateInput);
if (!parsedDate) {
  console.error('Invalid date. Use YYYY-MM-DD (for example, 2026-03-06).');
  process.exit(1);
}

if (!isValidYouTubeUrl(youtubeUrl)) {
  console.error('Invalid YouTube URL. Use a youtube.com or youtu.be link.');
  process.exit(1);
}

const year = String(parsedDate.getUTCFullYear());
const monthName = monthNameFromDate(parsedDate);
const safeMonth = slugify(monthName);
const dateIso = parsedDate.toISOString().slice(0, 10);

const title = `.NET MAUI Community Standup - ${monthName} ${year}`;
const description = `The .NET MAUI Community Standup for ${monthName} ${year}, featuring updates, demos, and discussions from the MAUI community.`;
const slugBase = `maui-community-standup-${safeMonth}-${year}`;
const fileName = `${dateIso}-${slugBase}.md`;

const targetDir = path.resolve('src/content/community-standup', year);
const targetPath = path.join(targetDir, fileName);

if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

if (fs.existsSync(targetPath)) {
  console.error(`File already exists: ${targetPath}`);
  process.exit(1);
}

const frontmatter = `---
title: "${title}"
link: ${youtubeUrl}
description: "${description}"
date: ${dateIso}
author: davidortinau
contentType: video
---

Watch on YouTube: <${youtubeUrl}>
`;

fs.writeFileSync(targetPath, frontmatter, 'utf8');
console.log(`Created: ${targetPath}`);
