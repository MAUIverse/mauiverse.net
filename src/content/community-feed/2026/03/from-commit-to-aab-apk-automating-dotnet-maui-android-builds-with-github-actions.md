---
title: "From Commit to AAB/APK: Automating .NET MAUI Android Builds with GitHub Actions"
link: https://medium.com/medialesson/from-commit-to-aab-apk-automating-net-maui-android-builds-with-github-actions-bc30468b2d08
description: "A practical guide to automating .NET MAUI Android builds in GitHub Actions, covering keystore creation, Base64 encoding for secrets, and producing both .aab and .apk artifacts in a single pipeline run. Android is a great first platform to automate because the signing workflow is straightforward."
date: 2026-03-20
author: tsjdev-apps
contentType: article
---

Shipping Android consistently means removing the mystery around keystores, signing, and SDK versions. This article walks through a complete GitHub Actions pipeline that builds a .NET MAUI Android app, signs it, and produces both `.aab` and `.apk` artifacts.

### What you will learn

- How to create an Android keystore and convert it to Base64 for GitHub Secrets
- Which four repository secrets are needed and what each one controls
- How to configure a GitHub Actions workflow that installs the MAUI workload, reconstructs the keystore, and publishes signed Android packages
- Why generating both `.aab` (for Google Play) and `.apk` (for testing) in one pipeline run is valuable
- How to pin the .NET SDK with `global.json` to avoid drift between local and CI builds
- Common issues around wrong project paths, incorrect secret values, and missing workloads
