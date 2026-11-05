import { useEffect, useState } from 'react';
import type { Article } from '../../content/articles/types';
import { useGuideContent, type GuideContent } from '../../content/guideContent';
import { plainText } from '../../content/richText';
import { availableGuides, GUIDE_TAGS, GUIDE_TOOLS, type GuideSlug } from '../../content/seo';
import { fmt, formatDate, useI18n, useT } from '../../i18n';
import type { LangCode } from '../../i18n/languages';
import { GUIDES_INDEX, HOME, pathFor, useHref } from '../../router';
import { pageUpdated } from '../../seo/head';
import { Dropzone } from '../Dropzone';
import { LazyWorkspace } from '../inspector/LazyWorkspace';
import { Link } from '../Link';
import { Icon } from '../ui';
import { GuideIllustration } from './GuideIllustration';
import { FaqList, ProseSection } from './Prose';
import { GuideCard } from './SeoSections';

/** Neo cho từng mục của bài (dùng trong mục lục). */
const anchor = (i: number) => `s-${i + 1}`;

/** Ngôn ngữ viết liền không cách từ → ước lượng theo số ký tự thay vì số từ. */
const CHAR_BASED = new Set<LangCode>(['ja', 'zh-CN', 'zh-TW', 'th']);

/** Thời gian đọc (phút): ~220 từ/phút, hoặc ~500 ký tự/phút với tiếng Nhật, Trung, Thái. */
function readingMinutes(guide: GuideContent, article: Article | undefined, lang: LangCode): number {
  const text = [
    ...guide.summary,
    ...(article?.sections.flatMap((s) => [s.heading, ...s.paragraphs, ...(s.bullets ?? [])]) ?? []),
    ...(article?.faq.flatMap((f) => [f.q, f.a]) ?? []),
  ]
    .map(plainText)
    .join(' ');
  const units = CHAR_BASED.has(lang) ? text.replace(/\s+/g, '').length / 500 : text.split(/\s+/).filter(Boolean).length / 220;
  return Math.max(1, Math.round(units));
}

/** Mục đang đọc: mục có tiêu đề gần mép trên màn hình nhất (chỉ chạy phía client; lúc prerender chưa có mục nào). */
function useActiveAnchor(count: number): string | null {
  const [active, setActive] = useState<string | null>(null);
  useEffect(() => {
    const els = Array.from({ length: count }, (_, i) => document.getElementById(anchor(i))).filter((el): el is HTMLElement => el !== null);
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: '-15% 0px -70% 0px' },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [count]);
  return active;
}

/** Danh sách mục lục đánh số; mục đang đọc tô màu chính. */
function TocList({ headings, active }: { headings: string[]; active: string | null }) {
  return (
    <ol className="space-y-1 text-sm">
      {headings.map((h, i) => {
        const on = active === anchor(i);
        return (
          <li key={h}>
            <a
              href={`#${anchor(i)}`}
              aria-current={on ? 'location' : undefined}
              className={`flex gap-3 rounded-md px-2.5 py-1.5 leading-snug transition-colors ${
                on ? 'bg-cobalt-soft font-semibold text-cobalt' : 'text-ink-2 hover:bg-wash hover:text-ink'
              }`}
            >
              <span className="w-4 shrink-0 text-xs leading-5 text-ink-3 tabular-nums" dir="ltr">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span>{h}</span>
            </a>
          </li>
        );
      })}
    </ol>
  );
}

/**
 * Liên kết tới trang công cụ chuyên dụng cho chủ đề bài (GUIDE_TOOLS), dạng viên nhỏ nằm cùng hàng.
 * Chữ liên kết là H1 của trang công cụ — chứa đúng cụm từ khóa. Ngôn ngữ chưa có trang công cụ thì không hiện.
 */
function RelatedTools({ slug }: { slug: GuideSlug }) {
  const pages = useI18n((s) => s.pages);
  const lang = useI18n((s) => s.lang);
  if (!pages) return null;
  return (
    <nav aria-label={pages.labels.relatedTools} className="mt-4 flex flex-wrap items-center gap-2">
      <span className="me-1 inline-flex items-center gap-1.5 text-sm font-medium text-ink-2">
        <Icon name="sparkles" className="h-4 w-4 text-cobalt" />
        {pages.labels.relatedTools}:
      </span>
      {GUIDE_TOOLS[slug].map((tool) => (
        <Link
          key={tool}
          to={pathFor(lang, { name: 'tool', slug: tool })}
          className="group inline-flex items-center gap-1.5 rounded-full bg-sheet px-3.5 py-1.5 text-sm font-semibold text-ink ring-1 ring-line transition-colors hover:text-cobalt hover:ring-cobalt"
        >
          {pages.tools[tool].h1}
          <span aria-hidden="true" className="text-cobalt transition-transform group-hover:translate-x-0.5 rtl:-scale-x-100">
            →
          </span>
        </Link>
      ))}
    </nav>
  );
}

/**
 * Trang một bài hướng dẫn:
 * 1. Mở đầu chia đôi (chữ | ảnh) với dòng thông tin: chủ đề, ngày cập nhật, thời gian đọc.
 * 2. Khối công cụ gọn: thả ảnh + liên kết tới trang công cụ chuyên dụng.
 * 3. Bài viết: mục lục dính bên cạnh (màn hình rộng) hoặc thu gọn phía trên (điện thoại), nội dung, hỏi đáp.
 * 4. Đọc tiếp: 3 thẻ bài liên quan.
 */
