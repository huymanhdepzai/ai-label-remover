import type { Articles } from './types';

const hu: Articles = {
  'made-with-ai-label': {
    metaTitle: 'Miért kap AI-címkét egy valódi fotó az Instagramon?',
    related: ['what-is-c2pa-content-credentials', 'hide-midjourney-dalle-prompts', 'remove-stable-diffusion-comfyui-metadata'],
    description:
      'Valódi fotója „AI-információ” címkét kapott az Instagramon vagy a Facebookon? Az ok többnyire egy C2PA- vagy IPTC-mező. Így találja meg és törli.',
    updated: '2026-11-09',
    sections: [
      {
        heading: 'A címke a fájlt olvassa, nem a képet',
        paragraphs: [
          'A Meta „AI-információ” címkéje (2024 közepéig „Made with AI”) akkor jelenik meg, ha a feltöltött kép a generatív MI ismert jeleit tartalmazza. Ezek közül kettő magában a képfájlban található: [egy C2PA Content Credentials manifeszt](what-is-c2pa-content-credentials), valamint az XMP-blokkban tárolt IPTC DigitalSourceType tulajdonság.',
          'A trainedAlgorithmicMedia érték azt jelzi, hogy az egész kép generált; a compositeWithTrainedAlgorithmicMedia pedig azt, hogy egy valódi fotó MI által készített részeket tartalmaz. Mindkettő automatikusan kiolvasható feltöltéskor. A Meta más jeleket is használ, és arra kéri a felhasználókat, hogy a valósághű MI-tartalmat maguk jelöljék, így a metaadat csak egy tényező a sok közül.',
        ],
      },
      {
        heading: 'Honnan származik a téves jel',
        paragraphs: ['Valódi fotóknál szinte mindig a szerkesztőalkalmazás váltja ki a címkét, nem a fényképezőgép. Tipikus források:'],
        bullets: [
          'Generatív kitöltés, generatív kibővítés vagy MI-alapú eltávolító eszköz, amelyek c2pa-műveleteket adhatnak hozzá, és kompozitként jelölhetik meg a fájlt.',
          'Exportálás bekapcsolt Content Credentials beállítással, amely minden szerkesztési lépést aláírva a fájlba ír.',
          'A telefon galériájának funkciói, például az MI-radír, amelyek szerkesztési jelölést hagynak maguk után.',
          'A fájl más alkalmazásokon is átmegy, amelyek továbbmásolják a meglévő metaadatokat, így a jelölés több mentést is túlél.',
        ],
      },
      {
        heading: 'Keresse meg a mezőt az AI Label Removerben',
        paragraphs: [
          'Húzza a képet az eszközbe. Az „AI-nyomok” lap minden jelet felsorol a helyével együtt – például „C2PA · compositeWithTrainedAlgorithmicMedia” vagy „XMP · Iptc4xmpExt › DigitalSourceType”. A „Nyers metaadatok” nézetben a tényleges értékeket látja, köztük a manifesztet aláíró programot és minden rögzített c2pa-műveletet.',
          'Az „Érdemes újra megnézni” eredmény azt jelenti, hogy a fájlban Content Credentials található, de kifejezett MI-nyilatkozat nélkül. Egyes platformok ezt is jelzésnek veszik, ezért döntsön a közzététel előtt.',
        ],
      },
      {
        heading: 'Tisztítsa meg a közzétett példányt',
        paragraphs: [
          'Nyomja meg az „Összes metaadat eltávolítása” gombot. Az AI Label Remover kivágja a bájtfolyamból a C2PA-tárolót, valamint az XMP-, IPTC- és EXIF-blokkokat, a képadatot, a méretet, a tájolást és a színprofilt pedig érintetlenül hagyja. A tisztított fájlt újra beolvassa, így mentés előtt láthatja, hogy az MI-nyomok eltűntek. Ha sok képe van, [egyszerre is megtisztíthatja őket](batch-remove-metadata).',
          'Új JPEG-ként mentve a metaadat szintén eltűnne, de a kép minden alkalommal újratömörül, és romlik a minősége. A blokkok kivágása ezt a veszteséget teljesen elkerüli.',
        ],
      },
      {
        heading: 'A téves címke javítása nem a helyes elrejtése',
        paragraphs: [
          'A tisztítás azokra a címkékre való, amelyek tévesen írják le a munkáját, valamint a magánadatok védelmére. Ha egy kép teljesen vagy nagyrészt generált, és valódinak tűnhet, a platformok szabályai általában elvárják, hogy ezt jelezze – a címke a nézők tájékoztatását szolgálja. Az AI Label Removert hibák javítására használja, ne arra, hogy szintetikus képeket fotóként adjon ki.',
        ],
      },
    ],
    faqHeading: 'Kérdések az AI-információ címkéről',
    faq: [
      {
        q: 'Eltávolíthatom a címkét a bejegyzés közzététele után?',
        a: 'A bejegyzés szerkesztésével általában nem. Ha a címke tévesen jelöl egy valódi fotót, használja a platform fellebbezési vagy fiókállapot-lehetőségeit, ha vannak, és legközelebb a közzététel előtt tisztítsa meg a fájlt.',
      },
      {
        q: 'Garantáltan eltűnik a címke, ha megtisztítom a fájlt?',
        a: 'Garancia nincs. A tisztítás eltávolítja a fájlban tárolt jeleket – ez a szerkesztett fotóknál a leggyakoribb ok –, de a platformok más észlelést is használhatnak.',
      },
      {
        q: 'Látszik változás a fotón?',
        a: 'Nem. Csak a metaadat-blokkok törlődnek. A képadatot bájtról bájtra másolja, a tájolás és az ICC-színprofil megmarad.',
      },
      {
        q: 'Megtarthatom a fényképezőgép beállításait, és csak az MI-mezőket törölhetem?',
        a: 'Jelenleg nem. Az AI Label Remover egy lépésben eltávolít minden azonosító metaadatot – helyet, eszközt, szerzőt és MI-eredetet –, ami a nyilvános megosztáshoz a legbiztonságosabb alapbeállítás. A méret, a tájolás, a színek és az animáció mindig megmaradnak.',
      },
    ],
  },

  'remove-stable-diffusion-comfyui-metadata': {
    metaTitle: 'ComfyUI-munkafolyamatok és SD-promptok törlése PNG-ből',
    related: ['hide-midjourney-dalle-prompts', 'batch-remove-metadata', 'what-is-c2pa-content-credentials'],
    description:
      'Az A1111, a Forge és a ComfyUI minden PNG-be beírja a promptot, a seedet, a modellt és a teljes munkafolyamatot. Nézze meg, és törölje pixelvesztés nélkül.',
    updated: '2026-11-09',
    sections: [
      {
        heading: 'A beállításai a képpel együtt utaznak',
        paragraphs: [
          'A helyi képgenerátorok szövegként mentik beállításaikat a kimeneti fájlba, hogy a kép újra előállítható legyen. PNG-fájlokban ez a szöveg tEXt, zTXt vagy iTXt chunkokban van a képadatok mellett. Jellemzően ezt találja:',
        ],
        bullets: [
          'A1111 és Forge: egy „parameters” chunk a prompttal, a negatív prompttal, a lépésszámmal, a samplerrel, a CFG-vel, a seeddel, a felbontással, a modell hashével és nevével, valamint a LoRA- és bővítménybeállításokkal.',
          'ComfyUI: egy „prompt” chunk a lefuttatott csomópontgráffal és egy „workflow” chunk a szerkesztő teljes elrendezésével – ha a PNG-t a ComfyUI-ba húzza, a teljes beállítás visszatér.',
          'InvokeAI, NovelAI és más felületek: hasonló adatok saját kulcsok alatt.',
          'JPEG- és WebP-exportok: egyes eszközök ugyanezt a szöveget az EXIF UserComment mezőbe írják.',
        ],
      },
      {
        heading: 'Érvek a tisztítás mellett – és ellene',
        paragraphs: [
          'A generálási adat egy teljes recept. Bárki megismételheti vele a stílusát, láthatja, mely checkpointokra és LoRA-kra támaszkodik, a munkafolyamatban pedig helyi elérési utak, mappanevek vagy felhasználónevek is rejtőzhetnek. A nagy ComfyUI-gráfok ráadásul képenként több tíz kilobájtot is hozzáadhatnak.',
          'Másrészt a modellmegosztó oldalak kiolvassák a paramétereket a generálási információk megjelenítéséhez, és a munkatársaknak szükségük lehet a munkafolyamatra. Ezért minden fájlt előbb ellenőrizzen – az AI Label Remover mindent megmutat, mielőtt bármit törölne.',
        ],
      },
      {
        heading: 'A prompt elolvasása az AI Label Removerben',
        paragraphs: [
          'Húzza a PNG-t az eszközbe. A „Nyers metaadatok” nézetben minden szöveges chunk a kulcsszava alatt jelenik meg – parameters, prompt, workflow – teljes tartalmával, az „AI-nyomok” lap pedig Stable Diffusion-promptként vagy ComfyUI-munkafolyamatként jelöli meg. A tömörített zTXt és iTXt chunkokat a böngésző kicsomagolja, így elolvashatja őket.',
        ],
      },
      {
        heading: 'Mit őriz meg a tisztítás',
        paragraphs: [
          'Nyomja meg az „Összes metaadat eltávolítása” gombot. A PNG-kezelő a szöveges, XMP-, EXIF- és C2PA-chunkokat egészben törli, az IHDR, IDAT, paletta, átlátszóság, gamma és szín chunkokat, valamint az APNG-animáció chunkjait megtartja. Mivel a chunkok egészben törlődnek, a megmaradó CRC-ellenőrzőösszegek érvényesek maradnak, és a fájl mindenhol megnyílik.',
          'Ha szerkesztőben megnyitja és újra elmenti, a szöveg szintén eltűnne, de a kép újratömörül, és a színek elcsúszhatnak. A bájtszintű eltávolítás mindkettőt elkerüli. Ugyanez érvényes a [Midjourney- és DALL·E-letöltésekre](hide-midjourney-dalle-prompts), ahol a prompt más módon tárolódik.',
        ],
      },
    ],
    faqHeading: 'Kérdések a Stable Diffusion és a ComfyUI adatairól',
    faq: [
      {
        q: 'Hogyan akadályozhatom meg, hogy az A1111 vagy a ComfyUI metaadatot mentsen?',
        a: 'Az A1111-ben és a Forge-ban van egy beállítás, amely leállítja a generálási paraméterek PNG-be írását, a ComfyUI pedig elindítható a --disable-metadata kapcsolóval. Mindkettő csak az új képekre vonatkozik, ezért a meglévőket tisztítsa meg.',
      },
      {
        q: 'Vissza tudja állítani a ComfyUI a munkafolyamatot egy tisztított PNG-ből?',
        a: 'Nem. A „prompt” és „workflow” chunkok eltűntek, így ha a fájlt a ComfyUI-ba húzza, semmi sem áll helyre. Tartson meg egy érintetlen eredetit, ha később szüksége lesz a gráfra.',
      },
      {
        q: 'Ugyanúgy néz ki a tisztított PNG?',
        a: 'Igen. A tömörített pixeleket tartalmazó IDAT chunkok változatlanul másolódnak, így a kép pixelre pontosan azonos.',
      },
      {
        q: 'Mi a helyzet a JPEG- és WebP-exportokkal?',
        a: 'Az EXIF UserComment vagy XMP mezőkben tárolt promptokat a JPEG- és WebP-fájlokban is felismeri és eltávolítja.',
      },
    ],
  },

  'hide-midjourney-dalle-prompts': {
    metaTitle: 'Promptok eltávolítása Midjourney- és DALL·E-képekből',
    related: ['remove-stable-diffusion-comfyui-metadata', 'made-with-ai-label', 'what-is-c2pa-content-credentials'],
    description:
      'A Midjourney, DALL·E, ChatGPT és Firefly letöltései tartalmazhatják a promptot, a feladatazonosítót és az MI-eredetet. Ellenőrizze és törölje megosztás előtt.',
    updated: '2026-11-09',
    sections: [
      {
        heading: 'Mit írnak a képbe az online generátorok',
        paragraphs: [
          'Az online képszolgáltatások egyre gyakrabban látják el metaadatokkal a letöltéseket, az átláthatóság és az eredetszabványok támogatása érdekében. A mezők szolgáltatásonként eltérnek és idővel változnak, ezért az egyetlen megbízható válasz a fájl megnyitása. Ilyesmit találhat:',
        ],
        bullets: [
          'Midjourney: a prompt és egy feladatazonosító a leírás vagy megjegyzés mezőkben, gyakran egy IPTC DigitalSourceType értékkel, amely MI által készítettként jelöli a képet.',
          'DALL·E és a ChatGPT képgenerálása: [C2PA Content Credentials](what-is-c2pa-content-credentials), amely megnevezi a generátort.',
          'Adobe Firefly: Content Credentials, amely MI-vel készültként írja le a képet.',
          'Számos eszköz: szoftvernév, létrehozási dátum és néha egy fiókhoz kötött azonosító.',
        ],
      },
      {
        heading: 'A prompt megőrzésre érdemes munka',
        paragraphs: [
          'Illusztrátorok, tervezők és promptírók számára egy kidolgozott prompt sok kísérletezési kör eredménye. Bármely ingyenes metaadat-megjelenítő megmutatja a beágyazott szöveget annak, aki letölti a képét, másolásra készen. A feladatazonosítók és fiókadatok ráadásul Önhöz köthetnek egy nyilvános képet.',
        ],
      },
      {
        heading: 'Előbb nézze meg, aztán tisztítson',
        paragraphs: [
          'Húzza a képet az eszközbe, és olvassa el a jelentést. Az „AI” jelölésű sorok promptokat, generátorneveket és eredetnyilatkozatokat tartalmaznak; a „Személy” sorok szerzőket, leírásokat és azonosítókat. Nyomja meg az „Összes metaadat eltávolítása” gombot, és mentse a tiszta fájlt – vagy a teljes köteget ZIP-ként.',
          'Minden a böngészőjében fut, így a védett promptok útközben nem kerülnek egy újabb szolgáltatáshoz.',
        ],
      },
      {
        heading: 'Korlátok, amelyeket érdemes ismerni',
        paragraphs: [
          'Egyes szolgáltatók vízjelet is rejtenek magukba a pixelekbe, például a Google SynthID. Ez nem metaadat, és a tisztítás nem érinti. Ha pedig valósághű MI-képet tesz közzé, a platform szabályai továbbra is előírhatják ennek jelzését – olvasson többet az [AI-információ címkéről](made-with-ai-label). A tisztítás a munkafolyamatát védi, de nem változtat azon, hogy mi a kép.',
        ],
      },
    ],
    faqHeading: 'Kérdések a Midjourney és a DALL·E metaadatairól',
    faq: [
      {
        q: 'Elolvashatja valaki a promptomat egy letöltött képből?',
        a: 'Ha a prompt a fájl metaadataiban van, bárki elolvashatja és lemásolhatja egy metaadat-megjelenítővel. A fájl megosztás előtti tisztítása eltávolítja.',
      },
      {
        q: 'Minden Midjourney-letöltés tartalmazza a promptot?',
        a: 'Ez a formátumtól és a szolgáltatás aktuális működésétől függ. Nyissa meg a fájlt az AI Label Removerben, és pontosan látni fogja, mi van benne.',
      },
      {
        q: 'Eltávolítja a tisztítás a SynthID-t vagy hasonló vízjeleket?',
        a: 'Nem. A láthatatlan vízjelek a pixeladatokban vannak, amelyeket az AI Label Remover soha nem módosít.',
      },
      {
        q: 'Megtisztíthatok egy teljes generálási sorozatot?',
        a: 'Igen. Töltsön be legfeljebb 50 képet, ellenőrizze a jelentéseket, majd mentse az összeset egyetlen ZIP-fájlként.',
      },
    ],
  },

  'what-is-c2pa-content-credentials': {
    metaTitle: 'Mi az a C2PA? A Content Credentials röviden',
    related: ['made-with-ai-label', 'hide-midjourney-dalle-prompts', 'remove-gps-location-from-photos'],
    description:
      'Közérthető útmutató a C2PA-hoz és a Content Credentials-hez: mit rögzít az aláírt manifeszt, hol tárolják a fájlformátumok és mit jelent a törlése.',
    updated: '2026-11-09',
    sections: [
      {
        heading: 'Röviden',
        paragraphs: [
          'A Coalition for Content Provenance and Authenticity (C2PA) egy nyílt szabványt gondoz, amely manipulációt jelző előzményt kapcsol a médiához. A felhasználók Content Credentials néven találkoznak vele. Fényképezőgépek, szerkesztők és MI-generátorok aláírt bejegyzést írhatnak a képbe arról, hogyan készült – fényképezőgéppel, alkalmazásban szerkesztve vagy modell által előállítva.',
        ],
      },
      {
        heading: 'Egy manifeszt felépítése',
        paragraphs: ['A manifeszt egy tömör, strukturált csomag három fő résszel:'],
        bullets: [
          'Claim generator – a szoftver vagy szolgáltatás, amely a manifesztet létrehozta, például egy szerkesztő vagy egy MI-képeket előállító API.',
          'Állítások (assertions) – kijelentések a tartalomról: c2pa.actions (létrehozva, szerkesztve, megnyitva, átméretezve stb.), egy digitalSourceType és hivatkozások az összetevő fájlokra.',
          'Aláírás – kriptográfiai aláírás és tanúsítvány, amely azonosítja az aláírót, valamint egy hash, amely a manifesztet pontosan ehhez a képadathoz köti.',
        ],
      },
      {
        heading: 'Hol tárolják az egyes formátumok',
        paragraphs: [
          'A manifeszt egy JUMBF-tárolóba van csomagolva, amelyet minden formátum a saját helyén tárol: JPEG-ben APP11 szegmensekben, PNG-ben caBX chunkban, WebP-ben C2PA chunkban, HEIC és AVIF fájlokban pedig uuid dobozban. Különálló blokként a kép dekódolása nélkül olvasható és eltávolítható. Az AI Label Remover megmutatja a blokkot, a generátort, a rögzített műveleteket és a forrástípust, ha léteznek.',
        ],
      },
      {
        heading: 'Mit tesz valójában az eltávolítás',
        paragraphs: [
          'A tisztítás törli a beágyazott bejegyzést a fájl adott példányából. Ne feledje, hogy bármilyen szerkesztés már megszakítja a kriptográfiai kötést – az ellenőrzők érvénytelennek jelzik azt a manifesztet, amely már nem egyezik a pixelekkel –, így az eltávolítás egy olyan bejegyzést töröl, amely különben csak utazna a fájllal.',
          'Egyes rendszerek „tartós” adatokat is hozzáadnak: láthatatlan vízjelet vagy ujjlenyomatot, amellyel egy ellenőrző online tárhelyről töltheti le a manifesztet akkor is, ha a beágyazott példány eltűnt. A metaadat-eltávolítás ezekre nincs hatással, mert a pixelekben vagy egy távoli szerveren vannak.',
        ],
      },
      {
        heading: 'Megtartani vagy törölni?',
        paragraphs: [
          'Az adatok akkor hasznosak, ha igazolnia kell egy kép eredetét – újságírásban vagy saját eredeti fotóinál. Ugyanakkor felfedhetnek szoftvert, szerkesztési előzményeket és személyazonosságot, amelyet inkább megtartana magának, vagy [AI-címkét válthatnak ki enyhén szerkesztett fotókon](made-with-ai-label). Előbb olvassa el a manifesztet, és fájlonként döntsön.',
        ],
      },
    ],
    faqHeading: 'Kérdések a C2PA-ról',
    faq: [
      {
        q: 'Ki használja a C2PA-t?',
        a: 'Az Adobe, a Microsoft, a Google, az OpenAI, a Meta, olyan fényképezőgép-gyártók, mint a Leica, a Sony és a Nikon, valamint számos hírszervezet támogatja a szabványt vagy tagja a koalíciónak, bár mindegyik másként használja.',
      },
      {
        q: 'A C2PA egyfajta láthatatlan vízjel?',
        a: 'Nem. A C2PA a képadatok mellett tárolt metaadat. A pixelekbe ágyazott vízjelek, mint a SynthID, külön mechanizmust jelentenek, és a tisztítás nem érinti őket.',
      },
      {
        q: 'Hogyan ellenőrizhetem az aláírást tisztítás előtt?',
        a: 'Az AI Label Remover megmutatja a generátort, a műveleteket és a forrástípust. A teljes aláírás-ellenőrzéshez előbb futtassa az eredetit egy hivatalos Content Credentials-ellenőrzőn.',
      },
      {
        q: 'Romlik a minőség a C2PA eltávolításától?',
        a: 'Nem. A manifeszt külön blokk; a tömörített képadat változatlanul másolódik.',
      },
    ],
  },

  'remove-gps-location-from-photos': {
    metaTitle: 'GPS-hely törlése fotókról iPhone-on, Androidon és PC-n',
    related: ['batch-remove-metadata', 'what-is-c2pa-content-credentials', 'made-with-ai-label'],
    description:
      'Törölje a GPS-helyet megosztás előtt: mely EXIF-mezők árulják el a helyet, az eszközt és az időt, hol szivárognak, és hogyan törölheti őket veszteség nélkül.',
    updated: '2026-11-09',
    sections: [
      {
        heading: 'Mit ír a telefon minden felvételbe',
        paragraphs: ['Bekapcsolt helymeghatározással egy átlagos mobilfotó a következőket tartalmazhatja:'],
        bullets: [
          'Szélesség, hosszúság és magasság, gyakran néhány méteres pontossággal, valamint GPS-időbélyeg.',
          'A készítés és az utolsó szerkesztés pontos időpontja.',
          'Gyártó és típus, objektívadatok, néha sorozatszám vagy a tulajdonos neve.',
          'Beágyazott előnézetek és másodlagos képek (mélységtérképek, MPF-képek), saját EXIF-másolattal.',
        ],
      },
      {
        heading: 'Hogyan jut ki az eredeti fájl',
        paragraphs: [
          'A nagy közösségi hírfolyamok általában eltávolítják az EXIF-et a közzétett képből, de sok útvonal az érintetlen eredetit juttatja célba: a csevegőalkalmazások „küldés fájlként” módja, e-mail-mellékletek, megosztott felhőlinkek, fórumok, apróhirdetési oldalak és portfólióoldalak. Egy otthon készült fotó elárulhatja a címét; egy sorozat a napi rutinját.',
        ],
      },
      {
        heading: 'Nézze meg, milyen helyet árul el a fotója',
        paragraphs: [
          'Húzza a fotót az eszközbe. A „Mit árul el” lap azonnal mutatja, vannak-e hely-, személy- és időmezők, a GPS-pozíciót pedig tizedes koordinátákra alakítja. A „Nyers metaadatok” minden mezőt felsorol EXIF IFD0, Exif és GPS szerint csoportosítva.',
        ],
      },
      {
        heading: 'Tisztítás mellékhatások nélkül',
        paragraphs: [
          'Nyomja meg az „Összes metaadat eltávolítása” gombot. Eltűnnek a GPS-, dátum-, eszköz-, szerző- és szoftvermezők, valamint a beágyazott bélyegképek és az MPF másodlagos képek, amelyek különben rejtett másolatot őriznének. A tájolási címke egy apró EXIF-blokkba visszaíródik, hogy az álló fotók ne forduljanak el, a színprofil pedig megmarad, hogy a színek hűek maradjanak. Az iPhone HEIC-fájljai helyben tisztulnak, JPEG-re konvertálás nélkül.',
        ],
      },
      {
        heading: 'Állítsa le már a fényképezőgépnél',
        paragraphs: [
          'iPhone-on: Beállítások → Adatvédelem és biztonság → Helymeghatározás → Kamera → Soha. Androidon a helycímkézés általában a Kamera alkalmazás beállításaiban kapcsolható ki (az elnevezés gyártónként eltér). A fájl küldés előtti tisztítása mégis a legalaposabb szokás, mert azokat az eszköz-, idő- és előnézeti adatokat is eltávolítja, amelyeket a telefon beállításai nem érintenek.',
        ],
      },
      {
        heading: 'Mennyire pontosak valójában a koordináták',
        paragraphs: [
          'Az EXIF a szélességet és a hosszúságot fokban, percben és másodpercben tárolja, a telefonok pedig tizedesekkel rögzítik a másodperceket. Egy szélességi másodperc nagyjából 31 méter, így egy két tizedesjegyű érték papíron egy méternél keskenyebb pontot jelöl. A valós pontosság a jeltől függ – szabadban gyakran 3–10 méter, beltérben rosszabb –, de ez is elég egyetlen ház azonosításához. Sok telefon a magasságot is hozzáadja, amely az emeletre utalhat, valamint azt az iránytű-irányt, amerre az objektív nézett.',
        ],
      },
      {
        heading: 'A hely nem csak a GPS-címkékben rejtőzik',
        paragraphs: [
          'A GPS-könyvtár kiürítése nem mindig elég. A fotókezelők XMP-be másolhatják a koordinátákat, az IPTC olyan mezői pedig, mint a város, a helyszín és az ország, olvasható szöveggel nevezhetik meg a helyet. Az AI Label Remover az EXIF-fel együtt az XMP-t és az IPTC-t is eltávolítja, így ezek a másolatok is eltűnnek. Amit egyetlen metaadat-eszköz sem távolíthat el, az maga a kép: utcatáblák, házszámok, az ablakból nyíló kilátás vagy egy tükröződés is elárulhatja a helyet, ezért közzététel előtt nézze át a képet.',
        ],
      },
      {
        heading: 'Gyors ellenőrzés megosztás előtt',
        paragraphs: [],
        bullets: [
          'Húzza a fotót az AI Label Removerbe, és nézze meg a „Mit árul el” lapot.',
          'Ha hely szerepel rajta, nyomja meg az „Összes metaadat eltávolítása” gombot, és mentse a tiszta példányt.',
          'Ellenőrizze, hogy a zöld panel megerősíti a hely, a személyek és az idő eltávolítását.',
          'Nézze át a képet látható árulkodó jelek után – címek, rendszámok, tereptárgyak.',
          'A tiszta példányt ossza meg, az eredetit tartsa meg a saját könyvtárában. Sok fotónál a [kötegelt tisztítás](batch-remove-metadata) időt takarít meg.',
        ],
      },
    ],
    faqHeading: 'Kérdések a GPS-ről és a fotók adatvédelméről',
    faq: [
      {
        q: 'Visszaállítható a hely a tisztítás után?',
        a: 'A tisztított fájlból nem – a mezőket törli, nem elrejti. A telefonján lévő eredetiben a hely továbbra is megvan, ezért csak a tiszta példányt ossza meg.',
      },
      {
        q: 'Ha kikapcsolom a GPS-t, akkor is megjelölődnek a fotóim?',
        a: 'Igen, előfordulhat. A telefon Wi-Fi- és mobilhálózatok alapján is meghatározhatja a helyzetet, ezért a kameraalkalmazás helyhozzáférését kapcsolja ki, ne csak a GPS-t.',
      },
      {
        q: 'A közösségi oldalak nem távolítják el amúgy is a GPS-t?',
        a: 'Sok nagy oldal eltávolítja az EXIF-et a közzétett képből. A mellékletek, dokumentumok és felhőlinkek azonban általában megőrzik az eredeti metaadatokat.',
      },
      {
        q: 'Elfordulva jelenik meg a fotóm?',
        a: 'Nem. A tájolási címke megmarad, így a fotó pontosan úgy jelenik meg, mint korábban. Az iPhone HEIC-fájljai is formátumváltás nélkül tisztulnak.',
      },
    ],
  },

  'batch-remove-metadata': {
    metaTitle: 'Metaadatok törlése sok képről egyszerre – ingyen',
    related: ['remove-gps-location-from-photos', 'remove-stable-diffusion-comfyui-metadata', 'hide-midjourney-dalle-prompts'],
    description:
      'Tisztítson meg akár 50 képet egyszerre a böngészőben: párhuzamos feldolgozás, minden eredmény újraellenőrzése és mentés egyetlen ZIP-fájlba.',
    updated: '2026-11-09',
    sections: [
      {
        heading: 'Egy köteg az elejétől a végéig',
        paragraphs: [],
        bullets: [
          'Húzzon az eszközbe legfeljebb 50 JPG, PNG, WebP, GIF, HEIC vagy AVIF fájlt (fájlonként legfeljebb 25 MB és 40 megapixel).',
          'Minden fájl automatikusan beolvasódik; kattintson egy fájlra a sorban a jelentés megtekintéséhez.',
          'Az „Összes metaadat eltávolítása” gomb egyszeri megnyomásával mindent megtisztít, ami beolvasásra került.',
          'Mentse a fájlokat egyenként, vagy nyomja meg a „Mindent mentés ZIP-ként” gombot egyetlen archívumhoz.',
        ],
      },
      {
        heading: 'Gyorsaság szerver nélkül',
        paragraphs: [
          'Az AI Label Remover a munkát több Web Workerre – a böngésző háttérszálaira – osztja el a processzormagok számához igazítva. Minden worker egy fájlt vesz át, feldolgozza, és visszaadja a megtisztított bájtokat, így az oldal nehéz HEIC-fájlok mellett is gördülékeny marad. A ZIP tömörítés nélküli tárolási módot használ, mivel a képek már tömörítettek: a csomagolás gyors, és nem okoz további veszteséget.',
        ],
      },
      {
        heading: 'Minden eredményt újra beolvas',
        paragraphs: [
          'A tisztítás után minden kimenetet újra beolvas, és a zöld eredménypanel megerősíti, hogy a hely, a személyek, az idő és az MI-nyomok eltűntek-e. Ha két fájlnak azonos a neve, a ZIP-ben lévő példány számot kap, így semmi sem íródik felül.',
        ],
      },
      {
        heading: 'Több száz fájl feldolgozása',
        paragraphs: [
          'Haladjon 50-es körökben, és a körök között szedje le az asztalt a memória felszabadításához. Kevés memóriájú telefonokon előbb zárja be a többi nehéz lapot. Mivel semmi sem töltődik fel, az oldal betöltése után akár offline is folytathatja.',
        ],
      },
      {
        heading: 'Semmi sem hagyja el a gépet',
        paragraphs: [
          'Egyetlen képet sem tölt fel, tárol vagy naplóz; az egyetlen hálózati forgalom maga az oldal betöltése. Ezért a kötegelt tisztítás alkalmas ügyfélátadásokhoz, még nem publikált fotózásokhoz és mindenhez, amit nem küldhet harmadik félnek – például [a GPS-hely törléséhez nyaralási fotókról](remove-gps-location-from-photos) vagy [Stable Diffusion-promptok eltávolításához](remove-stable-diffusion-comfyui-metadata) egy teljes mappából.',
        ],
      },
    ],
    faqHeading: 'Kérdések a kötegelt tisztításról',
    faq: [
      {
        q: 'Keverhetők különböző formátumok egy kötegben?',
        a: 'Igen. Egy köteg vegyesen tartalmazhat JPG, PNG, WebP, GIF, HEIC és AVIF fájlokat, és minden fájl megtartja a saját formátumát.',
      },
      {
        q: 'Miért 50 fájl a határ?',
        a: 'Minden feldolgozás az eszköze memóriáját használja. A korlát stabilan tartja a telefonokat és a régebbi laptopokat; annyi kört futtathat, amennyit csak szeretne.',
      },
      {
        q: 'Megváltoznak a fájlnevek?',
        a: 'Nem. A tisztított fájlok megtartják a nevüket. Csak a ZIP-en belüli pontos névegyezések kapnak sorszámot.',
      },
      {
        q: 'Működik offline is?',
        a: 'Igen. Betöltés után az oldal kapcsolat nélkül is tisztít, mert semmit sem küld el sehová.',
      },
    ],
  },
};

export default hu;
