import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Forzar rebuild completo sin caché
    emptyOutDir: true,
  },
  // Deshabilitar caché de optimización de dependencias
  optimizeDeps: {
    force: true,
  },
})

