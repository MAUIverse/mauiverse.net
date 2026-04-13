---
title: "AI Captions and Live Video Processing in .NET MAUI"
link: https://taublast.github.io/posts/VideoRecording/
description: "Nick Kovalsky walks through the DrawnUi.Maui.Camera SkiaCamera control for building real-time video processing pipelines in .NET MAUI. The post covers live overlays, SKSL shader filters, OpenAI-powered captions burned into recorded video, and a look-back pre-recording buffer — all running cross-platform."
date: 2026-04-09
author: taublast
contentType: article
---

If you need more than basic camera capture — processing frames before they hit the encoder, applying live effects, or burning AI captions into output — this post introduces the `SkiaCamera` control from `DrawnUi.Maui.Camera`. It's powered by SkiaSharp, supports iOS, MacCatalyst, Android, and Windows, and is designed for real-time feed processing workflows.

## What you'll learn

- How to install and set up the `SkiaCamera` control with hardware-accelerated DrawnUI canvas
- How UI orientation locking works for stable recording while still reacting to device rotation
- How `UseRealtimeVideoProcessing` routes every frame through your pipeline before encoding
- How to apply SKSL shader effects (Noir, Movie, etc.) to both preview and recorded video in real-time
- How pre-recording (look-back capture) uses a circular buffer to keep seconds before you hit record
- How to draw overlays — audio visualizers and caption panels — directly onto recorded frames using DrawnUI layouts
- How OpenAI speech-to-text powers real-time captions that get burned into the final MP4
- GPS and EXIF metadata injection for both video and photo capture
