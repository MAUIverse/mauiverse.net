---
title: "Playing Audio with .NET MAUI"
link: https://davestechlab.co.uk/software/playing-audio-with-net-maui/
description: "David Britch builds a cross-platform .NET MAUI Audio control using native players on Android, iOS, Mac Catalyst, and Windows. Learn the handler architecture behind playing remote, embedded, and local audio."
date: 2022-09-23
author: davidbritch
contentType: article
---

.NET MAUI has no built-in audio control, but every platform ships a native one. David Britch adapts his `Video` control into a cross-platform `Audio` control that plays remote, embedded, and user-selected audio.

## What you'll learn

- **Native players per platform** — `MediaPlayer` on Android, `AVPlayer` on iOS/Mac Catalyst, and `MediaPlayerElement` on WinUI
- **Handler architecture** — mapping a cross-platform virtual view to native views with property and command mappers
- **Reusing video code** — how much of the audio implementation shares code with the `Video` control, and where Android differs
- **Custom transport controls** — using built-in controls or supplying your own, including a content overlay image on iOS
- **Comparison** — how this differs from Plugin.Maui.Audio by Gerald Versluis and Shaun Lawrence

Read the full post for the solution structure and a link to the GitHub repo.
