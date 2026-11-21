import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

/** Muhurtham — 29 Nov 2026, 9:40 AM IST */
const TARGET_MS = new Date('2026-11-29T09:40:00+05:30').getTime()

function getRemaining(now = Date.now()) {
  const diff = Math.max(0, TARGET_MS - now)
  const totalSeconds = Math.floor(diff / 1000)
  return {
    done: diff === 0,
    days: Math.floor(totalSeconds / 86400),
    hours: Math.floor((totalSeconds % 86400) / 3600),
    minutes: Math.floor((totalSeconds % 3600) / 60),
    seconds: totalSeconds % 60,
  }
}

function pad(n) {
  return String(n).padStart(2, '0')
}

export function Countdown() {
  const { t } = useTranslation()
  const [remaining, setRemaining] = useState(() => getRemaining())

  useEffect(() => {
    const id = window.setInterval(() => {
      setRemaining(getRemaining())
    }, 1000)
    return () => window.clearInterval(id)
  }, [])

  const units = [
    { key: 'days', value: remaining.days, label: t('countdown.days') },
    { key: 'hours', value: remaining.hours, label: t('countdown.hours') },
    { key: 'minutes', value: remaining.minutes, label: t('countdown.minutes') },
    { key: 'seconds', value: remaining.seconds, label: t('countdown.seconds') },
  ]

  return (
    <section id="countdown" className="relative overflow-hidden py-14 sm:py-20 lg:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(224,194,58,0.14),transparent_55%)]" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.65 }}
          className="text-center"
        >
          <p className="text-sm text-leaf">{t('countdown.eyebrow')}</p>
          <h2 className="mt-2 font-display text-[clamp(1.75rem,5vw,2.75rem)] text-forest">
            {t('countdown.title')}
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-muted sm:text-base">
            {remaining.done ? t('countdown.arrived') : t('countdown.intro')}
          </p>
        </motion.div>

        {!remaining.done && (
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="mx-auto mt-10 grid max-w-3xl grid-cols-4 gap-3 sm:mt-12 sm:gap-6 md:gap-8"
          >
            {units.map((unit, index) => (
              <div
                key={unit.key}
                className="border-t border-leaf/25 pt-4 text-center"
                style={{ animationDelay: `${index * 60}ms` }}
              >
                <p className="font-display text-[clamp(1.75rem,6vw,3.25rem)] font-medium leading-none tracking-tight text-forest tabular-nums">
                  {unit.key === 'days' ? unit.value : pad(unit.value)}
                </p>
                <p className="mt-2 text-[0.65rem] font-medium tracking-[0.18em] uppercase text-gold sm:text-xs">
                  {unit.label}
                </p>
              </div>
            ))}
          </motion.div>
        )}

        <p className="mt-8 text-center text-sm font-medium text-leaf sm:mt-10">
          {t('countdown.datetime')}
        </p>
      </div>
    </section>
  )
}
