import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { config } from 'dotenv';
config();

const API = process.env.VITE_API_KEY

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 5173,
    proxy: {
      '/api': {
        target: API,
        changeOrigin: true,
        secure: false
      }
    }
  }
});