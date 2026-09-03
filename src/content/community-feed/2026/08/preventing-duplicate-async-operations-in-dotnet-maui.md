---
title: "Preventing Duplicate Async Operations in .NET MAUI"
link: https://shaunebu.com/Details/1b9d7453-886b-4510-a418-f176bfaed671
description: "Jorge Perales Diaz tackles the double-tap Save, overlapping refreshes, and racing navigation that async makes so easy to introduce. He moves past a simple IsBusy flag to reusable execution policies — reject, wait, cancel, share, or queue — built on SemaphoreSlim, cancellation, and single-flight patterns."
date: 2026-08-31
author: jpd21122012
contentType: article
---

Async makes concurrency easy to introduce even when it was never intended: a double-tapped Save sends two requests, a refresh overlaps a reconnect, two navigation commands stack the same page. Jorge Perales Diaz explains why an `IsBusy` flag isn't always enough and builds reusable patterns for deciding what should happen when an operation is requested while it's already running.

## What you'll learn

- **Why `IsBusy` can fail** — separating UI state from concurrency control, and the check-then-set window across multiple entry points
- **A reusable async guard** — a `SemaphoreSlim`-based `AsyncExecutionGuard` with `WaitAsync(0)` to reject duplicates, result wrappers, and full cancellation flow
- **Choosing an execution policy** — reject, wait, cancel-previous, queue, share, or allow — mapped to Save, search, navigation, uploads, and initialization
- **Single-flight and keyed locks** — sharing one in-flight task for token refresh and app init, plus per-resource `ConcurrentDictionary` gates
- **Search done right** — latest-wins cancellation plus debouncing, and why client-side guards still need server-side idempotency keys

Read the full article for the guard implementation, strategy comparison tables, concurrency tests, and a production Save ViewModel.
