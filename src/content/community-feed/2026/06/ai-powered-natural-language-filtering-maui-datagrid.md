---
title: "AI-Powered Natural Language Filtering in .NET MAUI DataGrid"
link: https://www.syncfusion.com/blogs/post/natural-language-filtering-maui-grid
description: "Syncfusion shows how to replace rigid dropdown filters with conversational AI-powered filtering in the .NET MAUI DataGrid using Azure OpenAI. Users can type plain English queries like 'Female employees with rating ≥ 8 and salary > 5000' and get instant, accurate results."
date: 2026-06-11
author: syncfusion
contentType: article
---

This blog post from Syncfusion demonstrates how to integrate AI-powered natural language filtering into the .NET MAUI DataGrid, turning complex filter operations into simple conversational queries. Instead of navigating dropdowns and remembering column names, users just type what they want.

## What you'll learn

- Building an `AIFilterService` that converts natural language prompts into structured JSON filter plans via Azure OpenAI
- Configuring dependency injection for the AI service and ViewModel using a clean MVVM architecture
- Integrating Azure OpenAI with your .NET MAUI app — endpoints, deployment names, and API keys
- Creating models for AI-ready filtering including `FilterPlan`, `FilterNode`, and `Condition` types
- Building a ViewModel that connects user input, AI processing, and DataGrid refresh through a `FilterChanged` event
- Designing the UI with Syncfusion's ComboBox for prompt suggestions and one-click Execute/Reset actions
