import { useEffect, useState } from 'react';
import { useT } from '../../i18n';
import { useTheme, type ThemeMode } from '../../theme';
import { Icon, type IconName } from '../ui';

const MODES: { mode: ThemeMode; icon: IconName }[] = [
  { mode: 'light', icon: 'sun' },
  { mode: 'dark', icon: 'moon' },
  { mode: 'system', icon: 'desktop' },
];

/** Công tắc 3 nấc Sáng / Tối / Theo hệ thống, luôn hiển thị (không cần mở menu). */
export function ThemeSwitcher() {
  const t = useT();
  const mode = useTheme((s) => s.mode);
  const setMode = useTheme((s) => s.setMode);
  // HTML prerender không biết lựa chọn đã lưu → chỉ đánh dấu nấc đang chọn sau khi mount để hydrate khớp.
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const current = mounted ? mode : 'system';

  return (
    <div role="radiogroup" aria-label={t.header.theme.label} className="inline-flex rounded-full bg-wash p-0.5">
      {MODES.map(({ mode: m, icon }) => {
        const active = m === current;
        return (
          <button
            key={m}
            type="button"
            role="radio"
            aria-checked={active}
            aria-label={t.header.theme[m]}
            title={t.header.theme[m]}
            onClick={() => setMode(m)}
            className={`grid h-7 w-7 place-items-center rounded-full transition-colors ${
              active ? 'bg-sheet text-cobalt shadow-[0_1px_0_var(--color-line)]' : 'text-ink-3 hover:text-ink'
            }`}
          >
            <Icon name={icon} className="h-4 w-4" />
          </button>
        );
      })}
    </div>
  );
}
