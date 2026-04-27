---
title: "Using Rust Inside .NET MAUI Apps"
link: https://taublast.github.io/posts/MauiRust/
description: "Nick Kovalsky shows how to use Rust inside .NET MAUI apps on Android, iOS, MacCatalyst, and Windows with the RustMaui tool. The post demonstrates C# and Rust sharing a SkiaSharp canvas, with a full walkthrough from tool installation to cross-platform native library compilation."
date: 2026-04-28
author: taublast
contentType: article
---

When a slice of your app becomes too heavy — data processing, image manipulation, tight rendering paths — Rust offers C++-level performance with a friendlier safety model and no garbage collector. This post shows how to make Rust feel natural inside a .NET MAUI app using the `RustMaui` dotnet tool.

## What you'll learn

- How to install the `RustMaui` tool and scaffold a new MAUI app with Rust integration
- How to apply Rust to an existing .NET MAUI project
- How C# and Rust can share a SkiaSharp canvas, with both languages drawing on the same surface
- How RustMaui compiles native libraries for all four MAUI platforms: Android, iOS, MacCatalyst, and Windows
- When Rust makes sense in a MAUI app: GC spike reduction, compute-heavy paths, and performance-critical sections
- The interop pattern for calling Rust functions from C# in a cross-platform context
