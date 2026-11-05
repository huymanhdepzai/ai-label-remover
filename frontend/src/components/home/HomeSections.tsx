import type { ReactNode } from 'react';
import { FEATURED_TOOL, HOME_SECTIONS, IMAGE_SOURCES, TOOL_FORMATS, TOOL_SLUGS, type ToolSlug } from '../../content/seo';
import { useI18n } from '../../i18n';
import { useHref } from '../../router';
import { Link } from '../Link';
import { Icon, type IconName } from '../ui';
import { RichText } from '../seo/RichText';
import { Section, TOOL_ICONS } from '../seo/SeoSections';

/**
 * Các mục riêng của trang chủ ở ngôn ngữ chính (nội dung trong `pages.home`, src/content/pages/<mã>.ts).
 * Ngôn ngữ không có `pages` → mọi mục ở đây trả về null và trang chủ chỉ còn các mục chung.
 */
const useHome = () => useI18n((s) => s.pages?.home);

const H2 = 'font-display text-3xl leading-tight font-extrabold tracking-[-0.025em] text-balance text-ink sm:text-[2.4rem]';

// ---------- Dải nguồn ảnh ngay dưới phần đầu trang ----------

/**
 * Vị trí "bằng chứng" ngay sau lời hứa ở đầu trang. Không có logo khách hàng để khoe, nên dải này nêu điều kiểm chứng
 * được: công cụ đọc được metadata từ ảnh của những nguồn quen thuộc. Chỉ dùng chữ (không dùng logo) kèm ghi chú
 * không liên kết thương hiệu.
 */
export function SourcesStrip() {
  const home = useHome();
  if (!home) return null;
  return (
    <section aria-label={home.sources.label} className="border-b border-line bg-sheet">
      <div className="mx-auto max-w-6xl px-5 py-7 sm:px-8">
        <p className="text-center text-sm font-medium text-ink-2">{home.sources.label}</p>
        <ul className="mt-4 flex flex-wrap items-center justify-center gap-x-7 gap-y-3" dir="ltr">
          {IMAGE_SOURCES.map((name) => (
            <li key={name} className="font-display text-lg font-bold tracking-tight whitespace-nowrap text-ink-3 sm:text-xl">
              {name}
            </li>
          ))}
        </ul>
        <p className="mt-4 text-center text-xs text-ink-3">{home.sources.note}</p>
      </div>
    </section>
  );
}

// ---------- Bắt đầu với tệp bạn đang có ----------

