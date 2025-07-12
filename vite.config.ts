import { defineConfig } from 'vite';

export default defineConfig({
  base: '/Moku_Moku_House/',
  server: {
    port: 3000,
    open: true
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
    rollupOptions: {
      external: [],
      output: {
        manualChunks: undefined
      }
    }
  },
  optimizeDeps: {
    include: ['react', 'react-dom']
  }
});