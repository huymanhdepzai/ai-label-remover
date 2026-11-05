/// <reference types="vitest/config" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  worker: {
    format: 'es',
  },
  build: {
    // Cờ quốc gia chỉ hiện trong bộ chọn ngôn ngữ (ảnh loading="lazy") → để thành tệp riêng thay vì nhúng base64
    // vào bundle chính; các tệp nhỏ khác vẫn theo ngưỡng mặc định (4 KB).
    assetsInlineLimit: (file) => (file.includes('flag-icons') ? false : undefined),
  },
  // Bản build SSR chỉ dùng để prerender HTML lúc build → gói kèm mọi thư viện để chạy độc lập trong Node.
  ssr: {
    noExternal: true,
  },
  test: {
    environment: 'node',
    include: ['src/**/*.test.ts'],
  },
});