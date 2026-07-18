---
title: "How to Verify Network Connectivity in .NET MAUI"
link: https://www.telerik.com/blogs/how-to-verify-network-connectivity-net-maui
description: "Leomaris Reyes explains how to check network connectivity in .NET MAUI using the IConnectivity API, going well beyond a simple online/offline boolean. Learn to detect connection types and react to changes in real time."
date: 2026-05-11
author: LeomarisReyes
contentType: article
---

Knowing a device's connectivity state lets you make smarter decisions and give users clearer feedback. Leomaris Reyes shows how .NET MAUI's `IConnectivity` API exposes rich network details with very little code.

## What you'll learn

- **Platform setup** — adding the `ACCESS_NETWORK_STATE` permission on Android (three ways), with no configuration needed on iOS/Mac Catalyst or Windows
- **Inspecting network scope** — interpreting the `NetworkAccess` values: Internet, Local, None, Unknown, and ConstrainedInternet (captive portals)
- **Detecting connection profiles** — reading `ConnectionProfiles` to tell whether WiFi, Cellular, Bluetooth, or Ethernet is active
- **Reacting to changes** — subscribing to the `ConnectivityChanged` event to respond in real time
- **An important caveat** — why a network connection doesn't guarantee real internet access

Read the full article for the code samples and guidance on building more resilient, connection-aware .NET MAUI apps.
