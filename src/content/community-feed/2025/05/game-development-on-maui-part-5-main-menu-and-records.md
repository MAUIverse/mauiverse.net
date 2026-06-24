---
title: "Game development on MAUI (Part 5: Main menu and Records)"
link: https://www.igniscor.com/post/game-development-on-maui-part-5-main-menu-and-records
description: "Part 5 adds app-level structure to the MAUI game with reusable menu navigation and persistent score tracking. Pavel demonstrates a clean MVVM approach with LiteDB-backed records so players can review results between sessions."
date: 2025-05-06
author: chuvakpavel
contentType: article
---

This installment moves beyond core mechanics and into experience design, persistence, and routing. It is a strong reference for combining reusable UI controls with lightweight local storage in game-style MAUI apps.

## What you'll learn

- How to build reusable menu navigation controls and bind them through view models
- A practical Shell navigation setup for game pages and score views
- How to model and persist score data with LiteDB in a MAUI app
- Repository and service layering patterns to keep score logic testable
- How to wire Game Over flow so results are saved and surfaced immediately
