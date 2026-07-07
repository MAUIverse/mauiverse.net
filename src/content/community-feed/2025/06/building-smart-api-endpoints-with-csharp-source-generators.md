---
title: "Building Smart API Endpoints with C# Source Generators"
link: https://shaunebu.com/kfUFn
description: "Jorge Perales Diaz shows how he built AutoApiGenerator, a Roslyn source generator that emits full REST CRUD endpoints at compile-time from a single [AutoApi] attribute. It eliminates ~90% of controller boilerplate while staying type-safe, EF Core-ready, and fully customizable via partial classes."
date: 2025-06-26
author: jpd21122012
contentType: article
---

Exposing CRUD endpoints for every model means writing the same boilerplate over and over. This post uses Roslyn source generators to auto-generate complete REST endpoints at compile-time — no runtime magic, no repetitive controllers — through a tool the author built called **AutoApiGenerator**.

## What you'll learn

- How the `[AutoApi]` attribute drives generation, including `RoutePrefix` and `DbContextType` options
- The generator pipeline: discovering annotated entities, analyzing their syntax/semantic models, and emitting a `.gen.cs` base plus a partial `.cs` for custom logic
- Wiring in EF Core for async, DI-backed CRUD with ID-based `GET/{id}`, `PUT`, and `DELETE`
- Extending or overriding generated behavior cleanly via partial classes
- A comparison of manual controllers, hand-coded minimal APIs, and the generator across boilerplate, customizability, type safety, and compile-time guarantees

The full source is on GitHub, so it's a great read if you want to learn practical source-generator techniques you can adapt.
