import { useEffect, useId, useState, type ReactNode } from 'react';
import { MARK_SVG_BODY } from '../../brand/mark';
import { useGuideContent } from '../../content/guideContent';
import { plainText } from '../../content/richText';
import { availableGuides, CHECK_GUIDES, hasPages, isGuideAvailable, HOME_SECTIONS, INFO_SLUGS, NAV, SITE, TOOL_SLUGS, type GuideSlug } from '../../content/seo';
import { fmt, rememberLanguage, useI18n, useT } from '../../i18n';
import { DEFAULT_LANG, LANGUAGES } from '../../i18n/languages';
import { GUIDES_INDEX, HOME, localizeRoute, pathFor, useHref, useRouter } from '../../router';
import { Link } from '../Link';
import { TOOL_ICONS } from '../seo/SeoSections';
import { buttonClass, Icon, type IconName } from '../ui';
import { LanguageSwitcher } from './LanguageSwitcher';
import { ThemeSwitcher } from './ThemeSwitcher';
import { usePopover } from './usePopover';

/** Dấu thương hiệu: thẻ nhãn "AI" đang được gỡ ra (vẽ trong src/brand/mark.ts — dùng chung với favicon và ảnh OG). */
export function Mark({ className = 'h-8 w-8' }: { className?: string }) {
  return <svg viewBox="0 0 32 32" className={className} aria-hidden="true" dangerouslySetInnerHTML={{ __html: MARK_SVG_BODY }} />;
}

/**
 * Logo: dấu thương hiệu có quầng sáng cobalt (nghiêng nhẹ khi rê chuột) + tên web có vệt sáng lướt qua chữ.
 * Hiệu ứng nằm trong src/index.css (.logo-mark, .logo-name).
 */
export function Logo({ size = 'md' }: { size?: 'md' | 'lg' }) {
  const home = useHref(HOME);
  return (
    <Link to={home} className="logo flex shrink-0 items-center gap-2.5" aria-label={SITE.name} dir="ltr">
      <span className="logo-mark grid place-items-center">
        <Mark className={size === 'lg' ? 'h-11 w-11' : 'h-10 w-10 lg:h-12 lg:w-12'} />
      </span>
      <span className={`logo-name font-display leading-[1.05] font-extrabold tracking-[-0.025em] ${size === 'lg' ? 'text-2xl' : 'text-[1.2rem] lg:text-[1.4rem]'}`}>
        AI Label Remover
      </span>
    </Link>
  );
}

/** Đích của mục menu: "Hướng dẫn" mở trang tổng hợp, các mục khác cuộn tới phần tương ứng trên trang chủ. */
function useNavHref() {
  const home = useHref(HOME);
  const guidesIndex = useHref(GUIDES_INDEX);
  return (section: keyof typeof HOME_SECTIONS) => (section === 'guides' ? guidesIndex : `${home}#${HOME_SECTIONS[section]}`);
}

/** Mục đang được xem trên trang chủ (để tô đậm trong thanh điều hướng). */
function useActiveSection(): string | null {
  const route = useRouter((s) => s.route);
  const [active, setActive] = useState<string | null>(null);
  useEffect(() => {
    if (route.name !== 'home') {
      setActive(
        route.name === 'guides' || route.name === 'guide' ? HOME_SECTIONS.guides : route.name === 'tool' ? HOME_SECTIONS.tool : null,
      );
      return;
    }
    const els = Object.values(HOME_SECTIONS)
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: '-30% 0px -60% 0px' },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [route]);
  return active;
}

