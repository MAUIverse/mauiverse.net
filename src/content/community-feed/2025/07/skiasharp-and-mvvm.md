---
title: "SkiaSharp and MVVM"
link: https://davestechlab.co.uk/software/skiasharp-and-mvvm/
description: "David Britch shows how to move SkiaSharp drawing code out of a view's code-behind and into a service consumed by a view model in .NET MAUI. Learn to subclass SKCanvasView with a bindable renderer property for clean MVVM."
date: 2025-07-22
author: davidbritch
contentType: article
---

A common question with SkiaSharp is how to get drawing logic out of the `PaintSurface` event handler and into a view model. David Britch shares his preferred approach for a clean MVVM setup in .NET MAUI.

## What you'll learn

- **Subclassing SKCanvasView** — adding a `CanvasRenderer` bindable property that points at a rendering service
- **Defining a service interface** — an `IBitmapRendererService` exposing `PaintSurface`, `InvalidateSurface`, and an invalidation event
- **Implementing the service** — drawing an `SKBitmap` and raising redraw requests from a bindable `Bitmap` property
- **Injecting into a view model** — registering the service and consuming it via dependency injection
- **Forcing redraws** — calling `InvalidateSurface` from the view model to keep code-behind empty

Read the full post for the full control, interface, and service code, and a link to a working sample repo.
