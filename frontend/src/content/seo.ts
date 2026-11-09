import type { IconName } from '../components/ui';
import type { LangCode } from '../i18n/languages';
import type { Messages } from '../i18n/locales/en';

/**
 * Phần nội dung trung lập ngôn ngữ (đường dẫn, biểu tượng, bảng kỹ thuật).
 * Văn bản hiển thị nằm trong src/i18n/locales/*.ts, bài viết chuyên sâu trong src/content/articles/*.ts.
 * Thay `origin` bằng tên miền thật trước khi triển khai (đồng bộ với public/robots.txt).
 */
export const SITE = {
  name: 'AI Label Remover',
  /** Tên gọi khác = hai từ khóa chính còn lại (schema WebSite.alternateName). */
  alternateNames: ['AI Tag Cleaner', 'No AI Tag'],
  origin: 'https://ailabelremover.work',
  /**
   * Ngày cập nhật mặc định của bài hướng dẫn (sitemap, schema Article) khi bài không khai báo `updated` riêng.
   * Cũng dùng làm ngày đăng (datePublished) của mọi bài — thay bằng ngày đăng thật nếu có.
   */
  contentUpdated: '2026-10-19',
  /** Ngày cập nhật trang chủ (lastmod trong sitemap). */
  homeUpdated: '2026-10-23',
  /** Email liên hệ công khai (trang Giới thiệu, schema Organization). Để trống → ẩn mục liên hệ. */
  contactEmail: '',
};

/** Ngôn ngữ có bản dịch đầy đủ của bài viết mở rộng (src/content/articles/<mã>.ts). */
export const ARTICLE_LANGS: readonly LangCode[] = ['en', 'vi', 'es', 'pt-BR', 'de', 'fr', 'ja', 'id'];

/**
 * Ngôn ngữ thị trường chính: có trang công cụ theo từng nhu cầu và trang Giới thiệu / Quyền riêng tư
 * (src/content/pages/<mã>.ts) — trang chủ đủ mọi mục. Ngôn ngữ khác dùng nội dung trang chủ rút gọn
 * (src/content/home/<mã>.ts) và bản tiếng Anh của trang Giới thiệu / Quyền riêng tư (liên kết ở chân trang).
 */
export const PRIORITY_LANGS: readonly LangCode[] = [...ARTICLE_LANGS, 'it', 'ko', 'zh-CN', 'zh-TW', 'ru', 'tr', 'pl', 'nl'];

/**
 * Trang công cụ theo nhu cầu tìm kiếm: mỗi trang nhắm một cụm từ khóa, có công cụ dùng ngay ở đầu trang.
 * Đường dẫn: /{lang?}/{slug}/. Slug tiếng Anh dùng chung cho mọi ngôn ngữ (như slug bài viết).
 */
export const TOOL_SLUGS = [
  'ai-tag-cleaner',
  'no-ai-tag',
  'remove-exif-data',
  'remove-c2pa-content-credentials',
  'heic-metadata-remover',
  'png-metadata-remover',
] as const;
export type ToolSlug = (typeof TOOL_SLUGS)[number];

/** Định dạng nổi bật trên từng trang công cụ (hàng tương ứng trong FORMAT_ROWS). */
export const TOOL_FORMATS: Record<ToolSlug, string[]> = {
  'ai-tag-cleaner': ['PNG', 'JPEG / JPG', 'WebP'],
  'no-ai-tag': ['JPEG / JPG', 'HEIC / HEIF', 'PNG'],
  'remove-exif-data': ['JPEG / JPG', 'HEIC / HEIF', 'WebP'],
  'remove-c2pa-content-credentials': ['JPEG / JPG', 'PNG', 'HEIC / HEIF'],
  'heic-metadata-remover': ['HEIC / HEIF', 'AVIF'],
  'png-metadata-remover': ['PNG'],
};

/**
 * Trang công cụ liên quan tới từng bài viết (liên kết nội bộ bài viết → trang công cụ, hiện trên trang bài ở các
 * ngôn ngữ có trang công cụ). Thứ tự = mức liên quan.
 */
