# AI Label Remover — Frontend

Gỡ metadata AI (C2PA, EXIF, XMP, prompt Stable Diffusion / ComfyUI) khỏi ảnh **100% trên trình duyệt**,
không re-encode điểm ảnh. Triển khai theo tài liệu *System Architecture Design*.

```bash
npm install
npm run dev        # http://localhost:5173 (thử /vi/, /guides/what-is-c2pa-content-credentials/ …)
npm test           # unit test: Parsing Engine, chính sách xóa, bản dịch
npm run build      # typecheck + build client + build SSR + prerender 224 trang HTML tĩnh vào dist/
npm run preview    # xem bản build (HTML đã prerender) tại http://localhost:4173
```

**Định tuyến & prerender:** `src/router.ts` quản lý URL theo ngôn ngữ (`/`, `/vi/`, `/{lang}/guides/{slug}/`).
Khi build, `src/entry-server.tsx` render mọi trang thành HTML tĩnh (kèm `<head>` riêng) và `scripts/prerender.mjs`
ghi vào `dist/` cùng `sitemap.xml`; trình duyệt hydrate lên HTML có sẵn. Bài viết chuyên sâu cho trang hướng dẫn
nằm ở `src/content/articles/<mã-ngôn-ngữ>.ts` (hiện có `en`, `vi`). Chi tiết SEO: [SEO.md](./SEO.md).

Stack: React 19 + TypeScript + Vite · Tailwind CSS v4 · Zustand · react-dropzone · JSZip · Web Workers.

> Dự án này dùng **cùng phần lõi** với RemoveAI (`src/core`, `src/services`, `src/store`, `src/workers`, `src/i18n`,
> `src/router.ts`, `src/content`, `src/seo/head.ts`, `worker/`, `scripts/`) — toàn bộ 85 unit test giữ nguyên và đều qua.
> Chỉ **lớp giao diện** được thiết kế lại hoàn toàn (xem mục *Giao diện* bên dưới).

## Nội dung & thương hiệu

- Tên hiển thị: **AI Label Remover** (khái niệm "rửa/làm sạch" ảnh trong phòng tối) — đặt ở `SITE.name` (`src/content/seo.ts`),
  logo (`src/components/layout/Shell.tsx`), `index.html`, `public/site.webmanifest`, ảnh OG (`src/seo/og.tsx`).
- Toàn bộ văn bản giao diện, mục SEO, hỏi đáp và bài viết được viết lại, không dùng lại câu chữ của RemoveAI:
  `en.ts`, `vi.ts` viết mới; 30 ngôn ngữ còn lại dịch từ bản tiếng Anh mới. Bài viết dài (`src/content/articles/en.ts`,
  `vi.ts`) giữ nguyên chủ đề và đường dẫn (slug) nhưng tiêu đề, bố cục mục và câu chữ đều mới.
- Đường dẫn bài viết (slug) vẫn giống RemoveAI để không phải sửa router/test; đổi slug nếu muốn URL khác hẳn.

## Giao diện — "Light table / Cyanotype"

Ý tưởng: bàn soi phim của thợ ảnh + bản in cyanotype (xanh lam). Khác hẳn bản RemoveAI (SaaS tím/indigo, header ngang, căn giữa).

| | RemoveAI | AIMetadataCleaner |
| --- | --- | --- |
| Điều hướng | Header ngang dính trên cùng | Thanh dọc bên trái (desktop); thanh trên + menu cuộn ngang (mobile) |
| Mở đầu | Căn giữa, nền gradient | Tiêu đề lớn căn trái; cột cam kết bên trái, **dải phim âm bản** để thả ảnh bên phải |
| Kết quả | Danh sách thẻ, mở/đóng từng báo cáo | **Bàn soi hai cột**: hàng đợi ảnh (trái) + báo cáo theo tab (phải) |
| Metadata | Bảng + chip | Thêm **bản đồ dung lượng** theo tỉ lệ byte từng khối |
| Các mục | Tiêu đề giữa, lưới thẻ | Tiêu đề ở lề trái, nội dung bên phải; so sánh bằng ký hiệu ●◐○ |
| Định dạng | Bảng | Bộ chọn định dạng, khối bị xóa gạch ngang / khối giữ lại |
| Hướng dẫn | Băng chuyền thẻ | Một bài nổi bật + danh sách; trang bài có mục lục dính bên cạnh |
| Font | Inter · Sora · Playfair | Bricolage Grotesque (tiêu đề) · Be Vietnam Pro (giao diện) · JetBrains Mono (giá trị metadata) |
| Màu | indigo/violet | light-table `#EEF2F6`, cyanotype `#1D2FA8`, amber = riêng tư, rose = AI, xanh lá = đã sạch |

Token màu nằm ở `src/index.css` (`--color-paper`, `--color-cobalt`, …); chế độ tối chỉ ghi đè các biến trên `.dark`.

Cấu trúc giao diện mới:

- `src/components/layout/Shell.tsx` — logo, `SideRail`, `TopBar`, `SiteFooter`
- `src/components/home/Hero.tsx` — phần mở đầu: H1 theo từ khóa, 2 nút CTA, "bàn làm việc" (thẻ định dạng → trang công cụ) + khung thả ảnh
- `src/components/home/HomeSections.tsx` — dải nguồn ảnh, "Bắt đầu với tệp bạn đang có", Metadata là gì / Vì sao / Tiêu chuẩn, "Ảnh của bạn luôn an toàn" (nội dung ở `pages.home`, `src/content/pages/<mã>.ts`)
- `src/components/Dropzone.tsx` — dải phim thả ảnh
- `src/components/inspector/` — `Workspace` (thanh thao tác), `Queue` (hàng đợi), `Detail` (tab báo cáo), `RejectionList`
- `src/components/report/ReportPanels.tsx` — nội dung từng tab
- `src/components/seo/` — các mục trang chủ, trang bài, trang tổng hợp, ảnh minh họa SVG

