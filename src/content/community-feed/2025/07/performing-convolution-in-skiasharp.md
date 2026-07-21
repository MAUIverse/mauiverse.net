---
title: "Performing Convolution in SkiaSharp"
link: https://davestechlab.co.uk/software/performing-convolution-in-skiasharp/
description: "David Britch performs fast image convolution in SkiaSharp using CreateMatrixConvolution for blur, sharpen, emboss, and edge detection in a .NET MAUI app. Learn why the built-in filter beats a hand-rolled O(N²) loop for arbitrary kernel sizes."
date: 2025-07-28
author: davidbritch
contentType: article
---

Convolution powers many imaging effects, but naive implementations slow down badly as kernel size grows. David Britch shows how SkiaSharp's built-in matrix convolution filter delivers arbitrary-size kernels at speed in a .NET MAUI app.

## What you'll learn

- **What convolution is** — weighting each pixel by its neighbours using a kernel matrix for effects like blur, sharpen, emboss, and edge detection
- **Defining kernels** — a `ConvolutionKernels` class with edge detection, Laplacian of Gaussian, and emboss examples
- **Why the built-in filter wins** — avoiding the O(N²) cost of a hand-written NxN loop
- **Using CreateMatrixConvolution** — configuring kernel size, scale, bias, offset, tile mode, and alpha handling on an `SKImageFilter`
- **Rendering the result** — applying the filter via `SKPaint` and snapshotting the surface for further operations

Read the full post for the kernel definitions, the full convolution method, and result screenshots.
