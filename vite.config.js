import os from 'node:os'
import path from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  cacheDir: path.join(os.tmpdir(), 'vite-weddingdayfront'),
  plugins: [react(), tailwindcss()],
  server: {
    host: true,
  },
})

