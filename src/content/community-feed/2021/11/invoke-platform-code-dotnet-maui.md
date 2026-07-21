---
title: "Invoke Platform Code in .NET MAUI"
link: https://davestechlab.co.uk/software/invoke-platform-code-in-net-maui/
description: "David Britch shows the modern way to call native platform code from cross-platform .NET MAUI, replacing Xamarin.Forms' DependencyService with partial classes and multi-targeting. Learn how the compiler stitches platform implementations together at build time."
date: 2021-11-12
author: davidbritch
contentType: article
---

Xamarin.Forms used `DependencyService` to reach native functionality, but .NET MAUI can do better. David Britch demonstrates a cleaner approach built on partial classes, partial methods, and multi-targeting.

## What you'll learn

- **How multi-targeting works** — the Platforms folder and how the compiler includes only the current platform's code
- **Partial method pattern** — declaring a partial method in cross-platform code and implementing it per platform
- **A worked example** — a `MyService.GetPlatform` method with Android, iOS, macOS, and Windows implementations
- **Calling it** — invoking the combined class from cross-platform code with no `DependencyService` required
- **Filename-based targeting** — an alternative to Platforms folders using names like `MyService.Android.cs`

Read the full post for the complete code and a link to the sample on GitHub.
