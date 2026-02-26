#!/usr/bin/env node
// scripts/create-community-feed-item.mjs
/**
 * Script: create-community-feed-item
 * Purpose: Create a new community feed markdown file with frontmatter for Astro processing.
 *
 * Usage:
 *   npm run create:feed-item -- <url or title> <date> <githubUsername>
 */

import fs from 'fs';
import path from 'path';

function slugify(str) {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .replace(/--+/g, '-');
}

function parseFlexibleDate(input) {
  if (!input) return new Date();
  // Try ISO, YYYY-MM-DD, MM/DD/YYYY, Month D, YYYY, etc.
  let d = new Date(input);
  if (!isNaN(d)) return d;

  // Try parsing with regex for formats like 'October 8, 2025'
  const monthNames = [
    'january', 'february', 'march', 'april', 'may', 'june',
    'july', 'august', 'september', 'october', 'november', 'december'
  ];
  const match = input.match(/^(\w+)\s+(\d{1,2}),\s*(\d{4})$/i);
  if (match) {
    const month = monthNames.indexOf(match[1].toLowerCase());
    if (month !== -1) {
      const day = parseInt(match[2], 10);
      const year = parseInt(match[3], 10);
      d = new Date(year, month, day);
      if (!isNaN(d)) return d;
    }
  }

  // Add more custom parsing as needed
  return null;
}

const [,, ...args] = process.argv;
if (args.length < 1) {
  console.error('Usage: npm run create:feed-item -- <title> [date] [githubUsername]');
  process.exit(1);
}



const urlOrTitle = args[0];
const dateInput = args[1];
const authorInput = args[2] || "";

const dateObj = parseFlexibleDate(dateInput);
if (!dateObj || isNaN(dateObj)) {
  console.error('Invalid date format. Please use YYYY-MM-DD, MM/DD/YYYY, or formats like "October 8, 2025".');
  process.exit(1);
}

// If input is a URL, extract the last part as the slug and use the full URL as link
let url, title, slug;
try {
  const urlPattern = /^https?:\/\//i;
  if (urlPattern.test(urlOrTitle)) {
    url = urlOrTitle;
    // Remove trailing slash if present
    const cleanUrl = url.replace(/\/$/, '');
    // Get last path segment
    const parts = cleanUrl.split('/');
    slug = parts[parts.length - 1].toLowerCase();
    // Replace non-url-friendly chars just in case
    slug = slugify(slug);
    // Use the slug (with dashes replaced by spaces and capitalized) as the title
    title = slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
    // Capitalize MAUI and ensure .NET
    title = title.replace(/maui/gi, 'MAUI');
    // Replace .Net, .net, net, NET, etc. with .NET
    title = title.replace(/\.net\b/gi, '.NET');
    title = title.replace(/\bnet\b/gi, '.NET');
  } else {
    url = '';
    title = urlOrTitle;
    // Capitalize MAUI and ensure .NET
    title = title.replace(/maui/gi, 'MAUI');
    // Replace .Net, .net, net, NET, etc. with .NET
    title = title.replace(/\.net\b/gi, '.NET');
    title = title.replace(/\bnet\b/gi, '.NET');
    slug = slugify(title);
  }
} catch (e) {
  console.error('Error parsing URL or title:', e);
  process.exit(1);
}

const yyyy = dateObj.getFullYear();
const mm = String(dateObj.getMonth() + 1).padStart(2, '0');
const folder = `${yyyy}-${mm}`;
const filename = `${slug}.md`;
const targetDir = path.resolve('src/content/community-feed', folder);
const targetPath = path.join(targetDir, filename);

if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

if (fs.existsSync(targetPath)) {
  console.error(`File already exists: ${targetPath}`);
  process.exit(1);
}


// Common frontmatter fields
const frontmatter = `---
title: "${title}"
link: ${url ? url : ''}
description: ""
date: "${dateObj.toISOString().slice(0, 10)}"
author: "${authorInput}"
contentType: "article"
---

`;

fs.writeFileSync(targetPath, frontmatter, 'utf8');
console.log(`Created: ${targetPath}`);
