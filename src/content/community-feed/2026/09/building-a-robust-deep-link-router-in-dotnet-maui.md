---
title: "Building a Robust Deep Link Router in .NET MAUI"
link: https://shaunebu.com/Details/6b28071c-f917-4628-9274-19597d7ad3c4
description: "Jorge Perales Diaz treats deep links as external application requests, not internal Shell routes — building a reusable router that parses, matches, validates, and authorizes incoming URIs before navigating. It's the production-grade foundation for deferred links, deduplication, and secure external URL handling."
date: 2026-09-02
author: jpd21122012
contentType: article
---

Deep linking looks trivial until real apps arrive: cold-start timing, unauthenticated users, malformed parameters, duplicate delivery, and Android vs iOS delivering the same link through different mechanisms. Jorge Perales Diaz reframes it as a routing problem and builds a reusable Deep Link Router for .NET MAUI that keeps public URLs independent from your internal Shell hierarchy.

## What you'll learn

- **External vs internal routes** — why a public URL like `/products/42` shouldn't map directly to a Shell route, and how a router becomes the stable translation layer
- **Parse, match, validate** — a `DeepLinkRequest`, an allowlisted route registry, and a segment matcher that extracts dynamic parameters like `/products/{id}`
- **Authentication-aware routing** — deferring protected links to login and resuming the original intent afterward with a pending-link store
- **Startup, deduplication, and gates** — waiting on real application readiness, a `SemaphoreSlim` navigation gate, and duplicate-delivery protection
- **Platform integration and security** — thin Android/iOS receivers feeding one cross-platform router, route priorities, input validation, and redacting sensitive query values from logs

Read the full article for the complete component breakdown, route handlers, unit tests, and production architecture diagram.
