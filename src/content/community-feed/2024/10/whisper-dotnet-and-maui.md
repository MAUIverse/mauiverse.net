---
title: "MAUI - Failed to load native whisper library"
link: https://tonyedwardspz.co.uk/blog/whisper-dotnet-and-maui/
description: This troubleshooting post breaks down a native runtime issue when using Whisper.net with .NET MAUI on Apple silicon. Tony documents the practical fix path, including runtime alignment and rebuilding native dependencies for `arm64`.
date: 2024-10-09
author: tonyedwardspz
contentType: article
---

If you've hit native interop friction in MAUI, this is the kind of field-tested diagnostic write-up that saves time.

## What you'll learn

- Why "Failed to load native whisper library" can appear on M-series Macs
- How runtime targeting and native artifacts affect Whisper integration
- The concrete steps to clone, align, and rebuild required native components
- What to verify in your project setup before retrying execution

## Why read it

This post turns a vague runtime error into a repeatable recovery process you can apply to Whisper today and similar native packages later.
