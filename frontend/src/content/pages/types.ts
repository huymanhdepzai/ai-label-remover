import type { ArticleSection } from '../articles/types';
import type { GuideSlug, InfoSlug, ToolSlug } from '../seo';

/**
 * Trang công cụ theo nhu cầu tìm kiếm (vd. "remove EXIF data"): H1 chứa đúng cụm từ khóa, công cụ ngay bên dưới,
 * sau đó là nội dung giải thích riêng cho nhu cầu đó, hỏi đáp và bài liên quan.
 * Văn bản trong `sections[].paragraphs/bullets` và `faq[].a` hỗ trợ liên kết [chữ](slug-bài-viết).
 */
export interface ToolPage {
  /** Thẻ <title> (≤ 60 ký tự, từ khóa chính đứng đầu). */
  metaTitle: string;
  /** Meta description (≤ 155 ký tự). */
  description: string;
  /** Tên ngắn cho liên kết ở chân trang / danh sách công cụ (vd. "EXIF remover"). */
  navLabel: string;
  h1: string;
  /** Đoạn mở đầu dưới H1 (văn bản thuần). */
  lead: string;
  sections: ArticleSection[];
  faqHeading: string;
  faq: { q: string; a: string }[];
  related: GuideSlug[];
  /** Ngày sửa gần nhất (YYYY-MM-DD). */
  updated: string;
}

/** Trang thông tin: Giới thiệu, Chính sách quyền riêng tư. */
export interface InfoPage {
  metaTitle: string;
  description: string;
  /** Nhãn ngắn cho liên kết ở chân trang. */
  navLabel: string;
  title: string;
  lead: string;
  sections: ArticleSection[];
  updated: string;
}

/**
 * Nội dung riêng của trang chủ (ngôn ngữ chính). Phần ngắn (`hero`, `sources`, `start`, `nav`) bắt buộc;
 * phần giáo dục dài (`learn`), cam kết bảo mật (`security`) và hỏi đáp bổ sung (`faq`) có thể để trống —
 * khi đó trang chủ chỉ hiện các mục chung. Văn bản trong `paragraphs`, `text`, `faq[].a` hỗ trợ liên kết [chữ](slug).
 */
export interface HomeContent {
  /** Dòng phụ ngay dưới H1: các lý do "không phải lo" (trực tuyến, miễn phí, không đăng ký, không cài đặt). */
  reassure: string;
  /** Nút phụ ở đầu trang: dẫn tới danh sách công cụ. */
  ctaTools: string;
  /** Dải "đọc được metadata từ…" ngay dưới phần đầu trang + câu ghi chú không liên kết thương hiệu. */
  sources: { label: string; note: string };
  /** Mục "Bắt đầu với tệp bạn đang có". */
  start: { title: string; lead: string; badge: string; open: string };
  /** Nhóm menu theo việc cần làm (thanh dọc bên trái). */
  nav: { remove: string; check: string; learn: string; viewer: string; aiCheck: string; whatIs: string };
  learn?: {
    what: { title: string; paragraphs: string[]; types: { name: string; text: string; example: string }[]; synonyms: string };
    why: { title: string; paragraphs: string[]; bullets: string[] };
    standards: { title: string; lead: string; items: { name: string; text: string }[] };
  };
  security?: { title: string; lead: string; items: { title: string; text: string }[] };
  /** Câu hỏi bổ sung, nối sau hỏi đáp chung của trang chủ (được phép liên kết tới trang công cụ). */
  faq?: { q: string; a: string }[];
}

/**
 * Phần trang chủ hiển thị được ở mọi ngôn ngữ: ngôn ngữ chính lấy từ `pages.home`, ngôn ngữ còn lại từ
 * src/content/home/<mã>.ts (không có mục/menu dẫn tới trang công cụ vì các trang đó chưa có ở ngôn ngữ ấy).
 */
export type HomeBasics = Pick<HomeContent, 'reassure' | 'sources' | 'learn' | 'security' | 'faq'>;

export interface Pages {
  home: HomeContent;
  /** Nhãn giao diện dùng trên các trang này. */
  labels: {
    /** Tiêu đề nhóm trang công cụ (chân trang, cuối trang công cụ). */
    tools: string;
    /** Tiêu đề khối "công cụ liên quan" trên trang bài viết. */
    relatedTools: string;
    /** Tiêu đề + đoạn dẫn của khối trang công cụ trên trang chủ. */
    homeTitle: string;
    homeLead: string;
    /** Tiêu đề khối bảng định dạng trên trang công cụ. */
    formats: string;
    /** Mục liên hệ trên trang Giới thiệu (chỉ hiện khi SITE.contactEmail có giá trị): tiêu đề + câu dẫn trước địa chỉ email. */
    contact: string;
    contactText: string;
    /** "Cập nhật {date}". */
    updated: string;
  };
  tools: Record<ToolSlug, ToolPage>;
  info: Record<InfoSlug, InfoPage>;
}
