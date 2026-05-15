import { defineConfig, loadEnv, type ConfigEnv } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import UnoCSS from 'unocss/vite'

export default defineConfig(({ mode }: ConfigEnv) => {
  const env = loadEnv(mode, process.cwd())
  return {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      }
    },
    plugins: [react(),UnoCSS()],
    server: {
      port: 5179,
      host: env.VITE_HOST || 'localhost',
      proxy: {
        '/api': {
          target: env.VITE_API_BASE_URL,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, '')
        }
      }
    },
  }
})
