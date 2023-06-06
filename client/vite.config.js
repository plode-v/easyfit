import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { apiKey } from "./src/constants"

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        secure: false,
        changeOrigin: true,
        target: apiKey
      }
    }
  }
});