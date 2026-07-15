---
title: "MAUI Avalonia Preview 1"
link: https://avaloniaui.net/blog/maui-avalonia-preview-1
description: "Tim Miller launches the first preview of Avalonia's backend for .NET MAUI, opening a path to Linux and WebAssembly with a consistent drawn UI. See the four-step setup, the real-world apps used for compatibility testing, and where native and Avalonia rendering offer different tradeoffs."
date: 2026-03-16
author: drasticactions
contentType: article
---

Avalonia.Controls.Maui reaches its first public preview alongside Avalonia 12 and the .NET 11 previews. The backend lets a MAUI application target Avalonia without a separate bootstrapper, then render the same drawn controls across desktop and WebAssembly.

## What you'll learn

- **How to start in four steps** — create a MAUI app, install `Avalonia.Controls.Maui.Desktop`, add `net11.0`, and call `UseAvaloniaApp` on the `MauiBuilder`
- **What the source generator handles** — the package supplies Avalonia startup plumbing by default while still allowing advanced projects to extend or disable generation
- **How MAUI improved Avalonia itself** — closing control gaps produced reusable Avalonia 12 features such as new navigation APIs instead of one-off MAUI-specific implementations
- **How compatibility was tested** — the MAUI Control Gallery, MauiPlanets, 2048, AlohaAI, MyConference, and WeatherTwentyOne cover dense layouts, animation, themes, trimming, NativeAOT, navigation, FlexLayout, and WebView
- **Which graphics libraries carry across** — MAUI Graphics primitives and wrapped `SkiaSharp.Views.Maui` controls allow existing drawn controls and libraries such as Mapsui.Maui to run on the backend
- **How native and drawn UI differ** — native MAUI controls integrate with each host OS, while Avalonia provides consistent styling and behavior across every target

Read the preview announcement for setup links, application demos, current limitations, and the team's plans for Maui.Essentials and WinUI interoperability.
