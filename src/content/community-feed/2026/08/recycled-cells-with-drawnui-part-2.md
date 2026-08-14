---
title: "Recycled Cells with DrawnUI — Part II"
link: https://taublast.github.io/posts/RecycledCells2/
description: "Nick Kovalsky continues the DrawnUI recycled-cells series with three more list samples, a built-in items window, and WindowedSource for data that won't fit in memory. Part of a practical guide to picking MeasureFirst vs MeasureVisible and SkiaStack vs SkiaCachedStack for smooth .NET MAUI lists."
date: 2026-08-14
author: taublast
contentType: article
---

After [Part I](https://taublast.github.io/posts/RecycledCells/)’s news feed and chat samples, Nick Kovalsky returns with more DrawnUI list patterns — and library updates that make windowing a first-class concern instead of something every app reimplements by hand.

## What you'll learn

- **Three new samples** — a paged shop grid, a 1000-row contact list, and a XAML banner-card list in the [DrawnCells](https://github.com/taublast/DrawnCells) app, with a live engine overlay while you scroll
- **Built-in items window** — automatic limiting of cells, measuring, and drawing past a threshold (or from item one with `ForceItemsWindow`)
- **`WindowedSource<T>`** — a bounded in-memory slice over a remote/server data source for lists too large to hold entirely
- **Choosing your setup** — even vs uneven rows (`MeasureFirst` / `MeasureVisible`) and few big cells vs many small ones (`SkiaStack` vs `SkiaCachedStack`)
- **When to turn recycling off** — why a windowed chat can scroll smoother with recycling disabled and a pool sized to the window

Clone the samples, try the web demo and [DrawnUI fiddle](https://fiddle.drawnui.net/), and read the full post for the decision tables and wiring details.
