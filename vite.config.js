import path from 'path'
import { fileURLToPath } from 'url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import {
  BOT_UA,
  buildPreviewHtml,
  formatGuestName,
} from './src/lib/ogPreview.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

function ogBotPreviewPlugin() {
  return {
    name: 'og-bot-preview',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const ua = req.headers['user-agent'] || ''
        if (!BOT_UA.test(ua)) return next()

        try {
          const host = req.headers.host || '127.0.0.1:5173'
          const proto = 'http'
          const url = new URL(req.url || '/', `${proto}://${host}`)
          if (url.pathname !== '/' && url.pathname !== '/index.html') return next()

          const name = formatGuestName(url.searchParams.get('name'))
          const html = buildPreviewHtml({
            origin: url.origin,
            url: url.href,
            name,
          })
          res.statusCode = 200
          res.setHeader('Content-Type', 'text/html; charset=utf-8')
          res.end(html)
        } catch {
          next()
        }
      })
    },
  }
}

export default defineConfig({
  plugins: [react(), tailwindcss(), ogBotPreviewPlugin()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
