'use client'

import { useEffect, useRef } from 'react'

const COPIES = 6
const SPEED_PX_PER_S = 80

export function BrandMarquee() {
  const trackRef = useRef<HTMLDivElement>(null)
  const img0Ref = useRef<HTMLImageElement>(null)

  useEffect(() => {
    function setup() {
      const img = img0Ref.current
      const track = trackRef.current
      if (!img || !track || img.offsetWidth === 0) return

      const imgW = img.offsetWidth
      track.style.setProperty('--unit-w', `${imgW}px`)
      track.style.animationDuration = `${imgW / SPEED_PX_PER_S}s`
    }

    const img = img0Ref.current
    if (!img) return
    if (img.complete && img.naturalWidth > 0) setup()
    else img.addEventListener('load', setup, { once: true })

    window.addEventListener('resize', setup)
    return () => window.removeEventListener('resize', setup)
  }, [])

  return (
    <div
      className="relative h-20 md:h-24 overflow-hidden bg-black flex items-center"
      aria-hidden="true"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#E53935]/40 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#E53935]/40 to-transparent" />

      <div ref={trackRef} className="flex items-center shrink-0 marquee-brand">
        {Array.from({ length: COPIES }, (_, i) => (
          <img
            key={i}
            ref={i === 0 ? img0Ref : undefined}
            src="/brand-logos.png"
            alt=""
            className="h-14 md:h-16 w-auto shrink-0 select-none"
            draggable={false}
          />
        ))}
      </div>
    </div>
  )
}
