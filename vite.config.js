import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Configuración para despliegue en GitHub Pages
// En este repositorio (tipo usuario: czanthonyyyy.github.io) la base es '/'
export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    outDir: 'docs',
  },
  server: {
    port: 3000,
    open: true,
  },
})

