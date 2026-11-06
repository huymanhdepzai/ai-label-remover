import type { HomeBasics } from '../pages/types';

const ptPT: HomeBasics = {
  reassure: 'Online, gratuito, sem registo e sem nada para instalar — as fotografias são lidas e limpas diretamente no navegador e nunca são enviadas para um servidor.',
  sources: {
    label: 'Lê e remove metadados de imagens criadas com',
    note: 'Os nomes dos produtos apenas identificam a origem das imagens; o AI Label Remover não tem qualquer ligação a estas empresas.',
  },
  learn: {
    what: {
      title: 'O que são metadados?',
      paragraphs: [
        'Metadados são “dados sobre dados”: notas guardadas dentro de um ficheiro de imagem que nunca aparecem na fotografia. Câmaras, telemóveis, editores de imagem e geradores de imagens com IA acrescentam-nos automaticamente, quase sempre sem avisar.',
        'Nas fotografias, os metadados dividem-se em cinco grandes grupos. Cada um responde a uma pergunta diferente sobre a imagem — e sobre quem a tirou ou criou.',
      ],
      types: [
        { name: 'Descritivos', text: 'Título, legenda, palavras-chave, nomes das pessoas na fotografia.', example: 'IPTC Caption, XMP dc:title' },
        { name: 'Técnicos', text: 'Marca e modelo da câmara, objetiva, abertura, velocidade, ISO, número de série.', example: 'EXIF Make, Model, BodySerialNumber' },
        { name: 'Local e hora', text: 'Coordenadas GPS, altitude, data da captura e fuso horário.', example: 'EXIF GPSLatitude, DateTimeOriginal' },
        { name: 'Direitos e gestão', text: 'Autor, proprietário, direitos de autor, último software de edição.', example: 'EXIF Artist, Copyright, Software' },
        { name: 'Proveniência e IA', text: 'Content Credentials, etiquetas “feito com IA”, prompts e workflows.', example: 'C2PA manifest, IPTC DigitalSourceType' },
      ],
      synonyms:
        'Vai encontrar muitos nomes para a mesma tarefa — “removedor de metadados”, “apagar EXIF”, “limpador de metadados”, “retirar informações da fotografia” — e todos significam tirar as notas ocultas do ficheiro sem alterar a imagem. Da mesma forma, um “visualizador”, “leitor” ou “verificador de metadados” mostra o que existe dentro do ficheiro. O AI Label Remover faz as duas coisas.',
    },
    why: {
      title: 'Porquê ver e remover metadados antes de partilhar uma fotografia?',
      paragraphs: [
        'Um único campo de metadados costuma ser inofensivo, mas em conjunto dizem muito sobre si. Uma fotografia tirada em casa e publicada num site de anúncios pode conter coordenadas GPS com precisão de poucos metros; as imagens enviadas por e-mail ou ligação na nuvem mantêm tudo o que a câmara escreveu. Veja [como o GPS das fotografias pode revelar a sua morada](remove-gps-location-from-photos).',
        'Em imagens criadas ou editadas com IA, os metadados decidem também se uma plataforma mostra a etiqueta “Feito com IA” e podem expor o prompt completo que escreveu. Saiba [de onde vem a etiqueta “Made with AI”](made-with-ai-label).',
      ],
      bullets: [
        'Revelar onde vive, trabalha ou viaja através das coordenadas GPS.',
        'Associar muitas fotografias à mesma pessoa pelo número de série da câmara ou pelo nome do proprietário.',
        'Expor prompts, seeds, modelos e workflows que queria manter privados.',
        'Receber uma etiqueta de IA de uma plataforma por causa de dados C2PA ou IPTC anexados.',
      ],
    },
    standards: {
      title: 'Normas de metadados mais comuns em fotografias',
      lead: 'Um mesmo ficheiro de imagem pode guardar vários “compartimentos” de metadados em simultâneo, cada um segundo uma norma diferente. O AI Label Remover lê e remove todos os que estão abaixo.',
      items: [
        { name: 'EXIF', text: 'Escrito por câmaras e telemóveis: definições de exposição, dispositivo, data e hora, GPS, miniaturas.' },
        { name: 'XMP', text: 'O formato XML da Adobe para histórico de edição, classificações, palavras-chave e muitas propriedades ligadas à IA.' },
        { name: 'IPTC', text: 'A norma das redações: legenda, autor, direitos de autor e o campo DigitalSourceType, que declara imagens de IA.' },
        { name: 'C2PA', text: 'Content Credentials com assinatura criptográfica que registam como um ficheiro foi criado e editado. [O que é o C2PA](what-is-c2pa-content-credentials).' },
        { name: 'PNG text', text: 'Chunks tEXt, iTXt e zTXt onde o [Stable Diffusion e o ComfyUI](remove-stable-diffusion-comfyui-metadata) guardam prompts e workflows.' },
      ],
    },
  },
  security: {
    title: 'As suas fotografias ficam seguras',
    lead: 'Em qualquer ferramenta que lide com ficheiros pessoais, a primeira pergunta é “para onde vão as minhas fotografias?”. A resposta do AI Label Remover: para lado nenhum.',
    items: [
      { title: '100% no seu dispositivo', text: 'A leitura e a limpeza decorrem num Web Worker dentro do separador do navegador. Nenhum servidor recebe os seus ficheiros.' },
      { title: 'Nada guardado, sem treino de IA', text: 'Como as fotografias nunca são enviadas, não existe nenhuma cópia para guardar, divulgar ou usar no treino de um modelo.' },
      { title: 'Funciona offline', text: 'Carregue a página, desligue o Wi-Fi e limpe um ficheiro — continua a funcionar. O separador Rede das DevTools não mostra dados de imagem a sair.' },
      { title: 'Sem conta, sem rastreio', text: 'Sem registo, sem analytics, publicidade ou píxeis de terceiros. O site só se lembra do idioma e do tema que escolher.' },
    ],
  },
  faq: [
    { q: 'Qual é a diferença entre EXIF e metadados?', a: 'O EXIF é um tipo de metadados — o que câmaras e telemóveis escrevem. “Metadados” é o termo mais abrangente e inclui também XMP, IPTC, C2PA e os chunks de texto do PNG.' },
    { q: 'Os metadados podem mostrar onde uma fotografia foi tirada?', a: 'Sim, se a imagem tiver etiquetas GPS. Os telemóveis registam normalmente latitude, longitude e altitude quando a câmara tem acesso à localização. A limpeza remove estas etiquetas sem afetar a qualidade. Veja [como remover a localização GPS das fotografias](remove-gps-location-from-photos).' },
    { q: 'Como remover metadados de IA de uma imagem?', a: 'Largue a imagem na caixa no topo desta página e carregue em “Limpar todas as imagens”. Antes da limpeza, a ficha de cada ficheiro mostra os dados C2PA, IPTC e o prompt encontrados.' },
    { q: 'É seguro enviar aqui as minhas fotografias?', a: 'As suas fotografias não são enviadas de todo. O AI Label Remover abre os ficheiros no navegador, processa-os na memória do separador e guarda a cópia limpa diretamente no seu dispositivo. Depois de a página carregar, pode ficar offline e continua a funcionar.' },
  ],
};

export default ptPT;
