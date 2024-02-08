import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path';
import wywInJS from '@wyw-in-js/vite';

// https://vitejs.dev/config/
export default defineConfig({
  base: '',
  plugins: [
    react(), 
    wywInJS()
  ],
  resolve: {
    alias: {
      '@': path.resolve('src')
    }
  },
  define: {},
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': ['react', 'react-dom', 'react-router-dom'],
        }
      }
    }
  },
})