export const GUIDE_TOOLS: Record<GuideSlug, readonly ToolSlug[]> = {
  'best-ai-metadata-removers-2026': ['ai-tag-cleaner', 'no-ai-tag'],
  'how-to-get-no-ai-tag': ['no-ai-tag', 'ai-tag-cleaner'],
  'made-with-ai-label': ['no-ai-tag', 'remove-c2pa-content-credentials'],
  'remove-stable-diffusion-comfyui-metadata': ['png-metadata-remover', 'ai-tag-cleaner'],
  'hide-midjourney-dalle-prompts': ['ai-tag-cleaner', 'png-metadata-remover'],
  'what-is-c2pa-content-credentials': ['remove-c2pa-content-credentials'],
  'remove-gps-location-from-photos': ['remove-exif-data', 'heic-metadata-remover'],
  'batch-remove-metadata': ['remove-exif-data'],
  'chatgpt-gemini-image-metadata': ['ai-tag-cleaner', 'remove-c2pa-content-credentials'],
  'remove-metadata-windows-mac': ['remove-exif-data', 'heic-metadata-remover'],
  'image-metadata-viewer-online': ['remove-exif-data', 'ai-tag-cleaner'],
  'iptc-digitalsourcetype-ai': ['ai-tag-cleaner'],
  'remove-metadata-without-losing-quality': ['remove-exif-data', 'png-metadata-remover'],
  'how-to-check-if-image-is-ai-generated': ['ai-tag-cleaner'],
  'which-platforms-label-ai-images': ['no-ai-tag', 'remove-c2pa-content-credentials'],
  'what-metadata-ai-image-generators-add': ['ai-tag-cleaner', 'png-metadata-remover'],
  'synthid-invisible-ai-watermarks': ['ai-tag-cleaner'],
  'turn-off-content-credentials-photoshop-lightroom': ['remove-c2pa-content-credentials', 'no-ai-tag'],
  'which-platforms-strip-photo-metadata': ['remove-exif-data'],
  'view-remove-metadata-iphone-android': ['heic-metadata-remover', 'remove-exif-data'],
  'what-is-exif-data': ['remove-exif-data'],
};

/** Trang thông tin (độ tin cậy E-E-A-T): Giới thiệu và Chính sách quyền riêng tư. Đường dẫn: /{lang?}/{slug}/. */
export const INFO_SLUGS = ['about', 'privacy'] as const;
export type InfoSlug = (typeof INFO_SLUGS)[number];

/**
 * Slug trang công cụ đã gộp vào trang khác → trang thay thế. Máy chủ trả 301 (public/_redirects);
 * router phía client cũng hiểu slug cũ để liên kết đã lưu vẫn mở đúng trang.
 */
export const LEGACY_TOOL_SLUGS: Record<string, ToolSlug> = { 'remove-ai-metadata': 'ai-tag-cleaner' };

export const isToolSlug = (s: string): s is ToolSlug => (TOOL_SLUGS as readonly string[]).includes(s);
export const isInfoSlug = (s: string): s is InfoSlug => (INFO_SLUGS as readonly string[]).includes(s);
export const hasPages = (lang: LangCode) => PRIORITY_LANGS.includes(lang);

/** Neo (anchor) các mục trên trang chủ — tiếng Anh trung lập, giống nhau ở mọi ngôn ngữ (như slug bài viết). */
/**
 * Bảng so sánh "Vì sao chọn…": mỗi hàng ứng với `seo.why.rows[i]`, ba cột là
 * [công cụ này, công cụ online thông thường, chụp màn hình / lưu lại].
 * "partial" = tùy công cụ/cách làm. Giữ trung thực: chụp màn hình cũng xóa hết metadata và miễn phí.
 */
export type Support = 'yes' | 'partial' | 'no';
export const WHY_ROWS: readonly (readonly [Support, Support, Support])[] = [
  ['yes', 'no', 'yes'], // ảnh không rời khỏi máy
  ['yes', 'partial', 'no'], // giữ nguyên chất lượng
  ['yes', 'partial', 'yes'], // xóa C2PA, nhãn AI, prompt
  ['yes', 'partial', 'partial'], // giữ hướng xoay, hồ sơ màu
  ['yes', 'partial', 'no'], // báo cáo trước/sau
  ['yes', 'partial', 'no'], // xử lý hàng loạt + ZIP
  ['yes', 'partial', 'yes'], // miễn phí, không đăng ký, không watermark
];

