---
title: "Shiny.Data.Sync — Offline-First Record Sync, Built on Jobs & HTTP Transfers"
link: https://allanritchie.com/blog/2026/06/datasync/
description: "Allan Ritchie introduces Shiny.Data.Sync, filling the gap between Shiny Jobs and HTTP Transfers with a durable offline-first record sync library. Queue CRUD operations offline, drain on reconnect, and pull server deltas — all riding the same platform-tiered background execution model."
date: 2026-06-13
author: aritchie
contentType: article
---

Shiny.Data.Sync addresses the middle ground between periodic background tasks (Jobs) and large file transfers (HTTP Transfers) — reliably syncing Create, Update, and Delete record operations through a persistent outbox that survives app kills and drains on reconnect.

## What you'll learn

- How Data Sync builds on the same OS-specific background execution model as Shiny Jobs (BGTaskScheduler, WorkManager) and HTTP Transfers (NSURLSession, foreground services)
- The persistent outbox pattern: queue operations that survive app restarts with exponential backoff
- Cursor-based inbox pulls for server deltas with configurable `MinPullInterval` throttling
- Configuring endpoints with `SyncDirection`, batching, conflict policies, and max retry attempts
- How Jobs, HTTP Transfers, and Data Sync compose together in a real offline-first app — each handling their specific lane
