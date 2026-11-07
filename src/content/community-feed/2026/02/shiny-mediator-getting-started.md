---
title: "Shiny Mediator - Getting Started"
link: https://allanritchie.com/blog/2026/02/shinymediator-gettingstarted/
description: "Allan Ritchie introduces Shiny Mediator, a mediator library designed for .NET MAUI and Blazor WebAssembly as well as ASP.NET. He makes the case for the pattern and shows the built-in offline mode, caching and validation."
date: 2026-02-07
author: aritchie
contentType: article
---

Mediators are often dismissed as over-engineering, but Allan Ritchie has seen large .NET MAUI teams stuck in constant "fire drills" where one team's change broke another's work. He built Shiny Mediator to give mobile and WebAssembly apps a mediator that works on their platforms, with more built in than a bare pipeline. He also acknowledges the trade-offs: handlers are harder to find by tooling, and long middleware chains can slow things down.

The post then walks through the main features, each with a short example:

- **Offline mode:** an `[OfflineAvailable]` attribute returns the last stored result when the device has no connection, with context that tells you when the data was stored
- **Caching:** a `[Cache]` attribute with expiry settings, a persistent cache for MAUI and Uno that survives restarts, and a way to force a refresh for pull-to-refresh
- **Validation:** Data Annotations or FluentValidation running before your handler sees the request
- **Performance logging and HTTP client generation:** diagnostics through Microsoft.Extensions.Diagnostics, plus generated clients from an OpenAPI spec

If your MAUI app has a lot of data access and navigation logic, this is a practical introduction to what a mediator can give you on mobile.
