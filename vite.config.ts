import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite';
import path from "path";
import svgrPlugin from 'vite-plugin-svgr';
import netlifyPlugin from '@netlify/vite-plugin-react-router'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    svgrPlugin({ include: "**/*.svg?react" }),
    react(),
    tailwindcss(),
    netlifyPlugin(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    }
  }
  
})
