---
title: "What It Took to Make a Mobile App Usable on the World's Worst Networks, Without Buying Anything"
link: https://medium.com/@mikhail.petrusheuski/what-it-took-to-make-a-mobile-app-usable-on-the-worlds-worst-networks-without-buying-anything-3a81cb1d15ea
description: "Mikhail Petrusheuski spends six measured weeks dragging a .NET MAUI app's p90 home-load from 26.2s to 6.6s and failure rate from 71% to 32% — with no CDN, image service, or APM vendor. A candid, metrics-driven account including SkiaSharp renditions, immutable caching, and the DNS fix that didn't work."
date: 2026-09-22
author: mikhailpetrusheuski
contentType: article
---

PlayMaksi's home feed took 22 seconds at p90 and failed for a third of users — nearly two thirds in Egypt — on cheap Android phones and congested networks. Mikhail Petrusheuski documents six weeks of measured fixes with no budget for a CDN, image service, or APM, including the part that didn't work.

## What you'll learn

- **Instrument the stage, not the error** — a single `error_stage` string in a failure event, queried from the free BigQuery export, that turned "requests fail sometimes" into "DNS, 87%, two countries"
- **Server-side image renditions** — SkiaSharp WebP renditions at three snapped widths, single-flighted behind a per-key semaphore, degrading to the original — capped even for clients you can never update
- **Caching that actually helps** — `immutable` year-long caching with correct weak `ETag`/304 semantics, and three cache lifetimes (browser, edge, `stale-while-revalidate`) for the per-game player page
- **Fewer third parties** — vendoring a public-CDN bundle onto your own origin because "a free CDN is a dependency you cannot debug," with SRI if you keep one
- **Your error rate is lying** — mapping client-cancelled requests to `499` instead of `500`, and why aborting a truncated response beats returning it
- **The DNS fix that didn't work** — a fallback ladder that needed DNS to do DNS, pinning DoH IPs via `SocketsHttpHandler.ConnectCallback`, and being honest that adoption, not efficacy, is what the numbers show

Read the full post for the measurement tables and the lessons on optimising for the client you cannot update.
