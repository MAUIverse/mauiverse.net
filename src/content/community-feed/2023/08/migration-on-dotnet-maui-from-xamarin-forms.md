---
title: "Migration on .NET MAUI"
link: https://www.igniscor.com/post/migration-on-net-maui
description: "Pavel Chuvak shares a hands-on migration checklist for moving Xamarin.Forms apps to .NET MAUI across iOS and Android. The guide covers project file changes, namespace updates, package strategy, and common pitfalls you should expect while modernizing."
date: 2023-08-25
author: chuvakpavel
contentType: article
---

If you are planning a Xamarin.Forms to .NET MAUI migration, this post organizes the work into a sequence you can execute and verify incrementally. It combines setup guidance with practical troubleshooting notes from real migration work.

## What you'll learn

- Pre-migration checks for supported project types, environment readiness, and package compatibility
- Core csproj updates for MAUI conversion and platform project alignment
- Required Android and iOS code updates, including MauiProgram, application classes, and minimum OS settings
- Namespace replacements and API/layout differences to account for during compile and UI validation
- Package migration strategy, including custom NuGet updates and when Upgrade Assistant helps versus manual fixes
