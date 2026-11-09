# SEO — AI Label Remover

## 1. Đã triển khai

| Hạng mục | Chi tiết | Vị trí |
| --- | --- | --- |
| **HTML tĩnh (prerender)** | 288 trang (bản build 2026-10-19): mỗi ngôn ngữ có trang chủ, trang tổng hợp hướng dẫn và các bài viết có ở ngôn ngữ đó (en/vi: 19 bài, ngôn ngữ khác: 6 bài). Nội dung, `<title>`, description, canonical, 33 `hreflang`, Open Graph và JSON-LD có sẵn trong HTML — crawler không cần chạy JavaScript. | `src/entry-server.tsx`, `scripts/prerender.mjs` |
| **URL theo ngôn ngữ** | `/` (tiếng Anh, x-default), `/vi/`, `/ja/`, `/pt-br/`…; hướng dẫn tại `/{lang}/guides/{slug}/`. Liên kết cũ `?lang=xx` tự chuyển hướng. | `src/router.ts` |
| **Trang riêng cho mỗi hướng dẫn** | Breadcrumb, H1, bài viết, công cụ nhúng sẵn, hỏi đáp riêng, 5 bài liên quan. Schema `Article` + `BreadcrumbList` (+ `FAQPage`). | `src/components/seo/GuidePage.tsx` |
| **Nội dung chuyên sâu** | Ngôn ngữ trong `ARTICLE_LANGS`: 21 bài, ~700–1.100 từ/bài + 4 câu hỏi đáp, `metaTitle` và meta description riêng, bài liên quan theo cụm chủ đề. Mọi ngôn ngữ còn lại có đủ 6 bài nền tảng dạng đầy đủ (4–8 mục + 4 câu hỏi đáp, `metaTitle` ≤ 62, description ≤ 160 đơn vị bề ngang); 16 ngôn ngữ phụ (fi, ar, he, hu, sk, cs, da, uk, el, ro, hr, sv, th, hi, ca, pt-PT) bổ sung ngày 2026-11-09. Liên kết trong bài ở các ngôn ngữ này chỉ trỏ tới 6 bài nền tảng (chưa có trang công cụ). | `src/content/articles/<mã>.ts` |
| **Liên kết nội bộ** | Trang chủ → 6 bài; mỗi bài → trang chủ, mục hướng dẫn và 5 bài còn lại; footer → 6 bài. Đã bỏ các thẻ từ khóa không có giá trị xếp hạng. | `SeoSections.tsx`, `SiteChrome.tsx` |
| **Liên kết trong thân bài** | Cú pháp `[chữ hiển thị](slug-bai-viet)` trong đoạn văn, gạch đầu dòng và câu trả lời hỏi đáp (không dùng trong tiêu đề, tóm tắt, mô tả). Bài chưa có ở ngôn ngữ hiện tại hiện thành chữ thường; JSON-LD dùng văn bản thuần. Test `src/content/articles.test.ts` báo lỗi slug sai, tự liên kết hoặc trỏ tới bài chưa dịch. Mỗi bài nên có 2–5 liên kết, anchor text mô tả đúng nội dung bài đích. | `src/content/richText.ts`, `components/seo/RichText.tsx` |
| **sitemap.xml** | Sinh tự động khi build, mỗi URL kèm `xhtml:link` hreflang. | `dist/sitemap.xml` |
| Trang chủ | `FAQPage` + `HowTo`, schema `WebApplication` tĩnh. | `StructuredData.tsx`, `index.html` |

## 2. Trước khi deploy

1. ~~Đổi `SITE.origin`~~ — đã đặt `https://ailabelremover.work` (`src/content/seo.ts`, `public/robots.txt`, `wrangler.jsonc` → `routes`).
2. Máy chủ phải trả về `dist/<đường dẫn>/index.html` cho mỗi URL (Netlify, Vercel, Cloudflare Pages làm sẵn). Với Nginx:
   ```nginx
   location / { try_files $uri $uri/ /index.html; }
   ```
3. Gửi `https://<tên-miền>/sitemap.xml` lên Google Search Console và Bing Webmaster Tools.
4. Kiểm tra vài trang bằng Rich Results Test (Article, BreadcrumbList, FAQPage).

## 3. Bản đồ từ khóa → trang

**Ba từ khóa chính** (tên miền `ailabelremover.work`):

| Từ khóa | Trang | Vị trí từ khóa |
| --- | --- | --- |
| **AI Label Remover** | `/` (trang chủ, mọi ngôn ngữ) | Tên thương hiệu (`SITE.name`), đầu `<title>` và H1 (`hero.kicker`) ở toàn bộ 32 ngôn ngữ |
| **AI Tag Cleaner** | `/ai-tag-cleaner/` | `metaTitle`, H1, description; `WebSite.alternateName`. Đã gộp trang cũ `/remove-ai-metadata/` vào đây (trùng phạm vi, tranh từ khóa): 301 trong `public/_redirects`, alias `LEGACY_TOOL_SLUGS` cho router |
| **No AI Tag** | `/no-ai-tag/` | `metaTitle`, H1, description; `WebSite.alternateName` |

