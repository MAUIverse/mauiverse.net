---
title: "Local AI Assistant with MAUI, Semantic Kernel, Ollama & LiteDB"
link: https://shaunebu.com/SOLwz
description: "Jorge Perales Diaz builds a fully offline AI assistant in .NET MAUI, combining Semantic Kernel for orchestration, Ollama for local LLMs, and LiteDB as an embedded vector store for RAG. No cloud, no API costs, no data leaving the device."
date: 2026-03-12
author: jpd21122012
contentType: article
---

Most AI apps depend on cloud APIs, bringing cost, latency, privacy, and connectivity concerns. This guide takes the opposite path, building a cross-platform assistant that runs entirely on-device — perfect for enterprise, field work, and privacy-sensitive scenarios.

## What you'll learn

- Why each piece of the stack matters: .NET MAUI (UI), Semantic Kernel (AI orchestration), Ollama (local LLM runtime), and LiteDB (embedded vector database)
- Installing Ollama and pulling a lightweight local model like Phi-3, Llama 3, Mistral, or Gemma
- Implementing Retrieval-Augmented Generation (RAG) fully on-device by storing document chunks, embeddings, and metadata in LiteDB
- Structuring prompt pipelines, context memory, and function orchestration with Semantic Kernel
- Adding a floating chat UI with `Shaunebu.MAUI.FloatingChatButton`
- The concrete benefits: zero cloud cost, full data privacy, offline support, and fast local retrieval

A must-read if you want private, offline AI baked directly into a cross-platform app.
