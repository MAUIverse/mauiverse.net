---
title: "Microsoft Agent Framework — Building Blocks for AI Part 3"
link: https://devblogs.microsoft.com/dotnet/microsoft-agent-framework-building-blocks-for-ai-part-3/
description: "Jeremy Likness introduces the Microsoft Agent Framework, the third building block in the .NET AI series. Agents go beyond chatbots — they reason about tasks, use tools, remember context across conversations, and coordinate through graph-based workflows."
date: 2026-04-30
author: dotnet
contentType: article
---

The Microsoft Agent Framework transforms the MEAI and VectorData primitives from earlier in the series into autonomous, tool-using, memory-aware agents. With its 1.0 release in April 2026, it supports everything from simple single-agent scenarios to complex multi-agent workflows — and it builds directly on `IChatClient`.

## What you'll learn

- Creating agents with `.AsAIAgent()` and equipping them with tools via `AIFunctionFactory`
- Multi-turn conversations with `AgentSession` and serializable session state
- Long-term memory with `AIContextProvider` for persistent, cross-session knowledge
- Graph-based workflows: sequential, concurrent, conditional routing, writer-critic loops, and sub-workflows
- Human-in-the-loop approval for sensitive tool calls
- How MEAI, VectorData, and Agent Framework compose together
