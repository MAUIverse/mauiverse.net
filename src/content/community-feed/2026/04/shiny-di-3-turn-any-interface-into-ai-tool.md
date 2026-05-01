---
title: "Turn Any Interface Into an AI Tool — Shiny DI 3.0"
link: https://allanritchie.com/blog/2026/04/di-ai-tools/
description: "Allan Ritchie adds AI tool generation to the Shiny DI source generator. Mark a service interface with [Tool], add [Description] to methods and parameters, and the generator produces fully typed AIFunction subclasses — AOT-safe, with automatic argument extraction and DI registration."
date: 2026-04-26
author: aritchie
contentType: article
---

Writing `AIFunction` subclasses by hand for every operation you want to expose to an LLM is tedious and error-prone. Shiny DI 3.0 adds a `[Tool]` attribute to your existing service interfaces, and the source generator produces the AI tool adapters automatically — complete with metadata, argument parsing, and registration.

## What you'll learn

- How `[Tool]` on an interface and `[Description]` on methods/parameters drives AI tool generation
- How the source generator produces `AIFunction` subclasses with typed metadata and argument extraction
- AOT-safe argument extraction: direct `JsonElement` accessors for standard types, no reflection
- How `CancellationToken` parameters are handled automatically without being exposed to the LLM
- Conditional generation: AI tool code only emits when `Microsoft.Extensions.AI` is referenced
- How `AddGeneratedAITools()` registers all generated tools as transient `AITool` services
