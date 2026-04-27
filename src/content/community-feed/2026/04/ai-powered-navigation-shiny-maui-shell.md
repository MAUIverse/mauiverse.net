---
title: "AI-Powered Navigation in Shiny MAUI Shell — Chat to Navigate, Intent to Form"
link: https://allanritchie.com/blog/2026/04/shiny-shell-ai/
description: "Allan Ritchie introduces AI-driven navigation for Shiny MAUI Shell, where users type natural language and the app opens the right form with fields pre-filled. The source generator extends existing ShellMap and ShellProperty metadata with intent descriptions, producing just two AI tools that scale to any number of routes."
date: 2026-04-26
author: aritchie
contentType: article
---

What if a user could type "My furnace is broken — it's urgent!" and your app would automatically open the work order form with the description filled in and the priority set to Urgent? Shiny MAUI Shell's new AI integration makes this possible by extending the existing source-generated route metadata with intent descriptions.

## What you'll learn

- How `[ShellMap(description:)]` tells the AI when a page is relevant based on user intent signals
- How `[ShellProperty("inference hint")]` tells the AI how to extract parameter values from natural language
- The two-tool pattern: `GetAiToolApplicableGeneratedRoutes()` for discovery and `NavigateToRoute()` for navigation — scales to any number of pages
- How `GeneratedRouteParameter` includes type information, requirement flags, and inference hints for the AI
- How to wire it up with `Microsoft.Extensions.AI` and the generated `GetAiTools()` method
- The sample app: GitHub Copilot OAuth, ChatView UI, and intent-driven work order and contact forms
- Best practices for writing descriptions: describe user intent, not page names; tell AI to infer, not expect exact values
