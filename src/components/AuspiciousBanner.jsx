import { useTranslation } from 'react-i18next'

export function AuspiciousBanner() {
  const { t } = useTranslation()
  const phrases = [
    t('auspicious.srirasthu'),
    t('auspicious.subhamasthu'),
    t('auspicious.avighnamasthu'),
  ]

  return (
    <div className="relative z-20 px-4 pb-3 pt-[max(0.75rem,env(safe-area-inset-top))] sm:px-6 sm:pb-4 sm:pt-4 lg:px-8">
      <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
        <img
          src="/vinayaka.png"
          alt={t('auspicious.vinayaka')}
          className="h-8 w-auto object-contain drop-shadow-md sm:h-12 md:h-16"
        />

        <div className="mt-3 flex w-full flex-col items-center gap-2 sm:mt-4 sm:flex-row sm:justify-between sm:gap-8 md:gap-12">
          {phrases.map((phrase) => (
            <p
              key={phrase}
              className="font-display text-base font-medium tracking-wide text-forest drop-shadow-[0_1px_10px_rgba(255,253,245,0.95)] sm:text-lg md:text-xl"
            >
              {phrase}
            </p>
          ))}
        </div>
      </div>
    </div>
  )
}
