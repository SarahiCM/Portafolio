import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  server: {
    fs: {
      allow: ['.']
    }
  },
  plugins: [
    {
      name: 'pdf-serve',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.url === '/CV_SarahiCaloso.pdf') {
            res.setHeader('Content-Type', 'application/pdf');
            res.setHeader('Content-Disposition', 'attachment; filename="CV_SarahiCaloso.pdf"');
          }
          next();
        });
      }
    }
  ],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        dashboard: resolve(__dirname, 'proyectos/dashboard.html'),
        interfaces: resolve(__dirname, 'proyectos/interfaces.html'),
        procesos: resolve(__dirname, 'proyectos/procesos.html'),
      }
    }
  }
})