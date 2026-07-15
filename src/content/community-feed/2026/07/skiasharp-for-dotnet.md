---
title: "SkiaSharp for .NET"
link: https://platform.uno/blog/skiasharp-for-dotnet/
description: "Uno Platform traces how SkiaSharp became the pixel-perfect, GPU-accelerated rendering backbone shared by .NET MAUI, WinUI 3, and Uno Platform. Read the retrospective for the technical tradeoffs behind a single cross-platform drawing API and what SkiaSharp 4.0's new co-maintenance model means for its future."
date: 2026-07-13
author: unoplatform
contentType: article
---

SkiaSharp has spent a decade closing the gap left by platform-specific .NET drawing stacks, often working underneath applications and frameworks without developers seeing it directly. Uno Platform explains that history, the value of binding Google's battle-tested Skia engine, and why the stable v4 release begins a more active chapter.

## What you'll learn

- **Why .NET needed a shared renderer** — Windows Forms, WPF, `System.Drawing`, and Win2D solved specific Windows scenarios, while SkiaSharp offered one API across mobile, desktop, Linux, and the web
- **What consistency buys you** — the same drawing code can produce pixel-accurate output across different operating systems, CPU architectures, GPUs, and native graphics stacks
- **Where hardware acceleration matters** — SkiaSharp uses available GPU capabilities while insulating application code from driver and platform differences
- **How .NET MAUI uses it** — SkiaSharp can back .NET MAUI Graphics when exact custom rendering is required and also participates in build-time asset and app-icon processing
- **Why Uno Platform depends on it** — SkiaSharp underpins Uno's consistent C# and XAML rendering across Windows, macOS, Linux, iOS, Android, and WebAssembly
- **What v4 changes** — Skia milestone m148, corrected object lifecycles, variable and color fonts, animated WebP, GPU performance gains, and a predictable Microsoft–Uno release cadence move the project forward

Read the full article for the rendering history, insights from .NET MAUI engineering lead Jonathan Dick, and links to try SkiaSharp directly in the browser.
