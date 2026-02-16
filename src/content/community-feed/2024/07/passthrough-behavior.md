---
title: "Passthrough Behavior: Attaching things where they don't belong"
link: https://goforgoldman.com/posts/passthrough-behavior
description: "Implementing a passthrough behavior pattern in .NET MAUI to attach validation functionality to custom controls that wrap Entry and Editor elements."
date: 2024-07-01
author: matt-goldman
---

When you wrap `Entry`/`Editor` in custom controls, attaching behaviors (like CommunityToolkit validators) gets awkward. Matt Goldman demonstrates a simple “passthrough behavior” pattern that forwards a behavior from the wrapper to the wrapped control.

It’s a tidy way to keep custom styling and still reuse existing behavior-based features without duplicating property/event plumbing.

