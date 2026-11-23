---
title: "I one-shotted a .NET MAUI 11 upgrade from the beach"
link: https://www.ansight.ai/articles/one-shotting-maui-11-from-dee-why/
description: "Matthew Robbins used Codex and Ansight to upgrade his Red-Point app from .NET MAUI 10 to 11 while walking along a headland, testing builds from his phone. It's a light, practical story about letting an agent run UI tests and recordings as guardrails during an upgrade."
date: 2026-11-20
author: matthewrdev
contentType: article
---

An App Store Connect warning about the iOS 27 SDK requirement, due from April 2027, started this upgrade. Matthew Robbins asked Codex from his phone to take Red-Point from .NET MAUI 10 to 11, bringing the dependencies along on iOS and Android, with a short brief and a few guardrails in Ansight, the testing tool he's building.

Those guardrails are what make the story useful. Codex ran UI tests through the Ansight CLI, covering sign-in, map and route search, tutorials, offline downloads and 3D guides, and it could pull up screenshots, UI trees and logs from a run when a test stuck. Earlier runs provided a frame-rate and memory baseline, so a guide that opened but stuttered would still show up.

The upgrade wasn't flawless. An early iOS build crashed on the first frame of a 3D guide because generated shaders never reached the app bundle, and on Android a multi-polygon boundary passed as one polygon broke offline downloads. By the end all 11 enabled UI scenarios passed on both platforms. Matthew also tested a running simulator build from his phone, spotted blank toolbar icons, marked them up and sent the note back to the agent, which fixed a UIKit image disposal problem.

It's a product-flavored post, since Ansight is his company, but the approach of giving an agent runtime evidence is worth borrowing.
