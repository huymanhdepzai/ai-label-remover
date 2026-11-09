import fs from 'fs';
import path from 'path';

// Load seo.ts
const seoContent = fs.readFileSync('frontend/src/content/seo.ts', 'utf8');
const articleLangsMatch = seoContent.match(/export const ARTICLE_LANGS[^{]*=\s*(\[[^\]]+\])/);
const articleLangs = eval(articleLangsMatch[1]);
console.log('ARTICLE_LANGS (have full articles):', articleLangs);

// Let's check word counts of pages grouped by page type
const dist = path.join('frontend', 'dist');

function getHtmlFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir, { withFileTypes: true });
  for (const item of list) {
    const full = path.join(dir, item.name);
    if (item.isDirectory()) {
      results = results.concat(getHtmlFiles(full));
    } else if (item.name.endsWith('.html')) {
      results.push(full);
    }
  }
  return results;
}

const htmlFiles = getHtmlFiles(dist);
const shortPages = [];

for (const file of htmlFiles) {
  const relPath = path.relative(dist, file).replace(/\\/g, '/');
  if (relPath === '404.html') continue;
  const html = fs.readFileSync(file, 'utf8');

  const rootStart = html.indexOf('<div id="root">');
  const bodyEnd = html.indexOf('</body>');
  if (rootStart === -1 || bodyEnd === -1) continue;

  const rootContent = html.slice(rootStart + '<div id="root">'.length, bodyEnd);
  let text = rootContent
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '')
    .replace(/<svg\b[^<]*(?:(?!<\/svg>)<[^<]*)*<\/svg>/gi, '')
    .replace(/<noscript\b[^<]*(?:(?!<\/noscript>)<[^<]*)*<\/noscript>/gi, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&[a-z]+;/gi, ' ')
    .replace(/\s+/g, ' ')
    .trim();

  const cjkChars = (text.match(/[\u4e00-\u9fa5\u3040-\u30ff\uac00-\ud7af]/g) || []).length;
  const nonCjkText = text.replace(/[\u4e00-\u9fa5\u3040-\u30ff\uac00-\ud7af]/g, ' ');
  const latinWords = nonCjkText.split(/\s+/).filter(Boolean).length;
  const effectiveWordCount = latinWords + Math.round(cjkChars / 1.5);

  const isArticleLang = articleLangs.some(l => relPath.startsWith(l + '/') || (l === 'en' && !relPath.includes('/')));
  
  // Categorize page
  let type = 'home';
  if (relPath.includes('/guides/')) type = 'guide';
  else if (relPath.includes('/guides')) type = 'guides_index';
  else if (relPath.includes('/about') || relPath.includes('/privacy')) type = 'info';
  else if (relPath.split('/').length > (relPath.startsWith('dist') ? 2 : 1) && !relPath.startsWith('index.html')) type = 'tool';

  if (effectiveWordCount < 400) {
    shortPages.push({ relPath, effectiveWordCount, charCount: text.length, type, isArticleLang });
  }
}

console.log(`Found ${shortPages.length} pages with < 400 words:`);
const byType = {};
for (const p of shortPages) {
  byType[p.type] = (byType[p.type] || 0) + 1;
}
console.log('By type:', byType);

console.log('\nSample short pages:');
shortPages.slice(0, 15).forEach(p => console.log(`[${p.effectiveWordCount}w] [${p.type}] [articleLang: ${p.isArticleLang}] ${p.relPath}`));
