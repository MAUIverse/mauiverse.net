---
title: ".NET MAUI Finally Gets Maps Clustering and Long Press - .NET 11 Preview 3"
link: https://www.youtube.com/watch?v=nfJS1R27b_c
description: "Gerald Versluis walks through the .NET MAUI highlights in .NET 11 Preview 3, including pin clustering, custom pin icons, long press gesture recognizer, and XAML source generation enabled by default. Some of these features have been requested since the Xamarin.Forms days."
date: 2026-04-15
author: jfversluis
contentType: video
---

.NET 11 Preview 3 brings a batch of long-awaited .NET MAUI improvements. Gerald demos each one with a sample app, showing what the code looks like and how easy the new APIs are to use.

## What you'll learn

- Maps upgrades: pin clustering with `ClusteringIdentifier`, custom pin icons via `ImageSource`, `MapLongClicked` event, and click handlers on circles, polygons, and polylines
- The new `LongPressGestureRecognizer`: built-in long press support with `MinimumPressDuration`, state tracking, position tracking, and command binding — no more toolkit workarounds
- XAML improvements: implicit namespace declarations enabled by default, XAML source generation compiling XAML to C# for faster startup
- New styles API with `InvalidateStyle()` and `VisualStateManager.InvalidateVisualStates()` for Hot Reload
- Build improvements: smaller release builds (77.8 MB down to 41.6 MB on Apple platforms) and faster incremental builds
- How to safely test .NET 11 previews locally without affecting your system-wide .NET installation
