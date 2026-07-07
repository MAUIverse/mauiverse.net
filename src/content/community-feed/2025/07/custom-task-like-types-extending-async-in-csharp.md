---
title: "Custom Task-like Types (Extending async in C#)"
link: https://shaunebu.com/iaLIt
description: "Jorge Perales Diaz explores one of C#'s most underrated features: building your own awaitable types that work with async/await without inheriting from Task. He shows how following the awaitable pattern unlocks zero-allocation, domain-specific async for games, servers, and embedded scenarios."
date: 2025-07-03
author: jpd21122012
contentType: article
---

`Task` is the default, but it's not the only way to be awaitable. This post explains how C#'s "awaitable pattern" lets you build custom task-like types for performance, control, and domain-specific async behavior.

## What you'll learn

- Why you'd want a custom awaitable: avoiding heap allocations, controlling scheduling/thread context, and integrating with other platforms
- The exact awaitable pattern — `GetAwaiter()`, `INotifyCompletion`, `IsCompleted`, `GetResult()`, and `OnCompleted(Action)` — with no inheritance required
- Building a minimal `MyAwaitable`/awaiter step by step, and how `IsCompleted`, `OnCompleted`, and `GetResult` interact
- How `ValueTask<T>` and struct-based awaitables reduce GC pressure in high-throughput code
- Real-world use cases (game engines, high-performance servers, embedded/IoT, testing) and the caveats around debugging and complexity

Worth a read if you want to level up your understanding of how async/await really works under the hood.
