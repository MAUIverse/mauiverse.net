---
title: "Shiny.DocumentDb v13 — Encryption, an Outbox, and a Front Door"
link: https://allanritchie.com/blog/2026/08/documentdb-v13/
description: "Allan Ritchie ships Shiny.DocumentDb v13 with field-level encryption, a transactional outbox, HTTP/MCP front doors, and a ConfigureDocument rewrite. It's a big release at the edges of the store — what sits in front of your documents and what the write hands off next."
date: 2026-08-12
author: aritchie
contentType: article
---

Allan Ritchie frames Shiny.DocumentDb v13 as the release where the document store stops being “just a place to put JSON.” The interesting work is at the edges: encryption at rest, an outbox that commits with the write, HTTP and MCP front doors, and admin tooling that finally gets the spotlight.

## What you'll learn

- **`ConfigureDocument<T>`** — the breaking consolidation of flat per-type mapping APIs into one builder, plus validate-on-build that reports every config problem at once
- **Field-level encryption** — AES-GCM property encryption via `JsonTypeInfo` modifiers, including deterministic mode for equality filters and what changes for OData / AI tool responses
- **Transactional outbox** — enqueue messages in the same unit of work as the write (relational providers and LiteDB), with backoff, dead-lettering, and restored `traceparent`
- **HTTP and MCP front doors** — `MapDocuments` endpoints with filter allowlists and request-scoped tenancy, plus a read-only-by-default MCP server for Claude
- **Admin upgrades** — encryption-aware browsing without a key, a terminal `dotnet tool` admin UI, Docker Desktop extension auto-discovery, Orleans streams, and a real `LockMode` fix

Read the full post for the migration table, provider caveats, and the rest of the changelog before you upgrade.
