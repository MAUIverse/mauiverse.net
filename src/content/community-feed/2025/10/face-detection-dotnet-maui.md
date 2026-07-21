---
title: "Face Tracking in .NET MAUI on iOS"
link: https://davestechlab.co.uk/software/face-detection-in-net-maui/
description: "David Britch configures an ARKit face tracking session in a .NET MAUI app on iOS and overlays a live 3D mesh that follows the face. It's the groundwork for effects like virtual glasses try-on."
date: 2025-10-13
author: davidbritch
contentType: article
---

ARKit can track one or more faces in a scene, providing position, orientation, and a conforming mesh. David Britch shows how to run a face tracking session in a .NET MAUI iOS app and keep a 3D mesh aligned to the face as it moves and expresses.

## What you'll learn

- **Wiring up the delegate** — pointing your `ARSCNView` at a custom `ARSCNViewDelegate`
- **Creating the face mesh** — building an `ARSCNFaceGeometry` when an `ARFaceAnchor` is detected
- **Keeping it aligned** — updating the geometry in `DidUpdateNode` so it follows the face
- **Configuring the session** — enabling face tracking with `ARFaceTrackingConfiguration` and the front camera
- **Where this leads** — overlaying content like glasses frames for try-on experiences

Read the full post for the complete handler and delegate code, and note that ARKit requires a physical iPhone.
