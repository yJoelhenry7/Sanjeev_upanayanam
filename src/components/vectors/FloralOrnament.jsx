export function FloralOrnament({ className = '', flip = false }) {
  return (
    <svg
      viewBox="0 0 240 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={flip ? { transform: 'scaleX(-1)' } : undefined}
      aria-hidden="true"
    >
      <path
        d="M8 24c28-18 56-18 84 0 28 18 56 18 84 0 18-12 36-12 56 0"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <circle cx="120" cy="24" r="4.5" fill="currentColor" opacity="0.85" />
      <path
        d="M112 24c4-8 12-8 16 0-4 8-12 8-16 0Z"
        fill="currentColor"
        opacity="0.35"
      />
      <path
        d="M96 24c3-6 9-6 12 0M132 24c3-6 9-6 12 0"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.55"
      />
    </svg>
  )
}

export function LotusMark({ className = '' }) {
  return (
    <svg
      viewBox="0 0 80 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M40 56c-10-8-18-18-22-30 8 4 16 6 22 6s14-2 22-6c-4 12-12 22-22 30Z"
        fill="currentColor"
        opacity="0.25"
      />
      <path
        d="M40 52c-7-10-12-20-14-30 5 3 10 5 14 5s9-2 14-5c-2 10-7 20-14 30Z"
        fill="currentColor"
        opacity="0.45"
      />
      <path
        d="M40 48c-4-8-7-16-8-24 3 2 6 3 8 3s5-1 8-3c-1 8-4 16-8 24Z"
        fill="currentColor"
        opacity="0.75"
      />
      <path
        d="M18 28c6 2 14 4 22 4s16-2 22-4c-4-8-12-16-22-22-10 6-18 14-22 22Z"
        stroke="currentColor"
        strokeWidth="1.2"
        opacity="0.5"
      />
    </svg>
  )
}
