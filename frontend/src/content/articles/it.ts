import type { Articles } from './types';

const it: Articles = {
  'made-with-ai-label': {
    metaTitle: 'Perché le foto vere ricevono l’etichetta Info IA su Instagram',
    related: ['what-is-c2pa-content-credentials', 'hide-midjourney-dalle-prompts', 'remove-stable-diffusion-comfyui-metadata'],
    description:
      'Una foto autentica etichettata con Info IA su Instagram o Facebook contiene spesso campi C2PA o IPTC scritti da software di fotoritocco. Trovali ed eliminali senza perdita di qualità.',
    updated: '2026-10-23',
    sections: [
      {
        heading: 'L’etichetta analizza il file, non la scena fotografata',
        paragraphs: [
          'L’etichetta “Info IA” di Meta (precedentemente nota come “Creato con l’IA”) scatta automaticamente quando un’immagine caricata contiene segnali riconosciuti di IA generativa. Due di questi segnali risiedono nei metadati del file: [il manifest C2PA con Content Credentials](what-is-c2pa-content-credentials) e la proprietà IPTC DigitalSourceType nel blocco XMP.',
          'Il valore trainedAlgorithmicMedia indica che l’intera immagine è stata sintetizzata, mentre compositeWithTrainedAlgorithmicMedia segnala che una fotografia autentica contiene elementi modificati con l’IA. Meta e altri social network scansionano questi campi all’atto dell’upload.',
        ],
      },
      {
        heading: 'Da dove ha origine il segnale nelle foto reali',
        paragraphs: ['Per le foto scattate con fotocamere o smartphone reali, l’attivazione involontaria deriva quasi sempre dall’applicazione di ritocco:'],
        bullets: [
          'Strumenti come Riempimento Generativo o Cancellazione IA in Photoshop o Lightroom, che inseriscono azioni c2pa contrassegnando l’immagine come composito.',
          'Esportazione con Content Credentials abilitate, che include la cronologia completa delle modifiche.',
          'Funzionalità di editing IA integrate negli smartphone (come la Gomma Magica), che appongono metadati nei blocchi EXIF e XMP.',
          'Software fotografici che preservano e duplicano metadati preesistenti tra un salvataggio e l’altro.',
        ],
      },
      {
        heading: 'Individuare i campi responsabili con AI Label Remover',
        paragraphs: [
          'Rilasciando l’immagine nell’area di lavoro, la scheda “Tracce IA” elenca ogni indicatore presente nel file, evidenziandone la provenienza (come C2PA JUMBF o IPTC XMP). La scheda “Metadati grezzi” permette inoltre di ispezionare il software generatore del manifest e l’elenco delle azioni registrate.',
          'L’avviso di attenzione indica la presenza di credenziali di contenuto anche in assenza di dichiarazioni esplicite di IA. Molte piattaforme applicano cautelativamente l’etichetta alla sola vista del manifest.',
        ],
      },
      {
        heading: 'Pulire la copia destinata alla condivisione',
        paragraphs: [
          'Facendo clic su “Rimuovi tutti i metadati”, AI Label Remover esclude i blocchi C2PA, XMP, IPTC ed EXIF dal flusso binario, mantenendo inalterati i pixel, le dimensioni, l’orientamento e il profilo colore ICC. La pagina dello strumento [AI tag cleaner](ai-tag-cleaner) illustra i dettagli tecnici del processo.',
          'A differenza del salvataggio tradizionale da editor grafici che ricomprime l’immagine JPEG deteriorandone i dettagli, la rimozione diretta a livello di byte garantisce una pulizia completamente priva di perdite qualitative.',
        ],
      },
      {
        heading: 'Correggere un falso positivo nel rispetto della trasparenza',
        paragraphs: [
          'La rimozione dei metadati è concepita per proteggere la privacy ed evitare etichettature errate su fotografie reali. Se un’immagine è stata interamente creata con modelli generativi, è dovere dell’autore rispettare le linee guida delle piattaforme dichiarando l’origine sintetica.',
        ],
      },
    ],
    faqHeading: 'Domande frequenti sull’etichetta IA',
    faq: [
      { q: 'Posso rimuovere l’etichetta “Info IA” dopo aver già pubblicato il post?', a: 'Di norma no, poiché le piattaforme memorizzano la classificazione al momento dell’elaborazione iniziale. È consigliabile pulire il file con [AI tag cleaner](ai-tag-cleaner) e ricreare il post.' },
      { q: 'La rimozione dei metadati garantisce l’assenza dell’etichetta?', a: 'Rimuove la causa principale per le foto reali, ovvero i tag C2PA e IPTC. Tuttavia, alcune piattaforme integrano classificatori visivi indipendenti dai metadati.' },
      { q: 'La foto subisce modifiche visive o perdite di risoluzione?', a: 'No. Il flusso di dati dell’immagine viene copiato byte per byte, rimuovendo unicamente i blocchi informativi dell’intestazione.' },
      { q: 'È possibile conservare le impostazioni della fotocamera ed eliminare solo i tag IA?', a: 'AI Label Remover rimuove l’intero pacchetto di metadati identificativi (inclusi GPS e dispositivo) per garantire la massima riservatezza prima della condivisione pubblica.' },
    ],
  },

  'remove-stable-diffusion-comfyui-metadata': {
    metaTitle: 'Rimuovere i flussi di lavoro ComfyUI e i prompt SD dai PNG',
    related: ['hide-midjourney-dalle-prompts', 'batch-remove-metadata', 'what-is-c2pa-content-credentials'],
    description:
      'A1111, Forge e ComfyUI incorporano prompt, seed, modelli e l’intero workflow in ogni file PNG. Visualizza i dati ed eliminali senza toccare i pixel.',
    updated: '2026-10-23',
    sections: [
      {
        heading: 'I parametri viaggiano all’interno dell’immagine',
        paragraphs: [
          'Quando si genera un’immagine in Stable Diffusion WebUI (AUTOMATIC1111), Forge o ComfyUI, il software salva automaticamente tutti i parametri di generazione nei chunk testuali del formato PNG (tEXt, zTXt e iTXt).',
          'In ComfyUI, questo include l’intero albero dei nodi in formato JSON. Chiunque scarichi il file PNG può trascinarlo nella propria interfaccia per replicare il flusso di lavoro esatto, scoprendo modelli, LoRA, impostazioni di campionamento e percorsi locali.',
        ],
      },
      {
        heading: 'Motivi per cui è opportuno rimuovere i dati di generazione',
        paragraphs: [
          'La condivisione aperta è fondamentale nelle community open source, ma nei progetti professionali e commerciali i prompt e i flussi di nodi rappresentano un valore creativo riservato.',
          'Inoltre, i blocchi di testo possono rivelare percorsi di directory personali sul computer dell’autore e aumentare significativamente il peso in kilobyte del file.',
        ],
      },
      {
        heading: 'Ispezione e pulizia immediata con AI Label Remover',
        paragraphs: [
          'Caricando il PNG nello strumento [png-metadata-remover](png-metadata-remover), è possibile leggere integralmente il prompt positivo, il prompt negativo e le configurazioni prima di procedere.',
          'La funzione di pulizia elimina i chunk tEXt e zTXt preservando rigorosamente i blocchi essenziali IHDR, IDAT, PLTE e il profilo colore iCCP.',
        ],
      },
      {
        heading: 'Risultato finale dopo l’elaborazione',
        paragraphs: [
          'Il file risultante conserva la resa grafica esatta senza alcuna ricompressione. Se aperto in un visualizzatore di metadati o trascinato in ComfyUI, il file appare come una comune immagine priva di dati di ricostruzione.',
        ],
      },
    ],
    faqHeading: 'Domande sui metadati Stable Diffusion',
    faq: [
      { q: 'Posso disabilitare il salvataggio dei metadati direttamente in ComfyUI?', a: 'Sì, è possibile impostare nodi di salvataggio alternativi o disattivare l’incorporamento del workflow nelle impostazioni di esportazione.' },
      { q: 'ComfyUI può ripristinare il flusso di lavoro da un PNG pulito?', a: 'No. Una volta rimossi i chunk testuali, il file PNG non contiene alcuna istruzione per ricostruire i nodi.' },
      { q: 'Il PNG pulito ha lo stesso aspetto visivo?', a: 'Assolutamente sì. I pixel rimangono intatti, con il medesimo valore cromatico e trasparenza alfa.' },
      { q: 'Cosa accade convertendo l’immagine in JPEG o WebP?', a: 'La conversione rimuove i metadati PNG ma introduce artefatti di compressione. AI Label Remover mantiene invece il formato PNG lossless originale.' },
    ],
  },

  'hide-midjourney-dalle-prompts': {
    metaTitle: 'Rimuovere i prompt dalle immagini Midjourney e DALL·E',
    related: ['remove-stable-diffusion-comfyui-metadata', 'made-with-ai-label', 'what-is-c2pa-content-credentials'],
    description:
      'I download da Midjourney, DALL·E 3 e Firefly contengono il testo del prompt, l’ID del job e metadati di provenienza. Verifica e rimuovi queste tracce prima di pubblicare.',
    updated: '2026-10-23',
    sections: [
      {
        heading: 'Quali informazioni registrano i generatori cloud',
        paragraphs: [
          'A differenza dei software eseguiti in locale, i generatori su cloud come Midjourney, OpenAI DALL·E 3 e Adobe Firefly applicano metadati conformi agli standard industriali. Inseriscono il prompt originale, l’identificativo del lavoro (Job ID), la data di generazione e la firma [C2PA](what-is-c2pa-content-credentials).',
          'Queste informazioni sono memorizzate nelle intestazioni EXIF, nei blocchi XMP e nei commenti JFIF, leggibili con qualsiasi comune visualizzatore di file.',
        ],
      },
      {
        heading: 'Proteggere la proprietà intellettuale dei prompt',
        paragraphs: [
          'La formulazione meticolosa dei prompt costituisce spesso il frutto di ore di sperimentazione creativa. Condividere l’immagine originale senza pulizia significa regalare l’intera formula descrittiva a concorrenti e scraper automatici.',
        ],
      },
      {
        heading: 'Verifica preventiva e rimozione sicura',
        paragraphs: [
          'Con AI Label Remover puoi ispezionare istantaneamente il testo nascosto nell’intestazione. Con un solo clic, lo strumento rimuove il blocco commenti e le firme di tracciamento mantenendo intatta la fedeltà visiva dell’opera.',
        ],
      },
      {
        heading: 'Limiti tecnici da considerare',
        paragraphs: [
          'La rimozione dei metadati interviene sui blocchi informativi del contenitore. Non è in grado di cancellare filigrane invisibili impresse direttamente nei pattern dei pixel, come Google SynthID.',
        ],
      },
    ],
    faqHeading: 'Domande sui prompt Midjourney e DALL·E',
    faq: [
      { q: 'Chiunque può leggere il mio prompt dall’immagine pubblicata online?', a: 'Se l’immagine caricata su un sito o forum non viene ricompressa dalla piattaforma, chiunque scarichi il file originale può visualizzare il prompt nei metadati.' },
      { q: 'Tutte le versioni di Midjourney salvano il prompt nel file?', a: 'Sì, la maggior parte dei download diretti da Discord o dal portale web Midjourney include il prompt e il Job ID.' },
      { q: 'La pulizia influisce sulla gamma dinamica o sui colori?', a: 'No. Il profilo colore ICC e i valori RGB originali vengono preservati integralmente.' },
      { q: 'Posso elaborare una serie di immagini create nella stessa sessione?', a: 'Sì, [batch-remove-metadata](batch-remove-metadata) consente di trascinare fino a 50 immagini contemporaneamente per una pulizia rapida.' },
    ],
  },

  'what-is-c2pa-content-credentials': {
    metaTitle: 'Cos’è C2PA? Spiegazione semplice di Content Credentials',
    related: ['made-with-ai-label', 'hide-midjourney-dalle-prompts', 'remove-stable-diffusion-comfyui-metadata'],
    description:
      'Una panoramica chiara su C2PA e Content Credentials: cosa registra il manifest firmato, dove viene archiviato nei file e perché rimuoverlo.',
    updated: '2026-10-23',
    sections: [
      {
        heading: 'In sintesi',
        paragraphs: [
          'C2PA (Coalition for Content Provenance and Authenticity) è uno standard tecnico aperto sostenuto da aziende come Adobe, Microsoft, Google, Intel e Sony. Ha lo scopo di associare alle immagini un passaporto digitale crittograficamente firmato, denominato Content Credentials.',
          'Questo documento attesta l’autore, il dispositivo di acquisizione, l’eventuale utilizzo di modelli IA e la cronologia delle modifiche subite dal file.',
        ],
      },
      {
        heading: 'Cosa contiene un manifest C2PA',
        paragraphs: [
          'Il manifest archivia una catena di asserzioni verificate: informazioni sulla fotocamera, miniature storiche dei passaggi di editing, identificativi degli account software e firme digitali PKI.',
          'Se l’immagine è stata modificata con uno strumento generativo, il manifest lo annota espressamente, consentendo ai social network di applicare automaticamente etichette informative.',
        ],
      },
      {
        heading: 'Collocazione nei vari formati grafici',
        paragraphs: [
          'In JPEG, il manifest si trova nel segmento marcatore APP11 (formato JUMBF). Nei file PNG è collocato nel chunk caBX. Nei file HEIC e AVIF risiede in specifici box uuid ISOBMFF.',
          'Per rimuovere il manifest senza danneggiare il file, lo strumento [remove-c2pa-content-credentials](remove-c2pa-content-credentials) intercetta e rimuove specificamente queste sezioni binarie.',
        ],
      },
      {
        heading: 'Perché molti autori scelgono di rimuoverlo',
        paragraphs: [
          'Oltre a prevenire etichette ingiustificate su foto autentiche, la rimozione protegge la privacy (evitando di esporre dati dell’autore e dispositivi) e riduce il peso del file, poiché i manifest articolati possono occupare da decine a centinaia di kilobyte.',
        ],
      },
      {
        heading: 'Mantenere o cancellare: una scelta consapevole',
        paragraphs: [
          'Per fotoreporter e agenzie di stampa, Content Credentials rappresenta una garanzia di integrità. Per artisti digitali, fotografi commerciali e utenti comuni, la rimozione restituisce il pieno controllo sui propri metadati privati.',
        ],
      },
    ],
    faqHeading: 'Domande su C2PA e Content Credentials',
    faq: [
      { q: 'C2PA è una filigrana invisibile?', a: 'No. C2PA è un record di metadati memorizzato nell’intestazione del file. Non altera i valori dei pixel dell’immagine.' },
      { q: 'Quali software inseriscono attualmente C2PA?', a: 'Adobe Photoshop, Lightroom, DALL·E 3, fotocamere Leica e Nikon abilitate, oltre a vari strumenti cloud di IA.' },
      { q: 'Come verificare un file prima della pulizia?', a: 'È possibile consultare il portale ufficiale verify.contentcredentials.org o controllare la scheda C2PA in AI Label Remover.' },
      { q: 'Rimuovere C2PA riduce la risoluzione dell’immagine?', a: 'No. La rimozione estrae unicamente il blocco JUMBF/caBX lasciando i dati visivi immutati.' },
    ],
  },

  'remove-gps-location-from-photos': {
    metaTitle: 'Rimuovere la posizione GPS dalle foto su iPhone, Android e PC',
    related: ['batch-remove-metadata', 'what-is-c2pa-content-credentials', 'made-with-ai-label'],
    description:
      'Elimina le coordinate GPS dalle fotografie prima di condividerle online: scopri quali campi EXIF espongono la tua posizione e come pulirli senza perdita di qualità.',
    updated: '2026-10-23',
    sections: [
      {
        heading: 'I dati che lo smartphone registra in ogni scatto',
        paragraphs: [
          'Le fotocamere degli smartphone moderni (iPhone e Android) includono di default nei metadati EXIF la latitudine, la longitudine, l’altitudine esatta e persino la direzione della bussola al momento dello scatto.',
          'Questi dati permettono a chiunque entri in possesso del file originale di risalire con precisione all’indirizzo di casa, alla scuola dei figli o ai luoghi abitualmente frequentati.',
        ],
      },
      {
        heading: 'Come fuoriesce il file originale non protetto',
        paragraphs: [
          'Mentre alcune app di messaggistica comprimono le foto eliminando parte dell’EXIF, l’invio di immagini come “File” o “Documento”, la condivisione tramite AirDrop, Google Drive, email o la pubblicazione su blog e piattaforme di vendita online trasferisce l’immagine integrale con tutte le coordinate intatte.',
        ],
      },
      {
        heading: 'Visualizzare le coordinate prima della pulizia',
        paragraphs: [
          'Caricando la foto in AI Label Remover, la sezione EXIF mostra immediatamente se sono presenti tag GPS, evidenziando le coordinate geografiche esatte e il modello del dispositivo utilizzato.',
        ],
      },
      {
        heading: 'Rimozione sicura senza ricompressione',
        paragraphs: [
          'Lo strumento [remove-exif-data](remove-exif-data) rimuove i campi di geolocalizzazione e le informazioni hardware senza decodificare né ricomprimere i pixel JPEG o HEIC, preservando l’orientamento corretto e la nitidezza originale.',
        ],
      },
      {
        heading: 'Disattivare la geolocalizzazione nelle impostazioni di sistema',
        paragraphs: [
          'Su iPhone: Impostazioni > Privacy e sicurezza > Servizi di localizzazione > Fotocamera > Mai. Su Android: Impostazioni dell’app Fotocamera > disattivare Salva posizione.',
        ],
      },
      {
        heading: 'L’accuratezza dei dati di posizione',
        paragraphs: [
          'La combinazione di GPS satellitare, triangolazione cellulare e reti Wi-Fi consente agli smartphone di geolocalizzare la foto con un margine di errore inferiore ai 5 metri.',
        ],
      },
      {
        heading: 'I rischi concreti per la sicurezza personale',
        paragraphs: [
          'La condivisione pubblica di immagini contenenti metadati GPS espone a rischi di geolocalizzazione non consensuale, furti mirati e tracciamento delle abitudini quotidiane.',
        ],
      },
      {
        heading: 'I metadati non si limitano al solo GPS',
        paragraphs: [
          'Oltre alla posizione, i metadati possono contenere il numero di serie della fotocamera, la data e l’ora esatta al secondo e i nomi delle reti connesse.',
        ],
      },
      {
        heading: 'Controllare sempre prima della condivisione',
        paragraphs: [
          'Una rapida scansione locale tramite AI Label Remover assicura che nessun dato sensibile rimanga allegato all’immagine destinata al web.',
        ],
      },
    ],
    faqHeading: 'Domande frequenti sul GPS nelle foto',
    faq: [
      { q: 'Dopo aver pulito la foto, la posizione può essere recuperata?', a: 'No. I blocchi EXIF contenenti le coordinate vengono rimossi in modo definitivo e irreversibile.' },
      { q: 'I social network non rimuovono già il GPS automaticamente?', a: 'Molti social lo fanno per i post standard, ma forum, siti di annunci, cloud condivisi e messaggistica in modalità documento mantengono il file intatto.' },
      { q: 'Le foto HEIC di iPhone rimangono in formato HEIC?', a: 'Sì. AI Label Remover gestisce la struttura a box ISOBMFF dei file [heic-metadata-remover](heic-metadata-remover) senza forzare la conversione in JPEG.' },
      { q: 'L’orientamento della foto viene compromesso?', a: 'No. Lo strumento preserva il tag di orientamento essenziale per evitare rotazioni anomale dell’immagine.' },
    ],
  },

  'batch-remove-metadata': {
    metaTitle: 'Rimuovere metadati da più immagini contemporaneamente – Gratis',
    related: ['remove-gps-location-from-photos', 'remove-stable-diffusion-comfyui-metadata', 'hide-midjourney-dalle-prompts'],
    description:
      'Elabora fino a 50 immagini per sessione direttamente nel browser: massima velocità con i Web Worker paralleli, nessun upload su server e download in un unico archivio ZIP.',
    updated: '2026-10-23',
    sections: [
      {
        heading: 'Elaborazione in lotti completa e immediata',
        paragraphs: [
          'Quando si gestiscono intere gallerie fotografiche o cataloghi commerciali, pulire un’immagine alla volta risulta inefficiente. La modalità batch di AI Label Remover consente di trascinare fino a 50 immagini simultaneamente.',
          'I file vengono elaborati in parallelo tramite Web Worker indipendenti che sfruttano tutti i core del processore del dispositivo.',
        ],
      },
      {
        heading: 'Velocità locale senza limiti di banda',
        paragraphs: [
          'Poiché nessun dato viene trasmesso a server cloud remoti, la velocità di elaborazione dipende esclusivamente dalla potenza del tuo computer o smartphone, consentendo di trattare decine di megabyte in pochi istanti.',
        ],
      },
      {
        heading: 'Rilettura e convalida di ogni singolo file',
        paragraphs: [
          'Al termine della pulizia, il sistema rilegge automaticamente il flusso binario generato per ciascun file, certificando l’effettiva scomparsa di EXIF, GPS, C2PA e prompt prima di autorizzare il salvataggio.',
        ],
      },
      {
        heading: 'Gestione di volumi elevati e download in formato ZIP',
        paragraphs: [
          'Tutti i file ripuliti possono essere scaricati singolarmente oppure raggruppati con un clic in un pratico archivio ZIP compresso, mantenendo i nomi originali dei file.',
        ],
      },
      {
        heading: 'Massima tutela della privacy',
        paragraphs: [
          'Le immagini non abbandonano mai la memoria locale del tuo browser. Anche in caso di interruzione della connessione Internet, lo strumento continua a funzionare regolarmente offline.',
        ],
      },
    ],
    faqHeading: 'Domande sulla rimozione in lotti',
    faq: [
      { q: 'Posso combinare formati diversi nello stesso lotto?', a: 'Sì, è possibile caricare insieme file JPEG, PNG, WebP, HEIC e AVIF.' },
      { q: 'Perché è previsto un limite di 50 file per sessione?', a: 'Per garantire stabilità e prevenire saturazioni della memoria RAM nei dispositivi mobili e browser leggeri.' },
      { q: 'I nomi dei file vengono modificati durante l’esportazione ZIP?', a: 'I nomi di file originari vengono preservati fedelmente all’interno dell’archivio ZIP scaricato.' },
      { q: 'Il servizio funziona in modalità offline?', a: 'Sì, una volta aperta la pagina nel browser, il motore JavaScript esegue tutte le operazioni localmente senza richiedere accesso alla rete.' },
    ],
  },

  'image-metadata-viewer-online': {
    title: 'Visualizzatore di metadati online: EXIF, GPS, XMP, IPTC e C2PA in un unico posto',
    metaTitle: 'Visualizzatore metadati foto online: EXIF, GPS e IA',
    summary: [
      'Prima di condividere una foto o fidarti di un’immagine scaricata, un buon visualizzatore di metadati mostra tutto ciò che il file dice di sé — non solo i pochi campi visibili sullo smartphone o in Esplora file.',
      'Questa guida spiega cosa comprende un controllo completo dei metadati, dove si fermano i visualizzatori integrati, perché molti visualizzatori EXIF online sono essi stessi un rischio per la privacy e come leggere i campi che contano davvero.',
    ],
    description:
      'Visualizzatore di metadati online gratuito: vedi tutti i campi EXIF, GPS, XMP, IPTC, C2PA e i prompt IA della foto nel browser, senza caricare il file.',
    updated: '2026-11-09',
    related: ['how-to-check-if-image-is-ai-generated', 'remove-gps-location-from-photos', 'what-is-c2pa-content-credentials'],
    sections: [
      {
        heading: 'Cosa comprende un controllo completo dei metadati',
        paragraphs: ['Un visualizzatore di metadati accurato legge ogni blocco del file, non solo l’EXIF:'],
        bullets: [
          'EXIF — marca e modello di fotocamera o smartphone, esposizione, data e ora di scatto, obiettivo e orientamento.',
          'GPS — latitudine, longitudine, altitudine e direzione, se la localizzazione era attiva. Vedi anche [come rimuovere la posizione GPS dalle foto](remove-gps-location-from-photos).',
          'XMP — software di modifica, cronologia delle modifiche, descrizioni, valutazioni e campi relativi all’IA.',
          'IPTC — didascalie, parole chiave, autore, copyright e DigitalSourceType (il modo in cui è stata creata l’immagine).',
          'C2PA — [Content Credentials](what-is-c2pa-content-credentials): chi ha firmato il file, quali azioni sono state registrate e se è stata usata l’IA.',
          'Blocchi di testo PNG — [parametri di Stable Diffusion e workflow di ComfyUI](remove-stable-diffusion-comfyui-metadata) e altro testo incorporato.',
          'Profilo ICC e miniature — informazioni sul colore e anteprime nascoste.',
        ],
      },
      {
        heading: 'I visualizzatori integrati e i loro punti ciechi',
        paragraphs: [
          'Windows mostra i metadati in Proprietà › Dettagli, macOS nella finestra Info di Anteprima o in Ottieni informazioni del Finder, l’iPhone quando scorri verso l’alto sulla foto e Google Foto nel pannello delle informazioni. Per un’occhiata veloce a data, fotocamera e luogo vanno bene, ma mostrano solo una selezione dei campi EXIF e di solito ignorano del tutto XMP, IPTC, C2PA e il testo PNG. Un file può sembrare pulito in Esplora file e contenere comunque un prompt IA completo.',
        ],
      },
      {
        heading: 'Il rischio per la privacy dei visualizzatori EXIF online',
        paragraphs: [
          'Molti siti di “visualizzatore EXIF online” funzionano caricando l’immagine sul loro server, leggendola lì e restituendo un report. Per un controllo di privacy è il contrario di ciò che serve: proprio la foto che ti preoccupa — con la sua posizione GPS — è ora copiata presso terzi. Scegli un visualizzatore che legge il file in locale. Un test semplice: apri la pagina, disconnettiti da internet e verifica che lo strumento funzioni ancora.',
        ],
      },
      {
        heading: 'Leggere un file con AI Label Remover',
        paragraphs: ['Trascina l’immagine nell’area in cima a questa pagina. Il risultato è organizzato in tre schede:'],
        bullets: [
          '“Cosa rivela” — un riepilogo chiaro di luogo, persone, ora e dispositivo, con il GPS convertito in coordinate decimali.',
          '“Tracce di IA” — manifest C2PA, tipi di origine IPTC, nomi dei generatori e prompt, con un verdetto.',
          '“Metadati grezzi” — ogni campo raggruppato per origine: EXIF IFD0, Exif, GPS, namespace XMP, IPTC, C2PA e blocchi di testo PNG.',
        ],
      },
      {
        heading: 'I campi da leggere per primi',
        paragraphs: [],
        bullets: [
          'GPSLatitude / GPSLongitude — il punto esatto; incolla le coordinate in una mappa per vedere cosa rivelano.',
          'DateTimeOriginal e ModifyDate — quando è stata scattata la foto e quando è stata salvata l’ultima volta.',
          'Make, Model, BodySerialNumber, LensSerialNumber — possono collegare più foto a un unico dispositivo.',
          'Artist, Copyright, OwnerName — nomi che potresti non sapere di aver incorporato.',
          'Software e CreatorTool — quali app hanno elaborato il file, strumenti IA compresi.',
          'DigitalSourceType e il claim generator C2PA — come l’immagine dichiara di essere stata creata. Approfondisci in [come capire se un’immagine è generata dall’IA](how-to-check-if-image-is-ai-generated).',
        ],
      },
      {
        heading: 'Quando il visualizzatore non mostra quasi nulla',
        paragraphs: [
          'Un’immagine salvata dai social, uno screenshot o una foto inviata tramite app di messaggistica sono spesso stati ricompressi e privati dei metadati. In questi casi è normale trovare pochi dati o nessuno, e questo non dice nulla sul fatto che la foto sia reale, modificata o generata dall’IA. Se l’origine è importante, chiedi il file originale.',
        ],
      },
      {
        heading: 'Visualizzare non significa verificare',
        paragraphs: [
          'I metadati ordinari sono semplice testo che chiunque può modificare: trattali come un indizio, non come una prova. Il C2PA è diverso perché è firmato digitalmente, ma un visualizzatore che mostra il manifest non ne convalida la firma; per quello usa un verificatore ufficiale di Content Credentials. Quando hai visto abbastanza e vuoi eliminare i dati, premi “Rimuovi tutti i metadati”: i metadati vengono rimossi senza modificare l’immagine. La pagina [rimuovere i dati EXIF](remove-exif-data) spiega esattamente cosa viene eliminato.',
        ],
      },
    ],
    faqHeading: 'Domande sulla visualizzazione dei metadati',
    faq: [
      {
        q: 'Esiste un visualizzatore di metadati gratuito che non carica la mia foto?',
        a: 'Sì. AI Label Remover legge i file nel tuo browser, senza upload e senza account, e continua a funzionare offline una volta caricata la pagina.',
      },
      {
        q: 'Posso vedere il prompt di un’immagine creata con l’IA?',
        a: 'Sì, se il generatore l’ha salvato. I prompt di Stable Diffusion e ComfyUI si trovano nei blocchi di testo PNG, mentre alcuni servizi li scrivono nei campi XMP o EXIF.',
      },
      {
        q: 'Perché Windows non mostra i metadati del mio PNG?',
        a: 'Esplora file mostra solo poche proprietà per i PNG. Blocchi di testo, XMP e C2PA lì sono invisibili, ma compaiono in un visualizzatore completo.',
      },
      {
        q: 'I metadati possono dimostrare che una foto è falsa?',
        a: 'I metadati offrono indizi, non prove definitive. Solo i dati C2PA firmati si possono verificare in modo affidabile; i campi ordinari si modificano o si cancellano facilmente.',
      },
    ],
  },

  'how-to-check-if-image-is-ai-generated': {
    title: 'Questa immagine è stata generata dall’IA? Come controllare il file stesso',
    metaTitle: 'Come capire se un’immagine è generata dall’IA (gratis)',
    summary: [
      'L’indizio affidabile più rapido per capire se un’immagine è stata generata dall’IA si trova dentro il file: Content Credentials C2PA, il campo IPTC DigitalSourceType e il testo lasciato dal generatore spesso indicano esattamente lo strumento usato.',
      'Ecco cosa cercare, come leggerlo con uno strumento gratuito che funziona nel browser e perché non trovare nulla non dimostra mai che una foto sia autentica.',
    ],
    description:
      'Scopri se un’immagine è generata dall’IA leggendo C2PA, IPTC DigitalSourceType e i metadati del generatore nel browser — e cosa può dimostrare ogni segnale.',
    updated: '2026-11-09',
    related: ['image-metadata-viewer-online', 'what-is-c2pa-content-credentials', 'made-with-ai-label'],
    sections: [
      {
        heading: 'Procurati il file originale',
        paragraphs: [
          'I metadati sopravvivono solo nel file così come è uscito dalla fotocamera o dal generatore. Screenshot, copie risalvate e immagini prese dai social sono di solito state ricodificate e hanno perso gran parte delle informazioni. Quando puoi, chiedi l’esportazione originale — inviata “come file”, non come foto compressa.',
        ],
      },
      {
        heading: 'Primo indizio: Content Credentials (C2PA)',
        paragraphs: [
          'Gli strumenti che supportano C2PA allegano [un registro di provenienza firmato digitalmente](what-is-c2pa-content-credentials). Il suo claim generator indica l’app o il servizio che ha prodotto l’immagine, l’elenco c2pa.actions riporta passaggi come “created” o “edited” e un digitalSourceType può dichiarare direttamente la generazione con IA.',
          'Poiché il registro è firmato, un verificatore può anche stabilire se l’immagine è stata modificata dopo la firma. Un manifest proveniente da un servizio di IA è la prova più solida che i metadati possano offrire.',
        ],
      },
      {
        heading: 'Secondo indizio: IPTC DigitalSourceType',
        paragraphs: ['Molti generatori ed editor compilano un campo IPTC standard che descrive come è stato creato il contenuto. I valori che incontrerai più spesso:'],
        bullets: [
          'trainedAlgorithmicMedia — prodotto da un modello di IA generativa.',
          'compositeWithTrainedAlgorithmicMedia — una foto reale con aree generate o sostituite dall’IA, come con il Riempimento generativo di Photoshop.',
          'algorithmicMedia — creato da un algoritmo senza dati di addestramento, come l’arte procedurale.',
          'digitalCapture — scattato con una fotocamera, senza contenuti generativi dichiarati.',
        ],
      },
      {
        heading: 'Terzo indizio: prompt e nomi degli strumenti',
        paragraphs: [
          '[Le interfacce di Stable Diffusion e ComfyUI](remove-stable-diffusion-comfyui-metadata) salvano prompt, seed, modello e workflow come testo nei file PNG. Altri strumenti lasciano il proprio nome in XMP CreatorTool o EXIF Software. Ognuna di queste tracce indica chiaramente l’uso dell’IA — e spesso rivela esattamente come è stata creata l’immagine. Per questo conviene sapere [come nascondere i prompt di Midjourney e DALL·E](hide-midjourney-dalle-prompts).',
        ],
      },
      {
        heading: 'Come verificare se un’immagine è generata dall’IA',
        paragraphs: [
          'Trascina il file nell’area in cima a questa pagina. La scheda “Tracce di IA” restituisce uno di tre verdetti — “Tracce di IA trovate”, “Merita un secondo sguardo” o “Nessuna traccia di IA” — ed elenca ogni segnale con la sua origine. “Metadati grezzi” mostra i valori sottostanti. Nulla viene caricato. Per rimuovere ciò che è stato trovato, usa [AI Tag Cleaner](ai-tag-cleaner).',
        ],
      },
      {
        heading: 'Se il file non contiene metadati',
        paragraphs: [
          'L’assenza di metadati non prova nulla, in nessuna direzione: editor, app di messaggistica e social network li eliminano di continuo, e la mancanza dell’EXIF della fotocamera è al massimo un indizio debole. I passi successivi sono il controllo della filigrana offerto dal fornitore stesso (ad esempio Google SynthID per Gemini), una ricerca inversa per immagini per trovare la copia più vecchia e la verifica di dove l’immagine è apparsa per la prima volta. I rilevatori di IA basati sui pixel forniscono probabilità, non prove.',
        ],
      },
    ],
    faqHeading: 'Domande sul riconoscere le immagini create con l’IA',
    faq: [
      {
        q: 'Posso capire se un’immagine è stata creata con ChatGPT o Gemini?',
        a: 'Se il file conserva ancora le Content Credentials, il claim generator indica il servizio. Per le immagini di Gemini, anche il controllo SynthID di Google può rilevare la filigrana nei pixel.',
      },
      {
        q: 'Se AI Label Remover non trova tracce di IA, la foto è autentica?',
        a: 'Non necessariamente. Significa solo che il file non contiene metadati IA. I metadati si perdono o si rimuovono facilmente, quindi leggi un risultato pulito come “sconosciuto”, non come una prova.',
      },
      {
        q: 'Posso controllare un’immagine salvata da Instagram o Facebook?',
        a: 'Sì, ma le piattaforme di solito eliminano i metadati dalla copia pubblicata, quindi aspettati pochi dati o nessuno. L’etichetta “Info IA” della piattaforma è un segnale separato — leggi [perché le foto reali la ricevono](made-with-ai-label).',
      },
      {
        q: 'Il controllo è gratuito e rispetta la privacy?',
        a: 'Sì — gratuito, senza account, e il file viene letto in locale senza essere caricato.',
      },
    ],
  },
};

export default it;
