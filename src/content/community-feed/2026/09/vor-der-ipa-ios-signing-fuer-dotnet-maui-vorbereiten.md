---
title: "Vor der IPA: iOS Signing für .NET MAUI vorbereiten"
link: https://www.tsjdev-apps.de/vor-der-ipa-ios-signing/
description: "Sebastian Jensen bereitet alle Apple-Ressourcen vor, die ein automatisierter .NET MAUI iOS Build braucht — App Identifier, Distribution Certificate, .p12-Export, Provisioning Profile und App Store Connect API Key. Die eigentliche Herausforderung bei iOS-CI liegt nicht im Workflow, sondern in dieser Vorbereitung."
date: 2026-09-02
author: tsjdev-apps
contentType: article
---

Bei Android beginnt eine CI/CD-Pipeline mit einem Keystore — bei iOS müssen wir deutlich früher anfangen. Bevor GitHub Actions eine gültige `.ipa` erzeugen kann, müssen die Voraussetzungen für das iOS Code Signing stimmen. Sebastian Jensen erklärt jede Apple-Ressource einzeln und zeigt, wie sie zusammenpassen müssen.

## What you'll learn

- **Die Bausteine verstehen** — Bundle ID/App ID, Certificate Signing Request, Apple Distribution Certificate, `.p12`, Provisioning Profile und App Store Connect API Key
- **App Identifier anlegen** — die Bundle ID der .csproj prüfen und einen passenden Identifier im Apple Developer Portal registrieren
- **Zertifikat erzeugen und exportieren** — CSR über die Schlüsselbundverwaltung erstellen, das Distribution Certificate anfordern und mit Private Key als `.p12` exportieren
- **Provisioning Profile** — App ID, Distribution-Methode und Zertifikat korrekt miteinander verbinden
- **API Key für CI** — `.p8`, Key ID und Issuer ID zur Authentifizierung gegenüber App Store Connect (nicht zum Signieren) und eine abschließende Checkliste

Lies den vollständigen Beitrag für die einzelnen Schritte mit Screenshots — der eigentliche GitHub-Actions-Workflow folgt in einem separaten Beitrag.
