import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import App from './App';
import { bootstrapRouter } from './router';
import { initTheme } from './theme';
// Font tự lưu trên web (thay Google Fonts): tệp có mã băm → cache lâu dài, không phải nối thêm tên miền khác.
// Mỗi font tách theo bảng chữ (latin, latin-ext, vietnamese…) qua unicode-range nên trình duyệt chỉ tải phần cần.
import '@fontsource/be-vietnam-pro/400.css';
import '@fontsource/be-vietnam-pro/500.css';
import '@fontsource/be-vietnam-pro/600.css';
import '@fontsource/be-vietnam-pro/700.css';
import '@fontsource-variable/bricolage-grotesque/opsz.css';
import '@fontsource-variable/jetbrains-mono/wght.css';
import './index.css';

initTheme();

const container = document.getElementById('root')!;
// Trang đã được prerender thành HTML tĩnh (bản build) → hydrate; khi chạy dev hoặc URL bị chuyển hướng → render mới.
const prerendered = container.hasChildNodes();

void bootstrapRouter().then(({ redirected }) => {
  const app = (
    <StrictMode>
      <App />
    </StrictMode>
  );
  if (prerendered && !redirected) {
    hydrateRoot(container, app);
  } else {
    container.textContent = '';
    createRoot(container).render(app);
  }
});
