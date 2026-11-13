import { useState } from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export function Blessings() {
  const { t } = useTranslation()
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '',
    attending: 'yes',
    guests: '1',
    message: '',
  })

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="blessings" className="relative bg-foam/40 py-14 pb-24 sm:py-20 sm:pb-28 lg:py-28 lg:pb-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14 lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
          >
            <p className="text-sm text-leaf">{t('blessings.eyebrow')}</p>
            <h2 className="mt-2 font-display text-[clamp(1.75rem,5vw,2.5rem)] text-forest">
              {t('blessings.title')}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted">
              {t('blessings.intro')}
            </p>
            <ul className="mt-6 space-y-2 text-sm text-muted">
              <li>· {t('blessings.tip1')}</li>
              <li>· {t('blessings.tip2')}</li>
              <li>· {t('blessings.tip3')}</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="rounded-2xl border border-leaf/15 bg-ivory p-4 shadow-[0_18px_50px_-28px_rgba(143,122,18,0.28)] sm:p-6 md:p-7"
          >
            {submitted ? (
              <div className="flex min-h-[220px] flex-col justify-center py-6 sm:min-h-[260px]">
                <h3 className="font-display text-2xl text-forest sm:text-3xl">
                  {t('blessings.thanksTitle')}
                </h3>
                <p className="mt-3 max-w-sm text-muted leading-relaxed">
                  {t('blessings.thanksBody')}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <Field label={t('blessings.name')}>
                  <input
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className={inputClass}
                    placeholder={t('blessings.namePlaceholder')}
                    autoComplete="name"
                  />
                </Field>

                <fieldset>
                  <legend className="mb-2 block text-xs font-medium uppercase tracking-[0.16em] text-sage">
                    {t('blessings.attend')}
                  </legend>
                  <div className="grid grid-cols-1 gap-2 min-[400px]:grid-cols-2">
                    {[
                      { value: 'yes', label: t('blessings.yes') },
                      { value: 'no', label: t('blessings.no') },
                    ].map((option) => (
                      <button
                        key={option.value}
                        type="button"
                        onClick={() => setForm({ ...form, attending: option.value })}
                        className={cn(
                          'min-h-11 rounded-md border px-3 py-3 text-sm leading-snug transition',
                          form.attending === option.value
                            ? 'border-leaf bg-mint/70 text-forest'
                            : 'border-leaf/20 bg-foam/50 text-muted hover:border-leaf/40',
                        )}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                </fieldset>

                {form.attending === 'yes' && (
                  <Field label={t('blessings.guests')}>
                    <select
                      value={form.guests}
                      onChange={(e) => setForm({ ...form, guests: e.target.value })}
                      className={inputClass}
                    >
                      {['1', '2', '3', '4', '5+'].map((n) => (
                        <option key={n} value={n}>
                          {n}
                        </option>
                      ))}
                    </select>
                  </Field>
                )}

                <Field label={t('blessings.message')}>
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className={cn(inputClass, 'resize-none')}
                    placeholder={t('blessings.messagePlaceholder')}
                  />
                </Field>

                <Button type="submit" size="lg" className="w-full min-h-11">
                  {t('blessings.submit')}
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

const inputClass =
  'w-full rounded-md border border-leaf/20 bg-foam/70 px-4 py-3.5 text-base text-ink outline-none transition placeholder:text-muted/60 focus:border-leaf/50 focus:ring-2 focus:ring-leaf/20 sm:text-sm'

function Field({ label, children }) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs font-medium uppercase tracking-[0.16em] text-sage">
        {label}
      </span>
      {children}
    </label>
  )
}
