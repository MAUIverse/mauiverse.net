# Contributor documentation

This guide is for developers who work with .NET MAUI and want to contribute content or author data to mauiverse.net.

## Start here

- Add a new community feed post: [Add content posts](./content-posts.md)
- Add or update an author profile: [Author profiles](./authors.md)
- Understand standup metadata and protected fields: [Standup flags](./standup-flags.md)
- Learn how generated data and automation work: [Automation pipeline](./automation.md)
- Resolve common contribution issues: [Troubleshooting](./troubleshooting.md)
- Suggested repository improvements: [Repository improvements](./repo-improvements.md)

## Data model in one paragraph

The site is file-based. Content posts live in `src/content/community-feed/` and contributor profiles live in `src/content/community-contributors/`. `gitHubUsername` is the canonical identity key used to connect author profiles, feed author matching, badges, and contributor profile routes.

## Contribution contract

- Treat `gitHubUsername` as immutable once an author is published.
- Keep post frontmatter schema-compatible and explicit.
- Do not introduce new metadata keys in content files without updating schema and docs.
- Keep links in this docs section relative so documentation works on GitHub and in local clones.
