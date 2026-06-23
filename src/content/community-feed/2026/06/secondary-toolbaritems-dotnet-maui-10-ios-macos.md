---
title: "Secondary ToolbarItems in .NET MAUI 10 on iOS and macOS"
link: https://blog.verslu.is/maui/maui-ios-secondary-toolbaritems/
description: "Gerald Versluis shows how .NET MAUI 10 improves the rendering of secondary ToolbarItems on iOS and macOS, displaying them through a native overflow menu instead of forcing them into awkward positions. No custom handlers or platform-specific code needed."
date: 2026-06-10
author: jfversluis
contentType: article
---

One of those small-but-welcome improvements in .NET MAUI 10: secondary `ToolbarItem`s on iOS and macOS Shell pages now render through the native platform overflow menu, making them feel right at home on Apple platforms.

## What you'll learn

- How `ToolbarItem.Order` with `Primary` and `Secondary` works in .NET MAUI Shell pages
- The improved iOS and macOS rendering introduced via [dotnet/maui#30480](https://github.com/dotnet/maui/pull/30480)
- Setting up secondary toolbar items in XAML — the same syntax for both Shell and non-Shell pages
- No custom handlers or platform-specific code required — just the regular `ToolbarItem` API
- Testing with the sample project on `Microsoft.Maui.Controls` version `10.0.70`
