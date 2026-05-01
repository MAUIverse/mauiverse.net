---
title: "DocumentDb AI Tools — Give Your LLM a Database"
link: https://allanritchie.com/blog/2026/04/documentdb-ai-tools/
description: "Allan Ritchie introduces Shiny.DocumentDb.Extensions.AI, which generates Microsoft.Extensions.AI tool functions from your registered document types. Each type can expose up to seven operations — get, query, count, aggregate, insert, update, and delete — with full control over capabilities and field visibility."
date: 2026-04-26
author: aritchie
contentType: article
---

Want an LLM agent to answer questions about your document store data — or modify it — without custom glue code for every operation? This package generates AI tools from your registered document types with a one-time setup, complete with structured query filters, field visibility controls, and capability flags.

## What you'll learn

- How to register document types as AI tools with `AddDocumentStoreAITools()` and configure per-type capabilities
- The seven available operations: get by ID, query, count, aggregate, insert, update, and delete
- How structured filters with boolean combinators (`and`, `or`, `not`) translate into LINQ expressions
- How to control field visibility with `AllowProperties` and `IgnoreProperties` to hide sensitive data from the LLM
- Capability flags: `ReadOnly`, `All`, or custom combinations per document type
- AOT-safe implementation using `JsonTypeInfo<T>` from source-generated JSON contexts