export const HOME_SECTIONS = {
  tool: 'tool',
  tools: 'tools',
  learn: 'what-is-metadata',
  how: 'how-it-works',
  security: 'security',
  features: 'features',
  why: 'why-choose-us',
  formats: 'formats',
  guides: 'guides',
  faq: 'faq',
  disclaimer: 'disclaimer',
} as const;

/** Neo cũ (tiếng Việt) → neo mới, để các liên kết đã chia sẻ trước đây vẫn cuộn đúng mục. */
export const LEGACY_ANCHORS: Record<string, string> = {
  'cong-cu': HOME_SECTIONS.tool,
  'cach-hoat-dong': HOME_SECTIONS.how,
  'tinh-nang': HOME_SECTIONS.features,
  'dinh-dang': HOME_SECTIONS.formats,
  'huong-dan': HOME_SECTIONS.guides,
  'ket-qua': 'results',
};

export const NAV: { section: keyof typeof HOME_SECTIONS; label: keyof Messages['header']['nav'] }[] = [
  { section: 'tool', label: 'tool' },
  { section: 'how', label: 'how' },
  { section: 'formats', label: 'formats' },
  { section: 'guides', label: 'guides' },
  { section: 'faq', label: 'faq' },
];

/** Công cụ được đặt nổi bật nhất trong mục "Bắt đầu với tệp bạn đang có". */
export const FEATURED_TOOL: ToolSlug = 'ai-tag-cleaner';

/**
 * "Bàn làm việc" ở đầu trang chủ: mỗi thẻ tệp dẫn tới trang công cụ hợp với định dạng đó
 * (null → cuộn tới bảng định dạng). Ngôn ngữ chưa có trang công cụ thì mọi thẻ đều cuộn tới bảng định dạng.
 */
export const HERO_FILES: { ext: string; tool: ToolSlug | null }[] = [
  { ext: 'JPG', tool: 'remove-exif-data' },
  { ext: 'PNG', tool: 'png-metadata-remover' },
  { ext: 'HEIC', tool: 'heic-metadata-remover' },
  { ext: 'WebP', tool: null },
  { ext: 'AVIF', tool: 'heic-metadata-remover' },
  { ext: 'GIF', tool: null },
];

/** Nguồn ảnh mà công cụ đọc được metadata (dải ngay dưới phần đầu trang) — chỉ là tên, không phải logo. */
export const IMAGE_SOURCES = ['ChatGPT', 'Gemini', 'Midjourney', 'Stable Diffusion', 'ComfyUI', 'Adobe Firefly', 'Photoshop', 'iPhone', 'Android'];

/** Bài viết gắn với nhóm menu "Xem & kiểm tra". */
export const CHECK_GUIDES = { viewer: 'image-metadata-viewer-online', aiCheck: 'how-to-check-if-image-is-ai-generated' } as const satisfies Record<string, GuideSlug>;

export const TRUST_ICONS: Record<keyof Messages['hero']['trust'], IconName> = {
  noUpload: 'lock',
  lossless: 'photo',
  batch: 'bolt',
  free: 'shield',
};

/**
 * Bài viết nền tảng: có ở cả 32 ngôn ngữ. Tiêu đề + tóm tắt nằm trong `seo.guides.items` của tệp ngôn ngữ,
 * theo đúng thứ tự mảng này.
 */
export const BASE_GUIDE_SLUGS = [
  'made-with-ai-label',
  'remove-stable-diffusion-comfyui-metadata',
  'hide-midjourney-dalle-prompts',
  'what-is-c2pa-content-credentials',
  'remove-gps-location-from-photos',
  'batch-remove-metadata',
] as const;

/**
 * Bài viết mở rộng: chỉ có ở một số ngôn ngữ (xem GUIDE_LANGS). Tiêu đề, tóm tắt và nội dung nằm trong
 * src/content/articles/<mã>.ts. Đặt bài mới nhất lên đầu.
 */
