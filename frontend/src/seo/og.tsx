import { renderToStaticMarkup } from 'react-dom/server';
import { MARK_SVG_BODY } from '../brand/mark';
import { GuideIllustration } from '../components/seo/GuideIllustration';
import { GUIDE_SLUGS, GUIDE_TAGS, SITE, TOOL_SLUGS, type GuideSlug, type ToolSlug } from '../content/seo';
import { OG_SIZE } from './head';

/**
 * Sinh ảnh chia sẻ mạng xã hội (Open Graph, 1200×630) — chỉ dùng lúc build (entry-server), không vào bundle client.
 * SVG được chuyển sang PNG trong scripts/prerender.mjs (Facebook/X không nhận SVG), với font của chính trang
 * (Bricolage Grotesque cho tiêu đề, Be Vietnam Pro cho chữ thường) nhúng sẵn để build ở máy nào cũng ra cùng một ảnh.
 *
 * Bố cục chung: thương hiệu + tên miền ở hàng trên; cột trái là nhãn nhỏ, tiêu đề ngắn chứa từ khóa của trang và
 * một dòng phụ; cột phải là hình minh họa (thẻ báo cáo metadata đã xóa, hoặc ảnh minh họa của bài); hàng dưới là
 * các cam kết + định dạng. Chữ tiếng Anh vì một ảnh dùng chung cho mọi ngôn ngữ; tiêu đề đầy đủ đã nằm trong og:title.
 * Nội dung chính nằm trong vùng an toàn (cách mép ≥ 64px) để không bị cắt khi nền tảng thu nhỏ hoặc bo góc.
 */

/** Bảng màu (hex) thay cho biến CSS var(--color-…): trình chuyển SVG→PNG không đọc được CSS của trang. */
const PALETTE: Record<string, string> = {
  paper: '#eef2f6', sheet: '#ffffff', wash: '#e2e8f1', line: '#d3dae6', ink: '#10172e', 'ink-2': '#4a5372', 'ink-3': '#7d87a6',
  cobalt: '#007595', 'cobalt-soft': '#ddf1f6', amber: '#9a6a00', 'amber-soft': '#fcefc7', rose: '#c21f55', 'rose-soft': '#fbe0e9',
  fix: '#0b7a53', 'fix-soft': '#d7f2e6', sky: '#1f6fa8', 'sky-soft': '#dceefa', film: '#141a3a', 'film-hole': '#eef2f6',
};

function resolveColors(svg: string): string {
  return svg.replace(/var\(--color-([a-z0-9-]+)\)/g, (_, name: string) => {
    const hex = PALETTE[name];
    if (!hex) throw new Error(`og: missing palette color ${name}`);
    return hex;
  });
}

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const DISPLAY = "'Bricolage Grotesque', 'Be Vietnam Pro', sans-serif";
const SANS = "'Be Vietnam Pro', sans-serif";

/** Màu riêng của ảnh OG (nền tối nổi bật giữa bảng tin nền trắng). */
const C = { bgFrom: '#0b1730', bgTo: '#06475a', text: '#ffffff', muted: '#a9c7d3', accent: '#f5c842', cyan: '#5fd3ec' };

const { width: W, height: H } = OG_SIZE;
const PAD = 64;
/** Cột chữ bên trái và khung minh họa bên phải. */
const TEXT_W = 528;
/** Vùng nội dung giữa hàng trên và đường kẻ của hàng dưới. */
const AREA = { top: 118, h: 392 };
const ART = { x: 664, w: 472 };

// ---------- Đo và ngắt dòng (ước lượng bề rộng ký tự theo em) ----------

