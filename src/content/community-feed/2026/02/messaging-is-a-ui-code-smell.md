---
title: Messaging Is a UI Code Smell
link: https://goforgoldman.com/posts/ui-messaging/
description: A take on why “just show a message” can be a UI smell—plus guidance on choosing better, more contextual feedback patterns.
date: 2026-02-07
author: matt-goldman
---

When a UI leans too hard on generic “messages” (alerts, snackbars, banners) it can be a sign the experience isn’t doing enough of the communicating.

In **Messaging Is a UI Code Smell**, Matt Goldman makes the case that messaging is often a symptom—covering for missing affordances, unclear states, or feedback that should be embedded directly in the UI.

### Takeaways worth applying

- Prefer **contextual feedback** near the control/state that changed
- Use messages for the cases that truly deserve interruption (errors, critical warnings)
- Treat repeated “we should show a toast” ideas as a prompt to revisit the flow

