---
title: "Shiny.Net.HttpServer — A Real HTTP Server Where ASP.NET Core Will Not Go"
link: https://allanritchie.com/blog/2026/08/shiny-httpserver/
description: "Allan Ritchie introduces a dependency-light HTTP server written from scratch that runs inside a .NET MAUI app, where ASP.NET Core can't go. It's the building block behind an MCP server on your phone, local webhooks and device-hosted web UIs, and it's currently in beta."
date: 2026-08-11
author: aritchie
contentType: article
---

Allan Ritchie wanted an AI client to talk to an app on his phone, not to a cloud service the phone syncs with. The catch is that the MCP SDK's HTTP transport is an ASP.NET Core package, and Kestrel and the hosting stack can't run on .NET MAUI. So he wrote **Shiny.Net.HttpServer** from scratch, with only `Microsoft.Extensions.*` abstractions as dependencies and no `Microsoft.AspNetCore.App` reference.

The server offers four tiers that compose in the same app, from a single request delegate, through templated routes and ASP.NET-shaped middleware, to source-generated typed endpoints with no runtime reflection. There's also a section on putting a quick tunnel in front of it to reach a phone from anywhere.

The motivating example is a Model Context Protocol server hosted inside a MAUI app, using the Streamable HTTP transport. Allan notes one wrinkle: tool parameter types need a source-generated JSON context to survive trimming, and the server fails at startup with a clear message if one is missing.

He's honest about the limits too. Two packages (SSH and Azure Relay) are not AOT-clean, the whole thing is in beta, and a public tunnel needs authentication in front of it. If you've ever wanted a device to serve something rather than only call out, this explains why that was hard and what's now possible.
