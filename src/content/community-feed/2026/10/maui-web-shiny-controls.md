---
title: ".NET MAUI on the Web - and Most of Shiny Controls Just Works"
link: https://allanritchie.com/blog/2026/10/maui-web-shiny-controls/
description: "Allan Ritchie introduces Platform.Maui.Web, an experimental WebAssembly backend that renders MAUI controls as real DOM elements instead of Blazor components. He tested it by running the 68-page Shiny Controls gallery in a trimmed Release build, and the results are worth a look."
date: 2026-10-31
author: aritchie
contentType: article
---

"Can I run my MAUI app in a browser?" has usually meant rewriting the UI in Blazor. Allan Ritchie wanted the opposite: the same XAML, layouts and custom controls, running unchanged in a browser tab. His answer is **Platform.Maui.Web**, a MAUI backend for WebAssembly where each control maps to a real DOM element, with no Blazor or Razor involved. Buttons are `<button>`, entries are `<input>`, shapes render as SVG, and `GraphicsView` uses a 2D canvas.

## Putting it to the test

A purpose-built gallery is one thing, so Allan pointed the backend at an app that had no idea it was headed for the web. The Shiny Controls gallery already had a Linux head, so the web head is mostly that project with the GTK pieces swapped out, plus a one-line change in `MauiProgram`. He published a trimmed Release build and had Playwright walk every page in Chromium. All 68 pages opened without an exception, and the DataGrid, scheduler, docking panels, gauges and Mermaid diagrams all came along.

The explanation is straightforward. Most Shiny Controls are composed from MAUI primitives such as `Grid`, `Border`, `Label` and `GraphicsView`, so they work wherever those primitives do. The ones that wrap a native view are the ones still missing.

## Where it stands

- **Not there yet:** `MediaElement`, SkiaSharp views, and the controls built on `RecyclerView`-style native collections. `CollectionView` isn't virtualized either, so very large lists will struggle.
- **Lessons from trimming:** prefer `IQueryAttributable` over `[QueryProperty]`, remember that `OnPlatform` now matches `Web`, and note that images and raw assets share one root in the browser.
- **Try it:** it needs the .NET 10 SDK and no workload. Version 0.4.0 of both Platform.Maui.Web packages is on NuGet.

It's experimental, and Allan is asking for bug reports on the `shinyorg/mauiplatforms` repository. If you've wondered what a browser target for MAUI could look like, this is a candid and practical first look.
