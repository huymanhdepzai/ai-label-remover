import { useId, useMemo, useState, type KeyboardEvent } from 'react';
import { fmt, useT } from '../../i18n';
import { useJobStore } from '../../store/useJobStore';
import type { Job } from '../../types';
import { formatBytes, formatMegapixels } from '../../utils/format';
import { privacySummary, VERDICT_TONE } from '../../utils/report';
import { AiPanel, ChecksList, FilePanel, MetadataTable, PrivacyPanel, ResultBanner } from '../report/ReportPanels';
import { Badge, buttonClass, Icon, Spinner } from '../ui';
import { STATUS_TONE, Thumbnail } from './Queue';

type TabKey = 'privacy' | 'ai' | 'file' | 'all' | 'checks';
const TABS: TabKey[] = ['privacy', 'ai', 'file', 'all', 'checks'];

/** Cột phải của bàn soi: đầu trang của ảnh đang chọn + các thẻ (tab) báo cáo. */
export function Detail({ job }: { job: Job }) {
  const t = useT();
  const [tab, setTab] = useState<TabKey>('privacy');
  const baseId = useId();
  const stripOne = useJobStore((s) => s.stripOne);
  const downloadOne = useJobStore((s) => s.downloadOne);
  const removeJob = useJobStore((s) => s.removeJob);
  const retry = useJobStore((s) => s.retry);

  const report = job.report;
  const privacy = useMemo(() => (report ? privacySummary(report) : null), [report]);
  const busy = job.status === 'analyzing' || job.status === 'processing';

  const label: Record<TabKey, string> = {
    privacy: t.panel.privacyTitle,
    ai: t.panel.aiTitle,
    file: t.panel.fileTitle,
    all: t.panel.allMetadata,
    checks: t.panel.checksTitle,
  };
  /** Chấm màu trên tab cho biết ngay mục nào có vấn đề, không cần mở. */
  const flag: Partial<Record<TabKey, 'warning' | 'danger'>> = {};
  if (privacy && privacy.location.length + privacy.personal.length + privacy.time.length > 0) flag.privacy = 'warning';
  if (report?.ai.verdict === 'detected') flag.ai = 'danger';
  else if (report?.ai.verdict === 'review') flag.ai = 'warning';

  const onKey = (e: KeyboardEvent<HTMLDivElement>) => {
    const dir = getComputedStyle(e.currentTarget).direction === 'rtl' ? -1 : 1;
    const step = e.key === 'ArrowRight' ? dir : e.key === 'ArrowLeft' ? -dir : 0;
    if (!step) return;
    e.preventDefault();
    const next = TABS[(TABS.indexOf(tab) + step + TABS.length) % TABS.length];
    setTab(next);
    document.getElementById(`${baseId}-tab-${next}`)?.focus();
  };

  return (
    <div className="min-w-0">
      {/* Đầu trang ảnh */}
      <div className="grid grid-cols-[auto_minmax(0,1fr)] items-start gap-x-4 gap-y-3 border-b border-line p-4 sm:grid-cols-[auto_minmax(0,1fr)_auto] sm:p-5">
        <Thumbnail job={job} className="h-16 w-20 ring-1 ring-line sm:h-20 sm:w-28" />
        <div className="min-w-0">
          <h3 className="truncate font-display text-lg font-bold text-ink sm:text-xl" title={job.name}>
            <bdi>{job.name}</bdi>
          </h3>
          {/* Thông số tệp tách thành từng ô nhỏ; dung lượng trước → sau đặt cuối, bản sau tô xanh */}
          <p className="mt-1.5 flex flex-wrap items-center gap-1.5 text-xs text-ink-2" dir="ltr">
            <span className="rounded bg-ink px-1.5 py-0.5 font-mono font-semibold text-paper">{job.format.toUpperCase()}</span>
            <span className="rounded bg-wash px-1.5 py-0.5 tabular-nums">
              {job.width}×{job.height} · {formatMegapixels(job.width, job.height)}
            </span>
            <span className="inline-flex items-center gap-1 rounded bg-wash px-1.5 py-0.5 tabular-nums">
              <span className={job.outputSize !== undefined ? 'text-ink-3 line-through decoration-1' : ''}>{formatBytes(job.size)}</span>
              {job.outputSize !== undefined && (
                <>
                  <span aria-hidden="true">→</span>
                  <span className="font-semibold text-fix">{formatBytes(job.outputSize)}</span>
                </>
              )}
            </span>
          </p>
          <div className="mt-2 flex flex-wrap gap-1.5">
            <Badge tone={STATUS_TONE[job.status]}>
              {busy && <Spinner className="h-3 w-3" />}
              {t.status[job.status]}
            </Badge>
            {report && <Badge tone={VERDICT_TONE[report.ai.verdict]}>{t.panel.verdict[report.ai.verdict].label}</Badge>}
          </div>
        </div>
        <div className="col-span-2 flex items-center justify-end gap-2 sm:col-span-1">
          {job.status === 'pending' && (
            <button onClick={() => stripOne(job.id)} className={buttonClass('primary', 'sm')}>
              {t.file.strip}
            </button>
          )}
          {job.status === 'completed' && (
            <button onClick={() => downloadOne(job.id)} className={buttonClass('fix', 'sm')}>
              <Icon name="download" className="h-4 w-4" /> {t.file.download}
            </button>
          )}
          {job.status === 'failed' && (
            <button onClick={() => retry(job.id)} className={buttonClass('outline', 'sm')}>
              <Icon name="retry" className="h-4 w-4" /> {t.file.retry}
            </button>
          )}
          <button
            onClick={() => removeJob(job.id)}
            className="grid h-8 w-8 place-items-center rounded-full text-ink-3 hover:bg-wash hover:text-ink"
            aria-label={fmt(t.file.removeFromList, { name: job.name })}
            title={fmt(t.file.removeFromList, { name: job.name })}
          >
            <Icon name="x" className="h-4 w-4" />
          </button>
        </div>
      </div>

      {job.status === 'failed' && job.error && (
        <p className="border-b border-line bg-rose-soft px-5 py-2.5 text-sm text-rose">{fmt(t.report.errProcessing, { detail: job.error })}</p>
      )}

      {job.status === 'completed' && (
        <div className="border-b border-line p-4 sm:px-5">
          <ResultBanner job={job} />
        </div>
      )}

      {!report ? (
        <div className="grid min-h-60 place-items-center p-8 text-ink-2">
          <span className="inline-flex items-center gap-2 text-sm">
            <Spinner /> {t.status.analyzing}
          </span>
        </div>
      ) : (
        <>
          <div
            role="tablist"
            aria-label={job.name}
            onKeyDown={onKey}
            className="flex overflow-x-auto border-b border-line px-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:px-3"
          >
            {TABS.map((k) => {
              const on = k === tab;
              return (
                <button
                  key={k}
                  id={`${baseId}-tab-${k}`}
                  role="tab"
                  type="button"
                  aria-selected={on}
                  aria-controls={`${baseId}-panel`}
                  tabIndex={on ? 0 : -1}
                  onClick={() => setTab(k)}
                  className={`relative flex shrink-0 items-center gap-1.5 px-3 py-3 text-sm whitespace-nowrap transition-colors ${
                    on ? 'font-semibold text-ink' : 'text-ink-2 hover:text-ink'
                  }`}
                >
                  {label[k]}
                  {flag[k] && <span aria-hidden="true" className={`h-1.5 w-1.5 rounded-full ${flag[k] === 'danger' ? 'bg-rose' : 'bg-amber'}`} />}
                  {on && <span aria-hidden="true" className="absolute inset-x-3 bottom-0 h-[3px] rounded-t-full bg-cobalt" />}
                </button>
              );
            })}
          </div>
          <div id={`${baseId}-panel`} role="tabpanel" aria-labelledby={`${baseId}-tab-${tab}`} className="p-4 sm:p-6">
            {tab === 'privacy' && <PrivacyPanel report={report} />}
            {tab === 'ai' && <AiPanel report={report} />}
            {tab === 'file' && <FilePanel job={job} report={report} />}
            {tab === 'all' && <MetadataTable report={report} />}
            {tab === 'checks' && <ChecksList report={report} />}
          </div>
        </>
      )}
    </div>
  );
}
