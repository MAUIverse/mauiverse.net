---
title: ".NET 11 Preview 6 Modernises MAUI CollectionView and Android Shell"
link: https://www.infoq.com/news/2026/07/net-maui-11-preview-6/
description: "Edin Kapić covers .NET 11 Preview 6 for .NET MAUI — CollectionView2 on Windows, Android Shell on handlers, HybridWebView AOT-friendly interop, and media-picker recovery. A solid roundup of the architectural shifts still landing in the preview cycle."
date: 2026-07-29
author: ekapic
contentType: article
---

Microsoft's .NET 11 Preview 6 keeps pushing .NET MAUI off Xamarin.Forms-era infrastructure. Edin Kapić's InfoQ write-up focuses on the architectural and reliability work that matters if you're tracking the preview cycle closely.

## What you'll learn

- **CollectionView2 on Windows** — a WinUI `ItemsRepeater`-based handler aligned with CV2 on Android, iOS, and Mac Catalyst
- **Android Shell on handlers** — `ShellHandler` and friends replacing renderer-based Shell for Android only (for now)
- **HybridWebView AOT interop** — source-generated JavaScript bridges instead of reflection, plus safer message filtering on Android
- **Geolocation and MediaPicker** — `MinimumDistance` for location listening and opt-in recovery when Android recreates your process mid-pick
- **Breaking change watch** — removal of the `Microsoft.Maui.Controls.Compatibility` package for apps that still referenced it

Read the full InfoQ piece for platform notes, linked GitHub issues, and where to grab the preview SDK.
