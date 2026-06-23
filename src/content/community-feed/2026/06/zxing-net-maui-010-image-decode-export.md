---
title: "ZXing.Net.Maui 0.10.0: Decode Barcodes From Images and Export Barcode Images"
link: https://blog.verslu.is/maui/zxing-net-maui-010-image-decode-export/
description: "Gerald Versluis announces ZXing.Net.Maui 0.10.0 with two headline features: still-image barcode decoding from any stream or file path, and programmatic barcode image export to files or streams. No camera required — pick an image, decode it, or generate a barcode and save it."
date: 2026-06-17
author: jfversluis
contentType: article
---

ZXing.Net.Maui 0.10.0 adds two new APIs that cover scenarios beyond camera-based scanning. You can now decode barcodes from gallery images, downloaded files, or screenshots, and generate barcode or QR code images to save and share.

## What you'll learn

- Decoding barcodes from any `Stream` or file path using `BarcodeReader.DecodeAsync` with the familiar `BarcodeReaderOptions`
- Generating barcode and QR code images with `BarcodeGenerator.WriteToFileAsync` and `WriteToStreamAsync`
- Customising generated barcodes with format, dimensions, margins, foreground and background colours
- Getting platform-native image types (`Bitmap`, `UIImage`, `WriteableBitmap`) via `BarcodeGenerator.GenerateAsync`
- EXIF orientation handling for rotated photos
- Bug fixes for Android RGBA row stride handling and Apple camera preview orientation
