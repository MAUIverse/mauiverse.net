---
title: "CoreCLR Progress and the Mono Timeline for .NET MAUI"
link: https://devblogs.microsoft.com/dotnet/coreclr-progress-and-mono-timeline-dotnet-maui/
description: "David Ortinau shares the latest CoreCLR progress for .NET MAUI, including the accelerated retirement of the separate Mono path in .NET 11 Preview 6. Read the update for current performance expectations, diagnostics support, remaining rough edges, and a practical checklist for testing your own app."
date: 2026-07-14
author: davidortinau
contentType: article
---

.NET 11 Preview 6 marks a decisive point in the mobile runtime transition: CoreCLR is now the only runtime offered for .NET MAUI apps on Android, iOS, and Mac Catalyst. David explains what is complete, what is still being polished, and why real-world testing before GA matters.

## What you'll learn

- **Where CoreCLR stands** — runtime support is functionally complete across Android, iOS, and Mac Catalyst, with validation underway against first-party and community apps
- **What performance looks like today** — iOS and Mac Catalyst are generally faster than Mono, while Android startup and package size are within 10 percent of the previous runtime
- **Why the Mono switch is gone** — `net11.0-android`, `net11.0-ios`, and `net11.0-maccatalyst` now use CoreCLR without a separate opt-out path; Blazor WebAssembly remains on Mono
- **Which development workflows work** — debugging is available in Visual Studio and VS Code, Hot Reload works in IDEs and through `dotnet watch`, and XAML Hot Reload plus some iOS paths are still being completed
- **What CoreCLR unlocks** — mobile apps gain familiar `dotnet-trace` and `dotnet-counters` diagnostics, while Android NativeAOT work advances with a trimmable interop type map
- **How to validate your app** — compare cold and warm startup, package size, full app flows, Hot Reload, and reflection-heavy or dynamically generated third-party libraries against a .NET 10 baseline

Install .NET 11 Preview 6, measure your actual app on physical devices, and open the post for the feedback links that can still shape the GA release.
