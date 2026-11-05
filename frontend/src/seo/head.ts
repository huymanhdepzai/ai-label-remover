import { guideContent } from '../content/guideContent';
import { availableGuides, guidePageCount, guidesOnPage, SITE } from '../content/seo';
import { isRtl, type LanguageBundle } from '../i18n';
import { DEFAULT_LANG, findLanguage } from '../i18n/languages';
import { absoluteUrl, languagesFor, pathFor, type Route } from '../router';

/** Toàn bộ thẻ <head> phụ thuộc trang + ngôn ngữ. Dùng chung cho prerender (chuỗi HTML) và client (cập nhật DOM). */
export interface HeadData {
  lang: string;
  dir: 'ltr' | 'rtl';
  title: string;
  description: string;
  canonical: string;
  ogType: 'website' | 'article';
  ogLocale: string;
  alternates: { hreflang: string; href: string }[];
  /** Ảnh chia sẻ (URL tuyệt đối) và mô tả thay thế. */
  image: string;
  imageAlt: string;
}

/** Ảnh Open Graph: mỗi bài và mỗi trang công cụ một ảnh, các trang khác dùng ảnh mặc định (sinh lúc build, xem seo/og.tsx). */
export const OG_SIZE = { width: 1200, height: 630 } as const;
export const ogImagePath = (route: Route): string =>
  route.name === 'guide' ? `/og/${route.slug}.png` : route.name === 'tool' ? `/og/tool-${route.slug}.png` : '/og/default.png';

/**
 * Google cắt title / description theo bề ngang hiển thị (pixel), không theo số ký tự. Ước lượng: chữ CJK và
 * fullwidth rộng gấp đôi chữ Latin. Giới hạn: title ≈ 62, description ≈ 160 "đơn vị Latin".
 */
const TITLE_LIMIT = 62;
const DESCRIPTION_LIMIT = 160;
const WIDE = /[ᄀ-ᅟ⺀-꓏가-힣豈-﫿︰-﹏＀-｠￠-￦]/;
const displayWidth = (s: string) => [...s].reduce((n, c) => n + (WIDE.test(c) ? 2 : 1), 0);

/** Rút gọn về tối đa `max` đơn vị bề ngang: cắt ở ranh giới từ (nếu có khoảng trắng), bỏ dấu câu treo, thêm "…". */
export function clip(s: string, max: number): string {
  if (displayWidth(s) <= max) return s;
  let out = '';
  for (const c of s) {
    if (displayWidth(out + c) > max - 1) break;
    out += c;
  }
  const atWord = out.replace(/\s+\S*$/, '');
  if (atWord.length >= out.length * 0.6) out = atWord;
  return `${out.replace(/[\s,;:.–—-]+$/, '')}…`;
}

/** Thêm hậu tố tên trang khi còn chỗ; tiêu đề quá dài thì bỏ hậu tố và rút gọn. */
const withSiteName = (title: string) => {
  const full = `${title} | ${SITE.name}`;
  return displayWidth(full) <= TITLE_LIMIT ? full : clip(title, TITLE_LIMIT);
};

/**
 * Ngày sửa gần nhất của một trang ở một ngôn ngữ — dùng chung cho sitemap (lastmod), schema (dateModified)
 * và dòng "Cập nhật …" trên trang, để ba nơi luôn khớp nhau.
 */
export function pageUpdated({ lang, articles, pages }: LanguageBundle, route: Route): string {
  switch (route.name) {
    case 'home':
      return SITE.homeUpdated;
    case 'guide':
      return articles?.[route.slug]?.updated ?? SITE.contentUpdated;
    case 'guides': {
      const dates = guidesOnPage(route.page, availableGuides(lang)).map((slug) => articles?.[slug]?.updated ?? SITE.contentUpdated);
      return dates.reduce((a, b) => (a > b ? a : b), SITE.contentUpdated);
    }
    case 'tool':
      return pages?.tools[route.slug]?.updated ?? SITE.homeUpdated;
    case 'info':
      return pages?.info[route.slug]?.updated ?? SITE.homeUpdated;
  }
}

