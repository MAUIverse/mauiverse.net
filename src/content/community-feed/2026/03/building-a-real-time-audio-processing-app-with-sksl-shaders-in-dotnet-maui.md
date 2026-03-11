---
title: "Building a Real-time Audio Processing App with SKSL Shaders in .NET MAUI"
link: https://taublast.github.io/posts/SolTempo/
description: "Nick Kovalsky breaks down a .NET MAUI app that processes live microphone audio, detects pitch and BPM, and renders rich shader-driven visuals in real time. It is a detailed look at combining DrawnUI, SkiaCamera, SkiaSharp, and SKSL for advanced interactive UI work."
date: 2026-03-05
author: taublast
contentType: article
---

Nick uses the open-source `SolTempo` app as a deep technical case study in real-time audio processing with .NET MAUI. The article covers the end-to-end pipeline from audio capture and transforms through pitch and tempo analysis, then shows how a single Skia-backed canvas and custom SKSL shaders drive the visual layer.

## What you'll learn

- How `SkiaCamera` can be used for audio monitoring, sample processing, and feeding live analysis modules.
- Why a single-canvas DrawnUI approach can work well for shader-heavy interfaces, transitions, overlays, and effects.
- How SKSL shaders, live shader editing, and custom visual effects can be used to build more ambitious MAUI experiences.
