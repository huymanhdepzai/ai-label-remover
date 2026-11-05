import { useMemo, useState } from 'react';
import { fmt, tr, useT } from '../../i18n';
import type { AnalysisReport, BlockKind, CheckStatus, Job, MetadataField } from '../../types';
import { formatBytes, formatMegapixels } from '../../utils/format';
import { groupFields, privacySummary, VERDICT_TONE } from '../../utils/report';
import { Badge, Icon, TONE_TEXT, type IconName } from '../ui';

// ---------- 1. Chi tiết riêng tư ----------

const PRIVACY_ROWS: { key: 'location' | 'personal' | 'time'; icon: IconName }[] = [
  { key: 'location', icon: 'mapPin' },
  { key: 'personal', icon: 'user' },
  { key: 'time', icon: 'clock' },
];

/** Ba ô lớn Vị trí / Cá nhân / Thời gian — mỗi ô có trạng thái và vài trường mẫu. */
export function PrivacyPanel({ report }: { report: AnalysisReport }) {
  const t = useT();
  const summary = useMemo(() => privacySummary(report), [report]);
  const exposed = PRIVACY_ROWS.filter((r) => summary[r.key].length > 0).length;

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-2">
        <p className="text-sm text-ink-2">{t.panel.privacyQuestion}</p>
        <Badge tone={exposed ? 'warning' : 'success'}>{exposed ? fmt(t.panel.exposedGroups, { count: exposed }) : t.panel.safe}</Badge>
      </div>
      <ul className="mt-4 grid gap-3 md:grid-cols-3">
        {PRIVACY_ROWS.map(({ key, icon }) => {
          const items = summary[key];
          const hit = items.length > 0;
          return (
            <li key={key} className={`rounded-md p-4 ${hit ? 'bg-amber-soft/60' : 'bg-paper'}`}>
              <div className="flex items-center justify-between gap-2">
                <span className="flex items-center gap-2 font-semibold text-ink">
                  <Icon name={icon} className={`h-5 w-5 ${hit ? 'text-amber' : 'text-fix'}`} />
                  {t.panel[key]}
                </span>
                <span className={`shrink-0 text-sm font-semibold whitespace-nowrap ${hit ? 'text-amber' : 'text-fix'}`}>
                  {hit ? fmt(t.panel.found, { count: items.length }) : t.panel.notFound}
                </span>
              </div>
              {hit && (
                <ul className="mt-3 space-y-1">
                  {items.slice(0, 3).map((f, i) => (
                    <li key={i} className="truncate font-mono text-xs text-ink-2" title={`${f.name}: ${f.value}`} dir="ltr">
                      <span className="text-ink-3">{f.name}</span> <bdi className="text-ink">{f.value}</bdi>
                    </li>
                  ))}
                  {items.length > 3 && <li className="text-xs text-ink-3">{fmt(t.panel.more, { count: items.length - 3 })}</li>}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

// ---------- 2. AI và nguồn gốc ----------

/** Kết luận được viết như một câu lớn, có vạch màu ở mép; bên dưới là các tín hiệu tìm thấy. */
export function AiPanel({ report }: { report: AnalysisReport }) {
  const t = useT();
  const verdict = t.panel.verdict[report.ai.verdict];
  const tone = VERDICT_TONE[report.ai.verdict];
  const rule = { danger: 'border-rose', warning: 'border-amber', success: 'border-fix' }[tone as 'danger' | 'warning' | 'success'];
  return (
    <div>
      <div className={`border-s-4 ps-4 ${rule}`}>
        <p className={`font-display text-2xl font-bold ${TONE_TEXT[tone]}`}>{verdict.label}</p>
        <p className="mt-1 max-w-prose text-sm text-ink-2">{verdict.description}</p>
      </div>
      {report.ai.signals.length > 0 ? (
        <ul className="mt-5 divide-y divide-line rounded-md border border-line">
          {report.ai.signals.map((s, i) => (
            <li key={i} className="flex gap-3 px-4 py-3">
              <Icon name={s.strong ? 'alert' : 'info'} className={`mt-0.5 h-4.5 w-4.5 shrink-0 ${s.strong ? 'text-rose' : 'text-amber'}`} />
              <span className="min-w-0">
                <span className="block text-sm font-semibold text-ink">{tr(t, s.label)}</span>
                <bdi className="block truncate font-mono text-xs text-ink-2" title={tr(t, s.detail)}>
                  {tr(t, s.detail)}
                </bdi>
              </span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-5 flex items-center gap-2 text-sm text-ink-2">
          <Icon name="check" className="h-4.5 w-4.5 text-fix" /> {t.panel.noAiSignals}
        </p>
      )}
    </div>
  );
}

// ---------- 3. Ảnh và tệp ----------

export function FilePanel({ job, report }: { job: Job; report: AnalysisReport }) {
  const t = useT();
  const fileSize = job.outputSize !== undefined ? `${formatBytes(job.size)} → ${formatBytes(job.outputSize)}` : formatBytes(job.size);
  const rows: [string, string][] = [
    [t.panel.dimensions, `${report.width} × ${report.height} px (${formatMegapixels(report.width, report.height)})`],
    [t.panel.format, `${report.formatLabel} / ${job.mime}`],
    [t.panel.fileSize, fileSize],
    ...report.encoding.map((e): [string, string] => [tr(t, e.label), tr(t, e.value)]),
  ];
  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_16rem]">
      <dl className="grid grid-cols-[auto_minmax(0,1fr)] gap-x-6 gap-y-2 text-sm">
        {rows.map(([k, v], i) => (
          <div key={i} className="contents">
            <dt className="text-ink-2">{k}</dt>
            <dd className="min-w-0 truncate font-medium text-ink">
              <bdi>{v}</bdi>
            </dd>
          </div>
        ))}
      </dl>
      <aside className="self-start rounded-md bg-cobalt-soft p-4 text-sm text-ink">
        <p className="flex items-center gap-2 font-semibold text-cobalt">
          <Icon name="photo" className="h-4.5 w-4.5" /> {t.panel.encodingKept}
        </p>
        <p className="mt-2 leading-relaxed text-ink-2">{t.panel.losslessNote}</p>
      </aside>
    </div>
  );
}

// ---------- 4. Toàn bộ metadata ----------

/** Màu của từng loại khối trong bản đồ dung lượng. */
const KIND_COLOR: Record<BlockKind, string> = {
  c2pa: 'bg-rose',
  text: 'bg-rose/60',
  exif: 'bg-amber',
  xmp: 'bg-cobalt',
  iptc: 'bg-sky',
  icc: 'bg-fix',
  comment: 'bg-ink-3',
  other: 'bg-ink-3/60',
};
const KIND_LABEL: Record<BlockKind, string> = {
  c2pa: 'C2PA',
  text: 'Text',
  exif: 'EXIF',
  xmp: 'XMP',
  iptc: 'IPTC',
  icc: 'ICC',
  comment: 'Comment',
  other: 'Other',
};

const CATEGORY_CLASS: Record<MetadataField['category'], string> = {
  location: 'text-amber',
  personal: 'text-amber',
  time: 'text-amber',
  ai: 'text-rose',
  technical: '',
};

/** Bản đồ dung lượng: một thanh chia theo tỉ lệ byte của từng khối metadata trong tệp. */
function BlockMap({ report }: { report: AnalysisReport }) {
  const t = useT();
  const total = report.blocks.reduce((n, b) => n + b.bytes, 0) || 1;
  const kinds = [...new Set(report.blocks.map((b) => b.kind))];
  return (
    <div>
      <h4 className="text-sm font-semibold text-ink">{t.panel.blocksTitle}</h4>
      {report.blocks.length ? (
        <>
          <div className="mt-3 flex h-4 overflow-hidden rounded-sm bg-wash" aria-hidden="true">
            {report.blocks.map((b, i) => (
              <span
                key={i}
                className={`h-full border-e border-sheet last:border-e-0 ${KIND_COLOR[b.kind]}`}
                style={{ width: `${Math.max((b.bytes / total) * 100, 0.8)}%` }}
                title={`${tr(t, b.name)} — ${formatBytes(b.bytes)}`}
              />
            ))}
          </div>
          <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs text-ink-2" dir="ltr">
            {kinds.map((k) => (
              <span key={k} className="inline-flex items-center gap-1.5">
                <span className={`h-2.5 w-2.5 rounded-[2px] ${KIND_COLOR[k]}`} /> {KIND_LABEL[k]}
              </span>
            ))}
          </div>
          <ul className="mt-4 grid gap-x-6 gap-y-1 text-sm sm:grid-cols-2">
            {report.blocks.map((b, i) => (
              <li key={i} className="flex items-center justify-between gap-3 border-b border-line/70 py-1.5">
                <span className="flex min-w-0 items-center gap-2">
                  <span className={`h-2.5 w-2.5 shrink-0 rounded-[2px] ${KIND_COLOR[b.kind]}`} />
                  <bdi className="truncate text-ink">{tr(t, b.name)}</bdi>
                </span>
                <span className="shrink-0 text-xs text-ink-3" dir="ltr">
                  {formatBytes(b.bytes)}
                </span>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <p className="mt-2 text-sm text-ink-2">{t.panel.noBlocks}</p>
      )}
    </div>
  );
}

export function MetadataTable({ report }: { report: AnalysisReport }) {
  const t = useT();
  const [query, setQuery] = useState('');
  const groups = useMemo(() => {
    const q = query.trim().toLowerCase();
    const fields = q ? report.fields.filter((f) => `${f.group} ${f.name} ${f.value}`.toLowerCase().includes(q)) : report.fields;
    return groupFields(fields);
  }, [report, query]);

  return (
    <div className="space-y-7">
      <p className="text-sm text-ink-2">{fmt(t.panel.allMetadataSub, { fields: report.fields.length, blocks: report.blocks.length })}</p>
      <BlockMap report={report} />

      {report.fields.length > 0 && (
        <div>
          <label className="relative block max-w-sm">
            <span className="sr-only">{fmt(t.panel.search, { count: report.fields.length })}</span>
            <Icon name="search" className="pointer-events-none absolute start-3 top-2.5 h-4 w-4 text-ink-3" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={fmt(t.panel.search, { count: report.fields.length })}
              className="h-9 w-full rounded-full border border-line bg-paper ps-9 pe-4 text-sm text-ink placeholder:text-ink-3 focus:border-cobalt focus:outline-none"
            />
          </label>
          <div className="mt-3 max-h-[28rem] overflow-auto rounded-md border border-line">
            <table className="w-full text-start text-xs">
              <tbody>
                {groups.map(([group, fields]) => (
                  <GroupRows key={group} group={group} fields={fields} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}

function GroupRows({ group, fields }: { group: string; fields: MetadataField[] }) {
  const t = useT();
  return (
    <>
      <tr className="sticky top-0 bg-wash">
        <th colSpan={3} className="px-3 py-1.5 text-start text-xs font-semibold text-ink">
          {group} <span className="font-normal text-ink-3">({fields.length})</span>
        </th>
      </tr>
      {fields.map((f, i) => (
        <tr key={i} className="border-t border-line/70 align-top">
          <td className="w-48 px-3 py-1.5 font-mono text-ink-2" dir="ltr">
            {f.name}
          </td>
          <td className="px-3 py-1.5 font-mono break-all whitespace-pre-wrap text-ink">
            <bdi>{f.value}</bdi>
          </td>
          <td className={`w-20 px-3 py-1.5 text-end font-semibold ${CATEGORY_CLASS[f.category]}`}>
            {f.category === 'technical' ? '' : t.panel.category[f.category]}
          </td>
        </tr>
      ))}
    </>
  );
}

// ---------- 5. Những gì trình duyệt đã kiểm tra ----------

const CHECK_ICON: Record<CheckStatus, { icon: IconName; className: string }> = {
  pass: { icon: 'check', className: 'text-fix' },
  warn: { icon: 'alert', className: 'text-amber' },
  info: { icon: 'info', className: 'text-sky' },
};

export function ChecksList({ report }: { report: AnalysisReport }) {
  const t = useT();
  return (
    <div>
      <p className="text-sm text-ink-2">{fmt(t.panel.checksSub, { count: report.checks.length })}</p>
      <ul className="mt-4 grid gap-x-8 sm:grid-cols-2">
        {report.checks.map((c, i) => (
          <li key={i} className="flex gap-3 border-b border-line/70 py-2.5 text-sm">
            <Icon name={CHECK_ICON[c.status].icon} className={`mt-0.5 h-4.5 w-4.5 shrink-0 ${CHECK_ICON[c.status].className}`} />
            <span>
              <span className="font-medium text-ink">{tr(t, c.label)}</span>
              <span className="block text-xs text-ink-2">{tr(t, c.result)}</span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

// ---------- Kết quả sau khi xóa ----------

export function ResultBanner({ job }: { job: Job }) {
  const t = useT();
  if (!job.after || !job.removed) return null;
  const after = privacySummary(job.after);
  const removedBytes = job.removed.reduce((n, r) => n + r.bytes, 0);
  const checks: [string, boolean][] = [
    [t.panel.location, after.location.length === 0],
    [t.panel.personal, after.personal.length === 0],
    [t.panel.time, after.time.length === 0],
    [t.panel.aiSignals, job.after.ai.verdict === 'none'],
  ];
  return (
    <div className="rounded-md bg-fix-soft p-4">
      <p className="flex items-start gap-2 text-sm font-semibold text-fix">
        <Icon name="check" className="h-5 w-5 shrink-0" />
        {fmt(t.panel.resultTitle, { count: job.removed.length, size: formatBytes(removedBytes) })}
      </p>
      <ul className="mt-3 grid grid-cols-2 gap-2 ps-7 sm:grid-cols-4">
        {checks.map(([label, clean]) => (
          <li key={label} className="rounded bg-sheet/70 px-2.5 py-1.5 text-xs">
            <span className="block text-ink-2">{label}</span>
            <span className={`font-semibold ${clean ? 'text-fix' : 'text-amber'}`}>{clean ? t.panel.clean : t.panel.remaining}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
