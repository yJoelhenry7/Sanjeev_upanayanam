import { useEffect, useRef, useState } from 'react'
import { Music2, Volume2, VolumeX } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { getSavedMusicEnabled, setSavedMusicEnabled } from '@/lib/preferences'
import { cn } from '@/lib/utils'

const AUDIO_SRC = '/om.mp3'
/** Keep quiet — source file is quite loud at full gain */
const MUSIC_VOLUME = 0.08

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
    audio.volume = MUSIC_VOLUME
    audioRef.current = audio

    const applyVolume = () => {
      if (audioRef.current) audioRef.current.volume = MUSIC_VOLUME
    }

    const onPlay = () => {
      applyVolume()
      setPlaying(true)
    }
    const onPause = () => setPlaying(false)
    const onVolumeChange = () => {
      // Re-assert if something bumps volume back up
      if (audioRef.current && audioRef.current.volume > MUSIC_VOLUME + 0.01) {
        audioRef.current.volume = MUSIC_VOLUME
      }
    }
    audio.addEventListener('play', onPlay)
    audio.addEventListener('pause', onPause)
    audio.addEventListener('volumechange', onVolumeChange)

    const tryPlay = () => {
      if (!enabledRef.current || !audioRef.current) return
      applyVolume()
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
      audio.removeEventListener('volumechange', onVolumeChange)
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
      audio.volume = MUSIC_VOLUME
      audio.play().catch(() => {})
    } else {
      audio.pause()
    }
  }

  return (
    <div
      className={cn(
        'pointer-events-auto inline-flex items-center rounded-full border border-leaf/20 bg-ivory/95 p-1 shadow-[0_10px_30px_-12px_rgba(143,122,18,0.45)] backdrop-blur-md',
        enabled && playing && 'ring-1 ring-leaf/25',
        className,
      )}
      role="group"
      aria-label={t('music.label')}
      onPointerDown={(e) => e.stopPropagation()}
      onTouchStart={(e) => e.stopPropagation()}
    >
      <span
        className="inline-flex h-8 w-8 items-center justify-center text-forest sm:h-9 sm:w-9"
        aria-hidden="true"
      >
        <Music2 className="h-4 w-4" strokeWidth={1.75} />
      </span>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation()
          toggle()
        }}
        aria-pressed={enabled}
        aria-label={enabled ? t('music.mute') : t('music.play')}
        title={enabled ? t('music.mute') : t('music.play')}
        className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-forest text-ivory shadow-sm transition hover:bg-leaf sm:h-9 sm:w-9"
      >
        {enabled ? (
          <Volume2 className="h-4 w-4" strokeWidth={1.75} />
        ) : (
          <VolumeX className="h-4 w-4" strokeWidth={1.75} />
        )}
      </button>
    </div>
  )
}
