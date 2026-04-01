---
title: "Before The IPA: Preparing iOS Signing"
link: https://medium.com/medialesson/before-the-ipa-preparing-ios-signing-6e7861fcd84f
description: "A practical walkthrough of the Apple-side setup required before you can automate iOS builds: creating the app identifier, distribution certificate, provisioning profile, and App Store Connect API key. Gets the hard part out of the way so your CI pipeline can focus on building."
date: 2026-03-26
author: tsjdev-apps
contentType: article
---

The hardest part of iOS CI is not writing YAML — it is getting the Apple signing assets prepared correctly. This guide separates the Apple-side preparation into concrete, sequential steps so you know exactly what to create and why each piece matters.

### What you will learn

- How to create and register an App ID in Apple Developer
- How to generate a Certificate Signing Request (CSR) via Keychain Access
- How to create an Apple Distribution certificate and export it as a `.p12`
- How to create a provisioning profile that ties the certificate and App ID together
- How to create an App Store Connect API key for automated profile downloads in CI
- How to verify that all signing assets are aligned before moving to the GitHub Actions workflow
