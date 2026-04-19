---
title: "CarPlay & Android Auto with .NET MAUI"
link: https://allanritchie.com/blog/2026/02/maui-carplay/
description: "Allan Ritchie demonstrates how to extend .NET MAUI apps to car dashboards via Apple CarPlay and Android Auto. The post covers scene delegates, template-based UI, map rendering on CarPlay, and the key pattern of resolving MAUI DI services from platform-specific car entry points."
date: 2026-02-20
author: aritchie
contentType: article
---

Your .NET MAUI app can project a purpose-built interface onto a vehicle's infotainment screen — same solution, same shared services, same DI container. This post walks through the full implementation for both CarPlay and Android Auto, using two real apps as examples: a GPS trip recorder with live map drawing, and a speech-driven game.

## What you'll learn

- How CarPlay scene delegates work: entitlements, `Info.plist` scene manifests, and the `CPInterfaceController` lifecycle
- How to access MAUI's DI container from CarPlay code via `IPlatformApplication.Current!.Services`
- CarPlay template types in practice: `CPInformationTemplate` for data display, `CPGridTemplate` for actions, and `MKMapView` for live maps
- Android Auto setup: `CarAppService`, `Session`, `Screen`, and the `Invalidate()` re-render pattern
- How to share ViewModels between the phone UI and the car UI using scoped DI and `PropertyChanged` subscriptions
- Testing with the iOS Simulator CarPlay window and the Android Desktop Head Unit emulator
