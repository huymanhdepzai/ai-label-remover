import type { Articles } from './types';

/** Erweiterte Artikel auf Deutsch (Basisartikel nutzen die Zusammenfassung aus seo.guides.items). */
const de: Articles = {
  'made-with-ai-label': {
    metaTitle: 'Warum echte Fotos auf Instagram ein KI-Label bekommen',
    related: ['iptc-digitalsourcetype-ai', 'which-platforms-label-ai-images', 'turn-off-content-credentials-photoshop-lightroom'],
    description:
      'Ein echtes Foto mit KI-Label („KI-Info“) auf Instagram oder Facebook trägt meist ein C2PA- oder IPTC-Feld, das ein Editor geschrieben hat. So findest und entfernst du es verlustfrei.',
    updated: '2026-10-23',
    sections: [
      {
        heading: 'Das Label liest deine Datei, nicht dein Foto',
        paragraphs: [
          'Metas KI-Label „KI-Info“ (früher „Mit KI erstellt“) wird gesetzt, wenn ein Upload anerkannte Signale generativer KI enthält. Zwei dieser Signale stecken in der Bilddatei selbst: [ein C2PA-Manifest mit Content Credentials](what-is-c2pa-content-credentials) und [die IPTC-Eigenschaft DigitalSourceType](iptc-digitalsourcetype-ai) im XMP.',
          'Der Wert trainedAlgorithmicMedia besagt, dass das ganze Bild generiert wurde; compositeWithTrainedAlgorithmicMedia, dass ein echtes Foto KI-Anteile hat. Beides lässt sich beim Upload automatisch lesen. Meta nutzt außerdem weitere Signale und bittet, realistische KI-Inhalte selbst anzugeben – Datei-Metadaten sind also nur eine von mehreren Quellen.',
        ],
      },
      {
        heading: 'Woher das Signal kommt',
        paragraphs: ['Bei echten Fotos ist der Auslöser fast immer die Bearbeitungs-App, nicht die Kamera. Typische Quellen:'],
        bullets: [
          'Generatives Füllen, Generatives Erweitern oder ein KI-Entfernen-Werkzeug, die c2pa-Aktionen hinzufügen und die Datei als Montage markieren können.',
          '[Export mit eingeschalteten Content Credentials](turn-off-content-credentials-photoshop-lightroom), der eine Liste aller Bearbeitungen in die Datei signiert.',
          'Galerie-Funktionen am Smartphone wie KI-Radierer, die eine Bearbeitungsmarkierung hinterlassen.',
          'Andere Apps, die vorhandene Metadaten weiterkopieren, sodass die Markierung mehrere Speichervorgänge übersteht.',
        ],
      },
      {
        heading: 'Das Feld in AI Label Remover finden',
        paragraphs: [
          'Leg das Bild oben auf den Tisch. Der Tab „KI-Spuren“ listet jedes Signal mit seinem Ort, etwa „C2PA · compositeWithTrainedAlgorithmicMedia“ oder „XMP · Iptc4xmpExt › DigitalSourceType“. Wechsle zu „Rohe Metadaten“, um die zugrunde liegenden Werte zu lesen, darunter den Claim Generator, der das Manifest signiert hat, und jede erfasste c2pa-Aktion.',
          'Das Ergebnis „Einen zweiten Blick wert“ bedeutet: Content Credentials sind vorhanden, aber ohne ausdrückliche KI-Angabe. Manche Plattformen werten das Manifest trotzdem als Hinweis – entscheide also vor dem Posten.',
        ],
      },
      {
        heading: 'Die Kopie waschen, die du postest',
        paragraphs: [
          'Klicke auf „Alle Bilder waschen“. AI Label Remover schneidet den C2PA-Speicher sowie die XMP-, IPTC- und EXIF-Blöcke aus dem Bytestrom und lässt Pixeldaten, Größe, Drehung und Farbprofil unverändert. Die gewaschene Datei wird erneut gelesen, damit du vor dem Speichern siehst, dass die KI-Spuren weg sind. Die Seite [KI-Metadaten entfernen](ai-tag-cleaner) erklärt jede behandelte Spur.',
          'Erneutes Speichern als JPEG würde die Metadaten ebenfalls entfernen, [komprimiert das Bild aber jedes Mal neu](remove-metadata-without-losing-quality). Das Herausschneiden von Blöcken vermeidet diesen Verlust vollständig.',
        ],
      },
      {
        heading: 'Ein falsches Label korrigieren heißt nicht, ein richtiges zu verstecken',
        paragraphs: [
          'Waschen ist für Labels gedacht, die deine Arbeit falsch beschreiben, und um private Angaben privat zu halten. Ist ein Bild ganz oder überwiegend generiert und könnte als echt durchgehen, erwarten Plattformregeln in der Regel eine Kennzeichnung – das Label soll Betrachter informieren. Nutze AI Label Remover, um Fehler zu korrigieren, nicht um synthetische Bilder als Fotos auszugeben.',
        ],
      },
    ],
    faqHeading: 'Zum KI-Label',
    faq: [
      { q: 'Kann ich das Label „KI-Info“ nach dem Posten entfernen?', a: 'Meist nicht durch Bearbeiten des Beitrags. Beschreibt das Label ein echtes Foto falsch, nutze die Einspruchs- oder Kontostatus-Optionen der Plattform, falls vorhanden, und wasch die Datei vor dem nächsten Post.' },
      { q: 'Verschwindet das Label sicher, wenn ich die Datei wasche?', a: 'Keine Garantie. Waschen entfernt die in der Datei gespeicherten Signale – bei bearbeiteten Fotos die übliche Ursache –, Plattformen können aber andere Erkennung nutzen oder eine Angabe verlangen.' },
      { q: 'Verändert sich das Foto optisch?', a: 'Nein. Nur Metadatenblöcke werden entfernt. Die Bilddaten werden Byte für Byte kopiert, Drehung und ICC-Farbprofil bleiben erhalten.' },
      { q: 'Kann ich die Kameraeinstellungen behalten und nur die KI-Felder entfernen?', a: 'Derzeit nicht. AI Label Remover entfernt alle identifizierenden Metadaten – Ort, Gerät, Urheber und KI-Herkunft – in einem Durchgang, die sicherste Voreinstellung zum öffentlichen Teilen. Größe, Drehung, Farbe und Animation bleiben immer erhalten.' },
    ],
  },

  'remove-stable-diffusion-comfyui-metadata': {
    metaTitle: 'ComfyUI-Workflows und Stable-Diffusion-Prompts aus PNG entfernen',
    related: ['image-metadata-viewer-online', 'hide-midjourney-dalle-prompts', 'what-metadata-ai-image-generators-add'],
    description:
      'A1111, Forge und ComfyUI schreiben Prompt, Seed, Checkpoint und den kompletten Workflow in jedes PNG. Sieh den genauen Text und entferne ihn, ohne ein Pixel zu ändern.',
    updated: '2026-10-23',
    sections: [
      {
        heading: 'Deine Einstellungen reisen mit dem Bild',
        paragraphs: [
          'Lokale Generatoren speichern ihre Einstellungen als Text in der Ausgabe, damit sich ein Bild nachbauen lässt. In PNG-Dateien steht dieser Text in tEXt-, zTXt- oder iTXt-Chunks neben den Bilddaten. Was du typischerweise findest:',
        ],
        bullets: [
          'A1111 und Forge: einen „parameters“-Chunk mit Prompt, Negativ-Prompt, Steps, Sampler, CFG, Seed, Auflösung, Modell-Hash und -Name sowie LoRA- und Erweiterungseinstellungen.',
          'ComfyUI: einen „prompt“-Chunk mit dem ausgeführten Node-Graph und einen „workflow“-Chunk mit dem kompletten Editor-Layout – zieh das PNG in ComfyUI und das ganze Setup ist wieder da.',
          'InvokeAI, NovelAI und andere Oberflächen: ähnliche Daten unter eigenen Schlüsseln.',
          'JPEG- oder WebP-Exporte: manche Werkzeuge schreiben denselben Text stattdessen in [EXIF UserComment](what-is-exif-data).',
        ],
      },
      {
        heading: 'Gründe fürs Waschen – und dagegen',
        paragraphs: [
          'Generierungsdaten sind ein komplettes Rezept. Sie lassen jeden deinen Look nachbauen, zeigen, auf welche Checkpoints und LoRAs du setzt, und können lokale Pfade, Ordner- oder Benutzernamen aus einem Workflow preisgeben. Große ComfyUI-Graphen bringen außerdem Dutzende Kilobyte pro Bild mit.',
          'Andererseits lesen Modell-Plattformen die Parameter, um Generierungsinfos anzuzeigen, und Mitwirkende möchten vielleicht den Workflow. Prüfe jede Datei zuerst; [AI Label Remover zeigt alles, bevor etwas entfernt wird](image-metadata-viewer-online).',
        ],
      },
      {
        heading: 'Den Prompt in AI Label Remover lesen',
        paragraphs: [
          'Leg das PNG auf den Tisch. Unter „Rohe Metadaten“ erscheint jeder Text-Chunk unter seinem Schlüsselwort – parameters, prompt, workflow – mit vollständigem Inhalt, während der Tab „KI-Spuren“ ihn als Stable-Diffusion-Prompt oder ComfyUI-Workflow kennzeichnet. Komprimierte zTXt- und iTXt-Chunks werden im Browser entpackt, damit du sie lesen kannst.',
        ],
      },
      {
        heading: 'Was beim Waschen bleibt',
        paragraphs: [
          'Klicke auf „Alle Bilder waschen“. Das PNG-Modul entfernt Text-, XMP-, EXIF- und C2PA-Chunks als ganze Einheiten und behält IHDR, IDAT, Palette, Transparenz, Gamma und Farbe sowie die APNG-Animations-Chunks. Weil Chunks komplett entfernt werden, bleiben die übrigen CRCs gültig und die Datei öffnet sich überall. Die Seite [PNG-Metadaten entfernen](png-metadata-remover) erklärt jeden Chunk im Detail.',
          'Öffnen und erneutes Speichern in einem Editor würde den Text ebenfalls entfernen, [komprimiert das Bild aber neu und kann Farben verschieben](remove-metadata-without-losing-quality). Das Entfernen auf Byte-Ebene vermeidet beides.',
        ],
      },
    ],
    faqHeading: 'Zu Stable-Diffusion- und ComfyUI-Daten',
    faq: [
      { q: 'Wie verhindere ich, dass A1111 oder ComfyUI Metadaten speichern?', a: 'A1111 und Forge haben eine Einstellung, die das Schreiben der Generierungsparameter in PNG-Dateien stoppt, und ComfyUI lässt sich mit der Option --disable-metadata starten. Beides gilt nur für neue Bilder – wasch also die vorhandenen.' },
      { q: 'Kann ComfyUI den Workflow aus einem gewaschenen PNG wiederherstellen?', a: 'Nein. Die Chunks „prompt“ und „workflow“ sind weg, das Ziehen der Datei in ComfyUI stellt nichts wieder her. Behalte ein ungewaschenes Original, wenn du den Graph noch brauchst.' },
      { q: 'Sieht das gewaschene PNG gleich aus?', a: 'Ja. Die IDAT-Chunks mit den komprimierten Pixeln werden unverändert kopiert, das Bild ist pixelgenau identisch.' },
      { q: 'Was ist mit JPEG- und WebP-Exporten?', a: 'Prompts in EXIF UserComment oder XMP werden auch in JPEG- und WebP-Dateien erkannt und entfernt.' },
    ],
  },

  'hide-midjourney-dalle-prompts': {
    metaTitle: 'Prompts aus Midjourney- und DALL·E-Bildern entfernen',
    related: ['chatgpt-gemini-image-metadata', 'what-metadata-ai-image-generators-add', 'synthid-invisible-ai-watermarks'],
    description:
      'Downloads aus Midjourney, DALL·E, ChatGPT und Firefly können deinen Prompt, die Job-ID und KI-Herkunftsangaben enthalten. Prüf die Datei und wasch sie vor dem Posten.',
    updated: '2026-10-23',
    sections: [
      {
        heading: 'Was Online-Generatoren schreiben',
        paragraphs: [
          'Online-Bilddienste versehen Downloads zunehmend mit Metadaten – aus Transparenzgründen und für Herkunftsstandards. Die genauen Felder hängen vom Dienst ab und ändern sich mit der Zeit, die einzig verlässliche Antwort ist also, die Datei zu öffnen. Was du finden kannst:',
        ],
        bullets: [
          'Midjourney: den Prompt und eine Job-ID in Beschreibungs- oder Kommentarfeldern, oft mit einem [IPTC DigitalSourceType](iptc-digitalsourcetype-ai), der das Bild als KI-erstellt markiert.',
          '[DALL·E und die Bildgenerierung von ChatGPT](chatgpt-gemini-image-metadata): [C2PA Content Credentials](what-is-c2pa-content-credentials), die den Generator nennen.',
          'Adobe Firefly: Content Credentials, die das Bild als mit KI erzeugt beschreiben.',
          'Viele Werkzeuge: einen Softwarenamen, ein Erstellungsdatum und gelegentlich eine kontogebundene Kennung.',
        ],
      },
      {
        heading: 'Ein Prompt ist Arbeit, die es wert ist',
        paragraphs: [
          'Für Illustratoren, Designer und Prompt-Schreiber ist ein ausgefeilter Prompt das Ergebnis vieler Versuche. Jeder kostenlose Metadaten-Viewer zeigt eingebetteten Text jedem, der dein Bild herunterlädt – bereit zum Kopieren. Job-IDs und Kontodaten können ein öffentliches Bild außerdem mit dir in Verbindung bringen.',
        ],
      },
      {
        heading: 'Erst ansehen, dann waschen',
        paragraphs: [
          'Leg das Bild auf den Tisch und lies den Bericht. Zeilen mit „KI“ enthalten Prompts, Generatornamen und Herkunftsangaben; Zeilen mit „Personen“ Urheber, Beschreibungen und Kennungen. Klicke auf „Alle Bilder waschen“ und speichere die saubere Datei – oder den ganzen Stapel als ZIP. Die Seite [KI-Metadaten entfernen](ai-tag-cleaner) erklärt jede Art von Spur.',
          'Alles läuft in deinem Browser, die Prompts, die du schützen willst, landen also unterwegs nicht bei noch einem Dienst.',
        ],
      },
      {
        heading: 'Grenzen, die du kennen solltest',
        paragraphs: [
          'Manche Anbieter verstecken zusätzlich Wasserzeichen in den Pixeln, etwa [Googles SynthID](synthid-invisible-ai-watermarks). Das sind keine Metadaten, und Waschen berührt sie nicht. Und wenn du ein realistisches KI-Bild postest, können Plattformregeln trotzdem eine Kennzeichnung verlangen. Waschen schützt deinen Arbeitsprozess; es ändert nicht, was das Bild ist.',
        ],
      },
    ],
    faqHeading: 'Zu Midjourney- und DALL·E-Metadaten',
    faq: [
      { q: 'Kann jemand meinen Prompt aus einem heruntergeladenen Bild lesen?', a: 'Wenn der Prompt in den Metadaten der Datei steht, kann ihn jeder mit einem Metadaten-Viewer lesen und kopieren. Waschen vor dem Teilen entfernt ihn.' },
      { q: 'Enthält jeder Midjourney-Download den Prompt?', a: 'Das hängt vom Format und vom aktuellen Verhalten des Dienstes ab. Öffne die Datei in AI Label Remover, um genau zu sehen, was drin ist.' },
      { q: 'Entfernt Waschen SynthID oder ähnliche Wasserzeichen?', a: 'Nein. Unsichtbare Wasserzeichen stecken in den Pixeldaten, die AI Label Remover nie verändert.' },
      { q: 'Kann ich eine ganze Reihe von Generierungen waschen?', a: 'Ja. Lade bis zu 50 Bilder, prüfe die Berichte und speichere alle als ein ZIP.' },
    ],
  },

  'what-is-c2pa-content-credentials': {
    metaTitle: 'Was ist C2PA? Content Credentials einfach erklärt',
    related: ['iptc-digitalsourcetype-ai', 'turn-off-content-credentials-photoshop-lightroom', 'chatgpt-gemini-image-metadata'],
    description:
      'C2PA Content Credentials einfach erklärt: was das signierte Manifest festhält, wo JPEG, PNG, WebP, HEIC und AVIF es speichern, wie du es liest und was Entfernen bewirkt.',
    updated: '2026-10-23',
    sections: [
      {
        heading: 'Kurz gesagt',
        paragraphs: [
          'Die Coalition for Content Provenance and Authenticity (C2PA) pflegt einen offenen Standard, um Medien eine manipulationssichere Historie anzuhängen. Nutzer sehen sie als Content Credentials. Kameras, Editoren und KI-Generatoren können einen Datensatz in ein Bild signieren, der festhält, wie es entstand – mit einer Kamera aufgenommen, in einer App bearbeitet oder von einem Modell erzeugt.',
        ],
      },
      {
        heading: 'Aufbau eines Manifests',
        paragraphs: ['Ein Manifest ist ein kompaktes, strukturiertes Paket mit drei Hauptteilen:'],
        bullets: [
          'Claim Generator – die Software oder der Dienst, der das Manifest erstellt hat, etwa ein Editor oder eine KI-Bild-API.',
          'Assertions – Aussagen über den Inhalt: c2pa.actions (erstellt, bearbeitet, geöffnet, skaliert usw.), [ein digitalSourceType](iptc-digitalsourcetype-ai) und Verweise auf Ausgangsdateien.',
          'Signatur – eine kryptografische Signatur und ein Zertifikat, die den Unterzeichner ausweisen, plus ein Hash, der das Manifest an die exakten Bilddaten bindet.',
        ],
      },
      {
        heading: 'Wo jedes Format es ablegt',
        paragraphs: [
          'Das Manifest steckt in einem JUMBF-Container, den jedes Format an eigener Stelle speichert: APP11-Segmente in JPEG, ein caBX-Chunk in PNG, ein C2PA-Chunk in WebP und eine uuid-Box in HEIC und AVIF. Als eigener Block lässt es sich lesen und entfernen, ohne das Bild zu dekodieren. AI Label Remover zeigt den Block, den Claim Generator, die erfassten Aktionen und den Quelltyp, wenn vorhanden.',
        ],
      },
      {
        heading: 'Was Entfernen tatsächlich bewirkt',
        paragraphs: [
          '[Waschen löscht den eingebetteten Datensatz](remove-c2pa-content-credentials) aus dieser Kopie der Datei. Bedenke: Jede Bearbeitung bricht ohnehin die kryptografische Bindung – Verifier melden ein Manifest, das nicht mehr zu den Pixeln passt, als ungültig –, Entfernen beseitigt also einen Datensatz, der sonst mitreisen würde.',
          'Manche Systeme fügen „dauerhafte“ Credentials hinzu: [ein unsichtbares Wasserzeichen oder einen Fingerabdruck](synthid-invisible-ai-watermarks), über den ein Verifier das Manifest aus einem Online-Archiv abrufen kann, selbst wenn die eingebettete Kopie fehlt. Metadaten-Waschen wirkt darauf nicht, weil sie in den Pixeln oder auf einem Server liegen.',
        ],
      },
      {
        heading: 'Behalten oder waschen?',
        paragraphs: [
          'Credentials sind nützlich, wenn du die Herkunft eines Bildes belegen musst – im Journalismus oder bei eigenen Originalfotos. Sie können aber auch Software, Bearbeitungsverlauf und Identität preisgeben, die du lieber für dich behältst, oder [bei leicht bearbeiteten Fotos KI-Labels auslösen](made-with-ai-label). Lies zuerst das Manifest und entscheide pro Datei.',
        ],
      },
    ],
    faqHeading: 'Zu C2PA',
    faq: [
      { q: 'Wer nutzt C2PA?', a: 'Adobe, Microsoft, Google, OpenAI, Meta, Kamerahersteller wie Leica, Sony und Nikon sowie viele Nachrichtenorganisationen unterstützen den Standard oder gehören der Koalition an – jeder setzt ihn aber anders ein.' },
      { q: 'Ist C2PA eine Art unsichtbares Wasserzeichen?', a: 'Nein. C2PA sind Metadaten neben den Bilddaten. Pixel-Wasserzeichen wie SynthID sind ein eigener Mechanismus und vom Waschen nicht betroffen.' },
      { q: 'Wie prüfe ich die Signatur vor dem Waschen?', a: 'AI Label Remover zeigt Generator, Aktionen und Quelltyp. Für eine vollständige Signaturprüfung lass das Original vorher durch einen offiziellen Content-Credentials-Verifier laufen.' },
      { q: 'Kostet das Entfernen von C2PA Qualität?', a: 'Nein. Das Manifest ist ein eigener Block; die komprimierten Bilddaten werden unverändert kopiert.' },
    ],
  },

  'remove-gps-location-from-photos': {
    metaTitle: 'GPS-Standort aus Fotos entfernen – iPhone, Android und PC',
    related: ['which-platforms-strip-photo-metadata', 'view-remove-metadata-iphone-android', 'remove-metadata-windows-mac'],
    description:
      'GPS-Standort vor dem Teilen aus Fotos entfernen: welche EXIF-Felder Position, Gerät und Uhrzeit verraten, wo sie durchsickern und wie du sie verlustfrei herauswäschst.',
    updated: '2026-10-23',
    sections: [
      {
        heading: 'Was das Smartphone in jedes Foto schreibt',
        paragraphs: ['Mit aktivierten Ortungsdiensten kann ein normales Smartphone-Foto enthalten:'],
        bullets: [
          'Breite, Länge und Höhe, oft auf wenige Meter genau, dazu einen GPS-Zeitstempel.',
          'Den genauen Moment der Aufnahme und der letzten Bearbeitung.',
          'Hersteller und Modell, Objektivdaten und manchmal eine Seriennummer oder den Besitzernamen.',
          'Eingebettete Vorschauen und Zusatzbilder (Tiefenkarten, MPF-Bilder) mit eigener EXIF-Kopie.',
        ],
      },
      {
        heading: 'Wie die Originaldatei nach draußen gelangt',
        paragraphs: [
          'Große soziale Feeds entfernen EXIF meist aus dem, was sie veröffentlichen, doch viele Wege liefern das unveränderte Original: [„als Datei“ oder Dokument senden in Messengern](which-platforms-strip-photo-metadata), E-Mail-Anhänge, geteilte Cloud-Links, Foren, Kleinanzeigen und Portfolio-Seiten. Ein Foto von zu Hause kann deine Adresse verraten, eine Serie deinen Tagesablauf.',
        ],
      },
      {
        heading: 'Prüfen, welche GPS-Daten dein Foto verrät',
        paragraphs: [
          'Leg das Foto auf den Tisch. Der Tab „Was sie verrät“ zeigt sofort, ob Orts-, Personen- und Zeitfelder vorhanden sind, mit der GPS-Position in Dezimalkoordinaten. „Rohe Metadaten“ listet jedes Feld nach [EXIF IFD0, Exif und GPS](what-is-exif-data) gruppiert.',
        ],
      },
      {
        heading: 'Ohne Nebenwirkungen waschen',
        paragraphs: [
          'Klicke auf „Alle Bilder waschen“. [GPS-, Datums-, Geräte-, Urheber- und Softwarefelder](remove-exif-data) verschwinden, zusammen mit eingebetteten Vorschaubildern und MPF-Zusatzbildern, die sonst eine versteckte Kopie behalten würden. Das Ausrichtungs-Tag wird in einen winzigen EXIF-Block zurückgeschrieben, damit Hochformatfotos nicht kippen, und das Farbprofil bleibt erhalten, damit die Farben stimmen. iPhone-HEIC wird direkt gewaschen, ohne Umwandlung in JPEG – siehe [HEIC-Metadaten entfernen](heic-metadata-remover).',
        ],
      },
      {
        heading: 'Schon an der Kamera stoppen',
        paragraphs: [
          'Du kannst [die Standortmarkierung in den Kameraeinstellungen ausschalten](view-remove-metadata-iphone-android) oder den Standort für ein einzelnes Teilen über die Teilen-Optionen entfernen. Die Datei vor dem Versand zu waschen bleibt trotzdem die gründlichste Gewohnheit, denn so verschwinden auch Geräte-, Zeit- und Vorschaudaten, die Smartphone-Einstellungen übrig lassen.',
        ],
      },
      {
        heading: 'Wie genau die Koordinaten wirklich sind',
        paragraphs: [
          'EXIF speichert Breite und Länge in Grad, Minuten und Sekunden, und Smartphones schreiben die Sekunden mit Nachkommastellen. Eine Bogensekunde Breite entspricht etwa 31 Metern, ein Wert mit zwei Nachkommastellen bezeichnet auf dem Papier also einen Punkt von unter einem Meter. Die tatsächliche Genauigkeit hängt vom Signal ab – im Freien oft 3 bis 10 Meter, drinnen schlechter –, reicht aber immer noch, um ein einzelnes Haus zu erkennen. Viele Smartphones ergänzen die Höhe, die auf ein Stockwerk hindeuten kann, und die Richtung, in die das Objektiv zeigte.',
        ],
      },
      {
        heading: 'Echte Risiken, keine Gedankenspiele',
        paragraphs: ['Standortdaten machen aus gewöhnlichen Fotos eine Karte deines Lebens:'],
        bullets: [
          'Das Foto eines Artikels, den du verkaufst, zu Hause aufgenommen, verrät Käufern – und allen, die die Anzeige sehen – deine Adresse.',
          'Eine Reihe von Bildern aus dem Fitnessstudio, vom Schultor oder aus dem Büro zeigt einen Tagesablauf samt Uhrzeiten.',
          'Urlaubsfotos, die du unterwegs postest, zeigen, dass deine Wohnung leer steht.',
          'Fotos von Kindern können ihre Schule, ihren Spielplatz oder ihr Zuhause verraten.',
        ],
      },
      {
        heading: 'Der Standort steckt nicht nur in den GPS-Tags',
        paragraphs: [
          'Das GPS-Verzeichnis zu leeren reicht nicht immer. Fotoverwaltungen können Koordinaten ins XMP kopieren, und IPTC-Felder wie City, Sublocation und Country nennen den Ort mitunter im Klartext. AI Label Remover entfernt XMP und IPTC zusammen mit EXIF, also verschwinden auch diese Kopien. Was kein Metadaten-Werkzeug entfernen kann, ist das Bild selbst: Straßenschilder, Hausnummern, der Blick aus einem Fenster oder eine Spiegelung können einen Ort verraten – schau also vor dem Posten genau hin.',
        ],
      },
      {
        heading: 'Ein schneller Check vor dem Teilen',
        paragraphs: [],
        bullets: [
          'Leg das Foto in AI Label Remover und sieh dir den Tab „Was sie verrät“ an.',
          'Wird ein Ort angezeigt, klicke auf „Alle Bilder waschen“ und speichere die gewaschene Kopie.',
          'Prüfe, ob das grüne Feld bestätigt, dass Ort, Personen und Zeit weg sind.',
          'Wirf einen Blick aufs Bild nach sichtbaren Hinweisen – Adressen, Kennzeichen, Wahrzeichen.',
          'Teile die gewaschene Kopie und behalte das Original in deiner eigenen Mediathek.',
        ],
      },
    ],
    faqHeading: 'Zu GPS und Foto-Privatsphäre',
    faq: [
      { q: 'Lässt sich der Standort nach dem Waschen wiederherstellen?', a: 'Nicht aus der gewaschenen Datei – die Felder werden entfernt, nicht versteckt. Das Original auf deinem Smartphone hat ihn noch, teile also nur die gewaschene Kopie.' },
      { q: 'Werden meine Fotos ohne GPS trotzdem verortet?', a: 'Das kann passieren. Smartphones bestimmen die Position auch über WLAN und Mobilfunk – entzieh also der Kamera-App selbst die Standortberechtigung, nicht nur das GPS.' },
      { q: 'Woran erkenne ich, ob ein Foto GPS-Daten hat?', a: 'Leg es in AI Label Remover: Der Tab „Was sie verrät“ zeigt jeden Standort mit dekodierten Koordinaten. Auf dem Smartphone zeigt das Info-Fenster des Fotos eine Karte, wenn GPS vorhanden ist.' },
      { q: 'Entfernen soziale Netzwerke GPS nicht sowieso?', a: 'Viele große entfernen EXIF aus dem veröffentlichten Bild. Anhänge, Dokumente und Cloud-Links behalten meist die Original-Metadaten.' },
      { q: 'Wird mein Foto gedreht?', a: 'Nein. Das Ausrichtungs-Tag bleibt erhalten, das Foto wird genau wie vorher angezeigt.' },
      { q: 'Funktionieren HEIC-Fotos vom iPhone?', a: 'Ja. HEIC- und HEIF-Dateien werden direkt gewaschen, ohne Formatwechsel und ohne Neukodierung.' },
    ],
  },

  'batch-remove-metadata': {
    metaTitle: 'Metadaten im Stapel aus Bildern entfernen – kostenlos, ohne Upload',
    related: ['remove-metadata-without-losing-quality', 'remove-metadata-windows-mac', 'remove-gps-location-from-photos'],
    description:
      'Metadaten aus bis zu 50 Bildern im Stapel entfernen, direkt im Browser: wie parallele Worker es schnell machen, wie jedes Ergebnis geprüft wird und wie alles als ZIP gespeichert wird.',
    updated: '2026-10-23',
    sections: [
      {
        heading: 'Ein Stapel von Anfang bis Ende',
        paragraphs: [],
        bullets: [
          'Leg bis zu 50 JPG-, PNG-, WebP-, GIF-, HEIC- oder AVIF-Dateien auf den Tisch (je 25 MB und 40 MP).',
          'Jede wird automatisch gelesen; klicke auf eine Datei in der Liste, um ihren Bericht zu sehen.',
          'Klicke einmal auf „Alle Bilder waschen“, um alles Gelesene zu waschen – dieselbe Engine wie beim Werkzeug [EXIF-Daten entfernen](remove-exif-data).',
          'Speichere die Dateien einzeln oder klicke auf „Alle als ZIP speichern“ für ein einziges Archiv.',
        ],
      },
      {
        heading: 'Tempo ohne Server',
        paragraphs: [
          'AI Label Remover verteilt die Arbeit auf mehrere Web Worker – Hintergrund-Threads im Browser – passend zur Zahl deiner CPU-Kerne. Jeder Worker nimmt eine Datei, analysiert sie und gibt gewaschene Bytes zurück, sodass die Seite selbst bei schweren HEIC-Dateien flüssig bleibt. Das ZIP nutzt die Methode „store“, da Bilder schon komprimiert sind; das Packen geht schnell und [bringt keinen weiteren Verlust](remove-metadata-without-losing-quality).',
        ],
      },
      {
        heading: 'Jedes Ergebnis wird erneut gelesen',
        paragraphs: [
          'Nach dem Waschen wird jede Ausgabedatei erneut gelesen, und das grüne Ergebnisfeld bestätigt, ob Orts-, Personen-, Zeitdaten und KI-Spuren weg sind. Haben zwei Dateien denselben Namen, bekommt die Kopie im ZIP eine Nummer, damit nichts überschrieben wird.',
        ],
      },
      {
        heading: 'Wenn es Hunderte Dateien sind',
        paragraphs: [
          'Arbeite in Runden zu 50 und räum den Tisch zwischendurch ab, um Speicher freizugeben. Schließe auf Smartphones mit wenig Speicher vorher andere schwere Tabs. Da nichts hochgeladen wird, kannst du nach dem Laden der Seite sogar offline gehen.',
        ],
      },
      {
        heading: 'Nichts verlässt den Rechner',
        paragraphs: [
          'Kein Bild wird hochgeladen, gespeichert oder protokolliert; der einzige Netzwerkverkehr ist das Laden der Seite selbst. Damit eignet sich das Waschen im Stapel für Kundenlieferungen, unveröffentlichte Shootings und alles, was du nicht an Dritte schicken darfst.',
        ],
      },
    ],
    faqHeading: 'Zum Waschen im Stapel',
    faq: [
      { q: 'Kann ein Stapel verschiedene Formate mischen?', a: 'Ja. Ein Stapel kann JPG, PNG, WebP, GIF, HEIC und AVIF mischen, und jede Datei behält ihr Format.' },
      { q: 'Warum maximal 50 Dateien?', a: 'Die gesamte Verarbeitung nutzt den Speicher deines Geräts. Die Grenze hält Smartphones und ältere Laptops stabil; du kannst beliebig viele Runden machen.' },
      { q: 'Ändern sich die Dateinamen?', a: 'Nein. Gewaschene Dateien behalten ihre Namen. Nur exakte Duplikate im ZIP bekommen eine Nummer angehängt.' },
      { q: 'Funktioniert es offline?', a: 'Ja. Einmal geladen, wäscht die Seite Dateien ohne Verbindung, weil nichts gesendet wird.' },
    ],
  },

  'chatgpt-gemini-image-metadata': {
    title: 'Bilder aus ChatGPT, Gemini und Nano Banana: Welche Metadaten sie enthalten',
    metaTitle: 'Metadaten in ChatGPT- und Gemini-Bildern: C2PA, SynthID',
    summary: [
      'Bilder aus ChatGPT oder Google Gemini (einschließlich Nano Banana) verlassen den Generator mit Herkunftsangaben: C2PA Content Credentials neben dem Bild und bei Google zusätzlich ein unsichtbares SynthID-Wasserzeichen in den Pixeln.',
      'Dieser Ratgeber zeigt, was die Anbieter typischerweise schreiben, wie du es im Browser liest, welche Teile ein Metadaten-Reiniger entfernen kann – und welche kein seriöses Werkzeug anrühren kann.',
    ],
    description:
      'Welche Metadaten Bilder aus ChatGPT und Gemini (Nano Banana) tragen – C2PA, SynthID, sichtbare Marken –, wie du sie liest und was Waschen entfernen kann.',
    related: ['synthid-invisible-ai-watermarks', 'what-metadata-ai-image-generators-add', 'how-to-check-if-image-is-ai-generated'],
    updated: '2026-10-23',
    sections: [
      {
        heading: 'Zwei Anbieter, zwei Ebenen der Kennzeichnung',
        paragraphs: [
          'OpenAI und Google kennzeichnen generierte Bilder, setzen aber auf unterschiedliche Ebenen. OpenAI stützt sich vor allem auf [C2PA Content Credentials](what-is-c2pa-content-credentials): ein signiertes Manifest in der Datei, das den Generator nennt und angibt, dass das Bild von KI erstellt wurde. Google stützt sich vor allem auf [SynthID](synthid-invisible-ai-watermarks), ein unsichtbares Wasserzeichen, das bei der Erzeugung in die Pixel eingebettet wird, und hat neueren Modellen wie Nano Banana Pro in der Gemini-App und den Cloud-Produkten C2PA-Metadaten hinzugefügt.',
          'Die beiden Ebenen verhalten sich sehr unterschiedlich. Metadaten stehen in einem eigenen Block, jeder fähige Viewer kann sie lesen, und sie verschwinden, sobald die Datei neu kodiert oder gewaschen wird. Ein Pixel-Wasserzeichen übersteht Zuschnitt, Skalierung und Kompression und lässt sich nur mit dem Detektor des Anbieters lesen.',
        ],
      },
      {
        heading: 'Was ein ChatGPT-Bild meist enthält',
        paragraphs: ['Die genauen Felder ändern sich zwischen App-Versionen, aber ein PNG oder JPEG direkt aus ChatGPT oder der OpenAI-Bild-API enthält häufig:'],
        bullets: [
          'Ein C2PA-Manifest – in einem caBX-Chunk bei PNG oder in APP11-Segmenten bei JPEG –, signiert mit einem auf OpenAI ausgestellten Zertifikat.',
          'Einen Claim Generator, der den OpenAI-Dienst nennt, der das Bild erzeugt hat.',
          'Eine c2pa.created-Aktion mit dem Digital Source Type [trainedAlgorithmicMedia](iptc-digitalsourcetype-ai) – die Standardformulierung für „von einem generativen Modell erstellt“.',
          'Wenn du ein hochgeladenes Foto bearbeitest, einen Ingredient-Eintrag mit Verweis auf das Original und Aktionen, die die Bearbeitung beschreiben.',
        ],
      },
      {
        heading: 'Was ein Gemini- oder Nano-Banana-Bild meist enthält',
        paragraphs: [
          'Jedes von Googles Modellen erzeugte Bild trägt SynthID in den Pixeln. Je nach Modell, App und Abo findest du außerdem ein sichtbares Funkel-Symbol in einer Ecke und bei neueren Modellen ein C2PA-Manifest, das das Bild als KI-generiert beschreibt. Google ermöglicht es auch, Gemini zu fragen, ob ein Bild SynthID enthält – der einzige zuverlässige Weg, das Wasserzeichen zu prüfen.',
          'Da das sichtbare Symbol und SynthID Teil des Bildes sind, bleiben sie von allem unberührt, was nur Metadaten bearbeitet. Ein vorhandenes C2PA-Manifest verhält sich wie jeder andere Metadatenblock.',
        ],
      },
      {
        heading: 'Warum die Metadaten oft von selbst verschwinden',
        paragraphs: [
          'Herkunftsmetadaten sind empfindlich. Ein Screenshot entfernt sie vollständig. Viele Messenger und soziale Netzwerke kodieren Uploads neu und säubern die öffentliche Kopie. Selbst das erneute Hochladen in einen Chat-Assistenten kann nur die reinen Bilddaten übrig lassen. Ein ChatGPT- oder Gemini-Bild ohne Content Credentials ist also häufig und beweist nichts über die Herkunft – nur der Original-Download enthält den vollständigen Datensatz.',
        ],
      },
      {
        heading: 'Lies die Datei, bevor du sie teilst',
        paragraphs: [
          'Leg das Bild oben auf den Tisch. Der Tab „KI-Spuren“ zeigt, ob ein C2PA-Manifest vorhanden ist, welcher Claim Generator es signiert hat und welchen Quelltyp es angibt. „Rohe Metadaten“ listet die erfassten Aktionen und Zutaten sowie EXIF- und XMP-Felder, die von durchlaufenen Apps hinzugefügt wurden. Nichts wird hochgeladen; die Datei wird in deinem Browser gelesen.',
        ],
      },
      {
        heading: 'Was Waschen entfernt – und was bleibt',
        paragraphs: ['Ein Klick auf „Alle Bilder waschen“ – oder der [KI-Metadaten-Entferner](ai-tag-cleaner) – schneidet die Metadaten aus dem Bytestrom, ohne das Bild neu zu zeichnen. In der Praxis:'],
        bullets: [
          'Entfernt: das C2PA-Manifest, XMP- und IPTC-Felder, EXIF und jeder Text, der das Werkzeug nennt oder einen Prompt enthält.',
          'Erhalten: Pixeldaten, Abmessungen, Drehung und ICC-Farbprofil – das Bild sieht identisch aus.',
          'Nicht betroffen: SynthID und ein sichtbares Funkel-Symbol, denn beide stecken in den Pixeln. Die Prüfwerkzeuge des Anbieters erkennen das Bild weiterhin am Wasserzeichen.',
        ],
      },
      {
        heading: 'KI-Bilder ehrlich verwenden',
        paragraphs: [
          'Waschen ist ein Datenschutzwerkzeug: Es verhindert, dass Prompts, Kontodaten und Bearbeitungsverlauf mit einer Datei mitreisen. Es ändert nicht, was das Bild ist. Wenn du ein realistisches KI-Bild veröffentlichst, erwarten die meisten Plattformen eine Kennzeichnung, und manche schränken die Reichweite von Konten ein, die das nicht tun. Korrigiere falsche Labels auf echten Fotos; kennzeichne echte KI-Arbeit klar.',
        ],
      },
    ],
    faqHeading: 'Zu Metadaten in ChatGPT- und Gemini-Bildern',
    faq: [
      { q: 'Enthält jedes ChatGPT-Bild C2PA?', a: 'Bilder, die direkt aus der Bildgenerierung von OpenAI heruntergeladen werden, enthalten normalerweise Content Credentials. Kopien per Screenshot, erneut gespeicherte oder durch andere Apps gereichte Dateien verlieren sie oft.' },
      { q: 'Kann AI Label Remover SynthID aus Gemini-Bildern entfernen?', a: 'Nein. SynthID ist in die Pixel eingebettet, und AI Label Remover verändert nie Pixel. Es entfernt nur Metadaten wie C2PA, XMP und EXIF.' },
      { q: 'Wie prüfe ich, ob ein Bild von Gemini stammt?', a: 'Such in AI Label Remover zuerst nach einem C2PA-Manifest. Für SynthID nutzt du Googles eigene Prüfung, etwa indem du Gemini nach dem Bild fragst.' },
      { q: 'Verschlechtert das Waschen eines ChatGPT-Bildes die Qualität?', a: 'Nein. Nur Metadatenblöcke werden entfernt; die komprimierten Bilddaten werden unverändert kopiert, das Ergebnis ist pixelgenau identisch.' },
    ],
  },

  'remove-metadata-windows-mac': {
    title: 'So entfernst du Metadaten aus Fotos unter Windows und auf dem Mac',
    metaTitle: 'Foto-Metadaten unter Windows 11 und Mac entfernen',
    summary: [
      'Windows und macOS bringen beide eine Möglichkeit mit, einige Metadaten aus Fotos zu entfernen, doch jede deckt nur einen Teil ab: Windows konzentriert sich auf EXIF-Eigenschaften, macOS auf den Standort.',
      'Hier findest du die genauen Schritte der eingebauten Werkzeuge, die kostenlose Kommandozeilen-Methode der Profis und eine Browser-Methode, die auf beiden Systemen gleich funktioniert und zusätzlich C2PA, XMP und KI-Prompts entfernt.',
    ],
    description:
      'Schritt für Schritt: EXIF, GPS und andere Metadaten unter Windows 11/10 und macOS mit Bordmitteln, ExifTool oder im Browser entfernen – und was dabei jeweils übrig bleibt.',
    related: ['view-remove-metadata-iphone-android', 'remove-metadata-without-losing-quality', 'what-is-exif-data'],
    updated: '2026-10-23',
    sections: [
      {
        heading: 'Wisse, was du entfernst',
        paragraphs: [
          'Ein Foto kann mehrere Arten von Metadaten gleichzeitig tragen: [EXIF](what-is-exif-data) (Kamera, Zeit, GPS), XMP (Bearbeitungsverlauf, Beschreibungen, KI-Felder), IPTC (Bildunterschriften, Rechte, [DigitalSourceType](iptc-digitalsourcetype-ai)), [C2PA Content Credentials](what-is-c2pa-content-credentials) und bei PNG-Dateien Text-Chunks mit KI-Prompts. Die Werkzeuge der Betriebssysteme wurden rund um EXIF entwickelt und lassen die anderen Arten meist stehen. Denk daran, wenn du eine Methode wählst.',
        ],
      },
      {
        heading: 'Windows 11 und 10: Datei-Explorer',
        paragraphs: ['Der Datei-Explorer hat einen eingebauten Entferner für gängige Eigenschaften:'],
        bullets: [
          'Markiere ein oder mehrere Fotos, klicke mit der rechten Maustaste und wähle Eigenschaften.',
          'Öffne den Tab Details und klicke unten auf „Eigenschaften und persönliche Informationen entfernen“.',
          'Wähle „Kopie erstellen, in der alle möglichen Eigenschaften entfernt sind“ für ein sauberes Duplikat oder „Folgende Eigenschaften aus dieser Datei entfernen“, um einzelne Felder anzuhaken.',
          'Klicke auf OK und öffne den Tab Details der Kopie, um zu prüfen, dass GPS- und Kamerafelder leer sind.',
        ],
      },
      {
        heading: 'Wo die Windows-Methode an Grenzen stößt',
        paragraphs: [
          'Die Option funktioniert am besten mit JPEG und TIFF. Bei PNG, WebP, HEIC und AVIF zeigt sie oft wenig oder nichts zum Entfernen an. Außerdem kann sie XMP-Pakete, C2PA-Manifeste und eingebettete Vorschaubilder zurücklassen und berichtet nicht, was übrig ist. Die Fotos-App bietet keinen Export, der Metadaten entfernt.',
        ],
      },
      {
        heading: 'macOS: Vorschau und Fotos',
        paragraphs: ['Auf dem Mac zielen die eingebauten Optionen auf den Standort:'],
        bullets: [
          'Vorschau: Foto öffnen, Werkzeuge › Informationen einblenden wählen, den Tab für den Ort (GPS) öffnen, auf „Ortsinformationen entfernen“ klicken und sichern.',
          'Fotos: Bilder auswählen und Bild › Ort › Ort ausblenden wählen oder über Ablage › Exportieren die Ortsinformationen abwählen, damit die exportierte Kopie kein GPS enthält.',
          'Informationen im Finder und das Informationsfenster der Vorschau eignen sich zur Kontrolle, zeigen aber beide nur einen Teil der Felder.',
        ],
      },
      {
        heading: 'Wo die Mac-Methode an Grenzen stößt',
        paragraphs: [
          'Wird nur der Standort entfernt, bleiben Gerätemodell, Aufnahmezeit, Software und Bearbeitungsverlauf erhalten. Ein JPEG-Export aus Vorschau oder Fotos [kodiert das Bild neu](remove-metadata-without-losing-quality), was jedes Mal etwas Qualität kostet, und HEIC-Dateien werden womöglich umgewandelt, wenn du nichts anderes wählst.',
        ],
      },
      {
        heading: 'Kommandozeile auf beiden: ExifTool',
        paragraphs: [
          'ExifTool ist ein kostenloses, seit Langem bewährtes Metadaten-Werkzeug für Windows, macOS und Linux. Es bearbeitet Dateien, ohne sie neu zu kodieren. Nützliche Befehle:',
        ],
        bullets: [
          'exiftool -all= foto.jpg – entfernt alle beschreibbaren Metadaten und legt eine Sicherung namens foto.jpg_original an.',
          'exiftool -all= --icc_profile:all -tagsfromfile @ -orientation foto.jpg – entfernt alles außer Farbprofil und Ausrichtung, damit Farben und Drehung stimmen.',
          'exiftool -all= -r "C:\\Fotos\\Teilen" – säubert einen ganzen Ordner samt Unterordnern.',
        ],
      },
      {
        heading: 'Browser-Methode: gleiche Schritte auf jedem Computer',
        paragraphs: [
          'Wenn du keine Software installieren darfst – etwa auf einem Firmenlaptop – oder eine Methode für alle Formate willst, öffne AI Label Remover in Chrome, Edge, Safari oder Firefox. Zieh bis zu 50 Bilder hinein, lies den Bericht, klicke auf „Alle Bilder waschen“ und speichere die Dateien oder ein ZIP. Es [entfernt EXIF](remove-exif-data), GPS, XMP, IPTC, C2PA und PNG-Prompt-Chunks aus JPEG, PNG, WebP, GIF, HEIC und AVIF, behält Ausrichtung und Farbprofil und läuft vollständig auf deinem Rechner.',
        ],
      },
      {
        heading: 'Welche Methode passt',
        paragraphs: [],
        bullets: [
          'Ein JPEG, nur das Nötigste: Datei-Explorer unter Windows, Vorschau auf dem Mac.',
          'Nur der Standort, direkt aus der Mediathek: Fotos auf dem Mac.',
          'Skripte, Server oder Tausende Dateien: ExifTool.',
          'Gemischte Formate, KI-Metadaten oder keine Installation erlaubt: ein lokales Browser-Werkzeug wie AI Label Remover.',
        ],
      },
    ],
    faqHeading: 'Zum Entfernen von Metadaten am Computer',
    faq: [
      { q: 'Löscht „Eigenschaften und persönliche Informationen entfernen“ das GPS?', a: 'Ja, bei JPEG-Dateien entfernt es GPS zusammen mit anderen EXIF-Eigenschaften. Prüfe den Tab Details des Ergebnisses, denn manche XMP-Daten können bleiben.' },
      { q: 'Kann ich unter Windows Metadaten aus HEIC-Fotos entfernen?', a: 'Der Datei-Explorer unterstützt HEIC nur eingeschränkt. ExifTool oder ein Browser-Werkzeug mit HEIC-Unterstützung wie AI Label Remover entfernt sie, ohne die Datei umzuwandeln.' },
      { q: 'Entfernt ein Export aus der Vorschau alle Metadaten?', a: 'Nicht zuverlässig. Der Export kann manche Felder entfernen und andere behalten und komprimiert JPEGs neu. Prüfe die exportierte Datei vor dem Teilen.' },
      { q: 'Welche Methode erhält die Bildqualität?', a: 'Datei-Explorer, ExifTool und AI Label Remover bearbeiten Metadaten ohne Neukodierung. Ein neuer JPEG-Export aus einem Editor oder Viewer komprimiert das Bild neu.' },
    ],
  },

  'image-metadata-viewer-online': {
    title: 'Metadaten-Viewer für Bilder: EXIF, GPS, XMP, IPTC und C2PA an einem Ort',
    metaTitle: 'Metadaten-Viewer: EXIF, GPS und KI-Daten prüfen',
    summary: [
      'Bevor du ein Foto teilst oder einem Bild vertraust, zeigt dir ein guter Metadaten-Viewer alles, was die Datei über sich verrät – nicht nur die paar Felder, die Smartphone oder Dateimanager anzeigen.',
      'Dieser Ratgeber erklärt, was eine vollständige Prüfung umfasst, wo eingebaute Viewer aufhören, warum viele Online-EXIF-Viewer selbst ein Datenschutzrisiko sind und wie du die wichtigen Felder liest.',
    ],
    description:
      'Kostenloser Metadaten-Viewer: alle EXIF-, GPS-, XMP-, IPTC-, C2PA- und KI-Prompt-Felder im Browser ansehen, ohne Upload – und was eingebaute Viewer übersehen.',
    related: ['what-is-exif-data', 'how-to-check-if-image-is-ai-generated', 'remove-gps-location-from-photos'],
    updated: '2026-10-23',
    sections: [
      {
        heading: 'Was eine vollständige Prüfung umfasst',
        paragraphs: ['Ein gründlicher Metadaten-Viewer liest jeden Block der Datei, nicht nur EXIF:'],
        bullets: [
          'EXIF – Kamera- oder Smartphone-Modell, Belichtung, Aufnahmezeit, Objektiv und Ausrichtung.',
          'GPS – Breite, Länge, Höhe und Richtung, falls der Standort aktiv war.',
          'XMP – Bearbeitungssoftware, Verlauf, Beschreibungen, Bewertungen und KI-Felder.',
          'IPTC – Bildunterschriften, Stichwörter, Urheber, Copyright und [DigitalSourceType](iptc-digitalsourcetype-ai).',
          'C2PA – [Content Credentials](what-is-c2pa-content-credentials): wer die Datei signiert hat, welche Aktionen erfasst wurden, ob KI beteiligt war.',
          'PNG-Text-Chunks – [Stable-Diffusion-Parameter, ComfyUI-Workflows](remove-stable-diffusion-comfyui-metadata) und anderer eingebetteter Text.',
          'ICC-Profil und Vorschaubilder – Farbinformationen und versteckte Vorschaubilder.',
        ],
      },
      {
        heading: 'Eingebaute Viewer und ihre blinden Flecken',
        paragraphs: [
          'Windows zeigt Metadaten unter Eigenschaften › Details, macOS im Informationsfenster der Vorschau oder unter Informationen im Finder, das iPhone beim Wischen nach oben auf einem Foto, Google Fotos im Detailbereich. Für einen schnellen Blick auf Datum, Kamera und Standort reicht das, doch sie zeigen nur eine Auswahl der EXIF-Felder und ignorieren XMP, IPTC, C2PA und PNG-Text meist völlig. Eine Datei kann im Explorer sauber aussehen und trotzdem einen kompletten KI-Prompt enthalten.',
        ],
      },
      {
        heading: 'Der Datenschutz-Haken bei Online-EXIF-Viewern',
        paragraphs: [
          'Viele „Online-EXIF-Viewer“ laden dein Bild auf ihren Server, lesen es dort und schicken einen Bericht zurück. Für eine Datenschutzprüfung ist das verkehrt herum: Genau das Foto, um das du dir Sorgen machst – samt GPS-Position –, liegt nun bei einem Dritten. Nimm lieber einen Viewer, der die Datei lokal liest. Ein einfacher Test: Seite laden, Internet trennen und schauen, ob der Viewer weiter funktioniert.',
        ],
      },
      {
        heading: 'Eine Datei in AI Label Remover lesen',
        paragraphs: ['Leg das Bild oben auf den Tisch. Drei Tabs ordnen das Ergebnis:'],
        bullets: [
          '„Was sie verrät“ – eine klare Zusammenfassung von Ort, Personen, Zeit und Gerät, mit GPS in Dezimalkoordinaten.',
          '„KI-Spuren“ – C2PA-Manifeste, IPTC-Quelltypen, Generatornamen und Prompts, mit einem Ergebnis.',
          '„Rohe Metadaten“ – jedes Feld nach Herkunft gruppiert: EXIF IFD0, Exif, GPS, XMP-Namensräume, IPTC, C2PA und PNG-Text-Chunks.',
        ],
      },
      {
        heading: 'Felder, die du zuerst lesen solltest',
        paragraphs: [],
        bullets: [
          'GPSLatitude / GPSLongitude – [der genaue Ort](remove-gps-location-from-photos); in eine Karte einfügen, um zu sehen, was er verrät.',
          'DateTimeOriginal und ModifyDate – wann das Foto aufgenommen und wann es zuletzt gespeichert wurde.',
          'Make, Model, BodySerialNumber, LensSerialNumber – können Fotos einem Gerät zuordnen.',
          'Artist, Copyright, OwnerName – Namen, von denen du vielleicht nicht weißt, dass sie eingebettet sind.',
          'Software und CreatorTool – welche Apps die Datei bearbeitet haben, KI-Werkzeuge eingeschlossen.',
          'DigitalSourceType und der C2PA-Claim-Generator – wie das Bild angibt, entstanden zu sein.',
        ],
      },
      {
        heading: 'Wenn der Viewer kaum etwas zeigt',
        paragraphs: [
          'Ein aus einem Feed gespeichertes Bild, ein Screenshot oder eine per Messenger verschickte Datei ist oft neu kodiert und gesäubert. Wenige oder keine Metadaten sind dann normal und sagen nichts darüber aus, ob das Bild echt, bearbeitet oder KI-generiert ist. Bitte um die Originaldatei, wenn die Herkunft wichtig ist.',
        ],
      },
      {
        heading: 'Ansehen ist nicht verifizieren',
        paragraphs: [
          'Gewöhnliche Metadaten sind Klartext, den jeder bearbeiten kann – behandle sie als Hinweis, nicht als Beweis. C2PA ist anders, weil es signiert ist, doch ein Viewer, der das Manifest anzeigt, validiert noch nicht die Signatur; nutze dafür einen offiziellen Content-Credentials-Verifier. Wenn du genug gesehen hast und die Daten loswerden willst, klicke auf „Alle Bilder waschen“, um sie zu entfernen, ohne das Bild zu verändern – die Seite [EXIF-Daten entfernen](remove-exif-data) erklärt genau, was wegfällt.',
        ],
      },
    ],
    faqHeading: 'Zum Ansehen von Bild-Metadaten',
    faq: [
      { q: 'Gibt es einen kostenlosen Metadaten-Viewer, der mein Foto nicht hochlädt?', a: 'Ja. AI Label Remover liest Dateien in deinem Browser, ohne Upload und ohne Konto, und funktioniert nach dem Laden der Seite auch offline.' },
      { q: 'Kann ich den Prompt eines KI-Bildes sehen?', a: 'Wenn der Generator ihn gespeichert hat, ja. Prompts aus Stable Diffusion und ComfyUI erscheinen unter den PNG-Text-Chunks, und manche Dienste speichern Prompts in XMP- oder EXIF-Feldern.' },
      { q: 'Warum zeigt Windows für mein PNG keine Metadaten?', a: 'Der Datei-Explorer zeigt bei PNG nur wenige Eigenschaften. Text-Chunks, XMP und C2PA sind dort unsichtbar, erscheinen aber in einem vollständigen Viewer.' },
      { q: 'Können Metadaten zeigen, ob ein Foto gefälscht ist?', a: 'Sie können starke Hinweise liefern, etwa einen KI-Claim-Generator, aber fehlende oder bearbeitete Metadaten beweisen für sich allein nichts.' },
    ],
  },

  'iptc-digitalsourcetype-ai': {
    title: 'IPTC DigitalSourceType: Das Feld, das Plattformen sagt, dass ein Bild KI ist',
    metaTitle: 'IPTC DigitalSourceType und trainedAlgorithmicMedia',
    summary: [
      'DigitalSourceType ist ein kleines IPTC-Metadatenfeld mit großer Wirkung: Ein einziger Wert wie trainedAlgorithmicMedia genügt vielen Plattformen, um ein Bild als KI-generiert zu kennzeichnen.',
      'Dieser Ratgeber listet die Werte auf, die dir begegnen, wer das Feld schreibt und liest, warum es leicht zu ändern ist und wie du es in einer Datei findest oder entfernst.',
    ],
    description:
      'Was das IPTC-Feld DigitalSourceType bedeutet, die Werte trainedAlgorithmicMedia und compositeWithTrainedAlgorithmicMedia, wer es liest und wie du es findest oder entfernst.',
    related: ['made-with-ai-label', 'what-is-c2pa-content-credentials', 'which-platforms-label-ai-images'],
    updated: '2026-10-23',
    sections: [
      {
        heading: 'Ein Feld, eine feste Liste von Antworten',
        paragraphs: [
          'DigitalSourceType gehört zum IPTC Photo Metadata Standard, dem Vokabular, mit dem Redaktionen, Bildagenturen und Fotosoftware Bilder beschreiben. Es beantwortet eine Frage: Wie ist dieser Inhalt entstanden? Die Antwort ist kein freier Text, sondern ein Begriff aus dem kontrollierten IPTC-Vokabular „digital source type“, geschrieben als URI wie http://cv.iptc.org/newscodes/digitalsourcetype/trainedAlgorithmicMedia.',
          'In Bilddateien steht das Feld im XMP als Iptc4xmpExt:DigitalSourceType. [C2PA Content Credentials](what-is-c2pa-content-credentials) verwenden dasselbe Vokabular in ihren signierten Aktionen, daher tauchen die gleichen Begriffe an beiden Stellen auf.',
        ],
      },
      {
        heading: 'Die Werte, die dir begegnen',
        paragraphs: ['Das Vokabular ist über die Jahre gewachsen. Für KI-Labels sind diese Begriffe am wichtigsten:'],
        bullets: [
          'trainedAlgorithmicMedia – von einem generativen Modell erstellt, das mit Beispielinhalten trainiert wurde.',
          'compositeWithTrainedAlgorithmicMedia – eine Montage mit generativen KI-Elementen, zum Beispiel [ein mit Generativer Füllung bearbeitetes Foto](turn-off-content-credentials-photoshop-lightroom).',
          'algorithmicMedia – rein algorithmisch ohne Trainingsdaten erzeugt, etwa prozedurale oder fraktale Kunst.',
          'compositeSynthetic – eine Montage mit synthetischen Elementen.',
          'algorithmicallyEnhanced – geringfügige Verbesserung oder Korrektur durch einen Algorithmus.',
          'digitalCapture – mit Digitalkamera oder Scanner von einer realen Szene aufgenommen.',
          'computationalCapture – eine bei der Aufnahme algorithmisch verarbeitete Aufnahme, wie bei vielen Smartphones.',
          'digitalArt und screenCapture – von einem Menschen mit Software erstellte Kunst sowie Screenshots.',
        ],
      },
      {
        heading: 'Wer es schreibt',
        paragraphs: [
          'Mehrere KI-Bilddienste schreiben trainedAlgorithmicMedia in ihre Ausgabe. Editoren mit generativen Werkzeugen können nach einer KI-Bearbeitung einen Montagewert eintragen. Bildarchive und Nachrichtenagenturen füllen das Feld bei der Aufnahme aus, und manche Marktplätze verlangen, dass Verkäufer KI-Bilder so kennzeichnen. Das Feld kann auch unbemerkt weitergereicht werden: Einmal gesetzt, übersteht es jede App, die XMP erhält.',
        ],
      },
      {
        heading: 'Wer es liest',
        paragraphs: [
          'Meta hat erklärt, IPTC-Metadaten zusammen mit C2PA zu nutzen, um zu entscheiden, ob auf Facebook, Instagram und Threads [„KI-Info“](made-with-ai-label) angezeigt wird. [Andere Plattformen](which-platforms-label-ai-images), Suchmaschinen und Shopping-Dienste haben eine ähnliche Nutzung des Feldes für KI-Hinweise angekündigt. Deshalb kann ein leicht retuschiertes echtes Foto mit compositeWithTrainedAlgorithmicMedia genauso gekennzeichnet werden wie ein vollständig generiertes Bild.',
        ],
      },
      {
        heading: 'Unsigniert, also leicht änderbar',
        paragraphs: [
          'Anders als ein C2PA-Manifest tragen einfache IPTC-Metadaten keine Signatur. Jeder Metadaten-Editor kann DigitalSourceType hinzufügen, ändern oder entfernen, und viele Apps verwerfen es beim erneuten Speichern. Betrachte das Feld als Erklärung, nicht als Beweis – egal ob es „KI“ oder „Kamera“ sagt.',
        ],
      },
      {
        heading: 'Finden und entfernen',
        paragraphs: [
          'Leg das Bild in AI Label Remover. Unter „KI-Spuren“ erscheint das Feld als „XMP · Iptc4xmpExt › DigitalSourceType“ mit seinem Wert; derselbe Begriff in einem C2PA-Manifest steht unter C2PA. „Alle Bilder waschen“ entfernt das ganze XMP-Paket und den C2PA-Speicher und damit auch das Feld, dazu EXIF und andere identifizierende Daten. Die Seite [KI-Metadaten entfernen](ai-tag-cleaner) behandelt auch die übrigen KI-Felder.',
          'Wenn du nur dieses eine Feld entfernen und den Rest deines XMP behalten willst, geht das per Kommandozeile: exiftool -XMP-iptcExt:DigitalSourceType= foto.jpg. Denk daran, dass ein passender Wert auch in einem C2PA-Manifest stehen kann.',
        ],
      },
      {
        heading: 'Wann das Feld bleiben sollte',
        paragraphs: [
          'Das Feld existiert, damit Betrachter wissen, wie ein Bild entstanden ist. Ist ein Bild wirklich KI-generiert oder stark durch KI verändert, behalte die Angabe – oder kennzeichne es beim Posten. Entfernen ist angebracht, wenn es deine Arbeit falsch beschreibt oder wenn du private Daten aus einer Datei entfernst.',
        ],
      },
    ],
    faqHeading: 'Zu IPTC DigitalSourceType',
    faq: [
      { q: 'Was bedeutet trainedAlgorithmicMedia?', a: 'Es ist der IPTC-Begriff für Inhalte, die ein generatives KI-Modell erstellt hat – ein vollständig KI-generiertes Bild.' },
      { q: 'Warum steht bei meinem bearbeiteten Foto compositeWithTrainedAlgorithmicMedia?', a: 'Weil eine generative Bearbeitung erfasst wurde, etwa das Entfernen eines Objekts mit KI. Der Begriff kennzeichnet eine Montage mit KI-generierten Teilen, unabhängig von deren Größe.' },
      { q: 'Ist DigitalSourceType dasselbe wie C2PA?', a: 'Nein. DigitalSourceType ist ein meist unsigniertes IPTC-Feld im XMP. C2PA ist ein signiertes Manifest, das dasselbe Vokabular in seinen Aktionen enthalten kann.' },
      { q: 'Kann ich mit AI Label Remover nur DigitalSourceType entfernen?', a: 'Derzeit nicht. AI Label Remover entfernt XMP und C2PA in einem Durchgang. ExifTool kann das einzelne Feld löschen, wenn du andere XMP-Daten behalten musst.' },
    ],
  },

  'remove-metadata-without-losing-quality': {
    title: 'Metadaten ohne Qualitätsverlust entfernen: Warum Screenshots und Neuspeichern schaden',
    metaTitle: 'Bild-Metadaten ohne Qualitätsverlust entfernen',
    summary: [
      'Die schnellen Wege, Metadaten loszuwerden – ein Screenshot, erneutes Speichern im Editor, ein Online-Konverter – zeichnen das Bild neu. Die Metadaten sind weg, aber auch Schärfe, Auflösung oder Farbtreue.',
      'Dieser Ratgeber erklärt, warum das passiert, wie du Metadaten ohne Qualitätsverlust entfernst und wie du selbst prüfst, dass sich kein einziges Pixel geändert hat.',
    ],
    description:
      'EXIF, GPS, C2PA und KI-Metadaten ohne Qualitätsverlust entfernen: warum Screenshots und Neuspeichern Qualität kosten, wie verlustfreies Entfernen funktioniert und wie du es prüfst.',
    related: ['batch-remove-metadata', 'remove-metadata-windows-mac', 'what-is-exif-data'],
    updated: '2026-10-23',
    sections: [
      {
        heading: 'Metadaten und Pixel leben getrennt',
        paragraphs: [
          'Jedes gängige Bildformat trennt das Bild von den Notizen darüber. Ein JPEG ist eine Folge von Marker-Segmenten: Metadaten in APP1, APP11 und APP13, das komprimierte Bild nach dem SOS-Marker. Ein PNG ist eine Liste von Chunks, mit den Pixeln in IDAT und Text in tEXt, zTXt oder iTXt. WebP nutzt RIFF-Chunks, HEIC und AVIF nutzen ISOBMFF-Boxen. Weil beides getrennt gespeichert ist, lassen sich Metadaten entfernen, ohne das Bild überhaupt zu dekodieren.',
        ],
      },
      {
        heading: 'Die üblichen Abkürzungen und ihr Preis',
        paragraphs: [],
        bullets: [
          'Screenshot – entfernt alle Metadaten, nimmt aber in Bildschirmauflösung auf, kann zuschneiden oder skalieren, Farben verschieben und Benachrichtigungen oder andere Inhalte mit erfassen.',
          'Neu speichern oder als JPEG exportieren – dekodiert und komprimiert das Bild neu; jede Generation fügt Artefakte hinzu, und das ICC-Profil kann verloren gehen, sodass sich Farben verschieben.',
          'Online-Konverter – kodieren das Bild neu und laden es meist vorher auf einen Server.',
          'Formatwechsel, zum Beispiel [von HEIC zu JPEG](view-remove-metadata-iphone-android) – ändert die Kompression und verliert oft Wide-Gamut-Farben oder Transparenz.',
        ],
      },
      {
        heading: 'Metadaten ohne Qualitätsverlust entfernen',
        paragraphs: [
          'Ein verlustfreier Reiniger durchläuft die Dateistruktur und kopiert jeden Block, der das Bild beschreibt, und überspringt nur die Blöcke mit Metadaten. Bei JPEG heißt das: APP1 mit EXIF und XMP, APP11 mit C2PA, APP13 mit IPTC und Kommentare fallen weg, während Quantisierungstabellen, Huffman-Tabellen und Scandaten unverändert kopiert werden. Bei PNG werden ganze Text- und Metadaten-Chunks entfernt, sodass die CRC jedes verbleibenden Chunks gültig bleibt. Bei HEIC und AVIF werden Metadaten-Items entfernt und interne Offsets neu geschrieben, damit die Bilddaten weiter an die richtige Stelle zeigen.',
          'AI Label Remover arbeitet genau so in deinem Browser – ob du [EXIF-Daten entfernst](remove-exif-data) oder [PNG-Metadaten entfernst](png-metadata-remover). Die Ausgabe enthält exakt dieselben komprimierten Bilddaten wie die Eingabe.',
        ],
      },
      {
        heading: 'Drei Dinge, die ein guter Reiniger behält',
        paragraphs: [],
        bullets: [
          'Ausrichtung – viele Smartphone-Fotos werden seitlich gespeichert, mit [einem EXIF-Tag](what-is-exif-data), das Viewern sagt, sie zu drehen. Fehlt es, erscheinen Hochformatfotos gedreht. AI Label Remover schreibt das Tag in einen minimalen EXIF-Block zurück.',
          'Farbprofil – das ICC-Profil sagt Apps, wie Farben zu interpretieren sind, besonders bei Display-P3-Fotos von Smartphones. Ohne es wirken Bilder flau oder übersättigt.',
          'Animation und Transparenz – Frames von APNG, animiertem WebP und GIF sowie Alphakanäle müssen unversehrt bleiben.',
        ],
      },
      {
        heading: 'So prüfst du, ob es wirklich verlustfrei war',
        paragraphs: ['Du musst einem Werkzeug nicht einfach glauben:'],
        bullets: [
          'Abmessungen vergleichen – Breite und Höhe müssen identisch sein.',
          'Dateigröße vergleichen – die saubere Datei darf nur etwa um die Größe der entfernten Metadaten kleiner sein, nie drastisch kleiner.',
          'Pixel vergleichen – beide in einem Editor als Ebenen mit dem Mischmodus Differenz öffnen; ein verlustfreies Ergebnis ist reines Schwarz.',
          'Datei erneut lesen – [AI Label Remover liest jede gewaschene Datei erneut](batch-remove-metadata) und zeigt, welche Felder übrig sind.',
        ],
      },
      {
        heading: 'Woher die Ersparnis bei der Größe kommt',
        paragraphs: [
          'Das Entfernen von Metadaten kann Dateien trotzdem spürbar verkleinern. Eingebettete Vorschaubilder und MPF-Vorschauen in Kamera-JPEGs, lange XMP-Bearbeitungsverläufe und große [ComfyUI-Workflows](remove-stable-diffusion-comfyui-metadata) in PNGs können Dutzende oder Hunderte Kilobyte ausmachen. Ihr Entfernen verkleinert die Datei, ohne zu ändern, was du siehst.',
        ],
      },
    ],
    faqHeading: 'Zum verlustfreien Entfernen von Metadaten',
    faq: [
      { q: 'Verschlechtert das Entfernen von Metadaten die Bildqualität?', a: 'Nicht, wenn es auf Byte-Ebene geschieht. Nur Neukodierung – Screenshots, Neuspeichern, Konvertieren – kostet Qualität.' },
      { q: 'Warum ist meine Datei nach dem Waschen kleiner?', a: 'Weil Metadatenblöcke, Miniaturbilder und eingebettete Vorschauen entfernt wurden. Die Bilddaten selbst sind unverändert.' },
      { q: 'Sehen die Farben nach dem Waschen anders aus?', a: 'Nein. AI Label Remover behält das ICC-Farbprofil, die Farben werden genau wie vorher angezeigt.' },
      { q: 'Ist ein Screenshot ein sicherer Weg, Metadaten zu entfernen?', a: 'Er entfernt Metadaten, senkt aber die Qualität und kann anderes vom Bildschirm erfassen. Verlustfreies Entfernen lässt das Originalbild unangetastet.' },
    ],
  },

  'how-to-check-if-image-is-ai-generated': {
    metaTitle: 'Prüfen, ob ein Bild KI-generiert ist (kostenlos)',
    related: ['iptc-digitalsourcetype-ai', 'image-metadata-viewer-online', 'synthid-invisible-ai-watermarks'],
    title: 'Ist dieses Bild KI-generiert? So prüfst du die Datei selbst',
    summary: [
      'Der schnellste verlässliche Hinweis, ob ein Bild KI-generiert ist, steckt in der Datei: C2PA Content Credentials, das IPTC-Feld DigitalSourceType und Generatortext nennen oft genau das Werkzeug, das ein Bild erzeugt hat.',
      'Hier erfährst du, worauf du achten solltest, wie du es mit einem kostenlosen Prüfwerkzeug im Browser liest und warum ein leeres Ergebnis nie beweist, dass ein Bild echt ist.',
    ],
    description:
      'Prüfe, ob ein Bild KI-generiert ist, indem du C2PA-, IPTC-DigitalSourceType- und Generator-Metadaten im Browser liest – und was jedes Signal beweisen kann und was nicht.',
    updated: '2026-10-23',
    sections: [
      {
        heading: 'Besorg dir das Original',
        paragraphs: [
          'Metadaten überleben nur in der Datei, wie sie Kamera oder Generator verlassen hat. Screenshots, neu gespeicherte Dateien und Bilder aus sozialen Feeds sind meist neu kodiert und haben das meiste verloren. Bitte nach Möglichkeit um den Originalexport – den „als Datei“ gesendeten, nicht das komprimierte Foto.',
        ],
      },
      {
        heading: 'Hinweis eins: Content Credentials',
        paragraphs: [
          'Werkzeuge mit C2PA-Unterstützung hängen [einen digital signierten Datensatz](what-is-c2pa-content-credentials) an. Sein Claim Generator nennt die App oder den Dienst, der das Bild erzeugt hat, seine c2pa.actions listen Schritte wie „erstellt“ oder „bearbeitet“, und ein digitalSourceType kann KI-Erzeugung direkt angeben.',
          'Weil der Datensatz signiert ist, kann ein Verifier auch erkennen, ob sich das Bild nach der Signatur verändert hat. Ein Manifest von einem KI-Dienst ist der stärkste Beleg, den Metadaten liefern können.',
        ],
      },
      {
        heading: 'Hinweis zwei: IPTC DigitalSourceType',
        paragraphs: ['Viele Generatoren und Editoren füllen [ein Standard-IPTC-Feld](iptc-digitalsourcetype-ai) aus, das beschreibt, wie der Inhalt entstanden ist. Die häufigsten Werte:'],
        bullets: [
          'trainedAlgorithmicMedia – von einem generativen KI-Modell erzeugt.',
          'compositeWithTrainedAlgorithmicMedia – ein echtes Foto mit KI-generierten oder ersetzten Bereichen, etwa durch Generative Füllung.',
          'algorithmicMedia – von einem Algorithmus ohne Trainingsdaten erzeugt, etwa prozedurale Kunst.',
          'digitalCapture – mit einer Kamera aufgenommen, kein generativer Inhalt angegeben.',
        ],
      },
      {
        heading: 'Hinweis drei: Prompts und Werkzeugnamen',
        paragraphs: [
          '[Stable-Diffusion-Oberflächen und ComfyUI](remove-stable-diffusion-comfyui-metadata) speichern Prompt, Seed, Modell und Workflow als Text in PNG-Dateien. Andere Werkzeuge hinterlassen ihren Namen in XMP CreatorTool oder EXIF Software. Jedes davon deutet klar auf KI-Beteiligung hin – und verrät oft genau, wie das Bild entstanden ist.',
        ],
      },
      {
        heading: 'Prüfen, ob ein Bild KI-generiert ist',
        paragraphs: [
          'Leg die Datei oben auf den Tisch. Der Tab „KI-Spuren“ liefert eines von drei Ergebnissen – KI-Spuren gefunden, einen zweiten Blick wert oder keine KI-Spuren – und listet jedes Signal mit seiner Quelle. „Rohe Metadaten“ zeigt die zugrunde liegenden Werte. Nichts wird hochgeladen. Um Gefundenes zu entfernen, nutze die Seite [KI-Metadaten entfernen](ai-tag-cleaner).',
        ],
      },
      {
        heading: 'Wenn die Datei leer ist',
        paragraphs: [
          'Fehlende Metadaten beweisen in keine Richtung etwas: Editoren, Messenger und soziale Netzwerke entfernen sie ständig, und fehlendes Kamera-EXIF ist bestenfalls ein schwacher Hinweis. Nächste Schritte sind der Wasserzeichen-Check des Anbieters (etwa für [Googles SynthID](synthid-invisible-ai-watermarks)), eine umgekehrte Bildersuche nach der frühesten Kopie und ein Blick darauf, wo das Bild zuerst auftauchte. Pixelbasierte KI-Detektoren liefern Wahrscheinlichkeiten, keine Beweise.',
        ],
      },
    ],
    faqHeading: 'Zur KI-Prüfung von Bildern',
    faq: [
      { q: 'Kann ich erkennen, ob ein Bild mit ChatGPT oder Gemini erstellt wurde?', a: 'Wenn die Datei noch ihre Content Credentials hat, nennt der Claim Generator den Dienst. Bei Gemini-Bildern kann Googles SynthID-Prüfung zusätzlich das Wasserzeichen in den Pixeln erkennen.' },
      { q: 'Wenn AI Label Remover keine KI-Spuren findet, ist das Foto echt?', a: 'Nicht unbedingt. Es bedeutet, dass die Datei keine KI-Metadaten enthält. Metadaten gehen leicht verloren oder werden entfernt – lies ein sauberes Ergebnis als „unbekannt“, nicht als Beweis.' },
      { q: 'Kann ich etwas prüfen, das ich von Instagram oder Facebook gespeichert habe?', a: 'Ja, aber Plattformen säubern die veröffentlichte Kopie meist, also erwarte wenig oder nichts. Das „KI-Info“-Label der Plattform ist ein separates Signal.' },
      { q: 'Ist die Prüfung kostenlos und privat?', a: 'Ja – kostenlos, ohne Konto, und die Datei wird lokal gelesen, ohne hochgeladen zu werden.' },
    ],
  },

  'which-platforms-label-ai-images': {
    metaTitle: 'Welche Plattformen KI-Bilder kennzeichnen: Meta, TikTok',
    related: ['made-with-ai-label', 'iptc-digitalsourcetype-ai', 'what-is-c2pa-content-credentials'],
    title: 'KI-Labels in sozialen Medien: Instagram, Facebook, TikTok, YouTube, Pinterest und LinkedIn',
    summary: [
      'Immer mehr Plattformen versehen Bilder und Videos mit Labels wie „KI-Info“. Die meisten stützen sich auf dieselben Signale in der Datei – C2PA Content Credentials und IPTC-Metadaten – kombiniert mit dem, was Creator angeben.',
      'Dieser Überblick zeigt, wie die großen Plattformen Labels allgemein vergeben, was sie auslöst und was das für echte Fotos mit leichter KI-gestützter Bearbeitung bedeutet.',
    ],
    description:
      'Wie Instagram, Facebook, Threads, TikTok, YouTube, Pinterest und LinkedIn KI-Labels vergeben, welche Datei-Metadaten sie auslösen und was das für bearbeitete Fotos heißt.',
    updated: '2026-10-23',
    sections: [
      {
        heading: 'Die gemeinsamen Signale',
        paragraphs: ['Automatische Kennzeichnung beruht meist auf einer kurzen Liste gängiger Signale:'],
        bullets: [
          '[C2PA Content Credentials](what-is-c2pa-content-credentials), die KI-Erzeugung oder KI-Bearbeitung angeben.',
          '[Das IPTC-Feld DigitalSourceType](iptc-digitalsourcetype-ai), etwa trainedAlgorithmicMedia.',
          '[Unsichtbare Wasserzeichen mancher KI-Anbieter](synthid-invisible-ai-watermarks), sofern die Plattform einen passenden Detektor hat.',
          'Angabe durch Creator – ein Schalter oder Häkchen beim Posten realistischer KI-Inhalte.',
        ],
      },
      {
        heading: 'Meta: Instagram, Facebook, Threads',
        paragraphs: [
          'Meta zeigt [„KI-Info“](made-with-ai-label) (2024 von „Mit KI erstellt“ umbenannt), wenn es branchenübliche KI-Signale erkennt oder ein Creator KI-Nutzung angibt. Nachdem Fotografen kritisiert hatten, dass leicht retuschierte Fotos gekennzeichnet wurden, verschob Meta das Label für KI-bearbeitete Inhalte ins Beitragsmenü und behielt das sichtbarere Label für überwiegend generierte Inhalte bei.',
        ],
      },
      {
        heading: 'TikTok',
        paragraphs: [
          'TikTok verlangt von Creatorn, realistische KI-generierte Inhalte zu kennzeichnen, und hat erklärt, Uploads automatisch zu labeln, die mit C2PA Content Credentials ankommen, die sie als KI-generiert ausweisen.',
        ],
      },
      {
        heading: 'YouTube',
        paragraphs: [
          'YouTube bittet Uploader, realistische veränderte oder synthetische Inhalte anzugeben, und zeigt Zuschauern ein Label. C2PA nutzt YouTube auch in die andere Richtung, mit einem Hinweis im Stil von „mit einer Kamera aufgenommen“ für Inhalte mit authentischen Aufnahme-Credentials.',
        ],
      },
      {
        heading: 'Pinterest und LinkedIn',
        paragraphs: [
          'Pinterest hat Labels für KI-generierte oder KI-veränderte Bilder eingeführt, gestützt auf Metadaten und eigene Klassifikatoren. LinkedIn zeigt bei Bildern mit C2PA-Daten ein Content-Credentials-Symbol, über das Betrachter Herkunft und Bearbeitungen einsehen können.',
          'Alle Plattformen überarbeiten diese Richtlinien häufig; prüfe das aktuelle Hilfecenter, bevor du dich auf ein bestimmtes Verhalten verlässt.',
        ],
      },
      {
        heading: 'Wenn ein echtes Foto gekennzeichnet wird',
        paragraphs: [
          'Eine einzige generative Bearbeitung, etwa das Entfernen eines Passanten, kann das ganze Foto in den Metadaten als KI-Montage markieren. Leg die Datei vor dem Posten in AI Label Remover, um zu sehen, welches Feld ein Label auslösen würde. Wäre das Label falsch, entfernt [das Waschen einer Kopie](ai-tag-cleaner) die Ursache; ist das Bild überwiegend generiert, kennzeichne es – dafür gibt es Labels.',
        ],
      },
    ],
    faqHeading: 'Zu KI-Labels auf sozialen Plattformen',
    faq: [
      { q: 'Kennzeichnet Instagram auch KI-generierte Profile?', a: 'Instagram hat Labels auf Profilebene für Konten eingeführt, die KI-generierte Personen zeigen, und kann Empfehlungen für Konten einschränken, die das nicht angeben. Wer nur mit KI-Werkzeugen bearbeitet, ist in der Regel nicht betroffen; prüfe die aktuellen Hinweise von Instagram.' },
      { q: 'Ich habe nur ein kleines Objekt entfernt – warum das KI-Label?', a: 'Viele Editoren erfassen jede generative Bearbeitung in C2PA oder IPTC als „Montage mit KI“. Plattformen lesen die Angabe, ohne zu gewichten, wie groß die Bearbeitung war.' },
      { q: 'Behalten Plattformen meine Metadaten nach dem Posten?', a: 'Die meisten lesen sie beim Upload und entfernen sie aus der öffentlichen Kopie, daher zeigt ein Download deines eigenen Beitrags selten die Originalfelder.' },
      { q: 'Entgeht ein gewaschenes Bild jedem Label?', a: 'Nicht immer. Waschen entfernt Signale in der Datei, aber Plattformen können auch Wasserzeichenerkennung, Klassifikatoren nutzen oder eine Angabe verlangen.' },
    ],
  },

  'what-metadata-ai-image-generators-add': {
    metaTitle: 'Welche Metadaten fügen KI-Bildgeneratoren hinzu?',
    related: ['chatgpt-gemini-image-metadata', 'remove-stable-diffusion-comfyui-metadata', 'iptc-digitalsourcetype-ai'],
    title: 'Was KI-Bildgeneratoren in deinen Dateien verstecken: DALL·E, Firefly, Midjourney, Gemini, Stable Diffusion',
    summary: [
      'Fast jedes KI-Bildwerkzeug hinterlässt etwas in seiner Ausgabe, von signierten Content Credentials bis zu Prompts im Klartext. Zu wissen, was jedes schreibt, hilft dir, deine Prompts zu schützen und zu verstehen, warum eine Plattform ein Bild kennzeichnet.',
      'Unten findest du einen Überblick über die Metadaten, die häufig in Dateien beliebter Generatoren stecken, und wie du siehst, was deine eigenen Dateien tatsächlich enthalten.',
    ],
    description:
      'Was beliebte KI-Bildgeneratoren einbetten – C2PA, IPTC DigitalSourceType, XMP, Prompts und Workflows – und wie du es aus deinen Dateien liest oder herauswäschst.',
    updated: '2026-10-23',
    sections: [
      {
        heading: 'Drei Arten von Spuren',
        paragraphs: ['KI-bezogene Metadaten gibt es in drei groben Arten:'],
        bullets: [
          'Signierte Herkunft – C2PA Content Credentials, die den Generator und seine Schritte nennen.',
          'Beschreibende Felder – IPTC- und XMP-Einträge wie [DigitalSourceType](iptc-digitalsourcetype-ai), CreatorTool oder eine Beschreibung.',
          'Generierungseinstellungen – Prompt, Seed, Modell und Parameter als Text, vor allem von lokalen Werkzeugen.',
        ],
      },
      {
        heading: 'OpenAI: ChatGPT-Bilder und DALL·E',
        paragraphs: [
          'Bilder aus [der Bildgenerierung von OpenAI](chatgpt-gemini-image-metadata) tragen C2PA Content Credentials, die OpenAI als Quelle ausweisen, sodass C2PA-fähige Viewer und Plattformen sie erkennen können.',
        ],
      },
      {
        heading: 'Adobe: Firefly und die generativen Werkzeuge in Photoshop',
        paragraphs: [
          'Adobe hängt Content Credentials an Inhalte an, die mit seinen Firefly-basierten Funktionen erstellt wurden, und beschreibt sie als KI-generiert oder KI-bearbeitet. Ein mit Generativer Füllung oder Generativem Erweitern bearbeitetes Foto kann daher eine KI-Montage-Angabe tragen, obwohl es fast vollständig ein echtes Foto ist.',
        ],
      },
      {
        heading: 'Google (Gemini, Imagen) und Meta AI',
        paragraphs: [
          'Google bettet [sein unsichtbares SynthID-Wasserzeichen](synthid-invisible-ai-watermarks) in Bilder seiner generativen Modelle ein und kennzeichnet KI-Inhalte in einigen Produkten über Metadaten. Meta hat erklärt, dass Meta-AI-Bilder eine sichtbare Markierung, ein unsichtbares Wasserzeichen und IPTC-Metadaten zur KI-Erzeugung enthalten.',
        ],
      },
      {
        heading: 'Midjourney',
        paragraphs: [
          '[Midjourney-Downloads können den Prompt enthalten](hide-midjourney-dalle-prompts) sowie eine Job-ID in Beschreibungs- oder Kommentarfeldern, dazu einen IPTC-Wert, der das Bild als KI-generiert markiert. Was auftaucht, hängt vom Downloadformat und der damaligen Dienstversion ab.',
        ],
      },
      {
        heading: 'Lokale Generatoren: Stable-Diffusion-Oberflächen und ComfyUI',
        paragraphs: [
          'Lokale Werkzeuge signieren nichts, speichern aber oft die meisten Details: A1111 und Forge schreiben einen „parameters“-Text-Chunk, und [ComfyUI bettet seinen kompletten Prompt und die Workflow-Graphen](remove-stable-diffusion-comfyui-metadata) als JSON ein. Diese Optionen lassen sich meist abschalten – allerdings nur für neue Bilder.',
          'Generatoren ändern ihre Ausgabe zwischen Versionen, daher ist der verlässliche Weg, die Datei selbst zu öffnen: Leg sie in AI Label Remover auf den Tisch, um jedes Feld zu sehen, und wasch heraus, was du lieber nicht teilen möchtest – mit dem [KI-Metadaten-Entferner](ai-tag-cleaner).',
        ],
      },
    ],
    faqHeading: 'Zu Generator-Metadaten',
    faq: [
      { q: 'Fügt Nano Banana Bildern Metadaten hinzu?', a: 'Google markiert Bilder seiner Modelle mit SynthID und hat neueren Modellen wie Nano Banana Pro C2PA Content Credentials hinzugefügt. Prüf eine konkrete Datei, um zu sehen, was sie enthält.' },
      { q: 'Fügen alle Generatoren C2PA hinzu?', a: 'Nein. Große gehostete Dienste tun es zunehmend; viele Werkzeuge, vor allem lokale, schreiben nur Text-Metadaten oder gar nichts.' },
      { q: 'Entfernt Waschen auch unsichtbare Wasserzeichen?', a: 'Nein. Wasserzeichen wie SynthID stecken in den Pixeln, und Waschen verändert nie Pixel.' },
      { q: 'Warum unterscheiden sich zwei Bilder aus demselben Werkzeug?', a: 'Exportformat, App-Version, Downloadquelle und spätere Bearbeitungen können jeweils Felder hinzufügen oder entfernen.' },
    ],
  },

  'synthid-invisible-ai-watermarks': {
    metaTitle: 'SynthID und unsichtbare KI-Wasserzeichen erklärt',
    related: ['chatgpt-gemini-image-metadata', 'how-to-check-if-image-is-ai-generated', 'what-is-c2pa-content-credentials'],
    title: 'SynthID und unsichtbare Wasserzeichen: Wo das Waschen von Metadaten endet',
    summary: [
      'Manche KI-Bilder tragen zwei Arten von Markierung: Metadaten neben dem Bild und ein in die Pixel eingewobenes Wasserzeichen. Googles SynthID ist das bekannteste Beispiel für Letzteres.',
      'Dieser Beitrag erklärt, wie sich Pixel-Wasserzeichen von C2PA und EXIF unterscheiden, wie sie erkannt werden und warum ein seriöses Metadaten-Werkzeug sie nicht entfernen kann.',
    ],
    description:
      'Was SynthID und andere unsichtbare KI-Wasserzeichen sind, wie sie sich von C2PA-Metadaten unterscheiden, wie sie erkannt werden und warum Metadaten-Waschen sie nicht berührt.',
    updated: '2026-10-23',
    sections: [
      {
        heading: 'Zwei getrennte Ebenen',
        paragraphs: [
          'Metadaten – EXIF, XMP, IPTC, [C2PA](what-is-c2pa-content-credentials) – stehen in eigenen Blöcken in der Datei, leicht zu lesen und leicht zu entfernen, ohne das Bild anzufassen. Ein Pixel-Wasserzeichen ist etwas völlig anderes: ein schwaches Muster über die Pixelwerte verteilt, das das Auge nicht sieht, ein Detektor aber schon.',
        ],
      },
      {
        heading: 'Über SynthID',
        paragraphs: [
          'SynthID ist die Wasserzeichen-Technologie von Google DeepMind für Inhalte, die von Googles KI-Modellen erzeugt werden. Sie bettet bei der Generierung ein unmerkliches Signal ein und soll nach üblichen Änderungen wie Zuschnitt, Skalierung, Kompression und Farbkorrekturen erkennbar bleiben. Verwandte Verfahren decken Bilder, Audio, Video und Text ab.',
        ],
      },
      {
        heading: 'Ein Pixel-Wasserzeichen erkennen',
        paragraphs: [
          'Ein allgemeiner Viewer kann kein Wasserzeichen lesen; dafür brauchst du den Detektor des Anbieters. Google hat [Wege eingeführt, Inhalte auf SynthID zu prüfen](chatgpt-gemini-image-metadata), darunter eine Prüfung in seinen eigenen Produkten. Andere Anbieter haben eigene Methoden.',
        ],
      },
      {
        heading: 'Warum Waschen es in Ruhe lässt',
        paragraphs: [
          'Ein verlustfreies Metadaten-Werkzeug – AI Label Remover eingeschlossen – [kopiert Bilddaten Byte für Byte](remove-metadata-without-losing-quality); genau so garantiert es, dass keine Qualität verloren geht. Jedes Wasserzeichen in diesen Bytes bleibt, wo es ist. Werkzeuge, die versprechen, „KI-Wasserzeichen zu entfernen“, halten das entweder nicht oder verändern das Bild stark, und der Versuch, das Wasserzeichen eines Anbieters zu umgehen, kann gegen dessen Bedingungen verstoßen.',
        ],
      },
      {
        heading: 'In der Praxis',
        paragraphs: [
          '[KI-Metadaten zu entfernen](ai-tag-cleaner) ist richtig für den Datenschutz und um Prompts, Standorte und Herkunftsangaben zu entfernen, die du nicht teilen willst. Es macht ein KI-Bild nicht unerkennbar. Wenn du realistische KI-Inhalte postest, halte dich an die Kennzeichnungsregeln der Plattform.',
        ],
      },
      {
        heading: 'Metadaten, Wasserzeichen oder Fingerabdruck?',
        paragraphs: ['Drei verschiedene Techniken werden „KI-Kennzeichnung“ genannt – und sie verhalten sich sehr unterschiedlich:'],
        bullets: [
          'Metadaten – EXIF-, XMP-, IPTC- und C2PA-Blöcke. Jeder kann sie lesen, und sie lassen sich leicht entfernen oder gehen beim erneuten Speichern verloren.',
          'Pixel-Wasserzeichen – ein verstecktes Muster im Bild selbst, wie SynthID. Nur der Detektor des Anbieters kann es lesen, und es ist darauf ausgelegt, Bearbeitungen zu überstehen.',
          'Fingerabdruck – eine kompakte Beschreibung des Bildes, auf einem Server gespeichert. Ein ähnliches Bild lässt sich später damit abgleichen, selbst ganz ohne Metadaten.',
        ],
      },
      {
        heading: 'Wer unsichtbare Wasserzeichen nutzt',
        paragraphs: [
          'Google versieht Bilder seiner eigenen KI-Modelle mit SynthID. Meta hat erklärt, Bildern aus seinen KI-Funktionen neben Metadaten auch unsichtbare Wasserzeichen hinzuzufügen. Adobe und andere setzen auf „dauerhafte“ Content Credentials, die ein C2PA-Manifest mit einem Wasserzeichen oder Fingerabdruck koppeln, damit sich der Datensatz wieder abrufen lässt. Andere Generatoren verlassen sich nur auf Metadaten, und lokale Werkzeuge fügen meist gar nichts hinzu. Die Praxis ändert sich oft – betrachte jede Liste als Momentaufnahme.',
        ],
      },
      {
        heading: 'Wie zuverlässig die Erkennung ist',
        paragraphs: [
          'Wasserzeichen-Erkennung ist statistisch: Ein Detektor meldet, wie wahrscheinlich eine Markierung vorhanden ist, kein absolutes Ja oder Nein. Starke Bearbeitung kann eine Markierung schwächen, und jeder Detektor erkennt nur das Wasserzeichen seines eigenen Anbieters. Vor allem beweist ein fehlendes Wasserzeichen gar nichts – viele Generatoren fügen nie eines hinzu. Deshalb heißt [ein Bild auf KI prüfen](how-to-check-if-image-is-ai-generated), mehrere Hinweise gemeinsam abzuwägen.',
        ],
      },
      {
        heading: 'Was das für deine Privatsphäre bedeutet',
        paragraphs: [
          'Nach öffentlicher Beschreibung kennzeichnet ein Pixel-Wasserzeichen Inhalte als vom Modell eines Anbieters erzeugt, statt deinen Prompt als lesbaren Text zu speichern. Die Angaben, die dich am häufigsten preisgeben – Prompts, Konto-IDs, Standorte, Gerätedaten –, stecken in den Metadaten, und genau diese Ebene kann ein Werkzeug zum Waschen reinigen. Kurz gesagt: Waschen schützt deine persönlichen Daten, während das Wasserzeichen weiterhin anzeigt, woher das Bild stammt.',
        ],
      },
    ],
    faqHeading: 'Zu SynthID und Wasserzeichen',
    faq: [
      { q: 'Ist ein Bild ohne Wasserzeichen ein echtes Foto?', a: 'Nein. Viele Generatoren fügen gar kein Wasserzeichen hinzu – sein Fehlen sagt für sich allein nichts aus.' },
      { q: 'Kann ein Wasserzeichen meinen Prompt verraten?', a: 'Nach öffentlicher Beschreibung nicht. Prompts und Kontodaten stehen meist in den Metadaten, die beim Waschen entfernt werden.' },
      { q: 'Entfernt Zuschneiden oder ein Screenshot SynthID?', a: 'In der Regel nicht. SynthID ist darauf ausgelegt, übliche Bearbeitungen wie Zuschnitt, Skalierung, Screenshots und Kompression zu überstehen.' },
      { q: 'Entfernt AI Label Remover SynthID?', a: 'Nein. Es entfernt nur Metadaten und bearbeitet nie Pixel, daher bleibt jedes unsichtbare Wasserzeichen erhalten.' },
      { q: 'Woran erkenne ich, ob ein Bild SynthID enthält?', a: 'Das können nur Googles Prüfwerkzeuge sagen. Ein Metadaten-Leser kann nicht in die Pixel schauen.' },
      { q: 'Ist jedes KI-Bild mit einem Wasserzeichen versehen?', a: 'Nein. Manche Anbieter versehen ihre Ausgabe mit Wasserzeichen, viele nicht, und lokale Werkzeuge fügen meist keines hinzu.' },
    ],
  },

  'turn-off-content-credentials-photoshop-lightroom': {
    metaTitle: 'Content Credentials in Photoshop und Lightroom',
    related: ['what-is-c2pa-content-credentials', 'made-with-ai-label', 'iptc-digitalsourcetype-ai'],
    title: 'Content Credentials in Photoshop und Lightroom: steuern und Exporte waschen',
    summary: [
      'Adobe-Apps können Exporten Content Credentials anhängen – ein signiertes Bearbeitungsprotokoll samt verwendeter generativer KI-Funktionen. Praktisch als Nachweis deiner Arbeit, aber auch ein häufiger Grund, warum retuschierte Fotos KI-Labels bekommen.',
      'Hier erfährst du, woher die Credentials kommen, wie du einen Export prüfst und wie du sie aus einer Kopie wäschst, wenn du eine saubere Datei brauchst.',
    ],
    description:
      'Woher Content Credentials in Photoshop und Lightroom kommen, wie du einen Export auf C2PA-Daten prüfst und wie du sie verlustfrei aus einer Kopie wäschst.',
    updated: '2026-10-23',
    sections: [
      {
        heading: 'Zwei Wege, wie Credentials angehängt werden',
        paragraphs: ['Ein Export kann aus einem von zwei Gründen Content Credentials tragen:'],
        bullets: [
          'Du hast Content Credentials eingeschaltet, sodass die App deine Identität und deinen Bearbeitungsverlauf in den Export signiert.',
          'Du hast eine generative Funktion wie [Generative Füllung](made-with-ai-label) genutzt, und Adobe hat Credentials angebracht, die den Inhalt als KI-bearbeitet beschreiben.',
        ],
      },
      {
        heading: 'Vor dem Veröffentlichen prüfen',
        paragraphs: [
          'Leg das exportierte JPEG oder PNG oben auf den Tisch. Zeigt der Bericht einen C2PA-Block, einen Claim Generator wie Adobe Photoshop, c2pa-Aktionen und [einen KI-Montage-Quelltyp](iptc-digitalsourcetype-ai), [können Plattformen, die Credentials lesen, das Bild kennzeichnen](which-platforms-label-ai-images).',
        ],
      },
      {
        heading: 'Die Einstellungen in Adobes Apps',
        paragraphs: [
          'Adobe baut Content Credentials laufend aus, und die Steuerelemente wandern zwischen Versionen. In aktuellen Versionen findest du ein Content-Credentials-Bedienfeld in Photoshop und einen Content-Credentials-Bereich im Exportdialog von Lightroom; Adobes Hilfeseiten decken deine genaue Version ab. Das Ausschalten der Option verhindert womöglich nicht, dass generativen Bearbeitungen Credentials angehängt werden.',
        ],
      },
      {
        heading: 'Eine Kopie waschen',
        paragraphs: [
          'Brauchst du eine saubere Datei für ein Kundenportal, einen Marktplatz oder ein soziales Netzwerk, [wasch den C2PA-Block](remove-c2pa-content-credentials) aus einer Kopie. AI Label Remover schneidet das Manifest aus dem Bytestrom, behält Pixel, Größe, Drehung und Farbprofil und liest das Ergebnis erneut, damit du bestätigen kannst, dass nichts übrig ist.',
        ],
      },
      {
        heading: 'Das signierte Original archivieren',
        paragraphs: [
          'Credentials können ein wertvoller Nachweis der Urheberschaft und der Bearbeitung sein. Bewahre den Originalexport mit seinen Credentials auf und teile gewaschene Kopien nur dort, wo die Metadaten irreführen oder mehr preisgeben würden, als du willst.',
        ],
      },
    ],
    faqHeading: 'Zu Adobe Content Credentials',
    faq: [
      { q: 'Warum kennzeichnet Instagram meine Photoshop-Bearbeitung als KI?', a: 'Generative Füllung, Generatives Erweitern und ähnliche Funktionen erfassen eine KI-Bearbeitung in Content Credentials oder IPTC-Feldern, und Meta liest diese Signale beim Upload.' },
      { q: 'Werden generative Bearbeitungen bei ausgeschalteten Credentials trotzdem erfasst?', a: 'Das kann passieren. Adobe versieht generative Inhalte mit Credentials, prüf also die exportierte Datei, statt dich nur auf die Einstellung zu verlassen.' },
      { q: 'Macht das Waschen meine Bearbeitungen rückgängig?', a: 'Nein. Nur der Metadatenblock wird entfernt; deine bearbeiteten Pixel werden unverändert kopiert.' },
      { q: 'Kann ich die Credentials später wieder hinzufügen?', a: 'Nicht in die gewaschene Kopie, aber du kannst vom Original mit aktivierten Credentials erneut exportieren.' },
    ],
  },

  'which-platforms-strip-photo-metadata': {
    metaTitle: 'Welche Apps entfernen Metadaten? WhatsApp, Instagram, X',
    related: ['remove-gps-location-from-photos', 'view-remove-metadata-iphone-android', 'image-metadata-viewer-online'],
    title: 'Welche Apps Foto-Metadaten entfernen – und welche dein GPS still weiterreichen',
    summary: [
      'Viele gehen davon aus, dass soziale Medien den Standort aus Fotos entfernen. Bei der veröffentlichten Kopie stimmt das oft. Das Original kann aber weiterhin mit vollständigem EXIF über Messenger, E-Mail, Cloud-Links und Filesharing-Seiten reisen.',
      'Dieser Ratgeber sortiert gängige Wege des Teilens in „meist gesäubert“ und „meist erhalten“ und endet mit der einen Gewohnheit, die immer funktioniert: die Datei waschen, bevor sie dein Gerät verlässt.',
    ],
    description:
      'Welche sozialen Netzwerke und Messenger Foto-Metadaten entfernen, welche Wege GPS und EXIF behalten und wie du sicher gehst, dass ein Foto vor dem Senden sauber ist.',
    updated: '2026-10-23',
    sections: [
      {
        heading: 'Öffentliche Kopie und Originaldatei',
        paragraphs: [
          'Postest du ein Foto in einen Feed, kodieren es die meisten großen Plattformen neu und entfernen EXIF aus der öffentlichen Version. Betrachter sehen deine GPS-Position nicht, die Plattform erhält beim Upload aber trotzdem das Original. Das größere Risiko sind alle Wege, die das Original unverändert weitergeben.',
        ],
      },
      {
        heading: 'Meist gesäubert',
        paragraphs: [],
        bullets: [
          'Fotos, die in Feeds großer Netzwerke wie Facebook, Instagram und X veröffentlicht werden.',
          'Fotos, die in vielen Messengern als normale komprimierte Bilder gesendet werden.',
          'Die meisten Bilder, die eine Plattform vor der Anzeige skaliert oder umwandelt.',
        ],
      },
      {
        heading: 'Meist erhalten',
        paragraphs: [],
        bullets: [
          'Fotos, die in Apps wie WhatsApp oder Telegram „als Datei“ oder „als Dokument“ gesendet werden.',
          'E-Mail-Anhänge und Cloud-Links (Drive, Dropbox, iCloud und ähnliche).',
          'Foren, Kleinanzeigen- und Portfolio-Seiten, die die Datei genau so ausliefern, wie sie hochgeladen wurde.',
          'Fotocommunitys, die EXIF absichtlich anzeigen, etwa in Kameraeinstellungs-Panels.',
        ],
      },
      {
        heading: 'Teste deinen eigenen Weg',
        paragraphs: [
          'Apps ändern ständig, wie sie mit Medien umgehen. Um sicherzugehen, schick dir selbst ein Foto auf dem üblichen Weg, lade herunter, was ankommt, und leg es in AI Label Remover auf den Tisch: [Der Tab „Was sie verrät“](image-metadata-viewer-online) zeigt sofort, ob Orts-, Personen- oder Zeitdaten durchgekommen sind.',
        ],
      },
      {
        heading: 'Vor dem Senden waschen',
        paragraphs: [
          'Die verlässliche Gewohnheit ist, Metadaten zu waschen, bevor ein Foto dein Gerät verlässt. AI Label Remover [entfernt GPS, Datumsangaben, Geräte- und Urheberfelder](remove-gps-location-from-photos) sowie versteckte Vorschauen, behält Drehung und Farben und erledigt alles lokal – ideal für Fotos an Fremde, Käufer oder Kunden. Die Seite [EXIF-Daten entfernen](remove-exif-data) erklärt jedes entfernte Feld.',
        ],
      },
    ],
    faqHeading: 'Zu Apps und Foto-Metadaten',
    faq: [
      { q: 'Entfernt E-Mail Foto-Metadaten?', a: 'Meist nicht. Anhänge werden als Originaldatei gesendet, EXIF und GPS reisen also mit, sofern deine Mail-App das Bild nicht vorher verkleinert.' },
      { q: 'Entfernt WhatsApp das GPS?', a: 'Als normale Bilder gesendete Fotos werden komprimiert und verlieren die meisten Metadaten. Als Dokument gesendete Fotos behalten die Originaldatei samt GPS.' },
      { q: 'Zeigt Instagram, wo mein Foto aufgenommen wurde?', a: 'Beim veröffentlichten Bild ist das EXIF entfernt. Ein Standort-Tag, das du dem Beitrag hinzufügst, ist etwas anderes und für alle sichtbar.' },
      { q: 'Reicht nicht ein Screenshot?', a: 'Er entfernt EXIF, senkt aber die Qualität, ändert die Abmessungen und kann anderes vom Bildschirm erfassen. Verlustfreies Waschen lässt das Originalbild unangetastet.' },
    ],
  },

  'view-remove-metadata-iphone-android': {
    metaTitle: 'Foto-Metadaten auf iPhone und Android entfernen',
    related: ['remove-gps-location-from-photos', 'remove-metadata-windows-mac', 'which-platforms-strip-photo-metadata'],
    title: 'Foto-Metadaten auf iPhone und Android ansehen und entfernen',
    summary: [
      'Dein Smartphone speichert, wo und wann jedes Foto aufgenommen wurde, dazu das Gerätemodell. iOS und Android lassen dich das ansehen und den Standort vor dem Teilen entfernen.',
      'Unten findest du die eingebauten Optionen, wo sie an Grenzen stoßen, und einen Weg im Browser, alles Identifizierende ohne App herauszuwaschen.',
    ],
    description:
      'Foto-Metadaten auf iPhone und Android ansehen, den Standort vor dem Teilen entfernen und alles EXIF – auch HEIC – im Browser herauswaschen, ohne App-Installation.',
    updated: '2026-10-23',
    sections: [
      {
        heading: 'Auf dem iPhone: ansehen',
        paragraphs: [
          'Öffne ein Foto in Fotos und wisch nach oben oder tippe auf die Info-Taste. Du siehst Datum und Uhrzeit, Kamera und Objektiv, Belichtungsdaten und, falls der Standort aktiv war, eine Karte. Mit „Anpassen“ neben dem Datum kannst du Datum, Uhrzeit oder Standort dieses Fotos ändern.',
        ],
      },
      {
        heading: 'Auf dem iPhone: ohne Standort teilen',
        paragraphs: ['Zwei eingebaute Steuerungen helfen:'],
        bullets: [
          'Tippe im Teilen-Menü oben auf „Optionen“ und schalte „Standort“ vor dem Senden aus.',
          'Damit neue Fotos keinen Standort mehr bekommen, geh zu Einstellungen › Datenschutz & Sicherheit › Ortungsdienste › Kamera und wähle „Nie“.',
        ],
      },
      {
        heading: 'Auf Android',
        paragraphs: [
          'Öffne in Google Fotos ein Foto und wisch nach oben, um Details wie Datum, Gerät und Standort zu sehen; je nach Version kannst du den Standort dort bearbeiten oder entfernen. Damit neue Aufnahmen keinen Standort mehr bekommen, schalte ihn in den Einstellungen deiner Kamera-App aus – Name und Ort der Option unterscheiden sich je nach Hersteller.',
        ],
      },
      {
        heading: 'Wo die Bordmittel an Grenzen stoßen',
        paragraphs: [
          'Smartphone-Einstellungen konzentrieren sich auf den Standort. Gerätemodell, Aufnahmezeit, Objektivdaten, Bearbeitungssoftware und eingebettete Vorschauen bleiben meist erhalten, und Einstellungen gelten nur für künftige Fotos oder ein einzelnes Teilen. [Auf einen Computer kopierte Dateien](remove-metadata-windows-mac) oder über andere Apps verschickte Fotos behalten alles.',
        ],
      },
      {
        heading: 'Alles im Browser herauswaschen',
        paragraphs: [
          'Öffne AI Label Remover auf deinem Smartphone, tippe auf „Dateien auswählen“, lies den Bericht und tippe auf „Alle Bilder waschen“. [GPS-, Zeit-, Geräte- und Urheberdaten werden entfernt](remove-gps-location-from-photos) – auch bei iPhone-HEIC –, während Drehung und Farbe erhalten bleiben. Kein Upload, keine App – und die Seite [HEIC-Metadaten entfernen](heic-metadata-remover) zeigt, was ein iPhone-Foto speichert.',
        ],
      },
      {
        heading: 'iPhone: HEIC, JPEG und Live Photos',
        paragraphs: [
          'Standardmäßig speichert das iPhone Fotos als HEIC (Einstellungen › Kamera › Formate › High Efficiency); mit „Maximale Kompatibilität“ wird stattdessen JPEG gespeichert. Beide Formate tragen dasselbe EXIF – Standort, Uhrzeit, Gerät und Objektiv. Schickst du ein Foto an ein Gerät, das nicht von Apple ist, wandelt iOS es unterwegs eventuell in JPEG um, die Metadaten reisen aber meist mit. Live Photos enthalten zusätzlich einen kurzen Videoclip mit eigenen Metadaten; AI Label Remover wäscht das Standbild, teile Live Photos also als Standbild, wenn es um Privatsphäre geht.',
        ],
      },
      {
        heading: 'Android: jede Marke macht es ein bisschen anders',
        paragraphs: [
          'Android-Smartphones teilen dieselben EXIF-Felder, aber nicht dieselben Menüs. Manche Galerie-Apps bieten im Teilen-Dialog einen Schalter zum Entfernen der Standortdaten, andere erlauben nur das Bearbeiten der Details Foto für Foto. Google Fotos hat eine Einstellung, die den Standort vor Betrachtern deiner geteilten Links und Alben verbirgt, an Dateien, die auf anderen Wegen verschickt werden, ändert das aber nichts. Menünamen ändern sich von Version zu Version – findest du die Option nicht, ist Waschen der verlässliche Ausweg.',
        ],
      },
      {
        heading: 'Die Falle „als Datei senden“',
        paragraphs: [
          'Messenger komprimieren Fotos meist und verwerfen dabei die meisten Metadaten, wenn du normal sendest. Schickst du dasselbe Foto als Datei oder Dokument – oft, um die volle Qualität zu behalten –, kommt das Original unverändert an, Standort inklusive. AirDrop, Nearby Share, E-Mail und Cloud-Links verhalten sich genauso. Genau dann solltest du [prüfen, was die Datei verrät](remove-gps-location-from-photos), und sie vorher waschen.',
        ],
      },
      {
        heading: 'Eine Zwei-Minuten-Routine am Smartphone',
        paragraphs: [],
        bullets: [
          'Öffne AI Label Remover im Browser deines Smartphones und leg es für das nächste Mal auf den Home-Bildschirm.',
          'Tippe auf „Dateien auswählen“ und wähle die Fotos, die du teilen willst.',
          'Lies den Bericht, tippe auf „Alle Bilder waschen“ und prüfe das grüne Feld.',
          'Speichere die gewaschenen Kopien und teile diese, nicht die Originale.',
        ],
      },
    ],
    faqHeading: 'Zu Foto-Metadaten auf dem Smartphone',
    faq: [
      { q: 'Behält AirDrop den Standort?', a: 'Das kann sein. AirDrop sendet die Originaldatei. Tippe oben im Teilen-Menü auf „Optionen“ und schalte „Ort“ aus – oder wasch die Datei vorher.' },
      { q: 'Entfernt ein Screenshot eines Fotos die Metadaten?', a: 'Er verwirft das ursprüngliche EXIF, senkt aber die Qualität, und der Screenshot bekommt eigene Metadaten. Das Original zu waschen ist verlustfrei und gründlicher.' },
      { q: 'Brauche ich eine App, um EXIF auf dem Smartphone zu entfernen?', a: 'Nein. Eingebaute Optionen entfernen den Standort für ein einzelnes Teilen, und AI Label Remover läuft im Browser des Smartphones und entfernt alles andere ohne Installation.' },
      { q: 'Säubert das Ausschalten des Standorts meine älteren Fotos?', a: 'Nein. Es wirkt nur auf neue Aufnahmen. Vorhandene Fotos behalten ihren Standort, bis du ihn entfernst.' },
      { q: 'Werden HEIC-Dateien vom iPhone unterstützt?', a: 'Ja. HEIC-Dateien werden direkt gewaschen, ohne Umwandlung in JPEG und ohne Neukodierung.' },
      { q: 'Entfernt die Teilen-Option des iPhones alles?', a: 'Im Wesentlichen nur den Standort. Gerätemodell und Aufnahmezeit können in der geteilten Datei bleiben.' },
    ],
  },

  'what-is-exif-data': {
    metaTitle: 'Was sind EXIF-Daten? Felder, Datenschutz, Entfernen',
    related: ['image-metadata-viewer-online', 'remove-gps-location-from-photos', 'remove-metadata-without-losing-quality'],
    title: 'EXIF-Daten ohne Fachchinesisch erklärt',
    summary: [
      'EXIF (Exchangeable Image File Format) sind die versteckten Informationen, die Kamera oder Smartphone in jedes Foto schreiben: Einstellungen, Datum und Uhrzeit, Gerätemodell und oft die GPS-Position.',
      'Dieser Artikel erklärt, was EXIF enthält, wie es sich von XMP, IPTC und C2PA unterscheidet, warum es für den Datenschutz wichtig ist und wie du es sicher ansiehst oder entfernst.',
    ],
    description:
      'Was EXIF-Daten sind, welche Felder sie enthalten (Kamera, Zeit, GPS), wie sie sich von XMP, IPTC und C2PA unterscheiden und wie du sie ohne Qualitätsverlust ansiehst oder wäschst.',
    updated: '2026-10-23',
    sections: [
      {
        heading: 'Was du in EXIF findest',
        paragraphs: ['Ein typisches Foto kann enthalten:'],
        bullets: [
          'Gerät – Hersteller und Modell von Kamera oder Smartphone, Objektiv und manchmal Seriennummern.',
          'Belichtung – ISO, Blende, Verschlusszeit, Brennweite und Blitz.',
          'Zeit – wann das Foto aufgenommen und zuletzt geändert wurde, oft mit Zeitzonenangabe.',
          'Standort – Breite, Länge, Höhe und manchmal die Richtung.',
          'Extras – Ausrichtung, ein kleines eingebettetes Vorschaubild und der Name der Bearbeitungssoftware.',
        ],
      },
      {
        heading: 'Wie EXIF gespeichert wird',
        paragraphs: [
          'In JPEG steht EXIF in einem APP1-Segment nahe dem Dateianfang und ist in Verzeichnisse (IFDs) aufgeteilt: IFD0 für grundlegende Bild- und Gerätedaten, das Exif-Verzeichnis für Kameraeinstellungen und [das GPS-Verzeichnis für den Standort](remove-gps-location-from-photos). HEIC, WebP und PNG können ebenfalls EXIF enthalten, in ihren eigenen Containern.',
        ],
      },
      {
        heading: 'Wie es sich von XMP, IPTC und C2PA unterscheidet',
        paragraphs: [],
        bullets: [
          'EXIF – technische Aufnahmedaten von Kameras und Smartphones.',
          'XMP – ein flexibles XML-Format, das Editoren für Beschreibungen, Stichwörter, Bearbeitungsverlauf und KI-Felder nutzen.',
          'IPTC – Beschreibungs- und Rechtedaten für Redaktionen und Bildarchive, einschließlich [DigitalSourceType](iptc-digitalsourcetype-ai) für KI-Inhalte.',
          'C2PA – [signierte Content Credentials](what-is-c2pa-content-credentials), die Herkunft und Bearbeitungen festhalten.',
        ],
      },
      {
        heading: 'Warum es wichtig ist',
        paragraphs: [
          'Fotografen nutzen EXIF zum Lernen und um ihre Arbeit zu dokumentieren. Für die meisten Menschen ist es vor allem ein Datenschutzrisiko: Ein Foto kann eine Wohnadresse, ein Gerät und den Zeitpunkt verraten, zu dem jemand irgendwo war. EXIF ist außerdem kinderleicht zu bearbeiten und sollte daher nie allein als Beweis gelten.',
        ],
      },
      {
        heading: 'Richtig ansehen und entfernen',
        paragraphs: [
          'Systemfenster zeigen nur eine Handvoll Felder; [AI Label Remover dekodiert jedes EXIF-, XMP- und IPTC-Feld](image-metadata-viewer-online) und gruppiert sie nach Herkunft. Behalte beim Entfernen von EXIF das Ausrichtungs-Tag, damit Fotos nicht gedreht erscheinen, behalte das Farbprofil, damit Farben stimmen, und vermeide [alles, was das Bild neu komprimiert](remove-metadata-without-losing-quality). Das Werkzeug [EXIF-Daten entfernen](remove-exif-data) erledigt alle drei Punkte für dich.',
        ],
      },
      {
        heading: 'Woher EXIF kommt',
        paragraphs: [
          'EXIF entstand Mitte der 1990er-Jahre bei japanischen Elektronikherstellern, damit Digitalkameras ihre Einstellungen einheitlich festhalten konnten. Heute pflegen CIPA und JEITA den Standard gemeinsam. Die Grundidee hat sich kaum verändert: eine Liste nummerierter Tags mit je einem Wert. Neuere Versionen brachten Felder wie Zeitzonen-Versatz, Objektiv-Seriennummer und in Exif 3.0 vollwertigen UTF-8-Text. Smartphones haben den Standard unverändert übernommen – deshalb hat ein Handyfoto dieselbe Struktur wie ein Bild einer Kompaktkamera von 2005, nur mit weit genauerem GPS.',
        ],
      },
      {
        heading: 'Felder, die viele überraschen',
        paragraphs: ['Neben Datum und Ort verraten einige Tags mehr, als die meisten erwarten:'],
        bullets: [
          'OffsetTime – der Zeitzonen-Versatz, der die Region auch ohne GPS eingrenzt.',
          'BodySerialNumber, LensSerialNumber und CameraOwnerName – Werte, die viele Fotos derselben Kamera und derselben Person zuordnen können.',
          'GPSImgDirection – die Blickrichtung der Kamera, manchmal genug, um ein Fenster oder einen Balkon zu bestimmen.',
          'Software – Bearbeitungs-App und Version, ein Hinweis darauf, was mit dem Bild gemacht wurde.',
          'MakerNote – ein privater Herstellerblock, der Auslösungszahl, interne Seriennummern sowie Fokus- oder Gesichtserkennungsdaten enthalten kann.',
        ],
      },
      {
        heading: 'Das Vorschaubild, das deine Bearbeitung überlebt',
        paragraphs: [
          'Viele Dateien enthalten ein kleines Vorschaubild in einem zweiten Verzeichnis, IFD1. Manche Editoren aktualisieren das Hauptbild, lassen diese Vorschau aber unverändert – ein Zuschnitt oder eine Unschärfe lässt sich dann einfach über das Vorschaubild rückgängig machen. Smartphones speichern zudem größere Vorschauen und Zusatzbilder (MPF) mit eigenem EXIF. Eine gründliche Reinigung entfernt auch diese versteckten Kopien – deshalb verwirft AI Label Remover eingebettete Vorschaubilder und MPF-Bilder, statt nur die GPS-Tags zu leeren.',
        ],
      },
      {
        heading: 'Was bleiben darf, was weg sollte',
        paragraphs: [
          'Für alles, was öffentlich geteilt wird – Posts, Anzeigen, Chat-Anhänge, Foren –, ist das Entfernen aller identifizierenden EXIF-Daten die sichere Voreinstellung. Zwei Angaben lohnt es sich zu behalten, weil sie die Darstellung betreffen, nicht die Identität: das Ausrichtungs-Tag und das Farbprofil. Wenn du als Urheber genannt werden willst, hält eine sichtbare Bildunterschrift oder Signatur weit besser als ein Copyright-Feld im EXIF, das die meisten Plattformen ohnehin verwerfen. Bewahre die Originale in deinem eigenen Archiv auf und teile die gewaschene Kopie.',
        ],
      },
    ],
    faqHeading: 'Zu EXIF',
    faq: [
      { q: 'Sind EXIF und Metadaten dasselbe?', a: 'EXIF ist eine Art von Metadaten. Eine Datei kann außerdem XMP, IPTC, C2PA und formatspezifischen Text enthalten – deshalb schaut ein gründlicher Reiniger über EXIF hinaus.' },
      { q: 'Haben Screenshots EXIF-Daten?', a: 'Meist deutlich weniger – keine Kameraeinstellungen und kein GPS –, sie können aber Gerät, Software und Aufnahmezeit festhalten.' },
      { q: 'Wie sehe ich EXIF-Daten?', a: 'Unter Windows öffnest du Eigenschaften › Details, auf dem Mac das Informationsfenster der Vorschau und auf Smartphones die Foto-Infos. Um jedes Feld zu sehen, auch XMP und IPTC, nutze einen vollständigen Viewer wie AI Label Remover.' },
      { q: 'Beeinflusst EXIF, wie das Bild aussieht?', a: 'Nein. EXIF wird getrennt von den Bilddaten gespeichert, sein Entfernen ändert optisch nichts.' },
      { q: 'Lässt sich EXIF fälschen?', a: 'Leicht. Gängige Werkzeuge können EXIF-Felder umschreiben – behandle sie als Hinweise, nie als Beweis.' },
      { q: 'Die Ausrichtung ist auch EXIF – behält AI Label Remover sie?', a: 'Ja. Sie wird in einen minimalen EXIF-Block zurückgeschrieben, damit Fotos weiterhin richtig herum angezeigt werden.' },
    ],
  },
};

export default de;
