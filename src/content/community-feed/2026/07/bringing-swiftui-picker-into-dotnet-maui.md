---
title: "Bringing SwiftUI Picker into .NET MAUI"
link: https://pmahend1.github.io/Native-Picker-Maui/
description: "Prateek Mahendrakar wraps a native SwiftUI Picker as an xcframework and binds it into .NET MAUI for a modern iOS picker experience. Learn the full path from Swift view to a bindable MAUI control with two-way selection."
date: 2026-07-29
author: pmahend1
contentType: article
---

.NET MAUI's built-in wheel picker feels dated next to SwiftUI's flexible pickers, and there's no direct way to use them. For .NET MAUI UI July 2026, Prateek Mahendrakar shows how to bridge a native SwiftUI `Picker` into MAUI end to end.

## What you'll learn

- **A reusable SwiftUI Picker** — a `public` `NativePicker` view supporting segmented, inline, menu, wheel, palette, and navigationLink styles with version fallbacks
- **A UIKit bridge** — a `PickerBridge` hosting controller that syncs selection between SwiftUI and C#
- **Packaging as an xcframework** — building for device and simulator and combining with `xcodebuild -create-xcframework`
- **Generating bindings** — using `swift-dotnet-bindings` (over Objective Sharpie) to produce and pack a MAUI binding NuGet
- **A bindable MAUI control** — a `NativePicker` with a handler and property mappers, and why the `onSelectionChanged` callback makes binding two-way

Read the full post for every code snippet across the Swift, binding, and MAUI layers.
