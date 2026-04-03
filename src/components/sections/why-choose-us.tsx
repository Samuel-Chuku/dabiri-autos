'use client'

import { BadgeDollarSign, Wallet, HeartHandshake, Award } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { AuroraBg } from '@/components/shared/aurora-bg'

const reasons = [
  {
    icon: BadgeDollarSign,
    title: 'Competitive Pricing',
    description: 'We offer the best prices for both buying and selling your vehicle.',
    color: 'from-amber-500 to-orange-600',
  },
  {
    icon: Wallet,
    title: 'Flexible Payment',
    description: 'Car financing options available to help you drive your dream car home.',
    color: 'from-blue-500 to-indigo-600',
  },
  {
    icon: HeartHandshake,
    title: 'Expert Support',
    description: 'Our knowledgeable team is here to guide you through every step.',
    color: 'from-rose-500 to-pink-600',
  },
  {
    icon: Award,
    title: 'Trusted Service',
    description: 'Registered company (RC: 8313006) with thousands of satisfied customers.',
    color: 'from-[#E53935] to-[#B71C1C]',
  },
]

export function WhyChooseUsSection() {
  return (
    <AuroraBg>
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Light mode background */}
      <div className="absolute inset-0 bg-red-50 dark:hidden z-[1]" aria-hidden="true" />
      {/* Light mode: concentric arc rings — visible on red-50 */}
      <div className="dark:hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border-2 border-red-200 rounded-full z-[1]" aria-hidden="true" />
      <div className="dark:hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[560px] h-[560px] border border-red-300/50 rounded-full z-[1]" aria-hidden="true" />

      <div className="container mx-auto px-4 relative z-[2]">
        <div className="text-center mb-12 md:mb-16">
          <Badge className="mb-4 bg-[#E53935]/10 dark:bg-white/10 text-[#E53935] border-[#E53935]/20 backdrop-blur-sm px-4 py-1.5">
            Why Us
          </Badge>
          <h2 className="font-display text-h2 text-gray-900 dark:text-white mb-4">
            Why Choose <span className="text-gradient">Dabiri Autos?</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-body-lg">
            We are committed to providing you with the best car buying experience in Nigeria.
          </p>

          <div className="mt-8 md:mt-10 flex flex-col items-center text-gray-800 dark:text-white">
            {/* Speedometer */}
            <svg viewBox="0 0 200 115" className="w-44 md:w-56" aria-hidden="true">
              {/* Track — full grey background arc */}
              <path d="M 20 100 A 80 80 0 0 1 180 100" stroke="#e5e7eb" strokeWidth="10" fill="none" strokeLinecap="round" />
              {/* Red zone: 0–33% → (20,100) to (59.4,31.1) */}
              <path d="M 20 100 A 80 80 0 0 1 59.4 31.1" stroke="#E53935" strokeWidth="10" fill="none" strokeLinecap="round" />
              {/* Amber zone: 33–66% → (59.4,31.1) to (138.5,29.9) */}
              <path d="M 59.4 31.1 A 80 80 0 0 1 138.5 29.9" stroke="#F59E0B" strokeWidth="10" fill="none" strokeLinecap="round" />
              {/* Green zone: 66–100% → (138.5,29.9) to (180,100) */}
              <path d="M 138.5 29.9 A 80 80 0 0 1 180 100" stroke="#22C55E" strokeWidth="10" fill="none" strokeLinecap="round" />
              {/* Tick marks at 0/25/50/75/100% */}
              {[0, 25, 50, 75, 100].map((pct) => {
                const angle = Math.PI - (pct / 100) * Math.PI
                const x1 = 100 + 71 * Math.cos(angle)
                const y1 = 100 - 71 * Math.sin(angle)
                const x2 = 100 + 83 * Math.cos(angle)
                const y2 = 100 - 83 * Math.sin(angle)
                return <line key={pct} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" />
              })}
              {/* Needle at 98% */}
              <line x1="100" y1="100" x2="178" y2="96" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
              {/* Center hub */}
              <circle cx="100" cy="100" r="7" fill="#22C55E" />
              <circle cx="100" cy="100" r="3" fill="white" />
              {/* Value label */}
              <text x="100" y="88" textAnchor="middle" fontSize="22" fontWeight="800" fill="#22C55E" fontFamily="sans-serif">98%</text>
            </svg>
            <div className="text-sm md:text-base text-gray-500 dark:text-gray-400 -mt-1 tracking-widest uppercase">Customer Satisfaction</div>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {reasons.map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={index}
                className={`group opacity-0 animate-slide-up stagger-${index + 1}`}
              >
                <div className="h-full p-4 md:p-8 glass-card bg-white dark:bg-transparent border border-gray-100 dark:border-white/5 shadow-md dark:shadow-none rounded-2xl hover:border-[#E53935]/30 dark:hover:bg-white/[0.06] transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#E53935]/10">
                  {/* Icon with gradient bg and glow */}
                  <div className={`w-11 h-11 md:w-14 md:h-14 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg icon-glow`}>
                    <Icon className="w-5 h-5 md:w-7 md:h-7 text-white" strokeWidth={1.8} aria-hidden="true" />
                  </div>
                  <h3 className="text-sm md:text-h3 text-gray-900 dark:text-white mb-2 group-hover:text-[#E53935] transition-colors font-sans font-semibold">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-xs md:text-body leading-relaxed">{item.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
    </AuroraBg>
  )
}