## Luồng sử dụng

1. Tải ảnh lên → kiểm tra dung lượng / megapixel → **phân tích metadata** trong Web Worker.
2. Mỗi ảnh hiển thị báo cáo: *Chi tiết riêng tư* (vị trí, cá nhân, thời gian), *AI và nguồn gốc*,
   *Ảnh và tệp*, *Toàn bộ metadata và chi tiết file*, *Những gì trình duyệt này đã kiểm tra*.
3. Người dùng bấm **XÓA METADATA AI** → gỡ metadata → phân tích lại tệp đầu ra để xác minh → tải về / ZIP.

Bộ phân tích nằm ở `src/core/inspect/` (EXIF/GPS, XMP, IPTC, ICC, PNG text, C2PA, chữ ký công cụ AI).
Đề xuất SEO chi tiết xem [SEO.md](./SEO.md).

## Đa ngôn ngữ

- 32 ngôn ngữ, danh sách trong `src/i18n/languages.ts`; bộ chọn ngôn ngữ ở header.
- Mỗi ngôn ngữ là một tệp `src/i18n/locales/<mã>.ts` có kiểu `Messages` (suy ra từ `en.ts`) và được tải lười
  (lazy-load) thành chunk riêng. Ngôn ngữ lấy từ đường dẫn (`/vi/…`); riêng trang gốc `/` tự chuyển sang lựa chọn
  đã lưu hoặc ngôn ngữ trình duyệt (crawler không có lựa chọn đã lưu nên luôn thấy bản tiếng Anh).
- Lõi xử lý (`src/core`, `src/services`) không chứa văn bản hiển thị: chúng trả về `Msg { key, params }` và
  giao diện dịch bằng `tr()`. Khóa nằm trong nhánh `report` của `en.ts`.
- Thêm chuỗi mới: thêm vào `en.ts` → TypeScript và `locales.test.ts` sẽ chỉ ra mọi ngôn ngữ còn thiếu.
- Hỗ trợ RTL (العربية, עברית) bằng `dir="rtl"` và các lớp Tailwind logic (`ps-`, `pe-`, `start-`, `text-end`).

## Ánh xạ module thiết kế → mã nguồn

| Phân hệ | Module | File |
| --- | --- | --- |
| A. UI & Pre-Validation | Dropzone UI (dải phim) | `src/components/Dropzone.tsx` |
| | Quick Size Validator (≤ 25 MB) | `src/services/validator.ts` |
| | Byte-level Dimension Checker (≤ 40 MP, không dùng Image/Canvas) | `src/core/dimensions.ts` |
| | Nhận diện Magic Bytes | `src/core/formats.ts` |
| B. Concurrency Manager | Job Queue Store (chỉ giữ tham chiếu `File`) | `src/store/useJobStore.ts` |
| | Worker Pool (`navigator.hardwareConcurrency`) | `src/services/workerPool.ts`, `src/config/limits.ts` |
| | Memory Router (Transferable Objects) | `src/workers/parser.worker.ts` |
| C. Multi-format Parsing Engine | JPEG Stripper | `src/core/strippers/jpeg.ts` |
| | PNG / WebP Stripper | `src/core/strippers/png.ts`, `webp.ts` |
| | GIF Stripper | `src/core/strippers/gif.ts` |
| | ISOBMFF Stripper (HEIC/HEIF/AVIF) | `src/core/strippers/isobmff.ts` |
| D. Packaging | Blob Assembler (giữ MIME gốc) | `src/store/useJobStore.ts` |
| | Batch Exporter → `metadata-cleared.zip`, `revokeObjectURL` | `src/services/exporter.ts` |

## Ghi chú kỹ thuật

- **Chính sách cố định** (`RETENTION_POLICY`, kiểm thử trong `src/core/policy.test.ts`): xóa vị trí, ngày giờ &
  máy ảnh, người tạo/chỉnh sửa (kể cả ảnh xem trước), nhãn nguồn AI và Content Credentials; luôn giữ kích thước,
  hướng xoay, thông tin màu (ICC), dữ liệu ảnh và hoạt ảnh.
- **JPEG**: xóa APP1 (EXIF kèm thumbnail IFD1, XMP), APP2 MPF/FlashPix, APP11 (C2PA/JUMBF), APP13 (IPTC), COM,
  các APPn khác, thumbnail JFIF/JFXX và mọi dữ liệu sau EOI (ảnh phụ MPF, Motion Photo). Giữ APP0 JFIF, APP2 ICC,
  APP14 Adobe; thẻ Orientation được ghi lại trong một APP1 tối giản.
- **PNG / WebP**: hướng xoay trong eXIf / EXIF được ghi lại bằng chunk tối giản (PNG có CRC hợp lệ).
- **AVIF/HEIC động**: thời gian trong mvhd/tkhd/mdhd được ghi 0, `udta`/`meta` của `moov` bị vô hiệu hóa.
- **HEIC/AVIF**: box `iloc` lưu offset tuyệt đối, nên cắt byte sẽ làm hỏng ảnh. Stripper xử lý tại chỗ —
  đổi box `uuid` (C2PA) thành `free` và ghi đè item Exif/XMP bằng payload rỗng hợp lệ — kích thước file giữ nguyên.
- **GIF**: giữ `NETSCAPE2.0` (vòng lặp animation), xóa XMP Application Extension và Comment.
- Parser viết bằng TypeScript thuần (Uint8Array). Nếu sau này cần tăng tốc HEIC/AVIF có thể thay
  `src/core/strippers/isobmff.ts` bằng bản Rust → Wasm mà không đổi giao diện `stripMetadata()`.
