---
title: "Interacting with Augmented Reality Content in .NET MAUI on iOS"
link: https://davestechlab.co.uk/software/interacting-with-augmented-reality-content-in-net-maui/
description: "David Britch overlays an image on an AR scene in a .NET MAUI app on iOS and makes it respond to touch. Learn to move, scale, and remove nodes with tap, pinch, and pan gestures."
date: 2025-09-02
author: davidbritch
contentType: article
---

Overlaying nodes is just the first step in an AR app — users expect to interact with them. David Britch shows how to place an image on a scene in a .NET MAUI iOS app and manipulate it with gesture recognizers.

## What you'll learn

- **Overlaying an image** — creating an `ImageNode` from an `SCNPlane` with a billboard constraint so it faces the camera
- **Adding gesture recognizers** — wiring up tap, pinch, and pan recognizers on the `ARSCNView`
- **Hit testing nodes** — determining which node a gesture landed on
- **Manipulating nodes** — removing a node on tap, scaling it with pinch, and moving it with pan
- **Cleaning up** — removing gesture recognizers when there's no node to interact with

Read the full post for the node and gesture-handling code, and note that ARKit requires a physical iPhone.
