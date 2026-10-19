---
title: "Shiny.Net.Http — The Mobile Library Workhorse You Didn't Know You Needed"
link: https://allanritchie.com/blog/2026/10/shiny-net-http-workhorse/
description: "Allan Ritchie makes the case for Shiny.Net.Http, the transfer library that keeps uploads and downloads moving after iOS or Android suspends your app. Queue a file, survive restarts, and get progress — including a Lock Screen bar — without writing the retry loop yourself."
date: 2026-10-19
author: aritchie
contentType: article
---

`HttpClient` is fine until the user answers a text. Allan Ritchie walks through Shiny.Net.Http, the background transfer library he has maintained since a 2016 Xamarin plugin, and why handing the socket to the OS is the only way large uploads and downloads survive real phones.

## What you'll learn

- **Why `HttpClient` loses the file** — iOS suspends the process and the socket with it, and Android ends up in the same place under memory pressure, so a large upload restarts from zero on cellular
- **What the library already owns** — a persisted queue, pause/resume/cancel with `Range` requests, a metered-network policy, retries, bearer-token refresh through `OnAuthorizationFailed`, tus resumable uploads, and Azure Blob and S3 builders without vendor SDKs
- **The call that barely changed** — `AddHttpTransfers`, then `Queue` with an `HttpTransferRequest`, and an `HttpTransferDelegate` for completion. The app can be suspended a second later and the bytes keep moving
- **Progress when you want a screen** — `TransferProgress` with bytes, speed, percent, and ETA; `WatchTransfer` for one job; `HttpTransferMonitor` for a bindable list that is already in the right place after the process dies
- **Progress when the user is not in the app** — an iOS Live Activity or Android foreground-service notification via `AddTransferProgress`, with no Swift and no notification plumbing
- **Where it runs** — iOS, Android, Mac Catalyst, Windows, Linux, macOS, and Blazor, trimmable and AOT friendly

Read the post before you write another retry loop, then follow the docs if the library fits the files your app already moves.
