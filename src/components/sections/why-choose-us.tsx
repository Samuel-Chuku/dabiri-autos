'use client'

import { Shield, BadgeDollarSign, Wallet, ArrowLeftRight, HeartHandshake, Award } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

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
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Background with subtle depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#0d0d14] to-[#0a0a0f]" aria-hidden="true" />
      <div className="absolute inset-0 bg-pattern-dots" aria-hidden="true" />

      {/* Geometric accents */}
      <div className="absolute top-[15%] left-[5%] w-40 h-40 border border-[#E53935]/[0.08] rounded-full" aria-hidden="true" />
      <div className="absolute top-[15%] left-[5%] w-40 h-40 border border-[#E53935]/[0.04] rounded-full scale-150" aria-hidden="true" />
      <div className="absolute bottom-[15%] right-[5%] w-32 h-32 border border-white/[0.05] rounded-full" aria-hidden="true" />
      <div className="absolute bottom-[15%] right-[5%] w-32 h-32 border border-white/[0.03] rounded-full scale-150" aria-hidden="true" />

      {/* Glow accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#E53935]/[0.03] rounded-full blur-[100px]" aria-hidden="true" />

      <div className="relative container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <Badge className="mb-4 bg-white/10 text-[#E53935] border-[#E53935]/20 backdrop-blur-sm px-4 py-1.5">
            Why Us
          </Badge>
          <h2 className="font-display text-h2 text-white mb-4">
            Why Choose <span className="text-gradient">Dabiri Autos?</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-body-lg">
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
                <div className="h-full p-7 md:p-8 glass-card rounded-2xl hover:border-[#E53935]/30 hover:bg-white/[0.06] transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#E53935]/10">
                  {/* Icon with gradient bg and glow */}
                  <div className={`w-14 h-14 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg icon-glow`}>
                    <Icon className="w-7 h-7 text-white" strokeWidth={1.8} aria-hidden="true" />
                  </div>
                  <h3 className="text-h3 text-white mb-2.5 group-hover:text-[#E53935] transition-colors font-display">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-body leading-relaxed">{item.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