export const EXTRA_GUIDE_SLUGS = [
  'best-ai-metadata-removers-2026',
  'how-to-get-no-ai-tag',
  'chatgpt-gemini-image-metadata',
  'remove-metadata-windows-mac',
  'image-metadata-viewer-online',
  'iptc-digitalsourcetype-ai',
  'remove-metadata-without-losing-quality',
  'how-to-check-if-image-is-ai-generated',
  'which-platforms-label-ai-images',
  'what-metadata-ai-image-generators-add',
  'synthid-invisible-ai-watermarks',
  'turn-off-content-credentials-photoshop-lightroom',
  'which-platforms-strip-photo-metadata',
  'view-remove-metadata-iphone-android',
  'what-is-exif-data',
] as const;

/** Mọi bài viết, theo thứ tự hiển thị (mới nhất trước). Slug tiếng Anh dùng chung cho mọi ngôn ngữ. */
export const GUIDE_SLUGS = [...EXTRA_GUIDE_SLUGS, ...BASE_GUIDE_SLUGS] as const;

export type GuideSlug = (typeof GUIDE_SLUGS)[number];
export type ExtraGuideSlug = (typeof EXTRA_GUIDE_SLUGS)[number];

/**
 * Ngôn ngữ có bài viết mở rộng — phải khớp với các tệp src/content/articles/<mã>.ts (có test kiểm tra).
 * Dịch thêm một bài sang ngôn ngữ mới: thêm bài vào tệp ngôn ngữ đó rồi thêm mã ngôn ngữ vào đây.
 */
export const GUIDE_LANGS: Record<ExtraGuideSlug, readonly LangCode[]> = {
  'best-ai-metadata-removers-2026': ARTICLE_LANGS,
  'how-to-get-no-ai-tag': ARTICLE_LANGS,
  'chatgpt-gemini-image-metadata': ARTICLE_LANGS,
  'remove-metadata-windows-mac': ARTICLE_LANGS,
  'image-metadata-viewer-online': PRIORITY_LANGS,
  'iptc-digitalsourcetype-ai': ARTICLE_LANGS,
  'remove-metadata-without-losing-quality': ARTICLE_LANGS,
  'how-to-check-if-image-is-ai-generated': PRIORITY_LANGS,
  'which-platforms-label-ai-images': ARTICLE_LANGS,
  'what-metadata-ai-image-generators-add': ARTICLE_LANGS,
  'synthid-invisible-ai-watermarks': ARTICLE_LANGS,
  'turn-off-content-credentials-photoshop-lightroom': ARTICLE_LANGS,
  'which-platforms-strip-photo-metadata': ARTICLE_LANGS,
  'view-remove-metadata-iphone-android': ARTICLE_LANGS,
  'what-is-exif-data': ARTICLE_LANGS,
};

/** Thẻ chủ đề (tag đỏ) trên thẻ bài viết — dùng tên riêng / thuật ngữ kỹ thuật nên giống nhau ở mọi ngôn ngữ. */
export const GUIDE_TAGS: Record<GuideSlug, string> = {
  'best-ai-metadata-removers-2026': 'Top Tools · 2026',
  'how-to-get-no-ai-tag': 'No AI Tag · AI Tag Cleaner',
  'made-with-ai-label': 'Facebook · Instagram',
  'remove-stable-diffusion-comfyui-metadata': 'Stable Diffusion · ComfyUI',
  'hide-midjourney-dalle-prompts': 'Midjourney · DALL·E',
  'what-is-c2pa-content-credentials': 'C2PA',
  'remove-gps-location-from-photos': 'GPS · EXIF',
  'batch-remove-metadata': 'JPG · PNG · HEIC · ZIP',
  'how-to-check-if-image-is-ai-generated': 'C2PA · IPTC · AI check',
  'which-platforms-label-ai-images': 'Meta · TikTok · YouTube',
  'what-metadata-ai-image-generators-add': 'DALL·E · Firefly · Gemini',
  'synthid-invisible-ai-watermarks': 'SynthID · Watermark',
  'turn-off-content-credentials-photoshop-lightroom': 'Photoshop · Lightroom',
  'which-platforms-strip-photo-metadata': 'Instagram · WhatsApp · X',
  'view-remove-metadata-iphone-android': 'iPhone · Android',
  'what-is-exif-data': 'EXIF',
  'chatgpt-gemini-image-metadata': 'ChatGPT · Gemini · Nano Banana',
  'remove-metadata-windows-mac': 'Windows · macOS · ExifTool',
  'image-metadata-viewer-online': 'EXIF · XMP · C2PA viewer',
  'iptc-digitalsourcetype-ai': 'IPTC · DigitalSourceType',
  'remove-metadata-without-losing-quality': 'Lossless · JPEG · PNG · HEIC',
};

