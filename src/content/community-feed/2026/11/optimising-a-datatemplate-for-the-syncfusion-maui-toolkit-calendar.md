---
title: "Optimising a DataTemplate for the Syncfusion MAUI Toolkit Calendar"
link: https://tonyedwardspz.co.uk/blog/optimising-my-syncfusion-calendar-implementation/
description: "Tony Edwards profiles a custom day template for the Syncfusion MAUI Toolkit calendar and cuts the time to open the picker by around 40 percent. It's a practical case study in why a template's cost multiplies, with measurements from a Pixel 8a."
date: 2026-11-10
author: tonyedwardspz
contentType: article
---

A simple-looking `DataTemplate` can get expensive when a control creates it over and over. Tony Edwards found that out with a date picker built around `SfCalendar`, where a custom day cell added a noticeable pause when the calendar opened. The calendar wasn't the problem. The amount of work his template asked of it was.

He starts by instrumenting the picker. Opening it created 126 day cells, each with four visual elements, so 504 elements, and each cell rendered about three times. In Release builds on a Pixel 8a, the median open time was about 499 ms with the custom template, against about 208 ms for a plain `Label` template.

Three changes follow. Flattening the cell from a `ContentView` and `Grid` to a single `Grid`, and creating the endpoint indicator only when needed, halved the element count and cut the median to about 324 ms. A render guard skips redundant renders, and reusing the day label avoids replacing it on month navigation. The post also covers the problems the changes introduced, such as adding a view after layout and avoiding stale accessibility text.

The conclusion is a good one for any templated control: asking the template to do less is often better than making it faster.
