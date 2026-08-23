---
title: "A Zero-Allocation DependencyProperty Source Generator for WPF/MAUI"
link: https://dev.to/kassyi/showoff-tired-of-dependencyproperty-boilerplate-i-built-a-zero-allocation-source-generator-for-4ik6
description: "kassyi introduces Kassyi.Generators.DependencyProperty, a source generator that turns 20 lines of DependencyProperty boilerplate into a single attribute across WPF, .NET MAUI, Avalonia, Uno, WinUI 3, and UWP. It's rewritten to be zero-allocation with compile-time type-safe callbacks."
date: 2026-08-18
author: kassyi
contentType: article
---

Registering a `DependencyProperty` (or MAUI `BindableProperty`) is tedious, repetitive, and easy to get subtly wrong. kassyi shares a source generator that collapses all of it into a single `[DependencyProperty<T>]` attribute — and rebuilt its synthesis engine to keep your IDE smooth.

## What you'll learn

- **One-line generation** — `[DependencyProperty<T>]` emits the property, backing field, and callback wiring, auto-hooking `On{Prop}Changed` methods
- **Framework agnostic** — the same attribute syntax targets WPF, .NET MAUI's `BindableProperty`, Avalonia's `DirectProperty`, Uno, WinUI 3, and UWP via a strategy pattern
- **Zero-allocation engine** — a `ref struct`-based `SourceWriter`/`ClassScope` design that eliminates Gen2 GC spikes and IDE stutter in large solutions
- **Compile-time type safety** — callback signature mismatches surface as Roslyn diagnostics (`DPG0001`) instead of silent null-callback runtime bugs
- **Modern C#** — generic attributes, target-typed `new(...)` expansion, and auto-synthesized XML docs

A fork of HavenDV's generator under the MIT license — read the full post for the before/after code and architecture notes.
