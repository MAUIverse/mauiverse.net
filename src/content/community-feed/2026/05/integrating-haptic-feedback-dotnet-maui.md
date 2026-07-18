---
title: "Integrating Haptic Feedback in .NET MAUI"
link: https://www.telerik.com/blogs/integrating-haptic-feedback-net-maui
description: "Leomaris Reyes shows how to add tactile haptic feedback to your .NET MAUI apps with just a couple of lines of code. Learn when to use short taps versus longer vibrations to make interactions feel more responsive."
date: 2026-05-04
author: LeomarisReyes
contentType: article
---

Beyond visuals and sound, feedback you can feel creates a closer connection between users and your app. Leomaris Reyes demonstrates how quick it is to add haptic feedback in .NET MAUI using the `IHapticFeedback` API.

## What you'll learn

- **The IHapticFeedback API** — triggering vibrations through `HapticFeedback.Default`
- **Two feedback types** — when to use `Click` for short, subtle taps versus `LongPress` for stronger, more important confirmations
- **Android permissions** — three ways to add the `VIBRATE` permission (manifest, editor, or assembly attribute), with no setup needed on iOS/Mac Catalyst or Windows
- **Wiring it up** — connecting haptics to button events in XAML and code-behind
- **Platform considerations** — why Apple requires triggering feedback from the UI thread

Read the full article for the code snippets and practical tips on using haptics to boost usability and retention.
