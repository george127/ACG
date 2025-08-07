import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'https://acg-7euk.onrender.com',
        changeOrigin: true,
        secure: true,
      },
    }, 
  },
  plugins: [react()],
})
