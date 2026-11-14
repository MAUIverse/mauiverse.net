---
title: "Extending .NET MAUI to Any Platform"
link: https://vladislavantonyuk.github.io/articles/Extending-.NET-MAUI-to-Any-Platform/
description: "Vladislav Antonyuk explains the external platform backend support in .NET MAUI 11, which lets community backends such as GTK plug into the SingleProject build. He walks through the `MauiActiveBackend` property and how a backend package registers its platform folder."
date: 2026-10-04
author: VladislavAntonyuk
contentType: article
---

.NET MAUI has always targeted iOS, Android, macOS and Windows, while platforms such as tvOS and Linux depended on community experiments. Vladislav Antonyuk looks at what .NET 11 changes: a set of APIs that let third parties add a backend without reaching into MAUI's internals. These include broader `OnPlatform` recognition, public extension hooks for alerts and gestures, a pluggable `BlazorWebView`, and extensibility for assets and `SingleProject`.

The post focuses on how `SingleProject` decides what to compile. A backend is either activated through a recognized platform TFM, such as `net11.0-tvos`, or through a neutral `net11.0` target using the new `MauiActiveBackend` property. Backend packages register their folders through `MauiPlatformSpecificFolder` metadata, and he explains the MSBuild targets that normalize and collect the compile items.

The final section applies this to a project that targets iOS and Linux GTK, with the csproj change, `MauiProgram.cs` and an entry point for the GTK backend. If you're curious how MAUI can reach platforms beyond the built-in ones, or want to build a backend yourself, it explains the build mechanics clearly.
