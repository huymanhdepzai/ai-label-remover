import { useEffect, useState } from 'react';
import { useT } from '../../i18n';
import type { Job, JobStatus } from '../../types';
import { formatBytes } from '../../utils/format';
import { Icon, Spinner, TONE_TEXT, type Tone } from '../ui';

export const STATUS_TONE: Record<JobStatus, Tone> = {
  analyzing: 'info',
  pending: 'brand',
  processing: 'info',
  completed: 'success',
  failed: 'danger',
};

/** Ảnh xem trước — chỉ với ảnh trình duyệt giải mã được và không quá nặng, để tránh tốn RAM. */
const THUMB_FORMATS = new Set(['jpeg', 'png', 'webp', 'gif', 'avif']);
const THUMB_MAX_PIXELS = 16_000_000;

export function Thumbnail({ job, className = 'h-12 w-16' }: { job: Job; className?: string }) {
  const canPreview = THUMB_FORMATS.has(job.format) && job.width * job.height <= THUMB_MAX_PIXELS;
  const [url, setUrl] = useState<string | null>(null);

  useEffect(() => {
    if (!canPreview) return;
    const u = URL.createObjectURL(job.file);
    setUrl(u);
    return () => URL.revokeObjectURL(u);
  }, [job.file, canPreview]);

  return (
    <div className={`grid shrink-0 place-items-center overflow-hidden rounded-[3px] bg-film ${className}`}>
      {url ? (
        <img src={url} alt="" loading="lazy" decoding="async" className="h-full w-full object-cover" />
      ) : (
        <span className="text-[10px] font-bold text-white/70">{job.format.toUpperCase()}</span>
      )}
    </div>
  );
}

/** Dấu trạng thái đè lên góc ảnh thu nhỏ: đang chạy thì phủ mờ + vòng quay, xong thì dấu tích, lỗi thì dấu nhân. */
function StatusOverlay({ job }: { job: Job }) {
  if (job.status === 'analyzing' || job.status === 'processing') {
    return (
      <span className="absolute inset-0 grid place-items-center rounded-[3px] bg-film/55" aria-hidden="true">
        <Spinner className="h-4 w-4 text-white" />
      </span>
    );
  }
  if (job.status !== 'completed' && job.status !== 'failed') return null;
  const ok = job.status === 'completed';
  return (
    <span
      className={`absolute -end-1.5 -bottom-1.5 grid h-5 w-5 place-items-center rounded-full ring-2 ring-paper ${ok ? 'bg-fix' : 'bg-rose'} text-sheet`}
      aria-hidden="true"
    >
      <Icon name={ok ? 'tick' : 'x'} className="h-3 w-3 [&_path]:stroke-[3]" />
    </span>
  );
}

/** Hàng đợi: danh sách ảnh dạng dải phim dọc; bấm một ảnh để xem báo cáo ở cột phải. */
export function Queue({ jobs, selectedId, onSelect }: { jobs: Job[]; selectedId: string; onSelect(id: string): void }) {
  const t = useT();
  return (
    <ul className="max-h-[28rem] space-y-1 overflow-y-auto border-b border-line bg-paper/60 p-2 lg:max-h-[46rem] lg:border-e lg:border-b-0">
      {jobs.map((job) => {
        const active = job.id === selectedId;
        const removed = job.removed?.reduce((n, r) => n + r.bytes, 0) ?? 0;
        return (
          <li key={job.id}>
            <button
              type="button"
              onClick={() => onSelect(job.id)}
              aria-current={active ? 'true' : undefined}
              className={`relative flex w-full items-center gap-3 rounded-lg p-2 text-start transition-colors ${
                active ? 'bg-sheet shadow-sm ring-1 ring-line' : 'hover:bg-sheet/70'
              }`}
            >
              <span className="relative">
                <Thumbnail job={job} />
                <StatusOverlay job={job} />
              </span>
              <span className="min-w-0 flex-1">
                <bdi className={`block truncate text-sm text-ink ${active ? 'font-semibold' : 'font-medium'}`} title={job.name}>
                  {job.name}
                </bdi>
                <span className="mt-0.5 flex items-center gap-1.5 text-xs">
                  <span className={`truncate font-medium ${TONE_TEXT[STATUS_TONE[job.status]]}`}>{t.status[job.status]}</span>
                  <span className="text-ink-3" aria-hidden="true">·</span>
                  <span className="text-ink-3" dir="ltr">
                    {formatBytes(job.outputSize ?? job.size)}
                  </span>
                  {removed > 0 && (
                    <span className="font-semibold text-fix" dir="ltr">
                      −{formatBytes(removed)}
                    </span>
                  )}
                </span>
              </span>
            </button>
          </li>
        );
      })}
    </ul>
  );
}
