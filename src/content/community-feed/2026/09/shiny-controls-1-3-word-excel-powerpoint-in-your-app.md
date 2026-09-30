---
title: "Shiny Controls 1.3 — Word, Excel and PowerPoint in Your App. Free."
link: https://allanritchie.com/blog/2026/09/shiny-controls-1-3/
description: "Allan Ritchie ships Word, Excel, PowerPoint and a OneNote-style notebook — real editors and viewers, on .NET MAUI and Blazor, drawn natively with SkiaSharp and no WebViews — MIT-licensed and free. Plus ribbons across all editors, find, slide presenting, an IMediaService camera, TimelineView, and 111 motion icons."
date: 2026-09-04
author: aritchie
contentType: article
---

Document editing components for .NET come with per-seat royalties, WebView rendering, or Windows-only support. Allan Ritchie's Shiny Controls 1.3 puts Word, Excel, PowerPoint and a notebook — editors *and* viewers — in the box for nothing, natively drawn with SkiaSharp and shared verbatim between MAUI and Blazor.

## What you'll learn

- **Four Office surfaces, not viewers** — `DocumentEditorView`, `SlideEditorView`, `SpreadsheetView`, and a new free-form `NotebookEditor`, each with a read-only sibling, from one shared painter and layout engine
- **A notebook where the page has no edges** — infinite-canvas design, ink as a model (pressure 0..1, highlighter under text, point-eraser splitting strokes, path-based hit testing) and `.shinynote` files
- **Ribbons everywhere** — titled, tabbed groups with fixed undo/redo, `Ribbon.SimplifyBelowWidth` for phones, and a MAUI namespace move (`Shiny.Maui.Controls.Ribbons`)
- **Find and presenting** — `Ctrl+F` across Word/PowerPoint/Excel over one `IFindController`, and full-screen deck presenting with speaker notes on both hosts
- **`IMediaService`** — a camera you call, not a screen you build: `TakePhotoAsync`, plus barcode/credit-card/passport/business-card scanners with duplicate filtering
- **TimelineView and 111 motion icons** — a progress rail and authored (not preset) icon motion, including mirrored RTL directional sets

Press the [live Blazor gallery](https://shinyorg.github.io/controls/) first, then read the full post for the design decisions behind each control.
