---
title: "MAUI - The application has not been built"
link: https://tonyedwardspz.co.uk/blog/maui-application-has-not-been-built/
description: This troubleshooting post decodes a misleading MacCatalyst error that appears after an apparently successful build in MAUI projects. Tony shows how runtime architecture mismatch causes the issue and how to fix it in project configuration.
date: 2024-02-11
author: tonyedwardspz
contentType: article
---

The key insight is simple: this error often points to architecture targeting, not an actual compile failure.

## What you'll learn

- Why M-series Macs can hit this issue with default MacCatalyst runtime settings
- How to update `RuntimeIdentifiers` for `arm64` (and when to include multiple targets)
- What trade-offs differ between local-only builds and App Store distribution
- How to verify you're building for the processor architecture you're running

## Why read it

This post helps you move from a confusing message to a concrete fix in minutes.
