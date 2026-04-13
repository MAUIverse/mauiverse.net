---
title: "Introducing Shiny.Spatial — A Dependency-Free Spatial Database and GPS Geofencing for .NET"
link: https://allanritchie.com/blog/2026/03/shiny-spatial/
description: "Allan Ritchie introduces Shiny.Spatial, a spatial database engine that stores geometry in SQLite with R*Tree indexing and pure C# spatial algorithms — no SpatiaLite or NetTopologySuite required. The companion geofencing package enables monitoring thousands of polygon regions via GPS, breaking free from the 20/60 region limits on iOS and Android."
date: 2026-03-01
author: aritchie
contentType: article
---

Geospatial work on .NET MAUI has been limited by native binary dependencies, AOT incompatibility, and platform geofencing caps (20 regions on iOS, 60 on Android — circles only). Shiny.Spatial solves this with a spatial database engine that runs everywhere .NET runs, and a GPS-driven geofence monitor that queries spatial databases in real-time.

## What you'll learn

- How the two-pass query pipeline works: R*Tree bounding box filter in SQL, then C# geometry refinement
- How to create spatial databases, insert features, and query with the fluent builder API
- Supported geometry types: Point, LineString, Polygon (with holes), and Multi* variants
- Performance benchmarks: FindIntersecting in 1.15ms, FindWithinDistance in 183μs on 100K features
- How GPS geofencing works by hooking into GPS updates and querying spatial databases instead of registering OS fences
- Multi-layer monitoring: track state/province and city boundaries independently
- How Shiny.Spatial compares to SpatiaLite and NetTopologySuite for mobile use cases
