export function guestNameFromQuery(search = window.location.search) {
  const raw = new URLSearchParams(search).get('name')
  if (!raw) return null
  const cleaned = raw.trim().replace(/\s+/g, ' ').slice(0, 40)
  if (!cleaned) return null
  return cleaned.replace(/\b\w/g, (c) => c.toUpperCase())
}

export function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}
