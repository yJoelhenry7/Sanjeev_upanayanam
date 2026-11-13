import { useEffect, useMemo, useState } from 'react'

function Petal({ variant = 0 }) {
  if (variant === 1) {
    return (
      <svg viewBox="0 0 20 24" className="h-full w-full" aria-hidden="true">
        <path d="M10 2c4 5 7 10 7 14a7 7 0 1 1-14 0c0-4 3-9 7-14Z" fill="currentColor" />
      </svg>
    )
  }
  if (variant === 2) {
    return (
      <svg viewBox="0 0 24 20" className="h-full w-full" aria-hidden="true">
        <ellipse cx="12" cy="10" rx="10" ry="5.5" fill="currentColor" />
      </svg>
    )
  }
  return (
    <svg viewBox="0 0 22 22" className="h-full w-full" aria-hidden="true">
      <path
        d="M11 2c2.5 3.5 5 6 5 9.5A5 5 0 1 1 6 11.5C6 8 8.5 5.5 11 2Z"
        fill="currentColor"
      />
    </svg>
  )
}

export function FallingFlowers() {
  const [count, setCount] = useState(18)

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 640px)')
    const sync = () => setCount(mq.matches ? 12 : 22)
    sync()
    mq.addEventListener('change', sync)
    return () => mq.removeEventListener('change', sync)
  }, [])

  const petals = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => {
        const left = (i * 19 + (i % 4) * 9) % 100
        const size = 11 + (i % 5) * 3
        const duration = 10 + (i % 7) * 1.5
        const delay = (i * 0.7) % 11
        const drift = 18 + (i % 6) * 9
        const colors = ['text-gold', 'text-sage', 'text-leaf', 'text-gold-soft']
        return {
          id: i,
          left,
          size,
          duration,
          delay,
          drift,
          color: colors[i % colors.length],
          variant: i % 3,
          opacity: 0.28 + (i % 4) * 0.08,
        }
      }),
    [count],
  )

  return (
    <div className="pointer-events-none fixed inset-0 z-[45] overflow-hidden" aria-hidden="true">
      {petals.map((petal) => (
        <span
          key={petal.id}
          className={`absolute top-[-8%] ${petal.color}`}
          style={{
            left: `${petal.left}%`,
            width: petal.size,
            height: petal.size * 1.15,
            opacity: petal.opacity,
            '--fall-duration': `${petal.duration}s`,
            '--fall-delay': `${petal.delay}s`,
            '--fall-drift': `${petal.drift}px`,
            animation: `flower-fall var(--fall-duration) linear var(--fall-delay) infinite`,
          }}
        >
          <span
            className="block h-full w-full"
            style={{
              animation: `flower-sway ${3.5 + (petal.id % 4)}s ease-in-out ${petal.delay}s infinite`,
            }}
          >
            <Petal variant={petal.variant} />
          </span>
        </span>
      ))}
    </div>
  )
}
