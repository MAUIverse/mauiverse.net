---
title: "Bringing iPhone Duo APIs to .NET MAUI"
link: https://blog.pieeatingninjas.be/blog/2026-11-03-bringing-iphone-duo-apis-to-dotnet-maui/
description: "Pieter Nijs introduces DuoExtensions.Maui, an experimental library that exposes the iPhone Duo's new toolbar and hinge APIs through attached properties and a hinge service. It's a practical starting point if you want to adapt Shell toolbars to the foldable without writing the UIKit plumbing yourself."
date: 2026-11-03
author: PieEatingNinjas
contentType: article
---

The iPhone Duo APIs are available from C#, but that doesn't make them easy to reach from Shell or XAML. MAUI doesn't expose all of the new settings yet, and Shell manages some of the native controls itself. Pieter Nijs fills the gap with **DuoExtensions.Maui**, a small playground library that wraps the native integration so you can use it from your pages. He's upfront that it's experimental and may be overtaken by official support.

The post covers setup first: install the NuGet preview, call `UseDuoExtensions()` in `MauiProgram.cs`, and target `net10.0-ios27.1` while keeping an iOS 15 deployment minimum. He also notes that it replaces Shell's renderer registration, which matters if you already have a custom one.

From there it looks at two areas:

- **Toolbar APIs:** item axis behavior, vertical toolbars, compression, and reading the preferred toolbar edge from iOS instead of guessing from orientation, each with a XAML example and the implementation behind it
- **Hinge status and angle:** an injectable `IHingeService` with a per-window observer, plus a clear explanation of why a global reading would be unreliable

A separate five-tab demo app is on GitHub, and Pieter asks for feedback and issues. If you're starting to plan for the foldable, it's a useful look at what the native APIs need from MAUI.
