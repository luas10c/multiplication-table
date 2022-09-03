import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default async ({ mode }) => {
  process.env = {
    ...process.env,
    ...loadEnv(mode, process.cwd())
  }

  return await defineConfig({
    plugins: [react()],
    clearScreen: true,
    resolve: {
      alias: {
        '#/*': 'src/**'
      }
    },
    server: {
      port: 4000
    }
  })
}
