---
title: "Pin Clustering Finally Lands in .NET MAUI Maps — One Property, Zero Pain"
link: https://thedotnetblog.com/posts/emiliano-montesdeoca/maui-maps-pin-clustering-finally/
description: "Emiliano Montesdeoca breaks down the new pin clustering feature in .NET MAUI 11 Preview 3 with clear code examples. The post covers enabling clustering with a single property, creating independent clustering groups with ClusteringIdentifier, and handling cluster taps."
date: 2026-04-16
author: emimontesdeoca
contentType: article
---

Loading a map with a hundred pins used to produce an unreadable blob. .NET MAUI 11 Preview 3 changes that with built-in pin clustering on Android and iOS/Mac Catalyst — one of the most requested features since the Xamarin days (issue #11811). Emiliano walks through the API with practical examples.

## What you'll learn

- How to enable clustering with `IsClusteringEnabled="True"` — one property, automatic grouping
- How `ClusteringIdentifier` creates independent clustering groups so different pin types don't merge
- How to handle cluster taps with `ClusterClicked` and access `Pins`, `Location`, and `Handled` on the event args
- Platform implementation details: custom grid-based algorithm on Android, native `MKClusterAnnotation` on iOS/Mac Catalyst
- Why this matters for map-heavy apps: delivery tracking, store locators, real estate, and more
