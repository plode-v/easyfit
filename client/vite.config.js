import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { config } from "dotenv"
config();

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        secure: false,
        changeOrigin: true,
        target: process.env.VIITE_API_KEY
      }
    }
  }
});