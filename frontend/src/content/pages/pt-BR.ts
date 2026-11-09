import type { Pages } from './types';

const ptBR: Pages = {
  home: {
    reassure: 'Online, grátis, sem cadastro e sem instalar nada — as fotos são lidas e limpas no seu navegador e nunca são enviadas a um servidor.',
    ctaTools: 'Ver todas as ferramentas',
    sources: {
      label: 'Lê e remove metadados de imagens criadas com',
      note: 'Os nomes de produtos só indicam a origem das imagens; o AI Label Remover não tem vínculo com essas empresas.',
    },
    start: {
      title: 'Comece pelo arquivo que você tem',
      lead: 'Escolha o que precisa fazer — cada ferramenta tem a área de soltar arquivos no topo da página.',
      badge: 'Recomendado',
      open: 'Abrir ferramenta',
    },
    nav: {
      remove: 'Remover metadados',
      check: 'Ver e verificar',
      learn: 'Aprender',
      viewer: 'Ver metadados de fotos',
      aiCheck: 'Verificar se é IA',
      whatIs: 'O que são metadados?',
    },
    learn: {
      what: {
        title: 'O que são metadados?',
        paragraphs: [
          'Metadados são “dados sobre dados”: anotações guardadas dentro de um arquivo de imagem que nunca aparecem na foto. Câmeras, celulares, editores de imagem e geradores de imagens com IA adicionam essas informações automaticamente, quase sempre sem avisar.',
          'Nas fotos, os metadados se dividem em cinco grandes grupos. Cada um responde a uma pergunta diferente sobre a imagem — e sobre quem a tirou ou criou.',
        ],
        types: [
          { name: 'Descritivos', text: 'Título, legenda, palavras-chave, nomes das pessoas na foto.', example: 'IPTC Caption, XMP dc:title' },
          { name: 'Técnicos', text: 'Marca e modelo da câmera, lente, abertura, velocidade, ISO, número de série.', example: 'EXIF Make, Model, BodySerialNumber' },
          { name: 'Local e horário', text: 'Coordenadas GPS, altitude, data da captura e fuso horário.', example: 'EXIF GPSLatitude, DateTimeOriginal' },
          { name: 'Direitos e gestão', text: 'Autor, proprietário, copyright, último software de edição.', example: 'EXIF Artist, Copyright, Software' },
          { name: 'Procedência e IA', text: 'Content Credentials, rótulos “feito com IA”, prompts e workflows.', example: 'C2PA manifest, IPTC DigitalSourceType' },
        ],
        synonyms:
          'Você vai ver vários nomes para a mesma tarefa — “removedor de metadados”, “apagar EXIF”, “limpador de metadados”, “tirar informações da foto” —, e todos significam retirar as anotações ocultas do arquivo sem mudar a imagem. Da mesma forma, um “visualizador”, “leitor” ou “verificador de metadados” mostra o que há dentro do arquivo. O AI Label Remover faz as duas coisas.',
      },
      why: {
        title: 'Por que ver e remover metadados antes de compartilhar uma foto?',
        paragraphs: [
          'Um único campo de metadados costuma ser inofensivo, mas juntos eles dizem muito sobre você. Uma foto tirada em casa e publicada em um site de classificados pode levar coordenadas GPS com precisão de poucos metros; imagens enviadas por e-mail ou link na nuvem mantêm tudo o que a câmera gravou. Veja [como o GPS das fotos pode revelar seu endereço](remove-gps-location-from-photos).',
          'Em imagens criadas ou editadas com IA, os metadados também decidem se uma plataforma exibe o rótulo “Feito com IA” e podem expor o prompt completo que você escreveu.',
        ],
        bullets: [
          'Revelar onde você mora, trabalha ou viaja pelas coordenadas GPS.',
          'Ligar várias fotos à mesma pessoa pelo número de série da câmera ou nome do proprietário.',
          'Expor prompts, seeds, modelos e workflows que você queria manter em sigilo.',
          'Receber um rótulo de IA de uma plataforma por causa de dados C2PA ou IPTC anexados.',
        ],
      },
      standards: {
        title: 'Padrões de metadados mais comuns em fotos',
        lead: 'Um mesmo arquivo de imagem pode guardar vários “compartimentos” de metadados ao mesmo tempo, cada um seguindo um padrão diferente. O AI Label Remover lê e remove todos os listados abaixo.',
        items: [
          { name: 'EXIF', text: 'Gravado por câmeras e celulares: configurações de exposição, aparelho, data e hora, GPS, miniaturas. [Entenda o EXIF](what-is-exif-data).' },
          { name: 'XMP', text: 'Formato XML da Adobe para histórico de edição, classificações, palavras-chave e muitas propriedades ligadas à IA.' },
          { name: 'IPTC', text: 'O padrão das redações: legenda, autor, copyright e a tag [DigitalSourceType](iptc-digitalsourcetype-ai), que declara imagens de IA.' },
          { name: 'C2PA', text: 'Content Credentials assinadas criptograficamente que registram como um arquivo foi criado e editado. [O que é C2PA](what-is-c2pa-content-credentials).' },
          { name: 'PNG text', text: 'Chunks tEXt, iTXt e zTXt onde o [Stable Diffusion e o ComfyUI](remove-stable-diffusion-comfyui-metadata) guardam prompts e workflows.' },
        ],
      },
    },
    security: {
      title: 'Suas fotos continuam seguras',
      lead: 'Em qualquer ferramenta que lida com arquivos pessoais, a primeira pergunta é “para onde vão minhas fotos?”. A resposta do AI Label Remover: para lugar nenhum.',
      items: [
        { title: '100% no seu dispositivo', text: 'A leitura e a limpeza rodam em um Web Worker dentro da aba do navegador. Nenhum servidor recebe seus arquivos.' },
        { title: 'Nada armazenado, sem treinar IA', text: 'Como as fotos nunca são enviadas, não existe cópia para armazenar, vazar ou usar no treino de um modelo.' },
        { title: 'Funciona offline', text: 'Carregue a página, desligue o Wi-Fi e limpe um arquivo — continua funcionando. A aba Rede do DevTools não mostra nenhum dado de imagem saindo.' },
        { title: 'Sem conta, sem rastreamento', text: 'Sem cadastro, sem analytics, anúncios ou pixels de terceiros. O site só lembra o idioma e o tema que você escolher.' },
      ],
    },
    faq: [
      { q: 'Qual a diferença entre EXIF e metadados?', a: 'EXIF é um tipo de metadado — o que câmeras e celulares gravam. “Metadados” é o termo mais amplo e inclui também XMP, IPTC, C2PA e os chunks de texto do PNG. Veja [o que são dados EXIF](what-is-exif-data).' },
      { q: 'Os metadados podem mostrar onde uma foto foi tirada?', a: 'Sim, se a imagem tiver tags de GPS. Os celulares costumam gravar latitude, longitude e altitude quando a câmera tem acesso à localização. O [removedor de EXIF](remove-exif-data) apaga essas tags sem mexer na qualidade.' },
      { q: 'Como remover metadados de IA de uma imagem?', a: 'Solte a imagem na caixa no topo desta página e clique em “Remover todos os metadados”, ou use o [limpador de tags de IA](ai-tag-cleaner) para ver antes os dados C2PA, IPTC e o prompt.' },
      { q: 'É seguro enviar minhas fotos aqui?', a: 'Suas fotos não são enviadas. O AI Label Remover abre os arquivos no navegador, processa tudo na memória da aba e salva a cópia limpa direto no seu dispositivo. Depois que a página carrega, você pode ficar offline e ela continua funcionando.' },
    ],
  },
  labels: {
    tools: 'Mais ferramentas de metadados',
    relatedTools: 'Ferramentas específicas para isso',
    homeTitle: 'Ferramentas para cada necessidade',
    homeLead: 'Cada página foca em uma tarefa e já traz a ferramenta pronta para usar no topo.',
    formats: 'O que é removido e o que fica',
    contact: 'Contato',
    contactText: 'Dúvidas, bugs ou um arquivo que não foi limpo direito? Escreva para',
    updated: 'Atualizado em {date}',
  },
  tools: {
    'ai-tag-cleaner': {
      metaTitle: 'AI Tag Cleaner – Remova tags de IA das suas imagens',
      description: 'Limpe as tags de IA das imagens: IPTC “gerado por IA”, C2PA, nome do gerador no XMP e prompts. Sem perda, grátis, direto no navegador e sem enviar nada.',
      navLabel: 'Limpador de tags de IA',
      h1: 'AI Tag Cleaner: limpe as tags de IA das suas imagens',
      lead: 'Geradores de IA e editores com IA marcam os arquivos que tocam: um tipo de fonte “gerado por IA”, um registro C2PA assinado, o nome do app e às vezes o prompt inteiro. Solte uma imagem abaixo para ver todas as tags de IA dela e remova tudo sem recomprimir nenhum pixel.',
      sections: [
        {
          heading: 'O que conta como tag de IA',
          paragraphs: [
            'Tag de IA é qualquer campo do arquivo que diz, ou sugere, que houve uso de IA. Elas ficam espalhadas por vários padrões de metadados ao mesmo tempo, por isso apagar um campo à mão quase nunca resolve:',
          ],
          bullets: [
            'Valores [DigitalSourceType](iptc-digitalsourcetype-ai) do IPTC e do XMP, como trainedAlgorithmicMedia ou compositeWithTrainedAlgorithmicMedia.',
            'Ações das [Content Credentials C2PA](what-is-c2pa-content-credentials) que marcam etapas generativas, gravadas por ChatGPT, Firefly, Photoshop e outros.',
            'Campos Software e CreatorTool com o nome do gerador, além do histórico XMP de edições com IA.',
            'Prompt, seed e modelo nos chunks PNG do [Stable Diffusion e ComfyUI](remove-stable-diffusion-comfyui-metadata).',
          ],
        },
        {
          heading: 'Como o limpador de tags de IA funciona',
          paragraphs: [
            'O AI Label Remover lê a estrutura do arquivo direto no navegador. Cada tag de IA aparece com o campo exato de onde veio, e o arquivo recebe um veredito — “Rastros de IA encontrados”, “Vale uma segunda olhada” ou “Sem rastros de IA” — antes de qualquer mudança.',
            'Ao tocar em “Remover todos os metadados”, os blocos com essas tags são cortados: XMP, IPTC, EXIF, o armazenamento de manifestos C2PA e os chunks de texto PNG. Os dados da imagem são copiados byte a byte, e a cópia limpa é lida de novo para confirmar que nenhuma tag de IA ficou.',
          ],
        },
        {
          heading: 'Qual ferramenta deixa qual tag',
          paragraphs: [
            'Imagens do ChatGPT e do Gemini chegam com registros C2PA; o Firefly e o Preenchimento generativo do Photoshop adicionam C2PA e DigitalSourceType; o Midjourney grava XMP descritivo; as interfaces do Stable Diffusion guardam todas as configurações no PNG. [Quais metadados os geradores de imagem com IA adicionam](what-metadata-ai-image-generators-add) mostra um por um.',
          ],
        },
        {
          heading: 'O que um limpador de tags não consegue fazer',
          paragraphs: [
            'A limpeza atua só nos metadados. [Marcas d’água invisíveis como o SynthID](synthid-invisible-ai-watermarks) ficam nos pixels e continuam lá, e as plataformas podem usar classificadores próprios. Limpar tags serve para privacidade e para corrigir rótulos errados em fotos reais — se a imagem foi gerada por IA e parece real, as regras das plataformas geralmente exigem que você informe.',
          ],
        },
      ],
      faqHeading: 'Perguntas sobre o limpador de tags de IA',
      faq: [
        { q: 'Tag de IA e rótulo de IA são a mesma coisa?', a: 'Não exatamente. A tag é um dado dentro do arquivo; o rótulo é o que a plataforma mostra, como “Informações de IA” no Instagram. Muitas vezes o rótulo nasce da tag. Para evitar isso numa foto real, veja [No AI Tag](no-ai-tag).' },
        { q: 'Dá para remover só as tags de IA e manter o resto?', a: 'O limpador remove blocos inteiros de metadados, não campos soltos, porque as tags de IA ficam espalhadas por vários deles. Rotação, perfil de cor ICC e tamanho em pixels são sempre mantidos, então a imagem aparece igual a antes.' },
        { q: 'Limpar as tags reduz a qualidade?', a: 'Não. Nada é recomprimido; só os metadados saem. Veja [por que remover sem perda importa](remove-metadata-without-losing-quality).' },
        { q: 'Quais formatos são aceitos?', a: 'JPG, PNG, WebP, GIF, HEIC/HEIF e AVIF — até 50 arquivos por vez, cada um com até 25 MB. Prompts em PNG também podem ser removidos com o [removedor de metadados PNG](png-metadata-remover).' },
        { q: 'Remove os metadados das imagens do ChatGPT ou do Gemini?', a: 'Remove as Content Credentials C2PA e os campos IPTC que esses serviços gravam. O Google também embute uma marca d’água SynthID nos pixels, que nenhuma ferramenta de metadados consegue tirar. Detalhes em [metadados de imagens do ChatGPT e Gemini](chatgpt-gemini-image-metadata).' },
        { q: 'Posso ver o prompt antes de apagar?', a: 'Pode. A aba “Metadados brutos” mostra prompts, workflows e nomes de geradores palavra por palavra, para você copiar o que quiser guardar antes de limpar.' },
      ],
      related: ['iptc-digitalsourcetype-ai', 'what-metadata-ai-image-generators-add', 'how-to-check-if-image-is-ai-generated'],
      updated: '2026-11-05',
    },
    'no-ai-tag': {
      metaTitle: 'No AI Tag – Poste fotos reais sem o rótulo de IA',
      description: 'Sua foto real ganhou “Informações de IA”? Remova os dados C2PA e IPTC que causam o rótulo e poste sem tag de IA. Sem perda, grátis, no navegador.',
      navLabel: 'No AI Tag',
      h1: 'No AI Tag: suas fotos reais sem tag de IA',
      lead: 'Um pequeno ajuste generativo no Photoshop ou num app do celular pode bastar para o Instagram, o Facebook ou o Threads colocarem “Informações de IA” numa foto verdadeira. Solte o arquivo abaixo para ver quais dados disparam o rótulo e compartilhe uma cópia limpa, sem tag de IA nos metadados.',
      sections: [
        {
          heading: 'Por que uma foto real ganha tag de IA',
          paragraphs: [
            'As plataformas leem os dados de procedência que os editores anexam ao arquivo. [Por que fotos reais ganham “Informações de IA”](made-with-ai-label) explica em detalhes; as causas comuns são:',
          ],
          bullets: [
            'Um manifesto C2PA que registra uma etapa generativa, como Preenchimento generativo, apagar com IA ou expandir com IA.',
            'Um valor [DigitalSourceType](iptc-digitalsourcetype-ai) no IPTC ou XMP dizendo que a imagem foi composta com IA.',
            'Content Credentials que o app de edição adiciona por padrão ao exportar.',
          ],
        },
        {
          heading: 'Como postar sem tag de IA',
          paragraphs: ['Leva menos de um minuto e nada sai do seu aparelho:'],
          bullets: [
            'Solte a foto editada na caixa no topo desta página.',
            'Leia o veredito e os campos por trás dele — o relatório cita a ação C2PA ou o valor IPTC exato.',
            'Toque em “Remover todos os metadados” e salve a cópia limpa.',
            'Publique a cópia limpa, não a exportação original.',
          ],
        },
        {
          heading: 'Evite a tag na origem',
          paragraphs: [
            'Se você edita com frequência, [desative as Content Credentials no Photoshop e no Lightroom](turn-off-content-credentials-photoshop-lightroom) para que nem sejam gravadas. [Quais plataformas rotulam imagens de IA](which-platforms-label-ai-images) resume o que Meta, TikTok, YouTube e outras leem.',
          ],
        },
        {
          heading: 'O que “No AI Tag” pode e não pode prometer',
          paragraphs: [
            'Remover os metadados tira o motivo que está no arquivo, que é a causa na maioria das fotos editadas. Não remove [marcas d’água nos pixels como o SynthID](synthid-invisible-ai-watermarks), e a plataforma ainda pode rotular pela própria detecção ou pedir que você declare. Esta página é para fotos reais com pequenos ajustes: se a imagem foi gerada por IA e pode enganar, informe isso.',
          ],
        },
      ],
      faqHeading: 'Perguntas sobre No AI Tag',
      faq: [
        { q: 'Isso remove o “Informações de IA” de um post já publicado?', a: 'Não. O rótulo pertence ao post na plataforma. Apague ou arquive o post, limpe o arquivo aqui e publique a cópia limpa.' },
        { q: 'É garantido que a tag não vai aparecer?', a: 'Não. Os metadados que as plataformas leem são removidos, mas elas podem usar outros sinais. Na maioria das fotos editadas, os metadados são o motivo da tag.' },
        { q: 'Funciona com fotos de iPhone e Android?', a: 'Sim. HEIC do iPhone e JPG do Android são limpos sem conversão. Há também um [removedor de metadados HEIC](heic-metadata-remover) dedicado.' },
        { q: 'E as tags de IA de uma imagem totalmente gerada?', a: 'O [AI Tag Cleaner](ai-tag-cleaner) mostra e remove essas tags, mas as regras das plataformas geralmente exigem que você mesmo rotule imagens de IA realistas.' },
      ],
      related: ['made-with-ai-label', 'which-platforms-label-ai-images', 'turn-off-content-credentials-photoshop-lightroom'],
      updated: '2026-11-05',
    },
    'remove-exif-data': {
      metaTitle: 'Remover dados EXIF de fotos online, grátis e privado',
      description: 'Remova dados EXIF — GPS, câmera, número de série, data — de JPG, HEIC, PNG e WebP no navegador. Sem upload, sem perda de qualidade, até 50 arquivos.',
      navLabel: 'Remover EXIF',
      h1: 'Remover dados EXIF de fotos',
      lead: 'Solte suas fotos abaixo para ver cada campo EXIF que elas carregam — posição GPS, câmera e lente, número de série, horário da foto — e remova tudo com um clique. Tudo roda no seu dispositivo; os arquivos nunca são enviados.',
      sections: [
        {
          heading: 'O que os dados EXIF entregam',
          paragraphs: [
            'EXIF é o bloco de anotações técnicas que a câmera ou o celular grava em cada foto. Sozinho, quase tudo é inofensivo, mas junto pode dizer muito sobre você. [Nosso guia sobre EXIF](what-is-exif-data) passa por cada tag comum; estas são as que importam para a privacidade:',
          ],
          bullets: [
            'Latitude, longitude e altitude do GPS — muitas vezes com precisão de poucos metros, o bastante para achar uma casa.',
            'Data e hora da foto, com o fuso horário.',
            'Marca e modelo da câmera ou do celular, a lente e, em muitas câmeras, um número de série que liga suas fotos entre si.',
            'Nome do dono ou autor e o programa que editou o arquivo por último.',
            'Uma miniatura embutida, que pode continuar mostrando a imagem original depois de um corte.',
          ],
        },
        {
          heading: 'Como este removedor de EXIF funciona',
          paragraphs: [
            'O AI Label Remover lê a estrutura do arquivo diretamente. Num JPEG, ele recorta o segmento APP1 que guarda EXIF e XMP, além de IPTC, comentários e miniaturas embutidas; em HEIC, PNG e WebP, remove as caixas ou chunks equivalentes. Os dados comprimidos da imagem são copiados byte a byte, então nada é recodificado e a foto fica idêntica.',
            'Os campos que controlam como a foto aparece são mantidos de propósito: rotação, perfil de cor ICC e tamanho em pixels. Assim você evita fotos de lado e cores lavadas que ferramentas mais simples deixam. No fim, o arquivo limpo é lido de novo para você ver que os campos EXIF sumiram de verdade.',
          ],
        },
        {
          heading: 'Quando tirar o EXIF antes de compartilhar',
          paragraphs: [
            'Muitas redes sociais grandes removem o EXIF no upload, mas vários lugares não: anexos de e-mail, links de armazenamento em nuvem, fóruns, sites de compra e venda, apps de mensagem que mandam arquivos em “qualidade original” e o seu próprio site. [Quais plataformas removem metadados](which-platforms-strip-photo-metadata) lista os mais comuns. Se você não sabe onde a foto vai parar, limpar antes é o caminho seguro.',
            'Vender algo online, postar uma foto tirada em casa ou mandar imagens para alguém que você acabou de conhecer são os casos clássicos em que [os dados de GPS podem revelar um local](remove-gps-location-from-photos).',
          ],
        },
        {
          heading: 'Privado por design',
          paragraphs: [
            'Removedores de EXIF online normalmente enviam sua foto para um servidor, processam lá e devolvem. O AI Label Remover faz todo o trabalho em Web Workers dentro da aba do navegador: depois que a página carrega, dá até para desligar a internet que ele continua funcionando. Sem conta, sem marca d’água e sem limite além de 25 MB e 40 megapixels por arquivo.',
          ],
        },
      ],
      faqHeading: 'Dúvidas sobre remover EXIF',
      faq: [
        { q: 'Remover o EXIF reduz a qualidade da imagem?', a: 'Não. Só blocos de metadados são recortados; os dados comprimidos da imagem são copiados sem alteração, então resolução, nitidez e cor ficam exatamente iguais. Veja [por que salvar de novo perde qualidade](remove-metadata-without-losing-quality).' },
        { q: 'A foto continua na orientação certa?', a: 'Sim. O valor de orientação é mantido para a imagem aparecer como antes, junto com o perfil de cor ICC.' },
        { q: 'Dá para remover o EXIF de fotos HEIC do iPhone?', a: 'Sim. Arquivos HEIC e HEIF são aceitos diretamente, sem converter para JPEG antes. Há também uma página dedicada para [remover metadados de HEIC](heic-metadata-remover).' },
        { q: 'Como confiro que o EXIF sumiu?', a: 'Depois da limpeza, o AI Label Remover lê o arquivo novo e mostra quais campos restam. Você também pode abrir no [visualizador de metadados online](image-metadata-viewer-online) que preferir ou nas propriedades do arquivo no sistema.' },
        { q: 'Dá para fazer isso sem nenhum site?', a: 'Dá — Windows, macOS e celulares têm opções nativas, cada uma com limites. [Remover metadados no Windows e no Mac](remove-metadata-windows-mac) e [no iPhone e Android](view-remove-metadata-iphone-android) comparam as opções.' },
      ],
      related: ['what-is-exif-data', 'remove-gps-location-from-photos', 'which-platforms-strip-photo-metadata'],
      updated: '2026-10-23',
    },
    'remove-c2pa-content-credentials': {
      metaTitle: 'Remover Content Credentials C2PA de imagens, grátis',
      description: 'Inspecione e remova Content Credentials C2PA (manifestos JUMBF) de JPG, PNG, HEIC, WebP e AVIF, sem perda de qualidade e sem enviar arquivos para lugar nenhum.',
      navLabel: 'Remover C2PA',
      h1: 'Remover Content Credentials C2PA',
      lead: 'Content Credentials são um histórico assinado anexado à imagem: qual app a criou, quais edições vieram depois e se houve IA generativa. Solte um arquivo abaixo para ler o manifesto C2PA e remova o armazenamento de manifestos inteiro, sem perda.',
      sections: [
        {
          heading: 'O que um manifesto C2PA contém',
          paragraphs: [
            'A C2PA (Coalition for Content Provenance and Authenticity) define como embutir num arquivo um registro assinado criptograficamente. [C2PA explicado](what-is-c2pa-content-credentials) aprofunda o tema; na prática, um manifesto costuma ter:',
          ],
          bullets: [
            'O claim generator — o app ou serviço que assinou, como Photoshop, Firefly, ChatGPT ou uma câmera.',
            'Uma lista de ações: criado, aberto, editado, cortado, e marcas para etapas com IA generativa.',
            'Ingredientes — versões anteriores ou imagens de origem usadas para montar o arquivo.',
            'Um tipo de fonte digital dizendo se o conteúdo foi capturado, composto ou gerado por IA.',
            'Uma assinatura e um certificado que prendem o registro aos dados exatos da imagem.',
          ],
        },
        {
          heading: 'Onde o C2PA fica em cada tipo de arquivo',
          paragraphs: [
            'No JPEG, o armazenamento de manifestos fica em segmentos APP11 como caixas JUMBF; no PNG é um chunk caBX; no HEIC e no AVIF, uma caixa uuid; no WebP, um chunk RIFF próprio. O AI Label Remover encontra cada um, mostra as declarações dentro dele e remove o armazenamento completo, copiando os dados da imagem sem alteração.',
            'Como a assinatura liga o manifesto aos bytes exatos, qualquer novo salvamento em outro app normalmente o quebra ou descarta de qualquer jeito. Remover de forma limpa evita deixar para trás um registro quebrado e meio válido.',
          ],
        },
        {
          heading: 'Motivos para manter e motivos para remover',
          paragraphs: [
            'Content Credentials podem ser valiosas: ajudam veículos de imprensa e criadores a provar a origem de uma imagem. Se esse é o seu objetivo, mantenha — e guarde sempre o original, porque metadados removidos não podem ser restaurados.',
            'Remover faz sentido quando o registro revela mais do que você quer (nomes, histórico de edição, imagens de origem) ou quando um editor colocou uma marca de IA numa foto real depois de um ajuste pequeno. Você também pode [desativar as Content Credentials no Photoshop e no Lightroom](turn-off-content-credentials-photoshop-lightroom) para que nem sejam gravadas.',
          ],
        },
      ],
      faqHeading: 'Dúvidas sobre C2PA',
      faq: [
        { q: 'O AI Label Remover verifica assinaturas C2PA?', a: 'Não. Ele lê e exibe o conteúdo do manifesto, mas não valida a cadeia de certificados. Use a ferramenta oficial de verificação de Content Credentials se precisar validar a assinatura.' },
        { q: 'Remover Content Credentials é legal?', a: 'Remover metadados de arquivos que são seus ou que você pode modificar geralmente não é problema, mas não use isso para enganar sobre quem fez uma imagem ou como. Isto é informação geral, não aconselhamento jurídico.' },
        { q: 'Por que minha foto aparece como “Vale uma segunda olhada”?', a: 'O arquivo tem um manifesto C2PA que não menciona IA explicitamente. Algumas plataformas leem qualquer manifesto como pista, então confira as ações listadas antes de decidir.' },
        { q: 'A plataforma ainda vai saber que a imagem foi editada?', a: 'Não pelo manifesto removido. As plataformas podem usar outros sinais, e [marcas d’água invisíveis](synthid-invisible-ai-watermarks) não são afetadas pela remoção de metadados.' },
      ],
      related: ['what-is-c2pa-content-credentials', 'turn-off-content-credentials-photoshop-lightroom', 'iptc-digitalsourcetype-ai'],
      updated: '2026-10-23',
    },
    'heic-metadata-remover': {
      metaTitle: 'Remover metadados HEIC – EXIF e GPS de fotos do iPhone',
      description: 'Remova EXIF, localização GPS e datas de fotos HEIC e HEIF do iPhone sem converter para JPEG. Sem perda, no navegador, sem enviar nada.',
      navLabel: 'Remover metadados HEIC',
      h1: 'Remover metadados HEIC de fotos do iPhone',
      lead: 'O iPhone salva as fotos em HEIC, e cada uma registra onde e quando foi tirada. Solte arquivos HEIC ou HEIF abaixo para ver esses metadados e removê-los — a foto continua HEIC, sem conversão e sem perder qualidade.',
      sections: [
        {
          heading: 'O que uma foto HEIC do iPhone registra',
          paragraphs: ['Uma foto típica do iPhone carrega mais do que a maioria imagina:'],
          bullets: [
            'Coordenadas GPS precisas, altitude e direção para onde a câmera apontava.',
            'Data, hora e fuso horário da foto, além de datas de modificação.',
            'Modelo do aparelho, lente, configurações da câmera e versão do iOS.',
            'Dados da Apple, como o identificador que pareia uma Live Photo.',
            'Dados XMP gravados por apps de edição, às vezes com registros C2PA.',
          ],
        },
        {
          heading: 'Remover metadados sem converter para JPEG',
          paragraphs: [
            'O conselho comum é converter HEIC para JPEG e torcer para os metadados não sobreviverem. Isso recodifica a imagem, perde qualidade e muitas vezes descarta o perfil de cor de gama ampla. O AI Label Remover edita o próprio contêiner HEIC: remove os itens Exif e XMP, as caixas uuid de C2PA e as caixas de data, e mantém intactos os dados de imagem HEVC, a rotação (irot/imir) e o perfil de cor (colr).',
            'O mesmo motor cuida do AVIF, que usa o mesmo formato de contêiner ISOBMFF, então exportações AVIF de apps modernos são limpas do mesmo jeito.',
          ],
        },
        {
          heading: 'Ajustes do iPhone ou limpar o arquivo',
          paragraphs: [
            'O iOS permite desligar a localização num compartilhamento específico pelo botão “Opções” da folha de compartilhamento, e o app Fotos ajusta ou remove a localização foto a foto. Funciona para envios avulsos, mas é fácil esquecer e não remove os outros campos. [Ver e remover metadados no iPhone e Android](view-remove-metadata-iphone-android) compara as opções nativas.',
            'Para um lote de fotos — uma pasta de viagem, fotos de produto ou imagens para um anúncio —, soltar tudo no AI Label Remover e salvar um ZIP é mais rápido, e o relatório de antes e depois mostra exatamente o que saiu.',
          ],
        },
      ],
      faqHeading: 'Dúvidas sobre HEIC',
      faq: [
        { q: 'Funciona no Windows, onde às vezes o HEIC nem abre?', a: 'Sim. O AI Label Remover lê a estrutura HEIC por conta própria, então não precisa de codec HEIC instalado. Arquivos HEIC mostram um rótulo de formato em vez de miniatura, mas a leitura e a limpeza funcionam normalmente.' },
        { q: 'O arquivo limpo abre no app Fotos?', a: 'Sim. O resultado é um HEIC padrão com os mesmos dados de imagem; só os itens de metadados são removidos.' },
        { q: 'Funciona com Live Photos?', a: 'O AI Label Remover processa a imagem estática HEIC. O vídeo pareado de uma Live Photo é um arquivo separado e não é alterado.' },
        { q: 'Tem limite de tamanho?', a: 'Cada arquivo pode ter até 25 MB e 40 megapixels, o que cobre as fotos de qualquer iPhone atual, e dá para limpar 50 de uma vez.' },
      ],
      related: ['view-remove-metadata-iphone-android', 'remove-gps-location-from-photos', 'batch-remove-metadata'],
      updated: '2026-10-23',
    },
    'png-metadata-remover': {
      metaTitle: 'Remover metadados de PNG – prompts e chunks de texto',
      description: 'Remova metadados de PNG — chunks tEXt, iTXt e zTXt com prompts do Stable Diffusion ou ComfyUI, XMP, eXIf e C2PA — mantendo a imagem sem perdas.',
      navLabel: 'Remover metadados PNG',
      h1: 'Remover metadados de PNG',
      lead: 'Arquivos PNG escondem metadados em chunks de texto: prompts e workflows de IA, nomes de autor, software e datas. Solte seus PNG abaixo para ler cada chunk e removê-los enquanto os dados da imagem ficam idênticos bit a bit.',
      sections: [
        {
          heading: 'Onde o PNG guarda os metadados',
          paragraphs: ['Um PNG é uma sequência de chunks. A imagem fica em IHDR, PLTE e IDAT; o resto é opcional. Os chunks que o AI Label Remover remove são:'],
          bullets: [
            'tEXt, zTXt e iTXt — texto livre, texto comprimido e texto internacional. O Stable Diffusion WebUI grava aqui um chunk “parameters”; o ComfyUI grava JSON “prompt” e “workflow”.',
            'Pacotes XMP guardados em iTXt, incluindo declarações IPTC e de origem por IA.',
            'eXIf — dados EXIF, inclusive GPS quando um app os copiou de uma foto.',
            'caBX — Content Credentials C2PA.',
            'tIME (data da última modificação) e dSIG (assinatura digital).',
          ],
        },
        {
          heading: 'O que fica para a imagem continuar igual',
          paragraphs: [
            'Transparência (tRNS), gama e cromaticidade (gAMA, cHRM), o indicador sRGB e o perfil ICC embutido (iCCP) afetam como a imagem aparece, então são mantidos. PNGs animados mantêm os chunks acTL, fcTL e fdAT, e as animações APNG continuam rodando.',
            'Como os dados IDAT são copiados em vez de recomprimidos, o arquivo limpo é idêntico pixel a pixel ao original — e em geral um pouco menor, já que os chunks de texto saíram.',
          ],
        },
        {
          heading: 'Proteger prompts e workflows de IA',
          paragraphs: [
            'Se você compartilha imagens feitas com Stable Diffusion, Forge ou ComfyUI, qualquer pessoa pode arrastar o PNG de volta para a mesma ferramenta e recuperar seu prompt, seed, modelo e grafo de nós exatos. [Como o Stable Diffusion e o ComfyUI escondem o prompt no PNG](remove-stable-diffusion-comfyui-metadata) mostra o que é salvo. A limpeza remove tudo, e a aba “Metadados brutos” deixa você copiar o prompt antes, se quiser guardar.',
          ],
        },
      ],
      faqHeading: 'Dúvidas sobre metadados de PNG',
      faq: [
        { q: 'Remover metadados do PNG muda as cores?', a: 'Não. Os chunks de cor — sRGB, gAMA, cHRM e iCCP — são mantidos, e os dados de imagem IDAT são copiados sem alteração.' },
        { q: 'Funciona com PNG transparente?', a: 'Sim. Os dados de transparência (tRNS ou o canal alfa dentro do IDAT) fazem parte da imagem e nunca são tocados.' },
        { q: 'Posso guardar o prompt em algum lugar?', a: 'Copie da aba “Metadados brutos” antes de limpar. Depois de removidos, os metadados não podem ser recuperados do arquivo limpo.' },
        { q: 'Serve para PNG do Midjourney ou do DALL·E?', a: 'Sim. Os dados de texto, XMP ou C2PA que esses serviços embutem são removidos do mesmo jeito. Veja [como esconder prompts do Midjourney e DALL·E](hide-midjourney-dalle-prompts).' },
      ],
      related: ['remove-stable-diffusion-comfyui-metadata', 'hide-midjourney-dalle-prompts', 'what-metadata-ai-image-generators-add'],
      updated: '2026-10-23',
    },
  },
  info: {
    about: {
      metaTitle: 'Sobre o AI Label Remover – como o limpador de metadados funciona',
      description: 'Quem faz o AI Label Remover, como o limpador de metadados no navegador funciona, como os artigos são atualizados e o que a ferramenta nunca faz.',
      navLabel: 'Sobre',
      title: 'Sobre o AI Label Remover',
      lead: 'O AI Label Remover é uma ferramenta gratuita para ler e remover metadados ocultos de imagens — EXIF, GPS, XMP, IPTC, Content Credentials C2PA e prompts de IA — feita para que seus arquivos nunca precisem sair do seu dispositivo.',
      sections: [
        {
          heading: 'Por que ele existe',
          paragraphs: [
            'Fotos e imagens de IA carregam muito mais informação do que a maioria imagina: a localização de casa nas tags de GPS, números de série, prompts e workflows inteiros e registros de procedência que as plataformas leem para aplicar rótulos. A maioria dos limpadores online pede que você envie justamente os arquivos que quer proteger. O AI Label Remover foi feito para fazer o mesmo trabalho sem essa troca.',
          ],
        },
        {
          heading: 'Como a ferramenta funciona',
          paragraphs: [
            'Quando você adiciona uma imagem, o navegador a lê localmente. Web Workers analisam a estrutura do arquivo — segmentos JPEG, chunks PNG, chunks RIFF do WebP, blocos GIF e caixas HEIC/AVIF — e listam cada bloco de metadados encontrado. A limpeza remove esses blocos do fluxo de bytes, copia sem alteração os dados comprimidos da imagem e lê o resultado de novo para confirmar o que sobrou.',
            'Não há processamento em servidor. O site é um conjunto de páginas estáticas; depois de carregada, a ferramenta funciona offline.',
          ],
        },
        {
          heading: 'Como nossos artigos são escritos',
          paragraphs: [
            'Os guias deste site se baseiam nas especificações publicadas (EXIF, XMP, IPTC Photo Metadata, C2PA, os formatos PNG e ISOBMFF), nas páginas de ajuda das plataformas e em testes com arquivos reais das ferramentas que descrevemos. Cada artigo mostra a data da última revisão, e atualizamos quando padrões ou políticas mudam.',
            'Os artigos são informação geral, não aconselhamento jurídico. As regras de rótulos de IA mudam com frequência; confira as páginas de ajuda de cada plataforma antes de confiar em qualquer afirmação sobre elas.',
          ],
        },
        {
          heading: 'O que o AI Label Remover não vai fazer',
          paragraphs: [],
          bullets: [
            'Enviar, armazenar ou registrar seus arquivos — não existe servidor que possa recebê-los.',
            'Alterar pixels nem remover marcas d’água invisíveis ou logotipos visíveis.',
            'Prometer que uma plataforma vai ou não vai aplicar um rótulo.',
            'Ajudar a disfarçar imagens de IA como fotos reais. Use para proteger a privacidade e corrigir erros.',
          ],
        },
        {
          heading: 'Independência',
          paragraphs: [
            'O AI Label Remover é independente e não tem vínculo com Meta, Google, OpenAI, Adobe, Midjourney, Apple ou a C2PA. Nomes de produtos são usados só para descrever compatibilidade.',
          ],
        },
      ],
      updated: '2026-10-23',
    },
    privacy: {
      metaTitle: 'Política de privacidade – AI Label Remover',
      description: 'Política de privacidade em linguagem simples: suas imagens não saem do aparelho, sem contas, analytics ou anúncios; só idioma e tema ficam salvos.',
      navLabel: 'Privacidade',
      title: 'Política de privacidade',
      lead: 'O AI Label Remover é uma ferramenta para proteger a sua privacidade, então usá-lo não deveria custar nada dela. Esta página explica em palavras simples o que acontece com suas imagens e a pouca informação que o site manipula.',
      sections: [
        {
          heading: 'Resumindo',
          paragraphs: [],
          bullets: [
            'Suas imagens são processadas no seu próprio aparelho e nunca são enviadas.',
            'Não há contas, cadastro nem lista de e-mails — não sabemos quem você é.',
            'Não há analytics, anúncios, pixels de rastreamento nem scripts de terceiros.',
            'As únicas coisas salvas são o idioma e o tema claro ou escuro, no seu próprio navegador, e você pode apagá-las quando quiser.',
          ],
        },
        {
          heading: 'O que acontece com suas imagens',
          paragraphs: ['Quando você adiciona uma foto ao AI Label Remover, este é todo o caminho dela:'],
          bullets: [
            'O navegador abre o arquivo do seu aparelho e o mantém na memória da aba.',
            'Web Workers dentro da aba leem os metadados e, quando você clica em limpar, criam uma cópia limpa — ainda na memória.',
            'Ao salvar, o navegador grava o arquivo limpo ou o ZIP direto no seu aparelho.',
            'Ao fechar ou recarregar a aba, as imagens e os relatórios somem. Nada fica em servidor algum, porque nenhum servidor as recebe.',
          ],
        },
        {
          heading: 'Você mesmo pode conferir',
          paragraphs: [
            'Você não precisa acreditar na nossa palavra. Carregue a página, desligue o Wi-Fi ou os dados móveis e limpe um arquivo: continua funcionando, porque nada precisa ser enviado. Se você conhece as ferramentas de desenvolvedor, abra a aba Rede durante a limpeza e verá que nenhum dado de imagem sai do seu aparelho.',
          ],
        },
        {
          heading: 'O que não coletamos',
          paragraphs: ['O AI Label Remover não coleta nem guarda:'],
          bullets: [
            'suas imagens, os metadados delas ou os relatórios mostrados na tela;',
            'seu nome, e-mail ou qualquer dado de conta;',
            'sua localização — o GPS encontrado nas fotos aparece só para você, na sua tela;',
            'um histórico dos arquivos que você verificou ou de como usou a ferramenta.',
          ],
        },
        {
          heading: 'O que fica salvo no navegador e como apagar',
          paragraphs: ['Para lembrar suas escolhas, o site salva duas preferências pequenas no seu aparelho:'],
          bullets: [
            'Idioma: uma entrada “lang” no armazenamento local e um cookie próprio “lang”, guardado por um ano, para a página inicial abrir no idioma escolhido. Ele contém só um código de idioma, como “pt-BR”.',
            'Tema: uma entrada “theme” no armazenamento local, se você escolher o modo claro ou escuro.',
            'Para apagar, limpe os cookies e os dados deste site nas configurações do navegador. O AI Label Remover continua funcionando; só esquece suas escolhas.',
          ],
        },
        {
          heading: 'Quando você visita o site',
          paragraphs: [
            'Como qualquer site, cada vez que você abre uma página nosso servidor precisa de alguns dados técnicos básicos para enviá-la: o endereço de rede do seu aparelho (endereço IP), o tipo de navegador que você usa e a página que está abrindo. Esses dados podem ser registrados temporariamente para manter o site funcionando bem e barrar acessos abusivos, e são guardados só pelo tempo necessário para isso. Não os usamos para identificar você, não criamos perfis e nunca os compartilhamos nem vendemos.',
            'Ao abrir a página inicial, o servidor olha o idioma configurado no navegador, o idioma que você escolheu antes e o país de onde você acessa, só para abrir a versão no idioma certo. Isso acontece na hora e não é guardado.',
          ],
        },
        {
          heading: 'Crianças',
          paragraphs: [
            'O AI Label Remover não pede nem coleta informações pessoais de ninguém, inclusive de crianças. Usuários mais novos podem usar a ferramenta sem criar conta nem informar qualquer dado sobre si.',
          ],
        },
        {
          heading: 'Seus direitos',
          paragraphs: [
            'Como o AI Label Remover não coleta seu nome, e-mail ou qualquer conta, não temos nenhum perfil seu para fornecer, corrigir ou apagar. O que o site lembra no seu aparelho está sempre sob o seu controle. Os dados técnicos registrados temporariamente quando você acessa não estão ligados a nenhum nome ou conta e são apagados quando deixam de ser necessários para o funcionamento do site.',
          ],
        },
        {
          heading: 'Mudanças nesta política',
          paragraphs: ['Se a forma como o AI Label Remover trata dados mudar, vamos atualizar esta página e a data no topo.'],
        },
      ],
      updated: '2026-10-23',
    },
  },
};

export default ptBR;
