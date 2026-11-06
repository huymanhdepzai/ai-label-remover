import { useId, useState } from 'react';
import { useI18n, useT } from '../../i18n';
import { findLanguage, LANGUAGES } from '../../i18n/languages';
import { switchLanguage } from '../../router';
import type { LangCode } from '../../i18n/languages';
import { Icon, Spinner } from '../ui';
import { FLAGS } from './flags';
import { usePopover } from './usePopover';

/**
 * Cờ 4:3, viền mảnh để cờ nền trắng (Nhật, Phần Lan…) không lẫn vào nền.
 * `label`: alt mô tả (tên ngôn ngữ) khi cờ đứng một mình — vd. nút trên header ở màn hình hẹp chỉ hiện cờ.
 * Bỏ trống khi ngay cạnh đã có tên ngôn ngữ dạng chữ → alt rỗng để trình đọc màn hình không đọc lặp.
 */
function Flag({ code, label, className = '' }: { code: LangCode; label?: string; className?: string }) {
  return (
    <img
      src={FLAGS[code]}
      alt={label ?? ''}
      width={20}
      height={15}
      loading="lazy"
      decoding="async"
      className={`h-[15px] w-5 shrink-0 rounded-[3px] object-cover ring-1 ring-ink/15 ${className}`}
    />
  );
}

/** Bộ chọn ngôn ngữ: nút trên header mở bảng lưới 32 ngôn ngữ (tên viết bằng chính ngôn ngữ đó). */
export function LanguageSwitcher({ placement = 'down' }: { placement?: 'up' | 'down' }) {
  const t = useT();
  const lang = useI18n((s) => s.lang);
  const { open, setOpen, ref: rootRef } = usePopover<HTMLDivElement>();
  const [loading, setLoading] = useState<string | null>(null);
  const panelId = useId();

  const choose = async (code: (typeof LANGUAGES)[number]['code']) => {
    setLoading(code);
    try {
      await switchLanguage(code);
    } finally {
      setLoading(null);
      setOpen(false);
    }
  };

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={t.header.language}
        className="inline-flex h-8 items-center gap-2 rounded-full bg-wash ps-2 pe-2.5 text-sm font-medium text-ink hover:bg-cobalt-soft"
      >
        <Flag code={lang} label={findLanguage(lang)?.name ?? lang} />
        {/* Màn hình rất hẹp: chỉ hiện cờ để thanh trên cùng không tràn ngang (nút vẫn có aria-label "Ngôn ngữ"). */}
        <span className="hidden max-w-28 truncate min-[420px]:inline">{findLanguage(lang)?.name}</span>
        <Icon name="chevron" className={`h-3.5 w-3.5 text-ink-3 transition-transform ${placement === 'up' ? (open ? '' : 'rotate-180') : open ? 'rotate-180' : ''}`} />
      </button>

      {open && (
        <div
          id={panelId}
          className={`absolute z-50 w-[min(34rem,calc(100vw-2rem))] rounded-lg border border-line bg-sheet p-2 shadow-[0_18px_40px_-12px_rgb(16_23_46/0.35)] ${
            placement === 'up' ? 'start-0 bottom-full mb-2' : 'end-0 top-full mt-2'
          }`}
        >
          <p className="px-2 pt-1 pb-2 text-sm font-semibold text-ink">{t.header.language}</p>
          <ul className="grid max-h-[70vh] grid-cols-2 gap-0.5 overflow-y-auto sm:grid-cols-3">
            {LANGUAGES.map((l) => {
              const active = l.code === lang;
              return (
                <li key={l.code}>
                  <button
                    type="button"
                    lang={l.code}
                    onClick={() => void choose(l.code)}
                    aria-current={active ? 'true' : undefined}
                    className={`flex w-full items-center justify-between gap-2 rounded-md px-2.5 py-2 text-start text-sm ${
                      active ? 'bg-cobalt-soft font-semibold text-cobalt' : 'text-ink-2 hover:bg-wash hover:text-ink'
                    }`}
                  >
                    {/* Chỉ phần chữ mang hướng RTL; bố cục nút luôn theo hướng của trang để mọi ô thẳng hàng. */}
                    <span className="flex min-w-0 items-center gap-2.5">
                      <Flag code={l.code} />
                      <bdi className="truncate" dir={'rtl' in l ? 'rtl' : 'ltr'}>
                        {l.name}
                      </bdi>
                    </span>
                    {loading === l.code ? (
                      <Spinner className="h-3.5 w-3.5" />
                    ) : (
                      active && <Icon name="tick" className="h-4 w-4 shrink-0" />
                    )}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
