---
title: "Build an AI-Powered Word Document Translator Using the .NET Word Library"
link: https://www.youtube.com/watch?v=IbQ4QBKL0ZE
description: "Syncfusion shows how to build a C# console app that reads a Word document with the Syncfusion .NET Word Library and translates it through Azure OpenAI. This ~10 minute tutorial covers paragraphs, tables, headers and footers, which is useful if your MAUI app generates or processes documents."
date: 2026-10-23
author: syncfusion
contentType: video
---

Translating a document is more than sending text to a model: you also have to preserve the layout. This short Syncfusion tutorial builds a console application that loads a `.docx` file with `Syncfusion.DocIO.NET.Core`, sends its text to Azure OpenAI, and saves the result as a new Word document.

The walkthrough follows the structure of the document itself. It uses a system prompt that asks the model to keep placeholders, numbers, dates and currency values unchanged, and to return only the translated text. The code then walks each section and translates paragraphs, tables (including nested ones), content controls, and the odd-page headers and footers.

It's a console project rather than a MAUI one, so it suits developers who want the document-processing logic that a MAUI front end or backend could reuse. The presenter uses an Adventure Works product sheet as the sample input, and a link to the working example is in the video description.
