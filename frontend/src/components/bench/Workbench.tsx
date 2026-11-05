import { useEffect, useRef, useState, type CSSProperties, type MouseEvent } from 'react';
import { useShallow } from 'zustand/react/shallow';
import { MAX_FILE_BYTES, MAX_FILES_PER_SESSION } from '../../config/limits';
import { fmt, useT } from '../../i18n';
import { useJobStore } from '../../store/useJobStore';
import type { AnalysisReport, Job } from '../../types';
import { formatBytes } from '../../utils/format';
import { buttonClass, Icon, Spinner } from '../ui';
import { DeskScene } from './DeskScene';

/**
 * Bàn làm việc xử lý ảnh (2D, nhìn từ trên xuống) — làm việc trên chính các tệp người dùng thả vào:
 *   Khay vào  → ảnh thật (ảnh thu nhỏ) kèm nhãn metadata đọc được từ tệp (GPS, EXIF, C2PA, AI…).
 *   Bàn làm việc → cảnh isometric (DeskScene); khi bấm làm sạch, từng ảnh được đặt lên tấm kính và "sửa" metadata.
 *   Khay ra   → bản đã làm sạch, số byte đã gỡ và nút lưu từng tệp / cả ZIP.
 * Việc làm sạch thật diễn ra trong Web Worker và chỉ mất vài mili-giây, nên bàn giữ một "hàng chờ hiển thị":
 * mỗi ảnh nằm trên bàn một quãng ngắn (rút ngắn dần khi có nhiều ảnh) rồi mới sang khay ra.
 */

// ---------- Nhãn metadata thật, rút ra từ báo cáo phân tích ----------

type TagTone = 'amber' | 'rose' | 'sky' | 'neutral';
/** Màu sticker dán trên ảnh in — màu giấy cố định, không đổi theo chế độ Sáng/Tối. */
const TAG_STYLE: Record<TagTone, string> = {
  amber: 'bg-[#fcefc7] text-[#8a5d00]',
  rose: 'bg-[#fbe0e9] text-[#b01a4c]',
  sky: 'bg-[#dceefa] text-[#1f6fa8]',
  neutral: 'bg-[#eef1f6] text-[#4a5370]',
};

/** Nhãn ngắn cho từng nhóm metadata có trong tệp. Hồ sơ màu ICC được giữ lại nên không hiện. */
export function metadataTags(report: AnalysisReport | undefined): { label: string; tone: TagTone }[] {
  if (!report) return [];
  const kinds = new Set(report.blocks.map((b) => b.kind));
  const tags: { label: string; tone: TagTone }[] = [];
  if (report.fields.some((f) => f.category === 'location')) tags.push({ label: 'GPS', tone: 'amber' });
  if (report.ai.verdict === 'detected') tags.push({ label: 'AI', tone: 'rose' });
  if (kinds.has('c2pa')) tags.push({ label: 'C2PA', tone: 'rose' });
  if (kinds.has('text')) tags.push({ label: 'PROMPT', tone: 'rose' });
  if (kinds.has('exif')) tags.push({ label: 'EXIF', tone: 'sky' });
  if (kinds.has('xmp')) tags.push({ label: 'XMP', tone: 'sky' });
  if (kinds.has('iptc')) tags.push({ label: 'IPTC', tone: 'neutral' });
  if (kinds.has('comment')) tags.push({ label: 'COM', tone: 'neutral' });
  return tags;
}

const removedBytes = (job: Job) => job.removed?.reduce((n, r) => n + r.bytes, 0) ?? 0;
const EXT: Record<Job['format'], string> = { jpeg: 'JPG', png: 'PNG', webp: 'WebP', gif: 'GIF', heif: 'HEIC', avif: 'AVIF' };

