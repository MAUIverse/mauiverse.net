---
title: "Shiny Mediator & AOT - Zero Reflection, Full Speed"
link: https://allanritchie.com/blog/2026/02/shinymediator-aot/
description: "Allan Ritchie details how Shiny Mediator replaced every piece of runtime reflection with compile-time source generation for full AOT and trimming support. The post covers seven source generators — from handler registration to JSON converters to OpenAPI client generation."
date: 2026-02-10
author: aritchie
contentType: article
---

Native AOT, trimming, and iOS's no-JIT constraint make reflection a liability. Shiny Mediator has gone all-in on source generation, replacing every runtime introspection point with compile-time code. This deep dive walks through each source generator and the design decisions behind them.

## What you'll learn

- How `[MediatorSingleton]` / `[MediatorScoped]` attributes replace assembly scanning with compile-time DI registration
- How typed executors eliminate `MakeGenericType` and `Activator.CreateInstance` for request dispatch
- The custom JSON serialization source generator that sidesteps the `System.Text.Json` chaining limitation
- How `[ContractKey]` generates cache and offline storage keys without property reflection
- How middleware attributes are extracted at compile time so `context.GetHandlerAttribute<T>()` works without `GetCustomAttributes()`
- OpenAPI HTTP client generation: contracts, handlers, JSON converters, and DI registration from a single MSBuild item
- ASP.NET endpoint source generation from handler method attributes
