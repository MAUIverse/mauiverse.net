---
title: "What's New in Shiny Mediator 6"
link: https://allanritchie.com/blog/2026/02/shinymediator-whats-new-v6/
description: "Allan Ritchie walks through Shiny Mediator 6, which targets .NET 8 and .NET 10 and overhauls HTTP client source generation. The release also adds event throttling, explicit middleware ordering and a response cache middleware."
date: 2026-02-08
author: aritchie
contentType: article
---

Shiny Mediator 6 raises the minimum to .NET 8 and .NET 10, which brings better trimming and AOT readiness. The biggest change is HTTP client generation: the source generator now produces handlers, contracts, JSON converters and DI registration, where before you wired up handlers and serialization yourself. That's a breaking change, so the post includes migration tips, and `DirectHttpRequest` has been removed in favour of the `[Http]` attribute.

The new features most relevant to app developers:

- **`[Throttle]`:** a debounce for event handlers, handy for search-as-you-type or sensor data, where only the latest value matters
- **`[MiddlewareOrder]`:** explicit ordering instead of relying on DI registration order, fully opt-in
- **HTTP response cache middleware:** respects `CacheControl` MaxAge headers from your API automatically
- **`PublishToBackground` and Server-Sent Events:** a child scope for fire-and-forget events, and `IAsyncEnumerable<T>` streams wired to SSE endpoints

Fixes include a redesigned `EventStream` that was dropping events under load. If you already use Shiny Mediator in a MAUI app, it's a quick read before you upgrade.
