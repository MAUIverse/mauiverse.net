---
title: "KumikoUI - A Free, Open-Source DataGrid for .NET MAUI"
link: https://www.ston.is/blog/maui/kumiko-ui/
description: "Michael Stonis introduces KumikoUI, a fully canvas-drawn DataGrid for .NET MAUI built with SkiaSharp. Free, MIT-licensed, and packed with features like filtering, grouping, inline editing, and frozen columns — designed to fill the gap between limited free grids and expensive suite licenses."
date: 2026-03-05
author: michaelstonis
contentType: article
---

The paid DataGrid options for MAUI are expensive, and the free ones stop short of the features that business applications actually need. KumikoUI is Michael Stonis's answer: a fully canvas-drawn DataGrid using SkiaSharp, delivering identical, pixel-perfect output across iOS, Android, macOS Catalyst, and Windows.

### What you will learn

- Why a canvas-drawn approach was chosen over native controls, and the tradeoffs involved
- The feature set: filtering, grouping, summaries, inline editing, frozen columns/rows, drag-and-drop reorder
- How the rendering is abstracted behind an `IDrawingContext` interface, with `KumikoUI.Core` having zero dependency on MAUI or SkiaSharp — making future ports to UNO or Blazor possible
- How to get started via the [NuGet package](https://www.nuget.org/packages/KumikoUI.MAUI/)
- How to explore the [sample app](https://github.com/TheEightBot/KumikoUI) including a 100K-row stress test
