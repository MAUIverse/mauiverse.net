# Community feed items

Use this page to add or update community feed content.

## Add a new feed item (scripted)

```sh
npm run create:feed-item -- <title-or-url> [date] [githubUsername]
```

### Parameters

- `<title-or-url>` (required): source title or URL.
- `[date]` (optional): defaults to today.
- `[githubUsername]` (optional): sets the `author` frontmatter field.

### Generated file location

```text
src/content/community-feed/YYYY/MM/<slug>.md
```

### Example generated file

```markdown
---
title: "Build Better .NET MAUI Apps"
link: https://example.dev/build-better-maui-apps
description: ""
date: "2026-02-26"
author: "octocat"
contentType: "article"
---
```

## Update an existing feed item

Edit the existing markdown file in `src/content/community-feed/YYYY/MM/`.

Recommended workflow:

1. Keep frontmatter valid (`title`, `link`, `description`, `date`).
2. Use `author` values that match a contributor `gitHubUsername` when possible.
3. Run `npm run dev` and verify the post renders correctly.
4. Open a PR with the change context.

## Related docs

- [Contributor guide](./README.md)
- [Author profiles](./authors.md)
