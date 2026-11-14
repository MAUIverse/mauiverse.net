---
title: "AgentView and A2UI - Agents That Answer With Real Controls, on .NET MAUI and Blazor"
link: https://allanritchie.com/blog/2026/11/agentview-a2ui/
description: "Allan Ritchie introduces AgentView and A2UISurfaceView, two Shiny controls for .NET MAUI and Blazor that draw an AI agent's conversation and the UI it describes. Built on the open AG-UI and A2UI protocols, they replace hand-built chat screens with real controls such as date pickers, gauges and data grids."
date: 2026-11-12
author: aritchie
contentType: article
---

Every "chat with an AI" screen ends up the same: a message list, then a card for tool calls, buttons for approvals, a hand-wired calendar, and a 40-row Markdown table nobody can read on a phone. Allan Ritchie built that screen once, for both MAUI and Blazor.

**AgentView** handles the conversation. It consumes AG-UI events, so it doesn't care whether the agent is Microsoft Agent Framework, a Python endpoint or an in-process `IChatClient`. It streams Markdown, folds reasoning into a collapsible row, shows tool calls with live arguments, and nests sub-agents. When the agent needs input, six built-in tools (`confirm`, `choose_one`, `choose_many`, `pick_date`, `pick_date_range`, `ask_text`) show a real control inline instead of asking the user to type.

**A2UISurfaceView** draws UI the agent describes as declarative JSON, using the A2UI basic catalog plus a Shiny catalog with items such as DataGrid, Gauge, DateRangePicker and Timeline. Because it's agent-generated UI, the rules are strict:

- **Registered components only:** unknown ones render a placeholder and report `VALIDATION_FAILED`
- **Safe actions:** actions such as `openUrl` only run from a real tap
- **Mobile-friendly sizing:** surfaces never scroll on their own, and large grids show 12 rows with a "Show all" modal

The post also covers running a real model in the browser with your own key in the Blazor WebAssembly sample, plus a trimming gotcha with `AGUI.Server`. Both controls can be tried in the browser, and they arrive in Shiny Controls 2.5. If you're adding an agent to a MAUI app, this shows what the UI side can look like beyond a chat bubble.
