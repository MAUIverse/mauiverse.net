---
title: "Build .NET MAUI Apps with DevOps"
link: https://www.youtube.com/watch?v=PattkMhmnzE
description: "Sweeky Satpathy and David Ortinau walk through DevOps pipelines for .NET MAUI — GitHub Actions, Azure DevOps, signing, and unit tests included. Recorded at .NET Conf 2023, this ~30 minute session is packed with build-optimization tips you can paste into your repo."
date: 2023-11-16
author: Sweekriti91
featuring:
    - davidortinau
contentType: video
---

Shipping .NET MAUI means more than a local `dotnet build`. In this .NET Conf 2023 session, Sweeky Satpathy and David Ortinau show how to wire CI/CD so Android, iOS, Mac Catalyst, and Windows targets build, sign, and test in GitHub Actions and Azure DevOps.

## What you'll learn

- **Starter pipeline shapes** — sample YAML for macOS and Windows agents covering the main MAUI targets
- **Workload and SDK setup** — installing the right .NET SDK and MAUI workloads in CI
- **Signing for distribution** — handling keystores, certificates, and secure files without leaking secrets
- **Unit tests in the pipeline** — keeping quality gates next to the build
- **Optimization tips** — practical ways to keep multi-platform builds from dragging

Watch the full talk, then grab the related sample pipelines when you’re ready to wire the same flow into your own repo.
