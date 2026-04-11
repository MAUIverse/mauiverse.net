---
title: "How to Create a Custom .NET MAUI Shell TabBar"
link: https://albyrock87.hashnode.dev/how-to-create-a-custom-net-maui-shell-tabbar
description: "Alberto Aldegheri shows how to break free from the default Shell TabBar by building a fully custom, cross-platform tab bar using Nalu's TabBarView. The post walks through custom shapes, animated floating indicators, and smooth transition logic — all without writing platform-specific handlers."
date: 2026-04-09
author: albyrock87
contentType: article
---

Default Shell doesn't give you much room to customize the TabBar appearance, and going the native handler route means writing separate code for Android and iOS. This post demonstrates a different approach using Nalu's `TabBarView`, which lets you replace the built-in tab bar with a fully custom, cross-platform Grid-based component.

## What you'll learn

- How to set up Nalu's `TabBarView` with `UseNaluTabBar()` in your `MauiProgram.cs`
- How to replace the default Shell TabBar with a custom Grid-based component
- How to create a custom `Shape` class for drawing curved, wave-style tab bar backgrounds
- How to use `UnsafeAccessor` to tap into MAUI's internal layout properties for path computation
- How to implement animated tab switching with a floating indicator that moves between tabs
- How to wire up `ShellItem` property changes to drive tab selection and animation logic
