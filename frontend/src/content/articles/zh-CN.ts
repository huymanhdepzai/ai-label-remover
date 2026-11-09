import type { Articles } from './types';

const zhCN: Articles = {
  'made-with-ai-label': {
    metaTitle: '为什么真实照片在 Instagram 上会被打上“AI 信息”标签',
    related: ['what-is-c2pa-content-credentials', 'hide-midjourney-dalle-prompts', 'remove-stable-diffusion-comfyui-metadata'],
    description:
      '真实照片在 Instagram、Facebook 上被标记“AI 信息”通常是因为修图软件写入了 C2PA 或 IPTC 字段。教你如何无损查找并清除这些标记。',
    updated: '2026-10-23',
    sections: [
      {
        heading: '平台标签读取的是文件数据，而非照片画面',
        paragraphs: [
          'Meta 的“AI 信息”（原“由 AI 创建”）标签会在上传文件包含公认的生成式 AI 信号时自动触发。两大关键信号隐藏在文件内部：[包含内容凭证的 C2PA 清单](what-is-c2pa-content-credentials)以及 XMP 中的 IPTC DigitalSourceType 属性。',
          '属性值 trainedAlgorithmicMedia 表示整张图片完全由算法生成，而 compositeWithTrainedAlgorithmicMedia 则表示真实照片中含有 AI 元素。各大社交平台在上传时均会自动扫描这些元数据。',
        ],
      },
      {
        heading: '真实照片中的 AI 信号从何而来',
        paragraphs: ['对于由相机或手机拍摄的照片，触发原因通常源自后期处理软件：'],
        bullets: [
          'Photoshop 或 Lightroom 的生成式填充、生成式扩展或 AI 消除工具，会添加 c2pa 动作并将文件标记为合成图。',
          '在开启内容凭证状态下导出图片，编辑历史会被签名记录到文件中。',
          '智能手机自带的“AI 消除”功能在处理杂物后，会在 EXIF/XMP 中留下编辑痕迹。',
          '部分修图软件在重复保存时保留了此前的 AI 标签，导致标记持续存在。',
        ],
      },
      {
        heading: '使用 AI Label Remover 定位引发标签的字段',
        paragraphs: [
          '将图片拖放至工作区，“AI 痕迹”选项卡会列出文件中存在的具体指标（如 C2PA JUMBF 或 IPTC XMP）。切换至“原始元数据”还可以查看对清单进行签名的工具以及记录的操作流水。',
          '即使未明确包含 AI 生成标记，只要存在内容凭证清单，部分平台也会采取保守策略打上标签，因此建议在发布前检查并清洗。',
        ],
      },
      {
        heading: '无损清洗用于发布的图片副本',
        paragraphs: [
          '点击“清洗所有图片”，AI Label Remover 会从二进制流中精准剥离 C2PA、XMP、IPTC 和 EXIF 数据块，同时保持像素数据、尺寸、旋转角度和 ICC 颜色配置文件完全不变。详细信息可参阅 [AI 标签清理器](ai-tag-cleaner) 页面。',
          '常规图片软件重新另存为 JPEG 会再次压缩图像导致画质下降，而字节级切块技术则彻底避免了这种二次压缩损耗。',
        ],
      },
      {
        heading: '纠正错误标记与保持真实透明',
        paragraphs: [
          '清洗元数据旨在保护隐私并纠正真实照片被误标的情况。如果作品完全由生成式 AI 生成，创作者仍应遵守平台规定如实向公众说明。',
        ],
      },
    ],
    faqHeading: '关于 AI 标签的常见问题',
    faq: [
      { q: '发布帖子后还能移除“AI 信息”标签吗？', a: '通常无法直接修改已发布的帖子。建议使用 [AI 标签清理器](ai-tag-cleaner) 清洗原图后重新发布。' },
      { q: '清除元数据能保证标签一定消失吗？', a: '能彻底消除文件层面（C2PA 和 IPTC）触发的标签。但如果平台使用了独立的画面视觉分类模型，则属于不同判定机制。' },
      { q: '清洗后照片画质或分辨率会改变吗？', a: '完全不会。图像像素数据采用逐字节完整复制，仅剥离了头部的元数据描述块。' },
      { q: '能保留相机拍摄参数只删除 AI 字段吗？', a: '为确保最大程度的安全与隐私，工具默认采用一站式清除方案（包括 GPS 与设备信息）。' },
    ],
  },

  'remove-stable-diffusion-comfyui-metadata': {
    metaTitle: '从 PNG 图片中清除 ComfyUI 工作流与 Stable Diffusion 提示词',
    related: ['hide-midjourney-dalle-prompts', 'batch-remove-metadata', 'what-is-c2pa-content-credentials'],
    description:
      'A1111、Forge 和 ComfyUI 会将完整提示词、随机种子及节点工作流写入 PNG 文件。教你无损去除这些敏感信息。',
    updated: '2026-10-23',
    sections: [
      {
        heading: '随图片传播的生成参数',
        paragraphs: [
          '在 Stable Diffusion WebUI (AUTOMATIC1111)、Forge 或 ComfyUI 中渲染输出的 PNG 图片，会在文本数据块（tEXt、zTXt、iTXt）中完整保存生成设置。',
          '在 ComfyUI 中，这包含了整个节点流程图的 JSON 数据。任何人只要将 PNG 拖回 ComfyUI 界面，就能立即复原你使用的所有提示词、LoRA 模型、本地路径和参数配置。',
        ],
      },
      {
        heading: '为何需要清除生成数据',
        paragraphs: [
          '在商业项目或专业创作中，提示词工程与独特的节点流是核心智力资产，直接公开相当于无偿交出技术成果。',
          '此外，工作流文本中可能无意间泄露创作者电脑上的个人文件夹路径，且大幅增加 PNG 的体积。',
        ],
      },
      {
        heading: '在 AI Label Remover 中检查与清除',
        paragraphs: [
          '通过 [PNG 元数据清理工具](png-metadata-remover)，你可以先查阅正负向提示词和模型详情，然后一键剥离所有文本块。',
          '用于图像显示的 IHDR、IDAT、PLTE 和 iCCP 色彩配置文件将得到严格保护，确保显示一致。',
        ],
      },
      {
        heading: '清洗完成后的文件状态',
        paragraphs: [
          '清洗后的 PNG 在视觉上与原图毫无二致，但当它被拖入 ComfyUI 或元数据查看器时，将只是一张纯净的普通图像。',
        ],
      },
    ],
    faqHeading: 'Stable Diffusion 元数据常见问题',
    faq: [
      { q: '能否在 ComfyUI 中直接禁用元数据保存？', a: '可以，在 Save Image 节点设置中禁用工作流嵌入，或使用专用的无元数据保存节点。' },
      { q: '清洗后的 PNG 还能恢复工作流吗？', a: '无法恢复。文本数据块已被彻底移除，文件内不再含有任何节点信息。' },
      { q: '清洗后的 PNG 会改变透明通道或颜色吗？', a: '不会。所有图像像素及透明度值均保持原生状态。' },
      { q: '转为 JPEG 或 WebP 是否也能清除？', a: '转格式会清除 PNG 文本块，但会导致图像二次压缩失真。AI Label Remover 能保持 PNG 无损原质。' },
    ],
  },

  'hide-midjourney-dalle-prompts': {
    metaTitle: '从 Midjourney 与 DALL·E 图片中删除提示词与来源信息',
    related: ['remove-stable-diffusion-comfyui-metadata', 'made-with-ai-label', 'what-is-c2pa-content-credentials'],
    description:
      'Midjourney、DALL·E 3 和 Firefly 的下载图片包含提示词、任务 ID 和 AI 来源标记。在公开发布前清除这些隐藏信息。',
    updated: '2026-10-23',
    sections: [
      {
        heading: '云端生成工具在文件中写入了什么',
        paragraphs: [
          '与本地运行的工具类似，Midjourney、OpenAI DALL·E 3 和 Adobe Firefly 等在线服务会在文件头嵌入任务 ID、创作时间和 [C2PA](what-is-c2pa-content-credentials) 电子签名。',
          'Midjourney 甚至会将原始提示词明文存放在 XMP 或 EXIF 描述块中，任何下载原图的人都能直接读取。',
        ],
      },
      {
        heading: '将提示词作为核心创意资产予以保护',
        paragraphs: [
          '经过无数次调试得到的优质提示词凝聚了创作者的心血。若直接上传原图，竞争对手和爬虫程序可以毫不费力地提取你的配方。',
        ],
      },
      {
        heading: '清洗前的预览与快速去除',
        paragraphs: [
          'AI Label Remover 能快速解析并展示嵌入的提示词内容，点击一键清理即可抹去文字和追踪标记，作品的画质与色彩完好无损。',
        ],
      },
      {
        heading: '需要了解的技术边界',
        paragraphs: [
          '元数据清理针对的是文件头部的信息块。如果平台使用了类似 Google SynthID 的不可见像素水印，元数据工具将无法将其消除。',
        ],
      },
    ],
    faqHeading: 'Midjourney 与 DALL·E 提示词问答',
    faq: [
      { q: '别人能直接从我发布的图片中看到提示词吗？', a: '只要发布平台没有自动压缩重绘原图，下载者就能使用看图工具查看嵌入在 EXIF/XMP 中的提示词。' },
      { q: '所有版本的 Midjourney 都会写入提示词吗？', a: '是的，从官方网页或 Discord 下载的原图均普遍含有生成标记。' },
      { q: '清洗会影响图片的对比度或色彩吗？', a: '不会。ICC 颜色配置文件与 RGB 像素数据完整保留。' },
      { q: '可以批量处理一系列生成的作品吗？', a: '支持。通过 [批量元数据清理](batch-remove-metadata) 可一次性拖入最多 50 张图片并行处理。' },
    ],
  },

  'what-is-c2pa-content-credentials': {
    metaTitle: '什么是 C2PA？内容凭证（Content Credentials）通俗解释',
    related: ['made-with-ai-label', 'hide-midjourney-dalle-prompts', 'remove-stable-diffusion-comfyui-metadata'],
    description:
      '通俗解析 C2PA 与内容凭证：数字签名清单记录了哪些信息，在各类图片格式中的存放位置，以及安全移除它的方法。',
    updated: '2026-10-23',
    sections: [
      {
        heading: '核心概念简述',
        paragraphs: [
          'C2PA（内容来源和真实性联盟）是由 Adobe、微软、谷歌、索尼等行业巨头联合制定的开放技术规范。其核心是为数字媒体嵌入带有加密签名的“数字身份凭据”（Content Credentials）。',
          '该凭据能完整追溯图像由何种设备拍摄、经历过哪些后期软件处理、是否使用了 AI 生成技术，并具备防篡改验证功能。',
        ],
      },
      {
        heading: 'C2PA 清单内部包含哪些内容',
        paragraphs: [
          '清单中包含断言链条：设备型号、编辑软件版本、历史缩略图、软件操作流水以及基于公钥基础设施的数字签名。',
          '一旦使用了 AI 滤镜或生成工具，清单中便会显式标明，成为各大社交媒体自动加贴 AI 标签的直接依据。',
        ],
      },
      {
        heading: '在不同格式中的存放位置',
        paragraphs: [
          'JPEG 存储在 APP11 标记段（JUMBF 格式），PNG 存放在 caBX 数据块，HEIC 和 AVIF 则放置于 uuid 盒子中。',
          '[移除 C2PA 内容凭据](remove-c2pa-content-credentials) 功能专门针对这些独立的数据结构进行安全截取。',
        ],
      },
      {
        heading: '创作者为何选择移除 C2PA',
        paragraphs: [
          '除了防止真实照片被误标为 AI 作品外，还能有效保护创作者的电脑环境信息、软件账号隐私，并省去清单带来的几十至上百 KB 冗余体积。',
        ],
      },
      {
        heading: '保留还是移除：权衡利弊',
        paragraphs: [
          '在新闻摄影和法律存证领域，保留 C2PA 是证实真实性的有力手段；而在商业设计与日常分享中，清除元数据能够给予创作者充分的隐私控制权。',
        ],
      },
    ],
    faqHeading: 'C2PA 与内容凭证常见问题',
    faq: [
      { q: 'C2PA 属于不可见的图像水印吗？', a: '不属于。C2PA 是存储于文件头部的元数据记录，不改变任何实际像素值。' },
      { q: '目前哪些工具支持写入 C2PA？', a: 'Adobe Photoshop、Lightroom、DALL·E 3、徕卡和尼康的新款相机及主流云端生成平台。' },
      { q: '如何验证文件当前的 C2PA 签名？', a: '访问官方站点 verify.contentcredentials.org 或在 AI Label Remover 预览面板中查看。' },
      { q: '移除 C2PA 会损害画质吗？', a: '不会，移除仅剥离了相关的独立二进制块，图像部分未经重新编码。' },
    ],
  },

  'remove-gps-location-from-photos': {
    metaTitle: '从手机和电脑照片中清除 GPS 地理位置信息',
    related: ['batch-remove-metadata', 'what-is-c2pa-content-credentials', 'made-with-ai-label'],
    description:
      '分享照片前彻底移除 GPS 坐标：揭秘 EXIF 如何泄露你的住址、拍摄时间和设备型号，以及无损清除位置的方法。',
    updated: '2026-10-23',
    sections: [
      {
        heading: '手机相机在照片中默默打下的印记',
        paragraphs: [
          '智能手机（iPhone 与 Android）在拍照时，默认会将精确的经纬度、海拔高度甚至拍摄朝向写入 EXIF 结构中。',
          '如果直接发送未经处理的原始文件，任何人都可以根据坐标查出你的家庭住址、单位位置以及日常活动轨迹。',
        ],
      },
      {
        heading: '原始文件泄露的常见途径',
        paragraphs: [
          '社交平台在普通发图时通常会自动压缩并清除位置，但在通过微信或 Telegram 发送“原图”、使用 AirDrop 隔空投送、邮件附件、网盘共享或发布二手商品时，原图内的 GPS 数据会完好保留。',
        ],
      },
      {
        heading: '清洗前确认位置信息',
        paragraphs: [
          '将照片置入 AI Label Remover，EXIF 区域会立即显示是否存在 GPS 坐标标签，并展示具体定位与设备信息。',
        ],
      },
      {
        heading: '无损去除敏感元数据',
        paragraphs: [
          '[清除 EXIF 数据](remove-exif-data) 能够在不重压画质的前提下抹去地理位置与设备特征，确保图片原始色彩和清晰度。',
        ],
      },
      {
        heading: '从源头关闭手机的位置权限',
        paragraphs: [
          'iOS：设置 > 隐私与安全性 > 定位服务 > 相机 > 选择“永不”。Android：打开相机应用设置 > 关闭“保存地理位置信息”。',
        ],
      },
      {
        heading: '手机 GPS 数据的精确度',
        paragraphs: [
          '结合卫星导航与 Wi-Fi 辅助定位，手机记录的坐标误差通常在 3 至 5 米以内，足以精确锁定门牌号。',
        ],
      },
      {
        heading: '真实的隐私与人身安全风险',
        paragraphs: [
          '晒宠物、晒日常的照片一旦附带住址坐标，极易成为跟踪骚扰或财产侵害的潜在隐患。',
        ],
      },
      {
        heading: '除 GPS 之外的其他敏感字段',
        paragraphs: [
          '相机序列号、毫秒级拍摄时间戳以及镜头参数同样具备设备指纹特征。',
        ],
      },
      {
        heading: '养成公开分享前的检查习惯',
        paragraphs: [
          '在公开发布重要原图前，在浏览器中进行快速体检与清洗，是保障数字生活安全的良好习惯。',
        ],
      },
    ],
    faqHeading: '照片 GPS 常见问题解答',
    faq: [
      { q: '清洗后别人还能恢复出地理位置吗？', a: '不能，EXIF 中的 GPS 数据块已被物理剥除，具有不可逆性。' },
      { q: '发社交平台不是已经自动清除了吗？', a: '普通动态大多会清除，但二手交易、网盘直传及勾选“原图”发送时极易泄漏。' },
      { q: '苹果手机拍的 HEIC 格式能处理吗？', a: '支持。通过 [HEIC 元数据清理](heic-metadata-remover) 可以在保持 HEIC 高效格式的前提下抹去坐标。' },
      { q: '照片旋转角度会被打乱吗？', a: '不会，控制正确显示方向的 Orientation 标志位会得到妥善保留。' },
    ],
  },

  'batch-remove-metadata': {
    metaTitle: '批量删除图片元数据 – 免费、无须上传服务器',
    related: ['remove-gps-location-from-photos', 'remove-stable-diffusion-comfyui-metadata', 'hide-midjourney-dalle-prompts'],
    description:
      '在浏览器中一次性批量清洗最多 50 张图片：多线程极速并行处理，文件不离开本地设备，支持打包下载为 ZIP 压缩包。',
    updated: '2026-10-23',
    sections: [
      {
        heading: '一次性搞定大批照片',
        paragraphs: [
          '无论是电商产品目录、摄影作品集还是全套生活相册，逐张清洗费时费力。AI Label Remover 允许同时拖入多达 50 张图片。',
          '底层利用多个 Web Worker 并行处理，全面调用你设备 CPU 的多核心性能。',
        ],
      },
      {
        heading: '纯本地执行，无网络传输瓶颈',
        paragraphs: [
          '图片完全在浏览器内部流转，无需将几十甚至几百兆的数据上传至远端服务器，处理速度快如闪电。',
        ],
      },
      {
        heading: '每张结果均经重新校验',
        paragraphs: [
          '批处理完成后，程序会自动回读每张生成图片的头部二进制，确保所有 EXIF、GPS、C2PA 和提示词痕迹均已彻底消失后才提供下载。',
        ],
      },
      {
        heading: '保留原始文件名并支持 ZIP 打包',
        paragraphs: [
          '所有清洗后的文件维持原文件名，你可以单独保存，或一键导出为便于整理的 ZIP 压缩文件。',
        ],
      },
      {
        heading: '断网也能流畅使用',
        paragraphs: [
          '页面加载完成后所有运算均脱机运行，即使在无网络环境下也能放心处理高度机密的文件。',
        ],
      },
    ],
    faqHeading: '批量清理元数据常见问题',
    faq: [
      { q: '同一批次可以混入不同的图片格式吗？', a: '可以，JPEG、PNG、WebP、HEIC、AVIF 等多种格式可混合拖入处理。' },
      { q: '为什么单次上限设定为 50 张？', a: '该限制能够兼顾处理效率与设备内存负荷，防止手机或轻量浏览器崩溃。' },
      { q: '打包下载为 ZIP 会修改文件名吗？', a: '不会，压缩包内完全保留上传时的原始文件名。' },
      { q: '没有网络连接时可以正常使用吗？', a: '可以，网页的核心处理逻辑由本地 JavaScript 引擎执行，完全支持离线操作。' },
    ],
  },

  'image-metadata-viewer-online': {
    title: '在线图片元数据查看器：一站式查看 EXIF、GPS、XMP、IPTC 与 C2PA',
    metaTitle: '在线查看图片元数据：EXIF、GPS 与 AI 信息',
    summary: [
      '在分享照片或相信一张下载来的图片之前，好的元数据查看器能让你看到文件记录的全部信息，而不只是手机相册或文件管理器显示的那几项。',
      '本指南介绍完整的元数据检查包括哪些内容、系统自带查看器看不到什么、为什么很多在线 EXIF 查看器本身就是隐私风险，以及如何解读最关键的字段。',
    ],
    description: '免费在线图片元数据查看器：在浏览器中查看照片的 EXIF、GPS、XMP、IPTC、C2PA 和 AI 提示词，无需上传、无需注册。',
    updated: '2026-11-09',
    related: ['how-to-check-if-image-is-ai-generated', 'remove-gps-location-from-photos', 'what-is-c2pa-content-credentials'],
    sections: [
      {
        heading: '完整的元数据检查包括什么',
        paragraphs: ['靠谱的元数据查看器会读取文件中的每一个数据块，而不只是 EXIF：'],
        bullets: [
          'EXIF：相机或手机的品牌型号、曝光参数、拍摄时间、镜头和方向。',
          'GPS：如果开启了定位，会记录纬度、经度、海拔和拍摄方向。另见[如何删除照片中的 GPS 位置信息](remove-gps-location-from-photos)。',
          'XMP：编辑软件、修改历史、描述、评分以及 AI 相关字段。',
          'IPTC：图片说明、关键词、作者、版权和 DigitalSourceType（图片的生成方式）。',
          'C2PA：[内容凭据（Content Credentials）](what-is-c2pa-content-credentials)，记录谁签署了文件、做过哪些操作、是否用到了 AI。',
          'PNG 文本块：[Stable Diffusion 生成参数与 ComfyUI 工作流](remove-stable-diffusion-comfyui-metadata)等嵌入文本。',
          'ICC 色彩配置文件和缩略图：色彩信息和隐藏的预览图。',
        ],
      },
      {
        heading: '系统自带查看器的盲区',
        paragraphs: [
          'Windows 在“属性 › 详细信息”中显示元数据，macOS 在“预览”的检查器或访达的“显示简介”中，iPhone 在照片上向上轻扫即可看到，Google 相册则在信息面板中。快速看一眼日期、设备和地点没问题，但这些工具只显示部分 EXIF，通常完全忽略 XMP、IPTC、C2PA 和 PNG 文本。一个文件在资源管理器里看起来很干净，却可能仍带着完整的 AI 提示词。',
        ],
      },
      {
        heading: '在线 EXIF 查看器的隐私陷阱',
        paragraphs: [
          '很多“在线查看 EXIF”网站会先把你的图片上传到服务器，在那里读取后再返回报告。对隐私检查来说，这恰恰适得其反：你担心的那张照片——连同 GPS 位置——已经被复制到了第三方手里。请选择在本地读取文件的查看器。简单的测试方法：打开页面后断开网络，看工具是否还能正常使用。',
        ],
      },
      {
        heading: '用 AI Label Remover 查看文件',
        paragraphs: ['把图片拖到本页顶部的区域，结果分为三个标签页：'],
        bullets: [
          '“它会透露什么”：用通俗的话总结地点、人物、时间和设备，并把 GPS 换算成十进制坐标。',
          '“AI 痕迹”：C2PA 清单、IPTC 来源类型、生成工具名称和提示词，并给出判定结果。',
          '“原始元数据”：按来源分组列出所有字段，包括 EXIF IFD0、Exif、GPS、XMP 命名空间、IPTC、C2PA 和 PNG 文本块。',
        ],
      },
      {
        heading: '最值得先看的字段',
        paragraphs: [],
        bullets: [
          'GPSLatitude / GPSLongitude：精确的拍摄地点，粘贴到地图上就能看出它暴露了什么。',
          'DateTimeOriginal 与 ModifyDate：照片的拍摄时间和最后保存时间。',
          'Make、Model、BodySerialNumber、LensSerialNumber：可能把多张照片关联到同一台设备。',
          'Artist、Copyright、OwnerName：你可能不知道已经写进文件的姓名。',
          'Software 与 CreatorTool：哪些应用处理过文件，包括 AI 工具。',
          'DigitalSourceType 与 C2PA claim generator：图片自己声明的生成方式。详见[如何判断图片是否由 AI 生成](how-to-check-if-image-is-ai-generated)。',
        ],
      },
      {
        heading: '查看器几乎什么都没显示时',
        paragraphs: [
          '从社交平台保存的图片、截图，或通过微信等聊天软件发送的照片，通常已被重新压缩并清除了元数据。这种情况下信息很少甚至没有是正常的，也无法说明照片是真实拍摄、经过编辑还是 AI 生成。如果来源很重要，请向对方索要原图文件。',
        ],
      },
      {
        heading: '查看不等于验证',
        paragraphs: [
          '普通元数据只是任何人都能修改的纯文本，应当把它当作线索而不是证据。C2PA 不同，它带有数字签名；但查看器能显示清单，并不代表签名已经通过验证——验证请使用官方的内容凭据验证工具。看完之后如果想删除这些数据，点击“清洗全部图片”即可移除元数据，图片本身不会改变。[删除 EXIF 数据](remove-exif-data)页面详细说明了会删除哪些内容。',
        ],
      },
    ],
    faqHeading: '关于查看图片元数据的常见问题',
    faq: [
      {
        q: '有没有不上传照片的免费元数据查看器？',
        a: '有。AI Label Remover 直接在浏览器中读取文件，无需上传、无需账号，页面加载后断网也能使用。',
      },
      {
        q: '能看到 AI 图片的提示词吗？',
        a: '如果生成工具保存了就可以。Stable Diffusion 和 ComfyUI 的提示词位于 PNG 文本块中，部分服务则写入 XMP 或 EXIF 字段。',
      },
      {
        q: '为什么 Windows 不显示我的 PNG 元数据？',
        a: '资源管理器对 PNG 只显示少数几个属性。文本块、XMP 和 C2PA 在那里看不到，但完整的查看器会显示出来。',
      },
      {
        q: '元数据能证明照片是假的吗？',
        a: '元数据提供的是线索，而不是定论。只有带签名的 C2PA 数据才能可靠验证；普通字段很容易被修改或删除。',
      },
    ],
  },

  'how-to-check-if-image-is-ai-generated': {
    title: '这张图是 AI 生成的吗？直接检查文件本身的方法',
    metaTitle: '如何判断图片是否由 AI 生成（免费检测）',
    summary: [
      '判断一张图片是否由 AI 生成，最快且可靠的线索就在文件里：C2PA 内容凭据、IPTC DigitalSourceType 字段以及生成工具留下的文本，常常会直接写明制作图片的工具。',
      '本文介绍该找哪些线索、如何用在浏览器中运行的免费工具读取，以及为什么“什么都没找到”永远不能证明照片是真的。',
    ],
    description: '在浏览器中读取 C2PA、IPTC DigitalSourceType 和生成工具元数据，判断图片是否由 AI 生成，并了解每个信号能证明什么。',
    updated: '2026-11-09',
    related: ['image-metadata-viewer-online', 'what-is-c2pa-content-credentials', 'made-with-ai-label'],
    sections: [
      {
        heading: '先拿到原始文件',
        paragraphs: [
          '元数据只会保留在刚从相机或生成工具导出的文件中。截图、重新保存的副本以及从社交平台下载的图片通常都经过了重新编码，大部分信息已经丢失。条件允许时，请对方发送原始导出文件——以“文件”或“原图”方式发送，而不是压缩后的照片。',
        ],
      },
      {
        heading: '线索一：内容凭据（C2PA）',
        paragraphs: [
          '支持 C2PA 的工具会附加[一份经过数字签名的来源记录](what-is-c2pa-content-credentials)。其中 claim generator 写明生成图片的应用或服务，c2pa.actions 列出“created”“edited”等步骤，而 digitalSourceType 可以直接声明图片由 AI 生成。',
          '由于记录带有签名，验证工具还能判断图片在签名后是否被改动。来自 AI 服务的清单，是元数据所能提供的最有力证据。',
        ],
      },
      {
        heading: '线索二：IPTC DigitalSourceType',
        paragraphs: ['许多生成工具和编辑软件会填写一个标准 IPTC 字段，用来说明内容的制作方式。最常见的取值有：'],
        bullets: [
          'trainedAlgorithmicMedia：由生成式 AI 模型生成。',
          'compositeWithTrainedAlgorithmicMedia：真实照片中有部分区域由 AI 生成或替换，例如 Photoshop 的“创成式填充”。',
          'algorithmicMedia：由不使用训练数据的算法生成，例如程序化艺术。',
          'digitalCapture：由相机拍摄，未声明包含生成内容。',
        ],
      },
      {
        heading: '线索三：提示词和工具名称',
        paragraphs: [
          '[Stable Diffusion 前端和 ComfyUI](remove-stable-diffusion-comfyui-metadata) 会把提示词、种子、模型和工作流以文本形式存进 PNG 文件。其他工具则会在 XMP CreatorTool 或 EXIF Software 中留下名称。这些痕迹都清楚地表明用到了 AI，往往还能看出图片是怎么做出来的。这也是为什么值得了解[如何隐藏 Midjourney 和 DALL·E 的提示词](hide-midjourney-dalle-prompts)。',
        ],
      },
      {
        heading: '如何检测图片是否由 AI 生成',
        paragraphs: [
          '把文件拖到本页顶部的区域。“AI 痕迹”标签页会给出三种判定之一——“发现 AI 痕迹”“值得再看一眼”或“没有 AI 痕迹”——并列出每个信号及其来源。“原始元数据”则显示底层数值。整个过程不会上传任何文件。如需删除找到的信息，请使用 [AI Tag Cleaner](ai-tag-cleaner)。',
        ],
      },
      {
        heading: '如果文件里没有元数据',
        paragraphs: [
          '没有元数据，无论朝哪个方向都证明不了什么：编辑软件、聊天软件和社交平台经常会清除它，而缺少相机 EXIF 最多只是微弱的提示。接下来可以使用服务商自己的水印检测工具（例如 Gemini 的 Google SynthID）、以图搜图找出最早的版本，并核实图片最初出现在哪里。分析像素的 AI 检测器给出的是概率，而不是证据。',
        ],
      },
    ],
    faqHeading: '关于识别 AI 图片的常见问题',
    faq: [
      {
        q: '能看出图片是用 ChatGPT 或 Gemini 生成的吗？',
        a: '如果文件仍保留内容凭据，claim generator 会写明服务名称。对于 Gemini 图片，Google 的 SynthID 检测也能在像素中发现水印。',
      },
      {
        q: '如果 AI Label Remover 没有发现 AI 痕迹，照片就是真的吗？',
        a: '不一定。这只说明文件中没有 AI 元数据。元数据很容易丢失或被删除，所以“干净”的结果应理解为“无法判断”，而不是证据。',
      },
      {
        q: '可以检查从 Instagram 或小红书保存的图片吗？',
        a: '可以，但平台通常会清除公开版本的元数据，所以能找到的信息很少甚至没有。平台自己打上的“AI 信息”标签是另一个信号，可参阅[为什么真实照片也会被打上这个标签](made-with-ai-label)。',
      },
      {
        q: '这项检测免费且保护隐私吗？',
        a: '是的——完全免费、无需账号，文件只在本地读取，不会上传。',
      },
    ],
  },
};

export default zhCN;
