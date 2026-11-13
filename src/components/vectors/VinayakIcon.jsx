export function VinayakIcon({ className = '' }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Aura */}
      <circle cx="32" cy="30" r="22" fill="currentColor" opacity="0.12" />
      {/* Crown / mukut */}
      <path
        d="M22 18c3-6 7-9 10-9s7 3 10 9c-3-2-6-3-10-3s-7 1-10 3Z"
        fill="currentColor"
        opacity="0.9"
      />
      <circle cx="32" cy="10" r="2.2" fill="currentColor" />
      {/* Head */}
      <ellipse cx="32" cy="28" rx="14" ry="13" fill="currentColor" opacity="0.85" />
      {/* Ears */}
      <path
        d="M16 26c-4 1-7 5-6 9 3-1 6-2 9-5-1-2-2-3-3-4Z"
        fill="currentColor"
        opacity="0.75"
      />
      <path
        d="M48 26c4 1 7 5 6 9-3-1-6-2-9-5 1-2 2-3 3-4Z"
        fill="currentColor"
        opacity="0.75"
      />
      {/* Trunk */}
      <path
        d="M32 34c2 2 4 5 3 9-1 4-4 7-7 8 4-1 9-4 10-10 1-4-1-7-6-7Z"
        fill="currentColor"
      />
      {/* Tusk hint */}
      <path
        d="M28 36c2 1 4 1 5-1"
        stroke="#fffdf5"
        strokeWidth="1.4"
        strokeLinecap="round"
        opacity="0.7"
      />
      {/* Eyes */}
      <circle cx="27" cy="26" r="1.6" fill="#fffdf5" />
      <circle cx="37" cy="26" r="1.6" fill="#fffdf5" />
      {/* Tilak */}
      <path d="M32 20v5" stroke="#fffdf5" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="32" cy="19" r="1.3" fill="#e0c23a" />
      {/* Body hint */}
      <path
        d="M22 42c3 8 8 12 10 12s7-4 10-12c-3 3-7 4-10 4s-7-1-10-4Z"
        fill="currentColor"
        opacity="0.55"
      />
    </svg>
  )
}
