import type { HomeBasics } from '../pages/types';

const hu: HomeBasics = {
  reassure: 'Online, ingyenes, regisztráció és telepítés nélkül — a fotókat közvetlenül a böngésző olvassa be és tisztítja meg, soha nem kerülnek fel szerverre.',
  sources: {
    label: 'Kiolvassa és eltávolítja a metaadatokat ezekkel készült képekből:',
    note: 'A terméknevek csak a képek forrását jelölik; az AI Label Remover nem áll kapcsolatban ezekkel a cégekkel.',
  },
  learn: {
    what: {
      title: 'Mik azok a metaadatok?',
      paragraphs: [
        'A metaadat „adat az adatról”: a képfájlban tárolt jegyzetek, amelyek magán a képen soha nem látszanak. A fényképezőgépek, telefonok, képszerkesztők és MI-képgenerátorok automatikusan hozzáadják őket, általában szó nélkül.',
        'A fotók metaadatai öt nagy csoportba sorolhatók. Mindegyik más kérdésre felel a képről — és arról, aki készítette.',
      ],
      types: [
        { name: 'Leíró', text: 'Cím, képaláírás, kulcsszavak, a képen szereplők neve.', example: 'IPTC Caption, XMP dc:title' },
        { name: 'Technikai', text: 'A gép gyártója és típusa, objektív, rekesz, záridő, ISO, sorozatszám.', example: 'EXIF Make, Model, BodySerialNumber' },
        { name: 'Hely és idő', text: 'GPS-koordináták, magasság, a felvétel dátuma és időzónája.', example: 'EXIF GPSLatitude, DateTimeOriginal' },
        { name: 'Jogok és kezelés', text: 'Szerző, tulajdonos, szerzői jog, utoljára használt szerkesztőprogram.', example: 'EXIF Artist, Copyright, Software' },
        { name: 'Eredet és MI', text: 'Content Credentials, „MI-vel készült” címkék, promptok és workflow-k.', example: 'C2PA manifest, IPTC DigitalSourceType' },
      ],
      synonyms:
        'Ugyanarra a feladatra sok név létezik — „metaadat-eltávolító”, „EXIF törlése”, „metaadat-tisztító”, „fotóadatok törlése” —, és mind azt jelenti, hogy a rejtett jegyzeteket a kép megváltoztatása nélkül vesszük ki a fájlból. Ugyanígy a „metaadat-megjelenítő”, „-olvasó” vagy „-ellenőrző” azt mutatja meg, mi van a fájlban. Az AI Label Remover mindkettőre képes.',
    },
    why: {
      title: 'Miért érdemes megnézni és eltávolítani a metaadatokat egy fotó megosztása előtt?',
      paragraphs: [
        'Egy-egy metaadatmező többnyire ártalmatlan, együtt viszont sokat elárulnak rólad. Egy otthon készült és apróhirdetési oldalra feltett fotó néhány méter pontosságú GPS-koordinátákat hordozhat; az e-mailben vagy felhőlinken küldött képek mindent megőriznek, amit a gép beleírt. Nézd meg, [hogyan árulhatja el a lakcímedet a fotók GPS-adata](remove-gps-location-from-photos).',
        'Az MI-vel készített vagy szerkesztett képeknél a metaadatok azt is eldöntik, hogy egy platform kitesz-e „MI-vel készült” címkét, és a teljes promptodat is felfedhetik. Nézd meg, [honnan jön a „Made with AI” címke](made-with-ai-label).',
      ],
      bullets: [
        'A GPS-koordinátákból kiderül, hol laksz, dolgozol vagy utazol.',
        'A gép sorozatszáma vagy a tulajdonos neve alapján sok fotó egy emberhez köthető.',
        'Kiderülnek a privátnak szánt promptok, seedek, modellek és workflow-k.',
        'A csatolt C2PA- vagy IPTC-adatok miatt egy platform MI-címkét ad a képre.',
      ],
    },
    standards: {
      title: 'Gyakori metaadat-szabványok fotókban',
      lead: 'Egy képfájl egyszerre több metaadat-„rekeszt” is tartalmazhat, mindegyik más szabvány szerint. Az AI Label Remover az összes alábbit kiolvassa és eltávolítja.',
      items: [
        { name: 'EXIF', text: 'Fényképezőgépek és telefonok írják: expozíciós beállítások, eszköz, időbélyegek, GPS, bélyegképek.' },
        { name: 'XMP', text: 'Az Adobe XML-formátuma szerkesztési előzményekhez, értékelésekhez, kulcsszavakhoz és sok MI-vel kapcsolatos tulajdonsághoz.' },
        { name: 'IPTC', text: 'A hírszerkesztőségek szabványa: képaláírás, szerző, szerzői jog és a DigitalSourceType mező, amely az MI-képeket jelöli.' },
        { name: 'C2PA', text: 'Kriptográfiailag aláírt Content Credentials, amely rögzíti, hogyan készült és szerkesztették a fájlt. [Mi a C2PA](what-is-c2pa-content-credentials).' },
        { name: 'PNG text', text: 'tEXt, iTXt és zTXt chunkok, amelyekbe a [Stable Diffusion és a ComfyUI](remove-stable-diffusion-comfyui-metadata) a promptokat és workflow-kat menti.' },
      ],
    },
  },
  security: {
    title: 'A fotóid biztonságban maradnak',
    lead: 'Minden személyes fájlokat kezelő eszköznél az első kérdés: „Hová kerülnek a fotóim?” Az AI Label Remover válasza: sehová.',
    items: [
      { title: '100%-ban az eszközödön', text: 'A beolvasás és a tisztítás egy Web Workerben fut a böngészőlapon belül. Egyetlen szerver sem kapja meg a fájljaidat.' },
      { title: 'Nincs tárolás, nincs MI-tanítás', text: 'Mivel a fotók sehová nem kerülnek, nincs olyan másolat, amelyet tárolni, kiszivárogtatni vagy modelltanításra használni lehetne.' },
      { title: 'Offline is működik', text: 'Töltsd be az oldalt, kapcsold ki a Wi-Fit, és moss ki egy fájlt — így is működik. A DevTools Hálózat lapján nem látszik kimenő képadat.' },
      { title: 'Nincs fiók, nincs követés', text: 'Nincs regisztráció, analitika, hirdetés vagy harmadik féltől származó pixel. Az oldal csak a választott nyelvet és témát jegyzi meg.' },
    ],
  },
  faq: [
    { q: 'Mi a különbség az EXIF és a metaadat között?', a: 'Az EXIF a metaadatok egyik fajtája — az, amelyet a fényképezőgépek és telefonok írnak. A „metaadat” tágabb fogalom: ide tartozik az XMP, az IPTC, a C2PA és a PNG szöveges chunkjai is.' },
    { q: 'Kiderülhet a metaadatokból, hol készült egy fotó?', a: 'Igen, ha a képen vannak GPS-címkék. A telefonok általában rögzítik a szélességet, hosszúságot és magasságot, ha a kamera hozzáfér a helyadatokhoz. A mosás minőségromlás nélkül eltávolítja ezeket a címkéket. Lásd: [GPS-helyadat eltávolítása fotókról](remove-gps-location-from-photos).' },
    { q: 'Hogyan távolíthatom el az MI-metaadatokat egy képről?', a: 'Húzd a képet az oldal tetején lévő mezőbe, és nyomd meg az „Összes kép mosása” gombot. Mosás előtt minden fájl kártyája megmutatja a talált C2PA-, IPTC- és promptadatokat.' },
    { q: 'Biztonságos ide feltölteni a fotóimat?', a: 'A fotóid egyáltalán nem töltődnek fel. Az AI Label Remover a böngészőben nyitja meg a fájlokat, a lap memóriájában dolgozza fel őket, és a tiszta másolatot közvetlenül az eszközödre menti. Az oldal betöltése után offline is tovább működik.' },
  ],
};

export default hu;
