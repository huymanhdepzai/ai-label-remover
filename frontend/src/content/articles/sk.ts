import type { Articles } from './types';

const sk: Articles = {
  'made-with-ai-label': {
    metaTitle: 'Prečo skutočné fotky dostávajú na Instagrame štítok AI',
    related: ['what-is-c2pa-content-credentials', 'hide-midjourney-dalle-prompts', 'remove-stable-diffusion-comfyui-metadata'],
    description:
      'Skutočná fotka dostala na Instagrame či Facebooku štítok „Informácie o AI“? Príčinou býva pole C2PA alebo IPTC z editora. Ako ho nájsť a bezstratovo odstrániť.',
    updated: '2026-11-09',
    sections: [
      {
        heading: 'Štítok číta súbor, nie samotnú fotku',
        paragraphs: [
          'Štítok „Informácie o AI“ od Mety (do polovice roka 2024 nazývaný „Made with AI“) sa pridáva, keď nahratý obrázok obsahuje rozpoznané signály generatívnej AI. Dva z nich sú priamo v súbore: [manifest C2PA s Content Credentials](what-is-c2pa-content-credentials) a vlastnosť IPTC DigitalSourceType uložená v bloku XMP.',
          'Hodnota trainedAlgorithmicMedia hovorí, že celý obrázok bol vygenerovaný; compositeWithTrainedAlgorithmicMedia znamená, že skutočná fotografia obsahuje časti vytvorené AI. Obe sa dajú pri nahratí prečítať automaticky. Meta navyše používa aj ďalšie signály a žiada používateľov, aby realistický obsah z AI označovali sami, takže metadáta sú len jedným z viacerých vstupov.',
        ],
      },
      {
        heading: 'Odkiaľ sa nechcený signál berie',
        paragraphs: ['Pri skutočných fotkách štítok takmer vždy spustí editačná aplikácia, nie fotoaparát. Typické zdroje:'],
        bullets: [
          'Generatívna výplň, generatívne rozšírenie alebo nástroj na odstránenie objektov pomocou AI, ktoré môžu pridať akcie c2pa a označiť súbor ako kompozit.',
          'Export so zapnutými Content Credentials, ktorý do súboru podpíše zoznam všetkých úprav.',
          'Funkcie galérie v telefóne, napríklad AI guma, ktoré po sebe nechajú značku úpravy.',
          'Prechod súboru ďalšími aplikáciami, ktoré existujúce metadáta kopírujú ďalej, takže značka prežije niekoľko uložení.',
        ],
      },
      {
        heading: 'Nájdite konkrétne pole v AI Label Remover',
        paragraphs: [
          'Pretiahnite obrázok do nástroja. Karta „Stopy AI“ vypíše každý signál aj miesto, kde je uložený – napríklad „C2PA · compositeWithTrainedAlgorithmicMedia“ alebo „XMP · Iptc4xmpExt › DigitalSourceType“. V časti „Surové metadáta“ uvidíte skutočné hodnoty vrátane programu, ktorý manifest podpísal, a všetkých zaznamenaných akcií c2pa.',
          'Výsledok „Oplatí sa pozrieť znova“ znamená, že súbor obsahuje Content Credentials bez výslovného vyhlásenia o AI. Niektoré platformy berú aj samotný manifest ako náznak, preto sa rozhodnite ešte pred zverejnením.',
        ],
      },
      {
        heading: 'Vyčistite kópiu, ktorú zverejníte',
        paragraphs: [
          'Stlačte „Odstrániť všetky metadáta“. AI Label Remover vyreže úložisko C2PA a bloky XMP, IPTC a EXIF z bajtového prúdu a obrazové dáta, rozmery, orientáciu aj farebný profil ponechá bez zmeny. Vyčistený súbor sa znova načíta, takže pred uložením vidíte, že stopy AI zmizli. Ak máte fotiek viac, môžete ich [vyčistiť naraz](batch-remove-metadata).',
          'Nové uloženie do JPEG by metadáta tiež odstránilo, ale obrázok sa zakaždým znova skomprimuje a kvalita klesá. Vyrezanie blokov tejto strate úplne predíde.',
        ],
      },
      {
        heading: 'Opraviť chybný štítok neznamená skryť správny',
        paragraphs: [
          'Čistenie je určené pre štítky, ktoré vašu prácu opisujú nesprávne, a na ochranu súkromných údajov. Ak je obrázok úplne alebo prevažne vygenerovaný a mohol by pôsobiť ako skutočný, pravidlá platforiem zvyčajne vyžadujú, aby ste to uviedli – štítok existuje kvôli divákom. Používajte AI Label Remover na opravu chýb, nie na vydávanie syntetických obrázkov za fotografie.',
        ],
      },
    ],
    faqHeading: 'Otázky k štítku Informácie o AI',
    faq: [
      {
        q: 'Môžem štítok odstrániť až po zverejnení príspevku?',
        a: 'Úpravou príspevku zvyčajne nie. Ak štítok nesprávne opisuje skutočnú fotku, využite odvolanie alebo stav účtu na platforme, ak sú k dispozícii, a nabudúce súbor vyčistite pred zverejnením.',
      },
      {
        q: 'Zmizne štítok po vyčistení súboru zaručene?',
        a: 'Záruka nie je. Čistenie odstráni signály uložené v súbore – najčastejšiu príčinu pri upravených fotkách – ale platformy môžu používať aj inú detekciu.',
      },
      {
        q: 'Zmení sa fotka vizuálne?',
        a: 'Nie. Odstraňujú sa iba bloky metadát. Obrazové dáta sa kopírujú bajt po bajte a orientácia aj farebný profil ICC zostávajú.',
      },
      {
        q: 'Môžem ponechať nastavenia fotoaparátu a odstrániť len polia AI?',
        a: 'Zatiaľ nie. AI Label Remover odstráni všetky identifikujúce metadáta – miesto, zariadenie, autora aj pôvod z AI – naraz, čo je pre verejné zdieľanie najbezpečnejšia predvolená voľba. Rozmery, orientácia, farby a animácia zostávajú vždy zachované.',
      },
    ],
  },

  'remove-stable-diffusion-comfyui-metadata': {
    metaTitle: 'Odstránenie workflow ComfyUI a promptov SD z PNG',
    related: ['hide-midjourney-dalle-prompts', 'batch-remove-metadata', 'what-is-c2pa-content-credentials'],
    description:
      'A1111, Forge a ComfyUI zapisujú do každého PNG prompt, seed, model aj celé workflow. Pozrite si presný text a odstráňte ho bez zmeny jediného pixela.',
    updated: '2026-11-09',
    sections: [
      {
        heading: 'Vaše nastavenia cestujú s obrázkom',
        paragraphs: [
          'Lokálne generátory ukladajú svoje nastavenia ako text do výstupného súboru, aby sa obrázok dal znova vytvoriť. V súboroch PNG je tento text v chunkoch tEXt, zTXt alebo iTXt vedľa obrazových dát. Zvyčajne nájdete:',
        ],
        bullets: [
          'A1111 a Forge: chunk „parameters“ s promptom, negatívnym promptom, počtom krokov, samplerom, CFG, seedom, rozlíšením, hashom a názvom modelu a nastaveniami LoRA a rozšírení.',
          'ComfyUI: chunk „prompt“ so spusteným grafom uzlov a chunk „workflow“ s kompletným rozložením editora – po pretiahnutí PNG do ComfyUI sa celé nastavenie znova objaví.',
          'InvokeAI, NovelAI a ďalšie rozhrania: podobné dáta pod vlastnými kľúčmi.',
          'Export do JPEG alebo WebP: niektoré nástroje zapisujú rovnaký text do poľa EXIF UserComment.',
        ],
      },
      {
        heading: 'Dôvody na vyčistenie – a dôvody proti',
        paragraphs: [
          'Dáta o generovaní sú kompletný recept. Ktokoľvek podľa nich zopakuje váš štýl, zistí, na ktoré checkpointy a LoRA sa spoliehate, a vo workflow sa môžu skrývať lokálne cesty, názvy priečinkov alebo používateľské mená. Veľké grafy ComfyUI navyše pridajú k obrázku desiatky kilobajtov.',
          'Na druhej strane weby na zdieľanie modelov parametre čítajú, aby zobrazili informácie o generovaní, a spolupracovníci môžu workflow chcieť. Preto každý súbor najprv skontrolujte – AI Label Remover všetko ukáže skôr, než čokoľvek odstráni.',
        ],
      },
      {
        heading: 'Čítanie promptu v AI Label Remover',
        paragraphs: [
          'Pretiahnite PNG do nástroja. V časti „Surové metadáta“ sa každý textový chunk zobrazí pod svojím kľúčovým slovom – parameters, prompt, workflow – s celým obsahom a karta „Stopy AI“ ho označí ako prompt Stable Diffusion alebo workflow ComfyUI. Komprimované chunky zTXt a iTXt sa rozbalia priamo v prehliadači, takže si ich môžete prečítať.',
        ],
      },
      {
        heading: 'Čo čistenie zachová',
        paragraphs: [
          'Stlačte „Odstrániť všetky metadáta“. Spracovanie PNG odstráni textové chunky, XMP, EXIF a C2PA ako celé celky a zachová IHDR, IDAT, paletu, priehľadnosť, gamu, farebné chunky aj chunky animácie APNG. Keďže sa chunky odstraňujú celé, zostávajúce kontrolné súčty CRC zostávajú platné a súbor sa otvorí všade.',
          'Otvorenie a nové uloženie v editore by text tiež odstránilo, ale obrázok znova skomprimuje a môže posunúť farby. Odstránenie na úrovni bajtov sa vyhne obom. To isté platí pre [obrázky stiahnuté z Midjourney a DALL·E](hide-midjourney-dalle-prompts), kde je prompt uložený inak.',
        ],
      },
    ],
    faqHeading: 'Otázky k dátam zo Stable Diffusion a ComfyUI',
    faq: [
      {
        q: 'Ako zabrániť A1111 alebo ComfyUI v ukladaní metadát?',
        a: 'A1111 a Forge majú nastavenie, ktoré prestane zapisovať parametre generovania do PNG, a ComfyUI sa dá spustiť s prepínačom --disable-metadata. Oboje platí len pre nové obrázky, takže tie existujúce vyčistite.',
      },
      {
        q: 'Dokáže ComfyUI obnoviť workflow z vyčisteného PNG?',
        a: 'Nie. Chunky „prompt“ a „workflow“ sú preč, takže pretiahnutie súboru do ComfyUI nič neobnoví. Ak budete graf ešte potrebovať, ponechajte si nedotknutý originál.',
      },
      {
        q: 'Vyzerá vyčistené PNG úplne rovnako?',
        a: 'Áno. Chunky IDAT s komprimovanými pixelmi sa kopírujú bez zmeny, takže obrázok je pixel po pixeli rovnaký.',
      },
      {
        q: 'A čo export do JPEG a WebP?',
        a: 'Prompty uložené v EXIF UserComment alebo XMP sa rozpoznajú a odstránia aj zo súborov JPEG a WebP.',
      },
    ],
  },

  'hide-midjourney-dalle-prompts': {
    metaTitle: 'Odstránenie promptov z obrázkov Midjourney a DALL·E',
    related: ['remove-stable-diffusion-comfyui-metadata', 'made-with-ai-label', 'what-is-c2pa-content-credentials'],
    description:
      'Obrázky stiahnuté z Midjourney, DALL·E, ChatGPT a Firefly môžu obsahovať prompt, ID úlohy a pôvod z AI. Zistite, čo súbor nesie, a pred zdieľaním to odstráňte.',
    updated: '2026-11-09',
    sections: [
      {
        heading: 'Čo zapisujú online generátory',
        paragraphs: [
          'Online obrazové služby čoraz častejšie pridávajú do stiahnutých súborov metadáta – kvôli transparentnosti a podpore štandardov pôvodu. Polia sa líšia podľa služby a časom sa menia, takže jedinou spoľahlivou odpoveďou je súbor otvoriť. Môžete nájsť napríklad:',
        ],
        bullets: [
          'Midjourney: prompt a ID úlohy v poliach popisu alebo komentára, často spolu s IPTC DigitalSourceType, ktorý obrázok označuje ako vytvorený AI.',
          'DALL·E a generovanie obrázkov v ChatGPT: [C2PA Content Credentials](what-is-c2pa-content-credentials) s názvom generátora.',
          'Adobe Firefly: Content Credentials opisujúce obrázok ako vytvorený pomocou AI.',
          'Mnoho nástrojov: názov softvéru, dátum vytvorenia a občas identifikátor prepojený s účtom.',
        ],
      },
      {
        heading: 'Prompt je práca, ktorú sa oplatí chrániť',
        paragraphs: [
          'Pre ilustrátorov, dizajnérov a autorov promptov je vyladený prompt výsledkom mnohých kôl skúšania a omylov. Akýkoľvek bezplatný prehliadač metadát ukáže vložený text každému, kto si váš obrázok stiahne, pripravený na skopírovanie. ID úloh a údaje o účte navyše môžu verejný obrázok spojiť s vami.',
        ],
      },
      {
        heading: 'Najprv sa pozrite, potom čistite',
        paragraphs: [
          'Pretiahnite obrázok do nástroja a prečítajte si správu. Riadky označené „AI“ obsahujú prompty, názvy generátorov a deklarácie pôvodu; riadky „Ľudia“ obsahujú autorov, popisy a identifikátory. Stlačte „Odstrániť všetky metadáta“ a uložte čistý súbor – alebo celú dávku ako ZIP.',
          'Všetko beží vo vašom prehliadači, takže prompty, ktoré chránite, sa cestou nedostanú k ďalšej službe.',
        ],
      },
      {
        heading: 'Obmedzenia, o ktorých je dobré vedieť',
        paragraphs: [
          'Niektorí poskytovatelia skrývajú vodoznak aj priamo v pixeloch, napríklad Google SynthID. Nejde o metadáta a čistenie sa ho nedotkne. A ak zverejníte realistický obrázok z AI, pravidlá platformy môžu stále vyžadovať, aby ste to uviedli – viac o [štítku Informácie o AI](made-with-ai-label). Čistenie chráni váš pracovný postup, ale nemení, čím obrázok je.',
        ],
      },
    ],
    faqHeading: 'Otázky k metadátam z Midjourney a DALL·E',
    faq: [
      {
        q: 'Môže niekto prečítať môj prompt zo stiahnutého obrázka?',
        a: 'Ak je prompt uložený v metadátach súboru, ktokoľvek s prehliadačom metadát ho môže prečítať a skopírovať. Vyčistenie súboru pred zdieľaním ho odstráni.',
      },
      {
        q: 'Obsahuje každý obrázok stiahnutý z Midjourney prompt?',
        a: 'Závisí to od formátu a aktuálneho správania služby. Otvorte súbor v AI Label Remover a uvidíte presne, čo v ňom je.',
      },
      {
        q: 'Odstráni čistenie SynthID alebo podobné vodoznaky?',
        a: 'Nie. Neviditeľné vodoznaky sú v obrazových dátach, ktoré AI Label Remover nikdy nemení.',
      },
      {
        q: 'Môžem vyčistiť celú sériu vygenerovaných obrázkov?',
        a: 'Áno. Nahrajte až 50 obrázkov, skontrolujte správy a potom ich všetky uložte ako jeden ZIP.',
      },
    ],
  },

  'what-is-c2pa-content-credentials': {
    metaTitle: 'Čo je C2PA? Content Credentials zrozumiteľne',
    related: ['made-with-ai-label', 'hide-midjourney-dalle-prompts', 'remove-gps-location-from-photos'],
    description:
      'Zrozumiteľný sprievodca C2PA a Content Credentials: čo podpísaný manifest zaznamenáva, kde ho formáty ukladajú, ako ho prečítať a čo robí jeho odstránenie.',
    updated: '2026-11-09',
    sections: [
      {
        heading: 'Stručne',
        paragraphs: [
          'Coalition for Content Provenance and Authenticity (C2PA) spravuje otvorený štandard, ktorý k médiám pripája históriu odolnú voči nepozorovaným úpravám. Používatelia ju poznajú ako Content Credentials. Fotoaparáty, editory aj generátory AI môžu do obrázka podpísať záznam o tom, ako vznikol – odfotený fotoaparátom, upravený v aplikácii alebo vytvorený modelom.',
        ],
      },
      {
        heading: 'Ako vyzerá manifest',
        paragraphs: ['Manifest je kompaktný štruktúrovaný balík s tromi hlavnými časťami:'],
        bullets: [
          'Claim generator – softvér alebo služba, ktorá manifest vytvorila, napríklad editor alebo API pre obrázky z AI.',
          'Tvrdenia (assertions) – údaje o obsahu: c2pa.actions (vytvorené, upravené, otvorené, zmenená veľkosť atď.), digitalSourceType a odkazy na zdrojové súbory.',
          'Podpis – kryptografický podpis a certifikát identifikujúci podpisujúceho a hash, ktorý manifest viaže presne k týmto obrazovým dátam.',
        ],
      },
      {
        heading: 'Kde ho jednotlivé formáty ukladajú',
        paragraphs: [
          'Manifest je zabalený v kontajneri JUMBF, ktorý každý formát ukladá na vlastné miesto: v JPEG do segmentov APP11, v PNG do chunku caBX, vo WebP do chunku C2PA a v HEIC a AVIF do boxu uuid. Ako samostatný blok sa dá prečítať aj odstrániť bez dekódovania obrázka. AI Label Remover zobrazí blok, generátor, zaznamenané akcie aj typ zdroja, ak existujú.',
        ],
      },
      {
        heading: 'Čo odstránenie naozaj robí',
        paragraphs: [
          'Čistenie zmaže vložený záznam z danej kópie súboru. Majte na pamäti, že akákoľvek úprava už kryptografickú väzbu porušuje – overovacie nástroje hlásia manifest, ktorý nezodpovedá pixelom, ako neplatný – takže odstránením zmizne záznam, ktorý by sa inak len viezol so súborom.',
          'Niektoré systémy pridávajú „trvalé“ údaje: neviditeľný vodoznak alebo odtlačok, vďaka ktorému overovací nástroj načíta manifest z online úložiska, aj keď vložená kópia zmizla. Odstránenie metadát na ne nemá vplyv, pretože sú v pixeloch alebo na vzdialenom serveri.',
        ],
      },
      {
        heading: 'Ponechať, alebo vyčistiť?',
        paragraphs: [
          'Údaje sa hodia, keď potrebujete doložiť, odkiaľ obrázok pochádza – v žurnalistike alebo pri vlastných originálnych fotografiách. Môžu však prezradiť aj softvér, históriu úprav a identitu, ktoré by ste si radšej nechali pre seba, alebo [spustiť štítky AI pri jemne upravených fotkách](made-with-ai-label). Najprv si manifest prečítajte a rozhodnite sa pri každom súbore zvlášť.',
        ],
      },
    ],
    faqHeading: 'Otázky k C2PA',
    faq: [
      {
        q: 'Kto používa C2PA?',
        a: 'Adobe, Microsoft, Google, OpenAI, Meta, výrobcovia fotoaparátov ako Leica, Sony a Nikon a mnoho spravodajských organizácií štandard podporuje alebo je členom koalície, každý ho však využíva inak.',
      },
      {
        q: 'Je C2PA druh neviditeľného vodoznaku?',
        a: 'Nie. C2PA sú metadáta uložené vedľa obrazových dát. Vodoznaky v pixeloch, ako je SynthID, sú samostatný mechanizmus a čistenie ich neovplyvní.',
      },
      {
        q: 'Ako overiť podpis pred vyčistením?',
        a: 'AI Label Remover ukáže generátor, akcie a typ zdroja. Na úplné overenie podpisu najprv prejdite originál oficiálnym overovacím nástrojom Content Credentials.',
      },
      {
        q: 'Zníži odstránenie C2PA kvalitu?',
        a: 'Nie. Manifest je samostatný blok; komprimované obrazové dáta sa kopírujú tak, ako sú.',
      },
    ],
  },

  'remove-gps-location-from-photos': {
    metaTitle: 'Odstránenie GPS polohy z fotiek na iPhone, Androide a PC',
    related: ['batch-remove-metadata', 'what-is-c2pa-content-credentials', 'made-with-ai-label'],
    description:
      'Odstráňte GPS polohu z fotiek ešte pred zdieľaním: ktoré polia EXIF prezrádzajú miesto, zariadenie a čas, kadiaľ unikajú a ako ich bezstratovo odstrániť.',
    updated: '2026-11-09',
    sections: [
      {
        heading: 'Čo telefón vpisuje do každej fotky',
        paragraphs: ['So zapnutými polohovými službami môže bežná fotka z mobilu obsahovať:'],
        bullets: [
          'Zemepisnú šírku, dĺžku a nadmorskú výšku, často s presnosťou na pár metrov, a časovú pečiatku GPS.',
          'Presný okamih nasnímania a poslednej úpravy.',
          'Výrobcu a model, údaje o objektíve a niekedy sériové číslo alebo meno vlastníka.',
          'Vložené náhľady a sekundárne obrázky (hĺbkové mapy, obrázky MPF) s vlastnou kópiou dát EXIF.',
        ],
      },
      {
        heading: 'Ako sa originálny súbor dostane von',
        paragraphs: [
          'Veľké sociálne siete zvyčajne z publikovaného obrázka EXIF odstraňujú, no mnoho ciest doručí nedotknutý originál: „odoslať ako súbor“ v četových aplikáciách, prílohy e-mailov, zdieľané odkazy na cloud, fóra, bazáre a portfóliové weby. Jediná fotka nasnímaná doma môže prezradiť vašu adresu; séria fotiek vaše zvyky.',
        ],
      },
      {
        heading: 'Skontrolujte, akú polohu fotka prezrádza',
        paragraphs: [
          'Pretiahnite fotku do nástroja. Karta „Čo prezrádza“ hneď ukáže, či sú prítomné polia miesta, osôb a času, a polohu GPS prevedie na desatinné súradnice. „Surové metadáta“ vypíšu každé pole zoskupené podľa EXIF IFD0, Exif a GPS.',
        ],
      },
      {
        heading: 'Vyčistite bez vedľajších účinkov',
        paragraphs: [
          'Stlačte „Odstrániť všetky metadáta“. Zmizne GPS, dátumy, zariadenie, autor aj polia softvéru, spolu s vloženými miniatúrami a sekundárnymi obrázkami MPF, ktoré by inak uchovali skrytú kópiu. Značka orientácie sa zapíše späť do malého bloku EXIF, aby sa fotky na výšku neotočili, a farebný profil zostane, aby farby sedeli. Súbory HEIC z iPhonu sa čistia priamo, bez prevodu do JPEG.',
        ],
      },
      {
        heading: 'Zastavte to už vo fotoaparáte',
        paragraphs: [
          'Na iPhone: Nastavenia → Súkromie a bezpečnosť → Polohové služby → Fotoaparát → Nikdy. Na Androide sa ukladanie polohy zvyčajne dá vypnúť v nastaveniach aplikácie Fotoaparát (názov sa líši podľa výrobcu). Vyčistenie súboru pred odoslaním je napriek tomu najdôkladnejší zvyk, pretože odstráni aj údaje o zariadení, čase a náhľadoch, na ktoré nastavenia telefónu nedosiahnu.',
        ],
      },
      {
        heading: 'Aké presné sú súradnice v skutočnosti',
        paragraphs: [
          'EXIF ukladá zemepisnú šírku a dĺžku v stupňoch, minútach a sekundách a telefóny zapisujú sekundy s desatinnými miestami. Jedna sekunda zemepisnej šírky je asi 31 metrov, takže hodnota s dvoma desatinnými miestami na papieri určuje bod užší ako meter. Skutočná presnosť závisí od signálu – vonku často 3–10 metrov, vnútri horšie – no aj tak stačí na určenie jedného konkrétneho domu. Mnoho telefónov pridáva aj nadmorskú výšku, ktorá môže napovedať poschodie, a smer, ktorým objektív mieril.',
        ],
      },
      {
        heading: 'Poloha sa skrýva aj inde než v GPS',
        paragraphs: [
          'Vymazať adresár GPS nemusí stačiť. Správcovia fotiek môžu súradnice kopírovať do XMP a polia IPTC ako mesto, lokalita a krajina môžu miesto pomenovať čitateľným textom. AI Label Remover odstráni XMP a IPTC spolu s EXIF, takže zmiznú aj tieto kópie. Žiadny nástroj na metadáta však neodstráni samotný obraz: uličné tabule, čísla domov, výhľad z okna alebo odraz môžu miesto prezradiť, preto si fotku pred zverejnením prezrite.',
        ],
      },
      {
        heading: 'Rýchla kontrola pred zdieľaním',
        paragraphs: [],
        bullets: [
          'Pretiahnite fotku do AI Label Remover a pozrite sa na kartu „Čo prezrádza“.',
          'Ak sa zobrazí miesto, stlačte „Odstrániť všetky metadáta“ a uložte čistú kópiu.',
          'Overte, že zelený panel potvrdzuje odstránenie miesta, osôb a času.',
          'Prezrite si obraz kvôli viditeľným stopám – adresám, evidenčným číslam, orientačným bodom.',
          'Zdieľajte čistú kópiu a originál si nechajte vo svojej knižnici. Pri mnohých fotkách ušetrí čas [hromadné čistenie](batch-remove-metadata).',
        ],
      },
    ],
    faqHeading: 'Otázky ku GPS a súkromiu fotiek',
    faq: [
      {
        q: 'Dá sa poloha po vyčistení obnoviť?',
        a: 'Z vyčisteného súboru nie – polia sa odstránia, neskryjú. Originál v telefóne polohu stále má, preto zdieľajte len čistú kópiu.',
      },
      {
        q: 'Keď vypnem GPS, budú fotky aj tak označené?',
        a: 'Môžu byť. Telefón dokáže určiť polohu z Wi-Fi a mobilných sietí, preto vypnite prístup k polohe priamo aplikácii fotoaparátu, nielen GPS.',
      },
      {
        q: 'Neodstraňujú sociálne siete GPS aj tak samy?',
        a: 'Mnoho veľkých sietí z publikovaného obrázka EXIF odstráni. Prílohy, dokumenty a odkazy na cloud však zvyčajne pôvodné metadáta zachovajú.',
      },
      {
        q: 'Nebude fotka otočená?',
        a: 'Nie. Značka orientácie sa zachová, takže sa fotka zobrazí presne ako predtým. Súbory HEIC z iPhonu sa čistia tiež bez zmeny formátu.',
      },
    ],
  },

  'batch-remove-metadata': {
    metaTitle: 'Hromadné odstránenie metadát z obrázkov – zadarmo',
    related: ['remove-gps-location-from-photos', 'remove-stable-diffusion-comfyui-metadata', 'hide-midjourney-dalle-prompts'],
    description:
      'Vyčistite až 50 obrázkov naraz priamo v prehliadači: ako paralelné workery udržia rýchlosť, ako sa každý výsledok kontroluje a ako všetko uložiť ako jeden ZIP.',
    updated: '2026-11-09',
    sections: [
      {
        heading: 'Dávka od začiatku do konca',
        paragraphs: [],
        bullets: [
          'Pretiahnite do nástroja až 50 súborov JPG, PNG, WebP, GIF, HEIC alebo AVIF (najviac 25 MB a 40 megapixelov na súbor).',
          'Každý súbor sa načíta automaticky; kliknutím na súbor vo fronte zobrazíte jeho správu.',
          'Jedným stlačením „Odstrániť všetky metadáta“ vyčistíte všetko, čo bolo načítané.',
          'Uložte súbory jednotlivo alebo stlačte „Uložiť všetko ako ZIP“ a získate jeden archív.',
        ],
      },
      {
        heading: 'Rýchlosť bez servera',
        paragraphs: [
          'AI Label Remover rozdeľuje prácu medzi niekoľko Web Workerov – vlákien prehliadača bežiacich na pozadí – podľa počtu jadier procesora. Každý worker vezme jeden súbor, spracuje ho a vráti vyčistené bajty, takže stránka zostane plynulá aj pri náročných súboroch HEIC. ZIP používa metódu ukladania bez kompresie, pretože obrázky už komprimované sú: balenie je rýchle a neprináša ďalšiu stratu.',
        ],
      },
      {
        heading: 'Každý výsledok sa znova načíta',
        paragraphs: [
          'Po vyčistení sa každý výstup znova načíta a zelený panel výsledku potvrdí, či zmizlo miesto, osoby, čas a stopy AI. Ak majú dva súbory rovnaký názov, kópia v ZIP dostane číslo, takže sa nič neprepíše.',
        ],
      },
      {
        heading: 'Stovky súborov',
        paragraphs: [
          'Postupujte po kolách po 50 súboroch a medzi kolami upracte stôl, aby ste uvoľnili pamäť. Na telefónoch s malou pamäťou najprv zatvorte ďalšie náročné karty. Keďže sa nič nenahráva, môžete po načítaní stránky dokonca prejsť do režimu offline.',
        ],
      },
      {
        heading: 'Nič neopustí váš počítač',
        paragraphs: [
          'Žiadny obrázok sa nenahráva, neukladá ani nezaznamenáva; jediná sieťová prevádzka je načítanie samotnej stránky. Preto sa hromadné čistenie hodí na odovzdávanie klientom, nezverejnené fotenia a všetko, čo nesmiete posielať tretej strane – napríklad na [odstránenie GPS polohy z fotiek z dovolenky](remove-gps-location-from-photos) alebo na [vyčistenie promptov Stable Diffusion](remove-stable-diffusion-comfyui-metadata) z celého priečinka.',
        ],
      },
    ],
    faqHeading: 'Otázky k hromadnému čisteniu',
    faq: [
      {
        q: 'Môže jedna dávka obsahovať rôzne formáty?',
        a: 'Áno. Jedna dávka môže kombinovať JPG, PNG, WebP, GIF, HEIC a AVIF a každý súbor si ponechá svoj formát.',
      },
      {
        q: 'Prečo je limit 50 súborov?',
        a: 'Celé spracovanie využíva pamäť vášho zariadenia. Limit udržiava telefóny a staršie notebooky stabilné; kôl môžete spustiť, koľko chcete.',
      },
      {
        q: 'Zmenia sa názvy súborov?',
        a: 'Nie. Vyčistené súbory si ponechajú svoje názvy. Číselnú príponu dostanú len presné duplikáty v ZIP.',
      },
      {
        q: 'Funguje to aj offline?',
        a: 'Áno. Po načítaní stránka čistí súbory bez pripojenia, pretože sa nikam nič neodosiela.',
      },
    ],
  },
};

export default sk;
