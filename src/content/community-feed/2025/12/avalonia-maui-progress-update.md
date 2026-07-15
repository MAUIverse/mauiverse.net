---
title: "Avalonia MAUI Progress Update"
link: https://avaloniaui.net/blog/avalonia-maui-progress-update
description: "Tim Miller explains how Avalonia-based handlers and controls can bring .NET MAUI applications to Linux and WebAssembly while preserving MAUI's layout and application model. Dive into the architecture, working samples, upstream API challenges, and roadmap toward a stable .NET 11-era release."
date: 2025-12-10
author: drasticactions
contentType: article
---

The Avalonia MAUI backend replaces platform-native views with a single set of Avalonia controls while continuing to use .NET MAUI's handlers, layouts, and cross-platform abstractions. Tim reports on the proof-of-concept, the cleaner implementation now under development, and the framework boundaries that must open for third-party backends to be sustainable.

## What you'll learn

- **How the handler mapping works** — MAUI control interfaces are connected to Avalonia controls, creating one drawn implementation that can follow Avalonia onto additional platforms
- **Why layouts largely carry over** — .NET MAUI already calculates constraints and positions through its own layout system, so those results can be handed to Avalonia rather than reimplemented
- **How drawing libraries interoperate** — the shared SkiaSharp foundation makes it possible to wrap `Microsoft.Maui.Graphics` and `SkiaSharp.Views.Maui` controls with minimal changes
- **How compatibility is being tested** — a rebuilt ControlGallery, Avalonia's headless test runner, and ports such as MauiPlanets exercise navigation, animation, gestures, resources, and older application code
- **Which framework seams remain difficult** — internal lifecycle APIs and handlers statically bound to native platform types complicate replacing the rendering stack on existing MAUI targets
- **Why upstream changes matter** — the project intends to use official .NET MAUI packages and contribute generally useful extension points instead of maintaining a fork, patched binaries, or Avalonia-only hooks

Open the progress report for the deeper handler and layout walkthrough, live WebAssembly examples, and the original plan for previews leading into .NET 11.
