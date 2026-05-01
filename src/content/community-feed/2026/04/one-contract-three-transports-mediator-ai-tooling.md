---
title: "One Contract, Three Transports — Mediator AI Tooling"
link: https://allanritchie.com/blog/2026/04/mediator-ai-tools/
description: "Allan Ritchie shows how Shiny Mediator 6.3 turns any mediator contract with a [Description] attribute into a fully typed AI tool — with zero adapter code. The same contract can simultaneously serve as an AI tool, a typed HTTP client, and a REST endpoint."
date: 2026-04-26
author: aritchie
contentType: article
---

Writing a single C# record that automatically becomes an AI tool, an HTTP client, and an API endpoint — that's the contract-first approach in Shiny Mediator 6.3. Add `[Description]` to a contract, set one MSBuild property, and the source generator produces a fully typed `AIFunction` with JSON schema, argument parsing, and DI registration.

## What you'll learn

- How `[Description]` on contracts and properties drives AI tool generation from mediator contracts
- How the generated `AIFunction` dispatches through the mediator pipeline, so all existing middleware (logging, validation, caching) applies automatically
- Full AOT compliance: static JSON schema, constructor-based hydration, no reflection
- Supported type mappings: strings, numbers, bools, enums, arrays, nullable types, and default values
- How the same contract can power AI tools, HTTP clients, and ASP.NET endpoints simultaneously
- Scaling to many tools: add a contract with `[Description]`, implement the handler — done
