import { useEffect, useRef, useState } from 'react'
import { Volume2, VolumeX } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { getSavedMusicEnabled, setSavedMusicEnabled } from '@/lib/preferences'
import { cn } from '@/lib/utils'

const AUDIO_SRC = '/om.mp3'

export function BackgroundMusic({ className = '' }) {
  const { t } = useTranslation()
  const audioRef = useRef(null)
  const enabledRef = useRef(getSavedMusicEnabled())
  const [enabled, setEnabled] = useState(() => enabledRef.current)
  const [playing, setPlaying] = useState(false)

  useEffect(() => {
    const audio = new Audio(AUDIO_SRC)
    audio.loop = true
    audio.preload = 'auto'
    audio.volume = 0.45
    audioRef.current = audio

    const onPlay = () => setPlaying(true)
    const onPause = () => setPlaying(false)
    audio.addEventListener('play', onPlay)
    audio.addEventListener('pause', onPause)

    const tryPlay = () => {
      if (!enabledRef.current || !audioRef.current) return
      audioRef.current.play().catch(() => {})
    }

    if (enabledRef.current) {
      tryPlay()
    }

    const unlock = () => {
      tryPlay()
    }

    window.addEventListener('pointerdown', unlock)
    window.addEventListener('keydown', unlock)
    window.addEventListener('touchstart', unlock)

    return () => {
      window.removeEventListener('pointerdown', unlock)
      window.removeEventListener('keydown', unlock)
      window.removeEventListener('touchstart', unlock)
      audio.removeEventListener('play', onPlay)
      audio.removeEventListener('pause', onPause)
      audio.pause()
      audio.src = ''
      audioRef.current = null
    }
  }, [])

  function toggle() {
    const next = !enabledRef.current
    enabledRef.current = next
    setSavedMusicEnabled(next)
    setEnabled(next)

    const audio = audioRef.current
    if (!audio) return

    if (next) {
      audio.play().catch(() => {})
    } else {
      audio.pause()
    }
  }

  return (
    <button
      type="button"
      onPointerDown={(e) => e.stopPropagation()}
      onTouchStart={(e) => e.stopPropagation()}
      onClick={(e) => {
        e.stopPropagation()
        toggle()
      }}
      aria-pressed={enabled}
      aria-label={enabled ? t('music.mute') : t('music.play')}
      title={enabled ? t('music.mute') : t('music.play')}
      className={cn(
        'pointer-events-auto inline-flex h-11 w-11 items-center justify-center rounded-full border border-leaf/20 bg-ivory/95 text-forest shadow-[0_10px_30px_-12px_rgba(143,122,18,0.45)] backdrop-blur-md transition hover:bg-foam sm:h-12 sm:w-12',
        enabled && playing && 'ring-1 ring-leaf/30',
        className,
      )}
    >
      {enabled ? (
        <Volume2 className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={1.75} />
      ) : (
        <VolumeX className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={1.75} />
      )}
    </button>
  )
}
