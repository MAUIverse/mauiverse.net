---
title: "Using the Camera in .NET MAUI with CameraView"
link: https://www.telerik.com/blogs/using-camera-net-maui-cameraview
description: "Héctor Pérez walks through the .NET MAUI Community Toolkit CameraView control end to end — installing the package, configuring per-platform permissions, and wiring an MVVM view model to take photos and record video in-app. A practical intro to full in-app camera control without leaving your application."
date: 2026-08-31
author: hprez21
contentType: article
---

Working with the camera is a staple of mobile apps, and the .NET MAUI Community Toolkit's `CameraView` lets you build that experience without punting to an external app. Héctor Pérez shows how to take full control of preview, flash, zoom, and capture — and where the files end up.

## What you'll learn

- **Setting up CameraView** — installing `CommunityToolkit.Maui.Camera` (plus MVVM) and initializing with `UseMauiCommunityToolkitCamera()`
- **Per-platform permissions** — Android manifest `CAMERA`/`RECORD_AUDIO` entries, iOS `NSCameraUsageDescription`/`NSMicrophoneUsageDescription`, and requesting them at runtime
- **An MVVM view model** — observable properties for camera name, zoom range, flash mode, recording state, and last photo/video paths
- **Building the UI** — binding `CameraFlashMode`, `IsTorchOn`, `SelectedCamera`, and `ZoomFactor`, with controls for zoom, torch, and flash
- **Capturing media** — `CaptureImage`, `StartVideoRecording`/`StopVideoRecording` with streams, enumerating cameras via `GetAvailableCameras`, and handling `MediaCaptureFailed`

Read the full article for the complete view model, XAML page, and code-behind capture handlers.
