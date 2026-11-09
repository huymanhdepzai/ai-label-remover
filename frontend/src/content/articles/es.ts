import type { Articles } from './types';

/** Artículos ampliados en español (los artículos base usan el resumen de seo.guides.items). */
const es: Articles = {
  'best-ai-metadata-removers-2026': {
      "title": "Las mejores herramientas para eliminar metadatos y etiquetas de IA en 2026",
      "metaTitle": "Mejores eliminadores de metadatos de IA en 2026",
      "summary": [
          "En 2026, con las etiquetas de IA y los manifiestos C2PA generalizados en redes sociales y cámaras, elegir la herramienta adecuada para limpiar metadatos es fundamental.",
          "Comparamos utilidades de terminal, programas de escritorio y soluciones en el navegador para lograr máxima privacidad y fotos libres de etiquetas automáticas."
      ],
      "description": "Comparativa de las mejores herramientas de metadatos de IA en 2026. Cómo AI Label Remover y AI Tag Cleaner aseguran el estado No AI Tag sin perder calidad.",
      "related": [
          "how-to-get-no-ai-tag",
          "made-with-ai-label",
          "what-is-c2pa-content-credentials"
      ],
      "sections": [
          {
              "heading": "Por qué los limpiadores tradicionales fallan ante las etiquetas de IA en 2026",
              "paragraphs": [
                  "Durante años, limpiar metadatos consistía en borrar datos de cámara y ubicación GPS. En 2026, las imágenes albergan bloques mucho más complejos: [manifiestos C2PA Content Credentials](what-is-c2pa-content-credentials), [campos IPTC DigitalSourceType](iptc-digitalsourcetype-ai) e instrucciones de modelos generativos.",
                  "Las herramientas antiguas ignoran los contenedores C2PA o recomprimen el archivo reduciendo su calidad. Cuando una red social detecta estos metadatos residuales, coloca automáticamente la etiqueta “Información de IA”."
              ]
          },
          {
              "heading": "AI Label Remover: El AI Tag Cleaner líder en navegador",
              "paragraphs": [
                  "AI Label Remover está diseñado específicamente para los metadatos modernos. Como un [AI tag cleaner](ai-tag-cleaner) avanzado, analiza y corta contenedores C2PA, marcas IPTC y coordenadas GPS directamente en tu navegador.",
                  "Dado que todo se ejecuta en local mediante Web Workers, tus fotos nunca se suben a ningún servidor. La secuencia de bytes se copia sin recodificar, garantizando una [eliminación de metadatos sin perder calidad](remove-metadata-without-losing-quality)."
              ],
              "bullets": [
                  "Cero subidas a servidores: Privacidad y confidencialidad total para fotos personales y profesionales.",
                  "Corte de bytes sin pérdidas: Conserva resolución exacta, perfiles de color ICC y nitidez.",
                  "Eliminación de firmas de IA: Suprime C2PA e IPTC que provocan [etiquetas de IA incorrectas](made-with-ai-label).",
                  "Procesamiento por lotes: Soporta hasta 50 archivos JPEG, PNG, WebP, GIF, HEIC y AVIF."
              ]
          },
          {
              "heading": "Comparativa: AI Label Remover frente a ExifTool y editores de escritorio",
              "paragraphs": [
                  "ExifTool es una utilidad de línea de comandos muy potente, pero su sintaxis resulta compleja para el uso diario y puede alterar estructuras si se usan parámetros erróneos.",
                  "Los programas de diseño recomprimen los píxeles al guardar, degradando el archivo. Además, herramientas como Adobe vuelven a insertar credenciales a menos que se [desactiven manualmente](turn-off-content-credentials-photoshop-lightroom).",
                  "AI Label Remover ofrece la rapidez de una web con la seguridad y privacidad de un software offline."
              ]
          },
          {
              "heading": "Cómo conseguir la condición “No AI Tag” en redes sociales",
              "paragraphs": [
                  "Para compartir fotos reales en Instagram o Facebook sin advertencias engañosas, obtener la condición [No AI Tag](no-ai-tag) en tus archivos es indispensable.",
                  "Pasar tus imágenes por un [AI tag cleaner](ai-tag-cleaner) elimina los desencadenantes técnicos antes de la publicación."
              ]
          },
          {
              "heading": "Pautas éticas y de transparencia",
              "paragraphs": [
                  "El uso de AI Label Remover busca salvaguardar la privacidad y rectificar falsos positivos generados por retoques mínimos. Si una obra es íntegramente creada con IA, debe señalarse de forma transparente según las normas comunitarias."
              ]
          }
      ],
      "faqHeading": "Preguntas frecuentes sobre herramientas de metadatos en 2026",
      "faq": [
          {
              "q": "¿En qué se diferencia AI Label Remover de los limpiadores EXIF clásicos?",
              "a": "Los limpiadores convencionales solo detectan cabeceras EXIF. AI Label Remover es un [AI tag cleaner](ai-tag-cleaner) capaz de suprimir bloques C2PA e IPTC sin recodificar píxeles."
          },
          {
              "q": "¿Eliminar metadatos asegura el estado No AI Tag en Instagram?",
              "a": "Elimina todos los desencadenantes a nivel de archivo (C2PA/IPTC), proporcionando una base limpia de [No AI Tag](no-ai-tag) sin marcas falsas."
          },
          {
              "q": "¿Es seguro para fotografías confidenciales?",
              "a": "Totalmente. La herramienta opera de forma exclusiva en tu navegador; ningún dato viaja por la red."
          },
          {
              "q": "¿Elimina las marcas invisibles SynthID?",
              "a": "No. Las marcas como SynthID modifican los píxeles y no se pueden suprimir mediante herramientas de metadatos."
          }
      ]
  },

  'how-to-get-no-ai-tag': {
      "title": "Cómo conseguir el estado “No AI Tag” en tus fotos: Guía de AI Tag Cleaner",
      "metaTitle": "No AI Tag en fotos: Guía de AI Tag Cleaner",
      "summary": [
          "Muchos fotógrafos y creadores ven cómo sus fotos auténticas reciben erróneamente la etiqueta de “Información de IA” en redes sociales.",
          "Esta guía detalla por qué los sistemas automatizados etiquetan tus fotos y cómo usar un AI Tag Cleaner para conseguir el estado “No AI Tag” sin perder calidad."
      ],
      "description": "Consigue que tus fotos reales tengan el estado No AI Tag en Instagram y Facebook. Usa AI Tag Cleaner y AI Label Remover para eliminar etiquetas de IA falsas.",
      "related": [
          "best-ai-metadata-removers-2026",
          "made-with-ai-label",
          "iptc-digitalsourcetype-ai"
      ],
      "sections": [
          {
              "heading": "Por qué tus fotos auténticas reciben etiquetas de IA no deseadas",
              "paragraphs": [
                  "Redes como Instagram, Facebook y TikTok escanean los archivos subidos. Si el detector halla un [campo IPTC DigitalSourceType](iptc-digitalsourcetype-ai) o un [manifiesto C2PA Content Credentials](what-is-c2pa-content-credentials), agrega de inmediato un aviso de IA.",
                  "El problema principal son los falsos positivos: utilizar el relleno generativo de Photoshop o el borrador mágico del móvil incrusta marcas de IA en el archivo. Aunque el 99% de la escena sea real, toda la foto queda marcada como sintética."
              ]
          },
          {
              "heading": "La solución No AI Tag: Inspección y limpieza de metadatos",
              "paragraphs": [
                  "Para asegurar un resultado verificado de [No AI Tag](no-ai-tag), es necesario suprimir los bloques exactos que activan los escáneres. Con AI Label Remover, basta con soltar las imágenes para ver un diagnóstico detallado.",
                  "El [visor de metadatos](image-metadata-viewer-online) desglosa privacidad, cámara y rastros de IA. Al pulsar limpiar, esos bloques se cortan limpiamente del archivo."
              ]
          },
          {
              "heading": "Por qué un AI Tag Cleaner supera a las capturas de pantalla",
              "paragraphs": [
                  "Hacer capturas de pantalla para eliminar metadatos [estropea la resolución y la gama dinámica](remove-metadata-without-losing-quality).",
                  "Un [AI tag cleaner](ai-tag-cleaner) específico mantiene el flujo de bytes intacto, conservando nitidez, espacio de color y resolución original."
              ]
          },
          {
              "heading": "Comportamiento de las plataformas en 2026",
              "paragraphs": [
                  "Las plataformas de Meta leen con rigor las credenciales C2PA e IPTC. TikTok y YouTube también identifican procedencias digitales.",
                  "Limpiar tus fotos con [AI Label Remover](ai-tag-cleaner) garantiza que tu trabajo original no sea etiquetado por error."
              ]
          },
          {
              "heading": "Transparencia y uso responsable",
              "paragraphs": [
                  "Buscar el estado No AI Tag es legítimo para corregir falsos positivos y proteger la privacidad. Sin embargo, si la imagen es generada íntegramente por IA, debe declararse con honestidad."
              ]
          }
      ],
      "faqHeading": "Preguntas frecuentes sobre No AI Tag y AI Tag Cleaners",
      "faq": [
          {
              "q": "¿Qué significa “No AI Tag” en una foto?",
              "a": "Significa que el archivo carece de manifiestos C2PA o metadatos IPTC que activen avisos automáticos de IA en redes sociales."
          },
          {
              "q": "¿Cómo sé si mi foto tiene etiquetas de IA antes de subirla?",
              "a": "Ábrela en AI Label Remover. La pestaña de inspección mostrará con precisión si existen registros C2PA o campos IPTC."
          },
          {
              "q": "¿Un AI Tag Cleaner reduce la resolución de la foto?",
              "a": "No. AI Label Remover corta los metadatos directamente del flujo binario sin recodificar píxeles, manteniendo el 100% de la calidad."
          },
          {
              "q": "¿Por qué Lightroom añade una etiqueta de IA a mis fotos RAW?",
              "a": "Las versiones recientes de Lightroom incorporan Content Credentials automáticamente al usar herramientas generativas de retoque."
          }
      ]
  },

  'made-with-ai-label': {
    metaTitle: 'Por qué fotos reales reciben la etiqueta de IA en Instagram',
    related: ['iptc-digitalsourcetype-ai', 'which-platforms-label-ai-images', 'turn-off-content-credentials-photoshop-lightroom'],
    description:
      'Una foto real con la etiqueta de IA «Información de IA» en Instagram o Facebook suele llevar un campo C2PA o IPTC escrito por un editor. Encuéntralo y elimínalo sin pérdida.',
    updated: '2026-10-23',
    sections: [
      {
        heading: 'La etiqueta lee tu archivo, no tu foto',
        paragraphs: [
          'La etiqueta de IA de Meta, «Información de IA» (antes «Hecho con IA»), se aplica cuando una subida contiene señales reconocidas de IA generativa. Dos de esas señales están dentro del propio archivo de imagen: [un manifiesto de Content Credentials C2PA](what-is-c2pa-content-credentials) y [la propiedad IPTC DigitalSourceType](iptc-digitalsourcetype-ai) guardada en XMP.',
          'El valor trainedAlgorithmicMedia indica que toda la imagen fue generada; compositeWithTrainedAlgorithmicMedia indica que una foto real tiene partes hechas con IA. Ambos se pueden leer automáticamente al subir. Meta también usa otras señales y pide a la gente que declare el contenido de IA realista, así que los metadatos del archivo son solo una de varias entradas.',
        ],
      },
      {
        heading: 'De dónde sale la señal',
        paragraphs: ['En fotos reales, el desencadenante casi siempre es la app de edición, no la cámara. Orígenes típicos:'],
        bullets: [
          'Usar Relleno generativo, Expansión generativa o una herramienta de borrado con IA, que pueden añadir acciones c2pa y marcar el archivo como composición.',
          '[Exportar con las Content Credentials activadas](turn-off-content-credentials-photoshop-lightroom), que firma en el archivo la lista de todas las ediciones.',
          'Funciones de la galería del móvil, como borradores con IA, que dejan un marcador de edición.',
          'Pasar el archivo por otras apps que copian los metadatos existentes, de modo que el marcador sobrevive a varios guardados.',
        ],
      },
      {
        heading: 'Localiza el campo en AI Label Remover',
        paragraphs: [
          'Coloca la imagen en la mesa de arriba. La pestaña “Rastros de IA” lista cada señal con su ubicación, por ejemplo “C2PA · compositeWithTrainedAlgorithmicMedia” o “XMP · Iptc4xmpExt › DigitalSourceType”. Cambia a “Metadatos en bruto” para leer los valores subyacentes, incluido el claim generator que firmó el manifiesto y cada acción c2pa registrada.',
          'El veredicto “Merece otra mirada” significa que hay Content Credentials sin una declaración explícita de IA. Algunas plataformas tratan igualmente ese manifiesto como pista, así que decide antes de publicar.',
        ],
      },
      {
        heading: 'Limpia la copia que publicas',
        paragraphs: [
          'Pulsa “Limpiar todas las imágenes”. AI Label Remover recorta del flujo de bytes el almacén C2PA y los bloques XMP, IPTC y EXIF, y deja intactos los píxeles, el tamaño, la rotación y el perfil de color. El archivo limpio se vuelve a leer para que veas que los rastros de IA han desaparecido antes de guardar. La página para [eliminar metadatos de IA](ai-tag-cleaner) detalla cada rastro que trata.',
          'Guardar de nuevo como JPEG también quitaría los metadatos, pero [recomprime la imagen cada vez](remove-metadata-without-losing-quality). Recortar bloques evita por completo esa pérdida.',
        ],
      },
      {
        heading: 'Corregir una etiqueta errónea no es ocultar una correcta',
        paragraphs: [
          'La limpieza sirve para etiquetas que describen mal tu trabajo y para mantener en privado los datos personales. Si una imagen está generada total o mayormente y podría pasar por real, las normas de las plataformas suelen esperar que lo digas: la etiqueta existe para informar a quien mira. Usa AI Label Remover para corregir errores, no para hacer pasar imágenes sintéticas por fotografías.',
        ],
      },
    ],
    faqHeading: 'Sobre la etiqueta de IA',
    faq: [
      { q: '¿Puedo quitar la etiqueta «Información de IA» después de publicar?', a: 'Normalmente no editando la publicación. Si la etiqueta describe mal una foto real, usa las opciones de apelación o estado de la cuenta de la plataforma cuando existan, y limpia el archivo antes de la próxima publicación.' },
      { q: 'Si limpio el archivo, ¿desaparece seguro la etiqueta?', a: 'No hay garantía. Limpiar elimina las señales guardadas en el archivo —la causa habitual en fotos editadas—, pero las plataformas pueden usar otra detección o pedirte que lo declares.' },
      { q: '¿Cambia la foto visualmente?', a: 'No. Solo se eliminan bloques de metadatos. Los datos de imagen se copian byte a byte y la rotación y el perfil de color ICC se conservan.' },
      { q: '¿Puedo conservar los ajustes de cámara y quitar solo los campos de IA?', a: 'Por ahora no. AI Label Remover elimina de una vez todos los metadatos identificativos —lugar, dispositivo, autor y procedencia IA—, la opción más segura para compartir en público. El tamaño, la rotación, el color y la animación se conservan siempre.' },
    ],
  },

  'remove-stable-diffusion-comfyui-metadata': {
    metaTitle: 'Eliminar workflows de ComfyUI y prompts de Stable Diffusion de PNG',
    related: ['image-metadata-viewer-online', 'hide-midjourney-dalle-prompts', 'what-metadata-ai-image-generators-add'],
    description:
      'A1111, Forge y ComfyUI escriben tu prompt, semilla, checkpoint y workflow completo en cada PNG. Mira el texto exacto y elimínalo sin cambiar un píxel.',
    updated: '2026-10-23',
    sections: [
      {
        heading: 'Tus ajustes viajan con la imagen',
        paragraphs: [
          'Los generadores locales guardan sus ajustes como texto dentro del resultado para poder recrear la imagen. En los PNG ese texto va en chunks tEXt, zTXt o iTXt junto a los datos de imagen. Lo que sueles encontrar:',
        ],
        bullets: [
          'A1111 y Forge: un chunk «parameters» con prompt, prompt negativo, pasos, sampler, CFG, semilla, resolución, hash y nombre del modelo, además de ajustes de LoRA y extensiones.',
          'ComfyUI: un chunk «prompt» con el grafo de nodos ejecutado y un chunk «workflow» con el diseño completo del editor; suelta el PNG en ComfyUI y reaparece toda la configuración.',
          'InvokeAI, NovelAI y otras interfaces: datos parecidos bajo sus propias claves.',
          'Exportaciones JPEG o WebP: algunas herramientas escriben el mismo texto en [EXIF UserComment](what-is-exif-data).',
        ],
      },
      {
        heading: 'Razones para limpiarlo y razones para no hacerlo',
        paragraphs: [
          'Los datos de generación son una receta completa. Permiten a cualquiera reproducir tu estilo, muestran en qué checkpoints y LoRAs te apoyas y pueden exponer rutas locales, nombres de carpeta o de usuario escondidos en un workflow. Los grafos grandes de ComfyUI también añaden decenas de kilobytes por imagen.',
          'Por otro lado, los sitios para compartir modelos leen los parámetros para mostrar la información de generación, y tus colaboradores pueden querer el workflow. Revisa cada archivo primero; [AI Label Remover lo muestra todo antes de eliminar nada](image-metadata-viewer-online).',
        ],
      },
      {
        heading: 'Leer el prompt en AI Label Remover',
        paragraphs: [
          'Coloca el PNG en la mesa. En “Metadatos en bruto” cada chunk de texto aparece bajo su clave —parameters, prompt, workflow— con todo su contenido, mientras la pestaña “Rastros de IA” lo marca como prompt de Stable Diffusion o workflow de ComfyUI. Los chunks comprimidos zTXt e iTXt se descomprimen en el navegador para que puedas leerlos.',
        ],
      },
      {
        heading: 'Qué se conserva al limpiar',
        paragraphs: [
          'Pulsa “Limpiar todas las imágenes”. El módulo PNG elimina como unidades completas los chunks de texto, XMP, EXIF y C2PA, y conserva IHDR, IDAT, paleta, transparencia, gamma y color, así como los chunks de animación APNG. Como los chunks se eliminan enteros, los CRC restantes siguen siendo válidos y el archivo se abre en todas partes. La página para [eliminar metadatos de PNG](png-metadata-remover) detalla cada chunk.',
          'Abrir y guardar de nuevo en un editor también perdería el texto, pero [recomprime la imagen y puede alterar los colores](remove-metadata-without-losing-quality). La eliminación a nivel de bytes evita ambas cosas.',
        ],
      },
    ],
    faqHeading: 'Sobre los datos de Stable Diffusion y ComfyUI',
    faq: [
      { q: '¿Cómo evito que A1111 o ComfyUI guarden metadatos?', a: 'A1111 y Forge tienen un ajuste que deja de escribir los parámetros de generación en los PNG, y ComfyUI puede iniciarse con la opción --disable-metadata. Ambos afectan solo a imágenes nuevas, así que limpia las que ya tienes.' },
      { q: '¿Puede ComfyUI reconstruir el workflow desde un PNG limpio?', a: 'No. Los chunks «prompt» y «workflow» ya no están, así que arrastrar el archivo a ComfyUI no restaura nada. Guarda un original sin limpiar si vas a necesitar el grafo.' },
      { q: '¿El PNG limpio se ve igual?', a: 'Sí. Los chunks IDAT con los píxeles comprimidos se copian sin cambios, así que la imagen es idéntica píxel a píxel.' },
      { q: '¿Y las exportaciones JPEG y WebP?', a: 'Los prompts guardados en EXIF UserComment o XMP también se detectan y se eliminan de los archivos JPEG y WebP.' },
    ],
  },

  'hide-midjourney-dalle-prompts': {
    metaTitle: 'Eliminar prompts de imágenes de Midjourney y DALL·E',
    related: ['chatgpt-gemini-image-metadata', 'what-metadata-ai-image-generators-add', 'synthid-invisible-ai-watermarks'],
    description:
      'Las descargas de Midjourney, DALL·E, ChatGPT y Firefly pueden contener tu prompt, el ID del trabajo y la procedencia IA. Mira qué lleva el archivo y límpialo antes de publicar.',
    updated: '2026-10-23',
    sections: [
      {
        heading: 'Qué escriben los generadores en línea',
        paragraphs: [
          'Los servicios de imágenes en línea marcan cada vez más las descargas con metadatos, por transparencia y para cumplir estándares de procedencia. Los campos exactos varían según el servicio y cambian con el tiempo, así que la única respuesta fiable es abrir el archivo. Lo que puedes encontrar:',
        ],
        bullets: [
          'Midjourney: el prompt y un ID de trabajo en campos de descripción o comentario, a menudo con un [IPTC DigitalSourceType](iptc-digitalsourcetype-ai) que marca la imagen como hecha con IA.',
          '[DALL·E y la generación de imágenes de ChatGPT](chatgpt-gemini-image-metadata): [Content Credentials C2PA](what-is-c2pa-content-credentials) que nombran al generador.',
          'Adobe Firefly: Content Credentials que describen la imagen como generada con IA.',
          'Muchas herramientas: el nombre del software, la fecha de creación y a veces un identificador vinculado a la cuenta.',
        ],
      },
      {
        heading: 'Un prompt es trabajo que vale la pena proteger',
        paragraphs: [
          'Para ilustradores, diseñadores y quienes escriben prompts, un prompt pulido es fruto de muchas rondas de prueba y error. Cualquier visor de metadatos gratuito muestra el texto incrustado a quien descargue tu imagen, listo para copiar. Los ID de trabajo y los datos de cuenta también pueden vincular una imagen pública contigo.',
        ],
      },
      {
        heading: 'Mira primero, limpia después',
        paragraphs: [
          'Coloca la imagen en la mesa y lee el informe. Las filas marcadas como «IA» contienen prompts, nombres de generadores y declaraciones de origen; las marcadas como «Personas», autores, descripciones e identificadores. Pulsa “Limpiar todas las imágenes” y guarda el archivo limpio, o guarda todo el lote en un ZIP. La página para [eliminar metadatos de IA](ai-tag-cleaner) explica cada tipo de rastro.',
          'Todo ocurre en tu navegador, así que los prompts que proteges no pasan por otro servicio más por el camino.',
        ],
      },
      {
        heading: 'Límites que conviene conocer',
        paragraphs: [
          'Algunos proveedores también ocultan marcas de agua en los píxeles, como [SynthID de Google](synthid-invisible-ai-watermarks). No son metadatos y la limpieza no las toca. Y si publicas una imagen de IA realista, las normas de la plataforma pueden pedirte que lo declares. Limpiar protege tu proceso; no cambia lo que es la imagen.',
        ],
      },
    ],
    faqHeading: 'Sobre los metadatos de Midjourney y DALL·E',
    faq: [
      { q: '¿Alguien puede leer mi prompt en una imagen descargada?', a: 'Si el prompt está en los metadatos del archivo, cualquiera con un visor de metadatos puede leerlo y copiarlo. Limpiar el archivo antes de compartirlo lo elimina.' },
      { q: '¿Todas las descargas de Midjourney contienen el prompt?', a: 'Depende del formato y del comportamiento actual del servicio. Abre el archivo en AI Label Remover para ver exactamente qué contiene.' },
      { q: '¿La limpieza elimina SynthID o marcas de agua similares?', a: 'No. Las marcas de agua invisibles están en los datos de píxeles, que AI Label Remover nunca modifica.' },
      { q: '¿Puedo limpiar un conjunto entero de generaciones?', a: 'Sí. Carga hasta 50 imágenes, revisa los informes y guárdalas todas en un ZIP.' },
    ],
  },

  'what-is-c2pa-content-credentials': {
    metaTitle: '¿Qué es C2PA? Content Credentials, explicado',
    related: ['iptc-digitalsourcetype-ai', 'turn-off-content-credentials-photoshop-lightroom', 'chatgpt-gemini-image-metadata'],
    description:
      'Guía sencilla de las Content Credentials C2PA: qué registra el manifiesto firmado, dónde lo guardan JPEG, PNG, WebP, HEIC y AVIF, cómo leerlo y qué hace eliminarlo.',
    updated: '2026-10-23',
    sections: [
      {
        heading: 'En pocas palabras',
        paragraphs: [
          'La Coalition for Content Provenance and Authenticity (C2PA) mantiene un estándar abierto para adjuntar a los archivos multimedia un historial a prueba de manipulaciones. Los usuarios lo ven como Content Credentials. Cámaras, editores y generadores de IA pueden firmar en una imagen un registro de cómo se creó: tomada con una cámara, editada en una app o producida por un modelo.',
        ],
      },
      {
        heading: 'Anatomía de un manifiesto',
        paragraphs: ['Un manifiesto es un paquete compacto y estructurado con tres partes principales:'],
        bullets: [
          'Claim generator: el software o servicio que creó el manifiesto, como un editor o una API de imágenes con IA.',
          'Assertions: afirmaciones sobre el contenido, como c2pa.actions (creado, editado, abierto, redimensionado…), [un digitalSourceType](iptc-digitalsourcetype-ai) y enlaces a archivos de origen.',
          'Firma: una firma criptográfica y un certificado que identifican al firmante, más un hash que vincula el manifiesto con los datos exactos de la imagen.',
        ],
      },
      {
        heading: 'Dónde lo guarda cada formato',
        paragraphs: [
          'El manifiesto va en un contenedor JUMBF que cada formato guarda en su propio sitio: segmentos APP11 en JPEG, un chunk caBX en PNG, un chunk C2PA en WebP y una caja uuid en HEIC y AVIF. Al ser un bloque aparte, se puede leer y eliminar sin decodificar la imagen. AI Label Remover muestra el bloque, el claim generator, las acciones registradas y el tipo de fuente cuando existen.',
        ],
      },
      {
        heading: 'Qué hace realmente eliminarlo',
        paragraphs: [
          '[Limpiar borra el registro incrustado](remove-c2pa-content-credentials) de esa copia del archivo. Ten en cuenta que cualquier edición ya rompe el vínculo criptográfico —los verificadores marcan como no válido un manifiesto que ya no coincide con sus píxeles—, así que quitarlo elimina un registro que, si no, seguiría viajando con el archivo.',
          'Algunos sistemas añaden credenciales «duraderas»: [una marca de agua invisible o una huella](synthid-invisible-ai-watermarks) que permite a un verificador recuperar el manifiesto de un repositorio en línea aunque la copia incrustada haya desaparecido. La limpieza de metadatos no les afecta, porque están en los píxeles o en un servidor remoto.',
        ],
      },
      {
        heading: '¿Conservarlo o limpiarlo?',
        paragraphs: [
          'Las credenciales son útiles cuando necesitas demostrar de dónde viene una imagen, en periodismo o con tus propias fotos originales. También pueden revelar software, historial de edición e identidad que prefieres guardarte, o [provocar etiquetas de IA en fotos apenas retocadas](made-with-ai-label). Lee primero el manifiesto y decide archivo por archivo.',
        ],
      },
    ],
    faqHeading: 'Sobre C2PA',
    faq: [
      { q: '¿Quién usa C2PA?', a: 'Adobe, Microsoft, Google, OpenAI, Meta, fabricantes de cámaras como Leica, Sony y Nikon, y muchos medios de comunicación apoyan el estándar o forman parte de la coalición, aunque cada uno lo usa de forma distinta.' },
      { q: '¿C2PA es una especie de marca de agua invisible?', a: 'No. C2PA son metadatos guardados junto a los datos de imagen. Las marcas de agua en píxeles como SynthID son un mecanismo distinto y la limpieza no les afecta.' },
      { q: '¿Cómo verifico la firma antes de limpiar?', a: 'AI Label Remover muestra el generador, las acciones y el tipo de fuente. Para validar la firma por completo, pasa antes el original por un verificador oficial de Content Credentials.' },
      { q: '¿Eliminar C2PA cuesta calidad?', a: 'No. El manifiesto es un bloque propio; los datos de imagen comprimidos se copian tal cual.' },
    ],
  },

  'remove-gps-location-from-photos': {
    metaTitle: 'Eliminar la ubicación GPS de fotos en iPhone, Android y PC',
    related: ['which-platforms-strip-photo-metadata', 'view-remove-metadata-iphone-android', 'remove-metadata-windows-mac'],
    description:
      'Elimina la ubicación GPS de tus fotos antes de compartir: qué campos EXIF revelan tu posición, dispositivo y hora, por dónde se filtran y cómo limpiarlos sin pérdida.',
    updated: '2026-10-23',
    sections: [
      {
        heading: 'Lo que el móvil graba en cada foto',
        paragraphs: ['Con la ubicación activada, una foto normal de smartphone puede contener:'],
        bullets: [
          'Latitud, longitud y altitud, a menudo con precisión de pocos metros, más una marca de tiempo GPS.',
          'El momento exacto en que se tomó y se editó por última vez.',
          'Marca y modelo, datos del objetivo y a veces un número de serie o el nombre del propietario.',
          'Vistas previas incrustadas e imágenes secundarias (mapas de profundidad, imágenes MPF) con su propia copia del EXIF.',
        ],
      },
      {
        heading: 'Cómo sale el archivo original',
        paragraphs: [
          'Los grandes feeds sociales suelen quitar el EXIF de lo que publican, pero muchas vías entregan el original intacto: [enviar «como archivo» o documento en apps de chat](which-platforms-strip-photo-metadata), adjuntos de correo, enlaces de nube compartidos, foros, portales de compraventa y webs de portafolio. Una sola foto hecha en casa puede revelar tu dirección; una serie, tu rutina.',
        ],
      },
      {
        heading: 'Comprueba qué datos GPS revela tu foto',
        paragraphs: [
          'Coloca la foto en la mesa. La pestaña “Qué revela” muestra al instante si hay campos de lugar, personas y hora, con la posición GPS convertida a coordenadas decimales. “Metadatos en bruto” lista todos los campos agrupados en [EXIF IFD0, Exif y GPS](what-is-exif-data).',
        ],
      },
      {
        heading: 'Límpiala sin efectos secundarios',
        paragraphs: [
          'Pulsa “Limpiar todas las imágenes”. [Los campos de GPS, fechas, dispositivo, autor y software](remove-exif-data) desaparecen, junto con las miniaturas incrustadas y las imágenes secundarias MPF que guardarían una copia oculta. La etiqueta de orientación se vuelve a escribir en un bloque EXIF mínimo para que los retratos no salgan girados, y el perfil de color se conserva para que los colores sigan siendo fieles. Los HEIC del iPhone se limpian sin convertirlos a JPEG; mira la página para [eliminar metadatos HEIC](heic-metadata-remover).',
        ],
      },
      {
        heading: 'Cortarlo desde la cámara',
        paragraphs: [
          'Puedes [desactivar el etiquetado de ubicación en los ajustes de la cámara](view-remove-metadata-iphone-android) o quitar la ubicación en un envío concreto con las opciones para compartir del móvil. Aun así, limpiar el archivo antes de enviarlo es el hábito más completo, porque también elimina los datos de dispositivo, hora y vistas previas que los ajustes del móvil dejan.',
        ],
      },
      {
        heading: 'Qué precisión tienen de verdad las coordenadas',
        paragraphs: [
          'El EXIF guarda la latitud y la longitud en grados, minutos y segundos, y los móviles registran los segundos con decimales. Un segundo de latitud equivale a unos 31 metros, así que un valor con dos decimales señala, sobre el papel, un punto de menos de un metro. La precisión real depende de la señal —a menudo de 3 a 10 metros al aire libre, peor en interiores—, pero sigue bastando para distinguir una sola casa. Muchos móviles añaden la altitud, que puede insinuar el piso, y la dirección hacia la que apuntaba el objetivo.',
        ],
      },
      {
        heading: 'Riesgos reales, no hipotéticos',
        paragraphs: ['Los datos de ubicación convierten fotos corrientes en un mapa de tu vida:'],
        bullets: [
          'La foto de algo que vendes, hecha en casa, da tu dirección a los compradores y a cualquiera que vea el anuncio.',
          'Una serie de fotos del gimnasio, la puerta del colegio o la oficina revela una rutina y sus horarios.',
          'Las fotos de vacaciones publicadas mientras estás fuera indican que tu casa está vacía.',
          'Las fotos de niños pueden revelar su colegio, su parque o su casa.',
        ],
      },
      {
        heading: 'La ubicación no solo está en las etiquetas GPS',
        paragraphs: [
          'Vaciar el directorio GPS no siempre basta. Los gestores de fotos pueden copiar las coordenadas en XMP, y campos IPTC como City, Sublocation y Country pueden nombrar el lugar en texto plano. AI Label Remover elimina XMP e IPTC junto con el EXIF, así que esas copias también desaparecen. Lo que ninguna herramienta de metadatos puede quitar es la propia imagen: carteles, números de portal, la vista desde una ventana o un reflejo pueden delatar un lugar, así que échale un vistazo antes de publicar.',
        ],
      },
      {
        heading: 'Una comprobación rápida antes de compartir',
        paragraphs: [],
        bullets: [
          'Coloca la foto en AI Label Remover y mira la pestaña “Qué revela”.',
          'Si aparece un lugar, pulsa “Limpiar todas las imágenes” y guarda la copia limpia.',
          'Comprueba que el panel verde confirma que lugar, personas y hora han desaparecido.',
          'Revisa la imagen en busca de pistas visibles: direcciones, matrículas, monumentos.',
          'Comparte la copia limpia y guarda el original en tu propia biblioteca.',
        ],
      },
    ],
    faqHeading: 'Sobre el GPS y la privacidad de las fotos',
    faq: [
      { q: '¿Se puede recuperar la ubicación después de limpiar?', a: 'No desde el archivo limpio: los campos se eliminan, no se ocultan. El original del móvil sigue teniéndola, así que comparte solo la copia limpia.' },
      { q: 'Si desactivo el GPS, ¿mis fotos siguen llevando ubicación?', a: 'Pueden llevarla. El móvil puede calcular la posición con wifi y redes móviles, así que quita el permiso de ubicación a la propia app de cámara, no solo el GPS.' },
      { q: '¿Cómo sé si una foto tiene datos GPS?', a: 'Colócala en AI Label Remover: la pestaña “Qué revela” muestra cualquier ubicación con coordenadas decodificadas. En el móvil, el panel de información de la foto muestra un mapa cuando hay GPS.' },
      { q: '¿Las redes sociales no quitan ya el GPS?', a: 'Muchas grandes quitan el EXIF de la imagen publicada. Los adjuntos, documentos y enlaces de nube suelen conservar los metadatos originales.' },
      { q: '¿La foto saldrá girada?', a: 'No. La etiqueta de orientación se conserva, así que la foto se ve exactamente igual que antes.' },
      { q: '¿Funcionan las fotos HEIC del iPhone?', a: 'Sí. Los HEIC y HEIF se limpian directamente, sin cambiar de formato ni recodificar.' },
    ],
  },

  'batch-remove-metadata': {
    metaTitle: 'Eliminar metadatos de imágenes en lote: gratis y sin subir nada',
    related: ['remove-metadata-without-losing-quality', 'remove-metadata-windows-mac', 'remove-gps-location-from-photos'],
    description:
      'Elimina metadatos en lote de hasta 50 imágenes en el navegador: cómo los workers en paralelo lo hacen rápido, cómo se revisa cada resultado y cómo guardar todo en un ZIP.',
    updated: '2026-10-23',
    sections: [
      {
        heading: 'Un lote, de principio a fin',
        paragraphs: [],
        bullets: [
          'Coloca hasta 50 archivos JPG, PNG, WebP, GIF, HEIC o AVIF en la mesa (25 MB y 40 MP cada uno).',
          'Cada uno se lee automáticamente; haz clic en cualquier archivo de la cola para ver su informe.',
          'Pulsa “Limpiar todas las imágenes” una vez para limpiar todo lo leído; es el mismo motor que la herramienta para [eliminar datos EXIF](remove-exif-data).',
          'Guarda los archivos uno a uno o pulsa “Guardar todo en ZIP” para obtener un único archivo.',
        ],
      },
      {
        heading: 'Velocidad sin servidor',
        paragraphs: [
          'AI Label Remover reparte el trabajo entre varios Web Workers —hilos en segundo plano del navegador— según los núcleos de tu CPU. Cada worker toma un archivo, lo analiza y devuelve los bytes limpios, así que la página sigue fluida incluso con HEIC pesados. El ZIP usa el método «store», porque las imágenes ya están comprimidas; se empaqueta rápido y [no añade más pérdida](remove-metadata-without-losing-quality).',
        ],
      },
      {
        heading: 'Cada resultado se vuelve a leer',
        paragraphs: [
          'Tras la limpieza, cada archivo resultante se vuelve a leer y el panel verde confirma si los datos de lugar, personas, hora y rastros de IA han desaparecido. Si dos archivos tienen el mismo nombre, la copia dentro del ZIP recibe un número para que no se sobrescriba nada.',
        ],
      },
      {
        heading: 'Cuando son cientos de archivos',
        paragraphs: [
          'Trabaja en tandas de 50 y vacía la mesa entre una y otra para liberar memoria. En móviles con poca memoria, cierra antes otras pestañas pesadas. Como no se sube nada, puedes incluso desconectarte una vez cargada la página.',
        ],
      },
      {
        heading: 'Nada sale del equipo',
        paragraphs: [
          'Ninguna imagen se sube, se guarda ni se registra; el único tráfico de red es la carga de la propia página. Por eso la limpieza en lote sirve para entregas a clientes, sesiones aún no publicadas y cualquier archivo que no puedas enviar a terceros.',
        ],
      },
    ],
    faqHeading: 'Sobre la limpieza en lote',
    faq: [
      { q: '¿Un lote puede mezclar formatos?', a: 'Sí. Un mismo lote puede mezclar JPG, PNG, WebP, GIF, HEIC y AVIF, y cada archivo conserva su formato.' },
      { q: '¿Por qué el límite de 50 archivos?', a: 'Todo el procesamiento usa la memoria de tu dispositivo. El límite mantiene estables los móviles y portátiles antiguos; puedes hacer tantas tandas como quieras.' },
      { q: '¿Cambian los nombres de archivo?', a: 'No. Los archivos limpios conservan su nombre. Solo los duplicados exactos dentro del ZIP reciben un sufijo numérico.' },
      { q: '¿Funciona sin conexión?', a: 'Sí. Una vez cargada, la página limpia archivos sin conexión, porque no se envía nada.' },
    ],
  },

  'chatgpt-gemini-image-metadata': {
    title: 'Imágenes de ChatGPT, Gemini y Nano Banana: qué metadatos llevan',
    metaTitle: 'Metadatos de imágenes de ChatGPT y Gemini: C2PA y SynthID',
    summary: [
      'Las imágenes creadas con ChatGPT o Google Gemini (Nano Banana incluido) salen del generador con información de procedencia: Content Credentials C2PA guardadas junto a la imagen y, en el caso de Google, una marca de agua invisible SynthID tejida en los píxeles.',
      'Esta guía muestra qué escribe normalmente cada proveedor, cómo leerlo en tu navegador, qué partes puede limpiar una herramienta de metadatos y qué partes ninguna herramienta honesta puede tocar.',
    ],
    description:
      'Qué metadatos llevan las imágenes de ChatGPT y Gemini (Nano Banana) —C2PA, SynthID, marcas visibles—, cómo leerlos y qué puede eliminar una limpieza.',
    related: ['synthid-invisible-ai-watermarks', 'what-metadata-ai-image-generators-add', 'how-to-check-if-image-is-ai-generated'],
    updated: '2026-10-23',
    sections: [
      {
        heading: 'Dos proveedores, dos capas de marcado',
        paragraphs: [
          'OpenAI y Google marcan las imágenes generadas, pero se apoyan en capas distintas. OpenAI confía sobre todo en las [Content Credentials C2PA](what-is-c2pa-content-credentials): un manifiesto firmado guardado en el archivo que nombra al generador e indica que la imagen fue creada por IA. Google confía sobre todo en [SynthID](synthid-invisible-ai-watermarks), una marca de agua invisible incrustada en los píxeles al generarla, y ha añadido metadatos C2PA a modelos recientes como Nano Banana Pro en la app Gemini y en sus productos en la nube.',
          'Las dos capas se comportan de forma muy diferente. Los metadatos ocupan su propio bloque, cualquier visor capaz puede leerlos y desaparecen en cuanto el archivo se recodifica o se limpia. Una marca de agua en los píxeles sobrevive a recortes, cambios de tamaño y compresión, y solo puede leerla el detector del propio proveedor.',
        ],
      },
      {
        heading: 'Qué suele contener una imagen de ChatGPT',
        paragraphs: ['Los campos exactos cambian entre versiones, pero un PNG o JPEG descargado directamente de ChatGPT o de la API de imágenes de OpenAI suele incluir:'],
        bullets: [
          'Un manifiesto C2PA —en un chunk caBX en PNG o en segmentos APP11 en JPEG— firmado con un certificado emitido a OpenAI.',
          'Un claim generator que nombra el servicio de OpenAI que produjo la imagen.',
          'Una acción c2pa.created con el tipo de fuente digital [trainedAlgorithmicMedia](iptc-digitalsourcetype-ai), la forma estándar de decir “hecho por un modelo generativo”.',
          'Si editas una foto subida, una entrada de ingrediente que apunta al original y acciones que describen la edición.',
        ],
      },
      {
        heading: 'Qué suele contener una imagen de Gemini o Nano Banana',
        paragraphs: [
          'Toda imagen generada por los modelos de Google lleva SynthID en los píxeles. Según el modelo, la app y el plan, también puedes encontrar una marca visible de destello en una esquina y, en los modelos más recientes, un manifiesto C2PA que describe la imagen como generada por IA. Google permite además preguntar a Gemini si una imagen lleva SynthID, que es la única forma fiable de comprobar la marca de agua.',
          'Como la marca visible y SynthID forman parte de la imagen, no les afecta nada que solo edite metadatos. El manifiesto C2PA, si existe, se comporta como cualquier otro bloque de metadatos.',
        ],
      },
      {
        heading: 'Por qué los metadatos suelen desaparecer solos',
        paragraphs: [
          'Los metadatos de procedencia son frágiles. Una captura de pantalla los elimina por completo. Muchas apps de chat y redes sociales recodifican lo que subes y limpian la copia pública. Incluso volver a subir un archivo a un asistente de chat puede dejar solo los datos de imagen. Por eso es habitual encontrar imágenes de ChatGPT o Gemini sin Content Credentials, y eso no demuestra nada sobre su origen: solo la descarga original conserva el registro completo.',
        ],
      },
      {
        heading: 'Lee el archivo antes de compartirlo',
        paragraphs: [
          'Coloca la imagen en la mesa de arriba. La pestaña “Rastros de IA” muestra si hay un manifiesto C2PA, qué claim generator lo firmó y qué tipo de fuente declara. “Metadatos en bruto” lista las acciones registradas y los ingredientes, además de los campos EXIF y XMP que hayan añadido las apps por las que pasó el archivo. No se sube nada; el archivo se lee dentro de tu navegador.',
        ],
      },
      {
        heading: 'Qué elimina la limpieza y qué se queda',
        paragraphs: ['Al pulsar “Limpiar todas las imágenes” —o usar el [eliminador de metadatos de IA](ai-tag-cleaner)—, los metadatos se recortan del flujo de bytes sin redibujar la imagen. En la práctica:'],
        bullets: [
          'Se elimina: el manifiesto C2PA, los campos XMP e IPTC, el EXIF y cualquier texto que nombre la herramienta o contenga un prompt.',
          'Se conserva: los datos de píxeles, las dimensiones, la rotación y el perfil de color ICC, así que la imagen se ve idéntica.',
          'No se ve afectado: SynthID ni la marca visible de destello, porque ambos viven en los píxeles. Los verificadores del proveedor siguen reconociendo la imagen por su marca de agua.',
        ],
      },
      {
        heading: 'Usa las imágenes de IA con honestidad',
        paragraphs: [
          'Limpiar es una herramienta de privacidad: evita que prompts, datos de cuenta e historial de edición viajen con el archivo. No cambia lo que es la imagen. Si publicas una imagen de IA realista, la mayoría de plataformas esperan que lo indiques, y algunas limitan el alcance de las cuentas que no lo hacen. Corrige etiquetas erróneas en fotos reales; etiqueta con claridad el trabajo hecho con IA.',
        ],
      },
    ],
    faqHeading: 'Sobre los metadatos de imágenes de ChatGPT y Gemini',
    faq: [
      { q: '¿Todas las imágenes de ChatGPT incluyen C2PA?', a: 'Las imágenes descargadas directamente de la generación de imágenes de OpenAI suelen incluir Content Credentials. Las copias hechas con captura de pantalla, guardadas de nuevo o pasadas por otras apps a menudo las pierden.' },
      { q: '¿Puede AI Label Remover quitar SynthID de las imágenes de Gemini?', a: 'No. SynthID está incrustado en los píxeles y AI Label Remover nunca cambia píxeles. Solo elimina metadatos como C2PA, XMP y EXIF.' },
      { q: '¿Cómo compruebo si una imagen viene de Gemini?', a: 'Busca primero un manifiesto C2PA en AI Label Remover. Para SynthID, usa la verificación del propio Google, por ejemplo preguntando a Gemini por la imagen.' },
      { q: '¿Limpiar una imagen de ChatGPT reduce su calidad?', a: 'No. Solo se eliminan bloques de metadatos; los datos comprimidos de la imagen se copian sin cambios, así que el resultado es idéntico píxel a píxel.' },
    ],
  },

  'remove-metadata-windows-mac': {
    title: 'Cómo eliminar los metadatos de fotos en Windows y Mac',
    metaTitle: 'Eliminar metadatos de fotos en Windows 11 y Mac',
    summary: [
      'Windows y macOS traen una forma de quitar algunos metadatos de las fotos, pero cada una cubre solo parte del trabajo: Windows se centra en las propiedades EXIF y macOS en la ubicación.',
      'Aquí tienes los pasos exactos de las herramientas integradas, el método gratuito por línea de comandos que usan los profesionales y un método en el navegador que funciona igual en ambos sistemas y además elimina C2PA, XMP y prompts de IA.',
    ],
    description:
      'Paso a paso: elimina EXIF, GPS y otros metadatos de fotos en Windows 11/10 y macOS con herramientas integradas, ExifTool o el navegador, y lo que se le escapa a cada una.',
    related: ['view-remove-metadata-iphone-android', 'remove-metadata-without-losing-quality', 'what-is-exif-data'],
    updated: '2026-10-23',
    sections: [
      {
        heading: 'Sabe qué estás eliminando',
        paragraphs: [
          'Una foto puede llevar varios tipos de metadatos a la vez: [EXIF](what-is-exif-data) (cámara, hora, GPS), XMP (historial de edición, descripciones, campos de IA), IPTC (pies de foto, derechos, [DigitalSourceType](iptc-digitalsourcetype-ai)), [Content Credentials C2PA](what-is-c2pa-content-credentials) y, en los PNG, chunks de texto con prompts de IA. Las herramientas del sistema se diseñaron pensando en EXIF, así que tienden a dejar los demás tipos. Tenlo en cuenta al elegir un método.',
        ],
      },
      {
        heading: 'Windows 11 y 10: Explorador de archivos',
        paragraphs: ['El Explorador de archivos tiene un eliminador integrado para las propiedades más comunes:'],
        bullets: [
          'Selecciona una o varias fotos, haz clic derecho y elige Propiedades.',
          'Abre la pestaña Detalles y pulsa “Quitar propiedades e información personal” en la parte inferior.',
          'Elige “Crear una copia con todas las propiedades posibles quitadas” para obtener un duplicado limpio, o “Quitar las siguientes propiedades de este archivo” para marcar campos concretos.',
          'Pulsa Aceptar y abre la pestaña Detalles de la copia para confirmar que los campos de GPS y cámara están vacíos.',
        ],
      },
      {
        heading: 'Dónde se queda corto el método de Windows',
        paragraphs: [
          'La opción funciona mejor con JPEG y TIFF. Con PNG, WebP, HEIC y AVIF puede mostrar poco o nada que quitar. También puede dejar paquetes XMP, manifiestos C2PA y miniaturas incrustadas, y no informa de lo que queda. La app Fotos no ofrece una exportación que elimine metadatos.',
        ],
      },
      {
        heading: 'macOS: Vista Previa y Fotos',
        paragraphs: ['En un Mac, las opciones integradas apuntan a la ubicación:'],
        bullets: [
          'Vista Previa: abre la foto, elige Herramientas › Mostrar inspector, abre la pestaña de ubicación (GPS), pulsa “Eliminar información de ubicación” y guarda.',
          'Fotos: selecciona las imágenes y elige Imagen › Ubicación › Ocultar ubicación, o usa Archivo › Exportar sin marcar la información de ubicación para que la copia exportada no tenga GPS.',
          'Obtener información en el Finder y el inspector de Vista Previa sirven para comprobar el resultado, pero ambos muestran solo una parte de los campos.',
        ],
      },
      {
        heading: 'Dónde se queda corto el método de Mac',
        paragraphs: [
          'Quitar la ubicación deja el modelo del dispositivo, la hora de la toma, el software y el historial de edición. Exportar a JPEG desde Vista Previa o Fotos [vuelve a codificar la imagen](remove-metadata-without-losing-quality), lo que cuesta algo de calidad cada vez, y los archivos HEIC pueden convertirse si no eliges lo contrario.',
        ],
      },
      {
        heading: 'Línea de comandos en ambos: ExifTool',
        paragraphs: [
          'ExifTool es una herramienta de metadatos gratuita y veterana para Windows, macOS y Linux. Edita los archivos sin recodificarlos. Comandos útiles:',
        ],
        bullets: [
          'exiftool -all= foto.jpg — elimina todos los metadatos editables y guarda una copia de seguridad llamada foto.jpg_original.',
          'exiftool -all= --icc_profile:all -tagsfromfile @ -orientation foto.jpg — elimina todo excepto el perfil de color y la orientación, para que los colores y la rotación sigan bien.',
          'exiftool -all= -r "C:\\Fotos\\Compartir" — limpia una carpeta entera, subcarpetas incluidas.',
        ],
      },
      {
        heading: 'Método en el navegador: los mismos pasos en cualquier ordenador',
        paragraphs: [
          'Si no puedes instalar software —en un portátil del trabajo, por ejemplo— o quieres un único método para todos los formatos, abre AI Label Remover en Chrome, Edge, Safari o Firefox. Suelta hasta 50 imágenes, lee el informe, pulsa “Limpiar todas las imágenes” y guarda los archivos o un ZIP. [Elimina EXIF](remove-exif-data), GPS, XMP, IPTC, C2PA y los chunks de prompts PNG de JPEG, PNG, WebP, GIF, HEIC y AVIF, conserva la orientación y el perfil de color, y todo ocurre en tu equipo.',
        ],
      },
      {
        heading: 'Qué método elegir',
        paragraphs: [],
        bullets: [
          'Un JPEG, solo lo básico: Explorador de archivos en Windows, Vista Previa en Mac.',
          'Solo la ubicación, directamente desde tu fototeca: Fotos en Mac.',
          'Scripts, servidores o miles de archivos: ExifTool.',
          'Formatos mezclados, metadatos de IA o sin permiso para instalar: una herramienta local en el navegador como AI Label Remover.',
        ],
      },
    ],
    faqHeading: 'Sobre eliminar metadatos en el ordenador',
    faq: [
      { q: '¿“Quitar propiedades e información personal” borra el GPS?', a: 'Sí, en archivos JPEG elimina el GPS junto con otras propiedades EXIF. Revisa la pestaña Detalles del resultado, porque pueden quedar algunos datos XMP.' },
      { q: '¿Puedo quitar metadatos de fotos HEIC en Windows?', a: 'El Explorador de archivos tiene un soporte limitado de HEIC. ExifTool o una herramienta de navegador compatible con HEIC, como AI Label Remover, los eliminan sin convertir el archivo.' },
      { q: '¿Exportar desde Vista Previa elimina todos los metadatos?', a: 'No de forma fiable. La exportación puede quitar algunos campos y dejar otros, y recomprime los JPEG. Revisa el archivo exportado antes de compartirlo.' },
      { q: '¿Qué método conserva la calidad de imagen?', a: 'El Explorador de archivos, ExifTool y AI Label Remover editan los metadatos sin recodificar. Exportar un JPEG nuevo desde un editor o visor recomprime la imagen.' },
    ],
  },

  'image-metadata-viewer-online': {
    title: 'Visor de metadatos de imágenes: EXIF, GPS, XMP, IPTC y C2PA en un solo lugar',
    metaTitle: 'Visor de metadatos de imágenes: EXIF, GPS y datos de IA',
    summary: [
      'Antes de compartir una foto o fiarte de una imagen, un buen visor de metadatos te muestra todo lo que el archivo dice de sí mismo, no solo el puñado de campos que muestra el móvil o el explorador de archivos.',
      'Esta guía explica qué cubre una comprobación completa, dónde se quedan los visores integrados, por qué muchos visores EXIF online son en sí un riesgo para la privacidad y cómo leer los campos que importan.',
    ],
    description:
      'Visor de metadatos gratis: ve los campos EXIF, GPS, XMP, IPTC, C2PA y prompts de IA en tu navegador, sin subir nada, y lo que omiten los visores integrados.',
    related: ['what-is-exif-data', 'how-to-check-if-image-is-ai-generated', 'remove-gps-location-from-photos'],
    updated: '2026-10-23',
    sections: [
      {
        heading: 'Qué cubre una comprobación completa',
        paragraphs: ['Un visor de metadatos completo lee todos los bloques del archivo, no solo el EXIF:'],
        bullets: [
          'EXIF: modelo de cámara o móvil, exposición, hora de la toma, objetivo y orientación.',
          'GPS: latitud, longitud, altitud y dirección, si la ubicación estaba activada.',
          'XMP: software de edición, historial, descripciones, valoraciones y campos de IA.',
          'IPTC: pies de foto, palabras clave, autor, copyright y [DigitalSourceType](iptc-digitalsourcetype-ai).',
          'C2PA: [Content Credentials](what-is-c2pa-content-credentials): quién firmó el archivo, qué acciones se registraron y si intervino la IA.',
          'Chunks de texto PNG: [parámetros de Stable Diffusion, flujos de ComfyUI](remove-stable-diffusion-comfyui-metadata) y otro texto incrustado.',
          'Perfil ICC y miniaturas: información de color e imágenes de vista previa ocultas.',
        ],
      },
      {
        heading: 'Los visores integrados y sus puntos ciegos',
        paragraphs: [
          'Windows muestra los metadatos en Propiedades › Detalles; macOS en el inspector de Vista Previa u Obtener información del Finder; el iPhone al deslizar hacia arriba sobre una foto; Google Fotos en el panel de detalles. Sirven para echar un vistazo a la fecha, la cámara y la ubicación, pero muestran una selección del EXIF y suelen ignorar por completo XMP, IPTC, C2PA y el texto PNG. Un archivo puede parecer limpio en el Explorador y llevar un prompt de IA entero.',
        ],
      },
      {
        heading: 'La trampa de privacidad de los visores EXIF online',
        paragraphs: [
          'Muchas webs de “visor EXIF online” funcionan subiendo tu imagen a su servidor, leyéndola allí y devolviendo un informe. Para una comprobación de privacidad eso es al revés: la foto que te preocupa —con su posición GPS— ya se ha copiado a un tercero. Elige un visor que lea el archivo localmente. Una prueba sencilla: carga la página, desconéctate de internet y comprueba si el visor sigue funcionando.',
        ],
      },
      {
        heading: 'Leer un archivo en AI Label Remover',
        paragraphs: ['Coloca la imagen en la mesa de arriba. Tres pestañas organizan el resultado:'],
        bullets: [
          '“Qué revela”: un resumen claro de lugar, personas, hora y dispositivo, con el GPS convertido a coordenadas decimales.',
          '“Rastros de IA”: manifiestos C2PA, tipos de fuente IPTC, nombres de generadores y prompts, con un veredicto.',
          '“Metadatos en bruto”: todos los campos agrupados por origen: EXIF IFD0, Exif, GPS, espacios de nombres XMP, IPTC, C2PA y chunks de texto PNG.',
        ],
      },
      {
        heading: 'Los campos que conviene leer primero',
        paragraphs: [],
        bullets: [
          'GPSLatitude / GPSLongitude: [el lugar exacto](remove-gps-location-from-photos); pégalo en un mapa para ver lo que revela.',
          'DateTimeOriginal frente a ModifyDate: cuándo se hizo la foto frente a cuándo se guardó por última vez.',
          'Make, Model, BodySerialNumber, LensSerialNumber: pueden vincular fotos a un mismo dispositivo.',
          'Artist, Copyright, OwnerName: nombres que quizá no sabías que estaban incrustados.',
          'Software y CreatorTool: qué apps tocaron el archivo, herramientas de IA incluidas.',
          'DigitalSourceType y el claim generator de C2PA: cómo dice la imagen que se creó.',
        ],
      },
      {
        heading: 'Cuando el visor no muestra casi nada',
        paragraphs: [
          'Una imagen guardada de un feed social, una captura de pantalla o un archivo enviado por una app de chat suele estar recodificada y limpia. En esos casos es normal que haya pocos o ningún metadato, y eso no dice nada sobre si la imagen es real, editada o generada por IA. Pide el archivo original si el origen importa.',
        ],
      },
      {
        heading: 'Ver no es verificar',
        paragraphs: [
          'Los metadatos corrientes son texto plano que cualquiera puede editar, así que tómalos como pistas, no como pruebas. C2PA es distinto porque va firmado, pero que un visor muestre el manifiesto no equivale a validar la firma; para eso usa un verificador oficial de Content Credentials. Cuando hayas visto suficiente y quieras que esos datos desaparezcan, pulsa “Limpiar todas las imágenes” para eliminarlos sin cambiar la imagen; la página para [eliminar datos EXIF](remove-exif-data) explica qué se elimina exactamente.',
        ],
      },
    ],
    faqHeading: 'Sobre ver los metadatos de una imagen',
    faq: [
      { q: '¿Hay un visor de metadatos gratuito que no suba mi foto?', a: 'Sí. AI Label Remover lee los archivos dentro de tu navegador, sin subirlos y sin cuenta, y sigue funcionando sin conexión una vez cargada la página.' },
      { q: '¿Puedo ver el prompt de una imagen de IA?', a: 'Si el generador lo guardó, sí. Los prompts de Stable Diffusion y ComfyUI aparecen en los chunks de texto PNG, y algunos servicios los guardan en campos XMP o EXIF.' },
      { q: '¿Por qué Windows no muestra metadatos de mi PNG?', a: 'El Explorador de archivos solo muestra unas pocas propiedades de los PNG. Los chunks de texto, el XMP y el C2PA no se ven ahí, pero aparecen en un visor completo.' },
      { q: '¿Pueden los metadatos decirme si una foto es falsa?', a: 'Pueden dar pistas sólidas, como un claim generator de IA, pero unos metadatos ausentes o editados no demuestran nada por sí solos.' },
    ],
  },

  'iptc-digitalsourcetype-ai': {
    title: 'IPTC DigitalSourceType: el campo que dice a las plataformas que una imagen es de IA',
    metaTitle: 'IPTC DigitalSourceType y trainedAlgorithmicMedia',
    summary: [
      'DigitalSourceType es un pequeño campo de metadatos IPTC con un gran efecto: un solo valor como trainedAlgorithmicMedia basta para que muchas plataformas etiqueten una imagen como generada por IA.',
      'Esta guía recoge los valores que encontrarás, quién escribe y quién lee el campo, por qué es fácil cambiarlo y cómo localizarlo o eliminarlo en un archivo.',
    ],
    description:
      'Qué significa el campo IPTC DigitalSourceType, los valores trainedAlgorithmicMedia y compositeWithTrainedAlgorithmicMedia, quién lo lee y cómo encontrarlo o eliminarlo.',
    related: ['made-with-ai-label', 'what-is-c2pa-content-credentials', 'which-platforms-label-ai-images'],
    updated: '2026-10-23',
    sections: [
      {
        heading: 'Un campo, una lista cerrada de respuestas',
        paragraphs: [
          'DigitalSourceType forma parte del estándar IPTC Photo Metadata, el vocabulario que usan redacciones, agencias de stock y programas de fotografía para describir imágenes. Responde a una sola pregunta: ¿cómo se creó este contenido? La respuesta no es texto libre sino un término del vocabulario controlado “digital source type” de IPTC, escrito como un URI del tipo http://cv.iptc.org/newscodes/digitalsourcetype/trainedAlgorithmicMedia.',
          'En los archivos de imagen el campo se guarda en XMP como Iptc4xmpExt:DigitalSourceType. Las [Content Credentials C2PA](what-is-c2pa-content-credentials) reutilizan el mismo vocabulario dentro de sus acciones firmadas, así que los mismos términos aparecen en ambos sitios.',
        ],
      },
      {
        heading: 'Los valores que encontrarás',
        paragraphs: ['El vocabulario ha crecido con los años. Los términos más relevantes para las etiquetas de IA son:'],
        bullets: [
          'trainedAlgorithmicMedia: creado por un modelo generativo entrenado con contenido de ejemplo.',
          'compositeWithTrainedAlgorithmicMedia: una composición que incluye elementos de IA generativa, por ejemplo [una foto editada con Relleno generativo](turn-off-content-credentials-photoshop-lightroom).',
          'algorithmicMedia: creado solo por un algoritmo sin datos de entrenamiento, como el arte procedural o fractal.',
          'compositeSynthetic: una composición que incluye elementos sintéticos.',
          'algorithmicallyEnhanced: mejora o corrección menor hecha por un algoritmo.',
          'digitalCapture: capturado por una cámara digital o un escáner a partir de una escena real.',
          'computationalCapture: una captura procesada por algoritmos en el momento de tomarla, como hacen muchos móviles.',
          'digitalArt y screenCapture: obra hecha por una persona con software, y capturas de pantalla.',
        ],
      },
      {
        heading: 'Quién lo escribe',
        paragraphs: [
          'Varios servicios de imágenes con IA escriben trainedAlgorithmicMedia en sus resultados. Los editores con herramientas generativas pueden registrar un valor de composición tras una edición con IA. Los bancos de imágenes y las agencias de noticias lo rellenan al incorporar el material, y algunos marketplaces piden a los vendedores que marquen así las imágenes de IA. El campo también puede arrastrarse sin que nadie lo note: una vez puesto, sobrevive a cualquier app que conserve el XMP.',
        ],
      },
      {
        heading: 'Quién lo lee',
        paragraphs: [
          'Meta ha dicho que usa los metadatos IPTC junto con C2PA para decidir si muestra [“Info de IA”](made-with-ai-label) en Facebook, Instagram y Threads. [Otras plataformas](which-platforms-label-ai-images), buscadores y servicios de compras han anunciado un uso parecido del campo para indicar contenido de IA. Por eso una foto real apenas retocada que lleva compositeWithTrainedAlgorithmicMedia puede acabar etiquetada igual que una imagen generada por completo.',
        ],
      },
      {
        heading: 'Sin firma, así que fácil de cambiar',
        paragraphs: [
          'A diferencia de un manifiesto C2PA, los metadatos IPTC normales no llevan firma. Cualquier editor de metadatos puede añadir, cambiar o eliminar DigitalSourceType, y muchas apps lo descartan al guardar de nuevo. Trata el campo como una declaración, no como una prueba, diga “IA” o diga “cámara”.',
        ],
      },
      {
        heading: 'Encontrarlo y eliminarlo',
        paragraphs: [
          'Coloca la imagen en AI Label Remover. En “Rastros de IA” el campo aparece como “XMP · Iptc4xmpExt › DigitalSourceType” con su valor; el mismo término dentro de un manifiesto C2PA se muestra bajo C2PA. Al pulsar “Limpiar todas las imágenes” se elimina todo el paquete XMP y el almacén C2PA, y el campo se va con ellos, junto con el EXIF y otros datos identificativos. La página para [eliminar metadatos de IA](ai-tag-cleaner) cubre también los demás campos de IA.',
          'Si solo necesitas quitar este campo y conservar el resto del XMP, una herramienta de línea de comandos puede hacerlo: exiftool -XMP-iptcExt:DigitalSourceType= foto.jpg. Recuerda que puede haber un valor equivalente dentro de un manifiesto C2PA.',
        ],
      },
      {
        heading: 'Cuándo debe quedarse',
        paragraphs: [
          'El campo existe para que quien mira sepa cómo se hizo la imagen. Si una imagen realmente está generada o muy alterada por IA, conserva la declaración o indícalo al publicar. Quitarlo es apropiado cuando describe mal tu trabajo o cuando estás limpiando datos privados de un archivo.',
        ],
      },
    ],
    faqHeading: 'Sobre IPTC DigitalSourceType',
    faq: [
      { q: '¿Qué significa trainedAlgorithmicMedia?', a: 'Es el término IPTC para el contenido creado por un modelo de IA generativa: una imagen generada por completo con IA.' },
      { q: '¿Por qué mi foto editada dice compositeWithTrainedAlgorithmicMedia?', a: 'Porque se registró una edición generativa, como eliminar un objeto con IA. El término marca una composición que incluye partes generadas por IA, sea cual sea su tamaño.' },
      { q: '¿DigitalSourceType es lo mismo que C2PA?', a: 'No. DigitalSourceType es un campo IPTC, normalmente sin firma, guardado en XMP. C2PA es un manifiesto firmado que puede contener el mismo vocabulario dentro de sus acciones.' },
      { q: '¿Puedo eliminar solo DigitalSourceType con AI Label Remover?', a: 'Por ahora no. AI Label Remover elimina todo el XMP y el C2PA de una vez. ExifTool puede borrar ese campo concreto si necesitas conservar otros datos XMP.' },
    ],
  },

  'remove-metadata-without-losing-quality': {
    title: 'Eliminar metadatos sin perder calidad: por qué las capturas y volver a guardar perjudican',
    metaTitle: 'Eliminar metadatos de imágenes sin perder calidad',
    summary: [
      'Las formas rápidas de quitar metadatos —hacer una captura, volver a guardar en un editor, pasar el archivo por un conversor online— vuelven a dibujar la imagen. Pierdes los metadatos, pero también nitidez, resolución o fidelidad de color.',
      'Esta guía explica por qué ocurre, cómo eliminar metadatos sin perder calidad y cómo comprobar por ti mismo que no ha cambiado ni un píxel.',
    ],
    description:
      'Elimina EXIF, GPS, C2PA y metadatos de IA sin perder calidad: por qué las capturas y volver a guardar pierden calidad, cómo funciona la eliminación sin pérdida y cómo verificarla.',
    related: ['batch-remove-metadata', 'remove-metadata-windows-mac', 'what-is-exif-data'],
    updated: '2026-10-23',
    sections: [
      {
        heading: 'Metadatos y píxeles viven separados',
        paragraphs: [
          'Todos los formatos de imagen comunes separan la imagen de las notas sobre ella. Un JPEG es una serie de segmentos con marcadores: los metadatos en APP1, APP11 y APP13, y la imagen comprimida tras el marcador SOS. Un PNG es una lista de chunks, con los píxeles en IDAT y el texto en tEXt, zTXt o iTXt. WebP usa chunks RIFF, y HEIC y AVIF usan cajas ISOBMFF. Como ambas cosas se guardan por separado, los metadatos se pueden quitar sin decodificar la imagen.',
        ],
      },
      {
        heading: 'Los atajos habituales y lo que cuestan',
        paragraphs: [],
        bullets: [
          'Captura de pantalla: elimina todos los metadatos, pero captura a la resolución de la pantalla, puede recortar o escalar, puede alterar los colores y puede incluir notificaciones u otro contenido.',
          'Volver a guardar o exportar como JPEG: decodifica y recomprime la imagen; cada generación añade artefactos y puede perderse el perfil ICC, con lo que cambian los colores.',
          'Conversores online: recodifican la imagen y normalmente la suben antes a un servidor.',
          'Conversión de formato, por ejemplo [de HEIC a JPEG](view-remove-metadata-iphone-android): cambia la compresión y a menudo pierde el color de gama amplia o la transparencia.',
        ],
      },
      {
        heading: 'Cómo eliminar metadatos sin perder calidad',
        paragraphs: [
          'Un limpiador sin pérdida recorre la estructura del archivo y copia cada bloque que describe la imagen, saltándose solo los bloques con metadatos. En JPEG eso significa quitar APP1 con EXIF y XMP, APP11 con C2PA, APP13 con IPTC y los comentarios, mientras se copian intactas las tablas de cuantización, las tablas Huffman y los datos de escaneo. En PNG se eliminan chunks completos de texto y metadatos, así que el CRC de cada chunk restante sigue siendo válido. En HEIC y AVIF se eliminan los ítems de metadatos y se reescriben los desplazamientos internos para que los datos de imagen sigan apuntando al lugar correcto.',
          'AI Label Remover funciona así en tu navegador, tanto para [eliminar datos EXIF](remove-exif-data) como para [eliminar metadatos de PNG](png-metadata-remover). El resultado contiene exactamente los mismos datos de imagen comprimidos que la entrada.',
        ],
      },
      {
        heading: 'Tres cosas que un buen limpiador conserva',
        paragraphs: [],
        bullets: [
          'Orientación: muchas fotos de móvil se guardan de lado con [una etiqueta EXIF](what-is-exif-data) que indica a los visores que las giren. Si se pierde, los retratos aparecen girados. AI Label Remover vuelve a escribir la etiqueta en un bloque EXIF mínimo.',
          'Perfil de color: el perfil ICC indica a las apps cómo interpretar los colores, sobre todo en fotos de móvil Display P3. Sin él, las imágenes pueden verse apagadas o sobresaturadas.',
          'Animación y transparencia: los fotogramas de APNG, WebP animado y GIF, y los canales alfa, deben sobrevivir intactos.',
        ],
      },
      {
        heading: 'Cómo comprobar que de verdad fue sin pérdida',
        paragraphs: ['No tienes que fiarte de lo que diga una herramienta:'],
        bullets: [
          'Compara las dimensiones: el ancho y el alto deben ser idénticos.',
          'Compara el tamaño del archivo: el archivo limpio solo debe ser más pequeño en aproximadamente el tamaño de los metadatos eliminados, nunca mucho más pequeño.',
          'Compara los píxeles: abre ambos en un editor como capas con el modo de fusión Diferencia; un resultado sin pérdida es negro puro.',
          'Vuelve a leer el archivo: [AI Label Remover relee cada archivo limpio](batch-remove-metadata) y muestra qué campos quedan.',
        ],
      },
      {
        heading: 'De dónde sale el ahorro de tamaño',
        paragraphs: [
          'Eliminar metadatos puede reducir bastante el tamaño de los archivos. Las miniaturas incrustadas y las vistas previas MPF de los JPEG de cámara, los largos historiales de edición XMP y los grandes [flujos de ComfyUI](remove-stable-diffusion-comfyui-metadata) en los PNG pueden sumar decenas o cientos de kilobytes. Quitarlos encoge el archivo sin cambiar lo que ves.',
        ],
      },
    ],
    faqHeading: 'Sobre la eliminación de metadatos sin pérdida',
    faq: [
      { q: '¿Eliminar metadatos reduce la calidad de la imagen?', a: 'No si se hace a nivel de bytes. Solo recodificar —capturas, volver a guardar, convertir— reduce la calidad.' },
      { q: '¿Por qué mi archivo es más pequeño después de limpiarlo?', a: 'Porque se eliminaron bloques de metadatos, miniaturas e imágenes de vista previa. Los datos de imagen en sí no cambian.' },
      { q: '¿Se verán distintos los colores después de limpiar?', a: 'No. AI Label Remover conserva el perfil de color ICC, así que los colores se muestran exactamente igual que antes.' },
      { q: '¿Una captura de pantalla es una forma segura de quitar metadatos?', a: 'Quita los metadatos, pero baja la calidad y puede capturar otras cosas de la pantalla. La eliminación sin pérdida mantiene intacta la imagen original.' },
    ],
  },

  'how-to-check-if-image-is-ai-generated': {
    metaTitle: 'Cómo saber si una imagen está generada por IA (gratis)',
    related: ['iptc-digitalsourcetype-ai', 'image-metadata-viewer-online', 'synthid-invisible-ai-watermarks'],
    title: '¿Esta imagen está generada por IA? Cómo comprobar el propio archivo',
    summary: [
      'La pista fiable más rápida para saber si una imagen está generada por IA está dentro del archivo: las Content Credentials C2PA, el campo IPTC DigitalSourceType y el texto del generador nombran a menudo la herramienta exacta que creó una imagen.',
      'Aquí verás qué buscar, cómo leerlo con un comprobador gratuito que funciona en tu navegador y por qué no encontrar nada nunca demuestra que una imagen sea real.',
    ],
    description:
      'Comprueba si una imagen está generada por IA leyendo los metadatos C2PA, IPTC DigitalSourceType y del generador en tu navegador, y entiende qué puede y qué no puede probar cada señal.',
    updated: '2026-10-23',
    sections: [
      {
        heading: 'Consigue el original',
        paragraphs: [
          'Los metadatos solo sobreviven en el archivo tal como salió de la cámara o del generador. Las capturas, los archivos guardados de nuevo y las imágenes sacadas de redes sociales suelen estar recodificados y han perdido casi todo. Siempre que puedas, pide la exportación original, la enviada “como archivo” y no como foto comprimida.',
        ],
      },
      {
        heading: 'Pista uno: Content Credentials',
        paragraphs: [
          'Las herramientas compatibles con C2PA adjuntan [un registro firmado digitalmente](what-is-c2pa-content-credentials). Su claim generator nombra la app o el servicio que produjo la imagen, sus c2pa.actions enumeran pasos como “creado” o “editado”, y un digitalSourceType puede declarar directamente la generación por IA.',
          'Como el registro va firmado, un verificador también puede saber si la imagen cambió después de firmarse. Un manifiesto de un servicio de IA es la prueba más sólida que pueden ofrecer los metadatos.',
        ],
      },
      {
        heading: 'Pista dos: IPTC DigitalSourceType',
        paragraphs: ['Muchos generadores y editores rellenan [un campo IPTC estándar](iptc-digitalsourcetype-ai) que describe cómo se hizo el contenido. Los valores más habituales:'],
        bullets: [
          'trainedAlgorithmicMedia: producido por un modelo de IA generativa.',
          'compositeWithTrainedAlgorithmicMedia: una foto real con zonas generadas o sustituidas por IA, como con Relleno generativo.',
          'algorithmicMedia: hecho por un algoritmo sin datos de entrenamiento, como el arte procedural.',
          'digitalCapture: tomado con una cámara, sin contenido generativo declarado.',
        ],
      },
      {
        heading: 'Pista tres: prompts y nombres de herramientas',
        paragraphs: [
          '[Las interfaces de Stable Diffusion y ComfyUI](remove-stable-diffusion-comfyui-metadata) guardan el prompt, la semilla, el modelo y el flujo como texto en los PNG. Otras herramientas dejan su nombre en XMP CreatorTool o en EXIF Software. Cualquiera de estas señales apunta claramente a la intervención de IA, y a menudo dice exactamente cómo se hizo la imagen.',
        ],
      },
      {
        heading: 'Comprobar si una imagen está generada por IA',
        paragraphs: [
          'Coloca el archivo en la mesa de arriba. La pestaña “Rastros de IA” da uno de tres veredictos —rastros de IA encontrados, merece otra mirada o sin rastros de IA— y lista cada señal con su origen. “Metadatos en bruto” muestra los valores subyacentes. No se sube nada. Para quitar lo que encuentre, usa la página para [eliminar metadatos de IA](ai-tag-cleaner).',
        ],
      },
      {
        heading: 'Si el archivo está vacío',
        paragraphs: [
          'La ausencia de metadatos no demuestra nada en ningún sentido: editores, apps de chat y redes sociales los eliminan constantemente, y que falte el EXIF de cámara es, como mucho, un indicio débil. Los siguientes pasos son el comprobador de marcas de agua del propio proveedor (por ejemplo para [SynthID de Google](synthid-invisible-ai-watermarks)), una búsqueda inversa de imágenes para encontrar la copia más antigua y revisar dónde apareció la imagen por primera vez. Los detectores de IA basados en píxeles dan probabilidades, no pruebas.',
        ],
      },
    ],
    faqHeading: 'Sobre comprobar si una imagen es de IA',
    faq: [
      { q: '¿Puedo saber si una imagen se hizo con ChatGPT o Gemini?', a: 'Si el archivo conserva sus Content Credentials, el claim generator nombra el servicio. En las imágenes de Gemini, la comprobación SynthID de Google también puede detectar la marca de agua en los píxeles.' },
      { q: 'Si AI Label Remover no encuentra rastros de IA, ¿la foto es real?', a: 'No necesariamente. Significa que el archivo no contiene metadatos de IA. Los metadatos se pierden o se eliminan con facilidad, así que interpreta un resultado limpio como “desconocido”, no como prueba.' },
      { q: '¿Puedo comprobar algo guardado de Instagram o Facebook?', a: 'Puedes, pero las plataformas suelen limpiar la copia publicada, así que espera poco o nada. La etiqueta “Info de IA” de la plataforma es una señal aparte.' },
      { q: '¿La comprobación es gratuita y privada?', a: 'Sí: gratis, sin cuenta, y el archivo se lee localmente sin subirse.' },
    ],
  },

  'which-platforms-label-ai-images': {
    metaTitle: '¿Qué plataformas etiquetan imágenes de IA? Meta, TikTok',
    related: ['made-with-ai-label', 'iptc-digitalsourcetype-ai', 'what-is-c2pa-content-credentials'],
    title: 'Etiquetas de IA en redes sociales: Instagram, Facebook, TikTok, YouTube, Pinterest y LinkedIn',
    summary: [
      'Cada vez más plataformas marcan imágenes y vídeos con etiquetas como “Info de IA”. La mayoría se apoyan en las mismas señales dentro del archivo —Content Credentials C2PA y metadatos IPTC— combinadas con lo que declaran los creadores.',
      'Este resumen explica cómo aplican en general las etiquetas las grandes plataformas, qué las activa y qué significa para fotos reales con una ligera edición asistida por IA.',
    ],
    description:
      'Cómo aplican etiquetas de IA Instagram, Facebook, Threads, TikTok, YouTube, Pinterest y LinkedIn, qué metadatos las activan y qué implica para las fotos editadas.',
    updated: '2026-10-23',
    sections: [
      {
        heading: 'Las señales compartidas',
        paragraphs: ['El etiquetado automático suele basarse en una lista corta de señales comunes:'],
        bullets: [
          '[Content Credentials C2PA](what-is-c2pa-content-credentials) que declaran generación o edición con IA.',
          '[El campo IPTC DigitalSourceType](iptc-digitalsourcetype-ai), como trainedAlgorithmicMedia.',
          '[Marcas de agua invisibles de algunos proveedores de IA](synthid-invisible-ai-watermarks), cuando la plataforma tiene un detector compatible.',
          'Declaración del creador: un interruptor o casilla al publicar contenido de IA realista.',
        ],
      },
      {
        heading: 'Meta: Instagram, Facebook, Threads',
        paragraphs: [
          'Meta muestra [“Info de IA”](made-with-ai-label) (antes “Hecho con IA”, renombrado en 2024) cuando detecta señales de IA estándar del sector o cuando un creador declara el uso de IA. Después de que los fotógrafos protestaran porque se etiquetaban fotos apenas retocadas, Meta trasladó la etiqueta del contenido editado con IA al menú de la publicación y mantuvo la etiqueta más visible para el contenido mayormente generado.',
        ],
      },
      {
        heading: 'TikTok',
        paragraphs: [
          'TikTok exige a los creadores que etiqueten el contenido realista generado por IA y ha dicho que etiqueta automáticamente lo que llega con Content Credentials C2PA que lo identifican como generado por IA.',
        ],
      },
      {
        heading: 'YouTube',
        paragraphs: [
          'YouTube pide a quien sube vídeos que declare el contenido alterado o sintético realista y muestra una etiqueta a los espectadores. También usa C2PA en el sentido contrario, con un indicador del tipo “capturado con una cámara” para el contenido que lleva credenciales de captura auténtica.',
        ],
      },
      {
        heading: 'Pinterest y LinkedIn',
        paragraphs: [
          'Pinterest ha añadido etiquetas para imágenes generadas o modificadas con IA basándose en metadatos y en sus propios clasificadores. LinkedIn muestra un icono de Content Credentials en las imágenes que llevan datos C2PA, para que se pueda consultar el origen y las ediciones.',
          'Todas las plataformas revisan estas políticas a menudo; consulta su centro de ayuda actual antes de dar por hecho un comportamiento concreto.',
        ],
      },
      {
        heading: 'Cuando se etiqueta una foto real',
        paragraphs: [
          'Una sola edición generativa, como borrar a un transeúnte, puede marcar toda la foto como contenido de IA compuesto en sus metadatos. Antes de publicar, coloca el archivo en AI Label Remover para ver qué campo activaría una etiqueta. Si la etiqueta sería errónea, [limpiar una copia](ai-tag-cleaner) elimina la causa; si la imagen es mayormente generada, decláralo: para eso existen las etiquetas.',
        ],
      },
    ],
    faqHeading: 'Sobre las etiquetas de IA en redes sociales',
    faq: [
      { q: '¿Instagram etiqueta también los perfiles generados por IA?', a: 'Instagram ha introducido etiquetas a nivel de perfil para cuentas que muestran personas generadas por IA y puede limitar las recomendaciones de las cuentas que no lo declaran. Quien solo edita con herramientas de IA no suele verse afectado; consulta las indicaciones actuales de Instagram.' },
      { q: 'Solo quité un objeto pequeño, ¿por qué la etiqueta de IA?', a: 'Muchos editores registran cualquier edición generativa en C2PA o IPTC como “composición con IA”. Las plataformas leen la declaración sin valorar lo grande que fue la edición.' },
      { q: '¿Las plataformas conservan mis metadatos tras publicar?', a: 'La mayoría los leen al subir y los eliminan de la copia pública, así que descargar tu propia publicación rara vez muestra los campos originales.' },
      { q: '¿Una imagen limpia evita todas las etiquetas?', a: 'No siempre. Limpiar elimina las señales del archivo, pero las plataformas también pueden usar detección de marcas de agua, clasificadores o pedirte que lo declares.' },
    ],
  },

  'what-metadata-ai-image-generators-add': {
    metaTitle: '¿Qué metadatos añaden los generadores de imágenes IA?',
    related: ['chatgpt-gemini-image-metadata', 'remove-stable-diffusion-comfyui-metadata', 'iptc-digitalsourcetype-ai'],
    title: 'Lo que esconden los generadores de imágenes con IA en tus archivos: DALL·E, Firefly, Midjourney, Gemini, Stable Diffusion',
    summary: [
      'Casi todas las herramientas de imágenes con IA dejan algo en sus resultados, desde Content Credentials firmadas hasta prompts en texto plano. Saber qué escribe cada una te ayuda a proteger tus prompts y a entender por qué una plataforma etiqueta una imagen.',
      'A continuación tienes un repaso de los metadatos que suelen aparecer en los archivos de los generadores populares y cómo ver lo que contienen realmente tus archivos.',
    ],
    description:
      'Qué incrustan los generadores de imágenes con IA populares —C2PA, IPTC DigitalSourceType, XMP, prompts y flujos— y cómo leerlo o eliminarlo de tus archivos.',
    updated: '2026-10-23',
    sections: [
      {
        heading: 'Tres familias de rastros',
        paragraphs: ['Los metadatos relacionados con la IA son de tres grandes tipos:'],
        bullets: [
          'Procedencia firmada: Content Credentials C2PA que nombran al generador y lo que hizo.',
          'Campos descriptivos: entradas IPTC y XMP como [DigitalSourceType](iptc-digitalsourcetype-ai), CreatorTool o una descripción.',
          'Ajustes de generación: prompt, semilla, modelo y parámetros guardados como texto, sobre todo por herramientas locales.',
        ],
      },
      {
        heading: 'OpenAI: imágenes de ChatGPT y DALL·E',
        paragraphs: [
          'Las imágenes de [la generación de imágenes de OpenAI](chatgpt-gemini-image-metadata) llevan Content Credentials C2PA que identifican a OpenAI como origen, de modo que los visores y plataformas compatibles con C2PA pueden reconocerlas.',
        ],
      },
      {
        heading: 'Adobe: Firefly y las herramientas generativas de Photoshop',
        paragraphs: [
          'Adobe adjunta Content Credentials al contenido creado con sus funciones basadas en Firefly y lo describe como generado o editado con IA. Por eso una foto retocada con Relleno generativo o Expansión generativa puede llevar una declaración de composición con IA aunque casi toda ella sea una fotografía real.',
        ],
      },
      {
        heading: 'Google (Gemini, Imagen) y Meta AI',
        paragraphs: [
          'Google incrusta [su marca de agua invisible SynthID](synthid-invisible-ai-watermarks) en las imágenes de sus modelos generativos y usa metadatos para marcar el contenido de IA en algunos productos. Meta ha dicho que las imágenes de Meta AI incluyen un marcador visible, una marca de agua invisible y metadatos IPTC que indican la generación por IA.',
        ],
      },
      {
        heading: 'Midjourney',
        paragraphs: [
          '[Las descargas de Midjourney pueden incluir el prompt](hide-midjourney-dalle-prompts) y un ID de trabajo en campos de descripción o comentario, junto con un valor IPTC que marca la imagen como generada por IA. Lo que aparece depende del formato de descarga y de la versión del servicio en ese momento.',
        ],
      },
      {
        heading: 'Generadores locales: interfaces de Stable Diffusion y ComfyUI',
        paragraphs: [
          'Las herramientas locales no firman nada, pero a menudo guardan más detalle que nadie: A1111 y Forge escriben un chunk de texto “parameters” y [ComfyUI incrusta como JSON su prompt y sus grafos de flujo completos](remove-stable-diffusion-comfyui-metadata). Estas opciones normalmente se pueden desactivar, aunque solo para las imágenes nuevas.',
          'Los generadores cambian lo que escriben entre versiones, así que lo fiable es abrir el propio archivo: colócalo en la mesa de AI Label Remover para ver cada campo y elimina lo que prefieras no compartir con el [eliminador de metadatos de IA](ai-tag-cleaner).',
        ],
      },
    ],
    faqHeading: 'Sobre los metadatos de los generadores',
    faq: [
      { q: '¿Nano Banana añade metadatos a las imágenes?', a: 'Google marca las imágenes de sus modelos con SynthID y ha añadido Content Credentials C2PA a modelos recientes como Nano Banana Pro. Revisa un archivo concreto para ver qué lleva.' },
      { q: '¿Todos los generadores añaden C2PA?', a: 'No. Los grandes servicios alojados lo hacen cada vez más; muchas herramientas, sobre todo las locales, solo escriben metadatos de texto o nada.' },
      { q: '¿Limpiar elimina también las marcas de agua invisibles?', a: 'No. Las marcas de agua como SynthID están en los píxeles, y la limpieza nunca cambia píxeles.' },
      { q: '¿Por qué difieren dos imágenes de la misma herramienta?', a: 'El formato de exportación, la versión de la app, el lugar de descarga y las ediciones posteriores pueden añadir o quitar campos.' },
    ],
  },

  'synthid-invisible-ai-watermarks': {
    metaTitle: 'SynthID y las marcas de agua invisibles de IA, explicado',
    related: ['chatgpt-gemini-image-metadata', 'how-to-check-if-image-is-ai-generated', 'what-is-c2pa-content-credentials'],
    title: 'SynthID y las marcas de agua invisibles: hasta dónde llega la limpieza de metadatos',
    summary: [
      'Algunas imágenes de IA llevan dos tipos de marcador: metadatos guardados junto a la imagen y una marca de agua tejida en los píxeles. SynthID de Google es el ejemplo más conocido del segundo.',
      'Este artículo explica en qué se diferencian las marcas de agua en píxeles de C2PA y EXIF, cómo se detectan y por qué una herramienta de metadatos honesta no puede eliminarlas.',
    ],
    description:
      'Qué son SynthID y otras marcas de agua invisibles de IA, en qué se diferencian de los metadatos C2PA, cómo se detectan y por qué la limpieza de metadatos no las toca.',
    updated: '2026-10-23',
    sections: [
      {
        heading: 'Dos capas separadas',
        paragraphs: [
          'Los metadatos —EXIF, XMP, IPTC, [C2PA](what-is-c2pa-content-credentials)— ocupan sus propios bloques dentro del archivo, fáciles de leer y de quitar sin tocar la imagen. Una marca de agua en los píxeles es otra cosa: un patrón tenue repartido entre los valores de los píxeles que el ojo no ve pero un detector sí.',
        ],
      },
      {
        heading: 'Sobre SynthID',
        paragraphs: [
          'SynthID es la tecnología de marcas de agua de Google DeepMind para el contenido generado por los modelos de IA de Google. Incrusta una señal imperceptible durante la generación y está diseñada para seguir siendo detectable tras cambios habituales como recortes, cambios de tamaño, compresión y ajustes de color. Técnicas relacionadas cubren imágenes, audio, vídeo y texto.',
        ],
      },
      {
        heading: 'Detectar una marca de agua en píxeles',
        paragraphs: [
          'Un visor genérico no puede leer una marca de agua; necesitas el detector del propio proveedor. Google ha introducido [formas de comprobar si un contenido lleva SynthID](chatgpt-gemini-image-metadata), incluida la verificación dentro de sus productos. Otros proveedores tienen sus propios métodos.',
        ],
      },
      {
        heading: 'Por qué la limpieza no la toca',
        paragraphs: [
          'Una herramienta de metadatos sin pérdida —AI Label Remover incluida— [copia los datos de imagen byte a byte](remove-metadata-without-losing-quality); así es precisamente como garantiza que no hay pérdida de calidad. Cualquier marca de agua en esos bytes se queda donde está. Las herramientas que prometen “quitar marcas de agua de IA” o no cumplen o alteran mucho la imagen, e intentar burlar la marca de agua de un proveedor puede incumplir sus condiciones.',
        ],
      },
      {
        heading: 'En la práctica',
        paragraphs: [
          '[Eliminar los metadatos de IA](ai-tag-cleaner) es lo correcto para la privacidad y para quitar prompts, ubicaciones y datos de procedencia que no quieres compartir. No hace que una imagen de IA sea indetectable. Al publicar contenido de IA realista, sigue las normas de declaración de la plataforma.',
        ],
      },
      {
        heading: '¿Metadatos, marca de agua o huella?',
        paragraphs: ['Tres técnicas distintas reciben el nombre de «etiquetas de IA», y se comportan de forma muy diferente:'],
        bullets: [
          'Metadatos: bloques EXIF, XMP, IPTC y C2PA. Cualquiera puede leerlos, y es fácil quitarlos o perderlos al volver a guardar un archivo.',
          'Marca de agua en píxeles: un patrón oculto en la propia imagen, como SynthID. Solo el detector del proveedor puede leerla y está pensada para sobrevivir a ediciones.',
          'Huella: una descripción compacta de la imagen guardada en un servidor. Una imagen parecida puede compararse con ella más adelante, aunque no tenga ningún metadato.',
        ],
      },
      {
        heading: 'Quién usa marcas de agua invisibles',
        paragraphs: [
          'Google aplica SynthID a las imágenes de sus propios modelos de IA. Meta ha dicho que añade marcas de agua invisibles, además de metadatos, a las imágenes creadas con sus funciones de IA. Adobe y otros respaldan las Content Credentials «duraderas», que combinan un manifiesto C2PA con una marca de agua o una huella para poder volver a consultar el registro. Otros generadores solo usan metadatos, y las herramientas locales no suelen añadir nada. Las prácticas cambian a menudo, así que toma cualquier lista como una foto fija.',
        ],
      },
      {
        heading: 'Qué fiabilidad tiene la detección',
        paragraphs: [
          'La detección de marcas de agua es estadística: el detector indica la probabilidad de que haya una marca, no un sí o un no rotundo. Las ediciones fuertes pueden debilitarla, y cada detector solo reconoce la marca de su propio proveedor. Y lo más importante: no encontrar una marca no demuestra nada, porque muchos generadores nunca la añaden. Por eso [comprobar si una imagen es de IA](how-to-check-if-image-is-ai-generated) exige sopesar varias pistas a la vez.',
        ],
      },
      {
        heading: 'Qué significa para tu privacidad',
        paragraphs: [
          'Según lo que se ha descrito públicamente, una marca de agua en píxeles indica que el contenido lo generó el modelo de un proveedor, en lugar de guardar tu prompt como texto legible. Los datos que más te exponen —prompts, ID de cuenta, ubicaciones, datos del dispositivo— están en los metadatos, y esa es la capa que un limpiador puede limpiar. En resumen: limpiar protege tu información personal, mientras la marca de agua sigue indicando de dónde viene la imagen.',
        ],
      },
    ],
    faqHeading: 'Sobre SynthID y las marcas de agua',
    faq: [
      { q: 'Si una imagen no tiene marca de agua, ¿es una foto real?', a: 'No. Muchos generadores no añaden ninguna, así que su ausencia no dice nada por sí sola.' },
      { q: '¿Una marca de agua puede revelar mi prompt?', a: 'No, según lo descrito públicamente. Los prompts y los datos de cuenta suelen estar en los metadatos, que la limpieza elimina.' },
      { q: '¿Recortar o hacer una captura elimina SynthID?', a: 'Por lo general, no. SynthID está diseñado para sobrevivir a ediciones habituales como recortes, cambios de tamaño, capturas de pantalla y compresión.' },
      { q: '¿AI Label Remover elimina SynthID?', a: 'No. Solo elimina metadatos y nunca edita píxeles, así que cualquier marca de agua invisible permanece.' },
      { q: '¿Cómo sé si una imagen lleva SynthID?', a: 'Solo las herramientas de verificación de Google pueden decírtelo. Un lector de metadatos no puede ver dentro de los píxeles.' },
      { q: '¿Todas las imágenes de IA llevan marca de agua?', a: 'No. Algunos proveedores marcan sus resultados, muchos no, y las herramientas locales normalmente no añaden ninguna.' },
    ],
  },

  'turn-off-content-credentials-photoshop-lightroom': {
    metaTitle: 'Content Credentials en Photoshop y Lightroom',
    related: ['what-is-c2pa-content-credentials', 'made-with-ai-label', 'iptc-digitalsourcetype-ai'],
    title: 'Content Credentials en Photoshop y Lightroom: contrólalas y limpia tus exportaciones',
    summary: [
      'Las apps de Adobe pueden adjuntar Content Credentials a las exportaciones: un registro firmado de ediciones que incluye las funciones de IA generativa que hayas usado. Útil para demostrar tu trabajo, pero también una causa habitual de que fotos retocadas reciban etiquetas de IA.',
      'Aquí verás de dónde vienen las credenciales, cómo revisar una exportación y cómo limpiarlas de una copia cuando necesitas un archivo limpio.',
    ],
    description:
      'De dónde vienen las Content Credentials de Photoshop y Lightroom, cómo revisar si una exportación lleva datos C2PA y cómo limpiarlas de una copia sin perder calidad.',
    updated: '2026-10-23',
    sections: [
      {
        heading: 'Dos formas de que se adjunten credenciales',
        paragraphs: ['Una exportación puede llevar Content Credentials por uno de estos dos motivos:'],
        bullets: [
          'Activaste las Content Credentials, así que la app firma tu identidad y tu historial de edición en la exportación.',
          'Usaste una función generativa como el [Relleno generativo](made-with-ai-label), y Adobe aplicó credenciales que describen el contenido como editado con IA.',
        ],
      },
      {
        heading: 'Revisa antes de publicar',
        paragraphs: [
          'Coloca el JPEG o PNG exportado en la mesa de arriba. Si el informe muestra un bloque C2PA, un claim generator como Adobe Photoshop, acciones c2pa y [un tipo de fuente de composición con IA](iptc-digitalsourcetype-ai), [las plataformas que leen credenciales pueden etiquetarlo](which-platforms-label-ai-images).',
        ],
      },
      {
        heading: 'Los ajustes en las apps de Adobe',
        paragraphs: [
          'Adobe sigue ampliando las Content Credentials y los controles cambian de sitio entre versiones. En las versiones recientes, busca un panel de Content Credentials en Photoshop y una sección de Content Credentials en el cuadro de exportación de Lightroom; las páginas de ayuda de Adobe cubren tu versión exacta. Desactivar la opción puede no impedir que se adjunten credenciales a las ediciones generativas.',
        ],
      },
      {
        heading: 'Limpiar una copia',
        paragraphs: [
          'Cuando necesites un archivo limpio para el portal de un cliente, un marketplace o una red social, [limpia el bloque C2PA](remove-c2pa-content-credentials) de una copia. AI Label Remover recorta el manifiesto del flujo de bytes, conserva los píxeles, el tamaño, la rotación y el perfil de color, y vuelve a leer el resultado para que confirmes que no queda nada.',
        ],
      },
      {
        heading: 'Archiva el original firmado',
        paragraphs: [
          'Las credenciales pueden ser una prueba valiosa de autoría y de cómo se editó una imagen. Guarda la exportación original con sus credenciales y comparte copias limpias solo donde los metadatos inducirían a error o revelarían más de lo que quieres.',
        ],
      },
    ],
    faqHeading: 'Sobre las Content Credentials de Adobe',
    faq: [
      { q: '¿Por qué Instagram etiqueta como IA mi edición de Photoshop?', a: 'El Relleno generativo, la Expansión generativa y funciones similares registran una edición con IA en las Content Credentials o en campos IPTC, y Meta lee esas señales al subir.' },
      { q: 'Con las credenciales desactivadas, ¿se siguen registrando las ediciones generativas?', a: 'Puede que sí. Adobe aplica credenciales al contenido generativo, así que revisa el archivo exportado en lugar de fiarte solo del ajuste.' },
      { q: '¿Limpiar deshace mis ediciones?', a: 'No. Solo se elimina el bloque de metadatos; tus píxeles editados se copian sin cambios.' },
      { q: '¿Puedo volver a poner las credenciales después?', a: 'No en la copia limpia, pero puedes volver a exportar desde el original con las credenciales activadas.' },
    ],
  },

  'which-platforms-strip-photo-metadata': {
    metaTitle: '¿Qué apps eliminan los metadatos? WhatsApp, Instagram, X',
    related: ['remove-gps-location-from-photos', 'view-remove-metadata-iphone-android', 'image-metadata-viewer-online'],
    title: 'Qué apps eliminan los metadatos de las fotos y cuáles dejan pasar tu GPS sin avisar',
    summary: [
      'Se suele dar por hecho que las redes sociales quitan la ubicación de las fotos. En la copia publicada, a menudo es así. Pero el original puede seguir viajando con todo su EXIF por apps de chat, correo, enlaces en la nube y webs para compartir archivos.',
      'Esta guía clasifica las vías habituales para compartir en “normalmente se limpia” y “normalmente se conserva”, y termina con el hábito que siempre funciona: limpiar el archivo antes de que salga de tu dispositivo.',
    ],
    description:
      'Qué redes sociales y apps de chat eliminan los metadatos de las fotos, qué vías conservan el GPS y el EXIF, y cómo asegurarte de que una foto está limpia antes de enviarla.',
    updated: '2026-10-23',
    sections: [
      {
        heading: 'Copia pública frente a archivo original',
        paragraphs: [
          'Publica una foto en un feed y la mayoría de grandes plataformas la recodifican y quitan el EXIF de la versión pública. Quien la ve no puede saber tu posición GPS, pero la plataforma recibe igualmente el original al subirla. El riesgo mayor está en cada vía que hace llegar el original sin tocarlo.',
        ],
      },
      {
        heading: 'Normalmente se limpia',
        paragraphs: [],
        bullets: [
          'Fotos publicadas en el feed de grandes redes como Facebook, Instagram y X.',
          'Fotos enviadas como imágenes comprimidas normales en muchas apps de chat.',
          'La mayoría de imágenes que una plataforma redimensiona o convierte antes de mostrarlas.',
        ],
      },
      {
        heading: 'Normalmente se conserva',
        paragraphs: [],
        bullets: [
          'Fotos enviadas “como archivo” o “como documento” en apps como WhatsApp o Telegram.',
          'Adjuntos de correo y enlaces en la nube (Drive, Dropbox, iCloud y similares).',
          'Foros, webs de anuncios clasificados y de portafolios que entregan el archivo tal como se subió.',
          'Comunidades de fotografía que muestran el EXIF a propósito, como los paneles de ajustes de cámara.',
        ],
      },
      {
        heading: 'Prueba tu propia vía',
        paragraphs: [
          'Las apps cambian continuamente cómo tratan los archivos. Para estar seguro, envíate una foto como lo harías normalmente, descarga lo que llega y colócalo en la mesa de AI Label Remover: [la pestaña “Qué revela”](image-metadata-viewer-online) muestra al instante si han pasado datos de lugar, personas u hora.',
        ],
      },
      {
        heading: 'Limpia antes de enviar',
        paragraphs: [
          'El hábito fiable es limpiar los metadatos antes de que una foto salga de tu dispositivo. AI Label Remover [elimina el GPS, las fechas y los campos de dispositivo y autor](remove-gps-location-from-photos), además de las vistas previas ocultas, conserva la rotación y los colores, y lo hace todo localmente: ideal para fotos que van a desconocidos, compradores o clientes. La página para [eliminar datos EXIF](remove-exif-data) explica cada campo que se elimina.',
        ],
      },
    ],
    faqHeading: 'Sobre las apps y los metadatos de las fotos',
    faq: [
      { q: '¿El correo electrónico elimina los metadatos de las fotos?', a: 'Normalmente no. Los adjuntos se envían como el archivo original, así que el EXIF y el GPS viajan con él salvo que tu app de correo redimensione antes la imagen.' },
      { q: '¿WhatsApp elimina el GPS?', a: 'Las fotos enviadas como imágenes normales se comprimen y pierden casi todos los metadatos. Las enviadas como documentos conservan el archivo original, GPS incluido.' },
      { q: '¿Instagram mostrará dónde se hizo mi foto?', a: 'La imagen publicada no conserva el EXIF. Una etiqueta de ubicación que añadas a la publicación es otra cosa y la ve todo el mundo.' },
      { q: '¿No basta con una captura de pantalla?', a: 'Elimina el EXIF, pero baja la calidad, cambia las dimensiones y puede capturar otras cosas de la pantalla. La limpieza sin pérdida mantiene intacta la imagen original.' },
    ],
  },

  'view-remove-metadata-iphone-android': {
    metaTitle: 'Eliminar metadatos de fotos en iPhone y Android',
    related: ['remove-gps-location-from-photos', 'remove-metadata-windows-mac', 'which-platforms-strip-photo-metadata'],
    title: 'Ver y eliminar los metadatos de las fotos en iPhone y Android',
    summary: [
      'Tu móvil registra dónde y cuándo se hizo cada foto, junto con el modelo del dispositivo. iOS y Android permiten consultarlo y quitar la ubicación antes de compartir.',
      'A continuación verás las opciones integradas, dónde se quedan cortas y una forma basada en el navegador de limpiar todo lo identificativo sin instalar ninguna app.',
    ],
    description:
      'Consulta los metadatos de tus fotos en iPhone y Android, quita la ubicación antes de compartir y limpia todo el EXIF —HEIC incluido— en el navegador sin instalar apps.',
    updated: '2026-10-23',
    sections: [
      {
        heading: 'En iPhone: ver',
        paragraphs: [
          'Abre una foto en Fotos y desliza hacia arriba, o toca el botón de información. Verás la fecha y la hora, la cámara y el objetivo, los datos de exposición y, si la ubicación estaba activada, un mapa. La opción Ajustar junto a la fecha permite cambiar la fecha, la hora o la ubicación de esa foto.',
        ],
      },
      {
        heading: 'En iPhone: compartir sin ubicación',
        paragraphs: ['Dos controles integrados ayudan:'],
        bullets: [
          'En la hoja para compartir, toca Opciones en la parte superior y desactiva Ubicación antes de enviar.',
          'Para dejar de etiquetar las fotos nuevas, ve a Ajustes › Privacidad y seguridad › Localización › Cámara y elige Nunca.',
        ],
      },
      {
        heading: 'En Android',
        paragraphs: [
          'En Google Fotos, abre una foto y desliza hacia arriba para ver detalles como la fecha, el dispositivo y la ubicación; según la versión, puedes editar o quitar ahí la ubicación. Para dejar de etiquetar las fotos nuevas, desactiva la ubicación en los ajustes de la app de cámara; el nombre y el lugar de la opción varían según el fabricante.',
        ],
      },
      {
        heading: 'Dónde se quedan cortas las herramientas integradas',
        paragraphs: [
          'Los ajustes del móvil se centran en la ubicación. El modelo del dispositivo, la hora de la toma, los datos del objetivo, el software de edición y las vistas previas incrustadas suelen quedarse, y los ajustes solo afectan a las fotos futuras o a un envío concreto. [Los archivos copiados a un ordenador](remove-metadata-windows-mac) o enviados por otras apps lo conservan todo.',
        ],
      },
      {
        heading: 'Limpia todo desde el navegador',
        paragraphs: [
          'Abre AI Label Remover en el móvil, toca “Buscar archivos”, lee el informe y toca “Limpiar todas las imágenes”. [Se eliminan los datos de GPS, hora, dispositivo y autor](remove-gps-location-from-photos) —HEIC del iPhone incluido— mientras la rotación y el color se mantienen. Sin subir nada y sin app; la página para [eliminar metadatos HEIC](heic-metadata-remover) explica qué registra una foto del iPhone.',
        ],
      },
      {
        heading: 'iPhone: HEIC, JPEG y Live Photos',
        paragraphs: [
          'Por defecto, el iPhone guarda las fotos en HEIC (Ajustes › Cámara › Formatos › Alta eficiencia); si eliges Más compatible, las guarda en JPEG. Ambos formatos llevan el mismo EXIF: ubicación, hora, dispositivo y objetivo. Al enviar una foto a un dispositivo que no es de Apple, iOS puede convertirla a JPEG por el camino, pero los metadatos suelen acompañarla. Las Live Photos añaden un breve vídeo con sus propios metadatos; AI Label Remover limpia la imagen fija, así que comparte las Live Photos como foto fija cuando la privacidad importe.',
        ],
      },
      {
        heading: 'Android: cada marca lo hace a su manera',
        paragraphs: [
          'Los móviles Android comparten los mismos campos EXIF, pero no los mismos menús. Algunas galerías ofrecen un interruptor para quitar los datos de ubicación en la pantalla de compartir; otras solo permiten editar los detalles foto a foto. Google Fotos tiene un ajuste que oculta la ubicación a quien vea tus enlaces y álbumes compartidos, pero no cambia los archivos enviados por otras vías. Los nombres de los menús cambian entre versiones; si no encuentras la opción, limpiar el archivo es la alternativa fiable.',
        ],
      },
      {
        heading: 'La trampa de «enviar como archivo»',
        paragraphs: [
          'Las apps de mensajería suelen comprimir las fotos y descartar casi todos los metadatos cuando las envías de forma normal. Envía la misma foto como archivo o documento —a menudo para mantener la calidad— y el original llega intacto, ubicación incluida. AirDrop, el uso compartido cercano, el correo y los enlaces de nube se comportan igual. Son justo los momentos para [comprobar qué revela el archivo](remove-gps-location-from-photos) y limpiarlo antes.',
        ],
      },
      {
        heading: 'Una rutina de dos minutos en el móvil',
        paragraphs: [],
        bullets: [
          'Abre AI Label Remover en el navegador del móvil y añádelo a la pantalla de inicio para la próxima vez.',
          'Toca “Buscar archivos” y elige las fotos que vas a compartir.',
          'Lee el informe, toca “Limpiar todas las imágenes” y revisa el panel verde.',
          'Guarda las copias limpias y comparte esas, no los originales.',
        ],
      },
    ],
    faqHeading: 'Sobre los metadatos de las fotos del móvil',
    faq: [
      { q: '¿AirDrop conserva la ubicación?', a: 'Puede conservarla. AirDrop envía el archivo original. Toca Opciones en la parte superior de la hoja de compartir y desactiva Ubicación, o limpia antes el archivo.' },
      { q: '¿Hacer una captura de pantalla de una foto elimina sus metadatos?', a: 'Elimina el EXIF original, pero también baja la calidad y la captura recibe sus propios metadatos. Limpiar el original no tiene pérdida y es más completo.' },
      { q: '¿Necesito una app para quitar el EXIF en el móvil?', a: 'No. Las opciones integradas quitan la ubicación en un envío concreto, y AI Label Remover funciona en el navegador del móvil para eliminar todo lo demás sin instalar nada.' },
      { q: '¿Desactivar la ubicación limpia mis fotos antiguas?', a: 'No. Solo afecta a las fotos nuevas. Las existentes conservan su ubicación hasta que la quites.' },
      { q: '¿Se admiten los archivos HEIC del iPhone?', a: 'Sí. Los HEIC se limpian directamente, sin convertirlos a JPEG y sin recodificarlos.' },
      { q: '¿La opción de compartir del iPhone lo elimina todo?', a: 'Básicamente solo la ubicación. El modelo del dispositivo y la hora de la toma pueden quedarse en el archivo compartido.' },
    ],
  },

  'what-is-exif-data': {
    metaTitle: '¿Qué son los datos EXIF? Campos, privacidad y cómo borrarlos',
    related: ['image-metadata-viewer-online', 'remove-gps-location-from-photos', 'remove-metadata-without-losing-quality'],
    title: 'Los datos EXIF, explicados sin jerga',
    summary: [
      'EXIF (Exchangeable Image File Format) es la información oculta que una cámara o un móvil escribe en cada foto: ajustes, fecha y hora, modelo del dispositivo y a menudo la posición GPS.',
      'Este artículo explica qué contiene el EXIF, en qué se diferencia de XMP, IPTC y C2PA, por qué importa para la privacidad y cómo verlo o eliminarlo con seguridad.',
    ],
    description:
      'Qué son los datos EXIF, qué campos contienen (cámara, hora, GPS), en qué se diferencian de XMP, IPTC y C2PA, y cómo verlos o limpiarlos sin perder calidad.',
    updated: '2026-10-23',
    sections: [
      {
        heading: 'Lo que encontrarás en el EXIF',
        paragraphs: ['Una foto típica puede incluir:'],
        bullets: [
          'Dispositivo: marca y modelo de la cámara o el móvil, objetivo y a veces números de serie.',
          'Exposición: ISO, apertura, velocidad de obturación, distancia focal y flash.',
          'Hora: cuándo se hizo la foto y cuándo se modificó por última vez, a menudo con la zona horaria.',
          'Ubicación: latitud, longitud, altitud y a veces la dirección.',
          'Extras: orientación, una pequeña miniatura incrustada y el nombre del software de edición.',
        ],
      },
      {
        heading: 'Cómo se guarda el EXIF',
        paragraphs: [
          'En JPEG, el EXIF está en un segmento APP1 cerca del principio del archivo y se divide en directorios (IFD): IFD0 para los datos básicos de imagen y dispositivo, el directorio Exif para los ajustes de cámara y [el directorio GPS para la ubicación](remove-gps-location-from-photos). HEIC, WebP y PNG también pueden llevar EXIF, en sus propios contenedores.',
        ],
      },
      {
        heading: 'En qué se diferencia de XMP, IPTC y C2PA',
        paragraphs: [],
        bullets: [
          'EXIF: datos técnicos de captura de cámaras y móviles.',
          'XMP: un formato XML flexible que usan los editores para descripciones, palabras clave, historial de edición y campos de IA.',
          'IPTC: datos de descripción y derechos que usan redacciones y bancos de imágenes, incluido [DigitalSourceType](iptc-digitalsourcetype-ai) para el contenido de IA.',
          'C2PA: [Content Credentials firmadas](what-is-c2pa-content-credentials) que registran la procedencia y las ediciones.',
        ],
      },
      {
        heading: 'Por qué importa',
        paragraphs: [
          'Los fotógrafos usan el EXIF para aprender y llevar un registro de su trabajo. Para la mayoría de la gente es sobre todo un riesgo para la privacidad: una sola foto puede revelar una dirección, un dispositivo y la hora en que alguien estuvo en un sitio. Además, el EXIF es muy fácil de editar, así que nunca debe contar como prueba por sí solo.',
        ],
      },
      {
        heading: 'Verlo y eliminarlo como es debido',
        paragraphs: [
          'Los paneles de información del sistema muestran un puñado de campos; [AI Label Remover decodifica todos los campos EXIF, XMP e IPTC](image-metadata-viewer-online) y los agrupa por origen. Al eliminar el EXIF, conserva la etiqueta de orientación para que las fotos no salgan giradas, conserva el perfil de color para que los colores sigan siendo fieles y evita [todo lo que recomprima la imagen](remove-metadata-without-losing-quality). La herramienta para [eliminar datos EXIF](remove-exif-data) hace las tres cosas por ti.',
        ],
      },
      {
        heading: 'De dónde viene el EXIF',
        paragraphs: [
          'El EXIF nació a mediados de los años noventa, creado por fabricantes de electrónica japoneses para que las cámaras digitales registraran sus ajustes de forma común. Hoy lo mantienen conjuntamente CIPA y JEITA. La idea central apenas ha cambiado: una lista de etiquetas numeradas, cada una con un valor. Las versiones nuevas añadieron campos como la zona horaria, el número de serie del objetivo y, en Exif 3.0, texto UTF-8 completo. Los móviles lo adoptaron tal cual, por eso una foto de smartphone tiene la misma estructura que una compacta de 2005, solo que con un GPS muchísimo más preciso.',
        ],
      },
      {
        heading: 'Campos que sorprenden',
        paragraphs: ['Más allá de la fecha y el lugar, algunas etiquetas revelan más de lo que casi todo el mundo espera:'],
        bullets: [
          'OffsetTime: la diferencia horaria, que acota la región incluso sin GPS.',
          'BodySerialNumber, LensSerialNumber y CameraOwnerName: valores que pueden vincular muchas fotos a una misma cámara y una misma persona.',
          'GPSImgDirection: hacia dónde apuntaba la cámara, a veces suficiente para identificar una ventana o un balcón.',
          'Software: la app de edición y su versión, que da pistas sobre lo que se hizo con la imagen.',
          'MakerNote: un bloque privado del fabricante que puede guardar el número de disparos, series internas y datos de enfoque o detección de caras.',
        ],
      },
      {
        heading: 'La miniatura que sobrevive a tus ediciones',
        paragraphs: [
          'Muchos archivos guardan una pequeña vista previa en un segundo directorio, IFD1. Algunos editores actualizan la imagen principal pero dejan intacta esa vista previa, así que un recorte o un desenfoque pueden deshacerse simplemente leyendo la miniatura. Los móviles también guardan vistas previas más grandes e imágenes secundarias (MPF) con su propio EXIF. Una limpieza bien hecha elimina también esas copias ocultas; por eso AI Label Remover descarta las miniaturas incrustadas y las imágenes MPF en lugar de solo vaciar las etiquetas GPS.',
        ],
      },
      {
        heading: 'Qué conservar y qué eliminar',
        paragraphs: [
          'Para todo lo que compartes en público —publicaciones, anuncios, adjuntos de chat, foros—, eliminar todo el EXIF identificativo es la opción segura. Hay dos datos que conviene conservar porque afectan a la visualización, no a la identidad: la etiqueta de orientación y el perfil de color. Si quieres que se reconozca tu autoría, un pie de foto o una marca visible resisten mucho mejor que un campo de copyright en el EXIF, que la mayoría de plataformas descarta de todos modos. Guarda los originales en tu propio archivo y comparte la copia limpia.',
        ],
      },
    ],
    faqHeading: 'Sobre el EXIF',
    faq: [
      { q: '¿EXIF y metadatos son lo mismo?', a: 'El EXIF es un tipo de metadatos. Un archivo también puede llevar XMP, IPTC, C2PA y texto propio del formato, por eso un limpiador a fondo mira más allá del EXIF.' },
      { q: '¿Las capturas de pantalla tienen EXIF?', a: 'Normalmente mucho menos —sin ajustes de cámara ni GPS—, pero pueden registrar el dispositivo, el software y la hora en que se hicieron.' },
      { q: '¿Cómo veo los datos EXIF?', a: 'En Windows abre Propiedades › Detalles, en un Mac usa el inspector de Vista Previa y en el móvil abre la información de la foto. Para ver todos los campos, XMP e IPTC incluidos, usa un visor completo como AI Label Remover.' },
      { q: '¿El EXIF afecta a cómo se ve la imagen?', a: 'No. El EXIF se guarda aparte de los datos de imagen, así que quitarlo no cambia nada visualmente.' },
      { q: '¿Se puede falsificar el EXIF?', a: 'Fácilmente. Herramientas comunes pueden reescribir los campos EXIF, así que tómalos como pistas, nunca como pruebas.' },
      { q: 'La orientación también es EXIF, ¿AI Label Remover la conserva?', a: 'Sí. Se vuelve a escribir en un bloque EXIF mínimo para que las fotos sigan viéndose en la posición correcta.' },
    ],
  },
};

export default es;
