---
title: "Loading configuration data from json in a MAUI app"
link: https://tonyedwardspz.co.uk/blog/MAUI-load-configuration-data-from-json/
description: This walkthrough shows how to load local JSON configuration into a .NET MAUI app while keeping sensitive values out of source control. Tony demonstrates a lightweight pattern that's ideal for device-local keys and quick experimentation.
date: 2024-10-18
author: tonyedwardspz
contentType: article
---

This guide is about balancing speed and safety when you need app configuration now, without hardcoding secrets in your repository.

## What you'll learn

- How to structure and place a `config.json` file in a MAUI project
- How to model config values in C# and load them at runtime
- When this local-file approach is a good fit vs. when stronger secret handling is needed
- Practical gotchas around keeping schema and code in sync

## Why read it

If you need a clean, low-friction config strategy for prototypes or local builds, this pattern gets you shipping quickly while reducing leakage risk.
