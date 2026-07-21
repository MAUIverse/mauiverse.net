---
title: "Playing Local Audio Files with .NET MAUI"
link: https://davestechlab.co.uk/software/playing-local-audio-files-with-net-maui/
description: "David Britch fixes file picking for his cross-platform .NET MAUI audio control so users can select local audio on iOS, Android, and Mac Catalyst. Learn the platform-specific FilePicker file type quirks that make it work."
date: 2022-09-28
author: davidbritch
contentType: article
---

David Britch's cross-platform audio control could only pick local files on Windows — until he discovered the file picking issue wasn't a MAUI bug but a `FilePickerFileType` misconfiguration. This post explains the fix.

## What you'll learn

- **Why picking failed** — passing file extensions where iOS and Android expect different formats
- **Platform-specific file types** — MIME types (with wildcards like `audio/*`) on Android, `UTType`/uniform type identifiers like `public.audio` on iOS and Mac Catalyst, and extensions on Windows
- **Supporting older iOS** — using system-declared uniform type identifiers instead of iOS 14+ `UTType` constants
- **Loading the picked file** — small `MauiAudioPlayer` updates so every platform plays local audio

Read the full post for the corrected `PickOptions` code and links to the resulting PR and repo.
