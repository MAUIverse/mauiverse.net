---
title: "Implementing SQLite Database Migrations in .NET MAUI"
link: https://shaunebu.com/Details/2b5bf48a-9b6e-4251-b73d-28274513aa07
description: "Jorge Perales Diaz explains why CreateTableAsync isn't a migration strategy and builds a versioned, transactional migration runner for SQLite in .NET MAUI. Covers schema and data migrations, skipped-version upgrades, failure handling, immutability, and startup integration that won't freeze the UI."
date: 2026-09-22
author: jpd21122012
contentType: article
---

Creating the initial SQLite database is easy; evolving it safely across app updates is where things break. Jorge Perales Diaz shows why `CreateTableAsync<T>()` only ever creates missing tables and builds a real migration system with schema versioning for .NET MAUI's offline-first realities.

## What you'll learn

- **Why migrations matter** — the existing-installation problem, and why table creation doesn't alter, backfill, or index an evolving schema
- **A versioned migration contract** — schema `PRAGMA user_version`, individual immutable migrations, and a runner that applies them incrementally inside transactions
- **Schema and data migrations** — adding columns and indexes, transforming existing rows, and validating the migration chain
- **Users skip versions** — handling installs that jump many app versions at once, preventing duplicate execution, and recovering from failures
- **Startup done right** — separating cache vs user-data databases, logging and timing migrations, running them at startup without freezing the UI, and testing every supported starting version

Read the full article for the migration runner, DI wiring, immutability rules, and the down-migration discussion.
