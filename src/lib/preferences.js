const LANG_KEY = 'upanayanam-lang'
const MUSIC_KEY = 'upanayanam-music'

export function getSavedLanguage() {
  if (typeof window === 'undefined') return 'en'
  const saved = localStorage.getItem(LANG_KEY)
  return saved === 'te' || saved === 'en' ? saved : 'en'
}

export function setSavedLanguage(lng) {
  if (typeof window === 'undefined') return
  const normalized = String(lng || 'en').toLowerCase().startsWith('te') ? 'te' : 'en'
  localStorage.setItem(LANG_KEY, normalized)
  return normalized
}

export function getSavedMusicEnabled() {
  if (typeof window === 'undefined') return true
  const saved = localStorage.getItem(MUSIC_KEY)
  // Default: music on
  if (saved === null) return true
  return saved === 'on'
}

export function setSavedMusicEnabled(enabled) {
  if (typeof window === 'undefined') return
  localStorage.setItem(MUSIC_KEY, enabled ? 'on' : 'off')
}
