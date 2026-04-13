---
title: "Shiny MAUI Shell — A Library That Takes Shell to the Next Level"
link: https://allanritchie.com/blog/2026/03/shiny-maui-shell/
description: "Allan Ritchie introduces Shiny MAUI Shell, a library that wraps standard MAUI Shell with source-generated type-safe navigation, ViewModel lifecycle management, testable services, and zero boilerplate wiring. It replaces string-based routes and Shell.Current with compile-time validated, injectable navigation."
date: 2026-03-23
author: aritchie
contentType: article
---

Default MAUI Shell navigation relies on string-based routes, manual ViewModel wiring, and the untestable `Shell.Current` singleton. Shiny MAUI Shell fixes all of this with source generators that produce route constants, strongly-typed navigation methods, and DI registration — all at compile time with zero runtime cost.

## What you'll learn

- How source generation creates route constants, typed navigation extensions, and DI mappings from `[ShellMap]` and `[ShellProperty]` attributes
- How to navigate with strongly-typed methods instead of string concatenation: `await navigator.NavigateToDetail(itemId)`
- ViewModel lifecycle interfaces: `IPageLifecycleAware`, `INavigationConfirmation`, `INavigationAware`, and `IDisposable`
- How to use `INavigator` and `IDialogs` for fully testable navigation and dialog logic
- Navigation guards that prevent accidental navigation when there are unsaved changes
- How to switch between Shell instances (login vs. main app) with `SwitchShell<T>()`
- Cross-cutting navigation events for analytics and logging
- Side-by-side comparison of default MAUI Shell vs. Shiny MAUI Shell for every common operation
