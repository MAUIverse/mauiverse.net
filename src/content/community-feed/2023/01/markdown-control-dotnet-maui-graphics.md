---
title: "Creating Markdown control with .NET MAUI Graphics"
link: https://vladislavantonyuk.github.io/articles/Creating-Markdown-control-with-.NET-MAUI-Graphics/
description: Build a lightweight Markdown renderer for .NET MAUI using GraphicsView and custom drawables, with hooks for custom block rendering.
date: 2023-01-08
author: VladislavAntonyuk
---

Sometimes you want Markdown rendering without pulling in a full WebView or heavyweight UI stack—especially for highly-custom visuals.

This post demonstrates creating a Markdown control on top of **.NET MAUI Graphics** (`GraphicsView` + `IDrawable`), using Markdig-based parsing and a custom renderer pipeline you can extend for specialized Markdown blocks.
