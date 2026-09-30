---
title: "I Open-Sourced Vamoriq — The .NET MAUI Boundary That Keeps AI Optional"
link: https://medium.com/@mikhail.petrusheuski/i-open-sourced-vamoriq-the-net-maui-boundary-that-keeps-ai-optional-88d087a94d2f
description: "Mikhail Petrusheuski open-sources Vamoriq, a .NET MAUI daily-mission app whose core loop keeps working when the model, API, auth, or network doesn't. The interesting part isn't that it calls AI — it's the boundary: curate a valid mission first, personalize within an 8-second budget, then persist locally."
date: 2026-09-08
author: mikhailpetrusheuski
contentType: article
---

Vamoriq gives people one small daily mission to explore a new city, personalized with AI. Mikhail Petrusheuski open-sourced it (MIT) not to show that a mobile app calls AI, but to show where it refuses to depend on it: curate a valid mission, let AI adapt it within a bounded budget, then persist the result locally.

## What you'll learn

- **The product decision precedes the AI call** — picking a valid curated mission first, so a model outage never means a blank screen
- **Failure as a normal branch** — an 8-second linked cancellation budget, returning the curated fallback on unauthenticated, timed-out, malformed, or unusable responses
- **Partial output doesn't erase curated data** — mapping the AI DTO field-by-field back onto curated values, and validating domain invariants for higher-risk domains
- **Offline-first means persisting the decision** — storing the chosen mission, streaks, and proof in SQLite keyed by local date, so continuity doesn't depend on the network
- **The curated catalog is infrastructure** — a localized, tiered, de-duplicating mission library is exactly what makes the AI layer optional
- **A boundary worth stealing** — the questions to ask of any AI-assisted .NET feature about what valid object exists, how much latency is allowed, and what gets persisted

Read the full post for the code and the [MIT-licensed repository](https://github.com/mikhailpetrusheuski/vamoriq).
