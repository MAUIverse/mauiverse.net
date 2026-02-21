# Automation pipeline

This project is file-based, with generated data snapshots refreshed by scripts and CI.

## Source of truth

- Contributor profiles: `src/content/community-contributors/*.yaml`
- Community feed posts: `src/content/community-feed/**/*.md`

## Author data generation flow

```text
community-contributors YAML
  -> scripts/generate-authors-from-community-contributors.mjs
  -> src/data/authors.generated.ts
  -> src/data/authors.ts runtime helpers
  -> pages/components consume author identity and badges
```

## Build-time refresh behavior

`npm run dev` and `npm run build` execute `predev`/`prebuild` scripts that refresh generated datasets.

The repository also has a scheduled workflow that refreshes and commits generated snapshots.

## CI-first expectation

Contributors can focus on source content/profile changes. Generated snapshots are refreshed by automation, and maintainers can trigger snapshot updates when needed.

## Why GitHub username is the primary key

Using `gitHubUsername` as the canonical key keeps data joins deterministic across:

- profile routing
- feed author matching
- contributor badges
- generated lookup maps

## Next reading

- [Author profiles](./authors.md)
- [Troubleshooting](./troubleshooting.md)
