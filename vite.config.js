import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // host: true,
      // port: 4000,
      // with options: http://localhost:3000/api/bar-> http://http://62.217.182.92:8000/api/bar
      '/api': {
        target: '127.0.0.1',
        changeOrigin: true,
      },
    },
  },
});