---
title: "MauiReactor 5 Beta: Hooks and .NET MAUI 11"
link: https://github.com/adospace/reactorui-maui/releases/tag/v5.0.0-beta.1
description: "Adolfo Marinucci has released the first beta of MauiReactor 5, which targets .NET MAUI 11 and adds a hooks-based way to write components. It's a good moment to look if you've been curious about MVU in MAUI and want a lighter alternative to state classes."
date: 2026-11-13
author: adospace
contentType: github
---

MauiReactor, the MVU library that lets you build .NET MAUI UIs in pure C#, has moved to .NET 11 and MAUI 11 with its 5.0.0-beta.1 release. Version 4 stays on .NET 10 and remains maintained on its own branch, while version 5 lives on `main`.

The headline feature is **hooks**. A component derived from `HookComponent` no longer needs a state class or a `SetState` call. Instead, you read and update state inside `Render()` with `UseState`, and `UseReducer`, `UseRef`, `UseEffect` and `UseMemo` are available too. Hook state survives hot reload, which is a good fit for the library's fast edit loop. A built-in analyzer also reports hooks that are called conditionally, in loops or outside `Render()`, so misuse shows up at build time. `Component<TState>` still works as before, so existing code doesn't have to move.

The release also picks up MAUI 11 features such as `LongPressGestureRecognizer`, Shell and toolbar badges, and the new Maps clustering, styling and click events. `WithKey(...)` is now honored when a list is reordered, so component state and native controls move with their item. The README notes that apps run on CoreCLR, with a minimum of Android API 24.

One caution from the author: MAUI 11 changed the iOS and Mac Catalyst navigation handlers, and `Appearing` now fires before a page is pushed. MauiReactor's navigation relies on those events, so test push/pop, modal and Shell navigation on iOS and open an issue if anything differs from version 4. The README has the template and hot reload setup steps for the beta.
