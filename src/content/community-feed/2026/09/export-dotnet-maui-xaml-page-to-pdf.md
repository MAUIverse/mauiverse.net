---
title: "How to Export a .NET MAUI XAML Page to PDF"
link: https://www.youtube.com/watch?v=8iStaQk_IWo
description: "Iron Software shows how to turn a .NET MAUI XAML page into a PDF in this ~3 minute tutorial. IronPDF renders the page you already built, header included, so the screen and the document do not drift into two layouts."
date: 2026-09-21
author: iron-software
contentType: video
---

An inspection form, a quote, or a dashboard already lives as a XAML page. Iron Software's short tutorial exports that page to PDF with IronPDF, instead of maintaining a second report template that slowly stops matching the screen.

## What you'll learn

- **The call** — `ChromePdfRenderer.RenderContentPageToPdf<MainPage, App>()` from `IronPdf.Extensions.Maui`, which sits on top of the main IronPdf package. Both packages are required
- **What the PDF keeps** — fonts, colors, and layout from the current `ContentPage`, rendered through IronPDF's Chrome engine, plus an HTML header you set on `RenderingOptions`
- **Keeping the UI responsive** — the method returns a task, so the button awaits it while a heavier page renders
- **Where to save** — a file picker or a platform directory, not a hardcoded path, because the same code runs on Windows and macOS
- **Platform scope** — desktop and web. Mobile platforms are not supported

Watch the ~3 minute demo, then open the [written tutorial](https://ironpdf.com/blog/use-cases/maui-xaml-page-to-pdf/) linked from the video for the button wiring and the `PdfDocument` you can still edit before saving.
