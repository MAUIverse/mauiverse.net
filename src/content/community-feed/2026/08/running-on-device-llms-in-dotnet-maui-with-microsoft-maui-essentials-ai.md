---
title: "Running On-Device LLMs in .NET MAUI with Microsoft.Maui.Essentials.Ai"
link: https://codetraveler.io/2026/08/24/running-on-device-llms-in-net-maui-with-microsoft-maui-essentials-ai/
description: "Brandon Minnick shows how Microsoft.Maui.Essentials.Ai exposes on-device foundation models like Apple Intelligence through the same IChatClient abstraction. Part 7 of his Microsoft.Extensions.AI series runs an LLM entirely on the phone — offline, private, and free per token."
date: 2026-08-24
author: TheCodeTraveler
contentType: article
---

The fastest, cheapest, most private LLM call is the one that never leaves the device. In part 7 of his Microsoft.Extensions.AI series, Brandon Minnick swaps cloud models for on-device foundation models in a .NET MAUI app using `Microsoft.Maui.Essentials.Ai`.

## What you'll learn

- **What the package does** — surfaces on-device models (Apple Intelligence, Google Gemini) through the same `IChatClient` used earlier in the series, so streaming, chat history, and function calling all still work
- **Opting into the experimental API** — suppressing `MAUIAI0001` in your csproj, plus the iOS 26+/macOS 26+ physical-device requirement
- **Runtime capability check + fallback** — registering an `AddChatClient` that uses Apple Intelligence when available and falls back to Ollama otherwise, with the app only ever seeing `IChatClient`
- **Proving it's offline** — deploying to a physical iPhone in Airplane Mode and getting answers from the Neural Engine
- **Beyond chat** — the on-device `NLEmbeddingGenerator` (`IEmbeddingGenerator`) enabling semantic search on-device too

Read the full post for the `MauiProgram.cs` wiring and the complete sample project.
