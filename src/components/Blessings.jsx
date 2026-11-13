import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { RSVP_FORM_URL } from '@/lib/rsvp'

export function Blessings() {
  const { t } = useTranslation()
  const tips = [t('blessings.tip1'), t('blessings.tip2'), t('blessings.tip3')]

  return (
    <section id="blessings" className="relative overflow-hidden py-14 pb-28 sm:py-20 sm:pb-32 lg:py-28 lg:pb-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_20%,rgba(224,194,58,0.16),transparent_55%),linear-gradient(180deg,rgba(251,246,220,0.55),transparent_40%,rgba(247,239,192,0.35))]" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-sm text-leaf">{t('blessings.eyebrow')}</p>
            <h2 className="mt-2 font-display text-[clamp(1.85rem,5vw,2.75rem)] leading-tight text-forest">
              {t('blessings.title')}
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted md:text-lg">
              {t('blessings.intro')}
            </p>

            <div className="mt-8 grid gap-5 sm:mt-10 sm:grid-cols-3 sm:gap-6">
              {tips.map((tip, index) => (
                <motion.div
                  key={tip}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.5, delay: 0.08 * index }}
                  className="border-t border-leaf/25 pt-4"
                >
                  <p className="font-display text-xs tracking-[0.2em] uppercase text-gold">
                    {String(index + 1).padStart(2, '0')}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-ink sm:text-[0.95rem]">
                    {tip}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative"
          >
            <div className="absolute -inset-x-4 -inset-y-2 bg-gradient-to-br from-gold/15 via-transparent to-leaf/10 sm:-inset-x-6" />
            <div className="relative border-y border-leaf/20 py-8 sm:py-10">
              <p className="font-display text-2xl leading-snug text-forest sm:text-3xl">
                {t('blessings.ctaTitle')}
              </p>
              <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted sm:text-base">
                {t('blessings.ctaBody')}
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button asChild size="lg" className="min-h-11 w-full sm:w-auto">
                  <a href={RSVP_FORM_URL} target="_blank" rel="noopener noreferrer">
                    {t('blessings.submit')}
                    <ExternalLink className="size-4 opacity-80" aria-hidden />
                  </a>
                </Button>
                <p className="text-xs leading-snug text-muted sm:max-w-[12rem]">
                  {t('blessings.opensExternally')}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
