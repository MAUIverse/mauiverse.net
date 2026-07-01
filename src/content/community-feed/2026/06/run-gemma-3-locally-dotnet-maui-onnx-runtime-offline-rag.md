---
title: "Run Gemma 3 Locally in .NET MAUI — Offline AI, ONNX Runtime & On-Device RAG"
link: https://www.youtube.com/watch?v=HZlLP9DOEvg
description: "Hassan Tariq walks through running Google's Gemma 3 model entirely on-device inside a .NET MAUI app using ONNX Runtime GenAI — no cloud APIs, no internet required. The walkthrough covers a complete offline RAG implementation including PDF ingestion, vector embeddings, semantic search, SQLite storage, and local inference."
date: 2026-06-24
author: ihassantariq
contentType: video
---

On-device AI in .NET MAUI is no longer a proof of concept — it's a working app. Hassan builds an end-to-end offline RAG (Retrieval-Augmented Generation) system, running Google's Gemma 3 via ONNX Runtime GenAI directly on the user's device. No OpenAI subscription. No network call at inference time.

This is one of the most complete implementations of privacy-first, offline AI in the .NET MAUI ecosystem.

## What you'll learn

- Setting up ONNX Runtime GenAI and configuring automatic model download inside a .NET MAUI app
- The full RAG architecture: PDF ingestion, text chunking, vector embeddings, cosine similarity search, and prompt construction
- Storing document chunks and embeddings in SQLite for fast local retrieval
- Prompt engineering, temperature settings, and token limit handling for local model inference
- The 16KB Android runtime constraint that affects large model execution — and how to work around it
- Live demo: loading a PDF, asking questions about its content, and getting answers entirely offline
- Hallucination discussion: what on-device models get right and where they still fall short

Source code: [github.com/ihassantariq/maui-gemma-3](https://github.com/ihassantariq/maui-gemma-3)
