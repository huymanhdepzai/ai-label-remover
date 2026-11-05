import { lazy, Suspense } from 'react';
import { useJobStore } from '../../store/useJobStore';

const Workspace = lazy(() => import('./Workspace').then((m) => ({ default: m.Workspace })));

/**
 * Bàn soi chỉ tải (chunk riêng) khi đã có ảnh hoặc tệp bị từ chối — trang đọc bài / lần đầu vào trang
 * không phải tải mã báo cáo, nên trang hiển thị nhanh hơn. Lúc prerender luôn trống → không lệch khi hydrate.
 */
export function LazyWorkspace() {
  const show = useJobStore((s) => s.jobs.length > 0 || s.rejections.length > 0);
  if (!show) return null;
  return (
    <Suspense fallback={null}>
      <Workspace />
    </Suspense>
  );
}
