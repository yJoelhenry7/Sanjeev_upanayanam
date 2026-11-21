/** Shared bot-preview HTML for Vite dev middleware and Vercel edge. */

export function formatGuestName(raw) {
  const cleaned = String(raw || '')
    .trim()
    .replace(/\s+/g, ' ')
    .slice(0, 40)
  if (!cleaned) return null
  return cleaned.replace(/\b\w/g, (c) => c.toUpperCase())
}

export function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

export const BOT_UA =
  /whatsapp|facebookexternalhit|Facebot|Twitterbot|LinkedInBot|Slackbot|Discordbot|TelegramBot|SkypeUriPreview|Googlebot|bingbot|Baiduspider|Embedly|Quora Link Preview|Showyoubot|outbrain|pinterest|redditbot|Applebot|Iframely/i

export function buildPreviewHtml({ origin, url, name }) {
  const title = name
    ? `${name}, you are warmly invited to Gamini Sri Sanjeev’s Upanayanam`
    : 'Gamini Sri Sanjeev — Upanayanam Invitation'
  const description = name
    ? `${name}, join us for the sacred thread ceremony on Sunday, 29 November 2026 · Muhurtham 9:40 AM at Vabilisetty’s House, Bhimavaram.`
    : 'You are warmly invited to the Upanayanam of Gamini Sri Sanjeev — Sunday, 29 November 2026 · Muhurtham 9:40 AM at Vabilisetty’s House, Bhimavaram.'
  const image = `${origin}/Family%20Ceremony%20Around%20Sacred%20Fire.png`
  const favicon = `${origin}/favicon-32.png`

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>${escapeHtml(title)}</title>
  <meta name="description" content="${escapeHtml(description)}" />
  <link rel="icon" href="${favicon}" />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="Gamini Sri Sanjeev — Upanayanam" />
  <meta property="og:title" content="${escapeHtml(title)}" />
  <meta property="og:description" content="${escapeHtml(description)}" />
  <meta property="og:url" content="${escapeHtml(url)}" />
  <meta property="og:image" content="${image}" />
  <meta property="og:image:alt" content="Family gathered for Upanayanam around the sacred fire" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${escapeHtml(title)}" />
  <meta name="twitter:description" content="${escapeHtml(description)}" />
  <meta name="twitter:image" content="${image}" />
</head>
<body>
  <p>${escapeHtml(title)}</p>
  <p>${escapeHtml(description)}</p>
</body>
</html>`
}
