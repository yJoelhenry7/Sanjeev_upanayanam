import { useTranslation } from 'react-i18next'
import { setSavedLanguage } from '@/lib/preferences'
import { cn } from '@/lib/utils'

export function LanguageSwitcher({ className = '' }) {
  const { i18n, t } = useTranslation()
  const current = i18n.resolvedLanguage || i18n.language

  function switchTo(lng) {
    setSavedLanguage(lng)
    i18n.changeLanguage(lng)
  }

  return (
    <div
      className={cn(
        'pointer-events-auto inline-flex items-center rounded-full border border-leaf/20 bg-ivory/95 p-1 shadow-[0_10px_30px_-12px_rgba(143,122,18,0.45)] backdrop-blur-md',
        className,
      )}
      role="group"
      aria-label="Language"
    >
      <button
        type="button"
        onClick={() => switchTo('en')}
        className={cn(
          'rounded-full px-3.5 py-2 text-xs font-medium transition sm:px-4 sm:text-sm',
          current.startsWith('en')
            ? 'bg-forest text-ivory shadow-sm'
            : 'text-muted hover:text-forest',
        )}
      >
        {t('nav.english')}
      </button>
      <button
        type="button"
        onClick={() => switchTo('te')}
        className={cn(
          'rounded-full px-3.5 py-2 text-xs font-medium transition sm:px-4 sm:text-sm',
          current.startsWith('te')
            ? 'bg-forest text-ivory shadow-sm'
            : 'text-muted hover:text-forest',
        )}
      >
        {t('nav.telugu')}
      </button>
    </div>
  )
}
