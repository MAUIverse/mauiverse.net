---
title: "Live Notifications with .NET MAUI: iOS & Android"
link: https://www.horus.com.uy/blog/cross-platform-live-notifications-c25td
description: "A practical look at implementing cross-platform live notifications in .NET MAUI, covering iOS Live Activities and Android updatable notifications with a real production example."
date: "2026-03-18"
author: "Helkin-Chacon"
contentType: "article"
---

Helkin breaks down how to keep a continuous, evolving state visible to users across iOS and Android from a single .NET MAUI codebase. Instead of treating live notifications as a platform-specific problem, the post frames them as the same pattern expressed differently by each system.

When to use them — scenarios like order tracking or ride-matching where a continuous evolving state makes more sense than a series of push notifications
iOS — implemented via Live Activities (Lock Screen / Dynamic Island), requiring a native interop bridge since MAUI doesn't expose them natively, with updates driven either by the app or the server via APNs
Android — handled through the existing notification layer using Live Updates, ProgressStyle (Android 16), or custom RemoteViews, updated by reposting with the same notification ID
Real production case — Helkin shares how they implemented this in Farmashop, where notifications start from the app on order confirmation and then move under server control, using APNs for iOS and Firebase for Android

Worth a read if you're exploring this feature in .NET MAUI 👇