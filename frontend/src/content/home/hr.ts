import type { HomeBasics } from '../pages/types';

const hr: HomeBasics = {
  reassure: 'Online, besplatno, bez registracije i bez instalacije — fotografije se čitaju i čiste izravno u pregledniku i nikada se ne šalju na poslužitelj.',
  sources: {
    label: 'Čita i uklanja metapodatke iz slika izrađenih pomoću',
    note: 'Nazivi proizvoda samo označavaju podrijetlo slika; AI Label Remover nije povezan s tim tvrtkama.',
  },
  learn: {
    what: {
      title: 'Što su metapodaci?',
      paragraphs: [
        'Metapodaci su „podaci o podacima“: bilješke spremljene unutar datoteke slike koje se nikada ne vide na samoj fotografiji. Fotoaparati, mobiteli, programi za uređivanje i AI generatori slika dodaju ih automatski, obično bez upozorenja.',
        'Kod fotografija metapodaci se dijele u pet velikih skupina. Svaka odgovara na drugo pitanje o slici — i o osobi koja ju je snimila ili izradila.',
      ],
      types: [
        { name: 'Opisni', text: 'Naslov, opis, ključne riječi, imena osoba na fotografiji.', example: 'IPTC Caption, XMP dc:title' },
        { name: 'Tehnički', text: 'Marka i model fotoaparata, objektiv, otvor blende, brzina zatvarača, ISO, serijski broj.', example: 'EXIF Make, Model, BodySerialNumber' },
        { name: 'Mjesto i vrijeme', text: 'GPS koordinate, nadmorska visina, datum snimanja i vremenska zona.', example: 'EXIF GPSLatitude, DateTimeOriginal' },
        { name: 'Prava i upravljanje', text: 'Autor, vlasnik, autorska prava, posljednji korišteni program za uređivanje.', example: 'EXIF Artist, Copyright, Software' },
        { name: 'Podrijetlo i AI', text: 'Content Credentials, oznake „izrađeno pomoću AI-ja“, promptovi i workflowi.', example: 'C2PA manifest, IPTC DigitalSourceType' },
      ],
      synonyms:
        'Isti posao ima mnogo naziva — „uklanjanje metapodataka“, „brisanje EXIF-a“, „čistač metapodataka“, „brisanje podataka s fotografije“ — i svi znače vaditi skrivene bilješke iz datoteke bez mijenjanja slike. Slično tome, „preglednik“, „čitač“ ili „provjera metapodataka“ pokazuje što se nalazi u datoteci. AI Label Remover radi oboje.',
    },
    why: {
      title: 'Zašto pregledati i ukloniti metapodatke prije dijeljenja fotografije?',
      paragraphs: [
        'Pojedinačno polje metapodataka obično je bezazleno, ali zajedno govore mnogo o vama. Fotografija snimljena kod kuće i objavljena na oglasniku može sadržavati GPS koordinate točne na nekoliko metara; slike poslane e-poštom ili poveznicom iz oblaka zadržavaju sve što je fotoaparat zapisao. Pogledajte [kako GPS na fotografijama može otkriti vašu adresu](remove-gps-location-from-photos).',
        'Kod slika izrađenih ili uređenih pomoću AI-ja metapodaci odlučuju i hoće li platforma prikazati oznaku „Izrađeno pomoću AI-ja“, a mogu otkriti i cijeli prompt koji ste napisali. Saznajte [odakle dolazi oznaka „Made with AI“](made-with-ai-label).',
      ],
      bullets: [
        'Otkrivanje gdje živite, radite ili putujete putem GPS koordinata.',
        'Povezivanje mnogih fotografija s jednom osobom preko serijskog broja fotoaparata ili imena vlasnika.',
        'Otkrivanje promptova, seedova, modela i workflowa koje ste htjeli zadržati privatnima.',
        'Dobivanje AI oznake od platforme zbog priloženih C2PA ili IPTC podataka.',
      ],
    },
    standards: {
      title: 'Uobičajeni standardi metapodataka na fotografijama',
      lead: 'Jedna datoteka slike može istodobno sadržavati nekoliko „pretinaca“ metapodataka, svaki prema drugom standardu. AI Label Remover čita i uklanja sve navedene u nastavku.',
      items: [
        { name: 'EXIF', text: 'Zapisuju ga fotoaparati i mobiteli: postavke ekspozicije, uređaj, vremenske oznake, GPS, minijature.' },
        { name: 'XMP', text: 'Adobeov XML format za povijest uređivanja, ocjene, ključne riječi i mnoga svojstva povezana s AI-jem.' },
        { name: 'IPTC', text: 'Standard novinskih redakcija: opis, autor, autorska prava i polje DigitalSourceType koje označava AI slike.' },
        { name: 'C2PA', text: 'Kriptografski potpisani Content Credentials koji bilježe kako je datoteka nastala i kako je uređivana. [Što je C2PA](what-is-c2pa-content-credentials).' },
        { name: 'PNG text', text: 'Chunkovi tEXt, iTXt i zTXt u koje [Stable Diffusion i ComfyUI](remove-stable-diffusion-comfyui-metadata) spremaju promptove i workflowe.' },
      ],
    },
  },
  security: {
    title: 'Vaše fotografije ostaju sigurne',
    lead: 'Kod svakog alata koji radi s osobnim datotekama prvo je pitanje: „Kamo idu moje fotografije?“ Odgovor AI Label Removera: nikamo.',
    items: [
      { title: '100 % na vašem uređaju', text: 'Čitanje i čišćenje odvijaju se u Web Workeru unutar kartice preglednika. Nijedan poslužitelj nikada ne prima vaše datoteke.' },
      { title: 'Ništa se ne sprema, nema treniranja AI-ja', text: 'Budući da se fotografije nikamo ne šalju, ne postoji kopija koja bi se mogla spremiti, procuriti ili koristiti za treniranje modela.' },
      { title: 'Radi bez interneta', text: 'Učitajte stranicu, isključite Wi-Fi i isperite datoteku — i dalje radi. Kartica Mreža u DevToolsu ne prikazuje nikakve slikovne podatke koji odlaze.' },
      { title: 'Bez računa, bez praćenja', text: 'Bez registracije, analitike, oglasa ili piksela trećih strana. Stranica pamti samo jezik i temu koje odaberete.' },
    ],
  },
  faq: [
    { q: 'Koja je razlika između EXIF-a i metapodataka?', a: 'EXIF je jedna vrsta metapodataka — ona koju zapisuju fotoaparati i mobiteli. „Metapodaci“ su širi pojam koji obuhvaća i XMP, IPTC, C2PA te tekstualne chunkove PNG-a.' },
    { q: 'Mogu li metapodaci pokazati gdje je fotografija snimljena?', a: 'Da, ako slika sadrži GPS oznake. Mobiteli obično bilježe geografsku širinu, dužinu i visinu kada fotoaparat smije koristiti lokaciju. Ispiranje uklanja te oznake bez utjecaja na kvalitetu. Pogledajte [kako ukloniti GPS lokaciju s fotografija](remove-gps-location-from-photos).' },
    { q: 'Kako ukloniti AI metapodatke sa slike?', a: 'Ispustite sliku u okvir na vrhu ove stranice i pritisnite „Isperi sve slike“. Prije ispiranja kartica svake datoteke prikazuje pronađene C2PA i IPTC podatke te prompt.' },
    { q: 'Je li sigurno ovdje učitati moje fotografije?', a: 'Vaše se fotografije uopće ne učitavaju na poslužitelj. AI Label Remover otvara datoteke u pregledniku, obrađuje ih u memoriji kartice i sprema čistu kopiju izravno na vaš uređaj. Nakon što se stranica učita, možete se isključiti s interneta i alat i dalje radi.' },
  ],
};

export default hr;
