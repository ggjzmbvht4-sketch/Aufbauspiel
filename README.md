# AUFBAU — Dein Unternehmen

Eine erste spielbare Wirtschafts-Tycoon-PWA. Keine externen Laufzeit-Abhängigkeiten, kein eigener Server, kein Account.

## Spielen

Du führst die Werk Eins GmbH. Spielzeit vergeht nur beim Wochenabschluss. Plane drei Produkte, kaufe Rohmaterial, stelle Personal ein und investiere in Maschinen. Freier Absatz wird direkt bezahlt; verbindliche Aufträge zwei Wochen nach Lieferung. Ein negativer Kontostand nach Wochenabschluss führt zur Insolvenz. Überstehe 104 Wochen und spiele anschließend weiter.

Rohmaterial kostet 4 € pro Einheit; pro Produkt fallen zusätzlich die ausgewiesenen Fertigungskosten an. Produziert wird in Produktreihenfolge. Verträge werden zuerst aus dem Lager bedient, anschließend der freie Markt. Überstunden erhöhen Kapazität und Löhne um 25 %, senken aber Zustand und Stimmung. Ungewartete Maschinen erhöhen Ausschuss und Ausfallrisiko. Kreditlinie: maximal 100.000 €, 0,2 % Wochenzins, manuelle Tilgung.

Das Wochenergebnis ist ein vereinfachtes operatives Spielergebnis: Verkaufserlöse abzüglich laufender Ausgaben. Es ist keine vollständige handelsrechtliche Gewinnrechnung (keine Abschreibung, Bilanzierung oder Steuerberechnung).

## Auf GitHub Pages veröffentlichen

Im mitgelieferten GitHub-Paket liegen index.html, app.js, engine.js, style.css und die PWA-Dateien direkt im Hauptverzeichnis.

1. ZIP entpacken und den **Inhalt** in ein neues GitHub-Repository hochladen.
2. Unter **Settings → Pages → Build and deployment** die Quelle **Deploy from a branch** auswählen.
3. Branch **main**, Verzeichnis **/(root)** auswählen und speichern.
4. Die von GitHub angezeigte HTTPS-Adresse öffnen. Alle Dateipfade sind relativ und funktionieren auch unter /repository-name/.
5. iPhone: Safari → Teilen → Zum Home-Bildschirm. Android: Browsermenü → App installieren / Zum Startbildschirm hinzufügen.

Das Sites-Quellrepository verwendet stattdessen `dist/` als statisches Ausgabeverzeichnis. Dort kann GitHub Pages alternativ mit einem Upload-Pages-Artifact-Workflow für `dist/` eingerichtet werden.

## Offline, Updates und Spielstände

Nach dem ersten vollständigen Laden werden die Spieldateien für Offlinebetrieb gecacht. Spielstände liegen in localStorage dieses Browsers und dieser Website. Privater Browsermodus oder Löschen der Websitedaten kann sie entfernen. Wechsel zwischen Sites und GitHub oder Geräten erfolgt über Export/Import. Sichere wichtige Durchläufe als JSON-Datei.

Bei Codeänderungen die CACHE-Versionsnummer in sw.js erhöhen. Der neue Worker wartet, bis alle alten Spiel-Tabs geschlossen sind; dann die App erneut öffnen. Bereits installierte Clients benötigen einmal Internet zum Herunterladen des Updates.

## Lokal entwickeln und prüfen

GitHub-Paket: `python3 -m http.server 8000`, anschließend http://localhost:8000 öffnen. JavaScript-Module benötigen HTTP; index.html nicht direkt per Doppelklick öffnen.

Tests: `npm test` (Node mit integriertem Test-Runner). Keine Installation erforderlich.

## Umfang Version 1.0

Produktion, Lager, Rohmaterial, Personal, Wartung, Preise, Marketing, Qualitätsmanagement, Marktfluktuation, Aufträge, Zahlungsziele, Kredite, Insolvenz, drei wiederkehrende Entscheidungsereignisse, lokale Speicherung und JSON-Export/Import.

Die Fabrik ist eine schematische SVG-Ansicht. Zusätzliche Maschinen werden sichtbar, Beschäftigte werden als Kennzahl verwaltet. Konkurrenzunternehmen, Forschung, mehrere Standorte und ein ausführliches Tutorial sind noch nicht enthalten. Smartphone-Installation und echter Offlinebetrieb müssen auf den jeweiligen Zielgeräten noch geprüft werden. Das Balancing ist ein erster Stand.
