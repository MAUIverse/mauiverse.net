---
title: "Native MapLibre (Mapbox) Maps in a MAUI Hybrid App"
link: https://medium.com/@r.dudchenko18/native-maplibre-mapbox-maps-in-maui-hybrid-app-c02ccd4c5a54
description: "Ruslan Dudchenko explains how to drop native MapLibre under a transparent BlazorWebView in a .NET MAUI Hybrid app when the JS map stack starts lagging and crashing. Bindings, touch routing, and an IMaplibreMapService wrap the approach — with a working GitHub sample to extend."
date: 2024-07-12
author: dudchenko610
contentType: article
---

JavaScript MapLibre inside Blazor works — until complex map features, lag, and GPU crashes on Android devices force a rethink. Ruslan Dudchenko shows how his team moved to the native MapLibre Android library under a MAUI Hybrid BlazorWebView for better performance.

## What you'll learn

- **Why leave the JS map** — performance and device-specific GPU failures that made the Blazor-hosted MapLibre approach unsustainable
- **Native bindings in MAUI** — adapting MapLibre Android bindings so the native map can live alongside Hybrid UI
- **Transparent overlay layout** — placing a native map under a transparent `BlazorWebView`, then toggling CSS when the map should hide
- **Touch event routing** — intercepting Android touches so map hits, Blazor UI collisions, and modal flows each get the right handler
- **`IMaplibreMapService`** — a familiar MapLibre/Mapbox-style service façade you can extend as the native SDK allows

Read the full article for the implementation details, demo, and GitHub repository you can clone as a starting point.
