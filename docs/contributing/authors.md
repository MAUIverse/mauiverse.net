# Author profiles

Use this page to add or update contributor profiles.

## Add a new author (scripted)

```sh
npm run create:author -- <githubUsername>
```

### Parameters

- `<githubUsername>` (required): canonical identity key and file name source.

### Generated file location

```text
src/content/community-contributors/<githubusername>.yaml
```

### Example generated file

```yaml
gitHubUsername: "octocat"
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
```

## Update an existing author

Edit the matching YAML file in `src/content/community-contributors/`.

Recommended workflow:

1. Keep `gitHubUsername` unchanged.
2. Update `displayName` and links.
3. Run `npm run dev` and verify author card/profile rendering.
4. Open a PR with a short summary.

## Related docs

- [Contributor guide](./README.md)
- [Feed items](./content-posts.md)
