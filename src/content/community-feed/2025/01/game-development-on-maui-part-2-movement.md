---
title: "Game development on MAUI (Part 2: Movement)"
link: https://www.igniscor.com/post/game-development-on-maui-part-2
description: "Part 2 of the MAUI game series implements movement mechanics, directional animation selection, and depth-enhancing shadows. The article explains how tap input is translated into character motion and how animation states stay synchronized with direction changes."
date: 2025-01-28
author: chuvakpavel
contentType: article
---

After setting up base animation in part 1, this chapter focuses on making the character feel responsive to input and scene context. It is a practical reference for directional state handling in SkiaSharp-driven MAUI rendering loops.

## What you'll learn

- Translating tap coordinates into smooth character movement with directional vectors
- Keeping sprite positioning consistent across screen sizes and orientation changes
- Using state enums to map movement and attack direction to the correct animation sets
- Structuring tile-set managers for readable and maintainable animation retrieval
- Adding shadow tile sets to improve depth perception and visual quality
