import type { Pages } from './types';

const it: Pages = {
  home: {
    reassure: 'Online, gratis, senza registrazione e senza installare nulla: le foto vengono lette e pulite direttamente nel browser e non vengono mai caricate su un server.',
    sources: {
      label: 'Legge e rimuove i metadati dalle immagini create con',
      note: 'I nomi dei prodotti indicano solo la provenienza delle immagini; AI Label Remover non è affiliato a queste aziende.',
    },
    learn: {
      what: {
        title: 'Cosa sono i metadati?',
        paragraphs: [
          'I metadati sono “dati sui dati”: note salvate dentro un file immagine che non compaiono mai nella foto. Fotocamere, smartphone, programmi di fotoritocco e generatori di immagini IA li aggiungono in automatico, di solito senza avvisarti.',
          'Nelle foto i metadati si dividono in cinque grandi gruppi. Ognuno risponde a una domanda diversa sull’immagine e sulla persona che l’ha scattata o creata.',
        ],
        types: [
          { name: 'Descrittivi', text: 'Titolo, didascalia, parole chiave, nomi delle persone ritratte.', example: 'IPTC Caption, XMP dc:title' },
          { name: 'Tecnici', text: 'Marca e modello della fotocamera, obiettivo, diaframma, tempo, ISO, numero di serie.', example: 'EXIF Make, Model, BodySerialNumber' },
          { name: 'Luogo e ora', text: 'Coordinate GPS, altitudine, data dello scatto e fuso orario.', example: 'EXIF GPSLatitude, DateTimeOriginal' },
          { name: 'Diritti e gestione', text: 'Autore, proprietario, copyright, ultimo software di modifica.', example: 'EXIF Artist, Copyright, Software' },
          { name: 'Provenienza e IA', text: 'Content Credentials, etichette “creato con IA”, prompt e workflow.', example: 'C2PA manifest, IPTC DigitalSourceType' },
        ],
        synonyms:
          'Troverai molti nomi per la stessa operazione — “rimuovi metadati”, “cancella EXIF”, “pulitore di metadati”, “togli le info dalla foto” — e significano tutti togliere le note nascoste dal file senza cambiare l’immagine. Allo stesso modo un “visualizzatore”, “lettore” o “verificatore di metadati” mostra cosa c’è dentro il file. AI Label Remover fa entrambe le cose.',
      },
      why: {
        title: 'Perché vedere e rimuovere i metadati prima di condividere una foto?',
        paragraphs: [
          'Un singolo campo di metadati di solito è innocuo, ma tutti insieme dicono molto di te. Una foto scattata a casa e pubblicata su un sito di annunci può contenere coordinate GPS precise a pochi metri; le immagini inviate per e-mail o link cloud conservano tutto ciò che ha scritto la fotocamera. Scopri [come il GPS delle foto può rivelare il tuo indirizzo](remove-gps-location-from-photos).',
          'Per le immagini create o modificate con l’IA, i metadati decidono anche se una piattaforma mostra l’etichetta “Creato con IA” e possono svelare l’intero prompt che hai scritto. Ecco [perché compare l’etichetta “Made with AI”](made-with-ai-label).',
        ],
        bullets: [
          'Rivelare dove vivi, lavori o viaggi tramite le coordinate GPS.',
          'Collegare molte foto alla stessa persona tramite il numero di serie della fotocamera o il nome del proprietario.',
          'Esporre prompt, seed, modelli e workflow che volevi tenere privati.',
          'Ricevere un’etichetta IA da una piattaforma a causa dei dati C2PA o IPTC allegati.',
        ],
      },
      standards: {
        title: 'Gli standard di metadati più comuni nelle foto',
        lead: 'Uno stesso file immagine può contenere più “scomparti” di metadati, ognuno con il proprio standard. AI Label Remover legge e rimuove tutti quelli elencati qui sotto.',
        items: [
          { name: 'EXIF', text: 'Scritto da fotocamere e smartphone: impostazioni di esposizione, dispositivo, data e ora, GPS, miniature.' },
          { name: 'XMP', text: 'Il formato XML di Adobe per cronologia delle modifiche, valutazioni, parole chiave e molte proprietà legate all’IA.' },
          { name: 'IPTC', text: 'Lo standard delle redazioni: didascalia, autore, copyright e il campo DigitalSourceType che dichiara le immagini IA.' },
          { name: 'C2PA', text: 'Content Credentials con firma crittografica che registrano come un file è stato creato e modificato. [Cos’è C2PA](what-is-c2pa-content-credentials).' },
          { name: 'PNG text', text: 'I chunk tEXt, iTXt e zTXt in cui [Stable Diffusion e ComfyUI](remove-stable-diffusion-comfyui-metadata) salvano prompt e workflow.' },
        ],
      },
    },
    security: {
      title: 'Le tue foto restano al sicuro',
      lead: 'Con qualsiasi strumento che gestisce file personali, la prima domanda è “dove finiscono le mie foto?”. La risposta di AI Label Remover: da nessuna parte.',
      items: [
        { title: '100% sul tuo dispositivo', text: 'Lettura e pulizia avvengono in un Web Worker dentro la scheda del browser. Nessun server riceve mai i tuoi file.' },
        { title: 'Niente archiviazione, niente addestramento IA', text: 'Poiché le foto non vengono mai inviate, non esiste alcuna copia da archiviare, divulgare o usare per addestrare un modello.' },
        { title: 'Funziona offline', text: 'Carica la pagina, spegni il Wi-Fi e pulisci un file: funziona lo stesso. La scheda Rete dei DevTools non mostra dati immagine in uscita.' },
        { title: 'Nessun account, nessun tracciamento', text: 'Nessuna registrazione, niente analytics, pubblicità o pixel di terze parti. Il sito ricorda solo la lingua e il tema che scegli.' },
      ],
    },
    faq: [
      { q: 'Che differenza c’è tra EXIF e metadati?', a: 'EXIF è un tipo di metadati, quello scritto da fotocamere e smartphone. “Metadati” è il termine più ampio e comprende anche XMP, IPTC, C2PA e i chunk di testo dei PNG.' },
      { q: 'I metadati possono mostrare dove è stata scattata una foto?', a: 'Sì, se l’immagine contiene tag GPS. Gli smartphone di solito registrano latitudine, longitudine e altitudine quando la fotocamera può usare la posizione. Pulire l’immagine rimuove questi tag senza toccare la qualità. Vedi [come rimuovere la posizione GPS dalle foto](remove-gps-location-from-photos).' },
      { q: 'Come si rimuovono i metadati IA da un’immagine?', a: 'Trascina l’immagine nel riquadro in cima a questa pagina e premi “Rimuovi tutti i metadati”. Prima di pulire, la scheda di ogni file mostra i dati C2PA, IPTC e il prompt trovati.' },
      { q: 'È sicuro caricare qui le mie foto?', a: 'Le tue foto non vengono caricate affatto. AI Label Remover apre i file nel browser, li elabora nella memoria della scheda e salva la copia pulita direttamente sul tuo dispositivo. Una volta caricata la pagina puoi andare offline e continua a funzionare.' },
    ],
    ctaTools: 'Vedi tutti gli strumenti',
    start: {
      title: 'Inizia dal file che hai',
      lead: 'Scegli cosa ti serve: ogni strumento ha l’area di caricamento già pronta in cima alla pagina.',
      badge: 'Consigliato',
      open: 'Apri lo strumento',
    },
    nav: {
      remove: 'Rimuovi metadati',
      check: 'Vedi e controlla',
      learn: 'Approfondisci',
      viewer: 'Vedi i metadati della foto',
      aiCheck: 'Controlla se una foto è IA',
      whatIs: 'Cosa sono i metadati?',
    },
  },
  labels: {
    tools: 'Altri strumenti per i metadati',
    relatedTools: 'Strumenti dedicati',
    homeTitle: 'Scegli lo strumento per il tuo file',
    homeLead: 'Ogni pagina si concentra su un compito, con lo strumento pronto in alto.',
    formats: 'Cosa viene rimosso e cosa resta',
    contact: 'Contatti',
    contactText: 'Domande, bug o un file che non si pulisce bene? Scrivi a',
    updated: 'Aggiornato il {date}',
  },
  tools: {
    'ai-tag-cleaner': {
      metaTitle: 'AI Tag Cleaner – Rimuovi i tag IA dai metadati',
      description: 'Rimuovi i tag IA dalle immagini: IPTC “generato da IA”, C2PA, nomi dei generatori in XMP e prompt. Senza perdita, gratis, nel browser, senza upload.',
      navLabel: 'Pulitore tag IA',
      h1: 'Pulitore di tag IA per immagini',
      lead: 'I generatori IA e gli editor con funzioni IA etichettano i file che toccano: un tipo di sorgente “generato da IA”, un record C2PA firmato, il nome dell’app, a volte l’intero prompt. Trascina un’immagine qui sotto per vedere ogni tag IA che contiene e poi rimuoverli senza ricodificare un solo pixel.',
      sections: [
        {
          heading: 'Cosa conta come tag IA',
          paragraphs: ['Un tag IA è qualsiasi campo nel file che dice, o lascia intendere, che è stata usata l’IA. Si nascondono in più standard di metadati contemporaneamente, ed è per questo che cancellare un campo a mano raramente basta:'],
          bullets: [
            'Valori DigitalSourceType di IPTC e XMP come trainedAlgorithmicMedia o compositeWithTrainedAlgorithmicMedia.',
            'Azioni delle [Content Credentials C2PA](what-is-c2pa-content-credentials) che segnano passaggi generativi, scritte da ChatGPT, Firefly, Photoshop e altri.',
            'Campi Software e Creator Tool con il nome del generatore, più voci di cronologia XMP lasciate dalle modifiche IA.',
            'Prompt, seed e modello nei chunk PNG di [Stable Diffusion e ComfyUI](remove-stable-diffusion-comfyui-metadata).',
          ],
        },
        {
          heading: 'Come funziona il pulitore di tag IA',
          paragraphs: [
            'AI Label Remover legge la struttura del file direttamente nel browser. Ogni tag IA viene elencato con il campo esatto da cui proviene e il file riceve un verdetto — “Tracce di IA trovate”, “Merita un secondo sguardo” o “Nessuna traccia di IA” — prima che venga modificato qualcosa.',
            'Premendo “Rimuovi tutti i metadati” vengono tagliati i blocchi che contengono quei tag: XMP, IPTC, EXIF, l’archivio dei manifest C2PA e i chunk di testo PNG. I dati compressi dell’immagine vengono copiati byte per byte e la copia pulita viene riletta, così puoi verificare che non resti alcun tag IA.',
          ],
        },
        {
          heading: 'Quali strumenti lasciano quali tag',
          paragraphs: [
            'Le immagini di ChatGPT e Gemini arrivano con record C2PA; Firefly e il Riempimento generativo di Photoshop aggiungono C2PA e DigitalSourceType; Midjourney scrive XMP descrittivo; le interfacce di Stable Diffusion salvano tutte le impostazioni di generazione nel PNG. Per tenere privati i prompt, vedi [come nascondere i prompt di Midjourney e DALL·E](hide-midjourney-dalle-prompts).',
          ],
        },
        {
          heading: 'Cosa un pulitore di tag IA non può fare',
          paragraphs: [
            'La pulizia agisce solo sui metadati. Le filigrane invisibili come SynthID vivono nei pixel e restano, e le piattaforme possono usare propri classificatori. Rimuovere i tag serve alla privacy e a correggere etichette sbagliate su foto reali: se un’immagine è generata con l’IA ed è realistica, le regole delle piattaforme di solito chiedono comunque di dichiararlo.',
          ],
        },
      ],
      faqHeading: 'Domande sul pulitore di tag IA',
      faq: [
        { q: 'Un tag IA è la stessa cosa di un’etichetta IA?', a: 'Non proprio. Il tag è un dato dentro il file; l’etichetta è ciò che mostra la piattaforma, come “Info IA” su Instagram. Spesso le piattaforme creano l’etichetta a partire dal tag. Per evitarlo su una foto reale, vedi [No AI Tag](no-ai-tag).' },
        { q: 'Posso rimuovere solo i tag IA e tenere il resto?', a: 'Il pulitore rimuove interi blocchi di metadati invece di singoli campi, perché i tag IA sono sparsi in più blocchi. Rotazione, profilo colore ICC e dimensioni in pixel vengono sempre mantenuti, quindi l’immagine si vede esattamente come prima.' },
        { q: 'Pulire i tag IA riduce la qualità?', a: 'No. Nulla viene ricodificato: si rimuovono solo i metadati, mentre i dati dell’immagine restano identici.' },
        { q: 'Quali formati posso pulire?', a: 'JPG, PNG, WebP, GIF, HEIC/HEIF e AVIF — fino a 50 file alla volta, ciascuno fino a 25 MB. I prompt nei PNG si gestiscono anche con il [rimuovi metadati PNG](png-metadata-remover).' },
        { q: 'Rimuove i metadati delle immagini di ChatGPT o Gemini?', a: 'Rimuove le Content Credentials C2PA e i campi IPTC scritti da questi servizi. Google incorpora anche una filigrana SynthID nei pixel, che nessuno strumento per metadati può togliere.' },
        { q: 'Posso vedere il prompt prima di cancellarlo?', a: 'Sì. La scheda “Metadati grezzi” mostra parola per parola prompt, workflow e nomi dei generatori, così puoi copiare ciò che vuoi conservare prima della pulizia.' },
      ],
      related: ['made-with-ai-label', 'what-is-c2pa-content-credentials', 'remove-stable-diffusion-comfyui-metadata'],
      updated: '2026-11-06',
    },
    'no-ai-tag': {
      metaTitle: 'No AI Tag – Pubblica foto reali senza l’etichetta “Info IA”',
      description: 'Hai un’etichetta “Info IA” su una foto vera? Rimuovi i dati C2PA e IPTC che la causano e pubblica senza tag IA. Senza perdita, gratis, nel browser.',
      navLabel: 'No AI Tag',
      h1: 'No AI Tag – foto reali senza tag IA',
      lead: 'Un piccolo ritocco generativo in Photoshop o in un editor per smartphone può bastare perché Instagram, Facebook o Threads mettano un’etichetta “Info IA” su una foto autentica. Trascina il file qui sotto per vedere quali dati la attivano, poi condividi una copia pulita senza tag IA nei metadati.',
      sections: [
        {
          heading: 'Perché una foto reale riceve un tag IA',
          paragraphs: ['Le piattaforme leggono i dati di provenienza che gli editor allegano al file. [Perché le foto reali ricevono l’etichetta “Made with AI”](made-with-ai-label) spiega i dettagli; i motivi più comuni sono:'],
          bullets: [
            'Un manifest C2PA che registra un passaggio generativo, come Riempimento generativo, cancellazione o espansione con IA.',
            'Un valore IPTC o XMP DigitalSourceType che dice che l’immagine è stata composta con l’IA.',
            'Content Credentials aggiunte di default da un’app di editing in esportazione.',
          ],
        },
        {
          heading: 'Come pubblicare senza tag IA',
          paragraphs: ['Serve meno di un minuto e nulla lascia il tuo dispositivo:'],
          bullets: [
            'Trascina la foto modificata nel riquadro in cima a questa pagina.',
            'Leggi il verdetto e i campi che lo motivano: il report indica l’azione C2PA o il valore IPTC esatto.',
            'Premi “Rimuovi tutti i metadati” e salva la copia pulita.',
            'Carica la copia pulita, non l’esportazione originale.',
          ],
        },
        {
          heading: 'Ferma il tag alla fonte',
          paragraphs: [
            'Se modifichi spesso le foto, disattiva le Content Credentials nelle impostazioni di esportazione di Photoshop e Lightroom, così non vengono scritte. Per molte foto insieme, vedi [come rimuovere i metadati in blocco](batch-remove-metadata).',
          ],
        },
        {
          heading: 'Cosa No AI Tag può e non può promettere',
          paragraphs: [
            'Rimuovere i metadati elimina il motivo legato al file, che è la causa nella maggior parte delle foto ritoccate. Non può rimuovere filigrane nei pixel come SynthID, e una piattaforma può comunque etichettare un post con il proprio rilevamento o chiederti di dichiararlo. Questa pagina è pensata per foto autentiche con piccoli ritocchi: se un’immagine è generata con l’IA e può trarre in inganno, dichiaralo.',
          ],
        },
      ],
      faqHeading: 'Domande su No AI Tag',
      faq: [
        { q: 'Rimuove l’etichetta “Info IA” da un post già pubblicato?', a: 'No. L’etichetta appartiene al post sulla piattaforma. Elimina o archivia il post, pulisci qui il file e carica la copia pulita.' },
        { q: 'No AI Tag garantisce il risultato?', a: 'No. Rimuove i metadati che le piattaforme leggono, ma possono usare anche altri segnali. Nella maggior parte delle foto ritoccate il motivo dell’etichetta sono proprio i metadati.' },
        { q: 'Funziona con le foto di iPhone e Android?', a: 'Sì. I file HEIC di iPhone e JPG di Android vengono puliti così come sono, senza conversione. C’è anche un [rimuovi metadati HEIC](heic-metadata-remover) dedicato.' },
        { q: 'E i tag IA su un’immagine interamente generata?', a: 'Il [pulitore di tag IA](ai-tag-cleaner) li mostra e li rimuove, ma in genere le regole delle piattaforme chiedono comunque di etichettare tu stesso le immagini IA realistiche.' },
      ],
      related: ['made-with-ai-label', 'what-is-c2pa-content-credentials', 'batch-remove-metadata'],
      updated: '2026-11-09',
    },
    'remove-exif-data': {
      metaTitle: 'Rimuovere i dati EXIF dalle foto online, gratis',
      description: 'Rimuovi i dati EXIF — GPS, fotocamera, numero di serie, data — da JPG, HEIC, PNG e WebP nel browser. Nessun upload, nessuna perdita, fino a 50 file.',
      navLabel: 'Rimuovi EXIF',
      h1: 'Rimuovere i dati EXIF dalle foto',
      lead: 'Trascina le tue foto qui sotto per vedere ogni campo EXIF che contengono — posizione GPS, fotocamera e obiettivo, numero di serie, ora dello scatto — e rimuoverli con un clic. Tutto avviene sul tuo dispositivo: i file non vengono mai caricati.',
      sections: [
        {
          heading: 'Cosa rivelano i dati EXIF',
          paragraphs: ['EXIF è il blocco di note tecniche che una fotocamera o uno smartphone scrive in ogni foto. Da sola la maggior parte è innocua, ma insieme può dire molto di te. Questi sono i campi che contano per la privacy:'],
          bullets: [
            'Latitudine, longitudine e altitudine GPS — spesso precise a pochi metri, abbastanza per trovare una casa.',
            'Data e ora dello scatto, con il fuso orario.',
            'Marca e modello di fotocamera o telefono, obiettivo e, su molte fotocamere, un numero di serie che collega le foto tra loro.',
            'Nome del proprietario o autore e il software che ha modificato il file per ultimo.',
            'Una miniatura incorporata, che può ancora mostrare l’immagine originale dopo un ritaglio.',
          ],
        },
        {
          heading: 'Come funziona questo rimuovi EXIF',
          paragraphs: [
            'AI Label Remover legge direttamente la struttura del file. In un JPEG taglia il segmento APP1 che contiene EXIF e XMP, oltre a IPTC, commenti e miniature; in HEIC, PNG e WebP rimuove i box o chunk equivalenti. I dati compressi dell’immagine vengono copiati byte per byte, quindi nulla viene ricodificato e la foto resta identica.',
            'I campi che controllano la visualizzazione vengono mantenuti di proposito: rotazione, profilo colore ICC e dimensioni in pixel. Così si evitano le foto girate di lato e i colori sbiaditi tipici degli strumenti più grossolani. A lavoro finito il file pulito viene riletto, così vedi che i campi EXIF sono davvero spariti.',
          ],
        },
        {
          heading: 'Quando rimuovere l’EXIF prima di condividere',
          paragraphs: [
            'Molti grandi social rimuovono l’EXIF al caricamento, ma tanti altri canali no: allegati e-mail, link a cloud, forum, siti di annunci, app di chat che inviano file in “qualità originale” e il tuo sito web. Se non sai dove finirà una foto, pulirla prima è la scelta più sicura.',
            'Vendere qualcosa online, pubblicare una foto scattata a casa o inviare immagini a qualcuno appena conosciuto sono i casi classici in cui [i dati GPS possono rivelare un luogo](remove-gps-location-from-photos).',
          ],
        },
        {
          heading: 'Privato per progettazione',
          paragraphs: [
            'Di solito i servizi online per rimuovere l’EXIF caricano la foto su un server, la elaborano lì e te la rimandano. AI Label Remover fa tutto in Web Worker dentro la scheda del browser: una volta caricata la pagina puoi persino staccare la connessione e continua a funzionare. Nessun account, nessuna filigrana e nessun limite oltre 25 MB e 40 megapixel per file.',
          ],
        },
      ],
      faqHeading: 'Domande sulla rimozione dell’EXIF',
      faq: [
        { q: 'Rimuovere l’EXIF riduce la qualità?', a: 'No. Vengono tagliati solo i blocchi di metadati; i dati compressi dell’immagine sono copiati senza modifiche, quindi risoluzione, nitidezza e colori restano identici.' },
        { q: 'La foto resterà nel verso giusto?', a: 'Sì. Il valore di orientamento viene mantenuto, insieme al profilo colore ICC, quindi l’immagine si vede come prima.' },
        { q: 'Posso rimuovere l’EXIF dalle foto HEIC di iPhone?', a: 'Sì. I file HEIC e HEIF sono supportati direttamente, senza convertirli prima in JPEG. C’è anche una pagina dedicata: [rimuovi metadati HEIC](heic-metadata-remover).' },
        { q: 'Come verifico che l’EXIF sia sparito?', a: 'Dopo la pulizia, AI Label Remover rilegge il nuovo file e mostra quali campi restano. Puoi anche aprirlo nelle proprietà del file del tuo sistema operativo.' },
        { q: 'Posso farlo per molte foto insieme?', a: 'Sì: fino a 50 file alla volta, scaricabili in un unico ZIP. Vedi [come rimuovere i metadati in blocco](batch-remove-metadata).' },
      ],
      related: ['remove-gps-location-from-photos', 'batch-remove-metadata', 'made-with-ai-label'],
      updated: '2026-11-06',
    },
    'remove-c2pa-content-credentials': {
      metaTitle: 'Rimuovere le Content Credentials C2PA, gratis',
      description: 'Ispeziona e rimuovi le Content Credentials C2PA (manifest JUMBF) da JPG, PNG, HEIC, WebP e AVIF, senza perdita di qualità e senza caricarli da nessuna parte.',
      navLabel: 'Rimuovi C2PA',
      h1: 'Rimuovere le Content Credentials C2PA',
      lead: 'Le Content Credentials sono una cronologia firmata allegata a un’immagine: quale app l’ha creata, quali modifiche sono seguite e se è stata usata l’IA generativa. Trascina un file qui sotto per leggere il suo manifest C2PA e rimuovere l’intero archivio senza perdita.',
      sections: [
        {
          heading: 'Cosa contiene un manifest C2PA',
          paragraphs: ['C2PA (Coalition for Content Provenance and Authenticity) definisce un modo per incorporare in un file un record firmato crittograficamente. [C2PA spiegato](what-is-c2pa-content-credentials) approfondisce; in pratica un manifest contiene di solito:'],
          bullets: [
            'Il claim generator: l’app o il servizio che lo ha firmato, come Photoshop, Firefly, ChatGPT o una fotocamera.',
            'Un elenco di azioni: creato, aperto, modificato, ritagliato, e marcatori per i passaggi di IA generativa.',
            'Gli ingredienti: versioni precedenti o immagini di partenza da cui è stato costruito il file.',
            'Un tipo di sorgente digitale che indica se il contenuto è stato catturato, composto o generato dall’IA.',
            'Una firma e un certificato che legano il record ai dati esatti dell’immagine.',
          ],
        },
        {
          heading: 'Dove si trova C2PA in ogni formato',
          paragraphs: [
            'Nei JPEG l’archivio dei manifest sta nei segmenti APP11 come box JUMBF; nei PNG è un chunk caBX; in HEIC e AVIF è un box uuid; in WebP un chunk RIFF dedicato. AI Label Remover li trova tutti, mostra le dichiarazioni contenute e rimuove l’intero archivio copiando i dati dell’immagine senza modifiche.',
            'Poiché la firma lega il manifest ai byte esatti, qualsiasi nuovo salvataggio da un’altra app di solito lo rompe o lo elimina comunque. Rimuoverlo in modo pulito evita di lasciare un record rotto e valido solo a metà.',
          ],
        },
        {
          heading: 'Motivi per tenerle, motivi per rimuoverle',
          paragraphs: [
            'Le Content Credentials possono essere preziose: aiutano testate e creatori a dimostrare da dove viene un’immagine. Se è il tuo obiettivo, tienile — e conserva comunque il file originale, perché i metadati rimossi non si possono ripristinare.',
            'Rimuoverle ha senso quando il record rivela più di quanto vuoi (nomi, cronologia delle modifiche, immagini di partenza) o quando un editor ha aggiunto un marcatore IA a una foto autentica dopo un piccolo ritocco. Puoi anche disattivarle nelle impostazioni di esportazione di Photoshop e Lightroom, così non vengono scritte.',
          ],
        },
      ],
      faqHeading: 'Domande su C2PA',
      faq: [
        { q: 'AI Label Remover verifica le firme C2PA?', a: 'No. Legge e mostra il contenuto del manifest ma non convalida la catena dei certificati. Per la verifica della firma usa lo strumento ufficiale Content Credentials Verify.' },
        { q: 'Rimuovere le Content Credentials è legale?', a: 'Rimuovere i metadati da file che possiedi o che puoi modificare è in genere lecito, ma non usarlo per mentire su chi ha creato un’immagine o come. Si tratta di informazioni generali, non di consulenza legale.' },
        { q: 'Perché la mia foto dice “Merita un secondo sguardo”?', a: 'Il file ha un manifest C2PA che non menziona esplicitamente l’IA. Alcune piattaforme considerano qualsiasi manifest un indizio, quindi controlla le azioni elencate prima di decidere.' },
        { q: 'Una piattaforma saprà comunque che l’immagine è stata modificata?', a: 'Non dal manifest rimosso. Le piattaforme possono usare altri segnali, e le filigrane invisibili nei pixel non sono toccate dalla rimozione dei metadati.' },
      ],
      related: ['what-is-c2pa-content-credentials', 'made-with-ai-label', 'hide-midjourney-dalle-prompts'],
      updated: '2026-11-06',
    },
    'heic-metadata-remover': {
      metaTitle: 'Rimuovi metadati HEIC – EXIF e GPS delle foto iPhone',
      description: 'Rimuovi EXIF, posizione GPS e orari dalle foto HEIC e HEIF di iPhone senza convertirle in JPEG. Senza perdita, nel browser, nulla viene caricato.',
      navLabel: 'Rimuovi metadati HEIC',
      h1: 'Rimuovere i metadati HEIC dalle foto iPhone',
      lead: 'Gli iPhone salvano le foto in HEIC e ognuna registra dove e quando è stata scattata. Trascina qui sotto file HEIC o HEIF per vedere quei metadati e rimuoverli: la foto resta HEIC, senza conversione e senza perdita di qualità.',
      sections: [
        {
          heading: 'Cosa registra una foto HEIC di iPhone',
          paragraphs: ['Una tipica foto di iPhone contiene più di quanto si pensi:'],
          bullets: [
            'Coordinate GPS precise, altitudine e direzione in cui era rivolta la fotocamera.',
            'Data, ora e fuso orario dello scatto, più le date di modifica.',
            'Modello del dispositivo, obiettivo, impostazioni di scatto e versione di iOS.',
            'Dati specifici di Apple, come l’identificativo di abbinamento delle Live Photo.',
            'Dati XMP scritti dalle app di editing, a volte con record C2PA.',
          ],
        },
        {
          heading: 'Rimuovere i metadati senza convertire in JPEG',
          paragraphs: [
            'Il consiglio abituale è convertire l’HEIC in JPEG e sperare che i metadati non sopravvivano. Così però l’immagine viene ricodificata, perde qualità e spesso perde anche il profilo colore ad ampia gamma. AI Label Remover invece modifica il contenitore HEIC stesso: rimuove gli elementi Exif e XMP, i box uuid C2PA e i box degli orari, e lascia intatti i dati HEVC, la rotazione (irot/imir) e il profilo colore (colr).',
            'Lo stesso motore gestisce AVIF, che usa lo stesso contenitore ISOBMFF, quindi anche le esportazioni AVIF delle app moderne si puliscono allo stesso modo.',
          ],
        },
        {
          heading: 'Impostazioni di iPhone o pulizia del file',
          paragraphs: [
            'iOS permette di disattivare la posizione per una singola condivisione con il pulsante “Opzioni” del foglio di condivisione, e l’app Foto può modificare o rimuovere la posizione di ogni foto. Funziona bene per una condivisione occasionale, ma è facile dimenticarsene e non rimuove gli altri campi. Vedi [perché il GPS nelle foto è un rischio](remove-gps-location-from-photos).',
            'Per un gruppo di foto — una cartella di vacanze, foto di prodotti o immagini per un annuncio — trascinarle in AI Label Remover e salvare un unico ZIP è più rapido, e il report prima/dopo mostra esattamente cosa è stato rimosso.',
          ],
        },
      ],
      faqHeading: 'Domande su HEIC',
      faq: [
        { q: 'Funziona su Windows, dove a volte l’HEIC non si apre?', a: 'Sì. AI Label Remover legge da solo la struttura HEIC, quindi non serve installare un codec. I file HEIC mostrano un’etichetta del formato invece dell’anteprima, ma lettura e pulizia funzionano normalmente.' },
        { q: 'Il file pulito si aprirà ancora in Foto?', a: 'Sì. Il risultato è un normale file HEIC con gli stessi dati dell’immagine; vengono rimossi solo gli elementi di metadati.' },
        { q: 'Le Live Photo sono supportate?', a: 'AI Label Remover elabora l’immagine HEIC statica. Il video abbinato di una Live Photo è un file separato e non viene modificato.' },
        { q: 'C’è un limite di dimensione?', a: 'Ogni file può arrivare a 25 MB e 40 megapixel, il che copre le foto di tutti gli iPhone attuali, e puoi pulirne 50 alla volta.' },
      ],
      related: ['remove-gps-location-from-photos', 'batch-remove-metadata', 'what-is-c2pa-content-credentials'],
      updated: '2026-11-06',
    },
    'png-metadata-remover': {
      metaTitle: 'Rimuovi metadati PNG – Elimina prompt e chunk di testo',
      description: 'Rimuovi i metadati PNG — chunk tEXt, iTXt e zTXt con prompt di Stable Diffusion o ComfyUI, XMP, eXIf e C2PA — mantenendo l’immagine senza perdita.',
      navLabel: 'Rimuovi metadati PNG',
      h1: 'Rimuovere i metadati PNG',
      lead: 'I file PNG nascondono metadati nei chunk di testo: prompt e workflow IA, nomi degli autori, software e orari. Trascina qui sotto i PNG per leggere ogni chunk e rimuoverli mentre i dati dell’immagine restano identici bit per bit.',
      sections: [
        {
          heading: 'Dove il PNG conserva i metadati',
          paragraphs: ['Un PNG è una sequenza di chunk. L’immagine vera e propria sta in IHDR, PLTE e IDAT; tutto il resto è facoltativo. I chunk che AI Label Remover rimuove sono:'],
          bullets: [
            'tEXt, zTXt e iTXt — testo libero, testo compresso e testo internazionale. Stable Diffusion WebUI scrive qui un chunk “parameters”; ComfyUI scrive i JSON “prompt” e “workflow”.',
            'Pacchetti XMP salvati in iTXt, comprese dichiarazioni IPTC e di sorgente IA.',
            'eXIf — dati EXIF, compreso il GPS quando un’app li ha copiati da una foto.',
            'caBX — Content Credentials C2PA.',
            'tIME (ora dell’ultima modifica) e dSIG (firma digitale).',
          ],
        },
        {
          heading: 'Cosa resta perché l’immagine sia identica',
          paragraphs: [
            'Trasparenza (tRNS), gamma e cromaticità (gAMA, cHRM), il flag sRGB e il profilo ICC incorporato (iCCP) influiscono sulla visualizzazione, quindi vengono mantenuti. I PNG animati conservano i chunk acTL, fcTL e fdAT, così le animazioni APNG continuano a funzionare.',
            'Poiché i dati IDAT vengono copiati e non ricompressi, il file pulito è identico pixel per pixel all’originale — di solito un po’ più leggero, perché i chunk di testo non ci sono più.',
          ],
        },
        {
          heading: 'Proteggere prompt e workflow IA',
          paragraphs: [
            'Se condividi immagini create con Stable Diffusion, Forge o ComfyUI, chiunque può trascinare il PNG nello stesso strumento e recuperare esattamente prompt, seed, modello e grafo dei nodi. [Come Stable Diffusion e ComfyUI nascondono i prompt nei PNG](remove-stable-diffusion-comfyui-metadata) mostra cosa viene salvato. La pulizia rimuove tutto, mentre la scheda “Metadati grezzi” ti permette di copiare prima il prompt, se vuoi conservarlo.',
          ],
        },
      ],
      faqHeading: 'Domande sui metadati PNG',
      faq: [
        { q: 'Rimuovere i metadati PNG cambia i colori?', a: 'No. I chunk legati al colore — sRGB, gAMA, cHRM e iCCP — vengono mantenuti, e i dati IDAT sono copiati senza modifiche.' },
        { q: 'Funziona con i PNG trasparenti?', a: 'Sì. I dati di trasparenza (tRNS o il canale alfa dentro IDAT) fanno parte dell’immagine e non vengono mai toccati.' },
        { q: 'Posso conservare il prompt da qualche parte?', a: 'Copialo dalla scheda “Metadati grezzi” prima della pulizia. Una volta rimossi, i metadati non si possono recuperare dal file pulito.' },
        { q: 'Funziona anche con i PNG di Midjourney o DALL·E?', a: 'Sì. Testo, XMP o dati C2PA incorporati da questi servizi vengono rimossi allo stesso modo. Vedi [come nascondere i prompt di Midjourney e DALL·E](hide-midjourney-dalle-prompts).' },
      ],
      related: ['remove-stable-diffusion-comfyui-metadata', 'hide-midjourney-dalle-prompts', 'batch-remove-metadata'],
      updated: '2026-11-06',
    },
  },
  info: {
    about: {
      metaTitle: 'Chi siamo – Come funziona AI Label Remover',
      description: 'Chi sviluppa AI Label Remover, come funziona la pulizia dei metadati nel browser, come scriviamo e aggiorniamo le guide e cosa lo strumento non farà mai.',
      navLabel: 'Chi siamo',
      title: 'Informazioni su AI Label Remover',
      lead: 'AI Label Remover è uno strumento gratuito per leggere e rimuovere i metadati nascosti dalle immagini — EXIF, GPS, XMP, IPTC, Content Credentials C2PA e prompt IA — progettato perché i tuoi file non debbano mai lasciare il tuo dispositivo.',
      sections: [
        {
          heading: 'Perché esiste',
          paragraphs: [
            'Foto e immagini IA contengono molte più informazioni di quanto si pensi: la posizione di casa nei tag GPS, numeri di serie dei dispositivi, prompt e workflow completi, record di provenienza che le piattaforme leggono per applicare etichette. La maggior parte dei servizi online chiede di caricare proprio i file che vuoi proteggere. AI Label Remover è nato per fare lo stesso lavoro senza questo compromesso.',
          ],
        },
        {
          heading: 'Come funziona lo strumento',
          paragraphs: [
            'Quando aggiungi un’immagine, il browser la legge in locale. I Web Worker analizzano la struttura del file — segmenti JPEG, chunk PNG, chunk RIFF di WebP, blocchi GIF e box HEIC/AVIF — ed elencano ogni blocco di metadati trovato. La pulizia rimuove quei blocchi dal flusso di byte, copia senza modifiche i dati compressi dell’immagine e rilegge il risultato per confermare cosa resta.',
            'Non c’è alcuna elaborazione lato server. Il sito è un insieme di pagine statiche; una volta caricato, lo strumento funziona anche offline.',
          ],
        },
        {
          heading: 'Come scriviamo le guide',
          paragraphs: [
            'Le guide di questo sito si basano sulle specifiche pubblicate (EXIF, XMP, IPTC Photo Metadata, C2PA, i formati PNG e ISOBMFF), sulle pagine di assistenza delle piattaforme e su test con file reali degli strumenti descritti. Ogni guida mostra la data dell’ultima revisione e la aggiorniamo quando cambiano standard o regole delle piattaforme.',
            'Le guide sono informazioni generali, non consulenza legale. Le regole delle piattaforme sulle etichette IA cambiano spesso: controlla le loro pagine di assistenza prima di affidarti a qualsiasi affermazione.',
          ],
        },
        {
          heading: 'Cosa AI Label Remover non farà',
          paragraphs: [],
          bullets: [
            'Caricare, archiviare o registrare i tuoi file: non esiste un server che possa riceverli.',
            'Modificare i pixel, rimuovere filigrane invisibili o loghi visibili.',
            'Promettere che una piattaforma applicherà o meno un’etichetta.',
            'Aiutare a far passare immagini generate con l’IA per foto reali. Usalo per proteggere la privacy e correggere errori.',
          ],
        },
        {
          heading: 'Indipendenza',
          paragraphs: [
            'AI Label Remover è indipendente e non è affiliato a Meta, Google, OpenAI, Adobe, Midjourney, Apple o alla C2PA. I nomi dei prodotti sono usati solo per descrivere la compatibilità.',
          ],
        },
      ],
      updated: '2026-11-06',
    },
    privacy: {
      metaTitle: 'Informativa sulla privacy – AI Label Remover',
      description: 'Privacy in parole semplici: le immagini restano sul tuo dispositivo, niente account, analytics o pubblicità; si salvano solo lingua e tema.',
      navLabel: 'Privacy',
      title: 'Informativa sulla privacy',
      lead: 'AI Label Remover è uno strumento per proteggere la tua privacy, quindi usarlo non dovrebbe costartene nemmeno un po’. Questa pagina spiega in parole semplici cosa succede alle tue immagini e alle poche informazioni gestite dal sito.',
      sections: [
        {
          heading: 'In breve',
          paragraphs: [],
          bullets: [
            'Le tue immagini vengono elaborate sul tuo dispositivo e non vengono mai caricate.',
            'Non ci sono account, registrazioni o mailing list: non sappiamo chi sei.',
            'Non ci sono analytics, pubblicità, pixel di tracciamento o script di terze parti.',
            'Si salvano solo lingua e tema chiaro/scuro, nel tuo browser, e puoi cancellarli quando vuoi.',
          ],
        },
        {
          heading: 'Cosa succede alle tue immagini',
          paragraphs: ['Quando aggiungi un’immagine ad AI Label Remover, questo è tutto il suo percorso:'],
          bullets: [
            'Il browser apre il file dal tuo dispositivo e lo tiene nella memoria della scheda.',
            'I Web Worker nella scheda leggono i metadati e, quando premi pulisci, scrivono una copia pulita — sempre in memoria.',
            'Quando salvi, il browser scrive il file pulito o lo ZIP direttamente sul tuo dispositivo.',
            'Quando chiudi o ricarichi la scheda, immagini e report spariscono. Nulla resta su un server, perché nessun server li riceve mai.',
          ],
        },
        {
          heading: 'Puoi verificarlo da solo',
          paragraphs: [
            'Non devi fidarti sulla parola. Carica la pagina, disattiva Wi-Fi o dati mobili e pulisci un file: funziona lo stesso, perché non c’è nulla da inviare. Se hai dimestichezza con gli strumenti per sviluppatori, apri la scheda Rete durante la pulizia e vedrai che nessun dato d’immagine lascia il dispositivo.',
          ],
        },
        {
          heading: 'Cosa non raccogliamo',
          paragraphs: ['AI Label Remover non raccoglie né conserva:'],
          bullets: [
            'le tue immagini, i loro metadati o i report mostrati a schermo;',
            'nome, indirizzo e-mail o dati di un account;',
            'la tua posizione: il GPS trovato nelle foto viene mostrato solo a te, sul tuo schermo;',
            'una cronologia dei file controllati o di come hai usato lo strumento.',
          ],
        },
        {
          heading: 'Cosa viene salvato nel browser e come cancellarlo',
          paragraphs: ['Per ricordare le tue scelte, il sito salva due piccole preferenze sul tuo dispositivo:'],
          bullets: [
            'Lingua: una voce “lang” nel local storage e un cookie proprietario “lang”, conservato per un anno, così la home si apre nella lingua scelta. Contiene solo un codice di lingua come “it”.',
            'Tema: una voce “theme” nel local storage se scegli la modalità chiara o scura.',
            'Per rimuoverle, cancella cookie e dati di questo sito nelle impostazioni del browser. AI Label Remover continua a funzionare; semplicemente dimentica le tue scelte.',
          ],
        },
        {
          heading: 'Quando visiti il sito',
          paragraphs: [
            'Come ogni sito web, quando apri una pagina il nostro server ha bisogno di alcuni dati tecnici di base per inviartela: l’indirizzo di rete del dispositivo (indirizzo IP), il tipo di browser e la pagina richiesta. Questi dati possono essere registrati temporaneamente per mantenere il sito funzionante e bloccare il traffico abusivo, e vengono conservati solo per il tempo necessario. Non li usiamo per identificarti, non creiamo un tuo profilo e non li condividiamo né li vendiamo mai.',
            'Quando apri la home, il server guarda la lingua del browser e la lingua che hai scelto in precedenza solo per aprire la versione giusta. Avviene sul momento e non viene memorizzato.',
          ],
        },
        {
          heading: 'Minori',
          paragraphs: [
            'AI Label Remover non chiede né raccoglie informazioni personali da nessuno, compresi i minori. Anche gli utenti più giovani possono usare lo strumento senza creare un account o condividere dati su di sé.',
          ],
        },
        {
          heading: 'I tuoi diritti',
          paragraphs: [
            'Poiché AI Label Remover non raccoglie nome, e-mail o account, non conserviamo alcun profilo da fornire, correggere o cancellare. Ciò che il sito ricorda sul tuo dispositivo è sempre sotto il tuo controllo. I dati tecnici registrati temporaneamente durante la visita non sono collegati a nomi o account e vengono cancellati quando non servono più al funzionamento del sito.',
          ],
        },
        {
          heading: 'Modifiche a questa informativa',
          paragraphs: ['Se il modo in cui AI Label Remover tratta i dati dovesse cambiare, aggiorneremo questa pagina e la data indicata in alto.'],
        },
      ],
      updated: '2026-11-06',
    },
  },
};

export default it;
