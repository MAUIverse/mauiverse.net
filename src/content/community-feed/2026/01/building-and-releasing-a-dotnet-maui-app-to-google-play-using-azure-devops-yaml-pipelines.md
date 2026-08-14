---
title: "Building and Releasing a .NET MAUI App to Google Play Using Azure DevOps YAML Pipelines"
link: https://medium.com/blazor-maui-hybrid-development/building-and-releasing-a-net-maui-app-to-google-play-using-azure-devops-yaml-pipelines-3452671b02ab
description: "Ruslan Dudchenko walks through signing, versioning, and uploading a .NET MAUI Android App Bundle to Google Play from an Azure DevOps YAML pipeline. A practical CI/CD guide covering keystores, service accounts, and first-release gotchas — with a sample repo to adapt."
date: 2026-01-10
author: dudchenko610
contentType: article
---

Shipping a .NET MAUI Android app is often harder than building it — keystores, Play Console permissions, and CI signing have to line up before Google Play will accept a build. Ruslan Dudchenko maps the full path from project setup to an automated internal-track upload with Azure DevOps YAML.

## What you'll learn

- **Android signing basics** — keystore, key alias, store/key passwords, and how Play App Signing turns your CI keystore into an upload key
- **Google Play service connection** — creating a Cloud service account, granting Play Console upload permissions, enabling the Android Developer API, and wiring the DevOps extension
- **YAML pipeline end to end** — install the MAUI workload, sign with Secure Files + secret variables, publish the signed `.aab` artifact, and release with `GooglePlayRelease@4`
- **Automated versioning** — bumping `ApplicationVersion` / `versionName` from the build ID and using `android-manifest-version` so every upload is unique
- **First-release gotchas** — Secure Files approval on the first run, draft-app uploads with `isDraftRelease: true`, and avoiding hyphens in the package ID that break the upload task

Read the full article for the complete YAML listing, `.csproj` Release settings, and the linked sample repository you can use as a starting point.
