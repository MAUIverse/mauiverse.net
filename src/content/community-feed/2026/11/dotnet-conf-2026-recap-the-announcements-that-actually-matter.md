---
title: ".NET Conf 2026 Recap: The Announcements That Actually Matter"
link: https://www.igniscor.com/post/net-conf-2026
description: "Igniscor's recap of .NET Conf 2026 separates the headline features from the changes that affect real projects, with a mobile section on CoreCLR replacing Mono. The part worth reading closely is the support-lifecycle fine print, because MAUI doesn't follow the same calendar as .NET."
date: 2026-11-18
author: chuvakpavel
contentType: article
---

.NET Conf 2026 ran from 10 to 13 November and launched .NET 11. The recap covers the whole platform, so most of it is about the runtime, ASP.NET Core, EF Core and AI tooling, but the mobile section is the part for MAUI developers.

It explains that CoreCLR became the only runtime for MAUI on Android, iOS and Mac Catalyst. On Android it uses tiered compilation, while on iOS and Mac Catalyst it relies on precompiled code and an interpreter because Apple doesn't allow JIT. Native AOT remains opt-in and experimental on Android. The post also lists the inner-loop changes, including `dotnet run`, `test` and `watch` for Android and iOS projects and XAML Incremental Hot Reload. It notes that Microsoft hasn't published official startup or app-size numbers, so it recommends measuring your own baseline on physical devices.

The upgrade planning section covers the lifecycle fine print. .NET 11 and .NET 10 both reach end of support on 14 November 2028, but MAUI is supported for only six months after its successor ships. That puts MAUI 10 at 11 May 2027, so the post advises planning a yearly upgrade cycle for MAUI apps. It also includes a pre-migration checklist, including the removal of the Compatibility package.

The post ends with a pitch for Igniscor's services.
