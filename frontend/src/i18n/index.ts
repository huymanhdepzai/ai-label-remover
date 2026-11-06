import { create } from '../store/create';
import type { Articles } from '../content/articles/types';
import type { HomeBasics, Pages } from '../content/pages/types';
import type { Msg } from '../types';
import { LANG_COOKIE } from './detect';
import { DEFAULT_LANG, findLanguage, LANGUAGES, matchLanguage, type LangCode } from './languages';
import en, { type Messages } from './locales/en';

export type { Messages };

/** Mỗi ngôn ngữ là một chunk riêng, chỉ tải khi cần (tiếng Anh nhúng sẵn làm dự phòng). */
const messageLoaders = import.meta.glob<{ default: Messages }>(['./locales/*.ts', '!./locales/en.ts', '!./locales/*.test.ts']);
/** Bài viết chuyên sâu cho trang hướng dẫn — chỉ có ở một số ngôn ngữ. */
const articleLoaders = import.meta.glob<{ default: Articles }>(['../content/articles/*.ts', '!../content/articles/types.ts']);
/** Trang công cụ + trang thông tin — chỉ có ở các ngôn ngữ thị trường chính (PRIORITY_LANGS). */
const pageLoaders = import.meta.glob<{ default: Pages }>(['../content/pages/*.ts', '!../content/pages/types.ts']);
/** Nội dung trang chủ cho các ngôn ngữ chưa có `pages` (ngôn ngữ chính đã có sẵn trong `pages.home`). */
const homeLoaders = import.meta.glob<{ default: HomeBasics }>(['../content/home/*.ts', '!../content/home/*.test.ts']);

const STORAGE_KEY = 'lang';

export interface LanguageBundle {
  lang: LangCode;
  m: Messages;
  articles: Articles | null;
  pages: Pages | null;
  /** Các mục trang chủ dùng chung (dải nguồn ảnh, phần giáo dục, bảo mật, hỏi đáp bổ sung). */
  home: HomeBasics | null;
}

export async function loadBundle(lang: LangCode): Promise<LanguageBundle> {
  const msgLoader = messageLoaders[`./locales/${lang}.ts`];
  const artLoader = articleLoaders[`../content/articles/${lang}.ts`];
  const pageLoader = pageLoaders[`../content/pages/${lang}.ts`];
  const homeLoader = homeLoaders[`../content/home/${lang}.ts`];
  const [m, articles, pages, home] = await Promise.all([
    lang === 'en' || !msgLoader ? en : msgLoader().then((mod) => mod.default),
    artLoader ? artLoader().then((mod) => mod.default) : null,
    pageLoader ? pageLoader().then((mod) => mod.default) : null,
    !pageLoader && homeLoader ? homeLoader().then((mod) => mod.default) : null,
  ]);
  return { lang, m, articles, pages, home: pages?.home ?? home };
}

interface I18nState extends LanguageBundle {}

export const useI18n = create<I18nState>()(() => ({ lang: DEFAULT_LANG, m: en, articles: null, pages: null, home: null }));

/** Hook lấy bộ thông điệp của ngôn ngữ hiện tại. */
export const useT = () => useI18n((s) => s.m);

let loadedLang: LangCode | null = null;

export async function setLanguage(lang: LangCode): Promise<void> {
  if (loadedLang === lang) return;
  const bundle = await loadBundle(lang);
  loadedLang = lang;
  useI18n.setState(bundle);
}

/** Ghi nhớ lựa chọn ngôn ngữ của người dùng (chỉ khi họ chủ động đổi). */
export function rememberLanguage(lang: LangCode): void {
  try {
    localStorage.setItem(STORAGE_KEY, lang);
  } catch {
    /* chế độ riêng tư / bị chặn lưu trữ */
  }
  // Cookie để máy chủ (worker/index.ts) biết lựa chọn này ngay khi người dùng vào lại trang gốc "/".
  document.cookie = `${LANG_COOKIE}=${encodeURIComponent(lang)}; path=/; max-age=31536000; SameSite=Lax; Secure`;
}

/** Ngôn ngữ ưu tiên cho trang gốc "/": lựa chọn đã lưu → ngôn ngữ trình duyệt → tiếng Anh. */
export function preferredLanguage(): LangCode {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored && findLanguage(stored)) return findLanguage(stored)!.code;
  } catch {
    /* bỏ qua */
  }
  for (const tag of navigator.languages ?? [navigator.language]) {
    const match = matchLanguage(tag);
    if (match) return match;
  }
  return DEFAULT_LANG;
}

/** Thay tham số {name} trong chuỗi. */
export function fmt(template: string, params?: Record<string, string | number>): string {
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (match, key: string) => (key in params ? String(params[key]) : match));
}

/** Dịch một thông điệp có khóa do bộ phân tích trả về (kể cả tham số lồng nhau). */
export function tr(m: Messages, msg: Msg): string {
  if (!msg.params) return m.report[msg.key];
  const params: Record<string, string | number> = {};
  for (const [k, v] of Object.entries(msg.params)) params[k] = typeof v === 'object' ? tr(m, v) : v;
  return fmt(m.report[msg.key], params);
}

/** Định dạng số theo ngôn ngữ hiện tại (dấu thập phân, chữ số). */
export function formatNumber(value: number, fractionDigits = 0): string {
  return new Intl.NumberFormat(useI18n.getState().lang, {
    minimumFractionDigits: fractionDigits,
    maximumFractionDigits: fractionDigits,
  }).format(value);
}

export function formatDate(iso: string, lang: LangCode): string {
  return new Intl.DateTimeFormat(lang, { dateStyle: 'long', timeZone: 'UTC' }).format(new Date(`${iso}T00:00:00Z`));
}

export const isRtl = (code: LangCode) => Boolean(LANGUAGES.find((l) => l.code === code && 'rtl' in l));
