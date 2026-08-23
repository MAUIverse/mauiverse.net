---
title: "Level Up Animation with Keyframes for MAUI & Blazor"
link: https://allanritchie.com/blog/2026/08/keyframes-motion-icons-shinybutton/
description: "Allan Ritchie brings the CSS @keyframes model to .NET MAUI and Blazor, where evaluating an animation is a pure function of time you can scrub, reverse, and export. It stacks into 42 animated Motion Icons and a ShinyButton that runs its own busy/success/error states."
date: 2026-08-20
author: aritchie
contentType: article
---

MAUI's `FadeTo`/`ScaleTo` animators accumulate frame-by-frame, so there's no such thing as "the state at 0.62" — which makes scrubbing, reversing, and exporting a rewrite each time. Allan Ritchie rebuilds animation around a pure `Evaluate(t)` function and stacks three pieces on top of it.

## What you'll learn

- **Keyframe engine** — the CSS `@keyframes` model in XAML plus a fluent C# timeline API, where `Evaluate(t)` never reads the previous frame
- **Scrub, reverse, test, export** — `SeekProgress`, `Rate = -1`, a steppable `ManualClock`, and deterministic offscreen GIF export from the same scene
- **Web-friendly details** — Oklab colour blending, shortest-arc rotation, pasteable `cubic-bezier`/`spring`/`steps` easings, and AOT-safe hand-registered properties
- **42 Motion Icons** — one dependency-free spec rendered as a drawn `KeyframeScene` on MAUI and compiled to real CSS `@keyframes` on Blazor, with zero C# per frame on the web
- **ShinyButton** — a press→busy→success/error button that subscribes to an `AsyncRelayCommand` (or awaits a Blazor handler) with no `IsBusy` flag and no width jitter

Try the [Blazor playground](https://shinyorg.github.io/controls/) to mash the buttons and hover the icons, then read the full post for the design decisions behind each layer.
