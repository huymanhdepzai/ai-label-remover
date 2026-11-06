import type { HomeBasics } from '../pages/types';

const it: HomeBasics = {
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
    { q: 'Come si rimuovono i metadati IA da un’immagine?', a: 'Trascina l’immagine nel riquadro in cima a questa pagina e premi “Pulisci tutte le immagini”. Prima di pulire, la scheda di ogni file mostra i dati C2PA, IPTC e il prompt trovati.' },
    { q: 'È sicuro caricare qui le mie foto?', a: 'Le tue foto non vengono caricate affatto. AI Label Remover apre i file nel browser, li elabora nella memoria della scheda e salva la copia pulita direttamente sul tuo dispositivo. Una volta caricata la pagina puoi andare offline e continua a funzionare.' },
  ],
};

export default it;
