import type { Pages } from './types';

const zhCN: Pages = {
  home: {
    reassure: '在线、免费、无需注册、无需安装——照片直接在浏览器中读取和清理，绝不会上传到任何服务器。',
    sources: {
      label: '可读取并移除以下工具所生成图片中的元数据',
      note: '产品名称仅用于说明图片来源；AI Label Remover 与这些公司没有任何关联。',
    },
    learn: {
      what: {
        title: '什么是元数据？',
        paragraphs: [
          '元数据就是“关于数据的数据”：保存在图片文件内部、却从不显示在画面上的备注。相机、手机、修图软件和 AI 图像生成器都会自动写入这些信息，而且通常不会告诉你。',
          '照片的元数据大致分为五类。每一类都回答了关于这张图片——以及拍摄或制作它的人——的不同问题。',
        ],
        types: [
          { name: '描述信息', text: '标题、说明文字、关键词、照片中人物的姓名。', example: 'IPTC Caption, XMP dc:title' },
          { name: '技术信息', text: '相机品牌和型号、镜头、光圈、快门、ISO、序列号。', example: 'EXIF Make, Model, BodySerialNumber' },
          { name: '位置与时间', text: 'GPS 坐标、海拔、拍摄日期和时区。', example: 'EXIF GPSLatitude, DateTimeOriginal' },
          { name: '版权与管理', text: '作者、所有者、版权声明、最后使用的编辑软件。', example: 'EXIF Artist, Copyright, Software' },
          { name: '来源与 AI', text: 'Content Credentials（内容凭证）、“AI 生成”标签、提示词和工作流。', example: 'C2PA manifest, IPTC DigitalSourceType' },
        ],
        synonyms:
          '同一件事有很多叫法——“元数据移除工具”“删除 EXIF”“元数据清理器”“清除照片信息”——意思都是在不改变画面的前提下，把文件里隐藏的备注取出来。同样，“元数据查看器”“读取器”或“检测器”用来显示文件里有什么。AI Label Remover 两件事都能做。',
      },
      why: {
        title: '为什么分享照片前要查看并删除元数据？',
        paragraphs: [
          '单个元数据字段通常无害，但组合起来就能透露你的大量信息。在家拍摄后发到二手平台的照片，可能带有精确到几米的 GPS 坐标；通过邮件或云盘链接发送的图片，会保留相机写入的全部内容。了解[照片中的 GPS 如何暴露你的住址](remove-gps-location-from-photos)。',
          '对于用 AI 生成或编辑的图片，元数据还决定了平台是否显示“AI 生成”标签，并可能暴露你写下的完整提示词。了解[“Made with AI”标签从何而来](made-with-ai-label)。',
        ],
        bullets: [
          '通过 GPS 坐标暴露你的住处、工作地点或出行轨迹。',
          '通过相机序列号或所有者姓名，把许多照片关联到同一个人。',
          '泄露你想保密的提示词、种子、模型和工作流。',
          '因附带的 C2PA 或 IPTC 数据而被平台打上 AI 标签。',
        ],
      },
      standards: {
        title: '常见的照片元数据标准',
        lead: '一个图片文件可以同时包含多个遵循不同标准的元数据“隔间”。AI Label Remover 能读取并移除下面列出的全部内容。',
        items: [
          { name: 'EXIF', text: '由相机和手机写入：曝光参数、设备、时间戳、GPS、缩略图。' },
          { name: 'XMP', text: 'Adobe 的 XML 格式，用于编辑历史、评分、关键词以及许多与 AI 相关的属性。' },
          { name: 'IPTC', text: '新闻行业标准：说明文字、作者、版权，以及声明图片由 AI 生成的 DigitalSourceType 字段。' },
          { name: 'C2PA', text: '经过加密签名的内容凭证，记录文件是如何创建和编辑的。[什么是 C2PA](what-is-c2pa-content-credentials)。' },
          { name: 'PNG text', text: 'tEXt、iTXt 和 zTXt 数据块，[Stable Diffusion 和 ComfyUI](remove-stable-diffusion-comfyui-metadata) 会把提示词和工作流存放在这里。' },
        ],
      },
    },
    security: {
      title: '你的照片始终安全',
      lead: '对于任何处理个人文件的工具，第一个问题都是“我的照片会被传到哪里？”。AI Label Remover 的回答是：哪里都不去。',
      items: [
        { title: '100% 在你的设备上处理', text: '读取和清理在浏览器标签页内的 Web Worker 中运行。没有任何服务器会收到你的文件。' },
        { title: '不存储，不用于训练 AI', text: '照片从不外传，因此不存在可被存储、泄露或用于训练模型的副本。' },
        { title: '断网也能用', text: '加载页面后关闭 Wi-Fi，再清理一个文件——照样可以运行。DevTools 的“网络”面板里也看不到任何图片数据外发。' },
        { title: '无需账号，没有追踪', text: '无需注册，没有统计分析、广告或第三方像素。网站只记住你选择的语言和主题。' },
      ],
    },
    faq: [
      { q: 'EXIF 和元数据有什么区别？', a: 'EXIF 是元数据的一种，由相机和手机写入。“元数据”是更宽泛的概念，还包括 XMP、IPTC、C2PA 以及 PNG 的文本数据块。' },
      { q: '元数据能显示照片的拍摄地点吗？', a: '能，只要图片带有 GPS 标签。当相机获准使用位置信息时，手机通常会记录纬度、经度和海拔。清理后这些标签会被移除，画质不受影响。参见[如何删除照片中的 GPS 位置](remove-gps-location-from-photos)。' },
      { q: '如何删除图片中的 AI 元数据？', a: '把图片拖到本页顶部的方框中，然后点击“删除全部元数据”。清理前，每个文件的卡片都会显示找到的 C2PA、IPTC 和提示词数据。' },
      { q: '在这里上传照片安全吗？', a: '你的照片根本不会被上传。AI Label Remover 在浏览器中打开文件，在标签页内存中处理，并把干净的副本直接保存到你的设备。页面加载完成后，即使断网也能继续使用。' },
    ],
    ctaTools: '查看全部工具',
    start: {
      title: '从你手上的文件开始',
      lead: '选择你要做的事——每个工具的页面顶部都有现成的拖放区。',
      badge: '推荐',
      open: '打开工具',
    },
    nav: {
      remove: '删除元数据',
      check: '查看与检测',
      learn: '了解更多',
      viewer: '查看照片元数据',
      aiCheck: '检测照片是否为 AI',
      whatIs: '什么是元数据？',
    },
  },
  labels: {
    tools: '更多元数据工具',
    relatedTools: '相关专用工具',
    homeTitle: '为你的文件选择工具',
    homeLead: '每个页面专注一项任务，工具就在页面顶部。',
    formats: '会删除什么，保留什么',
    contact: '联系我们',
    contactText: '有问题、发现错误，或有文件清理不正常？请发邮件至',
    updated: '更新于 {date}',
  },
  tools: {
    'ai-tag-cleaner': {
      metaTitle: 'AI 标签清理器 – 删除图片元数据中的 AI 标签',
      description: '清除图片中的 AI 标签：IPTC“AI 生成”、C2PA、XMP 中的生成器名称和提示词。无损、免费，在浏览器中处理，无需上传。',
      navLabel: 'AI 标签清理器',
      h1: '图片 AI 标签清理器',
      lead: 'AI 生成器和带 AI 功能的编辑器会给经手的文件打上标记：“AI 生成”的来源类型、签名的 C2PA 记录、应用名称，有时还有完整的提示词。把图片拖到下方，即可看到其中的每个 AI 标签，并在不重新编码任何像素的情况下把它们清除。',
      sections: [
        {
          heading: '哪些算是 AI 标签',
          paragraphs: ['AI 标签是文件中任何表明或暗示使用了 AI 的字段。它们同时分散在多个元数据标准里，所以手动删掉一个字段通常解决不了问题：'],
          bullets: [
            'IPTC 和 XMP 中的 DigitalSourceType 值，例如 trainedAlgorithmicMedia 或 compositeWithTrainedAlgorithmicMedia。',
            '[C2PA 内容凭证](what-is-c2pa-content-credentials)中标记生成步骤的操作，由 ChatGPT、Firefly、Photoshop 等写入。',
            '写有生成器名称的 Software 和 Creator Tool 字段，以及 AI 编辑留下的 XMP 历史记录。',
            '[Stable Diffusion 和 ComfyUI](remove-stable-diffusion-comfyui-metadata) 在 PNG 数据块中保存的提示词、种子和模型。',
          ],
        },
        {
          heading: 'AI 标签清理器如何工作',
          paragraphs: [
            'AI Label Remover 直接在浏览器中读取文件结构。每个 AI 标签都会连同其来源字段一起列出，并且在做任何改动之前，文件会得到一个判定——“发现 AI 痕迹”“值得再看一眼”或“没有 AI 痕迹”。',
            '点击“删除全部元数据”会切除包含这些标签的数据块：XMP、IPTC、EXIF、C2PA 清单存储区和 PNG 文本块。压缩的图像数据逐字节复制，清理后的副本会被重新读取，让你确认没有留下任何 AI 标签。',
          ],
        },
        {
          heading: '不同工具会留下哪些标签',
          paragraphs: [
            'ChatGPT 和 Gemini 的图片带有 C2PA 记录；Firefly 和 Photoshop 创成式填充会添加 C2PA 和 DigitalSourceType；Midjourney 写入描述性 XMP；Stable Diffusion 前端会把全部生成参数保存在 PNG 中。想让提示词保持私密，请参阅[如何隐藏 Midjourney 和 DALL·E 提示词](hide-midjourney-dalle-prompts)。',
          ],
        },
        {
          heading: 'AI 标签清理器做不到的事',
          paragraphs: [
            '清理只作用于元数据。SynthID 这类隐形水印存在于像素中，不会被移除，平台也可能使用自己的分类器。清除标签是为了保护隐私、纠正真实照片上的错误标签——如果图片由 AI 生成且足以乱真，平台规则通常仍要求你主动声明。',
          ],
        },
      ],
      faqHeading: 'AI 标签清理器常见问题',
      faq: [
        { q: 'AI 标签和 AI 标识是一回事吗？', a: '不完全是。标签是文件里的数据；标识是平台显示的内容，比如 Instagram 的“AI 信息”。平台常常根据标签生成标识。若要避免真实照片被标注，请看[No AI Tag](no-ai-tag)。' },
        { q: '能只删除 AI 标签、保留其他内容吗？', a: '由于 AI 标签分散在多个数据块中，清理器会删除整个元数据块而不是单个字段。方向、ICC 色彩配置文件和像素尺寸始终保留，所以图片显示效果与之前完全相同。' },
        { q: '清除 AI 标签会降低画质吗？', a: '不会。不做任何重新编码，只删除元数据，图像数据保持不变。' },
        { q: '支持哪些格式？', a: 'JPG、PNG、WebP、GIF、HEIC/HEIF 和 AVIF——每次最多 50 个文件，每个不超过 25 MB。PNG 中的提示词也可以用 [PNG 元数据删除工具](png-metadata-remover)处理。' },
        { q: '能删除 ChatGPT 或 Gemini 图片的元数据吗？', a: '可以删除这些服务写入的 C2PA 内容凭证和 IPTC 字段。Google 还会在像素中嵌入 SynthID 水印，任何元数据工具都无法去除。' },
        { q: '删除前能先看到提示词吗？', a: '可以。“原始元数据”标签页会逐字显示提示词、工作流和生成器名称，你可以在清理前复制想保留的内容。' },
      ],
      related: ['made-with-ai-label', 'what-is-c2pa-content-credentials', 'remove-stable-diffusion-comfyui-metadata'],
      updated: '2026-11-06',
    },
    'no-ai-tag': {
      metaTitle: 'No AI Tag – 发布真实照片不再显示“AI 信息”',
      description: '真实照片被标上“AI 信息”？删除触发标识的 C2PA 和 IPTC 数据，发布时不带 AI 标签。无损、免费，在浏览器中完成。',
      navLabel: 'No AI Tag',
      h1: 'No AI Tag – 让真实照片不带 AI 标签',
      lead: '在 Photoshop 或手机修图应用里做一处小小的 AI 修补，就可能让 Instagram、Facebook 或 Threads 给真实照片标上“AI 信息”。把文件拖到下方，看看是哪些数据触发了标识，然后分享一份元数据中不含 AI 标签的干净副本。',
      sections: [
        {
          heading: '真实照片为什么会被打上 AI 标签',
          paragraphs: ['平台会读取编辑软件附加在文件里的来源数据。[为什么真实照片会被标注“Made with AI”](made-with-ai-label)有详细说明；常见原因有：'],
          bullets: [
            '记录了创成式填充、AI 擦除或 AI 扩图等生成步骤的 C2PA 清单。',
            '声明图片由 AI 合成的 IPTC 或 XMP DigitalSourceType 值。',
            '编辑应用在导出时默认添加的内容凭证。',
          ],
        },
        {
          heading: '如何发布不带 AI 标签的照片',
          paragraphs: ['不到一分钟即可完成，所有内容都不会离开你的设备：'],
          bullets: [
            '把修过的照片拖到本页顶部的方框中。',
            '查看判定结果及其依据字段——报告会写明具体的 C2PA 操作或 IPTC 值。',
            '点击“删除全部元数据”，保存干净的副本。',
            '上传干净的副本，而不是最初导出的文件。',
          ],
        },
        {
          heading: '从源头阻止标签',
          paragraphs: [
            '如果你经常修图，可以在 Photoshop 和 Lightroom 的导出设置中关闭内容凭证，这样它们根本不会被写入。要一次处理大量照片，请参阅[批量删除元数据](batch-remove-metadata)。',
          ],
        },
        {
          heading: 'No AI Tag 能保证什么、不能保证什么',
          paragraphs: [
            '删除元数据可以去掉文件层面的原因，而大多数修过的照片正是因此被标注。它无法去除 SynthID 这类像素水印，平台也可能凭自己的检测给帖子加标识，或要求你自行声明。本页面适用于只做了小修改的真实照片：如果图片由 AI 生成且可能误导他人，请如实声明。',
          ],
        },
      ],
      faqHeading: 'No AI Tag 常见问题',
      faq: [
        { q: '能去掉已发布帖子上的“AI 信息”标识吗？', a: '不能。标识属于平台上的那条帖子。请删除或归档该帖子，在这里清理文件，再上传干净的副本。' },
        { q: 'No AI Tag 能保证效果吗？', a: '没有。它会删除平台读取的元数据，但平台也可能使用其他信号。不过对大多数修过的照片来说，元数据就是被标注的原因。' },
        { q: 'iPhone 和安卓照片可以用吗？', a: '可以。iPhone 的 HEIC 和安卓的 JPG 都会直接清理，无需转换。另有专门的 [HEIC 元数据删除工具](heic-metadata-remover)。' },
        { q: '完全由 AI 生成的图片上的 AI 标签呢？', a: '[AI 标签清理器](ai-tag-cleaner)可以显示并删除它们，但平台规则通常仍要求你自行标注写实的 AI 图片。' },
      ],
      related: ['made-with-ai-label', 'what-is-c2pa-content-credentials', 'batch-remove-metadata'],
      updated: '2026-11-09',
    },
    'remove-exif-data': {
      metaTitle: '在线删除照片 EXIF 信息 – 免费且保护隐私',
      description: '在浏览器中删除 JPG、HEIC、PNG、WebP 的 EXIF 信息——GPS、相机、序列号、日期。无需上传，不损画质，一次最多 50 个文件。',
      navLabel: 'EXIF 删除工具',
      h1: '删除照片中的 EXIF 信息',
      lead: '把照片拖到下方，即可看到其中的每个 EXIF 字段——GPS 位置、相机和镜头、序列号、拍摄时间——并一键删除。所有处理都在你的设备上进行，文件绝不会上传。',
      sections: [
        {
          heading: 'EXIF 信息会泄露什么',
          paragraphs: ['EXIF 是相机或手机写入每张照片的技术备注。单独看大多无害，但组合起来能透露你的很多信息。以下字段与隐私关系最大：'],
          bullets: [
            'GPS 纬度、经度和海拔——往往精确到几米，足以找到一处住所。',
            '拍摄日期和时间，以及时区偏移。',
            '相机或手机的品牌型号、镜头，许多相机还带有能把多张照片关联起来的机身序列号。',
            '所有者或作者姓名，以及最后编辑该文件的软件。',
            '内嵌缩略图——即使裁剪后，它仍可能显示原始画面。',
          ],
        },
        {
          heading: '这个 EXIF 删除工具如何工作',
          paragraphs: [
            'AI Label Remover 直接读取文件结构。在 JPEG 中，它会切除包含 EXIF 和 XMP 的 APP1 段，以及 IPTC、注释和缩略图；在 HEIC、PNG 和 WebP 中则删除对应的 box 或数据块。压缩的图像数据逐字节复制，因此不会重新编码，照片看起来完全一样。',
            '决定照片显示方式的字段会被刻意保留：方向、ICC 色彩配置文件和像素尺寸。这样就不会出现粗糙工具常见的照片横倒、颜色发灰等问题。处理完成后，清理过的文件会被重新读取，让你确认 EXIF 字段确实已删除。',
          ],
        },
        {
          heading: '分享前什么时候该删除 EXIF',
          paragraphs: [
            '很多大型社交网络会在上传时删除 EXIF，但还有很多地方不会：邮件附件、网盘链接、论坛、二手交易平台、发送“原图”的聊天应用，以及你自己的网站。如果不确定照片会流向哪里，先清理一遍是最稳妥的做法。',
            '在网上卖东西、发布在家拍的照片、给刚认识的人发照片，都是 [GPS 数据可能暴露位置](remove-gps-location-from-photos)的典型场景。',
          ],
        },
        {
          heading: '从设计上保护隐私',
          paragraphs: [
            '在线 EXIF 删除工具通常会把照片上传到服务器处理后再传回。AI Label Remover 的所有工作都在浏览器标签页里的 Web Worker 中完成：页面加载后即使断网也能继续使用。无需账号，没有水印，除了每个文件 25 MB、4000 万像素外没有其他限制。',
          ],
        },
      ],
      faqHeading: '删除 EXIF 常见问题',
      faq: [
        { q: '删除 EXIF 会降低画质吗？', a: '不会。只切除元数据块，压缩的图像数据原样复制，所以分辨率、清晰度和色彩完全不变。' },
        { q: '照片方向还会正确吗？', a: '会。方向值和 ICC 色彩配置文件都会保留，图片显示方式与之前相同。' },
        { q: '能删除 iPhone HEIC 照片的 EXIF 吗？', a: '可以。直接支持 HEIC 和 HEIF，无需先转成 JPEG。另有专门页面：[HEIC 元数据删除工具](heic-metadata-remover)。' },
        { q: '怎么确认 EXIF 已经删除？', a: '清理后，AI Label Remover 会重新读取新文件并显示剩余字段。你也可以在操作系统的文件属性中查看。' },
        { q: '能一次处理很多照片吗？', a: '可以：每次最多 50 个文件，可打包成一个 ZIP 下载。请参阅[批量删除元数据](batch-remove-metadata)。' },
      ],
      related: ['remove-gps-location-from-photos', 'batch-remove-metadata', 'made-with-ai-label'],
      updated: '2026-11-06',
    },
    'remove-c2pa-content-credentials': {
      metaTitle: '免费删除图片中的 C2PA 内容凭证',
      description: '查看并删除 JPG、PNG、HEIC、WebP 和 AVIF 中的 C2PA 内容凭证（JUMBF 清单），无损处理，文件不会上传到任何地方。',
      navLabel: 'C2PA 删除工具',
      h1: '删除 C2PA 内容凭证',
      lead: '内容凭证（Content Credentials）是附在图片上的一段签名历史：由哪个应用创建、之后做了哪些编辑、是否使用了生成式 AI。把文件拖到下方读取它的 C2PA 清单，然后无损删除整个清单存储区。',
      sections: [
        {
          heading: 'C2PA 清单包含什么',
          paragraphs: ['C2PA（内容来源和真实性联盟）规定了一种在文件中嵌入加密签名记录的方式。[什么是 C2PA](what-is-c2pa-content-credentials) 有更深入的介绍；实际上，清单通常包含：'],
          bullets: [
            '声明生成器（claim generator）——签名的应用或服务，如 Photoshop、Firefly、ChatGPT 或相机。',
            '操作列表：创建、打开、编辑、裁剪，以及生成式 AI 步骤的标记。',
            '素材（ingredients）——构成该文件的早期版本或源图片。',
            '数字来源类型，说明内容是拍摄、合成还是由 AI 生成。',
            '把记录与确切图像数据绑定的签名和证书。',
          ],
        },
        {
          heading: 'C2PA 在各种格式中的位置',
          paragraphs: [
            '在 JPEG 中，清单存储区以 JUMBF box 的形式位于 APP11 段；在 PNG 中是 caBX 数据块；在 HEIC 和 AVIF 中是 uuid box；在 WebP 中是专门的 RIFF 块。AI Label Remover 会找出所有这些位置，显示其中的声明，并在原样复制图像数据的同时删除整个存储区。',
            '由于签名把清单绑定在确切的字节上，用其他应用重新保存通常本来就会破坏或丢弃它。干净地删除可以避免留下一个损坏、只有一半有效的记录。',
          ],
        },
        {
          heading: '保留的理由与删除的理由',
          paragraphs: [
            '内容凭证可能很有价值：它能帮助新闻机构和创作者证明图片的来源。如果这是你的目的，就保留它——无论如何都请保留原始文件，因为删除的元数据无法恢复。',
            '当记录透露了超出你意愿的信息（姓名、编辑历史、源图片），或编辑应用在一次小修改后给真实照片加上了 AI 标记时，删除它是合理的。你也可以在 Photoshop 和 Lightroom 的导出设置中关闭内容凭证。',
          ],
        },
      ],
      faqHeading: 'C2PA 常见问题',
      faq: [
        { q: 'AI Label Remover 会验证 C2PA 签名吗？', a: '不会。它读取并显示清单内容，但不验证证书链。如需验证签名，请使用官方的 Content Credentials Verify 工具。' },
        { q: '删除内容凭证合法吗？', a: '从你拥有或有权修改的文件中删除元数据通常没有问题，但不要用它来歪曲图片的作者或制作方式。以上为一般信息，不构成法律建议。' },
        { q: '为什么我的照片显示“值得再看一眼”？', a: '文件中有一个未明确提到 AI 的 C2PA 清单。有些平台会把任何清单都当作线索，所以做决定前请先查看列出的操作。' },
        { q: '平台还会知道图片被编辑过吗？', a: '不会通过已删除的清单知道。平台可能使用其他信号，而像素中的隐形水印不受删除元数据的影响。' },
      ],
      related: ['what-is-c2pa-content-credentials', 'made-with-ai-label', 'hide-midjourney-dalle-prompts'],
      updated: '2026-11-06',
    },
    'heic-metadata-remover': {
      metaTitle: 'HEIC 元数据删除 – 清除 iPhone 照片 EXIF 和 GPS',
      description: '删除 iPhone HEIC、HEIF 照片中的 EXIF、GPS 位置和时间戳，无需转换为 JPEG。无损，在浏览器中处理，不上传任何内容。',
      navLabel: 'HEIC 元数据删除',
      h1: 'iPhone 照片 HEIC 元数据删除工具',
      lead: 'iPhone 以 HEIC 格式保存照片，每张都会记录拍摄地点和时间。把 HEIC 或 HEIF 文件拖到下方，查看并删除这些元数据——照片仍是 HEIC，不转换、不损失画质。',
      sections: [
        {
          heading: 'iPhone HEIC 照片会记录什么',
          paragraphs: ['一张普通的 iPhone 照片包含的信息比大多数人想象的多：'],
          bullets: [
            '精确的 GPS 坐标、海拔和相机朝向。',
            '拍摄日期、时间和时区，以及修改日期。',
            '设备型号、镜头、拍摄参数和 iOS 版本。',
            'Apple 专有数据，例如实况照片的配对标识符。',
            '编辑应用写入的 XMP 数据，有时包含 C2PA 记录。',
          ],
        },
        {
          heading: '不转 JPEG 也能删除元数据',
          paragraphs: [
            '常见的建议是把 HEIC 转成 JPEG，期望元数据不会被带过去。但这样会重新编码图像、损失画质，还常常丢掉广色域色彩配置文件。AI Label Remover 则直接编辑 HEIC 容器本身：删除 Exif 和 XMP 项、C2PA uuid box 以及时间戳 box，并保持 HEVC 图像数据、方向（irot/imir）和色彩配置文件（colr）不变。',
            '同一引擎也能处理使用相同 ISOBMFF 容器的 AVIF，所以新式应用导出的 AVIF 也可以用同样的方式清理。',
          ],
        },
        {
          heading: 'iPhone 设置与清理文件的区别',
          paragraphs: [
            'iOS 允许在共享表单中点“选项”关闭单次分享的位置信息，“照片”应用也可以逐张修改或删除位置。偶尔分享一两张很方便，但容易忘，而且不会删除其他字段。请参阅[照片中的 GPS 为什么有风险](remove-gps-location-from-photos)。',
            '如果是一批照片——一整个旅行相册、商品图或发帖用的图片——把它们拖进 AI Label Remover 并保存成一个 ZIP 会更快，前后对比报告也会清楚显示删除了什么。',
          ],
        },
      ],
      faqHeading: 'HEIC 常见问题',
      faq: [
        { q: '在有时打不开 HEIC 的 Windows 上能用吗？', a: '能。AI Label Remover 自行读取 HEIC 结构，因此无需安装 HEIC 解码器。HEIC 文件显示格式标签而非预览图，但读取和清理都正常。' },
        { q: '清理后的文件还能在“照片”中打开吗？', a: '能。输出是标准的 HEIC 文件，图像数据相同，只删除了元数据项。' },
        { q: '支持实况照片吗？', a: 'AI Label Remover 处理的是静态 HEIC 图像。实况照片配套的视频是单独的文件，不会被改动。' },
        { q: '有文件大小限制吗？', a: '每个文件最大 25 MB、4000 万像素，足以覆盖当前所有 iPhone 拍摄的照片，一次可清理 50 个。' },
      ],
      related: ['remove-gps-location-from-photos', 'batch-remove-metadata', 'what-is-c2pa-content-credentials'],
      updated: '2026-11-06',
    },
    'png-metadata-remover': {
      metaTitle: 'PNG 元数据删除 – 清除提示词和文本块',
      description: '删除 PNG 元数据——含 Stable Diffusion 或 ComfyUI 提示词的 tEXt、iTXt、zTXt 文本块，以及 XMP、eXIf 和 C2PA——同时保持图像无损。',
      navLabel: 'PNG 元数据删除',
      h1: 'PNG 元数据删除工具',
      lead: 'PNG 文件把元数据藏在文本块里：AI 提示词和工作流、作者姓名、软件和时间戳。把 PNG 拖到下方读取每个数据块并删除它们，图像数据逐位保持不变。',
      sections: [
        {
          heading: 'PNG 把元数据放在哪里',
          paragraphs: ['PNG 由一连串数据块组成。图像本身位于 IHDR、PLTE 和 IDAT 中，其余都是可选的。AI Label Remover 会删除以下数据块：'],
          bullets: [
            'tEXt、zTXt 和 iTXt——自由文本、压缩文本和国际化文本。Stable Diffusion WebUI 会在这里写入“parameters”块；ComfyUI 会写入“prompt”和“workflow”JSON。',
            '存放在 iTXt 中的 XMP 包，包括 IPTC 和 AI 来源声明。',
            'eXIf——EXIF 数据，若应用从照片复制过来，也包括 GPS。',
            'caBX——C2PA 内容凭证。',
            'tIME（最后修改时间）和 dSIG（数字签名）。',
          ],
        },
        {
          heading: '为保证图像不变而保留的内容',
          paragraphs: [
            '透明度（tRNS）、伽马和色度（gAMA、cHRM）、sRGB 标志以及内嵌 ICC 配置文件（iCCP）都会影响显示，因此会保留。动画 PNG 保留 acTL、fcTL 和 fdAT 块，APNG 动画照常播放。',
            '由于 IDAT 数据是复制而非重新压缩，清理后的文件与原图逐像素一致——通常还会小一点，因为文本块没了。',
          ],
        },
        {
          heading: '保护 AI 提示词和工作流',
          paragraphs: [
            '如果你分享用 Stable Diffusion、Forge 或 ComfyUI 生成的图片，任何人都可以把 PNG 拖回同一个工具，还原你的完整提示词、种子、模型和节点图。[Stable Diffusion 和 ComfyUI 如何在 PNG 中隐藏提示词](remove-stable-diffusion-comfyui-metadata)展示了保存的内容。清理会删除全部信息；若想自己保留提示词，可以先在“原始元数据”标签页中复制。',
          ],
        },
      ],
      faqHeading: 'PNG 元数据常见问题',
      faq: [
        { q: '删除 PNG 元数据会改变颜色吗？', a: '不会。与颜色相关的数据块——sRGB、gAMA、cHRM 和 iCCP——都会保留，IDAT 图像数据原样复制。' },
        { q: '透明 PNG 可以用吗？', a: '可以。透明数据（tRNS 或 IDAT 中的 Alpha 通道）属于图像本身，绝不会被改动。' },
        { q: '能把提示词保存下来吗？', a: '请在清理前从“原始元数据”标签页复制。删除后，无法再从清理过的文件中恢复元数据。' },
        { q: 'Midjourney 或 DALL·E 的 PNG 也能处理吗？', a: '能。这些服务嵌入的文本、XMP 或 C2PA 数据会以同样方式删除。请参阅[如何隐藏 Midjourney 和 DALL·E 提示词](hide-midjourney-dalle-prompts)。' },
      ],
      related: ['remove-stable-diffusion-comfyui-metadata', 'hide-midjourney-dalle-prompts', 'batch-remove-metadata'],
      updated: '2026-11-06',
    },
  },
  info: {
    about: {
      metaTitle: '关于 AI Label Remover – 元数据清理工具如何运作',
      description: '谁在开发 AI Label Remover、浏览器内的元数据清理如何运作、我们如何撰写和更新文章，以及这个工具绝不会做的事。',
      navLabel: '关于',
      title: '关于 AI Label Remover',
      lead: 'AI Label Remover 是一款免费工具，用于读取和删除图片中的隐藏元数据——EXIF、GPS、XMP、IPTC、C2PA 内容凭证和 AI 提示词——设计初衷是让你的文件永远不必离开你的设备。',
      sections: [
        {
          heading: '为什么做这个工具',
          paragraphs: [
            '照片和 AI 图片包含的信息远超大多数人的想象：GPS 标签里的住址、设备序列号、完整的提示词和工作流，以及平台据以添加标识的来源记录。大多数在线清理工具却要求你上传正想保护的文件。AI Label Remover 就是为了在不做这种妥协的前提下完成同样的工作。',
          ],
        },
        {
          heading: '工具如何运作',
          paragraphs: [
            '添加图片后，浏览器会在本地读取它。Web Worker 解析文件结构——JPEG 段、PNG 数据块、WebP RIFF 块、GIF 块以及 HEIC/AVIF box——并列出找到的每个元数据块。清理会从字节流中删除这些块，原样复制压缩的图像数据，然后重新读取结果以确认剩余内容。',
            '没有任何服务器端处理。网站本身是一组静态页面；加载完成后，工具可以离线使用。',
          ],
        },
        {
          heading: '我们如何撰写文章',
          paragraphs: [
            '本站的指南基于公开发布的规范（EXIF、XMP、IPTC Photo Metadata、C2PA，以及 PNG 和 ISOBMFF 格式）、各平台的帮助页面，以及对所介绍工具生成的真实文件所做的测试。每篇文章都标注最近修订日期，标准或平台政策变化时我们会更新内容。',
            '文章属于一般信息，不构成法律建议。平台关于 AI 标识的规则经常变化，依据任何说法行事前请先查看平台自己的帮助页面。',
          ],
        },
        {
          heading: 'AI Label Remover 不会做的事',
          paragraphs: [],
          bullets: [
            '上传、存储或记录你的文件——根本没有可以接收它们的服务器。',
            '修改像素、去除隐形水印或可见标志。',
            '承诺平台一定会或不会添加标识。',
            '帮助把 AI 生成的图片伪装成真实照片。请用它来保护隐私、纠正错误。',
          ],
        },
        {
          heading: '独立性',
          paragraphs: [
            'AI Label Remover 是独立项目，与 Meta、Google、OpenAI、Adobe、Midjourney、Apple 或 C2PA 均无关联。产品名称仅用于说明兼容性。',
          ],
        },
      ],
      updated: '2026-11-06',
    },
    privacy: {
      metaTitle: '隐私政策 – AI Label Remover',
      description: '通俗易懂的隐私政策：图片不会离开你的设备，没有账号、统计分析或广告，只保存语言和主题设置。',
      navLabel: '隐私',
      title: '隐私政策',
      lead: 'AI Label Remover 是保护隐私的工具，使用它不应让你付出隐私代价。本页用通俗的语言说明你的图片会经历什么，以及网站处理的少量信息。',
      sections: [
        {
          heading: '简要说明',
          paragraphs: [],
          bullets: [
            '你的图片在你自己的设备上处理，绝不会上传。',
            '没有账号、注册或邮件列表——我们不知道你是谁。',
            '没有统计分析、广告、追踪像素或第三方脚本。',
            '只在你的浏览器中保存语言和浅色/深色主题，你可以随时删除。',
          ],
        },
        {
          heading: '你的图片会经历什么',
          paragraphs: ['当你把图片添加到 AI Label Remover 时，它的全部经历如下：'],
          bullets: [
            '浏览器从你的设备打开文件，并保存在标签页的内存中。',
            '标签页内的 Web Worker 读取元数据，你点击清理后写出干净的副本——依然在内存中。',
            '保存时，浏览器把干净的文件或 ZIP 直接写入你的设备。',
            '关闭或刷新标签页后，图片和报告随之消失。服务器上什么都不会留下，因为从来没有服务器接收过它们。',
          ],
        },
        {
          heading: '你可以亲自验证',
          paragraphs: [
            '你不必只听我们说。加载页面后关闭 Wi-Fi 或移动数据，再清理一个文件：它照样能用，因为没有任何东西需要发送。如果你熟悉开发者工具，可以在清理时打开“网络”面板，会看到没有任何图片数据离开设备。',
          ],
        },
        {
          heading: '我们不收集什么',
          paragraphs: ['AI Label Remover 不收集也不保存：'],
          bullets: [
            '你的图片、图片的元数据或屏幕上显示的报告；',
            '你的姓名、邮箱地址或任何账号信息；',
            '你的位置——照片中找到的 GPS 只显示在你自己的屏幕上；',
            '你检查过哪些文件或如何使用工具的记录。',
          ],
        },
        {
          heading: '浏览器中保存了什么，以及如何删除',
          paragraphs: ['为记住你的选择，网站会在你的设备上保存两项小设置：'],
          bullets: [
            '语言：local storage 中的“lang”项和一个保存一年的第一方“lang”Cookie，让首页以你选择的语言打开。其中只有类似“zh-CN”的语言代码。',
            '主题：如果你选择浅色或深色模式，local storage 中会有一个“theme”项。',
            '要删除它们，请在浏览器设置中清除本站的 Cookie 和网站数据。AI Label Remover 仍可正常使用，只是会忘记你的选择。',
          ],
        },
        {
          heading: '访问网站时',
          paragraphs: [
            '和所有网站一样，你打开页面时，我们的服务器需要一些基本技术信息才能把页面发给你：设备的网络地址（IP 地址）、浏览器类型和你打开的页面。这些信息可能会被临时记录，用于保障网站正常运行和拦截恶意流量，且只保存必要的时间。我们不会用它们识别你，不会为你建立画像，也绝不会分享或出售。',
            '打开首页时，服务器只会根据浏览器的语言设置和你之前选择的语言来打开合适的语言版本。这一过程即时完成，不会被保存。',
          ],
        },
        {
          heading: '儿童',
          paragraphs: [
            'AI Label Remover 不会向任何人（包括儿童）索取或收集个人信息。年少的用户无需创建账号或透露任何个人信息即可使用本工具。',
          ],
        },
        {
          heading: '你的权利',
          paragraphs: [
            '由于 AI Label Remover 不收集姓名、邮箱或账号，我们没有可供提供、更正或删除的个人资料。网站在你设备上记住的内容始终由你掌控。访问时临时记录的技术信息不与任何姓名或账号关联，不再需要时即被删除。',
          ],
        },
        {
          heading: '政策变更',
          paragraphs: ['如果 AI Label Remover 处理数据的方式发生变化，我们会更新本页面及顶部的日期。'],
        },
      ],
      updated: '2026-11-06',
    },
  },
};

export default zhCN;
