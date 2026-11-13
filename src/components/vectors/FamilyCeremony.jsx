import { motion } from 'framer-motion'

export function FamilyCeremony({ className = '' }) {
  return (
    <svg
      viewBox="0 0 900 720"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="famSky" x1="450" y1="40" x2="450" y2="420" gradientUnits="userSpaceOnUse">
          <stop stopColor="#f0e6a0" />
          <stop offset="1" stopColor="#fffdf5" stopOpacity="0.1" />
        </linearGradient>
        <linearGradient id="famRoof" x1="450" y1="90" x2="450" y2="230" gradientUnits="userSpaceOnUse">
          <stop stopColor="#b89a28" />
          <stop offset="1" stopColor="#8f7a12" />
        </linearGradient>
        <radialGradient id="famFlame" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(450 455) scale(28 42)">
          <stop stopColor="#fffdf5" />
          <stop offset="0.35" stopColor="#e0c23a" />
          <stop offset="1" stopColor="#e0c23a" stopOpacity="0" />
        </radialGradient>
      </defs>

      <ellipse cx="450" cy="240" rx="360" ry="190" fill="url(#famSky)" opacity="0.85" />

      {/* Mandap roof */}
      <path d="M200 255c38-92 118-160 250-160s212 68 250 160H200Z" fill="url(#famRoof)" />
      <path d="M225 255c34-78 108-136 225-136s191 58 225 136H225Z" fill="#b89a28" opacity="0.5" />
      <path d="M450 55c-8 14-14 24-14 34a14 14 0 1 0 28 0c0-10-6-20-14-34Z" fill="#e0c23a" />
      <circle cx="450" cy="92" r="7" fill="#fffdf5" />
      <ellipse cx="450" cy="120" rx="18" ry="8" fill="#8f7a12" />

      {/* Pillars */}
      <rect x="248" y="255" width="32" height="255" rx="6" fill="#ebe090" stroke="#b89a28" strokeWidth="2" />
      <rect x="240" y="244" width="48" height="16" rx="4" fill="#8f7a12" />
      <rect x="620" y="255" width="32" height="255" rx="6" fill="#ebe090" stroke="#b89a28" strokeWidth="2" />
      <rect x="612" y="244" width="48" height="16" rx="4" fill="#8f7a12" />

      {/* Garlands */}
      <path d="M264 260c38 52 88 52 126 0M390 260c38 52 88 52 126 0M516 260c38 52 88 52 126 0" stroke="#d4bc55" strokeWidth="4" fill="none" strokeLinecap="round" />
      {[300, 345, 430, 475, 560, 605].map((x, i) => (
        <motion.g
          key={x}
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 2.2 + i * 0.12, repeat: Infinity, ease: 'easeInOut' }}
        >
          <circle cx={x} cy={292 + (i % 2) * 16} r="8" fill="#e0c23a" />
          <circle cx={x} cy={292 + (i % 2) * 16} r="3" fill="#fffdf5" />
        </motion.g>
      ))}

      {/* Platform */}
      <ellipse cx="450" cy="555" rx="300" ry="32" fill="#ebe090" opacity="0.7" />
      <path d="M190 525h520l-26 40H216l-26-40Z" fill="#8f7a12" />

      {/* Mother — left, blessing */}
      <g>
        <ellipse cx="285" cy="340" rx="28" ry="30" fill="#f0e6a0" stroke="#d4bc55" strokeWidth="1.5" />
        <path d="M248 378c8-20 24-32 37-32s29 12 37 32v138c-14 20-32 30-37 30s-23-10-37-30V378Z" fill="#d4bc55" />
        <path d="M242 372c10-10 26-16 43-16s33 6 43 16c-8 24-24 40-43 40s-35-16-43-40Z" fill="#b89a28" />
        <circle cx="285" cy="316" r="16" fill="#8f7a12" />
        <circle cx="302" cy="322" r="10" fill="#8f7a12" />
        <circle cx="278" cy="338" r="2" fill="#8f7a12" />
        <circle cx="292" cy="338" r="2" fill="#8f7a12" />
        <path d="M278 348c4 4 10 4 14 0" stroke="#8f7a12" strokeWidth="1.5" strokeLinecap="round" />
        <motion.g
          animate={{ rotate: [-8, 6, -8] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          style={{ transformOrigin: '338px 405px' }}
        >
          <path d="M338 400c22-10 40-8 50 4" stroke="#f0e6a0" strokeWidth="9" strokeLinecap="round" />
          <circle cx="390" cy="406" r="8" fill="#f0e6a0" stroke="#d4bc55" strokeWidth="1" />
        </motion.g>
      </g>

      {/* Father — placing the thread */}
      <g>
        <ellipse cx="565" cy="325" rx="26" ry="28" fill="#f0e6a0" stroke="#d4bc55" strokeWidth="1.5" />
        <path d="M530 360c8-16 20-26 35-26s27 10 35 26v148c-12 18-26 28-35 28s-23-10-35-28V360Z" fill="#b89a28" />
        <path d="M524 354c8-8 22-14 41-14s33 6 41 14c-6 20-20 32-41 32s-35-12-41-32Z" fill="#8f7a12" />
        <path d="M548 318c4-8 14-10 24-4" fill="#8f7a12" />
        <circle cx="556" cy="322" r="2" fill="#8f7a12" />
        <circle cx="570" cy="322" r="2" fill="#8f7a12" />
        <path d="M552 334c6 5 14 5 20 0" stroke="#8f7a12" strokeWidth="2" strokeLinecap="round" />
        <motion.g
          animate={{ rotate: [0, -7, 0] }}
          transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut' }}
          style={{ transformOrigin: '525px 395px' }}
        >
          <path d="M532 385c-32 10-55 28-68 48" stroke="#f0e6a0" strokeWidth="10" strokeLinecap="round" />
          <circle cx="458" cy="438" r="7" fill="#f0e6a0" />
        </motion.g>
      </g>

      {/* Priest — offering to fire */}
      <g>
        <ellipse cx="700" cy="345" rx="24" ry="26" fill="#f0e6a0" stroke="#d4bc55" strokeWidth="1.5" />
        <path d="M670 378c6-14 18-24 30-24s24 10 30 24v140c-10 16-22 24-30 24s-20-8-30-24V378Z" fill="#ebe090" stroke="#d4bc55" strokeWidth="1.5" />
        <path d="M664 372c6-6 18-10 36-10s30 4 36 10c-4 16-16 26-36 26s-32-10-36-26Z" fill="#d4bc55" />
        <circle cx="700" cy="340" r="3.5" fill="#e0c23a" />
        <circle cx="692" cy="342" r="2" fill="#8f7a12" />
        <circle cx="708" cy="342" r="2" fill="#8f7a12" />
        <motion.g
          animate={{ rotate: [-10, 12, -10] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          style={{ transformOrigin: '665px 440px' }}
        >
          <path d="M670 430c-48 14-82 36-105 58" stroke="#8f7a12" strokeWidth="5" strokeLinecap="round" />
          <ellipse cx="556" cy="492" rx="12" ry="7" fill="#b89a28" />
        </motion.g>
      </g>

      {/* Boy — sacred thread ceremony */}
      <g>
        <motion.circle
          cx="430"
          cy="332"
          r="52"
          fill="#f7efc0"
          animate={{ opacity: [0.45, 0.8, 0.45], scale: [1, 1.06, 1] }}
          transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
          style={{ transformOrigin: '430px 332px' }}
        />
        <ellipse cx="430" cy="320" rx="25" ry="27" fill="#f0e6a0" stroke="#d4bc55" strokeWidth="1.5" />
        <path d="M408 300c10-16 26-20 44-16 2 12-2 20-10 24-12-4-24-4-34-8Z" fill="#8f7a12" />
        <circle cx="450" cy="290" r="7" fill="#8f7a12" />
        <circle cx="422" cy="318" r="2.2" fill="#8f7a12" />
        <circle cx="438" cy="318" r="2.2" fill="#8f7a12" />
        <path d="M422 328c5 4 12 4 16 0" stroke="#8f7a12" strokeWidth="1.5" strokeLinecap="round" />

        <path d="M398 365c8-14 20-22 32-22s24 8 32 22v155c-12 14-24 22-32 22s-20-8-32-22V365Z" fill="#fffdf5" stroke="#d4bc55" strokeWidth="1.5" />
        <path d="M392 360c6-6 18-10 38-10s32 4 38 10c-4 14-16 24-38 24s-34-10-38-24Z" fill="#ebe090" />

        {/* Sacred thread */}
        <motion.g
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <path d="M405 372c20 5 40 5 60 0" stroke="#e0c23a" strokeWidth="3" strokeLinecap="round" />
          <path d="M403 388c22 6 44 6 64 0" stroke="#e0c23a" strokeWidth="2.6" strokeLinecap="round" />
          <path d="M402 404c24 6 46 6 66 0" stroke="#e0c23a" strokeWidth="2.4" strokeLinecap="round" />
          <path d="M466 372c10 32 12 68 5 105" stroke="#e0c23a" strokeWidth="2.4" strokeLinecap="round" />
        </motion.g>

        <motion.g
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <path d="M416 435c5-16 12-24 14-24s9 8 14 24c-5 8-12 10-14 10s-9-2-14-10Z" fill="#f0e6a0" stroke="#d4bc55" strokeWidth="1" />
        </motion.g>
      </g>

      {/* Homa fire */}
      <ellipse cx="450" cy="518" rx="48" ry="14" fill="#8f7a12" opacity="0.85" />
      <rect x="418" y="490" width="64" height="30" rx="6" fill="#b89a28" />
      <motion.path
        d="M450 428c-10 18-16 28-16 38a16 16 0 1 0 32 0c0-10-6-20-16-38Z"
        fill="url(#famFlame)"
        animate={{ opacity: [0.75, 1, 0.75], scaleY: [1, 1.15, 1] }}
        transition={{ duration: 1.25, repeat: Infinity, ease: 'easeInOut' }}
        style={{ transformOrigin: '450px 475px' }}
      />
      <motion.path
        d="M450 445c-5 10-8 16-8 22a8 8 0 1 0 16 0c0-6-3-12-8-22Z"
        fill="#fffdf5"
        animate={{ opacity: [0.75, 1, 0.75] }}
        transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Ambient petals in scene */}
      {[
        { x: 210, y: 290, d: 4 },
        { x: 720, y: 270, d: 3.5 },
        { x: 330, y: 210, d: 4.8 },
        { x: 610, y: 200, d: 4.2 },
      ].map((p, i) => (
        <motion.g
          key={i}
          animate={{ y: [0, 20, 0], rotate: [0, 30, -15, 0], opacity: [0.4, 0.85, 0.4] }}
          transition={{ duration: p.d, repeat: Infinity, ease: 'easeInOut', delay: i * 0.35 }}
          style={{ transformOrigin: `${p.x}px ${p.y}px` }}
        >
          <ellipse cx={p.x} cy={p.y} rx="9" ry="5" fill="#e0c23a" />
        </motion.g>
      ))}
    </svg>
  )
}
