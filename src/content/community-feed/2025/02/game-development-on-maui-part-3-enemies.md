---
title: "Game development on MAUI (Part 3: Enemies)"
link: https://www.igniscor.com/post/game-development-on-maui-part-3-enemies
description: "Part 3 introduces enemies, background layering, and combat interaction in the MAUI game series. Pavel shows how to manage enemy lifecycle states, animation transitions, and collision timing so Hydra attacks feel deliberate and responsive."
date: 2025-02-18
author: chuvakpavel
contentType: article
---

This chapter is where the game starts to feel interactive, not just animated. It combines scene layering, enemy spawn loops, and attack-window logic to establish the core combat rhythm.

## What you'll learn

- How to add and layer a dedicated enemy canvas over the existing game scene
- A state machine approach for enemy rise, idle, and death animation phases
- Spawn-loop patterns to control pacing and cap active enemies
- Collision and hurtbox timing tied to specific Hydra attack frames
- Debug-friendly rendering techniques for validating interaction zones
