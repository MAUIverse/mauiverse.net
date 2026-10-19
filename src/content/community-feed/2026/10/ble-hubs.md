---
title: "Bluetooth LE Between Apps Has Never Been Easier — Enter BLE Hubs"
link: https://allanritchie.com/blog/2026/10/ble-hubs/
description: "Allan Ritchie introduces Shiny.BluetoothLE.Hubs, a SignalR-style API for two of your own apps to talk over Bluetooth LE. One shared interface becomes typed calls, events, and file transfer, without you designing a GATT protocol."
date: 2026-10-09
author: aritchie
contentType: article
---

Getting two of your own apps to talk over Bluetooth LE sounds simple, then turns into chunking, message ids, and a definition of "disconnected." Allan Ritchie shows Shiny.BluetoothLE.Hubs, which treats a BLE peripheral like a SignalR hub so the conversation is a C# interface instead of a byte protocol.

## What you'll learn

- **Why GATT is the wrong layer for an app** — characteristics, an MTU of a few dozen to a few hundred bytes, and no idea of a request, so every team rebuilds framing, timeouts, and ordering
- **A SignalR-shaped API** — `BleHub<TContract>`, `Clients.All` / `Group`, `OnConnectedAsync`, and `IHubContext`, with one deliberate change: a `[BleHubClient]` interface so the compiler catches a typo that SignalR would only see at runtime
- **What the generator emits** — a client proxy, a hub dispatcher, and typed pushes, with no reflection, so the stack stays AOT- and trim-safe. A mismatch is compile error `SBH001`
- **Where the bytes went** — request/response on one characteristic, ordered event frames, System.Text.Json source generation (or your own serializer), MTU framing with reassembly limits, and a cooperative disconnect because iOS cannot drop a central
- **Files and the sample** — avatars skip GATT and go over L2CAP, and a .NET MAUI Tic Tac Toe sample runs a host, a player, and a spectators group across iOS and Android
- **What it is not** — a short-range channel for commands, state, and events (256 KB and 8 clients by default), not video. The same hub contract can also be served over Wi-Fi with Shiny.SwitchboardR

Read the post, then open the Tic Tac Toe sample if you have ever stared at a 20-byte MTU and started designing a protocol.
