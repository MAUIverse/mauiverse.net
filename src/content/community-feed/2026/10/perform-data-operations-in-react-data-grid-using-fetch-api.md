---
title: "Perform Data Operations in React Data Grid Using Fetch API"
link: https://www.youtube.com/watch?v=W_dA5Szmzm8
description: "Syncfusion walks through server-side sorting, filtering, searching, and paging for the React Data Grid in this ~8 minute tutorial. Watch it for the Fetch API request shape and the Express handlers that apply those operations before the grid renders."
date: 2026-10-15
author: syncfusion
contentType: video
---

This Syncfusion tutorial is about the React Data Grid, wired to an Express backend. It shows how to push sorting, filtering, searching, and paging to the server and send a page of rows plus a total count back through the Fetch API.

## What you'll learn

- **The request contract** — extending the data-manager request with `sorted`, `where`, `search`, and `requiresCounts` so the grid can ask for a page and a total
- **Server-side filtering and search** — evaluating a single predicate, combining AND/OR groups, and search operators such as contains, equal, startswith, and endswith
- **Order of operations** — filter, then search, then count, then sort, then `skip`/`take`, returned in the shape the grid expects
- **The React side** — mapping grid state into that request inside `fetchGridData`, and updating it from the data-state-change handler with `allowSorting` and `allowFiltering` turned on
- **What the running sample shows** — search, column sort, and column filters hitting the Express server

Watch the full ~8 minute video for the file-by-file walkthrough and the GitHub sample linked in the description.
