import type { HomeBasics } from '../pages/types';

const zhCN: HomeBasics = {
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
      { title: '断网也能用', text: '加载页面后关闭 Wi-Fi，再清洗一个文件——照样可以运行。DevTools 的“网络”面板里也看不到任何图片数据外发。' },
      { title: '无需账号，没有追踪', text: '无需注册，没有统计分析、广告或第三方像素。网站只记住你选择的语言和主题。' },
    ],
  },
  faq: [
    { q: 'EXIF 和元数据有什么区别？', a: 'EXIF 是元数据的一种，由相机和手机写入。“元数据”是更宽泛的概念，还包括 XMP、IPTC、C2PA 以及 PNG 的文本数据块。' },
    { q: '元数据能显示照片的拍摄地点吗？', a: '能，只要图片带有 GPS 标签。当相机获准使用位置信息时，手机通常会记录纬度、经度和海拔。清洗后这些标签会被移除，画质不受影响。参见[如何删除照片中的 GPS 位置](remove-gps-location-from-photos)。' },
    { q: '如何删除图片中的 AI 元数据？', a: '把图片拖到本页顶部的方框中，然后点击“清洗全部图片”。清洗前，每个文件的卡片都会显示找到的 C2PA、IPTC 和提示词数据。' },
    { q: '在这里上传照片安全吗？', a: '你的照片根本不会被上传。AI Label Remover 在浏览器中打开文件，在标签页内存中处理，并把干净的副本直接保存到你的设备。页面加载完成后，即使断网也能继续使用。' },
  ],
};

export default zhCN;
