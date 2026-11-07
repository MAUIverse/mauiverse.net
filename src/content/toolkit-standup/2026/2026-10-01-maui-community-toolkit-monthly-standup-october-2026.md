---
title: ".NET MAUI Community Toolkit Monthly Standup, October 2026"
link: https://www.youtube.com/watch?v=QuW6OokYbdA
description: "Brandon Minnick and James Crutchley plan the .NET 11 upgrade for the Toolkit and review community proposals for numeric validation, MediaElement, and popups. This short ~25 minute standup is a quick way to see what's heading into the next releases."
date: 2026-10-01
author: dotnet-foundation
featuring:
    - TheCodeTraveler
    - ne0rrmatrix
slug: 2026/10/maui-community-toolkit-monthly-standup-october-2026
contentType: video
---

A compact October agenda: the Toolkit team is getting ready for .NET 11 and working through a handful of community contributions.

- **.NET 11 upgrade plan** — Vlad is set to open the first .NET 11 PR, and the team plans to use stacked PRs to avoid one enormous change. James also reports that device tests for platform-specific code are close to ready.
- **`NumericValidationBehavior`** — a community proposal to add step-based validation. The maintainers suggest a nullable `Interval` property and walk through why.
- **`MediaElement` on iOS and macOS** — a community-contributed fix for `MediaOpened` firing before the `AVPlayerItem` is ready to play, plus some cleanup of unused code.
- **`TryShowPopupAsync` and `TryClosePopupAsync`** — a result-based alternative to catching exceptions, which may be simplified further with C# unions in .NET 11.
- **Popup keyboard handling** — a community PR for `SoftInputKeyboardPopup`, so popups with text input react properly when the keyboard appears.

The conversation also touches on how LLMs are changing open source maintenance. It's worth a watch if you contribute to the Toolkit or plan to move to .NET 11 soon.
