import { useCallback } from 'react';
import { ACCEPTED_TYPES, MAX_FILE_BYTES, MAX_FILES_PER_SESSION } from '../config/limits';
import { fmt, useT } from '../i18n';
import { useJobStore } from '../store/useJobStore';
import { msg } from '../types';
import { formatBytes } from '../utils/format';
import { buttonClass, Icon, Spinner } from './ui';
import { useFileDrop } from './useFileDrop';
import { Workbench } from './bench/Workbench';

/** Ô chọn tệp của khung lớn (bàn làm việc). */
export const DROPZONE_INPUT_ID = 'dropzone-input';

/**
 * Khung chọn/thả ảnh. Bản gọn (`compact`): một hàng có nút chọn ảnh. Bản đầy đủ: bàn làm việc xử lý ảnh (Workbench).
 */
export function Dropzone({ compact = false }: { compact?: boolean }) {
  const t = useT();
  const addFiles = useJobStore((s) => s.addFiles);
  const addRejections = useJobStore((s) => s.addRejections);
  const validating = useJobStore((s) => s.validating);
  const empty = useJobStore((s) => s.jobs.length === 0);

  const onDrop = useCallback(
    (accepted: File[], rejected: File[]) => {
      if (rejected.length) addRejections(rejected.map((f) => ({ name: f.name, reason: msg('rejType') })));
      if (accepted.length) void addFiles(accepted);
    },
    [addFiles, addRejections],
  );

  // Bấm vào bất kỳ đâu trong khung đều mở hộp chọn ảnh. Phím Tab/Enter dùng nút bên trong để không có hai
  // điểm dừng focus lồng nhau; click vào nút lan lên khung nên chỉ mở hộp chọn một lần.
  const { rootProps, inputProps, isDragActive, open } = useFileDrop({ onDrop, accept: ACCEPTED_TYPES });

  const limits = fmt(t.dropzone.limits, { size: formatBytes(MAX_FILE_BYTES), count: MAX_FILES_PER_SESSION });

  const frame = `group relative cursor-pointer rounded-2xl border-2 border-dashed transition-all duration-200 ${
    isDragActive
      ? 'border-cobalt bg-cobalt-soft shadow-[0_0_0_6px_color-mix(in_oklab,var(--color-cobalt)_14%,transparent)]'
      : 'border-line bg-sheet hover:border-cobalt/60 hover:bg-cobalt-soft/40 hover:shadow-lg hover:shadow-cobalt/5'
  }`;

  const iconBubble = (size: string, glyph: string) => (
    <span
      className={`relative grid shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-cobalt to-cobalt-deep text-on-cobalt shadow-lg shadow-cobalt/25 transition-transform duration-200 ${size} ${
        isDragActive ? '-translate-y-1 scale-105' : 'group-hover:-translate-y-0.5'
      }`}
    >
      <Icon name="upload" className={glyph} />
    </span>
  );

  const checking = validating > 0 && (
    <p className="inline-flex items-center gap-2 text-sm font-medium text-cobalt" role="status">
      <Spinner /> {fmt(t.dropzone.checking, { count: validating })}
    </p>
  );

  if (compact) {
    return (
      <div {...rootProps} className={`${frame} flex flex-wrap items-center gap-x-4 gap-y-3 px-4 py-3.5 sm:px-5`}>
        <input {...inputProps} aria-label={t.dropzone.inputLabel} />
        {iconBubble('h-11 w-11', 'h-5 w-5')}
        <div className="min-w-0 flex-1">
          <p className="font-display text-base font-bold tracking-tight text-ink sm:text-lg">
            {isDragActive ? t.dropzone.release : t.dropzone.drop}
          </p>
          <p className="truncate text-xs text-ink-3">{limits}</p>
        </div>
        <button type="button" className={buttonClass('primary')}>
          <Icon name="photo" className="h-4 w-4" /> {t.dropzone.choose}
        </button>
        {checking && <div className="w-full">{checking}</div>}
      </div>
    );
  }

  // Bàn làm việc: bàn trống → bấm bất kỳ đâu để chọn ảnh; khi đã có ảnh, các khu trên bàn chặn cú bấm
  // (để bấm vào ảnh / nút không mở hộp chọn tệp) và nút "Chọn ảnh" trong khay vào mở hộp chọn.
  return (
    <div {...rootProps} className={`relative ${empty ? 'cursor-pointer' : ''}`}>
      <input {...inputProps} id={DROPZONE_INPUT_ID} aria-label={t.dropzone.inputLabel} />
      <Workbench dragActive={isDragActive} onPick={open} />
      <p className="mt-2.5 inline-flex w-full items-center justify-center gap-1.5 text-xs text-ink-3" dir="ltr">
        <Icon name="shield" className="h-3.5 w-3.5 text-cobalt" />
        {t.hero.eyebrow}
      </p>
    </div>
  );
}