export const isGuideSlug = (s: string): s is GuideSlug => (GUIDE_SLUGS as readonly string[]).includes(s);

/** Vị trí của bài nền tảng trong `seo.guides.items` (−1 nếu là bài mở rộng). */
export const baseGuideIndex = (slug: GuideSlug) => (BASE_GUIDE_SLUGS as readonly string[]).indexOf(slug);

export function isGuideAvailable(slug: GuideSlug, lang: LangCode): boolean {
  return baseGuideIndex(slug) >= 0 || GUIDE_LANGS[slug as ExtraGuideSlug].includes(lang);
}

/** Bài viết có ở ngôn ngữ `lang`, theo thứ tự hiển thị. */
export const availableGuides = (lang: LangCode): GuideSlug[] => GUIDE_SLUGS.filter((s) => isGuideAvailable(s, lang));

/** Số bài mỗi trang ở trang tổng hợp /guides/ và số bài mới nhất hiển thị trên trang chủ. */
export const GUIDES_PER_PAGE = 6;
export const HOME_GUIDE_COUNT = 9;

export const guidePageCount = (total: number, perPage = GUIDES_PER_PAGE) => Math.max(1, Math.ceil(total / perPage));

/** Các bài thuộc trang `page` (đánh số từ 1) của trang tổng hợp. */
export function guidesOnPage<T>(page: number, items: readonly T[], perPage = GUIDES_PER_PAGE): T[] {
  return items.slice((page - 1) * perPage, page * perPage);
}

/** Bảng kỹ thuật (tên segment/chunk/box) — giữ nguyên ở mọi ngôn ngữ. */
export const FORMAT_ROWS = [
  { format: 'JPEG / JPG', structure: 'Marker segments', removed: 'APP1 (EXIF, XMP), APP11 (C2PA/JUMBF), APP13 (IPTC), COM, MPF, JFIF/JFXX thumbnail', kept: 'SOF, DQT/DHT, SOS → EOI, APP0, APP2 ICC, APP14, Orientation' },
  { format: 'PNG', structure: 'Chunks', removed: 'tEXt, zTXt, iTXt (prompt, workflow, XMP), eXIf, caBX (C2PA), tIME, dSIG', kept: 'IHDR, PLTE, IDAT, tRNS, gAMA, cHRM, sRGB, iCCP, acTL/fcTL/fdAT, Orientation' },
  { format: 'WebP', structure: 'RIFF chunks', removed: 'EXIF, XMP, C2PA', kept: 'VP8 / VP8L / ALPH, ICCP, ANIM / ANMF, Orientation' },
  { format: 'GIF', structure: 'Block sequence', removed: 'XMP Application Extension, Comment Extension', kept: 'Image Descriptor, LZW, NETSCAPE2.0, ICCRGBG1' },
  { format: 'HEIC / HEIF', structure: 'ISOBMFF boxes', removed: 'uuid (C2PA, XMP), Exif / XMP items, moov udta + timestamps', kept: 'ftyp, mdat (HEVC), ispe, irot/imir, colr' },
  { format: 'AVIF', structure: 'ISOBMFF boxes', removed: 'uuid (C2PA, XMP), Exif / XMP items, moov udta + timestamps', kept: 'ftyp, mdat (AV1), ispe, irot/imir, colr' },
];
