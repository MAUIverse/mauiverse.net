---
title: "Building a Seven-Segment Display Control with .NET MAUI and SkiaSharp"
link: https://medium.com/@tsjdevapps/building-a-seven-segment-display-control-with-net-maui-and-skiasharp-739adf1ca8d9
description: "Sebastian Jensen builds a fully customizable seven-segment display control for .NET MAUI, drawing every retro bar by hand with SkiaSharp instead of leaning on a font. Part of .NET MAUI UI July 2026, it's a practical blueprint for turning a small visual system into a polished, reusable, theme-aware control."
date: 2026-07-10
author: tsjdev-apps
contentType: article
---

The seven-segment display is the visual language of alarm clocks, calculators, and arcade scoreboards — and it turns out to be a great teaching example for building custom .NET MAUI controls. Rather than reach for a seven-segment font, Sebastian renders each bar manually with SkiaSharp so the control scales cleanly, glows, animates, and stays theme-aware across Android, iOS, Mac Catalyst, and Windows.

## What you'll learn

- **Why build it as a custom control** — drawing active and inactive segments separately, adding glow, scaling to any size, and exposing colors, spacing, and animation as bindable properties
- **Character mapping** — a `SegmentCharacterMap` that maps each character to a `SevenSegmentParts` flag combination, safely rendering unsupported characters as blank
- **Rendering with SkiaSharp** — inheriting from `SKCanvasView`, working in a design coordinate system, and computing a scale factor so the display fits any canvas without hard-coded pixels
- **Segment geometry** — beveled polygons with rounded corners, layered as inactive body → glow → active fill for a convincing LED/LCD look
- **Glow and animation** — blurred paint for the glow effect plus an `IDispatcherTimer`-driven pulse that sidesteps early-binding animation pitfalls
- **Bindable properties & theming** — a clean API (`SegmentColor`, `GlowIntensity`, `IsAnimationEnabled`, and more) with `AppThemeBinding` for light/dark parity
- **Testing the contract** — small NUnit tests that verify character-to-segment mapping and design-space constants without launching the UI

The takeaway is a reusable pattern for any custom MAUI control: start with the visual model, expose the right customization points, keep platform behavior out of the control, and let SkiaSharp handle the pixels. Read the full post for the code walkthrough, and grab the complete sample on GitHub to try it yourself.
