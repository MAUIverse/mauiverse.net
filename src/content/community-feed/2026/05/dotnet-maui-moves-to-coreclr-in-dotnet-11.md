---
title: ".NET MAUI Moves to CoreCLR in .NET 11"
link: https://devblogs.microsoft.com/dotnet/dotnet-maui-moves-to-coreclr-in-dotnet-11/
description: "David Ortinau announces that CoreCLR is now the default runtime for .NET MAUI on Android, iOS, and Mac Catalyst starting in .NET 11 Preview 4. A milestone that brings runtime unification, tiered JIT, ReadyToRun, PGO, and the path to NativeAOT to mobile apps."
date: 2026-05-13
author: davidortinau
contentType: article
---

Starting in .NET 11 Preview 4, .NET MAUI mobile apps run on the same CoreCLR runtime that powers ASP.NET Core, Azure services, and desktop applications. This is the official announcement from David Ortinau covering why it happened, what to expect, and how to test.

## What you'll learn

- Why CoreCLR replaces Mono: runtime unification, better performance foundations (tiered JIT, R2R, PGO), and the path to NativeAOT on mobile
- What changed: CoreCLR is the default for Android, iOS, Mac Catalyst, and tvOS in both Release and Debug builds
- Mono's legacy and contribution — from MonoTouch in 2009 to Unity, Avalonia, Uno Platform, and beyond
- How to opt back to Mono with `<UseMonoRuntime>true</UseMonoRuntime>` if you hit blocking issues
- What to test: startup on physical devices, package size comparison, full app flow, Hot Reload, and third-party library compatibility
- Full .NET diagnostics on mobile — `dotnet-trace` and `dotnet-counters` now work on your Android device and iOS workflow
- The road ahead: closing startup/size gaps, expanding R2R/PGO coverage, and advancing NativeAOT support
