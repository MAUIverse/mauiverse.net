---
title: "A closer look at XAML Incremental Hot Reload in MAUI 11"
link: https://tonyedwardspz.co.uk/blog/maui-11-xaml-hot-reload/
description: "Tony Edwards examines the new XAML Incremental Hot Reload engine in .NET MAUI 11, which uses a Roslyn source generator to apply targeted updates to existing controls. It's a quick read on what changed, how it handles `CollectionView` templates and how to turn it off if it gives you trouble."
date: 2026-11-04
author: tonyedwardspz
contentType: article
---

Hot Reload has always been useful, but bigger XAML edits could still cost you your page state. The new engine in .NET MAUI 11 takes a different route: a Roslyn source generator compares the XAML changes and writes C# that updates the existing controls, delivered through .NET's `MetadataUpdateHandler`. It handles properties, bindings, resource dictionaries and structural changes such as adding, removing or reordering children, without navigating away or recreating the page.

Tony reads through `UpdateComponentCodeWriter` to show how it works. A `XamlComponentRegistry` tracks live controls, so the generated code can find the right instance, with separate handling for template components that appear many times. As of RC1, property changes inside a direct `CollectionView.ItemTemplate` update realised cells while keeping scroll position, selection and focus.

It's on by default for Debug builds targeting MAUI 11 and works with `dotnet watch`. It's still a preview feature, and some edits, such as adding code-behind fields or changing the root element type, still need a rebuild. Setting `EnableMauiIncrementalHotReload` to `false` restores the old engine.

It's a three-minute read, and a good one if your hot reload sessions have been losing state.
