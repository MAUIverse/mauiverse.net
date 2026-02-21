# Standup flags and protected fields

This page defines reserved metadata fields used to classify standup entries.

## Current reserved fields

- `isStandup` (community standup)
- `isToolkitStandup` (MAUI Community Toolkit standup)

These keys are considered protected classification fields and should not be repurposed for unrelated content.

## Safety rules

- Do not set both fields to `true` on the same post.
- Do not use standup flags for non-standup content.
- Do not introduce alternate flag names ad hoc in content files.

## Planned naming improvement

To make intent explicit, a future migration can introduce `isCommunityStandup` as the semantic replacement for `isStandup`.

Recommended migration stages:

1. Schema compatibility stage: allow both `isStandup` and `isCommunityStandup`.
2. Reader compatibility stage: page filters read `isCommunityStandup ?? isStandup`.
3. Content backfill stage: update existing standup posts to `isCommunityStandup`.
4. Deprecation stage: remove `isStandup` support after migration completes.

## Compatibility note for contributors

Until the migration is implemented in code, continue using the current production field names in content files.

## Next reading

- [Add content posts](./content-posts.md)
- [Automation pipeline](./automation.md)
