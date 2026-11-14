---
title: "Maps get an upgrade in .NET MAUI 11"
link: https://tonyedwardspz.co.uk/blog/maui-11-maps-get-some-love/
description: "Tony Edwards reviews the built-in Map control's .NET 11 improvements, including pin clustering, custom pin images and new interaction events. He also looks at how Gerald Versluis's clustering PR works differently on iOS and Android."
date: 2026-11-03
author: tonyedwardspz
contentType: article
---

Clustering, custom markers and map styling have long meant a custom handler or a third-party library. The .NET 11 previews add several of them to the built-in `Map`, and Tony Edwards picks out the most useful.

Clustering is a single property, `IsClusteringEnabled`, with a `ClusterClicked` event whose `e.Handled` flag lets you override the default zoom. `ClusteringIdentifier` keeps categories apart, so cottages and attractions can cluster separately. On iOS and Mac Catalyst the work is done by MapKit's `MKClusterAnnotation`. Android uses a grid-based algorithm that only recalculates when the zoom changes by more than half a level. Pins now also accept an `ImageSource`, so a custom marker no longer needs native rendering code.

Tony rounds up the rest quickly: long presses on the map, clicks on circles and polygons, element visibility and ordering, animated movement and custom JSON styles on Android. Windows gets an Azure Maps-backed implementation, though without clustering.

It's a five-minute overview, and the post links to the official MAUI maps sample.
