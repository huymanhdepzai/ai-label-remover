import type { Articles } from './types';

const nl: Articles = {
  'made-with-ai-label': {
    metaTitle: 'Waarom echte foto’s het label “AI-info” krijgen op Instagram',
    related: ['what-is-c2pa-content-credentials', 'hide-midjourney-dalle-prompts', 'remove-stable-diffusion-comfyui-metadata'],
    description:
      'Een echte foto die op Instagram of Facebook het label “AI-info” krijgt, bevat vaak een C2PA- of IPTC-veld dat door beeldbewerkingssoftware is toegevoegd. Verwijder het zonder kwaliteitsverlies.',
    updated: '2026-10-23',
    sections: [
      {
        heading: 'Het label leest je bestandsgegevens, niet je foto',
        paragraphs: [
          'Meta’s label “AI-info” (voorheen “Gemaakt met AI”) wordt automatisch toegepast zodra een geüpload bestand erkende signalen van generatieve AI bevat. Twee belangrijke signalen bevinden zich in het bestand zelf: [het C2PA-manifest met Content Credentials](what-is-c2pa-content-credentials) en de eigenschap IPTC DigitalSourceType in het XMP-blok.',
          'De waarde trainedAlgorithmicMedia geeft aan dat de gehele afbeelding algoritmisch is gegenereerd, terwijl compositeWithTrainedAlgorithmicMedia aangeeft dat een echte foto AI-bewerkingen bevat. Sociale netwerken scannen deze velden automatisch tijdens het uploaden.',
        ],
      },
      {
        heading: 'Waar het signaal bij echte foto’s vandaan komt',
        paragraphs: ['Bij foto’s die met een echte camera of smartphone zijn gemaakt, is de bewerkings-app vrijwel altijd de oorzaak:'],
        bullets: [
          'Generatief vullen, generatief uitbreiden of AI-verwijdergereedschappen in Photoshop of Lightroom voegen c2pa-acties toe en markeren het bestand als samengesteld.',
          'Exporteren terwijl Content Credentials is ingeschakeld, ondertekent de complete bewerkingsgeschiedenis in het bestand.',
          'AI-gumfuncties in smartphone-galerijen laten markeringen achter in de EXIF- en XMP-blokken.',
          'Bewerkingssoftware behoudt eerdere markeringen bij het opnieuw opslaan, waardoor het label blijft bestaan.',
        ],
      },
      {
        heading: 'Het verantwoordelijke veld vinden met AI Label Remover',
        paragraphs: [
          'Plaats de afbeelding in het werkgebied: het tabblad “AI-sporen” toont elk gedetecteerd signaal met de locatie (zoals C2PA JUMBF of IPTC XMP). Op het tabblad “Ruwe metadata” kun je de ondertekenende software en de lijst met acties inzien.',
          'Een waarschuwing duidt op de aanwezigheid van Content Credentials, zelfs zonder expliciete AI-aanduiding. Sommige platforms passen het label al toe bij de enkele aanwezigheid van een manifest.',
        ],
      },
      {
        heading: 'De te delen kopie verliesvrij wassen',
        paragraphs: [
          'Klik op “Alle afbeeldingen wassen”. AI Label Remover knipt de C2PA-, XMP-, IPTC- en EXIF-blokken nauwkeurig uit de binaire stroom en laat pixels, afmetingen, draaiing en het ICC-kleurprofiel onaangetast. Raadpleeg de pagina [AI-tagcleaner](ai-tag-cleaner) voor technische details.',
          'Waar traditioneel opnieuw opslaan als JPEG het beeld comprimeert en kwaliteitsverlies veroorzaakt, voorkomt het wegsnijden van blokken elk verlies.',
        ],
      },
      {
        heading: 'Onterechte labels corrigeren en transparantie behouden',
        paragraphs: [
          'Het verwijderen van metadata is bedoeld om privacy te beschermen en foutief gelabelde foto’s te corrigeren. Als een afbeelding volledig door AI is gegenereerd, dient de maker de regels van het platform te volgen en openheid te geven.',
        ],
      },
    ],
    faqHeading: 'Veelgestelde vragen over AI-labels',
    faq: [
      { q: 'Kan ik het label “AI-info” na het plaatsen nog verwijderen?', a: 'Meestal niet via het bewerken van het bericht. Was het bronbestand vooraf met de [AI-tagcleaner](ai-tag-cleaner) en plaats het opnieuw.' },
      { q: 'Verdwijnt het label gegarandeerd als ik de metadata wis?', a: 'Het elimineert de bestandsmatige oorzaak (C2PA en IPTC). Platforms kunnen echter ook over visuele herkenningsmodellen beschikken.' },
      { q: 'Verandert de foto visueel of gaat er scherpte verloren?', a: 'Nee. De pixeldata wordt byte voor byte gekopieerd; alleen de beschrijvende headers worden verwijderd.' },
      { q: 'Kan ik camera-instellingen behouden en alleen AI-tags wissen?', a: 'Voor optimale veiligheid en privacy verwijdert de tool alle identificerende gegevens in één handeling.' },
    ],
  },

  'remove-stable-diffusion-comfyui-metadata': {
    metaTitle: 'ComfyUI-workflows en Stable Diffusion-prompts uit PNG verwijderen',
    related: ['hide-midjourney-dalle-prompts', 'batch-remove-metadata', 'what-is-c2pa-content-credentials'],
    description:
      'A1111, Forge en ComfyUI slaan prompts, seeds en complete workflow-nodes op in PNG-bestanden. Verwijder deze gegevens zonder een pixel te wijzigen.',
    updated: '2026-10-23',
    sections: [
      {
        heading: 'Generatieparameters reizen mee met het bestand',
        paragraphs: [
          'Bij het genereren van afbeeldingen in Stable Diffusion WebUI (AUTOMATIC1111), Forge of ComfyUI worden instellingen automatisch opgeslagen in PNG-tekstblokken (tEXt, zTXt, iTXt).',
          'In ComfyUI betreft dit de complete node-graaf in JSON-indeling. Iedereen die het PNG-bestand downloadt, kan het in ComfyUI slepen om prompts, LoRA-modellen, seeds en lokale mappaden in te zien en te reproduceren.',
        ],
      },
      {
        heading: 'Waarom generatiemetadata verwijderen verstandig is',
        paragraphs: [
          'Zorgvuldig ontwikkelde prompts en node-structuren vormen bij commerciële en artistieke projecten waardevol intellectueel eigendom.',
          'Bovendien kunnen tekstblokken persoonlijke gebruikersnamen en paden op je computer onthullen en vergroten ze de bestandsomvang aanzienlijk.',
        ],
      },
      {
        heading: 'Inspecteren en wissen met AI Label Remover',
        paragraphs: [
          'Door de PNG te laden in [PNG-metadata verwijderen](png-metadata-remover), kun je prompts eerst inzien en vervolgens met één klik verwijderen.',
          'De essentiële blokken IHDR, IDAT, PLTE en het iCCP-kleurprofiel blijven gewaarborgd.',
        ],
      },
      {
        heading: 'Status van het bestand na het wassen',
        paragraphs: [
          'De resulterende PNG ziet er identiek uit, maar gedraagt zich in ComfyUI als een gewone afbeelding zonder workflow-data.',
        ],
      },
    ],
    faqHeading: 'Vragen over Stable Diffusion-metadata',
    faq: [
      { q: 'Kan ik het opslaan van metadata uitschakelen in ComfyUI?', a: 'Ja, door de instellingen van de Save Image-node aan te passen of nodes te gebruiken die zonder metadata opslaan.' },
      { q: 'Kan ComfyUI de workflow terughalen uit een gewassen PNG?', a: 'Nee. De tekstblokken zijn definitief verwijderd, waardoor er geen data meer overblijft.' },
      { q: 'Blijft de transparantie van de gewassen PNG behouden?', a: 'Ja, het alfakanaal en de kleurwaarden blijven volledig intact.' },
      { q: 'Wat is het verschil met converteren naar JPEG?', a: 'Converteren leidt tot kwaliteitsverlies door hercompressie. AI Label Remover bewaart de verliesvrije PNG-kwaliteit.' },
    ],
  },

  'hide-midjourney-dalle-prompts': {
    metaTitle: 'Prompts verwijderen uit Midjourney- en DALL·E-afbeeldingen',
    related: ['remove-stable-diffusion-comfyui-metadata', 'made-with-ai-label', 'what-is-c2pa-content-credentials'],
    description:
      'Downloads van Midjourney, DALL·E 3 en Firefly bevatten promptteksten, taak-ID’s en herkomstgegevens. Controleer en verwijder ze vóór publicatie.',
    updated: '2026-10-23',
    sections: [
      {
        heading: 'Wat clouddiensten wegschrijven in het bestand',
        paragraphs: [
          'Online generatoren zoals Midjourney, OpenAI DALL·E 3 en Adobe Firefly voegen taak-ID’s, aanmaaktijden en digitale [C2PA](what-is-c2pa-content-credentials)-handtekeningen toe.',
          'Midjourney slaat de volledige prompttekst vaak plat op in XMP- of EXIF-velden, zodat iedereen die de afbeelding downloadt deze eenvoudig kan lezen.',
        ],
      },
      {
        heading: 'Prompts beschermen als creatief bezit',
        paragraphs: [
          'Het verfijnen van prompts kost tijd en creativiteit. Door de originele afbeelding zonder bewerking online te zetten, kunnen anderen je stijl en formuleringen direct overnemen.',
        ],
      },
      {
        heading: 'Vooraf bekijken en veilig wissen',
        paragraphs: [
          'AI Label Remover toont de verborgen promptteksten en verwijdert ze met één druk op de knop, zonder dat dit ten koste gaat van kleuren of scherpte.',
        ],
      },
      {
        heading: 'Technische grenzen van metadataverwijdering',
        paragraphs: [
          'Metadata-opschoning richt zich op de headers van het bestand. Onzichtbare watermerken in de pixels zelf (zoals Google SynthID) kunnen met metadatatools niet worden gewist.',
        ],
      },
    ],
    faqHeading: 'Vragen over Midjourney- en DALL·E-prompts',
    faq: [
      { q: 'Kan iedereen mijn prompt lezen uit een geplaatste afbeelding?', a: 'Als een platform de originele afbeelding zonder hercompressie aanbiedt, kan iedereen de prompt via de metadata inzien.' },
      { q: 'Slaat elke versie van Midjourney prompts op?', a: 'Ja, vrijwel alle directe downloads van de website of Discord bevatten generatie-instructies.' },
      { q: 'Beïnvloedt het wassen het contrast of de kleuren?', a: 'Nee. Het ICC-profiel en de RGB-waarden blijven intact.' },
      { q: 'Kan ik een serie gemaakte afbeeldingen tegelijk wassen?', a: 'Ja, via [batch-metadata verwijderen](batch-remove-metadata) kun je tot 50 afbeeldingen gelijktijdig verwerken.' },
    ],
  },

  'what-is-c2pa-content-credentials': {
    metaTitle: 'Wat is C2PA? Content Credentials eenvoudig uitgelegd',
    related: ['made-with-ai-label', 'hide-midjourney-dalle-prompts', 'remove-stable-diffusion-comfyui-metadata'],
    description:
      'Een heldere gids over C2PA en Content Credentials: wat het ondertekende manifest bevat, waar het in bestanden staat en waarom makers het verwijderen.',
    updated: '2026-10-23',
    sections: [
      {
        heading: 'De korte samenvatting',
        paragraphs: [
          'C2PA (Coalition for Content Provenance and Authenticity) is een open technische standaard van bedrijven zoals Adobe, Microsoft, Google, Intel en Sony. Het koppelt een digitaal identiteitsbewijs — Content Credentials — aan afbeeldingen.',
          'Dit bewijs toont aan met welke camera de foto is gemaakt, welke software is gebruikt, of er AI aan te pas is gekomen en hoe de bewerkingsgeschiedenis eruitziet.',
        ],
      },
      {
        heading: 'Wat een C2PA-manifest bevat',
        paragraphs: [
          'Het manifest bewaart een keten van gegevens: camera-informatie, miniaturen van eerdere bewerkingsstappen, gebruikersaccounts en cryptografische handtekeningen.',
          'Wanneer er AI-hulpmiddelen zijn gebruikt, staat dat expliciet vermeld, waardoor sociale netwerken automatisch labels kunnen toevoegen.',
        ],
      },
      {
        heading: 'Locatie in verschillende bestandsindelingen',
        paragraphs: [
          'In JPEG-bestanden staat het manifest in het APP11-segment (JUMBF-formaat), in PNG in het caBX-blok en in HEIC en AVIF in uuid-boxen.',
          'De functie [C2PA verwijderen](remove-c2pa-content-credentials) snijdt doelgericht deze binaire blokken weg zonder het beeld te beschadigen.',
        ],
      },
      {
        heading: 'Waarom makers C2PA verwijderen',
        paragraphs: [
          'Naast het voorkomen van onterechte AI-labels beschermt het de privacy van apparatuur en accountgegevens en maakt het bestanden vaak tientallen tot honderden kilobytes lichter.',
        ],
      },
      {
        heading: 'Behouden of verwijderen: een bewuste keuze',
        paragraphs: [
          'In de fotojournalistiek bewijst C2PA de echtheid van een opname. Voor commerciële ontwerpers en particulieren biedt het verwijderen van metadata volledige regie over de eigen privacy.',
        ],
      },
    ],
    faqHeading: 'Veelgestelde vragen over C2PA',
    faq: [
      { q: 'Is C2PA een onzichtbaar watermerk?', a: 'Nee. C2PA is een metadatarecord in de header van het bestand en verandert niets aan de pixels.' },
      { q: 'Welke software voegt momenteel C2PA toe?', a: 'Adobe Photoshop, Lightroom, DALL·E 3, recente Leica- en Nikon-camera’s en clouddiensten.' },
      { q: 'Hoe kan ik de handtekening controleren vóór het wissen?', a: 'Via de officiële site verify.contentcredentials.org of in het voorbeeldvenster van AI Label Remover.' },
      { q: 'Vermindert het verwijderen van C2PA de beeldkwaliteit?', a: 'Nee, de afbeelding wordt niet opnieuw gecomprimeerd.' },
    ],
  },

  'remove-gps-location-from-photos': {
    metaTitle: 'GPS-locatie verwijderen van foto’s op iPhone, Android en pc',
    related: ['batch-remove-metadata', 'what-is-c2pa-content-credentials', 'made-with-ai-label'],
    description:
      'Verwijder GPS-coördinaten van foto’s vóór het delen: ontdek hoe EXIF je woonadres prijsgeeft en hoe je dit verliesvrij kunt wissen.',
    updated: '2026-10-23',
    sections: [
      {
        heading: 'Wat je smartphone vastlegt bij elke opname',
        paragraphs: [
          'De camera’s van moderne telefoons (iPhone en Android) slaan standaard exacte breedtegraden, lengtegraden, hoogte en kompasrichting op in de EXIF-metadata.',
          'Als het originele bestand wordt gedeeld, kan iedereen eenvoudig het woonadres, de werklocatie of de school van je kinderen achterhalen.',
        ],
      },
      {
        heading: 'Hoe het originele bestand onbedoeld weglekt',
        paragraphs: [
          'Hoewel sociale platforms foto’s vaak verkleinen en de GPS wissen, blijft de locatie intact bij het versturen als “bestand” of “document” via chatapps, AirDrop, e-mail, clouddiensten of marktplaatsen.',
        ],
      },
      {
        heading: 'Locatiegegevens controleren vóór het wissen',
        paragraphs: [
          'AI Label Remover toont direct of er GPS-tags aanwezig zijn, inclusief de exacte coördinaten en het toestelmodel.',
        ],
      },
      {
        heading: 'Veilig wissen zonder hercompressie',
        paragraphs: [
          '[EXIF-gegevens verwijderen](remove-exif-data) wist locatie- en apparaatlabels zonder de JPEG- of HEIC-pixels opnieuw te coderen, waardoor alle scherpte behouden blijft.',
        ],
      },
      {
        heading: 'Locatievoorzieningen uitschakelen in de instellingen',
        paragraphs: [
          'iPhone: Instellingen > Privacy en beveiliging > Locatievoorzieningen > Camera > “Nooit”. Android: Camera-app > Instellingen > “Locatielabels opslaan” uitschakelen.',
        ],
      },
      {
        heading: 'De nauwkeurigheid van smartphone-GPS',
        paragraphs: [
          'Dankzij satellieten en wifi-driehoeksmeting zijn coördinaten vaak tot op enkele meters nauwkeurig, waardoor een specifiek huisnummer direct herkenbaar is.',
        ],
      },
      {
        heading: 'Reële risico’s voor persoonlijke veiligheid',
        paragraphs: [
          'Het online plaatsen van foto’s van waardevolle spullen of huisdieren met locatiegegevens kan leiden tot ongewenst volgen of diefstal.',
        ],
      },
      {
        heading: 'Andere gevoelige metadatavelden',
        paragraphs: [
          'Naast GPS vormen ook serienummers van camera’s en tijdstempels tot op de milliseconde een herkenbare vingerafdruk.',
        ],
      },
      {
        heading: 'Een vaste controle vóór het delen',
        paragraphs: [
          'Een snelle check in de browser vóór het publiceren zorgt ervoor dat privégegevens privé blijven.',
        ],
      },
    ],
    faqHeading: 'Vragen over GPS in foto’s',
    faq: [
      { q: 'Kan een gewiste locatie later worden hersteld?', a: 'Nee, de GPS-blokken zijn definitief en onomkeerbaar verwijderd.' },
      { q: 'Wissen sociale media de locatie niet automatisch?', a: 'Bij normale tijdlijnberichten vaak wel, maar niet bij het versturen als document of via opslagdiensten.' },
      { q: 'Worden HEIC-foto’s van iPhone ondersteund?', a: 'Ja, via [HEIC-metadata verwijderen](heic-metadata-remover) wordt het HEIC-formaat netjes behouden.' },
      { q: 'Roteert de foto na het verwijderen van de gegevens?', a: 'Nee, het oriëntatielabel dat nodig is voor de juiste weergave blijft bewaard.' },
    ],
  },

  'batch-remove-metadata': {
    metaTitle: 'Batch metadata van foto’s verwijderen — gratis en lokaal',
    related: ['remove-gps-location-from-photos', 'remove-stable-diffusion-comfyui-metadata', 'hide-midjourney-dalle-prompts'],
    description:
      'Was tot 50 afbeeldingen tegelijk in de browser: parallelle Web Workers zorgen voor snelheid, zonder upload naar servers en met download als één ZIP.',
    updated: '2026-10-23',
    sections: [
      {
        heading: 'Grote reeksen foto’s in één keer verwerken',
        paragraphs: [
          'Bij productcatalogi of vakantiealbums is het stuk voor stuk opschonen van foto’s tijdrovend. AI Label Remover maakt het mogelijk om tot 50 bestanden tegelijk te verwerken.',
          'Onafhankelijke Web Workers benutten alle processorkernen van je computer of smartphone om de bestanden parallel te verwerken.',
        ],
      },
      {
        heading: 'Lokale verwerking zonder internetbeperkingen',
        paragraphs: [
          'Omdat bestanden niet naar een server worden geüpload maar direct in het browsergeheugen worden verwerkt, kost het verwerken van tientallen megabytes slechts seconden.',
        ],
      },
      {
        heading: 'Automatische hercontrole van elk resultaat',
        paragraphs: [
          'Na afloop leest het systeem de headers van elk gegenereerd bestand opnieuw in om te controleren of EXIF, GPS, C2PA en prompts daadwerkelijk zijn verdwenen.',
        ],
      },
      {
        heading: 'Originele bestandsnamen en downloaden als ZIP',
        paragraphs: [
          'Gewassen bestanden behouden hun oorspronkelijke naam en kunnen los of met één klik gebundeld als ZIP-bestand worden opgeslagen.',
        ],
      },
      {
        heading: 'Volledige privacy en offline werking',
        paragraphs: [
          'Zodra de pagina is geladen, werkt het programma volledig autonoom, zelfs als de internetverbinding wordt verbroken.',
        ],
      },
    ],
    faqHeading: 'Vragen over batchverwerking',
    faq: [
      { q: 'Kan ik verschillende bestandsformaten door elkaar uploaden?', a: 'Ja, JPEG, PNG, WebP, HEIC en AVIF kunnen gelijktijdig worden verwerkt.' },
      { q: 'Waarom geldt er een limiet van 50 bestanden?', a: 'Dit voorkomt dat het werkgeheugen (RAM) van mobiele apparaten overbelast raakt.' },
      { q: 'Veranderen de bestandsnamen in het ZIP-bestand?', a: 'Nee, de oorspronkelijke bestandsnamen blijven behouden.' },
      { q: 'Is een internetverbinding vereist?', a: 'Nee, na het laden van de pagina functioneert de JavaScript-engine volledig offline.' },
    ],
  },

  'image-metadata-viewer-online': {
    title: 'Metadata van foto’s bekijken: EXIF, GPS, XMP, IPTC en C2PA op één plek',
    metaTitle: 'Metadata bekijken online: EXIF, GPS en AI-gegevens',
    summary: [
      'Voordat je een foto deelt of een afbeelding vertrouwt, laat een goede metadata viewer alles zien wat het bestand over zichzelf vertelt — niet alleen de paar velden die je telefoon of Verkenner toont.',
      'Deze gids legt uit wat een volledige metadatacontrole omvat, waar ingebouwde viewers tekortschieten, waarom veel online EXIF-viewers zelf een privacyrisico zijn en hoe je de belangrijkste velden leest.',
    ],
    description:
      'Gratis online metadata viewer: bekijk alle EXIF-, GPS-, XMP-, IPTC-, C2PA- en AI-promptvelden van je foto in de browser, zonder upload en zonder account.',
    updated: '2026-11-09',
    related: ['how-to-check-if-image-is-ai-generated', 'remove-gps-location-from-photos', 'what-is-c2pa-content-credentials'],
    sections: [
      {
        heading: 'Wat een volledige metadatacontrole omvat',
        paragraphs: ['Een grondige metadata viewer leest elk blok in het bestand, niet alleen EXIF:'],
        bullets: [
          'EXIF — merk en model van camera of telefoon, belichting, opnametijd, objectief en oriëntatie.',
          'GPS — breedtegraad, lengtegraad, hoogte en kijkrichting, als locatie aan stond. Lees ook [hoe je de GPS-locatie uit foto’s verwijdert](remove-gps-location-from-photos).',
          'XMP — bewerkingssoftware, bewerkingsgeschiedenis, beschrijvingen, beoordelingen en AI-velden.',
          'IPTC — bijschriften, trefwoorden, maker, copyright en DigitalSourceType (hoe de afbeelding is gemaakt).',
          'C2PA — [Content Credentials](what-is-c2pa-content-credentials): wie het bestand heeft ondertekend, welke bewerkingen zijn vastgelegd en of er AI bij betrokken was.',
          'PNG-tekstblokken — [Stable Diffusion-parameters en ComfyUI-workflows](remove-stable-diffusion-comfyui-metadata) en andere ingesloten tekst.',
          'ICC-profiel en miniaturen — kleurinformatie en verborgen voorbeeldafbeeldingen.',
        ],
      },
      {
        heading: 'Ingebouwde viewers en hun blinde vlekken',
        paragraphs: [
          'Windows toont metadata via Eigenschappen › Details, macOS in de Inspector van Voorvertoning of via Toon info in de Finder, de iPhone als je omhoog veegt op een foto en Google Foto’s in het infopaneel. Voor een snelle blik op datum, camera en locatie is dat prima, maar ze tonen slechts een selectie van EXIF en negeren XMP, IPTC, C2PA en PNG-tekst meestal volledig. Een bestand kan in Verkenner schoon lijken en toch een complete AI-prompt bevatten.',
        ],
      },
      {
        heading: 'Het privacyprobleem van online EXIF-viewers',
        paragraphs: [
          'Veel websites die zich “online EXIF viewer” noemen, uploaden je afbeelding naar hun server, lezen hem daar uit en sturen een rapport terug. Voor een privacycontrole is dat precies omgekeerd: juist de foto waar je je zorgen over maakt — inclusief GPS-positie — staat nu bij een derde partij. Kies een viewer die het bestand lokaal leest. Een eenvoudige test: laad de pagina, verbreek de internetverbinding en kijk of de viewer nog werkt.',
        ],
      },
      {
        heading: 'Een bestand bekijken in AI Label Remover',
        paragraphs: ['Sleep de afbeelding naar het vak bovenaan deze pagina. Drie tabbladen ordenen het resultaat:'],
        bullets: [
          '“Wat het verraadt” — een duidelijke samenvatting van plaats, personen, tijd en apparaat, met GPS omgerekend naar decimale coördinaten.',
          '“AI-sporen” — C2PA-manifesten, IPTC-brontypen, namen van generators en prompts, met een eindoordeel.',
          '“Ruwe metadata” — elk veld gegroepeerd per bron: EXIF IFD0, Exif, GPS, XMP-namespaces, IPTC, C2PA en PNG-tekstblokken.',
        ],
      },
      {
        heading: 'Velden die je als eerste moet lezen',
        paragraphs: [],
        bullets: [
          'GPSLatitude / GPSLongitude — de exacte plek; plak de coördinaten in een kaart om te zien wat ze verraden.',
          'DateTimeOriginal versus ModifyDate — wanneer de foto is gemaakt en wanneer hij voor het laatst is opgeslagen.',
          'Make, Model, BodySerialNumber, LensSerialNumber — kunnen foto’s aan één specifiek apparaat koppelen.',
          'Artist, Copyright, OwnerName — namen waarvan je misschien niet wist dat ze erin staan.',
          'Software en CreatorTool — welke apps het bestand hebben bewerkt, AI-tools inbegrepen.',
          'DigitalSourceType en de C2PA claim generator — hoe de afbeelding zelf zegt te zijn gemaakt. Zie ook [hoe je controleert of een afbeelding met AI is gemaakt](how-to-check-if-image-is-ai-generated).',
        ],
      },
      {
        heading: 'Als de viewer bijna niets laat zien',
        paragraphs: [
          'Een afbeelding die je van sociale media hebt opgeslagen, een screenshot of een foto die via een chatapp is verstuurd, is vaak opnieuw gecomprimeerd en ontdaan van metadata. Weinig of geen metadata is in die gevallen normaal en zegt niets over de vraag of de foto echt, bewerkt of AI-gegenereerd is. Vraag om het originele bestand als de herkomst ertoe doet.',
        ],
      },
      {
        heading: 'Bekijken is nog geen verifiëren',
        paragraphs: [
          'Gewone metadata is platte tekst die iedereen kan aanpassen; behandel het dus als aanwijzing, niet als bewijs. C2PA is anders omdat het digitaal ondertekend is, maar een viewer die het manifest toont, controleert de handtekening nog niet — gebruik daarvoor een officiële Content Credentials-verifier. Heb je genoeg gezien en wil je de gegevens kwijt, druk dan op “Alle afbeeldingen wassen” om ze te verwijderen zonder de afbeelding zelf te veranderen. De pagina [EXIF-gegevens verwijderen](remove-exif-data) legt precies uit wat er verdwijnt.',
        ],
      },
    ],
    faqHeading: 'Vragen over metadata bekijken',
    faq: [
      {
        q: 'Is er een gratis metadata viewer die mijn foto niet uploadt?',
        a: 'Ja. AI Label Remover leest bestanden in je browser, zonder upload en zonder account, en werkt ook offline zodra de pagina geladen is.',
      },
      {
        q: 'Kan ik de prompt van een AI-afbeelding zien?',
        a: 'Als de generator hem heeft opgeslagen wel. Prompts van Stable Diffusion en ComfyUI staan in de PNG-tekstblokken; sommige diensten bewaren prompts in XMP- of EXIF-velden.',
      },
      {
        q: 'Waarom toont Windows geen metadata voor mijn PNG?',
        a: 'Verkenner laat voor PNG maar een paar eigenschappen zien. Tekstblokken, XMP en C2PA zijn daar onzichtbaar, maar verschijnen wel in een volledige viewer.',
      },
      {
        q: 'Kan metadata aantonen dat een foto nep is?',
        a: 'Metadata geeft aanwijzingen, geen sluitend bewijs. Alleen ondertekende C2PA-gegevens zijn betrouwbaar te verifiëren; gewone velden kunnen worden bewerkt of gewist.',
      },
    ],
  },

  'how-to-check-if-image-is-ai-generated': {
    title: 'Is deze afbeelding door AI gemaakt? Zo controleer je het bestand zelf',
    metaTitle: 'Is een afbeelding AI-gegenereerd? Gratis controleren',
    summary: [
      'De snelste betrouwbare aanwijzing of een afbeelding met AI is gemaakt, zit in het bestand zelf: C2PA Content Credentials, het IPTC-veld DigitalSourceType en tekst van de generator noemen vaak precies welke tool de afbeelding heeft gemaakt.',
      'Hier lees je waar je op let, hoe je het controleert met een gratis checker die in je browser draait, en waarom “niets gevonden” nooit bewijst dat een foto echt is.',
    ],
    description:
      'Controleer of een afbeelding met AI is gemaakt via C2PA, IPTC DigitalSourceType en generator-metadata in je browser — en wat elk signaal wel en niet bewijst.',
    updated: '2026-11-09',
    related: ['image-metadata-viewer-online', 'what-is-c2pa-content-credentials', 'made-with-ai-label'],
    sections: [
      {
        heading: 'Zorg dat je het originele bestand hebt',
        paragraphs: [
          'Metadata blijft alleen bewaard in het bestand zoals het uit de camera of generator kwam. Screenshots, opnieuw opgeslagen kopieën en afbeeldingen van sociale media zijn meestal opnieuw gecomprimeerd en hebben het grootste deel verloren. Vraag waar mogelijk om de originele export — verstuurd “als bestand”, niet als gecomprimeerde foto.',
        ],
      },
      {
        heading: 'Aanwijzing één: Content Credentials (C2PA)',
        paragraphs: [
          'Tools die C2PA ondersteunen, voegen [een digitaal ondertekend herkomstrecord](what-is-c2pa-content-credentials) toe. De claim generator noemt de app of dienst die de afbeelding heeft gemaakt, de lijst c2pa.actions bevat stappen als “created” of “edited”, en een digitalSourceType kan AI-generatie direct vermelden.',
          'Omdat het record ondertekend is, kan een verifier ook zien of de afbeelding na het ondertekenen is gewijzigd. Een manifest van een AI-dienst is het sterkste bewijs dat metadata kan leveren.',
        ],
      },
      {
        heading: 'Aanwijzing twee: IPTC DigitalSourceType',
        paragraphs: ['Veel generators en editors vullen een standaard IPTC-veld in dat beschrijft hoe de inhoud is ontstaan. De waarden die je het vaakst tegenkomt:'],
        bullets: [
          'trainedAlgorithmicMedia — gemaakt door een generatief AI-model.',
          'compositeWithTrainedAlgorithmicMedia — een echte foto met door AI gegenereerde of vervangen delen, zoals bij Generatieve opvulling in Photoshop.',
          'algorithmicMedia — gemaakt door een algoritme zonder trainingsdata, zoals procedurele kunst.',
          'digitalCapture — met een camera vastgelegd, zonder gemelde generatieve inhoud.',
        ],
      },
      {
        heading: 'Aanwijzing drie: prompts en namen van tools',
        paragraphs: [
          '[Stable Diffusion-interfaces en ComfyUI](remove-stable-diffusion-comfyui-metadata) slaan prompt, seed, model en workflow als tekst op in PNG-bestanden. Andere tools laten hun naam achter in XMP CreatorTool of EXIF Software. Elk van deze sporen wijst duidelijk op AI — en vertelt vaak precies hoe de afbeelding is gemaakt. Zo [verbergt Midjourney of DALL·E soms je prompt niet](hide-midjourney-dalle-prompts).',
        ],
      },
      {
        heading: 'Zo controleer je of een afbeelding AI-gegenereerd is',
        paragraphs: [
          'Sleep het bestand naar het vak bovenaan deze pagina. Het tabblad “AI-sporen” geeft een van drie oordelen — “AI-sporen gevonden”, “Even goed bekijken” of “Geen AI-sporen” — en somt elk signaal met de bron op. “Ruwe metadata” toont de onderliggende waarden. Er wordt niets geüpload. Wil je verwijderen wat er gevonden is, gebruik dan de [AI Tag Cleaner](ai-tag-cleaner).',
        ],
      },
      {
        heading: 'Als het bestand leeg is',
        paragraphs: [
          'Ontbrekende metadata bewijst niets, in welke richting dan ook: editors, chatapps en sociale netwerken verwijderen het voortdurend, en ontbrekende camera-EXIF is hooguit een zwakke hint. Volgende stappen zijn de watermerkcontrole van de aanbieder zelf (bijvoorbeeld Google SynthID voor Gemini), een omgekeerde zoekopdracht op afbeelding om de vroegste kopie te vinden, en kijken waar de afbeelding voor het eerst verscheen. AI-detectors die naar pixels kijken geven kansen, geen bewijs.',
        ],
      },
    ],
    faqHeading: 'Vragen over AI-afbeeldingen herkennen',
    faq: [
      {
        q: 'Kan ik zien of een afbeelding met ChatGPT of Gemini is gemaakt?',
        a: 'Als het bestand zijn Content Credentials nog heeft, noemt de claim generator de dienst. Voor Gemini-afbeeldingen kan Googles SynthID-controle het watermerk ook in de pixels vinden.',
      },
      {
        q: 'Als AI Label Remover geen AI-sporen vindt, is de foto dan echt?',
        a: 'Niet per se. Het betekent alleen dat het bestand geen AI-metadata bevat. Metadata gaat makkelijk verloren of wordt gewist, dus lees een schoon resultaat als “onbekend”, niet als bewijs.',
      },
      {
        q: 'Kan ik een afbeelding controleren die ik van Instagram of Facebook heb opgeslagen?',
        a: 'Dat kan, maar platforms wissen de metadata meestal bij het publiceren, dus verwacht weinig of niets. Het eigen label “AI-info” van het platform is een apart signaal — lees [waarom echte foto’s dat label krijgen](made-with-ai-label).',
      },
      {
        q: 'Is de controle gratis en privé?',
        a: 'Ja — gratis, zonder account, en het bestand wordt lokaal gelezen zonder te worden geüpload.',
      },
    ],
  },
};

export default nl;
