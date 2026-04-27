---
title: ".NET MAUI & GitHub Actions Missing Targets Default Projects"
link: https://mitchelsellers.com/blog/article/net-maui-github-actions-missing-targets-default-projects
description: "Mitchel Sellers diagnoses a frustrating NETSDK1047 error when building .NET MAUI iOS apps in GitHub Actions with separate restore and build steps. The fix is a small .csproj addition that hints the RuntimeIdentifier when splitting dotnet restore from dotnet publish."
date: 2026-04-24
author: mitchelsellers
contentType: article
---

Starting a fresh .NET MAUI project from the Visual Studio template, everything builds fine locally — then CI/CD comes to a screeching halt with a `NETSDK1047` error about missing targets for `net10.0-ios/ios-arm64`. This post walks through the root cause and the fix.

## What you'll learn

- Why splitting `dotnet restore` and `dotnet publish --no-restore` creates a different dependency chain than building directly
- The `.csproj` fix: adding a conditional `RuntimeIdentifier` property for iOS targets
- A complete GitHub Actions workflow for .NET MAUI iOS builds with signing, versioning via GitVersion, and workload installation
