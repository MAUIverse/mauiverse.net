---
title: "Supercharging .NET MAUI with Incremental Source Generators"
link: https://shaunebu.com/Details/4235155f-1c38-440f-af31-f3bdb8dc5140
description: "Jorge Perales Diaz shows how Roslyn's Incremental Source Generators can eliminate DI registration, BindableProperty, and command boilerplate in .NET MAUI apps. He walks through building a real AutoRegister generator, complete with diagnostics and tests."
date: 2026-07-27
author: jpd21122012
contentType: article
---

Every growing .NET MAUI app accumulates the same infrastructure: DI registrations, `BindableProperty` declarations, `ICommand` wrappers, resource keys. Jorge Perales Diaz makes the case that the compiler already has enough information to write that code for you, then builds a working `AutoRegister` generator to prove it.

## What you'll learn

- **Why incremental matters** — how the cache-aware pipeline avoids re-scanning the whole compilation on every keystroke, unlike classic generators
- **Building an `IIncrementalGenerator`** — syntax filtering, semantic analysis, and turning attributed classes into generated DI registration code
- **Project structure that scales** — keeping a generator in its own analyzer project, testable independently of the MAUI app
- **Compiler diagnostics over exceptions** — reporting misuse (like decorating an interface instead of a class) as a proper Visual Studio error instead of a runtime crash
- **Testing generators in memory** — using Roslyn's testing APIs to assert generated source and diagnostics without a physical project
- **Where else this pays off in MAUI** — bindable properties, commands, strongly typed resources, and Preferences wrappers as natural next candidates

Read the full post for the complete generator code, the diagnostic setup, and performance tips for keeping large MAUI solutions fast to build.
