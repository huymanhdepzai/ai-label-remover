import type { ReactNode } from 'react';
import { availableGuides, guidePageCount, guidesOnPage } from '../../content/seo';
import { useI18n, useT } from '../../i18n';
import { HOME, useHref, type Route } from '../../router';
import { Link } from '../Link';
import { Icon } from '../ui';
import { GuideCard, GuideFeatureWide } from './SeoSections';

/** Trang tổng hợp bài viết (/guides/, /guides/page/2/…): trang 1 có một bài nổi bật nằm ngang, còn lại là lưới thẻ. */
export function GuidesIndexPage({ page }: { page: number }) {
  const t = useT();
  const { guides } = t.seo;
  const home = useHref(HOME);
  const lang = useI18n((s) => s.lang);
  const all = availableGuides(lang);
  const total = guidePageCount(all.length);
  const slugs = guidesOnPage(page, all);
  const [featured, ...rest] = page === 1 ? slugs : [null, ...slugs];

  return (
    <main>
      <header className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 pt-8 pb-10 sm:px-8 sm:pt-12">
          <nav aria-label="Breadcrumb" className="text-sm text-ink-2">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link to={home} className="hover:text-cobalt">
                  {guides.home}
                </Link>
              </li>
              <li aria-hidden="true" className="text-ink-3">
                /
              </li>
              <li aria-current="page" className="text-ink">
                {guides.eyebrow}
              </li>
            </ol>
          </nav>
          <div className="mt-6 flex flex-wrap items-end justify-between gap-4">
            <h1 className="max-w-3xl font-display text-4xl leading-[1.05] font-extrabold tracking-[-0.03em] text-balance text-ink sm:text-5xl lg:text-[3.4rem]">
              {guides.title}
            </h1>
            {total > 1 && (
              <span className="rounded-full bg-sheet px-3 py-1 text-sm font-semibold text-ink-2 tabular-nums ring-1 ring-line" dir="ltr">
                {page} / {total}
              </span>
            )}
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-14">
        {/* Trang 1: bài mới nhất nằm ngang toàn khổ; các bài còn lại (mọi trang) xếp lưới thẻ cùng kích thước. */}
        {featured && (
          <div className="mb-12 border-b border-line pb-12">
            <GuideFeatureWide slug={featured} />
          </div>
        )}
        <ul className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map(
            (slug) =>
              slug && (
                <li key={slug}>
                  <GuideCard slug={slug} withSummary />
                </li>
              ),
          )}
        </ul>
        {total > 1 && <Pagination page={page} total={total} />}
      </section>
    </main>
  );
}

function PageLink({ page, children, label, current }: { page: number; children: ReactNode; label?: string; current?: boolean }) {
  const route: Route = { name: 'guides', page };
  const href = useHref(route);
  return (
    <Link
      to={href}
      aria-label={label}
      aria-current={current ? 'page' : undefined}
      className={`inline-flex h-10 min-w-10 items-center justify-center gap-1 rounded-full px-3 text-sm font-semibold transition-colors ${
        current ? 'bg-ink text-paper' : 'bg-sheet text-ink-2 ring-1 ring-line hover:text-ink'
      }`}
    >
      {children}
    </Link>
  );
}

/** Phân trang: các nút là liên kết thật để crawler đi qua mọi trang. */
export function Pagination({ page, total }: { page: number; total: number }) {
  const { guides } = useT().seo;
  return (
    <nav aria-label="Pagination" className="mt-16 flex flex-wrap items-center justify-center gap-2 border-t border-line pt-10">
      {page > 1 && (
        <PageLink page={page - 1} label={guides.prevPage}>
          <Icon name="chevron" className="h-4 w-4 rotate-90 rtl:-rotate-90" />
          <span className="hidden sm:inline">{guides.prevPage}</span>
        </PageLink>
      )}
      {Array.from({ length: total }, (_, i) => i + 1).map((n) => (
        <PageLink key={n} page={n} current={n === page}>
          {n}
        </PageLink>
      ))}
      {page < total && (
        <PageLink page={page + 1} label={guides.nextPage}>
          <span className="hidden sm:inline">{guides.nextPage}</span>
          <Icon name="chevron" className="h-4 w-4 -rotate-90 rtl:rotate-90" />
        </PageLink>
      )}
    </nav>
  );
}
