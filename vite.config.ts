import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/bindlestiff-app/', // ✅ Required for GitHub Pages
  plugins: [react()],
  server: {
    host: true, // 👈 Enables access via local IP (mobile/tablet/devices)
  },
});
