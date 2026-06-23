---
title: "Introducing Shiny.AiConversation — Text, Voice & Wake Word in One Service"
link: https://allanritchie.com/blog/2026/05/ai-conversation/
description: "Allan Ritchie introduces Shiny.AiConversation, a single service that wraps text chat, voice chat, hands-free wake word activation, audio feedback, and persistent chat history into one DI registration. Bring your own AI backend — OpenAI, GitHub Copilot, Azure OpenAI, or Ollama — and get a full conversational AI experience across MAUI and Blazor."
date: 2026-05-06
author: aritchie
contentType: article
---

Building an AI-powered conversational app today means stitching together a chat client, speech recognition, text-to-speech, audio playback, message persistence, and state management across platforms. Shiny.AiConversation wraps all of that into a single `IAiConversationService` interface.

## What you'll learn

- Registering the service with one DI call and using `IChatClient` from Microsoft.Extensions.AI
- Text chat with streaming responses, voice chat with push-to-talk, and hands-free wake word activation ("Hey Copilot")
- Four acknowledgement modes: None, AudioBlip, LessWordy, and Full text-to-speech
- Persistent chat history with an AI self-lookup tool that lets the model search its own conversation history
- Bringing your own backend — OpenAI, GitHub Copilot (with device code flow), Azure OpenAI, Ollama, or any `IChatClient` implementation
- Cross-platform support targeting net10.0 with Shiny.Speech handling platform abstraction for MAUI and Blazor
