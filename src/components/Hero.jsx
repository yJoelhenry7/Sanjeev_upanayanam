import { useMemo } from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Button } from '@/components/ui/button'
import { AuspiciousBanner } from '@/components/AuspiciousBanner'
import { RSVP_FORM_URL } from '@/lib/rsvp'

const HERO_IMAGE = '/Family%20Ceremony%20Around%20Sacred%20Fire.png'

function guestNameFromQuery() {
  const raw = new URLSearchParams(window.location.search).get('name')
  if (!raw) return null
  const cleaned = raw.trim().replace(/\s+/g, ' ').slice(0, 40)
  if (!cleaned) return null
  return cleaned.replace(/\b\w/g, (c) => c.toUpperCase())
}

export function Hero() {
  const { t } = useTranslation()
  const guestName = useMemo(() => guestNameFromQuery(), [])
  const inviteText = guestName
    ? t('hero.inviteNamed', { name: guestName })
    : t('hero.invite')

  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden">
      <div className="absolute inset-0">
        <motion.img
          initial={{ opacity: 0, scale: 1.03 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          src={HERO_IMAGE}
          alt={t('hero.imageAlt')}
          className="h-full w-full object-cover object-[center_28%] md:object-[center_35%]"
        />
        {/* Mobile: ~40% white overlay for readability */}
        <div className="absolute inset-0 bg-white/40 lg:hidden" />
        {/* Desktop: soft left-to-right fade */}
        <div className="absolute inset-0 hidden bg-gradient-to-r from-ivory via-ivory/80 to-transparent lg:block" />
      </div>

      <AuspiciousBanner />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 items-end px-4 pb-16 pt-6 sm:px-6 sm:pb-20 sm:pt-8 md:pb-24 lg:min-h-[calc(100svh-9rem)] lg:items-center lg:px-8 lg:pb-24 lg:pt-8">
        <div className="w-full max-w-xl lg:max-w-lg">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-sm text-leaf"
          >
            {inviteText}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="mt-2 font-display text-[clamp(1.85rem,7.5vw,5rem)] leading-[1.12] font-medium break-words text-forest"
          >
            {t('hero.name')}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-3 font-display text-lg text-sage italic sm:text-xl md:text-2xl"
          >
            {t('hero.subtitle')}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.5 }}
            className="mt-4 max-w-prose text-[0.95rem] leading-relaxed text-muted sm:mt-5 sm:text-base"
          >
            {t('hero.body')}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.58 }}
            className="mt-4 text-sm font-medium leading-snug text-leaf"
          >
            {t('hero.datetime')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.68 }}
            className="mt-6 flex flex-col gap-3 sm:mt-7 sm:flex-row sm:flex-wrap"
          >
            <Button asChild size="lg" className="w-full min-h-11 sm:w-auto">
              <a href={RSVP_FORM_URL} target="_blank" rel="noopener noreferrer">
                {t('hero.ctaRsvp')}
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="w-full min-h-11 sm:w-auto">
              <a href="#venue">{t('hero.ctaVenue')}</a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
