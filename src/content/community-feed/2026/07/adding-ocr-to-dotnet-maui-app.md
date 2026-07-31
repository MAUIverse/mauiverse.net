---
title: "Adding OCR to a .NET MAUI App: Pick an Image, Read the Text, Stay Responsive"
link: https://medium.com/@iron_software_team/adding-ocr-to-a-net-maui-app-pick-an-image-read-the-text-stay-responsive-8acb33479d9a
description: "Iron Software walks through IronOCR in .NET MAUI — MediaPicker, ReadAsync off the UI thread, image downscaling, and per-platform gallery permissions. The mobile gotchas matter even if you swap OCR engines."
date: 2026-07-02
author: iron-software
contentType: article
---

OCR that freezes the UI might as well be broken. Iron Software's MAUI walkthrough gets recognition working in three lines, then spends the rest of the post on what actually matters on phones: threading, picker streams, and image size.

## What you'll learn

- **The core IronOCR call** — `IronTesseract` + `OcrInput` + `Read`/`ReadAsync` with offline English packs in the NuGet
- **MediaPicker the portable way** — read `OpenReadAsync()` streams instead of fragile `FullPath` values
- **Keeping the UI alive** — `ReadAsync`, busy indicators, and never calling sync `Read` from a button handler
- **Downscale before OCR** — cap longest edge (~2000px) so mid-range phones stay responsive
- **Platform manifests** — Android `READ_MEDIA_IMAGES`, iOS photo-library usage strings, and packaged Windows caveats

Read the full Medium post for the bindable `Editor` pattern and where to go next (multi-language, searchable PDFs, structured results).
