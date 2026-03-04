---
title: "Continuing our live tracking app with MAUI, Aspire, & Orleans"
link: https://www.youtube.com/watch?v=l8wKKqmlliU
description: This installment continues the live GPS tracking build with .NET MAUI, Aspire, and Orleans, focusing on architecture and scale. Jon and Allan iterate on backend messaging and app wiring to keep high-frequency location updates manageable.
date: 2025-11-08
author: gonedotnet
featuring:
  - aritchie
  - redth
contentType: video
---

As the tracking app grows, design decisions around throughput, reliability, and state handling become the main challenge. This episode is about turning a working prototype into a structure that can handle sustained real-time data flow.

### What you will learn

- How to evolve a MAUI tracking app architecture over multiple iterations
- How Aspire orchestration and Orleans grains help distribute location workloads
- How to reason about update frequency, buffering, and processing boundaries
- Which integration points tend to become bottlenecks first

