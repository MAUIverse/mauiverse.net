---
title: "Shiny.AppFunctions — Siri and Gemini, From One C# Record"
link: https://allanritchie.com/blog/2026/09/shiny-appfunctions/
description: "Allan Ritchie unifies Apple App Intents and Android 16 AppFunctions behind a single C# record, so 'Hey Siri, create an order' and 'Ask Gemini how many are open' both call the same handler. A source generator writes the Swift, the Kotlin schema, and the plist — you write none of it."
date: 2026-09-29
author: aritchie
contentType: article
---

Assistants are becoming the front door of the phone, but Apple's App Intents (Swift) and Google's Android 16 AppFunctions (Kotlin) have nothing in common — so "let the assistant create an order" normally becomes two features in two languages your app isn't written in. Allan Ritchie built Shiny.AppFunctions to declare it once in C#.

## What you'll learn

- **One record, both assistants** — an `[AppFunction]` record with an `IAppFunctionHandler` becomes a real iOS App Intent (Siri, Spotlight, Shortcuts, Apple Intelligence) and an Android 16 AppFunction for Gemini, same id and handler
- **No Swift, Kotlin, or plist** — a Roslyn source generator emits the Swift intents, `AppShortcutsProvider`, and Android schema; build targets run `swiftc` and Apple's metadata/Siri phrase processors before signing
- **The "which customer?" problem** — one `[AppEntity]` + `IAppEntityQuery` gives iOS a native picker and generates a companion `search_customer` function for Android, which has no picker
- **Delegates as a gate** — auth checks per call, with `Deny` and iOS's nicer `OpenApp` flow, plus `context.Platform` telling you Siri vs Gemini
- **A free tool registry** — every function exposes `GetParametersJsonSchema()`, so an in-app chat or MCP server can call the same handlers as a third assistant

Read the full post for the sample orders app, supported types, error mapping, and the compile-time diagnostics that catch a missing handler before deploy.
