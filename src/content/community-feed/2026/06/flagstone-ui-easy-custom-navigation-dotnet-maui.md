---
title: "Easy Custom Navigation with Flagstone UI"
link: https://goforgoldman.com/posts/flagstone/
description: "Matt Goldman announces the general availability of Flagstone UI, introducing FsShell — a drop-in Shell replacement that decouples navigation logic from its visual chrome in .NET MAUI. With FsShell, you keep everything Shell gives you (routing, lifecycle, navigation state) while building your tab bar and navigation UI entirely from cross-platform XAML or C#."
date: 2026-06-30
author: matt-goldman
contentType: article
---

This post is Matt's contribution to MAUI UI July 2026 and also marks Flagstone UI's graduation from experimental to generally available. The headline addition is `FsShell` — a subclassed, drop-in replacement for `Shell` that solves a long-standing .NET MAUI constraint: you've never been able to take Shell's routing without also taking Shell's default UI chrome.

That changes with `FsShell`. You swap the base class, and Shell's navigation logic stays intact. What you present on screen is entirely up to you.

## What you'll learn

- Why stock `Shell` couples navigation and presentation — and why that limits what you can build
- Swapping `AppShell : Shell` for `AppShell : FsShell` with no other changes, immediately unlocking `ItemTemplate` support for tabs
- Using `VisualStateManager` with `FsShell`'s custom `Selected`/`Unselected` states to drive tab styling and animations
- Building a custom tab bar with an action button (centre camera icon with notification badge), all in standard cross-platform .NET MAUI
- Replacing the tab bar entirely with a media player and expandable vertical nav menu — Shell's routing remains untouched throughout
- Why Flagstone UI is analogous to Tailwind: a styling surface that gives you more control, not a pre-built component library

The post walks through three sample apps of increasing complexity — a better default tab bar, an action-button pattern, and a media-player-at-the-bottom nav. Full source code is available in the [Flagstone UI repo](https://github.com/matt-goldman/flagstone-ui).

```
dotnet add package FlagstoneUI.Core --version 2.0.4
```
