import { describe, expect, it } from 'vitest';
import { LANGUAGES, type LangCode } from '../i18n/languages';
import type { HomeBasics, Pages } from './pages/types';
import { linkTargets } from './richText';
import { isGuideAvailable, isGuideSlug, PRIORITY_LANGS } from './seo';

const homeModules = import.meta.glob<{ default: HomeBasics }>(['./home/*.ts'], { eager: true });
const pageModules = import.meta.glob<{ default: Pages }>(['./pages/*.ts', '!./pages/types.ts'], { eager: true });
const langOf = (path: string) => path.replace(/^\.\/(home|pages)\//, '').replace('.ts', '') as LangCode;

const homes = new Map<LangCode, HomeBasics>([
  ...Object.entries(pageModules).map(([p, m]) => [langOf(p), m.default.home] as const),
  ...Object.entries(homeModules).map(([p, m]) => [langOf(p), m.default] as const),
]);

describe('Nội dung trang chủ', () => {
  it('có đúng một tệp src/content/home/<mã>.ts cho mỗi ngôn ngữ ngoài nhóm chính', () => {
    const expected = LANGUAGES.map((l) => l.code).filter((c) => !PRIORITY_LANGS.includes(c));
    expect(Object.keys(homeModules).map(langOf).sort()).toEqual([...expected].sort());
  });

  for (const { code: lang } of LANGUAGES) {
    it(`${lang}: đủ các mục trang chủ, liên kết hợp lệ`, () => {
      const home = homes.get(lang);
      expect(home, 'thiếu nội dung trang chủ').toBeDefined();
      const { learn, security, faq = [] } = home!;
      expect(learn, 'thiếu learn').toBeDefined();
      expect(security, 'thiếu security').toBeDefined();
      expect(learn!.what.types).toHaveLength(5);
      expect(learn!.standards.items).toHaveLength(5);
      expect(security!.items).toHaveLength(4);
      expect(faq.length).toBeGreaterThan(0);
      const rich = [
        ...learn!.what.paragraphs,
        learn!.what.synonyms,
        ...learn!.why.paragraphs,
        ...learn!.why.bullets,
        ...learn!.standards.items.map((i) => i.text),
        ...security!.items.map((i) => i.text),
        ...faq.map((f) => f.a),
      ];
      // Ngôn ngữ chính đã được pages.test.ts kiểm tra; ngôn ngữ còn lại không có trang công cụ
      // → chỉ được liên kết tới bài viết có ở ngôn ngữ đó.
      if (PRIORITY_LANGS.includes(lang)) return;
      const broken = rich.flatMap(linkTargets).filter((t) => !(isGuideSlug(t) && isGuideAvailable(t, lang)));
      expect(broken).toEqual([]);
    });
  }
});
