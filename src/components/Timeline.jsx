import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

export function Timeline() {
  const { t } = useTranslation()
  const events = t('timeline.events', { returnObjects: true })

  return (
    <section id="day" className="relative bg-foam/50 py-14 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="max-w-2xl"
        >
          <p className="text-sm text-leaf">{t('timeline.eyebrow')}</p>
          <h2 className="mt-2 font-display text-[clamp(1.75rem,5vw,2.5rem)] text-forest">
            {t('timeline.title')}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            {t('timeline.intro')}
          </p>
        </motion.div>

        <ol className="mt-8 space-y-0 sm:mt-12 lg:mt-14">
          {Array.isArray(events) &&
            events.map((event, index) => (
              <motion.li
                key={event.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="grid gap-1.5 border-b border-leaf/15 py-5 last:border-b-0 md:grid-cols-[minmax(9rem,12rem)_1fr] md:gap-8 md:py-7"
              >
                <p className="text-sm font-medium leading-snug text-gold md:pt-1">
                  {event.time}
                </p>
                <div className="min-w-0">
                  <h3 className="font-display text-lg text-forest sm:text-xl md:text-2xl">
                    {event.title}
                  </h3>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted sm:text-[0.95rem]">
                    {event.detail}
                  </p>
                </div>
              </motion.li>
            ))}
        </ol>
      </div>
    </section>
  )
}
