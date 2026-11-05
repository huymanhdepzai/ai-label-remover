import { FORMAT_ROWS, TOOL_FORMATS, TOOL_SLUGS, TRUST_ICONS, type ToolSlug } from '../../content/seo';
import { useI18n, useT } from '../../i18n';
import { HOME, useHref } from '../../router';
import { Dropzone } from '../Dropzone';
import { LazyWorkspace } from '../inspector/LazyWorkspace';
import { Link } from '../Link';
import { Icon } from '../ui';
import { FaqList, ProseSection } from './Prose';
import { GuideRow, HowItWorks } from './SeoSections';

/** Bảng khối bị xóa / được giữ của các định dạng liên quan tới trang (lấy từ FORMAT_ROWS). */
function FormatCards({ slug }: { slug: ToolSlug }) {
  const t = useT();
  const rows = FORMAT_ROWS.filter((r) => TOOL_FORMATS[slug].includes(r.format));
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {rows.map((r) => (
        <div key={r.format} className="rounded-lg border border-line bg-sheet p-5">
          <p className="flex flex-wrap items-baseline justify-between gap-2" dir="ltr">
            <span className="font-display text-lg font-bold text-ink">{r.format}</span>
            <span className="text-xs text-ink-3">{r.structure}</span>
          </p>
          <h3 className="mt-4 text-sm font-semibold text-rose">{t.seo.formats.colRemoved}</h3>
          <ul className="mt-2 flex flex-wrap gap-1.5" dir="ltr">
            {r.removed.split(/,\s*/).map((b) => (
              <li key={b} className="rounded bg-rose-soft px-2 py-1 font-mono text-xs text-rose line-through decoration-1">
                {b}
              </li>
            ))}
          </ul>
          <h3 className="mt-4 text-sm font-semibold text-fix">{t.seo.formats.colKept}</h3>
          <ul className="mt-2 flex flex-wrap gap-1.5" dir="ltr">
            {r.kept.split(/,\s*/).map((b) => (
              <li key={b} className="rounded bg-fix-soft px-2 py-1 font-mono text-xs text-fix">
                {b}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

function ToolLink({ slug }: { slug: ToolSlug }) {
  const href = useHref({ name: 'tool', slug });
  const label = useI18n((s) => s.pages?.tools[slug]?.navLabel);
  return (
    <Link
      to={href}
      className="inline-flex items-center gap-1.5 rounded-full border border-line bg-sheet px-3.5 py-1.5 text-sm font-medium text-ink-2 transition-colors hover:border-cobalt hover:text-cobalt"
    >
      {label}
    </Link>
  );
}

/**
 * Trang công cụ theo nhu cầu tìm kiếm: H1 = cụm từ khóa, công cụ ngay bên dưới (dùng được ngay, không cần cuộn),
 * rồi nội dung riêng cho nhu cầu đó, bảng định dạng liên quan, quy trình, hỏi đáp, bài viết và công cụ liên quan.
 */
export function ToolPage({ slug }: { slug: ToolSlug }) {
  const t = useT();
  const page = useI18n((s) => s.pages?.tools[slug]);
  const labels = useI18n((s) => s.pages?.labels);
  const home = useHref(HOME);
  if (!page || !labels) return null;
  const trustKeys = Object.keys(TRUST_ICONS) as (keyof typeof TRUST_ICONS)[];

  return (
    <main>
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 pt-8 pb-12 sm:px-8 sm:pt-12">
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
              <li aria-current="page" className="text-ink">
                {page.navLabel}
              </li>
            </ol>
          </nav>
          <div className="mt-6 grid gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-5">
              <h1 className="font-display text-[2.1rem] leading-[1.08] font-extrabold tracking-[-0.03em] text-balance text-ink sm:text-5xl">
                {page.h1}
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-ink-2">{page.lead}</p>
              <ul className="mt-6 space-y-2.5 border-s-2 border-cobalt ps-4">
                {trustKeys.map((key) => (
                  <li key={key} className="flex items-center gap-2.5 text-[0.95rem] font-medium text-ink">
                    <Icon name={TRUST_ICONS[key]} className="h-4.5 w-4.5 shrink-0 text-cobalt" />
                    {t.hero.trust[key]}
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-7">
              <Dropzone />
            </div>
          </div>
          <div className="mt-8 empty:hidden">
            <LazyWorkspace />
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 lg:grid-cols-12">
        <article className="min-w-0 lg:col-span-8 lg:col-start-3">
          {page.sections.map((s) => (
            <ProseSection key={s.heading} section={s} />
          ))}
          <section className="mt-12">
            <h2 className="mb-5 font-display text-[1.7rem] leading-tight font-bold tracking-[-0.02em] text-ink">{labels.formats}</h2>
            <FormatCards slug={slug} />
          </section>
        </article>
      </div>

      <HowItWorks />

      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-4 font-display text-[1.7rem] font-bold text-ink">{page.faqHeading}</h2>
          <FaqList items={page.faq} />
        </div>
      </div>

      <section aria-labelledby="related" className="border-t border-line bg-sheet">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
          <h2 id="related" className="font-display text-2xl font-bold text-ink">
            {t.seo.guides.related}
          </h2>
          <ul className="mt-4 grid gap-x-10 divide-y divide-line md:grid-cols-3 md:divide-y-0">
            {page.related.slice(0, 3).map((s) => (
              <li key={s}>
                <GuideRow slug={s} />
              </li>
            ))}
          </ul>
          <h2 className="mt-12 font-display text-xl font-bold text-ink">{labels.tools}</h2>
          <ul className="mt-4 flex flex-wrap gap-2">
            {TOOL_SLUGS.filter((s) => s !== slug).map((s) => (
              <li key={s}>
                <ToolLink slug={s} />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
