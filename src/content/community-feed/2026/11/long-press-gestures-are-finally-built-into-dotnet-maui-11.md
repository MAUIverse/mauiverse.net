---
title: "Long Press Gestures Are Finally Built Into .NET MAUI 11"
link: https://tonyedwardspz.co.uk/blog/maui-11-long-press-gestures/
description: "Tony Edwards introduces `LongPressGestureRecognizer` in .NET MAUI 11, which brings press-and-hold support to the framework without the Community Toolkit's `TouchBehavior` or custom platform code. He also covers how it works under the hood and the platform differences, including Android ignoring `MinimumPressDuration`."
date: 2026-11-02
author: tonyedwardspz
contentType: article
---

Press-and-hold used to mean reaching for `TouchBehavior` from the Community Toolkit or writing platform-specific code. In .NET 11, `LongPressGestureRecognizer` sits alongside the tap, swipe, pan and pinch recognizers and works much like `TapGestureRecognizer`.

Tony shows the XAML setup with `MinimumPressDuration`, `AllowableMovement`, `Command` and `CommandParameter`, and the code-behind alternative using the `LongPressed` event. `GetPosition` returns where the user pressed, which is handy for placing a contextual menu. A separate `LongPressing` event reports `Started`, `Running`, `Completed` and `Canceled` states for visual feedback while the finger is still down.

The platform notes are the part to read before you rely on timing. iOS and Mac Catalyst use the native `UILongPressGestureRecognizer`, Android uses `GestureDetector` and Windows uses a timer. Android ignores `MinimumPressDuration` and uses the system timeout, around 400 milliseconds, and continuous state updates are only available on iOS and Mac Catalyst.

It's a three-minute read, and a quick way to check whether you can drop a dependency.
