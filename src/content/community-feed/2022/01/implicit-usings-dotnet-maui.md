---
title: "Implicit Usings in .NET MAUI"
link: https://davestechlab.co.uk/software/implicit-usings-in-net-maui/
description: "David Britch explains how .NET MAUI Preview 11 uses implicit usings to drop the boilerplate using statements at the top of every file. Learn which namespaces come for free across MAUI, Android, iOS, and macOS projects."
date: 2022-01-06
author: davidbritch
contentType: article
---

From Preview 11, .NET MAUI enables implicit usings so common namespaces are available automatically. David Britch lists exactly what you no longer need to import — a real help when you're new to the framework.

## What you'll learn

- **MAUI namespaces** — the `Microsoft.Maui.*` and `Microsoft.Extensions.DependencyInjection` namespaces now available implicitly
- **Platform namespaces** — implicit usings for .NET Android (`Android.App`, `Android.Widget`, `Android.OS.Bundle`), .NET iOS/Mac Catalyst (`CoreGraphics`, `Foundation`, `UIKit`), and .NET macOS (`AppKit`, and more)
- **The exceptions** — namespaces like `Microsoft.Maui.Layouts` you'll still need to import manually
- **File-scoped namespaces** — how the templates changed alongside implicit usings

Read the full post for the complete namespace lists.
