---
title: "Pin Clustering in .NET MAUI Maps"
link: https://devblogs.microsoft.com/dotnet/pin-clustering-in-dotnet-maui-maps/
description: "David Ortinau introduces pin clustering for the .NET MAUI Map control, shipping in .NET MAUI 11 Preview 3. A single property enables automatic grouping of nearby pins, with support for separate clustering groups via ClusteringIdentifier and a ClusterClicked event for custom tap handling."
date: 2026-04-15
author: davidortinau
contentType: article
---

Loading a map with dozens or hundreds of pins creates an overlapping mess that's impossible to interact with. Starting in .NET MAUI 11 Preview 3, the Map control supports pin clustering out of the box on Android and iOS/Mac Catalyst — a long-requested feature (#11811).

## What you'll learn

- How to enable clustering with a single `IsClusteringEnabled="True"` property
- How to create separate clustering groups using `ClusteringIdentifier` so different pin types cluster independently
- How to handle cluster taps with the `ClusterClicked` event and access the pins within a cluster
- How to suppress default zoom-to-cluster behavior with `e.Handled = true`
- Platform implementation details: grid-based algorithm on Android, native `MKClusterAnnotation` on iOS/Mac Catalyst
