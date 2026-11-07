---
title: "My .NET MAUI App Meets the iPhone Duo: Ugly, Crash, Fix, Unfold"
link: https://blog.pieeatingninjas.be/blog/2026-10-28-net-maui-iphone-duo/
description: "Pieter Nijs runs an existing .NET MAUI app on the iPhone Duo simulator, rebuilds it with Xcode 27.1, and documents the crash that follows and the scene lifecycle fix. Each stage is a tag in a public repository, so you can follow along."
date: 2026-10-28
author: PieEatingNinjas
contentType: article
---

What happens when a standard MAUI app meets Apple's first foldable? Pieter Nijs tries it in stages, starting with a template app built on Xcode 26.6 and running that binary unchanged on the iPhone Duo simulator. The old binary keeps working. The trouble starts when he rebuilds with Xcode 27.1: the app launches, then disappears with an exit code of 0, so the IDE gives no clue.

The cause is that the UIKit scene lifecycle becomes mandatory with the new SDK. Updating MAUI isn't enough, because the package doesn't add a `SceneDelegate` or the scene manifest to an existing project. Pieter applies the fix described by Gerald Versluis, covering the scene delegate, the plist entry and pinning the MAUI version. He also says what changes for a real app with existing lifecycle code.

Along the way:

- **Tooling tips:** installing Xcode 27.1 beside the current one with Xcodes, and using Device Hub to get the Duo simulator
- **The payoff:** on the Duo, a Shell `TabBar` moves into the vertical rail on its own, with no Duo-specific code
- **What's next:** safe areas next to the rail, floating buttons and full-width rows deserve checking, which Pieter leaves for part two

It's a good walkthrough if you want to see the Xcode 27 issue in practice, and the tagged repository helps you reproduce each step.
