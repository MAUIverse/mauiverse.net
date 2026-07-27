---
title: "Shiny.DocumentDb — Doing All the Things (v12)"
link: https://allanritchie.com/blog/2026/07/documentdb-v12/
description: "Allan Ritchie ships Shiny.DocumentDb v12 with a phpMyAdmin-style browser for schema-free stores, type-free JSON collections, cancellable interceptors, and a built-in soft delete. It's three releases in three days, verified with real AOT publishes and cross-provider conformance tests."
date: 2026-07-27
author: aritchie
contentType: article
---

Debugging a schema-free document store usually means squinting at a wall of minified JSON in a SQL client. Allan Ritchie's v12 release of Shiny.DocumentDb fixes that with a dedicated admin UI, and then keeps going — type-free collections, smarter interceptors, and a soft delete built entirely from public building blocks.

## What you'll learn

- **ShinyDocDbMyAdmin** — a single Docker image that infers columns from sampled JSON, diffs temporal history field-by-field, renders GeoJSON as SVG maps, and ships a parameterized SQL console
- **Type-free JSON collections** — insert and query plain `JsonObject`s with no CLR class, using the same string-grammar querying as typed documents
- **Interceptors that can say "I've got this"** — `ctx.Cancel()` lets a `BeforeWrite` hook replace an operation entirely (like turning a delete into an archive) without a shadow write
- **Soft delete, composed not bolted-on** — built from the new interceptor cancellation and a named query filter, working identically across every provider
- **A shared query/write pipeline** — ~4,300 lines deleted by collapsing nine near-identical provider implementations into `DocumentQueryBase<T>`, which caught four real cross-provider bugs on its first conformance run
- **AOT verified, not assumed** — every package now declares `IsAotCompatible`, checked by a sample that publishes with `PublishAot=true` and fails the build on any trim warning

Read the full post for the Aspire integration, the full provider list across 19 backends, and the breaking changes to plan around before upgrading.
