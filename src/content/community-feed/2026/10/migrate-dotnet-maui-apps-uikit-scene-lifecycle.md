---
title: "Get Your .NET MAUI App Ready for Xcode 27"
link: https://devblogs.microsoft.com/dotnet/migrate-dotnet-maui-apps-uikit-scene-lifecycle/
description: "Gerald Versluis explains why a .NET MAUI app built with Xcode 27 can vanish after the splash screen on iOS 27, and how to adopt the UIKit scene lifecycle. The post covers the scene delegate, the Info.plist entry, and the callbacks you have to move."
date: 2026-10-19
author: jfversluis
contentType: article
---

Build with Xcode 27, launch on iOS 27, and the app can show its splash screen and then disappear with `UIScene life cycle is required for apps built with this SDK.` Gerald Versluis walks through the scene-lifecycle migration .NET MAUI apps need, including an agent skill that can apply it.

## What you'll learn

- **Why a package update is not enough** — .NET MAUI already supports scenes, but existing platform files are not rewritten when you update the workload. An older binary does not suddenly need this just because the phone updated
- **The two-file change** — a public `SceneDelegate` deriving from `MauiUISceneDelegate`, plus a `UIApplicationSceneManifest` whose configuration name is `__MAUI_DEFAULT_SCENE_CONFIGURATION__`. Repeat it for Mac Catalyst and for every plist a shipping configuration can use
- **Versions to line up** — .NET MAUI 10.0.110 or higher so scene-side App Actions and `WebAuthenticator` forwarding come with the launch fix, the Xcode 27.0 workload, and minimum OS versions of iOS 15 and Mac Catalyst 17
- **Callbacks that stop firing on the app delegate** — activation, background, URL, and user-activity events move to the scene equivalents. `FinishedLaunching` still runs, but `AppDelegate.Window` stays null because the window is created later
- **Cold start and shortcuts** — URLs that launch the app arrive on `SceneWillConnect` before the window exists, so navigation has to wait. A custom `PerformActionForShortcutItem` handler must call its completion callback exactly once
- **The agent path** — `Microsoft.Maui.Cli` 0.1.0-preview.13 or later can install the `maui-xcode27-migration` skill. The skill inspects the toolchain and migrates; you still review the diff and test the flows it can change

Read the post before you ship an Xcode 27 build, and test cold launch, auth, links, notification taps, and shortcuts with the app both running and fully closed.
