import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  assetsInclude: ['**/*.pdf'],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        dashboard: resolve(__dirname, 'src/proyectos/dashboard.html'),
      }
    }
  }
})