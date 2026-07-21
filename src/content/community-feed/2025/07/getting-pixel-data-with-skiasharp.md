---
title: "Getting Pixel Data with SkiaSharp"
link: https://davestechlab.co.uk/software/getting-pixel-data-with-skiasharp/
description: "David Britch explains the fastest ways to read and write raw pixel data with SkiaSharp in a .NET MAUI app, with greyscale, sepia, and thresholding examples. Learn why SKBitmap beats SKImage for pixel access and how RGBA layout differs per platform."
date: 2025-07-24
author: davidbritch
contentType: article
---

Serious image processing means working directly with pixels rather than calling high-level APIs. David Britch, drawing on a Mac Catalyst image-processing prototype, walks through SkiaSharp's pixel-access options and implements several classic operations.

## What you'll learn

- **Choosing the right type** — why `SKBitmap` reliably exposes pixel data where `SKImage` returned null in SkiaSharp 3
- **The fastest access path** — using `GetPixels` to get a pointer and using pointer arithmetic to read/write pixels
- **Platform pixel layout** — RGBA8888 on Apple platforms and Android versus BGRA on Windows
- **Worked examples** — implementing greyscale and sepia conversions, plus Otsu's thresholding for binarisation
- **Wiring it into MVVM** — calling these operations as extension methods on an `SKBitmap` from a view model

Read the full post for the complete extension-method code and screenshots of each operation.
