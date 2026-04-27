---
title: "Live Camera Face Detection in .NET MAUI"
link: https://taublast.github.io/posts/FaceDetection/
description: "Nick Kovalsky demonstrates how to use the SkiaCamera control to run live face detection with MediaPipe in .NET MAUI. The post covers sending real-time camera frames to local ML and remote APIs, drawing overlays on detected faces, and making face masks track moving heads — all cross-platform on iOS, Android, and Windows."
date: 2026-04-20
author: taublast
contentType: article
---

Detecting faces, QR codes, or any visual pattern in a live camera feed requires getting frames into an ML pipeline efficiently. This post shows how to use `DrawnUi.Maui.Camera` and its `SkiaCamera` control to hook into the real-time video processing pipeline and run face landmark detection with MediaPipe — locally and consistently across iOS, Android, and Windows.

## What you'll learn

- How to enable the `SkiaCamera` processing pipeline for AI/ML frame access with `UseRealtimeVideoProcessing`
- How to set up MediaPipe local face landmark detection for cross-platform consistency
- How to send live video frames to both local ML engines and remote vision API endpoints
- How to draw face detection overlays and make face masks stick to moving heads in real-time
- The difference between local ML detection (latency, offline support) and API-based detection (flexibility, model variety)
- Architecture considerations for building detection features into .NET MAUI apps
