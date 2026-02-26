---
title: "Shiny Sqlitedocumentdb"
link: https://allanritchie.com/blog/shiny-sqlitedocumentdb/
description: "Allan Ritchie introduces Shiny.SqliteDocumentDb, a lightweight SQLite-backed document store designed to simplify working with nested data in .NET and .NET MAUI apps. The post explains how its LINQ-powered JSON querying, AOT friendliness, and strong performance make it an appealing alternative to traditional SQLite patterns."
date: "2026-02-22"
author: "aritchie"
contentType: "article"
---

Allan Ritchie introduces Shiny.SqliteDocumentDb, a lightweight document database layer over SQLite aimed squarely at .NET and .NET MAUI developers who are tired of wrestling with table schemas and object rehydration. 

The post walks through the motivation behind the library and shows how it lets you store and query rich object graphs as JSON documents while still benefiting from SQLite’s reliability and footprint.

You will see how the library uses a fluent LINQ-based query builder that translates expressions into json_extract SQL, enabling filtering, projections, aggregates, and even indexed queries over nested data. Allan also makes a strong case for the document approach on mobile, covering AOT friendliness, trimming safety, bundle size considerations, and why EF Core can be a poor fit on Apple platforms. Benchmarks, indexing strategies, streaming support, and transactional patterns round out a very practical deep dive.

If you are building MAUI or mobile apps that deal with nested local data, this is a compelling look at an alternative persistence model worth evaluating.