import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const __dirname = fileURLToPath(new URL('.', import.meta.url))

export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: ['vue', 'vue-router', '@vueuse/core'],
      dts: 'src/auto-imports.d.ts',
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')  // ✅ 正确用法
    }
  },
  server: {
    port: 3000,
    open: true
  }
})