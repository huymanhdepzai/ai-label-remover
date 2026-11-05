import { useMemo } from 'react';
import { guideContent } from '../../content/guideContent';
import { plainText } from '../../content/richText';
import { availableGuides, GUIDES_PER_PAGE, guidesOnPage, hasPages, HOME_SECTIONS, SITE } from '../../content/seo';
import { useI18n } from '../../i18n';
import { DEFAULT_LANG, type LangCode } from '../../i18n/languages';
import { absoluteUrl, GUIDES_INDEX, HOME, pathFor, useRouter } from '../../router';
import { OG_SIZE, ogImagePath, pageUpdated } from '../../seo/head';

/** Trang Giới thiệu của ngôn ngữ (ngôn ngữ chưa có trang này → bản tiếng Anh). */
const aboutUrl = (lang: LangCode) => absoluteUrl(pathFor(hasPages(lang) ? lang : DEFAULT_LANG, { name: 'info', slug: 'about' }));

/** Tổ chức đứng sau trang (publisher/author của bài viết; logo giúp Google hiển thị thương hiệu). */
function organization(lang: LangCode) {
  return {
    '@type': 'Organization',
    '@id': absoluteUrl('/#organization'),
    name: SITE.name,
    url: absoluteUrl('/'),
    logo: { '@type': 'ImageObject', url: absoluteUrl('/icon-512.png'), width: 512, height: 512 },
    ...(SITE.contactEmail ? { email: SITE.contactEmail, contactPoint: { '@type': 'ContactPoint', contactType: 'customer support', email: SITE.contactEmail } } : {}),
    // Trang Giới thiệu mô tả ai làm công cụ và nội dung được kiểm chứng thế nào (E-E-A-T).
    publishingPrinciples: aboutUrl(lang),
  };
}

const ORG_REF = { '@id': absoluteUrl('/#organization') };

/**
 * Dữ liệu có cấu trúc (schema.org JSON-LD) theo trang, sinh từ chính nội dung hiển thị:
 *  - Trang chủ: Organization + WebSite + WebApplication + FAQPage + HowTo
 *  - Trang công cụ: WebApplication + FAQPage + BreadcrumbList
 *  - Trang tổng hợp: CollectionPage + BreadcrumbList
 *  - Trang bài viết: Article + BreadcrumbList (+ FAQPage nếu bài có phần hỏi đáp)
 *  - Trang thông tin: AboutPage / WebPage + BreadcrumbList
 * Google không còn hiện kết quả nổi bật HowTo và chỉ hiện FAQ cho một số trang, nhưng các khối này vẫn
 * giúp công cụ tìm kiếm / trợ lý AI hiểu nội dung.
 */
export function StructuredData() {
  const bundle = useI18n();
  const { lang, m, articles, pages } = bundle;
  const seo = m.seo;
  const route = useRouter((s) => s.route);

  const blocks = useMemo(() => {
    const homeUrl = absoluteUrl(pathFor(lang, HOME));
    const url = absoluteUrl(pathFor(lang, route));
    const crumbs = (...items: { name: string; item: string }[]) => ({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [{ name: seo.guides.home, item: homeUrl }, ...items].map((c, i) => ({ '@type': 'ListItem', position: i + 1, ...c })),
    });
    const faqPage = (items: { q: string; a: string }[]) => ({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: lang,
      mainEntity: items.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: plainText(f.a) } })),
    });
    const webApp = (name: string, description: string, pageUrl: string) => ({
      '@context': 'https://schema.org',
      '@type': 'WebApplication',
      name,
      url: pageUrl,
      description,
      inLanguage: lang,
      image: absoluteUrl(ogImagePath(route)),
      applicationCategory: 'MultimediaApplication',
      operatingSystem: 'Any (web browser)',
      browserRequirements: 'Requires JavaScript',
      isAccessibleForFree: true,
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      publisher: ORG_REF,
    });

    switch (route.name) {
      case 'home':
        return [
          { '@context': 'https://schema.org', ...organization(lang) },
          { '@context': 'https://schema.org', '@type': 'WebSite', name: SITE.name, alternateName: SITE.alternateNames, url: homeUrl, inLanguage: lang, publisher: ORG_REF },
          webApp(SITE.name, m.meta.description, homeUrl),
          faqPage([...seo.faq.items, ...(pages?.home.faq ?? [])]),
          {
            '@context': 'https://schema.org',
            '@type': 'HowTo',
            inLanguage: lang,
            name: seo.howToSchema.name,
            description: seo.howToSchema.description,
            totalTime: 'PT1M',
            tool: [{ '@type': 'HowToTool', name: SITE.name }],
            step: seo.how.steps.map((s, i) => ({ '@type': 'HowToStep', position: i + 1, name: s.title, text: s.text, url: `${homeUrl}#${HOME_SECTIONS.how}` })),
          },
        ];

      case 'tool': {
        const page = pages?.tools[route.slug];
        if (!page) return [];
        return [webApp(`${SITE.name} — ${page.navLabel}`, page.description, url), faqPage(page.faq), crumbs({ name: page.navLabel, item: url })];
      }

      case 'info': {
        const page = pages?.info[route.slug];
        if (!page) return [];
        return [
          {
            '@context': 'https://schema.org',
            '@type': route.slug === 'about' ? 'AboutPage' : 'WebPage',
            name: page.title,
            description: page.description,
            url,
            inLanguage: lang,
            dateModified: pageUpdated(bundle, route),
            publisher: route.slug === 'about' ? organization(lang) : ORG_REF,
          },
          crumbs({ name: page.navLabel, item: url }),
        ];
      }

      case 'guides': {
        const slugs = guidesOnPage(route.page, availableGuides(lang));
        return [
          {
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            inLanguage: lang,
            name: seo.guides.title,
            url,
            mainEntity: {
              '@type': 'ItemList',
              itemListElement: slugs.map((slug, i) => ({
                '@type': 'ListItem',
                position: (route.page - 1) * GUIDES_PER_PAGE + i + 1,
                url: absoluteUrl(pathFor(lang, { name: 'guide', slug })),
                name: guideContent({ m, articles }, slug)?.title,
              })),
            },
          },
          crumbs({ name: seo.guides.eyebrow, item: url }),
        ];
      }

      case 'guide': {
        const guide = guideContent({ m, articles }, route.slug);
        if (!guide) return [];
        const article = articles?.[route.slug];
        const result: object[] = [
          {
            '@context': 'https://schema.org',
            '@type': 'Article',
            inLanguage: lang,
            headline: guide.title,
            description: article?.description ?? guide.summary[0],
            image: { '@type': 'ImageObject', url: absoluteUrl(ogImagePath(route)), width: OG_SIZE.width, height: OG_SIZE.height },
            mainEntityOfPage: url,
            datePublished: SITE.contentUpdated,
            dateModified: pageUpdated(bundle, route),
            author: { '@type': 'Organization', name: SITE.name, url: aboutUrl(lang) },
            publisher: organization(lang),
          },
          crumbs({ name: seo.guides.eyebrow, item: absoluteUrl(pathFor(lang, GUIDES_INDEX)) }, { name: guide.title, item: url }),
        ];
        if (article?.faq.length) result.push(faqPage(article.faq));
        return result;
      }
    }
  }, [bundle, lang, m, seo, articles, pages, route]);

  return (
    <>
      {blocks.map((b, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(b).replace(/</g, '\\u003c') }} />
      ))}
    </>
  );
}
