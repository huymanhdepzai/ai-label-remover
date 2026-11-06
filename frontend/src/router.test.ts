import { describe, expect, it } from 'vitest';
import type { Articles } from './content/articles/types';
import {
  availableGuides,
  BASE_GUIDE_SLUGS,
  EXTRA_GUIDE_SLUGS,
  GUIDE_LANGS,
  guidePageCount,
  guidesOnPage,
  INFO_SLUGS,
  ARTICLE_LANGS,
  PRIORITY_LANGS,
  TOOL_SLUGS,
} from './content/seo';
import { LANGUAGES } from './i18n/languages';
import { allRoutes, GUIDES_INDEX, HOME, indexPageCount, languagesFor, localizeRoute, parsePath, pathFor } from './router';

const articleModules = import.meta.glob<{ default: Articles }>(['./content/articles/*.ts', '!./content/articles/types.ts'], {
  eager: true,
});

describe('Phân trang bài viết', () => {
  it('chia đúng số trang và bài trên từng trang', () => {
    const items = Array.from({ length: 14 }, (_, i) => i + 1);
    expect(guidePageCount(14, 6)).toBe(3);
    expect(guidePageCount(6, 6)).toBe(1);
    expect(guidePageCount(0, 6)).toBe(1);
    expect(guidesOnPage(1, items, 6)).toEqual([1, 2, 3, 4, 5, 6]);
    expect(guidesOnPage(3, items, 6)).toEqual([13, 14]);
  });

  it('mỗi ngôn ngữ có đủ bài nền tảng; bài mở rộng chỉ ở ngôn ngữ đã khai báo', () => {
    expect(availableGuides('ko')).toEqual([...BASE_GUIDE_SLUGS]);
    for (const lang of ARTICLE_LANGS) expect(availableGuides(lang)).toHaveLength(BASE_GUIDE_SLUGS.length + EXTRA_GUIDE_SLUGS.length);
  });
});

describe('Bài viết mở rộng', () => {
  for (const slug of EXTRA_GUIDE_SLUGS) {
    for (const lang of GUIDE_LANGS[slug]) {
      it(`${lang}/${slug}: có tiêu đề, tóm tắt và nội dung`, () => {
        const article = articleModules[`./content/articles/${lang}.ts`]?.default?.[slug];
        expect(article?.title?.trim()).toBeTruthy();
        expect(article?.summary?.length).toBeGreaterThan(0);
        expect(article?.sections.length).toBeGreaterThan(0);
        expect(article?.description.length).toBeGreaterThan(50);
      });
    }
  }
});

describe('Đường dẫn trang tổng hợp và bài viết', () => {
  it('tạo URL theo ngôn ngữ và số trang', () => {
    expect(pathFor('en', { name: 'guides', page: 1 })).toBe('/guides/');
    expect(pathFor('vi', { name: 'guides', page: 1 })).toBe('/vi/guides/');
    expect(pathFor('pt-BR', { name: 'guides', page: 2 })).toBe('/pt-br/guides/page/2/');
  });

  it('đọc URL trang tổng hợp, bài viết và trang không hợp lệ', () => {
    expect(parsePath('/vi/guides/')).toMatchObject({ lang: 'vi', route: { name: 'guides', page: 1 }, known: true });
    expect(parsePath(`/ja/guides/${BASE_GUIDE_SLUGS[0]}/`)).toMatchObject({ lang: 'ja', route: { name: 'guide' }, known: true });
    expect(parsePath('/guides/page/1/')).toMatchObject({ route: { name: 'guides', page: 1 }, known: false });
    expect(parsePath(`/vi/guides/page/${indexPageCount('vi') + 1}/`)).toMatchObject({ route: { name: 'guides', page: 1 }, known: false });
  });

  it('bài chưa có bản dịch → chuyển về trang tổng hợp của ngôn ngữ đó', () => {
    const extra = { name: 'guide', slug: EXTRA_GUIDE_SLUGS[0] } as const;
    expect(parsePath(`/ko/guides/${EXTRA_GUIDE_SLUGS[0]}/`)).toMatchObject({ lang: 'ko', route: GUIDES_INDEX, known: false });
    expect(localizeRoute('ko', extra)).toEqual(GUIDES_INDEX);
    expect(localizeRoute('vi', extra)).toEqual(extra);
    expect(languagesFor(extra).map((l) => l.code)).toEqual(LANGUAGES.filter((l) => ARTICLE_LANGS.includes(l.code)).map((l) => l.code));
    expect(localizeRoute('ko', { name: 'guides', page: 3 })).toEqual({ name: 'guides', page: indexPageCount('ko') });
  });

  it('trang công cụ / thông tin: chỉ ở ngôn ngữ chính, ngôn ngữ khác về trang chủ', () => {
    expect(pathFor('en', { name: 'tool', slug: TOOL_SLUGS[0] })).toBe(`/${TOOL_SLUGS[0]}/`);
    expect(pathFor('pt-BR', { name: 'info', slug: 'privacy' })).toBe('/pt-br/privacy/');
    expect(parsePath(`/vi/${TOOL_SLUGS[0]}/`)).toMatchObject({ lang: 'vi', route: { name: 'tool', slug: TOOL_SLUGS[0] }, known: true });
    expect(parsePath('/about/')).toMatchObject({ lang: 'en', route: { name: 'info', slug: 'about' }, known: true });
    expect(parsePath(`/ar/${TOOL_SLUGS[0]}/`)).toMatchObject({ lang: 'ar', route: HOME, known: false });
  });

  it('trang công cụ đã gộp: slug cũ mở trang thay thế', () => {
    expect(parsePath('/remove-ai-metadata/')).toMatchObject({ lang: 'en', route: { name: 'tool', slug: 'ai-tag-cleaner' }, known: true });
    expect(parsePath('/vi/remove-ai-metadata/')).toMatchObject({ lang: 'vi', route: { name: 'tool', slug: 'ai-tag-cleaner' }, known: true });
  });

  it('prerender đúng số trang cho từng ngôn ngữ', () => {
    const routes = allRoutes();
    for (const { code } of LANGUAGES) {
      const own = routes.filter((r) => r.lang === code);
      const guides = availableGuides(code).length;
      const extra = PRIORITY_LANGS.includes(code) ? TOOL_SLUGS.length + INFO_SLUGS.length : 0;
      expect(own).toHaveLength(1 + indexPageCount(code) + guides + extra);
    }
    expect(routes.map((r) => r.path)).toContain('/vi/guides/page/2/');
    expect(routes.map((r) => r.path)).not.toContain(`/ko/guides/${EXTRA_GUIDE_SLUGS[0]}/`);
  });
});
