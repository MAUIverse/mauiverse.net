---
title: "Shiny Controls 1.0 — The Ultra Control Suite for .NET MAUI & Blazor"
link: https://allanritchie.com/blog/2026/08/shiny-controls-1-0/
description: "Allan Ritchie ships Shiny Controls 1.0, a huge suite with two real renderers — native .NET MAUI and real Blazor components — sharing one Material 3 token contract. It's the bottom sheets, chat views, schedulers, and camera pipelines you keep rebuilding, finally packaged as a library."
date: 2026-08-17
author: aritchie
contentType: article
---

Every app tends to include the same slow weeks: rebuilding a bottom sheet, a spinner button, another calendar, another chat screen. Allan Ritchie's Shiny Controls 1.0 is the answer to not writing that code again — one suite spanning native MAUI and real Blazor (no WebViews) from a shared theming contract.

## What you'll learn

- **One suite, two renderers** — the same control API on native .NET MAUI and real Blazor components, backed by a Material 3 token contract
- **ChatView without a Messages collection** — an `IChatSessionProvider`/`IChatSession` seam handling paging, optimistic send, reactions, receipts, and offline state
- **Walkthrough** — spotlight onboarding where steps live together in order, with `RememberRunKey` to run a tour once across MAUI and Blazor
- **Scheduler** — calendar, agenda, and event-list views over a single `ISchedulerEventProvider`, AOT-safe with lambda bindings
- **CameraView pipelines** — pluggable frame analysis (barcodes, OCR, structured documents, AI extraction) and live effects, with honest per-platform support flags
- **Token-based theming** — Basic/Ocean/Material/Terminal/Aurora packs plus a Theme Creator exporting JSON, Blazor CSS, or MAUI C#

Press the [live Blazor gallery](https://shinyorg.github.io/controls/) first, then read the full post for the complete control catalogue and deeper dives.
