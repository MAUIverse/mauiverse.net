---
title: "Animating Augmented Reality Content in .NET MAUI on iOS"
link: https://davestechlab.co.uk/software/animating-augmented-reality-content-in-net-maui/
description: "David Britch adds a spinning globe to an AR scene in a .NET MAUI app on iOS and keeps it interactive with gestures. Learn how SCNAction animations combine with tap, pinch, and rotate handling."
date: 2025-09-04
author: davidbritch
contentType: article
---

Building on interacting with AR content, David Britch shows how to animate a node while still letting users manipulate it. He overlays an image-wrapped sphere representing Earth and rotates it continuously on the Y-axis.

## What you'll learn

- **Building a sphere node** — creating an `SCNSphere` and mapping a 2D world map image onto it as a material
- **Animating with SCNAction** — using `RotateBy` and `RepeatActionForever` to spin the node, and a reusable extension method for any `SCNNode`
- **Starting and stopping** — toggling the animation with a tap gesture and keyed `RunAction`/`RemoveAction` calls
- **Keeping it interactive** — supporting pinch-to-scale and rotate gestures alongside the animation

Read the full post for the sphere, animation, and gesture code, and note that ARKit requires a physical iPhone.
