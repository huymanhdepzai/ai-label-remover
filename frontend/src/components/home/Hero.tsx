import { HERO_FILES, HOME_SECTIONS, TRUST_ICONS, type ToolSlug } from '../../content/seo';
import { useI18n, useT } from '../../i18n';
import { HOME, useHref } from '../../router';
import { Dropzone } from '../Dropzone';
import { Link } from '../Link';
import { Icon } from '../ui';
import { LazyWorkspace } from '../inspector/LazyWorkspace';

/** Một thẻ tệp trên "bàn làm việc": hình tờ giấy gấp góc, đuôi tệp in đậm; dẫn tới trang công cụ hợp với định dạng. */
function FileTile({ ext, tool, index }: { ext: string; tool: ToolSlug | null; index: number }) {
  const home = useHref(HOME);
  const toolHref = useHref(tool ? { name: 'tool', slug: tool } : HOME);
  const hasPages = useI18n((s) => s.pages !== null);
  const href = tool && hasPages ? toolHref : `${home}#${HOME_SECTIONS.formats}`;
  // Thẻ lệch nhau một chút như giấy đặt trên bàn — chỉ để trang trí.
  const tilt = ['-rotate-3', 'rotate-2', '-rotate-1', 'rotate-3', '-rotate-2', 'rotate-1'][index % 6];
  return (
    <Link
      to={href}
      dir="ltr"
      className={`group relative block w-[2.6rem] shrink-0 transition-transform hover:-translate-y-1 hover:rotate-0 focus-visible:rotate-0 sm:w-16 ${tilt}`}
    >
      <svg viewBox="0 0 48 60" className="block w-full drop-shadow-sm" aria-hidden="true">
        <path d="M4 2h28l12 12v42a2 2 0 01-2 2H4a2 2 0 01-2-2V4a2 2 0 012-2z" fill="var(--color-sheet)" stroke="var(--color-line)" strokeWidth="1.5" />
        <path d="M32 2v10a2 2 0 002 2h10" fill="var(--color-wash)" stroke="var(--color-line)" strokeWidth="1.5" />
        <rect x="8" y="22" width="22" height="2.5" rx="1.25" fill="var(--color-line)" />
        <rect x="8" y="28" width="16" height="2.5" rx="1.25" fill="var(--color-line)" />
      </svg>
      <span className="absolute inset-x-1 bottom-2 rounded bg-cobalt py-0.5 text-center font-mono text-[0.55rem] font-bold text-on-cobalt sm:text-[0.65rem] transition-colors group-hover:bg-cobalt-deep">
        {ext}
      </span>
    </Link>
  );
}

/**
 * Phần mở đầu trang chủ, theo thứ tự "giá trị trước, hành động ngay sau":
 * H1 đúng ý định tìm kiếm → dòng "không phải lo"; bên phải là thẻ định dạng tệp + liên kết tới danh sách công cụ;
 * một hàng cam kết ngắn, rồi bàn làm việc trải hết bề ngang. Nút chọn ảnh duy nhất nằm trong khay vào của bàn.
 * Khi đã có ảnh, phần giới thiệu thu gọn; bên dưới bàn là báo cáo chi tiết từng ảnh (Workspace).
 */
export function Hero({ hasJobs }: { hasJobs: boolean }) {
  const t = useT();
  const home = useI18n((s) => s.pages?.home);
  const homeHref = useHref(HOME);
  const trustKeys = Object.keys(TRUST_ICONS) as (keyof typeof TRUST_ICONS)[];

  return (
    <section id={HOME_SECTIONS.tool} className="scroll-mt-28 border-b border-line">
      <div className={`mx-auto max-w-6xl px-5 sm:px-8 ${hasJobs ? 'pt-8 pb-10' : 'pt-10 pb-14 sm:pt-14 lg:pt-16'}`}>
        {hasJobs ? (
          <h1 className="font-display text-2xl font-extrabold tracking-[-0.03em] text-balance text-ink sm:text-3xl">{t.hero.kicker}</h1>
        ) : (
          <>
            <div className="grid gap-6 lg:grid-cols-12 lg:items-end lg:gap-12">
              <div className="min-w-0 lg:col-span-8">
                <h1 className="font-display text-[2.1rem] leading-[1.06] font-extrabold tracking-[-0.035em] text-balance text-ink sm:text-5xl lg:text-[3.3rem]">
                  {t.hero.kicker}
                </h1>
                <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-2">{home?.reassure ?? `${t.hero.title} ${t.hero.titleAccent}`}</p>
              </div>

              {/* Thẻ định dạng tệp — cũng là liên kết tới trang công cụ hợp với định dạng đó — và liên kết tới danh sách công cụ */}
              <div className="min-w-0 lg:col-span-4 lg:justify-self-end">
                <nav aria-label={t.header.nav.formats} className="flex flex-wrap gap-2 sm:gap-3 lg:justify-end">
                  {HERO_FILES.map((f, i) => (
                    <FileTile key={f.ext} ext={f.ext} tool={f.tool} index={i} />
                  ))}
                </nav>
                <Link
                  to={`${homeHref}#${home ? HOME_SECTIONS.tools : HOME_SECTIONS.how}`}
                  className="group mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-cobalt hover:text-cobalt-deep lg:flex lg:justify-end"
                >
                  {home?.ctaTools ?? t.header.nav.how}
                  <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5 rtl:-scale-x-100">
                    →
                  </span>
                </Link>
              </div>
            </div>

            {/* Cam kết ngắn: một hàng ngang ngay trên máy làm sạch */}
            <ul className="mt-7 flex flex-wrap gap-x-6 gap-y-2.5">
              {trustKeys.map((key) => (
                <li key={key} className="flex items-center gap-2 text-sm font-medium text-ink">
                  <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-cobalt-soft text-cobalt">
                    <Icon name={TRUST_ICONS[key]} className="h-3.5 w-3.5" />
                  </span>
                  {t.hero.trust[key]}
                </li>
              ))}
            </ul>
          </>
        )}

        {/* Bàn làm việc luôn ở cùng một vị trí trong cây, nên không bị dựng lại khi ảnh đầu tiên được thả vào. */}
        <div className={hasJobs ? 'mt-6' : 'mt-10'}>
          <Dropzone />
        </div>

        <div className="mt-8 empty:hidden">
          <LazyWorkspace />
        </div>
      </div>
    </section>
  );
}
