import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  build: {
    manifest: true,
    rollupOptions: {
      external: ['react', 'react-dom']
    }
  }
})
