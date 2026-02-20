---
title: "Align the Button Text in .NET MAUI"
link: https://dev.to/vhugogarcia/align-the-button-text-in-net-maui-1900
description: "Platform-specific button text alignment in .NET MAUI requires custom handlers leveraging native iOS and Android controls. This guide demonstrates creating reusable handlers for precise text positioning across platforms."
date: 2025-01-09
author: victor-hugo-garcia
contentType: article
---

Need your button text aligned just right? Victor shows you how to create custom handlers that give you pixel-perfect control over button text positioning on both iOS and Android. It's one of those platform-specific tweaks that can really polish your UI.

The trick is using MAUI's handler architecture to tap into native controls—`UIControlContentVerticalAlignment` on iOS and `GravityFlags` on Android. Victor even shows how to make it reusable by using the `ClassId` property so you can apply it selectively to specific buttons instead of going all-in globally.

**You'll learn:**
- Creating platform-specific handlers with conditional compilation
- Accessing native iOS and Android button alignment properties
- Using ClassId for targeted styling
- Registering custom handlers in MauiProgram.cs

[Read the full walkthrough](https://dev.to/vhugogarcia/align-the-button-text-in-net-maui-1900) and level up your MAUI UI game!
