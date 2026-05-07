---
title: ".NET 11 Preview 3 Is Now Available"
link: https://devblogs.microsoft.com/dotnet/dotnet-11-preview-3/
description: ".NET 11 Preview 3 delivers major .NET MAUI improvements including map pin clustering, LongPressGestureRecognizer, and XAML/styling enhancements. The release also brings C# union types, runtime async improvements, Zstandard compression, and more across the full .NET stack."
date: 2026-04-15
author: dotnet
contentType: article
---

The third preview of .NET 11 is here, and it brings some of the most-requested features to .NET MAUI alongside improvements to the runtime, SDK, libraries, ASP.NET Core, C#, and Entity Framework Core.

## What you'll learn

- **Maps:** Pin clustering with `IsClusteringEnabled`, custom pin icons via `ImageSource`, JSON map styling, `MapLongClicked` event, and click events for circles/polygons/polylines
- **XAML & Styling:** On-demand `ResourceDictionary` inflation, implicit XAML namespace declarations by default, `InvalidateStyle()` and `VisualStateManager.InvalidateVisualStates()` for Hot Reload
- **LongPressGestureRecognizer:** Built-in long press gesture with `MinimumPressDuration` and command binding — no more toolkit workarounds
- **Android 17 / API 37:** Preview support for the next Android release
- **C# 14:** Union type support
- **Runtime:** Runtime async removes the preview-API opt-in requirement
