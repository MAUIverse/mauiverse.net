# Troubleshooting contributions

## Post does not appear where expected

Check these items:

- File is under `src/content/community-feed/YYYY/MM/`.
- Frontmatter has all required fields (`title`, `link`, `description`, `date`).
- Standup flags are set correctly (`isStandup` or `isToolkitStandup`).
- `date` parses as a valid date.

## Author profile is not linked from a feed post

- Ensure post `author` matches contributor `gitHubUsername`.
- Ensure the contributor YAML includes a non-empty `gitHubUsername`.
- Ensure profile filename follows `<github-username>.yaml`.

## Badge data looks stale

Generated badge datasets are refreshed during prebuild/dev and by scheduled workflow. If stale data persists, run a local build to force sync and verify outputs.

## Local validation commands

```bash
npm run build
```

For strict sync behavior (no stale fallback), use the environment flags documented in the main repository README.

## Next reading

- [Automation pipeline](./automation.md)
- [Standup flags](./standup-flags.md)
