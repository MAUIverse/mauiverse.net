---
title: "Full Camera Control in .NET MAUI: Flash, Zoom, Torch and Recording"
link: https://www.youtube.com/watch?v=1BhpTXZKPbY
description: "Héctor Pérez walks through the .NET MAUI Community Toolkit's CameraView, building an app that takes photos, records video, and drives flash, zoom, and torch in-app. Part of MAUI UI July 2026, this ~13 minute video takes you from NuGet install to testing on a real device."
date: 2026-07-20
author: hprez21
contentType: video
---

Rather than hand users off to an external camera app, the .NET MAUI Community Toolkit's `CameraView` lets you own the whole capture experience. Héctor Pérez demonstrates how to wire it up end to end using MVVM.

## What you'll learn

- **Getting set up** — installing `CommunityToolkit.Maui.Camera` and `CommunityToolkit.Mvvm`, and registering the toolkit in `MauiProgram.cs`
- **Platform permissions** — enabling Camera and Microphone permissions on Android (and where to configure iOS)
- **An MVVM view model** — exposing properties for status, selected camera, zoom, torch, recording state, and the latest photo/video paths
- **Building the UI** — binding `CameraView` properties like flash mode, torch, selected camera, and zoom factor in XAML
- **Capturing media** — implementing photo capture with `CaptureImage`, plus start/stop video recording and saving files via streams
- **Handling failures** — subscribing to `MediaCaptureFailed` and cleaning up on page disappearance

Watch the full video to see the control tested live on a physical device, capturing photos, recording video, zooming, and toggling the torch.
