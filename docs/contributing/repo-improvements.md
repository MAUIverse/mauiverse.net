# Repository improvements (file-based friendly)

These improvements keep the existing file-based contribution model while reducing contributor mistakes.

## 1) Add duplicate identity guard

In the author generation script, fail fast when duplicate `gitHubUsername` values are detected (case-insensitive).

Benefit: prevents silent key collisions in generated author lookup data.

## 2) Tighten URL validation in schema

For profile social URL fields, validate URL format at schema level.

Benefit: catches malformed links at content validation time.

## 3) Optional feed-author existence check

Add a validation step that warns (or fails in strict mode) when a feed post `author` has no matching contributor profile.

Benefit: avoids broken author attribution.

## 4) Normalize standup field naming

Implement the phased migration from `isStandup` to `isCommunityStandup` with backward compatibility.

Benefit: clearer intent and lower onboarding friction for contributors.

## 5) Add CONTRIBUTING.md that points here

Provide a short root-level `CONTRIBUTING.md` that routes users directly to [Contributor documentation](./README.md).

Benefit: standard GitHub discoverability with minimal maintenance overhead.
