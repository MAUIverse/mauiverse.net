---
title: "Design PDF in .NET MAUI XAML with DrawnUI"
link: https://taublast.github.io/posts/DrawnPdf/
description: "Nick Kovalsky designs a PDF the same way as a .NET MAUI page: XAML, bindings, and hot reload, then prints it to real A4 with SkiaSharp. The post covers pagination between rows, waiting on async images, and a sample that builds a GitHub repo report."
date: 2026-10-15
author: taublast
contentType: article
---

A report, a statement, or a certificate often has to leave the app as a PDF. Nick Kovalsky shows how to define that document as a DrawnUI layout in XAML — the same bindings and controls as a screen — and render it onto paper with SkiaSharp.

## What you'll learn

- **Where this fits among the other options** — a document API such as Gerald Versluis's iText sample when the file is text and images, a band-based engine such as Pysar for invoices, and a drawn layout when the PDF should reuse the app's charts, maps, and custom paint
- **The report as a page** — a `SkiaLayout` column bound to a view model, no `UseCache` inside the report so text stays vectors, and `MauiXamlInflator` set to `SourceGen` so a long table does not inflate through reflection in a Debug build
- **Paper units** — portrait A4 at 150 dpi via DrawnUI's `Pdf` helper, margins in inches, and font sizes that print at a known point size
- **The export loop** — create the report off any `Canvas`, measure at page width with unlimited height, and warm up into an `SKPictureRecorder` until async images and map tiles report `ContentIsLoaded`
- **Page breaks that respect rows** — `Pdf.SplitStackToPages` splits a templated column between items, then each page is drawn into `SKDocument` in points (72 per inch) so the file is a real A4
- **Beyond MAUI** — the same report in code-behind works for Blazor or a plain .NET server with `DrawnUi.Net`

Open the post for the RepoReport sample, which fills a multi-page report from the GitHub API, and for the Racebox production report that started the technique.
