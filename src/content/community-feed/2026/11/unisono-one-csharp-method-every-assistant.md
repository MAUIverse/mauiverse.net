---
title: "Unisono: one C# method, every assistant. The implementation, start to finish"
link: https://www.youtube.com/watch?v=D4R3yVb4BN8
description: "Joche Ojeda walks through Unisono, a .NET library that lets you declare an app action once in C# and have Siri, Gemini, Copilot and any MCP client call it. This ~5 minute video covers the tool registry, an in-app MCP host and the Swift App Intents bridge, with a two-app demo on an iPhone simulator."
date: 2026-11-13
author: egarim
contentType: video
---

Every assistant wants its own way of calling into your app: App Intents on Apple, AppFunctions on Android, App Actions on Windows, and MCP for everything else. Unisono's idea is to write the action once, as an ordinary C# method, and project it onto each of those front doors. Joche Ojeda shows the implementation from start to finish in about five minutes.

The video moves through the pieces in order:

- **Tool registry:** one registry and one handler per tool
- **In-app MCP host:** built on `HttpListener`, so there's no ASP.NET Core dependency
- **Swift bridge:** a generic bridge with static binding, and three lines of App Intents
- **Build and wiring:** the `XcodeProject` item and the App Intents metadata

He then proves it on an iPhone simulator in both directions, with a two-app demo (Notes and TaskTracker), and ends with the current limits and what's next for Android and Windows. The packages are in prerelease on NuGet, and the repository adds a step-by-step guide. If you want your MAUI app to answer to Siri, Gemini or an MCP client without three separate integrations, this is a compact overview.
