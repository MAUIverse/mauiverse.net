---
title: "One Blazor UI, Two Hosts: a Device-Capability Layer That Stays Resolvable Everywhere"
link: https://medium.com/@ivanball76/one-blazor-ui-two-hosts-a-device-capability-layer-that-stays-resolvable-everywhere-b85444693161
description: "Ivan Ball-llovera shows how a shared Blazor UI can talk to native share, haptics, biometrics, and more without ever asking “am I on MAUI?” Small per-capability contracts, inert defaults, and host overrides keep the same components portable across browser and .NET MAUI Hybrid."
date: 2026-08-11
author: ivanball
contentType: article
---

The same Blazor components can run in a browser and inside a .NET MAUI Blazor Hybrid app — until one of them needs a share sheet, Face ID, or a haptic tap. Ivan Ball-llovera walks through ADR-042 in MMCA.Common: keep shared UI free of platform checks by injecting tiny device-capability contracts that always resolve.

## What you'll learn

- **Why platform checks leak** — branching on “am I on MAUI?” inside shared components breaks portability and creates untestable code paths
- **One contract per capability** — small interfaces like `IShareService`, `IHapticFeedbackService`, and `IBiometricAuthenticator`, with failure as a return value (bool / null), not an exception
- **Defaults that always resolve** — `TryAdd` null-object, stub, and neutral-state registrations so every host can inject every contract without runtime crashes
- **Host overrides** — browser adapters over a shared JS module vs MAUI native adapters in a separate `MMCA.Common.UI.Maui` package that stays out of the WASM-compatible UI library
- **Deep links without a translation table** — one `IDeepLinkDispatcher` funnel for notification taps, app links, and QR codes onto the shared Blazor route table

Read the full post for the registration order, trade-offs, and how to apply the same pattern even outside MMCA.Common.
