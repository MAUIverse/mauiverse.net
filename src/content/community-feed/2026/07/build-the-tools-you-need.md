---
title: "Build the Tools You Need"
link: https://dev.to/davidortinau/build-the-tools-you-need-4ji0
description: "David Ortinau tells the story of building Foundry Forge — a native macOS .NET MAUI + Blazor Hybrid app that runs local AI models — using coding assistants and a disciplined workflow. Part of MAUI UI July 2026, it's less about 'AI wrote my code' and more about the guardrails that turn an agent from a genie into a reliable teammate."
date: 2026-07-06
author: davidortinau
contentType: article
---

David wanted a clean, native Mac client for running local models that talks to Foundry Local directly — so he built one. The result is Foundry Forge, a real `net11.0` .NET MAUI app with a Blazor Hybrid UI running on the macOS AppKit head. This post, part of **MAUI UI July 2026**, is about *how* he built it, and the workflow is the interesting part.

## What you'll learn

- **Plan before you build** — using spec-kit (`constitution`, `specify`, `plan`, `tasks`) and why a written constitution ("be honest," "preserve data") stops an agent from faking a progress bar or shipping a one-click delete
- **Give the agent a team, not a genie** — splitting work across specialists with Squad so the agent that writes the code can't approve it (a reviewer caught a real `javascript:` XSS hole and a `.Result` deadlock trap)
- **Give it a feedback loop it can see** — wiring MAUI DevFlow so the agent can build, run, screenshot, theme-switch, and read logs on the *live* app instead of guessing
- **Package expertise as skills** — reusable UX and process skills (`ux-first-principles`, `design-review`, `reviewer-protocol`, and more) the agent loads on demand
- **Prove the hard part first (M0)** — refusing to build any UI until the risky native dylib loading chain was proven on Apple Silicon
- **The UI decisions they changed their minds on** — organizing around jobs instead of features, plain-language verbs over cute forge metaphors, honest read-only states, and guarded destructive actions

The honest through-line: this wasn't push-button. The value was a workflow — specs up front, independent review, tests on the invariants that matter, and a feedback loop the agent can see — that caught mistakes before they became damage. Read the full post for the concrete tips and the resources, including the open-source Foundry Forge repo and his published MAUI UX skills.
