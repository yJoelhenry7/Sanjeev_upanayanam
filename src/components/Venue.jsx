import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Button } from '@/components/ui/button'
import { RSVP_FORM_URL } from '@/lib/rsvp'

const MAP_LINK = 'https://maps.app.goo.gl/EbbAvTEEMUTAZ16z6'
const MAP_LAT = 16.5410534
const MAP_LNG = 81.5243862

export function Venue() {
  const { t, i18n } = useTranslation()
  const lang = (i18n.resolvedLanguage || i18n.language || 'en').startsWith('te')
    ? 'te'
    : 'en'
  const embedSrc = `https://www.google.com/maps?q=${MAP_LAT},${MAP_LNG}&hl=${lang}&z=17&output=embed`

  return (
    <section id="venue" className="relative overflow-hidden py-14 sm:py-20 lg:py-28">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(184,154,40,0.08),transparent)]" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:gap-10 lg:grid-cols-2 lg:gap-14 lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
          >
            <p className="text-sm text-leaf">{t('venue.eyebrow')}</p>
            <h2 className="mt-2 font-display text-[clamp(1.75rem,5vw,2.5rem)] text-forest">
              {t('venue.title')}
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-muted">
              {t('venue.intro')}
            </p>

            <dl className="mt-8 grid gap-5 sm:grid-cols-3 sm:gap-4 lg:grid-cols-1 lg:gap-5">
              <div>
                <dt className="text-xs font-medium tracking-[0.16em] uppercase text-gold">
                  {t('venue.dateLabel')}
                </dt>
                <dd className="mt-1 font-display text-lg text-forest sm:text-xl lg:text-2xl">
                  {t('venue.dateValue')}
                </dd>
              </div>
              <div>
                <dt className="text-xs font-medium tracking-[0.16em] uppercase text-gold">
                  {t('venue.muhurthamLabel')}
                </dt>
                <dd className="mt-1 font-display text-lg text-forest sm:text-xl lg:text-2xl">
                  {t('venue.muhurthamValue')}
                </dd>
                <p className="mt-1 text-sm text-muted">{t('venue.arriveBy')}</p>
              </div>
              <div>
                <dt className="text-xs font-medium tracking-[0.16em] uppercase text-gold">
                  {t('venue.venueLabel')}
                </dt>
                <dd className="mt-1 font-display text-lg text-forest sm:text-xl lg:text-2xl">
                  {t('venue.venueValue')}
                </dd>
                <p className="mt-1 text-sm text-muted">{t('venue.venueHint')}</p>
              </div>
            </dl>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="w-full min-h-11 sm:w-auto">
                <a href={MAP_LINK} target="_blank" rel="noopener noreferrer">
                  {t('venue.openMaps')}
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full min-h-11 sm:w-auto">
                <a href={RSVP_FORM_URL} target="_blank" rel="noopener noreferrer">
                  {t('venue.rsvpFirst')}
                </a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="overflow-hidden rounded-2xl border border-leaf/15 bg-foam shadow-[0_18px_50px_-28px_rgba(143,122,18,0.28)]"
          >
            <div className="relative aspect-[4/3] w-full min-h-[220px] sm:min-h-[280px] lg:min-h-[320px]">
              <iframe
                title={t('venue.viewLocation')}
                src={embedSrc}
                className="absolute inset-0 h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
            <div className="flex flex-col gap-2 border-t border-leaf/10 bg-ivory/90 px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:gap-3 sm:px-5">
              <p className="text-sm text-muted">{t('venue.mapHint')}</p>
              <a
                href={MAP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 text-sm font-medium text-leaf underline-offset-4 hover:underline"
              >
                {t('venue.getDirections')}
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
