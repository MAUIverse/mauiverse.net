---
title: "Test .NET MAUI Preview SDKs Locally with global.json sdk.paths"
link: https://blog.verslu.is/maui/test-dotnet-maui-preview-sdk-locally/
description: "Gerald Versluis shows how the .NET 10 global.json sdk.paths feature lets you install a preview .NET SDK into a repo-local .dotnet/ folder, so you can try new .NET MAUI previews without touching your machine-wide setup. It's a scoped, reversible workflow — experiment in one repository, then delete the folder when you're done."
date: 2026-07-01
author: jfversluis
contentType: article
---

Trying a new .NET MAUI preview usually means installing an SDK and workloads globally — and then untangling your machine when something breaks. Gerald Versluis walks through a safer approach using the new `global.json` `sdk.paths` feature in .NET 10, which keeps preview SDKs local to a single repository.

## What you'll learn

- **The minimal setup:** installing a preview SDK into a `.dotnet/` folder with the official `dotnet-install` scripts and pointing your repo at it via `sdk.paths`
- **Keeping the `"$host$"` fallback** so the repo still uses your machine-wide SDK when appropriate
- **A team-friendly `global.json`** with `version`, `allowPrerelease`, `rollForward`, and a helpful `errorMessage`, plus a small install script for consistent setup
- **Clean teardown:** removing `.dotnet/` to undo the experiment, and why `.dotnet/` belongs in `.gitignore`
- **The important caveats:** you need a .NET 10+ host, workloads must be installed through the local `./.dotnet/dotnet` binary, and per-OS realities for MAUI platform workloads
- **The new `setup-local-sdk` skill** that gives GitHub Copilot a repeatable checklist for this workflow

If you like testing .NET MAUI previews early but hate breaking your main machine, this write-up gives you a boring-to-undo workflow. Read the full post for the exact scripts, `global.json` examples, and the official docs links.
