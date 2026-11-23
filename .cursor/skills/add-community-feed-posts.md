---
name: Add new posts
description: How to create community-feed posts (summaries of articles/videos/podcasts) for MAUIverse from a list of authors + URLs. Use whenever asked to add, batch, or write community-feed items, or when editing files under src/content/community-feed.
globs: src/content/community-feed/**/*.md
---

# Creating MAUIverse community-feed posts

You act as head of .NET MAUI developer relations. Given a list of `First Name (GitHub handle)` + one or more URLs, retrieve each URL, write a summary, and create a post.

Write like an experienced .NET MAUI developer sharing a useful community resource with another developer. The voice should be warm, practical, optimistic, and community-minded without becoming promotional or overly familiar. Be enthusiastic about the work, but let the useful technical detail—not personality—remain the focus.

Voice guidelines:
- Prefer direct, active sentences and a conversational rhythm.
- Use contractions naturally where they improve the flow.
- Acknowledge the author's contribution or the work's usefulness without excessive praise.
- Connect technical details to the problem they solve or why a developer might care.
- Follow Microsoft technical writing principles: be clear, inclusive, precise, concise, and consistent in terminology.
- Avoid hype, forced jokes, clichés, emojis, and repeated phrases such as "powerful", "game-changer", "no-fluff", and "dive into".
- Vary sentence length, openings, headings, and endings. Do not make every post sound like the same template with different details.

Descriptions make the content **searchable** and **encourage the click-through** — they do not give away all the value.

## 1. File locations & structure

- **Post path:** `src/content/community-feed/<YYYY>/<MM>/<slug>.md` — year/month come from the content's **publish date**, not today.
- **Authors:** `src/content/community-contributors/<name>.yaml` (filename is cosmetic).
- **Schema (source of truth):** `src/content.config.ts` (`community-feed` collection).

## 2. Front matter (all required except noted)

```markdown
---
title: "Human Title (MAUI uppercase, use .NET not net)"
link: https://original-url            # valid URL; use the exact/shareable link, matching sibling posts
description: "Exactly two sentences. What it is + a nudge to go read/watch."
date: 2026-07-10                      # YYYY-MM-DD, unquoted
author: jpd21122012                   # see rule 3 — the gitHubUsername VALUE
contentType: article                  # see rule 4
---
```

Optional: `featuring: [handle1, handle2]` (array of author keys — for content that features people other than the author).

**Description conventions** (exactly 2 short sentences):
- Sentence one should identify what the resource is and why it matters.
- Sentence two should provide a specific hook, useful context, intended audience, or reason to continue.
- Leading with the author's display name (or org name) is encouraged but not mandatory, e.g. "Sebastian Jensen builds…", "Syncfusion's 2026 Volume 2 release…".
- Note relevant context when present: event ties ("Part of MAUI UI July 2026", "Recorded at NDC Copenhagen 2026") and, for videos, the approximate runtime ("this ~1 hour session").
- Include at least one concrete detail from the source when possible.
- Avoid formulaic phrases such as "You'll discover", "Learn how", and "A must-read for developers".

Body (Astro markdown): write a useful summary whose structure suits the source. Cover the important conceptual and technical points, but keep enough detail at the original link to encourage the click-through. Use markdown/HTML formatting when it helps; prefer simple markdown because Astro renders it.

Choose a body structure based on the content:
- **Tutorial or technical deep dive:** Briefly establish the problem, then use prose or a compact list of 3–6 genuinely distinct takeaways.
- **News or announcement:** Use prose to explain what changed, why it matters, and who should care. A list is optional.
- **Opinion, experience, or personal story:** Follow the author's argument or journey in prose. Usually omit a list.
- **Video, stream, or podcast:** Explain the premise, format, participants, and likely audience. Use a list only when several distinct topics make the summary easier to scan.
- **Library, control, or repository:** Explain the problem it solves, then summarize the most useful capabilities or use cases.
- **Quick resource or short update:** Keep it to 2–3 focused paragraphs. Do not stretch it to fit a longer template.

Do not add a `## What you'll learn` section by default. Use a list only when it makes the post easier to scan; a prose summary is equally valid. When a list is useful, prefer concise items and bold the key concept only where that meaningfully improves readability.

