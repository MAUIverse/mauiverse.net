---
title: "Display a Map with .NET MAUI"
link: https://davestechlab.co.uk/software/display-map-with-net-maui/
description: "David Britch builds a simple cross-platform Map control for .NET MAUI backed by native map views on Android and iOS/Mac Catalyst. It's a beginner-friendly example of writing your own handler-based control."
date: 2022-07-29
author: davidbritch
contentType: article
---

.NET MAUI lacked a map control, so David Britch wrote a simple one — primarily as a gentle example of authoring custom controls with handlers. It displays, scrolls, zooms, and switches map imagery.

## What you'll learn

- **Native map views** — mapping a cross-platform `Map` to `MKMapView` on iOS/Mac Catalyst and Android's `MapView` (with no WinUI equivalent)
- **Handler architecture** — implementing `IMap`, `IMapHandler`, and a property mapper for a virtual view
- **Platform partial classes** — splitting the handler across `MapHandler.Android.cs`, `.iOS.cs`, and `.Windows.cs`
- **What it covers** — scrolling, zooming, showing location and traffic, and changing between street/satellite/hybrid imagery
- **Android setup** — inserting your Google Maps API key into the Android manifest

Read the full post for the solution walkthrough and a link to the repo.
