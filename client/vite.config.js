import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { config } from 'dotenv';
config();

const myPort = process.env.VITE_API_KEY;

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 5173,
    proxy: {
      '/api': {
        target: myPort,
        changeOrigin: true,
        secure: false
      }
    }
  }
});