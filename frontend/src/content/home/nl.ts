import type { HomeBasics } from '../pages/types';

const nl: HomeBasics = {
  reassure: 'Online, gratis, zonder account en zonder installatie — foto’s worden direct in je browser gelezen en opgeschoond en nooit naar een server geüpload.',
  sources: {
    label: 'Leest en verwijdert metadata uit afbeeldingen gemaakt met',
    note: 'Productnamen geven alleen aan waar afbeeldingen vandaan komen; AI Label Remover is niet verbonden aan deze bedrijven.',
  },
  learn: {
    what: {
      title: 'Wat is metadata?',
      paragraphs: [
        'Metadata is “data over data”: notities in een afbeeldingsbestand die nooit in de foto zelf te zien zijn. Camera’s, telefoons, fotobewerkers en AI-beeldgeneratoren voegen ze automatisch toe, meestal zonder het te melden.',
        'Bij foto’s valt metadata in vijf grote groepen uiteen. Elke groep beantwoordt een andere vraag over de afbeelding — en over de persoon die haar maakte.',
      ],
      types: [
        { name: 'Beschrijvend', text: 'Titel, bijschrift, trefwoorden, namen van mensen op de foto.', example: 'IPTC Caption, XMP dc:title' },
        { name: 'Technisch', text: 'Merk en model van de camera, lens, diafragma, sluitertijd, ISO, serienummer.', example: 'EXIF Make, Model, BodySerialNumber' },
        { name: 'Locatie & tijd', text: 'GPS-coördinaten, hoogte, opnamedatum en tijdzone.', example: 'EXIF GPSLatitude, DateTimeOriginal' },
        { name: 'Rechten & beheer', text: 'Maker, eigenaar, copyright, laatst gebruikte bewerkingssoftware.', example: 'EXIF Artist, Copyright, Software' },
        { name: 'Herkomst & AI', text: 'Content Credentials, labels “gemaakt met AI”, prompts en workflows.', example: 'C2PA manifest, IPTC DigitalSourceType' },
      ],
      synonyms:
        'Je ziet veel namen voor hetzelfde werk — “metadata-verwijderaar”, “EXIF verwijderen”, “metadata-scrubber”, “foto-info wissen” — en ze betekenen allemaal: de verborgen notities uit een bestand halen zonder de foto te veranderen. Een “metadata-viewer”, “-lezer” of “-checker” laat juist zien wat er in het bestand zit. AI Label Remover doet allebei.',
    },
    why: {
      title: 'Waarom metadata bekijken en verwijderen voordat je een foto deelt?',
      paragraphs: [
        'Eén metadataveld is meestal onschuldig, maar samen vertellen ze veel over jou. Een foto die thuis is gemaakt en op een advertentiesite staat, kan GPS-coördinaten bevatten die tot op een paar meter nauwkeurig zijn; afbeeldingen die je per e-mail of cloudlink verstuurt, houden alles wat de camera schreef. Lees [hoe GPS in foto’s je huisadres kan verraden](remove-gps-location-from-photos).',
        'Bij afbeeldingen die met AI zijn gemaakt of bewerkt, bepaalt metadata ook of een platform een label “Gemaakt met AI” toont, en kan ze de volledige prompt prijsgeven. Zie [waar het label “Made with AI” vandaan komt](made-with-ai-label).',
      ],
      bullets: [
        'Laten zien waar je woont, werkt of reist via GPS-coördinaten.',
        'Veel foto’s aan één persoon koppelen via het serienummer van de camera of de naam van de eigenaar.',
        'Prompts, seeds, modellen en workflows blootgeven die je privé wilde houden.',
        'Een AI-label van een platform krijgen door meegestuurde C2PA- of IPTC-gegevens.',
      ],
    },
    standards: {
      title: 'Veelgebruikte metadatastandaarden voor foto’s',
      lead: 'Eén afbeeldingsbestand kan tegelijk meerdere metadata-“vakken” bevatten, elk volgens een eigen standaard. AI Label Remover leest en verwijdert ze allemaal.',
      items: [
        { name: 'EXIF', text: 'Geschreven door camera’s en telefoons: belichtingsinstellingen, apparaat, tijdstempels, GPS, miniaturen.' },
        { name: 'XMP', text: 'Het XML-formaat van Adobe voor bewerkingsgeschiedenis, beoordelingen, trefwoorden en veel AI-gerelateerde eigenschappen.' },
        { name: 'IPTC', text: 'De standaard van redacties: bijschrift, maker, copyright en het veld DigitalSourceType dat AI-afbeeldingen aanmerkt.' },
        { name: 'C2PA', text: 'Cryptografisch ondertekende Content Credentials die vastleggen hoe een bestand is gemaakt en bewerkt. [Wat is C2PA](what-is-c2pa-content-credentials).' },
        { name: 'PNG text', text: 'tEXt-, iTXt- en zTXt-chunks waarin [Stable Diffusion en ComfyUI](remove-stable-diffusion-comfyui-metadata) prompts en workflows opslaan.' },
      ],
    },
  },
  security: {
    title: 'Je foto’s blijven veilig',
    lead: 'Bij elke tool die persoonlijke bestanden verwerkt, is de eerste vraag: “waar gaan mijn foto’s naartoe?” Het antwoord van AI Label Remover: nergens.',
    items: [
      { title: '100% op je apparaat', text: 'Lezen en opschonen gebeurt in een Web Worker in je browsertabblad. Geen enkele server ontvangt je bestanden.' },
      { title: 'Niets opgeslagen, geen AI-training', text: 'Omdat foto’s nergens heen gaan, bestaat er geen kopie die kan worden opgeslagen, gelekt of gebruikt om een model te trainen.' },
      { title: 'Werkt offline', text: 'Laad de pagina, zet wifi uit en was een bestand — het werkt nog steeds. Het tabblad Netwerk in DevTools toont geen beeldgegevens die vertrekken.' },
      { title: 'Geen account, geen tracking', text: 'Geen registratie, geen analytics, advertenties of pixels van derden. De site onthoudt alleen de taal en het thema die je kiest.' },
    ],
  },
  faq: [
    { q: 'Wat is het verschil tussen EXIF en metadata?', a: 'EXIF is één soort metadata — de soort die camera’s en telefoons schrijven. “Metadata” is het bredere begrip en omvat ook XMP, IPTC, C2PA en tekstchunks in PNG.' },
    { q: 'Kan metadata laten zien waar een foto is gemaakt?', a: 'Ja, als de afbeelding GPS-tags heeft. Telefoons leggen meestal breedtegraad, lengtegraad en hoogte vast als de camera je locatie mag gebruiken. Wassen verwijdert deze tags zonder de kwaliteit aan te tasten. Zie [GPS-locatie uit foto’s verwijderen](remove-gps-location-from-photos).' },
    { q: 'Hoe verwijder ik AI-metadata uit een afbeelding?', a: 'Sleep de afbeelding naar het vak bovenaan deze pagina en klik op “Alle afbeeldingen wassen”. Vóór het wassen toont het overzicht van elk bestand welke C2PA-, IPTC- en promptgegevens erin zitten.' },
    { q: 'Is het veilig om mijn foto’s hier te uploaden?', a: 'Je foto’s worden helemaal niet geüpload. AI Label Remover opent bestanden in je browser, verwerkt ze in het geheugen van het tabblad en slaat de schone kopie direct op je apparaat op. Zodra de pagina geladen is, kun je offline gaan en blijft alles werken.' },
  ],
};

export default nl;
