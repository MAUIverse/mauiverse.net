---
title: "Shiny.DocumentDb — Hidden Gems"
link: https://allanritchie.com/blog/2026/08/documentdb-hidden-gems/
description: "Allan Ritchie digs into the Shiny.DocumentDb features that never got a proper write-up — diffs, temporal audit trails, raw JSON terminals, and interceptor-built soft delete. If you already use DocumentDb, this is the guided tour of the APIs you'll want next."
date: 2026-08-13
author: aritchie
contentType: article
---

Thirteen releases leave a lot of useful surface buried under one-line bullets. Allan Ritchie walks through the DocumentDb capabilities he actually reaches for — the ones that change how you write the surrounding code, not just the changelog.

## What you'll learn

- **Diffs before you save** — `GetDiff`, merge-style `Upsert`, and `SetProperty` / `RemoveProperty` for targeted JSON updates without a read-modify-write round trip
- **Temporal as an audit trail** — one `MapTemporal` line for history, point-in-time reads, per-actor change logs, patches between versions, and restore
- **Raw JSON terminals** — return stored JSON (or stream a JSON array) from a typed LINQ query without deserialize-then-serialize overhead
- **Soft delete as composition** — how interceptors and named query filters build soft delete (and an append-only archive) without provider-specific code
- **Quick hits** — `ToQueryString()`, cursor pagination, Soundex, change feeds, seeders, JSON Schema validation, computed properties, and maintenance APIs

Read the full post for the code samples and the under-sold admin tooling (terminal UI and Docker Desktop extension) Allan is finally highlighting.
