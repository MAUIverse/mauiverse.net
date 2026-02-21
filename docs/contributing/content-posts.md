# Add content posts

## Location and pathing

Create markdown files under `src/content/community-feed/YYYY/MM/`.

Example:

```text
src/content/community-feed/2026/02/my-post-title.md
```

The generated detail URL is derived from the content entry id (path-based), so file path and name choices affect route shape.

## Frontmatter schema

The community-feed collection supports these fields:

- `title` (required, string)
- `link` (required, string)
- `description` (required, string)
- `date` (required, date)
- `author` (optional, string)
- `contentType` (optional, string)
- `isStandup` (optional, boolean)
- `isToolkitStandup` (optional, boolean)

## Standard post example

```yaml
---
title: "Building Offline Sync in .NET MAUI"
link: "https://example.dev/posts/maui-offline-sync"
description: "Practical offline-first patterns for .NET MAUI applications."
date: 2026-02-19
author: "tonyedwards"
contentType: "blog"
---
```

## Community standup example

```yaml
---
title: "MAUI Community Standup - February 2026"
link: "https://www.youtube.com/watch?v=example"
description: "Monthly .NET MAUI community standup episode."
date: 2026-02-14
author: "dotnet"
isStandup: true
---
```

## Toolkit standup example

```yaml
---
title: "MAUI Community Toolkit Monthly Standup - February 2026"
link: "https://www.youtube.com/watch?v=example"
description: "Latest toolkit updates and demos."
date: 2026-02-10
author: "communitytoolkit"
isToolkitStandup: true
---
```

## Author matching behavior

`author` is matched against contributor identity keys. In practice, use the contributor `gitHubUsername` value for reliable linking and avatar resolution.

## Rules to keep contributions safe

- Set at most one standup flag per post.
- Use ISO date format (`YYYY-MM-DD`).
- Keep title and description stable after publish unless correcting an error.
- If adding new metadata keys, update schema and docs in the same PR.

## Next reading

- [Author profiles](./authors.md)
- [Standup flags](./standup-flags.md)
- [Troubleshooting](./troubleshooting.md)
