# Contributor documentation

This guide is for technical contributors updating content and author data.

## Task 1: Run the website locally

Use this to validate changes before opening a PR.

```sh
npm install
npm run dev
```

### What this runs

- `npm run dev` starts the Astro dev server.
- `predev` runs first to generate author data and refresh contributor/feed datasets.

### Output

- Local site: `http://localhost:4321`
- Generated files in `src/data/*.generated.ts` refresh as needed.

## Task 2: Add a new author (scripted)

Use the generator script instead of creating YAML by hand.

```sh
npm run create:author -- <githubUsername>
```

### Parameters

- `<githubUsername>` (required): used for file name and canonical identity.

### Generated file

Path:

```text
src/content/community-contributors/<githubusername>.yaml
```

Example output file:

```yaml
gitHubUsername: "octocat"
displayName: "Octocat"
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
```

Then fill in the required `displayName` and any links you want to publish.

## Task 3: Add a new community feed item (scripted)

Use the feed item generator.

```sh
npm run create:feed-item -- <title-or-url> [date] [githubUsername]
```

### Parameters

- `<title-or-url>` (required): post title or full URL.
- `[date]` (optional): defaults to today; supports `YYYY-MM-DD` and common readable formats.
- `[githubUsername]` (optional): value for the `author` frontmatter field.

### Generated file

Path:

```text
src/content/community-feed/YYYY/MM/<slug>.md
```

Example output file:

```markdown
---
title: "Building Offline Sync In .NET MAUI"
link: https://example.dev/posts/building-offline-sync
description: ""
date: "2026-02-26"
author: "octocat"
contentType: "article"
---
```

After generation, add a `description` and validate metadata before opening a PR.

## Task 4: Update an existing author or feed item

No generator script is needed for updates.

- Author updates: edit files in `src/content/community-contributors/`.
- Feed updates: edit files in `src/content/community-feed/YYYY/MM/`.

Rules:

- Keep `gitHubUsername` stable for existing authors.
- Keep frontmatter valid. If you add metadata keys, update schema/docs in the same PR.
- If you change content behavior, validate locally with `npm run dev`.

## Pull request flow

1. Branch from `main`.
2. Make one logical change set (author, feed item, or metadata fix).
3. Run `npm run dev` and check the rendered result.
4. Commit and open a PR.
5. In the PR description, include what changed, why it changed, and any generated files.
