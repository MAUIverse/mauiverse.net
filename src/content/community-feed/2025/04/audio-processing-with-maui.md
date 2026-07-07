---
title: "Audio Processing with MAUI"
link: https://shaunebu.com/THdNP
description: "Jorge Perales Diaz builds a real-time voice changer in .NET MAUI, capturing microphone input and applying effects like pitch shifting, echo, reverb, and chorus with the NWaves library. It even adds a live SkiaSharp waveform visualizer and platform-specific low-latency tuning."
date: 2025-04-20
author: jpd21122012
contentType: article
---

Real-time audio is one of those features that feels intimidating until someone walks you through it. This hands-on tutorial builds a MAUI voice-changer app end to end, combining `Plugin.Maui.Audio` for capture, NWaves for DSP effects, and SkiaSharp for a live waveform.

## What you'll learn

- Project setup and the NuGet stack: `Plugin.Maui.Audio`, `NWaves`, and `SkiaSharp.Views.Maui`
- Capturing microphone input with an `AudioService` and processing it with an `AudioProcessor` (pitch, echo, reverb, chorus)
- Converting between `byte[]` and `float[]` buffers and playing processed audio back
- Rendering a real-time waveform visualization with SkiaSharp
- Advanced optimizations: zero-copy `Memory<byte>` buffers, NWaves `CircularBuffer` streaming, and platform-specific low-latency tuning plus mic-permission setup for Android and iOS

A fun, practical project if you want to get hands-on with real-time DSP on mobile — note it needs a physical device for the microphone.
