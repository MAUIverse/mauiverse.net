---
title: "Testing your MAUI code on real devices comes to .NET 11"
link: https://tonyedwardspz.co.uk/blog/maui-11-native-device-testing/
description: "Tony Edwards explores the native device test projects in .NET 11, which run MSTest tests inside a real Android, iOS, macOS, Mac Catalyst or tvOS app process through `dotnet test`. He also explains how this differs from UI automation and what it means for testing platform-specific MAUI code."
date: 2026-11-05
author: tonyedwardspz
contentType: article
---

Mocks can only tell you so much about code that calls into Android or iOS. .NET 11 adds native device test projects so those tests can run on an emulator or physical device using the familiar `dotnet test` workflow. Tony walks through the five new templates (`androidtest`, `iostest`, `tvostest`, `macostest` and `maccatalysttest`), which use MSTest and Microsoft.Testing.Platform, and creates an Android project that checks the connectivity service is available.

For a closer look under the hood, he reads dotnet/android PR #11130 and the `AndroidTestAdapter`. It builds on Android's instrumentation system, then collects the TRX results and reports them back through the test platform. Device selection works through `--device` and `--list-devices`.

He's also clear about what this isn't. Appium and similar tools still cover full user journeys, while native device tests target platform services, permissions and integrations. Your build environment will still need devices or emulators.

If you maintain a MAUI app with a lot of native integration code, this post is a helpful overview of where the new tests fit.
