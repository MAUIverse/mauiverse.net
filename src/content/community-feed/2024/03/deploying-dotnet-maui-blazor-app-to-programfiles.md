---
title: "Deploying .NET MAUI Blazor App to ProgramFiles"
link: https://mitchelsellers.com/blog/article/deploying-net-maui-blazor-app-to-programfiles
description: "Mitchel Sellers explains why .NET MAUI Blazor apps fail silently when deployed to secured folders like Program Files, and how a single environment variable fix resolves it. The root cause is WebView2's default temp folder location inside the application directory."
date: 2024-03-21
author: mitchelsellers
contentType: article
---

Deploying a .NET MAUI Blazor app as a simple exe works fine from the output directory — but move it to `C:\Program Files` and it shows a splash page with no errors and a totally unusable application. This post explains why and provides a quick fix.

## What you'll learn

- Why .NET MAUI Blazor creates a WebView2 folder in the application directory by default, and why that fails in secured folders
- How to override the storage location by setting the `WEBVIEW2_USER_DATA_FOLDER` environment variable in `MauiProgram.cs`
- How to use a compiler directive to only apply the fix on the Windows target
