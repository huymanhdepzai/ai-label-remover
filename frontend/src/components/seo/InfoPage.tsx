import { SITE, type InfoSlug } from '../../content/seo';
import { fmt, formatDate, useI18n, useT } from '../../i18n';
import { HOME, useHref } from '../../router';
import { pageUpdated } from '../../seo/head';
import { Link } from '../Link';
import { Icon } from '../ui';
import { ProseSection } from './Prose';

/** Trang thông tin (Giới thiệu, Quyền riêng tư): tiêu đề + ngày cập nhật, nội dung một cột dễ đọc. */
export function InfoPage({ slug }: { slug: InfoSlug }) {
  const t = useT();
  const bundle = useI18n();
  const page = bundle.pages?.info[slug];
  const labels = bundle.pages?.labels;
  const home = useHref(HOME);
  if (!page || !labels) return null;
  const updated = pageUpdated(bundle, { name: 'info', slug });

  return (
    <main>
      <header className="border-b border-line">
        <div className="mx-auto max-w-3xl px-5 pt-8 pb-12 sm:px-8 sm:pt-12">
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
          <h1 className="mt-6 font-display text-[2.1rem] leading-[1.08] font-extrabold tracking-[-0.03em] text-balance text-ink sm:text-5xl">
            {page.title}
          </h1>
          <p className="mt-4 text-sm text-ink-3">
            <time dateTime={updated}>{fmt(labels.updated, { date: formatDate(updated, bundle.lang) })}</time>
          </p>
          <p className="mt-6 text-lg leading-relaxed text-ink-2">{page.lead}</p>
        </div>
      </header>

      <article className="mx-auto max-w-3xl px-5 py-14 sm:px-8">
        {page.sections.map((s) => (
          <ProseSection key={s.heading} section={s} />
        ))}
        {slug === 'about' && SITE.contactEmail && (
          <section className="mt-12 rounded-lg border border-line bg-sheet p-6">
            <h2 className="flex items-center gap-2.5 font-display text-xl font-bold text-ink">
              <Icon name="info" className="h-5 w-5 text-cobalt" />
              {labels.contact}
            </h2>
            <p className="mt-3 leading-relaxed text-ink-2">
              {labels.contactText}{' '}
              <a href={`mailto:${SITE.contactEmail}`} className="font-semibold text-cobalt underline underline-offset-4">
                {SITE.contactEmail}
              </a>
            </p>
          </section>
        )}
      </article>
    </main>
  );
}
