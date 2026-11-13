import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export function Nav() {
  const { t } = useTranslation()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  const links = [
    { href: '#ceremony', label: t('nav.ceremony') },
    { href: '#day', label: t('nav.day') },
    { href: '#venue', label: t('nav.venue') },
    { href: '#blessings', label: t('nav.rsvp') },
  ]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  function close() {
    setOpen(false)
  }

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-400',
        scrolled || open
          ? 'border-b border-leaf/15 bg-ivory/95 backdrop-blur-md'
          : 'bg-gradient-to-b from-ivory/85 via-ivory/40 to-transparent backdrop-blur-[2px]',
      )}
    >
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-2 px-4 sm:h-16 sm:px-6 lg:px-8">
        <a
          href="#top"
          onClick={close}
          className="min-w-0 truncate font-display text-lg text-forest sm:text-xl"
        >
          {t('nav.brand')}
        </a>

        <nav className="hidden items-center gap-4 md:flex lg:gap-7">
          {links.slice(0, -1).map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="whitespace-nowrap text-sm text-muted transition-colors hover:text-forest"
            >
              {link.label}
            </a>
          ))}
          <Button asChild size="sm">
            <a href="#blessings">{t('nav.rsvp')}</a>
          </Button>
        </nav>

        <div className="flex shrink-0 items-center gap-2 md:hidden">
          <Button asChild size="sm">
            <a href="#blessings">{t('nav.rsvp')}</a>
          </Button>
          <button
            type="button"
            aria-label={open ? t('nav.closeMenu') : t('nav.openMenu')}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md text-forest"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="max-h-[70vh] overflow-y-auto border-t border-leaf/10 bg-ivory px-4 py-4 md:hidden">
          <ul className="space-y-1">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={close}
                  className="block rounded-md px-3 py-3 text-base text-forest hover:bg-foam"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
