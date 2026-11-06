import type { HomeBasics } from '../pages/types';

const ro: HomeBasics = {
  reassure: 'Online, gratuit, fără cont și fără instalare — fotografiile sunt citite și curățate direct în browser și nu sunt încărcate niciodată pe un server.',
  sources: {
    label: 'Citește și elimină metadatele din imagini create cu',
    note: 'Numele produselor indică doar proveniența imaginilor; AI Label Remover nu este afiliat acestor companii.',
  },
  learn: {
    what: {
      title: 'Ce sunt metadatele?',
      paragraphs: [
        'Metadatele sunt „date despre date”: notițe păstrate în interiorul unui fișier imagine, care nu apar niciodată în fotografie. Aparatele foto, telefoanele, editoarele foto și generatoarele de imagini AI le adaugă automat, de obicei fără să te anunțe.',
        'În fotografii, metadatele se împart în cinci mari grupe. Fiecare răspunde la o altă întrebare despre imagine — și despre persoana care a făcut-o sau a creat-o.',
      ],
      types: [
        { name: 'Descriptive', text: 'Titlu, descriere, cuvinte cheie, numele persoanelor din imagine.', example: 'IPTC Caption, XMP dc:title' },
        { name: 'Tehnice', text: 'Marca și modelul aparatului, obiectivul, diafragma, timpul de expunere, ISO, numărul de serie.', example: 'EXIF Make, Model, BodySerialNumber' },
        { name: 'Loc și timp', text: 'Coordonate GPS, altitudine, data fotografierii și fusul orar.', example: 'EXIF GPSLatitude, DateTimeOriginal' },
        { name: 'Drepturi și administrare', text: 'Autor, proprietar, drepturi de autor, ultimul program de editare.', example: 'EXIF Artist, Copyright, Software' },
        { name: 'Proveniență și AI', text: 'Content Credentials, etichete „creat cu AI”, prompturi și workflow-uri.', example: 'C2PA manifest, IPTC DigitalSourceType' },
      ],
      synonyms:
        'Vei întâlni multe nume pentru aceeași operațiune — „eliminator de metadate”, „șterge EXIF”, „curățare metadate”, „scoate informațiile din poză” — și toate înseamnă scoaterea notițelor ascunse din fișier fără a schimba imaginea. La fel, un „vizualizator”, „cititor” sau „verificator de metadate” arată ce se află în fișier. AI Label Remover le face pe amândouă.',
    },
    why: {
      title: 'De ce să vezi și să elimini metadatele înainte de a distribui o fotografie?',
      paragraphs: [
        'Un singur câmp de metadate este de obicei inofensiv, dar împreună spun multe despre tine. O fotografie făcută acasă și publicată pe un site de anunțuri poate conține coordonate GPS precise la câțiva metri; imaginile trimise prin e-mail sau link în cloud păstrează tot ce a scris aparatul. Vezi [cum poate GPS-ul din poze să-ți dezvăluie adresa](remove-gps-location-from-photos).',
        'Pentru imaginile create sau editate cu AI, metadatele decid și dacă o platformă afișează eticheta „Creat cu AI” și pot dezvălui întregul prompt pe care l-ai scris. Află [de unde vine eticheta „Made with AI”](made-with-ai-label).',
      ],
      bullets: [
        'Dezvăluirea locului unde locuiești, lucrezi sau călătorești prin coordonatele GPS.',
        'Legarea multor fotografii de aceeași persoană prin numărul de serie al aparatului sau numele proprietarului.',
        'Expunerea prompturilor, seed-urilor, modelelor și workflow-urilor pe care voiai să le păstrezi private.',
        'Primirea unei etichete AI de la o platformă din cauza datelor C2PA sau IPTC atașate.',
      ],
    },
    standards: {
      title: 'Standarde de metadate frecvente în fotografii',
      lead: 'Un singur fișier imagine poate conține simultan mai multe „compartimente” de metadate, fiecare după alt standard. AI Label Remover le citește și le elimină pe toate cele de mai jos.',
      items: [
        { name: 'EXIF', text: 'Scris de aparate foto și telefoane: setări de expunere, dispozitiv, marcaje de timp, GPS, miniaturi.' },
        { name: 'XMP', text: 'Formatul XML al Adobe pentru istoricul editărilor, evaluări, cuvinte cheie și multe proprietăți legate de AI.' },
        { name: 'IPTC', text: 'Standardul redacțiilor: descriere, autor, drepturi de autor și câmpul DigitalSourceType care declară imaginile AI.' },
        { name: 'C2PA', text: 'Content Credentials semnate criptografic care înregistrează cum a fost creat și editat un fișier. [Ce este C2PA](what-is-c2pa-content-credentials).' },
        { name: 'PNG text', text: 'Chunk-urile tEXt, iTXt și zTXt în care [Stable Diffusion și ComfyUI](remove-stable-diffusion-comfyui-metadata) salvează prompturi și workflow-uri.' },
      ],
    },
  },
  security: {
    title: 'Fotografiile tale rămân în siguranță',
    lead: 'La orice instrument care lucrează cu fișiere personale, prima întrebare este „unde ajung fotografiile mele?”. Răspunsul AI Label Remover: nicăieri.',
    items: [
      { title: '100% pe dispozitivul tău', text: 'Citirea și curățarea rulează într-un Web Worker din fila browserului. Niciun server nu primește vreodată fișierele tale.' },
      { title: 'Nimic stocat, fără antrenare AI', text: 'Deoarece fotografiile nu sunt trimise nicăieri, nu există nicio copie care să fie stocată, scursă sau folosită la antrenarea unui model.' },
      { title: 'Funcționează offline', text: 'Încarcă pagina, oprește Wi-Fi-ul și spală un fișier — funcționează în continuare. Fila Rețea din DevTools nu arată date de imagine care pleacă.' },
      { title: 'Fără cont, fără urmărire', text: 'Fără înregistrare, fără analiză, reclame sau pixeli terți. Site-ul reține doar limba și tema pe care le alegi.' },
    ],
  },
  faq: [
    { q: 'Care este diferența dintre EXIF și metadate?', a: 'EXIF este un tip de metadate — cel scris de aparatele foto și telefoane. „Metadate” este termenul mai larg și include și XMP, IPTC, C2PA și chunk-urile text din PNG.' },
    { q: 'Pot metadatele să arate unde a fost făcută o fotografie?', a: 'Da, dacă imaginea are etichete GPS. Telefoanele înregistrează de obicei latitudinea, longitudinea și altitudinea când camera are acces la locație. Spălarea elimină aceste etichete fără să afecteze calitatea. Vezi [cum elimini locația GPS din fotografii](remove-gps-location-from-photos).' },
    { q: 'Cum elimin metadatele AI dintr-o imagine?', a: 'Plasează imaginea în caseta din partea de sus a paginii și apasă „Spală toate imaginile”. Înainte de spălare, fișa fiecărui fișier arată datele C2PA, IPTC și promptul găsite.' },
    { q: 'Este sigur să încarc aici fotografiile mele?', a: 'Fotografiile tale nu sunt încărcate deloc. AI Label Remover deschide fișierele în browser, le procesează în memoria filei și salvează copia curată direct pe dispozitivul tău. După ce pagina s-a încărcat, poți trece offline și continuă să funcționeze.' },
  ],
};

export default ro;
