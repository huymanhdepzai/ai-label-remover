import type { Articles } from './types';

/** Articles approfondis en français (les articles de base utilisent le résumé de seo.guides.items). */
const fr: Articles = {
  'best-ai-metadata-removers-2026': {
      "title": "Les meilleurs outils pour supprimer les métadonnées et labels IA en 2026",
      "metaTitle": "Meilleurs nettoyeurs de métadonnées IA en 2026 (Sans perte)",
      "summary": [
          "En 2026, avec la généralisation des labels IA, des manifestes C2PA et des métadonnées IPTC sur les réseaux sociaux, choisir le bon outil de nettoyage est primordial.",
          "Découvrez notre comparatif entre logiciels traditionnels et solutions directes dans le navigateur pour nettoyer vos photos en toute confidentialité et sans perte de qualité."
      ],
      "description": "Comparatif des meilleurs outils de métadonnées IA en 2026. Découvrez comment AI Label Remover et AI Tag Cleaner garantissent le statut No AI Tag sans réencodage.",
      "related": [
          "how-to-get-no-ai-tag",
          "made-with-ai-label",
          "what-is-c2pa-content-credentials"
      ],
      "sections": [
          {
              "heading": "Pourquoi les nettoyeurs classiques échouent face aux labels IA de 2026",
              "paragraphs": [
                  "Supprimer les métadonnées consistait autrefois à effacer les données EXIF et coordonnées GPS. En 2026, les images contiennent des blocs bien plus complexes : [manifestes C2PA Content Credentials](what-is-c2pa-content-credentials), [champs IPTC DigitalSourceType](iptc-digitalsourcetype-ai) et prompts génératifs.",
                  "Les outils d’ancienne génération ignorent les blocs C2PA ou réencodent le fichier JPEG, dégradant la finesse de l’image. Lorsqu’un réseau social détecte ces marqueurs résiduels, il applique automatiquement le badge “Infos IA”."
              ]
          },
          {
              "heading": "AI Label Remover : Le AI Tag Cleaner de référence dans le navigateur",
              "paragraphs": [
                  "AI Label Remover a été spécialement conçu pour ce nouvel écosystème. Véritable [AI tag cleaner](ai-tag-cleaner), il analyse et extrait les conteneurs C2PA JUMBF, les drapeaux IPTC et les données de localisation directement dans votre navigateur.",
                  "L’ensemble du traitement s’exécute localement grâce aux Web Workers de votre processeur : aucune image n’est envoyée vers un serveur distant. La structure de bytes est préservée sans réencodage, garantissant un [nettoyage sans perte de qualité](remove-metadata-without-losing-quality)."
              ],
              "bullets": [
                  "Zéro envoi vers des serveurs : Confidentialité absolue pour vos photos privées et professionnelles.",
                  "Découpe binaire sans perte : Conserve fidèlement la résolution, la netteté et les profils ICC.",
                  "Suppression complète des traces IA : Élimine C2PA et IPTC responsables des [faux labels IA](made-with-ai-label).",
                  "Traitement par lot multi-formats : Prend en charge jusqu’à 50 fichiers JPEG, PNG, WebP, GIF, HEIC et AVIF."
              ]
          },
          {
              "heading": "Comparatif : AI Label Remover vs ExifTool vs Éditeurs graphiques",
              "paragraphs": [
                  "ExifTool demeure une référence en ligne de commande mais exige une syntaxe complexe et peut endommager certains conteneurs en cas d’erreur de paramètres.",
                  "Les logiciels de retouche réencodent les pixels à chaque sauvegarde. De plus, les applications comme Photoshop réinjectent souvent des Content Credentials à l’export si elles ne sont pas [désactivées manuellement](turn-off-content-credentials-photoshop-lightroom).",
                  "AI Label Remover allie la simplicité d’un outil web à la sécurité d’un utilitaire local."
              ]
          },
          {
              "heading": "Obtenir le statut “No AI Tag” sur les réseaux sociaux",
              "paragraphs": [
                  "Pour publier vos véritables photos sur Instagram ou Facebook sans mention trompeuse, bénéficier d’un fichier [No AI Tag](no-ai-tag) est indispensable. Les plateformes scannent automatiquement les en-têtes.",
                  "Passer vos clichés dans un [AI tag cleaner](ai-tag-cleaner) supprime les déclencheurs techniques avant mise en ligne."
              ]
          },
          {
              "heading": "Règles éthiques et responsabilité",
              "paragraphs": [
                  "AI Label Remover permet de protéger votre vie privée et de corriger des étiquetages erronés causés par de légères retouches. En revanche, les créations purement synthétiques doivent être signalées conformément aux règles des plateformes."
              ]
          }
      ],
      "faqHeading": "Foire aux questions sur les outils de métadonnées en 2026",
      "faq": [
          {
              "q": "En quoi AI Label Remover diffère-t-il des nettoyeurs EXIF habituels ?",
              "a": "Les outils classiques ne traitent que les champs EXIF standards. AI Label Remover est un [AI tag cleaner](ai-tag-cleaner) capable d’effacer les blocs C2PA et IPTC sans réencoder le moindre pixel."
          },
          {
              "q": "La suppression garantit-elle l’absence de tag IA sur Instagram ?",
              "a": "Elle élimine tous les signaux techniques présents dans le fichier (C2PA/IPTC), établissant une base saine [No AI Tag](no-ai-tag)."
          },
          {
              "q": "Mes fichiers confidentiels sont-ils protégés ?",
              "a": "Absolument. Le traitement se fait à 100 % dans votre navigateur ; aucun octet ne transite sur internet."
          },
          {
              "q": "L’outil supprime-t-il les filigranes SynthID invisibles ?",
              "a": "Non. Les filigranes comme Google SynthID sont intégrés dans les pixels eux-mêmes et ne relèvent pas des métadonnées."
          }
      ]
  },

  'how-to-get-no-ai-tag': {
      "title": "Comment obtenir le statut “No AI Tag” sur vos photos : Le guide AI Tag Cleaner",
      "metaTitle": "No AI Tag pour vos photos : Guide AI Tag Cleaner",
      "summary": [
          "De nombreux photographes constatent avec dépit que leurs clichés réels sont affublés d’un badge “Infos IA” ou “Généré par IA” sur les réseaux sociaux.",
          "Ce guide explique pourquoi les algorithmes se trompent et comment utiliser un AI Tag Cleaner pour obtenir un statut “No AI Tag” certifié sans perte de qualité."
      ],
      "description": "Obtenez le statut No AI Tag sur vos photos. Utilisez AI Tag Cleaner et AI Label Remover pour supprimer les faux labels IA sur Instagram et Facebook.",
      "related": [
          "best-ai-metadata-removers-2026",
          "made-with-ai-label",
          "iptc-digitalsourcetype-ai"
      ],
      "sections": [
          {
              "heading": "Pourquoi vos véritables photos reçoivent des étiquettes IA",
              "paragraphs": [
                  "Les plateformes comme Instagram, Facebook et TikTok analysent les fichiers à l’envoi. Si elles détectent [un champ IPTC DigitalSourceType](iptc-digitalsourcetype-ai) ou [un manifeste C2PA Content Credentials](what-is-c2pa-content-credentials), le badge d’IA est automatiquement appliqué.",
                  "Ce faux positif survient souvent suite à une retouche minime : Generative Fill dans Photoshop ou suppression d’objet dans Lightroom insèrent des marqueurs génératifs. Bien que l’image soit authentique à 99 %, elle est classée comme artificielle."
              ]
          },
          {
              "heading": "La solution No AI Tag : Analyser et nettoyer vos images",
              "paragraphs": [
                  "Pour afficher un statut [No AI Tag](no-ai-tag), il faut supprimer les blocs exacts qui déclenchent le scan. Déposez vos clichés sur AI Label Remover pour obtenir un rapport instantané.",
                  "La [visionneuse de métadonnées](image-metadata-viewer-online) met en évidence les traces C2PA et IPTC. Un clic permet de les extraire proprement."
              ]
          },
          {
              "heading": "Pourquoi préférer un AI Tag Cleaner aux captures d’écran",
              "paragraphs": [
                  "Faire des captures d’écran pour supprimer les métadonnées [détériore fortement la résolution et les couleurs](remove-metadata-without-losing-quality).",
                  "Un [AI tag cleaner](ai-tag-cleaner) dédié conserve fidèlement le flux d’octets d’origine sans aucune compression supplémentaire."
              ]
          },
          {
              "heading": "Détection par les plateformes en 2026",
              "paragraphs": [
                  "Meta s’appuie largement sur C2PA et IPTC pour afficher le label “Infos IA”. TikTok et YouTube procèdent de même.",
                  "Nettoyer vos créations avec [AI Label Remover](ai-tag-cleaner) préserve leur authenticité sur tous les réseaux."
              ]
          },
          {
              "heading": "Transparence et déontologie",
              "paragraphs": [
                  "Obtenir le statut No AI Tag est légitime pour corriger des erreurs de détection. Si une œuvre est en revanche entièrement créée par IA, elle doit être signalée en toute franchise."
              ]
          }
      ],
      "faqHeading": "Questions fréquentes sur No AI Tag et les AI Tag Cleaners",
      "faq": [
          {
              "q": "Que signifie “No AI Tag” pour une image ?",
              "a": "Cela indique que le fichier ne renferme aucun manifeste C2PA ou balise IPTC susceptible d’activer un label IA automatique."
          },
          {
              "q": "Comment vérifier la présence de tags IA avant publication ?",
              "a": "Ouvrez l’image dans AI Label Remover. L’onglet d’analyse affichera directement les manifestes ou mentions d’IA."
          },
          {
              "q": "L’utilisation d’un AI Tag Cleaner réduit-elle la résolution ?",
              "a": "Non. AI Label Remover retire les métadonnées sans réencoder les pixels, conservant 100 % de la qualité visuelle."
          },
          {
              "q": "Pourquoi Lightroom ajoute-t-il un tag IA à mes exports RAW ?",
              "a": "Les versions récentes de Lightroom et Photoshop intègrent automatiquement des Content Credentials dès qu’un outil génératif est sollicité."
          }
      ]
  },

  'made-with-ai-label': {
    metaTitle: 'Pourquoi de vraies photos reçoivent une étiquette IA sur Instagram',
    related: ['iptc-digitalsourcetype-ai', 'which-platforms-label-ai-images', 'turn-off-content-credentials-photoshop-lightroom'],
    description:
      'Une vraie photo marquée « Infos IA » sur Instagram ou Facebook contient souvent un champ C2PA ou IPTC écrit par un éditeur. Trouvez ce champ et supprimez-le sans perte.',
    updated: '2026-10-23',
    sections: [
      {
        heading: 'L’étiquette lit votre fichier, pas votre photo',
        paragraphs: [
          'L’étiquette IA de Meta, « Infos IA » (anciennement « Créé avec l’IA »), est appliquée lorsqu’un fichier envoyé contient des signaux reconnus d’IA générative. Deux de ces signaux se trouvent dans le fichier image lui-même : [un manifeste Content Credentials C2PA](what-is-c2pa-content-credentials) et [la propriété IPTC DigitalSourceType](iptc-digitalsourcetype-ai) stockée dans le XMP.',
          'La valeur trainedAlgorithmicMedia indique que toute l’image a été générée ; compositeWithTrainedAlgorithmicMedia, qu’une vraie photo contient des parties créées par IA. Les deux peuvent être lues automatiquement à l’envoi. Meta utilise aussi d’autres signaux et demande de déclarer les contenus IA réalistes : les métadonnées du fichier ne sont qu’une source parmi d’autres.',
        ],
      },
      {
        heading: 'D’où vient le signal',
        paragraphs: ['Sur de vraies photos, le déclencheur est presque toujours l’appli de retouche, pas l’appareil photo. Sources typiques :'],
        bullets: [
          'Le Remplissage génératif, l’Extension générative ou un outil de suppression par IA, qui peuvent ajouter des actions c2pa et marquer le fichier comme montage.',
          '[L’export avec les Content Credentials activées](turn-off-content-credentials-photoshop-lightroom), qui signe dans le fichier la liste de toutes les retouches.',
          'Les fonctions de la galerie du téléphone, comme les gommes IA, qui laissent un marqueur de retouche.',
          'Le passage par d’autres applis qui recopient les métadonnées existantes, si bien que le marqueur survit à plusieurs enregistrements.',
        ],
      },
      {
        heading: 'Repérer le champ dans AI Label Remover',
        paragraphs: [
          'Posez l’image sur la table en haut de cette page. L’onglet « Traces d’IA » liste chaque signal avec son emplacement, par exemple « C2PA · compositeWithTrainedAlgorithmicMedia » ou « XMP · Iptc4xmpExt › DigitalSourceType ». Passez à « Métadonnées brutes » pour lire les valeurs sous-jacentes, dont le claim generator qui a signé le manifeste et chaque action c2pa enregistrée.',
          'Le verdict « À regarder de plus près » signifie que des Content Credentials sont présentes sans mention explicite de l’IA. Certaines plateformes y voient tout de même un indice : décidez avant de publier.',
        ],
      },
      {
        heading: 'Nettoyer la copie que vous publiez',
        paragraphs: [
          'Appuyez sur « Supprimer toutes les métadonnées ». AI Label Remover découpe du flux d’octets le magasin C2PA et les blocs XMP, IPTC et EXIF, en laissant intacts les pixels, la taille, la rotation et le profil couleur. Le fichier nettoyé est relu pour que vous voyiez la disparition des traces d’IA avant d’enregistrer. La page pour [supprimer les métadonnées IA](ai-tag-cleaner) détaille chaque trace traitée.',
          'Réenregistrer en JPEG supprimerait aussi les métadonnées, mais [recompresse l’image à chaque fois](remove-metadata-without-losing-quality). Découper les blocs évite totalement cette perte.',
        ],
      },
      {
        heading: 'Corriger une étiquette erronée n’est pas cacher une étiquette juste',
        paragraphs: [
          'Le nettoyage sert aux étiquettes qui décrivent mal votre travail et à garder privées vos informations personnelles. Si une image est entièrement ou largement générée et pourrait passer pour réelle, les règles des plateformes demandent en général de le signaler : l’étiquette existe pour informer le public. Utilisez AI Label Remover pour corriger des erreurs, pas pour faire passer des images synthétiques pour des photos.',
        ],
      },
    ],
    faqHeading: 'À propos de l’étiquette IA',
    faq: [
      { q: 'Puis-je retirer l’étiquette « Infos IA » après publication ?', a: 'Généralement pas en modifiant la publication. Si l’étiquette décrit mal une vraie photo, utilisez les options de contestation ou de statut du compte de la plateforme quand elles existent, et nettoyez le fichier avant la prochaine publication.' },
      { q: 'Si je nettoie le fichier, l’étiquette disparaît-elle à coup sûr ?', a: 'Aucune garantie. Le nettoyage retire les signaux stockés dans le fichier — la cause habituelle sur les photos retouchées —, mais les plateformes peuvent utiliser d’autres détections ou vous demander de déclarer.' },
      { q: 'La photo change-t-elle visuellement ?', a: 'Non. Seuls des blocs de métadonnées sont retirés. Les données d’image sont copiées octet par octet, la rotation et le profil couleur ICC restent en place.' },
      { q: 'Puis-je garder les réglages de l’appareil et retirer seulement les champs IA ?', a: 'Pas pour le moment. AI Label Remover retire en une passe toutes les métadonnées identifiantes — lieu, appareil, auteur et provenance IA —, le réglage le plus sûr pour un partage public. Taille, rotation, couleurs et animation sont toujours conservées.' },
    ],
  },

  'remove-stable-diffusion-comfyui-metadata': {
    metaTitle: 'Supprimer workflows ComfyUI et prompts Stable Diffusion des PNG',
    related: ['image-metadata-viewer-online', 'hide-midjourney-dalle-prompts', 'what-metadata-ai-image-generators-add'],
    description:
      'A1111, Forge et ComfyUI écrivent votre prompt, votre seed, votre checkpoint et tout le workflow dans chaque PNG. Voyez le texte exact, puis supprimez-le sans toucher un pixel.',
    updated: '2026-10-23',
    sections: [
      {
        heading: 'Vos réglages voyagent avec l’image',
        paragraphs: [
          'Les générateurs locaux stockent leurs réglages sous forme de texte dans le fichier produit, pour qu’une image puisse être recréée. Dans les PNG, ce texte se trouve dans des chunks tEXt, zTXt ou iTXt à côté des données d’image. Ce que l’on trouve en général :',
        ],
        bullets: [
          'A1111 et Forge : un chunk « parameters » avec prompt, prompt négatif, étapes, sampler, CFG, seed, résolution, hash et nom du modèle, plus les réglages LoRA et d’extensions.',
          'ComfyUI : un chunk « prompt » contenant le graphe de nœuds exécuté et un chunk « workflow » contenant toute la disposition de l’éditeur — déposez le PNG dans ComfyUI et toute la configuration réapparaît.',
          'InvokeAI, NovelAI et d’autres interfaces : des données similaires sous leurs propres clés.',
          'Exports JPEG ou WebP : certains outils écrivent le même texte dans [EXIF UserComment](what-is-exif-data).',
        ],
      },
      {
        heading: 'Raisons de nettoyer — et de ne pas le faire',
        paragraphs: [
          'Les données de génération sont une recette complète. Elles permettent à n’importe qui de reproduire votre style, montrent sur quels checkpoints et LoRA vous vous appuyez et peuvent exposer des chemins locaux, des noms de dossiers ou d’utilisateurs enfouis dans un workflow. Les gros graphes ComfyUI ajoutent aussi des dizaines de kilo-octets par image.',
          'À l’inverse, les sites de partage de modèles lisent les paramètres pour afficher les informations de génération, et vos collaborateurs peuvent vouloir le workflow. Vérifiez d’abord chaque fichier ; [AI Label Remover montre tout avant de supprimer quoi que ce soit](image-metadata-viewer-online).',
        ],
      },
      {
        heading: 'Lire le prompt dans AI Label Remover',
        paragraphs: [
          'Posez le PNG sur la table. Dans « Métadonnées brutes », chaque chunk de texte apparaît sous son mot-clé — parameters, prompt, workflow — avec tout son contenu, tandis que l’onglet « Traces d’IA » le signale comme prompt Stable Diffusion ou workflow ComfyUI. Les chunks compressés zTXt et iTXt sont décompressés dans le navigateur pour que vous puissiez les lire.',
        ],
      },
      {
        heading: 'Ce que le nettoyage conserve',
        paragraphs: [
          'Appuyez sur « Supprimer toutes les métadonnées ». Le module PNG retire les chunks de texte, XMP, EXIF et C2PA en entier et conserve IHDR, IDAT, palette, transparence, gamma et couleur, ainsi que les chunks d’animation APNG. Comme les chunks sont retirés en entier, les CRC restants restent valides et le fichier s’ouvre partout. La page pour [supprimer les métadonnées PNG](png-metadata-remover) détaille chaque chunk.',
          'Ouvrir et réenregistrer dans un éditeur ferait aussi disparaître le texte, mais [recompresse l’image et peut décaler les couleurs](remove-metadata-without-losing-quality). La suppression au niveau des octets évite les deux.',
        ],
      },
    ],
    faqHeading: 'À propos des données Stable Diffusion et ComfyUI',
    faq: [
      { q: 'Comment empêcher A1111 ou ComfyUI d’enregistrer des métadonnées ?', a: 'A1111 et Forge ont un réglage qui arrête l’écriture des paramètres de génération dans les PNG, et ComfyUI peut être lancé avec l’option --disable-metadata. Les deux ne valent que pour les nouvelles images : nettoyez celles que vous avez déjà.' },
      { q: 'ComfyUI peut-il reconstruire le workflow depuis un PNG nettoyé ?', a: 'Non. Les chunks « prompt » et « workflow » ont disparu, donc glisser le fichier dans ComfyUI ne restaure rien. Gardez un original non nettoyé si vous aurez besoin du graphe.' },
      { q: 'Le PNG nettoyé est-il identique à l’œil ?', a: 'Oui. Les chunks IDAT contenant les pixels compressés sont copiés sans modification : l’image est identique pixel pour pixel.' },
      { q: 'Et les exports JPEG et WebP ?', a: 'Les prompts stockés dans EXIF UserComment ou XMP sont aussi détectés et retirés des fichiers JPEG et WebP.' },
    ],
  },

  'hide-midjourney-dalle-prompts': {
    metaTitle: 'Supprimer les prompts des images Midjourney et DALL·E',
    related: ['chatgpt-gemini-image-metadata', 'what-metadata-ai-image-generators-add', 'synthid-invisible-ai-watermarks'],
    description:
      'Les images téléchargées depuis Midjourney, DALL·E, ChatGPT ou Firefly peuvent contenir votre prompt, l’ID de tâche et la provenance IA. Vérifiez le fichier et nettoyez-le avant de publier.',
    updated: '2026-10-23',
    sections: [
      {
        heading: 'Ce qu’écrivent les générateurs en ligne',
        paragraphs: [
          'Les services d’images en ligne ajoutent de plus en plus de métadonnées aux téléchargements, par transparence et pour respecter les normes de provenance. Les champs exacts varient selon le service et changent avec le temps : la seule réponse fiable est d’ouvrir le fichier. Ce que vous pouvez trouver :',
        ],
        bullets: [
          'Midjourney : le prompt et un ID de tâche dans les champs de description ou de commentaire, souvent avec un [IPTC DigitalSourceType](iptc-digitalsourcetype-ai) qui marque l’image comme créée par IA.',
          '[DALL·E et la génération d’images de ChatGPT](chatgpt-gemini-image-metadata) : des [Content Credentials C2PA](what-is-c2pa-content-credentials) nommant le générateur.',
          'Adobe Firefly : des Content Credentials décrivant l’image comme générée par IA.',
          'Beaucoup d’outils : un nom de logiciel, une date de création et parfois un identifiant lié au compte.',
        ],
      },
      {
        heading: 'Un prompt est un travail qui mérite d’être protégé',
        paragraphs: [
          'Pour les illustrateurs, les designers et les auteurs de prompts, un prompt abouti est le fruit de nombreux essais. N’importe quel lecteur de métadonnées gratuit affiche le texte intégré à quiconque télécharge votre image, prêt à être copié. Les ID de tâche et les informations de compte peuvent aussi relier une image publique à vous.',
        ],
      },
      {
        heading: 'Regarder d’abord, nettoyer ensuite',
        paragraphs: [
          'Posez l’image sur la table et lisez le rapport. Les lignes marquées « IA » contiennent prompts, noms de générateurs et déclarations d’origine ; les lignes marquées « Personnes », auteurs, descriptions et identifiants. Appuyez sur « Supprimer toutes les métadonnées » et enregistrez le fichier propre — ou tout le lot en ZIP. La page pour [supprimer les métadonnées IA](ai-tag-cleaner) explique chaque type de trace.',
          'Tout se passe dans votre navigateur : les prompts que vous protégez ne transitent donc pas par un service de plus en chemin.',
        ],
      },
      {
        heading: 'Les limites à connaître',
        paragraphs: [
          'Certains fournisseurs cachent aussi des filigranes dans les pixels, comme [SynthID de Google](synthid-invisible-ai-watermarks). Ce ne sont pas des métadonnées et le nettoyage n’y touche pas. Et si vous publiez une image IA réaliste, les règles de la plateforme peuvent encore vous demander de la déclarer. Le nettoyage protège votre méthode ; il ne change pas la nature de l’image.',
        ],
      },
    ],
    faqHeading: 'À propos des métadonnées Midjourney et DALL·E',
    faq: [
      { q: 'Quelqu’un peut-il lire mon prompt dans une image téléchargée ?', a: 'Si le prompt est stocké dans les métadonnées du fichier, n’importe qui disposant d’un lecteur de métadonnées peut le lire et le copier. Nettoyer le fichier avant de le partager le supprime.' },
      { q: 'Chaque téléchargement Midjourney contient-il le prompt ?', a: 'Cela dépend du format et du comportement actuel du service. Ouvrez le fichier dans AI Label Remover pour voir exactement ce qu’il contient.' },
      { q: 'Le nettoyage retire-t-il SynthID ou des filigranes similaires ?', a: 'Non. Les filigranes invisibles se trouvent dans les données de pixels, que AI Label Remover ne modifie jamais.' },
      { q: 'Puis-je nettoyer toute une série de générations ?', a: 'Oui. Chargez jusqu’à 50 images, vérifiez les rapports, puis enregistrez-les toutes dans un seul ZIP.' },
    ],
  },

  'what-is-c2pa-content-credentials': {
    metaTitle: 'Qu’est-ce que le C2PA ? Les Content Credentials expliquées',
    related: ['iptc-digitalsourcetype-ai', 'turn-off-content-credentials-photoshop-lightroom', 'chatgpt-gemini-image-metadata'],
    description:
      'Guide simple des Content Credentials C2PA : ce que consigne le manifeste signé, où JPEG, PNG, WebP, HEIC et AVIF le stockent, comment le lire et ce que fait sa suppression.',
    updated: '2026-10-23',
    sections: [
      {
        heading: 'En bref',
        paragraphs: [
          'La Coalition for Content Provenance and Authenticity (C2PA) maintient une norme ouverte pour attacher aux médias un historique qui révèle toute falsification. Le public la voit sous le nom de Content Credentials. Appareils photo, éditeurs et générateurs d’IA peuvent signer dans une image un enregistrement de sa création — prise avec un appareil, retouchée dans une appli ou produite par un modèle.',
        ],
      },
      {
        heading: 'Anatomie d’un manifeste',
        paragraphs: ['Un manifeste est un paquet compact et structuré en trois parties principales :'],
        bullets: [
          'Claim generator — le logiciel ou service qui a produit le manifeste, comme un éditeur ou une API d’images IA.',
          'Assertions — des déclarations sur le contenu : c2pa.actions (créé, modifié, ouvert, redimensionné…), [un digitalSourceType](iptc-digitalsourcetype-ai) et des liens vers les fichiers sources.',
          'Signature — une signature cryptographique et un certificat identifiant le signataire, plus une empreinte qui lie le manifeste aux données exactes de l’image.',
        ],
      },
      {
        heading: 'Où chaque format le stocke',
        paragraphs: [
          'Le manifeste est placé dans un conteneur JUMBF que chaque format range à son propre emplacement : segments APP11 en JPEG, chunk caBX en PNG, chunk C2PA en WebP et boîte uuid en HEIC et AVIF. Comme bloc séparé, il peut être lu et retiré sans décoder l’image. AI Label Remover affiche le bloc, le claim generator, les actions enregistrées et le type de source lorsqu’ils existent.',
        ],
      },
      {
        heading: 'Ce que fait réellement la suppression',
        paragraphs: [
          '[Le nettoyage efface l’enregistrement intégré](remove-c2pa-content-credentials) de cette copie du fichier. Gardez à l’esprit que toute retouche rompt déjà le lien cryptographique — les vérificateurs signalent comme invalide un manifeste qui ne correspond plus aux pixels —, donc la suppression retire un enregistrement qui, sinon, continuerait de voyager avec le fichier.',
          'Certains systèmes ajoutent des justificatifs « durables » : [un filigrane invisible ou une empreinte](synthid-invisible-ai-watermarks) qui permet à un vérificateur de récupérer le manifeste dans un dépôt en ligne même après la disparition de la copie intégrée. Le nettoyage des métadonnées n’a aucun effet dessus, car ils résident dans les pixels ou sur un serveur distant.',
        ],
      },
      {
        heading: 'Le garder ou le retirer ?',
        paragraphs: [
          'Les justificatifs sont utiles quand vous devez prouver l’origine d’une image — en journalisme ou pour vos propres photos originales. Ils peuvent aussi révéler un logiciel, un historique de retouche et une identité que vous préférez garder pour vous, ou [déclencher des étiquettes IA sur des photos à peine retouchées](made-with-ai-label). Lisez d’abord le manifeste et décidez fichier par fichier.',
        ],
      },
    ],
    faqHeading: 'À propos du C2PA',
    faq: [
      { q: 'Qui utilise le C2PA ?', a: 'Adobe, Microsoft, Google, OpenAI, Meta, des fabricants d’appareils comme Leica, Sony et Nikon, ainsi que de nombreux médias soutiennent la norme ou font partie de la coalition, chacun l’utilisant à sa manière.' },
      { q: 'Le C2PA est-il une sorte de filigrane invisible ?', a: 'Non. Le C2PA, ce sont des métadonnées stockées à côté des données d’image. Les filigranes dans les pixels comme SynthID sont un mécanisme distinct, non affecté par le nettoyage.' },
      { q: 'Comment vérifier la signature avant de nettoyer ?', a: 'AI Label Remover affiche le générateur, les actions et le type de source. Pour une validation complète de la signature, passez d’abord l’original dans un vérificateur officiel de Content Credentials.' },
      { q: 'Supprimer le C2PA fait-il perdre en qualité ?', a: 'Non. Le manifeste est un bloc à part ; les données d’image compressées sont copiées telles quelles.' },
    ],
  },

  'remove-gps-location-from-photos': {
    metaTitle: 'Supprimer la position GPS des photos sur iPhone, Android et PC',
    related: ['which-platforms-strip-photo-metadata', 'view-remove-metadata-iphone-android', 'remove-metadata-windows-mac'],
    description:
      'Supprimez la position GPS de vos photos avant de les partager : quels champs EXIF révèlent lieu, appareil et heure, par où ils fuient et comment les nettoyer sans perte.',
    updated: '2026-10-23',
    sections: [
      {
        heading: 'Ce que le téléphone inscrit dans chaque photo',
        paragraphs: ['Avec la localisation activée, une photo de smartphone ordinaire peut contenir :'],
        bullets: [
          'Latitude, longitude et altitude, souvent à quelques mètres près, plus un horodatage GPS.',
          'Le moment exact de la prise de vue et de la dernière retouche.',
          'Marque et modèle, informations sur l’objectif et parfois un numéro de série ou le nom du propriétaire.',
          'Des aperçus intégrés et des images secondaires (cartes de profondeur, images MPF) avec leur propre copie de l’EXIF.',
        ],
      },
      {
        heading: 'Comment le fichier d’origine s’échappe',
        paragraphs: [
          'Les grands fils sociaux retirent généralement l’EXIF de ce qu’ils publient, mais bien des voies transmettent l’original intact : [l’envoi « en tant que fichier » ou document dans les messageries](which-platforms-strip-photo-metadata), les pièces jointes, les liens cloud partagés, les forums, les sites d’annonces et de portfolio. Une seule photo prise chez vous peut révéler votre adresse ; une série, vos habitudes.',
        ],
      },
      {
        heading: 'Vérifier les données GPS que révèle votre photo',
        paragraphs: [
          'Posez la photo sur la table. L’onglet « Ce qu’il révèle » montre aussitôt si des champs de lieu, de personnes et d’heure sont présents, avec la position GPS convertie en coordonnées décimales. « Métadonnées brutes » liste tous les champs regroupés par [EXIF IFD0, Exif et GPS](what-is-exif-data).',
        ],
      },
      {
        heading: 'Nettoyer sans effets secondaires',
        paragraphs: [
          'Appuyez sur « Supprimer toutes les métadonnées ». [Les champs GPS, dates, appareil, auteur et logiciel](remove-exif-data) disparaissent, avec les miniatures intégrées et les images secondaires MPF qui en garderaient une copie cachée. La balise d’orientation est réécrite dans un minuscule bloc EXIF pour que les portraits ne basculent pas, et le profil couleur est conservé pour des couleurs fidèles. Les HEIC d’iPhone sont nettoyés directement, sans conversion en JPEG — voir la page pour [supprimer les métadonnées HEIC](heic-metadata-remover).',
        ],
      },
      {
        heading: 'Couper à la source, dans l’appareil photo',
        paragraphs: [
          'Vous pouvez [désactiver la géolocalisation dans les réglages de l’appareil photo](view-remove-metadata-iphone-android) ou retirer la position pour un partage via les options de partage du téléphone. Nettoyer le fichier avant envoi reste l’habitude la plus complète, car elle efface aussi l’appareil, l’heure et les aperçus que les réglages du téléphone laissent passer.',
        ],
      },
      {
        heading: 'La précision réelle des coordonnées',
        paragraphs: [
          'L’EXIF stocke latitude et longitude en degrés, minutes et secondes, et les téléphones enregistrent les secondes avec des décimales. Une seconde de latitude représente environ 31 mètres : une valeur à deux décimales désigne donc, sur le papier, un point de moins d’un mètre. La précision réelle dépend du signal — souvent 3 à 10 mètres en extérieur, moins bien en intérieur —, mais elle suffit encore à repérer une maison précise. Beaucoup de téléphones ajoutent l’altitude, qui peut trahir l’étage, et la direction vers laquelle pointait l’objectif.',
        ],
      },
      {
        heading: 'Des risques réels, pas des hypothèses',
        paragraphs: ['Les données de localisation transforment des photos ordinaires en carte de votre vie :'],
        bullets: [
          'La photo d’un objet que vous vendez, prise chez vous, donne votre adresse aux acheteurs — et à quiconque voit l’annonce.',
          'Une série de photos à la salle de sport, devant l’école ou au bureau révèle une routine et ses horaires.',
          'Des photos de vacances publiées pendant votre absence montrent que votre logement est vide.',
          'Des photos d’enfants peuvent révéler leur école, leur parc ou leur domicile.',
        ],
      },
      {
        heading: 'La position ne se cache pas que dans les balises GPS',
        paragraphs: [
          'Vider le répertoire GPS ne suffit pas toujours. Les gestionnaires de photos peuvent recopier les coordonnées dans le XMP, et des champs IPTC comme City, Sublocation et Country peuvent nommer le lieu en clair. AI Label Remover retire le XMP et l’IPTC en même temps que l’EXIF : ces copies disparaissent aussi. Ce qu’aucun outil de métadonnées ne peut retirer, c’est l’image elle-même : panneaux, numéros de rue, vue depuis une fenêtre ou reflet peuvent trahir un lieu — jetez un œil avant de publier.',
        ],
      },
      {
        heading: 'Une vérification rapide avant de partager',
        paragraphs: [],
        bullets: [
          'Posez la photo dans AI Label Remover et regardez l’onglet « Ce qu’il révèle ».',
          'Si un lieu apparaît, appuyez sur « Supprimer toutes les métadonnées » et enregistrez la copie nettoyée.',
          'Vérifiez que le panneau vert confirme la disparition du lieu, des personnes et de l’heure.',
          'Parcourez l’image à la recherche d’indices visibles — adresses, plaques d’immatriculation, monuments.',
          'Partagez la copie nettoyée et gardez l’original dans votre photothèque.',
        ],
      },
    ],
    faqHeading: 'À propos du GPS et de la confidentialité des photos',
    faq: [
      { q: 'Peut-on récupérer la position après le nettoyage ?', a: 'Pas à partir du fichier nettoyé : les champs sont supprimés, pas masqués. L’original sur votre téléphone la contient toujours, alors ne partagez que la copie nettoyée.' },
      { q: 'Si je coupe le GPS, mes photos sont-elles encore géolocalisées ?', a: 'Elles peuvent l’être. Le téléphone peut estimer sa position via le Wi-Fi et le réseau mobile : retirez l’accès à la localisation à l’appli appareil photo elle-même, pas seulement le GPS.' },
      { q: 'Comment savoir si une photo contient des données GPS ?', a: 'Posez-la dans AI Label Remover : l’onglet « Ce qu’il révèle » affiche toute position avec des coordonnées décodées. Sur un téléphone, le panneau d’informations de la photo affiche une carte quand le GPS est présent.' },
      { q: 'Les réseaux sociaux ne retirent-ils pas déjà le GPS ?', a: 'Beaucoup de grands réseaux retirent l’EXIF de l’image publiée. Les pièces jointes, documents et liens cloud conservent généralement les métadonnées d’origine.' },
      { q: 'Ma photo va-t-elle se retrouver pivotée ?', a: 'Non. La balise d’orientation est conservée : la photo s’affiche exactement comme avant.' },
      { q: 'Les photos HEIC de l’iPhone fonctionnent-elles ?', a: 'Oui. Les HEIC et HEIF sont nettoyés directement, sans changement de format ni réencodage.' },
    ],
  },

  'batch-remove-metadata': {
    metaTitle: 'Supprimer les métadonnées d’images par lot — gratuit, sans envoi',
    related: ['remove-metadata-without-losing-quality', 'remove-metadata-windows-mac', 'remove-gps-location-from-photos'],
    description:
      'Supprimez par lot les métadonnées de 50 images dans le navigateur : comment les workers parallèles gardent la vitesse, comment chaque résultat est vérifié et comment tout enregistrer en ZIP.',
    updated: '2026-10-23',
    sections: [
      {
        heading: 'Un lot, du début à la fin',
        paragraphs: [],
        bullets: [
          'Posez jusqu’à 50 fichiers JPG, PNG, WebP, GIF, HEIC ou AVIF sur la table (25 Mo et 40 MP chacun).',
          'Chacun est lu automatiquement ; cliquez sur un fichier de la file pour voir son rapport.',
          'Appuyez une fois sur « Supprimer toutes les métadonnées » pour nettoyer tout ce qui a été lu — le même moteur que l’outil pour [supprimer les données EXIF](remove-exif-data).',
          'Enregistrez les fichiers un par un, ou appuyez sur « Tout enregistrer en ZIP » pour une seule archive.',
        ],
      },
      {
        heading: 'De la vitesse sans serveur',
        paragraphs: [
          'AI Label Remover répartit le travail entre plusieurs Web Workers — des fils d’exécution en arrière-plan du navigateur — selon le nombre de cœurs de votre processeur. Chaque worker prend un fichier, l’analyse et renvoie les octets nettoyés : la page reste fluide même avec de lourds HEIC. Le ZIP utilise la méthode « store », car les images sont déjà compressées ; l’empaquetage est rapide et [n’ajoute aucune perte](remove-metadata-without-losing-quality).',
        ],
      },
      {
        heading: 'Chaque résultat est relu',
        paragraphs: [
          'Après le nettoyage, chaque fichier produit est relu et le panneau vert confirme si les données de lieu, de personnes, d’heure et les traces d’IA ont disparu. Si deux fichiers portent le même nom, la copie dans le ZIP reçoit un numéro pour que rien ne soit écrasé.',
        ],
      },
      {
        heading: 'Quand il y a des centaines de fichiers',
        paragraphs: [
          'Procédez par séries de 50 et videz la table entre deux séries pour libérer la mémoire. Sur les téléphones peu dotés en mémoire, fermez d’abord les autres onglets lourds. Comme rien n’est envoyé, vous pouvez même passer hors ligne une fois la page chargée.',
        ],
      },
      {
        heading: 'Rien ne quitte la machine',
        paragraphs: [
          'Aucune image n’est envoyée, stockée ni journalisée ; le seul trafic réseau est le chargement de la page elle-même. Le nettoyage par lot convient donc aux livraisons clients, aux séances non publiées et à tout ce que vous n’avez pas le droit d’envoyer à un tiers.',
        ],
      },
    ],
    faqHeading: 'À propos du nettoyage par lot',
    faq: [
      { q: 'Un lot peut-il mélanger les formats ?', a: 'Oui. Un même lot peut mélanger JPG, PNG, WebP, GIF, HEIC et AVIF, et chaque fichier garde son format.' },
      { q: 'Pourquoi s’arrêter à 50 fichiers ?', a: 'Tout le traitement utilise la mémoire de votre appareil. La limite garde les téléphones et ordinateurs anciens stables ; vous pouvez enchaîner autant de séries que vous voulez.' },
      { q: 'Les noms de fichiers changent-ils ?', a: 'Non. Les fichiers nettoyés gardent leur nom. Seuls les doublons exacts dans le ZIP reçoivent un suffixe numéroté.' },
      { q: 'Cela fonctionne-t-il hors ligne ?', a: 'Oui. Une fois chargée, la page nettoie les fichiers sans connexion, puisque rien n’est envoyé.' },
    ],
  },

  'chatgpt-gemini-image-metadata': {
    title: 'Images ChatGPT, Gemini et Nano Banana : quelles métadonnées elles contiennent',
    metaTitle: 'Métadonnées des images ChatGPT et Gemini : C2PA, SynthID',
    summary: [
      'Les images créées avec ChatGPT ou Google Gemini (Nano Banana compris) sortent du générateur avec des informations de provenance : des Content Credentials C2PA stockées à côté de l’image et, chez Google, un filigrane invisible SynthID tissé dans les pixels.',
      'Ce guide montre ce que chaque fournisseur écrit en général, comment le lire dans votre navigateur, ce qu’un nettoyeur de métadonnées peut retirer — et ce qu’aucun outil honnête ne peut toucher.',
    ],
    description:
      'Quelles métadonnées contiennent les images ChatGPT et Gemini (Nano Banana) — C2PA, SynthID, marques visibles —, comment les lire et ce que le nettoyage peut retirer.',
    related: ['synthid-invisible-ai-watermarks', 'what-metadata-ai-image-generators-add', 'how-to-check-if-image-is-ai-generated'],
    updated: '2026-10-23',
    sections: [
      {
        heading: 'Deux fournisseurs, deux couches de marquage',
        paragraphs: [
          'OpenAI et Google marquent tous deux les images générées, mais misent sur des couches différentes. OpenAI s’appuie surtout sur les [Content Credentials C2PA](what-is-c2pa-content-credentials) : un manifeste signé, stocké dans le fichier, qui nomme le générateur et indique que l’image a été créée par une IA. Google s’appuie surtout sur [SynthID](synthid-invisible-ai-watermarks), un filigrane invisible intégré aux pixels au moment de la génération, et a ajouté des métadonnées C2PA aux modèles récents comme Nano Banana Pro dans l’app Gemini et ses produits cloud.',
          'Les deux couches se comportent très différemment. Les métadonnées occupent leur propre bloc, n’importe quel lecteur compétent peut les lire, et elles disparaissent dès que le fichier est réencodé ou nettoyé. Un filigrane dans les pixels résiste au recadrage, au redimensionnement et à la compression, et seul le détecteur du fournisseur peut le lire.',
        ],
      },
      {
        heading: 'Ce que contient en général une image ChatGPT',
        paragraphs: ['Les champs exacts varient selon les versions, mais un PNG ou JPEG téléchargé directement depuis ChatGPT ou l’API d’images d’OpenAI contient souvent :'],
        bullets: [
          'Un manifeste C2PA — dans un chunk caBX en PNG ou des segments APP11 en JPEG — signé avec un certificat délivré à OpenAI.',
          'Un claim generator qui nomme le service OpenAI ayant produit l’image.',
          'Une action c2pa.created avec le type de source numérique [trainedAlgorithmicMedia](iptc-digitalsourcetype-ai), la formule standard pour « créé par un modèle génératif ».',
          'Si vous modifiez une photo importée, une entrée d’ingrédient pointant vers l’original et des actions décrivant la retouche.',
        ],
      },
      {
        heading: 'Ce que contient en général une image Gemini ou Nano Banana',
        paragraphs: [
          'Toute image générée par les modèles de Google porte SynthID dans ses pixels. Selon le modèle, l’app et l’abonnement, vous pouvez aussi trouver une marque visible en forme d’étincelle dans un coin et, pour les modèles récents, un manifeste C2PA décrivant l’image comme générée par IA. Google permet aussi de demander à Gemini si une image contient SynthID, seule méthode fiable pour vérifier le filigrane.',
          'Comme la marque visible et SynthID font partie de l’image, rien de ce qui modifie seulement les métadonnées ne les affecte. Le manifeste C2PA, s’il existe, se comporte comme n’importe quel autre bloc de métadonnées.',
        ],
      },
      {
        heading: 'Pourquoi les métadonnées disparaissent souvent d’elles-mêmes',
        paragraphs: [
          'Les métadonnées de provenance sont fragiles. Une capture d’écran les supprime totalement. Beaucoup de messageries et de réseaux sociaux réencodent les fichiers envoyés et nettoient la copie publique. Même renvoyer un fichier à un assistant conversationnel peut ne laisser que les données d’image. Une image ChatGPT ou Gemini sans Content Credentials est donc courante et ne prouve rien sur son origine — seul le téléchargement d’origine conserve l’enregistrement complet.',
        ],
      },
      {
        heading: 'Lisez le fichier avant de le partager',
        paragraphs: [
          'Posez l’image sur la table en haut de cette page. L’onglet « Traces d’IA » indique si un manifeste C2PA est présent, quel claim generator l’a signé et quel type de source il déclare. « Métadonnées brutes » liste les actions enregistrées et les ingrédients, ainsi que les champs EXIF et XMP ajoutés par les applis par lesquelles le fichier est passé. Rien n’est envoyé ; le fichier est lu dans votre navigateur.',
        ],
      },
      {
        heading: 'Ce que le nettoyage retire — et ce qui reste',
        paragraphs: ['Appuyer sur « Supprimer toutes les métadonnées » — ou passer par l’outil pour [supprimer les métadonnées IA](ai-tag-cleaner) — découpe les métadonnées du flux d’octets sans redessiner l’image. En pratique :'],
        bullets: [
          'Retiré : le manifeste C2PA, les champs XMP et IPTC, l’EXIF et tout texte qui nomme l’outil ou contient un prompt.',
          'Conservé : les pixels, les dimensions, la rotation et le profil couleur ICC — l’image reste identique.',
          'Non affecté : SynthID et toute marque visible en étincelle, car tous deux vivent dans les pixels. Les vérificateurs du fournisseur reconnaissent toujours l’image grâce à son filigrane.',
        ],
      },
      {
        heading: 'Utilisez les images IA honnêtement',
        paragraphs: [
          'Le nettoyage est un outil de confidentialité : il évite que prompts, informations de compte et historique de retouche voyagent avec un fichier. Il ne change pas la nature de l’image. Si vous publiez une image IA réaliste, la plupart des plateformes attendent que vous le signaliez, et certaines limitent la portée des comptes qui ne le font pas. Corrigez les étiquettes erronées sur de vraies photos ; signalez clairement le travail réellement fait avec l’IA.',
        ],
      },
    ],
    faqHeading: 'À propos des métadonnées des images ChatGPT et Gemini',
    faq: [
      { q: 'Toutes les images ChatGPT contiennent-elles du C2PA ?', a: 'Les images téléchargées directement depuis la génération d’images d’OpenAI contiennent normalement des Content Credentials. Les copies issues d’une capture, réenregistrées ou passées par d’autres applis les perdent souvent.' },
      { q: 'AI Label Remover peut-il retirer SynthID des images Gemini ?', a: 'Non. SynthID est intégré aux pixels, et AI Label Remover ne modifie jamais les pixels. Il retire seulement des métadonnées comme le C2PA, le XMP et l’EXIF.' },
      { q: 'Comment savoir si une image vient de Gemini ?', a: 'Cherchez d’abord un manifeste C2PA dans AI Label Remover. Pour SynthID, utilisez la vérification de Google, par exemple en interrogeant Gemini sur l’image.' },
      { q: 'Nettoyer une image ChatGPT réduit-il sa qualité ?', a: 'Non. Seuls des blocs de métadonnées sont retirés ; les données d’image compressées sont copiées sans modification, le résultat est identique pixel pour pixel.' },
    ],
  },

  'remove-metadata-windows-mac': {
    title: 'Comment supprimer les métadonnées des photos sous Windows et Mac',
    metaTitle: 'Supprimer les métadonnées photo sous Windows 11 et Mac',
    summary: [
      'Windows et macOS proposent tous deux un moyen de retirer certaines métadonnées des photos, mais chacun ne couvre qu’une partie du travail : Windows se concentre sur les propriétés EXIF, macOS sur la localisation.',
      'Voici les étapes exactes des outils intégrés, la méthode gratuite en ligne de commande utilisée par les pros, et une méthode dans le navigateur qui fonctionne pareil sur les deux systèmes et retire aussi le C2PA, le XMP et les prompts IA.',
    ],
    description:
      'Pas à pas : supprimez EXIF, GPS et autres métadonnées sous Windows 11/10 et macOS avec les outils intégrés, ExifTool ou le navigateur — et ce que chacun laisse passer.',
    related: ['view-remove-metadata-iphone-android', 'remove-metadata-without-losing-quality', 'what-is-exif-data'],
    updated: '2026-10-23',
    sections: [
      {
        heading: 'Sachez ce que vous supprimez',
        paragraphs: [
          'Une photo peut contenir plusieurs types de métadonnées à la fois : [EXIF](what-is-exif-data) (appareil, heure, GPS), XMP (historique de retouche, descriptions, champs IA), IPTC (légendes, droits, [DigitalSourceType](iptc-digitalsourcetype-ai)), [Content Credentials C2PA](what-is-c2pa-content-credentials) et, dans les PNG, des chunks de texte contenant des prompts IA. Les outils système ont été pensés pour l’EXIF et laissent souvent les autres types en place. Gardez-le en tête au moment de choisir une méthode.',
        ],
      },
      {
        heading: 'Windows 11 et 10 : l’Explorateur de fichiers',
        paragraphs: ['L’Explorateur de fichiers intègre un outil de suppression des propriétés courantes :'],
        bullets: [
          'Sélectionnez une ou plusieurs photos, faites un clic droit et choisissez Propriétés.',
          'Ouvrez l’onglet Détails et cliquez sur « Supprimer les propriétés et les informations personnelles » en bas.',
          'Choisissez « Créer une copie en supprimant toutes les propriétés possibles » pour un double propre, ou « Supprimer les propriétés suivantes de ce fichier » pour cocher des champs précis.',
          'Cliquez sur OK, puis ouvrez l’onglet Détails de la copie pour vérifier que les champs GPS et appareil sont vides.',
        ],
      },
      {
        heading: 'Les limites de la méthode Windows',
        paragraphs: [
          'L’option fonctionne surtout avec les JPEG et TIFF. Pour les PNG, WebP, HEIC et AVIF, elle peut n’afficher presque rien à supprimer. Elle peut aussi laisser des paquets XMP, des manifestes C2PA et des miniatures intégrées, sans indiquer ce qui reste. L’app Photos ne propose pas d’export qui retire les métadonnées.',
        ],
      },
      {
        heading: 'macOS : Aperçu et Photos',
        paragraphs: ['Sur Mac, les options intégrées visent la localisation :'],
        bullets: [
          'Aperçu : ouvrez la photo, choisissez Outils › Afficher l’inspecteur, ouvrez l’onglet de localisation (GPS), cliquez sur « Supprimer les informations de localisation », puis enregistrez.',
          'Photos : sélectionnez les images et choisissez Image › Lieu › Masquer le lieu, ou utilisez Fichier › Exporter en décochant les informations de lieu pour que la copie exportée n’ait pas de GPS.',
          'Lire les informations dans le Finder et l’inspecteur d’Aperçu permettent de vérifier le résultat, mais tous deux n’affichent qu’une partie des champs.',
        ],
      },
      {
        heading: 'Les limites de la méthode Mac',
        paragraphs: [
          'Supprimer la localisation laisse le modèle de l’appareil, l’heure de prise de vue, le logiciel et l’historique de retouche. Exporter en JPEG depuis Aperçu ou Photos [réencode l’image](remove-metadata-without-losing-quality), ce qui coûte un peu de qualité à chaque fois, et les fichiers HEIC peuvent être convertis si vous ne choisissez pas autrement.',
        ],
      },
      {
        heading: 'Ligne de commande sur les deux : ExifTool',
        paragraphs: [
          'ExifTool est un outil de métadonnées gratuit et éprouvé pour Windows, macOS et Linux. Il modifie les fichiers sans les réencoder. Commandes utiles :',
        ],
        bullets: [
          'exiftool -all= photo.jpg — supprime toutes les métadonnées modifiables et garde une sauvegarde nommée photo.jpg_original.',
          'exiftool -all= --icc_profile:all -tagsfromfile @ -orientation photo.jpg — supprime tout sauf le profil couleur et l’orientation, pour que couleurs et rotation restent justes.',
          'exiftool -all= -r "C:\\Photos\\Partage" — nettoie tout un dossier, sous-dossiers compris.',
        ],
      },
      {
        heading: 'Méthode navigateur : les mêmes étapes sur tout ordinateur',
        paragraphs: [
          'Si vous ne pouvez pas installer de logiciel — sur un portable professionnel par exemple — ou si vous voulez une seule méthode pour tous les formats, ouvrez AI Label Remover dans Chrome, Edge, Safari ou Firefox. Déposez jusqu’à 50 images, lisez le rapport, appuyez sur « Supprimer toutes les métadonnées » et enregistrez les fichiers ou un ZIP. Il [retire EXIF](remove-exif-data), GPS, XMP, IPTC, C2PA et les chunks de prompts PNG des JPEG, PNG, WebP, GIF, HEIC et AVIF, conserve l’orientation et le profil couleur, et tout se passe sur votre machine.',
        ],
      },
      {
        heading: 'Quelle méthode choisir',
        paragraphs: [],
        bullets: [
          'Un seul JPEG, l’essentiel : l’Explorateur de fichiers sous Windows, Aperçu sur Mac.',
          'Seulement la localisation, directement depuis votre photothèque : Photos sur Mac.',
          'Scripts, serveurs ou milliers de fichiers : ExifTool.',
          'Formats mélangés, métadonnées IA ou installation interdite : un outil local dans le navigateur comme AI Label Remover.',
        ],
      },
    ],
    faqHeading: 'À propos de la suppression des métadonnées sur ordinateur',
    faq: [
      { q: '« Supprimer les propriétés et les informations personnelles » efface-t-il le GPS ?', a: 'Oui, pour les JPEG il retire le GPS avec les autres propriétés EXIF. Vérifiez l’onglet Détails du résultat, car certaines données XMP peuvent subsister.' },
      { q: 'Puis-je supprimer les métadonnées de photos HEIC sous Windows ?', a: 'L’Explorateur de fichiers gère mal le HEIC. ExifTool ou un outil de navigateur compatible HEIC, comme AI Label Remover, les retire sans convertir le fichier.' },
      { q: 'Exporter depuis Aperçu supprime-t-il toutes les métadonnées ?', a: 'Pas de façon fiable. L’export peut retirer certains champs et en garder d’autres, et il recompresse les JPEG. Vérifiez le fichier exporté avant de le partager.' },
      { q: 'Quelle méthode préserve la qualité de l’image ?', a: 'L’Explorateur de fichiers, ExifTool et AI Label Remover modifient les métadonnées sans réencoder. Exporter un nouveau JPEG depuis un éditeur ou une visionneuse recompresse l’image.' },
    ],
  },

  'image-metadata-viewer-online': {
    title: 'Lecteur de métadonnées d’image : EXIF, GPS, XMP, IPTC et C2PA au même endroit',
    metaTitle: 'Lecteur de métadonnées : vérifier EXIF, GPS et données IA',
    summary: [
      'Avant de partager une photo ou de faire confiance à une image, un bon lecteur de métadonnées montre tout ce que le fichier dit de lui-même — pas seulement la poignée de champs qu’affichent le téléphone ou l’explorateur de fichiers.',
      'Ce guide explique ce que couvre une vérification complète, où s’arrêtent les lecteurs intégrés, pourquoi beaucoup de lecteurs EXIF en ligne sont eux-mêmes un risque pour la vie privée, et comment lire les champs importants.',
    ],
    description:
      'Lecteur de métadonnées gratuit : voyez les champs EXIF, GPS, XMP, IPTC, C2PA et prompts IA dans le navigateur, sans envoi, et ce que ratent les lecteurs intégrés.',
    related: ['what-is-exif-data', 'how-to-check-if-image-is-ai-generated', 'remove-gps-location-from-photos'],
    updated: '2026-10-23',
    sections: [
      {
        heading: 'Ce que couvre une vérification complète',
        paragraphs: ['Un lecteur de métadonnées complet lit tous les blocs du fichier, pas seulement l’EXIF :'],
        bullets: [
          'EXIF — modèle d’appareil ou de téléphone, exposition, heure de prise de vue, objectif et orientation.',
          'GPS — latitude, longitude, altitude et direction, si la localisation était activée.',
          'XMP — logiciel de retouche, historique, descriptions, notes et champs IA.',
          'IPTC — légendes, mots-clés, auteur, copyright et [DigitalSourceType](iptc-digitalsourcetype-ai).',
          'C2PA — [les Content Credentials](what-is-c2pa-content-credentials) : qui a signé le fichier, quelles actions ont été enregistrées, si l’IA est intervenue.',
          'Chunks de texte PNG — [paramètres Stable Diffusion, workflows ComfyUI](remove-stable-diffusion-comfyui-metadata) et autres textes intégrés.',
          'Profil ICC et miniatures — informations de couleur et aperçus cachés.',
        ],
      },
      {
        heading: 'Les lecteurs intégrés et leurs angles morts',
        paragraphs: [
          'Windows affiche les métadonnées dans Propriétés › Détails ; macOS dans l’inspecteur d’Aperçu ou Lire les informations du Finder ; l’iPhone quand vous balayez une photo vers le haut ; Google Photos dans le panneau d’informations. C’est suffisant pour jeter un œil à la date, à l’appareil et au lieu, mais ils n’affichent qu’une sélection de l’EXIF et ignorent généralement le XMP, l’IPTC, le C2PA et le texte PNG. Un fichier peut sembler propre dans l’Explorateur et contenir un prompt IA entier.',
        ],
      },
      {
        heading: 'Le piège des lecteurs EXIF en ligne',
        paragraphs: [
          'Beaucoup de sites de « lecteur EXIF en ligne » envoient votre image sur leur serveur, la lisent là-bas et renvoient un rapport. Pour une vérification de confidentialité, c’est le monde à l’envers : la photo qui vous inquiète — avec sa position GPS — a été copiée chez un tiers. Préférez un lecteur qui lit le fichier localement. Test simple : chargez la page, coupez internet et voyez si le lecteur fonctionne encore.',
        ],
      },
      {
        heading: 'Lire un fichier dans AI Label Remover',
        paragraphs: ['Posez l’image sur la table en haut de cette page. Trois onglets organisent le résultat :'],
        bullets: [
          '« Ce qu’il révèle » — un résumé clair du lieu, des personnes, de l’heure et de l’appareil, avec le GPS converti en coordonnées décimales.',
          '« Traces d’IA » — manifestes C2PA, types de source IPTC, noms de générateurs et prompts, avec un verdict.',
          '« Métadonnées brutes » — tous les champs regroupés par source : EXIF IFD0, Exif, GPS, espaces de noms XMP, IPTC, C2PA et chunks de texte PNG.',
        ],
      },
      {
        heading: 'Les champs à lire en premier',
        paragraphs: [],
        bullets: [
          'GPSLatitude / GPSLongitude — [l’endroit exact](remove-gps-location-from-photos) ; collez-le dans une carte pour voir ce qu’il révèle.',
          'DateTimeOriginal et ModifyDate — quand la photo a été prise et quand elle a été enregistrée pour la dernière fois.',
          'Make, Model, BodySerialNumber, LensSerialNumber — peuvent relier des photos à un même appareil.',
          'Artist, Copyright, OwnerName — des noms que vous ne saviez peut-être pas intégrés.',
          'Software et CreatorTool — quelles applis ont touché le fichier, outils IA compris.',
          'DigitalSourceType et le claim generator C2PA — comment l’image déclare avoir été faite.',
        ],
      },
      {
        heading: 'Quand le lecteur n’affiche presque rien',
        paragraphs: [
          'Une image enregistrée depuis un fil social, une capture d’écran ou un fichier envoyé par messagerie a souvent été réencodé et nettoyé. Peu ou pas de métadonnées, c’est normal dans ces cas et cela ne dit rien sur le fait que l’image soit réelle, retouchée ou générée par IA. Demandez le fichier original si l’origine compte.',
        ],
      },
      {
        heading: 'Voir n’est pas vérifier',
        paragraphs: [
          'Les métadonnées ordinaires sont du texte brut que n’importe qui peut modifier : considérez-les comme des indices, pas des preuves. Le C2PA est différent parce qu’il est signé, mais un lecteur qui affiche le manifeste ne valide pas la signature ; utilisez pour cela un vérificateur officiel de Content Credentials. Quand vous en avez assez vu et voulez que ces données disparaissent, appuyez sur « Supprimer toutes les métadonnées » pour les retirer sans modifier l’image — la page pour [supprimer les données EXIF](remove-exif-data) détaille ce qui disparaît.',
        ],
      },
    ],
    faqHeading: 'À propos de la lecture des métadonnées',
    faq: [
      { q: 'Existe-t-il un lecteur de métadonnées gratuit qui n’envoie pas ma photo ?', a: 'Oui. AI Label Remover lit les fichiers dans votre navigateur, sans envoi ni compte, et continue de fonctionner hors ligne une fois la page chargée.' },
      { q: 'Puis-je voir le prompt d’une image IA ?', a: 'Si le générateur l’a enregistré, oui. Les prompts Stable Diffusion et ComfyUI apparaissent dans les chunks de texte PNG, et certains services les stockent dans des champs XMP ou EXIF.' },
      { q: 'Pourquoi Windows n’affiche-t-il aucune métadonnée pour mon PNG ?', a: 'L’Explorateur de fichiers n’affiche que quelques propriétés pour les PNG. Les chunks de texte, le XMP et le C2PA y sont invisibles mais apparaissent dans un lecteur complet.' },
      { q: 'Les métadonnées peuvent-elles dire si une photo est truquée ?', a: 'Elles peuvent fournir des indices solides, comme un claim generator IA, mais des métadonnées absentes ou modifiées ne prouvent rien à elles seules.' },
    ],
  },

  'iptc-digitalsourcetype-ai': {
    title: 'IPTC DigitalSourceType : le champ qui dit aux plateformes qu’une image est générée par IA',
    metaTitle: 'IPTC DigitalSourceType et trainedAlgorithmicMedia',
    summary: [
      'DigitalSourceType est un petit champ de métadonnées IPTC à l’effet considérable : une seule valeur comme trainedAlgorithmicMedia suffit à de nombreuses plateformes pour étiqueter une image comme générée par IA.',
      'Ce guide liste les valeurs que vous rencontrerez, qui écrit et qui lit ce champ, pourquoi il est facile à modifier et comment le trouver ou le supprimer dans un fichier.',
    ],
    description:
      'Ce que signifie le champ IPTC DigitalSourceType, les valeurs trainedAlgorithmicMedia et compositeWithTrainedAlgorithmicMedia, qui le lit et comment le trouver ou le supprimer.',
    related: ['made-with-ai-label', 'what-is-c2pa-content-credentials', 'which-platforms-label-ai-images'],
    updated: '2026-10-23',
    sections: [
      {
        heading: 'Un champ, une liste fermée de réponses',
        paragraphs: [
          'DigitalSourceType fait partie de la norme IPTC Photo Metadata, le vocabulaire qu’utilisent rédactions, banques d’images et logiciels photo pour décrire les images. Il répond à une seule question : comment ce contenu a-t-il été produit ? La réponse n’est pas un texte libre mais un terme du vocabulaire contrôlé « digital source type » de l’IPTC, écrit sous forme d’URI comme http://cv.iptc.org/newscodes/digitalsourcetype/trainedAlgorithmicMedia.',
          'Dans les fichiers image, le champ est stocké en XMP sous Iptc4xmpExt:DigitalSourceType. Les [Content Credentials C2PA](what-is-c2pa-content-credentials) réutilisent le même vocabulaire dans leurs actions signées : les mêmes termes apparaissent donc aux deux endroits.',
        ],
      },
      {
        heading: 'Les valeurs que vous rencontrerez',
        paragraphs: ['Le vocabulaire s’est enrichi au fil des ans. Les termes les plus pertinents pour les étiquettes IA sont :'],
        bullets: [
          'trainedAlgorithmicMedia — créé par un modèle génératif entraîné sur des contenus d’exemple.',
          'compositeWithTrainedAlgorithmicMedia — un montage qui inclut des éléments d’IA générative, par exemple [une photo retouchée avec le Remplissage génératif](turn-off-content-credentials-photoshop-lightroom).',
          'algorithmicMedia — créé uniquement par un algorithme sans données d’entraînement, comme l’art procédural ou fractal.',
          'compositeSynthetic — un montage qui inclut des éléments synthétiques.',
          'algorithmicallyEnhanced — amélioration ou correction mineure par un algorithme.',
          'digitalCapture — capturé par un appareil photo numérique ou un scanner à partir d’une scène réelle.',
          'computationalCapture — une capture traitée par des algorithmes au moment de la prise de vue, comme le font beaucoup de smartphones.',
          'digitalArt et screenCapture — une œuvre réalisée par une personne avec un logiciel, et les captures d’écran.',
        ],
      },
      {
        heading: 'Qui l’écrit',
        paragraphs: [
          'Plusieurs services d’images IA écrivent trainedAlgorithmicMedia dans leurs fichiers. Les éditeurs dotés d’outils génératifs peuvent inscrire une valeur de montage après une retouche IA. Les banques d’images et les agences de presse le renseignent à l’intégration, et certaines places de marché demandent aux vendeurs de marquer ainsi les images IA. Le champ peut aussi être recopié sans bruit : une fois défini, il survit à toute appli qui préserve le XMP.',
        ],
      },
      {
        heading: 'Qui le lit',
        paragraphs: [
          'Meta a indiqué utiliser les métadonnées IPTC avec le C2PA pour décider d’afficher [« Infos IA »](made-with-ai-label) sur Facebook, Instagram et Threads. [D’autres plateformes](which-platforms-label-ai-images), moteurs de recherche et services d’achat ont annoncé un usage similaire du champ pour signaler l’IA. C’est pourquoi une vraie photo à peine retouchée portant compositeWithTrainedAlgorithmicMedia peut être étiquetée exactement comme une image entièrement générée.',
        ],
      },
      {
        heading: 'Non signé, donc facile à modifier',
        paragraphs: [
          'Contrairement à un manifeste C2PA, les métadonnées IPTC ordinaires ne portent aucune signature. N’importe quel éditeur de métadonnées peut ajouter, modifier ou supprimer DigitalSourceType, et beaucoup d’applis le perdent au réenregistrement. Considérez ce champ comme une déclaration, pas comme une preuve — qu’il dise « IA » ou « appareil photo ».',
        ],
      },
      {
        heading: 'Le trouver et le supprimer',
        paragraphs: [
          'Posez l’image dans AI Label Remover. Dans « Traces d’IA », le champ apparaît comme « XMP · Iptc4xmpExt › DigitalSourceType » avec sa valeur ; le même terme dans un manifeste C2PA est listé sous C2PA. Appuyer sur « Supprimer toutes les métadonnées » retire tout le paquet XMP et le magasin C2PA, et donc le champ, avec l’EXIF et les autres données identifiantes. La page pour [supprimer les métadonnées IA](ai-tag-cleaner) couvre aussi les autres champs IA.',
          'Si vous devez retirer uniquement ce champ et garder le reste de votre XMP, un outil en ligne de commande le permet : exiftool -XMP-iptcExt:DigitalSourceType= photo.jpg. N’oubliez pas qu’une valeur équivalente peut aussi figurer dans un manifeste C2PA.',
        ],
      },
      {
        heading: 'Quand le champ doit rester',
        paragraphs: [
          'Le champ existe pour que le public sache comment une image a été faite. Si une image est réellement générée ou fortement modifiée par IA, gardez la déclaration — ou signalez-le en publiant. Le retirer est approprié lorsqu’il décrit mal votre travail ou que vous nettoyez des données privées d’un fichier.',
        ],
      },
    ],
    faqHeading: 'À propos d’IPTC DigitalSourceType',
    faq: [
      { q: 'Que signifie trainedAlgorithmicMedia ?', a: 'C’est le terme IPTC pour un contenu créé par un modèle d’IA générative — une image entièrement générée par IA.' },
      { q: 'Pourquoi ma photo retouchée indique-t-elle compositeWithTrainedAlgorithmicMedia ?', a: 'Parce qu’une retouche générative, comme supprimer un objet avec l’IA, a été enregistrée. Le terme désigne un montage incluant des parties générées par IA, quelle que soit leur taille.' },
      { q: 'DigitalSourceType est-il la même chose que le C2PA ?', a: 'Non. DigitalSourceType est un champ IPTC, généralement non signé, stocké dans le XMP. Le C2PA est un manifeste signé qui peut contenir le même vocabulaire dans ses actions.' },
      { q: 'Puis-je retirer uniquement DigitalSourceType avec AI Label Remover ?', a: 'Pas pour le moment. AI Label Remover retire tout le XMP et le C2PA en une passe. ExifTool peut supprimer ce seul champ si vous devez conserver d’autres données XMP.' },
    ],
  },

  'remove-metadata-without-losing-quality': {
    title: 'Supprimer les métadonnées sans perte de qualité : pourquoi captures et réenregistrements abîment',
    metaTitle: 'Supprimer les métadonnées sans perte de qualité',
    summary: [
      'Les méthodes rapides pour retirer les métadonnées — capture d’écran, réenregistrement dans un éditeur, convertisseur en ligne — redessinent toutes l’image. Vous perdez les métadonnées, mais aussi de la netteté, de la résolution ou de la fidélité des couleurs.',
      'Ce guide explique pourquoi, comment supprimer les métadonnées sans perte de qualité, et comment vérifier par vous-même qu’aucun pixel n’a changé.',
    ],
    description:
      'Supprimez EXIF, GPS, C2PA et métadonnées IA sans perte de qualité : pourquoi captures et réenregistrements dégradent, comment marche la suppression sans perte et comment la vérifier.',
    related: ['batch-remove-metadata', 'remove-metadata-windows-mac', 'what-is-exif-data'],
    updated: '2026-10-23',
    sections: [
      {
        heading: 'Métadonnées et pixels vivent séparément',
        paragraphs: [
          'Tous les formats d’image courants séparent l’image des notes qui la décrivent. Un JPEG est une suite de segments à marqueurs : les métadonnées dans APP1, APP11 et APP13, l’image compressée après le marqueur SOS. Un PNG est une liste de chunks, avec les pixels dans IDAT et le texte dans tEXt, zTXt ou iTXt. Le WebP utilise des chunks RIFF, le HEIC et l’AVIF des boîtes ISOBMFF. Comme les deux sont stockés séparément, on peut retirer les métadonnées sans décoder l’image.',
        ],
      },
      {
        heading: 'Les raccourcis habituels et leur coût',
        paragraphs: [],
        bullets: [
          'Capture d’écran — retire toutes les métadonnées, mais capture à la résolution de l’écran, peut recadrer ou redimensionner, peut décaler les couleurs et inclure des notifications ou d’autres éléments affichés.',
          'Réenregistrer ou exporter en JPEG — décode puis recompresse l’image ; chaque génération ajoute des artefacts, et le profil ICC peut disparaître, ce qui fausse les couleurs.',
          'Convertisseurs en ligne — réencodent l’image et l’envoient généralement d’abord sur un serveur.',
          'Changement de format, par exemple [du HEIC au JPEG](view-remove-metadata-iphone-android) — modifie la compression et fait souvent perdre les couleurs à gamut étendu ou la transparence.',
        ],
      },
      {
        heading: 'Supprimer les métadonnées sans perte de qualité',
        paragraphs: [
          'Un nettoyeur sans perte parcourt la structure du fichier et copie chaque bloc qui décrit l’image, en sautant uniquement les blocs de métadonnées. En JPEG, cela signifie retirer APP1 avec l’EXIF et le XMP, APP11 avec le C2PA, APP13 avec l’IPTC et les commentaires, tout en copiant intactes les tables de quantification, les tables de Huffman et les données de balayage. En PNG, des chunks entiers de texte et de métadonnées sont retirés, si bien que le CRC de chaque chunk restant reste valide. En HEIC et AVIF, les éléments de métadonnées sont retirés et les décalages internes réécrits pour que les données d’image pointent toujours au bon endroit.',
          'AI Label Remover fonctionne ainsi dans votre navigateur, pour [supprimer les données EXIF](remove-exif-data) comme pour [supprimer les métadonnées PNG](png-metadata-remover). Le résultat contient exactement les mêmes données d’image compressées que l’entrée.',
        ],
      },
      {
        heading: 'Trois choses qu’un bon nettoyeur conserve',
        paragraphs: [],
        bullets: [
          'L’orientation — beaucoup de photos de téléphone sont stockées couchées avec [une balise EXIF](what-is-exif-data) qui indique aux lecteurs de les pivoter. Sans elle, les portraits s’affichent de travers. AI Label Remover réécrit la balise dans un bloc EXIF minimal.',
          'Le profil couleur — le profil ICC indique aux applis comment interpréter les couleurs, surtout pour les photos de téléphone en Display P3. Sans lui, les images peuvent paraître ternes ou trop saturées.',
          'L’animation et la transparence — les images des APNG, WebP animés et GIF, ainsi que les canaux alpha, doivent rester intacts.',
        ],
      },
      {
        heading: 'Comment vérifier que c’était vraiment sans perte',
        paragraphs: ['Inutile de croire un outil sur parole :'],
        bullets: [
          'Comparez les dimensions — largeur et hauteur doivent être identiques.',
          'Comparez la taille du fichier — le fichier nettoyé ne doit être plus léger que d’environ la taille des métadonnées retirées, jamais beaucoup plus.',
          'Comparez les pixels — ouvrez les deux dans un éditeur en calques avec le mode de fusion Différence ; un résultat sans perte est entièrement noir.',
          'Relisez le fichier — [AI Label Remover relit chaque fichier nettoyé](batch-remove-metadata) et affiche les champs restants.',
        ],
      },
      {
        heading: 'D’où vient le gain de taille',
        paragraphs: [
          'Retirer les métadonnées peut tout de même alléger nettement les fichiers. Les miniatures intégrées et aperçus MPF des JPEG d’appareil photo, les longs historiques de retouche XMP et les gros [workflows ComfyUI](remove-stable-diffusion-comfyui-metadata) dans les PNG peuvent peser des dizaines voire des centaines de kilo-octets. Les retirer réduit le fichier sans rien changer à ce que vous voyez.',
        ],
      },
    ],
    faqHeading: 'À propos de la suppression sans perte',
    faq: [
      { q: 'Supprimer les métadonnées réduit-il la qualité de l’image ?', a: 'Pas si c’est fait au niveau des octets. Seul le réencodage — captures, réenregistrement, conversion — réduit la qualité.' },
      { q: 'Pourquoi mon fichier est-il plus léger après nettoyage ?', a: 'Parce que des blocs de métadonnées, des miniatures et des aperçus ont été retirés. Les données d’image elles-mêmes sont inchangées.' },
      { q: 'Les couleurs seront-elles différentes après nettoyage ?', a: 'Non. AI Label Remover conserve le profil couleur ICC, les couleurs s’affichent exactement comme avant.' },
      { q: 'Une capture d’écran est-elle une façon sûre de retirer les métadonnées ?', a: 'Elle retire les métadonnées, mais dégrade la qualité et peut capturer d’autres éléments à l’écran. La suppression sans perte garde l’image originale intacte.' },
    ],
  },

  'how-to-check-if-image-is-ai-generated': {
    metaTitle: 'Comment savoir si une image est générée par IA (gratuit)',
    related: ['iptc-digitalsourcetype-ai', 'image-metadata-viewer-online', 'synthid-invisible-ai-watermarks'],
    title: 'Cette image est-elle générée par IA ? Comment vérifier le fichier lui-même',
    summary: [
      'L’indice fiable le plus rapide pour savoir si une image est générée par IA se trouve dans le fichier : les Content Credentials C2PA, le champ IPTC DigitalSourceType et le texte du générateur nomment souvent l’outil exact qui a créé une image.',
      'Voici quoi chercher, comment le lire avec un vérificateur gratuit qui fonctionne dans votre navigateur, et pourquoi ne rien trouver ne prouve jamais qu’une image est réelle.',
    ],
    description:
      'Vérifiez si une image est générée par IA en lisant les métadonnées C2PA, IPTC DigitalSourceType et du générateur dans votre navigateur — et ce que chaque signal prouve ou non.',
    updated: '2026-10-23',
    sections: [
      {
        heading: 'Procurez-vous l’original',
        paragraphs: [
          'Les métadonnées ne survivent que dans le fichier tel qu’il est sorti de l’appareil ou du générateur. Les captures, les fichiers réenregistrés et les images récupérées sur les réseaux sociaux ont généralement été réencodés et ont presque tout perdu. Demandez l’export original — celui envoyé « en tant que fichier », pas comme photo compressée — chaque fois que possible.',
        ],
      },
      {
        heading: 'Indice n° 1 : les Content Credentials',
        paragraphs: [
          'Les outils compatibles C2PA joignent [un enregistrement signé numériquement](what-is-c2pa-content-credentials). Son claim generator nomme l’appli ou le service qui a produit l’image, ses c2pa.actions listent des étapes comme « créé » ou « modifié », et un digitalSourceType peut déclarer directement une génération par IA.',
          'Comme l’enregistrement est signé, un vérificateur peut aussi dire si l’image a changé après la signature. Un manifeste provenant d’un service d’IA est la preuve la plus solide que puissent fournir les métadonnées.',
        ],
      },
      {
        heading: 'Indice n° 2 : IPTC DigitalSourceType',
        paragraphs: ['Beaucoup de générateurs et d’éditeurs remplissent [un champ IPTC standard](iptc-digitalsourcetype-ai) décrivant comment le contenu a été produit. Les valeurs les plus fréquentes :'],
        bullets: [
          'trainedAlgorithmicMedia — produit par un modèle d’IA générative.',
          'compositeWithTrainedAlgorithmicMedia — une vraie photo avec des zones générées ou remplacées par IA, comme avec le Remplissage génératif.',
          'algorithmicMedia — fait par un algorithme sans données d’entraînement, comme l’art procédural.',
          'digitalCapture — pris avec un appareil photo, aucun contenu génératif déclaré.',
        ],
      },
      {
        heading: 'Indice n° 3 : prompts et noms d’outils',
        paragraphs: [
          '[Les interfaces Stable Diffusion et ComfyUI](remove-stable-diffusion-comfyui-metadata) enregistrent prompt, seed, modèle et workflow sous forme de texte dans les PNG. D’autres outils laissent leur nom dans XMP CreatorTool ou EXIF Software. Chacun de ces éléments indique clairement une intervention de l’IA — et dit souvent exactement comment l’image a été faite.',
        ],
      },
      {
        heading: 'Vérifier si une image est générée par IA',
        paragraphs: [
          'Posez le fichier sur la table en haut de cette page. L’onglet « Traces d’IA » rend l’un de trois verdicts — traces d’IA trouvées, à regarder de plus près ou aucune trace d’IA — et liste chaque signal avec sa source. « Métadonnées brutes » montre les valeurs sous-jacentes. Rien n’est envoyé. Pour retirer ce qui a été trouvé, utilisez la page pour [supprimer les métadonnées IA](ai-tag-cleaner).',
        ],
      },
      {
        heading: 'Si le fichier est vide',
        paragraphs: [
          'L’absence de métadonnées ne prouve rien, ni dans un sens ni dans l’autre : éditeurs, messageries et réseaux sociaux les suppriment en permanence, et l’absence d’EXIF d’appareil est au mieux un faible indice. Les étapes suivantes sont le vérificateur de filigrane du fournisseur (par exemple pour [SynthID de Google](synthid-invisible-ai-watermarks)), une recherche d’image inversée pour trouver la copie la plus ancienne, et un regard sur l’endroit où l’image est apparue en premier. Les détecteurs d’IA fondés sur les pixels donnent des probabilités, pas des preuves.',
        ],
      },
    ],
    faqHeading: 'À propos de la détection d’images IA',
    faq: [
      { q: 'Puis-je savoir si une image a été faite avec ChatGPT ou Gemini ?', a: 'Si le fichier a encore ses Content Credentials, le claim generator nomme le service. Pour les images Gemini, la vérification SynthID de Google peut aussi détecter le filigrane dans les pixels.' },
      { q: 'Si AI Label Remover ne trouve aucune trace d’IA, la photo est-elle réelle ?', a: 'Pas forcément. Cela signifie que le fichier ne contient aucune métadonnée IA. Les métadonnées se perdent ou se suppriment facilement : lisez un résultat propre comme « inconnu », pas comme une preuve.' },
      { q: 'Puis-je vérifier une image enregistrée depuis Instagram ou Facebook ?', a: 'Oui, mais les plateformes nettoient généralement la copie publiée, attendez-vous donc à peu de chose. L’étiquette « Infos IA » de la plateforme est un signal distinct.' },
      { q: 'La vérification est-elle gratuite et confidentielle ?', a: 'Oui — gratuite, sans compte, et le fichier est lu localement sans être envoyé.' },
    ],
  },

  'which-platforms-label-ai-images': {
    metaTitle: 'Quelles plateformes étiquettent les images IA ? Meta, TikTok',
    related: ['made-with-ai-label', 'iptc-digitalsourcetype-ai', 'what-is-c2pa-content-credentials'],
    title: 'Étiquettes IA sur les réseaux sociaux : Instagram, Facebook, TikTok, YouTube, Pinterest et LinkedIn',
    summary: [
      'De plus en plus de plateformes ajoutent aux images et vidéos des étiquettes comme « Infos IA ». La plupart s’appuient sur les mêmes signaux dans le fichier — Content Credentials C2PA et métadonnées IPTC — combinés à ce que déclarent les créateurs.',
      'Ce tour d’horizon explique comment les grandes plateformes appliquent généralement ces étiquettes, ce qui les déclenche et ce que cela implique pour de vraies photos légèrement retouchées avec l’IA.',
    ],
    description:
      'Comment Instagram, Facebook, Threads, TikTok, YouTube, Pinterest et LinkedIn appliquent les étiquettes IA, quelles métadonnées les déclenchent et ce que cela change pour les photos retouchées.',
    updated: '2026-10-23',
    sections: [
      {
        heading: 'Les signaux communs',
        paragraphs: ['L’étiquetage automatique repose généralement sur une courte liste de signaux communs :'],
        bullets: [
          '[Les Content Credentials C2PA](what-is-c2pa-content-credentials) déclarant une génération ou une retouche par IA.',
          '[Le champ IPTC DigitalSourceType](iptc-digitalsourcetype-ai), par exemple trainedAlgorithmicMedia.',
          '[Les filigranes invisibles de certains fournisseurs d’IA](synthid-invisible-ai-watermarks), lorsque la plateforme dispose d’un détecteur adapté.',
          'La déclaration du créateur — un interrupteur ou une case à cocher lors de la publication d’un contenu IA réaliste.',
        ],
      },
      {
        heading: 'Meta : Instagram, Facebook, Threads',
        paragraphs: [
          'Meta affiche [« Infos IA »](made-with-ai-label) (anciennement « Créé avec l’IA », renommé en 2024) lorsqu’il détecte des signaux IA standard du secteur ou qu’un créateur déclare utiliser l’IA. Après les protestations de photographes dont les photos à peine retouchées étaient étiquetées, Meta a déplacé l’étiquette des contenus retouchés par IA dans le menu de la publication et gardé l’étiquette plus visible pour les contenus largement générés.',
        ],
      },
      {
        heading: 'TikTok',
        paragraphs: [
          'TikTok demande aux créateurs d’étiqueter les contenus réalistes générés par IA et a indiqué étiqueter automatiquement les fichiers arrivant avec des Content Credentials C2PA qui les identifient comme générés par IA.',
        ],
      },
      {
        heading: 'YouTube',
        paragraphs: [
          'YouTube demande aux auteurs de déclarer les contenus modifiés ou synthétiques réalistes et affiche une étiquette aux spectateurs. Il utilise aussi le C2PA dans l’autre sens, avec un indicateur du type « filmé avec une caméra » pour les contenus porteurs de justificatifs de capture authentiques.',
        ],
      },
      {
        heading: 'Pinterest et LinkedIn',
        paragraphs: [
          'Pinterest a ajouté des étiquettes pour les images générées ou modifiées par IA, en s’appuyant sur les métadonnées et ses propres classificateurs. LinkedIn affiche une icône Content Credentials sur les images qui contiennent des données C2PA, pour qu’on puisse consulter la source et les retouches.',
          'Chaque plateforme révise souvent ces règles ; consultez son centre d’aide actuel avant de compter sur un comportement particulier.',
        ],
      },
      {
        heading: 'Quand une vraie photo est étiquetée',
        paragraphs: [
          'Une seule retouche générative, comme effacer un passant, peut marquer toute la photo comme montage IA dans ses métadonnées. Avant de publier, posez le fichier dans AI Label Remover pour voir quel champ déclencherait une étiquette. Si l’étiquette serait erronée, [nettoyer une copie](ai-tag-cleaner) en supprime la cause ; si l’image est largement générée, déclarez-le — c’est à cela que servent les étiquettes.',
        ],
      },
    ],
    faqHeading: 'À propos des étiquettes IA sur les réseaux sociaux',
    faq: [
      { q: 'Instagram étiquette-t-il aussi les profils générés par IA ?', a: 'Instagram a introduit des étiquettes au niveau du profil pour les comptes montrant des personnes générées par IA et peut limiter les recommandations des comptes qui ne le déclarent pas. Ceux qui se contentent de retoucher avec des outils IA ne sont généralement pas concernés ; consultez les consignes actuelles d’Instagram.' },
      { q: 'J’ai seulement supprimé un petit objet — pourquoi l’étiquette IA ?', a: 'Beaucoup d’éditeurs enregistrent toute retouche générative dans le C2PA ou l’IPTC comme « montage avec IA ». Les plateformes lisent la déclaration sans tenir compte de l’ampleur de la retouche.' },
      { q: 'Les plateformes gardent-elles mes métadonnées après publication ?', a: 'La plupart les lisent à l’envoi et les retirent de la copie publique, si bien que télécharger votre propre publication affiche rarement les champs d’origine.' },
      { q: 'Une image nettoyée échappe-t-elle à toutes les étiquettes ?', a: 'Pas toujours. Le nettoyage retire les signaux du fichier, mais les plateformes peuvent aussi utiliser la détection de filigrane, des classificateurs ou vous demander de déclarer.' },
    ],
  },

  'what-metadata-ai-image-generators-add': {
    metaTitle: 'Quelles métadonnées ajoutent les générateurs d’images IA ?',
    related: ['chatgpt-gemini-image-metadata', 'remove-stable-diffusion-comfyui-metadata', 'iptc-digitalsourcetype-ai'],
    title: 'Ce que les générateurs d’images IA cachent dans vos fichiers : DALL·E, Firefly, Midjourney, Gemini, Stable Diffusion',
    summary: [
      'Presque tous les outils d’images IA laissent une trace dans leurs fichiers, des Content Credentials signées aux prompts en clair. Savoir ce que chacun écrit aide à protéger vos prompts et à comprendre pourquoi une plateforme étiquette une image.',
      'Voici un panorama des métadonnées que l’on trouve couramment dans les fichiers des générateurs populaires, et comment voir ce que contiennent réellement vos propres fichiers.',
    ],
    description:
      'Ce qu’intègrent les générateurs d’images IA populaires — C2PA, IPTC DigitalSourceType, XMP, prompts et workflows — et comment le lire ou le retirer de vos fichiers.',
    updated: '2026-10-23',
    sections: [
      {
        heading: 'Trois familles de traces',
        paragraphs: ['Les métadonnées liées à l’IA sont de trois grands types :'],
        bullets: [
          'Provenance signée — Content Credentials C2PA nommant le générateur et ce qu’il a fait.',
          'Champs descriptifs — entrées IPTC et XMP comme [DigitalSourceType](iptc-digitalsourcetype-ai), CreatorTool ou une description.',
          'Paramètres de génération — prompt, seed, modèle et réglages enregistrés en texte, surtout par les outils locaux.',
        ],
      },
      {
        heading: 'OpenAI : images ChatGPT et DALL·E',
        paragraphs: [
          'Les images issues de [la génération d’images d’OpenAI](chatgpt-gemini-image-metadata) portent des Content Credentials C2PA identifiant OpenAI comme source, de sorte que les lecteurs et plateformes compatibles C2PA peuvent les reconnaître.',
        ],
      },
      {
        heading: 'Adobe : Firefly et les outils génératifs de Photoshop',
        paragraphs: [
          'Adobe joint des Content Credentials aux contenus créés avec ses fonctions basées sur Firefly, en les décrivant comme générés ou retouchés par IA. Une photo retouchée avec le Remplissage génératif ou l’Extension générative peut donc porter une déclaration de montage IA même si elle est presque entièrement une vraie photographie.',
        ],
      },
      {
        heading: 'Google (Gemini, Imagen) et Meta AI',
        paragraphs: [
          'Google intègre [son filigrane invisible SynthID](synthid-invisible-ai-watermarks) dans les images de ses modèles génératifs et utilise des métadonnées pour marquer les contenus IA dans certains produits. Meta a indiqué que les images de Meta AI comportent un marqueur visible, un filigrane invisible et des métadonnées IPTC indiquant une génération par IA.',
        ],
      },
      {
        heading: 'Midjourney',
        paragraphs: [
          '[Les téléchargements Midjourney peuvent inclure le prompt](hide-midjourney-dalle-prompts) et un identifiant de tâche dans les champs de description ou de commentaire, ainsi qu’une valeur IPTC marquant l’image comme générée par IA. Ce qui apparaît dépend du format de téléchargement et de la version du service à ce moment-là.',
        ],
      },
      {
        heading: 'Générateurs locaux : interfaces Stable Diffusion et ComfyUI',
        paragraphs: [
          'Les outils locaux ne signent rien, mais stockent souvent le plus de détails : A1111 et Forge écrivent un chunk de texte « parameters », et [ComfyUI intègre son prompt et ses graphes de workflow complets](remove-stable-diffusion-comfyui-metadata) en JSON. Ces options peuvent généralement être désactivées — pour les nouvelles images seulement.',
          'Les générateurs changent ce qu’ils écrivent d’une version à l’autre ; la méthode fiable consiste donc à ouvrir le fichier lui-même : posez-le sur la table de AI Label Remover pour voir chaque champ, puis retirez ce que vous préférez ne pas partager avec l’outil pour [supprimer les métadonnées IA](ai-tag-cleaner).',
        ],
      },
    ],
    faqHeading: 'À propos des métadonnées des générateurs',
    faq: [
      { q: 'Nano Banana ajoute-t-il des métadonnées aux images ?', a: 'Google marque les images de ses modèles avec SynthID et a ajouté des Content Credentials C2PA aux modèles récents comme Nano Banana Pro. Vérifiez un fichier précis pour voir ce qu’il contient.' },
      { q: 'Tous les générateurs ajoutent-ils du C2PA ?', a: 'Non. Les grands services hébergés le font de plus en plus ; beaucoup d’outils, surtout locaux, n’écrivent que des métadonnées texte, voire rien.' },
      { q: 'Le nettoyage retire-t-il aussi les filigranes invisibles ?', a: 'Non. Les filigranes comme SynthID sont dans les pixels, et le nettoyage ne modifie jamais les pixels.' },
      { q: 'Pourquoi deux images du même outil diffèrent-elles ?', a: 'Le format d’export, la version de l’appli, la source du téléchargement et les retouches ultérieures peuvent chacun ajouter ou retirer des champs.' },
    ],
  },

  'synthid-invisible-ai-watermarks': {
    metaTitle: 'SynthID et filigranes IA invisibles, expliqués',
    related: ['chatgpt-gemini-image-metadata', 'how-to-check-if-image-is-ai-generated', 'what-is-c2pa-content-credentials'],
    title: 'SynthID et filigranes invisibles : là où s’arrête le nettoyage des métadonnées',
    summary: [
      'Certaines images IA portent deux types de marqueurs : des métadonnées stockées à côté de l’image et un filigrane tissé dans les pixels. SynthID de Google est l’exemple le plus connu du second.',
      'Cet article explique en quoi les filigranes dans les pixels diffèrent du C2PA et de l’EXIF, comment ils sont détectés et pourquoi un outil de métadonnées honnête ne peut pas les retirer.',
    ],
    description:
      'Ce que sont SynthID et les autres filigranes IA invisibles, en quoi ils diffèrent des métadonnées C2PA, comment ils sont détectés et pourquoi le nettoyage ne les touche pas.',
    updated: '2026-10-23',
    sections: [
      {
        heading: 'Deux couches distinctes',
        paragraphs: [
          'Les métadonnées — EXIF, XMP, IPTC, [C2PA](what-is-c2pa-content-credentials) — occupent leurs propres blocs dans le fichier, faciles à lire et à retirer sans toucher à l’image. Un filigrane dans les pixels est tout autre chose : un motif ténu réparti dans les valeurs des pixels, invisible à l’œil mais pas à un détecteur.',
        ],
      },
      {
        heading: 'À propos de SynthID',
        paragraphs: [
          'SynthID est la technologie de filigrane de Google DeepMind pour les contenus générés par les modèles d’IA de Google. Elle intègre un signal imperceptible pendant la génération et est conçue pour rester détectable après des modifications courantes comme le recadrage, le redimensionnement, la compression et les retouches de couleur. Des techniques voisines couvrent les images, l’audio, la vidéo et le texte.',
        ],
      },
      {
        heading: 'Détecter un filigrane dans les pixels',
        paragraphs: [
          'Un lecteur générique ne peut pas lire un filigrane ; il faut le détecteur du fournisseur. Google a introduit [des moyens de vérifier la présence de SynthID](chatgpt-gemini-image-metadata), y compris directement dans ses produits. D’autres fournisseurs ont leurs propres méthodes.',
        ],
      },
      {
        heading: 'Pourquoi le nettoyage n’y touche pas',
        paragraphs: [
          'Un outil de métadonnées sans perte — AI Label Remover compris — [copie les données d’image octet par octet](remove-metadata-without-losing-quality) ; c’est précisément ainsi qu’il garantit l’absence de perte de qualité. Tout filigrane présent dans ces octets reste en place. Les outils qui promettent de « retirer les filigranes IA » soit n’y parviennent pas, soit altèrent fortement l’image, et tenter de contourner le filigrane d’un fournisseur peut enfreindre ses conditions.',
        ],
      },
      {
        heading: 'En pratique',
        paragraphs: [
          '[Supprimer les métadonnées IA](ai-tag-cleaner) est la bonne démarche pour la confidentialité et pour retirer prompts, lieux et données de provenance que vous ne voulez pas partager. Cela ne rend pas une image IA indétectable. En publiant un contenu IA réaliste, respectez les règles de déclaration de la plateforme.',
        ],
      },
      {
        heading: 'Métadonnées, filigrane ou empreinte ?',
        paragraphs: ['Trois techniques différentes sont appelées « étiquettes IA », et elles se comportent très différemment :'],
        bullets: [
          'Métadonnées — blocs EXIF, XMP, IPTC et C2PA. Tout le monde peut les lire, et elles se retirent ou se perdent facilement quand un fichier est réenregistré.',
          'Filigrane dans les pixels — un motif caché dans l’image elle-même, comme SynthID. Seul le détecteur du fournisseur peut le lire, et il est conçu pour survivre aux retouches.',
          'Empreinte — une description compacte de l’image conservée sur un serveur. Une image ressemblante peut y être comparée plus tard, même sans aucune métadonnée.',
        ],
      },
      {
        heading: 'Qui utilise des filigranes invisibles',
        paragraphs: [
          'Google applique SynthID aux images de ses propres modèles d’IA. Meta a indiqué ajouter des filigranes invisibles, en plus des métadonnées, aux images créées avec ses fonctions d’IA. Adobe et d’autres soutiennent les Content Credentials « durables », qui associent un manifeste C2PA à un filigrane ou une empreinte pour pouvoir retrouver l’enregistrement. D’autres générateurs se contentent des métadonnées, et les outils locaux n’ajoutent généralement rien. Les pratiques évoluent souvent : considérez toute liste comme un instantané.',
        ],
      },
      {
        heading: 'Quelle fiabilité pour la détection',
        paragraphs: [
          'La détection de filigranes est statistique : un détecteur indique la probabilité qu’une marque soit présente, pas un oui ou un non absolu. Des retouches lourdes peuvent l’affaiblir, et chaque détecteur ne reconnaît que le filigrane de son propre fournisseur. Surtout, ne trouver aucun filigrane ne prouve rien — beaucoup de générateurs n’en ajoutent jamais. C’est pourquoi [vérifier si une image est générée par IA](how-to-check-if-image-is-ai-generated) demande de croiser plusieurs indices.',
        ],
      },
      {
        heading: 'Ce que cela signifie pour votre vie privée',
        paragraphs: [
          'D’après ce qui a été décrit publiquement, un filigrane dans les pixels signale que le contenu a été généré par le modèle d’un fournisseur, plutôt que de stocker votre prompt sous forme de texte lisible. Les informations qui vous exposent le plus — prompts, identifiants de compte, lieux, données de l’appareil — se trouvent dans les métadonnées, et c’est la couche qu’un outil de nettoyage peut traiter. En bref : le nettoyage protège vos informations personnelles, tandis que le filigrane continue d’indiquer d’où vient l’image.',
        ],
      },
    ],
    faqHeading: 'À propos de SynthID et des filigranes',
    faq: [
      { q: 'Une image sans filigrane est-elle une vraie photo ?', a: 'Non. Beaucoup de générateurs n’ajoutent aucun filigrane : son absence ne prouve rien à elle seule.' },
      { q: 'Un filigrane peut-il révéler mon prompt ?', a: 'Pas d’après ce qui a été décrit publiquement. Les prompts et les données de compte se trouvent généralement dans les métadonnées, que le nettoyage supprime.' },
      { q: 'Un recadrage ou une capture d’écran supprime-t-il SynthID ?', a: 'En général non. SynthID est conçu pour résister aux retouches courantes comme le recadrage, le redimensionnement, les captures d’écran et la compression.' },
      { q: 'AI Label Remover retire-t-il SynthID ?', a: 'Non. Il ne retire que des métadonnées et ne modifie jamais les pixels, donc tout filigrane invisible demeure.' },
      { q: 'Comment savoir si une image contient SynthID ?', a: 'Seuls les outils de vérification de Google peuvent le dire. Un lecteur de métadonnées ne voit pas à l’intérieur des pixels.' },
      { q: 'Toutes les images IA sont-elles filigranées ?', a: 'Non. Certains fournisseurs filigranent leurs images, beaucoup non, et les outils locaux n’en ajoutent généralement aucun.' },
    ],
  },

  'turn-off-content-credentials-photoshop-lightroom': {
    metaTitle: 'Content Credentials dans Photoshop et Lightroom',
    related: ['what-is-c2pa-content-credentials', 'made-with-ai-label', 'iptc-digitalsourcetype-ai'],
    title: 'Content Credentials dans Photoshop et Lightroom : les contrôler et nettoyer vos exports',
    summary: [
      'Les applis Adobe peuvent joindre des Content Credentials aux exports — un journal signé des retouches, y compris les fonctions d’IA générative utilisées. Pratique pour prouver votre travail, mais aussi une raison fréquente pour laquelle des photos retouchées reçoivent une étiquette IA.',
      'Voici d’où viennent ces justificatifs, comment vérifier un export et comment les retirer d’une copie quand il vous faut un fichier propre.',
    ],
    description:
      'D’où viennent les Content Credentials de Photoshop et Lightroom, comment vérifier qu’un export contient du C2PA et comment le retirer d’une copie sans perte de qualité.',
    updated: '2026-10-23',
    sections: [
      {
        heading: 'Deux façons dont les justificatifs sont ajoutés',
        paragraphs: ['Un export peut contenir des Content Credentials pour l’une de ces deux raisons :'],
        bullets: [
          'Vous avez activé les Content Credentials : l’appli signe votre identité et votre historique de retouche dans l’export.',
          'Vous avez utilisé une fonction générative comme le [Remplissage génératif](made-with-ai-label), et Adobe a appliqué des justificatifs décrivant le contenu comme retouché par IA.',
        ],
      },
      {
        heading: 'Vérifiez avant de publier',
        paragraphs: [
          'Posez le JPEG ou PNG exporté sur la table en haut de cette page. Si le rapport montre un bloc C2PA, un claim generator comme Adobe Photoshop, des actions c2pa et [un type de source « montage avec IA »](iptc-digitalsourcetype-ai), [les plateformes qui lisent ces justificatifs peuvent l’étiqueter](which-platforms-label-ai-images).',
        ],
      },
      {
        heading: 'Les réglages dans les applis Adobe',
        paragraphs: [
          'Adobe étend sans cesse les Content Credentials et les réglages changent de place d’une version à l’autre. Dans les versions récentes, cherchez un panneau Content Credentials dans Photoshop et une section Content Credentials dans la boîte d’export de Lightroom ; les pages d’aide d’Adobe couvrent votre version exacte. Désactiver l’option n’empêche pas forcément l’ajout de justificatifs aux retouches génératives.',
        ],
      },
      {
        heading: 'Nettoyer une copie',
        paragraphs: [
          'Quand il vous faut un fichier propre pour un portail client, une place de marché ou un réseau social, [retirez le bloc C2PA](remove-c2pa-content-credentials) d’une copie. AI Label Remover découpe le manifeste du flux d’octets, conserve pixels, taille, rotation et profil couleur, puis relit le résultat pour vous permettre de confirmer qu’il ne reste rien.',
        ],
      },
      {
        heading: 'Archivez l’original signé',
        paragraphs: [
          'Les justificatifs peuvent être une preuve précieuse de paternité et de la façon dont une image a été retouchée. Gardez l’export original avec ses justificatifs et ne partagez des copies nettoyées que là où les métadonnées induiraient en erreur ou en révéleraient plus que vous ne le souhaitez.',
        ],
      },
    ],
    faqHeading: 'À propos des Content Credentials d’Adobe',
    faq: [
      { q: 'Pourquoi Instagram étiquette-t-il ma retouche Photoshop comme IA ?', a: 'Le Remplissage génératif, l’Extension générative et des fonctions similaires enregistrent une retouche IA dans les Content Credentials ou des champs IPTC, et Meta lit ces signaux à l’envoi.' },
      { q: 'Justificatifs désactivés, les retouches génératives sont-elles quand même enregistrées ?', a: 'C’est possible. Adobe applique des justificatifs aux contenus génératifs : vérifiez donc le fichier exporté plutôt que de vous fier au seul réglage.' },
      { q: 'Le nettoyage annule-t-il mes retouches ?', a: 'Non. Seul le bloc de métadonnées est retiré ; vos pixels retouchés sont copiés sans modification.' },
      { q: 'Puis-je remettre les justificatifs plus tard ?', a: 'Pas dans la copie nettoyée, mais vous pouvez réexporter depuis l’original avec les justificatifs activés.' },
    ],
  },

  'which-platforms-strip-photo-metadata': {
    metaTitle: 'Quelles applis suppriment les métadonnées ? WhatsApp, X',
    related: ['remove-gps-location-from-photos', 'view-remove-metadata-iphone-android', 'image-metadata-viewer-online'],
    title: 'Quelles applis suppriment les métadonnées des photos — et lesquelles transmettent votre GPS en silence',
    summary: [
      'On pense souvent que les réseaux sociaux retirent la localisation des photos. Pour la copie publiée, c’est souvent vrai. Mais l’original peut encore voyager avec tout son EXIF via les messageries, l’e-mail, les liens cloud et les sites de partage de fichiers.',
      'Ce guide classe les voies de partage courantes en « généralement nettoyé » et « généralement conservé », et se termine par la seule habitude qui marche à tous les coups : nettoyer le fichier avant qu’il ne quitte votre appareil.',
    ],
    description:
      'Quels réseaux sociaux et messageries suppriment les métadonnées des photos, quelles voies conservent GPS et EXIF, et comment s’assurer qu’une photo est propre avant de l’envoyer.',
    updated: '2026-10-23',
    sections: [
      {
        heading: 'Copie publique et fichier original',
        paragraphs: [
          'Publiez une photo dans un fil et la plupart des grandes plateformes la réencodent et retirent l’EXIF de la version publique. Le public ne voit pas votre position GPS, mais la plateforme reçoit tout de même l’original à l’envoi. Le risque principal, ce sont toutes les voies qui transmettent l’original sans y toucher.',
        ],
      },
      {
        heading: 'Généralement nettoyé',
        paragraphs: [],
        bullets: [
          'Les photos publiées dans le fil de grands réseaux comme Facebook, Instagram et X.',
          'Les photos envoyées comme images compressées classiques dans beaucoup de messageries.',
          'La plupart des images qu’une plateforme redimensionne ou convertit avant de les afficher.',
        ],
      },
      {
        heading: 'Généralement conservé',
        paragraphs: [],
        bullets: [
          'Les photos envoyées « en tant que fichier » ou « en tant que document » dans des applis comme WhatsApp ou Telegram.',
          'Les pièces jointes d’e-mail et les liens cloud (Drive, Dropbox, iCloud et équivalents).',
          'Les forums, sites de petites annonces et de portfolio qui distribuent le fichier tel qu’il a été envoyé.',
          'Les communautés photo qui affichent volontairement l’EXIF, comme les panneaux de réglages d’appareil.',
        ],
      },
      {
        heading: 'Testez votre propre voie',
        paragraphs: [
          'Les applis changent sans cesse leur façon de traiter les médias. Pour en être sûr, envoyez-vous une photo comme vous le faites d’habitude, téléchargez ce qui arrive et posez-le sur la table de AI Label Remover : [l’onglet « Ce qu’il révèle »](image-metadata-viewer-online) montre aussitôt si des données de lieu, de personnes ou d’heure sont passées.',
        ],
      },
      {
        heading: 'Nettoyez avant d’envoyer',
        paragraphs: [
          'L’habitude fiable consiste à nettoyer les métadonnées avant qu’une photo ne quitte votre appareil. AI Label Remover [retire le GPS, les dates et les champs appareil et auteur](remove-gps-location-from-photos) ainsi que les aperçus cachés, conserve la rotation et les couleurs, et fait tout en local — idéal pour les photos destinées à des inconnus, des acheteurs ou des clients. La page pour [supprimer les données EXIF](remove-exif-data) détaille chaque champ retiré.',
        ],
      },
    ],
    faqHeading: 'À propos des applis et des métadonnées photo',
    faq: [
      { q: 'L’e-mail supprime-t-il les métadonnées des photos ?', a: 'Généralement non. Les pièces jointes partent en tant que fichier original : l’EXIF et le GPS voyagent avec, sauf si votre messagerie redimensionne d’abord l’image.' },
      { q: 'WhatsApp supprime-t-il le GPS ?', a: 'Les photos envoyées comme images classiques sont compressées et perdent la plupart des métadonnées. Celles envoyées comme documents gardent le fichier original, GPS compris.' },
      { q: 'Instagram montrera-t-il où ma photo a été prise ?', a: 'L’image publiée est dépourvue d’EXIF. Une étiquette de lieu ajoutée à la publication est autre chose et reste visible par tous.' },
      { q: 'Une capture d’écran ne suffit-elle pas ?', a: 'Elle retire l’EXIF, mais dégrade la qualité, change les dimensions et peut capturer d’autres éléments à l’écran. Le nettoyage sans perte garde l’image originale intacte.' },
    ],
  },

  'view-remove-metadata-iphone-android': {
    metaTitle: 'Supprimer les métadonnées photo sur iPhone et Android',
    related: ['remove-gps-location-from-photos', 'remove-metadata-windows-mac', 'which-platforms-strip-photo-metadata'],
    title: 'Voir et supprimer les métadonnées des photos sur iPhone et Android',
    summary: [
      'Votre téléphone enregistre où et quand chaque photo a été prise, ainsi que le modèle de l’appareil. iOS et Android permettent de le consulter et de retirer la localisation avant de partager.',
      'Voici les options intégrées, leurs limites, et une méthode dans le navigateur pour retirer tout ce qui vous identifie sans installer d’appli.',
    ],
    description:
      'Consultez les métadonnées photo sur iPhone et Android, retirez la localisation avant de partager et nettoyez tout l’EXIF — HEIC compris — dans le navigateur, sans appli.',
    updated: '2026-10-23',
    sections: [
      {
        heading: 'Sur iPhone : consulter',
        paragraphs: [
          'Ouvrez une photo dans Photos et balayez vers le haut, ou touchez le bouton d’informations. Vous verrez la date et l’heure, l’appareil et l’objectif, les réglages d’exposition et, si la localisation était activée, une carte. L’option Ajuster à côté de la date permet de modifier la date, l’heure ou le lieu de cette photo.',
        ],
      },
      {
        heading: 'Sur iPhone : partager sans localisation',
        paragraphs: ['Deux réglages intégrés aident :'],
        bullets: [
          'Dans la feuille de partage, touchez Options en haut et désactivez Position avant d’envoyer.',
          'Pour ne plus localiser les nouvelles photos, allez dans Réglages › Confidentialité et sécurité › Service de localisation › Appareil photo et choisissez Jamais.',
        ],
      },
      {
        heading: 'Sur Android',
        paragraphs: [
          'Dans Google Photos, ouvrez une photo et balayez vers le haut pour voir des détails comme la date, l’appareil et le lieu ; selon la version, vous pouvez y modifier ou retirer le lieu. Pour ne plus localiser les nouvelles photos, désactivez la localisation dans les réglages de l’appli appareil photo — le nom et l’emplacement de l’option varient selon le fabricant.',
        ],
      },
      {
        heading: 'Les limites des outils intégrés',
        paragraphs: [
          'Les réglages du téléphone se concentrent sur la localisation. Le modèle de l’appareil, l’heure de prise de vue, les informations d’objectif, le logiciel de retouche et les aperçus intégrés restent généralement, et les réglages ne s’appliquent qu’aux futures photos ou à un partage. [Les fichiers copiés sur un ordinateur](remove-metadata-windows-mac) ou envoyés par d’autres applis gardent tout.',
        ],
      },
      {
        heading: 'Tout nettoyer depuis le navigateur',
        paragraphs: [
          'Ouvrez AI Label Remover sur votre téléphone, touchez « Parcourir les fichiers », lisez le rapport et touchez « Supprimer toutes les métadonnées ». [Les données de GPS, d’heure, d’appareil et d’auteur sont retirées](remove-gps-location-from-photos) — HEIC d’iPhone compris — tandis que la rotation et les couleurs restent. Sans envoi, sans appli — et la page pour [supprimer les métadonnées HEIC](heic-metadata-remover) montre ce qu’enregistre une photo d’iPhone.',
        ],
      },
      {
        heading: 'iPhone : HEIC, JPEG et Live Photos',
        paragraphs: [
          'Par défaut, l’iPhone enregistre les photos en HEIC (Réglages › Appareil photo › Formats › Haute efficacité) ; avec « Le plus compatible », il enregistre en JPEG. Les deux formats portent le même EXIF — lieu, heure, appareil et objectif. Quand vous envoyez une photo vers un appareil non Apple, iOS peut la convertir en JPEG au passage, mais les métadonnées suivent généralement. Les Live Photos ajoutent une courte vidéo avec ses propres métadonnées ; AI Label Remover nettoie l’image fixe, alors partagez les Live Photos en photo fixe quand la confidentialité compte.',
        ],
      },
      {
        heading: 'Android : chaque marque à sa façon',
        paragraphs: [
          'Les téléphones Android partagent les mêmes champs EXIF, mais pas les mêmes menus. Certaines galeries proposent, dans l’écran de partage, une option pour retirer les données de localisation ; d’autres ne permettent de modifier les détails que photo par photo. Google Photos dispose d’un réglage qui masque la position aux personnes qui consultent vos liens et albums partagés, mais cela ne change rien aux fichiers envoyés par d’autres voies. Les noms des menus changent selon les versions : si vous ne trouvez pas l’option, nettoyer le fichier reste la solution fiable.',
        ],
      },
      {
        heading: 'Le piège de l’« envoi en tant que fichier »',
        paragraphs: [
          'Les messageries compressent généralement les photos et suppriment la plupart des métadonnées lors d’un envoi normal. Envoyez la même photo en tant que fichier ou document — souvent pour garder la pleine qualité — et l’original arrive intact, position comprise. AirDrop, le partage à proximité, l’e-mail et les liens cloud se comportent de la même façon. C’est précisément le moment de [vérifier ce que révèle le fichier](remove-gps-location-from-photos) et de le nettoyer avant.',
        ],
      },
      {
        heading: 'Une routine de deux minutes sur téléphone',
        paragraphs: [],
        bullets: [
          'Ouvrez AI Label Remover dans le navigateur du téléphone et ajoutez-le à l’écran d’accueil pour la prochaine fois.',
          'Touchez « Parcourir les fichiers » et choisissez les photos à partager.',
          'Lisez le rapport, touchez « Supprimer toutes les métadonnées » et vérifiez le panneau vert.',
          'Enregistrez les copies nettoyées et partagez celles-ci, pas les originaux.',
        ],
      },
    ],
    faqHeading: 'À propos des métadonnées des photos de téléphone',
    faq: [
      { q: 'AirDrop conserve-t-il la position ?', a: 'C’est possible. AirDrop envoie le fichier original. Touchez « Options » en haut de la feuille de partage et désactivez « Position », ou nettoyez le fichier avant.' },
      { q: 'Faire une capture d’écran d’une photo supprime-t-il ses métadonnées ?', a: 'Cela retire l’EXIF d’origine, mais dégrade aussi la qualité, et la capture reçoit ses propres métadonnées. Nettoyer l’original est sans perte et plus complet.' },
      { q: 'Faut-il une appli pour retirer l’EXIF sur mon téléphone ?', a: 'Non. Les options intégrées retirent la localisation pour un partage, et AI Label Remover fonctionne dans le navigateur du téléphone pour retirer tout le reste sans rien installer.' },
      { q: 'Désactiver la localisation nettoie-t-il mes anciennes photos ?', a: 'Non. Cela ne concerne que les nouvelles photos. Les photos existantes gardent leur lieu jusqu’à ce que vous le retiriez.' },
      { q: 'Les fichiers HEIC de l’iPhone sont-ils pris en charge ?', a: 'Oui. Les HEIC sont nettoyés directement, sans conversion en JPEG ni réencodage.' },
      { q: 'L’option de partage de l’iPhone retire-t-elle tout ?', a: 'Surtout la localisation. Le modèle de l’appareil et l’heure de prise de vue peuvent rester dans le fichier partagé.' },
    ],
  },

  'what-is-exif-data': {
    metaTitle: 'Que sont les données EXIF ? Champs, vie privée, suppression',
    related: ['image-metadata-viewer-online', 'remove-gps-location-from-photos', 'remove-metadata-without-losing-quality'],
    title: 'Les données EXIF expliquées sans jargon',
    summary: [
      'L’EXIF (Exchangeable Image File Format) désigne les informations cachées qu’un appareil photo ou un téléphone écrit dans chaque photo : réglages, date et heure, modèle de l’appareil et souvent la position GPS.',
      'Cet article explique ce que contient l’EXIF, en quoi il diffère du XMP, de l’IPTC et du C2PA, pourquoi il compte pour la vie privée et comment le consulter ou le retirer en toute sécurité.',
    ],
    description:
      'Ce que sont les données EXIF, leurs champs (appareil, heure, GPS), leurs différences avec XMP, IPTC et C2PA, et comment les voir ou les nettoyer sans perte de qualité.',
    updated: '2026-10-23',
    sections: [
      {
        heading: 'Ce que l’on trouve dans l’EXIF',
        paragraphs: ['Une photo typique peut contenir :'],
        bullets: [
          'Appareil — marque et modèle de l’appareil photo ou du téléphone, objectif et parfois numéros de série.',
          'Exposition — ISO, ouverture, vitesse d’obturation, focale et flash.',
          'Heure — quand la photo a été prise et modifiée pour la dernière fois, souvent avec le fuseau horaire.',
          'Lieu — latitude, longitude, altitude et parfois la direction.',
          'Extras — orientation, une petite miniature intégrée et le nom du logiciel de retouche.',
        ],
      },
      {
        heading: 'Comment l’EXIF est stocké',
        paragraphs: [
          'En JPEG, l’EXIF se trouve dans un segment APP1 près du début du fichier et se divise en répertoires (IFD) : IFD0 pour les données de base de l’image et de l’appareil, le répertoire Exif pour les réglages de prise de vue et [le répertoire GPS pour le lieu](remove-gps-location-from-photos). Les HEIC, WebP et PNG peuvent aussi contenir de l’EXIF, dans leurs propres conteneurs.',
        ],
      },
      {
        heading: 'Comment il se compare au XMP, à l’IPTC et au C2PA',
        paragraphs: [],
        bullets: [
          'EXIF — données techniques de capture des appareils photo et téléphones.',
          'XMP — un format XML souple que les éditeurs utilisent pour les descriptions, mots-clés, historiques de retouche et champs IA.',
          'IPTC — données de description et de droits utilisées par les rédactions et banques d’images, dont [DigitalSourceType](iptc-digitalsourcetype-ai) pour les contenus IA.',
          'C2PA — [des Content Credentials signées](what-is-c2pa-content-credentials) qui enregistrent provenance et retouches.',
        ],
      },
      {
        heading: 'Pourquoi c’est important',
        paragraphs: [
          'Les photographes se servent de l’EXIF pour apprendre et garder une trace de leur travail. Pour la plupart des gens, c’est surtout un risque pour la vie privée : une seule photo peut révéler une adresse, un appareil et l’heure à laquelle quelqu’un se trouvait quelque part. L’EXIF est en outre très facile à modifier : il ne doit jamais valoir preuve à lui seul.',
        ],
      },
      {
        heading: 'Le consulter et le retirer correctement',
        paragraphs: [
          'Les panneaux d’information du système n’affichent qu’une poignée de champs ; [AI Label Remover décode chaque champ EXIF, XMP et IPTC](image-metadata-viewer-online) et les regroupe par source. En retirant l’EXIF, gardez la balise d’orientation pour que les photos ne soient pas pivotées, gardez le profil couleur pour que les couleurs restent justes, et évitez [tout ce qui recompresse l’image](remove-metadata-without-losing-quality). L’outil pour [supprimer les données EXIF](remove-exif-data) fait les trois pour vous.',
        ],
      },
      {
        heading: 'D’où vient l’EXIF',
        paragraphs: [
          'L’EXIF est né au milieu des années 1990, créé par des fabricants d’électronique japonais pour que les appareils photo numériques enregistrent leurs réglages de façon commune. Il est aujourd’hui maintenu conjointement par la CIPA et la JEITA. L’idée de base a peu changé : une liste de balises numérotées contenant chacune une valeur. Les versions récentes ont ajouté le décalage horaire, le numéro de série de l’objectif et, avec Exif 3.0, un vrai texte UTF-8. Les téléphones l’ont adopté tel quel : une photo de smartphone a donc la même structure qu’un compact de 2005, avec un GPS bien plus précis.',
        ],
      },
      {
        heading: 'Des champs qui surprennent',
        paragraphs: ['Au-delà de la date et du lieu, certaines balises en disent plus qu’on ne l’imagine :'],
        bullets: [
          'OffsetTime — le décalage horaire, qui situe la région même sans GPS.',
          'BodySerialNumber, LensSerialNumber et CameraOwnerName — des valeurs qui peuvent relier de nombreuses photos à un même appareil et à une même personne.',
          'GPSImgDirection — l’orientation de l’appareil, parfois suffisante pour identifier une fenêtre ou un balcon.',
          'Software — l’appli de retouche et sa version, un indice sur ce qu’a subi l’image.',
          'MakerNote — un bloc privé du fabricant pouvant contenir le nombre de déclenchements, des numéros de série internes et des données de mise au point ou de détection de visages.',
        ],
      },
      {
        heading: 'La miniature qui survit à vos retouches',
        paragraphs: [
          'Beaucoup de fichiers conservent un petit aperçu dans un second répertoire, IFD1. Certains éditeurs mettent à jour l’image principale mais laissent cet aperçu intact : un recadrage ou un flou peut alors être défait simplement en lisant la miniature. Les téléphones stockent aussi des aperçus plus grands et des images secondaires (MPF) avec leur propre EXIF. Un nettoyage sérieux supprime aussi ces copies cachées — c’est pourquoi AI Label Remover retire les miniatures intégrées et les images MPF au lieu de seulement vider les balises GPS.',
        ],
      },
      {
        heading: 'Que garder, que retirer',
        paragraphs: [
          'Pour tout ce qui est partagé publiquement — publications, annonces, pièces jointes, forums —, retirer tout l’EXIF identifiant est le réglage sûr. Deux éléments méritent d’être conservés parce qu’ils concernent l’affichage, pas l’identité : la balise d’orientation et le profil couleur. Si vous voulez être crédité, une légende ou une signature visible résiste bien mieux qu’un champ de copyright EXIF, que la plupart des plateformes suppriment de toute façon. Gardez vos originaux dans vos propres archives et partagez la copie nettoyée.',
        ],
      },
    ],
    faqHeading: 'À propos de l’EXIF',
    faq: [
      { q: 'EXIF et métadonnées, est-ce la même chose ?', a: 'L’EXIF est un type de métadonnées. Un fichier peut aussi contenir du XMP, de l’IPTC, du C2PA et du texte propre au format : un nettoyage complet va donc au-delà de l’EXIF.' },
      { q: 'Les captures d’écran contiennent-elles de l’EXIF ?', a: 'Généralement bien moins — ni réglages d’appareil ni GPS —, mais elles peuvent enregistrer l’appareil, le logiciel et l’heure de capture.' },
      { q: 'Comment voir les données EXIF ?', a: 'Sous Windows, ouvrez Propriétés › Détails ; sur Mac, utilisez l’inspecteur d’Aperçu ; sur téléphone, ouvrez les informations de la photo. Pour voir tous les champs, XMP et IPTC compris, utilisez un lecteur complet comme AI Label Remover.' },
      { q: 'L’EXIF modifie-t-il l’apparence de l’image ?', a: 'Non. L’EXIF est stocké à part des données d’image : le retirer ne change rien visuellement.' },
      { q: 'L’EXIF peut-il être falsifié ?', a: 'Facilement. Des outils courants peuvent réécrire les champs EXIF : considérez-les comme des indices, jamais comme des preuves.' },
      { q: 'L’orientation fait aussi partie de l’EXIF — AI Label Remover la conserve-t-il ?', a: 'Oui. Elle est réécrite dans un bloc EXIF minimal pour que les photos continuent de s’afficher dans le bon sens.' },
    ],
  },
};

export default fr;
