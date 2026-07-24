---
title: "A Quick Guide to C# Expressions in .NET MAUI"
link: https://tonyedwardspz.co.uk/blog/c-sharp-expressions-in-xaml/
description: "Tony Edwards walks through C# expressions in .NET MAUI XAML — the .NET 11 preview feature that can retire a pile of tiny converters and calculated properties. Part of MAUI UI July 2026, it’s a practical tour of what belongs inline and what should stay named."
date: 2026-07-23
author: tonyedwardspz
contentType: article
---

Boolean converters and one-off calculated properties have been XAML’s tax for years. Tony Edwards’ MAUI UI July guide covers C# expressions in .NET MAUI — still experimental in the .NET 11 preview — and shows how source-generated expressions can keep small presentation logic next to the control that uses it.

## What you'll learn

- **What expressions are** — C# syntax inside XAML attributes, understood by the MAUI XAML source generator (SourceGen only, not XamlC/runtime inflation)
- **Boolean conditions without converters** — invert flags, combine predicates, and drop `MultiBinding` ceremony for simple enable/visible rules
- **Calculated values and formatting** — arithmetic, string interpolation, ternaries, and null-coalescing for presentation-only text
- **Inline event handlers** — tiny synchronous lambdas on `Clicked`, and why async still needs a real method or command
- **Explicit syntax when ambiguous** — `{= …}`, `{this.…}`, and `{.…}` to disambiguate markup extensions vs expressions
- **Judgment calls** — when a named property is clearer than a dense expression, and how to try the feature safely in preview

Open the full guide for the before/after XAML and the link to the official spec.
