import type { GuideSlug } from '../seo';

/**
 * Bài viết chuyên sâu cho trang hướng dẫn. Chỉ có ở các ngôn ngữ thị trường chính;
 * ngôn ngữ khác hiển thị phần tóm tắt trong `seo.guides.items` của tệp ngôn ngữ.
 */
export interface ArticleSection {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface Article {
  /**
   * Tiêu đề + tóm tắt: bắt buộc với bài mở rộng (EXTRA_GUIDE_SLUGS) vì chúng không có trong tệp ngôn ngữ;
   * với bài nền tảng, tiêu đề/tóm tắt lấy từ `seo.guides.items`.
   */
  title?: string;
  summary?: string[];
  /**
   * Thẻ <title> riêng, ngắn (≤ 60 ký tự) và chứa từ khóa chính; H1 vẫn dùng `title` / tiêu đề trong tệp ngôn ngữ.
   * Bỏ trống → dùng tiêu đề bài.
   */
  metaTitle?: string;
  /** Meta description riêng cho trang (≈150 ký tự). */
  description: string;
  /** Ngày sửa gần nhất của bản ngôn ngữ này (YYYY-MM-DD) — sitemap lastmod, schema dateModified. Bỏ trống → SITE.contentUpdated. */
  updated?: string;
  /** Bài liên quan cùng cụm chủ đề (hiện ở cuối trang); bài chưa có ở ngôn ngữ này bị bỏ qua. */
  related?: GuideSlug[];
  sections: ArticleSection[];
  faqHeading: string;
  faq: { q: string; a: string }[];
}

export type Articles = Partial<Record<GuideSlug, Article>>;
