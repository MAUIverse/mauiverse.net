---
title: ".NET MAUI - Toggle fullscreen for MacCatalyst desktop app"
link: https://tonyedwardspz.co.uk/blog/muai-toggle-fullscreen-on-maccatalyst/
description: This post shows how to implement true macOS-style fullscreen toggling in a .NET MAUI MacCatalyst app by bridging into AppKit APIs. Tony walks through the Objective-C runtime interop needed to reach `NSApplication` and `NSWindow` from MAUI.
date: 2026-01-23
author: tonyedwardspz
contentType: article
---

MacCatalyst gives you broad cross-platform reach, but some desktop-native window behaviors still need explicit interop work.

## Fast path

- **Prereqs:** A MAUI MacCatalyst app and comfort with platform interop
- **Steps:** Resolve Objective-C class handles, get shared application and key window, then call `toggleFullScreen:`
- **Result:** Fullscreen behavior aligned with the macOS green window control
- **Next:** Apply the same bridging pattern for other AppKit-only desktop features

## What you'll learn

- Why UIKit-first MacCatalyst apps don't expose all AppKit window APIs directly
- How to use runtime selectors safely from C#
- Where this pattern fits in desktop-first MAUI experience tuning
