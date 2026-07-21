---
title: "Body Tracking in .NET MAUI on iOS"
link: https://davestechlab.co.uk/software/body-tracking-in-net-maui/
description: "David Britch shows how to track a human body and its joints in a live AR scene from a .NET MAUI app on iOS. It's a practical look at ARKit's skeleton tracking rendered with SceneKit."
date: 2025-10-28
author: davidbritch
contentType: article
---

ARKit can detect a body and expose the position of its joints in real time. David Britch demonstrates how to visualize a tracked skeleton in a .NET MAUI iOS app by placing spheres at each joint and updating them as the body moves.

## What you'll learn

- **Detecting a body** — responding to `ARBodyAnchor` objects in an `ARSCNViewDelegate`
- **Rendering joints** — creating `JointNode` spheres for each joint in the skeleton definition and storing them in a dictionary
- **Positioning joints** — reading each joint's model transform relative to the hip (the anchor's root) to place it correctly
- **Updating in real time** — using `DidUpdateNode` to move joints as the body's pose changes
- **Configuring the session** — enabling body tracking with `ARBodyTrackingConfiguration`

Read the full post for the delegate and joint-rendering code, and note that a physical iPhone is required for ARKit.
