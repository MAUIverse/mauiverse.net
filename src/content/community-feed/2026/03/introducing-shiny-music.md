---
title: "Introducing Shiny.Music — Cross-Platform Music Library Access for .NET MAUI"
link: https://allanritchie.com/blog/2026/03/shiny-music/
description: "Allan Ritchie introduces Shiny.Music, a DI-first library for accessing the device music library from .NET MAUI. It provides permission management, metadata queries, playback controls, and file export across Android and iOS through two clean interfaces."
date: 2026-03-01
author: aritchie
contentType: article
---

Accessing the music library on a user's device from .NET MAUI means writing platform-specific code from scratch — `MediaStore` and `ContentResolver` on Android, `MPMediaQuery` and `AVAudioPlayer` on iOS. Shiny.Music wraps all of that into two injectable interfaces: `IMediaLibrary` for browsing and searching tracks, and `IMusicPlayer` for playback controls.

## What you'll learn

- How to set up `IMediaLibrary` and `IMusicPlayer` with a single `AddShinyMusic()` call
- How permissions differ between Android 13+ (`READ_MEDIA_AUDIO`) and iOS (Apple Music usage description), and how the library handles both automatically
- The `MusicMetadata` record: title, artist, album, genre, duration, album art, and content URI
- How to query all tracks, search by title/artist/album, and export track files to app storage
- Playback controls: play, pause, resume, seek, stop, with state tracking and completion events
- The DRM caveat: why Apple Music subscription tracks can't be played or copied on iOS, and what still works
