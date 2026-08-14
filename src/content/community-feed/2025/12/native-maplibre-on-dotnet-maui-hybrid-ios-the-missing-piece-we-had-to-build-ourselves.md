---
title: "Native MapLibre on .NET MAUI Hybrid (iOS): The Missing Piece We Had to Build Ourselves"
link: https://medium.com/blazor-maui-hybrid-development/native-maplibre-on-net-maui-hybrid-ios-the-missing-piece-we-had-to-build-ourselves-34bbb1bd1bde
description: "Ruslan Dudchenko follows up the Android MapLibre Hybrid guide with the iOS side — building a .NET binding from MapLibre’s xcframework when no maintained MAUI binding existed. Sharpie, touch routing, and BlazorWebView transparency complete the cross-platform map stack."
date: 2025-12-10
author: dudchenko610
contentType: article
---

After covering [native MapLibre on Android](https://medium.com/@r.dudchenko18/native-maplibre-mapbox-maps-in-maui-hybrid-app-c02ccd4c5a54) under a MAUI Hybrid BlazorWebView, Ruslan Dudchenko tackles the missing half: iOS, where no ready-to-use .NET MapLibre binding was available to plug in.

## What you'll learn

- **Official MapLibre iOS binaries** — picking the dynamic `.xcframework` from maplibre-native releases and why it fits Hybrid builds better than a static library
- **Solution layout and csproj wiring** — keeping the framework in a Library folder and selecting simulator vs device slices per Debug/Release
- **Generating bindings with Sharpie** — pointing Objective Sharpie at the headers and dealing with the compile issues that follow
- **Touch routing on iOS** — conditional event routing so Blazor doesn’t steal every gesture from the native map
- **Real BlazorWebView transparency** — making the web layer actually transparent so the map underneath shows through

Read the full post for the binding journey, service surface, and the GitHub project with the connected bindings and demo.
