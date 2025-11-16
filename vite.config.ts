// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/error_code/',  // 假設你的 repo URL 是 hitachi-yungtai.github.io/error_code/
  plugins: [react()]
});