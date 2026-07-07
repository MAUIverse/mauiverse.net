---
title: "Integrating Apple Wallet and Google Wallet in .NET MAUI: A Production-Grade Cross-Platform Strategy"
link: https://shaunebu.com/qWS0Y
description: "Jorge Perales Diaz maps out a production-ready strategy for adding Apple Wallet and Google Wallet passes to a .NET MAUI app. The key insight: the mobile app is just a delivery mechanism — the real work is a secure backend pass-generation and signing pipeline."
date: 2026-04-27
author: jpd21122012
contentType: article
---

Apple Wallet and Google Wallet are secure, platform-governed ecosystems — not simple UI features — so one MAUI app must interact with two very different systems. This guide goes beyond a basic integration to design the whole distributed, secure system properly.

## What you'll learn

- How the platforms differ: Apple's signed `.pkpass` packages vs. Google's JWT-based Wallet Objects API, plus their distinct distribution, update, and security models
- A clean MAUI abstraction (`IWalletService`) with platform implementations using PassKit on iOS and a Save-to-Wallet intent on Android, wired via DI
- The critical backend pipelines: building and signing `.pkpass` files with Apple certificates, and creating pass classes/objects and signed JWTs for Google
- Security essentials — never generate passes or embed certificates on-device, use Key Vault/HSM, and short-lived tokens
- Handling pass updates (APNs vs. REST), performance/scaling with queues, a recommended Azure backend stack, and advanced scenarios like dynamic tickets and loyalty

Essential reading if you're adding boarding passes, tickets, or loyalty cards to a MAUI app the right way.
