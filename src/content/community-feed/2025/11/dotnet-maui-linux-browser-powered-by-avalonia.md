---
title: ".NET MAUI Is Coming to Linux and the Browser, Powered by Avalonia"
link: https://avaloniaui.net/blog/net-maui-is-coming-to-linux-and-the-browser-powered-by-avalonia
description: "Mike James introduces Avalonia's drawn backend for extending existing .NET MAUI applications to desktop and embedded Linux, WebAssembly, Windows, and macOS. Explore why one consistent rendering layer could broaden MAUI's reach, simplify backend maintenance, and improve desktop performance without requiring an application rewrite."
date: 2025-11-11
author: MikeCodesDotNET
contentType: article
---

Avalonia's backend keeps the .NET MAUI application model while replacing native platform controls with Avalonia's hardware-accelerated drawn UI. The early announcement lays out the platform goals, architectural motivation, and benefits both projects expect from the collaboration.

## What you'll learn

- **Which platforms become possible** — the backend targets first-class desktop and embedded Linux plus WebAssembly, while also running through Avalonia on Windows and macOS
- **How existing apps are preserved** — MAUI code remains in place while Avalonia supplies the rendering layer, allowing teams to add targets without rewriting their application in another framework
- **Why a drawn UI changes consistency** — one renderer can provide matching control appearance and behavior instead of inheriting differences from each operating system's native toolkit
- **Why maintenance can get simpler** — implementing and fixing one Avalonia backend reduces duplicated platform work and makes behavior more predictable across targets
- **What the early performance signal showed** — representative macOS desktop scenarios were reported at more than twice the performance of the Mac Catalyst approach, with further GPU work anticipated
- **How the work benefits Avalonia too** — supporting MAUI exposes mobile API, control, and tooling gaps that can guide Avalonia's own investment and introduce MAUI developers to its rendering model

Open the original announcement to try the early browser demo and understand the platform vision that led to the public Avalonia MAUI previews.
