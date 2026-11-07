---
title: "Fix MAUI Android \"Doesn't support required ABI\" issue"
link: https://blog.pieeatingninjas.be/2025/08/14/fix-maui-android-doesnt-support-required-abi-issue/
description: "Pieter Nijs explains why users couldn't install a .NET MAUI app from Google Play after it moved to .NET 9. The fix is a short `RuntimeIdentifiers` entry in the csproj, and the cause is easy to miss in the release notes."
date: 2025-08-14
author: PieEatingNinjas
contentType: article
---

Install reports started coming in after an app migrated to .NET 9, with Google Play telling users that their device wasn't compatible. Digging into the Play Console, Pieter Nijs found that the App Bundle listed only `arm64-v8a` and `x86_64`, where earlier releases had also included `armeabi-v7a` and `x86`.

The cause is a .NET 9 change: 64-bit architectures are now the default for Android. Pieter spells out the fix, which is to list the four Android runtime identifiers in the project file for `net9.0-android`. After doing that, the Play Store showed all four ABIs again.

If you support older or 32-bit devices, check your bundle's ABI list before you ship a .NET 9 build. It's a quick read.
