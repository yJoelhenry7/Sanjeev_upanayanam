import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

const FLORAL_BORDER = '/Golden%20Lotus%20Floral%20Border.png'

const EVENT_IMAGES = {
  0: '/Golden%20Ganesha%20Vector%20Illustration.png',
  1: '/Family%20Blessing%20Ceremony%20Trio.png',
  2: '/Sacred%20Fire%20Ceremony%20Beneath%20the%20Canopy.png',
  3: '/South%20Indian%20Family%20Blessing%20and%20Feast.png',
}

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

        <ol className="mt-8 sm:mt-12 lg:mt-14">
          {Array.isArray(events) &&
            events.map((event, index) => {
              const imageSrc = EVENT_IMAGES[index]
              const isLast = index === events.length - 1

              return (
                <motion.li
                  key={event.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  <div
                    className={
                      imageSrc
                        ? 'grid gap-3 py-5 md:grid-cols-[minmax(9rem,12rem)_1fr_auto] md:items-center md:gap-8 md:py-7'
                        : 'grid gap-1.5 py-5 md:grid-cols-[minmax(9rem,12rem)_1fr] md:gap-8 md:py-7'
                    }
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
                    {imageSrc && (
                      <div className="justify-self-end md:justify-self-center">
                        <img
                          src={imageSrc}
                          alt=""
                          aria-hidden="true"
                          className="h-24 w-auto object-contain drop-shadow-sm sm:h-28 md:h-32 lg:h-36"
                        />
                      </div>
                    )}
                  </div>

                  {!isLast && (
                    <div className="w-full py-1" aria-hidden="true">
                      <img
                        src={FLORAL_BORDER}
                        alt=""
                        className="h-2.5 w-full object-cover object-center opacity-90 sm:h-3 md:h-3.5"
                      />
                    </div>
                  )}
                </motion.li>
              )
            })}
        </ol>
      </div>
    </section>
  )
}
