'use client'

import { CheckCircle2, Car, Users, Shield, Award } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'

const specialties = [
  'Toyota Specialists',
  'Lexus Experts',
  'Mercedes-Benz',
  'Car Financing',
  'Trade-In Options',
  'Verified Vehicles',
]

const stats = [
  { value: '363+', label: 'Cars Sold', icon: Car },
  { value: '8,655+', label: 'Happy Followers', icon: Users },
  { value: '100%', label: 'Verified Vehicles', icon: Shield },
  { value: 'RC: 8313006', label: 'Registered Company', icon: Award },
]

export function AboutSection() {
  return (
    <section id="aboutus" className="py-20 md:py-32 relative overflow-hidden">
      {/* Deep dark background with warm undertones */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0d0d12] via-[#0a0a0f] to-[#0d0d12]" aria-hidden="true" />
      <div className="absolute inset-0 bg-pattern-dots" aria-hidden="true" />

      {/* Ambient glow */}
      <div className="absolute top-[10%] right-[-5%] w-[500px] h-[500px] bg-[#E53935]/[0.06] rounded-full blur-[120px] animate-glow-pulse" aria-hidden="true" />
      <div className="absolute bottom-[10%] left-[-5%] w-[400px] h-[400px] bg-white/[0.02] rounded-full blur-[100px]" aria-hidden="true" />

      {/* Decorative elements */}
      <div className="absolute top-20 left-[10%] w-px h-32 bg-gradient-to-b from-[#E53935]/30 to-transparent" aria-hidden="true" />
      <div className="absolute bottom-20 right-[10%] w-px h-32 bg-gradient-to-t from-[#E53935]/30 to-transparent" aria-hidden="true" />

      <div className="relative container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
          <div>
            <Badge className="mb-4 bg-white/10 text-[#E53935] border-[#E53935]/20 backdrop-blur-sm px-4 py-1.5">
              About Us
            </Badge>
            <h2 className="font-display text-h2 text-white mb-5 md:mb-6">
              Your Trusted Auto Dealer in <span className="text-gradient">Lagos</span>
            </h2>
            <p className="text-gray-400 mb-4 md:mb-5 text-body-lg leading-relaxed">
              Dabiri Autos Limited is a registered Nigerian auto dealership (RC: 8313006)
              specializing in quality Nigerian used and foreign used vehicles. We are passionate
              about helping you find the perfect car that fits your lifestyle and budget.
            </p>
            <p className="text-gray-400 mb-8 text-body leading-relaxed">
              Located in Surulere, Lagos, we offer a wide selection of vehicles from top brands
              including Toyota, Lexus, and Mercedes-Benz. Our services include iBUY (we buy your
              car), iSELL (quality vehicles for sale), and iSWAP (trade-in your vehicle).
            </p>

            <div className="grid grid-cols-2 gap-3 md:gap-4 mb-8">
              {specialties.map((item, index) => (
                <div key={index} className="flex items-center gap-2.5 group">
                  <div className="w-6 h-6 rounded-full bg-[#E53935]/15 flex items-center justify-center group-hover:bg-[#E53935] transition-all duration-300 group-hover:scale-110">
                    <CheckCircle2
                      className="w-3.5 h-3.5 text-[#E53935] group-hover:text-white transition-colors"
                      aria-hidden="true"
                    />
                  </div>
                  <span className="text-gray-300 text-sm md:text-base group-hover:text-white transition-colors">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <Link href="/contact">
              <Button
                size="lg"
                className="bg-[#E53935] hover:bg-[#C62828] text-white btn-luxury hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-red-500/25"
              >
                Contact Us Today
              </Button>
            </Link>
          </div>

          {/* Stats grid with glass cards */}
          <div className="grid grid-cols-2 gap-4 md:gap-5">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <div key={index} className="group">
                  <Card className="p-5 md:p-6 text-center glass-card hover:border-[#E53935]/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#E53935]/10 rounded-2xl">
                    <div className="w-14 h-14 bg-[#E53935]/15 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-[#E53935] transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 icon-glow">
                      <Icon className="w-7 h-7 text-[#E53935] group-hover:text-white transition-colors" aria-hidden="true" />
                    </div>
                    <div className="text-2xl md:text-3xl font-display font-bold text-white group-hover:text-[#E53935] transition-colors">
                      {stat.value}
                    </div>
                    <div className="text-gray-400 text-sm mt-1">{stat.label}</div>
                  </Card>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
