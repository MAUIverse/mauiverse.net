# mauiverse.net
Powering the mauiverse.net website

## .NET MAUI contributor badge sync

MAUI contributor badges are sourced from the GitHub contributors API for `dotnet/maui` and synced at build-time.

- Sync script: `scripts/fetch-maui-contributors.mjs`
- Generated local dataset: `src/data/maui-contributors.generated.ts`
- Badge rendering accessor: `isMauiContributor(...)` in `src/data/authors.ts`

### Token setup

For authenticated rate limits, set one of:

- `MAUI_CONTRIBUTORS_GITHUB_TOKEN` (preferred)
- `GITHUB_TOKEN`
- `GH_TOKEN`

Without a token, sync still runs unauthenticated (lower GitHub rate limits).

### Refresh behavior and fallback

- `npm run dev` and `npm run build` both trigger sync via `predev`/`prebuild`.
- On sync failure, build/dev uses the existing generated dataset when present.
- If no generated dataset exists and sync fails, the command fails fast.

### Force refresh and strict mode

- Force fresh network sync (fail if API is unavailable):

	- `MAUI_CONTRIBUTOR_SYNC_FORCE_REFRESH=1 npm run build`

- Enforce strict behavior (never fall back to stale generated data):

	- `MAUI_CONTRIBUTOR_SYNC_STRICT=1 npm run build`

## .NET MAUI Community Toolkit contributor badge sync

Community Toolkit contributor badges are sourced from the GitHub contributors API for `CommunityToolkit/Maui` and synced at build-time.

- Sync script: `scripts/fetch-maui-toolkit-contributors.mjs`
- Generated local dataset: `src/data/maui-toolkit-contributors.generated.ts`
- Badge rendering accessor: `isMauiToolkitContributor(...)` in `src/data/authors.ts`

### Token setup

For authenticated rate limits, set one of:

- `MAUI_TOOLKIT_CONTRIBUTORS_GITHUB_TOKEN` (preferred)
- `MAUI_CONTRIBUTORS_GITHUB_TOKEN`
- `GITHUB_TOKEN`
- `GH_TOKEN`

Without a token, sync still runs unauthenticated (lower GitHub rate limits).

### Refresh behavior and fallback

- `npm run dev` and `npm run build` both trigger sync via `predev`/`prebuild`.
- On sync failure, build/dev uses the existing generated dataset when present.
- If no generated dataset exists and sync fails, the command fails fast.

### Force refresh and strict mode

- Force fresh network sync (fail if API is unavailable):

	- `MAUI_TOOLKIT_CONTRIBUTOR_SYNC_FORCE_REFRESH=1 npm run build`

- Enforce strict behavior (never fall back to stale generated data):

	- `MAUI_TOOLKIT_CONTRIBUTOR_SYNC_STRICT=1 npm run build`

## Syncfusion MAUI Toolkit contributor badge sync

Syncfusion Toolkit contributor badges are sourced from the GitHub contributors API for `syncfusion/maui-toolkit` and synced at build-time.

- Sync script: `scripts/fetch-syncfusion-maui-toolkit-contributors.mjs`
- Generated local dataset: `src/data/syncfusion-maui-toolkit-contributors.generated.ts`
- Badge rendering accessor: `isSyncfusionMauiToolkitContributor(...)` in `src/data/authors.ts`

### Token setup

For authenticated rate limits, set one of:

- `SYNCFUSION_MAUI_TOOLKIT_CONTRIBUTORS_GITHUB_TOKEN` (preferred)
- `MAUI_TOOLKIT_CONTRIBUTORS_GITHUB_TOKEN`
- `MAUI_CONTRIBUTORS_GITHUB_TOKEN`
- `GITHUB_TOKEN`
- `GH_TOKEN`

Without a token, sync still runs unauthenticated (lower GitHub rate limits).

### Refresh behavior and fallback

- `npm run dev` and `npm run build` both trigger sync via `predev`/`prebuild`.
- On sync failure, build/dev uses the existing generated dataset when present.
- If no generated dataset exists and sync fails, the command fails fast.

### Force refresh and strict mode

- Force fresh network sync (fail if API is unavailable):

	- `SYNCFUSION_MAUI_TOOLKIT_CONTRIBUTOR_SYNC_FORCE_REFRESH=1 npm run build`

- Enforce strict behavior (never fall back to stale generated data):

	- `SYNCFUSION_MAUI_TOOLKIT_CONTRIBUTOR_SYNC_STRICT=1 npm run build`

## Community contributors

Contributor profiles live in `src/content/community-contributors/` as one YAML file per author.

- Filename format: use the contributor display name as kebab-case (for example, `tony-edwards.yaml`).
- Canonical identifier: keep `gitHubUsername` as the source of truth for author identity and feed author matching.

Use this schema for each contributor file:

```yaml
gitHubUsername: ""
displayName: ""
internalProfileURL: ""
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
