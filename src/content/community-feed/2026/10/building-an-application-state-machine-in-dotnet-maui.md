---
title: "Building an Application State Machine in .NET MAUI"
link: https://shaunebu.com/Details/2c525979-3fa7-47ca-ae5f-a566ba345909
description: "Jorge Perales Diaz replaces a pile of lifecycle booleans with an explicit application state machine for .NET MAUI. The walkthrough covers legal transitions, startup, connectivity, resume, and navigation that reacts to state instead of inventing it."
date: 2026-10-07
author: jpd21122012
contentType: article
---

Once a .NET MAUI app tracks authentication, connectivity, backgrounding, and recovery as separate flags, impossible combinations start driving the UI. Jorge Perales Diaz shows a lightweight state machine so the app has one operational state and a controlled set of transitions.

## What you'll learn

- **Why the flags break down** — six booleans already allow combinations that have no sensible screen, sync policy, or navigation answer
- **States versus UI state** — operational modes such as Starting, Initializing, AuthenticationRequired, Ready, Offline, Background, Recovering, and Failed, while ViewModels keep feature-level UI state
- **A lock around transitions** — `CanTransitionTo` as a switch of legal pairs, and a `SemaphoreSlim` so connectivity, resume, and authentication cannot change state at the same time
- **Coordinators, not a god object** — startup, connectivity, resume, and navigation sit beside the machine. Enter-state handlers pause sync or persist work without the machine taking every dependency
- **Failure and auth as explicit edges** — session expiry and a retry from Failed are transitions you add on purpose, not conditions that leak out of a page
- **Diagnostics and tests** — every transition is a log line you can read after a production failure, and valid and invalid paths are unit-testable sequences
- **When to stop** — keep orthogonal concerns out of one giant enum, and skip the pattern when `IsBusy` and `IsLoggedIn` are enough

Read the full article for the transition map, the DI registration, and the recovery path from Failed back to Ready.
