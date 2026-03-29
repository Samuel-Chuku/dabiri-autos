'use client'

import { useEffect, useState } from 'react'

const QUADRANTS = [
  {
    clip: 'polygon(0 0, 50% 0, 50% 50%, 0 50%)',
    dx: -52,
    dy: -52,
  },
  {
    clip: 'polygon(50% 0, 100% 0, 100% 50%, 50% 50%)',
    dx: 52,
    dy: -52,
  },
  {
    clip: 'polygon(0 50%, 50% 50%, 50% 100%, 0 100%)',
    dx: -52,
    dy: 52,
  },
  {
    clip: 'polygon(50% 50%, 100% 50%, 100% 100%, 50% 100%)',
    dx: 52,
    dy: 52,
  },
]

export function LogoSplash() {
  const [phase, setPhase] = useState<'enter' | 'hold' | 'exit' | 'done'>('enter')

  useEffect(() => {
    const t1 = setTimeout(() => setPhase('hold'), 650)
    const t2 = setTimeout(() => setPhase('exit'), 1600)
    const t3 = setTimeout(() => setPhase('done'), 2200)
    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
      clearTimeout(t3)
    }
  }, [])

  if (phase === 'done') return null

  const entering = phase === 'enter'
  const exiting = phase === 'exit'
  const holding = phase === 'hold'

  return (
    <div
      className="fixed inset-0 z-[9999] bg-black flex items-center justify-center pointer-events-none"
      style={{ opacity: exiting ? 0 : 1, transition: 'opacity 600ms ease' }}
      aria-hidden="true"
    >
      {/* Ambient red glow — pulses during hold */}
      <div
        className="absolute rounded-full blur-3xl"
        style={{
          width: '28rem',
          height: '28rem',
          background: 'radial-gradient(circle, rgba(229,57,53,0.22) 0%, transparent 70%)',
          opacity: holding ? 1 : 0,
          transform: holding ? 'scale(1.05)' : 'scale(1)',
          transition: 'opacity 500ms ease, transform 600ms ease',
        }}
      />

      {/* Logo container */}
      <div
        className="relative"
        style={{
          width: 'min(72vw, 480px)',
          aspectRatio: '3 / 1',
          transform: holding ? 'scale(1.04)' : 'scale(1)',
          transition: 'transform 600ms cubic-bezier(0.22,1,0.36,1)',
        }}
      >
        {QUADRANTS.map(({ clip, dx, dy }, i) => (
          <img
            key={i}
            src="/dabiri-logo.png"
            alt={i === 0 ? 'Dabiri Autos' : ''}
            className="absolute inset-0 w-full h-full object-contain"
            style={{
              clipPath: clip,
              transform: entering
                ? `translate(${dx}px, ${dy}px)`
                : 'translate(0, 0)',
              opacity: entering ? 0 : 1,
              transition: `transform 700ms cubic-bezier(0.22,1,0.36,1), opacity 350ms ease`,
            }}
          />
        ))}
      </div>

      {/* Tagline */}
      <p
        className="absolute text-gray-500 text-[10px] tracking-[0.35em] uppercase"
        style={{
          bottom: 'calc(50% - min(36vw, 240px) - 2rem)',
          opacity: holding ? 1 : 0,
          transition: 'opacity 400ms ease 250ms',
        }}
      >
        iBUY &bull; iSELL &bull; iSWAP
      </p>
    </div>
  )
}