/** Ảnh thu nhỏ từ chính tệp gốc (URL tạm, thu hồi khi thẻ biến mất). Trình duyệt không hiển thị được → ô màu kèm đuôi tệp. */
function Thumb({ job }: { job: Job }) {
  const [url, setUrl] = useState<string | null>(null);
  const [broken, setBroken] = useState(false);
  useEffect(() => {
    const u = URL.createObjectURL(job.file);
    setUrl(u);
    return () => URL.revokeObjectURL(u);
  }, [job.file]);
  return (
    <div className="relative aspect-[4/3] overflow-hidden rounded-[3px] bg-wash">
      {url && !broken ? (
        <img src={url} alt="" decoding="async" draggable={false} onError={() => setBroken(true)} className="h-full w-full object-cover" />
      ) : (
        <div className="grid h-full w-full place-items-center bg-cobalt-soft">
          <span className="font-mono text-xs font-bold text-cobalt">{EXT[job.format]}</span>
        </div>
      )}
    </div>
  );
}

// ---------- Thẻ ảnh trên bàn ----------

/** Lệch góc nhẹ, cố định theo id — ảnh nằm trên bàn trông như vừa được đặt xuống. */
const tiltOf = (id: string) => {
  let h = 0;
  for (const c of id) h = (h * 31 + c.charCodeAt(0)) | 0;
  return ((Math.abs(h) % 7) - 3) * 0.8;
};

/** Góc nghiêng nhỏ cho từng sticker để trông như dán tay. */
const STICKER_TILT = [-6, 4, -3, 7, -5];

/** Nhãn metadata dán trên góc ảnh như sticker. */
function Stickers({ job, max = 3 }: { job: Job; max?: number }) {
  const tags = metadataTags(job.report);
  if (!tags.length) return null;
  return (
    <ul className="pointer-events-none absolute end-1 top-1 flex max-w-[85%] flex-wrap justify-end gap-0.5" dir="ltr">
      {tags.slice(0, max).map((tag, i) => (
        <li
          key={tag.label}
          className={`bench-sticker rounded-[2px] px-1 py-px font-mono text-[0.56rem] leading-tight font-bold ${TAG_STYLE[tag.tone]}`}
          style={{ '--r': `${STICKER_TILT[i % STICKER_TILT.length]}deg` } as CSSProperties}
        >
          {tag.label}
        </li>
      ))}
      {tags.length > max && (
        <li className="bench-sticker rounded-[2px] bg-white px-1 py-px font-mono text-[0.56rem] leading-tight font-bold text-[#5a6380]">+{tags.length - max}</li>
      )}
    </ul>
  );
}

function InCard({ job }: { job: Job }) {
  const t = useT();
  return (
    <li className="bench-in" style={{ '--tilt': `${tiltOf(job.id)}deg` } as CSSProperties}>
      <figure className="bench-print">
        <div className="relative">
          <Thumb job={job} />
          <Stickers job={job} />
          {job.status === 'analyzing' && (
            <div className="absolute inset-0 grid place-items-center rounded-[3px] bg-white/70" title={t.status.analyzing}>
              <Spinner className="h-4 w-4 text-[#007595]" />
            </div>
          )}
        </div>
        <figcaption className="mt-1 truncate px-0.5 text-[0.66rem] font-medium" title={job.name}>
          {job.name}
        </figcaption>
      </figure>
    </li>
  );
}

function OutCard({ job }: { job: Job }) {
  const t = useT();
  const download = useJobStore((s) => s.downloadOne);
  const failed = job.status === 'failed';
  const bytes = removedBytes(job);
  return (
    <li className="bench-out">
      <figure className="bench-print">
        <div className="relative">
          <Thumb job={job} />
          {/* Dấu đóng lên ảnh sạch (hoặc lỗi) */}
          <span
            className={`absolute -end-1.5 -top-1.5 grid h-6 w-6 -rotate-8 place-items-center rounded-full text-white shadow-[0_2px_5px_-1px_rgba(0,0,0,0.45)] ring-2 ring-white ${failed ? 'bg-[#c21f55]' : 'bg-[#0b7a53]'}`}
            title={failed ? t.status.failed : t.status.completed}
          >
            <Icon name={failed ? 'x' : 'tick'} className="h-3.5 w-3.5" />
          </span>
        </div>
        <figcaption className="mt-1 flex items-center gap-1 ps-0.5">
          <div className="min-w-0 flex-1">
            <p className="truncate text-[0.66rem] font-medium" title={job.name}>
              {job.name}
            </p>
            <p className={`font-mono text-[0.6rem] font-bold ${failed ? 'text-[#c21f55]' : 'text-[#0b7a53]'}`} dir="ltr">
              {failed ? t.status.failed : `−${formatBytes(bytes)}`}
            </p>
          </div>
          {job.result && (
            <button
              type="button"
              onClick={() => download(job.id)}
              title={t.file.download}
              aria-label={`${t.file.download}: ${job.name}`}
              className="grid h-7 w-7 shrink-0 place-items-center rounded-full text-[#5a6380] transition-colors hover:bg-[#d7f2e6] hover:text-[#0b7a53]"
            >
              <Icon name="download" className="h-4 w-4" />
            </button>
          )}
        </figcaption>
      </figure>
    </li>
  );
}

