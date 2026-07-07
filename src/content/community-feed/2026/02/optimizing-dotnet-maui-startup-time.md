---
title: "Optimizing .NET MAUI Startup Time"
link: https://shaunebu.com/EIMq6
description: "Jorge Perales Diaz breaks down practical, production-ready strategies to slash .NET MAUI startup time — from IL trimming and DI tuning to lazy initialization and compiled bindings. Each technique comes with a realistic estimate of the startup improvement it delivers."
date: 2026-02-18
author: jpd21122012
contentType: article
---

Startup time is the first performance impression your app makes, and on mobile, milliseconds matter. This guide focuses on minimizing the work done before the first frame renders, with concrete, measurable optimizations rather than vague advice.

## What you'll learn

- What actually happens during MAUI startup and where the time goes
- How to enable IL trimming safely (trim modes, and how to protect reflection-heavy libraries)
- Why heavy work in `App.xaml.cs` hurts, and how to defer it with async lifecycle methods
- Lazy initialization patterns for services and ViewModels that can cut startup 20–40%
- Reducing dependency-injection cost, using AOT trade-offs wisely, simplifying XAML, and enabling compiled bindings with `x:DataType`
- An estimated impact table for each optimization, plus a splash-screen deferral strategy and how to measure before/after

A focused, no-fluff checklist for making your MAUI app feel instant.
