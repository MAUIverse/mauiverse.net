---
title: "Playing Video with .NET MAUI on Windows"
link: https://davestechlab.co.uk/software/playing-video-with-net-maui-on-windows/
description: "David Britch completes his cross-platform .NET MAUI Video control by adding Windows support via the WinAppSDK 1.2 MediaPlayerElement. Learn how the Windows player fits the handler-based architecture."
date: 2022-09-16
author: davidbritch
contentType: article
---

Windows was the missing piece of David Britch's cross-platform `Video` control because WinUI 3 lacked media playback — until WinAppSDK 1.2 preview added `MediaPlayerElement` and `MediaTransportControls`. This post adds Windows support.

## What you'll learn

- **New WinUI media types** — using `MediaPlayerElement` and `MediaTransportControls` from WinAppSDK 1.2 preview
- **The Windows player** — a `MauiVideoPlayer` deriving from `Grid` and hosting the media element
- **Full cross-platform playback** — remote, embedded, and file-system videos across all platforms
- **Simplifying the design** — why he removed the `IVideo` and `IVideoHandler` interfaces after realizing they weren't needed

Read the full post for the reasoning and a link to the updated control.
