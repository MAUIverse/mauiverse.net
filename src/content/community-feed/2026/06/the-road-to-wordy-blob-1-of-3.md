---
title: "The Road To Wordy Blob 1 of 3"
link: https://philotalk.com/the-road-to-wordy-blob-1-of-3
description: "Stephen Moreton-Howell begins a three-part series on building his .NET MAUI word game Wordy Blob, starting with his first app: a Plate Tectonics Viewer. It's a beginner-friendly look at drawing performance and structuring a first MAUI project."
date: 2026-06-10
author: steve3008
contentType: article
---

Part of MAUI UI July, this first installment traces Stephen Moreton-Howell's journey to .NET MAUI, from obsolete cross-platform tools to his first real app: a Plate Tectonics Viewer that reuses graphics later carried into Wordy Blob.

## What you'll learn

- **Why .NET MAUI** — the search for a durable, familiar cross-platform system after being burned by an obsolete toolkit
- **Structuring a first app** — laying out `MainPage.xaml` with a `Grid` and a central `GraphicsView` for the map
- **Custom drawing** — implementing `IDrawable.Draw` and encapsulating rendering in a dedicated `TecGlobe` class
- **Drawing performance** — using `ICanvas.FillPath`/`DrawPath` to render huge tectonic meshes fast enough to scroll through millions of years
- **Loading data and handling input** — reading compressed binary point data and wiring up `TapGestureRecognizer` and a `Slider`

Read the full post for the app walkthrough, and follow the series into parts 2 and 3.
