---
title: ".NET MAUI Community Standup | Inside GnollHack: Cross-Platform Game Development with .NET MAUI"
link: https://www.youtube.com/watch?v=_1iLdE7d1jo
description: "Tommi and Janne Gustafsson of Sound Mind Games explain how they brought GnollHack, a modernized NetHack roguelike, to Android, iOS, macOS, and Windows with .NET MAUI and SkiaSharp. This ~70 minute standup with David Ortinau and Gerald Versluis covers the C interop, store-shipping hurdles, and an in-game AI assistant."
date: 2026-10-01
author: davidortinau
featuring:
    - jfversluis
    - janne-hmp
    - TommiGustafsson-HMP
slug: 2026/10/maui-community-standup-inside-gnollhack-cross-platform-game-development-with-maui
contentType: video
---

GnollHack takes a turn-based roguelike with roots in the 1980s and gives it animated tiles, music, voiceovers, and touch-friendly controls. Tommi and Janne Gustafsson, of the Finnish nonprofit Sound Mind Games, walk through how that game runs on .NET MAUI today. It's free and open source, and the Windows build is on Steam.

Their session covers the decisions and trade-offs behind a game that isn't a typical MAUI app:

- Why Xamarin.Forms, and later .NET MAUI, with SkiaSharp and FMOD, won out over a dedicated game engine, including P/Invoke into roughly half a million lines of C and debugging C and C# together in Visual Studio
- Mixing native MAUI controls, SkiaSharp canvases, and a WebView in the same UI
- Getting a game with thousands of voiceover lines past store size limits, including Play Asset Delivery on Android, and fixing the unpackaged-app problem with `SKGLView` that they contributed back to SkiaSharp
- Using Sentry, an MCP connector, and AI agents to chase bugs across MAUI, WinUI, and the C engine
- Gnoll Overseer, an in-game AI assistant, and the benchmark harness they built to compare models on cost, speed, and accuracy

They also share what they'd like to see next, including native Linux support for Steam Deck.

David and Gerald start with a community roundup. They recap Dominik's Copilot Canvas session from last month, MAUI Day Skopje, and .NET 11 RC1, and look at several community projects, including options for running MAUI on Linux.
