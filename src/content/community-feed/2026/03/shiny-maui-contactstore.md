---
title: "Shiny.Maui.ContactStore — Device Contact Access That Does It All"
link: https://allanritchie.com/blog/2026/03/shiny-contactstore/
description: "Allan Ritchie introduces Shiny.Maui.ContactStore, a library that provides full CRUD contact management with LINQ queries that translate to native platform operations. It goes beyond what MAUI Essentials offers, with one unified API for both Android and iOS."
date: 2026-03-31
author: aritchie
contentType: article
---

MAUI Essentials handles contact picking well, but many apps need more — bulk queries, creating contacts, syncing from a backend, or searching across thousands of entries. Shiny.Maui.ContactStore fills that gap with full CRUD operations, a custom LINQ query provider that translates expressions to native queries, and a comprehensive contact model that covers everything both platforms support.

## What you'll learn

- How to set up `IContactStore` with a single line in `MauiProgram.cs` and inject it anywhere via DI
- Full CRUD operations: create, read, update, and delete contacts with a unified C# API
- The LINQ query provider: how `Contains`, `StartsWith`, `EndsWith`, and collection queries on phones/emails translate to native platform queries
- The complete `Contact` model: names, organization, phones, emails, addresses, dates, websites, relationships, and photos
- Built-in permission handling for `READ_CONTACTS`/`WRITE_CONTACTS` on Android and `CNContactStore` on iOS
- How the iOS Notes entitlement is handled gracefully at runtime without crashes
- A practical ViewModel example for building a searchable contact list
