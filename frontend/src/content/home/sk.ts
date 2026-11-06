import type { HomeBasics } from '../pages/types';

const sk: HomeBasics = {
  reassure: 'Online, zadarmo, bez registrácie a bez inštalácie — fotky sa čítajú a čistia priamo v prehliadači a nikdy sa nenahrávajú na server.',
  sources: {
    label: 'Číta a odstraňuje metadáta z obrázkov vytvorených v',
    note: 'Názvy produktov len uvádzajú, odkiaľ obrázky pochádzajú; AI Label Remover nie je s týmito spoločnosťami spojený.',
  },
  learn: {
    what: {
      title: 'Čo sú metadáta?',
      paragraphs: [
        'Metadáta sú „údaje o údajoch“: poznámky uložené vo vnútri súboru obrázka, ktoré na samotnej fotke nikdy neuvidíte. Fotoaparáty, telefóny, editory fotiek aj generátory obrázkov s AI ich pridávajú automaticky, zvyčajne bez upozornenia.',
        'Pri fotkách sa metadáta delia do piatich veľkých skupín. Každá odpovedá na inú otázku o obrázku — a o človeku, ktorý ho odfotil alebo vytvoril.',
      ],
      types: [
        { name: 'Popisné', text: 'Názov, popis, kľúčové slová, mená ľudí na zábere.', example: 'IPTC Caption, XMP dc:title' },
        { name: 'Technické', text: 'Značka a model fotoaparátu, objektív, clona, čas uzávierky, ISO, sériové číslo.', example: 'EXIF Make, Model, BodySerialNumber' },
        { name: 'Miesto a čas', text: 'Súradnice GPS, nadmorská výška, dátum zhotovenia a časové pásmo.', example: 'EXIF GPSLatitude, DateTimeOriginal' },
        { name: 'Práva a správa', text: 'Autor, vlastník, autorské práva, naposledy použitý editačný softvér.', example: 'EXIF Artist, Copyright, Software' },
        { name: 'Pôvod a AI', text: 'Content Credentials, štítky „vytvorené pomocou AI“, prompty a workflow.', example: 'C2PA manifest, IPTC DigitalSourceType' },
      ],
      synonyms:
        'Rovnaká práca má veľa názvov — „odstraňovač metadát“, „vymazať EXIF“, „čistič metadát“, „odstrániť informácie z fotky“ — a všetky znamenajú vybrať zo súboru skryté poznámky bez zmeny obrazu. Podobne „prehliadač“, „čítačka“ či „kontrola metadát“ ukáže, čo je v súbore. AI Label Remover zvládne oboje.',
    },
    why: {
      title: 'Prečo si pred zdieľaním fotky pozrieť a odstrániť metadáta?',
      paragraphs: [
        'Jedno pole metadát je zvyčajne neškodné, no spolu o vás prezradia veľa. Fotka odfotená doma a pridaná na inzertný portál môže niesť súradnice GPS s presnosťou na pár metrov; obrázky poslané e-mailom alebo odkazom z cloudu si ponechajú všetko, čo fotoaparát zapísal. Prečítajte si, [ako GPS vo fotkách môže prezradiť vašu adresu](remove-gps-location-from-photos).',
        'Pri obrázkoch vytvorených alebo upravených pomocou AI metadáta rozhodujú aj o tom, či platforma zobrazí štítok „Vytvorené pomocou AI“, a môžu odhaliť celý prompt, ktorý ste napísali. Pozrite sa, [odkiaľ pochádza štítok „Made with AI“](made-with-ai-label).',
      ],
      bullets: [
        'Prezradenie, kde bývate, pracujete alebo cestujete, cez súradnice GPS.',
        'Prepojenie mnohých fotiek s jednou osobou cez sériové číslo fotoaparátu alebo meno vlastníka.',
        'Odhalenie promptov, seedov, modelov a workflow, ktoré ste chceli mať v súkromí.',
        'Štítok AI od platformy pre priložené údaje C2PA alebo IPTC.',
      ],
    },
    standards: {
      title: 'Bežné štandardy metadát vo fotkách',
      lead: 'Jeden súbor obrázka môže naraz obsahovať niekoľko „priečinkov“ metadát, každý podľa iného štandardu. AI Label Remover číta a odstraňuje všetky nižšie uvedené.',
      items: [
        { name: 'EXIF', text: 'Zapisujú ho fotoaparáty a telefóny: nastavenia expozície, zariadenie, časové údaje, GPS, náhľady.' },
        { name: 'XMP', text: 'XML formát spoločnosti Adobe pre históriu úprav, hodnotenia, kľúčové slová a mnoho vlastností súvisiacich s AI.' },
        { name: 'IPTC', text: 'Štandard redakcií: popis, autor, autorské práva a pole DigitalSourceType, ktoré označuje obrázky z AI.' },
        { name: 'C2PA', text: 'Kryptograficky podpísané Content Credentials, ktoré zaznamenávajú, ako súbor vznikol a ako bol upravený. [Čo je C2PA](what-is-c2pa-content-credentials).' },
        { name: 'PNG text', text: 'Chunky tEXt, iTXt a zTXt, do ktorých [Stable Diffusion a ComfyUI](remove-stable-diffusion-comfyui-metadata) ukladajú prompty a workflow.' },
      ],
    },
  },
  security: {
    title: 'Vaše fotky zostávajú v bezpečí',
    lead: 'Pri každom nástroji, ktorý pracuje s osobnými súbormi, znie prvá otázka: „Kam idú moje fotky?“ Odpoveď AI Label Remover: nikam.',
    items: [
      { title: '100 % vo vašom zariadení', text: 'Čítanie aj čistenie bežia vo Web Workeri priamo v karte prehliadača. Žiadny server vaše súbory nikdy nedostane.' },
      { title: 'Nič sa neukladá, žiadne trénovanie AI', text: 'Keďže sa fotky nikam neposielajú, neexistuje žiadna kópia, ktorú by bolo možné uložiť, vyzradiť alebo použiť na trénovanie modelu.' },
      { title: 'Funguje offline', text: 'Načítajte stránku, vypnite Wi-Fi a vyperte súbor — stále to funguje. Karta Sieť v DevTools neukáže žiadne odchádzajúce obrazové údaje.' },
      { title: 'Bez účtu, bez sledovania', text: 'Žiadna registrácia, analytika, reklamy ani pixely tretích strán. Web si pamätá len zvolený jazyk a motív.' },
    ],
  },
  faq: [
    { q: 'Aký je rozdiel medzi EXIF a metadátami?', a: 'EXIF je jeden druh metadát — ten, ktorý zapisujú fotoaparáty a telefóny. „Metadáta“ je širší pojem, ktorý zahŕňa aj XMP, IPTC, C2PA a textové chunky PNG.' },
    { q: 'Môžu metadáta ukázať, kde bola fotka odfotená?', a: 'Áno, ak obrázok obsahuje značky GPS. Telefóny zvyčajne ukladajú zemepisnú šírku, dĺžku a výšku, keď má fotoaparát prístup k polohe. Vypratie tieto značky odstráni bez zmeny kvality. Pozrite [ako odstrániť polohu GPS z fotiek](remove-gps-location-from-photos).' },
    { q: 'Ako z obrázka odstrániť metadáta AI?', a: 'Pretiahnite obrázok do poľa v hornej časti stránky a kliknite na „Vyprať všetky obrázky“. Pred vypratím karta každého súboru ukáže nájdené údaje C2PA, IPTC a prompt.' },
    { q: 'Je bezpečné nahrať sem moje fotky?', a: 'Vaše fotky sa vôbec nenahrávajú. AI Label Remover otvorí súbory v prehliadači, spracuje ich v pamäti karty a čistú kópiu uloží priamo do vášho zariadenia. Po načítaní stránky môžete prejsť do režimu offline a všetko funguje ďalej.' },
  ],
};

export default sk;
