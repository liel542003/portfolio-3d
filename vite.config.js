import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/portfolio-3d/',
  server: {
    port: 5173,
    strictPort: false,
    host: '127.0.0.1',
  },
  preview: {
    port: 5173,
    strictPort: false,
    host: '127.0.0.1',
  },
  css: {
    postcss: './postcss.config.cjs',
  },
})
