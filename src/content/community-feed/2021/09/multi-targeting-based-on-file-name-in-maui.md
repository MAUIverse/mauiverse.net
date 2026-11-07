---
title: "Multi targeting based on file name in MAUI"
link: https://blog.pieeatingninjas.be/2021/09/09/multi-targeting-based-on-file-name-in-maui/
description: "Pieter Nijs shows how to keep platform-specific code in files named like `MyButtonHandler.Android.cs` instead of the Platforms folders. A few csproj conditions control which files compile for each target."
date: 2021-09-09
author: PieEatingNinjas
contentType: article
---

MAUI's single project uses the Platforms folders to include platform-specific code, but Pieter Nijs argues that this doesn't always fit. He prefers a pattern he's used for years: put the platform in the file name, so `MyButtonHandler.Android.cs` and `MyButtonHandler.Apple.cs` can each hold their own partial class for a custom handler.

The catch is that it doesn't compile out of the box. A handler that touches `AppCompatButton` can't build for iOS. The fix is a set of `ItemGroup` conditions in the `.csproj` that remove the platform-suffixed files, and the matching folders, whenever you aren't building for that target. Pieter gives the Android example in full and the equivalent for iOS and other platforms.

He ends with a practical warning: after changing the project file, close your open tabs or restart Visual Studio, or the IDE will fill the editor with red squiggles. It's an early-MAUI technique, but still a neat way to organize handlers.
