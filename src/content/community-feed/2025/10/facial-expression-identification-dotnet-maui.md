---
title: "Facial Expression Identification in .NET MAUI on iOS"
link: https://davestechlab.co.uk/software/facial-expression-identification-in-net-maui/
description: "David Britch uses ARKit's blend shapes to detect facial expressions like blinks, smiles, and tongue-out in a .NET MAUI app on iOS. See how a coarse face mesh becomes a hook for gaze tracking and emotion recognition."
date: 2025-10-21
author: davidbritch
contentType: article
---

ARKit can identify over 50 facial expressions, often several at once. David Britch builds on face tracking to read a user's expression in a .NET MAUI iOS app and react to it by recoloring the overlaid face mesh.

## What you'll learn

- **Rendering the face mesh** — creating an `ARSCNFaceGeometry` when an `ARFaceAnchor` is detected
- **Reading blend shapes** — interpreting floating-point values (0 to 1) that represent the presence of each expression
- **Detecting expressions** — thresholding blend shapes for blinks, wide eyes, frowns, smiles, raised brows, tongue-out, and more
- **Reacting in real time** — updating the mesh geometry and color in `DidUpdateNode` as expressions change
- **Where this leads** — the foundation for gaze tracking and emotion recognition

Read the full post for the expression-detection code, and note that ARKit requires a physical iPhone.
