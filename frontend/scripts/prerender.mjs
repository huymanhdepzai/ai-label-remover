// Prerender: dùng bản build SSR (dist-ssr) để sinh HTML tĩnh cho mọi trang × ngôn ngữ vào dist/,
// đồng thời tạo sitemap.xml, trang 404, ảnh chia sẻ Open Graph (PNG) và biểu tượng ứng dụng.
// Chạy sau `vite build` và `vite build --ssr` (xem script "build" trong package.json).
import fs from 'node:fs/promises';
import path from 'node:path';
import zlib from 'node:zlib';
import { pathToFileURL } from 'node:url';
import { Resvg } from '@resvg/resvg-js';

const root = path.resolve(import.meta.dirname, '..');
const dist = path.join(root, 'dist');
const ssrDir = path.join(root, 'dist-ssr');

const template = await fs.readFile(path.join(dist, 'index.html'), 'utf8');
if (!template.includes('<!--app-head-->') || !template.includes('<div id="root"></div>')) {
  throw new Error('index.html template is missing <!--app-head--> or <div id="root"></div>');
}

const { paths, render, sitemapXml, ogSvgs } = await import(pathToFileURL(path.join(ssrDir, 'entry-server.js')).href);

async function renderPage(url) {
  const { html, head, htmlAttrs } = await render(url);
  return template
    .replace(/<html[^>]*>/, `<html ${htmlAttrs}>`)
    .replace('<!--app-head-->', head)
    .replace('<div id="root"></div>', `<div id="root">${html}</div>`);
}

let count = 0;
for (const url of paths()) {
  const file = path.join(dist, ...url.split('/').filter(Boolean), 'index.html');
  await fs.mkdir(path.dirname(file), { recursive: true });
  await fs.writeFile(file, await renderPage(url));
  count++;
}

// 404: máy chủ trả mã 404 thật cho URL không tồn tại (tránh "soft 404"); trình duyệt vẫn nhận nội dung trang chủ
// và router phía client tự chuyển về trang phù hợp. noindex để trang này không bao giờ vào kết quả tìm kiếm.
const notFound = (await renderPage('/')).replace(/<meta name="robots" content="[^"]*"\s*\/?>/, '<meta name="robots" content="noindex" />');
await fs.writeFile(path.join(dist, '404.html'), notFound);

await fs.writeFile(path.join(dist, 'sitemap.xml'), await sitemapXml());

/**
 * resvg chỉ đọc TTF/OTF, còn gói @fontsource phát hành WOFF → giải nén WOFF 1.0 (zlib từng bảng) về lại sfnt.
 * Nhờ vậy ảnh OG dùng đúng font của trang và giống hệt nhau dù build trên Windows hay máy chủ Linux.
 */
function woffToSfnt(woff) {
  if (woff.readUInt32BE(0) !== 0x774f4646) throw new Error('not a WOFF 1.0 file');
  const numTables = woff.readUInt16BE(12);
  const tables = [];
  for (let i = 0; i < numTables; i++) {
    const o = 44 + i * 20;
    const [tag, offset, compLength, origLength, checksum] = [0, 4, 8, 12, 16].map((d) => woff.readUInt32BE(o + d));
    const raw = woff.subarray(offset, offset + compLength);
    tables.push({ tag, checksum, data: compLength < origLength ? zlib.inflateSync(raw) : raw });
  }
  const pad4 = (n) => (n + 3) & ~3;
  let pos = 12 + numTables * 16;
  const size = tables.reduce((n, t) => n + pad4(t.data.length), pos);
  const out = Buffer.alloc(size);
  const entrySelector = Math.floor(Math.log2(numTables));
  out.writeUInt32BE(woff.readUInt32BE(4), 0); // flavor
  out.writeUInt16BE(numTables, 4);
  out.writeUInt16BE(2 ** entrySelector * 16, 6);
  out.writeUInt16BE(entrySelector, 8);
  out.writeUInt16BE(numTables * 16 - 2 ** entrySelector * 16, 10);
  tables.forEach((t, i) => {
    const o = 12 + i * 16;
    out.writeUInt32BE(t.tag, o);
    out.writeUInt32BE(t.checksum, o + 4);
    out.writeUInt32BE(pos, o + 8);
    out.writeUInt32BE(t.data.length, o + 12);
    t.data.copy(out, pos);
    pos += pad4(t.data.length);
  });
  return out;
}

const FONT_FILES = [
  '@fontsource/bricolage-grotesque/files/bricolage-grotesque-latin-700-normal.woff',
  '@fontsource/bricolage-grotesque/files/bricolage-grotesque-latin-800-normal.woff',
  ...[400, 500, 600, 700].map((w) => `@fontsource/be-vietnam-pro/files/be-vietnam-pro-latin-${w}-normal.woff`),
];
const fontDir = path.join(ssrDir, 'fonts');
await fs.mkdir(fontDir, { recursive: true });
const fontFiles = await Promise.all(
  FONT_FILES.map(async (file) => {
    const out = path.join(fontDir, path.basename(file).replace(/\.woff$/, '.ttf'));
    await fs.writeFile(out, woffToSfnt(await fs.readFile(path.join(root, 'node_modules', file))));
    return out;
  }),
);

// PNG từ SVG: ảnh OG theo bài + biểu tượng ứng dụng (apple-touch-icon, manifest, logo cho schema.org).
const toPng = (svg, width) =>
  new Resvg(svg, {
    fitTo: width ? { mode: 'width', value: width } : { mode: 'original' },
    font: { fontFiles, loadSystemFonts: true, defaultFontFamily: 'Be Vietnam Pro', sansSerifFamily: 'Be Vietnam Pro' },
  })
    .render()
    .asPng();

await fs.mkdir(path.join(dist, 'og'), { recursive: true });
const og = ogSvgs();
for (const { file, svg } of og) await fs.writeFile(path.join(dist, 'og', file), toPng(svg));

const favicon = await fs.readFile(path.join(root, 'public', 'favicon.svg'), 'utf8');
for (const [file, size] of [['apple-touch-icon.png', 180], ['icon-192.png', 192], ['icon-512.png', 512]]) {
  await fs.writeFile(path.join(dist, file), toPng(favicon, size));
}

await fs.rm(ssrDir, { recursive: true, force: true });
console.log(`prerendered ${count} pages + 404.html + sitemap.xml + ${og.length} OG images`);
