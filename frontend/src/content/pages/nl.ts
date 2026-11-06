import type { Pages } from './types';

const nl: Pages = {
  home: {
    reassure: 'Online, gratis, zonder account en zonder installatie — foto’s worden direct in je browser gelezen en opgeschoond en nooit naar een server geüpload.',
    sources: {
      label: 'Leest en verwijdert metadata uit afbeeldingen gemaakt met',
      note: 'Productnamen geven alleen aan waar afbeeldingen vandaan komen; AI Label Remover is niet verbonden aan deze bedrijven.',
    },
    learn: {
      what: {
        title: 'Wat is metadata?',
        paragraphs: [
          'Metadata is “data over data”: notities in een afbeeldingsbestand die nooit in de foto zelf te zien zijn. Camera’s, telefoons, fotobewerkers en AI-beeldgeneratoren voegen ze automatisch toe, meestal zonder het te melden.',
          'Bij foto’s valt metadata in vijf grote groepen uiteen. Elke groep beantwoordt een andere vraag over de afbeelding — en over de persoon die haar maakte.',
        ],
        types: [
          { name: 'Beschrijvend', text: 'Titel, bijschrift, trefwoorden, namen van mensen op de foto.', example: 'IPTC Caption, XMP dc:title' },
          { name: 'Technisch', text: 'Merk en model van de camera, lens, diafragma, sluitertijd, ISO, serienummer.', example: 'EXIF Make, Model, BodySerialNumber' },
          { name: 'Locatie & tijd', text: 'GPS-coördinaten, hoogte, opnamedatum en tijdzone.', example: 'EXIF GPSLatitude, DateTimeOriginal' },
          { name: 'Rechten & beheer', text: 'Maker, eigenaar, copyright, laatst gebruikte bewerkingssoftware.', example: 'EXIF Artist, Copyright, Software' },
          { name: 'Herkomst & AI', text: 'Content Credentials, labels “gemaakt met AI”, prompts en workflows.', example: 'C2PA manifest, IPTC DigitalSourceType' },
        ],
        synonyms:
          'Je ziet veel namen voor hetzelfde werk — “metadata-verwijderaar”, “EXIF verwijderen”, “metadata-scrubber”, “foto-info wissen” — en ze betekenen allemaal: de verborgen notities uit een bestand halen zonder de foto te veranderen. Een “metadata-viewer”, “-lezer” of “-checker” laat juist zien wat er in het bestand zit. AI Label Remover doet allebei.',
      },
      why: {
        title: 'Waarom metadata bekijken en verwijderen voordat je een foto deelt?',
        paragraphs: [
          'Eén metadataveld is meestal onschuldig, maar samen vertellen ze veel over jou. Een foto die thuis is gemaakt en op een advertentiesite staat, kan GPS-coördinaten bevatten die tot op een paar meter nauwkeurig zijn; afbeeldingen die je per e-mail of cloudlink verstuurt, houden alles wat de camera schreef. Lees [hoe GPS in foto’s je huisadres kan verraden](remove-gps-location-from-photos).',
          'Bij afbeeldingen die met AI zijn gemaakt of bewerkt, bepaalt metadata ook of een platform een label “Gemaakt met AI” toont, en kan ze de volledige prompt prijsgeven. Zie [waar het label “Made with AI” vandaan komt](made-with-ai-label).',
        ],
        bullets: [
          'Laten zien waar je woont, werkt of reist via GPS-coördinaten.',
          'Veel foto’s aan één persoon koppelen via het serienummer van de camera of de naam van de eigenaar.',
          'Prompts, seeds, modellen en workflows blootgeven die je privé wilde houden.',
          'Een AI-label van een platform krijgen door meegestuurde C2PA- of IPTC-gegevens.',
        ],
      },
      standards: {
        title: 'Veelgebruikte metadatastandaarden voor foto’s',
        lead: 'Eén afbeeldingsbestand kan tegelijk meerdere metadata-“vakken” bevatten, elk volgens een eigen standaard. AI Label Remover leest en verwijdert ze allemaal.',
        items: [
          { name: 'EXIF', text: 'Geschreven door camera’s en telefoons: belichtingsinstellingen, apparaat, tijdstempels, GPS, miniaturen.' },
          { name: 'XMP', text: 'Het XML-formaat van Adobe voor bewerkingsgeschiedenis, beoordelingen, trefwoorden en veel AI-gerelateerde eigenschappen.' },
          { name: 'IPTC', text: 'De standaard van redacties: bijschrift, maker, copyright en het veld DigitalSourceType dat AI-afbeeldingen aanmerkt.' },
          { name: 'C2PA', text: 'Cryptografisch ondertekende Content Credentials die vastleggen hoe een bestand is gemaakt en bewerkt. [Wat is C2PA](what-is-c2pa-content-credentials).' },
          { name: 'PNG text', text: 'tEXt-, iTXt- en zTXt-chunks waarin [Stable Diffusion en ComfyUI](remove-stable-diffusion-comfyui-metadata) prompts en workflows opslaan.' },
        ],
      },
    },
    security: {
      title: 'Je foto’s blijven veilig',
      lead: 'Bij elke tool die persoonlijke bestanden verwerkt, is de eerste vraag: “waar gaan mijn foto’s naartoe?” Het antwoord van AI Label Remover: nergens.',
      items: [
        { title: '100% op je apparaat', text: 'Lezen en opschonen gebeurt in een Web Worker in je browsertabblad. Geen enkele server ontvangt je bestanden.' },
        { title: 'Niets opgeslagen, geen AI-training', text: 'Omdat foto’s nergens heen gaan, bestaat er geen kopie die kan worden opgeslagen, gelekt of gebruikt om een model te trainen.' },
        { title: 'Werkt offline', text: 'Laad de pagina, zet wifi uit en was een bestand — het werkt nog steeds. Het tabblad Netwerk in DevTools toont geen beeldgegevens die vertrekken.' },
        { title: 'Geen account, geen tracking', text: 'Geen registratie, geen analytics, advertenties of pixels van derden. De site onthoudt alleen de taal en het thema die je kiest.' },
      ],
    },
    faq: [
      { q: 'Wat is het verschil tussen EXIF en metadata?', a: 'EXIF is één soort metadata — de soort die camera’s en telefoons schrijven. “Metadata” is het bredere begrip en omvat ook XMP, IPTC, C2PA en tekstchunks in PNG.' },
      { q: 'Kan metadata laten zien waar een foto is gemaakt?', a: 'Ja, als de afbeelding GPS-tags heeft. Telefoons leggen meestal breedtegraad, lengtegraad en hoogte vast als de camera je locatie mag gebruiken. Wassen verwijdert deze tags zonder de kwaliteit aan te tasten. Zie [GPS-locatie uit foto’s verwijderen](remove-gps-location-from-photos).' },
      { q: 'Hoe verwijder ik AI-metadata uit een afbeelding?', a: 'Sleep de afbeelding naar het vak bovenaan deze pagina en klik op “Alle afbeeldingen wassen”. Vóór het wassen toont het overzicht van elk bestand welke C2PA-, IPTC- en promptgegevens erin zitten.' },
      { q: 'Is het veilig om mijn foto’s hier te uploaden?', a: 'Je foto’s worden helemaal niet geüpload. AI Label Remover opent bestanden in je browser, verwerkt ze in het geheugen van het tabblad en slaat de schone kopie direct op je apparaat op. Zodra de pagina geladen is, kun je offline gaan en blijft alles werken.' },
    ],
    ctaTools: 'Alle tools bekijken',
    start: {
      title: 'Begin met het bestand dat je hebt',
      lead: 'Kies wat je wilt doen — elke tool heeft het uploadvak bovenaan de pagina.',
      badge: 'Aanbevolen',
      open: 'Tool openen',
    },
    nav: {
      remove: 'Metadata verwijderen',
      check: 'Bekijken & controleren',
      learn: 'Meer weten',
      viewer: 'Fotometadata bekijken',
      aiCheck: 'Controleren of een foto AI is',
      whatIs: 'Wat is metadata?',
    },
  },
  labels: {
    tools: 'Meer metadatatools',
    relatedTools: 'Speciale tools hiervoor',
    homeTitle: 'Kies de tool voor je bestand',
    homeLead: 'Elke pagina richt zich op één taak, met de tool direct bovenaan.',
    formats: 'Wat wordt verwijderd en wat blijft',
    contact: 'Contact',
    contactText: 'Vragen, bugs of een bestand dat niet goed gewassen wordt? Schrijf naar',
    updated: 'Bijgewerkt op {date}',
  },
  tools: {
    'ai-tag-cleaner': {
      metaTitle: 'AI Tag Cleaner – AI-tags uit afbeeldingsmetadata halen',
      description: 'Verwijder AI-tags uit afbeeldingen: IPTC “AI-gegenereerd”, C2PA, generatornamen in XMP en prompts. Verliesvrij, gratis, in je browser, zonder upload.',
      navLabel: 'AI-tag-cleaner',
      h1: 'AI-tags uit afbeeldingen verwijderen',
      lead: 'AI-generators en AI-bewerkers labelen de bestanden die ze aanraken: een brontype “door AI gegenereerd”, een ondertekend C2PA-record, de appnaam en soms de hele prompt. Sleep hieronder een afbeelding om elke AI-tag te zien en verwijder ze zonder ook maar één pixel opnieuw te coderen.',
      sections: [
        {
          heading: 'Wat telt als AI-tag',
          paragraphs: ['Een AI-tag is elk veld in het bestand dat zegt of suggereert dat er AI is gebruikt. Ze zitten verspreid over meerdere metadatastandaarden tegelijk, daarom is één veld met de hand wissen zelden genoeg:'],
          bullets: [
            'IPTC- en XMP-waarden voor DigitalSourceType, zoals trainedAlgorithmicMedia of compositeWithTrainedAlgorithmicMedia.',
            'Acties in [C2PA Content Credentials](what-is-c2pa-content-credentials) die generatieve stappen markeren, geschreven door ChatGPT, Firefly, Photoshop en anderen.',
            'Software- en Creator Tool-velden met de naam van de generator, plus XMP-geschiedenis van AI-bewerkingen.',
            'Prompt, seed en model in PNG-chunks van [Stable Diffusion en ComfyUI](remove-stable-diffusion-comfyui-metadata).',
          ],
        },
        {
          heading: 'Zo werkt de AI-tag-cleaner',
          paragraphs: [
            'AI Label Remover leest de bestandsstructuur direct in je browser. Elke AI-tag wordt getoond met het exacte veld waar hij vandaan komt, en het bestand krijgt een oordeel — “AI-sporen gevonden”, “Even goed bekijken” of “Geen AI-sporen” — voordat er iets verandert.',
            'Met “Alle afbeeldingen wassen” worden de blokken met die tags weggeknipt: XMP, IPTC, EXIF, de C2PA-manifeststore en PNG-tekstchunks. De gecomprimeerde beelddata worden byte voor byte gekopieerd en de schone kopie wordt opnieuw gelezen, zodat je kunt zien dat er geen AI-tag over is.',
          ],
        },
        {
          heading: 'Welke tools welke tags achterlaten',
          paragraphs: [
            'Afbeeldingen van ChatGPT en Gemini komen met C2PA-records; Firefly en Generatieve opvulling in Photoshop voegen C2PA en DigitalSourceType toe; Midjourney schrijft beschrijvende XMP; Stable Diffusion-interfaces bewaren alle generatie-instellingen in de PNG. Wil je prompts privé houden, lees dan [Midjourney- en DALL·E-prompts verbergen](hide-midjourney-dalle-prompts).',
          ],
        },
        {
          heading: 'Wat een AI-tag-cleaner niet kan',
          paragraphs: [
            'Wassen werkt alleen op metadata. Onzichtbare watermerken zoals SynthID zitten in de pixels en blijven bestaan, en platforms kunnen eigen classificatiemodellen gebruiken. Tags verwijderen is bedoeld voor privacy en om onterechte labels op echte foto’s te herstellen — is een afbeelding met AI gemaakt en realistisch, dan vragen platforms meestal nog steeds om dat te vermelden.',
          ],
        },
      ],
      faqHeading: 'Vragen over de AI-tag-cleaner',
      faq: [
        { q: 'Is een AI-tag hetzelfde als een AI-label?', a: 'Niet helemaal. De tag is data in het bestand; het label is wat een platform toont, zoals “AI-info” op Instagram. Platforms maken het label vaak op basis van de tag. Om dat bij een echte foto te voorkomen, zie [Geen AI-tag](no-ai-tag).' },
        { q: 'Kan ik alleen de AI-tags verwijderen en de rest houden?', a: 'De cleaner verwijdert hele metadatablokken in plaats van losse velden, omdat AI-tags over meerdere blokken verspreid zijn. Rotatie, ICC-kleurprofiel en pixelafmetingen blijven altijd behouden, dus de foto ziet er precies hetzelfde uit.' },
        { q: 'Gaat de kwaliteit omlaag door AI-tags te wissen?', a: 'Nee. Er wordt niets opnieuw gecodeerd; alleen metadata verdwijnt, de beelddata blijven identiek.' },
        { q: 'Welke formaten kan ik wassen?', a: 'JPG, PNG, WebP, GIF, HEIC/HEIF en AVIF — tot 50 bestanden tegelijk, elk tot 25 MB. Prompts in PNG’s kun je ook met de [PNG-metadataverwijderaar](png-metadata-remover) aanpakken.' },
        { q: 'Verwijdert dit de metadata van ChatGPT- of Gemini-afbeeldingen?', a: 'Het verwijdert de C2PA Content Credentials en IPTC-velden die deze diensten schrijven. Google voegt ook een SynthID-watermerk in de pixels toe, dat geen enkele metadatatool kan weghalen.' },
        { q: 'Kan ik de prompt zien voordat ik hem wis?', a: 'Ja. Het tabblad “Ruwe metadata” toont prompts, workflows en generatornamen woord voor woord, zodat je kunt kopiëren wat je wilt bewaren.' },
      ],
      related: ['made-with-ai-label', 'what-is-c2pa-content-credentials', 'remove-stable-diffusion-comfyui-metadata'],
      updated: '2026-11-06',
    },
    'no-ai-tag': {
      metaTitle: 'Geen AI-tag – Echte foto’s plaatsen zonder “AI-info”',
      description: 'Een “AI-info”-label op een echte foto? Verwijder de C2PA- en IPTC-data die het veroorzaken en plaats zonder AI-tag. Verliesvrij, gratis, in je browser.',
      navLabel: 'Geen AI-tag',
      h1: 'Geen AI-tag op je echte foto’s',
      lead: 'Een kleine generatieve correctie in Photoshop of een telefoonapp kan genoeg zijn voor Instagram, Facebook of Threads om een “AI-info”-label op een echte foto te zetten. Sleep het bestand hieronder om te zien welke data het label veroorzaken en deel daarna een schone kopie zonder AI-tag in de metadata.',
      sections: [
        {
          heading: 'Waarom een echte foto een AI-tag krijgt',
          paragraphs: ['Platforms lezen herkomstgegevens die bewerkingsapps aan het bestand toevoegen. [Waarom echte foto’s een “Made with AI”-label krijgen](made-with-ai-label) legt het uit; de gebruikelijke oorzaken zijn:'],
          bullets: [
            'Een C2PA-manifest dat een generatieve stap vastlegt, zoals Generatieve opvulling, AI-gum of AI-uitbreiden.',
            'Een IPTC- of XMP-waarde voor DigitalSourceType die zegt dat de afbeelding met AI is samengesteld.',
            'Content Credentials die een bewerkingsapp standaard bij het exporteren toevoegt.',
          ],
        },
        {
          heading: 'Zo plaats je zonder AI-tag',
          paragraphs: ['Het kost minder dan een minuut en er verlaat niets je apparaat:'],
          bullets: [
            'Sleep de bewerkte foto naar het vak bovenaan deze pagina.',
            'Lees het oordeel en de velden erachter — het rapport noemt de exacte C2PA-actie of IPTC-waarde.',
            'Klik op “Alle afbeeldingen wassen” en bewaar de schone kopie.',
            'Upload de schone kopie, niet de oorspronkelijke export.',
          ],
        },
        {
          heading: 'Stop de tag bij de bron',
          paragraphs: [
            'Bewerk je vaak, zet dan Content Credentials uit in de exportinstellingen van Photoshop en Lightroom, zodat ze niet eens worden geschreven. Voor veel foto’s tegelijk, zie [metadata in bulk verwijderen](batch-remove-metadata).',
          ],
        },
        {
          heading: 'Wat “geen AI-tag” wel en niet belooft',
          paragraphs: [
            'Door de metadata te verwijderen verdwijnt de reden in het bestand, en dat is bij de meeste bewerkte foto’s de oorzaak. Pixelwatermerken zoals SynthID blijven, en een platform kan een bericht nog steeds labelen via eigen detectie of je vragen het zelf aan te geven. Deze pagina is bedoeld voor echte foto’s met kleine bewerkingen: is een afbeelding met AI gemaakt en kan ze misleiden, vermeld dat dan.',
          ],
        },
      ],
      faqHeading: 'Vragen over “geen AI-tag”',
      faq: [
        { q: 'Verdwijnt het “AI-info”-label van een bericht dat al online staat?', a: 'Nee. Het label hoort bij het bericht op het platform. Verwijder of archiveer het bericht, was het bestand hier en upload de schone kopie.' },
        { q: 'Is “geen AI-tag” gegarandeerd?', a: 'Nee. Het verwijdert de metadata die platforms lezen, maar die kunnen ook andere signalen gebruiken. Bij de meeste bewerkte foto’s is de metadata wel de reden voor het label.' },
        { q: 'Werkt het met iPhone- en Android-foto’s?', a: 'Ja. HEIC van iPhone en JPG van Android worden gewassen zonder conversie. Er is ook een aparte [HEIC-metadataverwijderaar](heic-metadata-remover).' },
        { q: 'En AI-tags op een volledig met AI gemaakte afbeelding?', a: 'De [AI-tag-cleaner](ai-tag-cleaner) toont en verwijdert ze, maar platformregels vragen meestal nog steeds dat je realistische AI-beelden zelf labelt.' },
      ],
      related: ['made-with-ai-label', 'what-is-c2pa-content-credentials', 'batch-remove-metadata'],
      updated: '2026-11-06',
    },
    'remove-exif-data': {
      metaTitle: 'EXIF-gegevens online uit foto’s verwijderen, gratis',
      description: 'Verwijder EXIF — GPS, camera, serienummer, datum — uit JPG, HEIC, PNG en WebP in je browser. Geen upload, geen kwaliteitsverlies, tot 50 bestanden.',
      navLabel: 'EXIF-verwijderaar',
      h1: 'EXIF-gegevens uit foto’s verwijderen',
      lead: 'Sleep je foto’s hieronder om elk EXIF-veld te zien — GPS-locatie, camera en lens, serienummer, opnametijd — en haal het met één klik weg. Alles gebeurt op je apparaat; de bestanden worden nooit geüpload.',
      sections: [
        {
          heading: 'Wat EXIF-gegevens verraden',
          paragraphs: ['EXIF is het blok technische notities dat een camera of telefoon in elke foto schrijft. Op zich is het meeste onschuldig, maar samen zegt het veel over jou. Deze velden zijn belangrijk voor je privacy:'],
          bullets: [
            'GPS-breedtegraad, -lengtegraad en -hoogte — vaak tot op een paar meter nauwkeurig, genoeg om een huis te vinden.',
            'Datum en tijd van de opname, met tijdzone.',
            'Merk en model van camera of telefoon, lens en bij veel camera’s een serienummer dat foto’s aan elkaar koppelt.',
            'Naam van eigenaar of maker en de software die het bestand het laatst bewerkte.',
            'Een ingesloten miniatuur, die na bijsnijden nog het oorspronkelijke beeld kan tonen.',
          ],
        },
        {
          heading: 'Zo werkt deze EXIF-verwijderaar',
          paragraphs: [
            'AI Label Remover leest de bestandsstructuur direct. In een JPEG knipt hij het APP1-segment met EXIF en XMP weg, plus IPTC, opmerkingen en miniaturen; in HEIC, PNG en WebP verwijdert hij de overeenkomende boxen of chunks. De gecomprimeerde beelddata worden byte voor byte gekopieerd, dus er wordt niets opnieuw gecodeerd en de foto blijft identiek.',
            'Velden die bepalen hoe de foto wordt weergegeven blijven bewust behouden: rotatie, ICC-kleurprofiel en pixelafmetingen. Zo voorkom je gekantelde foto’s en flets kleuren die grovere tools opleveren. Na afloop wordt het gewassen bestand opnieuw gelezen, zodat je ziet dat de EXIF-velden echt weg zijn.',
          ],
        },
        {
          heading: 'Wanneer je EXIF verwijdert voor het delen',
          paragraphs: [
            'Veel grote sociale netwerken halen EXIF weg bij het uploaden, maar talloze plekken niet: e-mailbijlagen, cloudlinks, forums, marktplaatsen, chatapps die bestanden in “originele kwaliteit” versturen en je eigen website. Weet je niet waar een foto belandt, dan is eerst wassen de veilige keuze.',
            'Iets online verkopen, een thuis gemaakte foto plaatsen of foto’s sturen naar iemand die je net kent zijn de klassieke gevallen waarin [GPS-gegevens een locatie kunnen verraden](remove-gps-location-from-photos).',
          ],
        },
        {
          heading: 'Privé door ontwerp',
          paragraphs: [
            'Online EXIF-verwijderaars uploaden je foto meestal naar een server, verwerken hem daar en sturen hem terug. AI Label Remover doet alles in Web Workers in je browsertabblad: zodra de pagina geladen is, kun je zelfs je verbinding uitzetten en blijft het werken. Geen account, geen watermerk en geen limiet behalve 25 MB en 40 megapixel per bestand.',
          ],
        },
      ],
      faqHeading: 'Vragen over EXIF verwijderen',
      faq: [
        { q: 'Verlaagt EXIF verwijderen de kwaliteit?', a: 'Nee. Alleen metadatablokken worden weggeknipt; de gecomprimeerde beelddata worden ongewijzigd gekopieerd, dus resolutie, scherpte en kleur blijven precies gelijk.' },
        { q: 'Staat mijn foto daarna nog goed rechtop?', a: 'Ja. De oriëntatiewaarde blijft behouden, samen met het ICC-kleurprofiel, dus de foto wordt net zo weergegeven als ervoor.' },
        { q: 'Kan ik EXIF uit HEIC-foto’s van een iPhone halen?', a: 'Ja. HEIC en HEIF worden rechtstreeks ondersteund, zonder ze eerst naar JPEG om te zetten. Er is ook een aparte pagina: [HEIC-metadataverwijderaar](heic-metadata-remover).' },
        { q: 'Hoe controleer ik of de EXIF weg is?', a: 'Na het wassen leest AI Label Remover het nieuwe bestand opnieuw en toont welke velden er nog zijn. Je kunt het ook openen in de bestandseigenschappen van je besturingssysteem.' },
        { q: 'Kan ik veel foto’s tegelijk doen?', a: 'Ja: tot 50 bestanden tegelijk, te downloaden als één ZIP. Zie [metadata in bulk verwijderen](batch-remove-metadata).' },
      ],
      related: ['remove-gps-location-from-photos', 'batch-remove-metadata', 'made-with-ai-label'],
      updated: '2026-11-06',
    },
    'remove-c2pa-content-credentials': {
      metaTitle: 'C2PA Content Credentials uit afbeeldingen verwijderen',
      description: 'Bekijk en verwijder C2PA Content Credentials (JUMBF-manifests) uit JPG, PNG, HEIC, WebP en AVIF, verliesvrij en zonder iets te uploaden.',
      navLabel: 'C2PA-verwijderaar',
      h1: 'C2PA Content Credentials verwijderen',
      lead: 'Content Credentials zijn een ondertekende geschiedenis die aan een afbeelding hangt: welke app haar maakte, welke bewerkingen volgden en of generatieve AI is gebruikt. Sleep hieronder een bestand om het C2PA-manifest te lezen en verwijder daarna de hele manifeststore verliesvrij.',
      sections: [
        {
          heading: 'Wat een C2PA-manifest bevat',
          paragraphs: ['C2PA (Coalition for Content Provenance and Authenticity) beschrijft hoe je een cryptografisch ondertekend record in een bestand insluit. [C2PA uitgelegd](what-is-c2pa-content-credentials) gaat dieper; in de praktijk bevat een manifest meestal:'],
          bullets: [
            'De claim generator — de app of dienst die ondertekende, zoals Photoshop, Firefly, ChatGPT of een camera.',
            'Een lijst met acties: gemaakt, geopend, bewerkt, bijgesneden, en markeringen voor generatieve AI-stappen.',
            'Ingrediënten — eerdere versies of bronbeelden waaruit het bestand is opgebouwd.',
            'Een digitaal brontype dat zegt of de inhoud is vastgelegd, samengesteld of door AI gegenereerd.',
            'Een handtekening en certificaat die het record aan de exacte beelddata koppelen.',
          ],
        },
        {
          heading: 'Waar C2PA in elk bestandstype zit',
          paragraphs: [
            'In JPEG staat de manifeststore in APP11-segmenten als JUMBF-boxen; in PNG is het een caBX-chunk; in HEIC en AVIF een uuid-box; in WebP een eigen RIFF-chunk. AI Label Remover vindt ze allemaal, toont de claims en verwijdert de hele store terwijl de beelddata ongewijzigd worden gekopieerd.',
            'Omdat de handtekening het manifest aan de exacte bytes bindt, breekt of verdwijnt het meestal toch als een andere app opnieuw opslaat. Netjes verwijderen voorkomt dat er een kapot, half geldig record achterblijft.',
          ],
        },
        {
          heading: 'Redenen om te houden, redenen om te verwijderen',
          paragraphs: [
            'Content Credentials kunnen waardevol zijn: ze helpen redacties en makers aantonen waar een beeld vandaan komt. Is dat je doel, houd ze dan — en bewaar in elk geval het origineel, want verwijderde metadata kun je niet terughalen.',
            'Verwijderen is zinvol als het record meer verraadt dan je wilt (namen, bewerkingsgeschiedenis, bronbeelden), of als een app na een kleine correctie een AI-markering aan een echte foto toevoegde. Je kunt Content Credentials ook uitzetten in de exportinstellingen van Photoshop en Lightroom.',
          ],
        },
      ],
      faqHeading: 'Vragen over C2PA',
      faq: [
        { q: 'Controleert AI Label Remover C2PA-handtekeningen?', a: 'Nee. Het leest en toont de inhoud van het manifest, maar valideert de certificaatketen niet. Gebruik daarvoor de officiële Content Credentials Verify-tool.' },
        { q: 'Is het legaal om Content Credentials te verwijderen?', a: 'Metadata verwijderen uit bestanden die van jou zijn of die je mag bewerken is meestal geen probleem, maar gebruik het niet om te misleiden over wie een beeld maakte of hoe. Dit is algemene informatie, geen juridisch advies.' },
        { q: 'Waarom staat er bij mijn foto “Even goed bekijken”?', a: 'Het bestand heeft een C2PA-manifest dat AI niet expliciet noemt. Sommige platforms zien elk manifest als aanwijzing, dus bekijk de acties voordat je beslist.' },
        { q: 'Weet een platform dan nog dat de afbeelding bewerkt is?', a: 'Niet via het verwijderde manifest. Platforms kunnen andere signalen gebruiken, en onzichtbare watermerken in de pixels worden niet geraakt door metadata te verwijderen.' },
      ],
      related: ['what-is-c2pa-content-credentials', 'made-with-ai-label', 'hide-midjourney-dalle-prompts'],
      updated: '2026-11-06',
    },
    'heic-metadata-remover': {
      metaTitle: 'HEIC-metadata verwijderen – EXIF en GPS van iPhone-foto’s',
      description: 'Verwijder EXIF, GPS-locatie en tijdstempels uit HEIC- en HEIF-foto’s van iPhone zonder ze naar JPEG om te zetten. Verliesvrij, in je browser, zonder upload.',
      navLabel: 'HEIC-metadataverwijderaar',
      h1: 'HEIC-metadata uit iPhone-foto’s verwijderen',
      lead: 'iPhones bewaren foto’s als HEIC, en elke foto legt vast waar en wanneer hij is gemaakt. Sleep hieronder HEIC- of HEIF-bestanden om die metadata te zien en te verwijderen — de foto blijft HEIC, zonder conversie en zonder kwaliteitsverlies.',
      sections: [
        {
          heading: 'Wat een HEIC-foto van een iPhone vastlegt',
          paragraphs: ['Een gewone iPhone-foto bevat meer dan de meeste mensen denken:'],
          bullets: [
            'Exacte GPS-coördinaten, hoogte en de richting waarin de camera wees.',
            'Opnamedatum, tijd en tijdzone, plus wijzigingsdata.',
            'Toestelmodel, lens, camera-instellingen en iOS-versie.',
            'Apple-specifieke gegevens, zoals de koppel-ID van een Live Photo.',
            'XMP-gegevens van bewerkingsapps, soms met C2PA-records.',
          ],
        },
        {
          heading: 'Metadata verwijderen zonder naar JPEG om te zetten',
          paragraphs: [
            'Het gebruikelijke advies is HEIC naar JPEG omzetten en hopen dat de metadata niet meekomt. Dat codeert het beeld opnieuw, kost kwaliteit en gooit vaak het kleurprofiel met breed gamma weg. AI Label Remover bewerkt in plaats daarvan de HEIC-container zelf: het verwijdert Exif- en XMP-items, C2PA-uuid-boxen en tijdstempelboxen, en laat de HEVC-beelddata, rotatie (irot/imir) en het kleurprofiel (colr) intact.',
            'Dezelfde engine verwerkt AVIF, dat dezelfde ISOBMFF-container gebruikt, dus AVIF-exports van moderne apps worden op dezelfde manier gewassen.',
          ],
        },
        {
          heading: 'iPhone-instellingen of het bestand wassen',
          paragraphs: [
            'In iOS kun je de locatie voor één keer delen uitzetten via de knop “Opties” in het deelmenu, en de app Foto’s kan de locatie per foto aanpassen of verwijderen. Dat werkt prima voor losse foto’s, maar je vergeet het snel en de andere velden blijven staan. Lees [waarom GPS in foto’s een risico is](remove-gps-location-from-photos).',
            'Voor een reeks foto’s — een map vakantiefoto’s, productfoto’s of beelden voor een advertentie — is ze in AI Label Remover slepen en één ZIP bewaren sneller, en het voor-en-na-rapport laat precies zien wat er is verwijderd.',
          ],
        },
      ],
      faqHeading: 'Vragen over HEIC',
      faq: [
        { q: 'Werkt het op Windows, waar HEIC soms niet opent?', a: 'Ja. AI Label Remover leest de HEIC-structuur zelf, dus er is geen HEIC-codec nodig. HEIC-bestanden tonen een formaatlabel in plaats van een voorbeeld, maar lezen en wassen werken gewoon.' },
        { q: 'Opent het gewassen bestand nog in Foto’s?', a: 'Ja. Het resultaat is een standaard HEIC-bestand met dezelfde beelddata; alleen de metadata-items zijn verwijderd.' },
        { q: 'Worden Live Photos ondersteund?', a: 'AI Label Remover verwerkt de stilstaande HEIC-foto. De bijbehorende video van een Live Photo is een apart bestand en wordt niet veranderd.' },
        { q: 'Is er een limiet voor de bestandsgrootte?', a: 'Elk bestand mag tot 25 MB en 40 megapixel zijn, genoeg voor foto’s van elke huidige iPhone, en je kunt er 50 tegelijk wassen.' },
      ],
      related: ['remove-gps-location-from-photos', 'batch-remove-metadata', 'what-is-c2pa-content-credentials'],
      updated: '2026-11-06',
    },
    'png-metadata-remover': {
      metaTitle: 'PNG-metadata verwijderen – Prompts en tekstchunks wissen',
      description: 'Verwijder PNG-metadata — tEXt-, iTXt- en zTXt-chunks met prompts van Stable Diffusion of ComfyUI, XMP, eXIf en C2PA — terwijl het beeld verliesvrij blijft.',
      navLabel: 'PNG-metadataverwijderaar',
      h1: 'PNG-metadata verwijderen',
      lead: 'PNG-bestanden verbergen metadata in tekstchunks: AI-prompts en workflows, namen van makers, software en tijdstempels. Sleep hieronder PNG’s om elke chunk te lezen en ze te verwijderen, terwijl de beelddata bit voor bit identiek blijven.',
      sections: [
        {
          heading: 'Waar PNG zijn metadata bewaart',
          paragraphs: ['Een PNG is een reeks chunks. Het beeld zelf zit in IHDR, PLTE en IDAT; al het andere is optioneel. Deze chunks verwijdert AI Label Remover:'],
          bullets: [
            'tEXt, zTXt en iTXt — vrije tekst, gecomprimeerde tekst en internationale tekst. Stable Diffusion WebUI schrijft hier een chunk “parameters”; ComfyUI schrijft JSON voor “prompt” en “workflow”.',
            'XMP-pakketten in iTXt, inclusief IPTC- en AI-bronverklaringen.',
            'eXIf — EXIF-gegevens, inclusief GPS als een app die uit een foto heeft gekopieerd.',
            'caBX — C2PA Content Credentials.',
            'tIME (laatst gewijzigd) en dSIG (digitale handtekening).',
          ],
        },
        {
          heading: 'Wat blijft, zodat het beeld hetzelfde oogt',
          paragraphs: [
            'Transparantie (tRNS), gamma en chromaticiteit (gAMA, cHRM), de sRGB-vlag en het ingesloten ICC-profiel (iCCP) bepalen de weergave en blijven dus behouden. Geanimeerde PNG’s houden hun acTL-, fcTL- en fdAT-chunks, zodat APNG-animaties blijven werken.',
            'Omdat de IDAT-data worden gekopieerd en niet opnieuw gecomprimeerd, is het gewassen bestand pixel voor pixel gelijk aan het origineel — meestal iets kleiner, omdat de tekstchunks weg zijn.',
          ],
        },
        {
          heading: 'AI-prompts en workflows beschermen',
          paragraphs: [
            'Deel je afbeeldingen uit Stable Diffusion, Forge of ComfyUI, dan kan iedereen de PNG terugslepen in dezelfde tool en je exacte prompt, seed, model en nodegraaf terugkrijgen. [Hoe Stable Diffusion en ComfyUI prompts in PNG’s verbergen](remove-stable-diffusion-comfyui-metadata) laat zien wat er wordt opgeslagen. Wassen haalt alles weg; via het tabblad “Ruwe metadata” kun je de prompt eerst kopiëren als je hem wilt bewaren.',
          ],
        },
      ],
      faqHeading: 'Vragen over PNG-metadata',
      faq: [
        { q: 'Veranderen de kleuren als ik PNG-metadata verwijder?', a: 'Nee. Kleurgerelateerde chunks — sRGB, gAMA, cHRM en iCCP — blijven behouden en de IDAT-beelddata worden ongewijzigd gekopieerd.' },
        { q: 'Werkt het met transparante PNG’s?', a: 'Ja. Transparantiegegevens (tRNS of het alfakanaal in IDAT) horen bij het beeld en worden nooit aangeraakt.' },
        { q: 'Kan ik de prompt ergens bewaren?', a: 'Kopieer hem uit het tabblad “Ruwe metadata” voordat je wast. Eenmaal verwijderd is de metadata niet terug te halen uit het gewassen bestand.' },
        { q: 'Werkt het ook voor PNG’s van Midjourney of DALL·E?', a: 'Ja. Tekst, XMP of C2PA-gegevens die deze diensten insluiten worden op dezelfde manier verwijderd. Zie [Midjourney- en DALL·E-prompts verbergen](hide-midjourney-dalle-prompts).' },
      ],
      related: ['remove-stable-diffusion-comfyui-metadata', 'hide-midjourney-dalle-prompts', 'batch-remove-metadata'],
      updated: '2026-11-06',
    },
  },
  info: {
    about: {
      metaTitle: 'Over AI Label Remover – Zo werkt de metadatacleaner',
      description: 'Wie AI Label Remover maakt, hoe de metadatacleaner in je browser werkt, hoe we onze artikelen schrijven en bijwerken en wat de tool nooit zal doen.',
      navLabel: 'Over ons',
      title: 'Over AI Label Remover',
      lead: 'AI Label Remover is een gratis tool om verborgen metadata in afbeeldingen te lezen en te verwijderen — EXIF, GPS, XMP, IPTC, C2PA Content Credentials en AI-prompts — zo gebouwd dat je bestanden je apparaat nooit hoeven te verlaten.',
      sections: [
        {
          heading: 'Waarom het bestaat',
          paragraphs: [
            'Foto’s en AI-beelden bevatten veel meer informatie dan de meeste mensen beseffen: je thuislocatie in GPS-tags, serienummers van apparaten, complete prompts en workflows en herkomstgegevens die platforms lezen om labels toe te kennen. De meeste online cleaners vragen je juist de bestanden te uploaden die je wilt beschermen. AI Label Remover is gebouwd om hetzelfde te doen zonder dat compromis.',
          ],
        },
        {
          heading: 'Hoe de tool werkt',
          paragraphs: [
            'Als je een afbeelding toevoegt, leest je browser die lokaal. Web Workers ontleden de bestandsstructuur — JPEG-segmenten, PNG-chunks, WebP-RIFF-chunks, GIF-blokken en HEIC/AVIF-boxen — en tonen elk gevonden metadatablok. Wassen haalt die blokken uit de bytestroom, kopieert de gecomprimeerde beelddata ongewijzigd en leest het resultaat opnieuw om te bevestigen wat er over is.',
            'Er is geen verwerking op een server. De website bestaat uit statische pagina’s; eenmaal geladen werkt de tool ook offline.',
          ],
        },
        {
          heading: 'Hoe onze artikelen tot stand komen',
          paragraphs: [
            'De handleidingen op deze site zijn gebaseerd op de gepubliceerde specificaties (EXIF, XMP, IPTC Photo Metadata, C2PA, de PNG- en ISOBMFF-formaten), op helppagina’s van platforms en op tests met echte bestanden uit de tools die we beschrijven. Elk artikel toont de datum van de laatste herziening, en we werken artikelen bij als standaarden of platformregels veranderen.',
            'Artikelen zijn algemene informatie, geen juridisch advies. Regels voor AI-labels veranderen vaak; controleer de helppagina’s van het platform voordat je op een uitspraak vertrouwt.',
          ],
        },
        {
          heading: 'Wat AI Label Remover niet doet',
          paragraphs: [],
          bullets: [
            'Je bestanden uploaden, opslaan of loggen — er is geen server die ze zou kunnen ontvangen.',
            'Pixels veranderen, onzichtbare watermerken of zichtbare logo’s verwijderen.',
            'Beloven dat een platform wel of geen label toekent.',
            'Helpen AI-beelden voor echte foto’s te laten doorgaan. Gebruik het om je privacy te beschermen en fouten te herstellen.',
          ],
        },
        {
          heading: 'Onafhankelijkheid',
          paragraphs: [
            'AI Label Remover is onafhankelijk en niet verbonden aan Meta, Google, OpenAI, Adobe, Midjourney, Apple of de C2PA. Productnamen worden alleen gebruikt om compatibiliteit te beschrijven.',
          ],
        },
      ],
      updated: '2026-11-06',
    },
    privacy: {
      metaTitle: 'Privacybeleid – AI Label Remover',
      description: 'Privacybeleid in gewone taal: je afbeeldingen verlaten je apparaat nooit, geen accounts, analytics of advertenties; alleen taal en thema worden bewaard.',
      navLabel: 'Privacy',
      title: 'Privacybeleid',
      lead: 'AI Label Remover is een tool om je privacy te beschermen, dus het gebruik ervan mag je geen privacy kosten. Deze pagina legt in gewone taal uit wat er met je afbeeldingen gebeurt en met de weinige gegevens die de website verwerkt.',
      sections: [
        {
          heading: 'In het kort',
          paragraphs: [],
          bullets: [
            'Je afbeeldingen worden op je eigen apparaat verwerkt en nooit geüpload.',
            'Er zijn geen accounts, registraties of mailinglijsten — we weten niet wie je bent.',
            'Er zijn geen analytics, advertenties, trackingpixels of scripts van derden.',
            'Alleen je taal en licht/donker thema worden in je eigen browser bewaard, en je kunt ze altijd wissen.',
          ],
        },
        {
          heading: 'Wat er met je afbeeldingen gebeurt',
          paragraphs: ['Als je een afbeelding aan AI Label Remover toevoegt, is dit de hele reis:'],
          bullets: [
            'Je browser opent het bestand vanaf je apparaat en houdt het in het geheugen van het tabblad.',
            'Web Workers in het tabblad lezen de metadata en schrijven bij het wassen een schone kopie — nog steeds in het geheugen.',
            'Bij het opslaan schrijft je browser het schone bestand of de ZIP rechtstreeks naar je apparaat.',
            'Sluit of herlaad je het tabblad, dan zijn afbeeldingen en rapporten weg. Niets blijft op een server, omdat geen server ze ooit ontvangt.',
          ],
        },
        {
          heading: 'Je kunt het zelf controleren',
          paragraphs: [
            'Je hoeft ons niet op ons woord te geloven. Laad de pagina, zet wifi of mobiele data uit en was een bestand: het werkt nog steeds, omdat er niets verstuurd hoeft te worden. Ken je de ontwikkelaarstools, open dan tijdens het wassen het tabblad Netwerk en je ziet dat er geen beelddata je apparaat verlaten.',
          ],
        },
        {
          heading: 'Wat we niet verzamelen',
          paragraphs: ['AI Label Remover verzamelt of bewaart niet:'],
          bullets: [
            'je afbeeldingen, hun metadata of de rapporten op je scherm;',
            'je naam, e-mailadres of accountgegevens;',
            'je locatie — GPS uit je foto’s wordt alleen aan jou getoond, op je eigen scherm;',
            'een geschiedenis van de bestanden die je controleerde of van hoe je de tool gebruikte.',
          ],
        },
        {
          heading: 'Wat in je browser wordt bewaard en hoe je het wist',
          paragraphs: ['Om je keuzes te onthouden, bewaart de site twee kleine voorkeuren op je apparaat:'],
          bullets: [
            'Taal: een “lang”-item in local storage en een eigen “lang”-cookie, een jaar bewaard, zodat de startpagina in je gekozen taal opent. Het bevat alleen een taalcode zoals “nl”.',
            'Thema: een “theme”-item in local storage als je licht of donker kiest.',
            'Wis ze via cookies en sitegegevens in je browserinstellingen. AI Label Remover blijft werken; het vergeet alleen je keuzes.',
          ],
        },
        {
          heading: 'Als je de website bezoekt',
          paragraphs: [
            'Zoals bij elke website heeft onze server bij het openen van een pagina een paar technische gegevens nodig om die naar je te sturen: het netwerkadres van je apparaat (IP-adres), het type browser en de opgevraagde pagina. Deze gegevens kunnen tijdelijk worden gelogd om de site goed te laten draaien en misbruik te blokkeren, en worden niet langer bewaard dan daarvoor nodig is. We gebruiken ze niet om je te identificeren, maken geen profiel van je en delen of verkopen ze nooit.',
            'Als je de startpagina opent, kijkt de server naar de taalinstelling van je browser en de taal die je eerder koos, alleen om de juiste taalversie te openen. Dat gebeurt ter plekke en wordt niet bewaard.',
          ],
        },
        {
          heading: 'Kinderen',
          paragraphs: [
            'AI Label Remover vraagt of verzamelt van niemand persoonlijke gegevens, ook niet van kinderen. Jongere gebruikers kunnen de tool gebruiken zonder account en zonder iets over zichzelf te delen.',
          ],
        },
        {
          heading: 'Je rechten',
          paragraphs: [
            'Omdat AI Label Remover geen naam, e-mail of account verzamelt, hebben we geen profiel van je om in te zien, te corrigeren of te wissen. Wat de site op je apparaat onthoudt, heb je altijd zelf in de hand. Tijdelijk gelogde technische gegevens zijn niet gekoppeld aan een naam of account en worden gewist zodra ze niet meer nodig zijn.',
          ],
        },
        {
          heading: 'Wijzigingen in dit beleid',
          paragraphs: ['Als de manier waarop AI Label Remover met gegevens omgaat ooit verandert, werken we deze pagina en de datum bovenaan bij.'],
        },
      ],
      updated: '2026-11-06',
    },
  },
};

export default nl;
