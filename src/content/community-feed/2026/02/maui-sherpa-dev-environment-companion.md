---
title: "MAUI Sherpa: a dev-environment copilot for .NET MAUI"
link: https://github.com/Redth/MAUI.Sherpa
description: A desktop app for macOS and Windows that helps manage .NET MAUI tooling—SDK/workloads checks, Android SDK + emulators, signing, and Apple dev resources—in one place.
date: 2026-02-11
author: Redth
---

Setting up (and keeping) a healthy .NET MAUI dev environment can be a lot: SDK versions, workloads, Android SDK bits, emulators, signing assets, plus Apple certificates/profiles if you ship to iOS/macOS.

**MAUI Sherpa** is a desktop app (macOS + Windows) that tries to put all of that into one friendly control panel.

### What it includes

- **MAUI Doctor**-style checks and diagnostics for common environment problems
- **Android SDK management** (browse/install packages) and **emulator management**
- **Android keystore** creation/inspection and signing-related utilities
- On macOS: tools for **Simulators**, **Bundle IDs**, **Certificates**, **Provisioning Profiles**, and device registration
- Optional **GitHub Copilot integration** for help + suggested prompts (handy when you’re troubleshooting setup issues)

### Why it’s interesting

- It’s aimed at the stuff that tends to derail momentum: “why won’t this build?”, “which SDK is missing?”, “where’s my keystore?”, “which profile is expired?”
- It’s also useful for teams: the fewer bespoke setup docs and tribal knowledge you need, the better.

If you want to explore it (or contribute), here’s the repo:

- [MAUI.Sherpa on GitHub](https://github.com/Redth/MAUI.Sherpa)

