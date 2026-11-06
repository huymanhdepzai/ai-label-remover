import type { HomeBasics } from '../pages/types';

const sv: HomeBasics = {
  reassure: 'Online, gratis, utan konto och utan installation — bilderna läses och rensas direkt i webbläsaren och laddas aldrig upp till någon server.',
  sources: {
    label: 'Läser och tar bort metadata från bilder skapade med',
    note: 'Produktnamnen visar bara var bilderna kommer ifrån; AI Label Remover har ingen koppling till dessa företag.',
  },
  learn: {
    what: {
      title: 'Vad är metadata?',
      paragraphs: [
        'Metadata är ”data om data”: anteckningar i en bildfil som aldrig syns på själva bilden. Kameror, telefoner, bildredigerare och AI-bildgeneratorer lägger till dem automatiskt, oftast utan att säga något.',
        'För foton delas metadata in i fem stora grupper. Var och en svarar på en egen fråga om bilden — och om personen som tog eller skapade den.',
      ],
      types: [
        { name: 'Beskrivande', text: 'Titel, bildtext, nyckelord, namn på personer i bilden.', example: 'IPTC Caption, XMP dc:title' },
        { name: 'Teknisk', text: 'Kameramärke och modell, objektiv, bländare, slutartid, ISO, serienummer.', example: 'EXIF Make, Model, BodySerialNumber' },
        { name: 'Plats & tid', text: 'GPS-koordinater, höjd, fotodatum och tidszon.', example: 'EXIF GPSLatitude, DateTimeOriginal' },
        { name: 'Rättigheter & admin', text: 'Upphovsperson, ägare, upphovsrätt, senast använda redigeringsprogram.', example: 'EXIF Artist, Copyright, Software' },
        { name: 'Ursprung & AI', text: 'Content Credentials, etiketter ”skapad med AI”, prompter och arbetsflöden.', example: 'C2PA manifest, IPTC DigitalSourceType' },
      ],
      synonyms:
        'Samma jobb har många namn — ”metadataborttagare”, ”ta bort EXIF”, ”metadatarensare”, ”rensa bildinfo” — och alla betyder att plocka ut de dolda anteckningarna ur filen utan att ändra bilden. På samma sätt visar en ”metadatavisare”, ”-läsare” eller ”-kontroll” vad som finns i filen. AI Label Remover gör båda.',
    },
    why: {
      title: 'Varför granska och ta bort metadata innan du delar en bild?',
      paragraphs: [
        'Ett enskilt metadatafält är oftast ofarligt, men tillsammans säger de mycket om dig. En bild tagen hemma och upplagd på en köp- och säljsajt kan bära GPS-koordinater med några meters noggrannhet; bilder som skickas via e-post eller molnlänk behåller allt kameran skrev. Läs [hur GPS i bilder kan avslöja din hemadress](remove-gps-location-from-photos).',
        'För bilder som skapats eller redigerats med AI avgör metadata också om en plattform visar etiketten ”Skapad med AI”, och de kan avslöja hela prompten du skrev. Se [varför etiketten ”Made with AI” dyker upp](made-with-ai-label).',
      ],
      bullets: [
        'Avslöja var du bor, arbetar eller reser genom GPS-koordinater.',
        'Koppla många bilder till samma person via kamerans serienummer eller ägarens namn.',
        'Exponera prompter, seeds, modeller och arbetsflöden du ville hålla privata.',
        'Få en AI-etikett från en plattform på grund av bifogade C2PA- eller IPTC-data.',
      ],
    },
    standards: {
      title: 'Vanliga metadatastandarder för foton',
      lead: 'En bildfil kan rymma flera metadata-”fack” samtidigt, var och ett enligt sin egen standard. AI Label Remover läser och tar bort alla nedan.',
      items: [
        { name: 'EXIF', text: 'Skrivs av kameror och telefoner: exponeringsinställningar, enhet, tidsstämplar, GPS, miniatyrer.' },
        { name: 'XMP', text: 'Adobes XML-format för redigeringshistorik, betyg, nyckelord och många AI-relaterade egenskaper.' },
        { name: 'IPTC', text: 'Nyhetsredaktionernas standard: bildtext, upphovsperson, upphovsrätt och fältet DigitalSourceType som anger AI-bilder.' },
        { name: 'C2PA', text: 'Kryptografiskt signerade Content Credentials som registrerar hur en fil skapades och redigerades. [Vad är C2PA](what-is-c2pa-content-credentials).' },
        { name: 'PNG text', text: 'tEXt-, iTXt- och zTXt-chunks där [Stable Diffusion och ComfyUI](remove-stable-diffusion-comfyui-metadata) sparar prompter och arbetsflöden.' },
      ],
    },
  },
  security: {
    title: 'Dina bilder förblir säkra',
    lead: 'Med alla verktyg som hanterar personliga filer är första frågan ”vart tar mina bilder vägen?”. AI Label Removers svar: ingenstans.',
    items: [
      { title: '100 % på din enhet', text: 'Läsning och rensning körs i en Web Worker i din webbläsarflik. Ingen server tar någonsin emot dina filer.' },
      { title: 'Inget sparas, ingen AI-träning', text: 'Eftersom bilderna aldrig skickas någonstans finns ingen kopia att spara, läcka eller träna en modell på.' },
      { title: 'Fungerar offline', text: 'Ladda sidan, stäng av wifi och tvätta en fil — det fungerar ändå. Fliken Nätverk i DevTools visar ingen bilddata som lämnar enheten.' },
      { title: 'Inget konto, ingen spårning', text: 'Ingen registrering, ingen analys, inga annonser eller tredjepartspixlar. Sidan minns bara språket och temat du väljer.' },
    ],
  },
  faq: [
    { q: 'Vad är skillnaden mellan EXIF och metadata?', a: 'EXIF är en sorts metadata — den som kameror och telefoner skriver. ”Metadata” är det bredare begreppet och omfattar även XMP, IPTC, C2PA och textchunks i PNG.' },
    { q: 'Kan metadata visa var en bild togs?', a: 'Ja, om bilden har GPS-taggar. Telefoner sparar oftast latitud, longitud och höjd när kameran får använda platsen. En tvätt tar bort taggarna utan att röra bildkvaliteten. Se [hur du tar bort GPS-position från bilder](remove-gps-location-from-photos).' },
    { q: 'Hur tar jag bort AI-metadata från en bild?', a: 'Släpp bilden i rutan högst upp på sidan och tryck på ”Tvätta alla bilder”. Innan tvätten visar varje fils kort vilka C2PA-, IPTC- och promptdata som hittades.' },
    { q: 'Är det säkert att ladda upp mina bilder här?', a: 'Dina bilder laddas inte upp alls. AI Label Remover öppnar filerna i webbläsaren, bearbetar dem i flikens minne och sparar den rena kopian direkt på din enhet. När sidan väl har laddats kan du gå offline och den fortsätter att fungera.' },
  ],
};

export default sv;
