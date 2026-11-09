import fs from 'fs';
import path from 'path';

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
console.log(`Analyzing ${htmlFiles.length} HTML files in dist/...\n`);

const pages = [];

for (const file of htmlFiles) {
  const relPath = path.relative(dist, file).replace(/\\/g, '/');
  if (relPath === '404.html') continue;

  const html = fs.readFileSync(file, 'utf8');

  const rootStart = html.indexOf('<div id="root">');
  const bodyEnd = html.indexOf('</body>');
  if (rootStart === -1 || bodyEnd === -1) {
    console.log(`[NO ROOT] ${relPath}`);
    continue;
  }

  const rootContent = html.slice(rootStart + '<div id="root">'.length, bodyEnd);

  // Remove scripts, styles, SVGs, noscript
  let text = rootContent
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '')
    .replace(/<svg\b[^<]*(?:(?!<\/svg>)<[^<]*)*<\/svg>/gi, '')
    .replace(/<noscript\b[^<]*(?:(?!<\/noscript>)<[^<]*)*<\/noscript>/gi, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&[a-z]+;/gi, ' ')
    .replace(/\s+/g, ' ')
    .trim();

  // For Latin / non-CJK, count words by whitespace
  // For CJK (Chinese, Japanese, Korean), characters themselves carry semantic meaning of words,
  // so we can count words = latin words + CJK characters
  const cjkChars = (text.match(/[\u4e00-\u9fa5\u3040-\u30ff\uac00-\ud7af]/g) || []).length;
  const nonCjkText = text.replace(/[\u4e00-\u9fa5\u3040-\u30ff\uac00-\ud7af]/g, ' ');
  const latinWords = nonCjkText.split(/\s+/).filter(Boolean).length;
  const effectiveWordCount = latinWords + Math.round(cjkChars / 1.5); // ~1.5 CJK characters per word equivalent

  const robotsMatch = html.match(/<meta\s+name="robots"\s+content="([^"]*)"/i);
  const robots = robotsMatch ? robotsMatch[1] : '';

  pages.push({
    relPath,
    effectiveWordCount,
    charCount: text.length,
    robots,
    sample: text.slice(0, 100),
  });
}

// Sort by effectiveWordCount ascending
pages.sort((a, b) => a.effectiveWordCount - b.effectiveWordCount);

console.log('--- 40 SHORTEST PAGES ---');
for (const p of pages.slice(0, 40)) {
  console.log(`${p.effectiveWordCount} words (${p.charCount} chars) [robots: "${p.robots}"]: ${p.relPath}`);
}

console.log('\n--- 10 LONGEST PAGES ---');
for (const p of pages.slice(-10)) {
  console.log(`${p.effectiveWordCount} words (${p.charCount} chars): ${p.relPath}`);
}

// Group by word count ranges
const ranges = {
  '< 150': 0,
  '150 - 300': 0,
  '300 - 500': 0,
  '500 - 1000': 0,
  '1000+': 0,
};

for (const p of pages) {
  if (p.effectiveWordCount < 150) ranges['< 150']++;
  else if (p.effectiveWordCount < 300) ranges['150 - 300']++;
  else if (p.effectiveWordCount < 500) ranges['300 - 500']++;
  else if (p.effectiveWordCount < 1000) ranges['500 - 1000']++;
  else ranges['1000+']++;
}

console.log('\n--- DISTRIBUTION ---');
console.log(ranges);
