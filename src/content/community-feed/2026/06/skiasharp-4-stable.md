---
title: "SkiaSharp 4.0 Is Here: Announcing the First Stable Release"
link: https://devblogs.microsoft.com/dotnet/skiasharp-4-0-stable/
description: "Matthew Leibowitz announces SkiaSharp 4.148.0, the first stable v4 release, with a current Skia engine, new font and image capabilities, lifecycle fixes, and substantial rendering gains. See what changed, how the new Microsoft and Uno Platform co-maintenance cadence works, and what the Graphite-powered preview brings next."
date: 2026-06-30
author: mattleibow
contentType: article
---

SkiaSharp 4.148.0 turns the v4 preview work into a stable package ready for production use across mobile, desktop, web, and server workloads. Beyond visible features, this release modernizes the native engine, API surface, testing infrastructure, security posture, and release process.

## What you'll learn

- **What the m148 engine upgrade delivers** — sharper downscaled images, automatic photo orientation, more accurate color, security updates, codec improvements, and broad performance work arrive without application code changes
- **Which creative capabilities are new** — control OpenType variable-font axes, select color-font palettes, and encode animated WebP files with `SKWebpEncoder`
- **Why the API is safer** — retired legacy APIs and corrected native-singleton reference counting remove a class of use-after-free crashes caused by managed wrappers being finalized during native calls
- **Where performance improved** — initial OpenGL testing shows shadow-heavy UI scenes rendering up to 24 percent faster, while CPU-based Perlin-noise shaders run roughly six times faster
- **How releases will stay current** — stable and preview channels now track the corresponding Chrome Skia milestones through joint maintenance by the .NET and Uno Platform teams
- **What comes next** — SkiaSharp 4.150.0 Preview 2 introduces the Graphite GPU backend alongside new image, color-filter, and SkSL image-filter APIs

Open the announcement for benchmark details, migration and release links, interactive samples, and the story behind the collaboration that is keeping SkiaSharp aligned with upstream Skia.
