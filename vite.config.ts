import { defineConfig, PluginOption, UserConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// Probably not a dev dependency, it's build in ci/cd
import { visualizer } from 'rollup-plugin-visualizer';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
/** @type {import('vite').UserConfig} */
export default defineConfig({
  plugins: [
    react(),
    process.env.ANALYZE === 'true' &&
      (visualizer({
        template: 'treemap',
        open: true,
        gzipSize: true,
        brotliSize: false,
        filename: 'dist/analize.html',
      }) as unknown as PluginOption),
    VitePWA({
      registerType: 'autoUpdate',
      devOptions: { enabled: true },
      srcDir: 'src/service-worker',
      filename: 'sw.js',
      manifest: {
        name: 'Cerebro',
        short_name: 'Cerebro',
        icons: [
          {
            src: '/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
        theme_color: '#2c384b',
        background_color: '#ffffff',
        display: 'standalone',
        share_target: {
          action: '/share',
          params: {
            title: 'title',
            text: 'text',
            url: 'url',
          },
        },
      },
      strategies: 'injectManifest',
    }),
  ],
  server: {
    port: 4000,
    proxy: {
      '/vite-proxy': {
        target: 'http://192.168.1.100:3000',
        rewrite: (path) => path.replace('/vite-proxy', ''),
        changeOrigin: true,
        secure: false,
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
