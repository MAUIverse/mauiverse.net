---
title: "Getting Contact Information with .NET MAUI"
link: https://www.telerik.com/blogs/getting-contact-information-net-maui
description: "Leomaris Reyes explains how to read device contacts in .NET MAUI so users can pull in a name, phone, or email instead of retyping it. She covers the per-platform setup and the gotchas you'll hit on Android, iOS, and Windows."
date: 2026-06-08
author: LeomarisReyes
contentType: article
---

Letting an app reuse contact data already on the device is a simple win for user experience. Leomaris Reyes shows how to access contacts in .NET MAUI using the `IContacts` API, from permissions to retrieval.

## What you'll learn

- **Per-platform permissions** — requesting `READ_CONTACTS` on Android (three ways) and adding `NSContactsUsageDescription` on iOS/Mac Catalyst, plus why Windows isn't supported
- **Using the IContacts API** — accessing the ready-made implementation through `Contacts.Default`
- **Avoiding namespace conflicts** — fully qualifying or aliasing `Microsoft.Maui.ApplicationModel.Communication.Contacts` on Apple platforms
- **Reading contact data** — retrieving the full list with `GetAllAsync()` and letting users choose one with `PickContactAsync()`
- **Platform differences** — cancellation token support and how `DisplayName` behaves across platforms

Read the full article for the code samples and the platform-specific details to handle contacts reliably.
