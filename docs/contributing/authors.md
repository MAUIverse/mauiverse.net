# Author profiles

## Location

Author profiles are YAML files in `src/content/community-contributors/`.

## Canonical identity key

`gitHubUsername` is the primary key for contributor identity across the site.

It is used for:

- feed author matching
- contributor profile routes
- contributor badge checks
- generated author lookup data

Once published, treat `gitHubUsername` as immutable unless you are performing an intentional migration.

## Filename convention

Use the GitHub username for the profile filename:

```text
src/content/community-contributors/<github-username>.yaml
```

Example:

```text
src/content/community-contributors/tonyedwards.yaml
```

## Profile schema

```yaml
gitHubUsername: ""
displayName: ""
avatarImagePath: ""
disableGitHubProfileLink: false
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

## Minimal valid profile example

```yaml
gitHubUsername: "tonyedwards"
displayName: "Tony Edwards"
avatarImagePath: "/img/contributors/tony-edwards.jpg"
disableGitHubProfileLink: false
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

## Update guidance

- Keep `gitHubUsername` stable.
- Update `displayName` and social links as needed.
- Keep empty optional fields as empty strings for consistency.
- Prefer repository-hosted avatar paths under `public/img/contributors/`.

## Next reading

- [Automation pipeline](./automation.md)
- [Troubleshooting](./troubleshooting.md)