export function GuidePage({ slug }: { slug: GuideSlug }) {
  const t = useT();
  const lang = useI18n((s) => s.lang);
  const article = useI18n((s) => s.articles?.[slug]);
  const home = useHref(HOME);
  const guidesIndex = useHref(GUIDES_INDEX);
  const guide = useGuideContent(slug);
  const updated = pageUpdated(useI18n(), { name: 'guide', slug });
  const headings = article?.sections.map((s) => s.heading) ?? [];
  const active = useActiveAnchor(headings.length);
  // 3 bài liên quan: ưu tiên bài cùng cụm chủ đề (article.related), thiếu thì bù bằng các bài kế tiếp
  // trong danh sách (vòng lại từ đầu) — chỉ trong số bài có ở ngôn ngữ này.
  const list = availableGuides(lang);
  const at = list.indexOf(slug);
  const next = list.map((_, k) => list[(at + k + 1) % list.length]);
  const related = [...new Set([...(article?.related ?? []).filter((s) => list.includes(s)), ...next])]
    .filter((s) => s !== slug)
    .slice(0, 3);
  if (!guide) return null;
  const minutes = readingMinutes(guide, article, lang);
  const showToc = headings.length > 2;

  return (
    <main>
      <header className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 pt-8 pb-12 sm:px-8 sm:pt-12 sm:pb-14">
          <nav aria-label="Breadcrumb" className="text-sm text-ink-2">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link to={home} className="hover:text-cobalt">
                  {t.seo.guides.home}
                </Link>
              </li>
              <li aria-hidden="true" className="text-ink-3">
                /
              </li>
              <li>
                <Link to={guidesIndex} className="hover:text-cobalt">
                  {t.seo.guides.eyebrow}
                </Link>
              </li>
            </ol>
          </nav>
          <div className="mt-8 grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-12">
            <div className="lg:col-span-7">
              <p className="inline-flex rounded-full bg-rose-soft px-3 py-1 text-xs font-semibold text-rose" dir="ltr">
                {GUIDE_TAGS[slug]}
              </p>
              <h1 className="mt-4 font-display text-[2.1rem] leading-[1.08] font-extrabold tracking-[-0.03em] text-balance text-ink sm:text-5xl">
                {guide.title}
              </h1>
              <p className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-ink-2">
                <span className="inline-flex items-center gap-1.5">
                  <Icon name="clock" className="h-4 w-4 text-ink-3" />
                  <time dateTime={updated}>{fmt(t.seo.guides.updated, { date: formatDate(updated, lang) })}</time>
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Icon name="document" className="h-4 w-4 text-ink-3" />
                  {fmt(t.seo.guides.readTime, { minutes })}
                </span>
              </p>
              <div className="mt-6 max-w-prose space-y-4 text-lg leading-relaxed text-ink-2">
                {guide.summary.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
            <figure className="overflow-hidden rounded-xl border border-line bg-sheet shadow-sm lg:col-span-5">
              <GuideIllustration slug={slug} className="block aspect-[16/9] w-full" />
            </figure>
          </div>
        </div>
      </header>

      {/* Công cụ dùng ngay: một thẻ gọn thay vì cả một khối lớn chen giữa bài. */}
      <section aria-labelledby="try-tool" className="border-b border-line bg-sheet">
        <div className="mx-auto max-w-6xl px-5 py-8 sm:px-8">
          <h2 id="try-tool" className="mb-4 font-display text-xl font-bold text-ink">
            {t.seo.guides.tryTool}
          </h2>
          <Dropzone compact />
          <RelatedTools slug={slug} />
          <div className="mt-6 empty:hidden">
            <LazyWorkspace />
          </div>
        </div>
      </section>

      {article && (
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 sm:px-8 sm:py-16 lg:grid-cols-12 lg:gap-12">
          {showToc && (
            <aside className="lg:col-span-3">
              {/* Điện thoại / máy tính bảng: mục lục thu gọn phía trên bài */}
              <details className="group rounded-lg border border-line bg-sheet lg:hidden">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-4 py-3 text-sm font-semibold text-ink">
                  {t.seo.guides.toc}
                  <Icon name="chevron" className="h-4 w-4 text-ink-3 transition-transform group-open:rotate-180" />
                </summary>
                <nav aria-label={t.seo.guides.toc} className="border-t border-line p-2">
                  <TocList headings={headings} active={active} />
                </nav>
              </details>
              {/* Màn hình rộng: mục lục dính bên cạnh */}
              <nav aria-label={t.seo.guides.toc} className="sticky top-28 hidden lg:block">
                <p className="mb-3 px-2.5 text-xs font-semibold tracking-wider text-ink-3 uppercase">{t.seo.guides.toc}</p>
                <TocList headings={headings} active={active} />
              </nav>
            </aside>
          )}
          <article className={`min-w-0 ${showToc ? 'lg:col-span-8 lg:col-start-5' : 'lg:col-span-8 lg:col-start-3'}`}>
            {article.sections.map((s, i) => (
              <ProseSection key={s.heading} section={s} id={anchor(i)} />
            ))}

            {article.faq.length > 0 && (
              <section className="mt-16 rounded-xl border border-line bg-sheet p-5 sm:p-7">
                <h2 className="mb-4 font-display text-[1.5rem] font-bold text-ink">{article.faqHeading}</h2>
                <FaqList items={article.faq} />
              </section>
            )}
          </article>
        </div>
      )}

      <section aria-labelledby="related" className="border-t border-line bg-sheet">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 id="related" className="font-display text-2xl font-bold text-ink sm:text-[1.75rem]">
              {t.seo.guides.related}
            </h2>
            <Link to={guidesIndex} className="group inline-flex items-center gap-1 text-sm font-semibold text-cobalt">
              {t.seo.guides.viewAll}
              <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5 rtl:-scale-x-100">
                →
              </span>
            </Link>
          </div>
          <ul className="mt-8 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((s) => (
              <li key={s}>
                <GuideCard slug={s} />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
