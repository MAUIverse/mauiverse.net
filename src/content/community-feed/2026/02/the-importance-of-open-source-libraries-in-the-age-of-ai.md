---
title: "The Importance of Open Source Libraries in the Age of AI"
link: https://allanritchie.com/blog/2026/02/opensource-in-age-of-ai/
description: "Allan Ritchie argues that AI-generated code makes open source libraries more valuable, not less. He draws on years of maintaining mobile libraries to explain why maintenance, design judgment and trust still come from people."
date: 2026-02-11
author: aritchie
contentType: article
---

AI can scaffold a Bluetooth abstraction in minutes. Allan Ritchie's question is who handles the iOS breaking change six months later, or the Android behavior change that only shows up on certain Samsung devices. Maintaining a library over the years is the part AI doesn't do.

He builds his argument in prose and a numbered list of points. AI models learned from open source, so the ecosystem is what they stand on. Libraries encode opinions about permissions, background work and developer experience that come from seeing what breaks in production. NuGet packages come with community validation, security scrutiny, SemVer and CI across platforms, none of which a generated snippet has. He also sees AI lowering the barrier to contributing.

The post closes with practical advice: sponsor maintainers, contribute even small fixes, prefer maintained libraries over generated code for anything you'll ship, and use AI to contribute better rather than to avoid contributing. If your MAUI app depends on community libraries, it's a useful reminder of what that dependency is really worth.
