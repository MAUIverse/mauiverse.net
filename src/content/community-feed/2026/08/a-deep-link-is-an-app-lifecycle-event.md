---
title: "A Deep Link Is an App-Lifecycle Event"
link: https://dev.to/iqtechsolutions/a-deep-link-is-an-app-lifecycle-event-4gfg
description: "Ivan Rossouw argues that a deep link can be parsed perfectly and still resume the wrong state — because URI routing and app-lifecycle handling are two separate contracts. He shows how Android launch modes, converging cold/warm paths, and a lifecycle test matrix keep stateful .NET MAUI and Blazor Hybrid flows intact."
date: 2026-08-14
author: IQTechSolutions
contentType: article
---

A deep link can be syntactically correct, reach the right app, and still resume the wrong state. Ivan Rossouw separates the two contracts teams often conflate — the URI-routing contract ("which app handles this?") and the app-lifecycle contract ("which activity and state receives it?") — and shows why the second matters just as much for stateful .NET MAUI and Blazor Hybrid workflows.

## What you'll learn

- **URL right, lifecycle wrong** — how a browser callback can land in a fresh activity with fresh state while the live workflow lives in another
- **Launch mode is a state contract** — why `SingleTop` vs `SingleTask` on Android is about state lifetime, not style, and how it changes task/back-stack behavior
- **Converge cold and warm paths** — routing `OnCreate` and `OnNewIntent` into one small, idempotent, state-aware `RouteIncomingIntent`
- **Test configuration as architecture** — an architecture test that discovers launcher activities and fails on missing or mismatched launch modes across app variants
- **A lifecycle matrix, not one happy path** — exercising never-started, warm, backgrounded, process-killed, double-delivered, and Recents-reopened states on a real device

Read the full post for the trade-offs of reusing an activity and why process death still needs durable, server-side reconciliation.
