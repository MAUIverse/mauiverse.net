---
title: "Translate spoken text using Whisper and GPT with Azure OpenAI Services and .NET MAUI"
link: https://blog.pieeatingninjas.be/2023/12/08/translate-spoken-text-with-whisper-and-gpt-with-azure-open-ai-services-and-net-maui/
description: "Pieter Nijs builds a speech translator that sends recorded audio to Whisper on Azure OpenAI and then asks a GPT model to translate the transcript into any language. A small .NET MAUI app records the audio with Plugin.Maui.Audio."
date: 2023-12-08
author: PieEatingNinjas
contentType: article
---

Whisper can translate speech into English out of the box, but it can't translate into other languages. Pieter Nijs shows how to work around that limit with a two-step approach: transcribe the audio with Whisper, then pass the text to a GPT model with a system prompt that asks for a translation into the target language.

The post uses the `Azure.AI.OpenAI` client and walks through three calls: `GetAudioTranslationAsync` for English, `GetAudioTranscriptionAsync` for the transcript, and `GetChatCompletionsAsync` with the temperature set to 0 for a more deterministic result. It also covers deploying a GPT 3.5 Turbo model in Azure OpenAI Studio.

The last section turns it into a .NET MAUI app with a language picker, record and stop buttons, and a translate button. Recording uses the Plugin.Maui.Audio package, including the microphone permission check. It follows an earlier post on Whisper, so it's easiest to read after that one.
