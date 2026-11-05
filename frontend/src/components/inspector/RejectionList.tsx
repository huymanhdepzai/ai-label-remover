import { fmt, tr, useT } from '../../i18n';
import { useJobStore } from '../../store/useJobStore';
import { Icon } from '../ui';

/** Tệp bị từ chối: một dải cảnh báo mép trái màu hồng, liệt kê từng tệp kèm lý do. */
export function RejectionList() {
  const t = useT();
  const rejections = useJobStore((s) => s.rejections);
  const dismiss = useJobStore((s) => s.dismissRejection);
  const clear = useJobStore((s) => s.clearRejections);

  if (rejections.length === 0) return null;

  return (
    <section className="mt-6 rounded-md border-s-4 border-rose bg-rose-soft px-4 py-3" role="alert">
      <div className="flex items-center justify-between gap-3">
        <h2 className="flex items-center gap-2 text-sm font-semibold text-rose">
          <Icon name="alert" className="h-4 w-4" />
          {fmt(t.rejections.title, { count: rejections.length })}
        </h2>
        <button onClick={clear} className="text-xs font-semibold text-rose underline-offset-2 hover:underline">
          {t.rejections.hideAll}
        </button>
      </div>
      <ul className="mt-2 space-y-1">
        {rejections.map((r) => (
          <li key={r.id} className="flex items-start justify-between gap-3 text-sm text-ink">
            <span className="min-w-0">
              <bdi className="font-medium break-all">{r.name}</bdi> <span className="text-ink-2">— {tr(t, r.reason)}</span>
            </span>
            <button onClick={() => dismiss(r.id)} className="shrink-0 text-ink-3 hover:text-rose" aria-label={t.rejections.hide}>
              <Icon name="x" className="h-4 w-4" />
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
