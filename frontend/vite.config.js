import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    outDir: 'dist'
  },
  server: {
    proxy: {
      '/api': 'http://localhost:4000',
      '/uploads': 'http://localhost:4000'
    }
  }
})
