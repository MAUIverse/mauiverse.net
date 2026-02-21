---
title: "Using AI Foundry with .NET MAUI"
link: https://devblogs.microsoft.com/dotnet/using-ai-foundry-with-dotnet-maui/
description: David Ortinau shows how to integrate Azure AI Foundry into a .NET MAUI app using Microsoft.Extensions.AI, turning a “to do” template into an AI-assisted experience.
date: 2025-06-03
author: davidortinau
---

This post demonstrates a practical pattern for adding AI to a MAUI app without overcomplicating the architecture: create an `IChatClient` via `Microsoft.Extensions.AI`, inject it, and use it to generate helpful “starter tasks” when a user creates a new project.

It also includes an important reminder about **not** hardcoding API keys, even in samples, and sketches what a production-grade approach should look like.
