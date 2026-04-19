---
title: "Shiny.SqliteDocumentDb v2.0.0 — Table-Per-Type, Custom Ids, Diffing, and Batch Insert"
link: https://allanritchie.com/blog/2026/03/shiny-sqlitedocumentdb-v2/
description: "Allan Ritchie releases Shiny.SqliteDocumentDb v2 with table-per-type mapping, custom Id properties, RFC 6902 document diffing, and batch insert with prepared command reuse. The DI extensions have also moved to a separate package for lighter core dependencies."
date: 2026-03-22
author: aritchie
contentType: article
---

Version 2 of the SQLite document store focuses on flexibility. You can now map document types to dedicated tables, use any property as the document Id, diff objects against stored documents, and batch insert collections efficiently — all while keeping the simple "throw an object in, get it back out" API.

## What you'll learn

- How table-per-type mapping with `MapTypeToTable<T>()` gives document types their own SQLite tables
- How custom Id properties let you use `CustomerId`, `DeviceKey`, or any Guid/int/long/string property as the document key
- How `GetDiff()` returns an RFC 6902 `JsonPatchDocument<T>` for deep object comparison against stored documents
- How `BatchInsert` uses a single transaction with prepared command reuse for high-throughput inserts
- How to mix mapped and unmapped types in the same store
- The DI extensions package split and migration steps from v1
