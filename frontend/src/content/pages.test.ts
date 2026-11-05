import { describe, expect, it } from 'vitest';
import type { LangCode } from '../i18n/languages';
import type { Pages } from './pages/types';
import { linkTargets } from './richText';
import { INFO_SLUGS, isGuideAvailable, isGuideSlug, isToolSlug, PRIORITY_LANGS, TOOL_SLUGS } from './seo';

const modules = import.meta.glob<{ default: Pages }>(['./pages/*.ts', '!./pages/types.ts'], { eager: true });
const langOf = (path: string) => path.replace('./pages/', '').replace('.ts', '') as LangCode;

describe('Trang công cụ và trang thông tin', () => {
  it('có đúng một tệp cho mỗi ngôn ngữ chính', () => {
    expect(Object.keys(modules).map(langOf).sort()).toEqual([...PRIORITY_LANGS].sort());
  });

  for (const [path, mod] of Object.entries(modules)) {
    const lang = langOf(path);
    it(`${lang}: đủ trang, độ dài meta hợp lý, liên kết hợp lệ`, () => {
      const errors: string[] = [];
      const pages = [
        ...TOOL_SLUGS.map((s) => [s, mod.default.tools[s]] as const),
        ...INFO_SLUGS.map((s) => [s, mod.default.info[s]] as const),
      ];
      for (const [slug, page] of pages) {
        if (!page) {
          errors.push(`${slug}: thiếu`);
          continue;
        }
        if (page.description.length > 160) errors.push(`${slug}: description ${page.description.length} ký tự`);
        if (page.metaTitle.length > 70) errors.push(`${slug}: metaTitle ${page.metaTitle.length} ký tự`);
        if (!/^\d{4}-\d{2}-\d{2}$/.test(page.updated)) errors.push(`${slug}: updated không hợp lệ`);
        const plain = [page.metaTitle, page.description, 'title' in page ? page.title : page.h1, page.lead, ...page.sections.map((s) => s.heading)];
        for (const s of plain) if (linkTargets(s).length) errors.push(`${slug}: liên kết trong văn bản thuần: ${s}`);
        const rich = [...page.sections.flatMap((s) => [...s.paragraphs, ...(s.bullets ?? [])]), ...('faq' in page ? page.faq.map((f) => f.a) : [])];
        for (const target of rich.flatMap(linkTargets)) {
          if (target === slug) errors.push(`${slug}: tự liên kết tới chính nó`);
          else if (!isToolSlug(target) && !(isGuideSlug(target) && isGuideAvailable(target, lang))) errors.push(`${slug}: liên kết hỏng ${target}`);
        }
        if ('related' in page) for (const r of page.related) if (!isGuideAvailable(r, lang)) errors.push(`${slug}: related ${r} chưa có ở ${lang}`);
      }
      // Nội dung trang chủ riêng: liên kết trong văn bản giàu phải trỏ tới trang có thật ở ngôn ngữ này.
      const { learn, security, faq = [] } = mod.default.home;
      const homeRich = [
        ...(learn ? [...learn.what.paragraphs, learn.what.synonyms, ...learn.why.paragraphs, ...learn.why.bullets, ...learn.standards.items.map((i) => i.text)] : []),
        ...(security?.items.map((i) => i.text) ?? []),
        ...faq.map((f) => f.a),
      ];
      for (const target of homeRich.flatMap(linkTargets)) {
        if (!isToolSlug(target) && !(isGuideSlug(target) && isGuideAvailable(target, lang))) errors.push(`home: liên kết hỏng ${target}`);
      }
      expect(errors).toEqual([]);
    });
  }
});
