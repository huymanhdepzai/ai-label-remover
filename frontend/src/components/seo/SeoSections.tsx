import { useId, useState, type ReactNode } from 'react';
import { useGuideContent } from '../../content/guideContent';
import {
  availableGuides,
  FORMAT_ROWS,
  GUIDE_TAGS,
  HOME_GUIDE_COUNT,
  HOME_SECTIONS,
  SITE,
  WHY_ROWS,
  type GuideSlug,
  type Support,
  type ToolSlug,
} from '../../content/seo';
import { fmt, useI18n, useT } from '../../i18n';
import { GUIDES_INDEX, useHref } from '../../router';
import { Link } from '../Link';
import { buttonClass, Icon, type IconName } from '../ui';
import { GuideIllustration } from './GuideIllustration';
import { FaqList } from './Prose';

// ---------- Khung chung cho các mục ----------

/**
 * Mỗi mục: tiêu đề căn trái ở cột hẹp bên trái (màn hình rộng), nội dung ở cột rộng bên phải.
 * Bố cục "lề tiêu đề" này lặp lại xuyên suốt trang để mắt đọc theo một trục dọc.
 */
export function Section({ id, title, lead, children, tinted = false }: { id: string; title: string; lead?: string; children: ReactNode; tinted?: boolean }) {
  return (
    <section id={id} className={`scroll-mt-28 border-b border-line py-16 sm:py-20 ${tinted ? 'bg-sheet' : ''}`}>
      <div className="mx-auto grid max-w-6xl gap-8 px-5 sm:px-8 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-4">
          <h2 className="font-display text-3xl leading-tight font-extrabold tracking-[-0.025em] text-balance text-ink sm:text-[2.4rem]">{title}</h2>
          {lead && <p className="mt-4 max-w-sm leading-relaxed text-ink-2">{lead}</p>}
        </div>
        <div className="min-w-0 lg:col-span-8">{children}</div>
      </div>
    </section>
  );
}

// ---------- Thẻ bài viết ----------

/** Bài nổi bật: ảnh minh họa lớn + tiêu đề + đoạn tóm tắt đầu. */
export function GuideFeature({ slug }: { slug: GuideSlug }) {
  const guide = useGuideContent(slug);
  const href = useHref({ name: 'guide', slug });
  if (!guide) return null;
  return (
    <article className="group relative">
      <div className="overflow-hidden rounded-lg border border-line">
        <GuideIllustration slug={slug} className="block aspect-[16/9] w-full" />
      </div>
      <p className="mt-4 text-sm font-semibold text-rose" dir="ltr">
        {GUIDE_TAGS[slug]}
      </p>
      <h3 className="mt-1 font-display text-2xl leading-snug font-bold text-ink sm:text-[1.7rem]">
        <Link to={href} className="decoration-cobalt decoration-2 underline-offset-4 group-hover:underline after:absolute after:inset-0">
          {guide.title}
        </Link>
      </h3>
      <p className="mt-3 line-clamp-3 max-w-prose leading-relaxed text-ink-2">{guide.summary[0]}</p>
    </article>
  );
}

