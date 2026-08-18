---
title: "Building a Custom Middleware Pipeline in .NET MAUI"
link: https://shaunebu.com/Details/c0dbff65-10a3-412e-abd0-27c9fa814c8d
description: "Jorge Perales Diaz brings the ASP.NET Core middleware idea to .NET MAUI, building a lightweight pipeline that wraps operations with logging, validation, auth, connectivity, and caching. It's a DI-friendly, testable way to stop scattering infrastructure code across your ViewModels and services."
date: 2026-08-17
author: jpd21122012
contentType: article
---

Middleware usually makes developers think of ASP.NET Core, but the same pattern fits any app that runs operations through predictable stages. Jorge Perales Diaz shows how to build a custom, HTTP-free middleware pipeline for .NET MAUI that centralizes cross-cutting concerns without bloating every ViewModel.

## What you'll learn

- **Why a pipeline** — how logging, validation, connectivity, and caching spread through ViewModels and services without a shared abstraction
- **The core delegate** — a middleware that receives a context and a `next` callback, running code before and after to create nested execution
- **Ordering that matters** — correlation, exception handling, logging, auth/validation, and caching placed deliberately around the terminal operation
- **Multiple pipelines** — separate API, navigation, and payment pipelines built from focused, reusable components
- **Pitfalls to avoid** — turning middleware into business logic, over-applying it, ignoring order, swallowing exceptions, and coupling middleware to pages

Read the full article for the context type, pipeline builder, and practical performance tips.
