'use client'

import { Shield, BadgeDollarSign, Wallet, ArrowLeftRight, HeartHandshake, Award } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { AuroraBg } from '@/components/shared/aurora-bg'

const reasons = [
  {
    icon: Shield,
    title: 'Verified Vehicles',
    description: 'Every vehicle undergoes thorough inspection to ensure quality and reliability.',
    color: 'from-emerald-500 to-green-600',
  },
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
    icon: ArrowLeftRight,
    title: 'Trade-In Options',
    description: 'Upgrade your ride with our seamless iSWAP trade-in service.',
    color: 'from-violet-500 to-purple-600',
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
      {/* Light mode: bottom divider */}
      <div className="dark:hidden absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#E53935]/40 to-transparent z-[1]" aria-hidden="true" />
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
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {reasons.map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={index}
                className={`group opacity-0 animate-slide-up stagger-${index + 1}`}
              >
                <div className="h-full p-7 md:p-8 glass-card bg-white dark:bg-transparent border border-gray-100 dark:border-white/5 shadow-md dark:shadow-none rounded-2xl hover:border-[#E53935]/30 dark:hover:bg-white/[0.06] transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#E53935]/10">
                  {/* Icon with gradient bg and glow */}
                  <div className={`w-14 h-14 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg icon-glow`}>
                    <Icon className="w-7 h-7 text-white" strokeWidth={1.8} aria-hidden="true" />
                  </div>
                  <h3 className="text-h3 text-gray-900 dark:text-white mb-2.5 group-hover:text-[#E53935] transition-colors font-display">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-body leading-relaxed">{item.description}</p>
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
