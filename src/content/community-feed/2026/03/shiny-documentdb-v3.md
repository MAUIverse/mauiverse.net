---
title: "Shiny.DocumentDb v3 — One API, Four Databases"
link: https://allanritchie.com/blog/2026/03/shiny-documentdb-v3/
description: "Allan Ritchie announces Shiny.DocumentDb v3, expanding the schema-free document store from SQLite-only to support MySQL, SQL Server, and PostgreSQL through a provider abstraction. Same fluent query API, same LINQ expressions, same AOT support — different backend."
date: 2026-03-25
author: aritchie
contentType: article
---

What started as a simple SQLite document store now runs on four database engines. Shiny.DocumentDb v3 introduces a provider abstraction that lets you swap between SQLite, MySQL, SQL Server, and PostgreSQL while keeping your entire data layer — queries, projections, indexes, transactions — completely identical.

## What you'll learn

- How the `IDatabaseProvider` interface enables backend-agnostic document storage
- How the fluent query builder translates LINQ expressions into the correct SQL dialect per provider (`json_extract`, `JSON_VALUE`, `jsonb` operators, etc.)
- Per-provider DI extension methods for quick registration
- Why multiple database support matters: server-side caches, team standardization, prototyping-to-production transitions
- Migration steps from `Shiny.SqliteDocumentDb` v2 to the new package structure
- Everything that carries forward: streaming, JSON indexes, table-per-type, diffing, batch insert, AOT support
