---
title: "Multimodal Vision Intelligence with .NET MAUI"
link: https://devblogs.microsoft.com/dotnet/multimodal-vision-intelligence-with-dotnet-maui/
description: David Ortinau extends a .NET MAUI sample app to support vision input, using MediaPicker and Microsoft.Extensions.AI to extract projects and tasks from images.
date: 2025-06-17
author: davidortinau
---

This article shows a clean “human-in-the-loop” vision workflow for MAUI: capture/pick a photo, send the image bytes alongside prompt text, and parse a structured response back into app data.

It’s a great reference for anyone building multimodal experiences (camera + AI) while keeping a user-review step in the flow to maintain trust and correctness.
