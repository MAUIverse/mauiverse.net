---
title: "Fixing build issue in MAUI preview 8"
link: https://blog.pieeatingninjas.be/2021/09/19/fixing-build-issue-in-maui-preview-8/
description: "Pieter Nijs hits CS0246 errors on `IStartup` and `IAppHostBuilder` after installing .NET MAUI Preview 8, and traces them to an old project template that hadn't been replaced. He also covers a missing Deploy flag that stops the Android simulator from launching the app."
date: 2021-09-19
author: PieEatingNinjas
contentType: article
---

Installing an early MAUI preview didn't go smoothly for Pieter Nijs, even after following the installation guide. A new project from the template failed to build, complaining that `IStartup` and `IAppHostBuilder` couldn't be found.

The explanation was that he was still on the previous MAUI app template. Reinstalling the templates with `dotnet new --install` replaced the old version, and a new project then built correctly. He also notes the template's updated icon and "New" badge as a way to confirm you have the right one.

A second snag followed: the Android simulator didn't launch the app even though the build succeeded. In his case, the Deploy flag in Configuration Manager needed to be checked.

It's a snapshot of the preview era, but a handy reminder to check your installed templates when a build error doesn't make sense.
