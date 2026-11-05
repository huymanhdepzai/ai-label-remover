import { create } from './store/create';
import {
  availableGuides,
  guidePageCount,
  hasPages,
  INFO_SLUGS,
  isGuideAvailable,
  isGuideSlug,
  isInfoSlug,
  isToolSlug,
  LEGACY_TOOL_SLUGS,
  LEGACY_ANCHORS,
  SITE,
  TOOL_SLUGS,
  type GuideSlug,
  type InfoSlug,
  type ToolSlug,
} from './content/seo';
import { preferredLanguage, rememberLanguage, setLanguage, useI18n } from './i18n';
import { DEFAULT_LANG, findLanguage, LANGUAGES, type LangCode } from './i18n/languages';

/**
 * Bộ định tuyến tối giản theo đường dẫn:
 *   /                          → trang chủ tiếng Anh (x-default)
 *   /{lang}/                   → trang chủ theo ngôn ngữ (vd. /vi/, /pt-br/)
 *   /{lang?}/guides/           → trang tổng hợp bài viết (trang 1)
 *   /{lang?}/guides/page/{n}/  → trang tổng hợp, trang n (n ≥ 2)
 *   /{lang?}/guides/{slug}/    → trang bài viết
 *   /{lang?}/{tool-slug}/      → trang công cụ theo nhu cầu (vd. /remove-exif-data/) — chỉ ngôn ngữ chính
 *   /{lang?}/about/, /privacy/ → trang thông tin — chỉ ngôn ngữ chính
 * Mỗi đường dẫn được prerender thành HTML tĩnh (scripts/prerender.mjs).
 */
export type Route =
  | { name: 'home' }
  | { name: 'guides'; page: number }
  | { name: 'guide'; slug: GuideSlug }
  | { name: 'tool'; slug: ToolSlug }
  | { name: 'info'; slug: InfoSlug };

export const HOME: Route = { name: 'home' };
export const GUIDES_INDEX: Route = { name: 'guides', page: 1 };

const langSegment = (lang: LangCode) => (lang === DEFAULT_LANG ? '' : `/${lang.toLowerCase()}`);

export function pathFor(lang: LangCode, route: Route): string {
  const prefix = langSegment(lang);
  switch (route.name) {
    case 'home':
      return `${prefix}/`;
    case 'guides':
      return route.page > 1 ? `${prefix}/guides/page/${route.page}/` : `${prefix}/guides/`;
    case 'guide':
      return `${prefix}/guides/${route.slug}/`;
    case 'tool':
    case 'info':
      return `${prefix}/${route.slug}/`;
  }
}

export const absoluteUrl = (path: string) => `${SITE.origin}${path}`;

export function parsePath(pathname: string): { lang: LangCode; route: Route; explicitLang: boolean; known: boolean } {
  const segs = pathname.split('/').filter(Boolean);
  let lang: LangCode = DEFAULT_LANG;
  let explicitLang = false;
  const first = segs[0] ? findLanguage(segs[0]) : undefined;
  if (first) {
    lang = first.code;
    explicitLang = true;
    segs.shift();
  }
  if (segs.length === 0) return { lang, route: HOME, explicitLang, known: true };
  if (segs[0] === 'guides') {
    if (segs.length === 1) return { lang, route: GUIDES_INDEX, explicitLang, known: true };
    if (segs.length === 2 && isGuideSlug(segs[1])) {
      // Bài không có ở ngôn ngữ này → về trang tổng hợp của ngôn ngữ đó.
      const route = localizeRoute(lang, { name: 'guide', slug: segs[1] });
      return { lang, route, explicitLang, known: route.name === 'guide' };
    }
    if (segs.length === 3 && segs[1] === 'page' && /^\d+$/.test(segs[2])) {
      const page = Number(segs[2]);
      if (page >= 1 && page <= indexPageCount(lang)) return { lang, route: { name: 'guides', page }, explicitLang, known: page > 1 };
    }
    return { lang, route: GUIDES_INDEX, explicitLang, known: false };
  }
  if (segs.length === 1 && segs[0] in LEGACY_TOOL_SLUGS) segs[0] = LEGACY_TOOL_SLUGS[segs[0]];
  if (segs.length === 1 && (isToolSlug(segs[0]) || isInfoSlug(segs[0]))) {
    const wanted: Route = isToolSlug(segs[0]) ? { name: 'tool', slug: segs[0] } : { name: 'info', slug: segs[0] as InfoSlug };
    // Trang chưa có ở ngôn ngữ này → về trang chủ của ngôn ngữ đó.
    const route = localizeRoute(lang, wanted);
    return { lang, route, explicitLang, known: route.name === wanted.name };
  }
  return { lang, route: HOME, explicitLang, known: false };
}

/** Số trang tổng hợp ở ngôn ngữ `lang` (mỗi ngôn ngữ có thể có số bài khác nhau). */
export const indexPageCount = (lang: LangCode) => guidePageCount(availableGuides(lang).length);

/**
 * Trang tương ứng ở ngôn ngữ khác: giữ nguyên nếu tồn tại, nếu không thì về trang tổng hợp
 * (bài chưa có bản dịch) hoặc trang cuối (ngôn ngữ đích có ít trang hơn).
 */
