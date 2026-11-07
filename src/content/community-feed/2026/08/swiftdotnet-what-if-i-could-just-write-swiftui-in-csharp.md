---
title: "SwiftDotNet — It Started With \"What If I Could Just Write SwiftUI in C#?\""
link: https://allanritchie.com/blog/2026/08/swiftdotnet/
description: "Allan Ritchie describes SwiftDotNet, an experiment where C# describes the view tree and the platform renders it as real SwiftUI, Jetpack Compose, GTK, WinUI, the DOM and even a terminal. The post covers how it came together in 17 days, which parts work, and what's still missing."
date: 2026-08-04
author: aritchie
contentType: article
---

Cross-platform UI usually means rendering "approximately native". Allan Ritchie likes SwiftUI's shape but didn't want to leave C#. SwiftUI and Compose can't be authored from outside their compilers, so his answer is to let C# describe the UI and let the platform author it: a small Swift or Kotlin interpreter rebuilds real SwiftUI or Compose from a tree of patches sent over a C ABI or JNI.

The long post follows the idea as it grows:

- **From shim to backend:** once the C# side didn't care what was on the other end, GTK4, WinUI 3 and the DOM needed no native code, and a Skia renderer and even a terminal backend followed
- **Framework features:** MAUI-style hosting and DI, 28 controls ported from the Shiny controls set, and hot reload that works because `Body` is re-evaluated and state lives on a retained root view
- **Tooling:** a Rider plugin and a `swiftdotnet-doctor` command that prints how each head would run

Allan is direct about the gaps. Skia interaction and effects lag the native backends, accessibility modifiers aren't built yet, everything is verified on simulators and emulators rather than devices, and it isn't on NuGet. He also compares it with Comet and says plainly that agentic tooling made the project feasible. It's a thought-provoking read for anyone interested in where cross-platform UI could go beyond MAUI.