/** Bài dạng hàng: ảnh nhỏ + chủ đề + tiêu đề (danh sách, trang tổng hợp, bài liên quan). */
export function GuideRow({ slug, withSummary = false }: { slug: GuideSlug; withSummary?: boolean }) {
  const guide = useGuideContent(slug);
  const href = useHref({ name: 'guide', slug });
  if (!guide) return null;
  return (
    <article className="group relative flex gap-4 py-4 sm:gap-5">
      <div className="w-28 shrink-0 overflow-hidden rounded-md border border-line sm:w-36">
        <GuideIllustration slug={slug} className="block aspect-[16/10] w-full" />
      </div>
      <div className="min-w-0">
        <p className="text-xs font-semibold text-rose" dir="ltr">
          {GUIDE_TAGS[slug]}
        </p>
        <h3 className="mt-1 leading-snug font-semibold text-ink">
          <Link to={href} className="decoration-cobalt decoration-2 underline-offset-4 group-hover:underline after:absolute after:inset-0">
            {guide.title}
          </Link>
        </h3>
        {withSummary && <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-ink-2">{guide.summary[0]}</p>}
      </div>
    </article>
  );
}

/** Thẻ bài dạng dọc: ảnh 16:9 ở trên, chủ đề + tiêu đề (+ tóm tắt) bên dưới — dùng cho lưới bài viết. */
export function GuideCard({ slug, withSummary = false }: { slug: GuideSlug; withSummary?: boolean }) {
  const guide = useGuideContent(slug);
  const href = useHref({ name: 'guide', slug });
  if (!guide) return null;
  return (
    <article className="group relative flex h-full flex-col">
      <div className="overflow-hidden rounded-lg border border-line bg-sheet transition-shadow group-hover:shadow-md">
        <GuideIllustration slug={slug} className="block aspect-[16/9] w-full transition-transform duration-300 group-hover:scale-[1.02]" />
      </div>
      <p className="mt-4 text-xs font-semibold text-rose" dir="ltr">
        {GUIDE_TAGS[slug]}
      </p>
      <h3 className="mt-1.5 line-clamp-3 font-display text-lg leading-snug font-bold text-ink">
        <Link to={href} className="decoration-cobalt decoration-2 underline-offset-4 group-hover:underline after:absolute after:inset-0">
          {guide.title}
        </Link>
      </h3>
      {withSummary && <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-ink-2">{guide.summary[0]}</p>}
    </article>
  );
}

/** Bài nổi bật dạng ngang (màn hình rộng): ảnh lớn bên trái, chữ bên phải, căn giữa theo chiều dọc. */
export function GuideFeatureWide({ slug }: { slug: GuideSlug }) {
  const guide = useGuideContent(slug);
  const href = useHref({ name: 'guide', slug });
  if (!guide) return null;
  return (
    <article className="group relative grid gap-6 lg:grid-cols-12 lg:items-center lg:gap-10">
      <div className="overflow-hidden rounded-xl border border-line bg-sheet shadow-sm transition-shadow group-hover:shadow-md lg:col-span-7">
        <GuideIllustration slug={slug} className="block aspect-[16/9] w-full transition-transform duration-300 group-hover:scale-[1.02]" />
      </div>
      <div className="lg:col-span-5">
        <p className="text-sm font-semibold text-rose" dir="ltr">
          {GUIDE_TAGS[slug]}
        </p>
        <h2 className="mt-2 font-display text-2xl leading-tight font-extrabold tracking-[-0.02em] text-ink sm:text-[2rem]">
          <Link to={href} className="decoration-cobalt decoration-2 underline-offset-4 group-hover:underline after:absolute after:inset-0">
            {guide.title}
          </Link>
        </h2>
        <p className="mt-4 line-clamp-4 leading-relaxed text-ink-2">{guide.summary[0]}</p>
      </div>
    </article>
  );
}

// ---------- Cách hoạt động: 4 bước là một trình tự thật → đánh số, nối bằng một đường ---------

export function HowItWorks() {
  const { how } = useT().seo;
  return (
    <Section id={HOME_SECTIONS.how} title={how.title} lead={how.text} tinted>
      <ol className="relative space-y-8 border-s-2 border-line ps-8">
        {how.steps.map((step, i) => (
          <li key={i} className="relative">
            <span
              aria-hidden="true"
              className="absolute -start-[calc(2rem+1.05rem)] top-0 grid h-8 w-8 place-items-center rounded-full bg-cobalt font-display text-sm font-bold text-on-cobalt"
            >
              {i + 1}
            </span>
            <h3 className="font-display text-xl font-bold text-ink">{step.title}</h3>
            <p className="mt-1.5 max-w-prose leading-relaxed text-ink-2">{step.text}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}

// ---------- Biểu tượng của từng trang công cụ (dùng ở mục "Bắt đầu với tệp bạn đang có") ----------

export const TOOL_ICONS: Record<ToolSlug, IconName> = {
  'ai-tag-cleaner': 'sparkles',
  'no-ai-tag': 'check',
  'remove-exif-data': 'mapPin',
  'remove-c2pa-content-credentials': 'shield',
  'heic-metadata-remover': 'photo',
  'png-metadata-remover': 'document',
};

// ---------- Tính năng: không phải trình tự → không đánh số ----------

const FEATURE_ICONS: IconName[] = ['lock', 'photo', 'sparkles', 'shield', 'layers', 'check'];

export function Features() {
  const { features } = useT().seo;
  return (
    <Section id={HOME_SECTIONS.features} title={features.title}>
      <dl className="grid gap-x-10 gap-y-9 sm:grid-cols-2">
        {features.items.map((f, i) => (
          <div key={i}>
            <dt className="flex items-center gap-3 font-display text-lg font-bold text-ink">
              <Icon name={FEATURE_ICONS[i % FEATURE_ICONS.length]} className="h-6 w-6 shrink-0 text-cobalt" />
              {f.title}
            </dt>
            <dd className="mt-2 ps-9 leading-relaxed text-ink-2">{f.text}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}

// ---------- So sánh ----------

/** Ký hiệu hỗ trợ: dấu tích / gạch ngang / dấu nhân trong ô tròn — phân biệt bằng hình, không chỉ bằng màu. */
const MARKS: Record<Support, { path: string; tone: string }> = {
  yes: { path: 'M4.5 12.75l6 6 9-13.5', tone: 'bg-fix-soft text-fix' },
  partial: { path: 'M6 12h12', tone: 'bg-amber-soft text-amber' },
  no: { path: 'M7 17L17 7M7 7l10 10', tone: 'bg-rose-soft text-rose' },
};

function SupportMark({ value, label }: { value: Support; label: string }) {
  const { path, tone } = MARKS[value];
  return (
    <span className="inline-flex items-center gap-2 text-sm font-semibold text-ink-2">
      <span className={`grid h-6 w-6 shrink-0 place-items-center rounded-full ${tone}`}>
        <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" aria-hidden="true">
          <path d={path} fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
      <span>{label}</span>
    </span>
  );
}

/** Điểm của một cột: số tiêu chí đạt "Có" trên tổng số, kèm thanh tiến độ. */
function Score({ column, highlight }: { column: number; highlight: boolean }) {
  const yes = WHY_ROWS.filter((r) => r[column] === 'yes').length;
  const total = WHY_ROWS.length;
  return (
    <div className="mt-2">
      <p className={`font-display text-2xl font-extrabold tabular-nums ${highlight ? 'text-cobalt' : 'text-ink-2'}`} dir="ltr">
        {yes}
        <span className="text-base font-bold text-ink-3">/{total}</span>
      </p>
      <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-wash" aria-hidden="true">
        <div className={`h-full rounded-full ${highlight ? 'bg-cobalt' : 'bg-ink-3'}`} style={{ width: `${(yes / total) * 100}%` }} />
      </div>
    </div>
  );
}

/**
 * So sánh: tiêu đề + đoạn dẫn ở trên, bảng rộng toàn khung bên dưới.
 * Cột của sản phẩm được nâng lên thành "thẻ" viền xanh chạy suốt chiều cao bảng; mỗi cột có điểm x/7.
 * Điện thoại: dải điểm ở trên, rồi mỗi tiêu chí một thẻ nhỏ.
 */
export function WhyChoose() {
  const { why } = useT().seo;
  const cols = [SITE.name, why.columns.online, why.columns.screenshot];
  const last = WHY_ROWS.length - 1;
  // Ô thuộc cột nổi bật: nền xanh nhạt + viền hai bên; ô đầu/cuối bo góc và có viền trên/dưới.
  const hl = (pos: 'head' | 'body' | 'end') =>
    `bg-cobalt-soft/45 border-x-2 border-cobalt ${pos === 'head' ? 'border-t-2 rounded-t-xl' : ''} ${pos === 'end' ? 'border-b-2 rounded-b-xl' : 'shadow-[inset_0_-1px_0_var(--color-line)]'}`;

  return (
    <section id={HOME_SECTIONS.why} className="scroll-mt-28 border-b border-line bg-sheet py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold tracking-wide text-rose uppercase">{why.eyebrow}</p>
          <h2 className="mt-2 font-display text-3xl leading-tight font-extrabold tracking-[-0.025em] text-balance text-ink sm:text-[2.4rem]">
            {fmt(why.title, { name: SITE.name })}
          </h2>
          <p className="mt-4 leading-relaxed text-ink-2">{why.text}</p>
        </div>

        {/* Điện thoại */}
        <div className="mt-10 md:hidden">
          <dl className="grid grid-cols-3 gap-2">
            {cols.map((label, c) => (
              <div key={c} className={`rounded-lg p-3 ${c === 0 ? 'bg-cobalt-soft/45 ring-2 ring-cobalt' : 'bg-paper ring-1 ring-line'}`}>
                <dt className={`text-xs leading-snug font-semibold ${c === 0 ? 'text-cobalt' : 'text-ink-2'}`}>{label}</dt>
                <dd>
                  <Score column={c} highlight={c === 0} />
                </dd>
              </div>
            ))}
          </dl>
          <ul className="mt-6 space-y-3">
            {WHY_ROWS.map((cells, i) => (
              <li key={i} className="rounded-lg bg-paper p-4 ring-1 ring-line">
                <p className="font-semibold text-ink">{why.rows[i]}</p>
                <dl className="mt-3 space-y-2">
                  {cols.map((label, c) => (
                    <div key={c} className="flex items-center justify-between gap-3 text-sm">
                      <dt className={c === 0 ? 'font-semibold text-cobalt' : 'text-ink-2'}>{label}</dt>
                      <dd>
                        <SupportMark value={cells[c]} label={why.legend[cells[c]]} />
                      </dd>
                    </div>
                  ))}
                </dl>
              </li>
            ))}
          </ul>
        </div>

        {/* Máy tính bảng / máy tính */}
        <table className="mt-12 hidden w-full border-separate border-spacing-0 text-start md:table">
          <colgroup>
            <col className="w-[34%]" />
            <col className="w-[22%]" />
            <col className="w-[22%]" />
            <col className="w-[22%]" />
          </colgroup>
          <thead>
            <tr>
              <th scope="col" className="border-b-2 border-ink pe-4 pb-4 align-bottom text-start text-sm font-semibold text-ink-2">
                {why.columns.feature}
              </th>
              {cols.map((label, c) => (
                <th
                  key={c}
                  scope="col"
                  className={`px-5 pt-5 pb-4 align-bottom text-start ${c === 0 ? hl('head') : 'border-b-2 border-ink'}`}
                >
                  <span className={`block leading-snug font-semibold ${c === 0 ? 'font-display text-lg text-cobalt' : 'text-sm text-ink-2'}`}>
                    {label}
                  </span>
                  <Score column={c} highlight={c === 0} />
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {WHY_ROWS.map((cells, i) => (
              <tr key={i} className="group">
                <th scope="row" className="border-b border-line py-4 pe-4 text-start font-medium text-ink group-hover:bg-paper/60">
                  {why.rows[i]}
                </th>
                {cells.map((v, c) => (
                  <td
                    key={c}
                    className={`px-5 py-4 ${c === 0 ? hl(i === last ? 'end' : 'body') : 'border-b border-line group-hover:bg-paper/60'}`}
                  >
                    <SupportMark value={v} label={why.legend[v]} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

// ---------- Định dạng: chọn một định dạng để xem khối bị xóa / được giữ ----------

const splitBlocks = (s: string) => s.split(/,\s*/);

export function FormatTable() {
  const { formats } = useT().seo;
  const [active, setActive] = useState(0);
  const baseId = useId();
  return (
    <Section id={HOME_SECTIONS.formats} title={formats.title} lead={formats.text}>
      <div role="tablist" aria-label={formats.colFormat} className="flex flex-wrap gap-2" dir="ltr">
        {FORMAT_ROWS.map((r, i) => (
          <button
            key={r.format}
            id={`${baseId}-t${i}`}
            role="tab"
            type="button"
            aria-selected={i === active}
            aria-controls={`${baseId}-p${i}`}
            onClick={() => setActive(i)}
            className={`h-9 rounded-full px-4 text-sm font-semibold transition-colors ${
              i === active ? 'bg-ink text-paper' : 'bg-sheet text-ink-2 ring-1 ring-line hover:text-ink'
            }`}
          >
            {r.format}
          </button>
        ))}
      </div>
      {/* Mọi bảng đều có trong HTML (công cụ tìm kiếm đọc được), chỉ bảng đang chọn được hiển thị. */}
      {FORMAT_ROWS.map((r, i) => (
        <div
          key={r.format}
          id={`${baseId}-p${i}`}
          role="tabpanel"
          aria-labelledby={`${baseId}-t${i}`}
          hidden={i !== active}
          className="mt-6 rounded-lg border border-line bg-sheet p-5 sm:p-6"
        >
          <p className="text-sm text-ink-2">
            {formats.colStructure}: <span className="font-semibold text-ink" dir="ltr">{r.structure}</span>
          </p>
          <div className="mt-5 grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="text-sm font-semibold text-rose">{formats.colRemoved}</h3>
              <ul className="mt-2 flex flex-wrap gap-1.5" dir="ltr">
                {splitBlocks(r.removed).map((b) => (
                  <li key={b} className="rounded bg-rose-soft px-2 py-1 font-mono text-xs text-rose line-through decoration-1">
                    {b}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-fix">{formats.colKept}</h3>
              <ul className="mt-2 flex flex-wrap gap-1.5" dir="ltr">
                {splitBlocks(r.kept).map((b) => (
                  <li key={b} className="rounded bg-fix-soft px-2 py-1 font-mono text-xs text-fix">
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </Section>
  );
}

// ---------- Hướng dẫn: một bài nổi bật + danh sách ----------

export function Guides() {
  const { guides } = useT().seo;
  const indexHref = useHref(GUIDES_INDEX);
  const lang = useI18n((s) => s.lang);
  const [first, ...rest] = availableGuides(lang).slice(0, HOME_GUIDE_COUNT);
  return (
    <section id={HOME_SECTIONS.guides} className="scroll-mt-28 border-b border-line bg-sheet py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="font-display text-3xl font-extrabold tracking-[-0.025em] text-ink sm:text-[2.4rem]">{guides.title}</h2>
          <Link to={indexHref} className={buttonClass('outline')}>
            {guides.viewAll}
          </Link>
        </div>
        <div className="mt-10 grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">{first && <GuideFeature slug={first} />}</div>
          <ul className="divide-y divide-line lg:col-span-5 lg:-mt-4">
            {rest.slice(0, 5).map((slug) => (
              <li key={slug}>
                <GuideRow slug={slug} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

// ---------- Tuyên bố miễn trừ: làm được / không làm được / trách nhiệm / bảo hành ----------

/**
 * Hai tầng thông tin:
 * 1. "Làm được" / "Không làm được" — điều người dùng cần biết nhất → một bảng đối chiếu hai cột nổi bật.
 * 2. "Trách nhiệm" / "Không bảo hành" — điều khoản → chữ nhỏ hơn, đánh số, không đóng khung.
 * Thứ tự nhóm trong bản dịch cố định: làm được · không làm được · trách nhiệm · bảo hành.
 */
const SCOPE_STYLES: { icon: IconName; mark: Support; text: string; head: string }[] = [
  { icon: 'check', mark: 'yes', text: 'text-fix', head: 'bg-fix-soft' },
  { icon: 'x', mark: 'no', text: 'text-rose', head: 'bg-rose-soft' },
];
const TERMS_ICONS: IconName[] = ['user', 'info'];

function MarkIcon({ value }: { value: Support }) {
  const { path, tone } = MARKS[value];
  return (
    <span className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full ${tone}`} aria-hidden="true">
      <svg viewBox="0 0 24 24" className="h-3 w-3">
        <path d={path} fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

export function Disclaimer() {
  const { disclaimer } = useT().seo;
  const scope = disclaimer.groups.slice(0, 2);
  const terms = disclaimer.groups.slice(2);
  return (
    <section id={HOME_SECTIONS.disclaimer} className="scroll-mt-28 border-b border-line bg-sheet py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        {/* Tiêu đề: nhãn cảnh báo vàng nối liền với tiêu đề bằng một vạch dọc */}
        <div className="max-w-3xl border-s-4 border-amber ps-5 sm:ps-6">
          <Icon name="alert" className="h-6 w-6 text-amber" />
          <h2 className="mt-1 font-display text-3xl leading-tight font-extrabold tracking-[-0.025em] text-balance text-ink sm:text-[2.4rem]">
            {disclaimer.title}
          </h2>
          <p className="mt-3 leading-relaxed text-ink-2">{disclaimer.text}</p>
        </div>

        {/* Tầng 1: đối chiếu làm được / không làm được */}
        <div className="mt-10 grid overflow-hidden rounded-xl bg-paper ring-1 ring-line md:grid-cols-2">
          {scope.map((g, i) => {
            const s = SCOPE_STYLES[i];
            return (
              <article key={i} className={i > 0 ? 'border-t border-line md:border-t-0 md:border-s' : ''}>
                <h3 className={`flex items-center gap-3 px-6 py-4 font-display text-lg font-bold text-ink sm:px-7 ${s.head}`}>
                  <span className={`grid h-8 w-8 shrink-0 place-items-center rounded-full bg-paper ${s.text}`} aria-hidden="true">
                    <Icon name={s.icon} className="h-5 w-5" />
                  </span>
                  {g.title}
                </h3>
                <ul className="divide-y divide-line px-6 sm:px-7">
                  {g.items.map((item, k) => (
                    <li key={k} className="flex gap-3 py-4 text-[0.95rem] leading-relaxed text-ink">
                      <MarkIcon value={s.mark} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>

        {/* Tầng 2: điều khoản — chữ nhỏ, đánh số */}
        {terms.length > 0 && (
          <div className="mt-12 grid gap-10 border-t-2 border-ink pt-8 md:grid-cols-2 md:gap-12">
            {terms.map((g, i) => (
              <article key={i}>
                <h3 className="flex items-center gap-2.5 font-semibold text-ink">
                  <Icon name={TERMS_ICONS[i % TERMS_ICONS.length]} className="h-5 w-5 shrink-0 text-ink-3" />
                  {g.title}
                </h3>
                <ol className="mt-4 space-y-3">
                  {g.items.map((item, k) => (
                    <li key={k} className="flex gap-3 text-sm leading-relaxed text-ink-2">
                      <span className="w-5 shrink-0 pt-px font-mono text-xs text-ink-3 tabular-nums" dir="ltr" aria-hidden="true">
                        {String(k + 1).padStart(2, '0')}
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ol>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

// ---------- Hỏi đáp ----------

export function Faq() {
  const { faq } = useT().seo;
  const extra = useI18n((s) => s.pages?.home.faq) ?? [];
  return (
    <Section id={HOME_SECTIONS.faq} title={faq.title}>
      <FaqList items={[...faq.items, ...extra]} />
    </Section>
  );
}
