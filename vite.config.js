import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  // Jika perintahnya adalah 'serve' (npm run dev)
  if (command === 'serve') {
    return {
      // Konfigurasi untuk development
      plugins: [react()],
      base: '/', // Gunakan alamat root untuk dev
    }
  } else {
    // Jika perintahnya adalah 'build' (npm run build)
    return {
      // Konfigurasi untuk production
      plugins: [react()],
      base: '/paint-appsv2/', // Gunakan sub-folder untuk build
    }
  }
})