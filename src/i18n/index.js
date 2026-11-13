import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from './locales/en.json'
import te from './locales/te.json'
import { getSavedLanguage, setSavedLanguage } from '@/lib/preferences'

const initialLanguage = getSavedLanguage()

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    te: { translation: te },
  },
  lng: initialLanguage,
  fallbackLng: 'en',
  supportedLngs: ['en', 'te'],
  interpolation: {
    escapeValue: false,
  },
})

function applyDocumentLanguage(lng) {
  if (typeof document === 'undefined') return
  const normalized = setSavedLanguage(lng)
  document.documentElement.lang = normalized
  document.documentElement.dataset.lang = normalized
  document.title = i18n.t('meta.title')
  const description = document.querySelector('meta[name="description"]')
  if (description) {
    description.setAttribute('content', i18n.t('meta.description'))
  }
}

applyDocumentLanguage(i18n.language)

i18n.on('languageChanged', (lng) => {
  applyDocumentLanguage(lng)
})

export default i18n
