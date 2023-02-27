import { defineConfig, UserConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
/** @type {import('vite').UserConfig} */
export default defineConfig({
  plugins: [react()],
  server: {
    port: 4000,
    proxy: {
      '/vite-proxy': {
        target: 'http://192.168.1.100:3000',
        rewrite: (path) => path.replace('/vite-proxy', ''),
      },
    },
  },
  css: {
    modules: {
      scopeBehaviour: 'local',
      localsConvention: 'camelCase',
    },
  },
});
