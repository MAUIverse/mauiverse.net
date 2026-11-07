---
title: ".NET MAUI Community Standup | Inspect, Record, Create: .NET MAUI Meets GitHub Copilot Canvas"
link: https://www.youtube.com/watch?v=A5Pr5N999tc
description: "Dominik Titl joins David Ortinau and Gerald Versluis to show a new DevFlow inspector that lets you and Copilot point at the same element in a running .NET MAUI app. This ~1 hour session covers layout analysis, test recording, and evidence capture across VS Code, GitHub Copilot Canvas, and the browser."
date: 2026-09-03
author: davidortinau
featuring:
    - jfversluis
    - morning4coffe-dev
slug: 2026/09/maui-community-standup-inspect-record-create-maui-meets-github-copilot-canvas
contentType: video
---

Describing a misaligned button to an AI assistant is harder than it sounds. Dominik Titl, a software engineering intern on the .NET MAUI team, shows how the DevFlow inspector tackles that problem: you select an element in your running app, and Copilot gets the same selection, without a screenshot and a hand-drawn circle.

Dominik demonstrates the inspector in a browser, in VS Code, in the GitHub Copilot app's Canvas, and from the Copilot CLI. Along the way he covers:

- Editing properties on the live app and applying the change back to XAML through source mapping
- A mutation lease, so Copilot can't change the app out from under you
- Data views for logs, network traffic, preferences, and a layout analyzer that flags clipped or overflowing content
- Recording a workflow, replaying it as a test, and gathering evidence when something fails

The project lives in the MAUI Labs repo, and the team would like you to try it and break it.

David and Gerald open the show with a community roundup. They talk through .NET 11 Preview 7 and what RC1 will bring, including badge support for `TabbedPage`, the work on moving MAUI from Mono to CoreCLR, and partner contributions from Uno Platform, Avalonia, and Syncfusion. They also cover upcoming events: NDC Oslo, MAUI Day Skopje, and .NET Conf in November.