function ToolTile({ slug, featured = false }: { slug: ToolSlug; featured?: boolean }) {
  const home = useHome();
  const href = useHref({ name: 'tool', slug });
  const page = useI18n((s) => s.pages?.tools[slug]);
  if (!page || !home) return null;
  return (
    <article
      className={`group relative flex h-full flex-col rounded-2xl bg-sheet ring-1 transition-shadow hover:shadow-lg ${
        featured ? 'p-6 ring-2 ring-cobalt sm:p-8' : 'p-5 ring-line hover:ring-cobalt'
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <span
          className={`grid shrink-0 place-items-center rounded-xl ${featured ? 'h-14 w-14 bg-cobalt text-on-cobalt' : 'h-11 w-11 bg-cobalt-soft text-cobalt'}`}
          aria-hidden="true"
        >
          <Icon name={TOOL_ICONS[slug]} className={featured ? 'h-7 w-7' : 'h-5 w-5'} />
        </span>
        {featured && <span className="rounded-full bg-amber-soft px-3 py-1 text-xs font-bold text-amber">{home.start.badge}</span>}
      </div>
      <h3 className={`mt-4 font-display leading-snug font-bold text-ink ${featured ? 'text-2xl sm:text-[1.7rem]' : 'text-lg'}`}>
        <Link to={href} className="after:absolute after:inset-0 group-hover:text-cobalt">
          {page.h1}
        </Link>
      </h3>
      <p className={`mt-2 leading-relaxed text-ink-2 ${featured ? '' : 'line-clamp-2 text-sm'}`}>{featured ? page.lead : page.description}</p>
      {featured && (
        <ul className="mt-5 flex flex-wrap gap-1.5" dir="ltr">
          {TOOL_FORMATS[slug].map((f) => (
            <li key={f} className="rounded bg-wash px-2 py-1 font-mono text-xs text-ink-2">
              {f}
            </li>
          ))}
        </ul>
      )}
      <p className={`mt-auto inline-flex items-center gap-1 pt-5 text-sm font-semibold text-cobalt ${featured ? '' : 'sr-only'}`}>
        {home.start.open}
        <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5 rtl:-scale-x-100">
          →
        </span>
      </p>
    </article>
  );
}

/** Công cụ đề xuất ở ô lớn bên trái, các công cụ còn lại xếp lưới 2×2 bên phải. */
export function StartWithFile() {
  const home = useHome();
  if (!home) return null;
  const rest = TOOL_SLUGS.filter((s) => s !== FEATURED_TOOL);
  return (
    <section id={HOME_SECTIONS.tools} className="scroll-mt-28 border-b border-line py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-3xl">
          <h2 className={H2}>{home.start.title}</h2>
          <p className="mt-4 leading-relaxed text-ink-2">{home.start.lead}</p>
        </div>
        <div className="mt-10 grid gap-4 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <ToolTile slug={FEATURED_TOOL} featured />
          </div>
          <ul className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
            {rest.map((slug) => (
              <li key={slug}>
                <ToolTile slug={slug} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

// ---------- Hình minh họa đơn giản cho phần giáo dục ----------

/** Một tấm ảnh và "thẻ metadata" dính kèm: mỗi dòng là một nhóm, tô theo màu ý nghĩa của giao diện. */
function MetadataCardArt() {
  const rows: [string, string, string][] = [
    ['EXIF', 'iPhone 15 Pro · f/1.8', 'var(--color-sky)'],
    ['GPS', '10.7769, 106.7009', 'var(--color-amber)'],
    ['IPTC', '© Photographer', 'var(--color-ink-2)'],
    ['C2PA', 'Made with AI', 'var(--color-rose)'],
  ];
  return (
    <svg viewBox="0 0 360 240" className="h-auto w-full" role="img" aria-hidden="true">
      <rect x="16" y="28" width="180" height="150" rx="10" fill="var(--color-cobalt-soft)" stroke="var(--color-line)" strokeWidth="1.5" />
      <circle cx="146" cy="70" r="16" fill="var(--color-amber-soft)" />
      <path d="M28 160l50-55 35 35 25-22 46 42z" fill="var(--color-cobalt)" opacity="0.85" />
      <path d="M196 92h22" stroke="var(--color-line)" strokeWidth="2" strokeDasharray="4 4" />
      <rect x="218" y="40" width="128" height="170" rx="10" fill="var(--color-sheet)" stroke="var(--color-line)" strokeWidth="1.5" />
      {rows.map(([k, v, c], i) => (
        <g key={k} transform={`translate(230 ${58 + i * 38})`}>
          <rect width="40" height="16" rx="4" fill={c} opacity="0.16" />
          <text x="20" y="11.5" textAnchor="middle" fontFamily="JetBrains Mono Variable, monospace" fontSize="9" fontWeight="700" fill={c}>
            {k}
          </text>
          <text x="0" y="30" fontFamily="JetBrains Mono Variable, monospace" fontSize="8.5" fill="var(--color-ink-2)">
            {v}
          </text>
        </g>
      ))}
    </svg>
  );
}

/** Ảnh có ghim GPS được gửi đi: tọa độ đi theo tấm ảnh tới người nhận. */
function SharedGpsArt() {
  return (
    <svg viewBox="0 0 360 240" className="h-auto w-full" role="img" aria-hidden="true">
      <rect x="16" y="50" width="130" height="110" rx="10" fill="var(--color-cobalt-soft)" stroke="var(--color-line)" strokeWidth="1.5" />
      <path d="M26 148l36-40 26 26 18-16 32 30z" fill="var(--color-cobalt)" opacity="0.85" />
      <g transform="translate(110 44)">
        <path d="M14 0a14 14 0 0114 14c0 11-14 24-14 24S0 25 0 14A14 14 0 0114 0z" fill="var(--color-amber)" />
        <circle cx="14" cy="14" r="5" fill="var(--color-sheet)" />
      </g>
      <path d="M160 105h50" stroke="var(--color-ink-3)" strokeWidth="2" strokeDasharray="5 5" />
      <path d="M204 98l10 7-10 7" fill="none" stroke="var(--color-ink-3)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="226" y="30" width="118" height="180" rx="16" fill="var(--color-sheet)" stroke="var(--color-line)" strokeWidth="1.5" />
      <rect x="238" y="56" width="94" height="70" rx="8" fill="var(--color-cobalt-soft)" />
      <path d="M244 120l22-24 16 16 12-10 20 18z" fill="var(--color-cobalt)" opacity="0.85" />
      <rect x="238" y="136" width="94" height="40" rx="8" fill="var(--color-amber-soft)" />
      <text x="285" y="152" textAnchor="middle" fontFamily="JetBrains Mono Variable, monospace" fontSize="9" fontWeight="700" fill="var(--color-amber)">
        GPS
      </text>
      <text x="285" y="166" textAnchor="middle" fontFamily="JetBrains Mono Variable, monospace" fontSize="8" fill="var(--color-amber)">
        10.7769, 106.7009
      </text>
    </svg>
  );
}

function Art({ children }: { children: ReactNode }) {
  return <div className="rounded-2xl bg-sheet p-4 ring-1 ring-line sm:p-6">{children}</div>;
}

// ---------- Phần giáo dục: khái niệm → lý do → tiêu chuẩn ----------

const TYPE_ICONS: IconName[] = ['document', 'photo', 'mapPin', 'user', 'sparkles'];

export function LearnMetadata() {
  const learn = useHome()?.learn;
  if (!learn) return null;
  const { what, why, standards } = learn;
  return (
    <>
      <section id={HOME_SECTIONS.learn} className="scroll-mt-28 border-b border-line bg-sheet py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-12">
            <div className="lg:col-span-7">
              <h2 className={H2}>{what.title}</h2>
              {what.paragraphs.map((p, i) => (
                <p key={i} className="mt-4 max-w-prose leading-relaxed text-ink-2">
                  <RichText text={p} />
                </p>
              ))}
            </div>
            <div className="lg:col-span-5">
              <Art>
                <MetadataCardArt />
              </Art>
            </div>
          </div>
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {what.types.map((type, i) => (
              <li key={type.name} className="rounded-xl bg-paper p-5 ring-1 ring-line">
                <Icon name={TYPE_ICONS[i % TYPE_ICONS.length]} className="h-6 w-6 text-cobalt" />
                <h3 className="mt-3 font-display text-lg font-bold text-ink">{type.name}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-2">{type.text}</p>
                <p className="mt-3 font-mono text-[0.7rem] leading-relaxed text-ink-3" dir="ltr">
                  {type.example}
                </p>
              </li>
            ))}
          </ul>
          <p className="mt-8 rounded-xl border-s-4 border-cobalt bg-cobalt-soft/50 px-5 py-4 leading-relaxed text-ink">
            <RichText text={what.synonyms} />
          </p>
        </div>
      </section>

      <section className="scroll-mt-28 border-b border-line py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 sm:px-8 lg:grid-cols-12 lg:items-center lg:gap-12">
          <div className="lg:order-last lg:col-span-7">
            <h2 className={H2}>{why.title}</h2>
            {why.paragraphs.map((p, i) => (
              <p key={i} className="mt-4 max-w-prose leading-relaxed text-ink-2">
                <RichText text={p} />
              </p>
            ))}
            <ul className="mt-6 space-y-3">
              {why.bullets.map((b, i) => (
                <li key={i} className="flex gap-3 leading-relaxed text-ink">
                  <Icon name="alert" className="mt-0.5 h-5 w-5 shrink-0 text-amber" />
                  <span>
                    <RichText text={b} />
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-5">
            <Art>
              <SharedGpsArt />
            </Art>
          </div>
        </div>
      </section>

      <Section id="metadata-standards" title={standards.title} lead={standards.lead} tinted>
        <dl className="grid gap-4 sm:grid-cols-2">
          {standards.items.map((s) => (
            <div key={s.name} className="rounded-xl bg-paper p-5 ring-1 ring-line">
              <dt className="inline-block rounded bg-ink px-2 py-0.5 font-mono text-sm font-bold text-paper" dir="ltr">
                {s.name}
              </dt>
              <dd className="mt-3 leading-relaxed text-ink-2">
                <RichText text={s.text} />
              </dd>
            </div>
          ))}
        </dl>
      </Section>
    </>
  );
}

// ---------- Bảo mật: trả lời nỗi lo trước khi người dùng chọn ảnh ----------

const SECURITY_ICONS: IconName[] = ['desktop', 'lock', 'bolt', 'shield'];

export function Security() {
  const security = useHome()?.security;
  if (!security) return null;
  return (
    <section id={HOME_SECTIONS.security} className="scroll-mt-28 border-b border-line bg-film py-16 text-white sm:py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-3xl">
          <Icon name="shield" className="h-8 w-8 text-[#5fd3ec]" />
          <h2 className="mt-3 font-display text-3xl leading-tight font-extrabold tracking-[-0.025em] text-balance sm:text-[2.4rem]">{security.title}</h2>
          <p className="mt-4 leading-relaxed opacity-80">{security.lead}</p>
        </div>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {security.items.map((item, i) => (
            <li key={i} className="rounded-xl bg-white/[0.06] p-5 ring-1 ring-white/15">
              <Icon name={SECURITY_ICONS[i % SECURITY_ICONS.length]} className="h-6 w-6 text-[#5fd3ec]" />
              <h3 className="mt-3 font-display text-lg font-bold">{item.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed opacity-80">
                <RichText text={item.text} />
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
