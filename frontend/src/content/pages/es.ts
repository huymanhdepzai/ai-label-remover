import type { Pages } from './types';

const es: Pages = {
  home: {
    reassure: 'En línea, gratis, sin registro y sin instalar nada: las fotos se leen y se limpian en tu navegador y nunca se suben a un servidor.',
    ctaTools: 'Ver todas las herramientas',
    sources: {
      label: 'Lee y elimina metadatos de imágenes creadas con',
      note: 'Los nombres de productos solo indican el origen de las imágenes; AI Label Remover no está afiliado a estas empresas.',
    },
    start: {
      title: 'Empieza con el archivo que tienes',
      lead: 'Elige lo que necesitas hacer: cada herramienta tiene la zona para soltar archivos al principio de la página.',
      badge: 'Recomendado',
      open: 'Abrir herramienta',
    },
    nav: {
      remove: 'Eliminar metadatos',
      check: 'Ver y comprobar',
      learn: 'Aprender',
      viewer: 'Ver metadatos de fotos',
      aiCheck: 'Comprobar si es IA',
      whatIs: '¿Qué son los metadatos?',
    },
    learn: {
      what: {
        title: '¿Qué son los metadatos?',
        paragraphs: [
          'Los metadatos son “datos sobre datos”: notas guardadas dentro de un archivo de imagen que nunca aparecen en la foto. Cámaras, móviles, editores de fotos y generadores de imágenes con IA los añaden automáticamente, casi siempre sin avisarte.',
          'En las fotos, los metadatos se agrupan en cinco grandes tipos. Cada uno responde a una pregunta distinta sobre la imagen… y sobre la persona que la tomó o la creó.',
        ],
        types: [
          { name: 'Descriptivos', text: 'Título, pie de foto, palabras clave, nombres de las personas que aparecen.', example: 'IPTC Caption, XMP dc:title' },
          { name: 'Técnicos', text: 'Marca y modelo de cámara, objetivo, apertura, velocidad, ISO, número de serie.', example: 'EXIF Make, Model, BodySerialNumber' },
          { name: 'Ubicación y hora', text: 'Coordenadas GPS, altitud, fecha de captura y zona horaria.', example: 'EXIF GPSLatitude, DateTimeOriginal' },
          { name: 'Derechos y gestión', text: 'Autor, propietario, copyright, último programa de edición.', example: 'EXIF Artist, Copyright, Software' },
          { name: 'Procedencia e IA', text: 'Content Credentials, etiquetas “hecho con IA”, prompts y workflows.', example: 'C2PA manifest, IPTC DigitalSourceType' },
        ],
        synonyms:
          'Verás muchos nombres para lo mismo —“eliminador de metadatos”, “borrar EXIF”, “limpiador de metadatos”, “quitar datos de la foto”—: todos significan sacar las notas ocultas del archivo sin cambiar la imagen. Del mismo modo, un “visor”, “lector” o “comprobador de metadatos” muestra lo que hay dentro del archivo. AI Label Remover hace ambas cosas.',
      },
      why: {
        title: '¿Por qué ver y eliminar los metadatos antes de compartir una foto?',
        paragraphs: [
          'Un solo campo de metadatos suele ser inofensivo, pero juntos dicen mucho de ti. Una foto tomada en casa y publicada en una web de segunda mano puede llevar coordenadas GPS con precisión de pocos metros; las imágenes enviadas por correo o enlace en la nube conservan todo lo que escribió la cámara. Mira [cómo el GPS de las fotos puede revelar tu dirección](remove-gps-location-from-photos).',
          'En imágenes creadas o editadas con IA, los metadatos también deciden si una plataforma muestra la etiqueta “Hecho con IA”, y pueden dejar a la vista el prompt completo que escribiste.',
        ],
        bullets: [
          'Revelar dónde vives, trabajas o viajas a través de las coordenadas GPS.',
          'Vincular muchas fotos a una misma persona por el número de serie de la cámara o el nombre del propietario.',
          'Exponer prompts, seeds, modelos y workflows que querías mantener en privado.',
          'Recibir una etiqueta de IA de una plataforma por los datos C2PA o IPTC adjuntos.',
        ],
      },
      standards: {
        title: 'Estándares de metadatos habituales en fotos',
        lead: 'Un mismo archivo de imagen puede contener a la vez varios “compartimentos” de metadatos, cada uno con su propio estándar. AI Label Remover lee y elimina todos los siguientes.',
        items: [
          { name: 'EXIF', text: 'Lo escriben cámaras y móviles: ajustes de exposición, dispositivo, fechas, GPS, miniaturas. [Qué es EXIF](what-is-exif-data).' },
          { name: 'XMP', text: 'Formato XML de Adobe para historial de edición, valoraciones, palabras clave y muchas propiedades relacionadas con la IA.' },
          { name: 'IPTC', text: 'El estándar de las redacciones: pie de foto, autor, copyright y la etiqueta [DigitalSourceType](iptc-digitalsourcetype-ai) que declara las imágenes de IA.' },
          { name: 'C2PA', text: 'Content Credentials firmadas criptográficamente que registran cómo se creó y editó un archivo. [Qué es C2PA](what-is-c2pa-content-credentials).' },
          { name: 'PNG text', text: 'Chunks tEXt, iTXt y zTXt donde [Stable Diffusion y ComfyUI](remove-stable-diffusion-comfyui-metadata) guardan prompts y workflows.' },
        ],
      },
    },
    security: {
      title: 'Tus fotos siguen a salvo',
      lead: 'Con cualquier herramienta que maneje archivos personales, la primera pregunta es “¿adónde van mis fotos?”. La respuesta de AI Label Remover: a ninguna parte.',
      items: [
        { title: '100 % en tu dispositivo', text: 'La lectura y la limpieza se ejecutan en un Web Worker dentro de la pestaña del navegador. Ningún servidor recibe tus archivos.' },
        { title: 'Nada almacenado, sin entrenar IA', text: 'Como las fotos nunca se envían, no hay ninguna copia que guardar, filtrar o usar para entrenar un modelo.' },
        { title: 'Funciona sin conexión', text: 'Carga la página, apaga el Wi-Fi y limpia un archivo: sigue funcionando. La pestaña Red de DevTools no muestra datos de imagen saliendo.' },
        { title: 'Sin cuenta ni rastreo', text: 'Sin registro, sin analítica, anuncios ni píxeles de terceros. El sitio solo recuerda el idioma y el tema que eliges.' },
      ],
    },
    faq: [
      { q: '¿Qué diferencia hay entre EXIF y metadatos?', a: 'EXIF es un tipo de metadatos: el que escriben cámaras y móviles. “Metadatos” es el término general e incluye también XMP, IPTC, C2PA y los chunks de texto de PNG. Mira [qué son los datos EXIF](what-is-exif-data).' },
      { q: '¿Pueden los metadatos mostrar dónde se tomó una foto?', a: 'Sí, si la imagen tiene etiquetas GPS. Los móviles suelen guardar latitud, longitud y altitud cuando la cámara tiene acceso a la ubicación. El [eliminador de EXIF](remove-exif-data) quita esas etiquetas sin tocar la calidad.' },
      { q: '¿Cómo elimino los metadatos de IA de una imagen?', a: 'Suelta la imagen en el recuadro de arriba y pulsa “Eliminar todos los metadatos”, o usa el [limpiador de etiquetas de IA](ai-tag-cleaner) para ver primero los datos C2PA, IPTC y el prompt.' },
      { q: '¿Es seguro subir mis fotos aquí?', a: 'Tus fotos no se suben a ningún sitio. AI Label Remover abre los archivos en tu navegador, los procesa en la memoria de la pestaña y guarda la copia limpia directamente en tu dispositivo. Una vez cargada la página, puedes desconectarte y sigue funcionando.' },
    ],
  },
  labels: {
    tools: 'Más herramientas de metadatos',
    relatedTools: 'Herramientas específicas para esto',
    homeTitle: 'Herramientas para cada necesidad',
    homeLead: 'Cada página se centra en una tarea y trae la herramienta lista para usar arriba.',
    formats: 'Qué se elimina y qué se conserva',
    contact: 'Contacto',
    contactText: '¿Preguntas, errores o un archivo que no se limpia bien? Escribe a',
    updated: 'Actualizado el {date}',
  },
  tools: {
    'ai-tag-cleaner': {
      metaTitle: 'AI Tag Cleaner – Quita etiquetas de IA de tus imágenes',
      description: 'Limpia las etiquetas de IA de tus imágenes: IPTC “generado por IA”, C2PA, nombres del generador en XMP y prompts. Sin pérdida, gratis y sin subir nada.',
      navLabel: 'Limpiador de etiquetas IA',
      h1: 'AI Tag Cleaner: limpia las etiquetas de IA de tus imágenes',
      lead: 'Los generadores de IA y los editores con IA etiquetan los archivos que tocan: un tipo de fuente “generado por IA”, un registro C2PA firmado, el nombre de la app y a veces el prompt completo. Suelta una imagen abajo para ver todas sus etiquetas de IA y elimínalas sin recomprimir ni un píxel.',
      sections: [
        {
          heading: 'Qué es una etiqueta de IA',
          paragraphs: [
            'Una etiqueta de IA es cualquier campo del archivo que dice, o sugiere, que se usó IA. Están repartidas en varios estándares de metadatos a la vez, por eso borrar un campo a mano casi nunca basta:',
          ],
          bullets: [
            'Valores [DigitalSourceType](iptc-digitalsourcetype-ai) de IPTC y XMP como trainedAlgorithmicMedia o compositeWithTrainedAlgorithmicMedia.',
            'Acciones de [C2PA Content Credentials](what-is-c2pa-content-credentials) que marcan pasos generativos, escritas por ChatGPT, Firefly, Photoshop y otros.',
            'Campos Software y CreatorTool con el nombre del generador, y entradas del historial XMP de ediciones con IA.',
            'Prompt, semilla y modelo en los chunks PNG de [Stable Diffusion y ComfyUI](remove-stable-diffusion-comfyui-metadata).',
          ],
        },
        {
          heading: 'Cómo funciona el limpiador de etiquetas de IA',
          paragraphs: [
            'AI Label Remover lee la estructura del archivo directamente en tu navegador. Cada etiqueta de IA aparece con el campo exacto del que sale, y el archivo recibe un veredicto —“Rastros de IA encontrados”, “Merece otra mirada” o “Sin rastros de IA”— antes de cambiar nada.',
            'Al pulsar “Eliminar todos los metadatos” se cortan los bloques que contienen las etiquetas: XMP, IPTC, EXIF, el almacén de manifiestos C2PA y los chunks de texto PNG. Los datos de imagen se copian byte a byte y la copia limpia se vuelve a leer para confirmar que no queda ninguna etiqueta de IA.',
          ],
        },
        {
          heading: 'Qué herramienta deja cada etiqueta',
          paragraphs: [
            'Las imágenes de ChatGPT y Gemini llegan con registros C2PA; Firefly y el Relleno generativo de Photoshop añaden C2PA y DigitalSourceType; Midjourney escribe XMP descriptivo; las interfaces de Stable Diffusion guardan todos los ajustes en el PNG. [Qué metadatos añaden los generadores de imágenes con IA](what-metadata-ai-image-generators-add) los repasa uno por uno.',
          ],
        },
        {
          heading: 'Lo que un limpiador de etiquetas no puede hacer',
          paragraphs: [
            'La limpieza solo afecta a los metadatos. [Las marcas de agua invisibles como SynthID](synthid-invisible-ai-watermarks) están en los píxeles y siguen ahí, y las plataformas pueden usar sus propios clasificadores. Limpiar etiquetas sirve para la privacidad y para corregir etiquetas erróneas en fotos reales: si una imagen está generada con IA y parece real, las normas de las plataformas suelen exigir que lo indiques.',
          ],
        },
      ],
      faqHeading: 'Preguntas sobre el limpiador de etiquetas de IA',
      faq: [
        { q: '¿Una etiqueta de IA es lo mismo que un aviso de IA?', a: 'No exactamente. La etiqueta es un dato dentro del archivo; el aviso es lo que muestra la plataforma, como “Info de IA” en Instagram. A menudo el aviso se crea a partir de la etiqueta. Para evitarlo en una foto real, mira [No AI Tag](no-ai-tag).' },
        { q: '¿Puedo quitar solo las etiquetas de IA y conservar lo demás?', a: 'El limpiador elimina bloques de metadatos completos y no campos sueltos, porque las etiquetas de IA están repartidas entre varios. La rotación, el perfil de color ICC y el tamaño en píxeles se conservan siempre, así que la imagen se ve igual que antes.' },
        { q: '¿Limpiar las etiquetas reduce la calidad?', a: 'No. No se recomprime nada; solo se eliminan metadatos. Mira [por qué importa eliminar sin pérdida](remove-metadata-without-losing-quality).' },
        { q: '¿Qué formatos admite?', a: 'JPG, PNG, WebP, GIF, HEIC/HEIF y AVIF: hasta 50 archivos a la vez, de hasta 25 MB cada uno. Los prompts en PNG también se pueden quitar con el [eliminador de metadatos PNG](png-metadata-remover).' },
        { q: '¿Elimina los metadatos de las imágenes de ChatGPT o Gemini?', a: 'Elimina las Content Credentials C2PA y los campos IPTC que escriben esos servicios. Google además incrusta una marca de agua SynthID en los píxeles, que ninguna herramienta de metadatos puede quitar. Más detalles en [metadatos de imágenes de ChatGPT y Gemini](chatgpt-gemini-image-metadata).' },
        { q: '¿Puedo ver el prompt antes de borrarlo?', a: 'Sí. La pestaña “Metadatos en bruto” muestra palabra por palabra prompts, flujos de trabajo y nombres de generadores, para que copies lo que quieras conservar antes de limpiar.' },
      ],
      related: ['iptc-digitalsourcetype-ai', 'what-metadata-ai-image-generators-add', 'how-to-check-if-image-is-ai-generated'],
      updated: '2026-11-05',
    },
    'no-ai-tag': {
      metaTitle: 'No AI Tag – Publica fotos reales sin la etiqueta de IA',
      description: '¿Tu foto real salió con “Info de IA”? Elimina los datos C2PA e IPTC que la provocan y publica sin etiqueta de IA. Sin pérdida, gratis, en tu navegador.',
      navLabel: 'No AI Tag',
      h1: 'No AI Tag: tus fotos reales sin etiqueta de IA',
      lead: 'Un pequeño retoque generativo en Photoshop o en una app del móvil puede bastar para que Instagram, Facebook o Threads pongan “Info de IA” en una foto auténtica. Suelta el archivo abajo para ver qué datos provocan la etiqueta y comparte una copia limpia sin etiquetas de IA en sus metadatos.',
      sections: [
        {
          heading: 'Por qué una foto real recibe una etiqueta de IA',
          paragraphs: [
            'Las plataformas leen los datos de procedencia que los editores añaden al archivo. [Por qué las fotos reales reciben “Info de IA”](made-with-ai-label) lo explica a fondo; las causas habituales son:',
          ],
          bullets: [
            'Un manifiesto C2PA que registra un paso generativo, como Relleno generativo, borrado con IA o expansión con IA.',
            'Un valor [DigitalSourceType](iptc-digitalsourcetype-ai) de IPTC o XMP que indica que la imagen se compuso con IA.',
            'Content Credentials que la app de edición añade por defecto al exportar.',
          ],
        },
        {
          heading: 'Cómo publicar sin etiqueta de IA',
          paragraphs: ['Lleva menos de un minuto y nada sale de tu dispositivo:'],
          bullets: [
            'Suelta la foto editada en el recuadro de arriba.',
            'Lee el veredicto y los campos que lo explican: el informe nombra la acción C2PA o el valor IPTC exacto.',
            'Pulsa “Eliminar todos los metadatos” y guarda la copia limpia.',
            'Sube la copia limpia, no la exportación original.',
          ],
        },
        {
          heading: 'Evita la etiqueta desde el origen',
          paragraphs: [
            'Si editas a menudo, [desactiva Content Credentials en Photoshop y Lightroom](turn-off-content-credentials-photoshop-lightroom) para que no se escriban. [Qué plataformas etiquetan imágenes de IA](which-platforms-label-ai-images) resume lo que leen Meta, TikTok, YouTube y otras.',
          ],
        },
        {
          heading: 'Lo que “No AI Tag” puede y no puede prometer',
          paragraphs: [
            'Eliminar los metadatos quita el motivo que está en el archivo, que es la causa en la mayoría de las fotos editadas. No elimina [marcas de agua en los píxeles como SynthID](synthid-invisible-ai-watermarks), y una plataforma puede etiquetar igualmente con su propia detección o pedirte que lo declares. Esta página es para fotos reales con retoques menores: si una imagen está generada con IA y puede confundir, indícalo.',
          ],
        },
      ],
      faqHeading: 'Preguntas sobre No AI Tag',
      faq: [
        { q: '¿Quita la etiqueta “Info de IA” de una publicación ya hecha?', a: 'No. La etiqueta pertenece a la publicación en la plataforma. Borra o archiva la publicación, limpia el archivo aquí y vuelve a subir la copia limpia.' },
        { q: '¿Está garantizado que no aparezca la etiqueta?', a: 'No. Se eliminan los metadatos que leen las plataformas, pero pueden usar otras señales. En la mayoría de las fotos editadas, los metadatos son el motivo de la etiqueta.' },
        { q: '¿Funciona con fotos de iPhone y Android?', a: 'Sí. Los HEIC de iPhone y los JPG de Android se limpian sin convertirlos. También hay un [eliminador de metadatos HEIC](heic-metadata-remover) dedicado.' },
        { q: '¿Y las etiquetas de IA de una imagen generada por completo?', a: 'El [AI Tag Cleaner](ai-tag-cleaner) las muestra y las elimina, pero las normas de las plataformas suelen exigir que etiquetes tú mismo las imágenes de IA realistas.' },
      ],
      related: ['made-with-ai-label', 'which-platforms-label-ai-images', 'turn-off-content-credentials-photoshop-lightroom'],
      updated: '2026-11-05',
    },
    'remove-exif-data': {
      metaTitle: 'Eliminar datos EXIF de fotos online, gratis y privado',
      description: 'Elimina los datos EXIF —GPS, cámara, número de serie, fecha— de JPG, HEIC, PNG y WebP en tu navegador. Sin subir nada, sin perder calidad, hasta 50 archivos.',
      navLabel: 'Eliminar EXIF',
      h1: 'Eliminar datos EXIF de fotos',
      lead: 'Suelta tus fotos abajo para ver cada campo EXIF que llevan —posición GPS, cámara y objetivo, número de serie, hora de la toma— y elimínalos con un clic. Todo ocurre en tu dispositivo; los archivos nunca se suben.',
      sections: [
        {
          heading: 'Lo que delatan los datos EXIF',
          paragraphs: [
            'EXIF es el bloque de notas técnicas que una cámara o un móvil escribe en cada foto. Por separado casi todo es inofensivo, pero junto puede decir mucho de ti. [Nuestra guía sobre EXIF](what-is-exif-data) repasa cada etiqueta común; estas son las que importan para la privacidad:',
          ],
          bullets: [
            'Latitud, longitud y altitud GPS, a menudo con precisión de pocos metros: suficiente para localizar una casa.',
            'Fecha y hora de la toma, con la zona horaria.',
            'Marca y modelo de la cámara o el móvil, el objetivo y, en muchas cámaras, un número de serie que enlaza tus fotos entre sí.',
            'Nombre del propietario o autor y el programa que editó el archivo por última vez.',
            'Una miniatura incrustada que puede seguir mostrando la imagen original después de recortarla.',
          ],
        },
        {
          heading: 'Cómo funciona este eliminador de EXIF',
          paragraphs: [
            'AI Label Remover lee directamente la estructura del archivo. En un JPEG recorta el segmento APP1 que contiene EXIF y XMP, además de IPTC, comentarios y miniaturas incrustadas; en HEIC, PNG y WebP elimina las cajas o chunks equivalentes. Los datos comprimidos de la imagen se copian byte a byte, así que nada se vuelve a codificar y la foto se ve idéntica.',
            'Los campos que controlan cómo se muestra la foto se conservan a propósito: la rotación, el perfil de color ICC y el tamaño en píxeles. Así se evitan las fotos de lado y los colores apagados que dejan las herramientas más toscas. Al terminar, el archivo limpio se vuelve a leer para que veas que los campos EXIF han desaparecido de verdad.',
          ],
        },
        {
          heading: 'Cuándo quitar el EXIF antes de compartir',
          paragraphs: [
            'Muchas redes sociales grandes eliminan el EXIF al subir, pero muchos sitios no: adjuntos de correo, enlaces de almacenamiento en la nube, foros, portales de compraventa, apps de chat que envían archivos en “calidad original” y tu propia web. [Qué plataformas eliminan los metadatos](which-platforms-strip-photo-metadata) recoge las habituales. Si no sabes dónde acabará una foto, limpiarla antes es lo más seguro.',
            'Vender algo por internet, publicar una foto hecha en casa o enviar imágenes a alguien que acabas de conocer son los casos típicos en los que [los datos GPS pueden revelar una ubicación](remove-gps-location-from-photos).',
          ],
        },
        {
          heading: 'Privado desde el diseño',
          paragraphs: [
            'Los eliminadores de EXIF online suelen subir tu foto a un servidor, procesarla allí y devolvértela. AI Label Remover hace todo el trabajo en Web Workers dentro de la pestaña del navegador: una vez cargada la página, puedes incluso desconectarte y sigue funcionando. Sin cuenta, sin marca de agua y sin más límite que 25 MB y 40 megapíxeles por archivo.',
          ],
        },
      ],
      faqHeading: 'Preguntas sobre eliminar EXIF',
      faq: [
        { q: '¿Eliminar el EXIF reduce la calidad de la imagen?', a: 'No. Solo se recortan bloques de metadatos; los datos comprimidos de la imagen se copian sin cambios, así que la resolución, la nitidez y el color siguen exactamente igual. Mira [por qué volver a guardar pierde calidad](remove-metadata-without-losing-quality).' },
        { q: '¿La foto seguirá en la orientación correcta?', a: 'Sí. Se conserva el valor de orientación para que la imagen se vea igual que antes, junto con el perfil de color ICC.' },
        { q: '¿Puedo quitar el EXIF de fotos HEIC del iPhone?', a: 'Sí. Los archivos HEIC y HEIF se admiten directamente, sin convertirlos antes a JPEG. También hay una página específica para [eliminar metadatos de HEIC](heic-metadata-remover).' },
        { q: '¿Cómo compruebo que el EXIF ha desaparecido?', a: 'Tras la limpieza, AI Label Remover vuelve a leer el archivo nuevo y muestra qué campos quedan. También puedes abrirlo en cualquier [visor de metadatos online](image-metadata-viewer-online) o en las propiedades de archivo de tu sistema.' },
        { q: '¿Se puede hacer sin ninguna web?', a: 'Sí: Windows, macOS y los móviles tienen opciones integradas, cada una con sus límites. [Eliminar metadatos en Windows y Mac](remove-metadata-windows-mac) y [en iPhone y Android](view-remove-metadata-iphone-android) las comparan.' },
      ],
      related: ['what-is-exif-data', 'remove-gps-location-from-photos', 'which-platforms-strip-photo-metadata'],
      updated: '2026-10-23',
    },
    'remove-c2pa-content-credentials': {
      metaTitle: 'Eliminar Content Credentials C2PA de imágenes, gratis',
      description: 'Inspecciona y elimina las Content Credentials C2PA (manifiestos JUMBF) de JPG, PNG, HEIC, WebP y AVIF, sin pérdida de calidad y sin subir nada.',
      navLabel: 'Eliminar C2PA',
      h1: 'Eliminar Content Credentials C2PA',
      lead: 'Las Content Credentials son un historial firmado adjunto a una imagen: qué app la creó, qué ediciones siguieron y si intervino la IA generativa. Suelta un archivo abajo para leer su manifiesto C2PA y elimina todo el almacén de manifiestos sin pérdida.',
      sections: [
        {
          heading: 'Qué contiene un manifiesto C2PA',
          paragraphs: [
            'C2PA (Coalition for Content Provenance and Authenticity) define cómo incrustar en un archivo un registro firmado criptográficamente. [C2PA explicado](what-is-c2pa-content-credentials) profundiza más; en la práctica un manifiesto suele incluir:',
          ],
          bullets: [
            'El claim generator: la app o el servicio que lo firmó, como Photoshop, Firefly, ChatGPT o una cámara.',
            'Una lista de acciones: creado, abierto, editado, recortado, y marcas para los pasos con IA generativa.',
            'Ingredientes: versiones anteriores o imágenes de origen con las que se construyó el archivo.',
            'Un tipo de fuente digital que indica si el contenido se capturó, se compuso o lo generó una IA.',
            'Una firma y un certificado que atan el registro a los datos exactos de la imagen.',
          ],
        },
        {
          heading: 'Dónde vive C2PA en cada tipo de archivo',
          paragraphs: [
            'En JPEG el almacén de manifiestos está en segmentos APP11 como cajas JUMBF; en PNG es un chunk caBX; en HEIC y AVIF una caja uuid; en WebP un chunk RIFF propio. AI Label Remover localiza cada uno, muestra las declaraciones que contiene y elimina el almacén completo copiando los datos de imagen sin cambios.',
            'Como la firma vincula el manifiesto a los bytes exactos, cualquier nuevo guardado en otra app suele romperlo o descartarlo de todos modos. Eliminarlo limpiamente evita dejar atrás un registro roto y a medio validar.',
          ],
        },
        {
          heading: 'Razones para conservarlo y para quitarlo',
          paragraphs: [
            'Las Content Credentials pueden ser valiosas: ayudan a medios y creadores a demostrar de dónde viene una imagen. Si ese es tu objetivo, consérvalas, y guarda siempre el archivo original, porque los metadatos eliminados no se pueden recuperar.',
            'Quitarlas tiene sentido cuando el registro revela más de lo que quieres (nombres, historial de edición, imágenes de origen) o cuando un editor añadió una marca de IA a una foto real tras un retoque menor. También puedes [desactivar las Content Credentials en Photoshop y Lightroom](turn-off-content-credentials-photoshop-lightroom) para que no se escriban.',
          ],
        },
      ],
      faqHeading: 'Preguntas sobre C2PA',
      faq: [
        { q: '¿AI Label Remover verifica las firmas C2PA?', a: 'No. Lee y muestra el contenido del manifiesto, pero no valida la cadena de certificados. Usa la herramienta oficial de verificación de Content Credentials si necesitas validar la firma.' },
        { q: '¿Es legal eliminar las Content Credentials?', a: 'Eliminar metadatos de archivos que te pertenecen o que puedes modificar suele estar bien, pero no lo uses para falsear quién hizo una imagen ni cómo. Esto es información general, no asesoramiento legal.' },
        { q: '¿Por qué mi foto dice “Merece otra mirada”?', a: 'El archivo tiene un manifiesto C2PA que no menciona la IA de forma explícita. Algunas plataformas leen cualquier manifiesto como una pista, así que revisa las acciones listadas antes de decidir.' },
        { q: '¿Sabrá una plataforma que la imagen se editó?', a: 'No a partir del manifiesto eliminado. Las plataformas pueden usar otras señales, y las [marcas de agua invisibles](synthid-invisible-ai-watermarks) no se ven afectadas al eliminar metadatos.' },
      ],
      related: ['what-is-c2pa-content-credentials', 'turn-off-content-credentials-photoshop-lightroom', 'iptc-digitalsourcetype-ai'],
      updated: '2026-10-23',
    },
    'heic-metadata-remover': {
      metaTitle: 'Eliminar metadatos HEIC – EXIF y GPS de fotos iPhone',
      description: 'Elimina EXIF, ubicación GPS y marcas de tiempo de fotos HEIC y HEIF del iPhone sin convertirlas a JPEG. Sin pérdida, en tu navegador, sin subir nada.',
      navLabel: 'Eliminar metadatos HEIC',
      h1: 'Eliminar metadatos HEIC de fotos del iPhone',
      lead: 'El iPhone guarda las fotos en HEIC y cada una registra dónde y cuándo se hizo. Suelta archivos HEIC o HEIF abajo para ver esos metadatos y eliminarlos: la foto sigue siendo HEIC, sin conversión ni pérdida de calidad.',
      sections: [
        {
          heading: 'Lo que registra una foto HEIC del iPhone',
          paragraphs: ['Una foto típica del iPhone lleva más de lo que la mayoría imagina:'],
          bullets: [
            'Coordenadas GPS precisas, altitud y dirección hacia la que apuntaba la cámara.',
            'Fecha, hora y zona horaria de la toma, además de fechas de modificación.',
            'Modelo del dispositivo, objetivo, ajustes de cámara y versión de iOS.',
            'Datos propios de Apple, como el identificador que empareja una Live Photo.',
            'Datos XMP escritos por apps de edición, a veces con registros C2PA.',
          ],
        },
        {
          heading: 'Eliminar metadatos sin convertir a JPEG',
          paragraphs: [
            'El consejo habitual es convertir el HEIC a JPEG y esperar que los metadatos no sobrevivan. Eso vuelve a codificar la imagen, pierde calidad y a menudo descarta el perfil de color de gama amplia. AI Label Remover edita el propio contenedor HEIC: elimina los ítems Exif y XMP, las cajas uuid de C2PA y las cajas de marcas de tiempo, y conserva intactos los datos de imagen HEVC, la rotación (irot/imir) y el perfil de color (colr).',
            'El mismo motor trata AVIF, que usa el mismo formato contenedor ISOBMFF, así que las exportaciones AVIF de las apps modernas se limpian igual.',
          ],
        },
        {
          heading: 'Ajustes del iPhone frente a limpiar el archivo',
          paragraphs: [
            'iOS permite desactivar la ubicación en un envío concreto con el botón “Opciones” de la hoja para compartir, y la app Fotos puede ajustar o quitar la ubicación foto a foto. Funciona para envíos puntuales, pero es fácil olvidarlo y no elimina los demás campos. [Ver y eliminar metadatos en iPhone y Android](view-remove-metadata-iphone-android) compara las opciones integradas.',
            'Para un lote de fotos —una carpeta de vacaciones, fotos de producto o imágenes para un anuncio— soltarlas en AI Label Remover y guardar un solo ZIP es más rápido, y el informe de antes y después muestra exactamente qué se eliminó.',
          ],
        },
      ],
      faqHeading: 'Preguntas sobre HEIC',
      faq: [
        { q: '¿Funciona en Windows, donde a veces no se pueden abrir los HEIC?', a: 'Sí. AI Label Remover lee la estructura HEIC por sí mismo, así que no necesita un códec HEIC instalado. Los HEIC muestran una etiqueta de formato en lugar de una miniatura, pero la lectura y la limpieza funcionan con normalidad.' },
        { q: '¿El archivo limpio se abrirá en Fotos?', a: 'Sí. El resultado es un HEIC estándar con los mismos datos de imagen; solo se eliminan los ítems de metadatos.' },
        { q: '¿Admite Live Photos?', a: 'AI Label Remover procesa la imagen fija HEIC. El vídeo asociado a una Live Photo es un archivo aparte y no se modifica.' },
        { q: '¿Hay límite de tamaño?', a: 'Cada archivo puede tener hasta 25 MB y 40 megapíxeles, lo que cubre las fotos de cualquier iPhone actual, y puedes limpiar 50 a la vez.' },
      ],
      related: ['view-remove-metadata-iphone-android', 'remove-gps-location-from-photos', 'batch-remove-metadata'],
      updated: '2026-10-23',
    },
    'png-metadata-remover': {
      metaTitle: 'Eliminar metadatos PNG – prompts y chunks de texto',
      description: 'Elimina los metadatos de PNG —chunks tEXt, iTXt y zTXt con prompts de Stable Diffusion o ComfyUI, XMP, eXIf y C2PA— manteniendo la imagen sin pérdida.',
      navLabel: 'Eliminar metadatos PNG',
      h1: 'Eliminar metadatos de PNG',
      lead: 'Los PNG esconden metadatos en chunks de texto: prompts y flujos de IA, nombres de autor, software y marcas de tiempo. Suelta tus PNG abajo para leer cada chunk y elimínalos mientras los datos de imagen quedan idénticos bit a bit.',
      sections: [
        {
          heading: 'Dónde guarda PNG sus metadatos',
          paragraphs: ['Un PNG es una secuencia de chunks. La imagen está en IHDR, PLTE e IDAT; todo lo demás es opcional. Los chunks que elimina AI Label Remover son:'],
          bullets: [
            'tEXt, zTXt e iTXt: texto libre, texto comprimido y texto internacional. Stable Diffusion WebUI escribe aquí un chunk “parameters”; ComfyUI escribe JSON “prompt” y “workflow”.',
            'Paquetes XMP guardados en iTXt, incluidas declaraciones IPTC y de origen IA.',
            'eXIf: datos EXIF, GPS incluido cuando una app los copió de una foto.',
            'caBX: Content Credentials C2PA.',
            'tIME (hora de última modificación) y dSIG (firma digital).',
          ],
        },
        {
          heading: 'Lo que se queda para que la imagen se vea igual',
          paragraphs: [
            'La transparencia (tRNS), la gamma y la cromaticidad (gAMA, cHRM), el indicador sRGB y el perfil ICC incrustado (iCCP) afectan a cómo se muestra la imagen, así que se conservan. Los PNG animados mantienen sus chunks acTL, fcTL y fdAT, de modo que las animaciones APNG siguen funcionando.',
            'Como los datos IDAT se copian en lugar de recomprimirse, el archivo limpio es idéntico píxel a píxel al original, y normalmente algo más ligero porque los chunks de texto ya no están.',
          ],
        },
        {
          heading: 'Proteger prompts y flujos de IA',
          paragraphs: [
            'Si compartes imágenes hechas con Stable Diffusion, Forge o ComfyUI, cualquiera puede arrastrar el PNG a la misma herramienta y recuperar tu prompt, semilla, modelo y grafo de nodos exactos. [Cómo esconden el prompt Stable Diffusion y ComfyUI en los PNG](remove-stable-diffusion-comfyui-metadata) muestra lo que se guarda. Limpiar lo elimina todo, y la pestaña “Metadatos en bruto” te permite copiar antes el prompt si quieres conservarlo.',
          ],
        },
      ],
      faqHeading: 'Preguntas sobre metadatos PNG',
      faq: [
        { q: '¿Eliminar los metadatos PNG cambia los colores?', a: 'No. Los chunks de color —sRGB, gAMA, cHRM e iCCP— se conservan y los datos de imagen IDAT se copian sin cambios.' },
        { q: '¿Funciona con PNG transparentes?', a: 'Sí. Los datos de transparencia (tRNS o el canal alfa dentro de IDAT) forman parte de la imagen y nunca se tocan.' },
        { q: '¿Puedo guardar el prompt en algún sitio?', a: 'Cópialo desde la pestaña “Metadatos en bruto” antes de limpiar. Una vez eliminados, los metadatos no se pueden recuperar del archivo limpio.' },
        { q: '¿Sirve también para PNG de Midjourney o DALL·E?', a: 'Sí. Los datos de texto, XMP o C2PA que incrustan esos servicios se eliminan igual. Mira [cómo ocultar los prompts de Midjourney y DALL·E](hide-midjourney-dalle-prompts).' },
      ],
      related: ['remove-stable-diffusion-comfyui-metadata', 'hide-midjourney-dalle-prompts', 'what-metadata-ai-image-generators-add'],
      updated: '2026-10-23',
    },
  },
  info: {
    about: {
      metaTitle: 'Acerca de AI Label Remover – cómo funciona el limpiador',
      description: 'Quién hace AI Label Remover, cómo funciona el limpiador de metadatos en el navegador, cómo se actualizan los artículos y lo que la herramienta nunca hará.',
      navLabel: 'Acerca de',
      title: 'Acerca de AI Label Remover',
      lead: 'AI Label Remover es una herramienta gratuita para leer y eliminar metadatos ocultos de imágenes —EXIF, GPS, XMP, IPTC, Content Credentials C2PA y prompts de IA— pensada para que tus archivos nunca tengan que salir de tu dispositivo.',
      sections: [
        {
          heading: 'Por qué existe',
          paragraphs: [
            'Las fotos y las imágenes de IA llevan mucha más información de la que la mayoría cree: la ubicación de casa en las etiquetas GPS, números de serie, prompts y flujos completos, y registros de procedencia que las plataformas leen para poner etiquetas. La mayoría de limpiadores online te piden subir justo los archivos que quieres proteger. AI Label Remover se creó para hacer lo mismo sin ese peaje.',
          ],
        },
        {
          heading: 'Cómo funciona la herramienta',
          paragraphs: [
            'Cuando añades una imagen, tu navegador la lee localmente. Varios Web Workers analizan la estructura del archivo —segmentos JPEG, chunks PNG, chunks RIFF de WebP, bloques GIF y cajas HEIC/AVIF— y listan cada bloque de metadatos que encuentran. Limpiar elimina esos bloques del flujo de bytes, copia sin cambios los datos de imagen comprimidos y vuelve a leer el resultado para confirmar lo que queda.',
            'No hay procesamiento en servidor. La web es un conjunto de páginas estáticas; una vez cargada, la herramienta funciona sin conexión.',
          ],
        },
        {
          heading: 'Cómo se escriben nuestros artículos',
          paragraphs: [
            'Las guías de este sitio se basan en las especificaciones publicadas (EXIF, XMP, IPTC Photo Metadata, C2PA, los formatos PNG e ISOBMFF), en las páginas de ayuda de las plataformas y en pruebas con archivos reales de las herramientas que describimos. Cada artículo muestra su fecha de última revisión, y los actualizamos cuando cambian los estándares o las políticas.',
            'Los artículos son información general, no asesoramiento legal. Las normas sobre etiquetas de IA cambian a menudo; consulta las páginas de ayuda de cada plataforma antes de confiar en cualquier afirmación sobre ellas.',
          ],
        },
        {
          heading: 'Lo que AI Label Remover no hará',
          paragraphs: [],
          bullets: [
            'Subir, almacenar o registrar tus archivos: no existe un servidor que pueda recibirlos.',
            'Cambiar píxeles ni quitar marcas de agua invisibles o logotipos visibles.',
            'Prometer que una plataforma pondrá o no pondrá una etiqueta.',
            'Ayudar a disfrazar imágenes de IA como fotografías reales. Úsala para proteger tu privacidad y corregir errores.',
          ],
        },
        {
          heading: 'Independencia',
          paragraphs: [
            'AI Label Remover es independiente y no está afiliado a Meta, Google, OpenAI, Adobe, Midjourney, Apple ni a la C2PA. Los nombres de productos se usan solo para describir la compatibilidad.',
          ],
        },
      ],
      updated: '2026-10-23',
    },
    privacy: {
      metaTitle: 'Política de privacidad – AI Label Remover',
      description: 'Política de privacidad en lenguaje claro: tus imágenes no salen de tu dispositivo, sin cuentas, analítica ni anuncios; solo se guardan tu idioma y tema.',
      navLabel: 'Privacidad',
      title: 'Política de privacidad',
      lead: 'AI Label Remover es una herramienta para proteger tu privacidad, así que usarla no debería costarte nada de ella. Esta página explica con palabras sencillas qué pasa con tus imágenes y la poca información que maneja la web.',
      sections: [
        {
          heading: 'En resumen',
          paragraphs: [],
          bullets: [
            'Tus imágenes se procesan en tu propio dispositivo y nunca se suben.',
            'No hay cuentas, registros ni listas de correo: no sabemos quién eres.',
            'No hay analítica, publicidad, píxeles de seguimiento ni scripts de terceros.',
            'Lo único que se guarda es tu idioma y tu tema claro u oscuro, en tu propio navegador, y puedes borrarlo cuando quieras.',
          ],
        },
        {
          heading: 'Qué pasa con tus imágenes',
          paragraphs: ['Cuando añades una foto a AI Label Remover, este es todo su recorrido:'],
          bullets: [
            'Tu navegador abre el archivo desde tu dispositivo y lo guarda en la memoria de la pestaña.',
            'Los Web Workers de la pestaña leen los metadatos y, cuando pulsas limpiar, crean una copia limpia, también en memoria.',
            'Al guardar, tu navegador escribe el archivo limpio o el ZIP directamente en tu dispositivo.',
            'Al cerrar o recargar la pestaña, las imágenes y los informes desaparecen. No queda nada en ningún servidor, porque ningún servidor las recibe.',
          ],
        },
        {
          heading: 'Puedes comprobarlo tú mismo',
          paragraphs: [
            'No tienes que fiarte de nuestra palabra. Carga la página, desactiva el wifi o los datos móviles y limpia un archivo: sigue funcionando, porque no hace falta enviar nada. Si manejas las herramientas para desarrolladores, abre la pestaña Red mientras limpias y verás que ningún dato de imagen sale de tu dispositivo.',
          ],
        },
        {
          heading: 'Lo que no recogemos',
          paragraphs: ['AI Label Remover no recoge ni guarda:'],
          bullets: [
            'tus imágenes, sus metadatos ni los informes que ves en pantalla;',
            'tu nombre, tu correo electrónico ni datos de ninguna cuenta;',
            'tu ubicación: el GPS que aparece en tus fotos solo lo ves tú, en tu pantalla;',
            'un historial de los archivos que has revisado ni de cómo usas la herramienta.',
          ],
        },
        {
          heading: 'Lo que se guarda en tu navegador y cómo borrarlo',
          paragraphs: ['Para recordar tus elecciones, la web guarda dos pequeñas preferencias en tu dispositivo:'],
          bullets: [
            'Idioma: una entrada “lang” en el almacenamiento local y una cookie propia “lang”, que dura un año, para que la página de inicio se abra en el idioma que elegiste. Solo contiene un código de idioma como “es”.',
            'Tema: una entrada “theme” en el almacenamiento local si eliges el modo claro u oscuro.',
            'Para borrarlas, elimina las cookies y los datos de este sitio en los ajustes del navegador. AI Label Remover sigue funcionando; simplemente olvida tus elecciones.',
          ],
        },
        {
          heading: 'Cuando visitas la web',
          paragraphs: [
            'Como cualquier sitio web, cada vez que abres una página nuestro servidor necesita unos pocos datos técnicos básicos para enviártela: la dirección de red de tu dispositivo (dirección IP), el tipo de navegador que usas y la página que abres. Estos datos pueden registrarse temporalmente para que el sitio funcione bien y para frenar el tráfico abusivo, y solo se guardan el tiempo que eso requiere. No los usamos para identificarte, no creamos perfiles sobre ti y nunca los compartimos ni los vendemos.',
            'Al abrir la página de inicio, el servidor mira el idioma configurado en tu navegador, el idioma que elegiste antes y el país desde el que te conectas, solo para abrirte la versión en el idioma adecuado. Ocurre en el momento y no se guarda.',
          ],
        },
        {
          heading: 'Menores',
          paragraphs: [
            'AI Label Remover no pide ni recoge información personal de nadie, tampoco de menores. Los usuarios más jóvenes pueden usar la herramienta sin crear una cuenta ni dar ningún dato sobre sí mismos.',
          ],
        },
        {
          heading: 'Tus derechos',
          paragraphs: [
            'Como AI Label Remover no recoge tu nombre, tu correo ni ninguna cuenta, no tenemos ningún perfil tuyo que mostrar, corregir o borrar. Lo que la web recuerda en tu dispositivo está siempre bajo tu control. Los datos técnicos que se registran temporalmente al visitar la web no están vinculados a ningún nombre ni cuenta y se eliminan cuando ya no hacen falta para que el sitio funcione.',
          ],
        },
        {
          heading: 'Cambios en esta política',
          paragraphs: ['Si alguna vez cambia la forma en que AI Label Remover trata los datos, actualizaremos esta página y la fecha que aparece arriba.'],
        },
      ],
      updated: '2026-10-23',
    },
  },
};

export default es;
