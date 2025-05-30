import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/bindlestiff-app/', // ✅ GitHub Pages repo name (update if repo name changes)
  plugins: [react()],

  server: {
    host: true, // ✅ Allows access via local IP for testing on other devices
    port: 5173, // 🔧 Optional: Define custom port if needed (default is 5173)
  },

  build: {
    outDir: 'dist', // 📦 Where final build is output
    emptyOutDir: true, // 🧹 Clean before build
  },
});
