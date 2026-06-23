---
title: "Integrating Native Device Features in .NET MAUI with Built‑In APIs"
link: https://www.syncfusion.com/blogs/post/use-native-device-features-dotnet-maui
description: "Syncfusion walks through using .NET MAUI's built-in native device APIs for camera, file picker, geolocation, connectivity, sensors, and more — all from shared C# code. A practical guide covering permissions, platform differences, and best practices for production apps."
date: 2026-05-25
author: syncfusion
contentType: article
---

Modern .NET MAUI apps need to go beyond UI and tap into device hardware — cameras, GPS, accelerometers, compasses, and network connectivity. This guide from Syncfusion demonstrates how to use the built-in `Microsoft.Maui.Essentials` APIs to access these features from shared C# without maintaining separate platform implementations.

## What you'll learn

- Capturing photos with `MediaPicker` including platform permission configuration for Android and iOS
- Picking files with the native file browser across all platforms
- Reading GPS coordinates with `Geolocation` and handling runtime permission requests
- Providing haptic feedback with `Vibration` and lightweight toast notifications
- Adapting UI based on device orientation and model using `DeviceInfo` and `DeviceDisplay`
- Monitoring network connectivity changes with `Connectivity.ConnectivityChanged`
- Real-time motion tracking and shake detection with the `Accelerometer` API
- Reading compass heading for navigation and AR scenarios
- Best practices: request permissions in context, start/stop sensors deliberately, and test on real hardware
