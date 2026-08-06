---
title: "The Road To Wordy Blob 2 of 3"
link: https://philotalk.com/the-road-to-wordy-blob-2-of-3
description: "In part two of his .NET MAUI dev story, Stephen Moreton-Howell builds a particle simulation game and a reusable split-flap scoreboard. Learn how to animate mechanical flip digits with ICanvas, a timer, and IDrawable."
date: 2026-06-11
author: steve3008
contentType: article
---

Having proven .NET MAUI's drawing speed with his Plate Tectonics Viewer, Stephen Moreton-Howell turns to building an actual game, and starts with a reusable, railway-station-style split-flap scoreboard.

## What you'll learn

- **A game loop with the basics** — combining `ICanvas` drawing, simple touch handling, and a timer for animation
- **Designing split-flap digits** — folded-card digit images split along a fold line for a five-stage flip animation
- **Animating the flip** — layering partial and flattened top/bottom halves across stages to sell the mechanical effect
- **A reusable ScoreDrawable** — an `IDrawable` class driving multiple `GraphicsView` displays (score, target, particles, time)
- **Wiring it into a grid** — placing each `GraphicsView` in a portrait layout and redrawing on a timer

Read the full post for the digit-drawing code and the scoreboard setup, then continue to part 3.
