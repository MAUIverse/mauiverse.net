---
title: "MAUI Snack - Get ANY Resource Dictionary Value in Code Behind!"
link: https://sirjohnk.com/coding/MAUI-Snack-2/
description: "Johan Svensson shows how to reliably resolve .NET MAUI resource values from code-behind, even when resources are nested through `OnPlatform`, `OnIdiom`, dynamic references, and merged dictionaries. The article focuses on handling tricky runtime resource resolution patterns that basic key lookups can miss."
date: 2023-01-27
author: SirJohnK
contentType: article
---

The entry starts with familiar `Application.Current.Resources[...]` and `TryGetValue` patterns, then demonstrates where those approaches become unreliable when styles and values are layered across platform- and idiom-specific resources.

Johan walks through a complex real-world example that chains `OnPlatform`, `DynamicResource`, and merged dictionaries, highlighting how to safely retrieve the final resolved value in code-behind when resource definitions span multiple levels.
