import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        format: 'es',
      },
    },
  },
  server: {
    headers: {
      'Content-Type': 'application/javascript',
    },
  },
  base: './',
  publicDir: 'public',
})
