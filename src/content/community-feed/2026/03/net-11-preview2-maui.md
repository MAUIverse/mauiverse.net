---
title: ".NET 11 Preview 2 Updates MAUI with Performance Improvements and Platform Refinements"
link: https://www.infoq.com/news/2026/03/net-11-preview2-maui
description: "Edin Kapić summarizes .NET 11 Preview 2 for .NET MAUI — leaner map XAML, faster typed bindings, and a few API consistency fixes. Incremental changes, but the binding and Map control wins are worth a look."
date: 2026-03-25
author: ekapic
contentType: article
---

.NET 11 Preview 2 for .NET MAUI is a refinement pass rather than a feature dump. Edin Kapić's InfoQ article walks through the concrete usability and performance fixes Microsoft shipped.

## What you'll learn

- **Map control ergonomics** — `TypeConverter` support for `Location`/`MapSpan`, plus a bindable `Map.Region` for cleaner XAML
- **Interactive map shapes** — `IsVisible`, `ZIndex`, and click events on polygons, polylines, and circles
- **Faster bindings** — typed and source-generated binding optimizations that cut execution time and allocations
- **Immutability annotations** — `Color` and `Font` changes that help the XAML source generator cache more aggressively
- **API and binding fixes** — `VisualStateManager` return-type alignment and nullable `Entry.Text` two-way binding behaving correctly

Read the full post for the numbers and the linked MAUI release notes on GitHub.
