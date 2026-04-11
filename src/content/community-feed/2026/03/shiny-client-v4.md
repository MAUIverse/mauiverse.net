---
title: "Shiny Client v4 - Windows Support, .NET 10, and a Ton of Improvements"
link: https://allanritchie.com/blog/2026/03/shiny-client-v4/
description: "Allan Ritchie announces Shiny Client v4, a major release that brings Windows support for BluetoothLE, BLE Hosting, HTTP Transfers, and Locations. The release also moves to .NET 10 and includes significant fixes across locations, HTTP transfers, push notifications, and BLE modules."
date: 2026-03-31
author: aritchie
contentType: article
---

Shiny Client v4 is a major release that opens up foreground scenarios on Windows for BluetoothLE, BLE Hosting, HTTP Transfers, and Locations. The update enforces .NET 10 target frameworks and brings a substantial list of enhancements and fixes across almost every module.

## What you'll learn

- Windows platform support: what works in foreground mode for BLE, HTTP Transfers, and Locations
- Location improvements: iOS 18+ `CLMonitor` adoption, new geofence mechanics, stationary device detection, and smarter Android background location permissions
- HTTP Transfer enhancements: new `UploadMultipart`, `UploadRaw`, and `Download` types, plus an Azure Blob Storage helper
- New `HttpTransferDelegate` for retry logic and token refresh on denied authorization
- Push notification improvements: iOS raw notification data access and Azure Notification Hubs template support
- BluetoothLE fixes: full advertisement data in ManagedScanResult, better manufacturer data parsing, and thread safety improvements
- Migration guide: updating target frameworks, switching to consolidated remote config, and adapting to new HTTP Transfer request types
