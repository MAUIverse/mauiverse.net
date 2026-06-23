---
title: "Shiny Health 2.0 — The Ultimate Cross-Platform Health Library"
link: https://allanritchie.com/blog/2026/06/shiny-health-v2/
description: "Allan Ritchie ships Shiny Health 2.0 with 30+ data types spanning activity, heart, body, vitals, and lifestyle metrics — all through one unified IHealthService interface. The headline feature is an AI integration package that turns your health data into tools an LLM agent can call."
date: 2026-06-15
author: aritchie
contentType: article
---

Shiny Health 2.0 is a major upgrade that bridges the gap between Apple HealthKit and Android Health Connect behind a single `IHealthService`. The library now covers 30+ data types including steps, heart rate variability, blood pressure, SpO₂, sleep, hydration, workouts, nutrition, and cycle tracking — each with read, write, and real-time observe support.

## What you'll learn

- How `IHealthService` abstracts HealthKit and Health Connect into one async, cancellable, AOT-friendly API
- Working with time-bucketed numeric metrics (Minutes, Hours, Days) and categorical health events (menstruation flow, ovulation tests, cervical mucus)
- Writing workouts and nutrition data symmetrically across platforms
- Using `Shiny.Health.Extensions.AI` to expose health data as Microsoft.Extensions.AI tool functions for LLM agents
- Important platform differences you need to know — like HRV calculation methods differing between iOS (SDNN) and Android (RMSSD)
