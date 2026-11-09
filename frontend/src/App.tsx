import { Hero } from './components/home/Hero';
import { LearnMetadata, Security, SourcesStrip, StartWithFile } from './components/home/HomeSections';
import { DocumentHead } from './components/layout/DocumentHead';
import { SiteFooter, TopBar } from './components/layout/Shell';
import { GuidePage } from './components/seo/GuidePage';
import { GuidesIndexPage } from './components/seo/GuidesIndexPage';
import { InfoPage } from './components/seo/InfoPage';
import { ToolPage } from './components/seo/ToolPage';
import { Disclaimer, Faq, Features, FormatTable, Guides, HowItWorks, WhyChoose } from './components/seo/SeoSections';
import { StructuredData } from './components/seo/StructuredData';
import { useI18n } from './i18n';
import { useRouter } from './router';
import { useJobStore } from './store/useJobStore';

/**
 * Trang chủ theo trình tự "giá trị → bằng chứng → việc cần làm → kiến thức → an tâm → hỏi đáp":
 * đầu trang (công cụ) → dải nguồn ảnh → bắt đầu với tệp bạn có → metadata là gì / vì sao / tiêu chuẩn →
 * từng loại tệp → cách làm → bảo mật → so sánh → bài viết → hỏi đáp → miễn trừ trách nhiệm.
 * Ngôn ngữ chưa có trang công cụ (`pages`) bỏ mục "bắt đầu với tệp bạn có"; thiếu mục bảo mật thì giữ khối Tính năng.
 */
function HomePage() {
  const hasJobs = useJobStore((s) => s.jobs.length > 0);
  const hasSecurity = useI18n((s) => Boolean(s.home?.security));
  return (
    <main>
      <Hero hasJobs={hasJobs} />
      <SourcesStrip />
      {/* Dưới màn hình đầu: trình duyệt hoãn layout/vẽ tới khi cuộn gần (xem .defer-render trong index.css). */}
      <div className="defer-render">
        <StartWithFile />
        <LearnMetadata />
        <FormatTable />
        <HowItWorks />
        {hasSecurity ? <Security /> : <Features />}
        <WhyChoose />
        <Guides />
        <Faq />
        <Disclaimer />
      </div>
    </main>
  );
}

/** Khung trang: header ngang dính trên cùng, nội dung bên dưới. */
export default function App() {
  const route = useRouter((s) => s.route);
  return (
    <>
      <DocumentHead />
      <StructuredData />
      <div className="min-h-screen">
        <TopBar />
        {route.name === 'guide' ? (
          <GuidePage key={route.slug} slug={route.slug} />
        ) : route.name === 'guides' ? (
          <GuidesIndexPage key={route.page} page={route.page} />
        ) : route.name === 'tool' ? (
          <ToolPage key={route.slug} slug={route.slug} />
        ) : route.name === 'info' ? (
          <InfoPage key={route.slug} slug={route.slug} />
        ) : (
          <HomePage />
        )}
        <SiteFooter />
      </div>
    </>
  );
}
