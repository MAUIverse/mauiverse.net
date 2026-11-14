---
title: "Shell route templates in .NET MAUI 11"
link: https://tonyedwardspz.co.uk/blog/maui-11-shell-routing-parameters/
description: "Tony Edwards explains Shell route templates in .NET MAUI 11, which let you put parameters such as `property/{propertyId}` directly in a route instead of a query string. He also covers the supported syntax, the precedence rules and the limitations to know before you adopt them."
date: 2026-11-01
author: tonyedwardspz
contentType: article
---

If you've used ASP.NET Core or Blazor routing, Shell's new route templates will look familiar. Instead of registering `property` and navigating with `property?propertyId=549`, you can register `property/{propertyId}` and navigate to `//routes/property/549`. Pages still receive the value through `[QueryProperty]` or `IQueryAttributable`, so existing pages don't need to change.

The syntax goes further than a single required parameter. Tony shows optional parameters, default values, constraints such as `{id:int}` and `{id:guid}`, and catch-all segments. One detail to remember is that constraints only validate the segment; the value still arrives as a string, so your code parses it.

He then reads through the implementation in PR #35110. Registering a templated route adds it to a second dictionary of parsed templates, and the matcher makes two passes so literal routes like `property/featured` always win over `property/{id}`. Path parameters also take precedence over query parameters with the same name.

The caveats matter for planning: templates currently need absolute navigation, and optional, default and catch-all parameters must come last. It's a good read before you restructure your Shell routes.
