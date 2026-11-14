---
title: "MAUI iOS Archive Fails on Windows: The Real Cause"
link: https://www.seeleycoder.com/blog/maui-ios-archive-fails-windows/
description: "Jon Seeley tracks down why archiving a .NET MAUI iOS app through Visual Studio's Pair to Mac failed with a garbled, double Windows path error. After two plausible but wrong theories, the fix was two lines in the project file."
date: 2026-09-10
author: fooberichu150
contentType: article
---

The error showed one Windows path followed by a second Windows path, as if the build had forgotten which filesystem it was on. Jon Seeley's iOS archive failed identically from his own script and from Visual Studio's Publish wizard, and the post walks through how he found the cause.

His first suspect was a known issue about a `Resources` folder under `Platforms/iOS`, but moving his privacy manifest changed nothing. His second theory blamed symlinks inside native `.xcframework` packages, and forcing a legacy `Platform=iPhone` build left the process hanging for 20 minutes without an error. He also sketched a plan to build the archive on the Mac instead.

The real cause was an SDK default. `Microsoft.NET.Sdk.Razor` automatically includes root-level `.json` files as `Content` items, and the iOS SDK bundles every `Content` item into the app, even ones marked `CopyToPublishDirectory=Never`. Two files, `appsettings.json` and `sasscompiler.json`, carried their absolute Windows paths into the archive.

The takeaways are practical:

- **Fix:** two `<Content Remove="..." />` lines, plus a `dotnet clean` step and a regression test on the csproj
- **Debugging habit:** if a fix produces the identical failure, you've fixed the wrong thing, and a build that hangs is a separate finding
- **A matching GitHub issue** is evidence, not proof

It's useful if you archive MAUI iOS apps from Windows, and the debugging lessons apply beyond it.
