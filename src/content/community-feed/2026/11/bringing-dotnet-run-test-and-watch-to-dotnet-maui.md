---
title: "Bringing dotnet run, test, and watch to .NET MAUI"
link: https://www.youtube.com/watch?v=Lw7nN8sBZn0
description: "Jonathan Peppers explains how .NET 11 brings `dotnet run`, `dotnet test` and `dotnet watch` to MAUI apps on Android and iOS devices and emulators. This ~25 minute .NET Conf 2026 talk covers device selection, test results and what makes mobile harder than desktop."
date: 2026-11-11
author: jonathanpeppers
contentType: video
---

Mobile development has usually needed its own tooling and IDE-specific workflows. In .NET 11, the standard CLI commands work with MAUI apps on devices and emulators, and Jonathan Peppers explains what it took to get there.

The talk follows the path of a command: how the CLI selects a device, installs and launches the app, runs tests and captures results, and updates a running application when code changes. He also covers what makes mobile different from desktop, including platform tooling, application packaging, device communication and process lifetime.

Along the way he uses real MAUI projects and discusses where the commands fit into local development, automated testing and CI. It's especially useful if you work in VS Code, build in CI, or want scriptable mobile workflows without relying on a particular IDE.
