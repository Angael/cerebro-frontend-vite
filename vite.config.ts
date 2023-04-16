import { defineConfig, PluginOption, UserConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// Probably not a dev dependency, it's build in ci/cd
import { visualizer } from 'rollup-plugin-visualizer';

// https://vitejs.dev/config/
/** @type {import('vite').UserConfig} */
export default defineConfig({
  plugins: [
    react(),
    process.env.ANALYZE === 'true' &&
      (visualizer({
        template: 'treemap', // or sunburst
        open: true,
        gzipSize: true,
        brotliSize: false,
        filename: 'dist/analize.html',
      }) as PluginOption),
  ],
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
