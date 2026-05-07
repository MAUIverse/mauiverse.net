---
title: "How to Build a Cross-Platform Barcode, MRZ, and Document Scanner with .NET MAUI Blazor"
link: https://dev.to/yushulx/how-to-build-a-cross-platform-barcode-mrz-and-document-scanner-with-net-maui-blazor-1e4f
description: "Xiao Ling builds a 'Vision Scanner' app using .NET MAUI Blazor and the Dynamsoft Capture Vision SDK — scanning barcodes, reading MRZ fields from passports, and detecting document boundaries with perspective correction, all running on Android, iOS, macOS, and Windows."
date: 2026-04-10
author: yushulx
contentType: article
---

Extracting structured data from barcodes, passports, and documents usually requires separate native implementations per platform. This tutorial uses .NET MAUI Blazor's `BlazorWebView` to host the Dynamsoft Capture Vision SDK, delivering a single Razor codebase that handles all three capture modes.

## What you'll learn

- How to set up Dynamsoft Capture Vision SDK in a .NET MAUI Blazor project
- Platform-specific setup: Android `WebChromeClient` for camera permissions, macOS `AVFoundation` for native camera access
- Three scanning modes: barcode reading, MRZ field extraction from passports/IDs, and document boundary detection
- Live camera streaming with real-time decoding and overlay rendering
- Browser-side homography for document perspective correction — no server round-trip