export function localizeRoute(lang: LangCode, route: Route): Route {
  if ((route.name === 'tool' || route.name === 'info') && !hasPages(lang)) return HOME;
  if (route.name === 'guide' && !isGuideAvailable(route.slug, lang)) return GUIDES_INDEX;
  if (route.name === 'guides' && route.page > indexPageCount(lang)) return { name: 'guides', page: indexPageCount(lang) };
  return route;
}

const sameRoute = (a: Route, b: Route) => JSON.stringify(a) === JSON.stringify(b);

/** Ngôn ngữ có đúng trang `route` (dùng cho hreflang và sitemap). */
export const languagesFor = (route: Route) => LANGUAGES.filter((l) => sameRoute(localizeRoute(l.code, route), route));

/**
 * Mọi đường dẫn cần prerender: mỗi ngôn ngữ × (trang chủ + các trang tổng hợp + các bài có ở ngôn ngữ đó
 * + trang công cụ và trang thông tin nếu là ngôn ngữ chính).
 */
export function allRoutes(): { lang: LangCode; route: Route; path: string }[] {
  return LANGUAGES.flatMap((l) => {
    const indexPages = Array.from({ length: indexPageCount(l.code) }, (_, i): Route => ({ name: 'guides', page: i + 1 }));
    const guides = availableGuides(l.code).map((slug): Route => ({ name: 'guide', slug }));
    const extra: Route[] = hasPages(l.code)
      ? [...TOOL_SLUGS.map((slug): Route => ({ name: 'tool', slug })), ...INFO_SLUGS.map((slug): Route => ({ name: 'info', slug }))]
      : [];
    return [HOME, ...extra, ...indexPages, ...guides].map((route) => ({ lang: l.code, route, path: pathFor(l.code, route) }));
  });
}

interface RouterState {
  route: Route;
}

export const useRouter = create<RouterState>()(() => ({ route: HOME }));

/** Đường dẫn của trang hiện tại ở ngôn ngữ đang chọn. */
export const useHref = (route: Route) => pathFor(useI18n((s) => s.lang), route);

function normalizeHash(hash: string): string {
  const id = decodeURIComponent(hash.slice(1));
  return id && LEGACY_ANCHORS[id] ? `#${LEGACY_ANCHORS[id]}` : hash;
}

function scrollAfterRender(hash: string) {
  requestAnimationFrame(() =>
    requestAnimationFrame(() => {
      const el = hash ? document.getElementById(decodeURIComponent(hash.slice(1))) : null;
      if (el) el.scrollIntoView();
      else window.scrollTo(0, 0);
    }),
  );
}

async function apply(lang: LangCode, route: Route) {
  await setLanguage(lang);
  useRouter.setState({ route });
}

/**
 * Điều hướng phía client (không tải lại trang).
 * `keepScroll`: giữ nguyên vị trí cuộn thay vì nhảy tới neo / đầu trang.
 */
export async function navigate(to: string, opts: { replace?: boolean; keepScroll?: boolean } = {}): Promise<void> {
  const url = new URL(to, window.location.href);
  const { lang, route } = parsePath(url.pathname);
  const hash = normalizeHash(url.hash);
  const target = pathFor(lang, route) + url.search + hash;
  window.history[opts.replace ? 'replaceState' : 'pushState'](null, '', target);
  await apply(lang, route);
  if (!opts.keepScroll) scrollAfterRender(hash);
}

/**
 * Đổi ngôn ngữ, giữ nguyên trang và vị trí đang xem. Neo (#…) trên URL có thể đã cũ — người dùng bấm một mục
 * rồi tự cuộn đi chỗ khác — nên không cuộn lại theo neo.
 */
export async function switchLanguage(lang: LangCode): Promise<void> {
  rememberLanguage(lang);
  await navigate(pathFor(lang, localizeRoute(lang, useRouter.getState().route)) + window.location.hash, { keepScroll: true });
}

/**
 * Khởi tạo khi tải trang. Trả về `redirected = true` nếu URL đã bị đổi (khi đó nội dung HTML prerender
 * không còn khớp và cần render lại thay vì hydrate).
 */
export async function bootstrapRouter(): Promise<{ redirected: boolean }> {
  const url = new URL(window.location.href);
  let { lang, route, explicitLang, known } = parsePath(url.pathname);
  let redirected = !known;

  // Liên kết cũ dạng ?lang=xx → chuyển sang đường dẫn theo ngôn ngữ.
  const legacy = url.searchParams.get('lang');
  if (legacy && findLanguage(legacy)) {
    lang = findLanguage(legacy)!.code;
    url.searchParams.delete('lang');
    redirected = true;
  } else if (!explicitLang && route.name === 'home') {
    // Chỉ trang gốc "/" mới tự chọn ngôn ngữ theo lựa chọn đã lưu / ngôn ngữ trình duyệt.
    const preferred = preferredLanguage();
    if (preferred !== lang) {
      lang = preferred;
      redirected = true;
    }
  }

  const canonical = pathFor(lang, route);
  if (canonical !== url.pathname) redirected = true;
  const hash = normalizeHash(url.hash);
  const hashChanged = hash !== url.hash;
  if (redirected || hashChanged) window.history.replaceState(null, '', canonical + url.search + hash);

  await apply(lang, route);
  if (hashChanged) scrollAfterRender(hash);

  window.addEventListener('popstate', () => {
    const p = parsePath(window.location.pathname);
    void apply(p.lang, p.route);
  });

  return { redirected };
}
