---
title: "Real time live tracking using .NET MAUI"
link: https://vladislavantonyuk.github.io/articles/Real-time-live-tracking-using-.NET-MAUI/
description: Implement continuous geolocation tracking in .NET MAUI by extending the built-in APIs and adding Android/iOS/Windows platform implementations.
date: 2023-04-17
author: VladislavAntonyuk
---

.NET MAUI makes it easy to grab a single location, but “live tracking” requires a continuous stream of updates and platform-specific wiring.

This article extends the MAUI geolocation approach into a simple interface plus Android/iOS/Windows implementations, including the permissions and OS hooks you need for continuous updates.