// ---------- Hàng chờ hiển thị qua trạm quét ----------

const isOutbound = (j: Job) => j.status === 'processing' || j.status === 'completed' || j.status === 'failed';

/**
 * Ảnh nào đang ở trạm (`current`) và ảnh nào đã sang khay ra (`delivered`). Ảnh đã xong xử lý nhưng chưa tới lượt
 * vẫn nằm ở khay vào; mỗi lượt dừng ở trạm `dwell` ms (ít ảnh thì chậm rãi, nhiều ảnh thì nhanh).
 */
function useConveyor(jobs: Job[]) {
  const [delivered, setDelivered] = useState<ReadonlySet<string>>(() => new Set());
  const [current, setCurrent] = useState<string | null>(null);
  const [dwell, setDwell] = useState(1200);
  const jobsRef = useRef(jobs);
  jobsRef.current = jobs;

  // Ảnh bị xóa khỏi bàn → bỏ khỏi trạng thái hiển thị.
  useEffect(() => {
    const ids = new Set(jobs.map((j) => j.id));
    if (current && !ids.has(current)) setCurrent(null);
    if ([...delivered].some((id) => !ids.has(id))) setDelivered(new Set([...delivered].filter((id) => ids.has(id))));
    // Ảnh được làm sạch lại (quay về "pending") → về khay vào.
    const back = jobs.filter((j) => delivered.has(j.id) && !isOutbound(j));
    if (back.length) setDelivered(new Set([...delivered].filter((id) => !back.some((j) => j.id === id))));
  }, [jobs, current, delivered]);

  useEffect(() => {
    if (current) return;
    const waiting = jobs.filter((j) => isOutbound(j) && !delivered.has(j.id));
    if (!waiting.length) return;
    const ms = Math.round(Math.min(1300, Math.max(320, 3200 / waiting.length)));
    setDwell(ms);
    setCurrent(waiting[0].id);
  }, [jobs, current, delivered]);

  useEffect(() => {
    if (!current) return;
    let timer = 0;
    const finish = () => {
      const job = jobsRef.current.find((j) => j.id === current);
      // Worker chưa xong → giữ ảnh trên bàn quét thêm một chút.
      if (job?.status === 'processing') {
        timer = window.setTimeout(finish, 150);
        return;
      }
      setDelivered((d) => new Set(d).add(current));
      setCurrent(null);
    };
    timer = window.setTimeout(finish, dwell);
    return () => window.clearTimeout(timer);
  }, [current, dwell]);

  return { delivered, current, dwell };
}

// ---------- Bàn làm việc ----------

const ZONE_HEAD = 'flex items-center gap-2 font-mono text-[0.7rem] font-bold tracking-[0.14em] uppercase';
const stop = (e: MouseEvent) => e.stopPropagation();

