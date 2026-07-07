---
title: "Give Your MAUI Agent Hands — Contacts, Reminders & Location as AI Tools"
link: https://allanritchie.com/blog/2026/07/shiny-ai-tools/
description: "Allan Ritchie shows how to move beyond a chat assistant that can only talk by wiring device services into your .NET MAUI app as AI tools. He walks through three new Shiny packages that let a model work with contacts, reminders, and location — opt-in, read-only by default, and AOT-compatible."
date: 2026-07-06
author: aritchie
contentType: article
---

A conversational model on its own is, as Allan Ritchie puts it, "a very articulate box with no arms." The interesting part isn't the chat — it's giving the model a small, safe set of things it can actually _do_ on the device. Building on `Shiny.Health.Extensions.AI`, this post introduces three more device services exposed as AI tools for your .NET MAUI app.

## What you'll learn

- **The tool-calling pattern for device services** — how a model goes from talking about an action to actually performing it via `IChatClient` and `AITool`
- **Contacts** with `Shiny.Contacts.Extensions.AI` — expose `search_contacts` and `get_contact`, and opt in to `create_contact`, `update_contact`, and `delete_contact`
- **Reminders** with `Shiny.Notifications.Extensions.AI` — `list_reminders`, `create_reminder` (one-shot or daily), and `cancel_reminder`, framed the way people actually speak
- **Location** with `Shiny.Locations.Extensions.AI` — a read-only tool wiring up `get_current_location`, `get_distance_to`, and `estimate_travel_time`
- **How the packages compose** — concatenate the `.Tools` from each and hand the whole pile to a single chat client so one sentence can light up all three services
- **The safety model** — capability builders are an allow-list _you_ control, not an OS permission prompt, so you still request real permissions yourself

Allan is refreshingly honest about the boundaries too: distances are straight-line great-circle estimates, not routed ETAs, and every result carries a `note` so the model answers "about 4 km as the crow flies" instead of pretending to be a maps provider. Read the full post to see the DI wiring, the real-world prompts each tool handles, and how to safely give your assistant a few hands.
