import type { Articles } from './types';

const cs: Articles = {
  'made-with-ai-label': {
    metaTitle: 'Proč skutečné fotky dostávají na Instagramu štítek AI',
    related: ['what-is-c2pa-content-credentials', 'hide-midjourney-dalle-prompts', 'remove-stable-diffusion-comfyui-metadata'],
    description:
      'Skutečná fotka dostala na Instagramu či Facebooku štítek „Informace o AI“? Příčinou bývá pole C2PA nebo IPTC z editoru. Jak ho najít a bezztrátově odstranit.',
    updated: '2026-11-09',
    sections: [
      {
        heading: 'Štítek čte soubor, ne samotnou fotku',
        paragraphs: [
          'Štítek „Informace o AI“ od Mety (do poloviny roku 2024 nazývaný „Made with AI“) se přidává, když nahraný obrázek obsahuje rozpoznané signály generativní AI. Dva z nich jsou přímo v souboru: [manifest C2PA s Content Credentials](what-is-c2pa-content-credentials) a vlastnost IPTC DigitalSourceType uložená v bloku XMP.',
          'Hodnota trainedAlgorithmicMedia říká, že celý obrázek byl vygenerován; compositeWithTrainedAlgorithmicMedia znamená, že skutečná fotografie obsahuje části vytvořené AI. Obě lze při nahrání přečíst automaticky. Meta navíc používá i další signály a žádá uživatele, aby realistický obsah z AI označovali sami, takže metadata jsou jen jedním z několika vstupů.',
        ],
      },
      {
        heading: 'Odkud se nechtěný signál bere',
        paragraphs: ['U skutečných fotek štítek téměř vždy spustí editační aplikace, ne fotoaparát. Typické zdroje:'],
        bullets: [
          'Generativní výplň, generativní rozšíření nebo nástroj na odstranění objektů pomocí AI, které mohou přidat akce c2pa a označit soubor jako kompozit.',
          'Export se zapnutými Content Credentials, který do souboru podepíše seznam všech úprav.',
          'Funkce galerie v telefonu, například AI guma, které po sobě nechají značku úpravy.',
          'Průchod souboru dalšími aplikacemi, které stávající metadata kopírují dál, takže značka přežije několik uložení.',
        ],
      },
      {
        heading: 'Najděte konkrétní pole v AI Label Remover',
        paragraphs: [
          'Přetáhněte obrázek do nástroje. Karta „Stopy AI“ vypíše každý signál i místo, kde je uložen – například „C2PA · compositeWithTrainedAlgorithmicMedia“ nebo „XMP · Iptc4xmpExt › DigitalSourceType“. V části „Surová metadata“ uvidíte skutečné hodnoty včetně programu, který manifest podepsal, a všech zaznamenaných akcí c2pa.',
          'Výsledek „Stojí za druhý pohled“ znamená, že soubor obsahuje Content Credentials bez výslovného prohlášení o AI. Některé platformy berou i samotný manifest jako náznak, proto se rozhodněte ještě před zveřejněním.',
        ],
      },
      {
        heading: 'Vyčistěte kopii, kterou zveřejníte',
        paragraphs: [
          'Stiskněte „Odstranit všechna metadata“. AI Label Remover vyřízne úložiště C2PA a bloky XMP, IPTC a EXIF z bajtového proudu a obrazová data, rozměry, orientaci i barevný profil ponechá beze změny. Vyčištěný soubor se znovu načte, takže před uložením vidíte, že stopy AI zmizely. Máte-li fotek víc, můžete je [vyčistit najednou](batch-remove-metadata).',
          'Nové uložení do JPEG by metadata také odstranilo, ale obrázek se pokaždé znovu komprimuje a kvalita klesá. Vyříznutí bloků této ztrátě úplně předchází.',
        ],
      },
      {
        heading: 'Opravit chybný štítek neznamená skrýt správný',
        paragraphs: [
          'Čištění je určeno pro štítky, které vaši práci popisují chybně, a pro ochranu soukromých údajů. Pokud je obrázek zcela nebo převážně vygenerovaný a mohl by působit jako skutečný, pravidla platforem obvykle vyžadují, abyste to uvedli – štítek existuje kvůli divákům. Používejte AI Label Remover k opravě chyb, ne k vydávání syntetických obrázků za fotografie.',
        ],
      },
    ],
    faqHeading: 'Otázky ke štítku Informace o AI',
    faq: [
      {
        q: 'Můžu štítek odstranit až po zveřejnění příspěvku?',
        a: 'Úpravou příspěvku obvykle ne. Pokud štítek chybně popisuje skutečnou fotku, využijte odvolání nebo stav účtu na platformě, je-li k dispozici, a příště soubor vyčistěte před zveřejněním.',
      },
      {
        q: 'Zmizí štítek po vyčištění souboru zaručeně?',
        a: 'Záruka není. Čištění odstraní signály uložené v souboru – nejčastější příčinu u upravených fotek – ale platformy mohou používat i jinou detekci.',
      },
      {
        q: 'Změní se fotka vizuálně?',
        a: 'Ne. Odstraňují se pouze bloky metadat. Obrazová data se kopírují bajt po bajtu a orientace i barevný profil ICC zůstávají.',
      },
      {
        q: 'Můžu ponechat nastavení fotoaparátu a odstranit jen pole AI?',
        a: 'Zatím ne. AI Label Remover odstraní všechna identifikující metadata – místo, zařízení, autora i původ z AI – najednou, což je pro veřejné sdílení nejbezpečnější výchozí volba. Rozměry, orientace, barvy a animace zůstávají vždy zachovány.',
      },
    ],
  },

  'remove-stable-diffusion-comfyui-metadata': {
    metaTitle: 'Odstranění workflow ComfyUI a promptů SD z PNG',
    related: ['hide-midjourney-dalle-prompts', 'batch-remove-metadata', 'what-is-c2pa-content-credentials'],
    description:
      'A1111, Forge a ComfyUI zapisují do každého PNG prompt, seed, model i celé workflow. Prohlédněte si přesný text a odstraňte ho, aniž byste změnili jediný pixel.',
    updated: '2026-11-09',
    sections: [
      {
        heading: 'Vaše nastavení cestují s obrázkem',
        paragraphs: [
          'Lokální generátory ukládají svá nastavení jako text do výstupního souboru, aby šel obrázek znovu vytvořit. V souborech PNG je tento text v chuncích tEXt, zTXt nebo iTXt vedle obrazových dat. Obvykle najdete:',
        ],
        bullets: [
          'A1111 a Forge: chunk „parameters“ s promptem, negativním promptem, počtem kroků, samplerem, CFG, seedem, rozlišením, hashem a názvem modelu a nastaveními LoRA a rozšíření.',
          'ComfyUI: chunk „prompt“ se spuštěným grafem uzlů a chunk „workflow“ s kompletním rozložením editoru – po přetažení PNG do ComfyUI se celé nastavení znovu objeví.',
          'InvokeAI, NovelAI a další rozhraní: podobná data pod vlastními klíči.',
          'Export do JPEG nebo WebP: některé nástroje zapisují stejný text do pole EXIF UserComment.',
        ],
      },
      {
        heading: 'Důvody k vyčištění – a důvody proti',
        paragraphs: [
          'Data o generování jsou kompletní recept. Kdokoli podle nich zopakuje váš styl, zjistí, na které checkpointy a LoRA spoléháte, a ve workflow se mohou skrývat lokální cesty, názvy složek nebo uživatelská jména. Velké grafy ComfyUI navíc přidají k obrázku desítky kilobajtů.',
          'Na druhou stranu weby pro sdílení modelů parametry čtou, aby zobrazily informace o generování, a spolupracovníci mohou workflow chtít. Proto každý soubor nejprve zkontrolujte – AI Label Remover vše ukáže dřív, než cokoli odstraní.',
        ],
      },
      {
        heading: 'Čtení promptu v AI Label Remover',
        paragraphs: [
          'Přetáhněte PNG do nástroje. V části „Surová metadata“ se každý textový chunk zobrazí pod svým klíčovým slovem – parameters, prompt, workflow – s celým obsahem a karta „Stopy AI“ ho označí jako prompt Stable Diffusion nebo workflow ComfyUI. Komprimované chunky zTXt a iTXt se rozbalí přímo v prohlížeči, takže je můžete přečíst.',
        ],
      },
      {
        heading: 'Co čištění zachová',
        paragraphs: [
          'Stiskněte „Odstranit všechna metadata“. Zpracování PNG odstraní textové chunky, XMP, EXIF a C2PA jako celé celky a zachová IHDR, IDAT, paletu, průhlednost, gamu, barevné chunky i chunky animace APNG. Protože se chunky odstraňují celé, zbývající kontrolní součty CRC zůstávají platné a soubor se otevře všude.',
          'Otevření a nové uložení v editoru by text také odstranilo, ale obrázek znovu zkomprimuje a může posunout barvy. Odstranění na úrovni bajtů se vyhne obojímu. Totéž platí pro [stažené obrázky z Midjourney a DALL·E](hide-midjourney-dalle-prompts), kde je prompt uložen jinak.',
        ],
      },
    ],
    faqHeading: 'Otázky k datům ze Stable Diffusion a ComfyUI',
    faq: [
      {
        q: 'Jak zabránit A1111 nebo ComfyUI v ukládání metadat?',
        a: 'A1111 a Forge mají nastavení, které přestane zapisovat parametry generování do PNG, a ComfyUI lze spustit s přepínačem --disable-metadata. Obojí platí jen pro nové obrázky, takže ty stávající vyčistěte.',
      },
      {
        q: 'Dokáže ComfyUI obnovit workflow z vyčištěného PNG?',
        a: 'Ne. Chunky „prompt“ a „workflow“ jsou pryč, takže přetažení souboru do ComfyUI nic neobnoví. Pokud budete graf ještě potřebovat, ponechte si nedotčený originál.',
      },
      {
        q: 'Vypadá vyčištěné PNG úplně stejně?',
        a: 'Ano. Chunky IDAT s komprimovanými pixely se kopírují beze změny, takže obrázek je pixel po pixelu stejný.',
      },
      {
        q: 'A co export do JPEG a WebP?',
        a: 'Prompty uložené v EXIF UserComment nebo XMP se rozpoznají a odstraní i ze souborů JPEG a WebP.',
      },
    ],
  },

  'hide-midjourney-dalle-prompts': {
    metaTitle: 'Odstranění promptů z obrázků Midjourney a DALL·E',
    related: ['remove-stable-diffusion-comfyui-metadata', 'made-with-ai-label', 'what-is-c2pa-content-credentials'],
    description:
      'Obrázky stažené z Midjourney, DALL·E, ChatGPT a Firefly mohou obsahovat prompt, ID úlohy a původ z AI. Zjistěte, co soubor nese, a před sdílením to odstraňte.',
    updated: '2026-11-09',
    sections: [
      {
        heading: 'Co zapisují online generátory',
        paragraphs: [
          'Online obrazové služby stále častěji přidávají do stažených souborů metadata – kvůli transparentnosti a podpoře standardů původu. Pole se liší podle služby a v čase se mění, takže jedinou spolehlivou odpovědí je soubor otevřít. Můžete najít například:',
        ],
        bullets: [
          'Midjourney: prompt a ID úlohy v polích popisu nebo komentáře, často spolu s IPTC DigitalSourceType, který obrázek označuje jako vytvořený AI.',
          'DALL·E a generování obrázků v ChatGPT: [C2PA Content Credentials](what-is-c2pa-content-credentials) s názvem generátoru.',
          'Adobe Firefly: Content Credentials popisující obrázek jako vytvořený pomocí AI.',
          'Mnoho nástrojů: název softwaru, datum vytvoření a občas identifikátor propojený s účtem.',
        ],
      },
      {
        heading: 'Prompt je práce, kterou stojí za to chránit',
        paragraphs: [
          'Pro ilustrátory, designéry a autory promptů je vyladěný prompt výsledkem mnoha kol zkoušení a omylů. Jakýkoli bezplatný prohlížeč metadat ukáže vložený text každému, kdo si váš obrázek stáhne, připravený ke zkopírování. ID úloh a údaje o účtu navíc mohou veřejný obrázek spojit s vámi.',
        ],
      },
      {
        heading: 'Nejdřív se podívejte, pak čistěte',
        paragraphs: [
          'Přetáhněte obrázek do nástroje a přečtěte si zprávu. Řádky označené „AI“ obsahují prompty, názvy generátorů a deklarace původu; řádky „Lidé“ obsahují autory, popisy a identifikátory. Stiskněte „Odstranit všechna metadata“ a uložte čistý soubor – nebo celou dávku jako ZIP.',
          'Vše běží ve vašem prohlížeči, takže prompty, které chráníte, se cestou nedostanou k další službě.',
        ],
      },
      {
        heading: 'Omezení, o kterých je dobré vědět',
        paragraphs: [
          'Někteří poskytovatelé skrývají vodoznak i přímo v pixelech, například Google SynthID. Nejde o metadata a čištění se ho nedotkne. A pokud zveřejníte realistický obrázek z AI, pravidla platformy mohou stále vyžadovat, abyste to uvedli – více o [štítku Informace o AI](made-with-ai-label). Čištění chrání váš pracovní postup, ale nemění, čím obrázek je.',
        ],
      },
    ],
    faqHeading: 'Otázky k metadatům z Midjourney a DALL·E',
    faq: [
      {
        q: 'Může někdo přečíst můj prompt ze staženého obrázku?',
        a: 'Pokud je prompt uložený v metadatech souboru, kdokoli s prohlížečem metadat ho může přečíst a zkopírovat. Vyčištění souboru před sdílením ho odstraní.',
      },
      {
        q: 'Obsahuje každý obrázek stažený z Midjourney prompt?',
        a: 'Záleží na formátu a aktuálním chování služby. Otevřete soubor v AI Label Remover a uvidíte přesně, co v něm je.',
      },
      {
        q: 'Odstraní čištění SynthID nebo podobné vodoznaky?',
        a: 'Ne. Neviditelné vodoznaky jsou v obrazových datech, která AI Label Remover nikdy nemění.',
      },
      {
        q: 'Můžu vyčistit celou sérii vygenerovaných obrázků?',
        a: 'Ano. Nahrajte až 50 obrázků, zkontrolujte zprávy a pak je všechny uložte jako jeden ZIP.',
      },
    ],
  },

  'what-is-c2pa-content-credentials': {
    metaTitle: 'Co je C2PA? Content Credentials srozumitelně',
    related: ['made-with-ai-label', 'hide-midjourney-dalle-prompts', 'remove-gps-location-from-photos'],
    description:
      'Srozumitelný průvodce C2PA a Content Credentials: co podepsaný manifest zaznamenává, kde ho formáty ukládají, jak ho přečíst a co dělá jeho odstranění.',
    updated: '2026-11-09',
    sections: [
      {
        heading: 'Stručně',
        paragraphs: [
          'Coalition for Content Provenance and Authenticity (C2PA) spravuje otevřený standard, který k médiím připojuje historii odolnou proti nepozorovaným úpravám. Uživatelé ji znají jako Content Credentials. Fotoaparáty, editory i generátory AI mohou do obrázku podepsat záznam o tom, jak vznikl – vyfocen fotoaparátem, upraven v aplikaci nebo vytvořen modelem.',
        ],
      },
      {
        heading: 'Jak vypadá manifest',
        paragraphs: ['Manifest je kompaktní strukturovaný balík se třemi hlavními částmi:'],
        bullets: [
          'Claim generator – software nebo služba, která manifest vytvořila, například editor nebo API pro obrázky z AI.',
          'Tvrzení (assertions) – údaje o obsahu: c2pa.actions (vytvořeno, upraveno, otevřeno, změněna velikost atd.), digitalSourceType a odkazy na zdrojové soubory.',
          'Podpis – kryptografický podpis a certifikát identifikující podepisujícího a hash, který manifest váže k přesně těmto obrazovým datům.',
        ],
      },
      {
        heading: 'Kde ho jednotlivé formáty ukládají',
        paragraphs: [
          'Manifest je zabalen v kontejneru JUMBF, který každý formát ukládá na vlastní místo: v JPEG do segmentů APP11, v PNG do chunku caBX, ve WebP do chunku C2PA a v HEIC a AVIF do boxu uuid. Jako samostatný blok ho lze přečíst i odstranit bez dekódování obrázku. AI Label Remover zobrazí blok, generátor, zaznamenané akce i typ zdroje, pokud existují.',
        ],
      },
      {
        heading: 'Co odstranění skutečně dělá',
        paragraphs: [
          'Čištění smaže vložený záznam z dané kopie souboru. Mějte na paměti, že jakákoli úprava už kryptografickou vazbu porušuje – ověřovací nástroje hlásí manifest, který neodpovídá pixelům, jako neplatný – takže odstraněním zmizí záznam, který by se jinak jen vezl se souborem.',
          'Některé systémy přidávají „trvalé“ údaje: neviditelný vodoznak nebo otisk, díky němuž ověřovací nástroj načte manifest z online úložiště, i když vložená kopie zmizela. Odstranění metadat na ně nemá vliv, protože jsou v pixelech nebo na vzdáleném serveru.',
        ],
      },
      {
        heading: 'Ponechat, nebo vyčistit?',
        paragraphs: [
          'Údaje se hodí, když potřebujete doložit, odkud obrázek pochází – v žurnalistice nebo u vlastních originálních fotografií. Mohou ale také prozradit software, historii úprav a identitu, které byste si raději nechali pro sebe, nebo [spustit štítky AI u lehce upravených fotek](made-with-ai-label). Nejdřív si manifest přečtěte a rozhodněte se u každého souboru zvlášť.',
        ],
      },
    ],
    faqHeading: 'Otázky k C2PA',
    faq: [
      {
        q: 'Kdo používá C2PA?',
        a: 'Adobe, Microsoft, Google, OpenAI, Meta, výrobci fotoaparátů jako Leica, Sony a Nikon a mnoho zpravodajských organizací standard podporuje nebo je členem koalice, každý ho ale využívá jinak.',
      },
      {
        q: 'Je C2PA druh neviditelného vodoznaku?',
        a: 'Ne. C2PA jsou metadata uložená vedle obrazových dat. Vodoznaky v pixelech, jako je SynthID, jsou samostatný mechanismus a čištění je neovlivní.',
      },
      {
        q: 'Jak ověřit podpis před vyčištěním?',
        a: 'AI Label Remover ukáže generátor, akce a typ zdroje. Pro úplné ověření podpisu nejprve projděte originál oficiálním ověřovacím nástrojem Content Credentials.',
      },
      {
        q: 'Sníží odstranění C2PA kvalitu?',
        a: 'Ne. Manifest je samostatný blok; komprimovaná obrazová data se kopírují tak, jak jsou.',
      },
    ],
  },

  'remove-gps-location-from-photos': {
    metaTitle: 'Odstranění GPS polohy z fotek na iPhonu, Androidu a PC',
    related: ['batch-remove-metadata', 'what-is-c2pa-content-credentials', 'made-with-ai-label'],
    description:
      'Odstraňte GPS polohu z fotek ještě před sdílením: která pole EXIF prozrazují místo, zařízení a čas, kudy unikají a jak je bezztrátově odstranit.',
    updated: '2026-11-09',
    sections: [
      {
        heading: 'Co telefon vpisuje do každé fotky',
        paragraphs: ['Se zapnutými polohovými službami může běžná fotka z mobilu obsahovat:'],
        bullets: [
          'Zeměpisnou šířku, délku a nadmořskou výšku, často s přesností na pár metrů, a časové razítko GPS.',
          'Přesný okamžik pořízení a poslední úpravy.',
          'Výrobce a model, údaje o objektivu a někdy sériové číslo nebo jméno vlastníka.',
          'Vložené náhledy a sekundární obrázky (hloubkové mapy, obrázky MPF) s vlastní kopií dat EXIF.',
        ],
      },
      {
        heading: 'Jak se originální soubor dostane ven',
        paragraphs: [
          'Velké sociální sítě obvykle z publikovaného obrázku EXIF odstraňují, ale mnoho cest doručí nedotčený originál: „odeslat jako soubor“ v chatovacích aplikacích, přílohy e-mailů, sdílené odkazy na cloud, fóra, bazary a portfoliové weby. Jediná fotka pořízená doma může prozradit vaši adresu; série fotek vaše zvyky.',
        ],
      },
      {
        heading: 'Zkontrolujte, jakou polohu fotka prozrazuje',
        paragraphs: [
          'Přetáhněte fotku do nástroje. Karta „Co prozrazuje“ hned ukáže, zda jsou přítomna pole místa, osob a času, a polohu GPS převede na desetinné souřadnice. „Surová metadata“ vypíšou každé pole seskupené podle EXIF IFD0, Exif a GPS.',
        ],
      },
      {
        heading: 'Vyčistěte bez vedlejších účinků',
        paragraphs: [
          'Stiskněte „Odstranit všechna metadata“. Zmizí GPS, data, zařízení, autor i pole softwaru, spolu s vloženými miniaturami a sekundárními obrázky MPF, které by jinak uchovaly skrytou kopii. Značka orientace se zapíše zpět do malého bloku EXIF, aby se fotky na výšku neotočily, a barevný profil zůstane, aby barvy seděly. Soubory HEIC z iPhonu se čistí přímo, bez převodu do JPEG.',
        ],
      },
      {
        heading: 'Zastavte to už ve fotoaparátu',
        paragraphs: [
          'Na iPhonu: Nastavení → Soukromí a zabezpečení → Polohové služby → Fotoaparát → Nikdy. Na Androidu lze ukládání polohy obvykle vypnout v nastavení aplikace Fotoaparát (název se liší podle výrobce). Vyčištění souboru před odesláním je přesto nejdůkladnější zvyk, protože odstraní i údaje o zařízení, čase a náhledech, na které nastavení telefonu nedosáhne.',
        ],
      },
      {
        heading: 'Jak přesné souřadnice doopravdy jsou',
        paragraphs: [
          'EXIF ukládá zeměpisnou šířku a délku ve stupních, minutách a vteřinách a telefony zapisují vteřiny s desetinnými místy. Jedna vteřina zeměpisné šířky je asi 31 metrů, takže hodnota se dvěma desetinnými místy na papíře určuje bod užší než metr. Skutečná přesnost závisí na signálu – venku často 3–10 metrů, uvnitř hůř – ale i tak stačí k určení jednoho konkrétního domu. Mnoho telefonů přidává i nadmořskou výšku, která může napovědět patro, a směr, kterým objektiv mířil.',
        ],
      },
      {
        heading: 'Poloha se skrývá i jinde než v GPS',
        paragraphs: [
          'Vymazat adresář GPS nemusí stačit. Správci fotek mohou souřadnice kopírovat do XMP a pole IPTC jako město, místo a země mohou místo pojmenovat čitelným textem. AI Label Remover odstraní XMP a IPTC spolu s EXIF, takže zmizí i tyto kopie. Žádný nástroj na metadata ale neodstraní samotný obraz: uliční cedule, čísla domů, výhled z okna nebo odraz mohou místo prozradit, proto si fotku před zveřejněním prohlédněte.',
        ],
      },
      {
        heading: 'Rychlá kontrola před sdílením',
        paragraphs: [],
        bullets: [
          'Přetáhněte fotku do AI Label Remover a podívejte se na kartu „Co prozrazuje“.',
          'Pokud se zobrazí místo, stiskněte „Odstranit všechna metadata“ a uložte čistou kopii.',
          'Ověřte, že zelený panel potvrzuje odstranění místa, osob a času.',
          'Prohlédněte si obraz kvůli viditelným vodítkům – adresám, poznávacím značkám, orientačním bodům.',
          'Sdílejte čistou kopii a originál si nechte ve své knihovně. U mnoha fotek ušetří čas [hromadné čištění](batch-remove-metadata).',
        ],
      },
    ],
    faqHeading: 'Otázky ke GPS a soukromí fotek',
    faq: [
      {
        q: 'Dá se poloha po vyčištění obnovit?',
        a: 'Z vyčištěného souboru ne – pole se odstraní, ne skryjí. Originál v telefonu polohu stále má, proto sdílejte jen čistou kopii.',
      },
      {
        q: 'Když vypnu GPS, budou fotky přesto označené?',
        a: 'Mohou být. Telefon dokáže určit polohu z Wi-Fi a mobilních sítí, proto vypněte přístup k poloze přímo aplikaci fotoaparátu, nejen GPS.',
      },
      {
        q: 'Neodstraňují sociální sítě GPS stejně samy?',
        a: 'Mnoho velkých sítí z publikovaného obrázku EXIF odstraní. Přílohy, dokumenty a odkazy na cloud ale obvykle původní metadata zachovají.',
      },
      {
        q: 'Nebude fotka otočená?',
        a: 'Ne. Značka orientace se zachová, takže se fotka zobrazí přesně jako předtím. Soubory HEIC z iPhonu se čistí také bez změny formátu.',
      },
    ],
  },

  'batch-remove-metadata': {
    metaTitle: 'Hromadné odstranění metadat z obrázků – zdarma',
    related: ['remove-gps-location-from-photos', 'remove-stable-diffusion-comfyui-metadata', 'hide-midjourney-dalle-prompts'],
    description:
      'Vyčistěte až 50 obrázků najednou přímo v prohlížeči: jak paralelní workery udržují rychlost, jak se každý výsledek kontroluje a jak vše uložit jako jeden ZIP.',
    updated: '2026-11-09',
    sections: [
      {
        heading: 'Dávka od začátku do konce',
        paragraphs: [],
        bullets: [
          'Přetáhněte do nástroje až 50 souborů JPG, PNG, WebP, GIF, HEIC nebo AVIF (nejvýše 25 MB a 40 megapixelů na soubor).',
          'Každý soubor se načte automaticky; kliknutím na soubor ve frontě zobrazíte jeho zprávu.',
          'Jedním stisknutím „Odstranit všechna metadata“ vyčistíte vše, co bylo načteno.',
          'Uložte soubory jednotlivě, nebo stiskněte „Uložit vše jako ZIP“ a získáte jeden archiv.',
        ],
      },
      {
        heading: 'Rychlost bez serveru',
        paragraphs: [
          'AI Label Remover rozděluje práci mezi několik Web Workerů – vláken prohlížeče běžících na pozadí – podle počtu jader procesoru. Každý worker vezme jeden soubor, zpracuje ho a vrátí vyčištěné bajty, takže stránka zůstane plynulá i u náročných souborů HEIC. ZIP používá metodu ukládání bez komprese, protože obrázky už komprimované jsou: balení je rychlé a nepřináší další ztrátu.',
        ],
      },
      {
        heading: 'Každý výsledek se znovu načte',
        paragraphs: [
          'Po vyčištění se každý výstup znovu načte a zelený panel výsledku potvrdí, zda zmizelo místo, osoby, čas a stopy AI. Pokud mají dva soubory stejný název, kopie v ZIP dostane číslo, takže se nic nepřepíše.',
        ],
      },
      {
        heading: 'Stovky souborů',
        paragraphs: [
          'Postupujte po kolech po 50 souborech a mezi koly ukliďte stůl, abyste uvolnili paměť. Na telefonech s malou pamětí nejprve zavřete další náročné karty. Protože se nic nenahrává, můžete po načtení stránky dokonce přejít do režimu offline.',
        ],
      },
      {
        heading: 'Nic neopustí váš počítač',
        paragraphs: [
          'Žádný obrázek se nenahrává, neukládá ani nezaznamenává; jediný síťový provoz je načtení samotné stránky. Proto se hromadné čištění hodí pro předávání klientům, nezveřejněná focení a vše, co nesmíte posílat třetí straně – třeba k [odstranění GPS polohy z fotek z dovolené](remove-gps-location-from-photos) nebo k [vyčištění promptů Stable Diffusion](remove-stable-diffusion-comfyui-metadata) z celé složky.',
        ],
      },
    ],
    faqHeading: 'Otázky k hromadnému čištění',
    faq: [
      {
        q: 'Může jedna dávka obsahovat různé formáty?',
        a: 'Ano. Jedna dávka může kombinovat JPG, PNG, WebP, GIF, HEIC a AVIF a každý soubor si ponechá svůj formát.',
      },
      {
        q: 'Proč je limit 50 souborů?',
        a: 'Veškeré zpracování využívá paměť vašeho zařízení. Limit udržuje telefony a starší notebooky stabilní; kol můžete spustit, kolik chcete.',
      },
      {
        q: 'Změní se názvy souborů?',
        a: 'Ne. Vyčištěné soubory si ponechají své názvy. Číselnou příponu dostanou jen přesné duplikáty uvnitř ZIP.',
      },
      {
        q: 'Funguje to i offline?',
        a: 'Ano. Po načtení stránka čistí soubory bez připojení, protože se nikam nic neodesílá.',
      },
    ],
  },
};

export default cs;
