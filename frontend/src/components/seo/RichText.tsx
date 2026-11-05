import { parseRichText } from '../../content/richText';
import { hasPages, isGuideAvailable, isToolSlug, type GuideSlug, type ToolSlug } from '../../content/seo';
import { useI18n } from '../../i18n';
import { useHref } from '../../router';
import { Link } from '../Link';

function InternalLink({ slug, children }: { slug: GuideSlug | ToolSlug; children: string }) {
  const href = useHref(isToolSlug(slug) ? { name: 'tool', slug } : { name: 'guide', slug });
  return (
    <Link to={href} className="font-medium text-cobalt underline decoration-cobalt/40 decoration-1 underline-offset-[3px] hover:decoration-2">
      {children}
    </Link>
  );
}

/**
 * Văn bản có liên kết nội bộ `[chữ](slug)` tới bài viết hoặc trang công cụ;
 * trang chưa có ở ngôn ngữ hiện tại hiển thị thành chữ thường.
 */
export function RichText({ text }: { text: string }) {
  const lang = useI18n((s) => s.lang);
  return (
    <>
      {parseRichText(text).map((part, i) => {
        if (typeof part === 'string') return part;
        const available = isToolSlug(part.slug) ? hasPages(lang) : isGuideAvailable(part.slug, lang);
        return available ? (
          <InternalLink key={i} slug={part.slug}>
            {part.text}
          </InternalLink>
        ) : (
          part.text
        );
      })}
    </>
  );
}