Vary the body naturally:
- Open with a problem, result, event, notable technical detail, or reason the resource is worth attention. Avoid repeatedly starting with "This article", "This video", or "In this post".
- Use headings only when they improve navigation. Short posts do not require headings.
- Close with a practical reason to visit the source, who may find it useful, or a natural next step. Avoid the same click-through sentence on every post.

## 3. Author lookup (critical)

- The `author` value MUST equal the `gitHubUsername` **value inside** the yaml, **not** the filename. (e.g. Sebastian Jensen's file is `sebastian-jensen.yaml` but key is `tsjdev-apps`.)
- Check existence: grep `src/content/community-contributors` for the display name or handle.
- Missing? Create with `npm run create:author -- <githubUsername>`, then fill fields from the scraped page.
- Author yaml fields: `gitHubUsername`, `displayName`, `avatarImagePath?`, `disableGitHubProfileLink?`, `bskyUrl`, `twitterUrl`, `instagramUrl`, `linkedInUrl`, `youTubeUrl`, `youTubeRSS?`, `tikTokUrl`, `blogUrl`, `blogRSSFeedUrl`, `podcastWebsiteUrl`, `podcastRssUrl`, `twitchProfileUrl`.
- While scraping, add any social/blog links you discover **only where currently missing**. Never overwrite existing values.
- To find an author's RSS/YouTube feeds for the profile, the helpers `npm run discover:rss` and `npm run discover:youtube-rss` can help.

## 4. contentType

- `video` — YouTube links
- `github` — GitHub links
- `podcast` — podcasts
- `article` — default for everything else

## 5. Slugs

- Descriptive, kebab-case. Prefer `dotnet-maui` over `net-maui` (matches existing files).
- **YouTube:** never use the `watch?v=` id — derive a descriptive slug from the title (e.g. `the-best-maui-library-you-dont-know-nalu.md`).
- Articles: the URL tail is usually fine, but strip random id suffixes (e.g. dev.to `build-the-tools-you-need-4ji0` → `build-the-tools-you-need`).

## 6. Retrieving content & the publish date

Try these, in order, per source:

- **Project helper:** `npm run url:to-markdown -- <url>` → writes markdown into `.tmp/`.
- **Generic HTML:** `curl -sL -A "Mozilla/5.0" "<url>" -o /tmp/x.html`, then pull structure with `rg -o '<h[1-3][^>]*>.*?</h[1-3]>' /tmp/x.html | sed 's/<[^>]*>//g'`. Find the date via JSON-LD `"datePublished"`, meta tags, or visible text.
- **Cloudflare-blocked sites (e.g. Medium curl → 403):** use the `WebFetch` tool, or the RSS feed `https://medium.com/feed/@<handle>` and read `<pubDate>`.
- **YouTube videos:** use `WebFetch` on the watch URL to get the title, description, and often the runtime; write the summary from the video's own description rather than guessing.
- **Hashnode-hosted URLs:** use the Hashnode GraphQL API at `https://gql.hashnode.com`.
- **shaunebu.com short URLs** (e.g. `/QgVZp`): follow the redirect with `curl -sL` to get the real title; the publish date isn't on the article page — fetch `https://shaunebu.com` and match the article title to its listed date.

## 7. Optional scaffolder

`npm run create:feed-item -- <url> <date> <githubUsername>` creates a stub with empty description/body. Writing the file directly (matching existing posts) is usually cleaner — study a recent example under `src/content/community-feed/2026/`.

## 8. Before finishing (verify)

- **No duplicates:** confirm the target `<slug>.md` doesn't already exist in that year/month folder (grep for the URL/slug across `community-feed` too).
- **Author key resolves:** the schema validates `author` against generated keys. If you added a new author, `src/data/authors.generated.ts` is regenerated by `npm run generate:authors` (also runs automatically in `predev`/`prebuild`).
- **Schema sanity:** `link` is a valid URL, `date` is `YYYY-MM-DD`, `description` present. Running `npm run build` (or `dev`) will surface any content-collection validation errors.
- **Editorial check:** The opening is specific to the source, the structure suits the content, and the post is not unnecessarily repetitive or formulaic.
- **Voice check:** The writing is warm and clear without becoming promotional, hyperbolic, or imitative.
- **Structure check:** A list is present only because it improves the post. If the post has no list, confirm it still summarizes the key value clearly.
- **Source check:** The post includes at least one useful, concrete detail and does not introduce unsupported claims or give away the entire source.
