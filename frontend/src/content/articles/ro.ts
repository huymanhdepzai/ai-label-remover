import type { Articles } from './types';

const ro: Articles = {
  'made-with-ai-label': {
    metaTitle: 'De ce primesc fotografiile reale eticheta AI pe Instagram',
    related: ['what-is-c2pa-content-credentials', 'hide-midjourney-dalle-prompts', 'remove-stable-diffusion-comfyui-metadata'],
    description:
      'O fotografie reală a primit eticheta „Informații AI” pe Instagram sau Facebook? Cauza e de obicei un câmp C2PA sau IPTC scris de editor. Iată cum îl elimini.',
    updated: '2026-11-09',
    sections: [
      {
        heading: 'Eticheta citește fișierul, nu fotografia',
        paragraphs: [
          'Eticheta „Informații AI” a Meta (numită „Made with AI” până la mijlocul lui 2024) apare când o imagine încărcată conține semnale recunoscute de inteligență artificială generativă. Două dintre ele se află chiar în fișier: [un manifest C2PA cu Content Credentials](what-is-c2pa-content-credentials) și proprietatea IPTC DigitalSourceType din blocul XMP.',
          'Valoarea trainedAlgorithmicMedia arată că întreaga imagine a fost generată; compositeWithTrainedAlgorithmicMedia arată că o fotografie reală conține părți create cu AI. Ambele pot fi citite automat la încărcare. Meta folosește și alte semnale și le cere utilizatorilor să declare singuri conținutul AI realist, așa că metadatele sunt doar un factor dintre mai mulți.',
        ],
      },
      {
        heading: 'De unde vine semnalul greșit',
        paragraphs: ['La fotografiile reale, eticheta este declanșată aproape mereu de aplicația de editare, nu de cameră. Surse tipice:'],
        bullets: [
          'Umplerea generativă, extinderea generativă sau instrumentele de eliminare cu AI, care pot adăuga acțiuni c2pa și pot marca fișierul drept compozit.',
          'Exportul cu Content Credentials activat, care semnează în fișier lista tuturor editărilor.',
          'Funcțiile galeriei telefonului, precum radiera AI, care lasă în urmă un marcaj de editare.',
          'Trecerea fișierului prin alte aplicații care copiază mai departe metadatele existente, astfel încât marcajul supraviețuiește mai multor salvări.',
        ],
      },
      {
        heading: 'Găsește câmpul în AI Label Remover',
        paragraphs: [
          'Trage imaginea în instrument. Fila „Urme de AI” listează fiecare semnal și locul în care se află – de exemplu „C2PA · compositeWithTrainedAlgorithmicMedia” sau „XMP · Iptc4xmpExt › DigitalSourceType”. În „Metadate brute” vezi valorile propriu-zise, inclusiv programul care a semnat manifestul și toate acțiunile c2pa înregistrate.',
          'Rezultatul „Merită privit din nou” înseamnă că fișierul conține Content Credentials fără o declarație explicită despre AI. Unele platforme tratează și simplul manifest drept indiciu, așa că decide înainte de a publica.',
        ],
      },
      {
        heading: 'Curăță copia pe care o publici',
        paragraphs: [
          'Apasă „Elimină toate metadatele”. AI Label Remover decupează din fluxul de octeți depozitul C2PA și blocurile XMP, IPTC și EXIF, lăsând neatinse datele imaginii, dimensiunea, orientarea și profilul de culoare. Fișierul curățat este citit din nou, așa că vezi înainte de salvare că urmele de AI au dispărut. Dacă ai multe imagini, le poți [curăța pe toate odată](batch-remove-metadata).',
          'Salvarea ca JPEG nou ar elimina și ea metadatele, dar recomprimă imaginea de fiecare dată și scade calitatea. Decuparea blocurilor evită complet această pierdere.',
        ],
      },
      {
        heading: 'A corecta o etichetă greșită nu înseamnă a ascunde una corectă',
        paragraphs: [
          'Curățarea este pentru etichetele care îți descriu greșit munca și pentru a păstra private datele private. Dacă o imagine este generată integral sau în mare parte și ar putea trece drept reală, regulile platformelor cer de obicei să precizezi acest lucru – eticheta există pentru a-i informa pe privitori. Folosește AI Label Remover pentru a corecta greșeli, nu pentru a prezenta imagini sintetice drept fotografii.',
        ],
      },
    ],
    faqHeading: 'Întrebări despre eticheta Informații AI',
    faq: [
      {
        q: 'Pot elimina eticheta după ce am publicat postarea?',
        a: 'De obicei nu, prin editarea postării. Dacă eticheta descrie greșit o fotografie reală, folosește opțiunile de contestare sau de stare a contului ale platformei, acolo unde există, și curăță fișierul înainte de următoarea postare.',
      },
      {
        q: 'Dispare sigur eticheta dacă curăț fișierul?',
        a: 'Nu există garanții. Curățarea elimină semnalele stocate în fișier – cauza obișnuită la fotografiile editate –, dar platformele pot folosi și altă detecție.',
      },
      {
        q: 'Se schimbă fotografia vizual?',
        a: 'Nu. Se elimină doar blocurile de metadate. Datele imaginii sunt copiate octet cu octet, iar orientarea și profilul de culoare ICC rămân.',
      },
      {
        q: 'Pot păstra setările camerei și elimina doar câmpurile AI?',
        a: 'Momentan nu. AI Label Remover elimină dintr-o singură trecere toate metadatele de identificare – locul, dispozitivul, autorul și proveniența AI –, cea mai sigură opțiune implicită pentru distribuirea publică. Dimensiunea, orientarea, culorile și animația se păstrează întotdeauna.',
      },
    ],
  },

  'remove-stable-diffusion-comfyui-metadata': {
    metaTitle: 'Elimină fluxurile ComfyUI și prompturile SD din PNG',
    related: ['hide-midjourney-dalle-prompts', 'batch-remove-metadata', 'what-is-c2pa-content-credentials'],
    description:
      'A1111, Forge și ComfyUI scriu promptul, seedul, modelul și întregul flux de lucru în fiecare PNG. Vezi textul exact și elimină-l fără să modifici niciun pixel.',
    updated: '2026-11-09',
    sections: [
      {
        heading: 'Setările tale călătoresc odată cu imaginea',
        paragraphs: [
          'Generatoarele locale își salvează setările ca text în fișierul de ieșire, ca imaginea să poată fi recreată. În fișierele PNG, textul se află în chunk-uri tEXt, zTXt sau iTXt, alături de datele imaginii. De obicei găsești:',
        ],
        bullets: [
          'A1111 și Forge: un chunk „parameters” cu promptul, promptul negativ, numărul de pași, samplerul, CFG, seedul, rezoluția, hash-ul și numele modelului, plus setările LoRA și ale extensiilor.',
          'ComfyUI: un chunk „prompt” cu graful de noduri executat și un chunk „workflow” cu întregul aranjament al editorului – trage PNG-ul în ComfyUI și toată configurația reapare.',
          'InvokeAI, NovelAI și alte interfețe: date similare sub chei proprii.',
          'Exporturi JPEG sau WebP: unele instrumente scriu același text în câmpul EXIF UserComment.',
        ],
      },
      {
        heading: 'Motive să cureți – și motive să nu o faci',
        paragraphs: [
          'Datele de generare sunt o rețetă completă. Cu ele, oricine îți poate reproduce stilul, poate vedea pe ce checkpointuri și LoRA te bazezi, iar într-un flux de lucru se pot ascunde căi locale, nume de foldere sau nume de utilizator. Grafurile ComfyUI mari pot adăuga și zeci de kilobyți la fiecare imagine.',
          'Pe de altă parte, site-urile de partajare a modelelor citesc parametrii pentru a afișa informațiile de generare, iar colaboratorii pot avea nevoie de fluxul de lucru. Verifică deci fiecare fișier mai întâi – AI Label Remover îți arată totul înainte să elimine ceva.',
        ],
      },
      {
        heading: 'Citirea promptului în AI Label Remover',
        paragraphs: [
          'Trage PNG-ul în instrument. În „Metadate brute”, fiecare chunk de text apare sub cuvântul său cheie – parameters, prompt, workflow – cu tot conținutul, iar fila „Urme de AI” îl marchează drept prompt Stable Diffusion sau flux de lucru ComfyUI. Chunk-urile comprimate zTXt și iTXt sunt decomprimate în browser, ca să le poți citi.',
        ],
      },
      {
        heading: 'Ce păstrează curățarea',
        paragraphs: [
          'Apasă „Elimină toate metadatele”. Procesarea PNG elimină chunk-urile de text, XMP, EXIF și C2PA în întregime și păstrează IHDR, IDAT, paleta, transparența, gama și chunk-urile de culoare, precum și chunk-urile animației APNG. Deoarece chunk-urile sunt eliminate întregi, sumele de control CRC rămase sunt valide și fișierul se deschide oriunde.',
          'Deschiderea și resalvarea într-un editor ar elimina și ea textul, dar recomprimă imaginea și poate deplasa culorile. Eliminarea la nivel de octet le evită pe amândouă. Același lucru e valabil pentru [descărcările din Midjourney și DALL·E](hide-midjourney-dalle-prompts), unde promptul e stocat altfel.',
        ],
      },
    ],
    faqHeading: 'Întrebări despre datele Stable Diffusion și ComfyUI',
    faq: [
      {
        q: 'Cum opresc A1111 sau ComfyUI să salveze metadate?',
        a: 'A1111 și Forge au o setare care oprește scrierea parametrilor de generare în fișierele PNG, iar ComfyUI poate fi pornit cu opțiunea --disable-metadata. Ambele se aplică doar imaginilor noi, așa că le curăță pe cele pe care le ai deja.',
      },
      {
        q: 'Poate ComfyUI reconstrui fluxul de lucru dintr-un PNG curățat?',
        a: 'Nu. Chunk-urile „prompt” și „workflow” au dispărut, așa că tragerea fișierului în ComfyUI nu restaurează nimic. Păstrează un original neatins dacă vei mai avea nevoie de graf.',
      },
      {
        q: 'PNG-ul curățat arată identic?',
        a: 'Da. Chunk-urile IDAT care conțin pixelii comprimați sunt copiate neschimbate, așa că imaginea este identică pixel cu pixel.',
      },
      {
        q: 'Dar exporturile JPEG și WebP?',
        a: 'Prompturile stocate în EXIF UserComment sau XMP sunt detectate și eliminate și din fișierele JPEG și WebP.',
      },
    ],
  },

  'hide-midjourney-dalle-prompts': {
    metaTitle: 'Elimină prompturile din imaginile Midjourney și DALL·E',
    related: ['remove-stable-diffusion-comfyui-metadata', 'made-with-ai-label', 'what-is-c2pa-content-credentials'],
    description:
      'Descărcările din Midjourney, DALL·E, ChatGPT și Firefly pot conține promptul, ID-ul sarcinii și proveniența AI. Verifică și curăță fișierul înainte de postare.',
    updated: '2026-11-09',
    sections: [
      {
        heading: 'Ce scriu generatoarele online',
        paragraphs: [
          'Serviciile online de imagini adaugă tot mai des metadate descărcărilor, pentru transparență și pentru a susține standardele de proveniență. Câmpurile diferă de la un serviciu la altul și se schimbă în timp, așa că singurul răspuns sigur este să deschizi fișierul. Poți găsi:',
        ],
        bullets: [
          'Midjourney: promptul și un ID de sarcină în câmpurile de descriere sau comentariu, adesea cu un IPTC DigitalSourceType care marchează imaginea ca fiind creată cu AI.',
          'DALL·E și generarea de imagini din ChatGPT: [C2PA Content Credentials](what-is-c2pa-content-credentials) care numesc generatorul.',
          'Adobe Firefly: Content Credentials care descriu imaginea ca generată cu AI.',
          'Multe instrumente: un nume de program, o dată de creare și uneori un identificator legat de cont.',
        ],
      },
      {
        heading: 'Un prompt este muncă ce merită protejată',
        paragraphs: [
          'Pentru ilustratori, designeri și autori de prompturi, un prompt rafinat este rezultatul multor runde de încercări. Orice vizualizator gratuit de metadate arată textul încorporat oricui îți descarcă imaginea, gata de copiat. ID-urile de sarcină și datele contului pot, în plus, lega o imagine publică de tine.',
        ],
      },
      {
        heading: 'Mai întâi uită-te, apoi curăță',
        paragraphs: [
          'Trage imaginea în instrument și citește raportul. Rândurile marcate „AI” conțin prompturi, nume de generatoare și declarații de proveniență; rândurile „Persoane” conțin autori, descrieri și identificatori. Apasă „Elimină toate metadatele” și salvează fișierul curat – sau întregul lot ca ZIP.',
          'Totul rulează în browserul tău, așa că prompturile pe care le protejezi nu ajung pe drum la încă un serviciu.',
        ],
      },
      {
        heading: 'Limite de știut',
        paragraphs: [
          'Unii furnizori ascund și filigrane în pixeli, precum SynthID de la Google. Acestea nu sunt metadate și curățarea nu le atinge. Iar dacă publici o imagine AI realistă, regulile platformei pot cere în continuare să o declari – află mai multe despre [eticheta Informații AI](made-with-ai-label). Curățarea îți protejează procesul de lucru; nu schimbă ce este imaginea.',
        ],
      },
    ],
    faqHeading: 'Întrebări despre metadatele Midjourney și DALL·E',
    faq: [
      {
        q: 'Poate cineva să-mi citească promptul dintr-o imagine descărcată?',
        a: 'Dacă promptul este stocat în metadatele fișierului, oricine are un vizualizator de metadate îl poate citi și copia. Curățarea fișierului înainte de distribuire îl elimină.',
      },
      {
        q: 'Fiecare descărcare din Midjourney conține promptul?',
        a: 'Depinde de format și de comportamentul actual al serviciului. Deschide fișierul în AI Label Remover ca să vezi exact ce conține.',
      },
      {
        q: 'Curățarea elimină SynthID sau filigrane similare?',
        a: 'Nu. Filigranele invizibile se află în datele pixelilor, pe care AI Label Remover nu le modifică niciodată.',
      },
      {
        q: 'Pot curăța o serie întreagă de generări?',
        a: 'Da. Încarcă până la 50 de imagini, verifică rapoartele, apoi salvează-le pe toate într-un singur ZIP.',
      },
    ],
  },

  'what-is-c2pa-content-credentials': {
    metaTitle: 'Ce este C2PA? Content Credentials pe înțelesul tuturor',
    related: ['made-with-ai-label', 'hide-midjourney-dalle-prompts', 'remove-gps-location-from-photos'],
    description:
      'Un ghid simplu despre C2PA și Content Credentials: ce înregistrează manifestul semnat, unde îl stochează formatele de fișiere și ce face eliminarea lui.',
    updated: '2026-11-09',
    sections: [
      {
        heading: 'Pe scurt',
        paragraphs: [
          'Coalition for Content Provenance and Authenticity (C2PA) administrează un standard deschis pentru atașarea la conținutul media a unui istoric care dezvăluie orice modificare. Utilizatorii îl văd sub numele Content Credentials. Camerele, editoarele și generatoarele AI pot semna în imagine o înregistrare despre cum a apărut aceasta – fotografiată cu o cameră, editată într-o aplicație sau produsă de un model.',
        ],
      },
      {
        heading: 'Anatomia unui manifest',
        paragraphs: ['Un manifest este un pachet compact și structurat, cu trei părți principale:'],
        bullets: [
          'Claim generator – programul sau serviciul care a creat manifestul, de exemplu un editor sau un API pentru imagini AI.',
          'Aserțiuni (assertions) – afirmații despre conținut: c2pa.actions (creat, editat, deschis, redimensionat etc.), un digitalSourceType și legături către fișierele componente.',
          'Semnătură – o semnătură criptografică și un certificat care identifică semnatarul, plus un hash care leagă manifestul exact de aceste date ale imaginii.',
        ],
      },
      {
        heading: 'Unde îl păstrează fiecare format',
        paragraphs: [
          'Manifestul este împachetat într-un container JUMBF pe care fiecare format îl stochează în locul său: segmente APP11 în JPEG, un chunk caBX în PNG, un chunk C2PA în WebP și o casetă uuid în HEIC și AVIF. Fiind un bloc separat, poate fi citit și eliminat fără decodarea imaginii. AI Label Remover afișează blocul, generatorul, acțiunile înregistrate și tipul sursei, atunci când există.',
        ],
      },
      {
        heading: 'Ce face de fapt eliminarea',
        paragraphs: [
          'Curățarea șterge înregistrarea încorporată din acea copie a fișierului. Ține minte că orice editare rupe deja legătura criptografică – verificatoarele raportează drept invalid un manifest care nu mai corespunde pixelilor –, așa că eliminarea șterge o înregistrare care altfel ar călători doar împreună cu fișierul.',
          'Unele sisteme adaugă date „durabile”: un filigran invizibil sau o amprentă care permite unui verificator să preia manifestul dintr-un depozit online chiar și după ce copia încorporată a dispărut. Eliminarea metadatelor nu le afectează, pentru că se află în pixeli sau pe un server la distanță.',
        ],
      },
      {
        heading: 'Păstrezi sau cureți?',
        paragraphs: [
          'Datele sunt utile când trebuie să arăți de unde provine o imagine – în jurnalism sau pentru propriile fotografii originale. Ele pot însă dezvălui programe, istoric de editare și identitate pe care ai prefera să le păstrezi pentru tine, sau pot [declanșa etichete AI pe fotografii ușor editate](made-with-ai-label). Citește mai întâi manifestul și decide pentru fiecare fișier.',
        ],
      },
    ],
    faqHeading: 'Întrebări despre C2PA',
    faq: [
      {
        q: 'Cine folosește C2PA?',
        a: 'Adobe, Microsoft, Google, OpenAI, Meta, producători de camere precum Leica, Sony și Nikon și multe organizații de presă susțin standardul sau fac parte din coaliție, deși fiecare îl folosește diferit.',
      },
      {
        q: 'Este C2PA un fel de filigran invizibil?',
        a: 'Nu. C2PA înseamnă metadate stocate alături de datele imaginii. Filigranele din pixeli, precum SynthID, sunt un mecanism separat și nu sunt afectate de curățare.',
      },
      {
        q: 'Cum verific semnătura înainte de curățare?',
        a: 'AI Label Remover arată generatorul, acțiunile și tipul sursei. Pentru validarea completă a semnăturii, trece mai întâi originalul printr-un verificator oficial Content Credentials.',
      },
      {
        q: 'Eliminarea C2PA scade calitatea?',
        a: 'Nu. Manifestul este un bloc separat; datele comprimate ale imaginii sunt copiate ca atare.',
      },
    ],
  },

  'remove-gps-location-from-photos': {
    metaTitle: 'Elimină locația GPS din fotografii pe iPhone, Android și PC',
    related: ['batch-remove-metadata', 'what-is-c2pa-content-credentials', 'made-with-ai-label'],
    description:
      'Elimină locația GPS din fotografii înainte de partajare: ce câmpuri EXIF dezvăluie locul, dispozitivul și ora, pe unde scapă și cum le elimini fără pierderi.',
    updated: '2026-11-09',
    sections: [
      {
        heading: 'Ce scrie telefonul în fiecare fotografie',
        paragraphs: ['Cu serviciile de localizare activate, o fotografie obișnuită de pe telefon poate conține:'],
        bullets: [
          'Latitudinea, longitudinea și altitudinea, adesea cu o precizie de câțiva metri, plus o marcă temporală GPS.',
          'Momentul exact în care a fost făcută și editată ultima dată.',
          'Producătorul și modelul, detalii despre obiectiv și uneori un număr de serie sau numele proprietarului.',
          'Previzualizări încorporate și imagini secundare (hărți de adâncime, imagini MPF) cu propria copie a datelor EXIF.',
        ],
      },
      {
        heading: 'Cum ajunge fișierul original în afară',
        paragraphs: [
          'Marile fluxuri sociale elimină de obicei EXIF din ce publică, dar multe căi livrează originalul neatins: „trimite ca fișier” în aplicațiile de chat, atașamentele de e-mail, linkurile partajate din cloud, forumurile, site-urile de anunțuri și portofoliile online. O singură fotografie făcută acasă îți poate dezvălui adresa; o serie îți poate dezvălui rutina.',
        ],
      },
      {
        heading: 'Verifică ce locație dezvăluie fotografia',
        paragraphs: [
          'Trage fotografia în instrument. Fila „Ce dezvăluie” arată imediat dacă există câmpuri de loc, persoane și timp, iar poziția GPS este convertită în coordonate zecimale. „Metadate brute” listează fiecare câmp, grupat pe EXIF IFD0, Exif și GPS.',
        ],
      },
      {
        heading: 'Curăță fără efecte secundare',
        paragraphs: [
          'Apasă „Elimină toate metadatele”. Dispar câmpurile GPS, datele, dispozitivul, autorul și programul, împreună cu miniaturile încorporate și imaginile secundare MPF care altfel ar păstra o copie ascunsă. Eticheta de orientare este rescrisă într-un mic bloc EXIF, ca fotografiile verticale să nu se rotească, iar profilul de culoare se păstrează, ca nuanțele să rămână fidele. Fișierele HEIC de pe iPhone sunt curățate direct, fără conversie în JPEG.',
        ],
      },
      {
        heading: 'Oprește totul încă de la cameră',
        paragraphs: [
          'Pe iPhone: Configurări → Confidențialitate și securitate → Servicii de localizare → Cameră → Niciodată. Pe Android, etichetarea locației se poate dezactiva de obicei din setările aplicației Cameră (denumirea diferă în funcție de producător). Curățarea fișierului înainte de trimitere rămâne totuși obiceiul cel mai temeinic, pentru că elimină și datele despre dispozitiv, oră și previzualizări la care setările telefonului nu ajung.',
        ],
      },
      {
        heading: 'Cât de precise sunt de fapt coordonatele',
        paragraphs: [
          'EXIF stochează latitudinea și longitudinea în grade, minute și secunde, iar telefoanele înregistrează secundele cu zecimale. O secundă de latitudine înseamnă aproximativ 31 de metri, așa că o valoare cu două zecimale indică, pe hârtie, un punct mai îngust de un metru. Precizia reală depinde de semnal – adesea 3–10 metri în aer liber, mai slabă în interior –, dar e suficientă pentru a identifica o singură casă. Multe telefoane adaugă și altitudinea, care poate sugera etajul, și direcția busolei spre care era orientat obiectivul.',
        ],
      },
      {
        heading: 'Locația se ascunde și în afara etichetelor GPS',
        paragraphs: [
          'Golirea directorului GPS nu este întotdeauna suficientă. Aplicațiile de gestionare a fotografiilor pot copia coordonatele în XMP, iar câmpurile IPTC precum oraș, zonă și țară pot numi locul în text clar. AI Label Remover elimină XMP și IPTC odată cu EXIF, așa că dispar și aceste copii. Ce nu poate elimina niciun instrument de metadate este imaginea în sine: plăcuțele cu nume de străzi, numerele caselor, priveliștea de la o fereastră sau o reflexie pot trăda locul, așa că privește fotografia înainte de a o publica.',
        ],
      },
      {
        heading: 'O verificare rapidă înainte de distribuire',
        paragraphs: [],
        bullets: [
          'Trage fotografia în AI Label Remover și uită-te la fila „Ce dezvăluie”.',
          'Dacă apare un loc, apasă „Elimină toate metadatele” și salvează copia curată.',
          'Verifică dacă panoul verde confirmă că locul, persoanele și timpul au dispărut.',
          'Uită-te în imagine după indicii vizibile – adrese, numere de înmatriculare, repere.',
          'Distribuie copia curată și păstrează originalul în propria bibliotecă. Pentru multe fotografii, [curățarea în lot](batch-remove-metadata) economisește timp.',
        ],
      },
    ],
    faqHeading: 'Întrebări despre GPS și confidențialitatea fotografiilor',
    faq: [
      {
        q: 'Poate fi recuperată locația după curățare?',
        a: 'Nu din fișierul curățat – câmpurile sunt eliminate, nu ascunse. Originalul de pe telefon are în continuare locația, așa că distribuie doar copia curată.',
      },
      {
        q: 'Dacă opresc GPS-ul, fotografiile mai sunt etichetate?',
        a: 'Pot fi. Telefonul poate determina poziția din rețelele Wi-Fi și mobile, așa că dezactivează accesul la locație pentru aplicația camerei, nu doar GPS-ul.',
      },
      {
        q: 'Nu elimină rețelele sociale oricum GPS-ul?',
        a: 'Multe rețele mari elimină EXIF din imaginea publicată. Atașamentele, documentele și linkurile din cloud păstrează de obicei metadatele originale.',
      },
      {
        q: 'Fotografia va apărea rotită?',
        a: 'Nu. Eticheta de orientare se păstrează, așa că fotografia se afișează exact ca înainte. Fișierele HEIC de pe iPhone sunt și ele curățate fără schimbarea formatului.',
      },
    ],
  },

  'batch-remove-metadata': {
    metaTitle: 'Elimină metadatele din mai multe imagini simultan – gratuit',
    related: ['remove-gps-location-from-photos', 'remove-stable-diffusion-comfyui-metadata', 'hide-midjourney-dalle-prompts'],
    description:
      'Curăță până la 50 de imagini odată în browser: cum păstrează viteza workerii paraleli, cum e verificat fiecare rezultat și cum salvezi tot lotul într-un ZIP.',
    updated: '2026-11-09',
    sections: [
      {
        heading: 'Un lot de la început până la sfârșit',
        paragraphs: [],
        bullets: [
          'Trage în instrument până la 50 de fișiere JPG, PNG, WebP, GIF, HEIC sau AVIF (cel mult 25 MB și 40 de megapixeli fiecare).',
          'Fiecare fișier este citit automat; dă clic pe un fișier din coadă pentru a-i vedea raportul.',
          'Apasă o singură dată „Elimină toate metadatele” pentru a curăța tot ce a fost citit.',
          'Salvează fișierele unul câte unul sau apasă „Salvează tot ca ZIP” pentru o singură arhivă.',
        ],
      },
      {
        heading: 'Viteză fără server',
        paragraphs: [
          'AI Label Remover împarte munca între mai mulți Web Workers – fire de execuție din fundal ale browserului – în funcție de numărul de nuclee ale procesorului. Fiecare worker preia un fișier, îl analizează și returnează octeții curățați, așa că pagina rămâne fluidă chiar și cu fișiere HEIC mari. Arhiva ZIP folosește metoda de stocare fără compresie, deoarece imaginile sunt deja comprimate: împachetarea e rapidă și nu adaugă nicio pierdere.',
        ],
      },
      {
        heading: 'Fiecare rezultat este citit din nou',
        paragraphs: [
          'După curățare, fiecare fișier rezultat este citit din nou, iar panoul verde de rezultat confirmă dacă locul, persoanele, timpul și urmele de AI au dispărut. Dacă două fișiere au același nume, copia din ZIP primește un număr, ca nimic să nu fie suprascris.',
        ],
      },
      {
        heading: 'Sute de fișiere',
        paragraphs: [
          'Lucrează în runde de câte 50 și strânge masa între runde pentru a elibera memoria. Pe telefoanele cu puțină memorie, închide mai întâi alte file solicitante. Pentru că nimic nu este încărcat, poți chiar să lucrezi offline după ce pagina s-a încărcat.',
        ],
      },
      {
        heading: 'Nimic nu părăsește dispozitivul',
        paragraphs: [
          'Nicio imagine nu este încărcată, stocată sau înregistrată; singurul trafic de rețea este încărcarea paginii. De aceea, curățarea în lot se potrivește pentru livrări către clienți, ședințe foto nepublicate și orice nu ai voie să trimiți unei terțe părți – de exemplu pentru a [elimina locația GPS din pozele de vacanță](remove-gps-location-from-photos) sau a [curăța prompturile Stable Diffusion](remove-stable-diffusion-comfyui-metadata) dintr-un folder întreg.',
        ],
      },
    ],
    faqHeading: 'Întrebări despre curățarea în lot',
    faq: [
      {
        q: 'Poate un lot să combine formate diferite?',
        a: 'Da. Un lot poate combina JPG, PNG, WebP, GIF, HEIC și AVIF, iar fiecare fișier își păstrează formatul.',
      },
      {
        q: 'De ce limita este de 50 de fișiere?',
        a: 'Toată procesarea folosește memoria dispozitivului. Limita menține stabile telefoanele și laptopurile mai vechi; poți rula oricâte runde dorești.',
      },
      {
        q: 'Se schimbă numele fișierelor?',
        a: 'Nu. Fișierele curățate își păstrează numele. Doar duplicatele exacte din ZIP primesc un sufix numeric.',
      },
      {
        q: 'Funcționează offline?',
        a: 'Da. După încărcare, pagina curăță fișierele fără conexiune, pentru că nu trimite nimic nicăieri.',
      },
    ],
  },
};

export default ro;