function charWidth(ch: string): number {
  if (ch === ' ') return 0.26;
  if (/[iljtf.,:;!|'’“”()]/.test(ch)) return 0.3;
  if (/[mwMW]/.test(ch)) return 0.86;
  if (/[A-Z]/.test(ch)) return 0.66;
  if (/[0-9]/.test(ch)) return 0.58;
  if (/[—&]/.test(ch)) return 0.8;
  return 0.55;
}
const textWidth = (s: string, size: number) => [...s].reduce((n, ch) => n + charWidth(ch), 0) * size;

function wrap(text: string, maxWidth: number, size: number): string[] {
  const lines: string[] = [];
  let line = '';
  for (const word of text.split(' ')) {
    const next = line ? `${line} ${word}` : word;
    if (line && textWidth(next, size) > maxWidth) {
      lines.push(line);
      line = word;
    } else line = next;
  }
  if (line) lines.push(line);
  return lines;
}

/** Cỡ chữ lớn nhất để tiêu đề vừa tối đa `maxLines` dòng. */
function fit(text: string, maxWidth: number, sizes: number[], maxLines: number): { size: number; lines: string[] } {
  for (const size of sizes) {
    const lines = wrap(text, maxWidth, size);
    if (lines.length <= maxLines) return { size, lines };
  }
  const size = sizes[sizes.length - 1];
  return { size, lines: wrap(text, maxWidth, size).slice(0, maxLines) };
}

function textBlock(lines: string[], x: number, y: number, lineHeight: number, attrs: string): string {
  const spans = lines.map((l, i) => `<tspan x="${x}" ${i ? `dy="${lineHeight}"` : ''}>${esc(l)}</tspan>`).join('');
  return `<text x="${x}" y="${y}" ${attrs}>${spans}</text>`;
}

// ---------- Thành phần dùng chung ----------

/** Dấu thương hiệu (giống favicon, src/brand/mark.ts), cạnh = size. */
const mark = (x: number, y: number, size: number) => `<g transform="translate(${x} ${y}) scale(${size / 32})">${MARK_SVG_BODY}</g>`;

/** Dấu tích trong vòng tròn, tâm (cx, cy). */
const check = (cx: number, cy: number, r: number, fill: string, stroke: string) =>
  `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${fill}"/><path d="M${cx - r * 0.42} ${cy + r * 0.02}l${r * 0.3} ${r * 0.3} ${r * 0.56}-${r * 0.6}" fill="none" stroke="${stroke}" stroke-width="${r * 0.26}" stroke-linecap="round" stroke-linejoin="round"/>`;

function background(): string {
  return `<defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${C.bgFrom}"/><stop offset="1" stop-color="${C.bgTo}"/></linearGradient>
    <radialGradient id="glow" cx="0.82" cy="0.3" r="0.55"><stop offset="0" stop-color="${C.cyan}" stop-opacity="0.22"/><stop offset="1" stop-color="${C.cyan}" stop-opacity="0"/></radialGradient>
    <pattern id="dots" width="28" height="28" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1.4" fill="#ffffff" fill-opacity="0.07"/></pattern>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  <rect width="${W}" height="${H}" fill="url(#dots)"/>
  <rect width="${W}" height="${H}" fill="url(#glow)"/>`;
}

/** Hàng trên: logo + tên thương hiệu bên trái, tên miền bên phải. */
function topBar(): string {
  const domain = new URL(SITE.origin).host;
  return `${mark(PAD, 48, 48)}
  <text x="${PAD + 64}" y="82" font-family="${DISPLAY}" font-size="30" font-weight="800" fill="${C.text}" letter-spacing="-0.5">${esc(SITE.name)}</text>
  <text x="${W - PAD}" y="80" text-anchor="end" font-family="${SANS}" font-size="22" font-weight="600" fill="${C.muted}">${esc(domain)}</text>`;
}

/** Hàng dưới: ba cam kết bên trái, định dạng hỗ trợ bên phải. */
function bottomBar(formats: string): string {
  const y = H - 54;
  let x = PAD;
  const items = ['Free', 'No upload', 'Lossless']
    .map((label) => {
      const el = `${check(x + 12, y - 7, 12, C.accent, '#0b1730')}<text x="${x + 32}" y="${y}" font-family="${SANS}" font-size="21" font-weight="600" fill="${C.text}">${label}</text>`;
      x += 32 + textWidth(label, 21) + 30;
      return el;
    })
    .join('');
  return `<rect x="${PAD}" y="${y - 50}" width="${W - PAD * 2}" height="1" fill="#ffffff" fill-opacity="0.14"/>
  ${items}
  <text x="${W - PAD}" y="${y}" text-anchor="end" font-family="${SANS}" font-size="20" font-weight="500" fill="${C.muted}" letter-spacing="0.5">${esc(formats)}</text>`;
}

/** Cột chữ: nhãn nhỏ (chữ in hoa), tiêu đề lớn, dòng phụ — căn giữa theo chiều dọc vùng nội dung. */
function headline(eyebrow: string, title: string, sub?: string): string {
  const t = fit(title, TEXT_W, [66, 62, 58, 54, 50, 46], 3);
  const lh = Math.round(t.size * 1.08);
  const s = sub ? fit(sub, TEXT_W, [25], 2) : null;
  const blockH = 34 + t.lines.length * lh + (s ? 20 + s.lines.length * 34 : 0);
  const top = AREA.top + (AREA.h - blockH) / 2;
  const titleY = top + 34 + t.size * 0.82;
  return `<text x="${PAD}" y="${top + 18}" font-family="${SANS}" font-size="19" font-weight="700" fill="${C.accent}" letter-spacing="2.4">${esc(eyebrow.toUpperCase())}</text>
  ${textBlock(t.lines, PAD, titleY, lh, `font-family="${DISPLAY}" font-size="${t.size}" font-weight="800" fill="${C.text}" letter-spacing="${-t.size * 0.02}"`)}
  ${s ? textBlock(s.lines, PAD, titleY + (t.lines.length - 1) * lh + 22 + 25, 34, `font-family="${SANS}" font-size="25" fill="${C.muted}"`) : ''}`;
}

/** Thẻ trắng có bóng mờ phía sau. */
const card = (x: number, y: number, w: number, h: number) =>
  `<rect x="${x + 6}" y="${y + 14}" width="${w}" height="${h}" rx="22" fill="#000000" fill-opacity="0.28"/><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="22" fill="#ffffff"/>`;

// ---------- Minh họa cho trang chủ / trang công cụ: báo cáo "đã xóa metadata" ----------

interface Report {
  file: string;
  rows: [label: string, value: string][];
}

function reportCard({ file, rows }: Report): string {
  const x = ART.x;
  const h = 96 + rows.length * 56 + 66;
  const y = AREA.top + (AREA.h - h) / 2;
  const w = ART.w;
  const head = `<rect x="${x + 24}" y="${y + 24}" width="52" height="52" rx="10" fill="${PALETTE['cobalt-soft']}"/>
    <circle cx="${x + 62}" cy="${y + 38}" r="6" fill="${C.accent}"/>
    <path d="M${x + 24} ${y + 76}l18-22 12 12 8-7 14 17z" fill="${PALETTE.cobalt}"/>
    <text x="${x + 92}" y="${y + 48}" font-family="${SANS}" font-size="21" font-weight="700" fill="${PALETTE.ink}">${esc(file)}</text>
    <text x="${x + 92}" y="${y + 72}" font-family="${SANS}" font-size="16" fill="${PALETTE['ink-3']}">${rows.length} metadata blocks found</text>
    <rect x="${x + w - 120}" y="${y + 33}" width="96" height="34" rx="17" fill="${PALETTE['fix-soft']}"/>
    ${check(x + w - 98, y + 50, 9, PALETTE.fix, '#ffffff')}
    <text x="${x + w - 82}" y="${y + 56}" font-family="${SANS}" font-size="16" font-weight="700" fill="${PALETTE.fix}">Clean</text>
    <rect x="${x + 24}" y="${y + 96}" width="${w - 48}" height="1" fill="${PALETTE.line}"/>`;
  // Cột giá trị thẳng hàng, bắt đầu sau nhãn rộng nhất.
  const pillW = (label: string) => Math.max(64, 22 + textWidth(label, 15) * 1.08);
  const vx = x + 24 + Math.max(...rows.map(([l]) => pillW(l))) + 26;
  const body = rows
    .map(([label, value], i) => {
      const ry = y + 110 + i * 56;
      const lw = pillW(label);
      const vw = Math.min(textWidth(value, 18), x + w - 60 - vx);
      return `<rect x="${x + 24}" y="${ry}" width="${lw}" height="30" rx="7" fill="${PALETTE['rose-soft']}"/>
      <text x="${x + 24 + lw / 2}" y="${ry + 20}" text-anchor="middle" font-family="${SANS}" font-size="15" font-weight="700" fill="${PALETTE.rose}">${esc(label)}</text>
      <text x="${vx}" y="${ry + 21}" font-family="${SANS}" font-size="18" fill="${PALETTE['ink-3']}">${esc(value)}</text>
      <rect x="${vx - 2}" y="${ry + 14}" width="${vw + 4}" height="2.2" fill="${PALETTE.rose}"/>
      <g transform="translate(${x + w - 46} ${ry + 5})"><circle cx="10" cy="10" r="10" fill="${PALETTE['rose-soft']}"/><path d="M6.5 6.5l7 7m0-7l-7 7" stroke="${PALETTE.rose}" stroke-width="2.2" stroke-linecap="round"/></g>`;
    })
    .join('');
  const fy = y + h - 46;
  const foot = `<rect x="${x}" y="${fy - 18}" width="${w}" height="${y + h - fy + 18}" fill="${PALETTE['fix-soft']}"/>
    ${check(x + 38, fy + 13, 13, PALETTE.fix, '#ffffff')}
    <text x="${x + 62}" y="${fy + 20}" font-family="${SANS}" font-size="18" font-weight="700" fill="${PALETTE.fix}">Image data untouched · same quality</text>`;
  return `${card(x, y, w, h)}
  <clipPath id="cardClip"><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="22"/></clipPath>
  <g clip-path="url(#cardClip)">${head}${body}${foot}</g>`;
}

// ---------- Minh họa cho bài viết: ảnh minh họa của bài trong một thẻ ----------

function guideArt(slug: GuideSlug): string {
  const w = ART.w;
  const h = Math.round((w * 360) / 640);
  const x = ART.x;
  const y = AREA.top + (AREA.h - h) / 2;
  const art = renderToStaticMarkup(<GuideIllustration slug={slug} />).replace('<svg ', `<svg x="${x}" y="${y}" width="${w}" height="${h}" `);
  return `${card(x, y, w, h)}
  <clipPath id="artClip"><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="22"/></clipPath>
  <g clip-path="url(#artClip)">${resolveColors(art)}</g>`;
}

// ---------- Nội dung từng ảnh ----------

const ALL_FORMATS = 'JPG · PNG · WebP · GIF · HEIC · AVIF';

const svg = (inner: string) =>
  `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">${background()}${topBar()}${inner}</svg>`;

interface ToolOg {
  eyebrow: string;
  title: string;
  sub: string;
  formats: string;
  report: Report;
}

const GPS: [string, string] = ['GPS', '10.7769, 106.7009'];

const HOME_OG: ToolOg = {
  eyebrow: 'Free online tool',
  title: 'Remove AI labels & metadata from photos',
  sub: 'Private and lossless, right in your browser.',
  formats: ALL_FORMATS,
  report: { file: 'IMG_2048.JPG', rows: [['C2PA', 'Made with AI · manifest'], ['EXIF', 'iPhone 15 Pro · f/1.8'], GPS, ['Prompt', '“a cozy cabin at dusk…”']] },
};

/** Ảnh của từng trang công cụ: tiêu đề = cụm từ khóa chính của trang. */
const TOOL_OG: Record<ToolSlug, ToolOg> = {
  'ai-tag-cleaner': {
    eyebrow: 'AI Tag Cleaner',
    title: 'Remove AI tags from image metadata',
    sub: 'IPTC, XMP, C2PA and prompts — cleaned without re-encoding.',
    formats: ALL_FORMATS,
    report: { file: 'portrait.png', rows: [['IPTC', 'trainedAlgorithmicMedia'], ['XMP', 'CreatorTool: Firefly'], ['C2PA', 'Signed manifest'], ['Prompt', '“studio portrait, 85mm…”']] },
  },
  'no-ai-tag': {
    eyebrow: 'No AI Tag',
    title: 'Share real photos without an AI label',
    sub: 'Strip the AI info that triggers “Made with AI” tags.',
    formats: ALL_FORMATS,
    report: { file: 'IMG_3107.JPG', rows: [['AI info', 'Made with AI'], ['C2PA', 'Generative fill'], ['IPTC', 'compositeWithTrained…'], ['EXIF', 'Software: Photoshop']] },
  },
  'remove-exif-data': {
    eyebrow: 'EXIF Remover',
    title: 'Remove EXIF data from photos',
    sub: 'GPS, camera, serial number and dates — gone, pixels untouched.',
    formats: ALL_FORMATS,
    report: { file: 'IMG_2048.JPG', rows: [GPS, ['Camera', 'iPhone 15 Pro'], ['Serial', 'F2LX93K8Q1'], ['Date', '2026:10:04 18:22']] },
  },
  'remove-c2pa-content-credentials': {
    eyebrow: 'C2PA Remover',
    title: 'Remove C2PA Content Credentials',
    sub: 'Delete the signed manifest without re-encoding the image.',
    formats: 'JPG · PNG · WebP · HEIC · AVIF',
    report: { file: 'export.jpg', rows: [['C2PA', 'Content Credentials'], ['JUMBF', 'Manifest store · 38 KB'], ['Signer', 'Adobe Inc.'], ['Action', 'c2pa.edited']] },
  },
  'heic-metadata-remover': {
    eyebrow: 'HEIC Metadata Remover',
    title: 'Remove metadata from iPhone HEIC photos',
    sub: 'Clear GPS and EXIF, keep the file HEIC — no conversion.',
    formats: 'HEIC · HEIF · AVIF',
    report: { file: 'IMG_5520.HEIC', rows: [GPS, ['EXIF', 'iPhone 16 · 24 mm'], ['XMP', 'Apple RegionInfo'], ['Date', '2026:09:12 07:41']] },
  },
  'png-metadata-remover': {
    eyebrow: 'PNG Metadata Remover',
    title: 'Remove PNG metadata & AI prompts',
    sub: 'Strip text chunks, ComfyUI workflows and C2PA from PNG files.',
    formats: 'PNG · APNG',
    report: { file: 'ComfyUI_00042.png', rows: [['tEXt', 'parameters: Steps 30…'], ['iTXt', 'workflow { nodes… }'], ['C2PA', 'OpenAI manifest'], ['Software', 'ComfyUI']] },
  },
};

/** Tiêu đề ngắn (≤ 3 dòng) cho ảnh của từng bài — tiêu đề đầy đủ đã có trong og:title. */
const GUIDE_OG: Record<GuideSlug, string> = {
  'made-with-ai-label': 'Why your real photo got a “Made with AI” label',
  'remove-stable-diffusion-comfyui-metadata': 'Remove Stable Diffusion & ComfyUI prompts',
  'hide-midjourney-dalle-prompts': 'Hide Midjourney & DALL·E prompts before sharing',
  'what-is-c2pa-content-credentials': 'What are C2PA Content Credentials?',
  'remove-gps-location-from-photos': 'Remove GPS location from your photos',
  'batch-remove-metadata': 'Remove metadata from hundreds of photos at once',
  'chatgpt-gemini-image-metadata': 'What metadata ChatGPT & Gemini images carry',
  'remove-metadata-windows-mac': 'Remove photo metadata on Windows & Mac',
  'image-metadata-viewer-online': 'See EXIF, GPS, XMP & C2PA in one place',
  'iptc-digitalsourcetype-ai': 'The IPTC field that tells platforms “this is AI”',
  'remove-metadata-without-losing-quality': 'Remove metadata without losing quality',
  'how-to-check-if-image-is-ai-generated': 'Is this image AI-generated? Check the file',
  'which-platforms-label-ai-images': 'Which platforms label AI images — and how',
  'what-metadata-ai-image-generators-add': 'What AI image generators hide in your files',
  'synthid-invisible-ai-watermarks': 'SynthID & invisible AI watermarks, explained',
  'turn-off-content-credentials-photoshop-lightroom': 'Turn off Content Credentials in Photoshop',
  'which-platforms-strip-photo-metadata': 'Which apps strip photo metadata?',
  'view-remove-metadata-iphone-android': 'View & remove photo metadata on iPhone and Android',
  'what-is-exif-data': 'EXIF data, explained without the jargon',
};

const toolSvg = (og: ToolOg) => svg(`${headline(og.eyebrow, og.title, og.sub)}${reportCard(og.report)}${bottomBar(og.formats)}`);

const guideSvg = (slug: GuideSlug) => svg(`${headline(`Guide · ${GUIDE_TAGS[slug]}`, GUIDE_OG[slug])}${guideArt(slug)}${bottomBar(ALL_FORMATS)}`);

/** Danh sách ảnh OG cần sinh: tên tệp (trong dist/og/) → mã SVG. */
export function ogSvgs(): { file: string; svg: string }[] {
  return [
    { file: 'default.png', svg: toolSvg(HOME_OG) },
    ...TOOL_SLUGS.map((slug) => ({ file: `tool-${slug}.png`, svg: toolSvg(TOOL_OG[slug]) })),
    ...GUIDE_SLUGS.map((slug) => ({ file: `${slug}.png`, svg: guideSvg(slug) })),
  ];
}
