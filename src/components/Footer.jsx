import { useTranslation } from 'react-i18next'
import { RSVP_FORM_URL } from '@/lib/rsvp'

export function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="relative overflow-hidden border-t border-leaf/10 bg-forest text-mint">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(235,224,144,0.35),transparent_55%)]" />

      <div className="relative mx-auto max-w-6xl px-4 py-12 pb-24 sm:px-6 sm:py-16 sm:pb-20 lg:px-8">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div className="min-w-0">
            <p className="font-display text-2xl break-words text-ivory sm:text-3xl">
              {t('footer.name')}
            </p>
            <p className="mt-1 text-sm leading-snug text-moss">{t('footer.meta')}</p>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-mint/75">
              {t('footer.note')}
            </p>
          </div>

          <div className="flex flex-wrap gap-x-5 gap-y-3 text-sm text-moss">
            <a href="#ceremony" className="hover:text-ivory">
              {t('footer.ceremony')}
            </a>
            <a href="#day" className="hover:text-ivory">
              {t('footer.day')}
            </a>
            <a href="#venue" className="hover:text-ivory">
              {t('footer.venue')}
            </a>
            <a
              href={RSVP_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-ivory"
            >
              {t('footer.rsvp')}
            </a>
            <a
              href="https://maps.app.goo.gl/F1fnmZoa3XkdBNM36"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-ivory"
            >
              {t('footer.maps')}
            </a>
          </div>
        </div>

      </div>
    </footer>
  )
}
