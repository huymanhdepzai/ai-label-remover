import type { Articles } from './types';

const ca: Articles = {
  'made-with-ai-label': {
    metaTitle: 'Per què les fotos reals reben l’etiqueta d’IA a Instagram',
    related: ['what-is-c2pa-content-credentials', 'hide-midjourney-dalle-prompts', 'remove-stable-diffusion-comfyui-metadata'],
    description:
      'Una foto real ha rebut l’etiqueta «Informació d’IA» a Instagram o Facebook? Sol ser un camp C2PA o IPTC escrit per l’editor. Com eliminar-lo sense pèrdues.',
    updated: '2026-11-09',
    sections: [
      {
        heading: 'L’etiqueta llegeix el fitxer, no la foto',
        paragraphs: [
          'L’etiqueta «Informació d’IA» de Meta (anomenada «Made with AI» fins a mitjan 2024) s’aplica quan una imatge pujada conté senyals reconeguts d’IA generativa. Dos d’aquests senyals són dins del mateix fitxer: [un manifest C2PA amb Content Credentials](what-is-c2pa-content-credentials) i la propietat IPTC DigitalSourceType desada al bloc XMP.',
          'El valor trainedAlgorithmicMedia indica que tota la imatge s’ha generat; compositeWithTrainedAlgorithmicMedia indica que una foto real conté parts fetes amb IA. Tots dos es poden llegir automàticament en pujar la imatge. Meta també fa servir altres senyals i demana als usuaris que declarin ells mateixos el contingut d’IA realista, de manera que les metadades són només un factor entre diversos.',
        ],
      },
      {
        heading: 'D’on surt el senyal erroni',
        paragraphs: ['En fotos reals, qui activa l’etiqueta és gairebé sempre l’aplicació d’edició, no la càmera. Fonts habituals:'],
        bullets: [
          'L’emplenament generatiu, l’expansió generativa o les eines d’esborrat amb IA, que poden afegir accions c2pa i marcar el fitxer com a composició.',
          'Exportar amb Content Credentials activat, que signa dins del fitxer la llista de totes les edicions.',
          'Funcions de la galeria del mòbil, com la goma d’esborrar amb IA, que hi deixen una marca d’edició.',
          'El pas del fitxer per altres aplicacions que copien les metadades existents, de manera que la marca sobreviu a diversos desaments.',
        ],
      },
      {
        heading: 'Localitzeu el camp amb AI Label Remover',
        paragraphs: [
          'Deixeu anar la imatge a l’eina. La pestanya «Rastres d’IA» mostra cada senyal i on es troba, per exemple «C2PA · compositeWithTrainedAlgorithmicMedia» o «XMP · Iptc4xmpExt › DigitalSourceType». A «Metadades en brut» hi veureu els valors reals, inclòs el programa que va signar el manifest i totes les accions c2pa registrades.',
          'El resultat «Val la pena tornar-hi» vol dir que el fitxer té Content Credentials sense cap declaració explícita d’IA. Algunes plataformes ja consideren el manifest un indici, així que decidiu-ho abans de publicar.',
        ],
      },
      {
        heading: 'Netegeu la còpia que publiqueu',
        paragraphs: [
          'Premeu «Elimina totes les metadades». AI Label Remover retalla del flux de bytes el magatzem C2PA i els blocs XMP, IPTC i EXIF, i deixa intactes les dades de la imatge, la mida, l’orientació i el perfil de color. El fitxer net es torna a llegir, de manera que abans de desar-lo comproveu que els rastres d’IA han desaparegut. Si teniu moltes imatges, podeu [netejar-les totes alhora](batch-remove-metadata).',
          'Tornar a desar la imatge com a JPEG nou també eliminaria les metadades, però la recomprimeix cada vegada i en baixa la qualitat. Retallar els blocs evita del tot aquesta pèrdua.',
        ],
      },
      {
        heading: 'Corregir una etiqueta errònia no és amagar-ne una de correcta',
        paragraphs: [
          'La neteja serveix per a etiquetes que descriuen malament la vostra feina i per mantenir privades les dades privades. Si una imatge és totalment o majoritàriament generada i podria passar per real, les normes de les plataformes solen demanar que ho indiqueu: l’etiqueta existeix per informar qui la mira. Feu servir AI Label Remover per corregir errors, no per fer passar imatges sintètiques per fotografies.',
        ],
      },
    ],
    faqHeading: 'Preguntes sobre l’etiqueta Informació d’IA',
    faq: [
      {
        q: 'Puc treure l’etiqueta després de publicar?',
        a: 'Normalment no, editant la publicació. Si l’etiqueta descriu malament una foto real, feu servir les opcions de recurs o d’estat del compte de la plataforma, si n’hi ha, i netegeu el fitxer abans de la propera publicació.',
      },
      {
        q: 'Si netejo el fitxer, l’etiqueta desapareixerà segur?',
        a: 'No hi ha garantia. La neteja elimina els senyals desats al fitxer, que són la causa habitual en fotos editades, però les plataformes poden fer servir altres sistemes de detecció.',
      },
      {
        q: 'La foto canvia visualment?',
        a: 'No. Només s’eliminen blocs de metadades. Les dades de la imatge es copien byte a byte, i l’orientació i el perfil de color ICC es mantenen.',
      },
      {
        q: 'Puc conservar la configuració de la càmera i treure només els camps d’IA?',
        a: 'De moment no. AI Label Remover elimina d’un sol cop totes les metadades identificatives (lloc, dispositiu, autoria i procedència d’IA), que és l’opció per defecte més segura per compartir en públic. La mida, l’orientació, el color i l’animació es conserven sempre.',
      },
    ],
  },

  'remove-stable-diffusion-comfyui-metadata': {
    metaTitle: 'Elimineu fluxos de ComfyUI i prompts d’SD dels PNG',
    related: ['hide-midjourney-dalle-prompts', 'batch-remove-metadata', 'what-is-c2pa-content-credentials'],
    description:
      'A1111, Forge i ComfyUI escriuen el prompt, la llavor, el model i tot el flux de treball a cada PNG. Mireu el text i elimineu-lo sense canviar ni un píxel.',
    updated: '2026-11-09',
    sections: [
      {
        heading: 'La vostra configuració viatja amb la imatge',
        paragraphs: [
          'Els generadors locals desen la configuració com a text dins del fitxer de sortida perquè la imatge es pugui recrear. Als PNG, aquest text es troba en chunks tEXt, zTXt o iTXt al costat de les dades de la imatge. Normalment hi trobareu:',
        ],
        bullets: [
          'A1111 i Forge: un chunk «parameters» amb el prompt, el prompt negatiu, els passos, el sampler, el CFG, la llavor, la resolució, el hash i el nom del model, i la configuració de LoRA i extensions.',
          'ComfyUI: un chunk «prompt» amb el graf de nodes executat i un chunk «workflow» amb tota la disposició de l’editor; deixeu anar el PNG a ComfyUI i tot el muntatge torna a aparèixer.',
          'InvokeAI, NovelAI i altres interfícies: dades semblants amb claus pròpies.',
          'Exportacions JPEG o WebP: algunes eines escriuen el mateix text al camp EXIF UserComment.',
        ],
      },
      {
        heading: 'Motius per netejar-ho, i motius per no fer-ho',
        paragraphs: [
          'Les dades de generació són una recepta completa. Amb elles qualsevol pot reproduir el vostre estil, veure en quins checkpoints i LoRA us baseu, i dins d’un flux de treball hi pot haver camins locals, noms de carpetes o noms d’usuari. Els grafs grans de ComfyUI també poden afegir desenes de kilobytes a cada imatge.',
          'D’altra banda, els llocs per compartir models llegeixen els paràmetres per mostrar la informació de generació, i els col·laboradors potser volen el flux de treball. Per això cal revisar cada fitxer primer: AI Label Remover us ho mostra tot abans d’eliminar res.',
        ],
      },
      {
        heading: 'Llegir el prompt a AI Label Remover',
        paragraphs: [
          'Deixeu anar el PNG a l’eina. A «Metadades en brut», cada chunk de text apareix sota la seva paraula clau (parameters, prompt, workflow) amb tot el contingut, i la pestanya «Rastres d’IA» l’identifica com a prompt de Stable Diffusion o flux de treball de ComfyUI. Els chunks comprimits zTXt i iTXt es descomprimeixen al navegador perquè els pugueu llegir.',
        ],
      },
      {
        heading: 'Què conserva la neteja',
        paragraphs: [
          'Premeu «Elimina totes les metadades». El processament de PNG elimina sencers els chunks de text, XMP, EXIF i C2PA, i conserva IHDR, IDAT, la paleta, la transparència, la gamma i els chunks de color, a més dels chunks d’animació APNG. Com que els chunks s’eliminen sencers, les sumes de control CRC restants continuen sent vàlides i el fitxer s’obre a tot arreu.',
          'Obrir i tornar a desar la imatge en un editor també eliminaria el text, però la recomprimeix i pot desplaçar els colors. L’eliminació a nivell de bytes evita totes dues coses. El mateix val per a les [baixades de Midjourney i DALL·E](hide-midjourney-dalle-prompts), on el prompt es desa d’una altra manera.',
        ],
      },
    ],
    faqHeading: 'Preguntes sobre les dades de Stable Diffusion i ComfyUI',
    faq: [
      {
        q: 'Com evito que A1111 o ComfyUI desin metadades?',
        a: 'A1111 i Forge tenen una opció que deixa d’escriure els paràmetres de generació als PNG, i ComfyUI es pot iniciar amb l’opció --disable-metadata. Totes dues només afecten les imatges noves, així que netegeu les que ja teniu.',
      },
      {
        q: 'ComfyUI pot reconstruir el flux de treball a partir d’un PNG net?',
        a: 'No. Els chunks «prompt» i «workflow» ja no hi són, de manera que arrossegar el fitxer a ComfyUI no restaura res. Guardeu un original intacte si heu de tornar a fer servir el graf.',
      },
      {
        q: 'El PNG net es veu exactament igual?',
        a: 'Sí. Els chunks IDAT amb els píxels comprimits es copien sense canvis, de manera que la imatge és idèntica píxel a píxel.',
      },
      {
        q: 'I les exportacions JPEG i WebP?',
        a: 'Els prompts desats a EXIF UserComment o a XMP també es detecten i s’eliminen dels fitxers JPEG i WebP.',
      },
    ],
  },

  'hide-midjourney-dalle-prompts': {
    metaTitle: 'Elimineu els prompts de les imatges de Midjourney i DALL·E',
    related: ['remove-stable-diffusion-comfyui-metadata', 'made-with-ai-label', 'what-is-c2pa-content-credentials'],
    description:
      'Les baixades de Midjourney, DALL·E, ChatGPT i Firefly poden contenir el prompt, l’ID de tasca i l’origen d’IA. Reviseu el fitxer abans de compartir-lo.',
    updated: '2026-11-09',
    sections: [
      {
        heading: 'Què hi escriuen els generadors en línia',
        paragraphs: [
          'Els serveis d’imatges en línia afegeixen cada vegada més metadades a les baixades, per transparència i per donar suport als estàndards de procedència. Els camps varien segons el servei i canvien amb el temps, de manera que l’única resposta fiable és obrir el fitxer. Hi podeu trobar:',
        ],
        bullets: [
          'Midjourney: el prompt i un ID de tasca als camps de descripció o de comentari, sovint amb un IPTC DigitalSourceType que marca la imatge com a feta amb IA.',
          'DALL·E i la generació d’imatges de ChatGPT: [C2PA Content Credentials](what-is-c2pa-content-credentials) amb el nom del generador.',
          'Adobe Firefly: Content Credentials que descriuen la imatge com a generada amb IA.',
          'Moltes eines: el nom del programa, la data de creació i, de vegades, un identificador vinculat al compte.',
        ],
      },
      {
        heading: 'Un prompt és una feina que val la pena protegir',
        paragraphs: [
          'Per a il·lustradors, dissenyadors i autors de prompts, un prompt polit és el resultat de moltes rondes d’assaig i error. Qualsevol visor de metadades gratuït mostra el text incrustat a qui baixi la vostra imatge, a punt per copiar. Els ID de tasca i les dades del compte també poden vincular una imatge pública amb vosaltres.',
        ],
      },
      {
        heading: 'Primer mireu, després netegeu',
        paragraphs: [
          'Deixeu anar la imatge a l’eina i llegiu l’informe. Les files marcades com a «IA» contenen prompts, noms de generadors i declaracions de procedència; les files de «Persones» contenen autors, descripcions i identificadors. Premeu «Elimina totes les metadades» i deseu el fitxer net, o tot el lot en un ZIP.',
          'Tot s’executa al vostre navegador, de manera que els prompts que protegiu no passen per cap altre servei pel camí.',
        ],
      },
      {
        heading: 'Límits que cal conèixer',
        paragraphs: [
          'Alguns proveïdors també amaguen marques d’aigua als mateixos píxels, com SynthID de Google. No són metadades i la neteja no les toca. I si publiqueu una imatge d’IA realista, les normes de la plataforma encara poden exigir que ho declareu: llegiu més sobre [l’etiqueta Informació d’IA](made-with-ai-label). La neteja protegeix el vostre procés; no canvia què és la imatge.',
        ],
      },
    ],
    faqHeading: 'Preguntes sobre les metadades de Midjourney i DALL·E',
    faq: [
      {
        q: 'Algú pot llegir el meu prompt d’una imatge baixada?',
        a: 'Si el prompt és a les metadades del fitxer, qualsevol persona amb un visor de metadades el pot llegir i copiar. Netejar el fitxer abans de compartir-lo l’elimina.',
      },
      {
        q: 'Totes les baixades de Midjourney contenen el prompt?',
        a: 'Depèn del format i del comportament actual del servei. Obriu el fitxer a AI Label Remover per veure exactament què conté.',
      },
      {
        q: 'La neteja elimina SynthID o marques d’aigua semblants?',
        a: 'No. Les marques d’aigua invisibles són a les dades dels píxels, que AI Label Remover no modifica mai.',
      },
      {
        q: 'Puc netejar tota una sèrie de generacions?',
        a: 'Sí. Carregueu fins a 50 imatges, reviseu els informes i deseu-les totes en un sol ZIP.',
      },
    ],
  },

  'what-is-c2pa-content-credentials': {
    metaTitle: 'Què és C2PA? Les Content Credentials explicades',
    related: ['made-with-ai-label', 'hide-midjourney-dalle-prompts', 'remove-gps-location-from-photos'],
    description:
      'Una guia senzilla de C2PA i Content Credentials: què registra el manifest signat, on el desa cada format de fitxer, com llegir-lo i què implica eliminar-lo.',
    updated: '2026-11-09',
    sections: [
      {
        heading: 'En poques paraules',
        paragraphs: [
          'La Coalition for Content Provenance and Authenticity (C2PA) manté un estàndard obert per adjuntar als continguts multimèdia un historial que deixa en evidència qualsevol manipulació. Els usuaris el veuen com a Content Credentials. Les càmeres, els editors i els generadors d’IA poden signar dins d’una imatge un registre de com s’ha creat: feta amb una càmera, editada en una aplicació o produïda per un model.',
        ],
      },
      {
        heading: 'Anatomia d’un manifest',
        paragraphs: ['Un manifest és un paquet compacte i estructurat amb tres parts principals:'],
        bullets: [
          'Claim generator: el programa o servei que ha creat el manifest, com un editor o una API d’imatges d’IA.',
          'Asseveracions (assertions): declaracions sobre el contingut, com c2pa.actions (creat, editat, obert, redimensionat, etc.), un digitalSourceType i enllaços als fitxers d’origen.',
          'Signatura: una signatura criptogràfica i un certificat que identifiquen qui signa, a més d’un hash que vincula el manifest exactament a aquestes dades d’imatge.',
        ],
      },
      {
        heading: 'On el desa cada format',
        paragraphs: [
          'El manifest s’empaqueta en un contenidor JUMBF que cada format desa al seu lloc: segments APP11 al JPEG, un chunk caBX al PNG, un chunk C2PA al WebP i una caixa uuid a HEIC i AVIF. Com que és un bloc separat, es pot llegir i eliminar sense descodificar la imatge. AI Label Remover mostra el bloc, el generador, les accions registrades i el tipus d’origen quan hi són.',
        ],
      },
      {
        heading: 'Què fa realment l’eliminació',
        paragraphs: [
          'La neteja esborra el registre incrustat d’aquella còpia del fitxer. Tingueu en compte que qualsevol edició ja trenca el vincle criptogràfic (els verificadors marquen com a no vàlid un manifest que ja no coincideix amb els píxels), de manera que eliminar-lo treu un registre que, si no, només viatjaria amb el fitxer.',
          'Alguns sistemes afegeixen credencials «duradores»: una marca d’aigua invisible o una empremta que permet a un verificador recuperar el manifest d’un repositori en línia fins i tot quan la còpia incrustada ha desaparegut. Eliminar metadades no les afecta, perquè són als píxels o en un servidor remot.',
        ],
      },
      {
        heading: 'Conservar-lo o netejar-lo?',
        paragraphs: [
          'Les credencials són útils quan heu de demostrar d’on ve una imatge, en periodisme o per a les vostres fotografies originals. També poden revelar programari, historial d’edicions i identitat que preferiu guardar per a vosaltres, o [activar etiquetes d’IA en fotos lleugerament editades](made-with-ai-label). Llegiu primer el manifest i decidiu fitxer per fitxer.',
        ],
      },
    ],
    faqHeading: 'Preguntes sobre C2PA',
    faq: [
      {
        q: 'Qui fa servir C2PA?',
        a: 'Adobe, Microsoft, Google, OpenAI, Meta, fabricants de càmeres com Leica, Sony i Nikon i moltes organitzacions de notícies donen suport a l’estàndard o formen part de la coalició, tot i que cadascú el fa servir de manera diferent.',
      },
      {
        q: 'C2PA és una mena de marca d’aigua invisible?',
        a: 'No. C2PA són metadades desades al costat de les dades de la imatge. Les marques d’aigua als píxels, com SynthID, són un mecanisme diferent i la neteja no les afecta.',
      },
      {
        q: 'Com verifico la signatura abans de netejar?',
        a: 'AI Label Remover mostra el generador, les accions i el tipus d’origen. Per validar del tot la signatura, passeu primer l’original per un verificador oficial de Content Credentials.',
      },
      {
        q: 'Eliminar C2PA fa perdre qualitat?',
        a: 'No. El manifest és un bloc a part; les dades comprimides de la imatge es copien tal com són.',
      },
    ],
  },

  'remove-gps-location-from-photos': {
    metaTitle: 'Elimineu la ubicació GPS de les fotos a iPhone, Android i PC',
    related: ['batch-remove-metadata', 'what-is-c2pa-content-credentials', 'made-with-ai-label'],
    description:
      'Elimineu la ubicació GPS de les fotos abans de compartir-les: quins camps EXIF revelen el lloc, el dispositiu i l’hora, i com eliminar-los sense pèrdues.',
    updated: '2026-11-09',
    sections: [
      {
        heading: 'Què grava el mòbil a cada foto',
        paragraphs: ['Amb els serveis d’ubicació activats, una foto normal de mòbil pot contenir:'],
        bullets: [
          'Latitud, longitud i altitud, sovint amb una precisió de pocs metres, i una marca de temps GPS.',
          'El moment exacte en què es va fer i es va editar per última vegada.',
          'Fabricant i model, dades de l’objectiu i, de vegades, un número de sèrie o el nom del propietari.',
          'Previsualitzacions incrustades i imatges secundàries (mapes de profunditat, imatges MPF) amb la seva pròpia còpia de les dades EXIF.',
        ],
      },
      {
        heading: 'Com surt el fitxer original',
        paragraphs: [
          'Les grans xarxes socials solen treure l’EXIF del que publiquen, però moltes vies lliuren l’original intacte: «envia com a fitxer» a les aplicacions de missatgeria, els adjunts de correu, els enllaços compartits al núvol, els fòrums, les webs de compravenda i els portafolis. Una sola foto feta a casa pot revelar la vostra adreça; una sèrie pot revelar la vostra rutina.',
        ],
      },
      {
        heading: 'Comproveu quina ubicació revela la foto',
        paragraphs: [
          'Deixeu anar la foto a l’eina. La pestanya «Què revela» mostra de seguida si hi ha camps de lloc, persones i hora, amb la posició GPS convertida en coordenades decimals. «Metadades en brut» llista cada camp agrupat per EXIF IFD0, Exif i GPS.',
        ],
      },
      {
        heading: 'Netegeu-la sense efectes secundaris',
        paragraphs: [
          'Premeu «Elimina totes les metadades». Desapareixen el GPS, les dates, el dispositiu, l’autor i els camps de programari, juntament amb les miniatures incrustades i les imatges secundàries MPF, que altrament en conservarien una còpia amagada. L’etiqueta d’orientació es torna a escriure en un petit bloc EXIF perquè les fotos verticals no surtin girades, i es conserva el perfil de color perquè els colors siguin fidels. Els fitxers HEIC de l’iPhone es netegen directament, sense convertir-los a JPEG.',
        ],
      },
      {
        heading: 'Atureu-ho des de la càmera',
        paragraphs: [
          'A l’iPhone: Configuració → Privacitat i seguretat → Localització → Càmera → Mai. A Android, normalment podeu desactivar les etiquetes d’ubicació a la configuració de l’aplicació Càmera (el nom varia segons el fabricant). Netejar el fitxer abans d’enviar-lo continua sent l’hàbit més complet, perquè també treu dades del dispositiu, de l’hora i de les previsualitzacions que la configuració del mòbil no toca.',
        ],
      },
      {
        heading: 'Fins a quin punt són precises les coordenades',
        paragraphs: [
          'L’EXIF desa la latitud i la longitud en graus, minuts i segons, i els mòbils registren els segons amb decimals. Un segon de latitud equival a uns 31 metres, de manera que un valor amb dos decimals assenyala, sobre el paper, un punt de menys d’un metre d’amplada. La precisió real depèn del senyal (sovint de 3 a 10 metres a l’aire lliure, pitjor a l’interior), però continua sent suficient per identificar una sola casa. Molts mòbils també hi afegeixen l’altitud, que pot donar pistes sobre el pis, i la direcció de la brúixola cap on apuntava l’objectiu.',
        ],
      },
      {
        heading: 'La ubicació s’amaga en més llocs que les etiquetes GPS',
        paragraphs: [
          'Buidar el directori GPS no sempre n’hi ha prou. Els gestors de fotos poden copiar les coordenades a XMP, i camps IPTC com ciutat, indret i país poden anomenar el lloc en text llegible. AI Label Remover elimina XMP i IPTC juntament amb l’EXIF, així que aquestes còpies també desapareixen. El que cap eina de metadades no pot eliminar és la imatge en si: rètols de carrers, números de portal, la vista des d’una finestra o un reflex poden delatar el lloc, així que reviseu la foto abans de publicar-la.',
        ],
      },
      {
        heading: 'Una comprovació ràpida abans de compartir',
        paragraphs: [],
        bullets: [
          'Deixeu anar la foto a AI Label Remover i mireu la pestanya «Què revela».',
          'Si hi apareix un lloc, premeu «Elimina totes les metadades» i deseu la còpia neta.',
          'Comproveu que el tauler verd confirma que el lloc, les persones i l’hora han desaparegut.',
          'Mireu si la imatge té pistes visibles: adreces, matrícules, punts de referència.',
          'Compartiu la còpia neta i guardeu l’original a la vostra biblioteca. Amb moltes fotos, la [neteja per lots](batch-remove-metadata) us estalvia temps.',
        ],
      },
    ],
    faqHeading: 'Preguntes sobre el GPS i la privacitat de les fotos',
    faq: [
      {
        q: 'Es pot recuperar la ubicació després de netejar?',
        a: 'Del fitxer net, no: els camps s’eliminen, no s’amaguen. L’original del mòbil encara conserva la ubicació, així que compartiu només la còpia neta.',
      },
      {
        q: 'Si desactivo el GPS, les fotos encara s’etiqueten?',
        a: 'Pot passar. El mòbil pot calcular la posició a partir de xarxes Wi-Fi i mòbils, així que desactiveu l’accés a la ubicació de l’aplicació de càmera, no només el GPS.',
      },
      {
        q: 'Les xarxes socials no treuen el GPS igualment?',
        a: 'Moltes de les grans treuen l’EXIF de la imatge publicada. Els adjunts, els documents i els enllaços al núvol solen conservar les metadades originals.',
      },
      {
        q: 'La foto sortirà girada?',
        a: 'No. Es conserva l’etiqueta d’orientació, de manera que la foto es mostra exactament igual que abans. Els fitxers HEIC de l’iPhone també es netegen sense canviar de format.',
      },
    ],
  },

  'batch-remove-metadata': {
    metaTitle: 'Elimineu metadades de moltes imatges alhora, gratis',
    related: ['remove-gps-location-from-photos', 'remove-stable-diffusion-comfyui-metadata', 'hide-midjourney-dalle-prompts'],
    description:
      'Netegeu fins a 50 imatges alhora al navegador: com els workers paral·lels mantenen la velocitat, com es revisa cada resultat i com deseu tot el lot en un ZIP.',
    updated: '2026-11-09',
    sections: [
      {
        heading: 'Un lot de principi a fi',
        paragraphs: [],
        bullets: [
          'Deixeu anar a l’eina fins a 50 fitxers JPG, PNG, WebP, GIF, HEIC o AVIF (fins a 25 MB i 40 megapíxels cadascun).',
          'Cada fitxer es llegeix automàticament; feu clic en un fitxer de la cua per veure’n l’informe.',
          'Premeu una sola vegada «Elimina totes les metadades» per netejar tot el que s’ha llegit.',
          'Deseu els fitxers d’un en un, o premeu «Desa-ho tot en ZIP» per obtenir un sol arxiu.',
        ],
      },
      {
        heading: 'Velocitat sense servidor',
        paragraphs: [
          'AI Label Remover reparteix la feina entre diversos Web Workers (fils en segon pla del navegador) segons el nombre de nuclis del processador. Cada worker agafa un fitxer, l’analitza i retorna els bytes nets, de manera que la pàgina continua fluida fins i tot amb fitxers HEIC pesants. El ZIP fa servir el mètode d’emmagatzematge sense compressió, perquè les imatges ja estan comprimides: l’empaquetat és ràpid i no afegeix cap pèrdua.',
        ],
      },
      {
        heading: 'Cada resultat es torna a llegir',
        paragraphs: [
          'Després de netejar, cada fitxer de sortida es torna a llegir, i el tauler verd de resultats confirma si el lloc, les persones, l’hora i els rastres d’IA han desaparegut. Si dos fitxers tenen el mateix nom, la còpia del ZIP rep un número perquè no se sobreescrigui res.',
        ],
      },
      {
        heading: 'Centenars de fitxers',
        paragraphs: [
          'Treballeu en rondes de 50 i buideu la taula entre rondes per alliberar memòria. Als mòbils amb poca memòria, tanqueu abans altres pestanyes pesants. Com que no es puja res, fins i tot podeu treballar sense connexió un cop carregada la pàgina.',
        ],
      },
      {
        heading: 'Res no surt de l’ordinador',
        paragraphs: [
          'Cap imatge no es puja, no es desa ni es registra; l’únic trànsit de xarxa és la càrrega de la pàgina. Per això la neteja per lots és adequada per a lliuraments a clients, sessions inèdites i qualsevol cosa que no pugueu enviar a tercers, per exemple per [eliminar la ubicació GPS de les fotos de vacances](remove-gps-location-from-photos) o [netejar els prompts de Stable Diffusion](remove-stable-diffusion-comfyui-metadata) d’una carpeta sencera.',
        ],
      },
    ],
    faqHeading: 'Preguntes sobre la neteja per lots',
    faq: [
      {
        q: 'Un lot pot barrejar formats diferents?',
        a: 'Sí. Un mateix lot pot combinar JPG, PNG, WebP, GIF, HEIC i AVIF, i cada fitxer conserva el seu format.',
      },
      {
        q: 'Per què el límit és de 50 fitxers?',
        a: 'Tot el processament fa servir la memòria del vostre dispositiu. El límit manté estables els mòbils i els portàtils antics; podeu fer tantes rondes com vulgueu.',
      },
      {
        q: 'Canvien els noms dels fitxers?',
        a: 'No. Els fitxers nets conserven el nom. Només els duplicats exactes dins del ZIP reben un sufix numèric.',
      },
      {
        q: 'Funciona sense connexió?',
        a: 'Sí. Un cop carregada, la pàgina neteja fitxers sense connexió, perquè no s’envia res enlloc.',
      },
    ],
  },
};

export default ca;