export function buildHead({ lang, m, articles, pages }: LanguageBundle, route: Route): HeadData {
  let title = m.meta.title;
  let description = m.meta.description;
  if (route.name === 'tool' || route.name === 'info') {
    const page = route.name === 'tool' ? pages?.tools[route.slug] : pages?.info[route.slug];
    if (page) {
      title = withSiteName(page.metaTitle);
      description = page.description;
    }
  } else if (route.name === 'guide') {
    const guide = guideContent({ m, articles }, route.slug);
    if (guide) {
      title = withSiteName(articles?.[route.slug]?.metaTitle ?? guide.title);
      description = articles?.[route.slug]?.description ?? guide.summary[0];
    }
  } else if (route.name === 'guides') {
    const slugs = availableGuides(lang);
    const total = guidePageCount(slugs.length);
    const pageSuffix = total > 1 ? ` (${route.page}/${total})` : '';
    title = withSiteName(`${m.seo.guides.title}${pageSuffix}`);
    const titles = guidesOnPage(route.page, slugs).map((slug) => guideContent({ m, articles }, slug)?.title ?? '');
    description = `${m.seo.guides.title}: ${titles.filter(Boolean).join(' · ')}`;
  }
  description = clip(description, DESCRIPTION_LIMIT);

  // hreflang chỉ liệt kê ngôn ngữ thật sự có trang này (bài mở rộng chỉ có ở một số ngôn ngữ).
  const langs = languagesFor(route);
  const guideTitle = route.name === 'guide' ? guideContent({ m, articles }, route.slug)?.title : undefined;
  return {
    lang,
    dir: isRtl(lang) ? 'rtl' : 'ltr',
    title,
    description,
    canonical: absoluteUrl(pathFor(lang, route)),
    ogType: route.name === 'guide' ? 'article' : 'website',
    ogLocale: findLanguage(lang)?.og ?? 'en_US',
    image: absoluteUrl(ogImagePath(route)),
    imageAlt: guideTitle ?? SITE.name,
    alternates: [
      ...langs.map((l) => ({ hreflang: l.code, href: absoluteUrl(pathFor(l.code, route)) })),
      ...(langs.some((l) => l.code === DEFAULT_LANG)
        ? [{ hreflang: 'x-default', href: absoluteUrl(pathFor(DEFAULT_LANG, route)) }]
        : []),
    ],
  };
}

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/** Các thẻ meta theo cặp (selector thuộc tính → giá trị) để render và cập nhật thống nhất. */
function metaTags(h: HeadData): [attr: 'name' | 'property', key: string, value: string][] {
  return [
    ['name', 'description', h.description],
    ['property', 'og:type', h.ogType],
    ['property', 'og:site_name', SITE.name],
    ['property', 'og:locale', h.ogLocale],
    ['property', 'og:url', h.canonical],
    ['property', 'og:title', h.title],
    ['property', 'og:description', h.description],
    ['property', 'og:image', h.image],
    ['property', 'og:image:width', String(OG_SIZE.width)],
    ['property', 'og:image:height', String(OG_SIZE.height)],
    ['property', 'og:image:alt', h.imageAlt],
    ['name', 'twitter:card', 'summary_large_image'],
    ['name', 'twitter:title', h.title],
    ['name', 'twitter:description', h.description],
    ['name', 'twitter:image', h.image],
  ];
}

export function headToHtml(h: HeadData): string {
  return [
    `<title>${esc(h.title)}</title>`,
    ...metaTags(h).map(([attr, key, value]) => `<meta ${attr}="${key}" content="${esc(value)}" />`),
    `<link rel="canonical" href="${esc(h.canonical)}" />`,
    ...h.alternates.map((a) => `<link rel="alternate" hreflang="${a.hreflang}" href="${esc(a.href)}" />`),
  ].join('\n    ');
}

/** Cập nhật <head> trên trình duyệt khi điều hướng / đổi ngôn ngữ (tạo thẻ nếu chưa có). */
export function applyHead(h: HeadData): void {
  const root = document.documentElement;
  root.lang = h.lang;
  root.dir = h.dir;
  document.title = h.title;

  const upsert = (selector: string, create: () => HTMLElement, attr: string, value: string) => {
    let el = document.head.querySelector<HTMLElement>(selector);
    if (!el) {
      el = create();
      document.head.appendChild(el);
    }
    el.setAttribute(attr, value);
  };

  for (const [attr, key, value] of metaTags(h)) {
    upsert(`meta[${attr}="${key}"]`, () => createMeta(attr, key), 'content', value);
  }
  upsert('link[rel="canonical"]', () => createLink('canonical'), 'href', h.canonical);
  for (const a of h.alternates) {
    upsert(`link[rel="alternate"][hreflang="${a.hreflang}"]`, () => createLink('alternate', a.hreflang), 'href', a.href);
  }
}

function createMeta(attr: 'name' | 'property', key: string): HTMLMetaElement {
  const el = document.createElement('meta');
  el.setAttribute(attr, key);
  return el;
}

function createLink(rel: string, hreflang?: string): HTMLLinkElement {
  const el = document.createElement('link');
  el.rel = rel;
  if (hreflang) el.hreflang = hreflang;
  return el;
}
