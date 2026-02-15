---
title: "FlagstoneUI: consistent MAUI UI, no platform code"
link: https://github.com/matt-goldman/flagstone-ui
description: An experimental control set for .NET MAUI focused on truly consistent visuals and behavior across platforms, closing common styling gaps without custom handlers.
date: 2026-02-07
author: matt-goldman
---

.NET MAUI’s “native controls” approach is great—until your design system needs the kind of visual control that isn’t exposed uniformly (borders, radii, backgrounds, focus states…).

**FlagstoneUI** is an experimental project aiming to close that gap with a neutral set of controls that behave consistently across platforms, without dropping into per-platform handler code.

### What’s available today

- Core controls like `FsButton`, `FsEntry`, `FsCard`, `FsEditor`
- A **token-based theming** approach (colors, spacing, shapes, typography)
- A Material theme package + sample themes
- Integrations that help reuse existing validation approaches (via Community Toolkit adapters)

### Why it matters

- If you care about **pixel-consistent UI** across iOS/Android/Windows/macOS, this is exactly the pain point.
- It’s also a good place to watch (or contribute) if you’re interested in the future of “design-system-first” MAUI UI.

Project link:

- [FlagstoneUI on GitHub](https://github.com/matt-goldman/flagstone-ui)

