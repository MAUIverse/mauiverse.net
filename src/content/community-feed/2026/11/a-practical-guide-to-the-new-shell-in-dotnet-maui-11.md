---
title: "A Practical Guide to the New Shell in .NET MAUI 11"
link: https://tonyedwardspz.co.uk/blog/guide-to-maui-11-shell/
description: "Tony Edwards works through what's new in Shell for .NET MAUI 11, from badges and route templates to the new handler architecture and native navigation customization. It's a long, hands-on tutorial with a companion Shell Workshop app, aimed at developers who already use Shell."
date: 2026-11-20
author: tonyedwardspz
contentType: article
---

Shell isn't being replaced in .NET MAUI 11, but it has changed underneath. Android now uses a handler-based Shell by default, while iOS and Mac Catalyst offer one you can opt into. Tony Edwards builds a tutorial around that shift, using MAUI Controls 11.0.10 and CommunityToolkit.Mvvm 8.4.2, with a companion **Shell Workshop** app on GitHub that has an exercise for each feature.

The first sections cover the smaller improvements: badges on tabs and toolbar items, including binding `BadgeText` to a view model and the platform differences on Windows, then the toolbar overflow menu, then route templates with constraints, optional values and catch-all parameters. The larger part looks at the new handlers. He shows how to confirm which handler is active, how to customize the Android navigation toolbar and the Apple tab bar, and how to handle repeated tab selection. It also covers the back button, native navigation transitions and migrating existing renderer-based customizations, including temporarily falling back to the legacy Android renderer.

The testing notes are candid. Some APIs behave as expected, while others, such as native toolbar title colors, interact with Shell's own appearance processing in ways you only see on a real device. It's a 45-minute read, so it works best as a reference to return to.
