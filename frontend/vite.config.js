import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig(({command, mode}) =>{
  const env = loadEnv(mode, process.cwd(), '');
  console.log(mode);
  return {
    plugins: [react(), mode!=='ngrok' && eslint(
      {
        fix: true,
        exclude: [/virtual:/, /node_modules/],
      },
    )],
    server: {
      port: 3000,
      hmr: {
        overlay: false,
      }
    },
    css: {
      modules: {
        localsConvention: 'camelCase',
      },
    },
    define: {
      'process.env.BASE_URL': JSON.stringify(env.BASE_URL)
    }
  }
});
