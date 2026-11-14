---
title: "How We Brought CoreCLR to .NET MAUI and Mobile"
link: https://www.youtube.com/watch?v=fa_rzHLYU_E
description: "Jonathan Peppers explains how .NET 11 moves MAUI from Mono to CoreCLR on Android, iOS, Mac Catalyst and tvOS, in this ~28 minute .NET Conf 2026 session (BRK034). He compares Mono AOT, ReadyToRun and NativeAOT and shares startup and app-size results."
date: 2026-11-10
author: jonathanpeppers
contentType: video
---

.NET mobile apps have run on Mono since the early Xamarin days. This session explains what changes now that .NET 11 defaults MAUI to CoreCLR. Jonathan Peppers follows a simplified Android startup path to show where the runtime sits, then compares Mono AOT, ReadyToRun and NativeAOT.

He takes care to separate the topics. Trimming and JSON source generation are covered as preparation for NativeAOT, without confusing those extra constraints with the default move to CoreCLR. The session then reviews startup and app-size results from Android and iOS.

It finishes with guidance on what to test when you move to .NET 11, and where to look when performance or compatibility doesn't behave as expected. If you want to understand what the new runtime means for your apps, this is the session to watch.