Hai trang công cụ mới liên kết chéo với nhau và được gắn vào các bài `made-with-ai-label`, `which-platforms-label-ai-images`,
`iptc-digitalsourcetype-ai`, `what-metadata-ai-image-generators-add`, `turn-off-content-credentials-photoshop-lightroom` (`GUIDE_TOOLS`).

**Bài viết:**

| Trang (`/guides/…`) | Nhóm truy vấn mục tiêu |
| --- | --- |
| `best-ai-metadata-removers-2026` | best metadata remover 2026, top AI metadata removers, AI Label Remover, AI Tag Cleaner, No AI Tag |
| `how-to-get-no-ai-tag` | how to get no AI tag, No AI Tag on photos, AI Tag Cleaner, remove AI info tag Instagram, false AI tag |
| `made-with-ai-label` | remove “Made with AI” / “AI info” label, xóa nhãn Made with AI, false positive |
| `remove-stable-diffusion-comfyui-metadata` | remove Stable Diffusion metadata PNG, remove ComfyUI workflow, strip generation data |
| `hide-midjourney-dalle-prompts` | hide Midjourney prompt, giấu prompt Midjourney, remove AI prompt from image |
| `what-is-c2pa-content-credentials` | C2PA remover, remove Content Credentials, what is C2PA |
| `remove-gps-location-from-photos` | remove GPS from photo, xóa EXIF, clean metadata online no upload |
| `batch-remove-metadata` | batch remove AI metadata, lossless metadata cleaner, free AI metadata cleaner |
| `chatgpt-gemini-image-metadata` | ChatGPT image metadata, Gemini / Nano Banana image C2PA, does ChatGPT add metadata, SynthID Gemini |
| `remove-metadata-windows-mac` | remove metadata from photos Windows 11 / Mac, remove EXIF Preview, exiftool remove all metadata, xóa metadata ảnh trên máy tính |
| `image-metadata-viewer-online` | image metadata viewer online, EXIF viewer no upload, check photo metadata, xem metadata ảnh online, xem prompt ảnh AI |
| `iptc-digitalsourcetype-ai` | IPTC DigitalSourceType, trainedAlgorithmicMedia, compositeWithTrainedAlgorithmicMedia meaning |
| `remove-metadata-without-losing-quality` | remove metadata without losing quality, does removing EXIF reduce quality, lossless EXIF removal, xóa metadata không giảm chất lượng |

Mỗi bài có `metaTitle` (≤ 60 ký tự, chứa từ khóa chính — thẻ `<title>`), H1 dài hơn dạng câu hỏi/cụm từ khóa phụ,
`description` ≈ 150 ký tự, 4 câu hỏi đáp (FAQPage) và `related` — 3 bài cùng cụm chủ đề để liên kết nội bộ:
**Nhãn AI** (made-with-ai-label, which-platforms-label-ai-images, iptc-digitalsourcetype-ai, what-is-c2pa…, photoshop-lightroom),
**Công cụ tạo ảnh AI** (chatgpt-gemini…, hide-midjourney…, what-metadata-ai…, stable-diffusion…, synthid…, how-to-check…),
**Quyền riêng tư** (gps, which-platforms-strip…, iphone-android, windows-mac, what-is-exif, viewer, without-losing-quality, batch).

Lưu ý: chưa có số liệu lượng tìm kiếm thật — xếp ưu tiên theo ý định tìm kiếm và đối thủ. Kiểm chứng bằng Search Console
(hoặc Google Keyword Planner / Ahrefs) sau 4–8 tuần và điều chỉnh `metaTitle` / `description`.

Định hướng nội dung: quyền riêng tư, bảo vệ prompt và sửa nhãn AI gắn nhầm; luôn nêu rõ giới hạn
(nền tảng có tín hiệu khác, SynthID, Durable Content Credentials) và nghĩa vụ công khai ảnh do AI tạo.

## 4. Việc nên làm tiếp

1. **Viết bài chuyên sâu cho thị trường kế tiếp** (thêm `src/content/articles/<mã>.ts` — trang tự dùng khi có tệp).
   Ưu tiên theo dữ liệu Search Console; nhờ người bản ngữ biên tập thay vì dịch máy.
2. **Ảnh minh họa thật** trong bài (ảnh chụp báo cáo trước/sau) và **ảnh OG 1200×630** cho từng trang.
3. **Backlink**: Product Hunt, cộng đồng AI art / nhiếp ảnh, bài khách trên blog chuyên ngành.
4. **Theo dõi** truy vấn và CTR trong Search Console; viết lại title/description cho trang có hiển thị cao nhưng ít click.
5. **Tự host font Inter** để bỏ request Google Fonts, cải thiện Core Web Vitals.
