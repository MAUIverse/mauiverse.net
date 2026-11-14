---
title: "Maps with MAUI 11 - Deep Dive Tutorial"
link: https://tonyedwardspz.co.uk/blog/maui-11-maps-deep-dive-tutorial/
description: "Tony Edwards builds a Cornwall-themed map app to walk through the biggest update to the .NET MAUI `Map` control since it launched. This 34-minute read covers pin clustering, custom markers, interactive shapes, location tracking and Windows support."
date: 2026-11-14
author: tonyedwardspz
contentType: article
---

Clustering, custom pin images and tappable overlays used to mean custom handlers or native map code. .NET MAUI 11 brings much of that into the cross-platform API, and Tony Edwards works through it in a single sample app with a set of locations around Cornwall. A GitHub repository accompanies the tutorial.

It starts with setup: the `Microsoft.Maui.Controls.Maps` package, `UseMauiMaps()`, and the Google Maps key needed on Android. From there, the sections build up:

- **XAML improvements:** a bindable `Region` and type converters so locations and regions can be written as simple strings
- **Pins and clusters:** `Pin.ImageSource`, `IsClusteringEnabled`, `ClusteringIdentifier` and handling `ClusterClicked`
- **Interaction:** long presses on the map, plus circles, polygons and polylines that respond to taps
- **Control and tracking:** opening pin info windows from code, fitting several locations on screen, Android map styles and showing the user's location

The later sections look at Windows, which uses Azure Maps and doesn't support every new feature, and at wiring maps into MVVM. Tony finishes with a summary table of what's new and a look at the implementation pull requests. If you're planning a map-based screen on .NET 11, it's a thorough starting point.
