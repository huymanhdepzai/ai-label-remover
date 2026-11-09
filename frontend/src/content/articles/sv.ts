import type { Articles } from './types';

const sv: Articles = {
  'made-with-ai-label': {
    metaTitle: 'Därför får riktiga foton etiketten AI-info på Instagram',
    related: ['what-is-c2pa-content-credentials', 'hide-midjourney-dalle-prompts', 'remove-stable-diffusion-comfyui-metadata'],
    description:
      'Har ett äkta foto fått etiketten ”AI-info” på Instagram eller Facebook? Orsaken är oftast ett C2PA- eller IPTC-fält från appen. Så hittar och tar du bort det.',
    updated: '2026-11-09',
    sections: [
      {
        heading: 'Etiketten läser filen, inte motivet',
        paragraphs: [
          'Metas etikett ”AI-info” (som hette ”Made with AI” fram till mitten av 2024) sätts när en uppladdad bild innehåller kända signaler om generativ AI. Två av dem finns i själva bildfilen: [ett C2PA-manifest med Content Credentials](what-is-c2pa-content-credentials) och egenskapen IPTC DigitalSourceType i XMP-blocket.',
          'Värdet trainedAlgorithmicMedia betyder att hela bilden är genererad, medan compositeWithTrainedAlgorithmicMedia betyder att ett riktigt foto innehåller AI-skapade delar. Båda kan läsas automatiskt vid uppladdning. Meta använder också andra signaler och ber användare att själva märka realistiskt AI-innehåll, så metadata är bara en faktor bland flera.',
        ],
      },
      {
        heading: 'Var den felaktiga signalen kommer ifrån',
        paragraphs: ['På äkta foton är det nästan alltid redigeringsappen som utlöser etiketten, inte kameran. Vanliga källor:'],
        bullets: [
          'Generativ fyllning, generativ utvidgning eller AI-baserade borttagningsverktyg, som kan lägga till c2pa-åtgärder och markera filen som ett montage.',
          'Export med Content Credentials påslaget, vilket signerar in en lista över varje redigering i filen.',
          'AI-suddgummin och liknande funktioner i mobilens galleri, som lämnar en redigeringsmarkering efter sig.',
          'Filen passerar andra appar som kopierar befintlig metadata vidare, så markeringen överlever flera omsparningar.',
        ],
      },
      {
        heading: 'Hitta fältet i AI Label Remover',
        paragraphs: [
          'Släpp bilden i verktyget. Fliken ”AI-spår” listar varje signal och var den ligger, till exempel ”C2PA · compositeWithTrainedAlgorithmicMedia” eller ”XMP · Iptc4xmpExt › DigitalSourceType”. Under ”Rå metadata” ser du de faktiska värdena, bland annat programmet som signerade manifestet och alla registrerade c2pa-åtgärder.',
          'Utfallet ”Värd en extra titt” betyder att filen har Content Credentials utan något uttryckligt AI-påstående. Vissa plattformar ser ändå manifestet som en ledtråd, så bestäm dig innan du publicerar.',
        ],
      },
      {
        heading: 'Rensa kopian du publicerar',
        paragraphs: [
          'Tryck på ”Ta bort all metadata”. AI Label Remover klipper ut C2PA-lagret samt XMP-, IPTC- och EXIF-blocken ur byteströmmen och lämnar bilddata, storlek, rotation och färgprofil orörda. Den rensade filen läses in igen, så du ser att AI-spåren är borta innan du sparar. Har du många bilder kan du [rensa dem i en enda omgång](batch-remove-metadata).',
          'Att spara om bilden som en ny JPEG tar också bort metadata, men komprimerar om bilden varje gång och försämrar kvaliteten. Att klippa ut blocken undviker den förlusten helt.',
        ],
      },
      {
        heading: 'Att rätta en felaktig etikett är inte att dölja en korrekt',
        paragraphs: [
          'Rensning är till för etiketter som beskriver ditt arbete fel och för att hålla privata uppgifter privata. Om en bild helt eller till stor del är genererad och kan uppfattas som verklig förväntar sig plattformarnas regler oftast att du anger det – etiketten finns för tittarnas skull. Använd AI Label Remover för att rätta misstag, inte för att utge syntetiska bilder för fotografier.',
        ],
      },
    ],
    faqHeading: 'Frågor om etiketten AI-info',
    faq: [
      {
        q: 'Kan jag ta bort etiketten AI-info efter att jag har publicerat?',
        a: 'Oftast inte genom att redigera inlägget. Om etiketten beskriver ett riktigt foto fel kan du använda plattformens överklagande eller kontostatus där det finns, och rensa filen innan du publicerar nästa gång.',
      },
      {
        q: 'Försvinner etiketten garanterat om jag rensar filen?',
        a: 'Nej, det finns ingen garanti. Rensningen tar bort signalerna i filen – den vanligaste orsaken på redigerade foton – men plattformar kan använda annan detektering.',
      },
      {
        q: 'Ändras fotot visuellt?',
        a: 'Nej. Endast metadatablock tas bort. Bilddata kopieras byte för byte, och rotation och ICC-färgprofil ligger kvar.',
      },
      {
        q: 'Kan jag behålla kamerainställningarna och bara ta bort AI-fälten?',
        a: 'Inte i dagsläget. AI Label Remover tar bort all identifierande metadata – plats, enhet, upphovsperson och AI-ursprung – i ett svep, vilket är det säkraste standardvalet för offentlig delning. Storlek, rotation, färg och animation behålls alltid.',
      },
    ],
  },

  'remove-stable-diffusion-comfyui-metadata': {
    metaTitle: 'Ta bort ComfyUI-arbetsflöden och SD-prompter från PNG',
    related: ['hide-midjourney-dalle-prompts', 'batch-remove-metadata', 'what-is-c2pa-content-credentials'],
    description:
      'A1111, Forge och ComfyUI skriver din prompt, seed, modell och hela arbetsflödet i varje PNG. Se den exakta texten och ta bort den utan att röra en enda pixel.',
    updated: '2026-11-09',
    sections: [
      {
        heading: 'Dina inställningar följer med bilden',
        paragraphs: [
          'Lokala bildgeneratorer sparar sina inställningar som text i utdatafilen så att bilden kan återskapas. I PNG-filer ligger texten i tEXt-, zTXt- eller iTXt-chunks bredvid bilddatan. Det här brukar du hitta:',
        ],
        bullets: [
          'A1111 och Forge: en ”parameters”-chunk med prompt, negativ prompt, steg, sampler, CFG, seed, upplösning, modellens hash och namn samt LoRA- och tilläggsinställningar.',
          'ComfyUI: en ”prompt”-chunk med den körda nodgrafen och en ”workflow”-chunk med hela editorlayouten – släpp PNG-filen i ComfyUI så dyker hela uppsättningen upp igen.',
          'InvokeAI, NovelAI och andra gränssnitt: liknande data under egna nycklar.',
          'JPEG- och WebP-export: vissa verktyg skriver samma text till EXIF-fältet UserComment i stället.',
        ],
      },
      {
        heading: 'Skäl att rensa – och skäl att låta bli',
        paragraphs: [
          'Genereringsdata är ett komplett recept. Med den kan vem som helst återskapa din stil, se vilka checkpoints och LoRA-filer du använder, och i arbetsflödet kan lokala sökvägar, mappnamn eller användarnamn ligga gömda. Stora ComfyUI-grafer kan dessutom lägga till tiotals kilobyte per bild.',
          'Å andra sidan läser modelldelningssajter parametrarna för att visa genereringsinformation, och samarbetspartner kan vilja ha arbetsflödet. Kontrollera därför varje fil först – AI Label Remover visar allt innan något tas bort.',
        ],
      },
      {
        heading: 'Läs prompten i AI Label Remover',
        paragraphs: [
          'Släpp PNG-filen i verktyget. Under ”Rå metadata” visas varje textchunk under sitt nyckelord – parameters, prompt, workflow – med hela innehållet, och fliken ”AI-spår” markerar den som en Stable Diffusion-prompt eller ett ComfyUI-arbetsflöde. Komprimerade zTXt- och iTXt-chunks packas upp i webbläsaren så att du kan läsa dem.',
        ],
      },
      {
        heading: 'Vad rensningen behåller',
        paragraphs: [
          'Tryck på ”Ta bort all metadata”. PNG-hanteraren tar bort text-, XMP-, EXIF- och C2PA-chunks i sin helhet och behåller IHDR, IDAT, palett, transparens, gamma och färgchunks samt APNG-animationens chunks. Eftersom chunks tas bort hela förblir de återstående CRC-summorna giltiga och filen öppnas överallt.',
          'Att öppna och spara om i ett bildprogram tar också bort texten, men komprimerar om bilden och kan förskjuta färgerna. Borttagning på bytenivå undviker båda. Samma sak gäller [nedladdningar från Midjourney och DALL·E](hide-midjourney-dalle-prompts), där prompten lagras på andra sätt.',
        ],
      },
    ],
    faqHeading: 'Frågor om data från Stable Diffusion och ComfyUI',
    faq: [
      {
        q: 'Hur hindrar jag A1111 eller ComfyUI från att spara metadata?',
        a: 'A1111 och Forge har en inställning som slutar skriva genereringsparametrar i PNG-filer, och ComfyUI kan startas med flaggan --disable-metadata. Båda gäller bara nya bilder, så rensa de du redan har.',
      },
      {
        q: 'Kan ComfyUI bygga upp arbetsflödet igen från en rensad PNG?',
        a: 'Nej. Chunkarna ”prompt” och ”workflow” är borta, så att dra filen till ComfyUI återställer ingenting. Behåll ett orört original om du behöver grafen igen.',
      },
      {
        q: 'Ser den rensade PNG-filen likadan ut?',
        a: 'Ja. IDAT-chunkarna med de komprimerade pixlarna kopieras oförändrade, så bilden är identisk pixel för pixel.',
      },
      {
        q: 'Hur är det med JPEG- och WebP-export?',
        a: 'Prompter som lagrats i EXIF UserComment eller XMP upptäcks och tas bort även från JPEG- och WebP-filer.',
      },
    ],
  },

  'hide-midjourney-dalle-prompts': {
    metaTitle: 'Ta bort prompter från Midjourney- och DALL·E-bilder',
    related: ['remove-stable-diffusion-comfyui-metadata', 'made-with-ai-label', 'what-is-c2pa-content-credentials'],
    description:
      'Nedladdningar från Midjourney, DALL·E, ChatGPT och Firefly kan innehålla din prompt, jobb-ID och AI-ursprung. Kontrollera filen och rensa innan du delar.',
    updated: '2026-11-09',
    sections: [
      {
        heading: 'Vad molntjänsterna skriver in',
        paragraphs: [
          'Bildtjänster på nätet stämplar allt oftare metadata på nedladdningar, för transparensens skull och för att stödja ursprungsstandarder. Fälten varierar mellan tjänster och ändras över tid, så det enda pålitliga är att öppna filen. Det här kan du hitta:',
        ],
        bullets: [
          'Midjourney: prompten och ett jobb-ID i beskrivnings- eller kommentarsfält, ofta med en IPTC DigitalSourceType som markerar bilden som AI-skapad.',
          'DALL·E och bildgenerering i ChatGPT: [C2PA Content Credentials](what-is-c2pa-content-credentials) som namnger generatorn.',
          'Adobe Firefly: Content Credentials som anger att bilden skapats med AI.',
          'Många verktyg: ett programnamn, ett skapandedatum och ibland en identifierare kopplad till kontot.',
        ],
      },
      {
        heading: 'En prompt är arbete värt att skydda',
        paragraphs: [
          'För illustratörer, formgivare och promptskribenter är en genomarbetad prompt resultatet av många rundor av försök och misstag. Vilket gratis metadataverktyg som helst visar inbäddad text för den som laddar ner bilden, redo att kopieras. Jobb-ID och kontouppgifter kan dessutom koppla en offentlig bild till dig.',
        ],
      },
      {
        heading: 'Titta först, rensa sedan',
        paragraphs: [
          'Släpp bilden i verktyget och läs rapporten. Rader märkta ”AI” innehåller prompter, generatornamn och ursprungsdeklarationer; rader märkta ”Personer” innehåller upphovspersoner, beskrivningar och identifierare. Tryck på ”Ta bort all metadata” och spara den rena filen – eller hela omgången som ZIP.',
          'Allt körs i din webbläsare, så prompterna du skyddar lämnas inte över till ännu en tjänst på vägen.',
        ],
      },
      {
        heading: 'Begränsningar att känna till',
        paragraphs: [
          'Vissa leverantörer gömmer också vattenstämplar i själva pixlarna, till exempel Googles SynthID. Det är inte metadata och påverkas inte av rensningen. Och publicerar du en realistisk AI-bild kan plattformens regler fortfarande kräva att du anger det – läs mer om [etiketten AI-info](made-with-ai-label). Rensning skyddar din arbetsprocess; den ändrar inte vad bilden är.',
        ],
      },
    ],
    faqHeading: 'Frågor om metadata från Midjourney och DALL·E',
    faq: [
      {
        q: 'Kan någon läsa min prompt från en nedladdad bild?',
        a: 'Om prompten finns i filens metadata kan vem som helst med ett metadataverktyg läsa och kopiera den. Att rensa filen innan du delar tar bort den.',
      },
      {
        q: 'Innehåller varje Midjourney-nedladdning prompten?',
        a: 'Det beror på format och tjänstens aktuella beteende. Öppna filen i AI Label Remover för att se exakt vad som finns där.',
      },
      {
        q: 'Tar rensningen bort SynthID eller liknande vattenstämplar?',
        a: 'Nej. Osynliga vattenstämplar finns i pixeldatan, som AI Label Remover aldrig ändrar.',
      },
      {
        q: 'Kan jag rensa en hel serie genereringar?',
        a: 'Ja. Lägg in upp till 50 bilder, kontrollera rapporterna och spara sedan alla som en ZIP-fil.',
      },
    ],
  },

  'what-is-c2pa-content-credentials': {
    metaTitle: 'Vad är C2PA? Content Credentials förklarat',
    related: ['made-with-ai-label', 'hide-midjourney-dalle-prompts', 'remove-gps-location-from-photos'],
    description:
      'En enkel guide till C2PA och Content Credentials: vad det signerade manifestet registrerar, var filformaten lagrar det och vad borttagning gör.',
    updated: '2026-11-09',
    sections: [
      {
        heading: 'Den korta versionen',
        paragraphs: [
          'Coalition for Content Provenance and Authenticity (C2PA) förvaltar en öppen standard för att fästa en manipuleringssäker historik vid media. Användare ser den som Content Credentials. Kameror, redigeringsprogram och AI-generatorer kan signera in en uppgift i bilden om hur den kom till – tagen med en kamera, redigerad i en app eller skapad av en modell.',
        ],
      },
      {
        heading: 'Ett manifests uppbyggnad',
        paragraphs: ['Ett manifest är ett kompakt, strukturerat paket med tre huvuddelar:'],
        bullets: [
          'Claim generator – programmet eller tjänsten som skapade manifestet, till exempel ett bildprogram eller ett API för AI-bilder.',
          'Påståenden (assertions) – uppgifter om innehållet: c2pa.actions (skapad, redigerad, öppnad, storleksändrad och så vidare), en digitalSourceType och länkar till ingående filer.',
          'Signatur – en kryptografisk signatur och ett certifikat som identifierar den som signerat, plus en hash som binder manifestet till exakt den bilddatan.',
        ],
      },
      {
        heading: 'Var varje format lagrar det',
        paragraphs: [
          'Manifestet packas i en JUMBF-behållare som varje format lagrar på sin egen plats: APP11-segment i JPEG, en caBX-chunk i PNG, en C2PA-chunk i WebP och en uuid-box i HEIC och AVIF. Som ett separat block kan det läsas och tas bort utan att bilden avkodas. AI Label Remover visar blocket, generatorn, de registrerade åtgärderna och källtypen när de finns.',
        ],
      },
      {
        heading: 'Vad borttagningen faktiskt gör',
        paragraphs: [
          'Rensningen raderar den inbäddade uppgiften ur just den kopian av filen. Tänk på att varje redigering redan bryter den kryptografiska bindningen – verifierare rapporterar ett manifest som inte längre stämmer med pixlarna som ogiltigt – så borttagningen tar bort en uppgift som annars bara skulle följa med.',
          'Vissa system lägger till ”beständiga” uppgifter: en osynlig vattenstämpel eller ett fingeravtryck som låter en verifierare hämta manifestet från ett register på nätet även när den inbäddade kopian är borta. Metadataborttagning påverkar inte dessa, eftersom de finns i pixlarna eller på en fjärrserver.',
        ],
      },
      {
        heading: 'Behålla eller rensa?',
        paragraphs: [
          'Uppgifterna är användbara när du behöver visa var en bild kommer ifrån – i nyhetsarbete eller för dina egna originalfoton. De kan också avslöja programvara, redigeringshistorik och identitet som du hellre håller för dig själv, eller [utlösa AI-etiketter på lätt redigerade foton](made-with-ai-label). Läs manifestet först och bestäm fil för fil.',
        ],
      },
    ],
    faqHeading: 'Frågor om C2PA',
    faq: [
      {
        q: 'Vem använder C2PA?',
        a: 'Adobe, Microsoft, Google, OpenAI, Meta, kameratillverkare som Leica, Sony och Nikon samt många nyhetsorganisationer stöder standarden eller ingår i koalitionen, men alla använder den på olika sätt.',
      },
      {
        q: 'Är C2PA en sorts osynlig vattenstämpel?',
        a: 'Nej. C2PA är metadata som lagras bredvid bilddatan. Pixelvattenstämplar som SynthID är en separat mekanism och påverkas inte av rensning.',
      },
      {
        q: 'Hur verifierar jag signaturen innan jag rensar?',
        a: 'AI Label Remover visar generator, åtgärder och källtyp. För full signaturvalidering kör du originalet genom en officiell Content Credentials-verifierare först.',
      },
      {
        q: 'Kostar det kvalitet att ta bort C2PA?',
        a: 'Nej. Manifestet är ett eget block; den komprimerade bilddatan kopieras som den är.',
      },
    ],
  },

  'remove-gps-location-from-photos': {
    metaTitle: 'Ta bort GPS-plats från foton på iPhone, Android och PC',
    related: ['batch-remove-metadata', 'what-is-c2pa-content-credentials', 'made-with-ai-label'],
    description:
      'Ta bort GPS-platsen från foton innan du delar: vilka EXIF-fält som avslöjar plats, enhet och tid, var de läcker ut och hur du tar bort dem helt förlustfritt.',
    updated: '2026-11-09',
    sections: [
      {
        heading: 'Vad mobilen stämplar in i varje bild',
        paragraphs: ['Med platstjänster påslagna kan ett vanligt mobilfoto innehålla:'],
        bullets: [
          'Latitud, longitud och höjd, ofta med några meters noggrannhet, plus en GPS-tidsstämpel.',
          'Exakt tidpunkt då bilden togs och senast redigerades.',
          'Tillverkare och modell, objektivuppgifter och ibland ett serienummer eller ägarens namn.',
          'Inbäddade förhandsvisningar och sekundära bilder (djupkartor, MPF-bilder) med en egen kopia av EXIF-datan.',
        ],
      },
      {
        heading: 'Hur originalfilen tar sig ut',
        paragraphs: [
          'Stora sociala flöden brukar ta bort EXIF från det som publiceras, men många vägar levererar det orörda originalet: ”skicka som fil” i chattappar, e-postbilagor, delade molnlänkar, forum, köp- och säljsajter och portfoliosajter. Ett foto taget hemma kan avslöja din adress; en serie kan avslöja dina vanor.',
        ],
      },
      {
        heading: 'Se vilken plats ditt foto avslöjar',
        paragraphs: [
          'Släpp fotot i verktyget. Fliken ”Vad den avslöjar” visar direkt om det finns fält för plats, personer och tid, med GPS-positionen omräknad till decimala koordinater. ”Rå metadata” listar varje fält grupperat efter EXIF IFD0, Exif och GPS.',
        ],
      },
      {
        heading: 'Rensa utan bieffekter',
        paragraphs: [
          'Tryck på ”Ta bort all metadata”. GPS, datum, enhet, upphovsperson och programfält försvinner, tillsammans med inbäddade miniatyrer och sekundära MPF-bilder som annars skulle behålla en dold kopia. Orienteringstaggen skrivs tillbaka i ett litet EXIF-block så att porträttbilder inte vänds på sidan, och färgprofilen behålls så att färgerna stämmer. iPhones HEIC-filer rensas på plats, utan konvertering till JPEG.',
        ],
      },
      {
        heading: 'Stoppa det redan i kameran',
        paragraphs: [
          'På iPhone: Inställningar → Integritet och säkerhet → Platstjänster → Kamera → Aldrig. På Android kan platstaggning oftast stängas av i kameraappens inställningar (namnet varierar mellan tillverkare). Att rensa filen innan den skickas är ändå den grundligaste vanan, eftersom det också tar bort enhets-, tids- och förhandsvisningsdata som mobilens inställningar inte rör.',
        ],
      },
      {
        heading: 'Hur exakta koordinaterna verkligen är',
        paragraphs: [
          'EXIF lagrar latitud och longitud i grader, minuter och sekunder, och mobiler registrerar sekunderna med decimaler. En latitudsekund är ungefär 31 meter, så ett värde med två decimaler pekar på papperet ut en punkt som är mindre än en meter bred. Den verkliga noggrannheten beror på signalen – ofta 3–10 meter utomhus, sämre inomhus – men det räcker ändå för att peka ut ett enskilt hus. Många mobiler lägger också till höjd, som kan avslöja våningsplan, och kompassriktningen objektivet pekade åt.',
        ],
      },
      {
        heading: 'Platsen gömmer sig i mer än GPS-taggarna',
        paragraphs: [
          'Att tömma GPS-katalogen räcker inte alltid. Bildhanterare kan kopiera koordinater till XMP, och IPTC-fält som stad, område och land kan ange platsen i klartext. AI Label Remover tar bort XMP och IPTC tillsammans med EXIF, så även dessa kopior försvinner. Det inget metadataverktyg kan ta bort är själva bilden: gatuskyltar, husnummer, utsikten från ett fönster eller en spegling kan röja platsen, så titta igenom bilden innan du publicerar.',
        ],
      },
      {
        heading: 'En snabb kontroll innan du delar',
        paragraphs: [],
        bullets: [
          'Släpp fotot i AI Label Remover och titta på fliken ”Vad den avslöjar”.',
          'Om en plats visas, tryck på ”Ta bort all metadata” och spara den rena kopian.',
          'Kontrollera att den gröna panelen bekräftar att plats, personer och tid är borta.',
          'Titta efter synliga ledtrådar i bilden – adresser, registreringsskyltar, landmärken.',
          'Dela den rena kopian och behåll originalet i ditt eget bibliotek. För många bilder sparar [rensning i omgångar](batch-remove-metadata) tid.',
        ],
      },
    ],
    faqHeading: 'Frågor om GPS och integritet i foton',
    faq: [
      {
        q: 'Kan platsen återställas efter rensning?',
        a: 'Inte från den rensade filen – fälten tas bort, de döljs inte. Originalet i din mobil har fortfarande platsen, så dela bara den rena kopian.',
      },
      {
        q: 'Taggas mina foton ändå om jag stänger av GPS?',
        a: 'Det kan de göra. Mobilen kan räkna ut en position via Wi-Fi och mobilnät, så stäng av platsåtkomsten för själva kameraappen, inte bara GPS.',
      },
      {
        q: 'Tar inte sociala nätverk bort GPS ändå?',
        a: 'Många stora tar bort EXIF från den publicerade bilden. Bilagor, dokument och molnlänkar behåller oftast originalets metadata.',
      },
      {
        q: 'Kommer fotot att visas roterat?',
        a: 'Nej. Orienteringstaggen bevaras, så fotot visas exakt som förut. iPhones HEIC-filer rensas också utan formatbyte.',
      },
    ],
  },

  'batch-remove-metadata': {
    metaTitle: 'Ta bort metadata från många bilder samtidigt – gratis',
    related: ['remove-gps-location-from-photos', 'remove-stable-diffusion-comfyui-metadata', 'hide-midjourney-dalle-prompts'],
    description:
      'Rensa upp till 50 bilder åt gången i webbläsaren: hur parallella workers håller tempot, hur varje resultat dubbelkollas och hur du sparar allt som en ZIP-fil.',
    updated: '2026-11-09',
    sections: [
      {
        heading: 'En omgång från start till mål',
        paragraphs: [],
        bullets: [
          'Släpp upp till 50 JPG-, PNG-, WebP-, GIF-, HEIC- eller AVIF-filer i verktyget (högst 25 MB och 40 megapixel per fil).',
          'Varje fil läses automatiskt; klicka på en fil i kön för att se dess rapport.',
          'Tryck på ”Ta bort all metadata” en gång för att rensa allt som har lästs in.',
          'Spara filerna en och en, eller tryck på ”Spara allt som ZIP” för ett enda arkiv.',
        ],
      },
      {
        heading: 'Snabbt utan server',
        paragraphs: [
          'AI Label Remover fördelar arbetet på flera Web Workers – bakgrundstrådar i webbläsaren – anpassat efter antalet processorkärnor. Varje worker tar en fil, tolkar den och lämnar tillbaka rensade byte, så sidan förblir smidig även med tunga HEIC-filer. ZIP-filen använder lagringsmetoden utan komprimering, eftersom bilderna redan är komprimerade: packningen går snabbt och ger ingen ytterligare förlust.',
        ],
      },
      {
        heading: 'Varje resultat läses om',
        paragraphs: [
          'Efter rensningen läses varje utfil in igen, och den gröna resultatpanelen bekräftar om plats, personer, tid och AI-spår är borta. Om två filer har samma namn får kopian i ZIP-filen ett nummer, så att ingenting skrivs över.',
        ],
      },
      {
        heading: 'Hundratals filer',
        paragraphs: [
          'Arbeta i omgångar om 50 och röj bordet mellan omgångarna för att frigöra minne. På mobiler med lite minne bör du först stänga andra tunga flikar. Eftersom ingenting laddas upp kan du till och med koppla från nätet när sidan har laddats.',
        ],
      },
      {
        heading: 'Ingenting lämnar datorn',
        paragraphs: [
          'Ingen bild laddas upp, lagras eller loggas; den enda nättrafiken är att själva sidan laddas. Därför passar rensning i omgångar för kundleveranser, opublicerade fotograferingar och allt du inte får skicka till tredje part – till exempel att [ta bort GPS-platsen från semesterbilder](remove-gps-location-from-photos) eller [städa bort Stable Diffusion-prompter](remove-stable-diffusion-comfyui-metadata) ur en hel mapp.',
        ],
      },
    ],
    faqHeading: 'Frågor om rensning i omgångar',
    faq: [
      {
        q: 'Kan en omgång blanda olika format?',
        a: 'Ja. En omgång kan blanda JPG, PNG, WebP, GIF, HEIC och AVIF, och varje fil behåller sitt eget format.',
      },
      {
        q: 'Varför är gränsen 50 filer?',
        a: 'All bearbetning använder enhetens minne. Gränsen håller mobiler och äldre bärbara datorer stabila; du kan köra hur många omgångar du vill.',
      },
      {
        q: 'Ändras filnamnen?',
        a: 'Nej. Rensade filer behåller sina namn. Bara exakta dubbletter i ZIP-filen får ett numrerat tillägg.',
      },
      {
        q: 'Fungerar det offline?',
        a: 'Ja. När sidan väl har laddats rensar den filer utan anslutning, eftersom ingenting skickas någonstans.',
      },
    ],
  },
};

export default sv;
