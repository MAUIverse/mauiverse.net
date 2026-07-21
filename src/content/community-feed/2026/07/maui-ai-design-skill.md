---
title: "From developer art to good looking apps - an AI design skill for .NET MAUI"
link: https://mallibone.com/post/maui-ai-design-skill
description: "Mark Allibone builds a reusable Agent Skill that turns his AI assistant into the app designer he never was, generating colour palettes, styles, and icon fonts for .NET MAUI. Part of MAUI UI July, it works across Claude Code and GitHub Copilot."
date: 2026-07-15
author: mallibone
contentType: article
---

Great at implementing designs but not at creating them, Mark Allibone tackles the root problem for MAUI UI July: he writes down his design opinions once as an Agent Skill so his AI assistant applies them every time, lifting apps from "developer art" to something demo-worthy.

## What you'll learn

- **What an Agent Skill is** — a `SKILL.md` file the agent loads on demand, working across Claude Code, VS Code Copilot, the Copilot CLI, and the Copilot coding agent
- **Colour theory as rules** — the 60-30-10 rule, choosing harmonies from the colour wheel, avoiding pure black/white, and treating dark mode as more than an inversion
- **Non-negotiable contrast** — computing WCAG AA ratios and adjusting lightness until text passes
- **Generated resources** — producing `Colors.xaml` and `Styles.xaml` with `AppThemeBinding` and no literal hex values
- **Icon fonts done right** — setting up FluentUI System Icons and never letting the model guess glyph code points
- **Pinning a cheap model** — why `model: haiku` runs the skill fast and cheaply since the thinking is already written down

Read the full post to see the workout-app sample (built with MAUI Reactor) and grab the complete skill on GitHub.
