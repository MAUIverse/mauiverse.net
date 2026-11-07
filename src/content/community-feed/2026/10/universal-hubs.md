---
title: "Universal Hubs - Write the Hub Once, Connect Over Bluetooth or Wi-Fi"
link: https://allanritchie.com/blog/2026/10/universal-hubs/
description: "Allan Ritchie extends his BLE Hubs library so one hub can be served over Bluetooth LE and Wi-Fi at the same time, with the client choosing the best transport. A Wi-Fi player and a Bluetooth spectator can share the same game, using the same contract and hub code."
date: 2026-10-22
author: aritchie
contentType: article
---

Bluetooth works well for two phones on a plane. In the living room it falls short: range drops, a photo crawls across GATT at a few KB/s, and every phone is sitting on a Wi-Fi network that goes unused. Allan Ritchie didn't want to maintain a second Wi-Fi hub with its own contract and game logic, so he built **Shiny.UniversalHubs** on top of the parts he already had.

The pieces are BLE Hubs for the hub model, Shiny.Net.HttpServer running inside the MAUI app for the Wi-Fi side, and mDNS for discovery. On the host, a single `AddUniversalServer` call registers the hub for both transports, and the client merges the Bluetooth scan and the mDNS browse into one list, then prefers one transport and falls back to the other.

A few details stand out:

- **Resilient Wi-Fi:** a dropped connection resumes with the same connection id and groups, and missed pushes are replayed, so the hub never sees a disconnect
- **Hub lifecycle and files:** hubs can start and stop independently, and file transfers use L2CAP over Bluetooth and plain HTTP over Wi-Fi
- **Tunnels:** a hub can opt in to being reachable over the internet, so a friend on cellular can join with a URL
- **Limits:** coffee-shop and hotel Wi-Fi often blocks device-to-device traffic, which is why Bluetooth remains the fallback

If you're building multiplayer, local sharing or device-to-device features in a MAUI app, this is a thoughtful look at keeping one contract across two very different radios.
