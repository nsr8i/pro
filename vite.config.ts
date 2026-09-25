import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';
import {defineConfig, type Plugin} from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

function adminRoutingPlugin(): Plugin {
  return {
    name: 'admin-routing-plugin',
    configureServer(server) {
      server.middlewares.use((req, _res, next) => {
        const url = req.url ? req.url.split('?')[0] : '';
        if (url === '/admin' || url === '/admin/') {
          req.url = '/admin.html' + (req.url && req.url.includes('?') ? '?' + req.url.split('?')[1] : '');
        } else if (url === '/download' || url === '/download/') {
          req.url = '/download.html' + (req.url && req.url.includes('?') ? '?' + req.url.split('?')[1] : '');
        } else if (url === '/app' || url === '/app/' || url === '/install' || url === '/install/') {
          req.url = '/app.html' + (req.url && req.url.includes('?') ? '?' + req.url.split('?')[1] : '');
        }
        next();
      });
    },
    configurePreviewServer(server) {
      server.middlewares.use((req, _res, next) => {
        const url = req.url ? req.url.split('?')[0] : '';
        if (url === '/admin' || url === '/admin/') {
          req.url = '/admin.html' + (req.url && req.url.includes('?') ? '?' + req.url.split('?')[1] : '');
        } else if (url === '/download' || url === '/download/') {
          req.url = '/download.html' + (req.url && req.url.includes('?') ? '?' + req.url.split('?')[1] : '');
        } else if (url === '/app' || url === '/app/' || url === '/install' || url === '/install/') {
          req.url = '/app.html' + (req.url && req.url.includes('?') ? '?' + req.url.split('?')[1] : '');
        }
        next();
      });
    },
    closeBundle() {
      const distAdmin = path.resolve(__dirname, 'dist/admin.html');
      const distAdminDir = path.resolve(__dirname, 'dist/admin');
      if (fs.existsSync(distAdmin)) {
        if (!fs.existsSync(distAdminDir)) {
          fs.mkdirSync(distAdminDir, { recursive: true });
        }
        fs.copyFileSync(distAdmin, path.join(distAdminDir, 'index.html'));
      }
      const adminJs = path.resolve(__dirname, 'admin.js');
      if (fs.existsSync(adminJs)) {
        fs.copyFileSync(adminJs, path.resolve(__dirname, 'dist/admin.js'));
        if (fs.existsSync(distAdminDir)) {
          fs.copyFileSync(adminJs, path.join(distAdminDir, 'admin.js'));
        }
      }
      const adminCss = path.resolve(__dirname, 'admin.css');
      if (fs.existsSync(adminCss)) {
        fs.copyFileSync(adminCss, path.resolve(__dirname, 'dist/admin.css'));
        if (fs.existsSync(distAdminDir)) {
          fs.copyFileSync(adminCss, path.join(distAdminDir, 'admin.css'));
        }
      }
      const distApp = path.resolve(__dirname, 'dist/app.html');
      const distAppDir = path.resolve(__dirname, 'dist/app');
      if (fs.existsSync(distApp)) {
        if (!fs.existsSync(distAppDir)) {
          fs.mkdirSync(distAppDir, { recursive: true });
        }
        fs.copyFileSync(distApp, path.join(distAppDir, 'index.html'));
      }
    },
  };
}

export default defineConfig(() => {
  return {
    plugins: [
      react(),
      tailwindcss(),
      adminRoutingPlugin(),
      VitePWA({
        registerType: 'autoUpdate',
        includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'icon.svg', 'images/**/*'],
        manifest: {
          id: '/',
          name: 'PREKSHA LIGHTING WORLD',
          short_name: 'Preksha Lite',
          description: 'PREKSHA LIGHTING WORLD - Premium LED lighting solutions for homes, offices, shops and industries.',
          theme_color: '#db5200',
          background_color: '#0d0f12',
          display: 'standalone',
          start_url: '/',
          scope: '/',
          icons: [
            {
              src: '/pwa-192x192.png',
              sizes: '192x192',
              type: 'image/png',
              purpose: 'any',
            },
            {
              src: '/pwa-512x512.png',
              sizes: '512x512',
              type: 'image/png',
              purpose: 'any',
            },
            {
              src: '/pwa-maskable-512x512.png',
              sizes: '512x512',
              type: 'image/png',
              purpose: 'maskable',
            },
          ],
        },
        workbox: {
          globPatterns: ['**/*.{js,css,html,ico,png,svg,woff,woff2,webmanifest,json}'],
          runtimeCaching: [
            {
              urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
              handler: 'CacheFirst',
              options: {
                cacheName: 'google-fonts-cache',
                expiration: {
                  maxEntries: 10,
                  maxAgeSeconds: 60 * 60 * 24 * 365,
                },
                cacheableResponse: {
                  statuses: [0, 200],
                },
              },
            },
            {
              urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
              handler: 'CacheFirst',
              options: {
                cacheName: 'gstatic-fonts-cache',
                expiration: {
                  maxEntries: 10,
                  maxAgeSeconds: 60 * 60 * 24 * 365,
                },
                cacheableResponse: {
                  statuses: [0, 200],
                },
              },
            },
          ],
        },
        devOptions: {
          enabled: true,
          type: 'module',
        },
      }),
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    build: {
      rollupOptions: {
        input: {
          main: path.resolve(__dirname, 'index.html'),
          admin: path.resolve(__dirname, 'admin.html'),
          download: path.resolve(__dirname, 'download.html'),
          app: path.resolve(__dirname, 'app.html'),
        },
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâ€”file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});

