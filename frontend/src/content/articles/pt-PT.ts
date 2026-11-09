import type { Articles } from './types';

const ptPT: Articles = {
  'made-with-ai-label': {
    metaTitle: 'Porque é que fotos reais recebem a etiqueta IA no Instagram',
    related: ['what-is-c2pa-content-credentials', 'hide-midjourney-dalle-prompts', 'remove-stable-diffusion-comfyui-metadata'],
    description:
      'Uma foto real recebeu a etiqueta «Informações de IA» no Instagram ou Facebook? A causa costuma ser um campo C2PA ou IPTC do editor. Saiba como o remover.',
    updated: '2026-11-09',
    sections: [
      {
        heading: 'A etiqueta lê o ficheiro, não a fotografia',
        paragraphs: [
          'A etiqueta «Informações de IA» da Meta (chamada «Made with AI» até meados de 2024) é aplicada quando uma imagem carregada contém sinais reconhecidos de IA generativa. Dois desses sinais estão dentro do próprio ficheiro: [um manifesto C2PA com Content Credentials](what-is-c2pa-content-credentials) e a propriedade IPTC DigitalSourceType guardada no bloco XMP.',
          'O valor trainedAlgorithmicMedia indica que toda a imagem foi gerada; compositeWithTrainedAlgorithmicMedia indica que uma fotografia real tem partes criadas com IA. Ambos podem ser lidos automaticamente no carregamento. A Meta usa também outros sinais e pede aos utilizadores que declarem eles próprios o conteúdo de IA realista, pelo que os metadados são apenas um fator entre vários.',
        ],
      },
      {
        heading: 'De onde vem o sinal errado',
        paragraphs: ['Em fotografias reais, quem ativa a etiqueta é quase sempre a aplicação de edição, não a câmara. Fontes habituais:'],
        bullets: [
          'Preenchimento generativo, expansão generativa ou ferramentas de remoção com IA, que podem acrescentar ações c2pa e marcar o ficheiro como composição.',
          'Exportar com Content Credentials ativado, o que assina no ficheiro a lista de todas as edições.',
          'Funções da galeria do telemóvel, como a borracha com IA, que deixam uma marca de edição.',
          'A passagem do ficheiro por outras aplicações que copiam os metadados existentes, de modo que a marca sobrevive a várias gravações.',
        ],
      },
      {
        heading: 'Localize o campo no AI Label Remover',
        paragraphs: [
          'Arraste a imagem para a ferramenta. O separador «Vestígios de IA» lista cada sinal e onde se encontra, por exemplo «C2PA · compositeWithTrainedAlgorithmicMedia» ou «XMP · Iptc4xmpExt › DigitalSourceType». Em «Metadados em bruto» vê os valores reais, incluindo o programa que assinou o manifesto e todas as ações c2pa registadas.',
          'O resultado «Vale a pena rever» significa que o ficheiro tem Content Credentials sem uma declaração explícita de IA. Algumas plataformas tratam o próprio manifesto como indício, por isso decida antes de publicar.',
        ],
      },
      {
        heading: 'Limpe a cópia que vai publicar',
        paragraphs: [
          'Prima «Remover todos os metadados». O AI Label Remover corta do fluxo de bytes o armazenamento C2PA e os blocos XMP, IPTC e EXIF, deixando intactos os dados da imagem, as dimensões, a orientação e o perfil de cor. O ficheiro limpo é lido novamente, para que veja antes de guardar que os vestígios de IA desapareceram. Se tiver muitas imagens, pode [limpá-las todas de uma vez](batch-remove-metadata).',
          'Guardar de novo como um JPEG novo também removeria os metadados, mas recomprime a imagem de cada vez e reduz a qualidade. Cortar os blocos evita totalmente essa perda.',
        ],
      },
      {
        heading: 'Corrigir uma etiqueta errada não é esconder uma correta',
        paragraphs: [
          'A limpeza destina-se a etiquetas que descrevem mal o seu trabalho e a manter privados os dados privados. Se uma imagem for total ou maioritariamente gerada e puder passar por real, as regras das plataformas exigem normalmente que o indique: a etiqueta existe para informar quem a vê. Use o AI Label Remover para corrigir erros, não para fazer passar imagens sintéticas por fotografias.',
        ],
      },
    ],
    faqHeading: 'Perguntas sobre a etiqueta Informações de IA',
    faq: [
      {
        q: 'Posso remover a etiqueta depois de publicar?',
        a: 'Normalmente não, editando a publicação. Se a etiqueta descrever mal uma fotografia real, use as opções de recurso ou de estado da conta da plataforma, quando existirem, e limpe o ficheiro antes da próxima publicação.',
      },
      {
        q: 'Se limpar o ficheiro, a etiqueta desaparece de certeza?',
        a: 'Não há garantia. A limpeza remove os sinais guardados no ficheiro, a causa habitual em fotos editadas, mas as plataformas podem usar outros métodos de deteção.',
      },
      {
        q: 'A fotografia muda visualmente?',
        a: 'Não. Só são removidos blocos de metadados. Os dados da imagem são copiados byte a byte, e a orientação e o perfil de cor ICC mantêm-se.',
      },
      {
        q: 'Posso manter as definições da câmara e remover apenas os campos de IA?',
        a: 'De momento não. O AI Label Remover remove de uma só vez todos os metadados identificativos (local, dispositivo, autor e proveniência de IA), a opção mais segura por omissão para partilha pública. As dimensões, a orientação, as cores e a animação mantêm-se sempre.',
      },
    ],
  },

  'remove-stable-diffusion-comfyui-metadata': {
    metaTitle: 'Remover fluxos do ComfyUI e prompts do SD de ficheiros PNG',
    related: ['hide-midjourney-dalle-prompts', 'batch-remove-metadata', 'what-is-c2pa-content-credentials'],
    description:
      'O A1111, o Forge e o ComfyUI escrevem o prompt, a seed, o modelo e todo o fluxo de trabalho em cada PNG. Veja o texto e remova-o sem alterar um único píxel.',
    updated: '2026-11-09',
    sections: [
      {
        heading: 'As suas definições viajam com a imagem',
        paragraphs: [
          'Os geradores locais guardam as definições como texto no ficheiro de saída, para que a imagem possa ser recriada. Nos PNG, esse texto fica em chunks tEXt, zTXt ou iTXt ao lado dos dados da imagem. É habitual encontrar:',
        ],
        bullets: [
          'A1111 e Forge: um chunk «parameters» com o prompt, o prompt negativo, os passos, o sampler, o CFG, a seed, a resolução, o hash e o nome do modelo, e as definições de LoRA e extensões.',
          'ComfyUI: um chunk «prompt» com o grafo de nós executado e um chunk «workflow» com toda a disposição do editor; arraste o PNG para o ComfyUI e toda a configuração volta a aparecer.',
          'InvokeAI, NovelAI e outras interfaces: dados semelhantes com chaves próprias.',
          'Exportações JPEG ou WebP: algumas ferramentas escrevem o mesmo texto no campo EXIF UserComment.',
        ],
      },
      {
        heading: 'Razões para limpar, e razões para não o fazer',
        paragraphs: [
          'Os dados de geração são uma receita completa. Com eles, qualquer pessoa pode reproduzir o seu estilo, ver em que checkpoints e LoRA se apoia, e num fluxo de trabalho podem esconder-se caminhos locais, nomes de pastas ou nomes de utilizador. Grafos grandes do ComfyUI podem ainda acrescentar dezenas de kilobytes a cada imagem.',
          'Por outro lado, os sites de partilha de modelos leem os parâmetros para mostrar as informações de geração, e os colaboradores podem querer o fluxo de trabalho. Por isso, verifique cada ficheiro primeiro: o AI Label Remover mostra tudo antes de remover o que quer que seja.',
        ],
      },
      {
        heading: 'Ler o prompt no AI Label Remover',
        paragraphs: [
          'Arraste o PNG para a ferramenta. Em «Metadados em bruto», cada chunk de texto aparece sob a sua palavra-chave (parameters, prompt, workflow) com todo o conteúdo, e o separador «Vestígios de IA» identifica-o como prompt do Stable Diffusion ou fluxo de trabalho do ComfyUI. Os chunks comprimidos zTXt e iTXt são descomprimidos no navegador para que os possa ler.',
        ],
      },
      {
        heading: 'O que a limpeza conserva',
        paragraphs: [
          'Prima «Remover todos os metadados». O processamento de PNG remove por inteiro os chunks de texto, XMP, EXIF e C2PA e conserva IHDR, IDAT, paleta, transparência, gama e chunks de cor, bem como os chunks de animação APNG. Como os chunks são removidos inteiros, as somas de verificação CRC restantes continuam válidas e o ficheiro abre em qualquer lado.',
          'Abrir e voltar a guardar num editor também removeria o texto, mas recomprime a imagem e pode alterar as cores. A remoção ao nível do byte evita ambas as coisas. O mesmo se aplica às [transferências do Midjourney e do DALL·E](hide-midjourney-dalle-prompts), onde o prompt é guardado de outra forma.',
        ],
      },
    ],
    faqHeading: 'Perguntas sobre os dados do Stable Diffusion e do ComfyUI',
    faq: [
      {
        q: 'Como impeço o A1111 ou o ComfyUI de guardar metadados?',
        a: 'O A1111 e o Forge têm uma definição que deixa de escrever os parâmetros de geração nos PNG, e o ComfyUI pode ser iniciado com a opção --disable-metadata. Ambas só se aplicam a imagens novas, por isso limpe as que já tem.',
      },
      {
        q: 'O ComfyUI consegue reconstruir o fluxo a partir de um PNG limpo?',
        a: 'Não. Os chunks «prompt» e «workflow» desapareceram, por isso arrastar o ficheiro para o ComfyUI não recupera nada. Guarde um original intacto se voltar a precisar do grafo.',
      },
      {
        q: 'O PNG limpo tem exatamente o mesmo aspeto?',
        a: 'Sim. Os chunks IDAT com os píxeis comprimidos são copiados sem alterações, pelo que a imagem é idêntica píxel a píxel.',
      },
      {
        q: 'E as exportações JPEG e WebP?',
        a: 'Os prompts guardados em EXIF UserComment ou em XMP são detetados e removidos também dos ficheiros JPEG e WebP.',
      },
    ],
  },

  'hide-midjourney-dalle-prompts': {
    metaTitle: 'Remover prompts de imagens do Midjourney e do DALL·E',
    related: ['remove-stable-diffusion-comfyui-metadata', 'made-with-ai-label', 'what-is-c2pa-content-credentials'],
    description:
      'As transferências do Midjourney, DALL·E, ChatGPT e Firefly podem conter o prompt, o ID da tarefa e a origem de IA. Verifique o ficheiro antes de o partilhar.',
    updated: '2026-11-09',
    sections: [
      {
        heading: 'O que os geradores online escrevem',
        paragraphs: [
          'Os serviços de imagem online acrescentam cada vez mais metadados às transferências, por transparência e para apoiar normas de proveniência. Os campos variam de serviço para serviço e mudam com o tempo, pelo que a única resposta fiável é abrir o ficheiro. Pode encontrar:',
        ],
        bullets: [
          'Midjourney: o prompt e um ID de tarefa nos campos de descrição ou de comentário, muitas vezes com um IPTC DigitalSourceType que marca a imagem como criada com IA.',
          'DALL·E e a geração de imagens do ChatGPT: [C2PA Content Credentials](what-is-c2pa-content-credentials) com o nome do gerador.',
          'Adobe Firefly: Content Credentials que descrevem a imagem como gerada com IA.',
          'Muitas ferramentas: o nome do programa, a data de criação e, por vezes, um identificador associado à conta.',
        ],
      },
      {
        heading: 'Um prompt é trabalho que vale a pena proteger',
        paragraphs: [
          'Para ilustradores, designers e autores de prompts, um prompt apurado é o resultado de muitas rondas de tentativa e erro. Qualquer visualizador de metadados gratuito mostra o texto incorporado a quem descarregar a sua imagem, pronto a copiar. Os IDs de tarefa e os dados da conta podem ainda associar uma imagem pública a si.',
        ],
      },
      {
        heading: 'Primeiro veja, depois limpe',
        paragraphs: [
          'Arraste a imagem para a ferramenta e leia o relatório. As linhas marcadas «IA» contêm prompts, nomes de geradores e declarações de proveniência; as linhas «Pessoas» contêm autores, descrições e identificadores. Prima «Remover todos os metadados» e guarde o ficheiro limpo, ou todo o lote num ZIP.',
          'Tudo é executado no seu navegador, por isso os prompts que está a proteger não passam por mais nenhum serviço pelo caminho.',
        ],
      },
      {
        heading: 'Limites a conhecer',
        paragraphs: [
          'Alguns fornecedores escondem também marcas de água nos próprios píxeis, como o SynthID da Google. Não são metadados e a limpeza não lhes toca. E, se publicar uma imagem de IA realista, as regras da plataforma podem continuar a exigir que o declare: saiba mais sobre [a etiqueta Informações de IA](made-with-ai-label). A limpeza protege o seu processo; não muda aquilo que a imagem é.',
        ],
      },
    ],
    faqHeading: 'Perguntas sobre os metadados do Midjourney e do DALL·E',
    faq: [
      {
        q: 'Alguém pode ler o meu prompt numa imagem descarregada?',
        a: 'Se o prompt estiver guardado nos metadados do ficheiro, qualquer pessoa com um visualizador de metadados o pode ler e copiar. Limpar o ficheiro antes de o partilhar remove-o.',
      },
      {
        q: 'Todas as transferências do Midjourney contêm o prompt?',
        a: 'Depende do formato e do comportamento atual do serviço. Abra o ficheiro no AI Label Remover para ver exatamente o que contém.',
      },
      {
        q: 'A limpeza remove o SynthID ou marcas de água semelhantes?',
        a: 'Não. As marcas de água invisíveis estão nos dados dos píxeis, que o AI Label Remover nunca altera.',
      },
      {
        q: 'Posso limpar uma série inteira de gerações?',
        a: 'Sim. Carregue até 50 imagens, verifique os relatórios e guarde-as todas num único ZIP.',
      },
    ],
  },

  'what-is-c2pa-content-credentials': {
    metaTitle: 'O que é o C2PA? As Content Credentials explicadas',
    related: ['made-with-ai-label', 'hide-midjourney-dalle-prompts', 'remove-gps-location-from-photos'],
    description:
      'Um guia simples sobre C2PA e Content Credentials: o que regista o manifesto assinado, onde cada formato de ficheiro o guarda e o que implica removê-lo.',
    updated: '2026-11-09',
    sections: [
      {
        heading: 'Em resumo',
        paragraphs: [
          'A Coalition for Content Provenance and Authenticity (C2PA) mantém uma norma aberta para associar aos conteúdos multimédia um histórico que denuncia qualquer adulteração. Os utilizadores conhecem-na como Content Credentials. Câmaras, editores e geradores de IA podem assinar numa imagem um registo de como foi criada: captada com uma câmara, editada numa aplicação ou produzida por um modelo.',
        ],
      },
      {
        heading: 'Anatomia de um manifesto',
        paragraphs: ['Um manifesto é um pacote compacto e estruturado com três partes principais:'],
        bullets: [
          'Claim generator: o programa ou serviço que criou o manifesto, como um editor ou uma API de imagens de IA.',
          'Asserções (assertions): declarações sobre o conteúdo, como c2pa.actions (criado, editado, aberto, redimensionado, etc.), um digitalSourceType e ligações aos ficheiros de origem.',
          'Assinatura: uma assinatura criptográfica e um certificado que identificam quem assina, mais um hash que liga o manifesto exatamente a estes dados de imagem.',
        ],
      },
      {
        heading: 'Onde cada formato o guarda',
        paragraphs: [
          'O manifesto é empacotado num contentor JUMBF que cada formato guarda no seu sítio: segmentos APP11 em JPEG, um chunk caBX em PNG, um chunk C2PA em WebP e uma caixa uuid em HEIC e AVIF. Sendo um bloco separado, pode ser lido e removido sem descodificar a imagem. O AI Label Remover mostra o bloco, o gerador, as ações registadas e o tipo de origem sempre que existem.',
        ],
      },
      {
        heading: 'O que a remoção faz realmente',
        paragraphs: [
          'A limpeza apaga o registo incorporado dessa cópia do ficheiro. Tenha em conta que qualquer edição já quebra a ligação criptográfica (os verificadores assinalam como inválido um manifesto que deixou de corresponder aos píxeis), pelo que removê-lo elimina um registo que, de outro modo, apenas viajaria com o ficheiro.',
          'Alguns sistemas acrescentam credenciais «duradouras»: uma marca de água invisível ou uma impressão digital que permite a um verificador obter o manifesto de um repositório online mesmo depois de a cópia incorporada ter desaparecido. A remoção de metadados não as afeta, porque estão nos píxeis ou num servidor remoto.',
        ],
      },
      {
        heading: 'Manter ou limpar?',
        paragraphs: [
          'As credenciais são úteis quando precisa de mostrar a origem de uma imagem, no jornalismo ou nas suas próprias fotografias originais. Também podem revelar software, histórico de edições e identidade que preferia guardar para si, ou [ativar etiquetas de IA em fotos ligeiramente editadas](made-with-ai-label). Leia primeiro o manifesto e decida ficheiro a ficheiro.',
        ],
      },
    ],
    faqHeading: 'Perguntas sobre o C2PA',
    faq: [
      {
        q: 'Quem usa o C2PA?',
        a: 'A Adobe, a Microsoft, a Google, a OpenAI, a Meta, fabricantes de câmaras como a Leica, a Sony e a Nikon e muitas organizações noticiosas apoiam a norma ou fazem parte da coligação, embora cada uma a use de forma diferente.',
      },
      {
        q: 'O C2PA é uma espécie de marca de água invisível?',
        a: 'Não. O C2PA são metadados guardados ao lado dos dados da imagem. As marcas de água nos píxeis, como o SynthID, são um mecanismo diferente e não são afetadas pela limpeza.',
      },
      {
        q: 'Como verifico a assinatura antes de limpar?',
        a: 'O AI Label Remover mostra o gerador, as ações e o tipo de origem. Para validar totalmente a assinatura, passe primeiro o original por um verificador oficial de Content Credentials.',
      },
      {
        q: 'Remover o C2PA reduz a qualidade?',
        a: 'Não. O manifesto é um bloco à parte; os dados comprimidos da imagem são copiados tal como estão.',
      },
    ],
  },

  'remove-gps-location-from-photos': {
    metaTitle: 'Apagar a localização GPS das fotos no iPhone, Android e PC',
    related: ['batch-remove-metadata', 'what-is-c2pa-content-credentials', 'made-with-ai-label'],
    description:
      'Remova a localização GPS das fotos antes de as partilhar: que campos EXIF revelam o local, o dispositivo e a hora, e como os remover sem perdas.',
    updated: '2026-11-09',
    sections: [
      {
        heading: 'O que o telemóvel grava em cada foto',
        paragraphs: ['Com os serviços de localização ativos, uma fotografia normal de telemóvel pode conter:'],
        bullets: [
          'Latitude, longitude e altitude, muitas vezes com uma precisão de poucos metros, mais uma marca temporal GPS.',
          'O momento exato em que foi tirada e editada pela última vez.',
          'Fabricante e modelo, dados da objetiva e, por vezes, um número de série ou o nome do proprietário.',
          'Pré-visualizações incorporadas e imagens secundárias (mapas de profundidade, imagens MPF) com a sua própria cópia dos dados EXIF.',
        ],
      },
      {
        heading: 'Como o ficheiro original sai para fora',
        paragraphs: [
          'As grandes redes sociais costumam retirar o EXIF do que publicam, mas muitos caminhos entregam o original intacto: «enviar como ficheiro» nas aplicações de mensagens, anexos de e-mail, ligações partilhadas na nuvem, fóruns, sites de compra e venda e portefólios. Uma única foto tirada em casa pode revelar a sua morada; uma série pode revelar a sua rotina.',
        ],
      },
      {
        heading: 'Verifique que localização a foto revela',
        paragraphs: [
          'Arraste a foto para a ferramenta. O separador «O que revela» mostra de imediato se há campos de local, pessoas e hora, com a posição GPS convertida em coordenadas decimais. «Metadados em bruto» lista cada campo agrupado por EXIF IFD0, Exif e GPS.',
        ],
      },
      {
        heading: 'Limpe sem efeitos secundários',
        paragraphs: [
          'Prima «Remover todos os metadados». Desaparecem o GPS, as datas, o dispositivo, o autor e os campos de software, juntamente com as miniaturas incorporadas e as imagens secundárias MPF, que de outro modo guardariam uma cópia oculta. A etiqueta de orientação é reescrita num pequeno bloco EXIF para que as fotos verticais não fiquem de lado, e o perfil de cor é mantido para que as cores continuem fiéis. Os ficheiros HEIC do iPhone são limpos diretamente, sem conversão para JPEG.',
        ],
      },
      {
        heading: 'Trave-o logo na câmara',
        paragraphs: [
          'No iPhone: Definições → Privacidade e segurança → Serviços de localização → Câmara → Nunca. No Android, as etiquetas de localização podem normalmente ser desativadas nas definições da aplicação Câmara (o nome varia consoante o fabricante). Limpar o ficheiro antes de o enviar continua a ser o hábito mais completo, porque remove também os dados do dispositivo, da hora e das pré-visualizações a que as definições do telemóvel não chegam.',
        ],
      },
      {
        heading: 'Até que ponto as coordenadas são precisas',
        paragraphs: [
          'O EXIF guarda a latitude e a longitude em graus, minutos e segundos, e os telemóveis registam os segundos com casas decimais. Um segundo de latitude corresponde a cerca de 31 metros, pelo que um valor com duas casas decimais indica, no papel, um ponto com menos de um metro de largura. A precisão real depende do sinal (muitas vezes 3 a 10 metros ao ar livre, pior no interior), mas continua a bastar para identificar uma única casa. Muitos telemóveis acrescentam ainda a altitude, que pode indicar o andar, e a direção da bússola para onde a objetiva apontava.',
        ],
      },
      {
        heading: 'A localização esconde-se para além das etiquetas GPS',
        paragraphs: [
          'Esvaziar o diretório GPS nem sempre chega. Os gestores de fotografias podem copiar as coordenadas para XMP, e campos IPTC como cidade, local e país podem indicar o sítio em texto legível. O AI Label Remover remove XMP e IPTC juntamente com o EXIF, pelo que essas cópias também desaparecem. O que nenhuma ferramenta de metadados consegue remover é a própria imagem: placas de rua, números de porta, a vista de uma janela ou um reflexo podem denunciar o local, por isso observe a foto antes de a publicar.',
        ],
      },
      {
        heading: 'Uma verificação rápida antes de partilhar',
        paragraphs: [],
        bullets: [
          'Arraste a foto para o AI Label Remover e veja o separador «O que revela».',
          'Se aparecer um local, prima «Remover todos os metadados» e guarde a cópia limpa.',
          'Confirme que o painel verde indica que o local, as pessoas e a hora desapareceram.',
          'Procure pistas visíveis na imagem: moradas, matrículas, pontos de referência.',
          'Partilhe a cópia limpa e guarde o original na sua biblioteca. Com muitas fotos, a [limpeza em lote](batch-remove-metadata) poupa tempo.',
        ],
      },
    ],
    faqHeading: 'Perguntas sobre GPS e privacidade das fotos',
    faq: [
      {
        q: 'A localização pode ser recuperada depois da limpeza?',
        a: 'A partir do ficheiro limpo, não: os campos são removidos, não escondidos. O original no telemóvel continua a ter a localização, por isso partilhe apenas a cópia limpa.',
      },
      {
        q: 'Se desligar o GPS, as fotos continuam a ser etiquetadas?',
        a: 'Podem continuar. O telemóvel consegue calcular a posição através de redes Wi-Fi e móveis, por isso desative o acesso à localização da própria aplicação da câmara, não apenas o GPS.',
      },
      {
        q: 'As redes sociais não removem o GPS de qualquer forma?',
        a: 'Muitas das grandes removem o EXIF da imagem publicada. Os anexos, documentos e ligações na nuvem costumam manter os metadados originais.',
      },
      {
        q: 'A foto vai aparecer rodada?',
        a: 'Não. A etiqueta de orientação é preservada, por isso a foto aparece exatamente como antes. Os ficheiros HEIC do iPhone também são limpos sem mudança de formato.',
      },
    ],
  },

  'batch-remove-metadata': {
    metaTitle: 'Remover metadados de várias imagens de uma vez, grátis',
    related: ['remove-gps-location-from-photos', 'remove-stable-diffusion-comfyui-metadata', 'hide-midjourney-dalle-prompts'],
    description:
      'Limpe até 50 imagens de uma vez no navegador: como os workers em paralelo mantêm a rapidez, como cada resultado é verificado e como guardar tudo num único ZIP.',
    updated: '2026-11-09',
    sections: [
      {
        heading: 'Um lote do início ao fim',
        paragraphs: [],
        bullets: [
          'Arraste para a ferramenta até 50 ficheiros JPG, PNG, WebP, GIF, HEIC ou AVIF (até 25 MB e 40 megapíxeis cada).',
          'Cada ficheiro é lido automaticamente; clique num ficheiro da fila para ver o respetivo relatório.',
          'Prima uma vez «Remover todos os metadados» para limpar tudo o que foi lido.',
          'Guarde os ficheiros um a um ou prima «Guardar tudo em ZIP» para obter um único arquivo.',
        ],
      },
      {
        heading: 'Rapidez sem servidor',
        paragraphs: [
          'O AI Label Remover reparte o trabalho por vários Web Workers (processos em segundo plano do navegador) de acordo com o número de núcleos do processador. Cada worker pega num ficheiro, analisa-o e devolve os bytes limpos, para que a página se mantenha fluida mesmo com ficheiros HEIC pesados. O ZIP usa o método de armazenamento sem compressão, porque as imagens já estão comprimidas: o empacotamento é rápido e não acrescenta qualquer perda.',
        ],
      },
      {
        heading: 'Cada resultado é lido de novo',
        paragraphs: [
          'Depois da limpeza, cada ficheiro de saída é lido novamente e o painel verde de resultados confirma se o local, as pessoas, a hora e os vestígios de IA desapareceram. Se dois ficheiros tiverem o mesmo nome, a cópia no ZIP recebe um número, para que nada seja substituído.',
        ],
      },
      {
        heading: 'Centenas de ficheiros',
        paragraphs: [
          'Trabalhe em rondas de 50 e arrume a mesa entre rondas para libertar memória. Em telemóveis com pouca memória, feche primeiro outros separadores pesados. Como nada é carregado, pode até trabalhar offline depois de a página ter carregado.',
        ],
      },
      {
        heading: 'Nada sai do computador',
        paragraphs: [
          'Nenhuma imagem é carregada, guardada ou registada; o único tráfego de rede é o carregamento da página. Por isso, a limpeza em lote é adequada para entregas a clientes, sessões inéditas e tudo o que não pode enviar a terceiros, por exemplo para [remover a localização GPS das fotos de férias](remove-gps-location-from-photos) ou [limpar os prompts do Stable Diffusion](remove-stable-diffusion-comfyui-metadata) de uma pasta inteira.',
        ],
      },
    ],
    faqHeading: 'Perguntas sobre a limpeza em lote',
    faq: [
      {
        q: 'Um lote pode misturar formatos diferentes?',
        a: 'Sim. Um mesmo lote pode combinar JPG, PNG, WebP, GIF, HEIC e AVIF, e cada ficheiro mantém o seu formato.',
      },
      {
        q: 'Porque é que o limite é de 50 ficheiros?',
        a: 'Todo o processamento usa a memória do seu dispositivo. O limite mantém estáveis os telemóveis e os portáteis mais antigos; pode fazer tantas rondas quantas quiser.',
      },
      {
        q: 'Os nomes dos ficheiros mudam?',
        a: 'Não. Os ficheiros limpos mantêm o nome. Apenas os duplicados exatos dentro do ZIP recebem um sufixo numérico.',
      },
      {
        q: 'Funciona offline?',
        a: 'Sim. Depois de carregada, a página limpa ficheiros sem ligação, porque nada é enviado para lado nenhum.',
      },
    ],
  },
};

export default ptPT;
