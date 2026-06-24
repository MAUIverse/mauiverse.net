---
title: "Game development on MAUI (Part 1: Animation)"
link: https://www.igniscor.com/post/game-development-on-maui-part-1
description: "In part 1, Pavel Chuvak starts a MAUI and SkiaSharp game series by building tile-based character animation from scratch. The post covers sprite-sheet slicing, tile-set modeling, and the rendering loop needed to play animations at a stable frame cadence."
date: 2025-01-10
author: chuvakpavel
contentType: article
---

This opening article lays the technical foundation for the full game series and explains the early architectural choices clearly. It is useful if you want to understand how a MAUI game scene can be assembled from reusable tile and tile-set primitives.

## What you'll learn

- How to break sprite sheets into tiles and represent them with reusable data structures
- Factory patterns for creating and managing tile sets more efficiently
- Driving animation updates with a timed render loop and frame index cycling
- Registering and using SKCanvasView paint events for real-time frame drawing
- Why these animation primitives make later movement, combat, and UI systems easier to add
