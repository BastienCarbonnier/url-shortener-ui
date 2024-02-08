import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path';
import wywInJS from '@wyw-in-js/vite';

// https://vitejs.dev/config/
export default defineConfig({
  base: '',
  plugins: [
    wywInJS(),
    react()
  ],
  resolve: {
    alias: {
      '@': path.resolve('src')
    }
  },
  define: {},
  /*
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': ['react', 'react-dom', 'react-router-dom'],
        }
      }
    }
  },*/
  preview: {
    port: 3000,
    strictPort: true,
  },
  server: {
    port: 3000,
    strictPort: true,
    host: true,
    origin: "http://0.0.0.0:8080",
  },
})
