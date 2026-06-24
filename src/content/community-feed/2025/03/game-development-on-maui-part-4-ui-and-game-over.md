---
title: "Game development on MAUI (Part 4: UI and Game Over)"
link: https://www.igniscor.com/post/game-development-on-maui-part-4-ui-and-game-over
description: "Part 4 focuses on gameplay UI by introducing satiety and combo indicators plus a Game Over flow. The post shows how to wire progress logic, popup architecture, and reset behavior so the game loop remains responsive and understandable."
date: 2025-03-27
author: chuvakpavel
contentType: article
---

Pavel expands the game from animation and combat into visible player feedback and loss conditions. The result is a clearer gameplay loop where status, timing, and end-state behavior are all surfaced in UI.

## What you'll learn

- How to add satiety and combo progress systems that update with game-state changes
- Integrating Com.Igniscor progress controls into a MAUI game UI
- Building a reusable popup base and Game Over-specific interactions
- Reset and route registration patterns needed to restart game state cleanly
- Triggering end-of-game flow safely when player resources are depleted
