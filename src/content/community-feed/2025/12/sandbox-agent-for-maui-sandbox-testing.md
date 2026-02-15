---
title: "Sandbox Agent: automate MAUI Sandbox repros + validation"
link: https://github.com/dotnet/maui/wiki/Sandbox-Agent
description: A specialized workflow for reproducing issues in the MAUI Sandbox app, driving Appium tests, and iterating until a fix is validated across platforms.
date: 2025-12-08
author: PureWeen
---

If you’ve ever fixed a .NET MAUI bug and then wondered “okay… but does it *actually* work on device?”, the **Sandbox Agent** workflow is worth a look.

It’s a documented approach for using the MAUI **Controls.Sample.Sandbox** app as a repeatable test bed:

- Create a **minimal repro scenario** in the Sandbox UI.
- Generate an **Appium test** that proves the bug (red) and then proves the fix (green).
- **Deploy + run** on the platforms you care about (Android by default, with iOS/MacCatalyst/Windows supported).
- Capture logs/screenshots so you can share evidence in PRs and issues.

### Why it matters

- **Repros become automation**: once you’ve encoded the steps in Appium, you can rerun it after each change.
- **Iterative fixing gets faster**: reproduce → fix → run test → repeat until you’ve got a reliable pass.
- **Cross-platform confidence**: it nudges you toward validating behavior beyond “works on my machine”.

If you’re doing framework work, contributing to `dotnet/maui`, or just want a more disciplined way to validate gnarly UI bugs, start here:

- [Sandbox Agent wiki page](https://github.com/dotnet/maui/wiki/Sandbox-Agent)

