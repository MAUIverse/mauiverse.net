---
title: "Getting Started with the .NET MAUI Map Control"
link: https://www.telerik.com/blogs/getting-started-net-maui-map-control
description: "Héctor Pérez shows how the Telerik UI for .NET MAUI Map control renders ESRI shapefiles, with country labels, population-based coloring and single-country selection. It's a nine-minute guide if you need a world map, region highlighting or a seating chart rather than a street map."
date: 2026-10-13
author: hprez21
contentType: article
---

Embedding a street map is easy enough, but highlighting regions and reacting to a selection is harder. The Telerik Map control takes a different approach: it reads ESRI shapefiles, a `.shp` file for the geometry and a `.dbf` file for the attributes, and draws them with SkiaSharp. That makes it suitable for world maps, country outlines, floor plans and seating layouts.

Héctor Pérez builds a sample app step by step. He adds the sample `world` files as embedded resources and reads them through a `MapShapefileLayer`. The post then covers country-name labels with `LabelAttributeName`, a custom `MapShapeStyleSelector` that colors countries by population, and `SelectionMode` for showing details about the selected country, using a view model built with CommunityToolkit.Mvvm.

It's a practical starting point for data-driven maps. As with other Telerik controls, you'll need the package and a license or trial.
