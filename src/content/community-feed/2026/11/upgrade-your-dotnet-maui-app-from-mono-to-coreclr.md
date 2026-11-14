---
title: "Upgrade Your .NET MAUI App from Mono to CoreCLR"
link: https://www.horus.com.uy/mono-to-coreclr-upgrade
description: "Horus Software collects the Mono versus CoreCLR measurements it ran on its own open-source MAUI app, alongside a free agent skill, coreclr-fit, that scores how much work the move to .NET 11 would be. It's a useful reference if you're deciding whether to upgrade and want numbers from physical Android devices."
date: 2026-11-11
author: HorusSoftwareUY
contentType: article
---

With .NET 11, CoreCLR is the only runtime for .NET MAUI, and Mono stays behind on .NET 10. Horus Software's page makes the case for planning the move, and the strongest part is its benchmarking. They tested their open-source Material Design Controls app on physical Android phones and published each round with methodology and a sample branch to clone.

The rounds cover startup, loading 10,000 records and opening a real XAML screen. With both builds optimized, startup was 1.85 s on Mono and 1.38 s on CoreCLR. Cold screen opens were around 47% faster, though that figure also includes the XAML Source Generator and RC 2. They're upfront that the app itself was the bigger bottleneck than the runtime, so optimizing your app first is still worth doing. The benchmarks use .NET 11 Preview 5 on Android, and a re-measure on the release build is in progress.

The page also introduces **coreclr-fit**, a Markdown skill that works with agents such as Claude Code, Copilot, Cursor and Codex. It reads your repository, scores the effort and likely gain, and writes a shareable report. The rest describes Horus's paid upgrade and performance services, so it's a vendor page, but the skill and benchmark write-ups are useful whether or not you hire anyone.
