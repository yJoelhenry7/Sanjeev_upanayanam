export function HeroMandap({ className = '' }) {
  return (
    <svg
      viewBox="0 0 900 720"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="sky" x1="450" y1="0" x2="450" y2="520" gradientUnits="userSpaceOnUse">
          <stop stopColor="#f7efc0" />
          <stop offset="1" stopColor="#fbf6dc" stopOpacity="0.2" />
        </linearGradient>
        <linearGradient id="roof" x1="450" y1="80" x2="450" y2="220" gradientUnits="userSpaceOnUse">
          <stop stopColor="#b89a28" />
          <stop offset="1" stopColor="#8f7a12" />
        </linearGradient>
        <linearGradient id="pillar" x1="0" y1="0" x2="1" y2="0">
          <stop stopColor="#ebe090" />
          <stop offset="0.5" stopColor="#f7efc0" />
          <stop offset="1" stopColor="#d4bc55" />
        </linearGradient>
        <linearGradient id="ground" x1="450" y1="560" x2="450" y2="720" gradientUnits="userSpaceOnUse">
          <stop stopColor="#ebe090" stopOpacity="0.35" />
          <stop offset="1" stopColor="#b89a28" stopOpacity="0.15" />
        </linearGradient>
        <radialGradient id="flame" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(450 470) scale(28 40)">
          <stop stopColor="#f0e6a0" />
          <stop offset="0.55" stopColor="#e0c23a" stopOpacity="0.8" />
          <stop offset="1" stopColor="#e0c23a" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Soft sky wash */}
      <ellipse cx="450" cy="220" rx="380" ry="200" fill="url(#sky)" />

      {/* Distant hills */}
      <path
        d="M40 500c80-70 150-90 230-70 70 18 120 10 180-30 70-48 140-40 210 10 60 42 120 50 200 20v90H40v-20Z"
        fill="#ebe090"
        opacity="0.25"
      />
      <path
        d="M0 540c90-50 170-60 260-35 80 22 140 8 210-35 75-46 155-40 230 5 55 32 110 40 180 18v130H0V540Z"
        fill="#d4bc55"
        opacity="0.28"
      />

      {/* Ground */}
      <ellipse cx="450" cy="640" rx="340" ry="55" fill="url(#ground)" />

      {/* Mandap base platform */}
      <path
        d="M210 560h480l-28 40H238l-28-40Z"
        fill="#8f7a12"
        opacity="0.85"
      />
      <rect x="238" y="600" width="424" height="14" rx="4" fill="#b89a28" />

      {/* Left pillar */}
      <rect x="250" y="280" width="36" height="280" rx="6" fill="url(#pillar)" />
      <rect x="242" y="268" width="52" height="18" rx="4" fill="#8f7a12" />
      <rect x="242" y="548" width="52" height="16" rx="4" fill="#8f7a12" />

      {/* Right pillar */}
      <rect x="614" y="280" width="36" height="280" rx="6" fill="url(#pillar)" />
      <rect x="606" y="268" width="52" height="18" rx="4" fill="#8f7a12" />
      <rect x="606" y="548" width="52" height="16" rx="4" fill="#8f7a12" />

      {/* Center pillars (lighter) */}
      <rect x="360" y="300" width="22" height="260" rx="4" fill="#ebe090" opacity="0.7" />
      <rect x="518" y="300" width="22" height="260" rx="4" fill="#ebe090" opacity="0.7" />

      {/* Roof canopy */}
      <path
        d="M200 280c40-90 120-160 250-160s210 70 250 160H200Z"
        fill="url(#roof)"
      />
      <path
        d="M220 280c36-78 110-140 230-140s194 62 230 140H220Z"
        fill="#b89a28"
        opacity="0.45"
      />
      {/* Roof crest / kalasha */}
      <path
        d="M450 70c-8 14-14 24-14 34a14 14 0 1 0 28 0c0-10-6-20-14-34Z"
        fill="#e0c23a"
      />
      <circle cx="450" cy="108" r="7" fill="#f0e6a0" />
      <rect x="444" y="114" width="12" height="18" rx="3" fill="#e0c23a" />
      <ellipse cx="450" cy="136" rx="18" ry="8" fill="#8f7a12" />

      {/* Torana / hanging garlands */}
      <path
        d="M268 286c40 55 90 55 130 0"
        stroke="#ebe090"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M398 286c40 55 90 55 130 0"
        stroke="#ebe090"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M528 286c40 55 90 55 130 0"
        stroke="#ebe090"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />

      {/* Garland flowers */}
      {[300, 340, 380, 440, 480, 520, 580, 620].map((x, i) => (
        <g key={x} transform={`translate(${x} ${320 + (i % 2) * 18})`}>
          <circle r="7" fill="#f7efc0" />
          <circle r="3" fill="#e0c23a" />
        </g>
      ))}

      {/* Sacred fire / homa kund */}
      <ellipse cx="450" cy="520" rx="48" ry="14" fill="#8f7a12" opacity="0.7" />
      <rect x="418" y="490" width="64" height="30" rx="6" fill="#b89a28" />
      <path
        d="M450 430c-10 18-16 28-16 38a16 16 0 1 0 32 0c0-10-6-20-16-38Z"
        fill="url(#flame)"
        className="animate-glow"
      />
      <path
        d="M450 445c-5 10-8 16-8 22a8 8 0 1 0 16 0c0-6-3-12-8-22Z"
        fill="#f0e6a0"
        opacity="0.9"
      />

      {/* Banana leaf accents left */}
      <g opacity="0.85">
        <path
          d="M120 420c40-80 70-100 90-90-10 40-20 90-50 140-20-10-35-30-40-50Z"
          fill="#b89a28"
        />
        <path
          d="M140 400c30-55 55-70 72-62-8 30-18 70-42 108"
          stroke="#f7efc0"
          strokeWidth="1.5"
          fill="none"
          opacity="0.5"
        />
      </g>

      {/* Banana leaf accents right */}
      <g opacity="0.85">
        <path
          d="M780 420c-40-80-70-100-90-90 10 40 20 90 50 140 20-10 35-30 40-50Z"
          fill="#b89a28"
        />
        <path
          d="M760 400c-30-55-55-70-72-62 8 30 18 70 42 108"
          stroke="#f7efc0"
          strokeWidth="1.5"
          fill="none"
          opacity="0.5"
        />
      </g>

      {/* Floating lotus left */}
      <g className="animate-float" style={{ transformOrigin: '160px 560px' }}>
        <path
          d="M160 580c-12-10-22-22-26-36 10 5 20 8 26 8s16-3 26-8c-4 14-14 26-26 36Z"
          fill="#ebe090"
        />
        <path
          d="M160 572c-7-8-12-16-14-26 5 3 10 5 14 5s9-2 14-5c-2 10-7 18-14 26Z"
          fill="#f7efc0"
        />
      </g>

      {/* Floating lotus right */}
      <g className="animate-float" style={{ transformOrigin: '740px 560px', animationDelay: '1.5s' }}>
        <path
          d="M740 580c-12-10-22-22-26-36 10 5 20 8 26 8s16-3 26-8c-4 14-14 26-26 36Z"
          fill="#ebe090"
        />
        <path
          d="M740 572c-7-8-12-16-14-26 5 3 10 5 14 5s9-2 14-5c-2 10-7 18-14 26Z"
          fill="#f7efc0"
        />
      </g>

      {/* Soft birds */}
      <path
        d="M620 150c12 4 22 2 28-4-8 2-16 0-22-6 2 6 0 10-6 10Z"
        fill="#8f7a12"
        opacity="0.35"
        className="animate-drift"
      />
      <path
        d="M680 180c10 3 18 1 24-3-7 2-14 0-19-5 2 5 0 8-5 8Z"
        fill="#8f7a12"
        opacity="0.25"
        className="animate-drift"
        style={{ animationDelay: '2s' }}
      />
    </svg>
  )
}
