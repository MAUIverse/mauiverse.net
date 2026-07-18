---
title: "Share Functionality in Your .NET MAUI Apps"
link: https://www.telerik.com/blogs/share-functionality-net-maui-apps
description: "Leomaris Reyes shows how to open the native share sheet in .NET MAUI to share text, links, and files across iOS, Android, and Windows. She also covers the security and presentation details that trip developers up."
date: 2026-05-26
author: LeomarisReyes
contentType: article
---

A good share experience lets users pass along receipts, links, and files without friction. Leomaris Reyes walks through the `IShare` API in .NET MAUI and the platform specifics you need to get right.

## What you'll learn

- **The IShare API** — using `Share.Default` to open the system share sheet
- **What you can share** — text with `ShareTextRequest`, links via its `Uri` property, single files with `ShareFileRequest`, and multiple files with `ShareMultipleFilesRequest`
- **Platform setup** — the photo library permissions required on iOS and Mac Catalyst
- **Secure file sharing on Android** — configuring the FileProvider path file so you don't accidentally expose private data
- **iPadOS popovers** — using `PresentationSourceBounds` to position the share popover correctly on tablets

Read the full article for the code samples and the platform considerations behind a complete, secure sharing experience.