export function Workbench({ dragActive, onPick }: { dragActive: boolean; onPick(): void }) {
  const t = useT();
  const jobs = useJobStore((s) => s.jobs);
  const validating = useJobStore((s) => s.validating);
  const zipProgress = useJobStore((s) => s.zipProgress);
  const actions = useJobStore(useShallow((s) => ({ stripAll: s.stripAll, downloadZip: s.downloadZip, clearAll: s.clearAll })));
  const { delivered, current, dwell } = useConveyor(jobs);

  const inJobs = jobs.filter((j) => j.id !== current && !delivered.has(j.id));
  const outJobs = jobs.filter((j) => delivered.has(j.id));
  const station = jobs.find((j) => j.id === current) ?? null;
  const pending = jobs.filter((j) => j.status === 'pending').length;
  const busy = jobs.some((j) => j.status === 'analyzing' || j.status === 'processing') || station !== null;
  const completedOut = outJobs.filter((j) => j.status === 'completed');
  const totalRemoved = completedOut.reduce((n, j) => n + removedBytes(j), 0);
  const empty = jobs.length === 0;
  const limits = fmt(t.dropzone.limits, { size: formatBytes(MAX_FILE_BYTES), count: MAX_FILES_PER_SESSION });

  // Dòng trạng thái dưới nút làm sạch (đọc cho trình đọc màn hình).
  const statusLine = station ? t.status.processing : pending ? fmt(t.workspace.pending, { count: pending }) : totalRemoved > 0 ? fmt(t.workspace.totalRemoved, { size: formatBytes(totalRemoved) }) : '';

  return (
    <div className="@container">
      {/* Mặt bàn: tấm thảm cắt có lưới ô vuông; khay vào → bàn làm việc → khay ra, xếp ngang (bàn rộng) hoặc dọc (bàn hẹp) */}
      <div
        className={`bench-mat grid gap-5 rounded-2xl p-3 ring-1 transition-shadow @3xl:grid-cols-[minmax(0,0.85fr)_minmax(0,1.5fr)_minmax(0,0.85fr)] @3xl:p-5 ${
          dragActive ? 'ring-2 ring-cobalt shadow-[0_0_0_6px_color-mix(in_oklab,var(--color-cobalt)_16%,transparent)]' : 'ring-line'
        }`}
      >
        {/* ---- Khay vào: tấm gỗ cùng chất liệu với bàn trong cảnh ---- */}
        <section className="bench-tray flex min-h-56 flex-col rounded-2xl p-3 @3xl:min-h-[22rem]">
          <header className={ZONE_HEAD} dir="ltr">
            <span className="bench-plate inline-flex items-center gap-1.5 rounded-full px-2.5 py-1">
              <Icon name="upload" className="h-3.5 w-3.5" />
              IN
            </span>
            {!empty && <span className="bench-tray-count ms-auto font-sans text-xs font-semibold tracking-normal normal-case">{inJobs.length}</span>}
          </header>

          {empty ? (
            <div className="bench-slot-empty mt-3 flex flex-1 flex-col items-center justify-center rounded-xl px-2 py-6 text-center transition-colors" data-active={dragActive}>
              {/* Xấp ảnh trống chờ được thả vào */}
              <span className="relative grid h-16 w-20 place-items-center" aria-hidden="true">
                <span className="bench-print absolute h-12 w-16 -rotate-6" />
                <span className="bench-print absolute h-12 w-16 rotate-3" />
                <span className={`bench-print relative grid h-12 w-16 place-items-center transition-transform ${dragActive ? '-translate-y-1.5' : ''}`}>
                  <Icon name="photo" className="h-6 w-6 text-[#0b6e8a]" />
                </span>
              </span>
              <p className="mt-4 font-display text-xl font-bold tracking-tight">{dragActive ? t.dropzone.release : t.dropzone.drop}</p>
              <p className="bench-tray-count mt-1.5 text-xs leading-relaxed text-balance">{limits}</p>
              <button type="button" className="tray-btn tray-btn-primary tray-btn-lg mt-4">
                <Icon name="upload" className="h-4 w-4" /> {t.dropzone.choose}
              </button>
            </div>
          ) : (
            <div className="mt-3 flex flex-1 flex-col" onClick={stop}>
              <ul className="grid flex-1 content-start gap-3 overflow-y-auto p-1 [grid-template-columns:repeat(auto-fill,minmax(6.5rem,1fr))] @3xl:max-h-80">
                {inJobs.map((job) => (
                  <InCard key={job.id} job={job} />
                ))}
              </ul>
              <div className="bench-tray-divider mt-3 flex flex-wrap items-center gap-2 pt-3">
                <button type="button" onClick={onPick} className="tray-btn tray-btn-soft">
                  <Icon name="upload" className="h-3.5 w-3.5" /> {t.dropzone.choose}
                </button>
                <button type="button" onClick={actions.clearAll} className="tray-btn tray-btn-ghost">
                  <Icon name="trash" className="h-3.5 w-3.5" /> {t.workspace.clearList}
                </button>
              </div>
            </div>
          )}
          {validating > 0 && (
            <p className="mt-2 inline-flex items-center gap-2 text-xs font-medium text-[#0b6e8a]" role="status">
              <Spinner className="h-3 w-3" /> {fmt(t.dropzone.checking, { count: validating })}
            </p>
          )}
        </section>

        {/* ---- Bàn làm việc isometric: ảnh đang được làm sạch nằm trên tấm kính ---- */}
        <section className="flex flex-col justify-center gap-3" onClick={empty ? undefined : stop}>
          <DeskScene live={station ? { key: station.id, file: station.file, ext: EXT[station.format], dwell, status: t.status.processing } : null} />
          <button
            type="button"
            onClick={actions.stripAll}
            disabled={pending === 0}
            className={`${buttonClass('primary')} mx-auto h-11 w-full max-w-xs rounded-full px-5 text-sm font-bold shadow-md shadow-cobalt/20`}
          >
            {busy && !empty ? <Spinner /> : <Icon name="sparkles" className="h-4 w-4" />}
            {t.workspace.strip}
            {pending > 0 && ` (${pending})`}
          </button>
          <p className="min-h-4 text-center text-xs font-medium text-ink-3" role="status" aria-live="polite">
            {statusLine}
          </p>
        </section>

        {/* ---- Khay ra: tấm gỗ cùng chất liệu với bàn trong cảnh ---- */}
        <section className="bench-tray flex min-h-56 flex-col rounded-2xl p-3 @3xl:min-h-[22rem]" onClick={empty ? undefined : stop}>
          <header className={ZONE_HEAD} dir="ltr">
            <span className="bench-plate inline-flex items-center gap-1.5 rounded-full px-2.5 py-1">
              <Icon name="check" className="h-3.5 w-3.5" />
              OUT
            </span>
            {outJobs.length > 0 && <span className="bench-tray-count ms-auto font-sans text-xs font-semibold tracking-normal normal-case">{outJobs.length}</span>}
          </header>
          {outJobs.length === 0 ? (
            <div className="mt-3 grid flex-1 grid-cols-4 content-start gap-2 @3xl:grid-cols-2 @3xl:gap-3" aria-hidden="true">
              {[0, 1, 2, 3].map((i) => (
                <span key={i} className="bench-slot-empty aspect-[4/3.6] rounded-lg" />
              ))}
            </div>
          ) : (
            <>
              <ul className="mt-3 grid flex-1 content-start gap-3 overflow-y-auto p-1 [grid-template-columns:repeat(auto-fill,minmax(6.5rem,1fr))] @3xl:max-h-80">
                {outJobs.map((job) => (
                  <OutCard key={job.id} job={job} />
                ))}
              </ul>
              <div className="bench-tray-divider mt-3 flex flex-wrap items-center gap-2 pt-3">
                {totalRemoved > 0 && (
                  <span className="inline-flex items-center gap-1 rounded-full bg-white px-2.5 py-1 text-xs font-semibold text-[#0b7a53] shadow-[0_1px_2px_rgba(74,58,34,0.12)]">
                    <Icon name="tick" className="h-3 w-3" />
                    {fmt(t.workspace.totalRemoved, { size: formatBytes(totalRemoved) })}
                  </span>
                )}
                <button
                  type="button"
                  onClick={() => void actions.downloadZip()}
                  disabled={completedOut.length === 0 || busy || zipProgress !== null}
                  className="tray-btn tray-btn-primary ms-auto"
                >
                  <Icon name="download" className="h-3.5 w-3.5" />
                  {zipProgress !== null ? fmt(t.workspace.zipping, { percent: Math.round(zipProgress) }) : t.workspace.downloadZip}
                </button>
              </div>
            </>
          )}
        </section>
      </div>
    </div>
  );
}
