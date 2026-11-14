---
title: "Building One Publish Script for Two App Stores (and Debugging the One That Almost Worked)"
link: https://www.seeleycoder.com/blog/one-script-two-app-stores/
description: "Jon Seeley shares the PowerShell scripts he uses to build, version and publish a .NET MAUI app to both the App Store and Google Play. He also explains the three stacked bugs that broke the iOS upload path, including a PowerShell quirk worth knowing about."
date: 2026-09-14
author: fooberichu150
contentType: article
---

One command that runs tests, stamps a version, builds, signs and leaves an artifact ready for the store is a nice goal. Jon Seeley ended up with `publish-ios.ps1` and `publish-android.ps1`, which share a shape and diverge only where the platforms require it. Both are linked as gists.

The shared design has a few interesting choices:

- **Versioning:** a build number derived from the git tag GitVersion's source commit points at, plus the commit count since, so numbers always increase and map back to a real tag
- **Signing:** a local, gitignored `.props` file per platform, failing loudly when properties are missing
- **Environments:** an `-AppEnvironment` parameter that the csproj reads to embed only the matching `appsettings` file, defaulting release builds to Production so a UAT build can't ship by accident
- **Test gate:** tests run before a build unless you skip them

The second half is the bug hunt on the iOS path. Jon describes a PowerShell case-insensitivity collision between a variable and a parameter, tilde expansion suppressed by single quotes over `ssh`, and a stale file path after renaming the build output. He also adds exit-code checks after remote commands and one `Info.plist` key to skip the export compliance question.

If you're automating MAUI releases, the takeaways list is a handy checklist for scripts that talk to a remote Mac.
