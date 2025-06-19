import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path';
// https://vite.dev/config/
export default defineConfig({
  plugins: [react() , tailwindcss(),],
  resolve: {
    alias: {
        '@': path.resolve(__dirname, 'src'),
        '@components': path.resolve(__dirname, 'src/components'),
        '@pages': path.resolve(__dirname, 'src/pages'),
        '@configs': path.resolve(__dirname, 'src/configs'),
        '@utils': path.resolve(__dirname, 'src/utils'),
        '@providers': path.resolve(__dirname, 'src/providers')
      }
  },
  server : {
    port : 3000,
    proxy: {
      "/api" : {
        target:"http://localhost:5001" , 
      }
    } 
  }
})
