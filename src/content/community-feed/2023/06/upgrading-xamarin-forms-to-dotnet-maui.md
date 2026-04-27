---
title: "Upgrading Xamarin Forms to .NET MAUI"
link: https://mitchelsellers.com/blog/article/upgrading-xamarin-forms-to-net-maui
description: "Mitchel Sellers shares a practical walkthrough of migrating Xamarin.Forms projects to .NET MAUI, averaging 4-8 hours per project. The post covers using the Upgrade Assistant, manual migration steps, switching to single-project structure, and common gotchas."
date: 2023-06-19
author: mitchelsellers
contentType: article
---

With Xamarin identifying iOS 16 as its final supported version, upgrading to .NET MAUI is no longer optional. This post walks through the full migration process from pre-work through the Upgrade Assistant, manual steps, and the optional move to single-project structure.

## What you'll learn

- Pre-migration prep: upgrading to Xamarin.Forms 5.0 first, cleaning up unused code and build warnings
- How to run the Upgrade Assistant once per project (MobileProject, Android, and iOS)
- The manual migration steps Microsoft provides that the tool doesn't fully handle
- How to switch to the single-project structure for easier image, font, and resource management
- Common issues: Visual Studio auto-adding files to .csproj, font registration, and when to clean and restart
