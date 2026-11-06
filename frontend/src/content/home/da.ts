import type { HomeBasics } from '../pages/types';

const da: HomeBasics = {
  reassure: 'Online, gratis, uden konto og uden installation — billederne læses og renses direkte i browseren og bliver aldrig uploadet til en server.',
  sources: {
    label: 'Læser og fjerner metadata fra billeder lavet med',
    note: 'Produktnavnene viser kun, hvor billederne kommer fra; AI Label Remover er ikke tilknyttet disse virksomheder.',
  },
  learn: {
    what: {
      title: 'Hvad er metadata?',
      paragraphs: [
        'Metadata er “data om data”: noter gemt inde i en billedfil, som aldrig ses på selve billedet. Kameraer, telefoner, billedredigeringsprogrammer og AI-billedgeneratorer tilføjer dem automatisk, som regel uden at sige det.',
        'For fotos falder metadata i fem store grupper. Hver gruppe svarer på sit eget spørgsmål om billedet — og om den person, der tog eller lavede det.',
      ],
      types: [
        { name: 'Beskrivende', text: 'Titel, billedtekst, nøgleord, navne på personer i billedet.', example: 'IPTC Caption, XMP dc:title' },
        { name: 'Teknisk', text: 'Kameramærke og model, objektiv, blænde, lukkertid, ISO, serienummer.', example: 'EXIF Make, Model, BodySerialNumber' },
        { name: 'Sted & tid', text: 'GPS-koordinater, højde, optagelsesdato og tidszone.', example: 'EXIF GPSLatitude, DateTimeOriginal' },
        { name: 'Rettigheder & admin', text: 'Ophavsperson, ejer, copyright, senest brugte redigeringsprogram.', example: 'EXIF Artist, Copyright, Software' },
        { name: 'Oprindelse & AI', text: 'Content Credentials, mærker som “lavet med AI”, prompts og workflows.', example: 'C2PA manifest, IPTC DigitalSourceType' },
      ],
      synonyms:
        'Den samme opgave har mange navne — “metadatafjerner”, “fjern EXIF”, “metadatarenser”, “slet billedinfo” — og de betyder alle at tage de skjulte noter ud af filen uden at ændre billedet. På samme måde viser en “metadatafremviser”, “-læser” eller “-tjekker”, hvad der ligger i filen. AI Label Remover kan begge dele.',
    },
    why: {
      title: 'Hvorfor se og fjerne metadata, før du deler et billede?',
      paragraphs: [
        'Et enkelt metadatafelt er som regel harmløst, men tilsammen fortæller de meget om dig. Et billede taget derhjemme og lagt på en salgsside kan indeholde GPS-koordinater med få meters nøjagtighed; billeder sendt via e-mail eller skylink beholder alt, hvad kameraet skrev. Læs [hvordan GPS i billeder kan afsløre din adresse](remove-gps-location-from-photos).',
        'For billeder lavet eller redigeret med AI afgør metadata også, om en platform viser mærket “Lavet med AI”, og de kan afsløre hele den prompt, du skrev. Se [hvor mærket “Made with AI” kommer fra](made-with-ai-label).',
      ],
      bullets: [
        'Afsløre hvor du bor, arbejder eller rejser via GPS-koordinater.',
        'Knytte mange billeder til samme person via kameraets serienummer eller ejerens navn.',
        'Blotlægge prompts, seeds, modeller og workflows, du ville holde private.',
        'Få et AI-mærke fra en platform på grund af vedhæftede C2PA- eller IPTC-data.',
      ],
    },
    standards: {
      title: 'Almindelige metadatastandarder i fotos',
      lead: 'Én billedfil kan rumme flere metadata-“rum” på én gang, hver efter sin egen standard. AI Label Remover læser og fjerner dem alle.',
      items: [
        { name: 'EXIF', text: 'Skrives af kameraer og telefoner: eksponeringsindstillinger, enhed, tidsstempler, GPS, miniaturer.' },
        { name: 'XMP', text: 'Adobes XML-format til redigeringshistorik, bedømmelser, nøgleord og mange AI-relaterede egenskaber.' },
        { name: 'IPTC', text: 'Nyhedsbranchens standard: billedtekst, ophavsperson, copyright og feltet DigitalSourceType, der angiver AI-billeder.' },
        { name: 'C2PA', text: 'Kryptografisk signerede Content Credentials, der registrerer, hvordan en fil blev lavet og redigeret. [Hvad er C2PA](what-is-c2pa-content-credentials).' },
        { name: 'PNG text', text: 'tEXt-, iTXt- og zTXt-chunks, hvor [Stable Diffusion og ComfyUI](remove-stable-diffusion-comfyui-metadata) gemmer prompts og workflows.' },
      ],
    },
  },
  security: {
    title: 'Dine billeder forbliver sikre',
    lead: 'Med ethvert værktøj, der håndterer personlige filer, er det første spørgsmål “hvor ender mine billeder?”. AI Label Removers svar: ingen steder.',
    items: [
      { title: '100 % på din enhed', text: 'Læsning og rensning kører i en Web Worker i din browserfane. Ingen server modtager nogensinde dine filer.' },
      { title: 'Intet gemt, ingen AI-træning', text: 'Da billederne aldrig sendes nogen steder hen, findes der ingen kopi, der kan gemmes, lækkes eller bruges til at træne en model.' },
      { title: 'Virker offline', text: 'Indlæs siden, slå wi-fi fra og vask en fil — det virker stadig. Fanen Netværk i DevTools viser ingen billeddata, der forlader enheden.' },
      { title: 'Ingen konto, ingen sporing', text: 'Ingen tilmelding, ingen analyse, annoncer eller tredjepartspixels. Siden husker kun det sprog og tema, du vælger.' },
    ],
  },
  faq: [
    { q: 'Hvad er forskellen på EXIF og metadata?', a: 'EXIF er én slags metadata — den, kameraer og telefoner skriver. “Metadata” er det bredere begreb og dækker også XMP, IPTC, C2PA og tekstchunks i PNG.' },
    { q: 'Kan metadata vise, hvor et billede blev taget?', a: 'Ja, hvis billedet har GPS-tags. Telefoner gemmer normalt breddegrad, længdegrad og højde, når kameraet må bruge placeringen. En vask fjerner disse tags uden at røre billedkvaliteten. Se [sådan fjerner du GPS-placering fra billeder](remove-gps-location-from-photos).' },
    { q: 'Hvordan fjerner jeg AI-metadata fra et billede?', a: 'Slip billedet i feltet øverst på siden, og tryk på “Vask alle billeder”. Før vasken viser hver fils kort, hvilke C2PA-, IPTC- og promptdata der blev fundet.' },
    { q: 'Er det sikkert at uploade mine billeder her?', a: 'Dine billeder bliver slet ikke uploadet. AI Label Remover åbner filerne i browseren, behandler dem i fanens hukommelse og gemmer den rene kopi direkte på din enhed. Når siden er indlæst, kan du gå offline, og den virker stadig.' },
  ],
};

export default da;
