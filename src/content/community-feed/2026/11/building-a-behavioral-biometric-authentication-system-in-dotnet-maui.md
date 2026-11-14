---
title: "Building a Behavioral Biometric Authentication System in .NET MAUI"
link: https://shaunebu.com/Details/7f370da5-7bea-4393-a957-ae895378e91e
description: "Jorge Perales Diaz explores behavioral biometrics in .NET MAUI, using touch dynamics, keystroke timing and risk scoring as an extra signal after sign-in. He positions it as an added security layer rather than a replacement for proper authentication."
date: 2026-11-09
author: jpd21122012
contentType: article
---

Authentication confirms who someone is at one moment. It says little about who is holding the phone after it unlocks. Jorge Perales Diaz looks at behavioral biometrics, which analyze how a person interacts with the app, such as typing rhythm, gesture duration and timing, to add a continuous signal during a session.

The article builds the pieces step by step:

- **Events and collection:** a model for behavioral events, touch interaction data and keystroke dynamics
- **Features and profiles:** extracting features, then building a statistical profile of the user
- **Risk and authentication:** a risk engine feeding risk-based authentication, with step-up checks when the score changes meaningfully
- **Operations:** protecting stored profiles, monitoring false acceptance and rejection rates, testing, and handling drift

The tone is cautious throughout. He says the example values aren't reliable identity signatures by themselves, keeps traditional authentication as the primary mechanism, and spends time on limitations, accessibility, minimal data collection and retention policies. If you're considering continuous or risk-based authentication in a mobile app, it's a sensible place to see the moving parts.
