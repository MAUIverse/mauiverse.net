---
title: "A NEW CameraView to Rule Them All"
link: https://allanritchie.com/blog/2026/06/cameraview/
description: "Allan Ritchie introduces CameraView, a single .NET MAUI control that delivers camera preview, capture, filters, and a pluggable frame-analysis pipeline across iOS, Android, Windows, macOS, and Blazor. From barcode scanning and face detection to structured document parsing, this one control replaces an entire stack of platform-specific camera code."
date: 2026-06-15
author: aritchie
contentType: article
---

Allan Ritchie has built the camera control he always wanted — a single `CameraView` with one API surface that works on every platform Shiny targets, including Blazor WebAssembly. The control auto-starts, requests permissions itself, and supports 11 built-in image filters that apply to both the live preview and captured photos.

## What you'll learn

- How `CameraView` runs on iOS, Android, Windows, macOS AppKit, and Blazor WASM using native platform APIs (AVFoundation, CameraX, Media Capture, getUserMedia)
- Using the pluggable analyzer pipeline for barcode scanning, face detection, motion analysis, and OCR — all streaming off the UI thread with built-in back-pressure
- Structured document parsing: typed records for invoices, receipts, driver's licenses, health cards, credit cards, and passports — not raw OCR text
- MVVM-friendly bindings, scan commands, and overlay views with normalized bounding boxes
- Honest platform limitations to be aware of, like Android's CameraX concurrency constraints and filter support differences
