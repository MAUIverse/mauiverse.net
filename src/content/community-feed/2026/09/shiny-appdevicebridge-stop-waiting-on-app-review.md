---
title: "Shiny.AppDeviceBridge — Stop Waiting on App Review, and Stop Needing the Phone to Test"
link: https://allanritchie.com/blog/2026/09/appdevicebridge/
description: "Allan Ritchie brings the web's release cycle to native apps: a web UI in a thin MAUI shell that updates over the air, with 26 typed device bridges over a real in-app HTTP server. A terminal simulator stands in for the phone, so you can test GPS, Bluetooth, and Wi-Fi failures without a device."
date: 2026-09-18
author: aritchie
contentType: article
---

Web developers merge, deploy, and every user has the fix on next load; mobile developers ship a one-line fix and wait a week for review and adoption. Allan Ritchie's Shiny.AppDeviceBridge (in beta) wants the web's release cycle without giving up native — a web app in a WebView backed by a real device bridge.

## What you'll learn

- **Web UI, native shell** — Blazor/React/Vue served from the device out of a zip over Shiny.Net.HttpServer on `127.0.0.1`, working offline, with device bridges as real endpoints you can hit with `curl`
- **Over-the-air updates** — ECDSA P-256–signed releases with `minimumVersion` kill switch and `minimumHostVersion` gating, and why Apple 2.5.2 / Google Play rules already permit WebView JS updates
- **Typed device bridges** — 26 of them (GPS, BLE, Wi-Fi, push, health, camera, contacts, OBD-II…), each a `[BridgeClient]` interface with generated C# and TypeScript clients, `501` when unsupported
- **Work with no page open** — background jobs, geofences, and pushes routed to the page or to a `background.js` in an embedded Jint engine, updated over the air too
- **Hot reload and a simulator** — pages from `dotnet watch` while bridges stay on-device, plus `shiny-bridge-sim`, a terminal app that replays GPX trails and simulates permission denials and errors — headless for CI

Read the full post for the update rules, security model, and every simulator option.
