---
title: ".NET MAUI - Toggle fullscreen for MacCatalyst desktop app"
link: https://tonyedwardspz.co.uk/blog/muai-toggle-fullscreen-on-maccatalyst/
description: A quick Mac Catalyst tip—toggle fullscreen (like the green window button) by bridging into AppKit via the Objective-C runtime.
date: 2026-01-23
author: tonyedwardspz
---

Mac Catalyst apps run on macOS, but they’re still UIKit-based—so some “Mac window chrome” behaviors (like toggling fullscreen) aren’t as obvious as on AppKit.

This post shows a simple approach: bridge into AppKit’s `NSApplication`/`NSWindow` using the Objective-C runtime and call `toggleFullScreen:` on the key window.

If you’ve got a desktop-first MAUI app and want a “proper Mac” fullscreen experience, this is a handy snippet to keep around.

