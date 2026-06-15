import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // GitHub Pages serves the site from /<repo-name>/, Vercel serves from /.
  // Set VITE_BASE_PATH=/<repo-name>/ when building for GitHub Pages.
  base: process.env.VITE_BASE_PATH || '/',
})
