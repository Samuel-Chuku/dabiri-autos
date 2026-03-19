'use client'

import { ArrowRight, Sparkles } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { WhatsAppButton } from '@/components/shared/whatsapp-button'
import { SocialLinks } from '@/components/shared/social-links'
import { stats } from '@/data/stats'

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-[calc(100dvh-5rem)] flex items-center overflow-hidden"
    >
      {/* Background image with premium overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/dabiri-bg.png)' }}
        role="img"
        aria-label="Dabiri Autos dealership showroom"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/85 to-black/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/40" />
        {/* Red tint overlay for premium feel */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#E53935]/10 via-transparent to-transparent mix-blend-overlay" />
      </div>

      {/* Animated background elements */}
      <div
        className="absolute top-[15%] right-[15%] w-80 h-80 bg-[#E53935]/10 rounded-full blur-[100px] animate-glow-pulse"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-[20%] left-[10%] w-60 h-60 bg-[#E53935]/5 rounded-full blur-[80px] animate-glow-pulse"
        style={{ animationDelay: '2s' }}
        aria-hidden="true"
      />
      <div
        className="absolute top-[40%] right-[40%] w-40 h-40 bg-white/[0.03] rounded-full blur-[60px]"
        aria-hidden="true"
      />

      {/* Floating geometric accents */}
      <div className="absolute top-[20%] right-[25%] w-1 h-20 bg-gradient-to-b from-[#E53935]/40 to-transparent rotate-12" aria-hidden="true" />
      <div className="absolute bottom-[30%] right-[10%] w-20 h-20 border border-[#E53935]/10 rounded-full animate-orbit" style={{ animationDuration: '25s' }} aria-hidden="true" />
      <div className="absolute top-[60%] right-[20%] w-2 h-2 bg-[#E53935]/30 rounded-full animate-pulse" aria-hidden="true" />

      {/* Noise texture */}
      <div className="absolute inset-0 noise-overlay pointer-events-none" aria-hidden="true" />

      <div className="relative container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-2xl">
          <Badge className="mb-5 bg-white/10 text-[#E53935] border-[#E53935]/30 hover:bg-white/15 backdrop-blur-sm px-4 py-1.5 transition-all duration-300">
            <Sparkles className="w-3.5 h-3.5 mr-1.5" aria-hidden="true" />
            Trusted Nigerian Auto Dealer
          </Badge>
          <h1 className="font-display text-h1 text-white mb-5 md:mb-6 leading-[1.1]">
            Revving Up Your Ride With{' '}
            <span className="text-gradient">Top-Notch Cars</span>
          </h1>
          <p className="text-body-lg text-gray-300/90 mb-8 max-w-xl leading-relaxed">
            Your trusted partner for quality Nigerian used and foreign used vehicles. We
            specialize in Toyota, Lexus, and Mercedes-Benz.{' '}
            <span className="text-[#E53935] font-semibold"> iBUY &bull; iSELL &bull; iSWAP</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
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

          {/* Stats with glass cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 md:mt-14">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <div key={index} className="text-center md:text-left group p-3 rounded-xl bg-white/[0.04] backdrop-blur-sm border border-white/[0.06] hover:border-[#E53935]/20 transition-all duration-300 hover:bg-white/[0.07]">
                  <div className="flex items-center gap-2 md:gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#E53935]/20 flex items-center justify-center">
                      <Icon className="w-4 h-4 text-[#E53935]" aria-hidden="true" />
                    </div>
                    <div>
                      <div className="text-lg md:text-xl font-display font-bold text-white group-hover:text-[#E53935] transition-colors">
                        {stat.value}
                      </div>
                      <div className="text-xs text-gray-400">{stat.label}</div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="flex items-center gap-4 mt-10 md:mt-12 pt-6 border-t border-white/10">
            <SocialLinks showLabel />
          </div>
        </div>
      </div>

      {/* Bottom fade into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-900 to-transparent" aria-hidden="true" />
    </section>
  )
}
