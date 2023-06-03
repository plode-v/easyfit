import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { config } from "dotenv"
config();

// eslint-disable-next-line no-undef
const API = import.meta.env.VITE_API_KEY
const envApi = process.env.VITE_API_KEY;

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: API || envApi,
        changeOrigin: true,
        secure: false
      }
    }
  }
});