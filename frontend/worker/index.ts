/**
 * Cloudflare Worker: chỉ chạy cho trang gốc "/" (xem run_worker_first trong wrangler.jsonc), mọi đường dẫn khác
 * được phục vụ thẳng từ thư mục dist/ tĩnh. Người mới vào "/" được chuyển ngay (302) sang ngôn ngữ phù hợp
 * — theo lựa chọn đã lưu, ngôn ngữ trình duyệt và quốc gia (IP) — trước khi trang tải, nên không bị nháy tiếng Anh.
 */
import { detectLanguage } from '../src/i18n/detect';
import { DEFAULT_LANG } from '../src/i18n/languages';

interface Env {
  ASSETS: { fetch(request: Request): Promise<Response> };
}

/**
 * Bot tìm kiếm / xem trước liên kết luôn nhận trang gốc tiếng Anh (x-default) để lập chỉ mục ổn định.
 * "google" bắt cả các trình thu thập không chứa chữ "bot" như Google-InspectionTool (Kiểm tra URL, Rich Results Test)
 * và GoogleOther; "chrome-lighthouse" / "pagespeed" cho công cụ đo tốc độ.
 */
const BOT = /bot|crawl|spider|slurp|google|inspectiontool|facebookexternalhit|embedly|preview|lighthouse|pagespeed|validator/i;

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    const isPage = request.method === 'GET' || request.method === 'HEAD';

    if (isPage && url.pathname === '/' && !BOT.test(request.headers.get('user-agent') ?? '')) {
      const lang = detectLanguage({
        cookie: request.headers.get('cookie'),
        acceptLanguage: request.headers.get('accept-language'),
        country: (request as Request & { cf?: { country?: string } }).cf?.country ?? request.headers.get('cf-ipcountry'),
      });
      if (lang !== DEFAULT_LANG) {
        return new Response(null, {
          status: 302,
          headers: {
            Location: `/${lang.toLowerCase()}/${url.search}${url.hash}`,
            'Cache-Control': 'private, no-store',
            Vary: 'Accept-Language, Cookie',
          },
        });
      }
    }
    return env.ASSETS.fetch(request);
  },
};
