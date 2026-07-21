---
title: "Augmented Reality Basics in .NET MAUI on iOS"
link: https://davestechlab.co.uk/software/augmented-reality-basics-in-net-maui/
description: "David Britch builds a basic AR app in .NET MAUI on iOS, overlaying a 3D cube on the camera feed using ARKit and SceneKit behind a custom handler. It's the foundation for his whole ARKit series."
date: 2025-08-20
author: davidbritch
contentType: article
---

Augmented reality blends virtual elements into the live camera view. David Britch kicks off his ARKit series by creating a custom .NET MAUI control, backed by a handler, that renders a 3D cube at the world origin on iOS.

## What you'll learn

- **Platform setup** — adding the camera usage description and codesigning properties needed to deploy an ARKit app
- **A custom control and handler** — creating an `ARView` with an `IsSessionRunning` property mapped to native start/stop logic
- **Encapsulating ARKit** — wrapping `ARSCNView` and `ARSession` in a `MauiARView` and running an `ARWorldTrackingConfiguration`
- **Adding SceneKit content** — building a `CubeNode` from an `SCNBox` and placing it at the world origin
- **Consuming the control** — registering the handler and driving the session from an MVVM view model

Read the full post for the complete handler architecture and code, and note that ARKit requires a physical iPhone.
