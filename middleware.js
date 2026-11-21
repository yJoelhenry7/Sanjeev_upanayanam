/**
 * Vercel Edge Middleware — personalized WhatsApp / social previews for ?name=
 * Bots get meta HTML; everyone else continues to the SPA.
 */
import { BOT_UA, buildPreviewHtml, formatGuestName } from './src/lib/ogPreview.js'

export const config = {
  matcher: ['/', '/index.html'],
}

export default function middleware(request) {
  const ua = request.headers.get('user-agent') || ''
  if (!BOT_UA.test(ua)) {
    return
  }

  const url = new URL(request.url)
  const name = formatGuestName(url.searchParams.get('name'))
  const html = buildPreviewHtml({
    origin: url.origin,
    url: url.href,
    name,
  })

  return new Response(html, {
    status: 200,
    headers: {
      'content-type': 'text/html; charset=utf-8',
      'cache-control': 'public, max-age=0, must-revalidate',
    },
  })
}
