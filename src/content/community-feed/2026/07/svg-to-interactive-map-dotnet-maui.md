---
title: "SVG to Interactive Map"
link: https://blog.bijington.com/2026/07/21/svg-to-interactive-map.html
description: "Shaun Lawrence turns a world map SVG and a pack of flag SVGs into a pannable, zoomable, tappable interactive map in .NET MAUI with SkiaSharp. Inspired by the World Cup, it's a practical guide to drawing vector data cross-platform without platform-specific code."
date: 2026-07-21
author: bijington
contentType: article
---

Part of the MAUI UI July series, this World Cup-inspired post from Shaun Lawrence shows how to bring a map to life in .NET MAUI: load countries, paint their shapes, and drop each national flag inside its outline.

## What you'll learn

- **Parsing SVG geometry** — reading a world map SVG as XML and extracting the `path` elements, grouped by country
- **Turning paths into Skia** — combining SVG path data into `SKPath` objects with `ParseSvgPathData` for filling, clipping, and hit-testing
- **Loading flag SVGs** — using `Svg.Skia` and `FileSystem.OpenAppPackageFileAsync` to load per-country flags into bitmaps
- **Clipping flags to shapes** — using `canvas.ClipPath` so each flag is painted only within its country outline, scaled and centered
- **Making it interactive** — supporting pan, zoom, and tap selection on an `SKCanvasView`

Read the full post for the complete rendering pipeline and a link to the sample on GitHub.
