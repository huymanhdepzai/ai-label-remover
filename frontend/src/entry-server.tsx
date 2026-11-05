import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import App from './App';
import { loadBundle, useI18n, type LanguageBundle } from './i18n';
import { DEFAULT_LANG, LANGUAGES, type LangCode } from './i18n/languages';
import { absoluteUrl, allRoutes, languagesFor, pathFor, useRouter, type Route } from './router';
import { buildHead, headToHtml, pageUpdated } from './seo/head';

/**
 * Điểm vào prerender (chạy trong Node lúc build, xem scripts/prerender.mjs):
 * render từng trang × ngôn ngữ thành HTML tĩnh kèm <head> riêng, để công cụ tìm kiếm đọc được nội dung
 * mà không cần chạy JavaScript.
 */
export const paths = () => allRoutes().map((r) => r.path);
export { ogSvgs } from './seo/og';

export async function render(path: string): Promise<{ html: string; head: string; htmlAttrs: string }> {
  const entry = allRoutes().find((r) => r.path === path);
  if (!entry) throw new Error(`Unknown route: ${path}`);

  const bundle = await loadBundle(entry.lang);
  useI18n.setState(bundle);
  useRouter.setState({ route: entry.route });

  const html = renderToString(
    <StrictMode>
      <App />
    </StrictMode>,
  );
  const head = buildHead(bundle, entry.route);
  return { html, head: headToHtml(head), htmlAttrs: `lang="${head.lang}" dir="${head.dir}"` };
}

const PRIORITY: Record<Route['name'], string> = { home: '1.0', tool: '0.9', guides: '0.6', guide: '0.7', info: '0.3' };

export async function sitemapXml(): Promise<string> {
  const bundles = new Map<LangCode, LanguageBundle>();
  for (const l of LANGUAGES) bundles.set(l.code, await loadBundle(l.code));
  const urls = allRoutes().map(({ lang, route }) => {
    // Chỉ khai báo các bản ngôn ngữ thật sự tồn tại của trang này.
    const langs = languagesFor(route);
    const alternates = [
      ...langs.map((l) => `    <xhtml:link rel="alternate" hreflang="${l.code}" href="${absoluteUrl(pathFor(l.code, route))}" />`),
      ...(langs.some((l) => l.code === DEFAULT_LANG)
        ? [`    <xhtml:link rel="alternate" hreflang="x-default" href="${absoluteUrl(pathFor(DEFAULT_LANG, route))}" />`]
        : []),
    ].join('\n');
    // lastmod theo đúng ngày sửa của bản ngôn ngữ này — Google bỏ qua lastmod nếu thấy nó không đáng tin.
    const lastmod = pageUpdated(bundles.get(lang)!, route);
    return `  <url>\n    <loc>${absoluteUrl(pathFor(lang, route))}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <priority>${PRIORITY[route.name]}</priority>\n${alternates}\n  </url>`;
  });
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls.join('\n')}\n</urlset>\n`;
}
