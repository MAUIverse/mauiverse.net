---
title: "Playing Video with .NET MAUI"
link: https://davestechlab.co.uk/software/playing-video-with-net-maui/
description: "David Britch builds a cross-platform Video control for .NET MAUI using AVPlayer on iOS/Mac Catalyst and VideoView on Android. Learn the handler architecture behind playing remote, embedded, and local video."
date: 2022-07-28
author: davidbritch
contentType: article
---

.NET MAUI has no built-in video control, so David Britch created a cross-platform `Video` view backed by native players. It plays remote, embedded, and user-selected video with built-in or custom transport controls.

## What you'll learn

- **Native players per platform** — `AVPlayer` on iOS/Mac Catalyst and `VideoView` on Android (with Windows to follow)
- **Handler architecture** — mapping a virtual `Video` view to native views via property and command mappers
- **What command mappers are for** — passing arguments to invoke native functionality, decoupled from the cross-platform view
- **Solution structure** — Controls, Handlers, and Platforms folders, plus an Android content provider for embedded assets
- **Lifecycle cleanup** — calling `DisconnectHandler` yourself at the right point

Read the full post for the structure walkthrough and a link to the repo.
