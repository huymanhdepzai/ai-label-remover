import { isGuideSlug, isToolSlug, type GuideSlug, type ToolSlug } from './seo';

/**
 * Liên kết nội bộ trong thân bài viết, cú pháp kiểu Markdown: `[chữ hiển thị](slug)`.
 * Trỏ tới bài hướng dẫn hoặc trang công cụ (slug giống nhau ở mọi ngôn ngữ). Dùng trong đoạn văn, gạch đầu dòng và
 * câu trả lời hỏi đáp; tiêu đề, tóm tắt và meta description luôn là văn bản thuần.
 */
export type RichPart = string | { text: string; slug: GuideSlug | ToolSlug };

const LINK = /\[([^\]]+)\]\(([a-z0-9-]+)\)/g;

export function parseRichText(s: string): RichPart[] {
  const parts: RichPart[] = [];
  let last = 0;
  for (const m of s.matchAll(LINK)) {
    const [whole, text, target] = m;
    const at = m.index ?? 0;
    if (at > last) parts.push(s.slice(last, at));
    // Slug không hợp lệ → giữ chữ hiển thị, bỏ liên kết (test bắt lỗi này trước khi build).
    parts.push(isGuideSlug(target) || isToolSlug(target) ? { text, slug: target } : text);
    last = at + whole.length;
  }
  if (last < s.length) parts.push(s.slice(last));
  return parts;
}

/** Bỏ cú pháp liên kết, giữ chữ hiển thị — cho JSON-LD và mọi chỗ cần văn bản thuần. */
export const plainText = (s: string) => s.replace(LINK, '$1');

/** Mọi slug được liên kết trong chuỗi (kể cả slug sai) — dùng để kiểm tra nội dung. */
export const linkTargets = (s: string) => [...s.matchAll(LINK)].map((m) => m[2]);
