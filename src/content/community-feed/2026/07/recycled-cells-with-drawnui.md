---
title: "Recycled Cells with DrawnUI"
link: https://taublast.github.io/posts/RecycledCells/
description: "Nick Kovalsky explains when and how to replace .NET MAUI's CollectionView with a drawn alternative for complex, high-performance lists using DrawnUI and SkiaSharp. The post breaks down recycled-cell mechanics through two real samples — an infinite news feed and a windowed chat list — with the XAML, C#, and gotchas to make each one scroll smoothly."
date: 2026-07-06
author: taublast
contentType: article
---

`CollectionView` reuses views to keep memory in check, but pixel-perfect designs, mixed cell templates, and buttery-smooth scrolling can push against what a native control comfortably handles. Nick Kovalsky makes the case for a drawn alternative built on [DrawnUI](https://drawnui.net/) and SkiaSharp, where the same C# renders identically across .NET MAUI mobile and desktop, Blazor, and OpenTK.

## What you'll learn

- **How recycled cells actually work** — why large or unknown-size data sources need a limited window of rendered cells, and the re-measure/re-render cost that makes recycling tricky
- **Choosing the right layout** — `SkiaLayout` with `RecyclingTemplate="Enabled"` inside `SkiaScroll`, and when to reach for `SkiaCachedStack` with double buffering for many visible cells
- **Working with `ObservableCollection`** — why `ObservableRangeCollection` and `AddRange()` matter, and the main-thread rules that differ between `CollectionView` and DrawnUI
- **News Feed sample** — progressive measurement with `MeasureVisible`, appending pages via `LoadMore` without resetting, and building one `SkiaDynamicDrawnCell` that handles every content type by toggling `IsVisible` at zero cost
- **Chat List sample** — a limited data window, two-directional load-more, inverted scrolling with `Rotation` and `ReverseGestures`, scroll-to-element, and handling keyboard offset and focus

Both samples ship as runnable projects (they even run on the web), and Nick links the full tutorials and source. Read the post to see the trade-offs against native controls and grab the patterns for your own complex lists.
