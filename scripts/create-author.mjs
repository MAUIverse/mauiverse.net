#!/usr/bin/env node
// scripts/create-author.mjs
// Usage: node scripts/create-author.mjs <githubUsername>
// Creates a new author YAML file in src/content/community-contributors/

import fs from 'fs';
import path from 'path';

const [,, githubUsername] = process.argv;

if (!githubUsername) {
  console.error('Usage: node scripts/create-author.mjs <githubUsername>');
  process.exit(1);
}

const filename = `${githubUsername.toLowerCase()}.yaml`;
const targetDir = path.resolve('src/content/community-contributors');
const targetPath = path.join(targetDir, filename);

if (fs.existsSync(targetPath)) {
  console.error(`File already exists: ${targetPath}`);
  process.exit(1);
}

const template = `gitHubUsername: "${githubUsername}"
displayName: ""
bskyUrl: ""
twitterUrl: ""
instagramUrl: ""
linkedInUrl: ""
youTubeUrl: ""
tikTokUrl: ""
blogUrl: ""
blogRSSFeedUrl: ""
podcastWebsiteUrl: ""
podcastRssUrl: ""
twitchProfileUrl: ""
`;

fs.writeFileSync(targetPath, template, 'utf8');
console.log(`Created: ${targetPath}`);
