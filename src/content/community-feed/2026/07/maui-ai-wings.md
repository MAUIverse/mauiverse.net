---
title: "Giving your .NET MAUI a Real Set of AI Wings"
link: https://allanritchie.com/blog/2026/07/maui-ai-wings/
description: "Allan Ritchie shows how to move past chat-bubble demos and give a .NET MAUI assistant real device capabilities with Shiny AI tool packs. Part of MAUI UI July 2026, it's a hands-on build where the model can write notes, schedule reminders, navigate your app, and more."
date: 2026-07-24
author: aritchie
contentType: article
---

Most “add AI to your MAUI app” posts stop at a pretty chat UI. Allan Ritchie goes after the hard half: deciding, deliberately, what the model is allowed to *do* on the device — then wiring those capabilities through `Microsoft.Extensions.AI` and Shiny’s AI tool packs.

## What you'll learn

- **Provider-driven ChatView** — drop in `Shiny.Maui.Controls` chat UI without managing message collections, send commands, or scroll state yourself
- **AITool packs as allow-lists** — register contacts, reminders, location, health, music, and document-store tools one module at a time, with framing prompts that steer behavior
- **Shell navigation as a tool** — describe `[ShellMap]` routes as user intent so the model can open screens with forms already pre-filled
- **Function invocation without the loop** — how `UseFunctionInvocation()` turns a raw `IChatClient` into an agent that calls your tools mid-turn
- **Permissions vs tool registration** — why granting OS access on a real Settings screen is separate from deciding which tools the agent may call
- **Token cost awareness** — why every registered tool schema rides every turn, and how to keep the toolbox lean

Head to the full post for the sample app, package list, and the concrete “try it” prompts that prove the assistant has hands.
