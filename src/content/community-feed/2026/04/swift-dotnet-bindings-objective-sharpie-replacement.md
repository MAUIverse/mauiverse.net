---
title: "Swift .NET Bindings: The Objective Sharpie Replacement for .NET MAUI and iOS"
link: https://dev.to/wojo/swift-net-bindings-the-objective-sharpie-replacement-for-net-maui-and-ios-88f
description: "Justin Wojciechowski introduces swift-dotnet-bindings, an open-source binding generator that produces complete C# binding projects from compiled Swift or Objective-C xcframeworks. One command takes you from xcframework to NuGet package — with full Swift support, SwiftUI interop, and no manual cleanup."
date: 2026-04-02
author: justinwojo
contentType: article
---

Objective Sharpie is unmaintained, broken on modern Xcode, and has zero support for Swift-only frameworks. If you need StoreKit 2, SwiftUI, or any Swift-first Apple API in your .NET MAUI app, `swift-dotnet-bindings` is the modern replacement — validated against 51 real-world libraries across 95 framework targets.

## What you'll learn

- How to go from xcframework to usable NuGet package in minutes with `dotnet new swift-binding`
- Full Swift type support: classes, structs, enums, protocols, generics, async/await, and closures
- Automatic SwiftUI interop via `UIHostingController` bridge generation
- How it compares to Objective Sharpie and NativeLibraryInterop
- Pre-built NuGet packages available for Nuke, Lottie, and more
- Using `spm-to-xcframework` to convert Swift Package Manager dependencies
