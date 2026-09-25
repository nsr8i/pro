import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = Number(process.env.PORT) || 3000;
const distPath = path.resolve(__dirname, 'dist');
const isProduction = process.env.NODE_ENV === 'production' || fs.existsSync(distPath);

async function startServer() {
  // If dist does not exist or running dev mode with Vite
  if (!fs.existsSync(distPath) && process.env.NODE_ENV !== 'production') {
    const { createServer } = await import('vite');
    const vite = await createServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });

    // Admin rewrite middleware in dev
    app.use((req, res, next) => {
      const url = req.url.split('?')[0];
      if (url === '/admin' || url === '/admin/') {
        req.url = '/admin.html' + (req.url.includes('?') ? '?' + req.url.split('?')[1] : '');
      }
      next();
    });

    app.use(vite.middlewares);
  } else {
    // Serve production static files from dist
    app.get(['/admin', '/admin/', '/admin.html'], (_req, res) => {
      res.sendFile(path.join(distPath, 'admin.html'));
    });

    app.use(express.static(distPath));

    app.get('*', (_req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server listening on http://0.0.0.0:${PORT}`);
  });
}

startServer();
