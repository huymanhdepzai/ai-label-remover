import type { Pages } from './types';

const fr: Pages = {
  home: {
    reassure: 'En ligne, gratuit, sans inscription ni installation — les photos sont lues et nettoyées directement dans votre navigateur, sans jamais être envoyées sur un serveur.',
    ctaTools: 'Voir tous les outils',
    sources: {
      label: 'Lit et supprime les métadonnées des images créées avec',
      note: 'Les noms de produits indiquent seulement l’origine des images ; AI Label Remover n’est pas affilié à ces sociétés.',
    },
    start: {
      title: 'Commencez avec votre fichier',
      lead: 'Choisissez la tâche à accomplir — chaque outil intègre la zone de dépôt en haut de la page.',
      badge: 'Recommandé',
      open: 'Ouvrir l’outil',
    },
    nav: {
      remove: 'Supprimer les métadonnées',
      check: 'Voir et vérifier',
      learn: 'Comprendre',
      viewer: 'Voir les métadonnées',
      aiCheck: 'Vérifier si c’est de l’IA',
      whatIs: 'Que sont les métadonnées ?',
    },
  },
  labels: {
    tools: 'Autres outils de métadonnées',
    relatedTools: 'Outils dédiés à ce besoin',
    homeTitle: 'Un outil pour chaque besoin',
    homeLead: 'Chaque page se concentre sur une tâche, avec l’outil prêt à l’emploi en haut.',
    formats: 'Ce qui est supprimé et ce qui reste',
    contact: 'Contact',
    contactText: 'Une question, un bug ou un fichier mal nettoyé ? Écrivez à',
    updated: 'Mis à jour le {date}',
  },
  tools: {
    'ai-tag-cleaner': {
      metaTitle: 'AI Tag Cleaner – Retirer les tags IA des métadonnées',
      description: 'Nettoyez les tags IA de vos images : IPTC « généré par IA », C2PA, nom du générateur en XMP et prompts. Sans perte, gratuit, dans le navigateur, sans envoi.',
      navLabel: 'Nettoyeur de tags IA',
      h1: 'AI Tag Cleaner : retirez les tags IA de vos images',
      lead: 'Les générateurs IA et les éditeurs dotés d’IA marquent les fichiers qu’ils touchent : un type de source « généré par IA », un enregistrement C2PA signé, le nom de l’appli, parfois le prompt entier. Déposez une image ci-dessous pour voir chacun de ses tags IA, puis retirez-les sans réencoder un seul pixel.',
      sections: [
        {
          heading: 'Ce qui compte comme un tag IA',
          paragraphs: [
            'Un tag IA, c’est tout champ du fichier qui dit, ou laisse entendre, qu’une IA est intervenue. Ils se répartissent dans plusieurs normes de métadonnées à la fois, d’où l’inefficacité de la suppression d’un seul champ à la main :',
          ],
          bullets: [
            'Les valeurs [DigitalSourceType](iptc-digitalsourcetype-ai) d’IPTC et de XMP, comme trainedAlgorithmicMedia ou compositeWithTrainedAlgorithmicMedia.',
            'Les actions des [Content Credentials C2PA](what-is-c2pa-content-credentials) qui signalent une étape générative, écrites par ChatGPT, Firefly, Photoshop et d’autres.',
            'Les champs Software et CreatorTool qui nomment le générateur, ainsi que l’historique XMP des retouches par IA.',
            'Prompt, seed et modèle dans les chunks PNG de [Stable Diffusion et ComfyUI](remove-stable-diffusion-comfyui-metadata).',
          ],
        },
        {
          heading: 'Comment fonctionne le nettoyeur de tags IA',
          paragraphs: [
            'AI Label Remover lit la structure du fichier directement dans votre navigateur. Chaque tag IA est affiché avec le champ exact d’où il vient, et le fichier reçoit un verdict — « Traces d’IA trouvées », « À regarder de plus près » ou « Aucune trace d’IA » — avant toute modification.',
            '« Nettoyer toutes les images » découpe les blocs qui contiennent ces tags : XMP, IPTC, EXIF, le magasin de manifestes C2PA et les chunks texte PNG. Les données d’image compressées sont copiées octet par octet, et la copie nettoyée est relue pour confirmer qu’il ne reste aucun tag IA.',
          ],
        },
        {
          heading: 'Quel outil laisse quels tags',
          paragraphs: [
            'Les images de ChatGPT et Gemini arrivent avec des enregistrements C2PA ; Firefly et le Remplissage génératif de Photoshop ajoutent C2PA et DigitalSourceType ; Midjourney écrit du XMP descriptif ; les interfaces Stable Diffusion stockent tous les réglages dans le PNG. [Les métadonnées ajoutées par les générateurs d’images IA](what-metadata-ai-image-generators-add) les passe en revue un par un.',
          ],
        },
        {
          heading: 'Ce qu’un nettoyeur de tags IA ne peut pas faire',
          paragraphs: [
            'Le nettoyage ne touche que les métadonnées. [Les filigranes invisibles comme SynthID](synthid-invisible-ai-watermarks) sont dans les pixels et restent en place, et les plateformes peuvent utiliser leurs propres classificateurs. Retirer les tags sert la confidentialité et la correction de labels erronés sur de vraies photos — si une image est générée par IA et réaliste, les règles des plateformes demandent en général de le signaler.',
          ],
        },
      ],
      faqHeading: 'Questions sur le nettoyeur de tags IA',
      faq: [
        { q: 'Un tag IA, est-ce la même chose qu’un label IA ?', a: 'Pas tout à fait. Le tag est une donnée dans le fichier ; le label est ce qu’affiche la plateforme, comme « Infos IA » sur Instagram. Le label naît souvent du tag. Pour l’éviter sur une vraie photo, voir [No AI Tag](no-ai-tag).' },
        { q: 'Puis-je retirer seulement les tags IA et garder le reste ?', a: 'Le nettoyeur retire des blocs de métadonnées entiers plutôt que des champs isolés, car les tags IA sont répartis sur plusieurs blocs. L’orientation, le profil couleur ICC et la taille en pixels sont toujours conservés : l’image s’affiche comme avant.' },
        { q: 'Retirer les tags IA réduit-il la qualité ?', a: 'Non. Rien n’est réencodé, seules les métadonnées sont retirées. Voir [pourquoi une suppression sans perte compte](remove-metadata-without-losing-quality).' },
        { q: 'Quels formats sont pris en charge ?', a: 'JPG, PNG, WebP, GIF, HEIC/HEIF et AVIF — jusqu’à 50 fichiers à la fois, 25 Mo chacun au maximum. Les prompts des PNG peuvent aussi être retirés avec l’outil pour [supprimer les métadonnées PNG](png-metadata-remover).' },
        { q: 'Cela supprime-t-il les métadonnées des images ChatGPT ou Gemini ?', a: 'Cela supprime les Content Credentials C2PA et les champs IPTC qu’écrivent ces services. Google intègre en plus un filigrane SynthID dans les pixels, qu’aucun outil de métadonnées ne peut retirer. Détails dans [les métadonnées des images ChatGPT et Gemini](chatgpt-gemini-image-metadata).' },
        { q: 'Puis-je voir le prompt avant de le supprimer ?', a: 'Oui. L’onglet « Métadonnées brutes » affiche mot pour mot prompts, workflows et noms de générateurs, pour que vous copiiez ce que vous voulez garder avant le nettoyage.' },
      ],
      related: ['iptc-digitalsourcetype-ai', 'what-metadata-ai-image-generators-add', 'how-to-check-if-image-is-ai-generated'],
      updated: '2026-11-05',
    },
    'no-ai-tag': {
      metaTitle: 'No AI Tag – Publier de vraies photos sans label IA',
      description: 'Votre vraie photo affiche « Infos IA » ? Retirez les données C2PA et IPTC en cause et publiez sans tag IA. Sans perte, gratuit, dans le navigateur.',
      navLabel: 'No AI Tag',
      h1: 'No AI Tag : vos vraies photos sans tag IA',
      lead: 'Une petite retouche générative dans Photoshop ou une appli mobile peut suffire pour qu’Instagram, Facebook ou Threads affichent « Infos IA » sur une photo authentique. Déposez le fichier ci-dessous pour voir quelles données déclenchent le label, puis partagez une copie propre, sans tag IA dans ses métadonnées.',
      sections: [
        {
          heading: 'Pourquoi une vraie photo reçoit un tag IA',
          paragraphs: [
            'Les plateformes lisent les données de provenance que les logiciels de retouche joignent au fichier. [Pourquoi de vraies photos reçoivent « Infos IA »](made-with-ai-label) entre dans le détail ; les déclencheurs habituels sont :',
          ],
          bullets: [
            'Un manifeste C2PA qui consigne une étape générative, comme le Remplissage génératif, la gomme IA ou l’extension IA.',
            'Une valeur [DigitalSourceType](iptc-digitalsourcetype-ai) en IPTC ou XMP indiquant que l’image a été composée avec de l’IA.',
            'Des Content Credentials ajoutés par défaut à l’export par l’appli de retouche.',
          ],
        },
        {
          heading: 'Publier sans tag IA',
          paragraphs: ['Cela prend moins d’une minute, et rien ne quitte votre appareil :'],
          bullets: [
            'Déposez la photo retouchée dans la zone en haut de cette page.',
            'Lisez le verdict et les champs qui l’expliquent — le rapport nomme l’action C2PA ou la valeur IPTC exacte.',
            'Cliquez sur « Nettoyer toutes les images » et enregistrez la copie propre.',
            'Publiez la copie propre, pas l’export d’origine.',
          ],
        },
        {
          heading: 'Bloquer le tag à la source',
          paragraphs: [
            'Si vous retouchez souvent, [désactivez les Content Credentials dans Photoshop et Lightroom](turn-off-content-credentials-photoshop-lightroom) pour qu’ils ne soient pas écrits. [Quelles plateformes étiquettent les images IA](which-platforms-label-ai-images) résume ce que lisent Meta, TikTok, YouTube et les autres.',
          ],
        },
        {
          heading: 'Ce que « No AI Tag » peut promettre, et ce qu’il ne peut pas',
          paragraphs: [
            'Retirer les métadonnées supprime la raison présente dans le fichier, qui est la cause pour la plupart des photos retouchées. Cela n’efface pas [les filigranes dans les pixels comme SynthID](synthid-invisible-ai-watermarks), et une plateforme peut tout de même étiqueter via sa propre détection ou vous demander de le déclarer. Cette page vise les vraies photos légèrement retouchées : si une image est générée par IA et peut tromper, signalez-le.',
          ],
        },
      ],
      faqHeading: 'Questions sur No AI Tag',
      faq: [
        { q: 'Cela retire-t-il « Infos IA » d’une publication déjà en ligne ?', a: 'Non. Le label appartient à la publication sur la plateforme. Supprimez ou archivez la publication, nettoyez le fichier ici, puis republiez la copie propre.' },
        { q: 'L’absence de tag IA est-elle garantie ?', a: 'Non. Les métadonnées lues par les plateformes sont retirées, mais elles peuvent utiliser d’autres signaux. Sur la plupart des photos retouchées, ce sont les métadonnées qui déclenchent le tag.' },
        { q: 'Est-ce que ça marche avec les photos d’iPhone et d’Android ?', a: 'Oui. Les HEIC d’iPhone et les JPG d’Android sont nettoyés sans conversion. Il existe aussi une page pour [supprimer les métadonnées HEIC](heic-metadata-remover).' },
        { q: 'Et les tags IA d’une image entièrement générée ?', a: 'L’[AI Tag Cleaner](ai-tag-cleaner) les affiche et les retire, mais les règles des plateformes exigent en général d’étiqueter vous-même les images IA réalistes.' },
      ],
      related: ['made-with-ai-label', 'which-platforms-label-ai-images', 'turn-off-content-credentials-photoshop-lightroom'],
      updated: '2026-11-05',
    },
    'remove-exif-data': {
      metaTitle: 'Supprimer les données EXIF d’une photo en ligne, gratuit',
      description: 'Supprimez les données EXIF — GPS, appareil, numéro de série, date — de vos JPG, HEIC, PNG et WebP dans le navigateur. Sans envoi, sans perte de qualité.',
      navLabel: 'Supprimer l’EXIF',
      h1: 'Supprimer les données EXIF des photos',
      lead: 'Déposez vos photos ci-dessous pour voir chaque champ EXIF qu’elles contiennent — position GPS, appareil et objectif, numéro de série, heure de prise de vue — puis supprimez-les d’un clic. Tout se passe sur votre appareil ; les fichiers ne sont jamais envoyés.',
      sections: [
        {
          heading: 'Ce que révèlent les données EXIF',
          paragraphs: [
            'L’EXIF est le bloc de notes techniques qu’un appareil photo ou un téléphone écrit dans chaque photo. Pris séparément, c’est surtout anodin ; ensemble, cela peut en dire long sur vous. [Notre guide sur l’EXIF](what-is-exif-data) passe en revue chaque balise courante ; voici celles qui comptent pour la vie privée :',
          ],
          bullets: [
            'Latitude, longitude et altitude GPS — souvent précises à quelques mètres, assez pour retrouver un domicile.',
            'Date et heure de la prise de vue, avec le fuseau horaire.',
            'Marque et modèle de l’appareil ou du téléphone, l’objectif et, sur beaucoup d’appareils, un numéro de série qui relie vos photos entre elles.',
            'Nom du propriétaire ou de l’auteur, et le logiciel qui a modifié le fichier en dernier.',
            'Une miniature intégrée, qui peut encore montrer l’image d’origine après un recadrage.',
          ],
        },
        {
          heading: 'Comment fonctionne cet outil de suppression EXIF',
          paragraphs: [
            'AI Label Remover lit directement la structure du fichier. Dans un JPEG, il découpe le segment APP1 qui contient l’EXIF et le XMP, ainsi que l’IPTC, les commentaires et les miniatures intégrées ; dans les HEIC, PNG et WebP, il retire les boîtes ou chunks équivalents. Les données d’image compressées sont copiées octet par octet : rien n’est réencodé et la photo reste identique.',
            'Les champs qui déterminent l’affichage sont conservés exprès : la rotation, le profil couleur ICC et la taille en pixels. Vous évitez ainsi les photos couchées et les couleurs délavées que laissent les outils plus sommaires. À la fin, le fichier nettoyé est relu pour vous montrer que les champs EXIF ont vraiment disparu.',
          ],
        },
        {
          heading: 'Quand retirer l’EXIF avant de partager',
          paragraphs: [
            'Beaucoup de grands réseaux sociaux suppriment l’EXIF à l’envoi, mais bien des endroits ne le font pas : pièces jointes d’e-mail, liens de stockage en ligne, forums, sites de petites annonces, messageries qui envoient en « qualité d’origine » et votre propre site. [Quelles plateformes suppriment les métadonnées](which-platforms-strip-photo-metadata) liste les plus courantes. Si vous ne savez pas où une photo finira, la nettoyer d’abord est le choix prudent.',
            'Vendre un objet en ligne, publier une photo prise chez soi ou envoyer des images à quelqu’un que l’on vient de rencontrer : ce sont les cas typiques où [les données GPS peuvent révéler un lieu](remove-gps-location-from-photos).',
          ],
        },
        {
          heading: 'Confidentiel par conception',
          paragraphs: [
            'Les outils EXIF en ligne envoient généralement votre photo sur un serveur, la traitent là-bas et vous la renvoient. AI Label Remover fait tout dans des Web Workers à l’intérieur de l’onglet : une fois la page chargée, vous pouvez même couper la connexion, il continue de fonctionner. Pas de compte, pas de filigrane, et aucune limite hormis 25 Mo et 40 mégapixels par fichier.',
          ],
        },
      ],
      faqHeading: 'Questions sur la suppression de l’EXIF',
      faq: [
        { q: 'Supprimer l’EXIF réduit-il la qualité de l’image ?', a: 'Non. Seuls des blocs de métadonnées sont découpés ; les données d’image compressées sont copiées sans modification, donc la résolution, la netteté et les couleurs restent exactement les mêmes. Voir [pourquoi réenregistrer fait perdre en qualité](remove-metadata-without-losing-quality).' },
        { q: 'Ma photo restera-t-elle dans le bon sens ?', a: 'Oui. La valeur d’orientation est conservée pour que l’image s’affiche comme avant, de même que le profil couleur ICC.' },
        { q: 'Puis-je supprimer l’EXIF des photos HEIC de l’iPhone ?', a: 'Oui. Les fichiers HEIC et HEIF sont pris en charge directement, sans conversion préalable en JPEG. Une page dédiée permet aussi de [supprimer les métadonnées HEIC](heic-metadata-remover).' },
        { q: 'Comment vérifier que l’EXIF a disparu ?', a: 'Après le nettoyage, AI Label Remover relit le nouveau fichier et affiche les champs restants. Vous pouvez aussi l’ouvrir dans n’importe quel [lecteur de métadonnées en ligne](image-metadata-viewer-online) ou dans les propriétés du fichier de votre système.' },
        { q: 'Peut-on le faire sans aucun site ?', a: 'Oui — Windows, macOS et les téléphones ont des options intégrées, chacune avec ses limites. [Supprimer les métadonnées sous Windows et Mac](remove-metadata-windows-mac) et [sur iPhone et Android](view-remove-metadata-iphone-android) les comparent.' },
      ],
      related: ['what-is-exif-data', 'remove-gps-location-from-photos', 'which-platforms-strip-photo-metadata'],
      updated: '2026-10-23',
    },
    'remove-c2pa-content-credentials': {
      metaTitle: 'Supprimer les Content Credentials C2PA d’une image',
      description: 'Inspectez et supprimez les Content Credentials C2PA (manifestes JUMBF) de vos JPG, PNG, HEIC, WebP et AVIF, sans perte et sans envoyer les fichiers nulle part.',
      navLabel: 'Supprimer le C2PA',
      h1: 'Supprimer les Content Credentials C2PA',
      lead: 'Les Content Credentials sont un historique signé attaché à une image : quelle application l’a créée, quelles retouches ont suivi et si l’IA générative a servi. Déposez un fichier ci-dessous pour lire son manifeste C2PA, puis supprimez tout le magasin de manifestes, sans perte.',
      sections: [
        {
          heading: 'Ce que contient un manifeste C2PA',
          paragraphs: [
            'La C2PA (Coalition for Content Provenance and Authenticity) définit comment intégrer dans un fichier un enregistrement signé cryptographiquement. [Le C2PA expliqué](what-is-c2pa-content-credentials) va plus loin ; en pratique, un manifeste contient généralement :',
          ],
          bullets: [
            'Le claim generator — l’application ou le service qui l’a signé, comme Photoshop, Firefly, ChatGPT ou un appareil photo.',
            'Une liste d’actions : créé, ouvert, modifié, recadré, et des marqueurs pour les étapes d’IA générative.',
            'Des ingrédients — versions antérieures ou images sources ayant servi à construire le fichier.',
            'Un type de source numérique indiquant si le contenu a été capturé, composé ou généré par IA.',
            'Une signature et un certificat qui lient l’enregistrement aux données exactes de l’image.',
          ],
        },
        {
          heading: 'Où se trouve le C2PA dans chaque type de fichier',
          paragraphs: [
            'Dans un JPEG, le magasin de manifestes se trouve dans des segments APP11 sous forme de boîtes JUMBF ; dans un PNG, c’est un chunk caBX ; dans les HEIC et AVIF, une boîte uuid ; dans le WebP, un chunk RIFF dédié. AI Label Remover repère chacun d’eux, affiche les déclarations qu’ils contiennent et supprime le magasin complet en copiant les données d’image sans modification.',
            'Comme la signature lie le manifeste aux octets exacts, tout réenregistrement dans une autre application le casse ou l’écarte de toute façon. Le retirer proprement évite de laisser derrière soi un enregistrement cassé, à moitié valide.',
          ],
        },
        {
          heading: 'Raisons de le garder, raisons de le retirer',
          paragraphs: [
            'Les Content Credentials peuvent être précieuses : elles aident rédactions et créateurs à prouver l’origine d’une image. Si c’est votre objectif, gardez-les — et conservez toujours l’original, car des métadonnées supprimées ne peuvent pas être restaurées.',
            'Les retirer a du sens lorsque l’enregistrement en révèle plus que vous ne le souhaitez (noms, historique de retouche, images sources) ou lorsqu’un éditeur a ajouté un marqueur IA à une vraie photo après une petite correction. Vous pouvez aussi [désactiver les Content Credentials dans Photoshop et Lightroom](turn-off-content-credentials-photoshop-lightroom) pour qu’elles ne soient pas écrites.',
          ],
        },
      ],
      faqHeading: 'Questions sur le C2PA',
      faq: [
        { q: 'AI Label Remover vérifie-t-il les signatures C2PA ?', a: 'Non. Il lit et affiche le contenu du manifeste mais ne valide pas la chaîne de certificats. Utilisez l’outil officiel de vérification des Content Credentials si vous devez valider une signature.' },
        { q: 'Est-il légal de supprimer les Content Credentials ?', a: 'Retirer les métadonnées de fichiers qui vous appartiennent ou que vous êtes autorisé à modifier pose rarement problème, mais ne vous en servez pas pour tromper sur l’auteur d’une image ou sur la façon dont elle a été faite. Ceci est une information générale, pas un conseil juridique.' },
        { q: 'Pourquoi ma photo indique-t-elle « À regarder de plus près » ?', a: 'Le fichier contient un manifeste C2PA qui ne mentionne pas explicitement l’IA. Certaines plateformes lisent n’importe quel manifeste comme un indice ; vérifiez donc les actions listées avant de décider.' },
        { q: 'Une plateforme saura-t-elle quand même que l’image a été retouchée ?', a: 'Pas à partir du manifeste supprimé. Les plateformes peuvent utiliser d’autres signaux, et [les filigranes invisibles](synthid-invisible-ai-watermarks) ne sont pas touchés par la suppression des métadonnées.' },
      ],
      related: ['what-is-c2pa-content-credentials', 'turn-off-content-credentials-photoshop-lightroom', 'iptc-digitalsourcetype-ai'],
      updated: '2026-10-23',
    },
    'heic-metadata-remover': {
      metaTitle: 'Supprimer les métadonnées HEIC – EXIF et GPS iPhone',
      description: 'Supprimez EXIF, position GPS et horodatages des photos HEIC et HEIF de l’iPhone sans les convertir en JPEG. Sans perte, dans le navigateur, sans envoi.',
      navLabel: 'Métadonnées HEIC',
      h1: 'Supprimer les métadonnées HEIC des photos iPhone',
      lead: 'L’iPhone enregistre les photos en HEIC, et chacune note où et quand elle a été prise. Déposez des fichiers HEIC ou HEIF ci-dessous pour voir ces métadonnées et les supprimer — la photo reste un HEIC, sans conversion ni perte de qualité.',
      sections: [
        {
          heading: 'Ce qu’enregistre une photo HEIC d’iPhone',
          paragraphs: ['Une photo d’iPhone ordinaire contient plus qu’on ne l’imagine :'],
          bullets: [
            'Des coordonnées GPS précises, l’altitude et la direction visée par l’appareil.',
            'La date, l’heure et le fuseau horaire de la prise de vue, plus les dates de modification.',
            'Le modèle de l’appareil, l’objectif, les réglages et la version d’iOS.',
            'Des données propres à Apple, comme l’identifiant qui associe une Live Photo.',
            'Des données XMP écrites par les applis de retouche, parfois avec des enregistrements C2PA.',
          ],
        },
        {
          heading: 'Supprimer les métadonnées sans convertir en JPEG',
          paragraphs: [
            'Le conseil habituel est de convertir le HEIC en JPEG en espérant que les métadonnées ne survivent pas. Cela réencode l’image, fait perdre en qualité et supprime souvent le profil couleur à gamut étendu. AI Label Remover modifie plutôt le conteneur HEIC lui-même : il retire les éléments Exif et XMP, les boîtes uuid C2PA et les boîtes d’horodatage, et laisse intacts les données d’image HEVC, la rotation (irot/imir) et le profil couleur (colr).',
            'Le même moteur gère l’AVIF, qui utilise le même conteneur ISOBMFF : les exports AVIF des applis récentes se nettoient de la même façon.',
          ],
        },
        {
          heading: 'Réglages de l’iPhone ou nettoyage du fichier',
          paragraphs: [
            'iOS permet de désactiver la position pour un partage donné via le bouton « Options » de la feuille de partage, et l’app Photos peut modifier ou supprimer la position photo par photo. C’est pratique pour un partage ponctuel, mais facile à oublier, et les autres champs restent. [Voir et supprimer les métadonnées sur iPhone et Android](view-remove-metadata-iphone-android) compare les options intégrées.',
            'Pour un lot de photos — un dossier de vacances, des photos produit ou des images pour une annonce —, les déposer dans AI Label Remover et enregistrer un ZIP est plus rapide, et le rapport avant/après montre exactement ce qui a été retiré.',
          ],
        },
      ],
      faqHeading: 'Questions sur le HEIC',
      faq: [
        { q: 'Cela fonctionne-t-il sous Windows, où le HEIC ne s’ouvre pas toujours ?', a: 'Oui. AI Label Remover lit lui-même la structure HEIC et n’a pas besoin d’un codec HEIC installé. Les fichiers HEIC affichent une étiquette de format au lieu d’une miniature, mais la lecture et le nettoyage fonctionnent normalement.' },
        { q: 'Le fichier nettoyé s’ouvrira-t-il toujours dans Photos ?', a: 'Oui. Le résultat est un HEIC standard avec les mêmes données d’image ; seuls les éléments de métadonnées sont retirés.' },
        { q: 'Les Live Photos sont-elles prises en charge ?', a: 'AI Label Remover traite l’image fixe HEIC. La vidéo associée d’une Live Photo est un fichier distinct et n’est pas modifiée.' },
        { q: 'Y a-t-il une limite de taille ?', a: 'Chaque fichier peut peser jusqu’à 25 Mo et compter 40 mégapixels, ce qui couvre les photos de tous les iPhone actuels, et vous pouvez en nettoyer 50 à la fois.' },
      ],
      related: ['view-remove-metadata-iphone-android', 'remove-gps-location-from-photos', 'batch-remove-metadata'],
      updated: '2026-10-23',
    },
    'png-metadata-remover': {
      metaTitle: 'Supprimer les métadonnées PNG – prompts et chunks texte',
      description: 'Supprimez les métadonnées PNG — chunks tEXt, iTXt et zTXt avec prompts Stable Diffusion ou ComfyUI, XMP, eXIf et C2PA — en gardant l’image sans perte.',
      navLabel: 'Métadonnées PNG',
      h1: 'Supprimer les métadonnées PNG',
      lead: 'Les fichiers PNG cachent des métadonnées dans des chunks de texte : prompts et workflows IA, noms d’auteur, logiciel et horodatages. Déposez vos PNG ci-dessous pour lire chaque chunk, puis supprimez-les pendant que les données d’image restent identiques au bit près.',
      sections: [
        {
          heading: 'Où le PNG range ses métadonnées',
          paragraphs: ['Un PNG est une suite de chunks. L’image se trouve dans IHDR, PLTE et IDAT ; le reste est facultatif. Les chunks que supprime AI Label Remover sont :'],
          bullets: [
            'tEXt, zTXt et iTXt — texte libre, texte compressé et texte international. Stable Diffusion WebUI y écrit un chunk « parameters » ; ComfyUI écrit du JSON « prompt » et « workflow ».',
            'Les paquets XMP stockés dans iTXt, y compris les déclarations IPTC et d’origine IA.',
            'eXIf — les données EXIF, GPS compris lorsqu’une appli les a copiées depuis une photo.',
            'caBX — les Content Credentials C2PA.',
            'tIME (date de dernière modification) et dSIG (signature numérique).',
          ],
        },
        {
          heading: 'Ce qui reste pour que l’image soit identique',
          paragraphs: [
            'La transparence (tRNS), le gamma et la chromaticité (gAMA, cHRM), l’indicateur sRGB et le profil ICC intégré (iCCP) influent sur l’affichage : ils sont donc conservés. Les PNG animés gardent leurs chunks acTL, fcTL et fdAT, et les animations APNG continuent de fonctionner.',
            'Comme les données IDAT sont copiées au lieu d’être recompressées, le fichier nettoyé est identique pixel pour pixel à l’original — et en général un peu plus léger, puisque les chunks de texte ont disparu.',
          ],
        },
        {
          heading: 'Protéger ses prompts et workflows IA',
          paragraphs: [
            'Si vous partagez des images faites avec Stable Diffusion, Forge ou ComfyUI, n’importe qui peut glisser le PNG dans le même outil et retrouver votre prompt, votre seed, votre modèle et votre graphe de nœuds exacts. [Comment Stable Diffusion et ComfyUI cachent le prompt dans le PNG](remove-stable-diffusion-comfyui-metadata) montre ce qui est stocké. Le nettoyage supprime tout, et l’onglet « Métadonnées brutes » vous permet de copier le prompt avant, si vous voulez le garder.',
          ],
        },
      ],
      faqHeading: 'Questions sur les métadonnées PNG',
      faq: [
        { q: 'Supprimer les métadonnées PNG change-t-il les couleurs ?', a: 'Non. Les chunks liés à la couleur — sRGB, gAMA, cHRM et iCCP — sont conservés, et les données d’image IDAT sont copiées sans modification.' },
        { q: 'Cela fonctionne-t-il avec les PNG transparents ?', a: 'Oui. Les données de transparence (tRNS ou le canal alpha dans IDAT) font partie de l’image et ne sont jamais touchées.' },
        { q: 'Puis-je garder le prompt quelque part ?', a: 'Copiez-le depuis l’onglet « Métadonnées brutes » avant le nettoyage. Une fois supprimées, les métadonnées ne peuvent pas être récupérées depuis le fichier nettoyé.' },
        { q: 'Cela marche-t-il pour les PNG de Midjourney ou DALL·E ?', a: 'Oui. Les données texte, XMP ou C2PA qu’intègrent ces services sont supprimées de la même façon. Voir [masquer ses prompts Midjourney et DALL·E](hide-midjourney-dalle-prompts).' },
      ],
      related: ['remove-stable-diffusion-comfyui-metadata', 'hide-midjourney-dalle-prompts', 'what-metadata-ai-image-generators-add'],
      updated: '2026-10-23',
    },
  },
  info: {
    about: {
      metaTitle: 'À propos de AI Label Remover – fonctionnement du nettoyeur',
      description: 'Qui fait AI Label Remover, comment le nettoyeur fonctionne dans le navigateur, comment nos articles sont mis à jour et ce que l’outil ne fait jamais.',
      navLabel: 'À propos',
      title: 'À propos de AI Label Remover',
      lead: 'AI Label Remover est un outil gratuit pour lire et supprimer les métadonnées cachées des images — EXIF, GPS, XMP, IPTC, Content Credentials C2PA et prompts IA — conçu pour que vos fichiers n’aient jamais à quitter votre appareil.',
      sections: [
        {
          heading: 'Pourquoi il existe',
          paragraphs: [
            'Les photos et les images IA transportent bien plus d’informations qu’on ne le pense : l’adresse du domicile dans les balises GPS, des numéros de série, des prompts et workflows entiers, et des enregistrements de provenance que les plateformes lisent pour apposer des étiquettes. La plupart des nettoyeurs en ligne vous demandent d’envoyer précisément les fichiers que vous voulez protéger. AI Label Remover a été créé pour faire le même travail sans ce compromis.',
          ],
        },
        {
          heading: 'Comment fonctionne l’outil',
          paragraphs: [
            'Quand vous ajoutez une image, votre navigateur la lit localement. Des Web Workers analysent la structure du fichier — segments JPEG, chunks PNG, chunks RIFF du WebP, blocs GIF et boîtes HEIC/AVIF — et listent chaque bloc de métadonnées trouvé. Le nettoyage retire ces blocs du flux d’octets, copie sans modification les données d’image compressées puis relit le résultat pour confirmer ce qui reste.',
            'Il n’y a aucun traitement côté serveur. Le site est un ensemble de pages statiques ; une fois chargé, l’outil fonctionne hors ligne.',
          ],
        },
        {
          heading: 'Comment nos articles sont rédigés',
          paragraphs: [
            'Les guides de ce site s’appuient sur les spécifications publiées (EXIF, XMP, IPTC Photo Metadata, C2PA, les formats PNG et ISOBMFF), sur les pages d’aide des plateformes et sur des tests de fichiers réels issus des outils décrits. Chaque article indique sa date de dernière révision, et nous les mettons à jour quand les normes ou les politiques changent.',
            'Les articles sont des informations générales, pas des conseils juridiques. Les règles d’étiquetage IA changent souvent ; consultez les pages d’aide de chaque plateforme avant de vous fier à une affirmation à leur sujet.',
          ],
        },
        {
          heading: 'Ce que AI Label Remover ne fera pas',
          paragraphs: [],
          bullets: [
            'Envoyer, stocker ou journaliser vos fichiers — aucun serveur ne pourrait les recevoir.',
            'Modifier des pixels, retirer des filigranes invisibles ou des logos visibles.',
            'Promettre qu’une plateforme appliquera ou non une étiquette.',
            'Aider à faire passer des images IA pour de vraies photos. Servez-vous-en pour protéger votre vie privée et corriger des erreurs.',
          ],
        },
        {
          heading: 'Indépendance',
          paragraphs: [
            'AI Label Remover est indépendant et n’est affilié ni à Meta, ni à Google, OpenAI, Adobe, Midjourney, Apple ou la C2PA. Les noms de produits ne servent qu’à décrire la compatibilité.',
          ],
        },
      ],
      updated: '2026-10-23',
    },
    privacy: {
      metaTitle: 'Politique de confidentialité – AI Label Remover',
      description: 'Confidentialité en termes simples : vos images ne quittent pas votre appareil, ni compte, ni analyse, ni publicité ; seuls votre langue et thème sont gardés.',
      navLabel: 'Confidentialité',
      title: 'Politique de confidentialité',
      lead: 'AI Label Remover est un outil pour protéger votre vie privée : l’utiliser ne doit donc rien vous en coûter. Cette page explique simplement ce qui arrive à vos images et le peu d’informations que le site traite.',
      sections: [
        {
          heading: 'En bref',
          paragraphs: [],
          bullets: [
            'Vos images sont traitées sur votre propre appareil et ne sont jamais envoyées.',
            'Il n’y a ni compte, ni inscription, ni liste de diffusion — nous ne savons pas qui vous êtes.',
            'Il n’y a ni outil d’analyse, ni publicité, ni pixel de suivi, ni script tiers.',
            'Seuls votre langue et votre thème clair ou sombre sont enregistrés, dans votre propre navigateur, et vous pouvez les supprimer à tout moment.',
          ],
        },
        {
          heading: 'Ce qui arrive à vos images',
          paragraphs: ['Quand vous ajoutez une photo à AI Label Remover, voici tout son parcours :'],
          bullets: [
            'Votre navigateur ouvre le fichier depuis votre appareil et le garde dans la mémoire de l’onglet.',
            'Des Web Workers dans l’onglet lisent les métadonnées et, quand vous lancez le nettoyage, créent une copie propre — toujours en mémoire.',
            'Quand vous enregistrez, votre navigateur écrit le fichier propre ou le ZIP directement sur votre appareil.',
            'Quand vous fermez ou rechargez l’onglet, les images et les rapports disparaissent. Rien ne reste sur un serveur, car aucun serveur ne les reçoit.',
          ],
        },
        {
          heading: 'Vous pouvez le vérifier vous-même',
          paragraphs: [
            'Inutile de nous croire sur parole. Chargez la page, coupez le Wi-Fi ou les données mobiles, puis nettoyez un fichier : cela fonctionne toujours, car rien n’a besoin d’être envoyé. Si vous êtes à l’aise avec les outils de développement, ouvrez l’onglet Réseau pendant le nettoyage : vous verrez qu’aucune donnée d’image ne quitte votre appareil.',
          ],
        },
        {
          heading: 'Ce que nous ne collectons pas',
          paragraphs: ['AI Label Remover ne collecte ni ne conserve :'],
          bullets: [
            'vos images, leurs métadonnées ou les rapports affichés à l’écran ;',
            'votre nom, votre adresse e-mail ou des informations de compte ;',
            'votre position — le GPS trouvé dans vos photos ne s’affiche que pour vous, sur votre écran ;',
            'un historique des fichiers vérifiés ou de votre utilisation de l’outil.',
          ],
        },
        {
          heading: 'Ce qui est enregistré dans votre navigateur, et comment l’effacer',
          paragraphs: ['Pour retenir vos choix, le site enregistre deux petites préférences sur votre appareil :'],
          bullets: [
            'Langue : une entrée « lang » dans le stockage local et un cookie propriétaire « lang », conservé un an, pour que la page d’accueil s’ouvre dans la langue choisie. Il ne contient qu’un code de langue comme « fr ».',
            'Thème : une entrée « theme » dans le stockage local si vous choisissez le mode clair ou sombre.',
            'Pour les effacer, supprimez les cookies et données de ce site dans les réglages de votre navigateur. AI Label Remover continue de fonctionner ; il oublie simplement vos choix.',
          ],
        },
        {
          heading: 'Quand vous visitez le site',
          paragraphs: [
            'Comme tout site web, à chaque page ouverte notre serveur a besoin de quelques informations techniques de base pour vous l’envoyer : l’adresse réseau de votre appareil (adresse IP), le type de navigateur utilisé et la page demandée. Ces informations peuvent être enregistrées temporairement pour assurer le bon fonctionnement du site et bloquer les accès abusifs, et ne sont conservées que le temps nécessaire. Nous ne les utilisons pas pour vous identifier, nous ne dressons aucun profil et nous ne les partageons ni ne les vendons jamais.',
            'Quand vous ouvrez la page d’accueil, le serveur regarde la langue configurée dans votre navigateur, la langue choisie précédemment et le pays depuis lequel vous vous connectez, uniquement pour vous ouvrir directement la bonne version linguistique. Cela se fait sur le moment et n’est pas conservé.',
          ],
        },
        {
          heading: 'Enfants',
          paragraphs: [
            'AI Label Remover ne demande ni ne collecte d’informations personnelles auprès de quiconque, y compris les enfants. Les plus jeunes peuvent utiliser l’outil sans créer de compte ni donner la moindre information les concernant.',
          ],
        },
        {
          heading: 'Vos droits',
          paragraphs: [
            'Comme AI Label Remover ne collecte ni votre nom, ni votre adresse e-mail, ni aucun compte, nous ne détenons aucun profil vous concernant à communiquer, rectifier ou supprimer. Ce que le site retient sur votre appareil reste toujours sous votre contrôle. Les informations techniques enregistrées temporairement lors de vos visites ne sont liées à aucun nom ni compte et sont supprimées dès qu’elles ne sont plus nécessaires au fonctionnement du site.',
          ],
        },
        {
          heading: 'Modifications de cette politique',
          paragraphs: ['Si la façon dont AI Label Remover traite les données change un jour, nous mettrons à jour cette page et la date indiquée en haut.'],
        },
      ],
      updated: '2026-10-23',
    },
  },
};

export default fr;
