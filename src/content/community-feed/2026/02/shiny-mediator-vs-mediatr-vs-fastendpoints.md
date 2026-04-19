---
title: "Shiny Mediator vs MediatR vs FastEndpoints"
link: https://allanritchie.com/blog/2026/02/shinymediator-comparison/
description: "Allan Ritchie compares three .NET libraries for structuring application logic: MediatR, FastEndpoints, and Shiny Mediator. The post breaks down where each excels — server-only mediation, API endpoint structure, and cross-platform apps with built-in middleware."
date: 2026-02-09
author: aritchie
contentType: article
---

MediatR, FastEndpoints, and Shiny Mediator all aim to decouple your code and reduce dependency complexity, but they target different scenarios. This comparison helps you understand when each is the right choice — from ecosystem maturity to AOT support to built-in middleware.

## What you'll learn

- How MediatR, FastEndpoints, and Shiny Mediator differ in primary focus: in-process mediation, ASP.NET endpoints, and cross-platform apps
- MediatR's strengths (simplicity, ecosystem maturity) and limitations (reflection-based registration, no built-in middleware, paid licensing)
- FastEndpoints' strengths (API performance, structured endpoints, built-in validation) and limitations (ASP.NET only, not a mediator)
- Shiny Mediator's built-in middleware suite: attribute-driven caching, offline support, validation, resilience, main thread dispatching, and event throttling
- The full feature comparison table covering streaming, AOT support, HTTP client generation, and licensing
- Practical guidance: when to choose each library based on your platform targets and infrastructure preferences
