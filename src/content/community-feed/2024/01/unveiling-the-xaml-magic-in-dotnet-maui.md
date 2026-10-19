---
title: "Enchanting Cross-Platform UIs: Unveiling the XAML Magic in .NET MAUI"
link: https://medium.com/@thimanshu1993/enchanting-cross-platform-uis-unveiling-the-xaml-magic-in-net-maui-42bae144bea9
description: "Himanshu Tyagi introduces XAML for .NET MAUI the way an interview question would: what it is, where it came from, and why the UI lives in markup. Bindings, commands, OnPlatform, and resource dictionaries get a short tour."
date: 2024-01-15
author: thimanshu1993
contentType: article
---

"What is XAML, and why is the UI not in C#?" shows up in interviews more often than in architecture docs. Himanshu Tyagi answers it for .NET MAUI, starting from the markup and walking back through where it came from.

## What you'll learn

- **What the markup is for** — an XML description of layout and behaviour, kept apart from the code that runs the app, shared across Android, iOS, macOS, and Windows
- **The path it took** — WPF, then Xamarin.Forms, then .NET MAUI, with a small snippet at each stop so the same idea is visible in each dialect
- **Why he prefers it to building the tree in C#** — shorter structure, a view that binds instead of reaching into the page, and `OnPlatform` when one value has to differ by OS
- **Resources** — `DynamicResource` for a colour that can change at runtime, and a `ResourceDictionary` so the same keys are shared
- **MVVM from the markup** — `Mode=OneTime` when a value will not change, `Mode=TwoWay` on an `Entry`, and `Command` on a button so the view does not own the click handler

Read the article if you want the interview answer and the bindings side by side, rather than a control catalogue.
