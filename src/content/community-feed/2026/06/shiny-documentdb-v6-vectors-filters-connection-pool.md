---
title: "Shiny.DocumentDb v6 — Vectors, Filters & a Real Connection Pool"
link: https://allanritchie.com/blog/2026/06/documentdb-v6/
description: "Allan Ritchie releases Shiny.DocumentDb v6 with vector/ANN search across six database engines, EF Core-style global query filters, composite JSON indexes, and real connection pooling for server SQL. This release takes DocumentDb from mobile-first to server-ready."
date: 2026-06-01
author: aritchie
contentType: article
---

Shiny.DocumentDb v6 closes five major gaps that have been on the wish list since v3. The same zero-schema document model and AOT story remain, but v6 adds capabilities that make it viable for real ASP.NET Core services alongside its existing mobile strengths.

## What you'll learn

- **Vector/ANN search** — one API that translates to pgvector, SQL Server 2025 DiskANN, Cosmos DB, MongoDB Atlas, DuckDB vss, and sqlite-vec
- **Global query filters** — `AddQueryFilter<T>()` that enforces predicates on every read path, matching EF Core's `HasQueryFilter` semantics
- **Composite JSON indexes** — multi-expression index creation across all relational providers
- **Connection pooling** — server SQL providers (PostgreSQL, MySQL, SQL Server) now use ADO.NET driver pools instead of a single in-process semaphore
- **Per-query change monitoring** — `.NotifyOnChange()` on fluent queries filtered by their own `Where` predicates
- Auto-embedding on insert with `Shiny.DocumentDb.Extensions.AI`
