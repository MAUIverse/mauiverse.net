---
title: ".NET MAUI RC1 Brings Diagnostics and Experimental Android CoreCLR Support"
link: https://www.infoq.com/news/2025/09/net-maui-rc1
description: "Edin Kapić covers .NET MAUI in .NET 10 RC1 — layout diagnostics for Aspire/OpenTelemetry, HybridWebView init events, and experimental CoreCLR on Android. Feature-complete, go-live supported, and aimed at reliability."
date: 2025-09-29
author: ekapic
contentType: article
---

.NET 10 RC1 puts .NET MAUI into go-live territory. Edin Kapić's InfoQ write-up focuses on observability, small control polish, and the experimental Android CoreCLR option Microsoft is testing.

## What you'll learn

- **Layout diagnostics** — a `Microsoft.Maui` `ActivitySource`/`Meter` that traces measure/arrange with Aspire and OpenTelemetry
- **HybridWebView lifecycle** — `WebViewInitializing` and `WebViewInitialized` events mirroring `BlazorWebView`
- **RefreshView.IsRefreshEnabled** — disable pull-to-refresh without disabling the content underneath
- **Experimental CoreCLR on Android** — opt in via project settings, with size and tooling caveats called out
- **What's deprecated** — compressed layouts and older performance APIs giving way to the new diagnostics path

Read the full piece for screenshots of the Aspire dashboard and links to the RC1 release notes.
