import type { Articles } from './types';

/** Artigos ampliados em português do Brasil (os artigos base usam o resumo de seo.guides.items). */
const ptBR: Articles = {
  'made-with-ai-label': {
    metaTitle: 'Por que fotos reais ganham o rótulo de IA no Instagram',
    related: ['iptc-digitalsourcetype-ai', 'which-platforms-label-ai-images', 'turn-off-content-credentials-photoshop-lightroom'],
    description:
      'Uma foto real com o rótulo de IA “Informações de IA” no Instagram ou Facebook costuma ter um campo C2PA ou IPTC gravado por um editor. Encontre esse campo e remova sem perdas.',
    updated: '2026-10-23',
    sections: [
      {
        heading: 'O rótulo lê o seu arquivo, não a sua foto',
        paragraphs: [
          'O rótulo de IA da Meta, “Informações de IA” (antes chamado “Feito com IA”), é aplicado quando um envio contém sinais reconhecidos de IA generativa. Dois desses sinais ficam dentro do próprio arquivo de imagem: [um manifesto de Content Credentials C2PA](what-is-c2pa-content-credentials) e [a propriedade IPTC DigitalSourceType](iptc-digitalsourcetype-ai) guardada no XMP.',
          'O valor trainedAlgorithmicMedia diz que a imagem inteira foi gerada; compositeWithTrainedAlgorithmicMedia diz que uma foto real tem partes feitas por IA. Os dois podem ser lidos automaticamente no upload. A Meta também usa outros sinais e pede que as pessoas declarem conteúdo de IA realista, então os metadados do arquivo são só uma entre várias entradas.',
        ],
      },
      {
        heading: 'De onde vem o sinal',
        paragraphs: ['Em fotos reais, o gatilho quase sempre é o app de edição, não a câmera. Origens típicas:'],
        bullets: [
          'Usar Preenchimento Generativo, Expansão Generativa ou uma ferramenta de remoção por IA, que podem adicionar ações c2pa e marcar o arquivo como composição.',
          '[Exportar com as Content Credentials ativadas](turn-off-content-credentials-photoshop-lightroom), o que assina no arquivo a lista de todas as edições.',
          'Recursos da galeria do celular, como borrachas com IA, que deixam um marcador de edição.',
          'Passar o arquivo por outros apps que copiam os metadados existentes, fazendo o marcador sobreviver a vários salvamentos.',
        ],
      },
      {
        heading: 'Encontre o campo no AI Label Remover',
        paragraphs: [
          'Coloque a imagem na mesa lá em cima. A aba “Rastros de IA” lista cada sinal com o lugar onde ele está, por exemplo “C2PA · compositeWithTrainedAlgorithmicMedia” ou “XMP · Iptc4xmpExt › DigitalSourceType”. Vá para “Metadados brutos” para ler os valores por trás, incluindo o claim generator que assinou o manifesto e cada ação c2pa registrada.',
          'O veredito “Vale uma segunda olhada” significa que há Content Credentials sem uma declaração explícita de IA. Algumas plataformas ainda tratam esse manifesto como pista, então decida antes de postar.',
        ],
      },
      {
        heading: 'Limpe a cópia que você posta',
        paragraphs: [
          'Clique em “Limpar todas as imagens”. O AI Label Remover recorta do fluxo de bytes o armazenamento C2PA e os blocos XMP, IPTC e EXIF, deixando pixels, tamanho, rotação e perfil de cor como estavam. O arquivo limpo é lido de novo para você ver que os rastros de IA sumiram antes de salvar. A página para [remover metadados de IA](ai-tag-cleaner) detalha cada rastro tratado.',
          'Salvar de novo como JPEG também tiraria os metadados, mas [recomprime a imagem toda vez](remove-metadata-without-losing-quality). Recortar blocos evita essa perda por completo.',
        ],
      },
      {
        heading: 'Corrigir um rótulo errado não é esconder um certo',
        paragraphs: [
          'A limpeza serve para rótulos que descrevem mal o seu trabalho e para manter dados pessoais em sigilo. Se uma imagem foi gerada total ou majoritariamente e pode passar por real, as regras das plataformas geralmente esperam que você avise — o rótulo existe para informar quem vê. Use o AI Label Remover para corrigir erros, não para fazer imagens sintéticas passarem por fotografias.',
        ],
      },
    ],
    faqHeading: 'Sobre o rótulo de IA',
    faq: [
      { q: 'Dá para tirar o rótulo “Informações de IA” depois de postar?', a: 'Normalmente não editando o post. Se o rótulo descreve mal uma foto real, use as opções de contestação ou de status da conta da plataforma, quando houver, e limpe o arquivo antes do próximo post.' },
      { q: 'Se eu limpar o arquivo, o rótulo some com certeza?', a: 'Não há garantia. A limpeza remove os sinais gravados no arquivo — a causa comum em fotos editadas —, mas as plataformas podem usar outra detecção ou pedir que você declare.' },
      { q: 'A foto muda visualmente?', a: 'Não. Só blocos de metadados são removidos. Os dados da imagem são copiados byte a byte, e a rotação e o perfil de cor ICC ficam.' },
      { q: 'Posso manter as configurações da câmera e tirar só os campos de IA?', a: 'Por enquanto, não. O AI Label Remover remove de uma vez todos os metadados de identificação — local, aparelho, autor e procedência por IA —, o padrão mais seguro para compartilhar em público. Tamanho, rotação, cor e animação são sempre mantidos.' },
    ],
  },

  'remove-stable-diffusion-comfyui-metadata': {
    metaTitle: 'Remover workflows do ComfyUI e prompts do Stable Diffusion de PNG',
    related: ['image-metadata-viewer-online', 'hide-midjourney-dalle-prompts', 'what-metadata-ai-image-generators-add'],
    description:
      'A1111, Forge e ComfyUI gravam seu prompt, seed, checkpoint e o workflow completo em cada PNG. Veja o texto exato e remova sem alterar um pixel.',
    updated: '2026-10-23',
    sections: [
      {
        heading: 'Suas configurações viajam com a imagem',
        paragraphs: [
          'Geradores locais guardam as configurações como texto dentro do resultado para que a imagem possa ser recriada. Nos PNG, esse texto fica em chunks tEXt, zTXt ou iTXt junto dos dados da imagem. O que você costuma encontrar:',
        ],
        bullets: [
          'A1111 e Forge: um chunk “parameters” com prompt, prompt negativo, passos, sampler, CFG, seed, resolução, hash e nome do modelo, além de configurações de LoRA e extensões.',
          'ComfyUI: um chunk “prompt” com o grafo de nós executado e um chunk “workflow” com o layout completo do editor — solte o PNG no ComfyUI e toda a configuração reaparece.',
          'InvokeAI, NovelAI e outras interfaces: dados parecidos com chaves próprias.',
          'Exportações JPEG ou WebP: algumas ferramentas gravam o mesmo texto em [EXIF UserComment](what-is-exif-data).',
        ],
      },
      {
        heading: 'Motivos para limpar — e para não limpar',
        paragraphs: [
          'Os dados de geração são uma receita completa. Eles permitem que qualquer pessoa reproduza seu estilo, mostram em quais checkpoints e LoRAs você se apoia e podem expor caminhos locais, nomes de pastas ou de usuário escondidos num workflow. Grafos grandes do ComfyUI também somam dezenas de kilobytes por imagem.',
          'Por outro lado, sites de compartilhamento de modelos leem os parâmetros para mostrar as informações de geração, e colaboradores podem querer o workflow. Confira cada arquivo primeiro; [o AI Label Remover mostra tudo antes de remover qualquer coisa](image-metadata-viewer-online).',
        ],
      },
      {
        heading: 'Lendo o prompt no AI Label Remover',
        paragraphs: [
          'Coloque o PNG na mesa. Em “Metadados brutos”, cada chunk de texto aparece sob sua chave — parameters, prompt, workflow — com o conteúdo completo, e a aba “Rastros de IA” o marca como prompt do Stable Diffusion ou workflow do ComfyUI. Chunks comprimidos zTXt e iTXt são descompactados no navegador para você conseguir ler.',
        ],
      },
      {
        heading: 'O que a limpeza mantém',
        paragraphs: [
          'Clique em “Limpar todas as imagens”. O módulo de PNG remove como unidades inteiras os chunks de texto, XMP, EXIF e C2PA, e mantém IHDR, IDAT, paleta, transparência, gama e cor, além dos chunks de animação APNG. Como os chunks saem inteiros, os CRC restantes continuam válidos e o arquivo abre em qualquer lugar. A página para [remover metadados de PNG](png-metadata-remover) detalha cada chunk.',
          'Abrir e salvar de novo num editor também tiraria o texto, mas [recomprime a imagem e pode mudar as cores](remove-metadata-without-losing-quality). A remoção no nível dos bytes evita as duas coisas.',
        ],
      },
    ],
    faqHeading: 'Sobre os dados do Stable Diffusion e do ComfyUI',
    faq: [
      { q: 'Como impedir que o A1111 ou o ComfyUI salvem metadados?', a: 'A1111 e Forge têm uma configuração que para de gravar os parâmetros de geração nos PNG, e o ComfyUI pode ser iniciado com a opção --disable-metadata. As duas só valem para imagens novas, então limpe as que você já tem.' },
      { q: 'O ComfyUI consegue recriar o workflow a partir de um PNG limpo?', a: 'Não. Os chunks “prompt” e “workflow” saíram, então arrastar o arquivo para o ComfyUI não restaura nada. Guarde um original sem limpar se for precisar do grafo.' },
      { q: 'O PNG limpo fica igual?', a: 'Sim. Os chunks IDAT com os pixels comprimidos são copiados sem alteração, então a imagem é idêntica pixel a pixel.' },
      { q: 'E as exportações JPEG e WebP?', a: 'Prompts guardados em EXIF UserComment ou XMP também são detectados e removidos dos arquivos JPEG e WebP.' },
    ],
  },

  'hide-midjourney-dalle-prompts': {
    metaTitle: 'Remover prompts de imagens do Midjourney e DALL·E',
    related: ['chatgpt-gemini-image-metadata', 'what-metadata-ai-image-generators-add', 'synthid-invisible-ai-watermarks'],
    description:
      'Downloads do Midjourney, DALL·E, ChatGPT e Firefly podem conter seu prompt, o ID do job e a procedência por IA. Veja o que o arquivo leva e limpe antes de postar.',
    updated: '2026-10-23',
    sections: [
      {
        heading: 'O que os geradores online gravam',
        paragraphs: [
          'Os serviços de imagem online marcam cada vez mais os downloads com metadados, por transparência e para seguir padrões de procedência. Os campos exatos variam por serviço e mudam com o tempo, então a única resposta confiável é abrir o arquivo. O que você pode encontrar:',
        ],
        bullets: [
          'Midjourney: o prompt e um ID de job em campos de descrição ou comentário, muitas vezes com um [IPTC DigitalSourceType](iptc-digitalsourcetype-ai) marcando a imagem como feita por IA.',
          '[DALL·E e a geração de imagens do ChatGPT](chatgpt-gemini-image-metadata): [Content Credentials C2PA](what-is-c2pa-content-credentials) com o nome do gerador.',
          'Adobe Firefly: Content Credentials descrevendo a imagem como gerada por IA.',
          'Muitas ferramentas: nome do software, data de criação e às vezes um identificador ligado à conta.',
        ],
      },
      {
        heading: 'Um prompt é trabalho que vale guardar',
        paragraphs: [
          'Para ilustradores, designers e quem escreve prompts, um prompt refinado é fruto de muitas rodadas de tentativa e erro. Qualquer visualizador de metadados gratuito mostra o texto embutido para quem baixar sua imagem, pronto para copiar. IDs de job e dados de conta também podem ligar uma imagem pública a você.',
        ],
      },
      {
        heading: 'Olhe primeiro, limpe depois',
        paragraphs: [
          'Coloque a imagem na mesa e leia o relatório. As linhas marcadas como “IA” trazem prompts, nomes de geradores e declarações de origem; as marcadas como “Pessoas”, autores, descrições e identificadores. Clique em “Limpar todas as imagens” e salve o arquivo limpo — ou salve o lote inteiro em ZIP. A página para [remover metadados de IA](ai-tag-cleaner) explica cada tipo de rastro.',
          'Tudo roda no seu navegador, então os prompts que você está protegendo não passam por mais um serviço no caminho.',
        ],
      },
      {
        heading: 'Limites que vale conhecer',
        paragraphs: [
          'Alguns provedores também escondem marcas d’água nos pixels, como o [SynthID do Google](synthid-invisible-ai-watermarks). Isso não é metadado e a limpeza não mexe nelas. E se você postar uma imagem de IA realista, as regras da plataforma ainda podem pedir que você declare. A limpeza protege o seu processo; não muda o que a imagem é.',
        ],
      },
    ],
    faqHeading: 'Sobre os metadados do Midjourney e do DALL·E',
    faq: [
      { q: 'Alguém consegue ler meu prompt numa imagem baixada?', a: 'Se o prompt estiver nos metadados do arquivo, qualquer pessoa com um visualizador de metadados pode ler e copiar. Limpar o arquivo antes de compartilhar remove o prompt.' },
      { q: 'Todo download do Midjourney traz o prompt?', a: 'Depende do formato e do comportamento atual do serviço. Abra o arquivo no AI Label Remover para ver exatamente o que ele contém.' },
      { q: 'A limpeza remove o SynthID ou marcas d’água parecidas?', a: 'Não. Marcas d’água invisíveis ficam nos dados de pixels, que o AI Label Remover nunca altera.' },
      { q: 'Posso limpar um conjunto inteiro de gerações?', a: 'Pode. Carregue até 50 imagens, confira os relatórios e salve todas num único ZIP.' },
    ],
  },

  'what-is-c2pa-content-credentials': {
    metaTitle: 'O que é C2PA? Content Credentials explicadas',
    related: ['iptc-digitalsourcetype-ai', 'turn-off-content-credentials-photoshop-lightroom', 'chatgpt-gemini-image-metadata'],
    description:
      'Guia simples das Content Credentials C2PA: o que o manifesto assinado registra, onde JPEG, PNG, WebP, HEIC e AVIF o guardam, como lê-lo e o que acontece ao removê-lo.',
    updated: '2026-10-23',
    sections: [
      {
        heading: 'Resumindo',
        paragraphs: [
          'A Coalition for Content Provenance and Authenticity (C2PA) mantém um padrão aberto para anexar à mídia um histórico que denuncia adulterações. Os usuários o veem como Content Credentials. Câmeras, editores e geradores de IA podem assinar numa imagem um registro de como ela surgiu — fotografada com uma câmera, editada num app ou produzida por um modelo.',
        ],
      },
      {
        heading: 'Anatomia de um manifesto',
        paragraphs: ['Um manifesto é um pacote compacto e estruturado com três partes principais:'],
        bullets: [
          'Claim generator — o software ou serviço que criou o manifesto, como um editor ou uma API de imagens com IA.',
          'Assertions — afirmações sobre o conteúdo: c2pa.actions (criado, editado, aberto, redimensionado etc.), [um digitalSourceType](iptc-digitalsourcetype-ai) e links para arquivos de origem.',
          'Assinatura — uma assinatura criptográfica e um certificado que identificam quem assinou, além de um hash que prende o manifesto aos dados exatos da imagem.',
        ],
      },
      {
        heading: 'Onde cada formato o guarda',
        paragraphs: [
          'O manifesto vai num contêiner JUMBF que cada formato guarda num lugar próprio: segmentos APP11 no JPEG, um chunk caBX no PNG, um chunk C2PA no WebP e uma caixa uuid no HEIC e no AVIF. Por ser um bloco separado, dá para lê-lo e removê-lo sem decodificar a imagem. O AI Label Remover mostra o bloco, o claim generator, as ações registradas e o tipo de fonte sempre que existem.',
        ],
      },
      {
        heading: 'O que a remoção faz de fato',
        paragraphs: [
          '[A limpeza apaga o registro embutido](remove-c2pa-content-credentials) daquela cópia do arquivo. Lembre que qualquer edição já quebra o vínculo criptográfico — os verificadores marcam como inválido um manifesto que não combina mais com os pixels —, então a remoção tira um registro que, de outra forma, continuaria viajando junto.',
          'Alguns sistemas adicionam credenciais “duráveis”: [uma marca d’água invisível ou impressão digital](synthid-invisible-ai-watermarks) que permite ao verificador buscar o manifesto num repositório online mesmo depois que a cópia embutida sumiu. A limpeza de metadados não afeta isso, porque fica nos pixels ou num servidor remoto.',
        ],
      },
      {
        heading: 'Manter ou limpar?',
        paragraphs: [
          'As credenciais são úteis quando você precisa mostrar de onde veio uma imagem — no jornalismo ou nas suas próprias fotos originais. Elas também podem revelar software, histórico de edição e identidade que você prefere guardar, ou [disparar rótulos de IA em fotos levemente editadas](made-with-ai-label). Leia o manifesto primeiro e decida arquivo por arquivo.',
        ],
      },
    ],
    faqHeading: 'Sobre o C2PA',
    faq: [
      { q: 'Quem usa C2PA?', a: 'Adobe, Microsoft, Google, OpenAI, Meta, fabricantes de câmeras como Leica, Sony e Nikon e muitos veículos de imprensa apoiam o padrão ou fazem parte da coalizão, embora cada um o use de um jeito.' },
      { q: 'C2PA é um tipo de marca d’água invisível?', a: 'Não. C2PA é metadado guardado ao lado dos dados da imagem. Marcas d’água em pixels como o SynthID são outro mecanismo e não são afetadas pela limpeza.' },
      { q: 'Como verifico a assinatura antes de limpar?', a: 'O AI Label Remover mostra gerador, ações e tipo de fonte. Para validar a assinatura por completo, passe o original antes por um verificador oficial de Content Credentials.' },
      { q: 'Remover o C2PA custa qualidade?', a: 'Não. O manifesto é um bloco próprio; os dados comprimidos da imagem são copiados como estão.' },
    ],
  },

  'remove-gps-location-from-photos': {
    metaTitle: 'Remover a localização GPS de fotos no iPhone, Android e PC',
    related: ['which-platforms-strip-photo-metadata', 'view-remove-metadata-iphone-android', 'remove-metadata-windows-mac'],
    description:
      'Remova a localização GPS das fotos antes de compartilhar: quais campos EXIF revelam sua posição, aparelho e horário, por onde vazam e como limpá-los sem perdas.',
    updated: '2026-10-23',
    sections: [
      {
        heading: 'O que o celular grava em cada foto',
        paragraphs: ['Com a localização ligada, uma foto comum de smartphone pode conter:'],
        bullets: [
          'Latitude, longitude e altitude, muitas vezes com precisão de poucos metros, além de um carimbo de hora do GPS.',
          'O momento exato em que foi tirada e editada pela última vez.',
          'Marca e modelo, dados da lente e às vezes o número de série ou o nome do dono.',
          'Prévias embutidas e imagens secundárias (mapas de profundidade, imagens MPF) com cópia própria do EXIF.',
        ],
      },
      {
        heading: 'Como o arquivo original escapa',
        paragraphs: [
          'Os grandes feeds costumam tirar o EXIF do que publicam, mas muitos caminhos entregam o original intacto: [enviar “como arquivo” ou documento em apps de mensagem](which-platforms-strip-photo-metadata), anexos de e-mail, links de nuvem, fóruns, sites de compra e venda e portfólios. Uma foto tirada em casa pode revelar seu endereço; uma sequência, sua rotina.',
        ],
      },
      {
        heading: 'Confira os dados de GPS que sua foto revela',
        paragraphs: [
          'Coloque a foto na mesa. A aba “O que ele revela” mostra na hora se há campos de local, pessoas e horário, com a posição GPS convertida em coordenadas decimais. “Metadados brutos” lista todos os campos agrupados em [EXIF IFD0, Exif e GPS](what-is-exif-data).',
        ],
      },
      {
        heading: 'Limpe sem efeitos colaterais',
        paragraphs: [
          'Clique em “Limpar todas as imagens”. [Os campos de GPS, datas, aparelho, autor e software](remove-exif-data) saem, junto com miniaturas embutidas e imagens secundárias MPF que guardariam uma cópia escondida. A tag de orientação é gravada de volta num bloco EXIF mínimo para retratos não ficarem tortos, e o perfil de cor é mantido para as cores continuarem fiéis. HEIC do iPhone é limpo direto, sem conversão para JPEG — veja a página para [remover metadados HEIC](heic-metadata-remover).',
        ],
      },
      {
        heading: 'Cortando na câmera',
        paragraphs: [
          'Você pode [desligar a marcação de localização nas configurações da câmera](view-remove-metadata-iphone-android) ou tirar a localização num compartilhamento usando as opções do celular. Mesmo assim, limpar o arquivo antes de enviar é o hábito mais completo, porque também elimina dados de aparelho, horário e prévias que as configurações do celular deixam.',
        ],
      },
      {
        heading: 'Quão precisas são as coordenadas',
        paragraphs: [
          'O EXIF guarda latitude e longitude em graus, minutos e segundos, e os celulares registram os segundos com casas decimais. Um segundo de latitude equivale a cerca de 31 metros, então um valor com duas casas decimais aponta, no papel, para um ponto com menos de um metro. A precisão real depende do sinal — muitas vezes de 3 a 10 metros ao ar livre, pior em ambientes fechados —, mas ainda basta para apontar uma única casa. Muitos celulares adicionam a altitude, que pode indicar o andar, e a direção para onde a lente apontava.',
        ],
      },
      {
        heading: 'Riscos reais, não hipotéticos',
        paragraphs: ['Dados de localização transformam fotos comuns num mapa da sua vida:'],
        bullets: [
          'A foto de algo que você está vendendo, tirada em casa, entrega seu endereço aos compradores — e a qualquer pessoa que veja o anúncio.',
          'Uma sequência de fotos da academia, do portão da escola ou do escritório revela uma rotina e os horários dela.',
          'Fotos de viagem postadas enquanto você está fora mostram que a casa está vazia.',
          'Fotos de crianças podem revelar a escola, o parquinho ou a casa delas.',
        ],
      },
      {
        heading: 'A localização não fica só nas tags de GPS',
        paragraphs: [
          'Apagar o diretório GPS nem sempre basta. Gerenciadores de fotos podem copiar as coordenadas para o XMP, e campos IPTC como City, Sublocation e Country podem citar o lugar em texto puro. O AI Label Remover remove XMP e IPTC junto com o EXIF, então essas cópias também somem. O que nenhuma ferramenta de metadados remove é a própria imagem: placas de rua, números de casa, a vista de uma janela ou um reflexo podem entregar o local — dê uma olhada antes de postar.',
        ],
      },
      {
        heading: 'Uma checagem rápida antes de compartilhar',
        paragraphs: [],
        bullets: [
          'Coloque a foto no AI Label Remover e veja a aba “O que ele revela”.',
          'Se aparecer um local, clique em “Limpar todas as imagens” e salve a cópia limpa.',
          'Confira se o painel verde confirma que local, pessoas e horário sumiram.',
          'Dê uma olhada na imagem em busca de pistas visíveis — endereços, placas de carro, pontos de referência.',
          'Compartilhe a cópia limpa e mantenha o original na sua biblioteca.',
        ],
      },
    ],
    faqHeading: 'Sobre GPS e privacidade das fotos',
    faq: [
      { q: 'Dá para recuperar a localização depois da limpeza?', a: 'Não a partir do arquivo limpo — os campos são removidos, não escondidos. O original no celular ainda tem a localização, então compartilhe só a cópia limpa.' },
      { q: 'Se eu desligar o GPS, as fotos ainda recebem localização?', a: 'Podem receber. O celular calcula a posição por Wi-Fi e rede móvel, então tire a permissão de localização do próprio app da câmera, não só o GPS.' },
      { q: 'Como sei se uma foto tem dados de GPS?', a: 'Coloque no AI Label Remover: a aba “O que ele revela” mostra qualquer localização com coordenadas decodificadas. No celular, o painel de informações da foto mostra um mapa quando há GPS.' },
      { q: 'As redes sociais já não tiram o GPS?', a: 'Muitas das grandes tiram o EXIF da imagem publicada. Anexos, documentos e links de nuvem costumam manter os metadados originais.' },
      { q: 'Minha foto vai sair girada?', a: 'Não. A tag de orientação é preservada, então a foto aparece exatamente como antes.' },
      { q: 'Fotos HEIC do iPhone funcionam?', a: 'Sim. HEIC e HEIF são limpos direto, sem mudar de formato e sem recodificar.' },
    ],
  },

  'batch-remove-metadata': {
    metaTitle: 'Remover metadados de imagens em lote — grátis e sem upload',
    related: ['remove-metadata-without-losing-quality', 'remove-metadata-windows-mac', 'remove-gps-location-from-photos'],
    description:
      'Remova metadados em lote de até 50 imagens no navegador: como os workers em paralelo mantêm a velocidade, como cada resultado é conferido e como salvar tudo num ZIP.',
    updated: '2026-10-23',
    sections: [
      {
        heading: 'Um lote, do início ao fim',
        paragraphs: [],
        bullets: [
          'Coloque até 50 arquivos JPG, PNG, WebP, GIF, HEIC ou AVIF na mesa (25 MB e 40 MP cada).',
          'Cada um é lido automaticamente; clique em qualquer arquivo da fila para ver o relatório.',
          'Clique em “Limpar todas as imagens” uma vez para limpar tudo o que foi lido — é o mesmo motor da ferramenta para [remover dados EXIF](remove-exif-data).',
          'Salve os arquivos um a um ou clique em “Salvar tudo em ZIP” para ter um único arquivo.',
        ],
      },
      {
        heading: 'Velocidade sem servidor',
        paragraphs: [
          'O AI Label Remover distribui o trabalho entre vários Web Workers — linhas de execução em segundo plano no navegador — conforme os núcleos da sua CPU. Cada worker pega um arquivo, analisa e devolve os bytes limpos, então a página continua fluida mesmo com HEIC pesados. O ZIP usa o método “store”, já que as imagens já são comprimidas; o empacotamento é rápido e [não adiciona perda](remove-metadata-without-losing-quality).',
        ],
      },
      {
        heading: 'Cada resultado é lido de novo',
        paragraphs: [
          'Depois da limpeza, cada arquivo gerado é lido de novo e o painel verde confirma se local, pessoas, horário e rastros de IA sumiram. Se dois arquivos tiverem o mesmo nome, a cópia dentro do ZIP ganha um número para nada ser sobrescrito.',
        ],
      },
      {
        heading: 'Quando são centenas de arquivos',
        paragraphs: [
          'Trabalhe em rodadas de 50 e limpe a mesa entre uma e outra para liberar memória. Em celulares com pouca memória, feche antes outras abas pesadas. Como nada é enviado, dá até para ficar offline depois que a página carrega.',
        ],
      },
      {
        heading: 'Nada sai da máquina',
        paragraphs: [
          'Nenhuma imagem é enviada, guardada ou registrada; o único tráfego de rede é o carregamento da própria página. Por isso a limpeza em lote serve para entregas a clientes, ensaios ainda não publicados e qualquer arquivo que você não pode mandar para terceiros.',
        ],
      },
    ],
    faqHeading: 'Sobre a limpeza em lote',
    faq: [
      { q: 'Um lote pode misturar formatos?', a: 'Pode. Um mesmo lote mistura JPG, PNG, WebP, GIF, HEIC e AVIF, e cada arquivo mantém o próprio formato.' },
      { q: 'Por que o limite de 50 arquivos?', a: 'Todo o processamento usa a memória do seu aparelho. O limite mantém celulares e notebooks antigos estáveis; você pode fazer quantas rodadas quiser.' },
      { q: 'Os nomes dos arquivos mudam?', a: 'Não. Os arquivos limpos mantêm o nome. Só duplicatas exatas dentro do ZIP ganham um sufixo numérico.' },
      { q: 'Funciona offline?', a: 'Sim. Depois de carregada, a página limpa arquivos sem conexão, porque nada é enviado.' },
    ],
  },

  'chatgpt-gemini-image-metadata': {
    title: 'Imagens do ChatGPT, Gemini e Nano Banana: quais metadados elas carregam',
    metaTitle: 'Metadados de imagens do ChatGPT e Gemini: C2PA e SynthID',
    summary: [
      'Imagens criadas com o ChatGPT ou o Google Gemini (incluindo o Nano Banana) saem do gerador com informações de procedência: Content Credentials C2PA guardadas junto da imagem e, no caso do Google, uma marca d’água invisível SynthID embutida nos pixels.',
      'Este guia mostra o que cada provedor costuma gravar, como ler isso no navegador, quais partes uma ferramenta de metadados consegue limpar — e quais nenhuma ferramenta honesta consegue tocar.',
    ],
    description:
      'Quais metadados as imagens do ChatGPT e do Gemini (Nano Banana) carregam — C2PA, SynthID, marcas visíveis —, como lê-los e o que a limpeza consegue remover.',
    related: ['synthid-invisible-ai-watermarks', 'what-metadata-ai-image-generators-add', 'how-to-check-if-image-is-ai-generated'],
    updated: '2026-10-23',
    sections: [
      {
        heading: 'Dois provedores, duas camadas de marcação',
        paragraphs: [
          'A OpenAI e o Google marcam as imagens geradas, mas apostam em camadas diferentes. A OpenAI usa principalmente as [Content Credentials C2PA](what-is-c2pa-content-credentials): um manifesto assinado guardado no arquivo, que nomeia o gerador e informa que a imagem foi criada por IA. O Google usa principalmente o [SynthID](synthid-invisible-ai-watermarks), uma marca d’água invisível embutida nos pixels no momento da geração, e adicionou metadados C2PA a modelos mais novos, como o Nano Banana Pro no app Gemini e nos produtos de nuvem.',
          'As duas camadas se comportam de forma bem diferente. Os metadados ficam num bloco próprio, podem ser lidos por qualquer visualizador capaz e somem assim que o arquivo é recodificado ou limpo. Uma marca d’água nos pixels sobrevive a cortes, redimensionamento e compressão, e só pode ser lida pelo detector do próprio provedor.',
        ],
      },
      {
        heading: 'O que uma imagem do ChatGPT costuma ter',
        paragraphs: ['Os campos exatos mudam entre versões, mas um PNG ou JPEG baixado direto do ChatGPT ou da API de imagens da OpenAI costuma conter:'],
        bullets: [
          'Um manifesto C2PA — num chunk caBX no PNG ou em segmentos APP11 no JPEG — assinado com um certificado emitido para a OpenAI.',
          'Um claim generator com o nome do serviço da OpenAI que produziu a imagem.',
          'Uma ação c2pa.created com o tipo de fonte digital [trainedAlgorithmicMedia](iptc-digitalsourcetype-ai), o jeito padrão de dizer “feito por um modelo generativo”.',
          'Quando você edita uma foto enviada, uma entrada de ingrediente apontando para o original e ações descrevendo a edição.',
        ],
      },
      {
        heading: 'O que uma imagem do Gemini ou Nano Banana costuma ter',
        paragraphs: [
          'Toda imagem gerada pelos modelos do Google traz SynthID nos pixels. Dependendo do modelo, do app e do plano, você também pode encontrar uma marca visível de brilho num canto e, nos modelos mais novos, um manifesto C2PA descrevendo a imagem como gerada por IA. O Google também permite perguntar ao Gemini se uma imagem tem SynthID, que é o único jeito confiável de verificar a marca d’água.',
          'Como a marca visível e o SynthID fazem parte da imagem, nada que só edite metadados os afeta. O manifesto C2PA, se existir, se comporta como qualquer outro bloco de metadados.',
        ],
      },
      {
        heading: 'Por que os metadados costumam sumir sozinhos',
        paragraphs: [
          'Metadados de procedência são frágeis. Um print os remove por completo. Muitos apps de mensagem e redes sociais recodificam os uploads e limpam a cópia pública. Até enviar um arquivo de volta para um assistente de chat pode deixar só os dados da imagem. Por isso é comum achar imagens do ChatGPT ou do Gemini sem Content Credentials, e isso não prova nada sobre a origem — só o download original guarda o registro completo.',
        ],
      },
      {
        heading: 'Leia o arquivo antes de compartilhar',
        paragraphs: [
          'Coloque a imagem na mesa lá em cima. A aba “Rastros de IA” mostra se há um manifesto C2PA, qual claim generator o assinou e qual tipo de fonte ele declara. “Metadados brutos” lista as ações registradas e os ingredientes, além dos campos EXIF e XMP adicionados pelos apps por onde o arquivo passou. Nada é enviado; o arquivo é lido dentro do navegador.',
        ],
      },
      {
        heading: 'O que a limpeza remove — e o que fica',
        paragraphs: ['Ao clicar em “Limpar todas as imagens” — ou usar o [removedor de metadados de IA](ai-tag-cleaner) —, os metadados são recortados do fluxo de bytes sem redesenhar a imagem. Na prática:'],
        bullets: [
          'Removido: o manifesto C2PA, os campos XMP e IPTC, o EXIF e qualquer texto que nomeie a ferramenta ou guarde um prompt.',
          'Mantido: os pixels, as dimensões, a rotação e o perfil de cor ICC — a imagem fica idêntica.',
          'Não afetado: o SynthID e qualquer marca visível de brilho, porque os dois vivem nos pixels. Os verificadores do provedor continuam reconhecendo a imagem pela marca d’água.',
        ],
      },
      {
        heading: 'Use imagens de IA com honestidade',
        paragraphs: [
          'Limpar é uma ferramenta de privacidade: impede que prompts, dados da conta e histórico de edição viajem junto com o arquivo. Não muda o que a imagem é. Se você publicar uma imagem de IA realista, a maioria das plataformas espera que você avise, e algumas limitam o alcance de contas que não fazem isso. Corrija rótulos errados em fotos reais; identifique com clareza o trabalho feito com IA.',
        ],
      },
    ],
    faqHeading: 'Sobre metadados de imagens do ChatGPT e Gemini',
    faq: [
      { q: 'Toda imagem do ChatGPT tem C2PA?', a: 'Imagens baixadas direto da geração de imagens da OpenAI normalmente têm Content Credentials. Cópias feitas por print, salvas de novo ou passadas por outros apps costumam perdê-las.' },
      { q: 'O AI Label Remover consegue remover o SynthID de imagens do Gemini?', a: 'Não. O SynthID está embutido nos pixels, e o AI Label Remover nunca altera pixels. Ele remove só metadados, como C2PA, XMP e EXIF.' },
      { q: 'Como sei se uma imagem veio do Gemini?', a: 'Procure primeiro um manifesto C2PA no AI Label Remover. Para o SynthID, use a verificação do próprio Google, por exemplo perguntando ao Gemini sobre a imagem.' },
      { q: 'Limpar uma imagem do ChatGPT reduz a qualidade?', a: 'Não. Só blocos de metadados são removidos; os dados comprimidos da imagem são copiados sem alteração, e o resultado é idêntico pixel a pixel.' },
    ],
  },

  'remove-metadata-windows-mac': {
    title: 'Como remover metadados de fotos no Windows e no Mac',
    metaTitle: 'Remover metadados de fotos no Windows 11 e no Mac',
    summary: [
      'O Windows e o macOS vêm com um jeito de tirar alguns metadados das fotos, mas cada um cobre só parte do trabalho: o Windows foca nas propriedades EXIF, o macOS na localização.',
      'Aqui estão os passos exatos das ferramentas nativas, o método gratuito por linha de comando que os profissionais usam e um método no navegador que funciona igual nos dois sistemas e ainda remove C2PA, XMP e prompts de IA.',
    ],
    description:
      'Passo a passo: remova EXIF, GPS e outros metadados de fotos no Windows 11/10 e no macOS com ferramentas nativas, ExifTool ou o navegador — e o que cada um deixa passar.',
    related: ['view-remove-metadata-iphone-android', 'remove-metadata-without-losing-quality', 'what-is-exif-data'],
    updated: '2026-10-23',
    sections: [
      {
        heading: 'Saiba o que você está removendo',
        paragraphs: [
          'Uma foto pode ter vários tipos de metadados ao mesmo tempo: [EXIF](what-is-exif-data) (câmera, horário, GPS), XMP (histórico de edição, descrições, campos de IA), IPTC (legendas, direitos, [DigitalSourceType](iptc-digitalsourcetype-ai)), [Content Credentials C2PA](what-is-c2pa-content-credentials) e, em arquivos PNG, chunks de texto com prompts de IA. As ferramentas do sistema foram pensadas para o EXIF e tendem a deixar os outros tipos. Leve isso em conta ao escolher um método.',
        ],
      },
      {
        heading: 'Windows 11 e 10: Explorador de Arquivos',
        paragraphs: ['O Explorador de Arquivos tem um removedor nativo para as propriedades mais comuns:'],
        bullets: [
          'Selecione uma ou mais fotos, clique com o botão direito e escolha Propriedades.',
          'Abra a aba Detalhes e clique em “Remover Propriedades e Informações Pessoais”, no rodapé.',
          'Escolha “Criar uma cópia com todas as propriedades possíveis removidas” para ter uma duplicata limpa, ou “Remover as seguintes propriedades deste arquivo” para marcar campos específicos.',
          'Clique em OK e abra a aba Detalhes da cópia para confirmar que os campos de GPS e câmera estão vazios.',
        ],
      },
      {
        heading: 'Onde o método do Windows falha',
        paragraphs: [
          'A opção funciona melhor com JPEG e TIFF. Em PNG, WebP, HEIC e AVIF ela pode mostrar pouco ou nada para remover. Também pode deixar pacotes XMP, manifestos C2PA e miniaturas embutidas, e não informa o que sobrou. O app Fotos não oferece exportação que remova metadados.',
        ],
      },
      {
        heading: 'macOS: Pré-Visualização e Fotos',
        paragraphs: ['No Mac, as opções nativas miram na localização:'],
        bullets: [
          'Pré-Visualização: abra a foto, escolha Ferramentas › Mostrar Inspetor, abra a aba de localização (GPS), clique em “Remover Informações de Localização” e salve.',
          'Fotos: selecione as imagens e escolha Imagem › Localização › Ocultar Localização, ou use Arquivo › Exportar sem marcar as informações de localização, para que a cópia exportada não tenha GPS.',
          'Obter Informações, no Finder, e o Inspetor da Pré-Visualização servem para conferir o resultado, mas os dois mostram só parte dos campos.',
        ],
      },
      {
        heading: 'Onde o método do Mac falha',
        paragraphs: [
          'Remover a localização deixa o modelo do aparelho, o horário da foto, o software e o histórico de edição. Exportar para JPEG pela Pré-Visualização ou pelo Fotos [recodifica a imagem](remove-metadata-without-losing-quality), o que custa um pouco de qualidade a cada vez, e arquivos HEIC podem ser convertidos se você não escolher outra opção.',
        ],
      },
      {
        heading: 'Linha de comando nos dois: ExifTool',
        paragraphs: [
          'O ExifTool é uma ferramenta de metadados gratuita e consagrada para Windows, macOS e Linux. Ele edita arquivos sem recodificá-los. Comandos úteis:',
        ],
        bullets: [
          'exiftool -all= foto.jpg — remove todos os metadados editáveis e guarda um backup chamado foto.jpg_original.',
          'exiftool -all= --icc_profile:all -tagsfromfile @ -orientation foto.jpg — remove tudo exceto o perfil de cor e a orientação, para cores e rotação continuarem certas.',
          'exiftool -all= -r "C:\\Fotos\\Compartilhar" — limpa uma pasta inteira, incluindo subpastas.',
        ],
      },
      {
        heading: 'Método no navegador: os mesmos passos em qualquer computador',
        paragraphs: [
          'Se você não pode instalar programas — num notebook do trabalho, por exemplo — ou quer um método só para todos os formatos, abra o AI Label Remover no Chrome, Edge, Safari ou Firefox. Solte até 50 imagens, leia o relatório, clique em “Limpar todas as imagens” e salve os arquivos ou um ZIP. Ele [remove EXIF](remove-exif-data), GPS, XMP, IPTC, C2PA e chunks de prompt de PNG em JPEG, PNG, WebP, GIF, HEIC e AVIF, mantém orientação e perfil de cor, e tudo roda na sua máquina.',
        ],
      },
      {
        heading: 'Qual método escolher',
        paragraphs: [],
        bullets: [
          'Um JPEG, só o básico: Explorador de Arquivos no Windows, Pré-Visualização no Mac.',
          'Só a localização, direto da fototeca: Fotos no Mac.',
          'Scripts, servidores ou milhares de arquivos: ExifTool.',
          'Formatos variados, metadados de IA ou sem permissão para instalar: uma ferramenta local no navegador, como o AI Label Remover.',
        ],
      },
    ],
    faqHeading: 'Sobre remover metadados no computador',
    faq: [
      { q: '“Remover Propriedades e Informações Pessoais” apaga o GPS?', a: 'Sim, em arquivos JPEG ele remove o GPS junto com outras propriedades EXIF. Confira a aba Detalhes do resultado, porque alguns dados XMP podem ficar.' },
      { q: 'Dá para remover metadados de fotos HEIC no Windows?', a: 'O Explorador de Arquivos tem suporte limitado a HEIC. O ExifTool ou uma ferramenta de navegador que lide com HEIC, como o AI Label Remover, remove sem converter o arquivo.' },
      { q: 'Exportar pela Pré-Visualização remove todos os metadados?', a: 'Não de forma confiável. A exportação pode tirar alguns campos e manter outros, e recomprime JPEGs. Confira o arquivo exportado antes de compartilhar.' },
      { q: 'Qual método mantém a qualidade da imagem?', a: 'Explorador de Arquivos, ExifTool e AI Label Remover editam metadados sem recodificar. Exportar um JPEG novo de um editor ou visualizador recomprime a imagem.' },
    ],
  },

  'image-metadata-viewer-online': {
    title: 'Visualizador de metadados de imagens: EXIF, GPS, XMP, IPTC e C2PA num só lugar',
    metaTitle: 'Visualizador de metadados: veja EXIF, GPS e dados de IA',
    summary: [
      'Antes de compartilhar uma foto ou confiar numa imagem, um bom visualizador de metadados mostra tudo o que o arquivo diz sobre si mesmo — não só os poucos campos que o celular ou o gerenciador de arquivos mostram.',
      'Este guia explica o que uma verificação completa cobre, onde os visualizadores nativos param, por que muitos visualizadores EXIF online são um risco de privacidade em si e como ler os campos que importam.',
    ],
    description:
      'Visualizador de metadados grátis: veja os campos EXIF, GPS, XMP, IPTC, C2PA e prompts de IA no navegador, sem upload, e o que os visualizadores nativos ignoram.',
    related: ['what-is-exif-data', 'how-to-check-if-image-is-ai-generated', 'remove-gps-location-from-photos'],
    updated: '2026-10-23',
    sections: [
      {
        heading: 'O que uma verificação completa cobre',
        paragraphs: ['Um bom visualizador de metadados lê todos os blocos do arquivo, não só o EXIF:'],
        bullets: [
          'EXIF — modelo da câmera ou do celular, exposição, horário da foto, lente e orientação.',
          'GPS — latitude, longitude, altitude e direção, se a localização estava ligada.',
          'XMP — software de edição, histórico, descrições, avaliações e campos de IA.',
          'IPTC — legendas, palavras-chave, autor, copyright e [DigitalSourceType](iptc-digitalsourcetype-ai).',
          'C2PA — [Content Credentials](what-is-c2pa-content-credentials): quem assinou o arquivo, quais ações foram registradas, se houve IA.',
          'Chunks de texto do PNG — [parâmetros do Stable Diffusion, workflows do ComfyUI](remove-stable-diffusion-comfyui-metadata) e outros textos embutidos.',
          'Perfil ICC e miniaturas — informações de cor e imagens de prévia escondidas.',
        ],
      },
      {
        heading: 'Visualizadores nativos e seus pontos cegos',
        paragraphs: [
          'O Windows mostra metadados em Propriedades › Detalhes; o macOS no Inspetor da Pré-Visualização ou em Obter Informações do Finder; o iPhone quando você desliza para cima numa foto; o Google Fotos no painel de detalhes. Servem para uma olhada rápida em data, câmera e localização, mas mostram só uma seleção do EXIF e costumam ignorar por completo XMP, IPTC, C2PA e texto de PNG. Um arquivo pode parecer limpo no Explorador e ainda carregar um prompt de IA inteiro.',
        ],
      },
      {
        heading: 'A pegadinha de privacidade dos visualizadores EXIF online',
        paragraphs: [
          'Muitos sites de “visualizador EXIF online” funcionam enviando sua imagem para o servidor deles, lendo lá e devolvendo um relatório. Para uma checagem de privacidade, isso é ao contrário: a foto que preocupa você — com a posição GPS — acaba copiada para um terceiro. Prefira um visualizador que leia o arquivo localmente. Um teste simples: carregue a página, desconecte da internet e veja se o visualizador continua funcionando.',
        ],
      },
      {
        heading: 'Lendo um arquivo no AI Label Remover',
        paragraphs: ['Coloque a imagem na mesa lá em cima. Três abas organizam o resultado:'],
        bullets: [
          '“O que ele revela” — um resumo simples de local, pessoas, horário e aparelho, com o GPS convertido em coordenadas decimais.',
          '“Rastros de IA” — manifestos C2PA, tipos de fonte IPTC, nomes de geradores e prompts, com um veredito.',
          '“Metadados brutos” — todos os campos agrupados por origem: EXIF IFD0, Exif, GPS, namespaces XMP, IPTC, C2PA e chunks de texto do PNG.',
        ],
      },
      {
        heading: 'Campos que valem ler primeiro',
        paragraphs: [],
        bullets: [
          'GPSLatitude / GPSLongitude — [o ponto exato](remove-gps-location-from-photos); cole num mapa para ver o que revela.',
          'DateTimeOriginal versus ModifyDate — quando a foto foi tirada versus quando foi salva pela última vez.',
          'Make, Model, BodySerialNumber, LensSerialNumber — podem ligar fotos a um mesmo aparelho.',
          'Artist, Copyright, OwnerName — nomes que você talvez nem saiba que estão embutidos.',
          'Software e CreatorTool — quais apps mexeram no arquivo, inclusive ferramentas de IA.',
          'DigitalSourceType e o claim generator do C2PA — como a imagem diz que foi feita.',
        ],
      },
      {
        heading: 'Quando o visualizador mostra quase nada',
        paragraphs: [
          'Uma imagem salva de um feed, um print ou um arquivo enviado por app de mensagem muitas vezes já foi recodificado e limpo. Pouco ou nenhum metadado é normal nesses casos e não diz nada sobre a imagem ser real, editada ou gerada por IA. Peça o arquivo original se a origem importar.',
        ],
      },
      {
        heading: 'Ver não é verificar',
        paragraphs: [
          'Metadados comuns são texto puro que qualquer um pode editar, então trate-os como pistas, não como prova. O C2PA é diferente porque é assinado, mas um visualizador mostrar o manifesto não é o mesmo que validar a assinatura; para isso, use um verificador oficial de Content Credentials. Quando já tiver visto o suficiente e quiser os dados fora, clique em “Limpar todas as imagens” para removê-los sem mudar a imagem — a página para [remover dados EXIF](remove-exif-data) explica exatamente o que sai.',
        ],
      },
    ],
    faqHeading: 'Sobre ver metadados de imagens',
    faq: [
      { q: 'Existe um visualizador de metadados grátis que não envie minha foto?', a: 'Sim. O AI Label Remover lê os arquivos dentro do navegador, sem upload e sem conta, e continua funcionando offline depois que a página carrega.' },
      { q: 'Dá para ver o prompt de uma imagem de IA?', a: 'Se o gerador salvou, dá. Prompts do Stable Diffusion e do ComfyUI aparecem nos chunks de texto do PNG, e alguns serviços guardam prompts em campos XMP ou EXIF.' },
      { q: 'Por que o Windows não mostra metadados do meu PNG?', a: 'O Explorador de Arquivos mostra só algumas propriedades para PNG. Chunks de texto, XMP e C2PA ficam invisíveis ali, mas aparecem num visualizador completo.' },
      { q: 'Os metadados dizem se uma foto é falsa?', a: 'Podem dar pistas fortes, como um claim generator de IA, mas metadados ausentes ou editados não provam nada sozinhos.' },
    ],
  },

  'iptc-digitalsourcetype-ai': {
    title: 'IPTC DigitalSourceType: o campo que diz às plataformas que uma imagem é de IA',
    metaTitle: 'IPTC DigitalSourceType e trainedAlgorithmicMedia',
    summary: [
      'DigitalSourceType é um pequeno campo de metadados IPTC com um grande efeito: um único valor como trainedAlgorithmicMedia basta para muitas plataformas rotularem uma imagem como gerada por IA.',
      'Este guia lista os valores que você vai encontrar, quem grava e quem lê o campo, por que é fácil alterá-lo e como encontrá-lo ou removê-lo num arquivo.',
    ],
    description:
      'O que significa o campo IPTC DigitalSourceType, os valores trainedAlgorithmicMedia e compositeWithTrainedAlgorithmicMedia, quem o lê e como encontrá-lo ou removê-lo.',
    related: ['made-with-ai-label', 'what-is-c2pa-content-credentials', 'which-platforms-label-ai-images'],
    updated: '2026-10-23',
    sections: [
      {
        heading: 'Um campo, uma lista fixa de respostas',
        paragraphs: [
          'O DigitalSourceType faz parte do padrão IPTC Photo Metadata, o vocabulário que redações, bancos de imagens e softwares de foto usam para descrever imagens. Ele responde a uma pergunta: como este conteúdo foi feito? A resposta não é texto livre, e sim um termo do vocabulário controlado “digital source type” da IPTC, escrito como um URI do tipo http://cv.iptc.org/newscodes/digitalsourcetype/trainedAlgorithmicMedia.',
          'Nos arquivos de imagem, o campo fica no XMP como Iptc4xmpExt:DigitalSourceType. As [Content Credentials C2PA](what-is-c2pa-content-credentials) reutilizam o mesmo vocabulário dentro das ações assinadas, então os mesmos termos aparecem nos dois lugares.',
        ],
      },
      {
        heading: 'Os valores que você vai encontrar',
        paragraphs: ['O vocabulário cresceu ao longo dos anos. Os termos mais relevantes para rótulos de IA são:'],
        bullets: [
          'trainedAlgorithmicMedia — criado por um modelo generativo treinado com conteúdo de exemplo.',
          'compositeWithTrainedAlgorithmicMedia — uma composição que inclui elementos de IA generativa, por exemplo [uma foto editada com Preenchimento Generativo](turn-off-content-credentials-photoshop-lightroom).',
          'algorithmicMedia — criado só por um algoritmo, sem dados de treinamento, como arte procedural ou fractal.',
          'compositeSynthetic — uma composição que inclui elementos sintéticos.',
          'algorithmicallyEnhanced — pequeno aprimoramento ou correção feito por algoritmo.',
          'digitalCapture — capturado por câmera digital ou scanner a partir de uma cena real.',
          'computationalCapture — uma captura processada por algoritmos no momento da foto, como fazem muitos celulares.',
          'digitalArt e screenCapture — arte feita por uma pessoa com software, e capturas de tela.',
        ],
      },
      {
        heading: 'Quem grava',
        paragraphs: [
          'Vários serviços de imagem com IA gravam trainedAlgorithmicMedia no resultado. Editores com ferramentas generativas podem registrar um valor de composição depois de uma edição com IA. Bancos de imagens e agências de notícias preenchem o campo ao receber o material, e alguns marketplaces pedem aos vendedores que marquem imagens de IA assim. O campo também pode ser levado adiante sem ninguém perceber: uma vez definido, sobrevive a todo app que preserva o XMP.',
        ],
      },
      {
        heading: 'Quem lê',
        paragraphs: [
          'A Meta já disse que usa metadados IPTC junto com o C2PA para decidir se mostra [“Informações de IA”](made-with-ai-label) no Facebook, Instagram e Threads. [Outras plataformas](which-platforms-label-ai-images), buscadores e serviços de compras anunciaram uso parecido do campo para sinalizar IA. É por isso que uma foto real levemente retocada com compositeWithTrainedAlgorithmicMedia pode acabar rotulada igualzinho a uma imagem totalmente gerada.',
        ],
      },
      {
        heading: 'Sem assinatura, então fácil de mudar',
        paragraphs: [
          'Diferente de um manifesto C2PA, metadados IPTC comuns não têm assinatura. Qualquer editor de metadados pode adicionar, alterar ou remover o DigitalSourceType, e muitos apps o descartam ao salvar de novo. Trate o campo como uma declaração, não como prova — diga ele “IA” ou “câmera”.',
        ],
      },
      {
        heading: 'Como encontrar e remover',
        paragraphs: [
          'Coloque a imagem no AI Label Remover. Em “Rastros de IA”, o campo aparece como “XMP · Iptc4xmpExt › DigitalSourceType” com o valor; o mesmo termo dentro de um manifesto C2PA aparece em C2PA. Clicar em “Limpar todas as imagens” remove o pacote XMP inteiro e o armazenamento C2PA, levando o campo junto, além do EXIF e de outros dados de identificação. A página para [remover metadados de IA](ai-tag-cleaner) cobre também os outros campos de IA.',
          'Se você precisa remover só esse campo e manter o resto do XMP, uma ferramenta de linha de comando faz isso: exiftool -XMP-iptcExt:DigitalSourceType= foto.jpg. Lembre que um valor equivalente pode estar também num manifesto C2PA.',
        ],
      },
      {
        heading: 'Quando o campo deve ficar',
        paragraphs: [
          'O campo existe para quem vê saber como a imagem foi feita. Se a imagem foi mesmo gerada ou muito alterada por IA, mantenha a declaração — ou avise ao publicar. Remover faz sentido quando ele descreve mal o seu trabalho ou quando você está limpando dados privados de um arquivo.',
        ],
      },
    ],
    faqHeading: 'Sobre o IPTC DigitalSourceType',
    faq: [
      { q: 'O que significa trainedAlgorithmicMedia?', a: 'É o termo IPTC para conteúdo criado por um modelo de IA generativa — uma imagem totalmente gerada por IA.' },
      { q: 'Por que minha foto editada diz compositeWithTrainedAlgorithmicMedia?', a: 'Porque uma edição generativa, como remover um objeto com IA, foi registrada. O termo marca uma composição com partes geradas por IA, seja qual for o tamanho delas.' },
      { q: 'DigitalSourceType é o mesmo que C2PA?', a: 'Não. DigitalSourceType é um campo IPTC, geralmente sem assinatura, guardado no XMP. C2PA é um manifesto assinado que pode conter o mesmo vocabulário dentro das ações.' },
      { q: 'Posso remover só o DigitalSourceType com o AI Label Remover?', a: 'Por enquanto, não. O AI Label Remover remove todo o XMP e o C2PA de uma vez. O ExifTool consegue apagar só esse campo se você precisar manter outros dados XMP.' },
    ],
  },

  'remove-metadata-without-losing-quality': {
    title: 'Remover metadados sem perder qualidade: por que prints e salvar de novo atrapalham',
    metaTitle: 'Remover metadados de imagens sem perder qualidade',
    summary: [
      'Os jeitos rápidos de tirar metadados — tirar um print, salvar de novo num editor, passar o arquivo por um conversor online — redesenham a imagem. Você perde os metadados, mas também nitidez, resolução ou fidelidade de cor.',
      'Este guia explica por que isso acontece, como remover metadados sem perder qualidade e como conferir por conta própria que nenhum pixel mudou.',
    ],
    description:
      'Remova EXIF, GPS, C2PA e metadados de IA sem perder qualidade: por que prints e salvar de novo perdem qualidade, como funciona a remoção sem perdas e como verificá-la.',
    related: ['batch-remove-metadata', 'remove-metadata-windows-mac', 'what-is-exif-data'],
    updated: '2026-10-23',
    sections: [
      {
        heading: 'Metadados e pixels vivem separados',
        paragraphs: [
          'Todo formato de imagem comum separa a imagem das anotações sobre ela. Um JPEG é uma série de segmentos com marcadores: metadados em APP1, APP11 e APP13, a imagem comprimida depois do marcador SOS. Um PNG é uma lista de chunks, com os pixels em IDAT e o texto em tEXt, zTXt ou iTXt. O WebP usa chunks RIFF, e HEIC e AVIF usam caixas ISOBMFF. Como as duas coisas ficam separadas, dá para remover os metadados sem decodificar a imagem.',
        ],
      },
      {
        heading: 'Os atalhos de sempre e quanto custam',
        paragraphs: [],
        bullets: [
          'Print — remove todos os metadados, mas captura na resolução da tela, pode cortar ou redimensionar, pode alterar cores e pode pegar notificações ou outras coisas na tela.',
          'Salvar de novo ou exportar como JPEG — decodifica e recomprime a imagem; cada geração adiciona artefatos, e o perfil ICC pode ser descartado, mudando as cores.',
          'Conversores online — recodificam a imagem e normalmente a enviam a um servidor antes.',
          'Conversão de formato, por exemplo [de HEIC para JPEG](view-remove-metadata-iphone-android) — muda a compressão e muitas vezes perde cor de gama ampla ou transparência.',
        ],
      },
      {
        heading: 'Como remover metadados sem perder qualidade',
        paragraphs: [
          'Um limpador sem perdas percorre a estrutura do arquivo e copia cada bloco que descreve a imagem, pulando só os blocos com metadados. No JPEG isso significa descartar o APP1 com EXIF e XMP, o APP11 com C2PA, o APP13 com IPTC e os comentários, enquanto as tabelas de quantização, as tabelas de Huffman e os dados de varredura são copiados intactos. No PNG, chunks inteiros de texto e metadados são removidos, então o CRC de cada chunk restante continua válido. No HEIC e no AVIF, os itens de metadados são removidos e os offsets internos são reescritos para os dados da imagem continuarem apontando para o lugar certo.',
          'O AI Label Remover funciona assim no seu navegador, seja para [remover dados EXIF](remove-exif-data) ou [remover metadados de PNG](png-metadata-remover). O resultado tem exatamente os mesmos dados de imagem comprimidos da entrada.',
        ],
      },
      {
        heading: 'Três coisas que um bom limpador mantém',
        paragraphs: [],
        bullets: [
          'Orientação — muitas fotos de celular são salvas de lado com [uma tag EXIF](what-is-exif-data) mandando os visualizadores girarem. Sem ela, retratos aparecem tortos. O AI Label Remover grava a tag de volta num bloco EXIF mínimo.',
          'Perfil de cor — o perfil ICC diz aos apps como interpretar as cores, principalmente em fotos de celular Display P3. Sem ele, as imagens podem ficar sem vida ou saturadas demais.',
          'Animação e transparência — quadros de APNG, WebP animado e GIF, além de canais alfa, precisam sobreviver intactos.',
        ],
      },
      {
        heading: 'Como conferir que foi mesmo sem perdas',
        paragraphs: ['Você não precisa acreditar na palavra da ferramenta:'],
        bullets: [
          'Compare as dimensões — largura e altura devem ser idênticas.',
          'Compare o tamanho do arquivo — o arquivo limpo deve ficar menor só mais ou menos no tamanho dos metadados removidos, nunca muito menor.',
          'Compare os pixels — abra os dois num editor como camadas com o modo de mesclagem Diferença; um resultado sem perdas fica totalmente preto.',
          'Leia o arquivo de novo — [o AI Label Remover relê cada arquivo limpo](batch-remove-metadata) e mostra quais campos restaram.',
        ],
      },
      {
        heading: 'De onde vem a economia de tamanho',
        paragraphs: [
          'Remover metadados ainda pode deixar os arquivos bem menores. Miniaturas embutidas e prévias MPF em JPEGs de câmera, longos históricos de edição em XMP e grandes [workflows do ComfyUI](remove-stable-diffusion-comfyui-metadata) em PNGs podem somar dezenas ou centenas de kilobytes. Removê-los encolhe o arquivo sem mudar o que você vê.',
        ],
      },
    ],
    faqHeading: 'Sobre remoção de metadados sem perdas',
    faq: [
      { q: 'Remover metadados reduz a qualidade da imagem?', a: 'Não quando é feito no nível dos bytes. Só a recodificação — prints, salvar de novo, converter — reduz a qualidade.' },
      { q: 'Por que meu arquivo ficou menor depois da limpeza?', a: 'Porque blocos de metadados, miniaturas e imagens de prévia foram removidos. Os dados da imagem em si não mudaram.' },
      { q: 'As cores vão ficar diferentes depois da limpeza?', a: 'Não. O AI Label Remover mantém o perfil de cor ICC, então as cores aparecem exatamente como antes.' },
      { q: 'Tirar print é um jeito seguro de remover metadados?', a: 'Remove os metadados, mas baixa a qualidade e pode capturar outras coisas da tela. A remoção sem perdas mantém a imagem original intacta.' },
    ],
  },

  'how-to-check-if-image-is-ai-generated': {
    metaTitle: 'Como saber se uma imagem foi gerada por IA (grátis)',
    related: ['iptc-digitalsourcetype-ai', 'image-metadata-viewer-online', 'synthid-invisible-ai-watermarks'],
    title: 'Esta imagem foi gerada por IA? Como verificar o próprio arquivo',
    summary: [
      'A pista confiável mais rápida para saber se uma imagem foi gerada por IA está dentro do arquivo: Content Credentials C2PA, o campo IPTC DigitalSourceType e textos do gerador muitas vezes nomeiam a ferramenta exata que criou a imagem.',
      'Veja o que procurar, como ler isso com um verificador grátis que roda no navegador e por que não encontrar nada nunca prova que uma imagem é real.',
    ],
    description:
      'Verifique se uma imagem foi gerada por IA lendo os metadados C2PA, IPTC DigitalSourceType e do gerador no navegador — e entenda o que cada sinal pode e não pode provar.',
    updated: '2026-10-23',
    sections: [
      {
        heading: 'Consiga o original',
        paragraphs: [
          'Os metadados só sobrevivem no arquivo do jeito que saiu da câmera ou do gerador. Prints, arquivos salvos de novo e imagens tiradas de redes sociais normalmente já foram recodificados e perderam quase tudo. Sempre que puder, peça a exportação original — a enviada “como arquivo”, não como foto comprimida.',
        ],
      },
      {
        heading: 'Pista um: Content Credentials',
        paragraphs: [
          'Ferramentas compatíveis com C2PA anexam [um registro assinado digitalmente](what-is-c2pa-content-credentials). O claim generator nomeia o app ou serviço que produziu a imagem, as c2pa.actions listam etapas como “criado” ou “editado”, e um digitalSourceType pode declarar diretamente a geração por IA.',
          'Como o registro é assinado, um verificador também consegue dizer se a imagem mudou depois da assinatura. Um manifesto de um serviço de IA é a evidência mais forte que os metadados podem oferecer.',
        ],
      },
      {
        heading: 'Pista dois: IPTC DigitalSourceType',
        paragraphs: ['Muitos geradores e editores preenchem [um campo IPTC padrão](iptc-digitalsourcetype-ai) descrevendo como o conteúdo foi feito. Os valores mais comuns:'],
        bullets: [
          'trainedAlgorithmicMedia — produzido por um modelo de IA generativa.',
          'compositeWithTrainedAlgorithmicMedia — uma foto real com áreas geradas ou substituídas por IA, como no Preenchimento Generativo.',
          'algorithmicMedia — feito por um algoritmo sem dados de treinamento, como arte procedural.',
          'digitalCapture — tirada com câmera, sem conteúdo generativo declarado.',
        ],
      },
      {
        heading: 'Pista três: prompts e nomes de ferramentas',
        paragraphs: [
          '[As interfaces do Stable Diffusion e o ComfyUI](remove-stable-diffusion-comfyui-metadata) salvam prompt, seed, modelo e workflow como texto em arquivos PNG. Outras ferramentas deixam o nome no XMP CreatorTool ou no EXIF Software. Qualquer um desses sinais aponta claramente para uso de IA — e muitas vezes diz exatamente como a imagem foi feita.',
        ],
      },
      {
        heading: 'Verificando se a imagem foi gerada por IA',
        paragraphs: [
          'Coloque o arquivo na mesa lá em cima. A aba “Rastros de IA” dá um de três veredictos — rastros de IA encontrados, vale uma segunda olhada ou sem rastros de IA — e lista cada sinal com a origem. “Metadados brutos” mostra os valores por trás. Nada é enviado. Para remover o que for encontrado, use a página para [remover metadados de IA](ai-tag-cleaner).',
        ],
      },
      {
        heading: 'Se o arquivo estiver vazio',
        paragraphs: [
          'A ausência de metadados não prova nada em nenhum sentido: editores, apps de mensagem e redes sociais os removem o tempo todo, e a falta de EXIF de câmera é, no máximo, um indício fraco. Os próximos passos são o verificador de marca d’água do próprio provedor (por exemplo, para o [SynthID do Google](synthid-invisible-ai-watermarks)), uma busca reversa de imagem para achar a cópia mais antiga e olhar onde a imagem apareceu primeiro. Detectores de IA baseados em pixels dão probabilidades, não provas.',
        ],
      },
    ],
    faqHeading: 'Sobre verificar imagens de IA',
    faq: [
      { q: 'Dá para saber se uma imagem foi feita com o ChatGPT ou o Gemini?', a: 'Se o arquivo ainda tem as Content Credentials, o claim generator nomeia o serviço. Em imagens do Gemini, a verificação SynthID do Google também pode detectar a marca d’água nos pixels.' },
      { q: 'Se o AI Label Remover não acha rastros de IA, a foto é real?', a: 'Não necessariamente. Significa que o arquivo não tem metadados de IA. Metadados se perdem ou são removidos com facilidade, então leia um resultado limpo como “desconhecido”, não como prova.' },
      { q: 'Posso verificar algo salvo do Instagram ou do Facebook?', a: 'Pode, mas as plataformas costumam limpar a cópia publicada, então espere pouco ou nada. O rótulo “Informações de IA” da própria plataforma é um sinal à parte.' },
      { q: 'A verificação é grátis e privada?', a: 'Sim — grátis, sem conta, e o arquivo é lido localmente, sem upload.' },
    ],
  },

  'which-platforms-label-ai-images': {
    metaTitle: 'Quais plataformas rotulam imagens de IA? Meta, TikTok',
    related: ['made-with-ai-label', 'iptc-digitalsourcetype-ai', 'what-is-c2pa-content-credentials'],
    title: 'Rótulos de IA nas redes sociais: Instagram, Facebook, TikTok, YouTube, Pinterest e LinkedIn',
    summary: [
      'Cada vez mais plataformas marcam imagens e vídeos com rótulos como “Informações de IA”. A maioria se apoia nos mesmos sinais dentro do arquivo — Content Credentials C2PA e metadados IPTC — combinados com o que os criadores declaram.',
      'Este panorama mostra como as grandes plataformas costumam aplicar os rótulos, o que os dispara e o que isso significa para fotos reais com uma edição leve assistida por IA.',
    ],
    description:
      'Como Instagram, Facebook, Threads, TikTok, YouTube, Pinterest e LinkedIn aplicam rótulos de IA, quais metadados os disparam e o que isso significa para fotos editadas.',
    updated: '2026-10-23',
    sections: [
      {
        heading: 'Os sinais em comum',
        paragraphs: ['A rotulagem automática geralmente se baseia numa lista curta de sinais comuns:'],
        bullets: [
          '[Content Credentials C2PA](what-is-c2pa-content-credentials) declarando geração ou edição por IA.',
          '[O campo IPTC DigitalSourceType](iptc-digitalsourcetype-ai), como trainedAlgorithmicMedia.',
          '[Marcas d’água invisíveis de alguns provedores de IA](synthid-invisible-ai-watermarks), quando a plataforma tem um detector compatível.',
          'Declaração do criador — uma chave ou caixa de seleção ao publicar conteúdo de IA realista.',
        ],
      },
      {
        heading: 'Meta: Instagram, Facebook, Threads',
        paragraphs: [
          'A Meta mostra [“Informações de IA”](made-with-ai-label) (antes “Feito com IA”, renomeado em 2024) quando detecta sinais de IA padrão do setor ou quando o criador declara uso de IA. Depois que fotógrafos reclamaram de fotos levemente retocadas sendo marcadas, a Meta passou o rótulo de conteúdo editado com IA para o menu da publicação e manteve o rótulo mais visível para conteúdo substancialmente gerado.',
        ],
      },
      {
        heading: 'TikTok',
        paragraphs: [
          'O TikTok exige que os criadores rotulem conteúdo realista gerado por IA e já disse que rotula automaticamente uploads que chegam com Content Credentials C2PA identificando-os como gerados por IA.',
        ],
      },
      {
        heading: 'YouTube',
        paragraphs: [
          'O YouTube pede que quem envia vídeos declare conteúdo alterado ou sintético realista e mostra um rótulo aos espectadores. Ele também usa o C2PA no sentido oposto, com um indicador do tipo “capturado com uma câmera” para conteúdo com credenciais de captura autênticas.',
        ],
      },
      {
        heading: 'Pinterest e LinkedIn',
        paragraphs: [
          'O Pinterest adicionou rótulos para imagens geradas ou modificadas por IA com base em metadados e nos próprios classificadores. O LinkedIn mostra um ícone de Content Credentials em imagens com dados C2PA, para que se possa conferir a origem e as edições.',
          'Toda plataforma revisa essas políticas com frequência; consulte a central de ajuda atual antes de contar com qualquer comportamento específico.',
        ],
      },
      {
        heading: 'Quando uma foto real é rotulada',
        paragraphs: [
          'Uma única edição generativa, como apagar alguém que passava, pode marcar a foto inteira como conteúdo de IA composto nos metadados. Antes de postar, coloque o arquivo no AI Label Remover para ver qual campo dispararia um rótulo. Se o rótulo for errado, [limpar uma cópia](ai-tag-cleaner) remove a causa; se a imagem for substancialmente gerada, declare — é para isso que os rótulos existem.',
        ],
      },
    ],
    faqHeading: 'Sobre rótulos de IA nas redes sociais',
    faq: [
      { q: 'O Instagram também rotula perfis gerados por IA?', a: 'O Instagram introduziu rótulos no nível do perfil para contas que mostram pessoas geradas por IA e pode limitar as recomendações de contas que não declaram. Quem só edita com ferramentas de IA geralmente não é afetado; confira as orientações atuais do Instagram.' },
      { q: 'Só removi um objeto pequeno — por que o rótulo de IA?', a: 'Muitos editores registram qualquer edição generativa no C2PA ou no IPTC como “composição com IA”. As plataformas leem a declaração sem pesar o tamanho da edição.' },
      { q: 'As plataformas guardam meus metadados depois que eu posto?', a: 'A maioria os lê no upload e os remove da cópia pública, então baixar a própria publicação raramente mostra os campos originais.' },
      { q: 'Uma imagem limpa escapa de todos os rótulos?', a: 'Nem sempre. A limpeza remove os sinais do arquivo, mas as plataformas também podem usar detecção de marca d’água, classificadores ou pedir que você declare.' },
    ],
  },

  'what-metadata-ai-image-generators-add': {
    metaTitle: 'Quais metadados os geradores de imagem com IA adicionam?',
    related: ['chatgpt-gemini-image-metadata', 'remove-stable-diffusion-comfyui-metadata', 'iptc-digitalsourcetype-ai'],
    title: 'O que os geradores de imagem com IA escondem nos seus arquivos: DALL·E, Firefly, Midjourney, Gemini, Stable Diffusion',
    summary: [
      'Quase toda ferramenta de imagem com IA deixa algo no resultado, de Content Credentials assinadas a prompts em texto puro. Saber o que cada uma grava ajuda a proteger seus prompts e entender por que uma plataforma rotula uma imagem.',
      'Abaixo vai um resumo dos metadados que costumam aparecer nos arquivos dos geradores populares e de como ver o que os seus arquivos realmente contêm.',
    ],
    description:
      'O que os geradores de imagem com IA populares embutem — C2PA, IPTC DigitalSourceType, XMP, prompts e workflows — e como ler ou limpar isso dos seus arquivos.',
    updated: '2026-10-23',
    sections: [
      {
        heading: 'Três famílias de rastros',
        paragraphs: ['Os metadados ligados à IA são de três grandes tipos:'],
        bullets: [
          'Procedência assinada — Content Credentials C2PA que nomeiam o gerador e o que ele fez.',
          'Campos descritivos — entradas IPTC e XMP como [DigitalSourceType](iptc-digitalsourcetype-ai), CreatorTool ou uma descrição.',
          'Configurações de geração — prompt, seed, modelo e parâmetros salvos como texto, principalmente por ferramentas locais.',
        ],
      },
      {
        heading: 'OpenAI: imagens do ChatGPT e DALL·E',
        paragraphs: [
          'Imagens da [geração de imagens da OpenAI](chatgpt-gemini-image-metadata) trazem Content Credentials C2PA que identificam a OpenAI como origem, para que visualizadores e plataformas compatíveis com C2PA possam reconhecê-las.',
        ],
      },
      {
        heading: 'Adobe: Firefly e as ferramentas generativas do Photoshop',
        paragraphs: [
          'A Adobe anexa Content Credentials ao conteúdo feito com recursos baseados no Firefly, descrevendo-o como gerado ou editado por IA. Por isso uma foto retocada com Preenchimento Generativo ou Expansão Generativa pode trazer uma declaração de composição com IA mesmo que quase toda ela seja uma fotografia real.',
        ],
      },
      {
        heading: 'Google (Gemini, Imagen) e Meta AI',
        paragraphs: [
          'O Google embute [sua marca d’água invisível SynthID](synthid-invisible-ai-watermarks) nas imagens dos modelos generativos e usa metadados para marcar conteúdo de IA em alguns produtos. A Meta disse que as imagens do Meta AI têm um marcador visível, uma marca d’água invisível e metadados IPTC indicando geração por IA.',
        ],
      },
      {
        heading: 'Midjourney',
        paragraphs: [
          '[Downloads do Midjourney podem incluir o prompt](hide-midjourney-dalle-prompts) e um ID de job em campos de descrição ou comentário, junto com um valor IPTC marcando a imagem como gerada por IA. O que aparece depende do formato do download e da versão do serviço na época.',
        ],
      },
      {
        heading: 'Geradores locais: interfaces do Stable Diffusion e ComfyUI',
        paragraphs: [
          'Ferramentas locais não assinam nada, mas muitas vezes guardam mais detalhes que todas: A1111 e Forge gravam um chunk de texto “parameters”, e [o ComfyUI embute como JSON o prompt e os grafos de workflow completos](remove-stable-diffusion-comfyui-metadata). Essas opções normalmente podem ser desligadas — só para imagens novas.',
          'Os geradores mudam o que gravam entre versões, então o jeito confiável é abrir o próprio arquivo: coloque-o na mesa do AI Label Remover para ver cada campo e limpe o que você prefere não compartilhar com o [removedor de metadados de IA](ai-tag-cleaner).',
        ],
      },
    ],
    faqHeading: 'Sobre metadados de geradores',
    faq: [
      { q: 'O Nano Banana adiciona metadados às imagens?', a: 'O Google marca as imagens dos seus modelos com SynthID e adicionou Content Credentials C2PA a modelos mais novos, como o Nano Banana Pro. Confira um arquivo específico para ver o que ele traz.' },
      { q: 'Todos os geradores adicionam C2PA?', a: 'Não. Os grandes serviços hospedados fazem isso cada vez mais; muitas ferramentas, principalmente as locais, gravam só metadados de texto ou nada.' },
      { q: 'A limpeza remove também marcas d’água invisíveis?', a: 'Não. Marcas d’água como o SynthID ficam nos pixels, e a limpeza nunca altera pixels.' },
      { q: 'Por que duas imagens da mesma ferramenta são diferentes?', a: 'Formato de exportação, versão do app, onde você baixou e edições posteriores podem adicionar ou remover campos.' },
    ],
  },

  'synthid-invisible-ai-watermarks': {
    metaTitle: 'SynthID e marcas d’água invisíveis de IA, explicado',
    related: ['chatgpt-gemini-image-metadata', 'how-to-check-if-image-is-ai-generated', 'what-is-c2pa-content-credentials'],
    title: 'SynthID e marcas d’água invisíveis: onde a limpeza de metadados para',
    summary: [
      'Algumas imagens de IA têm dois tipos de marcador: metadados guardados junto da imagem e uma marca d’água embutida nos pixels. O SynthID do Google é o exemplo mais conhecido do segundo.',
      'Este texto explica como marcas d’água em pixels diferem de C2PA e EXIF, como são detectadas e por que uma ferramenta de metadados honesta não consegue removê-las.',
    ],
    description:
      'O que são o SynthID e outras marcas d’água invisíveis de IA, como diferem dos metadados C2PA, como são detectadas e por que a limpeza de metadados não as toca.',
    updated: '2026-10-23',
    sections: [
      {
        heading: 'Duas camadas separadas',
        paragraphs: [
          'Os metadados — EXIF, XMP, IPTC, [C2PA](what-is-c2pa-content-credentials) — ficam em blocos próprios dentro do arquivo, fáceis de ler e de remover sem mexer na imagem. Uma marca d’água em pixels é outra coisa: um padrão sutil espalhado pelos valores dos pixels que o olho não vê, mas um detector vê.',
        ],
      },
      {
        heading: 'Sobre o SynthID',
        paragraphs: [
          'O SynthID é a tecnologia de marca d’água do Google DeepMind para conteúdo gerado pelos modelos de IA do Google. Ele embute um sinal imperceptível durante a geração e foi projetado para continuar detectável depois de mudanças comuns, como cortes, redimensionamento, compressão e ajustes de cor. Técnicas relacionadas cobrem imagens, áudio, vídeo e texto.',
        ],
      },
      {
        heading: 'Detectando uma marca d’água em pixels',
        paragraphs: [
          'Um visualizador genérico não lê marca d’água; é preciso o detector do próprio provedor. O Google lançou [formas de verificar se um conteúdo tem SynthID](chatgpt-gemini-image-metadata), incluindo a verificação dentro dos seus produtos. Outros provedores têm os próprios métodos.',
        ],
      },
      {
        heading: 'Por que a limpeza não mexe nela',
        paragraphs: [
          'Uma ferramenta de metadados sem perdas — o AI Label Remover incluído — [copia os dados da imagem byte a byte](remove-metadata-without-losing-quality); é exatamente assim que ela garante que não há perda de qualidade. Qualquer marca d’água nesses bytes fica onde está. Ferramentas que prometem “tirar marcas d’água de IA” ou não entregam ou alteram muito a imagem, e tentar burlar a marca d’água de um provedor pode violar os termos dele.',
        ],
      },
      {
        heading: 'Na prática',
        paragraphs: [
          '[Remover metadados de IA](ai-tag-cleaner) é o certo para a privacidade e para remover prompts, localizações e dados de procedência que você não quer compartilhar. Não torna uma imagem de IA indetectável. Ao publicar conteúdo de IA realista, siga as regras de declaração da plataforma.',
        ],
      },
      {
        heading: 'Metadado, marca d’água ou impressão digital?',
        paragraphs: ['Três técnicas diferentes são chamadas de “rótulos de IA”, e elas se comportam de jeitos bem distintos:'],
        bullets: [
          'Metadados — blocos EXIF, XMP, IPTC e C2PA. Qualquer pessoa pode lê-los, e é fácil removê-los ou perdê-los quando o arquivo é salvo de novo.',
          'Marca d’água em pixels — um padrão escondido na própria imagem, como o SynthID. Só o detector do provedor consegue lê-la, e ela foi feita para resistir a edições.',
          'Impressão digital — uma descrição compacta da imagem guardada num servidor. Uma imagem parecida pode ser comparada com ela depois, mesmo sem nenhum metadado.',
        ],
      },
      {
        heading: 'Quem usa marcas d’água invisíveis',
        paragraphs: [
          'O Google aplica o SynthID às imagens dos próprios modelos de IA. A Meta afirmou que adiciona marcas d’água invisíveis, além de metadados, às imagens feitas com seus recursos de IA. A Adobe e outras empresas apoiam Content Credentials “duráveis”, que combinam um manifesto C2PA com uma marca d’água ou impressão digital para que o registro possa ser consultado de novo. Outros geradores usam só metadados, e ferramentas locais geralmente não adicionam nada. As práticas mudam com frequência, então trate qualquer lista como um retrato do momento.',
        ],
      },
      {
        heading: 'Quão confiável é a detecção',
        paragraphs: [
          'A detecção de marcas d’água é estatística: o detector informa a probabilidade de haver uma marca, não um sim ou não absoluto. Edições pesadas podem enfraquecê-la, e cada detector só reconhece a marca do próprio provedor. O mais importante: não encontrar marca não prova nada — muitos geradores nunca adicionam uma. Por isso, [verificar se uma imagem é de IA](how-to-check-if-image-is-ai-generated) exige pesar várias pistas juntas.',
        ],
      },
      {
        heading: 'O que isso significa para sua privacidade',
        paragraphs: [
          'Pelo que foi descrito publicamente, uma marca d’água em pixels indica que o conteúdo foi gerado pelo modelo de um provedor, em vez de guardar seu prompt como texto legível. Os dados que mais expõem você — prompts, IDs de conta, localizações, dados do aparelho — ficam nos metadados, e essa é a camada que uma ferramenta de limpeza consegue limpar. Resumindo: a limpeza protege suas informações pessoais, enquanto a marca d’água continua dizendo de onde a imagem veio.',
        ],
      },
    ],
    faqHeading: 'Sobre o SynthID e marcas d’água',
    faq: [
      { q: 'Se uma imagem não tem marca d’água, ela é uma foto real?', a: 'Não. Muitos geradores não adicionam marca nenhuma, então a ausência dela não diz nada por si só.' },
      { q: 'Uma marca d’água pode revelar meu prompt?', a: 'Não, pelo que foi descrito publicamente. Prompts e dados de conta costumam ficar nos metadados, que a limpeza remove.' },
      { q: 'Cortar ou tirar print remove o SynthID?', a: 'Em geral, não. O SynthID foi projetado para sobreviver a edições comuns, como cortes, redimensionamento, prints e compressão.' },
      { q: 'O AI Label Remover remove o SynthID?', a: 'Não. Ele remove só metadados e nunca edita pixels, então qualquer marca d’água invisível continua lá.' },
      { q: 'Como sei se uma imagem tem SynthID?', a: 'Só as ferramentas de verificação do Google podem dizer. Um leitor de metadados não enxerga dentro dos pixels.' },
      { q: 'Toda imagem de IA tem marca d’água?', a: 'Não. Alguns provedores marcam o resultado, muitos não, e ferramentas locais normalmente não adicionam nenhuma.' },
    ],
  },

  'turn-off-content-credentials-photoshop-lightroom': {
    metaTitle: 'Content Credentials no Photoshop e no Lightroom',
    related: ['what-is-c2pa-content-credentials', 'made-with-ai-label', 'iptc-digitalsourcetype-ai'],
    title: 'Content Credentials no Photoshop e no Lightroom: controle e limpe suas exportações',
    summary: [
      'Os apps da Adobe podem anexar Content Credentials às exportações — um registro assinado das edições, incluindo os recursos de IA generativa que você usou. Útil para provar seu trabalho, mas também um motivo comum para fotos retocadas ganharem rótulos de IA.',
      'Veja de onde vêm as credenciais, como conferir uma exportação e como limpá-las de uma cópia quando você precisa de um arquivo limpo.',
    ],
    description:
      'De onde vêm as Content Credentials do Photoshop e do Lightroom, como conferir se uma exportação tem dados C2PA e como limpá-los de uma cópia sem perder qualidade.',
    updated: '2026-10-23',
    sections: [
      {
        heading: 'Duas formas de as credenciais serem anexadas',
        paragraphs: ['Uma exportação pode ter Content Credentials por um destes dois motivos:'],
        bullets: [
          'Você ativou as Content Credentials, e o app assina sua identidade e o histórico de edição na exportação.',
          'Você usou um recurso generativo como o [Preenchimento Generativo](made-with-ai-label), e a Adobe aplicou credenciais descrevendo o conteúdo como editado por IA.',
        ],
      },
      {
        heading: 'Confira antes de publicar',
        paragraphs: [
          'Coloque o JPEG ou PNG exportado na mesa lá em cima. Se o relatório mostrar um bloco C2PA, um claim generator como Adobe Photoshop, ações c2pa e [um tipo de fonte de composição com IA](iptc-digitalsourcetype-ai), [as plataformas que leem credenciais podem rotulá-lo](which-platforms-label-ai-images).',
        ],
      },
      {
        heading: 'As configurações nos apps da Adobe',
        paragraphs: [
          'A Adobe continua ampliando as Content Credentials, e os controles mudam de lugar entre versões. Nas versões recentes, procure um painel de Content Credentials no Photoshop e uma seção de Content Credentials na caixa de exportação do Lightroom; as páginas de ajuda da Adobe cobrem a sua versão exata. Desligar a opção pode não impedir que credenciais sejam anexadas a edições generativas.',
        ],
      },
      {
        heading: 'Limpando uma cópia',
        paragraphs: [
          'Quando precisar de um arquivo limpo para o portal de um cliente, um marketplace ou uma rede social, [limpe o bloco C2PA](remove-c2pa-content-credentials) de uma cópia. O AI Label Remover recorta o manifesto do fluxo de bytes, mantém pixels, tamanho, rotação e perfil de cor, e lê o resultado de novo para você confirmar que nada restou.',
        ],
      },
      {
        heading: 'Arquive o original assinado',
        paragraphs: [
          'As credenciais podem ser uma prova valiosa de autoria e de como a imagem foi editada. Guarde a exportação original com as credenciais e compartilhe cópias limpas só onde os metadados enganariam ou revelariam mais do que você quer.',
        ],
      },
    ],
    faqHeading: 'Sobre as Content Credentials da Adobe',
    faq: [
      { q: 'Por que o Instagram rotula minha edição do Photoshop como IA?', a: 'Preenchimento Generativo, Expansão Generativa e recursos parecidos registram uma edição por IA nas Content Credentials ou em campos IPTC, e a Meta lê esses sinais no upload.' },
      { q: 'Com as credenciais desligadas, as edições generativas ainda são registradas?', a: 'Podem ser. A Adobe aplica credenciais ao conteúdo generativo, então confira o arquivo exportado em vez de confiar só na configuração.' },
      { q: 'Limpar desfaz minhas edições?', a: 'Não. Só o bloco de metadados é removido; seus pixels editados são copiados sem alteração.' },
      { q: 'Posso colocar as credenciais de volta depois?', a: 'Não na cópia limpa, mas você pode exportar de novo a partir do original com as credenciais ativadas.' },
    ],
  },

  'which-platforms-strip-photo-metadata': {
    metaTitle: 'Quais apps removem metadados? WhatsApp, Instagram, X',
    related: ['remove-gps-location-from-photos', 'view-remove-metadata-iphone-android', 'image-metadata-viewer-online'],
    title: 'Quais apps removem os metadados das fotos — e quais repassam seu GPS sem avisar',
    summary: [
      'Muita gente acha que as redes sociais tiram a localização das fotos. Na cópia publicada, muitas vezes tiram mesmo. Mas o original ainda pode viajar com o EXIF completo por apps de mensagem, e-mail, links de nuvem e sites de compartilhamento de arquivos.',
      'Este guia separa as formas comuns de compartilhar em “normalmente limpa” e “normalmente mantém”, e termina com o hábito que sempre funciona: limpar o arquivo antes de ele sair do seu aparelho.',
    ],
    description:
      'Quais redes sociais e apps de mensagem removem metadados das fotos, quais caminhos mantêm GPS e EXIF, e como garantir que uma foto está limpa antes de enviar.',
    updated: '2026-10-23',
    sections: [
      {
        heading: 'Cópia pública versus arquivo original',
        paragraphs: [
          'Poste uma foto no feed e a maioria das grandes plataformas a recodifica e tira o EXIF da versão pública. Quem vê não descobre sua posição GPS, mas a plataforma recebe o original no upload mesmo assim. O risco maior está em cada caminho que repassa o original sem mexer em nada.',
        ],
      },
      {
        heading: 'Normalmente limpa',
        paragraphs: [],
        bullets: [
          'Fotos publicadas no feed de grandes redes como Facebook, Instagram e X.',
          'Fotos enviadas como imagens comprimidas normais em muitos apps de mensagem.',
          'A maioria das imagens que uma plataforma redimensiona ou converte antes de mostrar.',
        ],
      },
      {
        heading: 'Normalmente mantém',
        paragraphs: [],
        bullets: [
          'Fotos enviadas “como arquivo” ou “como documento” em apps como WhatsApp ou Telegram.',
          'Anexos de e-mail e links de nuvem (Drive, Dropbox, iCloud e similares).',
          'Fóruns, sites de classificados e de portfólio que entregam o arquivo exatamente como foi enviado.',
          'Comunidades de fotografia que mostram o EXIF de propósito, como painéis de configurações da câmera.',
        ],
      },
      {
        heading: 'Teste o seu caminho',
        paragraphs: [
          'Os apps mudam o tempo todo o jeito de tratar mídia. Para ter certeza, mande uma foto para você mesmo do jeito de sempre, baixe o que chegou e coloque na mesa do AI Label Remover: [a aba “O que ele revela”](image-metadata-viewer-online) mostra na hora se dados de local, pessoas ou horário passaram.',
        ],
      },
      {
        heading: 'Limpe antes de enviar',
        paragraphs: [
          'O hábito confiável é limpar os metadados antes de a foto sair do seu aparelho. O AI Label Remover [remove GPS, datas e campos de aparelho e autor](remove-gps-location-from-photos), além das prévias escondidas, mantém rotação e cores, e faz tudo localmente — ideal para fotos que vão para desconhecidos, compradores ou clientes. A página para [remover dados EXIF](remove-exif-data) explica cada campo removido.',
        ],
      },
    ],
    faqHeading: 'Sobre apps e metadados de fotos',
    faq: [
      { q: 'O e-mail remove os metadados das fotos?', a: 'Normalmente não. Os anexos vão como o arquivo original, então EXIF e GPS viajam junto, a menos que seu app de e-mail redimensione a imagem antes.' },
      { q: 'O WhatsApp remove o GPS?', a: 'Fotos enviadas como imagens normais são comprimidas e perdem quase todos os metadados. Fotos enviadas como documento mantêm o arquivo original, GPS incluído.' },
      { q: 'O Instagram vai mostrar onde minha foto foi tirada?', a: 'A imagem publicada fica sem EXIF. Uma marcação de local que você adiciona ao post é outra coisa e fica visível para todos.' },
      { q: 'Um print não resolve?', a: 'Tira o EXIF, mas baixa a qualidade, muda as dimensões e pode pegar outras coisas da tela. A limpeza sem perdas mantém a imagem original intacta.' },
    ],
  },

  'view-remove-metadata-iphone-android': {
    metaTitle: 'Remover metadados de fotos no iPhone e no Android',
    related: ['remove-gps-location-from-photos', 'remove-metadata-windows-mac', 'which-platforms-strip-photo-metadata'],
    title: 'Ver e remover metadados de fotos no iPhone e no Android',
    summary: [
      'Seu celular registra onde e quando cada foto foi tirada, além do modelo do aparelho. O iOS e o Android permitem ver isso e tirar a localização antes de compartilhar.',
      'Abaixo estão as opções nativas, onde elas falham e um jeito pelo navegador de limpar tudo o que identifica você sem instalar app.',
    ],
    description:
      'Veja os metadados das fotos no iPhone e no Android, tire a localização antes de compartilhar e limpe todo o EXIF — HEIC incluído — no navegador, sem instalar app.',
    updated: '2026-10-23',
    sections: [
      {
        heading: 'No iPhone: como ver',
        paragraphs: [
          'Abra uma foto no app Fotos e deslize para cima, ou toque no botão de informações. Você verá data e hora, câmera e lente, detalhes de exposição e, se a localização estava ligada, um mapa. A opção Ajustar, ao lado da data, permite editar data, hora ou localização daquela foto.',
        ],
      },
      {
        heading: 'No iPhone: compartilhar sem localização',
        paragraphs: ['Dois controles nativos ajudam:'],
        bullets: [
          'Na folha de compartilhamento, toque em Opções no topo e desligue Localização antes de enviar.',
          'Para parar de marcar as fotos novas, vá em Ajustes › Privacidade e Segurança › Serviços de Localização › Câmera e escolha Nunca.',
        ],
      },
      {
        heading: 'No Android',
        paragraphs: [
          'No Google Fotos, abra uma foto e deslize para cima para ver detalhes como data, aparelho e localização; dependendo da versão, dá para editar ou remover a localização ali. Para parar de marcar as fotos novas, desligue a localização nas configurações do app da câmera — o nome e o lugar da opção variam conforme o fabricante.',
        ],
      },
      {
        heading: 'Onde as ferramentas nativas falham',
        paragraphs: [
          'As configurações do celular focam na localização. Modelo do aparelho, horário da foto, detalhes da lente, software de edição e prévias embutidas costumam ficar, e as configurações só valem para fotos futuras ou para um compartilhamento. [Arquivos copiados para o computador](remove-metadata-windows-mac) ou enviados por outros apps mantêm tudo.',
        ],
      },
      {
        heading: 'Limpe tudo pelo navegador',
        paragraphs: [
          'Abra o AI Label Remover no celular, toque em “Procurar arquivos”, leia o relatório e toque em “Limpar todas as imagens”. [Dados de GPS, horário, aparelho e autor são removidos](remove-gps-location-from-photos) — HEIC do iPhone incluído — enquanto rotação e cor ficam. Sem upload, sem app — e a página para [remover metadados HEIC](heic-metadata-remover) mostra o que uma foto do iPhone registra.',
        ],
      },
      {
        heading: 'iPhone: HEIC, JPEG e Live Photos',
        paragraphs: [
          'Por padrão, o iPhone salva fotos em HEIC (Ajustes › Câmera › Formatos › Alta Eficiência); escolhendo Mais Compatível, ele salva em JPEG. Os dois formatos levam o mesmo EXIF — localização, horário, aparelho e lente. Ao enviar uma foto para um aparelho que não é da Apple, o iOS pode convertê-la para JPEG no caminho, mas os metadados geralmente vão junto. As Live Photos trazem um pequeno vídeo com metadados próprios; o AI Label Remover limpa a imagem estática, então compartilhe Live Photos como foto estática quando a privacidade importar.',
        ],
      },
      {
        heading: 'Android: cada marca faz de um jeito',
        paragraphs: [
          'Celulares Android compartilham os mesmos campos EXIF, mas não os mesmos menus. Algumas galerias oferecem uma opção para remover dados de localização na tela de compartilhamento; outras só deixam editar os detalhes foto por foto. O Google Fotos tem uma configuração que esconde a localização de quem vê seus links e álbuns compartilhados, mas isso não muda arquivos enviados por outros caminhos. Os nomes dos menus mudam entre versões; se não achar a opção, limpar o arquivo é a alternativa confiável.',
        ],
      },
      {
        heading: 'A armadilha do “enviar como arquivo”',
        paragraphs: [
          'Apps de mensagem costumam comprimir as fotos e descartar quase todos os metadados quando você envia do jeito normal. Envie a mesma foto como arquivo ou documento — muitas vezes para manter a qualidade — e o original chega intacto, localização incluída. AirDrop, Compartilhamento por Proximidade, e-mail e links de nuvem funcionam do mesmo jeito. São exatamente os momentos de [conferir o que o arquivo revela](remove-gps-location-from-photos) e limpar antes.',
        ],
      },
      {
        heading: 'Uma rotina de dois minutos no celular',
        paragraphs: [],
        bullets: [
          'Abra o AI Label Remover no navegador do celular e adicione à tela inicial para a próxima vez.',
          'Toque em “Procurar arquivos” e escolha as fotos que vai compartilhar.',
          'Leia o relatório, toque em “Limpar todas as imagens” e confira o painel verde.',
          'Salve as cópias limpas e compartilhe essas, não os originais.',
        ],
      },
    ],
    faqHeading: 'Sobre metadados de fotos do celular',
    faq: [
      { q: 'O AirDrop mantém a localização?', a: 'Pode manter. O AirDrop envia o arquivo original. Toque em Opções no topo da tela de compartilhamento e desligue Localização, ou limpe o arquivo antes.' },
      { q: 'Tirar um print de uma foto remove os metadados?', a: 'Remove o EXIF original, mas também reduz a qualidade, e o print ganha metadados próprios. Limpar o original é sem perdas e mais completo.' },
      { q: 'Preciso de um app para remover o EXIF no celular?', a: 'Não. As opções nativas tiram a localização num compartilhamento, e o AI Label Remover roda no navegador do celular para remover todo o resto sem instalar nada.' },
      { q: 'Desligar a localização limpa minhas fotos antigas?', a: 'Não. Só afeta as fotos novas. As existentes mantêm a localização até você removê-la.' },
      { q: 'Arquivos HEIC do iPhone são aceitos?', a: 'Sim. Os HEIC são limpos diretamente, sem conversão para JPEG e sem recodificação.' },
      { q: 'A opção de compartilhar do iPhone remove tudo?', a: 'Basicamente só a localização. O modelo do aparelho e o horário da foto podem continuar no arquivo compartilhado.' },
    ],
  },

  'what-is-exif-data': {
    metaTitle: 'O que são dados EXIF? Campos, privacidade e remoção',
    related: ['image-metadata-viewer-online', 'remove-gps-location-from-photos', 'remove-metadata-without-losing-quality'],
    title: 'Dados EXIF explicados sem jargão',
    summary: [
      'EXIF (Exchangeable Image File Format) é a informação escondida que a câmera ou o celular grava em cada foto: configurações, data e hora, modelo do aparelho e muitas vezes a posição GPS.',
      'Este artigo explica o que o EXIF guarda, como ele difere de XMP, IPTC e C2PA, por que importa para a privacidade e como vê-lo ou removê-lo com segurança.',
    ],
    description:
      'O que são dados EXIF, quais campos eles têm (câmera, horário, GPS), como diferem de XMP, IPTC e C2PA, e como vê-los ou limpá-los sem perder qualidade.',
    updated: '2026-10-23',
    sections: [
      {
        heading: 'O que você encontra no EXIF',
        paragraphs: ['Uma foto típica pode incluir:'],
        bullets: [
          'Aparelho — marca e modelo da câmera ou do celular, lente e às vezes números de série.',
          'Exposição — ISO, abertura, velocidade do obturador, distância focal e flash.',
          'Horário — quando a foto foi tirada e modificada pela última vez, muitas vezes com o fuso horário.',
          'Localização — latitude, longitude, altitude e às vezes a direção.',
          'Extras — orientação, uma pequena miniatura embutida e o nome do software de edição.',
        ],
      },
      {
        heading: 'Como o EXIF é guardado',
        paragraphs: [
          'No JPEG, o EXIF fica num segmento APP1 perto do início do arquivo e é dividido em diretórios (IFDs): IFD0 para dados básicos da imagem e do aparelho, o diretório Exif para configurações da câmera e [o diretório GPS para a localização](remove-gps-location-from-photos). HEIC, WebP e PNG também podem ter EXIF, nos próprios contêineres.',
        ],
      },
      {
        heading: 'Como ele se compara com XMP, IPTC e C2PA',
        paragraphs: [],
        bullets: [
          'EXIF — dados técnicos de captura de câmeras e celulares.',
          'XMP — um formato XML flexível que editores usam para descrições, palavras-chave, histórico de edição e campos de IA.',
          'IPTC — dados de descrição e direitos usados por redações e bancos de imagens, incluindo o [DigitalSourceType](iptc-digitalsourcetype-ai) para conteúdo de IA.',
          'C2PA — [Content Credentials assinadas](what-is-c2pa-content-credentials) que registram procedência e edições.',
        ],
      },
      {
        heading: 'Por que isso importa',
        paragraphs: [
          'Fotógrafos usam o EXIF para aprender e para manter um registro do trabalho. Para a maioria das pessoas, é sobretudo um risco de privacidade: uma foto pode revelar um endereço, um aparelho e o horário em que alguém esteve em algum lugar. O EXIF também é facílimo de editar, então nunca deve valer como prova sozinho.',
        ],
      },
      {
        heading: 'Como ver e remover do jeito certo',
        paragraphs: [
          'Os painéis de informação do sistema mostram poucos campos; [o AI Label Remover decodifica todos os campos EXIF, XMP e IPTC](image-metadata-viewer-online) e os agrupa por origem. Ao remover o EXIF, mantenha a tag de orientação para as fotos não ficarem giradas, mantenha o perfil de cor para as cores continuarem fiéis e evite [qualquer coisa que recomprima a imagem](remove-metadata-without-losing-quality). A ferramenta para [remover dados EXIF](remove-exif-data) faz as três coisas por você.',
        ],
      },
      {
        heading: 'De onde veio o EXIF',
        paragraphs: [
          'O EXIF surgiu em meados dos anos 1990, criado por fabricantes japoneses de eletrônicos para que câmeras digitais registrassem suas configurações de um jeito comum. Hoje ele é mantido em conjunto pela CIPA e pela JEITA. A ideia central quase não mudou: uma lista de tags numeradas, cada uma com um valor. Versões mais novas trouxeram campos como fuso horário, número de série da lente e, no Exif 3.0, texto UTF-8 completo. Os celulares adotaram o padrão sem mudanças — por isso uma foto de smartphone tem a mesma estrutura de uma câmera compacta de 2005, só que com um GPS muito mais preciso.',
        ],
      },
      {
        heading: 'Campos que surpreendem',
        paragraphs: ['Além de data e local, algumas tags revelam mais do que a maioria imagina:'],
        bullets: [
          'OffsetTime — o fuso horário, que estreita a região mesmo sem GPS.',
          'BodySerialNumber, LensSerialNumber e CameraOwnerName — valores que podem ligar muitas fotos a uma mesma câmera e a uma mesma pessoa.',
          'GPSImgDirection — para onde a câmera apontava, às vezes o bastante para identificar uma janela ou uma sacada.',
          'Software — o app de edição e a versão, uma pista do que foi feito com a imagem.',
          'MakerNote — um bloco privado do fabricante que pode guardar contagem de disparos, números de série internos e dados de foco ou detecção de rostos.',
        ],
      },
      {
        heading: 'A miniatura que sobrevive às suas edições',
        paragraphs: [
          'Muitos arquivos guardam uma pequena prévia num segundo diretório, o IFD1. Alguns editores atualizam a imagem principal mas deixam essa prévia intacta, então um corte ou um desfoque pode ser desfeito só lendo a miniatura. Os celulares também guardam prévias maiores e imagens secundárias (MPF) com EXIF próprio. Uma limpeza bem-feita remove essas cópias escondidas também — é por isso que o AI Label Remover descarta miniaturas embutidas e imagens MPF em vez de só apagar as tags de GPS.',
        ],
      },
      {
        heading: 'O que manter e o que remover',
        paragraphs: [
          'Para tudo o que é compartilhado em público — posts, anúncios, anexos de chat, fóruns —, remover todo o EXIF identificável é o padrão seguro. Duas informações valem ser mantidas porque afetam a exibição, não a identidade: a tag de orientação e o perfil de cor. Se você quer crédito pelo seu trabalho, uma legenda ou marca visível resiste muito melhor que um campo de copyright no EXIF, que a maioria das plataformas descarta de qualquer jeito. Guarde os originais no seu próprio arquivo e compartilhe a cópia limpa.',
        ],
      },
    ],
    faqHeading: 'Sobre o EXIF',
    faq: [
      { q: 'EXIF e metadados são a mesma coisa?', a: 'O EXIF é um tipo de metadado. Um arquivo também pode ter XMP, IPTC, C2PA e texto próprio do formato, por isso uma limpeza completa vai além do EXIF.' },
      { q: 'Capturas de tela têm EXIF?', a: 'Normalmente bem menos — sem configurações de câmera nem GPS —, mas podem registrar o aparelho, o software e o horário em que foram feitas.' },
      { q: 'Como vejo os dados EXIF?', a: 'No Windows, abra Propriedades › Detalhes; no Mac, use o Inspetor da Pré-Visualização; no celular, abra as informações da foto. Para ver todos os campos, incluindo XMP e IPTC, use um visualizador completo como o AI Label Remover.' },
      { q: 'O EXIF afeta a aparência da imagem?', a: 'Não. O EXIF fica separado dos dados da imagem, então removê-lo não muda nada visualmente.' },
      { q: 'O EXIF pode ser falsificado?', a: 'Facilmente. Ferramentas comuns reescrevem campos EXIF, então trate-os como pistas, nunca como prova.' },
      { q: 'A orientação também é EXIF — o AI Label Remover mantém?', a: 'Sim. Ela é gravada de volta num bloco EXIF mínimo para as fotos continuarem aparecendo na posição certa.' },
    ],
  },
};

export default ptBR;
