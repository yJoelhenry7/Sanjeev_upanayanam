import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Button } from '@/components/ui/button'

const HERO_IMAGE = '/Family%20Ceremony%20Around%20Sacred%20Fire.png'

export function Hero() {
  const { t } = useTranslation()

  return (
    <section id="top" className="relative overflow-hidden">
      {/* Stacked on mobile/tablet; overlay from laptop up */}
      <div className="relative h-[52svh] min-h-[240px] max-h-[420px] w-full md:max-h-none md:h-[56svh] lg:absolute lg:inset-0 lg:h-auto lg:max-h-none lg:min-h-[100svh]">
        <motion.img
          initial={{ opacity: 0, scale: 1.03 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          src={HERO_IMAGE}
          alt={t('hero.imageAlt')}
          className="h-full w-full object-cover object-[center_28%] md:object-[center_35%]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ivory via-ivory/20 to-transparent lg:hidden" />
        <div className="absolute inset-0 hidden bg-gradient-to-r from-ivory via-ivory/80 to-transparent lg:block" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-6xl items-end px-4 pb-16 pt-5 sm:px-6 sm:pb-20 sm:pt-8 md:pb-24 lg:min-h-[100svh] lg:items-center lg:px-8 lg:pb-24 lg:pt-28">
        <div className="w-full max-w-xl lg:max-w-lg">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-sm text-leaf"
          >
            {t('hero.invite')}
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
              <a href="#blessings">{t('hero.ctaRsvp')}</a>
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
