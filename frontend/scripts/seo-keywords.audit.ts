// Kiểm tra từ khóa trên trang cho bài viết (en, vi). Chạy: npx vite-node scripts/seo-keywords.audit.ts
import en from '../src/content/articles/en';
import vi from '../src/content/articles/vi';
import type { Articles } from '../src/content/articles/types';
import { plainText } from '../src/content/richText';
import { GUIDE_SLUGS, baseGuideIndex, type GuideSlug } from '../src/content/seo';
import enMsg from '../src/i18n/locales/en';
import viMsg from '../src/i18n/locales/vi';
import enPages from '../src/content/pages/en';
import viPages from '../src/content/pages/vi';

/** Từ khóa chính (cụm người dùng thực sự gõ) cho từng bài, theo ngôn ngữ. */
const KW: Record<GuideSlug, { en: string; vi: string }> = {
  'made-with-ai-label': { en: 'AI info', vi: 'nhãn AI' },
  'remove-stable-diffusion-comfyui-metadata': { en: 'ComfyUI', vi: 'ComfyUI' },
  'hide-midjourney-dalle-prompts': { en: 'Midjourney', vi: 'Midjourney' },
  'what-is-c2pa-content-credentials': { en: 'Content Credentials', vi: 'Content Credentials' },
  'remove-gps-location-from-photos': { en: 'GPS', vi: 'GPS' },
  'batch-remove-metadata': { en: 'batch', vi: 'hàng loạt' },
  'chatgpt-gemini-image-metadata': { en: 'ChatGPT', vi: 'ChatGPT' },
  'remove-metadata-windows-mac': { en: 'Windows', vi: 'Windows' },
  'image-metadata-viewer-online': { en: 'metadata viewer', vi: 'xem metadata' },
  'iptc-digitalsourcetype-ai': { en: 'DigitalSourceType', vi: 'DigitalSourceType' },
  'remove-metadata-without-losing-quality': { en: 'without losing quality', vi: 'không giảm chất lượng' },
  'how-to-check-if-image-is-ai-generated': { en: 'AI-generated', vi: 'do AI tạo' },
  'which-platforms-label-ai-images': { en: 'label', vi: 'nhãn' },
  'what-metadata-ai-image-generators-add': { en: 'generators', vi: 'tạo ảnh AI' },
  'synthid-invisible-ai-watermarks': { en: 'SynthID', vi: 'SynthID' },
  'turn-off-content-credentials-photoshop-lightroom': { en: 'Photoshop', vi: 'Photoshop' },
  'which-platforms-strip-photo-metadata': { en: 'strip', vi: 'xóa metadata' },
  'view-remove-metadata-iphone-android': { en: 'iPhone', vi: 'iPhone' },
  'what-is-exif-data': { en: 'EXIF', vi: 'EXIF' },
};

const has = (s: string | undefined, kw: string) => !!s && s.toLowerCase().includes(kw.toLowerCase());
const count = (s: string, kw: string) => s.toLowerCase().split(kw.toLowerCase()).length - 1;

function audit(lang: 'en' | 'vi', articles: Articles, msg: typeof enMsg) {
  console.log(`\n================ ${lang.toUpperCase()} ================`);
  console.log('slug | từ khóa | title | H1 | desc | mở đầu | H2 | lần/thân bài | số từ | độ dài title');
  for (const slug of GUIDE_SLUGS) {
    const a = articles[slug];
    const i = baseGuideIndex(slug);
    const h1 = i >= 0 ? msg.seo.guides.items[i].title : a?.title ?? '';
    const summary = i >= 0 ? msg.seo.guides.items[i].paragraphs : a?.summary ?? [];
    const title = a?.metaTitle ?? h1;
    const kw = KW[slug][lang];
    const body = plainText([...(a?.sections.flatMap((s) => [s.heading, ...s.paragraphs, ...(s.bullets ?? [])]) ?? []), ...(a?.faq.flatMap((f) => [f.q, f.a]) ?? [])].join(' '));
    const words = (summary.join(' ') + ' ' + body).split(/\s+/).filter(Boolean).length;
    const mark = (b: boolean) => (b ? '✓' : '✗');
    console.log(
      [slug, kw, mark(has(title, kw)), mark(has(h1, kw)), mark(has(a?.description, kw)), mark(has(summary[0], kw)), mark(!!a?.sections.some((s) => has(s.heading, kw))), count(body, kw), words, [...title].length].join(' | '),
    );
  }
}

audit('en', en, enMsg);
audit('vi', vi, viMsg as unknown as typeof enMsg);

// Tranh từ khóa: title bài viết và title trang công cụ dùng chung cụm đầu.
console.log('\n================ Title trang công cụ ================');
for (const [lang, pages] of [['en', enPages], ['vi', viPages]] as const) {
  for (const [slug, p] of Object.entries(pages.tools)) console.log(`${lang} tool ${slug}: ${p.metaTitle}`);
}
console.log('\n================ Title bài viết ================');
for (const [lang, articles, msg] of [['en', en, enMsg], ['vi', vi, viMsg as unknown as typeof enMsg]] as const) {
  for (const slug of GUIDE_SLUGS) {
    const i = baseGuideIndex(slug);
    console.log(`${lang} ${slug}: ${articles[slug]?.metaTitle ?? (i >= 0 ? msg.seo.guides.items[i].title : '')}`);
  }
}
