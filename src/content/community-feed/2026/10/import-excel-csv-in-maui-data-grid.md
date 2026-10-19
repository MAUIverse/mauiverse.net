---
title: "How to Import Excel and CSV Data into a .NET MAUI DataGrid"
link: https://www.syncfusion.com/blogs/post/import-excel-csv-in-maui-data-grid
description: "Syncfusion shows how to pick an Excel or CSV file in a .NET MAUI app and land it in a DataGrid. The walkthrough separates file parsing from display, using FilePicker, XlsIO, and a small CSV parser that both end in a DataTable."
date: 2026-10-15
author: syncfusion
contentType: article
---

Users often arrive with a spreadsheet and want to search and edit it inside the app. Syncfusion's tutorial builds that import path for the .NET MAUI DataGrid: pick a file, turn it into a `DataTable`, and bind the grid.

## What you'll learn

- **The pipeline** — .NET MAUI `FilePicker` chooses the file, the extension picks a reader, and both `.xlsx` and `.csv` become one `DataTable`
- **Excel import** — Syncfusion XlsIO opens the first worksheet and `ExportDataTable` walks the used range, treating the first row as column names and dropping completely empty rows
- **CSV import** — headers from the first row, generated unique names when headers collide, and empty strings for missing cells
- **Binding the grid** — an Import button assigns `table.DefaultView` to `SfDataGrid.ItemsSource`, clears previous columns, and reports the row and column counts. Cancelling the picker returns quietly; a thrown error becomes an alert
- **What you can add once the data is in** — sorting, filtering, grouping, editing, and validation, shared by both file formats because they already share a binding

Read the post for the ViewModel shape and the GitHub sample, which includes the CSV line parser the article only sketches.
