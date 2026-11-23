---
title: "Uno Platform 7.0 Expands .NET MAUI Reach as Studio 3.3 Adds AI Workbench"
link: https://visualstudiomagazine.com/articles/2026/11/13/uno-platform-7-0-expands-net-maui-reach-as-studio-3-3-adds-ai-workbench.aspx
description: "Visual Studio Magazine reports on Uno Platform 7.0, which extends .NET MAUI control compatibility to the web and Linux and adds .NET 11 support. It also covers Uno Platform Studio 3.3, so it's a good overview if you want to know what's open source and what's paid."
date: 2026-11-13
author: unoplatform
contentType: article
---

The part of this release that matters for MAUI developers is control compatibility. Uno Platform's embedding feature already let you use third-party MAUI controls on operating systems MAUI supports, and 7.0 extends it to the web and Linux. According to the article, that covers vendors including Syncfusion, Telerik, Infragistics, DevExpress and Esri, along with the .NET MAUI Community Toolkit, and existing MAUI apps can reach browser and Linux targets through Uno's MAUI handlers. The control vendors' licensing still applies.

Other changes include .NET 11 support, preview support for `Microsoft.UI.Reactor`, a declarative C# UI framework without XAML, and a unified rendering architecture built on SkiaSharp 4 with an experimental WebGPU backend. The performance claims are vendor-reported. The article also lists the migration considerations: native rendering is retired, the `Uno.Sdk` single-project format is required, and libraries built against 6.x must be rebuilt.

Uno Platform Studio 3.3 adds standalone desktop apps and a mobile companion with over-the-air Hot Reload, with the key capabilities under paid plans. The article explains clearly that 7.0 itself stays Apache 2.0 licensed and is usable without Studio.
