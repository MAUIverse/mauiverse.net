---
title: "Building a Live Mermaid Flowchart Renderer in .NET MAUI"
link: https://dev.to/icebeam7/building-a-live-mermaid-flowchart-renderer-in-net-maui-75b
description: "Luis Beltran builds a live Mermaid-to-visual flowchart renderer in .NET MAUI using native controls instead of static XAML generation. Part of MAUI UI July 2026, it's a parse-then-render blueprint for TD/LR flowcharts with decisions and labeled edges."
date: 2026-07-26
author: icebeam7
contentType: article
---

Mermaid is great as text, but many apps need an editable, themeable preview on device. Luis Beltran's MAUI UI July post parses flowchart syntax at runtime and draws rectangles, decisions, and edges with native MAUI controls.

## What you'll learn

- **Why render natively** — live edit/preview, cross-platform theming, and avoiding dynamic XAML compile complexity
- **Supported Mermaid subset** — `flowchart TD`/`LR`, rectangle and decision nodes, edges, and labeled edges
- **Layered architecture** — models, enums, parser, renderer, and page UI as separate concerns
- **Parse then render** — turn Mermaid text into a graph model, then materialize MAUI visuals from that model
- **Where it fits** — internal tools, docs apps, workflow builders, and education platforms

Open the full DEV guide for the step-by-step enums, models, parser, and renderer code.
