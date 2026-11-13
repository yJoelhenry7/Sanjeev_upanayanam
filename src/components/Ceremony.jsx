import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

export function Ceremony() {
  const { t } = useTranslation()
  const pillars = t('ceremony.pillars', { returnObjects: true })

  return (
    <section id="ceremony" className="relative py-14 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:gap-10 lg:grid-cols-[1fr_1.15fr] lg:gap-16 lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-sm text-leaf">{t('ceremony.eyebrow')}</p>
            <h2 className="mt-2 font-display text-[clamp(1.75rem,5vw,2.75rem)] leading-tight text-forest">
              {t('ceremony.title')}
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="max-w-xl text-base leading-relaxed text-muted md:text-lg"
          >
            {t('ceremony.intro')}
          </motion.p>
        </div>

        <div className="mt-10 grid gap-8 sm:mt-14 md:grid-cols-2 md:gap-8 lg:mt-16 lg:grid-cols-3 lg:gap-10">
          {Array.isArray(pillars) &&
            pillars.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                className="border-t border-leaf/25 pt-5"
              >
                <p className="font-display text-xs tracking-[0.2em] uppercase text-gold">
                  {String(index + 1).padStart(2, '0')}
                </p>
                <h3 className="mt-2 font-display text-xl text-forest sm:text-2xl">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted sm:text-[0.95rem]">
                  {item.body}
                </p>
              </motion.article>
            ))}
        </div>
      </div>
    </section>
  )
}
