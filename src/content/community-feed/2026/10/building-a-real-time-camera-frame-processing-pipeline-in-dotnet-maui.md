---
title: "Building a Real-Time Camera Frame Processing Pipeline in .NET MAUI"
link: https://shaunebu.com/Details/3a071935-9334-4986-ab6e-051be801440f
description: "Jorge Perales Diaz designs a camera pipeline that keeps up with a 30 FPS stream even when your analysis only manages 10 FPS. He uses native Android and iOS capture, bounded channels with DropOldest backpressure, and a modular architecture suited to computer vision and on-device AI."
date: 2026-10-26
author: jpd21122012
contentType: article
---

A camera produces a frame roughly every 33 ms. If your barcode scanner or detection model needs 100 ms per frame, an unbounded queue just fills memory and adds latency. Jorge Perales Diaz works through that mismatch and shows how to build a pipeline that stays responsive.

The approach separates the work into stages: frame acquisition, preprocessing, analysis, and UI presentation. The main design decision is backpressure. Rather than processing every frame, a bounded channel with `DropOldest` keeps the newest frame and discards stale ones, which is usually what real-time vision needs.

Along the way he covers:

- **Frame model and processor interface** — defining clear ownership of frame buffers so native memory is released correctly
- **Native capture on Android and iOS** — keeping heavy work out of camera callbacks
- **UI updates and power use** — throttling updates and reducing processing frequency to protect battery life
- **Testing and monitoring** — testing processors without camera hardware, and tracking throughput, dropped frames and end-to-end latency

If you're adding scanning, OCR or object detection to a MAUI app, the channel and buffer-ownership sections are worth reading before you wire up your first camera callback.
