---
title: "UI Automated Testing for .NET MAUI with MauiDevFlow — And How AI Wrote the Tests"
link: https://allanritchie.com/blog/2026/03/maui-ui-testing-mauidevflow/
description: "Allan Ritchie demonstrates how MauiDevFlow enables lightweight UI testing for .NET MAUI without Appium or WebDriver. He walks through building a full suite of 48 UI tests for a real app — with AutomationIds, a custom driver, and AI-generated test code."
date: 2026-03-31
author: aritchie
contentType: article
---

UI testing in .NET MAUI has historically been painful — Appium requires a Java server, platform-specific drivers, and complex setup. MauiDevFlow takes a different approach by embedding a lightweight agent directly in your MAUI app that exposes a CLI and REST API for inspecting and interacting with the live UI.

## What you'll learn

- How to set up MauiDevFlow with a single NuGet package and one line in `MauiProgram.cs`
- What the CLI can do: visual tree inspection, element queries, tap/fill interactions, screenshots, Shell navigation, and assertions
- How to add AutomationIds systematically across all your XAML pages
- How to build a `MauiDevFlowDriver` class that wraps the CLI for use in xUnit tests
- How to structure test fixtures with `IAsyncLifetime` and xUnit collection semantics
- What a full 48-test suite looks like across navigation, settings, ride times, maps, and cross-page flows
- How AI (Claude Code) analyzed XAML files and generated AutomationIds, test infrastructure, and test cases in a single session
