'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import { ArrowRight, Sparkles } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { WhatsAppButton } from '@/components/shared/whatsapp-button'

const HERO_BACKGROUNDS = [
  { id: 'main', image: '/dabiri-bg.png', alt: 'Dabiri Autos car lot with lineup of vehicles' },
  { id: 'sonata', image: '/hero_sonanta.png', alt: 'Black Hyundai Sonata at Dabiri Autos' },
  { id: 'mercedes', image: '/hero_benzOut.png', alt: 'White Mercedes-Benz at Dabiri Autos' },
  { id: 'toyota', image: '/hero_4.png', alt: 'Silver Toyota Highlander at Dabiri Autos' },
] as const

const ROTATION_INTERVAL = 6000
const PAUSE_DURATION = 10000

export function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const pauseTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    if (isPaused) return
    const timer = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % HERO_BACKGROUNDS.length)
    }, ROTATION_INTERVAL)
    return () => clearInterval(timer)
  }, [isPaused])

  useEffect(() => {
    return () => {
      if (pauseTimerRef.current) clearTimeout(pauseTimerRef.current)
    }
  }, [])

  const goToSlide = useCallback((index: number) => {
    setActiveIndex(index)
    setIsPaused(true)
    if (pauseTimerRef.current) clearTimeout(pauseTimerRef.current)
    pauseTimerRef.current = setTimeout(() => setIsPaused(false), PAUSE_DURATION)
  }, [])

  return (
    <section
      id="home"
      className="relative min-h-[calc(100dvh-5rem)] flex items-center overflow-hidden"
    >
      {/* Rotating background images */}
      {HERO_BACKGROUNDS.map((bg, i) => (
        <div
          key={bg.id}
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ease-in-out ${
            i === activeIndex ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url(${bg.image})` }}
          role="img"
          aria-label={bg.alt}
          aria-hidden={i !== activeIndex}
        />
      ))}

      {/* Dark overlays for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/65 to-black/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/40" />
      <div className="absolute inset-0 bg-gradient-to-br from-[#E53935]/8 via-transparent to-transparent mix-blend-overlay" />

      {/* Ambient glow accents */}
      <div
        className="absolute top-[15%] right-[15%] w-80 h-80 bg-[#E53935]/10 rounded-full blur-[100px] animate-glow-pulse"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-[20%] left-[10%] w-60 h-60 bg-[#E53935]/5 rounded-full blur-[80px] animate-glow-pulse"
        style={{ animationDelay: '2s' }}
        aria-hidden="true"
      />

      {/* Noise texture */}
      <div className="absolute inset-0 noise-overlay pointer-events-none" aria-hidden="true" />

      <div className="relative container mx-auto px-4 py-12 md:py-20 lg:py-24">
        {/* Hero content — single column, centered on mobile, left on desktop */}
        <div className="max-w-2xl mx-auto lg:mx-0">
          <Badge className="mb-5 bg-white/10 text-[#E53935] border-[#E53935]/30 hover:bg-white/15 backdrop-blur-sm px-4 py-1.5 transition-all duration-300">
            <Sparkles className="w-3.5 h-3.5 mr-1.5" aria-hidden="true" />
            Lagos&apos; Premium Auto Dealer
          </Badge>

          <h1 className="font-display text-h1 text-white mb-5 md:mb-6 leading-[1.1] text-center lg:text-left">
            Drive Home Your Dream Car{' '}
            <span className="text-gradient">Today</span>
          </h1>

          <p className="text-body-lg text-gray-300/90 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed text-center lg:text-left">
            Verified vehicles, competitive prices, and a seamless experience — from Lagos to your driveway.{' '}
            <span className="text-[#E53935] font-semibold">
              iBUY &bull; iSELL &bull; iSWAP
            </span>
          </p>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start">
            <Link href="/inventory">
              <Button
                size="lg"
                className="bg-[#E53935] hover:bg-[#C62828] text-white font-bold text-base md:text-lg px-6 md:px-8 btn-luxury hover:scale-105 hover:shadow-xl hover:shadow-red-500/30 transition-all duration-300"
              >
                Browse Our Cars
                <ArrowRight className="w-5 h-5 ml-2" aria-hidden="true" />
              </Button>
            </Link>
            <WhatsAppButton />
          </div>
        </div>

        {/* Dot indicators for background rotation */}
        <div
          className="flex justify-center lg:justify-start gap-2 mt-10"
          role="tablist"
          aria-label="Select background image"
        >
          {HERO_BACKGROUNDS.map((bg, i) => (
            <button
              key={bg.id}
              className="carousel-dot"
              role="tab"
              aria-label={`Show ${bg.alt}`}
              aria-pressed={i === activeIndex}
              aria-selected={i === activeIndex}
              onClick={() => goToSlide(i)}
            />
          ))}
        </div>

      </div>

      {/* Bottom fade into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-900 to-transparent" aria-hidden="true" />
    </section>
  )
}
