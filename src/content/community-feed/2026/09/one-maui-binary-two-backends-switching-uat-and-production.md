---
title: "One MAUI Binary, Two Backends: Switching UAT and Production (and Detecting TestFlight Along the Way)"
link: https://www.seeleycoder.com/blog/one-maui-binary-two-backends/
description: "Jon Seeley shows how one .NET MAUI binary can carry both a UAT and a Production configuration and switch between them at runtime, so testers exercise the same artifact that ships. The post covers namespaced local state, a hidden tester gesture and a Swift shim that asks StoreKit whether the app came from TestFlight."
date: 2026-09-17
author: fooberichu150
contentType: article
---

App Store Connect and Google Play both expect you to promote the exact binary you tested. Building a separate app just to point at a UAT backend means you're no longer testing what you ship. Jon Seeley's answer is a single binary that embeds both `appsettings` files and picks the environment at runtime, defaulting to Production.

The design has several parts:

- **Runtime selection:** services resolve URLs from the selector's current key rather than from `IConfiguration`, which only holds one environment's settings
- **Namespaced local state:** tokens, database, cached responses and flags are all scoped per environment, and both namespaces survive a switch
- **Switch coordinator:** instead of restarting, it disposes live state, rebuilds the service scope and re-runs the bootstrap, saving the choice only on success
- **SDK limits:** Sentry and RevenueCat read their configuration once at startup, so the app prompts the tester to close and reopen it

Getting in uses a hidden gesture and a banner. The default policy stays on Production unless StoreKit reports a TestFlight install, which needs a small native Swift shim and involved two bugs that only appeared at the final link step. Jon also covers other ways to detect a build's origin and a server-side backstop, since client signals aren't security. It's a practical read if you maintain a UAT and production pair for a MAUI app.