/** Menu phẳng nằm ngang (các mục trang chủ + bài viết). */
function NavLinks() {
  const t = useT();
  const navHref = useNavHref();
  const active = useActiveSection();
  return (
    <ul className="flex gap-1">
      {NAV.map((n) => {
        const on = active === HOME_SECTIONS[n.section];
        return (
          <li key={n.section}>
            <Link
              to={navHref(n.section)}
              aria-current={on ? 'location' : undefined}
              className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm whitespace-nowrap ${on ? 'bg-ink font-semibold text-paper' : 'text-ink-2 hover:text-ink'}`}
            >
              <Icon name={navIcon(n.section)} className={`h-3.5 w-3.5 ${on ? '' : 'text-cobalt'}`} />
              {t.header.nav[n.label]}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

type NavItem = { to: string; label: string; on: boolean; icon: IconName; /** Mô tả ngắn (2 dòng) trong bảng menu. */ desc?: string };
/** Nhóm menu: `icon` đứng trước tên trên nút mở bảng. */
type NavGroup = { title: string; icon: IconName; items: NavItem[] };

/** Icon của các mục trang chủ trong menu. */
const NAV_ICONS: Partial<Record<keyof typeof HOME_SECTIONS, IconName>> = {
  tool: 'bolt',
  how: 'retry',
  formats: 'photo',
  guides: 'document',
  faq: 'info',
};
const navIcon = (section: keyof typeof HOME_SECTIONS): IconName => NAV_ICONS[section] ?? 'document';

/**
 * Menu nhóm theo việc người dùng cần làm (ngôn ngữ có trang công cụ): Xóa metadata (các trang công cụ) ·
 * Xem & kiểm tra (bài trình xem metadata, kiểm tra ảnh AI) · Tìm hiểu (các mục trang chủ, bài viết).
 * Ngôn ngữ chưa có trang công cụ → null (dùng menu phẳng).
 */
function useNavGroups(): NavGroup[] | null {
  const t = useT();
  const lang = useI18n((s) => s.lang);
  const pages = useI18n((s) => s.pages);
  const route = useRouter((s) => s.route);
  const navHref = useNavHref();
  const homeHref = useHref(HOME);
  const active = useActiveSection();
  const viewer = useGuideContent(CHECK_GUIDES.viewer);
  const aiCheck = useGuideContent(CHECK_GUIDES.aiCheck);
  if (!pages) return null;
  const { nav } = pages.home;
  const seo = t.seo;
  /** Mô tả của các mục trang chủ: đoạn giới thiệu của mục đó. */
  const sectionDesc: Partial<Record<keyof typeof HOME_SECTIONS, string>> = {
    tool: pages.home.reassure,
    how: seo.how.text,
    formats: seo.formats.text,
    guides: seo.guides.title,
    faq: seo.faq.title,
  };
  const isGuide = (slug: GuideSlug) => route.name === 'guide' && route.slug === slug;
  return [
    {
      title: nav.remove,
      icon: 'sparkles',
      items: [
        { to: navHref('tool'), label: t.header.nav.tool, on: route.name === 'home' && active === HOME_SECTIONS.tool, icon: navIcon('tool'), desc: sectionDesc.tool },
        ...TOOL_SLUGS.map((slug) => ({
          to: pathFor(lang, { name: 'tool', slug }),
          label: pages.tools[slug].navLabel,
          on: route.name === 'tool' && route.slug === slug,
          icon: TOOL_ICONS[slug],
          desc: pages.tools[slug].description,
        })),
      ],
    },
    // Nhóm "Xem & kiểm tra" trỏ tới hai bài mở rộng — chỉ hiện ở ngôn ngữ đã có các bài đó.
    ...(isGuideAvailable(CHECK_GUIDES.viewer, lang) && isGuideAvailable(CHECK_GUIDES.aiCheck, lang)
      ? [
          {
            title: nav.check,
            icon: 'search' as const,
            items: [
              { to: pathFor(lang, { name: 'guide', slug: CHECK_GUIDES.viewer }), label: nav.viewer, on: isGuide(CHECK_GUIDES.viewer), icon: 'search' as const, desc: viewer?.summary[0] },
              { to: pathFor(lang, { name: 'guide', slug: CHECK_GUIDES.aiCheck }), label: nav.aiCheck, on: isGuide(CHECK_GUIDES.aiCheck), icon: 'sparkles' as const, desc: aiCheck?.summary[0] },
            ],
          },
        ]
      : []),
    {
      title: nav.learn,
      icon: 'document',
      items: [
        { to: `${homeHref}#${HOME_SECTIONS.learn}`, label: nav.whatIs, on: active === HOME_SECTIONS.learn, icon: 'layers', desc: pages.home.learn?.what.paragraphs[0] },
        ...NAV.filter((n) => n.section !== 'tool').map((n) => ({
          to: navHref(n.section),
          label: t.header.nav[n.label],
          on: n.section === 'guides' ? route.name === 'guides' : route.name === 'home' && active === HOME_SECTIONS[n.section],
          icon: navIcon(n.section),
          desc: sectionDesc[n.section],
        })),
      ],
    },
  ];
}

/**
 * Một nhóm của menu ngang (màn hình rộng): nút tiêu đề mở bảng trải ngang hết thanh header (mega menu).
 * Các mục xếp thành lưới thẻ: icon lớn, tên và mô tả ngắn. Bảng định vị theo thanh header (`DesktopBar` là
 * `relative`), nên thẻ <li> không `relative`; bấm ra ngoài hoặc Esc thì đóng (usePopover).
 */
function GroupMenu({ group }: { group: NavGroup }) {
  const { open, setOpen, ref } = usePopover<HTMLLIElement>();
  const panelId = useId();
  const on = group.items.some((item) => item.on);
  // Ít mục (vd. "Xem & kiểm tra") thì thẻ rộng hơn để bảng không trống trải.
  const cols = group.items.length <= 2 ? 'grid-cols-2' : group.items.length <= 6 ? 'grid-cols-3' : 'grid-cols-4';
  return (
    <li ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={panelId}
        className={`inline-flex h-11 items-center gap-2 rounded-full px-4 text-base whitespace-nowrap transition-colors ${
          on ? 'font-semibold text-ink' : 'text-ink-2 hover:bg-wash hover:text-ink'
        } ${open ? 'bg-wash text-ink' : ''}`}
      >
        <Icon name={group.icon} className={`h-[1.15rem] w-[1.15rem] transition-colors ${on || open ? 'text-cobalt' : 'text-ink-3'}`} />
        {group.title}
      </button>
      {open && (
        <div
          id={panelId}
          className="menu-pop absolute inset-x-6 top-full z-50 mt-1 rounded-2xl border border-line bg-sheet p-3 shadow-[0_28px_60px_-20px_rgb(16_23_46/0.45)]"
        >
          <ul className={`grid gap-2 ${cols}`}>
            {group.items.map((item, i) => (
              <li key={item.to} className="menu-item" style={{ animationDelay: `${i * 25}ms` }}>
                <Link
                  to={item.to}
                  onClick={() => setOpen(false)}
                  aria-current={item.on ? 'page' : undefined}
                  className={`group/item flex h-full items-start gap-3 rounded-xl border p-3 transition-colors ${
                    item.on ? 'border-cobalt/40 bg-cobalt-soft' : 'border-transparent hover:border-line hover:bg-wash'
                  }`}
                >
                  <span
                    className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl transition-colors ${
                      item.on ? 'bg-cobalt text-on-cobalt' : 'bg-cobalt-soft text-cobalt group-hover/item:bg-cobalt group-hover/item:text-on-cobalt'
                    }`}
                  >
                    <Icon name={item.icon} className="h-5 w-5" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className={`flex items-center gap-1 text-[0.95rem] leading-snug font-semibold ${item.on ? 'text-cobalt' : 'text-ink'}`}>
                      {item.label}
                      <span aria-hidden="true" className="text-ink-3 opacity-0 transition-opacity group-hover/item:opacity-100 rtl:-scale-x-100">
                        →
                      </span>
                    </span>
                    {item.desc && <span className="mt-0.5 line-clamp-2 text-[0.8rem] leading-snug text-ink-3">{plainText(item.desc)}</span>}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </li>
  );
}

/** Thanh ngang trên cùng (màn hình rộng): logo · điều hướng · giao diện + ngôn ngữ trên cùng một hàng. */
function DesktopBar() {
  const groups = useNavGroups();
  return (
    <div className="relative mx-auto hidden h-20 max-w-7xl items-center gap-10 px-8 lg:flex">
      <Logo />
      <nav aria-label="Main" className="min-w-0 flex-1">
        {groups ? (
          <ul className="flex items-center gap-1">
            {groups.map((g) => (
              <GroupMenu key={g.title} group={g} />
            ))}
          </ul>
        ) : (
          <NavLinks />
        )}
      </nav>
      <div className="flex shrink-0 items-center gap-2">
        <ThemeSwitcher />
        <LanguageSwitcher />
      </div>
    </div>
  );
}

/**
 * Header dính trên cùng. Màn hình rộng: một hàng ngang (logo · menu · công tắc).
 * Điện thoại / máy tính bảng: logo + công tắc, điều hướng cuộn ngang bên dưới.
 */
export function TopBar() {
  return (
    <header className="sticky top-0 z-30 border-b border-line bg-sheet/95 pt-[env(safe-area-inset-top,0px)] backdrop-blur">
      <DesktopBar />
      <div className="lg:hidden">
        <div className="flex h-16 items-center justify-between gap-3 px-4">
          <Logo />
          <div className="flex items-center gap-2">
            <ThemeSwitcher />
            <LanguageSwitcher />
          </div>
        </div>
        <nav aria-label="Main" className="overflow-x-auto px-3 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <NavLinks />
        </nav>
      </div>
    </header>
  );
}

// ---------- Chân trang: tối giản, theo màu giao diện Sáng/Tối ----------

const FOOT_LINK = 'text-sm leading-snug text-ink-2 transition-colors hover:text-cobalt';
const FOOT_HEADING = 'text-xs font-semibold uppercase tracking-wider text-ink-3';
const FOOTER_GUIDE_COUNT = 4;

function FooterGuideLink({ slug }: { slug: GuideSlug }) {
  const href = useHref({ name: 'guide', slug });
  const guide = useGuideContent(slug);
  if (!guide) return null;
  return (
    <Link to={href} className={`${FOOT_LINK} line-clamp-2`} title={guide.title}>
      {guide.title}
    </Link>
  );
}

/** Một cột liên kết: tiêu đề nhỏ viết hoa + danh sách dọc. */
function FooterColumn({ title, children }: { title: string; children: ReactNode }) {
  return (
    <nav aria-label={title} className="min-w-0">
      <p className={FOOT_HEADING}>{title}</p>
      <ul className="mt-4 space-y-3">{children}</ul>
    </nav>
  );
}

/**
 * Dòng ngôn ngữ cuối trang: liên kết tới cùng trang ở mọi ngôn ngữ — tiện cho người dùng và là liên kết nội bộ
 * giữa các bản ngôn ngữ (công cụ tìm kiếm đọc được). Chữ nhỏ, xếp liền một khối để không lấn phần nội dung chính.
 */
function FooterLanguages() {
  const t = useT();
  const current = useI18n((s) => s.lang);
  const route = useRouter((s) => s.route);
  return (
    <nav aria-label={t.header.language} className="flex items-start gap-2.5">
      <Icon name="globe" className="mt-0.5 h-4 w-4 shrink-0 text-ink-3" />
      <ul className="flex flex-wrap gap-x-3.5 gap-y-1.5">
        {LANGUAGES.map((l) => (
          <li key={l.code}>
            <Link
              to={pathFor(l.code, localizeRoute(l.code, route))}
              lang={l.code}
              hrefLang={l.code}
              onClick={() => rememberLanguage(l.code)}
              aria-current={l.code === current ? 'true' : undefined}
              className={`text-xs transition-colors ${l.code === current ? 'font-semibold text-cobalt' : 'text-ink-3 hover:text-ink'}`}
            >
              {l.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

/**
 * Chân trang ba tầng:
 * 1. Khối thương hiệu (logo, mô tả, nút dùng thử) + các cột liên kết: Công cụ · AI Label Remover (các mục trang) · Bài viết.
 *    Ngôn ngữ chưa có trang công cụ thì không hiện cột Công cụ, lưới tự co còn ba cột.
 * 2. Thanh bản quyền + Giới thiệu / Quyền riêng tư.
 * 3. Dòng chọn ngôn ngữ.
 */
export function SiteFooter() {
  const t = useT();
  const home = useHref(HOME);
  const guidesIndex = useHref(GUIDES_INDEX);
  const navHref = useNavHref();
  const lang = useI18n((s) => s.lang);
  const pages = useI18n((s) => s.pages);
  const infoLang = hasPages(lang) ? lang : DEFAULT_LANG;

  return (
    <footer className="defer-render-self border-t border-line bg-sheet pb-[env(safe-area-inset-bottom,0px)]">
      <div className="mx-auto max-w-6xl px-5 pt-14 pb-8 sm:px-8 sm:pt-16">
        <div className={`grid gap-x-8 gap-y-10 sm:grid-cols-2 ${pages ? 'lg:grid-cols-[minmax(0,1.5fr)_repeat(3,minmax(0,1fr))]' : 'lg:grid-cols-[minmax(0,1.5fr)_repeat(2,minmax(0,1fr))]'} lg:gap-x-10`}>
          {/* Thương hiệu */}
          <div className="sm:col-span-2 lg:col-span-1 lg:pe-6">
            <Logo />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-2">{t.seo.footer.about}</p>
            <Link to={`${home}#${HOME_SECTIONS.tool}`} className={`${buttonClass('primary', 'sm')} mt-6 h-9 px-4`}>
              <Icon name="sparkles" className="h-4 w-4" />
              <span className="truncate">{t.header.nav.tool}</span>
            </Link>
          </div>

          {pages && (
            <FooterColumn title={t.header.nav.tool}>
              {TOOL_SLUGS.map((slug) => (
                <li key={slug}>
                  <Link to={pathFor(lang, { name: 'tool', slug })} className={FOOT_LINK}>
                    {pages.tools[slug].navLabel}
                  </Link>
                </li>
              ))}
            </FooterColumn>
          )}

          <FooterColumn title={SITE.name}>
            {NAV.filter((n) => n.section !== 'tool' && n.section !== 'guides').map((n) => (
              <li key={n.section}>
                <Link to={navHref(n.section)} className={FOOT_LINK}>
                  {t.header.nav[n.label]}
                </Link>
              </li>
            ))}
            <li>
              <Link to={`${home}#${HOME_SECTIONS.disclaimer}`} className={FOOT_LINK}>
                {t.seo.disclaimer.title}
              </Link>
            </li>
          </FooterColumn>

          <FooterColumn title={t.seo.footer.guides}>
            {availableGuides(lang)
              .slice(0, FOOTER_GUIDE_COUNT)
              .map((slug) => (
                <li key={slug}>
                  <FooterGuideLink slug={slug} />
                </li>
              ))}
            <li>
              <Link to={guidesIndex} className="group inline-flex items-center gap-1 text-sm font-semibold text-cobalt">
                {t.seo.footer.more}
                <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5 rtl:-scale-x-100">
                  →
                </span>
              </Link>
            </li>
          </FooterColumn>
        </div>

        {/* Bản quyền + trang thông tin */}
        <div className="mt-12 flex flex-col gap-3 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-ink-3">{fmt(t.seo.footer.copyright, { year: new Date().getFullYear(), name: SITE.name })}</p>
          {/* Ngôn ngữ chưa có trang thông tin → liên kết tới bản tiếng Anh (hrefLang báo rõ cho trình duyệt / bot). */}
          <ul className="flex flex-wrap items-center gap-x-5 gap-y-1 text-xs">
            {INFO_SLUGS.map((slug) => (
              <li key={slug}>
                <Link
                  to={pathFor(infoLang, { name: 'info', slug })}
                  hrefLang={infoLang === lang ? undefined : infoLang}
                  className="font-medium text-ink-2 underline-offset-4 hover:text-cobalt hover:underline"
                >
                  {slug === 'about' ? t.seo.footer.aboutLink : t.seo.footer.privacyLink}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-5 rounded-lg bg-paper/70 px-4 py-3">
          <FooterLanguages />
        </div>
      </div>
    </footer>
  );
}
