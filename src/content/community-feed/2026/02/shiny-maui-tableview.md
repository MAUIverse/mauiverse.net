---
title: "Introducing Shiny.Maui.TableView — Settings-Style Pages for .NET MAUI, Without the Platform Pain"
link: https://allanritchie.com/blog/2026/02/shiny-maui-tableview/
description: "Allan Ritchie introduces a settings-style TableView control built entirely on .NET MAUI layout primitives — no custom handlers or native renderers. It ships with 15 cell types, a three-level cascading style system, drag-and-drop reordering, and full MVVM data binding."
date: 2026-02-21
author: aritchie
contentType: article
---

Building a settings page in .NET MAUI is surprisingly painful. The built-in `TableView` is limited, and community options rely on native renderers that break across platform updates. Shiny.Maui.TableView takes a pure-MAUI approach — everything is built from `ContentView`, `ScrollView`, and layout primitives, giving identical behavior on iOS, Android, and Mac Catalyst.

## What you'll learn

- The 15 built-in cell types: SwitchCell, RadioCell, EntryCell, DatePickerCell, PickerCell, CommandCell, and more
- How the three-level cascading style system works: TableView defaults → section overrides → individual cell customization
- How to generate sections and cells dynamically from data with `ItemsSource` and `DataTemplate`
- How to enable drag-and-drop reordering with `UseDragSort` and handle reorder events
- How radio groups work with the `RadioCell.SelectedValue` attached property
- The full-page `PickerCell` for long lists with single or multi-select, auto-generated value text, and pick-to-close
