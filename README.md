# mauiverse.net
Powering the mauiverse.net website

## Contributor documentation

Start here:

- [CONTRIBUTING.md](./CONTRIBUTING.md)
- [docs/contributing/README.md](./docs/contributing/README.md)

## Website contributor badge sync

Website contributor badges are sourced from the GitHub contributors API for `MAUIverse/mauiverse.net` and synced at build-time.

- Sync script: `scripts/fetch-mauiverse-website-contributors.mjs`
- Generated local dataset: `src/data/mauiverse-website-contributors.generated.ts`
- Badge rendering accessor: `isWebsiteContributor(...)` in `src/data/authors.ts`

### Token setup

For authenticated rate limits, set one of:

- `MAUIVERSE_WEBSITE_CONTRIBUTORS_GITHUB_TOKEN` (preferred)
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

	- `MAUIVERSE_WEBSITE_CONTRIBUTOR_SYNC_FORCE_REFRESH=1 npm run build`

- Enforce strict behavior (never fall back to stale generated data):

	- `MAUIVERSE_WEBSITE_CONTRIBUTOR_SYNC_STRICT=1 npm run build`

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

## .NET MAUI Docs contributor badge sync

Docs contributor badges are sourced from the GitHub contributors API for `dotnet/docs-maui` and synced at build-time.

- Sync script: `scripts/fetch-docs-maui-contributors.mjs`
- Generated local dataset: `src/data/docs-maui-contributors.generated.ts`
- Badge rendering accessor: `isDocsMauiContributor(...)` in `src/data/authors.ts`

### Token setup

If you experience missing contributor images during development, you are likely hitting GitHub rate limits.

For authenticated rate limits, set one of:

- `DOCS_MAUI_CONTRIBUTORS_GITHUB_TOKEN` (preferred)
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

	- `DOCS_MAUI_CONTRIBUTOR_SYNC_FORCE_REFRESH=1 npm run build`

- Enforce strict behavior (never fall back to stale generated data):

	- `DOCS_MAUI_CONTRIBUTOR_SYNC_STRICT=1 npm run build`

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

## NuGet author badge sync

NuGet author badges are sourced from the NuGet search endpoint using each community contributor `gitHubUsername` as an `owner:` query and synced at build-time.

- Sync script: `scripts/fetch-nuget-authors.mjs`
- Generated local dataset: `src/data/nuget-authors.generated.ts`
- Badge rendering accessor: `isNugetAuthor(...)` in `src/data/authors.ts`

### Refresh behavior and fallback

- `npm run dev` and `npm run build` both trigger sync via `predev`/`prebuild`.
- On sync failure, build/dev uses the existing generated dataset when present.
- If no generated dataset exists and sync fails, the command fails fast.

### Force refresh and strict mode

- Force fresh network sync (fail if NuGet API is unavailable):

	- `NUGET_AUTHOR_SYNC_FORCE_REFRESH=1 npm run build`

- Enforce strict behavior (never fall back to stale generated data):

	- `NUGET_AUTHOR_SYNC_STRICT=1 npm run build`

## Community contributors

Contributor profiles live in `src/content/community-contributors/` as one YAML file per author.

- Filename format: use the contributor `gitHubUsername` as the filename (for example, `tonyedwards.yaml`).
- Canonical identifier: keep `gitHubUsername` as the source of truth for author identity and feed author matching.

Use this schema for each contributor file:

```yaml
gitHubUsername: ""
displayName: ""
avatarImagePath: ""
disableGitHubProfileLink: false
bskyUrl: ""
# Adding a New Author

To add a new community contributor (author), use the automated script:

```sh
npm run create:author -- <githubUsername>
```

This will create a new YAML file in `src/content/community-contributors/` named `<githubUsername>.yaml` with the required structure. If a file with that name already exists, the script will not overwrite it.

## Example Author YAML

Below is an example of an author file. **Required fields** are marked, all others are optional:

```yaml
# Required
gitHubUsername: "octocat"         # GitHub username (used for filename and identification)
displayName: "Octo Cat"           # Display name for the contributor

# Optional
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

**Required fields:**
- `gitHubUsername`: The contributor's GitHub username (used for the filename and as a unique key).
- `displayName`: The name to display on the site.

**Optional fields:**
- Social and content links (leave blank if not applicable).

After running the script, edit the new file to fill in the display name and any relevant links.
```

Author metadata used by feed rendering is generated from this contributor YAML content:

- Generation script: `scripts/generate-authors-from-community-contributors.mjs`
- Generated snapshot (committed): `src/data/authors.generated.ts`
- Runs automatically via `predev` and `prebuild`
