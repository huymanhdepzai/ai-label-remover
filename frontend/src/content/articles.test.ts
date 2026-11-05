import { describe, expect, it } from 'vitest';
import type { Articles } from './articles/types';
import { linkTargets } from './richText';
import { hasPages, isGuideAvailable, isGuideSlug, isToolSlug, type GuideSlug } from './seo';
import type { LangCode } from '../i18n/languages';

const modules = import.meta.glob<{ default: Articles }>(['./articles/*.ts', '!./articles/types.ts'], { eager: true });

describe('Liên kết trong bài viết', () => {
  for (const [path, mod] of Object.entries(modules)) {
    const lang = path.replace('./articles/', '').replace('.ts', '') as LangCode;
    for (const [slug, article] of Object.entries(mod.default) as [GuideSlug, NonNullable<Articles[GuideSlug]>][]) {
      it(`${lang}/${slug}: liên kết và bài liên quan hợp lệ`, () => {
        const errors: string[] = [];
        // Văn bản thuần: tiêu đề, tóm tắt, mô tả, tiêu đề mục, câu hỏi — không được chứa cú pháp liên kết.
        const plain = [article.title, article.metaTitle, article.description, ...(article.summary ?? []), ...article.sections.map((s) => s.heading), ...article.faq.map((f) => f.q)];
        for (const s of plain) if (s && linkTargets(s).length) errors.push(`liên kết trong văn bản thuần: ${s}`);

        const rich = [...article.sections.flatMap((s) => [...s.paragraphs, ...(s.bullets ?? [])]), ...article.faq.map((f) => f.a)];
        for (const target of rich.flatMap(linkTargets)) {
          if (isToolSlug(target)) {
            if (!hasPages(lang)) errors.push(`trang công cụ ${target} chưa có ở ${lang}`);
          } else if (!isGuideSlug(target)) errors.push(`slug không tồn tại: ${target}`);
          else if (target === slug) errors.push(`bài tự liên kết tới chính nó`);
          else if (!isGuideAvailable(target, lang)) errors.push(`bài ${target} chưa có ở ${lang}`);
        }
        for (const r of article.related ?? []) {
          if (r === slug || !isGuideAvailable(r, lang)) errors.push(`related không hợp lệ: ${r}`);
        }
        expect(errors).toEqual([]);
      });
    }
  }
});
