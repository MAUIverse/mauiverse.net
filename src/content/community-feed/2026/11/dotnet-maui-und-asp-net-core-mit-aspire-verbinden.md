---
title: ".NET MAUI und ASP.NET Core mit Aspire verbinden"
link: https://www.tsjdev-apps.de/maui-und-aspire/
description: "Sebastian Jensen zeigt Schritt für Schritt, wie sich eine .NET MAUI App und eine ASP.NET Core API über einen Aspire AppHost gemeinsam starten, per Service Discovery verbinden und mit zentraler Telemetrie untersuchen lassen. Das Beispiel TaskBoard hilft vor allem dann weiter, wenn eine langsame Anfrage im Client nicht zu erklären ist."
date: 2026-11-18
author: tsjdev-apps
contentType: article
---

Die Aufgabenliste aktualisiert sich erst nach mehreren Sekunden, die API läuft, und trotzdem ist unklar, wo die Zeit verloren geht. Genau für diese Fehlersuche setzt Sebastian Jensen Aspire ein, und zwar nicht für Release-Pakete, sondern für die lokale Entwicklung.

Als Beispiel dient **TaskBoard**, eine kleine Aufgabenverwaltung mit .NET 10, MVVM, einer Minimal API und SQLite. Ein AppHost startet API und native App gemeinsam, Service Discovery liefert dem Client die API-Adresse, und das Aspire Dashboard zeigt Logs, Traces und Metriken beider Seiten. Eine Diagnostics-Ansicht in der App löst gezielt normale, verzögerte, fehlgeschlagene und durch Timeouts abgebrochene Anfragen aus, damit sich das Zusammenspiel beobachten lässt.

Der Beitrag geht die Schritte der Reihe nach durch: Projektstruktur, Registrierung im AppHost, Anbindung über Service Discovery, native Telemetrie, bewusst konfigurierte Wiederholungsversuche und Timeouts, der Start unter Windows und danach Android mit Dev Tunnels. Ein eigener Abschnitt behandelt typische Probleme, etwa eine App, die nicht automatisch startet, oder fehlende Client-Telemetrie.

Sebastian ordnet den Aufwand ehrlich ein. Aspire ersetzt weder MAUI noch ASP.NET Core, der AppHost ist kein Produktionshost, und die MAUI-Integration ist noch eine Preview. Das Repository enthält den vollständigen Stand zum Nachbauen.
