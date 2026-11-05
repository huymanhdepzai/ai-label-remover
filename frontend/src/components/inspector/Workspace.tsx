import { useEffect, useState } from 'react';
import { useShallow } from 'zustand/react/shallow';
import { fmt, useT } from '../../i18n';
import { useJobStore } from '../../store/useJobStore';
import { formatBytes } from '../../utils/format';
import { buttonClass, Dot, Icon, Spinner, TONE_TEXT, type Tone } from '../ui';
import { Detail } from './Detail';
import { Queue } from './Queue';
import { RejectionList } from './RejectionList';

/**
 * Bàn soi: thanh thao tác (đếm trạng thái + các nút hàng loạt), bên dưới chia hai cột —
 * hàng đợi ảnh dạng dải phim dọc (trái) và báo cáo chi tiết của ảnh đang chọn (phải).
 * Mặc định thu gọn sau nút "Quá trình chỉnh sửa" để đầu trang chỉ còn máy làm sạch; tệp bị từ chối luôn hiện.
 */
export function Workspace() {
  const t = useT();
  const jobs = useJobStore((s) => s.jobs);
  const zipProgress = useJobStore((s) => s.zipProgress);
  const actions = useJobStore(useShallow((s) => ({ stripAll: s.stripAll, downloadZip: s.downloadZip, clearAll: s.clearAll })));
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [open, setOpen] = useState(false);

  // Luôn có một ảnh được chọn: mặc định ảnh đầu tiên, chọn lại khi ảnh đang xem bị xóa.
  useEffect(() => {
    if (jobs.length === 0) setSelectedId(null);
    else if (!selectedId || !jobs.some((j) => j.id === selectedId)) setSelectedId(jobs[0].id);
  }, [jobs, selectedId]);

  if (jobs.length === 0) return <RejectionList />;

  let analyzing = 0;
  let pending = 0;
  let processing = 0;
  let completed = 0;
  let failed = 0;
  let bytesRemoved = 0;
  for (const j of jobs) {
    if (j.status === 'analyzing') analyzing++;
    else if (j.status === 'pending') pending++;
    else if (j.status === 'processing') processing++;
    else if (j.status === 'failed') failed++;
    else if (j.status === 'completed') {
      completed++;
      bytesRemoved += j.removed?.reduce((n, r) => n + r.bytes, 0) ?? 0;
    }
  }

  const working = analyzing + processing > 0;
  const percent = Math.round(((completed + failed) / jobs.length) * 100);
  /** Mỗi trạng thái một "viên" có chấm màu — đọc lướt nhanh hơn một dòng chữ nối bằng dấu gạch. */
  const chips = (
    [
      { key: 'analyzing', tone: 'info', label: fmt(t.workspace.analyzing, { count: analyzing }), busy: true, n: analyzing },
      { key: 'pending', tone: 'brand', label: fmt(t.workspace.pending, { count: pending }), n: pending },
      { key: 'completed', tone: 'success', label: fmt(t.workspace.completed, { count: completed }), n: completed },
      { key: 'failed', tone: 'danger', label: fmt(t.workspace.failed, { count: failed }), n: failed },
    ] satisfies { key: string; tone: Tone; label: string; n: number; busy?: boolean }[]
  ).filter((c) => c.n > 0);
  /** Thanh tiến độ chia đoạn theo trạng thái: đã sạch · lỗi · đang xử lý. */
  const segments = [
    { n: completed, cls: 'bg-fix' },
    { n: failed, cls: 'bg-rose' },
    { n: processing, cls: 'bg-sky animate-pulse' },
  ];
  const selected = jobs.find((j) => j.id === selectedId) ?? jobs[0];

  return (
    <section id="results" className="scroll-mt-28">
      <RejectionList />

      <div className="flex justify-center">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="results-panel"
          className={`${buttonClass('outline')} h-11 gap-2.5 rounded-full px-5`}
        >
          <Icon name="layers" className="h-4 w-4 text-cobalt" />
          {t.workspace.process}
          <span className="rounded-full bg-wash px-2 py-0.5 text-xs font-semibold text-ink-2">{jobs.length}</span>
          {working && <Spinner className="h-3.5 w-3.5 text-cobalt" />}
          <Icon name="chevron" className={`h-4 w-4 text-ink-3 transition-transform ${open ? 'rotate-180' : ''}`} />
        </button>
      </div>

      {open && (
        <div id="results-panel" className="mt-4 overflow-clip rounded-xl border border-line bg-sheet shadow-sm">
          {/* Thanh thao tác */}
          <div className="sticky top-[calc(env(safe-area-inset-top,0px)+7rem)] z-20 border-b border-line bg-sheet/95 backdrop-blur lg:top-20">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 px-4 py-3.5 sm:px-5">
              <div className="min-w-0 flex-1">
                <p className="font-display text-lg font-bold text-ink">{fmt(t.workspace.images, { count: jobs.length })}</p>
                <ul className="mt-1.5 flex flex-wrap items-center gap-1.5">
                  {chips.map((c) => (
                    <li key={c.key} className="inline-flex items-center gap-1.5 rounded-full bg-wash px-2.5 py-0.5 text-xs font-medium text-ink-2">
                      {c.busy ? <Spinner className={`h-2.5 w-2.5 ${TONE_TEXT[c.tone]}`} /> : <Dot tone={c.tone} />}
                      {c.label}
                    </li>
                  ))}
                  {completed > 0 && (
                    <li className="inline-flex items-center gap-1 rounded-full bg-fix-soft px-2.5 py-0.5 text-xs font-semibold text-fix">
                      <Icon name="tick" className="h-3 w-3" />
                      {fmt(t.workspace.totalRemoved, { size: formatBytes(bytesRemoved) })}
                    </li>
                  )}
                </ul>
              </div>
              <div className="flex w-full flex-wrap items-center gap-2 sm:w-auto">
                <button onClick={actions.clearAll} className={`${buttonClass('ghost')} flex-1 sm:flex-none`}>
                  <Icon name="trash" className="h-4 w-4" /> {t.workspace.clearList}
                </button>
                <button
                  onClick={() => void actions.downloadZip()}
                  disabled={completed === 0 || working || zipProgress !== null}
                  className={`${buttonClass('outline')} flex-1 sm:flex-none`}
                >
                  <Icon name="download" className="h-4 w-4" />
                  {zipProgress !== null ? fmt(t.workspace.zipping, { percent: Math.round(zipProgress) }) : t.workspace.downloadZip}
                </button>
                <button onClick={actions.stripAll} disabled={pending === 0} className={`${buttonClass('primary')} order-first w-full sm:order-none sm:w-auto`}>
                  {processing > 0 ? <Spinner /> : <Icon name="sparkles" className="h-4 w-4" />}
                  {t.workspace.strip}
                  {pending > 0 && ` (${pending})`}
                </button>
              </div>
            </div>
            {processing + completed + failed > 0 && (
              <div className="flex h-1.5 bg-wash" role="progressbar" aria-valuenow={percent} aria-valuemin={0} aria-valuemax={100}>
                {segments.map(
                  (s, i) =>
                    s.n > 0 && (
                      <div key={i} className={`h-full transition-[width] duration-500 ${s.cls}`} style={{ width: `${(s.n / jobs.length) * 100}%` }} />
                    ),
                )}
              </div>
            )}
          </div>

          <div className="grid lg:grid-cols-[19rem_minmax(0,1fr)]">
            <Queue jobs={jobs} selectedId={selected.id} onSelect={setSelectedId} />
            <Detail job={selected} />
          </div>
        </div>
      )}
    </section>
  );
}
