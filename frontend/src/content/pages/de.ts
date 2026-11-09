import type { Pages } from './types';

const de: Pages = {
  home: {
    reassure: 'Online, kostenlos, ohne Anmeldung, ohne Installation — Fotos werden direkt im Browser gelesen und bereinigt und nie auf einen Server hochgeladen.',
    ctaTools: 'Alle Tools ansehen',
    sources: {
      label: 'Liest und entfernt Metadaten aus Bildern von',
      note: 'Produktnamen nennen nur die Bildquelle; AI Label Remover ist mit diesen Unternehmen nicht verbunden.',
    },
    start: {
      title: 'Starten Sie mit Ihrer Datei',
      lead: 'Wählen Sie die Aufgabe, die Sie erledigen möchten — jedes Tool hat die Ablagefläche oben auf der Seite.',
      badge: 'Empfohlen',
      open: 'Tool öffnen',
    },
    nav: {
      remove: 'Metadaten entfernen',
      check: 'Ansehen & prüfen',
      learn: 'Wissen',
      viewer: 'Foto-Metadaten ansehen',
      aiCheck: 'KI-Bild erkennen',
      whatIs: 'Was sind Metadaten?',
    },
    learn: {
      what: {
        title: 'Was sind Metadaten?',
        paragraphs: [
          'Metadaten sind „Daten über Daten“: Notizen in einer Bilddatei, die im Bild selbst nie zu sehen sind. Kameras, Smartphones, Bildbearbeitungen und KI-Bildgeneratoren schreiben sie automatisch hinein – meist ohne Hinweis.',
          'Bei Fotos lassen sich Metadaten in fünf große Gruppen einteilen. Jede beantwortet eine andere Frage über das Bild – und über die Person, die es aufgenommen oder erstellt hat.',
        ],
        types: [
          { name: 'Beschreibend', text: 'Titel, Bildunterschrift, Stichwörter, Namen der abgebildeten Personen.', example: 'IPTC Caption, XMP dc:title' },
          { name: 'Technisch', text: 'Kamerahersteller und -modell, Objektiv, Blende, Belichtungszeit, ISO, Seriennummer.', example: 'EXIF Make, Model, BodySerialNumber' },
          { name: 'Ort & Zeit', text: 'GPS-Koordinaten, Höhe, Aufnahmedatum und Zeitzone.', example: 'EXIF GPSLatitude, DateTimeOriginal' },
          { name: 'Rechte & Verwaltung', text: 'Urheber, Eigentümer, Copyright, zuletzt verwendete Software.', example: 'EXIF Artist, Copyright, Software' },
          { name: 'Herkunft & KI', text: 'Content Credentials, „Mit KI erstellt“-Labels, Prompts und Workflows.', example: 'C2PA manifest, IPTC DigitalSourceType' },
        ],
        synonyms:
          'Für dieselbe Aufgabe gibt es viele Namen – „Metadaten-Entferner“, „EXIF-Entferner“, „Metadaten löschen“, „Fotoinfos entfernen“. Gemeint ist immer, die versteckten Notizen aus der Datei zu nehmen, ohne das Bild zu verändern. Ein „Metadaten-Viewer“, „-Reader“ oder „-Checker“ zeigt dagegen, was in der Datei steckt. AI Label Remover kann beides.',
      },
      why: {
        title: 'Warum Metadaten vor dem Teilen ansehen und entfernen?',
        paragraphs: [
          'Ein einzelnes Metadatenfeld ist meist harmlos, zusammen verraten sie aber viel über Sie. Ein zu Hause aufgenommenes Foto auf einem Kleinanzeigenportal kann GPS-Koordinaten mit wenigen Metern Genauigkeit enthalten; per E-Mail oder Cloud-Link verschickte Bilder behalten alles, was die Kamera geschrieben hat. Lesen Sie, [wie GPS in Fotos Ihre Wohnadresse verraten kann](remove-gps-location-from-photos).',
          'Bei mit KI erstellten oder bearbeiteten Bildern entscheiden Metadaten außerdem, ob eine Plattform ein „Mit KI erstellt“-Label anzeigt – und sie können Ihren vollständigen Prompt offenlegen.',
        ],
        bullets: [
          'Wohnort, Arbeitsplatz oder Reisewege werden über GPS-Koordinaten sichtbar.',
          'Viele Fotos lassen sich über Seriennummer oder Besitzernamen einer Person zuordnen.',
          'Prompts, Seeds, Modelle und Workflows, die privat bleiben sollten, werden offengelegt.',
          'Eine Plattform vergibt wegen angehängter C2PA- oder IPTC-Daten ein KI-Label.',
        ],
      },
      standards: {
        title: 'Gängige Metadaten-Standards bei Fotos',
        lead: 'Eine Bilddatei kann gleichzeitig mehrere Metadaten-„Fächer“ enthalten, die jeweils einem anderen Standard folgen. AI Label Remover liest und entfernt alle unten genannten.',
        items: [
          { name: 'EXIF', text: 'Von Kameras und Smartphones geschrieben: Belichtung, Gerät, Zeitstempel, GPS, Vorschaubilder. [Mehr über EXIF](what-is-exif-data).' },
          { name: 'XMP', text: 'Adobes XML-Format für Bearbeitungsverlauf, Bewertungen, Stichwörter und viele KI-bezogene Eigenschaften.' },
          { name: 'IPTC', text: 'Der Standard der Nachrichtenbranche: Bildunterschrift, Urheber, Copyright und das Feld [DigitalSourceType](iptc-digitalsourcetype-ai), das KI-Bilder kennzeichnet.' },
          { name: 'C2PA', text: 'Kryptografisch signierte Content Credentials, die festhalten, wie eine Datei erstellt und bearbeitet wurde. [Was ist C2PA](what-is-c2pa-content-credentials).' },
          { name: 'PNG text', text: 'tEXt-, iTXt- und zTXt-Chunks, in denen [Stable Diffusion und ComfyUI](remove-stable-diffusion-comfyui-metadata) Prompts und Workflows speichern.' },
        ],
      },
    },
    security: {
      title: 'Ihre Fotos bleiben sicher',
      lead: 'Bei jedem Tool für persönliche Dateien lautet die erste Frage: „Wohin gehen meine Fotos?“ Die Antwort von AI Label Remover: nirgendwohin.',
      items: [
        { title: '100 % auf Ihrem Gerät', text: 'Lesen und Bereinigen laufen in einem Web Worker in Ihrem Browser-Tab. Kein Server erhält jemals Ihre Dateien.' },
        { title: 'Keine Speicherung, kein KI-Training', text: 'Da Fotos nirgendwohin gesendet werden, gibt es keine Kopie, die gespeichert, geleakt oder zum Trainieren eines Modells genutzt werden könnte.' },
        { title: 'Funktioniert offline', text: 'Seite laden, WLAN ausschalten und eine Datei bereinigen – es funktioniert trotzdem. Der Netzwerk-Tab der DevTools zeigt keine Bilddaten, die das Gerät verlassen.' },
        { title: 'Kein Konto, kein Tracking', text: 'Keine Anmeldung, keine Analyse, keine Werbung, keine Drittanbieter-Pixel. Die Seite merkt sich nur die gewählte Sprache und das Farbschema.' },
      ],
    },
    faq: [
      { q: 'Was ist der Unterschied zwischen EXIF und Metadaten?', a: 'EXIF ist eine Art von Metadaten – die, die Kameras und Smartphones schreiben. „Metadaten“ ist der Oberbegriff und umfasst auch XMP, IPTC, C2PA und PNG-Text-Chunks. Siehe [was EXIF-Daten sind](what-is-exif-data).' },
      { q: 'Können Metadaten zeigen, wo ein Foto aufgenommen wurde?', a: 'Ja, wenn das Bild GPS-Tags enthält. Smartphones speichern meist Breite, Länge und Höhe, wenn die Kamera auf den Standort zugreifen darf. Der [EXIF-Entferner](remove-exif-data) löscht diese Tags, ohne die Bildqualität anzutasten.' },
      { q: 'Wie entferne ich KI-Metadaten aus einem Bild?', a: 'Ziehen Sie das Bild in das Feld oben auf dieser Seite und klicken Sie auf „Alle Metadaten entfernen“, oder nutzen Sie den [KI-Tag-Cleaner](ai-tag-cleaner), um C2PA-, IPTC- und Prompt-Daten vorher anzusehen.' },
      { q: 'Ist es sicher, meine Fotos hier hochzuladen?', a: 'Ihre Fotos werden gar nicht hochgeladen. AI Label Remover öffnet Dateien in Ihrem Browser, verarbeitet sie im Speicher des Tabs und speichert die saubere Kopie direkt auf Ihrem Gerät. Sobald die Seite geladen ist, funktioniert sie auch offline.' },
    ],
  },
  labels: {
    tools: 'Weitere Metadaten-Werkzeuge',
    relatedTools: 'Passende Werkzeuge dafür',
    homeTitle: 'Werkzeuge für jeden Zweck',
    homeLead: 'Jede Seite konzentriert sich auf eine Aufgabe – mit dem Werkzeug direkt oben.',
    formats: 'Was entfernt wird und was bleibt',
    contact: 'Kontakt',
    contactText: 'Fragen, Fehler oder eine Datei, die nicht richtig bereinigt wird? Schreib an',
    updated: 'Aktualisiert am {date}',
  },
  tools: {
    'ai-tag-cleaner': {
      metaTitle: 'AI Tag Cleaner – KI-Tags aus Bild-Metadaten entfernen',
      description: 'KI-Tags aus Bildern entfernen: IPTC „KI-generiert“, C2PA, Generatornamen in XMP und Prompts. Verlustfrei, kostenlos, direkt im Browser, ohne Upload.',
      navLabel: 'KI-Tag-Cleaner',
      h1: 'AI Tag Cleaner – KI-Tags aus Bildern entfernen',
      lead: 'KI-Generatoren und KI-gestützte Editoren markieren die Dateien, die sie bearbeiten: ein Quelltyp „KI-generiert“, ein signierter C2PA-Eintrag, der App-Name, manchmal der komplette Prompt. Ziehen Sie ein Bild hierher, sehen Sie jeden KI-Tag darin und entfernen Sie alle, ohne ein einziges Pixel neu zu kodieren.',
      sections: [
        {
          heading: 'Was als KI-Tag zählt',
          paragraphs: [
            'Ein KI-Tag ist jedes Feld in der Datei, das sagt oder andeutet, dass KI im Spiel war. Sie verteilen sich auf mehrere Metadaten-Standards zugleich – deshalb reicht es selten, ein Feld von Hand zu löschen:',
          ],
          bullets: [
            '[DigitalSourceType](iptc-digitalsourcetype-ai)-Werte in IPTC und XMP wie trainedAlgorithmicMedia oder compositeWithTrainedAlgorithmicMedia.',
            'Aktionen in [C2PA Content Credentials](what-is-c2pa-content-credentials), die generative Schritte markieren – geschrieben von ChatGPT, Firefly, Photoshop und anderen.',
            'Software- und CreatorTool-Felder mit dem Namen des Generators sowie XMP-Verlaufseinträge aus KI-Bearbeitungen.',
            'Prompt, Seed und Modell in PNG-Chunks von [Stable Diffusion und ComfyUI](remove-stable-diffusion-comfyui-metadata).',
          ],
        },
        {
          heading: 'So arbeitet der KI-Tag-Cleaner',
          paragraphs: [
            'AI Label Remover liest die Dateistruktur direkt in Ihrem Browser. Jeder KI-Tag wird mit dem genauen Feld angezeigt, aus dem er stammt, und die Datei erhält ein Urteil – „KI-Spuren gefunden“, „Einen zweiten Blick wert“ oder „Keine KI-Spuren“ –, bevor irgendetwas geändert wird.',
            '„Alle Metadaten entfernen“ schneidet die Blöcke heraus, in denen die Tags stecken: XMP, IPTC, EXIF, den C2PA-Manifestspeicher und PNG-Text-Chunks. Die komprimierten Bilddaten werden Byte für Byte kopiert, und die bereinigte Kopie wird erneut gelesen, damit Sie sehen, dass kein KI-Tag übrig ist.',
          ],
        },
        {
          heading: 'Welches Tool welche Tags hinterlässt',
          paragraphs: [
            'Bilder aus ChatGPT und Gemini kommen mit C2PA-Einträgen; Firefly und die generative Füllung in Photoshop ergänzen C2PA und DigitalSourceType; Midjourney schreibt beschreibendes XMP; Stable-Diffusion-Oberflächen speichern alle Einstellungen im PNG. [Welche Metadaten KI-Bildgeneratoren hinzufügen](what-metadata-ai-image-generators-add) geht sie einzeln durch.',
          ],
        },
        {
          heading: 'Was ein KI-Tag-Cleaner nicht kann',
          paragraphs: [
            'Die Bereinigung betrifft nur Metadaten. [Unsichtbare Wasserzeichen wie SynthID](synthid-invisible-ai-watermarks) stecken in den Pixeln und bleiben erhalten, und Plattformen können eigene Klassifikatoren einsetzen. Das Entfernen von Tags dient dem Datenschutz und der Korrektur falscher Labels bei echten Fotos – ist ein Bild KI-generiert und realistisch, verlangen die Plattformregeln in der Regel trotzdem eine Kennzeichnung.',
          ],
        },
      ],
      faqHeading: 'Fragen zum KI-Tag-Cleaner',
      faq: [
        { q: 'Ist ein KI-Tag dasselbe wie ein KI-Label?', a: 'Nicht ganz. Der Tag sind Daten in der Datei; das Label ist das, was eine Plattform anzeigt, etwa „KI-Info“ auf Instagram. Oft entsteht das Label aus dem Tag. Wie Sie das bei echten Fotos vermeiden, zeigt [No AI Tag](no-ai-tag).' },
        { q: 'Kann ich nur die KI-Tags entfernen und den Rest behalten?', a: 'Der Cleaner entfernt ganze Metadatenblöcke statt einzelner Felder, weil KI-Tags über mehrere davon verteilt sind. Drehung, ICC-Farbprofil und Pixelmaße bleiben immer erhalten, das Bild wird also genauso angezeigt wie vorher.' },
        { q: 'Verringert das Entfernen von KI-Tags die Qualität?', a: 'Nein. Nichts wird neu kodiert, nur Metadaten werden entfernt. Mehr dazu unter [verlustfrei entfernen](remove-metadata-without-losing-quality).' },
        { q: 'Welche Formate werden unterstützt?', a: 'JPG, PNG, WebP, GIF, HEIC/HEIF und AVIF – bis zu 50 Dateien auf einmal, je bis zu 25 MB. Prompts in PNG-Dateien entfernt auch der [PNG-Metadaten-Entferner](png-metadata-remover).' },
        { q: 'Entfernt das die Metadaten von ChatGPT- oder Gemini-Bildern?', a: 'Es entfernt die C2PA Content Credentials und IPTC-Felder, die diese Dienste schreiben. Google bettet zusätzlich ein SynthID-Wasserzeichen in die Pixel ein, das kein Metadaten-Werkzeug entfernen kann. Details in [Metadaten von ChatGPT- und Gemini-Bildern](chatgpt-gemini-image-metadata).' },
        { q: 'Kann ich den Prompt vor dem Löschen sehen?', a: 'Ja. Der Tab „Rohe Metadaten“ zeigt Prompts, Workflows und Generatornamen wortwörtlich, sodass du vor dem Bereinigen alles kopieren kannst, was du behalten willst.' },
      ],
      related: ['iptc-digitalsourcetype-ai', 'what-metadata-ai-image-generators-add', 'how-to-check-if-image-is-ai-generated'],
      updated: '2026-11-05',
    },
    'no-ai-tag': {
      metaTitle: 'No AI Tag – Echte Fotos ohne „KI-Info“-Label posten',
      description: 'Ihr echtes Foto trägt „KI-Info“? Entfernen Sie die C2PA- und IPTC-Daten dahinter und posten Sie ohne KI-Tag. Verlustfrei, kostenlos, direkt im Browser.',
      navLabel: 'No AI Tag',
      h1: 'No AI Tag – echte Fotos ohne KI-Tag',
      lead: 'Schon eine kleine generative Korrektur in Photoshop oder einer Handy-App kann reichen, damit Instagram, Facebook oder Threads ein echtes Foto mit „KI-Info“ versehen. Ziehen Sie die Datei hierher, sehen Sie, welche Daten das Label auslösen, und teilen Sie eine saubere Kopie ohne KI-Tag in den Metadaten.',
      sections: [
        {
          heading: 'Warum ein echtes Foto einen KI-Tag bekommt',
          paragraphs: [
            'Plattformen lesen Herkunftsdaten, die Bildbearbeitungen an die Datei hängen. [Warum echte Fotos ein „KI-Info“-Label bekommen](made-with-ai-label) erklärt die Details; typische Auslöser sind:',
          ],
          bullets: [
            'Ein C2PA-Manifest, das einen generativen Schritt wie generative Füllung, KI-Radieren oder KI-Erweitern festhält.',
            'Ein [DigitalSourceType](iptc-digitalsourcetype-ai)-Wert in IPTC oder XMP, laut dem das Bild mit KI zusammengesetzt wurde.',
            'Content Credentials, die eine Bearbeitungs-App beim Export standardmäßig hinzufügt.',
          ],
        },
        {
          heading: 'So posten Sie ohne KI-Tag',
          paragraphs: ['Es dauert weniger als eine Minute, und nichts verlässt Ihr Gerät:'],
          bullets: [
            'Ziehen Sie das bearbeitete Foto in das Feld oben auf dieser Seite.',
            'Lesen Sie das Urteil und die Felder dahinter – der Bericht nennt die genaue C2PA-Aktion oder den IPTC-Wert.',
            'Klicken Sie auf „Alle Metadaten entfernen“ und speichern Sie die saubere Kopie.',
            'Laden Sie die saubere Kopie hoch, nicht den ursprünglichen Export.',
          ],
        },
        {
          heading: 'Den Tag an der Quelle verhindern',
          paragraphs: [
            'Wenn Sie oft bearbeiten, [deaktivieren Sie Content Credentials in Photoshop und Lightroom](turn-off-content-credentials-photoshop-lightroom), damit sie gar nicht erst geschrieben werden. [Welche Plattformen KI-Bilder kennzeichnen](which-platforms-label-ai-images) fasst zusammen, was Meta, TikTok, YouTube und andere auslesen.',
          ],
        },
        {
          heading: 'Was „No AI Tag“ versprechen kann – und was nicht',
          paragraphs: [
            'Das Entfernen der Metadaten beseitigt den Grund in der Datei, der bei den meisten bearbeiteten Fotos die Ursache ist. [Pixel-Wasserzeichen wie SynthID](synthid-invisible-ai-watermarks) bleiben jedoch, und eine Plattform kann trotzdem anhand eigener Erkennung kennzeichnen oder eine Selbstauskunft verlangen. Diese Seite ist für echte Fotos mit kleinen Korrekturen gedacht: Ist ein Bild KI-generiert und könnte täuschen, kennzeichnen Sie es.',
          ],
        },
      ],
      faqHeading: 'Fragen zu No AI Tag',
      faq: [
        { q: 'Entfernt das die „KI-Info“ von einem bereits veröffentlichten Beitrag?', a: 'Nein. Das Label gehört zum Beitrag auf der Plattform. Löschen oder archivieren Sie den Beitrag, bereinigen Sie die Datei hier und laden Sie die saubere Kopie neu hoch.' },
        { q: 'Ist garantiert, dass kein KI-Tag erscheint?', a: 'Nein. Die Metadaten, die Plattformen lesen, werden entfernt, sie können aber andere Signale nutzen. Bei den meisten bearbeiteten Fotos sind die Metadaten der Grund für den Tag.' },
        { q: 'Funktioniert das mit iPhone- und Android-Fotos?', a: 'Ja. HEIC vom iPhone und JPG von Android werden ohne Umwandlung bereinigt. Es gibt außerdem einen eigenen [HEIC-Metadaten-Entferner](heic-metadata-remover).' },
        { q: 'Und die KI-Tags eines komplett KI-generierten Bildes?', a: 'Der [AI Tag Cleaner](ai-tag-cleaner) zeigt und entfernt sie, aber die Plattformregeln verlangen in der Regel, dass Sie realistische KI-Bilder selbst kennzeichnen.' },
      ],
      related: ['made-with-ai-label', 'which-platforms-label-ai-images', 'turn-off-content-credentials-photoshop-lightroom'],
      updated: '2026-11-05',
    },
    'remove-exif-data': {
      metaTitle: 'EXIF-Daten aus Fotos entfernen – online, gratis, privat',
      description: 'EXIF-Daten – GPS, Kamera, Seriennummer, Datum – aus JPG, HEIC, PNG und WebP im Browser entfernen. Kein Upload, kein Qualitätsverlust, bis zu 50 Dateien.',
      navLabel: 'EXIF entfernen',
      h1: 'EXIF-Daten aus Fotos entfernen',
      lead: 'Zieh deine Fotos unten hinein und sieh jedes EXIF-Feld, das sie enthalten – GPS-Position, Kamera und Objektiv, Seriennummer, Aufnahmezeit – und entferne alles mit einem Klick. Alles läuft auf deinem Gerät; die Dateien werden nie hochgeladen.',
      sections: [
        {
          heading: 'Was EXIF-Daten verraten',
          paragraphs: [
            'EXIF ist der Block technischer Notizen, den Kamera oder Smartphone in jedes Foto schreibt. Einzeln ist das meiste harmlos, zusammen kann es viel über dich verraten. [Unser EXIF-Ratgeber](what-is-exif-data) geht jedes gängige Tag durch; diese sind für die Privatsphäre entscheidend:',
          ],
          bullets: [
            'GPS-Breite, -Länge und -Höhe – oft auf wenige Meter genau, genug, um eine Wohnung zu finden.',
            'Aufnahmedatum und -uhrzeit samt Zeitzone.',
            'Hersteller und Modell von Kamera oder Smartphone, Objektiv und bei vielen Kameras eine Seriennummer, die deine Fotos miteinander verknüpft.',
            'Name von Eigentümer oder Urheber und die Software, die die Datei zuletzt bearbeitet hat.',
            'Ein eingebettetes Vorschaubild, das nach einem Zuschnitt noch das ursprüngliche Bild zeigen kann.',
          ],
        },
        {
          heading: 'So funktioniert dieser EXIF-Entferner',
          paragraphs: [
            'AI Label Remover liest die Dateistruktur direkt. In einem JPEG schneidet es das APP1-Segment mit EXIF und XMP heraus, dazu IPTC, Kommentare und eingebettete Vorschaubilder; in HEIC, PNG und WebP entfernt es die entsprechenden Boxen oder Chunks. Die komprimierten Bilddaten werden Byte für Byte kopiert – nichts wird neu kodiert, das Foto sieht identisch aus.',
            'Felder, die steuern, wie das Foto angezeigt wird, bleiben bewusst erhalten: Drehung, ICC-Farbprofil und Pixelgröße. So vermeidest du seitlich liegende Fotos und blasse Farben, die gröbere Werkzeuge hinterlassen. Danach wird die bereinigte Datei erneut gelesen, damit du siehst, dass die EXIF-Felder wirklich weg sind.',
          ],
        },
        {
          heading: 'Wann du EXIF vor dem Teilen entfernen solltest',
          paragraphs: [
            'Viele große soziale Netzwerke entfernen EXIF beim Hochladen, viele andere Orte aber nicht: E-Mail-Anhänge, Cloud-Links, Foren, Kleinanzeigen, Messenger, die Dateien in „Originalqualität“ senden, und deine eigene Website. [Welche Plattformen Metadaten entfernen](which-platforms-strip-photo-metadata) listet die üblichen auf. Wenn du nicht weißt, wo ein Foto landet, ist vorheriges Bereinigen die sichere Wahl.',
            'Etwas online verkaufen, ein zu Hause aufgenommenes Foto posten oder Bilder an jemanden schicken, den du gerade erst kennengelernt hast – das sind die klassischen Fälle, in denen [GPS-Daten einen Ort verraten können](remove-gps-location-from-photos).',
          ],
        },
        {
          heading: 'Privat durch Bauweise',
          paragraphs: [
            'Online-EXIF-Entferner laden dein Foto meist auf einen Server, verarbeiten es dort und schicken es zurück. AI Label Remover erledigt alles in Web Workern im Browser-Tab: Ist die Seite geladen, kannst du sogar die Verbindung trennen und es funktioniert weiter. Kein Konto, kein Wasserzeichen und keine Grenze außer 25 MB und 40 Megapixeln pro Datei.',
          ],
        },
      ],
      faqHeading: 'Fragen zum Entfernen von EXIF',
      faq: [
        { q: 'Verschlechtert das Entfernen von EXIF die Bildqualität?', a: 'Nein. Es werden nur Metadatenblöcke herausgeschnitten; die komprimierten Bilddaten werden unverändert kopiert, Auflösung, Schärfe und Farbe bleiben exakt gleich. Siehe [warum erneutes Speichern Qualität kostet](remove-metadata-without-losing-quality).' },
        { q: 'Steht mein Foto danach noch richtig herum?', a: 'Ja. Der Ausrichtungswert bleibt erhalten, damit das Bild wie vorher angezeigt wird, ebenso das ICC-Farbprofil.' },
        { q: 'Kann ich EXIF aus HEIC-Fotos vom iPhone entfernen?', a: 'Ja. HEIC- und HEIF-Dateien werden direkt unterstützt, ohne vorherige Umwandlung in JPEG. Es gibt auch eine eigene Seite zum [Entfernen von HEIC-Metadaten](heic-metadata-remover).' },
        { q: 'Wie prüfe ich, ob die EXIF-Daten weg sind?', a: 'Nach dem Bereinigen liest AI Label Remover die neue Datei erneut und zeigt, welche Felder übrig sind. Du kannst sie auch in einem beliebigen [Online-Metadaten-Viewer](image-metadata-viewer-online) oder in den Dateieigenschaften deines Systems öffnen.' },
        { q: 'Geht das auch ganz ohne Website?', a: 'Ja – Windows, macOS und Smartphones haben eingebaute Optionen, jede mit Grenzen. [Metadaten unter Windows und Mac entfernen](remove-metadata-windows-mac) und [auf iPhone und Android](view-remove-metadata-iphone-android) vergleichen sie.' },
      ],
      related: ['what-is-exif-data', 'remove-gps-location-from-photos', 'which-platforms-strip-photo-metadata'],
      updated: '2026-10-23',
    },
    'remove-c2pa-content-credentials': {
      metaTitle: 'C2PA Content Credentials aus Bildern entfernen, gratis',
      description: 'C2PA Content Credentials (JUMBF-Manifeste) in JPG, PNG, HEIC, WebP und AVIF ansehen und verlustfrei entfernen – ohne die Dateien irgendwohin hochzuladen.',
      navLabel: 'C2PA entfernen',
      h1: 'C2PA Content Credentials entfernen',
      lead: 'Content Credentials sind eine signierte Historie, die an ein Bild angehängt ist: welche App es erstellt hat, welche Bearbeitungen folgten und ob generative KI beteiligt war. Zieh unten eine Datei hinein, um ihr C2PA-Manifest zu lesen, und entferne den ganzen Manifestspeicher verlustfrei.',
      sections: [
        {
          heading: 'Was ein C2PA-Manifest enthält',
          paragraphs: [
            'C2PA (Coalition for Content Provenance and Authenticity) legt fest, wie ein kryptografisch signierter Datensatz in eine Datei eingebettet wird. [C2PA einfach erklärt](what-is-c2pa-content-credentials) geht tiefer; in der Praxis enthält ein Manifest meist:',
          ],
          bullets: [
            'Den Claim Generator – die App oder den Dienst, der signiert hat, etwa Photoshop, Firefly, ChatGPT oder eine Kamera.',
            'Eine Liste von Aktionen: erstellt, geöffnet, bearbeitet, zugeschnitten, und Markierungen für Schritte mit generativer KI.',
            'Zutaten (Ingredients) – frühere Versionen oder Quellbilder, aus denen die Datei entstand.',
            'Einen Digital Source Type, der angibt, ob der Inhalt aufgenommen, montiert oder von KI erzeugt wurde.',
            'Eine Signatur und ein Zertifikat, die den Datensatz an die exakten Bilddaten binden.',
          ],
        },
        {
          heading: 'Wo C2PA in jedem Dateityp steckt',
          paragraphs: [
            'In JPEG liegt der Manifestspeicher in APP11-Segmenten als JUMBF-Boxen; in PNG ist es ein caBX-Chunk; in HEIC und AVIF eine uuid-Box; in WebP ein eigener RIFF-Chunk. AI Label Remover findet jede dieser Stellen, zeigt die enthaltenen Angaben und entfernt den gesamten Speicher, während die Bilddaten unverändert kopiert werden.',
            'Weil die Signatur das Manifest an die exakten Bytes bindet, wird es beim erneuten Speichern in einer anderen App meist ohnehin beschädigt oder verworfen. Sauberes Entfernen verhindert, dass ein kaputter, halb gültiger Datensatz zurückbleibt.',
          ],
        },
        {
          heading: 'Gründe zum Behalten, Gründe zum Entfernen',
          paragraphs: [
            'Content Credentials können wertvoll sein: Sie helfen Redaktionen und Kreativen, die Herkunft eines Bildes zu belegen. Ist das dein Ziel, behalte sie – und bewahre in jedem Fall das Original auf, denn entfernte Metadaten lassen sich nicht wiederherstellen.',
            'Entfernen ist sinnvoll, wenn der Datensatz mehr verrät, als du möchtest (Namen, Bearbeitungsverlauf, Quellbilder), oder wenn ein Editor nach einer kleinen Korrektur eine KI-Markierung an ein echtes Foto gehängt hat. Du kannst [Content Credentials in Photoshop und Lightroom ausschalten](turn-off-content-credentials-photoshop-lightroom), damit sie gar nicht erst geschrieben werden.',
          ],
        },
      ],
      faqHeading: 'Fragen zu C2PA',
      faq: [
        { q: 'Prüft AI Label Remover C2PA-Signaturen?', a: 'Nein. Es liest und zeigt den Manifestinhalt an, validiert aber nicht die Zertifikatskette. Nutze das offizielle Verify-Tool für Content Credentials, wenn du Signaturen prüfen musst.' },
        { q: 'Ist das Entfernen von Content Credentials legal?', a: 'Metadaten aus Dateien zu entfernen, die dir gehören oder die du ändern darfst, ist in der Regel unproblematisch – nutze es aber nicht, um falsch darzustellen, wer ein Bild wie gemacht hat. Dies ist eine allgemeine Information, keine Rechtsberatung.' },
        { q: 'Warum zeigt mein Foto „Einen zweiten Blick wert“?', a: 'Die Datei hat ein C2PA-Manifest, das KI nicht ausdrücklich erwähnt. Manche Plattformen werten jedes Manifest als Hinweis, prüfe also die aufgeführten Aktionen, bevor du entscheidest.' },
        { q: 'Weiß eine Plattform trotzdem, dass das Bild bearbeitet wurde?', a: 'Nicht über das entfernte Manifest. Plattformen können andere Signale nutzen, und [unsichtbare Wasserzeichen](synthid-invisible-ai-watermarks) sind vom Entfernen der Metadaten nicht betroffen.' },
      ],
      related: ['what-is-c2pa-content-credentials', 'turn-off-content-credentials-photoshop-lightroom', 'iptc-digitalsourcetype-ai'],
      updated: '2026-10-23',
    },
    'heic-metadata-remover': {
      metaTitle: 'HEIC-Metadaten entfernen – EXIF & GPS von iPhone-Fotos',
      description: 'EXIF, GPS-Standort und Zeitstempel aus HEIC- und HEIF-Fotos vom iPhone entfernen, ohne Umwandlung in JPEG. Verlustfrei, im Browser, ohne Upload.',
      navLabel: 'HEIC-Metadaten entfernen',
      h1: 'HEIC-Metadaten von iPhone-Fotos entfernen',
      lead: 'Das iPhone speichert Fotos als HEIC, und jedes hält fest, wo und wann es aufgenommen wurde. Zieh unten HEIC- oder HEIF-Dateien hinein, um diese Metadaten zu sehen und zu entfernen – das Foto bleibt HEIC, ohne Umwandlung und ohne Qualitätsverlust.',
      sections: [
        {
          heading: 'Was ein HEIC-Foto vom iPhone speichert',
          paragraphs: ['Ein typisches iPhone-Foto enthält mehr, als die meisten erwarten:'],
          bullets: [
            'Genaue GPS-Koordinaten, Höhe und die Richtung, in die die Kamera zeigte.',
            'Aufnahmedatum, -uhrzeit und Zeitzone sowie Änderungsdaten.',
            'Gerätemodell, Objektiv, Kameraeinstellungen und iOS-Version.',
            'Apple-spezifische Daten wie die Kennung, die ein Live Photo verknüpft.',
            'XMP-Daten von Bearbeitungs-Apps, manchmal mit C2PA-Datensätzen.',
          ],
        },
        {
          heading: 'Metadaten entfernen, ohne in JPEG umzuwandeln',
          paragraphs: [
            'Der übliche Rat lautet, HEIC in JPEG umzuwandeln und zu hoffen, dass die Metadaten nicht überleben. Das kodiert das Bild neu, kostet Qualität und verwirft oft das Wide-Gamut-Farbprofil. AI Label Remover bearbeitet stattdessen den HEIC-Container selbst: Es entfernt die Exif- und XMP-Items, C2PA-uuid-Boxen und Zeitstempel-Boxen und lässt HEVC-Bilddaten, Drehung (irot/imir) und Farbprofil (colr) unangetastet.',
            'Dieselbe Engine verarbeitet AVIF, das dasselbe ISOBMFF-Containerformat nutzt – AVIF-Exporte moderner Apps lassen sich also genauso bereinigen.',
          ],
        },
        {
          heading: 'iPhone-Einstellungen oder Datei bereinigen',
          paragraphs: [
            'iOS erlaubt es, den Standort für ein einzelnes Teilen über „Optionen“ im Teilen-Menü abzuschalten, und die Fotos-App kann den Standort pro Foto ändern oder entfernen. Das funktioniert für einzelne Freigaben, wird aber leicht vergessen und entfernt die übrigen Felder nicht. [Metadaten auf iPhone und Android ansehen und entfernen](view-remove-metadata-iphone-android) vergleicht die eingebauten Optionen.',
            'Für einen Stapel Fotos – einen Urlaubsordner, Produktbilder oder Bilder für eine Anzeige – ist es schneller, alles in AI Label Remover zu ziehen und ein ZIP zu speichern, und der Vorher-nachher-Bericht zeigt genau, was entfernt wurde.',
          ],
        },
      ],
      faqHeading: 'Fragen zu HEIC',
      faq: [
        { q: 'Funktioniert das unter Windows, wo sich HEIC manchmal nicht öffnen lässt?', a: 'Ja. AI Label Remover liest die HEIC-Struktur selbst und braucht keinen installierten HEIC-Codec. HEIC-Dateien zeigen statt eines Vorschaubilds ein Formatlabel, Lesen und Bereinigen funktionieren aber normal.' },
        { q: 'Öffnet sich die bereinigte Datei noch in Fotos?', a: 'Ja. Das Ergebnis ist eine normale HEIC-Datei mit denselben Bilddaten; nur die Metadaten-Items werden entfernt.' },
        { q: 'Werden Live Photos unterstützt?', a: 'AI Label Remover verarbeitet das HEIC-Standbild. Das zugehörige Video eines Live Photos ist eine eigene Datei und bleibt unverändert.' },
        { q: 'Gibt es eine Größenbeschränkung?', a: 'Jede Datei darf bis zu 25 MB und 40 Megapixel groß sein, das deckt Fotos aller aktuellen iPhones ab, und du kannst 50 auf einmal bereinigen.' },
      ],
      related: ['view-remove-metadata-iphone-android', 'remove-gps-location-from-photos', 'batch-remove-metadata'],
      updated: '2026-10-23',
    },
    'png-metadata-remover': {
      metaTitle: 'PNG-Metadaten entfernen – Prompts & Text-Chunks löschen',
      description: 'PNG-Metadaten entfernen – tEXt-, iTXt- und zTXt-Chunks mit Stable-Diffusion- oder ComfyUI-Prompts, XMP, eXIf und C2PA – bei verlustfreiem Bild.',
      navLabel: 'PNG-Metadaten entfernen',
      h1: 'PNG-Metadaten entfernen',
      lead: 'PNG-Dateien verstecken Metadaten in Text-Chunks: KI-Prompts und Workflows, Urhebernamen, Software und Zeitstempel. Zieh unten PNGs hinein, um jeden Chunk zu lesen, und entferne sie, während die Bilddaten Bit für Bit identisch bleiben.',
      sections: [
        {
          heading: 'Wo PNG seine Metadaten ablegt',
          paragraphs: ['Ein PNG ist eine Folge von Chunks. Das Bild steckt in IHDR, PLTE und IDAT; alles andere ist optional. AI Label Remover entfernt diese Chunks:'],
          bullets: [
            'tEXt, zTXt und iTXt – freier Text, komprimierter Text und internationaler Text. Stable Diffusion WebUI schreibt hier einen „parameters“-Chunk; ComfyUI schreibt „prompt“- und „workflow“-JSON.',
            'XMP-Pakete in iTXt, einschließlich IPTC- und KI-Herkunftsangaben.',
            'eXIf – EXIF-Daten, auch GPS, wenn eine App sie aus einem Foto übernommen hat.',
            'caBX – C2PA Content Credentials.',
            'tIME (letzte Änderung) und dSIG (digitale Signatur).',
          ],
        },
        {
          heading: 'Was bleibt, damit das Bild gleich aussieht',
          paragraphs: [
            'Transparenz (tRNS), Gamma und Farbwertigkeit (gAMA, cHRM), das sRGB-Flag und das eingebettete ICC-Profil (iCCP) beeinflussen die Darstellung und bleiben daher erhalten. Animierte PNGs behalten ihre acTL-, fcTL- und fdAT-Chunks, APNG-Animationen laufen also weiter.',
            'Da die IDAT-Daten kopiert statt neu komprimiert werden, ist die bereinigte Datei pixelgenau identisch mit dem Original – meist etwas kleiner, weil die Text-Chunks fehlen.',
          ],
        },
        {
          heading: 'KI-Prompts und Workflows schützen',
          paragraphs: [
            'Wenn du Bilder aus Stable Diffusion, Forge oder ComfyUI teilst, kann jeder das PNG zurück in dasselbe Werkzeug ziehen und deinen exakten Prompt, Seed, dein Modell und deinen Node-Graph wiederherstellen. [Wie Stable Diffusion und ComfyUI Prompts im PNG verstecken](remove-stable-diffusion-comfyui-metadata) zeigt, was gespeichert wird. Bereinigen entfernt alles, und im Tab „Rohe Metadaten“ kannst du den Prompt vorher kopieren, wenn du ihn behalten willst.',
          ],
        },
      ],
      faqHeading: 'Fragen zu PNG-Metadaten',
      faq: [
        { q: 'Verändert das Entfernen von PNG-Metadaten die Farben?', a: 'Nein. Farbrelevante Chunks – sRGB, gAMA, cHRM und iCCP – bleiben erhalten, und die IDAT-Bilddaten werden unverändert kopiert.' },
        { q: 'Funktioniert es mit transparenten PNGs?', a: 'Ja. Transparenzdaten (tRNS oder der Alphakanal in IDAT) gehören zum Bild und werden nie angetastet.' },
        { q: 'Kann ich den Prompt irgendwo behalten?', a: 'Kopiere ihn vor dem Bereinigen aus dem Tab „Rohe Metadaten“. Einmal entfernt, lassen sich Metadaten aus der bereinigten Datei nicht wiederherstellen.' },
        { q: 'Funktioniert es auch mit PNGs aus Midjourney oder DALL·E?', a: 'Ja. Text-, XMP- oder C2PA-Daten, die diese Dienste einbetten, werden genauso entfernt. Siehe [Midjourney- und DALL·E-Prompts verbergen](hide-midjourney-dalle-prompts).' },
      ],
      related: ['remove-stable-diffusion-comfyui-metadata', 'hide-midjourney-dalle-prompts', 'what-metadata-ai-image-generators-add'],
      updated: '2026-10-23',
    },
  },
  info: {
    about: {
      metaTitle: 'Über AI Label Remover – so funktioniert der Metadaten-Reiniger',
      description: 'Wer AI Label Remover entwickelt, wie der Metadaten-Reiniger im Browser funktioniert, wie wir Artikel recherchieren und was das Tool nie tut.',
      navLabel: 'Über uns',
      title: 'Über AI Label Remover',
      lead: 'AI Label Remover ist ein kostenloses Werkzeug, um versteckte Metadaten in Bildern zu lesen und zu entfernen – EXIF, GPS, XMP, IPTC, C2PA Content Credentials und KI-Prompts –, gebaut, damit deine Dateien dein Gerät nie verlassen müssen.',
      sections: [
        {
          heading: 'Warum es AI Label Remover gibt',
          paragraphs: [
            'Fotos und KI-Bilder tragen weit mehr Informationen, als den meisten bewusst ist: den Wohnort in GPS-Tags, Geräteseriennummern, ganze Prompts und Workflows und Herkunftsdatensätze, die Plattformen für Labels auslesen. Die meisten Online-Reiniger verlangen, genau die Dateien hochzuladen, die man schützen will. AI Label Remover wurde gebaut, um dieselbe Arbeit ohne diesen Kompromiss zu erledigen.',
          ],
        },
        {
          heading: 'So funktioniert das Werkzeug',
          paragraphs: [
            'Wenn du ein Bild hinzufügst, liest dein Browser es lokal. Web Worker analysieren die Dateistruktur – JPEG-Segmente, PNG-Chunks, WebP-RIFF-Chunks, GIF-Blöcke und HEIC/AVIF-Boxen – und listen jeden gefundenen Metadatenblock auf. Bereinigen entfernt diese Blöcke aus dem Bytestrom, kopiert die komprimierten Bilddaten unverändert und liest das Ergebnis erneut, um zu bestätigen, was übrig ist.',
            'Es gibt keine serverseitige Verarbeitung. Die Website besteht aus statischen Seiten; einmal geladen, funktioniert das Werkzeug offline.',
          ],
        },
        {
          heading: 'Wie unsere Artikel entstehen',
          paragraphs: [
            'Die Ratgeber auf dieser Website stützen sich auf die veröffentlichten Spezifikationen (EXIF, XMP, IPTC Photo Metadata, C2PA, die Formate PNG und ISOBMFF), auf Hilfeseiten der Plattformen und auf Tests mit echten Dateien der beschriebenen Werkzeuge. Jeder Artikel zeigt das Datum der letzten Überarbeitung, und wir aktualisieren, wenn sich Standards oder Richtlinien ändern.',
            'Die Artikel sind allgemeine Informationen, keine Rechtsberatung. Plattformregeln zu KI-Labels ändern sich häufig; prüfe die Hilfeseiten der jeweiligen Plattform, bevor du dich auf eine Aussage darüber verlässt.',
          ],
        },
        {
          heading: 'Was AI Label Remover nicht tut',
          paragraphs: [],
          bullets: [
            'Deine Dateien hochladen, speichern oder protokollieren – es gibt keinen Server, der sie empfangen könnte.',
            'Pixel verändern, unsichtbare Wasserzeichen oder sichtbare Logos entfernen.',
            'Versprechen, dass eine Plattform ein Label setzt oder nicht setzt.',
            'Helfen, KI-Bilder als echte Fotos auszugeben. Nutze es, um deine Privatsphäre zu schützen und Fehler zu korrigieren.',
          ],
        },
        {
          heading: 'Unabhängigkeit',
          paragraphs: [
            'AI Label Remover ist unabhängig und nicht mit Meta, Google, OpenAI, Adobe, Midjourney, Apple oder der C2PA verbunden. Produktnamen werden nur zur Beschreibung der Kompatibilität genannt.',
          ],
        },
      ],
      updated: '2026-10-23',
    },
    privacy: {
      metaTitle: 'Datenschutzerklärung – AI Label Remover',
      description: 'Datenschutz in klaren Worten: Deine Bilder verlassen nie dein Gerät, keine Konten, keine Analyse, keine Werbung – gespeichert werden nur Sprache und Design.',
      navLabel: 'Datenschutz',
      title: 'Datenschutzerklärung',
      lead: 'AI Label Remover ist ein Werkzeug zum Schutz deiner Privatsphäre – die Nutzung soll dich also keine davon kosten. Diese Seite erklärt in einfachen Worten, was mit deinen Bildern passiert und welche wenigen Informationen die Website verarbeitet.',
      sections: [
        {
          heading: 'Das Wichtigste in Kürze',
          paragraphs: [],
          bullets: [
            'Deine Bilder werden auf deinem eigenen Gerät verarbeitet und nie hochgeladen.',
            'Es gibt keine Konten, keine Registrierung und keinen Newsletter – wir wissen nicht, wer du bist.',
            'Es gibt keine Analyse, keine Werbung, keine Tracking-Pixel und keine Skripte von Drittanbietern.',
            'Gespeichert werden nur deine Sprache und dein helles oder dunkles Design, in deinem eigenen Browser, und du kannst beides jederzeit löschen.',
          ],
        },
        {
          heading: 'Was mit deinen Bildern passiert',
          paragraphs: ['Wenn du AI Label Remover ein Bild hinzufügst, ist das sein ganzer Weg:'],
          bullets: [
            'Dein Browser öffnet die Datei von deinem Gerät und hält sie im Speicher des Tabs.',
            'Web Worker im Tab lesen die Metadaten und erstellen beim Bereinigen eine saubere Kopie – ebenfalls nur im Speicher.',
            'Beim Speichern schreibt dein Browser die saubere Datei oder das ZIP direkt auf dein Gerät.',
            'Schließt oder lädst du den Tab neu, sind Bilder und Berichte weg. Auf keinem Server bleibt etwas zurück, weil kein Server sie je erhält.',
          ],
        },
        {
          heading: 'Du kannst das selbst prüfen',
          paragraphs: [
            'Du musst uns nicht einfach glauben. Lade die Seite, schalte WLAN oder mobile Daten aus und bereinige eine Datei: Es funktioniert weiter, weil nichts gesendet werden muss. Wenn du dich mit den Entwicklertools auskennst, öffne beim Bereinigen den Tab „Netzwerk“ – du wirst sehen, dass keine Bilddaten dein Gerät verlassen.',
          ],
        },
        {
          heading: 'Was wir nicht erheben',
          paragraphs: ['AI Label Remover erhebt und speichert nicht:'],
          bullets: [
            'deine Bilder, deren Metadaten oder die angezeigten Berichte;',
            'deinen Namen, deine E-Mail-Adresse oder Kontodaten;',
            'deinen Standort – GPS-Daten aus deinen Fotos siehst nur du, auf deinem Bildschirm;',
            'einen Verlauf der geprüften Dateien oder deiner Nutzung des Werkzeugs.',
          ],
        },
        {
          heading: 'Was in deinem Browser gespeichert wird und wie du es löschst',
          paragraphs: ['Damit sich die Seite deine Wahl merkt, speichert sie zwei kleine Einstellungen auf deinem Gerät:'],
          bullets: [
            'Sprache: ein Eintrag „lang“ im lokalen Speicher und ein Erstanbieter-Cookie „lang“ mit einem Jahr Laufzeit, damit die Startseite in deiner gewählten Sprache öffnet. Er enthält nur einen Sprachcode wie „de“.',
            'Design: ein Eintrag „theme“ im lokalen Speicher, wenn du den hellen oder dunklen Modus wählst.',
            'Zum Löschen entferne in den Browsereinstellungen die Cookies und Websitedaten dieser Seite. AI Label Remover funktioniert weiter und vergisst nur deine Auswahl.',
          ],
        },
        {
          heading: 'Wenn du die Website besuchst',
          paragraphs: [
            'Wie jede Website braucht unser Server bei jedem Seitenaufruf ein paar technische Grunddaten, um dir die Seite zu schicken: die Netzwerkadresse deines Geräts (IP-Adresse), deinen Browsertyp und die aufgerufene Seite. Diese Daten können vorübergehend protokolliert werden, damit die Website stabil läuft und missbräuchliche Zugriffe abgewehrt werden, und werden nur so lange aufbewahrt, wie das nötig ist. Wir nutzen sie nicht, um dich zu identifizieren, bilden keine Profile und geben sie niemals weiter oder verkaufen sie.',
            'Beim Öffnen der Startseite schaut der Server auf die Spracheinstellung deines Browsers, die zuvor gewählte Sprache und das Land, aus dem du zugreifst – nur um dir gleich die passende Sprachversion zu öffnen. Das geschieht sofort und wird nicht gespeichert.',
          ],
        },
        {
          heading: 'Kinder',
          paragraphs: [
            'AI Label Remover fragt von niemandem personenbezogene Daten ab und erhebt keine – auch nicht von Kindern. Jüngere Nutzer können das Werkzeug ohne Konto und ohne Angaben zur eigenen Person verwenden.',
          ],
        },
        {
          heading: 'Deine Rechte',
          paragraphs: [
            'Da AI Label Remover weder deinen Namen noch deine E-Mail-Adresse oder ein Konto erhebt, haben wir kein Profil über dich, das wir herausgeben, berichtigen oder löschen könnten. Was sich die Website auf deinem Gerät merkt, hast du jederzeit selbst in der Hand. Die beim Besuch vorübergehend protokollierten technischen Daten sind mit keinem Namen und keinem Konto verknüpft und werden gelöscht, sobald sie für den Betrieb nicht mehr nötig sind.',
          ],
        },
        {
          heading: 'Änderungen dieser Erklärung',
          paragraphs: ['Sollte sich ändern, wie AI Label Remover mit Daten umgeht, aktualisieren wir diese Seite und das Datum oben.'],
        },
      ],
      updated: '2026-10-23',
    },
  },
};

export default de;
