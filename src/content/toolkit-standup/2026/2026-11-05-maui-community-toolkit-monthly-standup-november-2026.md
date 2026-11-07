---
title: ".NET MAUI Community Toolkit Monthly Standup, November 2026"
link: https://www.youtube.com/watch?v=Aa6SJnnUCrY
description: "Brandon Minnick and Vladislav Antonyuk preview the Toolkit's biggest testing change yet, device tests that run on iOS, Android, Windows, and Mac Catalyst, and plan the releases around .NET 11. This ~90 minute standup also explains what runtime async means for MAUI developers."
date: 2026-11-05
author: dotnet-foundation
featuring:
    - TheCodeTraveler
    - VladislavAntonyuk
    - ne0rrmatrix
slug: 2026/11/maui-community-toolkit-monthly-standup-november-2026
contentType: video
---

The week before .NET 11 launches, the Toolkit maintainers cover testing, release planning, and a language-runtime change that matters for library authors.

- **Device tests** — a large PR adds unit tests that run on headless emulators and simulators, so platform-specific code can finally be tested. The team reports about 90% code coverage across the libraries and a batch of bug fixes found along the way.
- **Release plan** — version 16 ships the device tests and breaking changes while staying on .NET 10. Version 17 follows with .NET 11 support.
- **Runtime async** — Brandon explains the .NET 11 feature that moves `async`/`await` handling from the compiler to the runtime. He also covers why MAUI platforms that still use Mono can't benefit yet.
- **Recently merged community PRs** — a `CameraView` race condition when starting recording, keyboard handling for popups, and a TalkBack accessibility fix for popups on Android.
- **Smaller items** — raising the minimum Android version for the status bar, passing `CultureInfo` through converters, and `CommunityToolkit.Maui.Markup` getting its .NET 11 update.

It's a useful one to watch before upgrading, especially if you maintain a library of your own.
