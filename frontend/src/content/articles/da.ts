import type { Articles } from './types';

const da: Articles = {
  'made-with-ai-label': {
    metaTitle: 'Derfor får ægte fotos mærket AI-info på Instagram',
    related: ['what-is-c2pa-content-credentials', 'hide-midjourney-dalle-prompts', 'remove-stable-diffusion-comfyui-metadata'],
    description:
      'Har et ægte foto fået mærket ”AI-info” på Instagram eller Facebook? Årsagen er som regel et C2PA- eller IPTC-felt fra appen. Sådan finder og fjerner du det.',
    updated: '2026-11-09',
    sections: [
      {
        heading: 'Mærket læser filen, ikke motivet',
        paragraphs: [
          'Metas mærke ”AI-info” (der hed ”Made with AI” indtil midten af 2024) sættes på, når et uploadet billede indeholder kendte signaler om generativ AI. To af dem ligger i selve billedfilen: [et C2PA-manifest med Content Credentials](what-is-c2pa-content-credentials) og egenskaben IPTC DigitalSourceType i XMP-blokken.',
          'Værdien trainedAlgorithmicMedia betyder, at hele billedet er genereret, mens compositeWithTrainedAlgorithmicMedia betyder, at et ægte foto indeholder AI-skabte dele. Begge kan aflæses automatisk ved upload. Meta bruger også andre signaler og beder brugerne selv om at oplyse om realistisk AI-indhold, så metadata er kun én faktor blandt flere.',
        ],
      },
      {
        heading: 'Hvor det fejlagtige signal kommer fra',
        paragraphs: ['På ægte fotos er det næsten altid redigeringsappen, der udløser mærket – ikke kameraet. Typiske kilder:'],
        bullets: [
          'Generativ udfyldning, generativ udvidelse eller AI-baserede fjernværktøjer, som kan tilføje c2pa-handlinger og markere filen som en sammensætning.',
          'Eksport med Content Credentials slået til, hvilket signerer en liste over hver redigering ind i filen.',
          'AI-viskelædere og lignende funktioner i telefonens galleri, som efterlader en redigeringsmarkør.',
          'Filen passerer gennem andre apps, der kopierer eksisterende metadata videre, så markøren overlever flere gemninger.',
        ],
      },
      {
        heading: 'Find feltet i AI Label Remover',
        paragraphs: [
          'Slip billedet i værktøjet. Fanen ”AI-spor” viser hvert signal, og hvor det ligger – for eksempel ”C2PA · compositeWithTrainedAlgorithmicMedia” eller ”XMP · Iptc4xmpExt › DigitalSourceType”. Under ”Rå metadata” ser du de faktiske værdier, herunder programmet, der signerede manifestet, og alle registrerede c2pa-handlinger.',
          'Resultatet ”Værd at se på igen” betyder, at filen har Content Credentials uden en udtrykkelig AI-erklæring. Nogle platforme ser alligevel manifestet som et fingerpeg, så beslut dig, før du poster.',
        ],
      },
      {
        heading: 'Rens den kopi, du poster',
        paragraphs: [
          'Tryk på ”Fjern alle metadata”. AI Label Remover klipper C2PA-lageret samt XMP-, IPTC- og EXIF-blokkene ud af bytestrømmen og lader billeddata, størrelse, rotation og farveprofil være urørt. Den rensede fil læses igen, så du kan se, at AI-sporene er væk, før du gemmer. Har du mange billeder, kan du [rense dem i én omgang](batch-remove-metadata).',
          'At gemme billedet som en ny JPEG fjerner også metadata, men komprimerer billedet igen hver gang og forringer kvaliteten. At klippe blokkene ud undgår helt det tab.',
        ],
      },
      {
        heading: 'At rette et forkert mærke er ikke at skjule et korrekt',
        paragraphs: [
          'Rensning er til mærker, der beskriver dit arbejde forkert, og til at holde private oplysninger private. Hvis et billede helt eller overvejende er genereret og kan opfattes som ægte, forventer platformenes regler som regel, at du oplyser det – mærket findes af hensyn til seerne. Brug AI Label Remover til at rette fejl, ikke til at udgive syntetiske billeder som fotografier.',
        ],
      },
    ],
    faqHeading: 'Spørgsmål om mærket AI-info',
    faq: [
      {
        q: 'Kan jeg fjerne mærket AI-info, efter jeg har postet?',
        a: 'Normalt ikke ved at redigere opslaget. Hvis mærket beskriver et ægte foto forkert, så brug platformens klage- eller kontostatusmuligheder, hvor de findes, og rens filen, før du poster næste gang.',
      },
      {
        q: 'Forsvinder mærket med garanti, hvis jeg renser filen?',
        a: 'Nej, der er ingen garanti. Rensningen fjerner signalerne i filen – den hyppigste årsag på redigerede fotos – men platforme kan bruge anden detektion.',
      },
      {
        q: 'Ændrer fotoet sig visuelt?',
        a: 'Nej. Kun metadatablokke fjernes. Billeddata kopieres byte for byte, og rotation og ICC-farveprofil bliver på plads.',
      },
      {
        q: 'Kan jeg beholde kameraindstillingerne og kun fjerne AI-felterne?',
        a: 'Ikke i øjeblikket. AI Label Remover fjerner alle identificerende metadata – sted, enhed, ophavsperson og AI-oprindelse – på én gang, hvilket er det sikreste udgangspunkt ved offentlig deling. Størrelse, rotation, farver og animation bevares altid.',
      },
    ],
  },

  'remove-stable-diffusion-comfyui-metadata': {
    metaTitle: 'Fjern ComfyUI-workflows og SD-prompts fra PNG-filer',
    related: ['hide-midjourney-dalle-prompts', 'batch-remove-metadata', 'what-is-c2pa-content-credentials'],
    description:
      'A1111, Forge og ComfyUI skriver din prompt, seed, model og hele dit workflow ind i hver PNG. Se den præcise tekst, og fjern den uden at ændre en eneste pixel.',
    updated: '2026-11-09',
    sections: [
      {
        heading: 'Dine indstillinger følger med billedet',
        paragraphs: [
          'Lokale billedgeneratorer gemmer deres indstillinger som tekst i outputfilen, så billedet kan genskabes. I PNG-filer ligger teksten i tEXt-, zTXt- eller iTXt-chunks ved siden af billeddataene. Det finder du typisk:',
        ],
        bullets: [
          'A1111 og Forge: en ”parameters”-chunk med prompt, negativ prompt, trin, sampler, CFG, seed, opløsning, modellens hash og navn samt LoRA- og udvidelsesindstillinger.',
          'ComfyUI: en ”prompt”-chunk med den kørte nodegraf og en ”workflow”-chunk med hele editorens layout – slip PNG-filen i ComfyUI, og hele opsætningen dukker op igen.',
          'InvokeAI, NovelAI og andre brugerflader: lignende data under deres egne nøgler.',
          'JPEG- og WebP-eksport: nogle værktøjer skriver i stedet den samme tekst i EXIF-feltet UserComment.',
        ],
      },
      {
        heading: 'Grunde til at rense – og til at lade være',
        paragraphs: [
          'Genereringsdata er en komplet opskrift. Med dem kan alle genskabe din stil, se hvilke checkpoints og LoRA-filer du bruger, og i et workflow kan der gemme sig lokale stier, mappenavne eller brugernavne. Store ComfyUI-grafer kan desuden tilføje titusinder af bytes til hvert billede.',
          'Til gengæld læser modeldelingssider parametrene for at vise genereringsoplysninger, og samarbejdspartnere vil måske gerne have workflowet. Tjek derfor hver fil først – AI Label Remover viser alt, før noget fjernes.',
        ],
      },
      {
        heading: 'Læs prompten i AI Label Remover',
        paragraphs: [
          'Slip PNG-filen i værktøjet. Under ”Rå metadata” vises hver tekstchunk under sit nøgleord – parameters, prompt, workflow – med hele indholdet, mens fanen ”AI-spor” markerer den som en Stable Diffusion-prompt eller et ComfyUI-workflow. Komprimerede zTXt- og iTXt-chunks pakkes ud i browseren, så du kan læse dem.',
        ],
      },
      {
        heading: 'Hvad rensningen bevarer',
        paragraphs: [
          'Tryk på ”Fjern alle metadata”. PNG-håndteringen fjerner tekst-, XMP-, EXIF- og C2PA-chunks som hele enheder og bevarer IHDR, IDAT, palet, gennemsigtighed, gamma og farvechunks samt APNG-animationens chunks. Fordi chunks fjernes hele, forbliver de resterende CRC-værdier gyldige, og filen kan åbnes overalt.',
          'At åbne og gemme billedet igen i et redigeringsprogram fjerner også teksten, men komprimerer billedet igen og kan forskyde farverne. Fjernelse på byteniveau undgår begge dele. Det samme gælder [downloads fra Midjourney og DALL·E](hide-midjourney-dalle-prompts), hvor prompten gemmes på andre måder.',
        ],
      },
    ],
    faqHeading: 'Spørgsmål om data fra Stable Diffusion og ComfyUI',
    faq: [
      {
        q: 'Hvordan forhindrer jeg A1111 eller ComfyUI i at gemme metadata?',
        a: 'A1111 og Forge har en indstilling, der stopper med at skrive genereringsparametre i PNG-filer, og ComfyUI kan startes med flaget --disable-metadata. Begge gælder kun nye billeder, så rens dem, du allerede har.',
      },
      {
        q: 'Kan ComfyUI genskabe workflowet fra en renset PNG?',
        a: 'Nej. Chunkene ”prompt” og ”workflow” er væk, så det genskaber intet at trække filen ind i ComfyUI. Behold en urørt original, hvis du får brug for grafen igen.',
      },
      {
        q: 'Ser den rensede PNG helt ens ud?',
        a: 'Ja. IDAT-chunkene med de komprimerede pixels kopieres uændret, så billedet er identisk pixel for pixel.',
      },
      {
        q: 'Hvad med JPEG- og WebP-eksport?',
        a: 'Prompts gemt i EXIF UserComment eller XMP genkendes og fjernes også fra JPEG- og WebP-filer.',
      },
    ],
  },

  'hide-midjourney-dalle-prompts': {
    metaTitle: 'Fjern prompts fra Midjourney- og DALL·E-billeder',
    related: ['remove-stable-diffusion-comfyui-metadata', 'made-with-ai-label', 'what-is-c2pa-content-credentials'],
    description:
      'Downloads fra Midjourney, DALL·E, ChatGPT og Firefly kan indeholde din prompt, job-ID og AI-oprindelse. Tjek hvad filen indeholder, og fjern det, før du deler.',
    updated: '2026-11-09',
    sections: [
      {
        heading: 'Hvad onlinetjenesterne skriver ind',
        paragraphs: [
          'Billedtjenester på nettet stempler i stigende grad metadata på downloads – af hensyn til gennemsigtighed og for at understøtte oprindelsesstandarder. Felterne varierer fra tjeneste til tjeneste og ændrer sig over tid, så den eneste pålidelige metode er at åbne filen. Det kan du finde:',
        ],
        bullets: [
          'Midjourney: prompten og et job-ID i beskrivelses- eller kommentarfelter, ofte sammen med en IPTC DigitalSourceType, der markerer billedet som AI-skabt.',
          'DALL·E og billedgenerering i ChatGPT: [C2PA Content Credentials](what-is-c2pa-content-credentials), der navngiver generatoren.',
          'Adobe Firefly: Content Credentials, der beskriver billedet som skabt med AI.',
          'Mange værktøjer: et programnavn, en oprettelsesdato og af og til et kontotilknyttet ID.',
        ],
      },
      {
        heading: 'En prompt er arbejde, der er værd at beskytte',
        paragraphs: [
          'For illustratorer, designere og promptskribenter er en gennemarbejdet prompt resultatet af mange runder med forsøg og fejl. Ethvert gratis metadataværktøj viser indlejret tekst for den, der downloader dit billede – klar til at blive kopieret. Job-ID’er og kontooplysninger kan desuden knytte et offentligt billede til dig.',
        ],
      },
      {
        heading: 'Kig først, rens bagefter',
        paragraphs: [
          'Slip billedet i værktøjet, og læs rapporten. Rækker mærket ”AI” indeholder prompts, generatornavne og oprindelseserklæringer; rækker mærket ”Personer” indeholder ophavspersoner, beskrivelser og identifikatorer. Tryk på ”Fjern alle metadata”, og gem den rene fil – eller hele omgangen som ZIP.',
          'Alt kører i din browser, så de prompts, du beskytter, ikke bliver sendt videre til endnu en tjeneste undervejs.',
        ],
      },
      {
        heading: 'Begrænsninger, du bør kende',
        paragraphs: [
          'Nogle udbydere skjuler også vandmærker i selve pixlerne, for eksempel Googles SynthID. Det er ikke metadata og berøres ikke af rensningen. Og poster du et realistisk AI-billede, kan platformens regler stadig kræve, at du oplyser det – læs mere om [mærket AI-info](made-with-ai-label). Rensning beskytter din arbejdsproces; den ændrer ikke, hvad billedet er.',
        ],
      },
    ],
    faqHeading: 'Spørgsmål om metadata fra Midjourney og DALL·E',
    faq: [
      {
        q: 'Kan nogen læse min prompt fra et downloadet billede?',
        a: 'Hvis prompten er gemt i filens metadata, kan alle med et metadataværktøj læse og kopiere den. At rense filen, før du deler, fjerner den.',
      },
      {
        q: 'Indeholder hver Midjourney-download prompten?',
        a: 'Det afhænger af formatet og tjenestens aktuelle adfærd. Åbn filen i AI Label Remover for at se præcis, hvad der er i den.',
      },
      {
        q: 'Fjerner rensningen SynthID eller lignende vandmærker?',
        a: 'Nej. Usynlige vandmærker ligger i pixeldataene, som AI Label Remover aldrig ændrer.',
      },
      {
        q: 'Kan jeg rense en hel serie genereringer?',
        a: 'Ja. Læg op til 50 billeder ind, tjek rapporterne, og gem dem alle som én ZIP-fil.',
      },
    ],
  },

  'what-is-c2pa-content-credentials': {
    metaTitle: 'Hvad er C2PA? Content Credentials forklaret',
    related: ['made-with-ai-label', 'hide-midjourney-dalle-prompts', 'remove-gps-location-from-photos'],
    description:
      'En letforståelig guide til C2PA og Content Credentials: hvad det signerede manifest registrerer, hvor filformaterne gemmer det, og hvad fjernelse gør.',
    updated: '2026-11-09',
    sections: [
      {
        heading: 'Den korte version',
        paragraphs: [
          'Coalition for Content Provenance and Authenticity (C2PA) står bag en åben standard for at knytte en manipulationssikker historik til medier. Brugerne ser den som Content Credentials. Kameraer, redigeringsprogrammer og AI-generatorer kan signere en oplysning ind i et billede om, hvordan det er blevet til – taget med et kamera, redigeret i en app eller skabt af en model.',
        ],
      },
      {
        heading: 'Et manifests opbygning',
        paragraphs: ['Et manifest er en kompakt, struktureret pakke med tre hoveddele:'],
        bullets: [
          'Claim generator – programmet eller tjenesten, der lavede manifestet, for eksempel et redigeringsprogram eller et API til AI-billeder.',
          'Påstande (assertions) – udsagn om indholdet: c2pa.actions (oprettet, redigeret, åbnet, ændret størrelse osv.), en digitalSourceType og links til indgående filer.',
          'Signatur – en kryptografisk signatur og et certifikat, der identificerer underskriveren, plus en hash, der binder manifestet til præcis disse billeddata.',
        ],
      },
      {
        heading: 'Hvor de enkelte formater gemmer det',
        paragraphs: [
          'Manifestet pakkes i en JUMBF-container, som hvert format gemmer på sin egen plads: APP11-segmenter i JPEG, en caBX-chunk i PNG, en C2PA-chunk i WebP og en uuid-boks i HEIC og AVIF. Som en separat blok kan det læses og fjernes uden at afkode billedet. AI Label Remover viser blokken, generatoren, de registrerede handlinger og kildetypen, når de findes.',
        ],
      },
      {
        heading: 'Hvad fjernelsen faktisk gør',
        paragraphs: [
          'Rensningen sletter den indlejrede oplysning fra netop den kopi af filen. Husk, at enhver redigering allerede bryder den kryptografiske binding – verifikatorer melder et manifest, der ikke længere passer til pixlerne, som ugyldigt – så fjernelsen sletter en oplysning, der ellers bare ville følge med.',
          'Nogle systemer tilføjer ”holdbare” oplysninger: et usynligt vandmærke eller fingeraftryk, som lader en verifikator hente manifestet fra et onlinearkiv, selv når den indlejrede kopi er væk. Metadatafjernelse påvirker ikke disse, fordi de ligger i pixlerne eller på en fjernserver.',
        ],
      },
      {
        heading: 'Beholde eller rense?',
        paragraphs: [
          'Oplysningerne er nyttige, når du skal dokumentere, hvor et billede kommer fra – i journalistik eller for dine egne originale fotos. De kan også afsløre software, redigeringshistorik og identitet, som du hellere vil holde for dig selv, eller [udløse AI-mærker på let redigerede fotos](made-with-ai-label). Læs manifestet først, og beslut fil for fil.',
        ],
      },
    ],
    faqHeading: 'Spørgsmål om C2PA',
    faq: [
      {
        q: 'Hvem bruger C2PA?',
        a: 'Adobe, Microsoft, Google, OpenAI, Meta, kameraproducenter som Leica, Sony og Nikon samt mange nyhedsorganisationer understøtter standarden eller er med i koalitionen, men de bruger den forskelligt.',
      },
      {
        q: 'Er C2PA en slags usynligt vandmærke?',
        a: 'Nej. C2PA er metadata, der gemmes ved siden af billeddataene. Pixelvandmærker som SynthID er en separat mekanisme og påvirkes ikke af rensning.',
      },
      {
        q: 'Hvordan verificerer jeg signaturen, før jeg renser?',
        a: 'AI Label Remover viser generator, handlinger og kildetype. For fuld validering af signaturen skal du først køre originalen gennem en officiel Content Credentials-verifikator.',
      },
      {
        q: 'Koster det kvalitet at fjerne C2PA?',
        a: 'Nej. Manifestet er sin egen blok; de komprimerede billeddata kopieres, som de er.',
      },
    ],
  },

  'remove-gps-location-from-photos': {
    metaTitle: 'Fjern GPS-placering fra fotos på iPhone, Android og pc',
    related: ['batch-remove-metadata', 'what-is-c2pa-content-credentials', 'made-with-ai-label'],
    description:
      'Fjern GPS-placeringen fra fotos, før du deler: hvilke EXIF-felter der afslører sted, enhed og tidspunkt, hvor de lækker, og hvordan du fjerner dem uden tab.',
    updated: '2026-11-09',
    sections: [
      {
        heading: 'Hvad telefonen stempler ind i hvert billede',
        paragraphs: ['Med placeringstjenester slået til kan et almindeligt mobilfoto indeholde:'],
        bullets: [
          'Breddegrad, længdegrad og højde, ofte med få meters nøjagtighed, plus et GPS-tidsstempel.',
          'Det præcise tidspunkt, billedet blev taget og sidst redigeret.',
          'Producent og model, objektivdata og nogle gange et serienummer eller ejerens navn.',
          'Indlejrede forhåndsvisninger og sekundære billeder (dybdekort, MPF-billeder) med deres egen kopi af EXIF-dataene.',
        ],
      },
      {
        heading: 'Sådan slipper originalfilen ud',
        paragraphs: [
          'Store sociale feeds fjerner som regel EXIF fra det, de udgiver, men mange veje leverer den urørte original: ”send som fil” i chatapps, vedhæftede filer i e-mails, delte cloud-links, fora, køb-og-salg-sider og porteføljesider. Ét foto taget derhjemme kan afsløre din adresse; en serie kan afsløre dine rutiner.',
        ],
      },
      {
        heading: 'Se, hvilken placering dit foto afslører',
        paragraphs: [
          'Slip fotoet i værktøjet. Fanen ”Hvad den afslører” viser med det samme, om der er felter for sted, personer og tid, med GPS-positionen omregnet til decimale koordinater. ”Rå metadata” viser hvert felt grupperet efter EXIF IFD0, Exif og GPS.',
        ],
      },
      {
        heading: 'Rens uden bivirkninger',
        paragraphs: [
          'Tryk på ”Fjern alle metadata”. GPS, datoer, enhed, ophavsperson og softwarefelter forsvinder sammen med indlejrede miniaturer og sekundære MPF-billeder, som ellers ville bevare en skjult kopi. Orienteringsmærket skrives tilbage i en lille EXIF-blok, så portrætbilleder ikke vender sidelæns, og farveprofilen bevares, så farverne forbliver korrekte. iPhones HEIC-filer renses direkte uden konvertering til JPEG.',
        ],
      },
      {
        heading: 'Stop det allerede i kameraet',
        paragraphs: [
          'På iPhone: Indstillinger → Anonymitet & sikkerhed → Lokalitetstjenester → Kamera → Aldrig. På Android kan placeringsmærker normalt slås fra i kameraappens indstillinger (navnet varierer mellem producenter). At rense filen, før den sendes, er alligevel den mest grundige vane, fordi det også fjerner enheds-, tids- og forhåndsvisningsdata, som telefonens indstillinger ikke rører.',
        ],
      },
      {
        heading: 'Hvor præcise koordinaterne egentlig er',
        paragraphs: [
          'EXIF gemmer bredde- og længdegrad i grader, minutter og sekunder, og telefoner registrerer sekunderne med decimaler. Ét breddegradssekund er omkring 31 meter, så en værdi med to decimaler peger på papiret på et punkt under en meter bredt. Den reelle nøjagtighed afhænger af signalet – ofte 3–10 meter udendørs, dårligere indendørs – men det er stadig nok til at udpege et enkelt hus. Mange telefoner tilføjer også højde, som kan antyde en etage, og den kompasretning objektivet pegede i.',
        ],
      },
      {
        heading: 'Placeringen gemmer sig i mere end GPS-mærkerne',
        paragraphs: [
          'Det er ikke altid nok at tømme GPS-mappen. Fotoprogrammer kan kopiere koordinater til XMP, og IPTC-felter som by, område og land kan angive stedet i klartekst. AI Label Remover fjerner XMP og IPTC sammen med EXIF, så også disse kopier forsvinder. Det, intet metadataværktøj kan fjerne, er selve billedet: vejskilte, husnumre, udsigten fra et vindue eller en spejling kan afsløre stedet, så kig billedet igennem, før du poster.',
        ],
      },
      {
        heading: 'Et hurtigt tjek, før du deler',
        paragraphs: [],
        bullets: [
          'Slip fotoet i AI Label Remover, og se på fanen ”Hvad den afslører”.',
          'Hvis et sted vises, så tryk på ”Fjern alle metadata”, og gem den rene kopi.',
          'Tjek, at det grønne panel bekræfter, at sted, personer og tid er væk.',
          'Kig efter synlige spor i billedet – adresser, nummerplader, vartegn.',
          'Del den rene kopi, og behold originalen i dit eget bibliotek. Ved mange billeder sparer [rensning i omgange](batch-remove-metadata) tid.',
        ],
      },
    ],
    faqHeading: 'Spørgsmål om GPS og privatliv i fotos',
    faq: [
      {
        q: 'Kan placeringen gendannes efter rensning?',
        a: 'Ikke fra den rensede fil – felterne fjernes, de skjules ikke. Originalen på din telefon har stadig placeringen, så del kun den rene kopi.',
      },
      {
        q: 'Bliver mine fotos stadig mærket, hvis jeg slår GPS fra?',
        a: 'Det kan de. Telefonen kan beregne en position ud fra Wi-Fi og mobilnet, så slå placeringsadgang fra for selve kameraappen, ikke kun GPS.',
      },
      {
        q: 'Fjerner sociale netværk ikke GPS alligevel?',
        a: 'Mange store fjerner EXIF fra det udgivne billede. Vedhæftede filer, dokumenter og cloud-links bevarer som regel de originale metadata.',
      },
      {
        q: 'Bliver mit foto vist roteret?',
        a: 'Nej. Orienteringsmærket bevares, så fotoet vises nøjagtigt som før. iPhones HEIC-filer renses også uden formatskift.',
      },
    ],
  },

  'batch-remove-metadata': {
    metaTitle: 'Fjern metadata fra mange billeder på én gang – gratis',
    related: ['remove-gps-location-from-photos', 'remove-stable-diffusion-comfyui-metadata', 'hide-midjourney-dalle-prompts'],
    description:
      'Rens op til 50 billeder ad gangen: hvordan parallelle workers holder tempoet, hvordan hvert resultat dobbelttjekkes, og hvordan du gemmer alt som én ZIP.',
    updated: '2026-11-09',
    sections: [
      {
        heading: 'En omgang fra start til slut',
        paragraphs: [],
        bullets: [
          'Slip op til 50 JPG-, PNG-, WebP-, GIF-, HEIC- eller AVIF-filer i værktøjet (højst 25 MB og 40 megapixel pr. fil).',
          'Hver fil læses automatisk; klik på en fil i køen for at se dens rapport.',
          'Tryk én gang på ”Fjern alle metadata” for at rense alt, der er læst ind.',
          'Gem filerne én ad gangen, eller tryk på ”Gem alt som ZIP” for at få ét samlet arkiv.',
        ],
      },
      {
        heading: 'Hurtigt uden server',
        paragraphs: [
          'AI Label Remover fordeler arbejdet på flere Web Workers – baggrundstråde i browseren – tilpasset antallet af processorkerner. Hver worker tager én fil, fortolker den og leverer rensede bytes tilbage, så siden forbliver jævn selv med tunge HEIC-filer. ZIP-filen bruger lagringsmetoden uden komprimering, da billederne allerede er komprimerede: pakningen går hurtigt og giver intet yderligere tab.',
        ],
      },
      {
        heading: 'Hvert resultat læses igen',
        paragraphs: [
          'Efter rensningen læses hver outputfil igen, og det grønne resultatpanel bekræfter, om sted, personer, tid og AI-spor er væk. Hvis to filer har samme navn, får kopien i ZIP-filen et nummer, så intet overskrives.',
        ],
      },
      {
        heading: 'Hundredvis af filer',
        paragraphs: [
          'Arbejd i omgange af 50, og ryd bordet mellem omgangene for at frigøre hukommelse. På telefoner med lidt hukommelse bør du først lukke andre tunge faner. Da intet uploades, kan du endda gå offline, når siden er indlæst.',
        ],
      },
      {
        heading: 'Intet forlader maskinen',
        paragraphs: [
          'Intet billede uploades, gemmes eller logges; den eneste netværkstrafik er selve sidens indlæsning. Derfor egner rensning i omgange sig til kundeleverancer, ikke-offentliggjorte fotograferinger og alt, du ikke må sende til tredjepart – for eksempel at [fjerne GPS-placeringen fra feriebilleder](remove-gps-location-from-photos) eller [rydde Stable Diffusion-prompts](remove-stable-diffusion-comfyui-metadata) ud af en hel mappe.',
        ],
      },
    ],
    faqHeading: 'Spørgsmål om rensning i omgange',
    faq: [
      {
        q: 'Kan en omgang blande forskellige formater?',
        a: 'Ja. En omgang kan blande JPG, PNG, WebP, GIF, HEIC og AVIF, og hver fil beholder sit eget format.',
      },
      {
        q: 'Hvorfor stopper det ved 50 filer?',
        a: 'Al behandling bruger din enheds hukommelse. Grænsen holder telefoner og ældre bærbare stabile; du kan køre lige så mange omgange, du vil.',
      },
      {
        q: 'Ændres filnavnene?',
        a: 'Nej. Rensede filer beholder deres navne. Kun nøjagtige dubletter i ZIP-filen får et nummereret tillæg.',
      },
      {
        q: 'Virker det offline?',
        a: 'Ja. Når siden er indlæst, renser den filer uden forbindelse, fordi intet sendes nogen steder hen.',
      },
    ],
  },
};

export default da;
