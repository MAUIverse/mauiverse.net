---
title: "Image Detection in .NET MAUI on iOS"
link: https://davestechlab.co.uk/software/image-detection-in-net-maui/
description: "David Britch continues his ARKit series by detecting known images in a live scene from a .NET MAUI app on iOS. Learn how to register reference images and overlay content that tracks them in real time."
date: 2025-11-03
author: davidbritch
contentType: article
---

Once ARKit recognizes an image in a scene, you can augment or replace it. David Britch shows how to set up image detection in a .NET MAUI iOS app and highlight the detected image with an overlay that reorients itself as the image moves.

## What you'll learn

- **Declaring reference images** — adding AR Reference Images to an AR Resource Group in the asset catalog, including multiple images
- **Handling image anchors** — using an `ARSCNViewDelegate` and `DidAddNode` to respond when an `ARImageAnchor` is detected
- **Overlaying content** — creating a semi-transparent `PlaneNode` sized to the detected image and orienting it correctly
- **Configuring the session** — loading detection images and setting them on an `ARWorldTrackingConfiguration`

Read the full post for the complete handler and delegate code, and note you'll need a physical iPhone to run ARKit.
