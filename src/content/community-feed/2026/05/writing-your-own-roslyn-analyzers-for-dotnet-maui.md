---
title: "Writing Your Own Roslyn Analyzers for .NET MAUI"
link: https://shaunebu.com/PlkJY
description: "Jorge Perales Diaz shows how to turn your team's MAUI best practices into compile-time rules by building custom Roslyn analyzers. From enforcing MVVM naming to catching UI-thread blocking calls, this guide makes the compiler your automated architecture reviewer."
date: 2026-05-21
author: jpd21122012
contentType: article
---

Code reviews don't scale, and tribal knowledge slips through pull requests. This guide walks through building custom Roslyn analyzers that catch mobile-specific mistakes in .NET MAUI apps *before the app even runs* — turning architecture documents and PR comments into enforceable compiler rules.

## What you'll learn

- Why mobile concerns like UI-thread blocking, memory leaks, and platform-specific APIs make analyzers especially valuable in MAUI
- How Roslyn analyzers work — analyzing syntax trees and symbols, emitting diagnostics, and offering automatic code fixes
- Four worked examples: enforcing `ViewModel` naming, detecting blocking `Task.Result` calls, preventing repository access from Views, and enforcing `MainThread` usage
- How to write a `DiagnosticDescriptor`, register symbol and syntax-node actions, and unit test your analyzer
- How to ship analyzers as NuGet packages and enforce them in CI/CD with GitHub Actions or Azure DevOps

If you maintain a large or multi-team MAUI codebase, this is a practical blueprint for making the IDE enforce your standards automatically.
