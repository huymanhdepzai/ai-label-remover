import { renderToStaticMarkup } from 'react-dom/server';
import { MARK_SVG_BODY } from '../brand/mark';
import { GuideIllustration } from '../components/seo/GuideIllustration';
import { GUIDE_SLUGS, GUIDE_TAGS, SITE, TOOL_SLUGS, type GuideSlug, type ToolSlug } from '../content/seo';
import { OG_SIZE } from './head';

/**
 * Sinh ảnh chia sẻ mạng xã hội (Open Graph, 1200×630) — chỉ dùng lúc build (entry-server), không vào bundle client.
 * Chữ trong ảnh là thuật ngữ kỹ thuật/tên thương hiệu nên dùng chung cho mọi ngôn ngữ: mỗi bài một ảnh (từ ảnh
 * minh họa của bài) + một ảnh mặc định cho trang chủ/tổng hợp. SVG được chuyển sang PNG trong scripts/prerender.mjs
 * vì Facebook/X không nhận SVG.
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
const FONT = "'Segoe UI', Arial, sans-serif";

/** Dấu thương hiệu (giống favicon, src/brand/mark.ts), cạnh = size. */
const mark = (x: number, y: number, size: number) => `<g transform="translate(${x} ${y}) scale(${size / 32})">${MARK_SVG_BODY}</g>`;

function guideSvg(slug: GuideSlug): string {
  const { width, height } = OG_SIZE;
  const bar = 100;
  const art = renderToStaticMarkup(<GuideIllustration slug={slug} />).replace(
    '<svg ',
    `<svg x="0" y="0" width="${width}" height="${height - bar}" `,
  );
  return resolveColors(`<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
  ${art}
  <rect y="${height - bar}" width="${width}" height="${bar}" fill="#005a73"/>
  ${mark(48, height - bar + 26, 48)}
  <text x="112" y="${height - bar + 62}" font-family="${FONT}" font-size="34" font-weight="800" fill="#ffffff">${esc(SITE.name)}</text>
  <text x="${width - 48}" y="${height - bar + 60}" text-anchor="end" font-family="${FONT}" font-size="26" font-weight="700" fill="#f5c842">${esc(GUIDE_TAGS[slug].toUpperCase())}</text>
</svg>`);
}

/**
 * Ảnh "khung phim" dùng chung cho trang chủ và trang công cụ: tên thương hiệu, một dòng phụ đề, các chip
 * và dòng định dạng. Chữ tiếng Anh vì là tên kỹ thuật dùng chung mọi ngôn ngữ (như ảnh của bài viết).
 */
function filmSvg(subtitle: string, chips: string[], formats: string): string {
  const { width, height } = OG_SIZE;
  const holes = Array.from({ length: 50 }, (_, i) => 12 + i * 24)
    .map((x) => `<rect x="${x}" y="18" width="12" height="10" rx="2" fill="#eef2f6" opacity=".9"/><rect x="${x}" y="${height - 28}" width="12" height="10" rx="2" fill="#eef2f6" opacity=".9"/>`)
    .join('');
  let cx = 96;
  const chipEls = chips
    .map((c) => {
      const w = 36 + c.length * 17;
      const el = `<g transform="translate(${cx} 420)"><rect width="${w}" height="52" rx="6" fill="#ffffff" fill-opacity="0.1"/><line x1="14" y1="26" x2="${w - 14}" y2="26" stroke="#f5c842" stroke-width="2.5"/><text x="${w / 2}" y="35" text-anchor="middle" font-family="${FONT}" font-size="26" font-weight="600" fill="#ffffff">${c}</text></g>`;
      cx += w + 14;
      return el;
    })
    .join('');
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
  <rect width="${width}" height="${height}" fill="#005a73"/>
  <rect y="0" width="${width}" height="46" fill="#003847"/>
  <rect y="${height - 46}" width="${width}" height="46" fill="#003847"/>
  ${holes}
  ${mark(96, 104, 96)}
  <text x="96" y="300" font-family="${FONT}" font-size="84" font-weight="800" fill="#ffffff" letter-spacing="-2">${esc(SITE.name)}</text>
  <text x="96" y="360" font-family="${FONT}" font-size="32" fill="#ddf1f6">${esc(subtitle)}</text>
  ${chipEls}
  <text x="96" y="540" font-family="${FONT}" font-size="24" fill="#f5c842">${esc(formats)}</text>
</svg>`;
}

const ALL_FORMATS = 'JPG · PNG · WebP · GIF · HEIC · AVIF';

/** Nội dung ảnh OG của từng trang công cụ. */
const TOOL_OG: Record<ToolSlug, { subtitle: string; chips: string[]; formats: string }> = {
  'ai-tag-cleaner': { subtitle: 'AI Tag Cleaner — clean AI tags out of image metadata', chips: ['IPTC', 'XMP', 'C2PA', 'Prompts'], formats: ALL_FORMATS },
  'no-ai-tag': { subtitle: 'No AI Tag — share real photos without an AI label', chips: ['AI info', 'C2PA', 'IPTC'], formats: ALL_FORMATS },
  'remove-exif-data': { subtitle: 'EXIF Remover — strip GPS, camera and date data', chips: ['EXIF', 'GPS', 'Serial', 'Date'], formats: ALL_FORMATS },
  'remove-c2pa-content-credentials': { subtitle: 'C2PA Remover — Content Credentials, losslessly', chips: ['C2PA', 'JUMBF', 'Manifest'], formats: 'JPG · PNG · WebP · HEIC · AVIF' },
  'heic-metadata-remover': { subtitle: 'HEIC Metadata Remover for iPhone photos', chips: ['HEIC', 'EXIF', 'GPS', 'XMP'], formats: 'HEIC · HEIF · AVIF' },
  'png-metadata-remover': { subtitle: 'PNG Metadata Remover — prompts and text chunks', chips: ['tEXt', 'iTXt', 'Prompts', 'C2PA'], formats: 'PNG · APNG' },
};

/** Danh sách ảnh OG cần sinh: tên tệp (trong dist/og/) → mã SVG. */
export function ogSvgs(): { file: string; svg: string }[] {
  return [
    { file: 'default.png', svg: filmSvg('Clean AI tags & metadata out of your photos — locally', ['C2PA', 'EXIF', 'XMP', 'IPTC', 'Prompts', 'GPS'], ALL_FORMATS) },
    ...TOOL_SLUGS.map((slug) => ({ file: `tool-${slug}.png`, svg: filmSvg(TOOL_OG[slug].subtitle, TOOL_OG[slug].chips, TOOL_OG[slug].formats) })),
    ...GUIDE_SLUGS.map((slug) => ({ file: `${slug}.png`, svg: guideSvg(slug) })),
  ];
}
