/**
 * Dấu thương hiệu AI Label Remover (viewBox 0 0 32 32) — nguồn duy nhất cho logo trên header / chân trang
 * (Mark trong Shell.tsx), ảnh OG (src/seo/og.tsx) và favicon (public/favicon.svg — chép đúng phần thân này).
 *
 * Ý tưởng: thẻ nhãn trắng mang ngôi sao "AI", nghiêng như đang được gỡ ra, kèm huy hiệu dấu trừ màu vàng
 * (= gỡ bỏ), trên ô vuông bo tròn màu cobalt. Không dùng gradient/id để chèn được nhiều lần trên một trang
 * và vẫn rõ ở cỡ 16px.
 */
export const MARK_SVG_BODY = [
  // nền: ô vuông bo tròn cobalt + bóng đậm góc dưới phải + vệt sáng nửa trên
  '<rect width="32" height="32" rx="9" fill="#007595"/>',
  '<path d="M32 13v10a9 9 0 0 1-9 9H11c10-1.5 18.5-7.5 21-19z" fill="#00546b" opacity=".6"/>',
  '<path d="M9 0h14a9 9 0 0 1 9 9v1.5C24 5.5 11.5 4.5 0 10.5V9a9 9 0 0 1 9-9z" fill="#fff" opacity=".13"/>',
  // thẻ nhãn nghiêng: thân trắng, lỗ xỏ dây, sợi dây, ngôi sao AI
  '<g transform="translate(13.9 14.6) rotate(-32) scale(.84) translate(-15.5 -16.5)">',
  '<path d="M15.5 5.2 22.6 11.8V24a2.4 2.4 0 0 1-2.4 2.4h-9.4A2.4 2.4 0 0 1 8.4 24V11.8z" fill="#fff" stroke="#fff" stroke-width="1.2" stroke-linejoin="round"/>',
  '<circle cx="15.5" cy="11.4" r="1.75" fill="#007595"/>',
  '<path d="M15.5 11.4C14.2 7.6 11.6 5.6 7.6 5.9" fill="none" stroke="#fff" stroke-width="1.3" stroke-linecap="round" opacity=".85"/>',
  '<path d="M15.5 14.6q.62 3.68 4.3 4.3-3.68.62-4.3 4.3-.62-3.68-4.3-4.3 3.68-.62 4.3-4.3z" fill="#007595"/>',
  '</g>',
  // huy hiệu "gỡ bỏ": tròn vàng, viền cobalt tách khỏi thẻ, dấu trừ đậm
  '<circle cx="24.9" cy="24.9" r="4.9" fill="#f5c842" stroke="#007595" stroke-width="1.6"/>',
  '<rect x="22.5" y="24.15" width="4.8" height="1.5" rx=".75" fill="#0b2a33"/>',
].join('');

/** Tệp SVG hoàn chỉnh (favicon, xuất PNG). */
export const MARK_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">${MARK_SVG_BODY}</svg>`;
