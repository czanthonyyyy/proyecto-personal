import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // IMPORTANTE: si este proyecto está en el repo "proyecto-personal",
  // la base debe ser el nombre del repo para que GitHub Pages resuelva bien los assets
  base: '/proyecto-personal/',
  build: {
    outDir: 'docs',
  },
  server: {
    port: 3000,
    open: true,
  },
})

