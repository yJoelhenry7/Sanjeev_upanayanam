import { useTranslation } from 'react-i18next'

export function AuspiciousBanner() {
  const { t } = useTranslation()
  const phrases = [
    t('auspicious.srirasthu'),
    t('auspicious.subhamasthu'),
    t('auspicious.avighnamasthu'),
  ]

  return (
    <div className="relative z-20 pt-[max(0rem,env(safe-area-inset-top))]">
      {/* Edge-to-edge toran */}
      <div className="pointer-events-none relative w-full overflow-hidden leading-none">
        <img
          src="/garland_decor.png"
          alt=""
          aria-hidden="true"
          className="mx-auto block h-[4.75rem] w-full object-cover object-[center_12%] drop-shadow-sm sm:h-[5.75rem] md:h-[6.5rem] lg:h-[7rem]"
        />
      </div>

      {/* Vinayak sits in the garland’s center dip, then the three blessings */}
      <div className="relative z-10 mx-auto -mt-4 flex w-full max-w-3xl flex-col items-center px-4 text-center sm:-mt-5 sm:px-6 md:-mt-5 lg:px-8">
        <img
          src="/vinayaka.png"
          alt={t('auspicious.vinayaka')}
          className="h-11 w-auto object-contain drop-shadow-[0_2px_8px_rgba(255,255,255,0.9)] sm:h-14 md:h-16"
        />

        <div className="mt-2.5 flex w-full flex-row items-center justify-between gap-2 sm:mt-3 sm:gap-6 md:gap-10">
          {phrases.map((phrase) => (
            <p
              key={phrase}
              className="min-w-0 flex-1 text-center font-display text-[0.72rem] font-medium leading-snug tracking-wide text-forest sm:text-base md:text-lg lg:text-xl"
            >
              {phrase}
            </p>
          ))}
        </div>
      </div>
    </div>
  )
}
