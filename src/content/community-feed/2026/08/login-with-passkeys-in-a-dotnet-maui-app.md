---
title: "Login with Passkeys in a .NET MAUI App"
link: https://tonyedwardspz.co.uk/blog/login-with-passkeys-in-a-MAUI-app/
description: "Tony Edwards digs into the new cross-platform Passkeys API in .NET MAUI Preview 7, which talks to native authenticators on iOS, Android, and Windows. He walks the full WebAuthn flow end to end, pairing the tiny MAUI API with an ASP.NET Core Identity backend."
date: 2026-08-23
author: tonyedwardspz
contentType: article
---

.NET MAUI Preview 7 quietly added a real cross-platform Passkeys API — not a browser wrapper, but a bridge to the native passkey APIs on each platform. Tony Edwards explores what a production implementation actually looks like, from the client call to the security-sensitive server work.

## What you'll learn

- **The MAUI surface** — `Passkeys.IsSupported`, `CreateAsync`, and `AssertAsync`, and why the JSON-in/JSON-out design keeps challenges and verification on the server
- **Registration and authentication flows** — the full begin/finish round trips between app, native authenticator, and an ASP.NET Core Identity backend
- **Server setup** — relying-party ID, `ValidateOrigin` for native app origins, and Identity schema version 3 for storing passkeys
- **Token-based sign-in** — using `PerformPasskeyAssertionAsync` to verify without a cookie session and issue your normal access/refresh tokens
- **Platform association** — Apple Associated Domains, Android Digital Asset Links, ceremony state, `PreferImmediatelyAvailable`, and handling cancellation cleanly

Read the full ~21 minute walkthrough for the endpoint code, the gotchas, and links to the MAUI sample and backend.
