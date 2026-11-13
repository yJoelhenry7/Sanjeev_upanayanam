export function SacredThread({ className = '' }) {
  return (
    <svg
      viewBox="0 0 320 280"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="threadGold" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#f0e6a0" />
          <stop offset="1" stopColor="#e0c23a" />
        </linearGradient>
      </defs>

      {/* Soft mandala ring */}
      <circle cx="160" cy="140" r="110" stroke="#ebe090" strokeWidth="1" opacity="0.35" />
      <circle cx="160" cy="140" r="90" stroke="#d4bc55" strokeWidth="1" opacity="0.25" strokeDasharray="4 6" />

      {/* Stylized torso silhouette */}
      <path
        d="M160 48c28 0 48 22 48 50 0 18-8 34-20 44v70c0 12-12 22-28 22s-28-10-28-22v-70c-12-10-20-26-20-44 0-28 20-50 48-50Z"
        fill="#f7efc0"
        opacity="0.55"
      />

      {/* Janeu / sacred thread loops */}
      <path
        d="M132 110c40 8 70 8 110 0"
        stroke="url(#threadGold)"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M128 128c48 12 80 12 118 0"
        stroke="url(#threadGold)"
        strokeWidth="2.2"
        strokeLinecap="round"
        fill="none"
        opacity="0.85"
      />
      <path
        d="M125 146c52 14 86 14 124 0"
        stroke="url(#threadGold)"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        opacity="0.7"
      />

      {/* Thread draping to side */}
      <path
        d="M242 110c18 30 22 70 8 110"
        stroke="url(#threadGold)"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        opacity="0.8"
      />

      {/* Lotus at base */}
      <path
        d="M160 230c-14-12-26-26-30-42 12 6 22 9 30 9s18-3 30-9c-4 16-16 30-30 42Z"
        fill="#b89a28"
        opacity="0.7"
      />
      <path
        d="M160 222c-8-10-14-20-16-32 6 4 12 6 16 6s10-2 16-6c-2 12-8 22-16 32Z"
        fill="#ebe090"
      />
    </svg>
  )
}

export function DiyaRow({ className = '' }) {
  return (
    <svg
      viewBox="0 0 360 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {[60, 180, 300].map((x, i) => (
        <g key={x} transform={`translate(${x} 50)`}>
          <ellipse cx="0" cy="12" rx="28" ry="10" fill="#8f7a12" opacity="0.7" />
          <path d="M-24 8c8 14 40 14 48 0-8-10-40-10-48 0Z" fill="#b89a28" />
          <path
            d="M0 -28c-6 12-10 18-10 24a10 10 0 1 0 20 0c0-6-4-12-10-24Z"
            fill="#e0c23a"
            opacity={0.7 + i * 0.1}
            className="animate-glow"
            style={{ animationDelay: `${i * 0.6}s` }}
          />
          <path
            d="M0 -16c-3 6-5 9-5 12a5 5 0 1 0 10 0c0-3-2-6-5-12Z"
            fill="#f0e6a0"
          />
        </g>
      ))}
    </svg>
  )
}
