import type { HomeBasics } from '../pages/types';

const fi: HomeBasics = {
  reassure: 'Verkossa, ilmainen, ei rekisteröitymistä eikä asennuksia — kuvat luetaan ja puhdistetaan suoraan selaimessa, eikä niitä koskaan ladata palvelimelle.',
  sources: {
    label: 'Lukee ja poistaa metatiedot kuvista, jotka on tehty näillä:',
    note: 'Tuotenimet kertovat vain kuvien alkuperän; AI Label Remover ei ole sidoksissa näihin yrityksiin.',
  },
  learn: {
    what: {
      title: 'Mitä metatiedot ovat?',
      paragraphs: [
        'Metatiedot ovat ”tietoa tiedosta”: kuvatiedoston sisään tallennettuja merkintöjä, jotka eivät koskaan näy itse kuvassa. Kamerat, puhelimet, kuvankäsittelyohjelmat ja tekoälykuvageneraattorit lisäävät niitä automaattisesti, yleensä kertomatta siitä.',
        'Valokuvien metatiedot jakautuvat viiteen pääryhmään. Kukin vastaa eri kysymykseen kuvasta — ja sen ottajasta tai tekijästä.',
      ],
      types: [
        { name: 'Kuvailevat', text: 'Otsikko, kuvateksti, avainsanat, kuvassa olevien ihmisten nimet.', example: 'IPTC Caption, XMP dc:title' },
        { name: 'Tekniset', text: 'Kameran merkki ja malli, objektiivi, aukko, suljinaika, ISO, sarjanumero.', example: 'EXIF Make, Model, BodySerialNumber' },
        { name: 'Paikka ja aika', text: 'GPS-koordinaatit, korkeus, kuvausaika ja aikavyöhyke.', example: 'EXIF GPSLatitude, DateTimeOriginal' },
        { name: 'Oikeudet ja hallinta', text: 'Tekijä, omistaja, tekijänoikeus, viimeksi käytetty muokkausohjelma.', example: 'EXIF Artist, Copyright, Software' },
        { name: 'Alkuperä ja tekoäly', text: 'Content Credentials, ”tehty tekoälyllä” -merkinnät, kehotteet ja työnkulut.', example: 'C2PA manifest, IPTC DigitalSourceType' },
      ],
      synonyms:
        'Samalle työlle on monta nimeä — ”metatietojen poistaja”, ”EXIF-poisto”, ”metatietojen puhdistaja”, ”kuvan tietojen poisto” — ja kaikki tarkoittavat piilotettujen merkintöjen poistamista tiedostosta kuvaa muuttamatta. Samoin ”metatietojen katseluohjelma”, ”lukija” tai ”tarkistin” näyttää, mitä tiedoston sisällä on. AI Label Remover tekee molemmat.',
    },
    why: {
      title: 'Miksi metatiedot kannattaa tarkistaa ja poistaa ennen kuvan jakamista?',
      paragraphs: [
        'Yksittäinen metatietokenttä on yleensä harmiton, mutta yhdessä ne kertovat sinusta paljon. Kotona otettu ja kirpputorisivustolle ladattu kuva voi sisältää muutaman metrin tarkkuudella GPS-koordinaatit; sähköpostilla tai pilvilinkillä lähetetyt kuvat säilyttävät kaiken, mitä kamera kirjoitti. Lue, [miten kuvien GPS voi paljastaa kotiosoitteesi](remove-gps-location-from-photos).',
        'Tekoälyllä tehdyissä tai muokatuissa kuvissa metatiedot ratkaisevat myös, näyttääkö alusta merkinnän ”Tehty tekoälyllä”, ja ne voivat paljastaa koko kirjoittamasi kehotteen. Katso, [mistä ”Made with AI” -merkintä tulee](made-with-ai-label).',
      ],
      bullets: [
        'Asuin- ja työpaikkasi tai matkasi paljastuvat GPS-koordinaateista.',
        'Monta kuvaa voidaan yhdistää samaan henkilöön kameran sarjanumeron tai omistajan nimen kautta.',
        'Yksityisiksi tarkoitetut kehotteet, siemenluvut, mallit ja työnkulut tulevat näkyviin.',
        'Alusta antaa tekoälymerkinnän liitettyjen C2PA- tai IPTC-tietojen perusteella.',
      ],
    },
    standards: {
      title: 'Yleisimmät valokuvien metatietostandardit',
      lead: 'Yhdessä kuvatiedostossa voi olla samanaikaisesti useita metatietojen ”lokeroita”, joista kukin noudattaa omaa standardiaan. AI Label Remover lukee ja poistaa ne kaikki.',
      items: [
        { name: 'EXIF', text: 'Kameroiden ja puhelimien kirjoittamaa: valotusasetukset, laite, aikaleimat, GPS, pikkukuvat.' },
        { name: 'XMP', text: 'Adoben XML-muoto muokkaushistorialle, arvioille, avainsanoille ja monille tekoälyyn liittyville ominaisuuksille.' },
        { name: 'IPTC', text: 'Uutistoimitusten standardi: kuvateksti, tekijä, tekijänoikeus ja DigitalSourceType-kenttä, joka ilmoittaa tekoälykuvat.' },
        { name: 'C2PA', text: 'Kryptografisesti allekirjoitetut Content Credentials, jotka kirjaavat, miten tiedosto on tehty ja muokattu. [Mikä on C2PA](what-is-c2pa-content-credentials).' },
        { name: 'PNG text', text: 'tEXt-, iTXt- ja zTXt-lohkot, joihin [Stable Diffusion ja ComfyUI](remove-stable-diffusion-comfyui-metadata) tallentavat kehotteet ja työnkulut.' },
      ],
    },
  },
  security: {
    title: 'Kuvasi pysyvät turvassa',
    lead: 'Jokaisen henkilökohtaisia tiedostoja käsittelevän työkalun kohdalla ensimmäinen kysymys on ”minne kuvani menevät?”. AI Label Removerin vastaus: ei minnekään.',
    items: [
      { title: '100 % laitteellasi', text: 'Lukeminen ja puhdistus tapahtuvat Web Workerissa selainvälilehdelläsi. Mikään palvelin ei koskaan vastaanota tiedostojasi.' },
      { title: 'Ei tallennusta, ei tekoälyn koulutusta', text: 'Koska kuvia ei lähetetä minnekään, ei ole kopiota, joka voitaisiin tallentaa, vuotaa tai käyttää mallin kouluttamiseen.' },
      { title: 'Toimii ilman verkkoa', text: 'Lataa sivu, sammuta Wi-Fi ja pese tiedosto — se toimii silti. DevToolsin Verkko-välilehdellä ei näy lähteviä kuvatietoja.' },
      { title: 'Ei tiliä, ei seurantaa', text: 'Ei rekisteröitymistä, analytiikkaa, mainoksia eikä kolmansien osapuolten pikseleitä. Sivusto muistaa vain valitsemasi kielen ja teeman.' },
    ],
  },
  faq: [
    { q: 'Mitä eroa on EXIFillä ja metatiedoilla?', a: 'EXIF on yksi metatietojen laji — se, jonka kamerat ja puhelimet kirjoittavat. ”Metatiedot” on laajempi käsite, johon kuuluvat myös XMP, IPTC, C2PA ja PNG:n tekstilohkot.' },
    { q: 'Voivatko metatiedot paljastaa, missä kuva on otettu?', a: 'Kyllä, jos kuvassa on GPS-tunnisteita. Puhelimet tallentavat yleensä leveys- ja pituusasteen sekä korkeuden, kun kameralla on lupa käyttää sijaintia. Pesu poistaa nämä tunnisteet kuvanlaatua heikentämättä. Katso [GPS-sijainnin poistaminen kuvista](remove-gps-location-from-photos).' },
    { q: 'Miten poistan tekoälyn metatiedot kuvasta?', a: 'Pudota kuva tämän sivun yläosan ruutuun ja paina ”Pese kaikki kuvat”. Ennen pesua jokaisen tiedoston kortti näyttää löydetyt C2PA-, IPTC- ja kehotetiedot.' },
    { q: 'Onko turvallista ladata kuviani tänne?', a: 'Kuviasi ei ladata minnekään. AI Label Remover avaa tiedostot selaimessa, käsittelee ne välilehden muistissa ja tallentaa puhtaan kopion suoraan laitteellesi. Kun sivu on latautunut, voit siirtyä offline-tilaan ja se toimii edelleen.' },
  ],
};

export default fi;
