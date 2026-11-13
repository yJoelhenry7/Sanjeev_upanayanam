import { LanguageSwitcher } from '@/components/LanguageSwitcher'
import { BackgroundMusic } from '@/components/BackgroundMusic'

export function FloatingControls() {
  return (
    <>
      <div className="pointer-events-none fixed bottom-[max(1.25rem,env(safe-area-inset-bottom))] left-[max(1rem,env(safe-area-inset-left))] z-[60] sm:bottom-6 sm:left-6">
        <LanguageSwitcher />
      </div>
      <div className="pointer-events-none fixed bottom-[max(1.25rem,env(safe-area-inset-bottom))] right-[max(1rem,env(safe-area-inset-right))] z-[60] sm:bottom-6 sm:right-6">
        <BackgroundMusic />
      </div>
    </>
  )
}
