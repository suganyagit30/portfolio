// Used only to produce a single-file preview build: npx vite build -c vite.single.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteSingleFile } from 'vite-plugin-singlefile'

export default defineConfig({ plugins: [react(), viteSingleFile()], build: { outDir: 'dist-single' } })
