import type { HomeBasics } from '../pages/types';

const ca: HomeBasics = {
  reassure: 'En línia, gratuït, sense registre i sense instal·lar res: les fotos es llegeixen i es netegen directament al navegador i no es pugen mai a cap servidor.',
  sources: {
    label: 'Llegeix i elimina les metadades d’imatges fetes amb',
    note: 'Els noms dels productes només indiquen d’on provenen les imatges; AI Label Remover no està afiliat a aquestes empreses.',
  },
  learn: {
    what: {
      title: 'Què són les metadades?',
      paragraphs: [
        'Les metadades són “dades sobre dades”: notes desades dins d’un fitxer d’imatge que mai no apareixen a la foto. Càmeres, mòbils, editors de fotos i generadors d’imatges amb IA les afegeixen automàticament, gairebé sempre sense avisar-te.',
        'A les fotos, les metadades es divideixen en cinc grans grups. Cadascun respon una pregunta diferent sobre la imatge, i sobre la persona que la va fer o crear.',
      ],
      types: [
        { name: 'Descriptives', text: 'Títol, peu de foto, paraules clau, noms de les persones que hi surten.', example: 'IPTC Caption, XMP dc:title' },
        { name: 'Tècniques', text: 'Marca i model de la càmera, objectiu, obertura, velocitat, ISO, número de sèrie.', example: 'EXIF Make, Model, BodySerialNumber' },
        { name: 'Lloc i hora', text: 'Coordenades GPS, altitud, data de captura i zona horària.', example: 'EXIF GPSLatitude, DateTimeOriginal' },
        { name: 'Drets i gestió', text: 'Autor, propietari, copyright, últim programari d’edició.', example: 'EXIF Artist, Copyright, Software' },
        { name: 'Procedència i IA', text: 'Content Credentials, etiquetes “fet amb IA”, prompts i workflows.', example: 'C2PA manifest, IPTC DigitalSourceType' },
      ],
      synonyms:
        'Veuràs molts noms per a la mateixa feina —“eliminador de metadades”, “esborrar EXIF”, “netejador de metadades”, “treure informació de la foto”—: tots volen dir treure les notes ocultes del fitxer sense canviar la imatge. De la mateixa manera, un “visor”, “lector” o “verificador de metadades” mostra què hi ha dins del fitxer. AI Label Remover fa totes dues coses.',
    },
    why: {
      title: 'Per què veure i eliminar les metadades abans de compartir una foto?',
      paragraphs: [
        'Un sol camp de metadades sol ser inofensiu, però junts diuen molt de tu. Una foto feta a casa i publicada en un web de segona mà pot dur coordenades GPS amb una precisió de pocs metres; les imatges enviades per correu o enllaç al núvol conserven tot el que va escriure la càmera. Mira [com el GPS de les fotos pot revelar la teva adreça](remove-gps-location-from-photos).',
        'En imatges creades o editades amb IA, les metadades també decideixen si una plataforma mostra l’etiqueta “Fet amb IA”, i poden deixar veure el prompt complet que vas escriure. Descobreix [d’on surt l’etiqueta “Made with AI”](made-with-ai-label).',
      ],
      bullets: [
        'Revelar on vius, treballes o viatges a través de les coordenades GPS.',
        'Vincular moltes fotos a una mateixa persona pel número de sèrie de la càmera o el nom del propietari.',
        'Exposar prompts, seeds, models i workflows que volies mantenir en privat.',
        'Rebre una etiqueta d’IA d’una plataforma per les dades C2PA o IPTC adjuntes.',
      ],
    },
    standards: {
      title: 'Estàndards de metadades habituals a les fotos',
      lead: 'Un mateix fitxer d’imatge pot contenir alhora diversos “compartiments” de metadades, cadascun amb el seu estàndard. AI Label Remover llegeix i elimina tots els següents.',
      items: [
        { name: 'EXIF', text: 'L’escriuen càmeres i mòbils: paràmetres d’exposició, dispositiu, dates, GPS, miniatures.' },
        { name: 'XMP', text: 'El format XML d’Adobe per a l’historial d’edició, valoracions, paraules clau i moltes propietats relacionades amb la IA.' },
        { name: 'IPTC', text: 'L’estàndard de les redaccions: peu de foto, autor, copyright i el camp DigitalSourceType que declara les imatges d’IA.' },
        { name: 'C2PA', text: 'Content Credentials signades criptogràficament que registren com es va crear i editar un fitxer. [Què és C2PA](what-is-c2pa-content-credentials).' },
        { name: 'PNG text', text: 'Chunks tEXt, iTXt i zTXt on [Stable Diffusion i ComfyUI](remove-stable-diffusion-comfyui-metadata) desen prompts i workflows.' },
      ],
    },
  },
  security: {
    title: 'Les teves fotos continuen segures',
    lead: 'Amb qualsevol eina que tracti fitxers personals, la primera pregunta és “on van les meves fotos?”. La resposta d’AI Label Remover: enlloc.',
    items: [
      { title: '100% al teu dispositiu', text: 'La lectura i la neteja s’executen en un Web Worker dins de la pestanya del navegador. Cap servidor no rep els teus fitxers.' },
      { title: 'Res desat, sense entrenar IA', text: 'Com que les fotos no s’envien mai, no hi ha cap còpia per desar, filtrar o fer servir per entrenar un model.' },
      { title: 'Funciona sense connexió', text: 'Carrega la pàgina, apaga el Wi-Fi i neteja un fitxer: continua funcionant. La pestanya Xarxa de les DevTools no mostra dades d’imatge sortint.' },
      { title: 'Sense compte ni seguiment', text: 'Sense registre, sense analítica, anuncis ni píxels de tercers. El web només recorda l’idioma i el tema que triïs.' },
    ],
  },
  faq: [
    { q: 'Quina diferència hi ha entre EXIF i metadades?', a: 'EXIF és un tipus de metadades: el que escriuen càmeres i mòbils. “Metadades” és el terme general i inclou també XMP, IPTC, C2PA i els chunks de text del PNG.' },
    { q: 'Les metadades poden mostrar on es va fer una foto?', a: 'Sí, si la imatge té etiquetes GPS. Els mòbils solen desar latitud, longitud i altitud quan la càmera té accés a la ubicació. Netejar la imatge elimina aquestes etiquetes sense tocar-ne la qualitat. Mira [com treure la ubicació GPS de les fotos](remove-gps-location-from-photos).' },
    { q: 'Com elimino les metadades d’IA d’una imatge?', a: 'Deixa anar la imatge al requadre de dalt d’aquesta pàgina i prem “Neteja totes les imatges”. Abans de netejar, la fitxa de cada fitxer mostra les dades C2PA, IPTC i el prompt que s’hi han trobat.' },
    { q: 'És segur pujar les meves fotos aquí?', a: 'Les teves fotos no es pugen enlloc. AI Label Remover obre els fitxers al navegador, els processa a la memòria de la pestanya i desa la còpia neta directament al teu dispositiu. Un cop carregada la pàgina, pots desconnectar-te i continua funcionant.' },
  ],
};

export default ca;
