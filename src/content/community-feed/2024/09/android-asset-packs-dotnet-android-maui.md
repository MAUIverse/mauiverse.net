---
title: "Android Asset Packs for .NET & .NET MAUI Android Apps"
link: https://devblogs.microsoft.com/dotnet/android-asset-packs-in-dotnet-android/
description: Dean Ellis introduces Asset Pack support for .NET Android/.NET MAUI (in .NET 9), enabling large AndroidAsset/MauiAsset payloads with InstallTime/FastFollow/OnDemand delivery.
date: 2024-09-12
author: dellis1972
---

Asset Packs are a key part of Android App Bundles when you need to ship large content (games, media, datasets) beyond the base package limits.

This post shows how .NET 9 adds first-class Asset Pack support via MSBuild metadata on `AndroidAsset` (and `MauiAsset` for MAUI apps), including delivery types like **InstallTime**, **FastFollow**, and **OnDemand**.
