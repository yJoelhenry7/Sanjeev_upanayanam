import i18n from '@/i18n'
import { guestNameFromQuery } from '@/lib/guestName'

function upsertMeta(selector, attr, key, content) {
  let el = document.querySelector(selector)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

export function applyShareMeta() {
  if (typeof document === 'undefined') return

  const guestName = guestNameFromQuery()
  const title = guestName
    ? i18n.t('meta.shareTitleNamed', { name: guestName })
    : i18n.t('meta.shareTitle')
  const description = guestName
    ? i18n.t('meta.shareDescriptionNamed', { name: guestName })
    : i18n.t('meta.shareDescription')

  document.title = title

  const origin = window.location.origin
  const url = window.location.href
  const image = `${origin}/Family%20Ceremony%20Around%20Sacred%20Fire.png`

  upsertMeta('meta[name="description"]', 'name', 'description', description)
  upsertMeta('meta[property="og:title"]', 'property', 'og:title', title)
  upsertMeta('meta[property="og:description"]', 'property', 'og:description', description)
  upsertMeta('meta[property="og:url"]', 'property', 'og:url', url)
  upsertMeta('meta[property="og:image"]', 'property', 'og:image', image)
  upsertMeta('meta[property="og:type"]', 'property', 'og:type', 'website')
  upsertMeta('meta[name="twitter:card"]', 'name', 'twitter:card', 'summary_large_image')
  upsertMeta('meta[name="twitter:title"]', 'name', 'twitter:title', title)
  upsertMeta('meta[name="twitter:description"]', 'name', 'twitter:description', description)
  upsertMeta('meta[name="twitter:image"]', 'name', 'twitter:image', image)
}
