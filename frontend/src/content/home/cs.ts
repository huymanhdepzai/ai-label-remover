import type { HomeBasics } from '../pages/types';

const cs: HomeBasics = {
  reassure: 'Online, zdarma, bez registrace a bez instalace — fotky se čtou a čistí přímo v prohlížeči a nikdy se nenahrávají na server.',
  sources: {
    label: 'Čte a odstraňuje metadata z obrázků vytvořených v',
    note: 'Názvy produktů jen uvádějí, odkud obrázky pocházejí; AI Label Remover s těmito společnostmi není spojen.',
  },
  learn: {
    what: {
      title: 'Co jsou metadata?',
      paragraphs: [
        'Metadata jsou „data o datech“: poznámky uložené uvnitř souboru obrázku, které na samotné fotce nikdy neuvidíte. Fotoaparáty, telefony, editory fotek i generátory obrázků s AI je přidávají automaticky, většinou bez upozornění.',
        'U fotek se metadata dělí do pěti velkých skupin. Každá odpovídá na jinou otázku o obrázku — a o člověku, který ho pořídil nebo vytvořil.',
      ],
      types: [
        { name: 'Popisná', text: 'Název, popisek, klíčová slova, jména lidí na snímku.', example: 'IPTC Caption, XMP dc:title' },
        { name: 'Technická', text: 'Značka a model fotoaparátu, objektiv, clona, čas závěrky, ISO, sériové číslo.', example: 'EXIF Make, Model, BodySerialNumber' },
        { name: 'Místo a čas', text: 'Souřadnice GPS, nadmořská výška, datum pořízení a časové pásmo.', example: 'EXIF GPSLatitude, DateTimeOriginal' },
        { name: 'Práva a správa', text: 'Autor, vlastník, autorská práva, naposledy použitý editační software.', example: 'EXIF Artist, Copyright, Software' },
        { name: 'Původ a AI', text: 'Content Credentials, štítky „vytvořeno pomocí AI“, prompty a workflow.', example: 'C2PA manifest, IPTC DigitalSourceType' },
      ],
      synonyms:
        'Stejná práce má mnoho názvů — „odstraňovač metadat“, „smazat EXIF“, „čistič metadat“, „odstranit informace z fotky“ — a všechny znamenají vyjmout ze souboru skryté poznámky, aniž by se změnil obraz. Podobně „prohlížeč“, „čtečka“ nebo „kontrola metadat“ ukáže, co v souboru je. AI Label Remover umí obojí.',
    },
    why: {
      title: 'Proč si před sdílením fotky prohlédnout a odstranit metadata?',
      paragraphs: [
        'Jedno pole metadat je obvykle neškodné, ale dohromady o vás prozradí hodně. Fotka pořízená doma a vložená na inzertní server může nést souřadnice GPS s přesností na několik metrů; obrázky poslané e-mailem nebo odkazem z cloudu si ponechají vše, co fotoaparát zapsal. Přečtěte si, [jak GPS ve fotkách může prozradit vaši adresu](remove-gps-location-from-photos).',
        'U obrázků vytvořených nebo upravených pomocí AI rozhodují metadata také o tom, zda platforma zobrazí štítek „Vytvořeno pomocí AI“, a mohou odhalit celý prompt, který jste napsali. Podívejte se, [odkud se bere štítek „Made with AI“](made-with-ai-label).',
      ],
      bullets: [
        'Prozrazení, kde bydlíte, pracujete nebo cestujete, díky souřadnicím GPS.',
        'Propojení mnoha fotek s jednou osobou přes sériové číslo fotoaparátu nebo jméno vlastníka.',
        'Odhalení promptů, seedů, modelů a workflow, které jste chtěli mít v soukromí.',
        'Štítek AI od platformy kvůli přiloženým datům C2PA nebo IPTC.',
      ],
    },
    standards: {
      title: 'Běžné standardy metadat ve fotkách',
      lead: 'Jeden soubor obrázku může obsahovat několik „přihrádek“ metadat najednou, každou podle jiného standardu. AI Label Remover čte a odstraňuje všechny níže uvedené.',
      items: [
        { name: 'EXIF', text: 'Zapisují ho fotoaparáty a telefony: nastavení expozice, zařízení, časové údaje, GPS, náhledy.' },
        { name: 'XMP', text: 'XML formát společnosti Adobe pro historii úprav, hodnocení, klíčová slova a mnoho vlastností souvisejících s AI.' },
        { name: 'IPTC', text: 'Standard redakcí: popisek, autor, autorská práva a pole DigitalSourceType, které označuje obrázky z AI.' },
        { name: 'C2PA', text: 'Kryptograficky podepsané Content Credentials, které zaznamenávají, jak soubor vznikl a jak byl upraven. [Co je C2PA](what-is-c2pa-content-credentials).' },
        { name: 'PNG text', text: 'Chunky tEXt, iTXt a zTXt, do kterých [Stable Diffusion a ComfyUI](remove-stable-diffusion-comfyui-metadata) ukládají prompty a workflow.' },
      ],
    },
  },
  security: {
    title: 'Vaše fotky zůstávají v bezpečí',
    lead: 'U každého nástroje, který pracuje s osobními soubory, zní první otázka: „Kam putují moje fotky?“ Odpověď AI Label Remover: nikam.',
    items: [
      { title: '100 % ve vašem zařízení', text: 'Čtení i čištění běží ve Web Workeru přímo v kartě prohlížeče. Žádný server vaše soubory nikdy nedostane.' },
      { title: 'Nic se neukládá, žádné trénování AI', text: 'Protože se fotky nikam neposílají, neexistuje žádná kopie, kterou by šlo uložit, vyzradit nebo použít k trénování modelu.' },
      { title: 'Funguje offline', text: 'Načtěte stránku, vypněte Wi-Fi a vyperte soubor — stále to funguje. Karta Síť v DevTools neukáže žádná odcházející obrazová data.' },
      { title: 'Bez účtu, bez sledování', text: 'Žádná registrace, analytika, reklamy ani pixely třetích stran. Web si pamatuje jen zvolený jazyk a motiv.' },
    ],
  },
  faq: [
    { q: 'Jaký je rozdíl mezi EXIF a metadaty?', a: 'EXIF je jeden druh metadat — ten, který zapisují fotoaparáty a telefony. „Metadata“ je širší pojem, který zahrnuje i XMP, IPTC, C2PA a textové chunky PNG.' },
    { q: 'Mohou metadata ukázat, kde byla fotka pořízena?', a: 'Ano, pokud obrázek obsahuje značky GPS. Telefony obvykle ukládají zeměpisnou šířku, délku a výšku, když má fotoaparát přístup k poloze. Vyprání tyto značky odstraní, aniž by se změnila kvalita. Viz [jak odstranit polohu GPS z fotek](remove-gps-location-from-photos).' },
    { q: 'Jak z obrázku odstranit metadata AI?', a: 'Přetáhněte obrázek do pole v horní části stránky a klikněte na „Vyprat všechny obrázky“. Před vypráním karta každého souboru ukáže nalezená data C2PA, IPTC a prompt.' },
    { q: 'Je bezpečné sem nahrát moje fotky?', a: 'Vaše fotky se vůbec nenahrávají. AI Label Remover otevře soubory v prohlížeči, zpracuje je v paměti karty a čistou kopii uloží přímo do vašeho zařízení. Po načtení stránky můžete přejít do režimu offline a vše funguje dál.' },
  ],
};

export default cs;
