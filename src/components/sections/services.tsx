'use client'

import {
  Car,
  CreditCard,
  DollarSign,
  FileCheck,
  HeadphonesIcon,
  Repeat,
  Search,
  Wrench,
  Gauge,
  ChevronRight,
} from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { ScrollFrameBg } from '@/components/shared/scroll-frame-bg'

const services = [
  {
    icon: DollarSign,
    title: 'iBUY',
    description:
      'Looking to sell your car? We offer competitive prices for your neatly used vehicles. Fast valuation and instant payment guaranteed.',
    color: 'from-emerald-500 to-green-600',
    shadowColor: 'group-hover:shadow-emerald-500/20',
  },
  {
    icon: Car,
    title: 'iSELL',
    description:
      'Browse our extensive collection of quality Nigerian and foreign used vehicles. Toyota, Lexus, Mercedes-Benz and more available.',
    color: 'from-[#E53935] to-[#B71C1C]',
    shadowColor: 'group-hover:shadow-red-500/20',
  },
  {
    icon: Repeat,
    title: 'iSWAP',
    description:
      'Want to upgrade? Swap your current vehicle for a new one. We make the exchange process seamless and hassle-free.',
    color: 'from-violet-500 to-purple-600',
    shadowColor: 'group-hover:shadow-violet-500/20',
  },
  {
    icon: CreditCard,
    title: 'Car Financing',
    description:
      'Flexible car financing options available. Drive your dream car home today with our convenient payment plans.',
    color: 'from-amber-500 to-orange-600',
    shadowColor: 'group-hover:shadow-amber-500/20',
  },
  {
    icon: Search,
    title: 'Vehicle Inspection',
    description:
      'Comprehensive 150-point inspection for every vehicle. We check engine, transmission, body, and more for your peace of mind.',
    color: 'from-cyan-500 to-teal-600',
    shadowColor: 'group-hover:shadow-cyan-500/20',
  },
  {
    icon: FileCheck,
    title: 'Documentation',
    description:
      'Complete vehicle documentation services including transfer of ownership, customs papers, and vehicle registration.',
    color: 'from-blue-500 to-indigo-600',
    shadowColor: 'group-hover:shadow-blue-500/20',
  },
  {
    icon: Wrench,
    title: 'After-Sales Service',
    description:
      'Our commitment continues after your purchase. Get maintenance support, spare parts sourcing, and technical assistance.',
    color: 'from-rose-500 to-pink-600',
    shadowColor: 'group-hover:shadow-rose-500/20',
  },
  {
    icon: HeadphonesIcon,
    title: '24/7 Support',
    description:
      'Have questions? Our automotive experts are available around the clock to assist you with any inquiries.',
    color: 'from-slate-500 to-gray-600',
    shadowColor: 'group-hover:shadow-slate-500/20',
  },
]

export function ServicesSection() {
  return (
    <ScrollFrameBg frameDir="/frames/scene1" totalFrames={169} overlayOpacity={0.7}>
    <section id="services" className="py-20 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14 md:mb-16">
          <Badge className="mb-4 bg-[#E53935]/10 text-[#E53935] border-[#E53935]/20 px-4 py-1.5">
            <Gauge className="w-3.5 h-3.5 mr-1.5" aria-hidden="true" />
            What We Offer
          </Badge>
          <h2 className="font-display text-h2 text-black dark:text-white mb-4">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto text-body-lg">
            From buying and selling to maintenance and documentation, we provide end-to-end
            automotive solutions for all your needs.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className={`group opacity-0 animate-slide-up stagger-${index + 1}`}
              >
                <div className={`h-full p-6 rounded-2xl bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 hover:border-gray-200/80 dark:hover:border-[#E53935]/30 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl ${service.shadowColor} overflow-hidden relative`}>
                  {/* Gradient overlay on hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-[0.04] transition-opacity duration-500`}
                    aria-hidden="true"
                  />
                  {/* Top accent line */}
                  <div
                    className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                    aria-hidden="true"
                  />

                  {/* Icon container with glow */}
                  <div className="relative mb-5">
                    <div
                      className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg icon-glow`}
                    >
                      <Icon className="w-7 h-7 text-white" strokeWidth={1.8} aria-hidden="true" />
                    </div>
                    {/* Decorative dot */}
                    <div
                      className={`absolute -top-1 -right-1 w-3 h-3 rounded-full bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-60 transition-all duration-500 group-hover:scale-100 scale-0`}
                      aria-hidden="true"
                    />
                  </div>

                  <h3 className="text-lg font-display font-bold text-gray-900 dark:text-white mb-2 group-hover:text-[#E53935] transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <div className="flex items-center text-[#E53935] font-semibold text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    Learn More
                    <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
    </ScrollFrameBg>
  )
}
