import type { ArticleSection } from '../../content/articles/types';
import { RichText } from './RichText';

/** Một mục nội dung (tiêu đề + đoạn văn + gạch đầu dòng) — dùng chung cho bài viết, trang công cụ và trang thông tin. */
export function ProseSection({ section, id }: { section: ArticleSection; id?: string }) {
  return (
    <section id={id} className="mt-12 scroll-mt-28 first:mt-0">
      <h2 className="font-display text-[1.7rem] leading-tight font-bold tracking-[-0.02em] text-ink">{section.heading}</h2>
      {section.paragraphs.map((p, k) => (
        <p key={k} className="mt-4 max-w-prose text-[1.05rem] leading-[1.75] text-ink-2">
          <RichText text={p} />
        </p>
      ))}
      {section.bullets && (
        <ul className="mt-4 max-w-prose space-y-2 ps-5 text-[1.05rem] leading-[1.7] text-ink-2 marker:text-cobalt [list-style:square]">
          {section.bullets.map((b, k) => (
            <li key={k}>
              <RichText text={b} />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

/** Danh sách hỏi đáp dạng mở/đóng (câu trả lời hỗ trợ liên kết nội bộ). */
export function FaqList({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="border-t-2 border-ink">
      {items.map((f) => (
        <details key={f.q} className="group border-b border-line">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-ink">
            <h3 className="font-semibold">{f.q}</h3>
            <span
              aria-hidden="true"
              className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-wash text-ink-2 transition-transform group-open:rotate-45"
            >
              +
            </span>
          </summary>
          <p className="max-w-prose pb-5 leading-relaxed text-ink-2">
            <RichText text={f.a} />
          </p>
        </details>
      ))}
    </div>
  );
}
