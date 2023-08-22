import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslint(
    {
      fix: true,
      exclude: [/virtual:/, /node_modules/],
    },
  )],
  server: {
    port: 3000,
  },
  css: {
    modules: {
      localsConvention: 'camelCase',
    },
  },
});
