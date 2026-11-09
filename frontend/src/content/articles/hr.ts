import type { Articles } from './types';

const hr: Articles = {
  'made-with-ai-label': {
    metaTitle: 'Zašto stvarne fotografije dobiju oznaku AI na Instagramu',
    related: ['what-is-c2pa-content-credentials', 'hide-midjourney-dalle-prompts', 'remove-stable-diffusion-comfyui-metadata'],
    description:
      'Stvarna fotografija dobila je oznaku „Informacije o AI-ju” na Instagramu ili Facebooku? Uzrok je obično C2PA ili IPTC polje iz uređivača. Evo kako ga ukloniti.',
    updated: '2026-11-09',
    sections: [
      {
        heading: 'Oznaka čita datoteku, a ne sam prizor',
        paragraphs: [
          'Metina oznaka „Informacije o AI-ju” (do sredine 2024. zvala se „Made with AI”) dodaje se kada prenesena slika sadrži prepoznate signale generativne umjetne inteligencije. Dva se nalaze u samoj datoteci: [C2PA manifest s Content Credentials](what-is-c2pa-content-credentials) i svojstvo IPTC DigitalSourceType spremljeno u XMP bloku.',
          'Vrijednost trainedAlgorithmicMedia znači da je cijela slika generirana; compositeWithTrainedAlgorithmicMedia znači da stvarna fotografija sadrži dijelove izrađene AI-jem. Obje se mogu automatski pročitati pri prijenosu. Meta koristi i druge signale te traži od korisnika da sami označe realističan AI sadržaj, pa su metapodaci samo jedan od više čimbenika.',
        ],
      },
      {
        heading: 'Odakle dolazi pogrešan signal',
        paragraphs: ['Kod stvarnih fotografija oznaku gotovo uvijek pokrene aplikacija za uređivanje, a ne fotoaparat. Tipični izvori:'],
        bullets: [
          'Generativno popunjavanje, generativno proširenje ili alat za uklanjanje objekata pomoću AI-ja, koji mogu dodati c2pa radnje i označiti datoteku kao kompozit.',
          'Izvoz s uključenim Content Credentials, koji u datoteku potpisuje popis svih izmjena.',
          'Funkcije galerije na telefonu, poput AI gumice, koje iza sebe ostavljaju oznaku uređivanja.',
          'Prolazak datoteke kroz druge aplikacije koje postojeće metapodatke kopiraju dalje, pa oznaka preživi nekoliko spremanja.',
        ],
      },
      {
        heading: 'Pronađite polje u alatu AI Label Remover',
        paragraphs: [
          'Ispustite sliku u alat. Kartica „Tragovi AI-ja” navodi svaki signal i mjesto na kojem se nalazi – primjerice „C2PA · compositeWithTrainedAlgorithmicMedia” ili „XMP · Iptc4xmpExt › DigitalSourceType”. U prikazu „Sirovi metapodaci” vidite stvarne vrijednosti, uključujući program koji je potpisao manifest i sve zabilježene c2pa radnje.',
          'Rezultat „Vrijedi još jednom pogledati” znači da datoteka ima Content Credentials bez izričite izjave o AI-ju. Neke platforme i sam manifest smatraju naznakom, stoga odlučite prije objave.',
        ],
      },
      {
        heading: 'Očistite kopiju koju objavljujete',
        paragraphs: [
          'Pritisnite „Ukloni sve metapodatke”. AI Label Remover izrezuje C2PA spremište te XMP, IPTC i EXIF blokove iz toka bajtova, a slikovne podatke, dimenzije, orijentaciju i profil boja ostavlja netaknutima. Očišćena datoteka ponovno se čita, pa prije spremanja vidite da su tragovi AI-ja nestali. Ako imate mnogo slika, možete ih [očistiti odjednom](batch-remove-metadata).',
          'Ponovno spremanje kao novi JPEG također bi uklonilo metapodatke, ali svaki put ponovno sažima sliku i smanjuje kvalitetu. Izrezivanje blokova potpuno izbjegava taj gubitak.',
        ],
      },
      {
        heading: 'Ispraviti pogrešnu oznaku nije isto što i sakriti točnu',
        paragraphs: [
          'Čišćenje je namijenjeno oznakama koje pogrešno opisuju vaš rad i zaštiti privatnih podataka. Ako je slika u potpunosti ili većim dijelom generirana i mogla bi proći kao stvarna, pravila platformi obično očekuju da to navedete – oznaka postoji radi gledatelja. Koristite AI Label Remover za ispravljanje pogrešaka, a ne za predstavljanje sintetičkih slika kao fotografija.',
        ],
      },
    ],
    faqHeading: 'Pitanja o oznaci Informacije o AI-ju',
    faq: [
      {
        q: 'Mogu li ukloniti oznaku nakon objave?',
        a: 'Uređivanjem objave obično ne. Ako oznaka pogrešno opisuje stvarnu fotografiju, iskoristite mogućnosti žalbe ili statusa računa na platformi, ako postoje, i sljedeći put očistite datoteku prije objave.',
      },
      {
        q: 'Hoće li oznaka sigurno nestati ako očistim datoteku?',
        a: 'Jamstva nema. Čišćenje uklanja signale spremljene u datoteci – najčešći uzrok kod uređenih fotografija – ali platforme mogu koristiti i drugu detekciju.',
      },
      {
        q: 'Mijenja li se fotografija vizualno?',
        a: 'Ne. Uklanjaju se samo blokovi metapodataka. Slikovni podaci kopiraju se bajt po bajt, a orijentacija i ICC profil boja ostaju.',
      },
      {
        q: 'Mogu li zadržati postavke fotoaparata i ukloniti samo AI polja?',
        a: 'Zasad ne. AI Label Remover u jednom prolazu uklanja sve identifikacijske metapodatke – mjesto, uređaj, autora i AI podrijetlo – što je najsigurnija zadana postavka za javno dijeljenje. Dimenzije, orijentacija, boje i animacija uvijek se zadržavaju.',
      },
    ],
  },

  'remove-stable-diffusion-comfyui-metadata': {
    metaTitle: 'Uklonite ComfyUI tijekove rada i SD promptove iz PNG-a',
    related: ['hide-midjourney-dalle-prompts', 'batch-remove-metadata', 'what-is-c2pa-content-credentials'],
    description:
      'A1111, Forge i ComfyUI upisuju prompt, seed, model i cijeli tijek rada u svaki PNG. Pogledajte točan tekst i uklonite ga bez promjene ijednog piksela.',
    updated: '2026-11-09',
    sections: [
      {
        heading: 'Vaše postavke putuju sa slikom',
        paragraphs: [
          'Lokalni generatori spremaju svoje postavke kao tekst u izlaznu datoteku kako bi se slika mogla ponovno izraditi. U PNG datotekama taj se tekst nalazi u tEXt, zTXt ili iTXt chunkovima pokraj slikovnih podataka. Obično ćete pronaći:',
        ],
        bullets: [
          'A1111 i Forge: chunk „parameters” s promptom, negativnim promptom, brojem koraka, samplerom, CFG-om, seedom, rezolucijom, hashom i nazivom modela te postavkama LoRA-e i proširenja.',
          'ComfyUI: chunk „prompt” s izvršenim grafom čvorova i chunk „workflow” s cijelim rasporedom uređivača – ispustite PNG u ComfyUI i cijela se postava ponovno pojavi.',
          'InvokeAI, NovelAI i druga sučelja: slični podaci pod vlastitim ključevima.',
          'Izvoz u JPEG ili WebP: neki alati isti tekst zapisuju u polje EXIF UserComment.',
        ],
      },
      {
        heading: 'Razlozi za čišćenje – i razlozi protiv',
        paragraphs: [
          'Podaci o generiranju potpun su recept. Svatko može ponoviti vaš stil, vidjeti na koje se checkpointove i LoRA-e oslanjate, a u tijeku rada mogu se skrivati lokalne putanje, nazivi mapa ili korisnička imena. Veliki ComfyUI grafovi mogu uz to dodati desetke kilobajta po slici.',
          'S druge strane, stranice za dijeljenje modela čitaju parametre kako bi prikazale podatke o generiranju, a suradnici možda žele tijek rada. Zato svaku datoteku najprije provjerite – AI Label Remover sve prikaže prije nego što išta ukloni.',
        ],
      },
      {
        heading: 'Čitanje prompta u alatu AI Label Remover',
        paragraphs: [
          'Ispustite PNG u alat. U prikazu „Sirovi metapodaci” svaki se tekstualni chunk prikazuje pod svojom ključnom riječi – parameters, prompt, workflow – s cijelim sadržajem, a kartica „Tragovi AI-ja” označava ga kao Stable Diffusion prompt ili ComfyUI tijek rada. Sažeti zTXt i iTXt chunkovi raspakiravaju se u pregledniku kako biste ih mogli pročitati.',
        ],
      },
      {
        heading: 'Što čišćenje zadržava',
        paragraphs: [
          'Pritisnite „Ukloni sve metapodatke”. Obrada PNG-a uklanja tekstualne, XMP, EXIF i C2PA chunkove kao cjeline i zadržava IHDR, IDAT, paletu, prozirnost, gamu i chunkove boja te chunkove APNG animacije. Budući da se chunkovi uklanjaju cijeli, preostali CRC zbrojevi ostaju valjani i datoteka se otvara posvuda.',
          'Otvaranje i ponovno spremanje u uređivaču također bi uklonilo tekst, ali ponovno sažima sliku i može pomaknuti boje. Uklanjanje na razini bajtova izbjegava oboje. Isto vrijedi za [preuzimanja iz Midjourneyja i DALL·E-a](hide-midjourney-dalle-prompts), gdje je prompt spremljen na druge načine.',
        ],
      },
    ],
    faqHeading: 'Pitanja o podacima iz Stable Diffusiona i ComfyUI-ja',
    faq: [
      {
        q: 'Kako spriječiti da A1111 ili ComfyUI spremaju metapodatke?',
        a: 'A1111 i Forge imaju postavku koja prestaje zapisivati parametre generiranja u PNG datoteke, a ComfyUI se može pokrenuti sa zastavicom --disable-metadata. Oboje vrijedi samo za nove slike, pa očistite one koje već imate.',
      },
      {
        q: 'Može li ComfyUI obnoviti tijek rada iz očišćenog PNG-a?',
        a: 'Ne. Chunkovi „prompt” i „workflow” su nestali, pa povlačenje datoteke u ComfyUI ništa ne vraća. Zadržite netaknuti original ako će vam graf ponovno trebati.',
      },
      {
        q: 'Izgleda li očišćeni PNG isto?',
        a: 'Da. IDAT chunkovi sa sažetim pikselima kopiraju se nepromijenjeni, pa je slika identična piksel po piksel.',
      },
      {
        q: 'Što je s izvozom u JPEG i WebP?',
        a: 'Promptovi spremljeni u EXIF UserComment ili XMP prepoznaju se i uklanjaju i iz JPEG i WebP datoteka.',
      },
    ],
  },

  'hide-midjourney-dalle-prompts': {
    metaTitle: 'Uklonite promptove iz Midjourney i DALL·E slika',
    related: ['remove-stable-diffusion-comfyui-metadata', 'made-with-ai-label', 'what-is-c2pa-content-credentials'],
    description:
      'Preuzimanja iz Midjourneyja, DALL·E-a, ChatGPT-a i Fireflyja mogu sadržavati vaš prompt, ID zadatka i AI podrijetlo. Provjerite i uklonite prije dijeljenja.',
    updated: '2026-11-09',
    sections: [
      {
        heading: 'Što upisuju mrežni generatori',
        paragraphs: [
          'Mrežne usluge za slike sve češće dodaju metapodatke preuzimanjima, radi transparentnosti i podrške standardima podrijetla. Polja se razlikuju od usluge do usluge i mijenjaju se s vremenom, pa je jedini pouzdan odgovor otvoriti datoteku. Možete pronaći:',
        ],
        bullets: [
          'Midjourney: prompt i ID zadatka u poljima opisa ili komentara, često uz IPTC DigitalSourceType koji sliku označava kao izrađenu AI-jem.',
          'DALL·E i generiranje slika u ChatGPT-u: [C2PA Content Credentials](what-is-c2pa-content-credentials) s nazivom generatora.',
          'Adobe Firefly: Content Credentials koje sliku opisuju kao izrađenu pomoću AI-ja.',
          'Mnogi alati: naziv softvera, datum izrade i ponekad identifikator povezan s računom.',
        ],
      },
      {
        heading: 'Prompt je rad koji vrijedi čuvati',
        paragraphs: [
          'Za ilustratore, dizajnere i autore promptova dorađen prompt rezultat je mnogih krugova pokušaja i pogrešaka. Bilo koji besplatni preglednik metapodataka prikazat će ugrađeni tekst svakome tko preuzme vašu sliku, spreman za kopiranje. ID-jevi zadataka i podaci o računu mogu uz to javnu sliku povezati s vama.',
        ],
      },
      {
        heading: 'Najprije pogledajte, a zatim očistite',
        paragraphs: [
          'Ispustite sliku u alat i pročitajte izvješće. Retci označeni s „AI” sadrže promptove, nazive generatora i izjave o podrijetlu; retci „Osobe” sadrže autore, opise i identifikatore. Pritisnite „Ukloni sve metapodatke” i spremite čistu datoteku – ili cijelu skupinu kao ZIP.',
          'Sve se izvodi u vašem pregledniku, pa promptovi koje štitite usput ne završe kod još jedne usluge.',
        ],
      },
      {
        heading: 'Ograničenja koja treba znati',
        paragraphs: [
          'Neki pružatelji usluga skrivaju vodeni žig i u samim pikselima, primjerice Googleov SynthID. To nisu metapodaci i čišćenje ih ne dira. A ako objavite realističnu AI sliku, pravila platforme i dalje mogu zahtijevati da to navedete – više o [oznaci Informacije o AI-ju](made-with-ai-label). Čišćenje štiti vaš postupak rada, ali ne mijenja ono što slika jest.',
        ],
      },
    ],
    faqHeading: 'Pitanja o metapodacima iz Midjourneyja i DALL·E-a',
    faq: [
      {
        q: 'Može li netko pročitati moj prompt iz preuzete slike?',
        a: 'Ako je prompt spremljen u metapodacima datoteke, svatko s preglednikom metapodataka može ga pročitati i kopirati. Čišćenje datoteke prije dijeljenja uklanja ga.',
      },
      {
        q: 'Sadrži li svako preuzimanje iz Midjourneyja prompt?',
        a: 'Ovisi o formatu i trenutačnom ponašanju usluge. Otvorite datoteku u alatu AI Label Remover kako biste vidjeli točno što sadrži.',
      },
      {
        q: 'Uklanja li čišćenje SynthID ili slične vodene žigove?',
        a: 'Ne. Nevidljivi vodeni žigovi nalaze se u podacima piksela, koje AI Label Remover nikad ne mijenja.',
      },
      {
        q: 'Mogu li očistiti cijeli niz generiranih slika?',
        a: 'Da. Učitajte do 50 slika, provjerite izvješća i zatim ih sve spremite kao jednu ZIP datoteku.',
      },
    ],
  },

  'what-is-c2pa-content-credentials': {
    metaTitle: 'Što je C2PA? Content Credentials jednostavno objašnjeno',
    related: ['made-with-ai-label', 'hide-midjourney-dalle-prompts', 'remove-gps-location-from-photos'],
    description:
      'Jednostavan vodič kroz C2PA i Content Credentials: što potpisani manifest bilježi, gdje ga formati datoteka spremaju i što znači njegovo uklanjanje.',
    updated: '2026-11-09',
    sections: [
      {
        heading: 'Ukratko',
        paragraphs: [
          'Coalition for Content Provenance and Authenticity (C2PA) održava otvoreni standard za pridruživanje povijesti otporne na neprimjetne izmjene medijima. Korisnici ga vide kao Content Credentials. Fotoaparati, uređivači i AI generatori mogu u sliku potpisati zapis o tome kako je nastala – snimljena fotoaparatom, uređena u aplikaciji ili izrađena modelom.',
        ],
      },
      {
        heading: 'Građa manifesta',
        paragraphs: ['Manifest je sažet, strukturiran paket s tri glavna dijela:'],
        bullets: [
          'Claim generator – softver ili usluga koja je izradila manifest, primjerice uređivač ili API za AI slike.',
          'Tvrdnje (assertions) – izjave o sadržaju: c2pa.actions (izrađeno, uređeno, otvoreno, promijenjena veličina i slično), digitalSourceType i poveznice na izvorne datoteke.',
          'Potpis – kriptografski potpis i certifikat koji identificira potpisnika te hash koji manifest veže upravo uz te slikovne podatke.',
        ],
      },
      {
        heading: 'Gdje ga koji format sprema',
        paragraphs: [
          'Manifest je zapakiran u JUMBF spremnik koji svaki format sprema na svoje mjesto: u JPEG-u u APP11 segmente, u PNG-u u caBX chunk, u WebP-u u C2PA chunk, a u HEIC i AVIF datotekama u uuid kutiju. Kao zaseban blok može se pročitati i ukloniti bez dekodiranja slike. AI Label Remover prikazuje blok, generator, zabilježene radnje i vrstu izvora kad postoje.',
        ],
      },
      {
        heading: 'Što uklanjanje zapravo radi',
        paragraphs: [
          'Čišćenje briše ugrađeni zapis iz te kopije datoteke. Imajte na umu da svaka izmjena već prekida kriptografsku vezu – alati za provjeru prijavljuju manifest koji više ne odgovara pikselima kao nevaljan – pa uklanjanje briše zapis koji bi inače samo putovao s datotekom.',
          'Neki sustavi dodaju „trajne” podatke: nevidljivi vodeni žig ili otisak koji alatu za provjeru omogućuje da manifest dohvati iz mrežnog repozitorija i nakon što ugrađena kopija nestane. Uklanjanje metapodataka na njih ne utječe jer se nalaze u pikselima ili na udaljenom poslužitelju.',
        ],
      },
      {
        heading: 'Zadržati ili očistiti?',
        paragraphs: [
          'Podaci su korisni kada morate pokazati odakle slika potječe – u novinarstvu ili za vlastite izvorne fotografije. No mogu otkriti i softver, povijest uređivanja i identitet koje biste radije zadržali za sebe, ili [pokrenuti AI oznake na blago uređenim fotografijama](made-with-ai-label). Najprije pročitajte manifest i odlučite za svaku datoteku zasebno.',
        ],
      },
    ],
    faqHeading: 'Pitanja o C2PA-u',
    faq: [
      {
        q: 'Tko koristi C2PA?',
        a: 'Adobe, Microsoft, Google, OpenAI, Meta, proizvođači fotoaparata poput Leice, Sonyja i Nikona te mnoge novinske organizacije podržavaju standard ili su članovi koalicije, iako ga svatko koristi drukčije.',
      },
      {
        q: 'Je li C2PA vrsta nevidljivog vodenog žiga?',
        a: 'Ne. C2PA su metapodaci spremljeni pokraj slikovnih podataka. Vodeni žigovi u pikselima, poput SynthID-a, zaseban su mehanizam i čišćenje na njih ne utječe.',
      },
      {
        q: 'Kako provjeriti potpis prije čišćenja?',
        a: 'AI Label Remover prikazuje generator, radnje i vrstu izvora. Za potpunu provjeru potpisa najprije provucite original kroz službeni alat za provjeru Content Credentials.',
      },
      {
        q: 'Smanjuje li uklanjanje C2PA-a kvalitetu?',
        a: 'Ne. Manifest je zaseban blok; sažeti slikovni podaci kopiraju se kakvi jesu.',
      },
    ],
  },

  'remove-gps-location-from-photos': {
    metaTitle: 'Uklonite GPS lokaciju sa slika na iPhoneu, Androidu i PC-u',
    related: ['batch-remove-metadata', 'what-is-c2pa-content-credentials', 'made-with-ai-label'],
    description:
      'Uklonite GPS lokaciju s fotografija prije dijeljenja: koja EXIF polja otkrivaju mjesto, uređaj i vrijeme, kuda cure i kako ih ukloniti bez gubitka kvalitete.',
    updated: '2026-11-09',
    sections: [
      {
        heading: 'Što telefon upisuje u svaku snimku',
        paragraphs: ['Uz uključene usluge lokacije obična fotografija s mobitela može sadržavati:'],
        bullets: [
          'Geografsku širinu, dužinu i nadmorsku visinu, često s točnošću od nekoliko metara, te GPS vremensku oznaku.',
          'Točan trenutak snimanja i posljednjeg uređivanja.',
          'Proizvođača i model, podatke o objektivu i ponekad serijski broj ili ime vlasnika.',
          'Ugrađene preglede i sekundarne slike (karte dubine, MPF slike) s vlastitom kopijom EXIF podataka.',
        ],
      },
      {
        heading: 'Kako izvorna datoteka izlazi van',
        paragraphs: [
          'Velike društvene mreže obično uklanjaju EXIF iz objavljene slike, ali mnogi putevi isporučuju netaknuti original: „pošalji kao datoteku” u aplikacijama za dopisivanje, privitci e-pošte, dijeljene poveznice na oblak, forumi, oglasnici i portfeljne stranice. Jedna fotografija snimljena kod kuće može otkriti vašu adresu; niz fotografija vašu dnevnu rutinu.',
        ],
      },
      {
        heading: 'Provjerite koju lokaciju fotografija otkriva',
        paragraphs: [
          'Ispustite fotografiju u alat. Kartica „Što otkriva” odmah pokazuje postoje li polja mjesta, osoba i vremena, a GPS položaj pretvara u decimalne koordinate. „Sirovi metapodaci” navode svako polje grupirano po EXIF IFD0, Exif i GPS.',
        ],
      },
      {
        heading: 'Čišćenje bez nuspojava',
        paragraphs: [
          'Pritisnite „Ukloni sve metapodatke”. Nestaju GPS, datumi, uređaj, autor i polja softvera, zajedno s ugrađenim minijaturama i sekundarnim MPF slikama koje bi inače zadržale skrivenu kopiju. Oznaka orijentacije ponovno se upisuje u mali EXIF blok kako se uspravne fotografije ne bi okrenule postrance, a profil boja ostaje kako bi boje bile vjerne. HEIC datoteke s iPhonea čiste se izravno, bez pretvorbe u JPEG.',
        ],
      },
      {
        heading: 'Zaustavite to već u fotoaparatu',
        paragraphs: [
          'Na iPhoneu: Postavke → Privatnost i sigurnost → Lokacijske usluge → Kamera → Nikad. Na Androidu se označavanje lokacije obično isključuje u postavkama aplikacije Kamera (naziv se razlikuje ovisno o proizvođaču). Čišćenje datoteke prije slanja ipak je najtemeljitija navika jer uklanja i podatke o uređaju, vremenu i pregledima do kojih postavke telefona ne sežu.',
        ],
      },
      {
        heading: 'Koliko su koordinate zapravo precizne',
        paragraphs: [
          'EXIF sprema geografsku širinu i dužinu u stupnjevima, minutama i sekundama, a telefoni bilježe sekunde s decimalama. Jedna sekunda geografske širine iznosi oko 31 metar, pa vrijednost s dvije decimale na papiru označava točku užu od metra. Stvarna točnost ovisi o signalu – na otvorenom često 3–10 metara, u zatvorenom lošija – ali i to je dovoljno da se prepozna jedna kuća. Mnogi telefoni dodaju i nadmorsku visinu, koja može upućivati na kat, te smjer u kojem je objektiv bio okrenut.',
        ],
      },
      {
        heading: 'Lokacija se skriva i izvan GPS oznaka',
        paragraphs: [
          'Brisanje GPS direktorija nije uvijek dovoljno. Upravitelji fotografija mogu koordinate kopirati u XMP, a IPTC polja poput grada, lokaliteta i države mogu mjesto imenovati čitljivim tekstom. AI Label Remover uz EXIF uklanja i XMP i IPTC, pa nestaju i te kopije. Ono što nijedan alat za metapodatke ne može ukloniti jest sama slika: ulične ploče, kućni brojevi, pogled s prozora ili odraz mogu otkriti mjesto, stoga pregledajte fotografiju prije objave.',
        ],
      },
      {
        heading: 'Brza provjera prije dijeljenja',
        paragraphs: [],
        bullets: [
          'Ispustite fotografiju u AI Label Remover i pogledajte karticu „Što otkriva”.',
          'Ako je navedeno mjesto, pritisnite „Ukloni sve metapodatke” i spremite čistu kopiju.',
          'Provjerite potvrđuje li zelena ploča da su mjesto, osobe i vrijeme uklonjeni.',
          'Pregledajte sliku zbog vidljivih tragova – adresa, registarskih pločica, orijentira.',
          'Podijelite čistu kopiju, a original zadržite u svojoj zbirci. Kod mnogo fotografija [skupno čišćenje](batch-remove-metadata) štedi vrijeme.',
        ],
      },
    ],
    faqHeading: 'Pitanja o GPS-u i privatnosti fotografija',
    faq: [
      {
        q: 'Može li se lokacija vratiti nakon čišćenja?',
        a: 'Iz očišćene datoteke ne – polja se uklanjaju, a ne skrivaju. Original na vašem telefonu i dalje ima lokaciju, stoga dijelite samo čistu kopiju.',
      },
      {
        q: 'Ako isključim GPS, hoće li fotografije ipak biti označene?',
        a: 'Mogu biti. Telefon može odrediti položaj putem Wi-Fi i mobilnih mreža, stoga isključite pristup lokaciji samoj aplikaciji za kameru, a ne samo GPS.',
      },
      {
        q: 'Zar društvene mreže ionako ne uklanjaju GPS?',
        a: 'Mnoge velike mreže uklanjaju EXIF iz objavljene slike. Privitci, dokumenti i poveznice na oblak obično zadržavaju izvorne metapodatke.',
      },
      {
        q: 'Hoće li fotografija biti zakrenuta?',
        a: 'Ne. Oznaka orijentacije se čuva, pa se fotografija prikazuje točno kao prije. HEIC datoteke s iPhonea također se čiste bez promjene formata.',
      },
    ],
  },

  'batch-remove-metadata': {
    metaTitle: 'Skupno uklanjanje metapodataka sa slika – besplatno',
    related: ['remove-gps-location-from-photos', 'remove-stable-diffusion-comfyui-metadata', 'hide-midjourney-dalle-prompts'],
    description:
      'Očistite do 50 slika odjednom u pregledniku: kako paralelni workeri održavaju brzinu, kako se svaki rezultat provjerava i kako sve spremiti u jedan ZIP.',
    updated: '2026-11-09',
    sections: [
      {
        heading: 'Skupina od početka do kraja',
        paragraphs: [],
        bullets: [
          'Ispustite u alat do 50 JPG, PNG, WebP, GIF, HEIC ili AVIF datoteka (najviše 25 MB i 40 megapiksela po datoteci).',
          'Svaka se datoteka čita automatski; kliknite datoteku u redu da biste vidjeli njezino izvješće.',
          'Jednim pritiskom na „Ukloni sve metapodatke” očistite sve što je pročitano.',
          'Spremite datoteke jednu po jednu ili pritisnite „Spremi sve kao ZIP” za jednu arhivu.',
        ],
      },
      {
        heading: 'Brzina bez poslužitelja',
        paragraphs: [
          'AI Label Remover raspoređuje posao na nekoliko Web Workera – pozadinskih niti preglednika – prema broju jezgri procesora. Svaki worker uzima jednu datoteku, obrađuje je i vraća očišćene bajtove, pa stranica ostaje glatka i s teškim HEIC datotekama. ZIP koristi način pohrane bez sažimanja jer su slike već sažete: pakiranje je brzo i ne donosi dodatni gubitak.',
        ],
      },
      {
        heading: 'Svaki se rezultat ponovno čita',
        paragraphs: [
          'Nakon čišćenja svaki se izlaz ponovno čita, a zelena ploča rezultata potvrđuje jesu li mjesto, osobe, vrijeme i tragovi AI-ja nestali. Ako dvije datoteke imaju isti naziv, kopija u ZIP-u dobiva broj, pa se ništa ne prepisuje.',
        ],
      },
      {
        heading: 'Stotine datoteka',
        paragraphs: [
          'Radite u krugovima od 50 i između krugova raspremite stol kako biste oslobodili memoriju. Na telefonima s malo memorije najprije zatvorite druge zahtjevne kartice. Budući da se ništa ne prenosi, nakon učitavanja stranice možete čak raditi i izvan mreže.',
        ],
      },
      {
        heading: 'Ništa ne napušta računalo',
        paragraphs: [
          'Nijedna slika ne prenosi se, ne sprema niti bilježi; jedini mrežni promet je učitavanje same stranice. Zato je skupno čišćenje prikladno za predaju klijentima, neobjavljena snimanja i sve što ne smijete slati trećoj strani – primjerice za [uklanjanje GPS lokacije s fotografija s odmora](remove-gps-location-from-photos) ili [čišćenje Stable Diffusion promptova](remove-stable-diffusion-comfyui-metadata) iz cijele mape.',
        ],
      },
    ],
    faqHeading: 'Pitanja o skupnom čišćenju',
    faq: [
      {
        q: 'Može li jedna skupina miješati različite formate?',
        a: 'Da. Jedna skupina može kombinirati JPG, PNG, WebP, GIF, HEIC i AVIF, a svaka datoteka zadržava vlastiti format.',
      },
      {
        q: 'Zašto je granica 50 datoteka?',
        a: 'Sva obrada koristi memoriju vašeg uređaja. Ograničenje održava telefone i starija prijenosna računala stabilnima; krugova možete pokrenuti koliko god želite.',
      },
      {
        q: 'Mijenjaju li se nazivi datoteka?',
        a: 'Ne. Očišćene datoteke zadržavaju svoje nazive. Samo potpuni duplikati unutar ZIP-a dobivaju brojčani nastavak.',
      },
      {
        q: 'Radi li izvan mreže?',
        a: 'Da. Nakon učitavanja stranica čisti datoteke bez veze jer se ništa nikamo ne šalje.',
      },
    ],
  },
};

export default hr;
