---
title: "Implementing Idempotent Commands in .NET MAUI"
link: https://shaunebu.com/Details/ffe8217a-9752-4d9d-a62b-cc62eb68d56d
description: "Jorge Perales Diaz gives each logical command a stable identity so processing it twice has the same effect as once — beyond just blocking concurrent taps. Covers command IDs, duplicate detection, persistent tracking, HTTP idempotency keys, MVVM integration, and the client-vs-server failure windows."
date: 2026-09-17
author: jpd21122012
contentType: article
---

A user taps Submit, a retry fires, a sync engine redelivers, or a request reaches the server while its response is lost — technically different executions that mean the same business operation. Jorge Perales Diaz builds an idempotent command architecture for .NET MAUI so duplicates produce the same intended effect as a single run.

## What you'll learn

- **Idempotency vs concurrency** — why preventing concurrent execution isn't the same as making repeated execution safe
- **Designing an idempotent command** — stable command IDs, command results, and a handler that detects and short-circuits duplicates
- **Tracking processed commands** — in-memory vs persistent idempotency stores, with expiration and cleanup
- **Concurrent duplicates and MVVM** — handling overlapping executions and wiring idempotent commands into ViewModels
- **HTTP idempotency** — idempotency keys on the wire, client vs server responsibilities, and the failure windows where a lost response causes duplicates

Read the full article for the handler implementation, persistence, tests, and when idempotency isn't necessary.
