import { ArrowRight, Gauge } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { VehicleCard } from '@/components/shared/vehicle-card'
import { vehicles } from '@/data/vehicles'

export function FeaturedVehiclesSection() {
  const featuredCars = vehicles.filter((car) => car.featured)

  return (
    <section id="vehicles" className="py-20 md:py-32 relative overflow-hidden">
      {/* Rich dark background with depth */}
      <div className="absolute inset-0 bg-[#0a0a0f]" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/90 via-[#0a0a0f] to-[#0a0a0f]" aria-hidden="true" />
      <div className="absolute inset-0 bg-pattern-dots" aria-hidden="true" />

      {/* Ambient glow effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#E53935]/[0.06] rounded-full blur-[120px]" aria-hidden="true" />
      <div className="absolute bottom-0 left-[20%] w-[500px] h-[300px] bg-[#E53935]/[0.04] rounded-full blur-[100px]" aria-hidden="true" />
      <div className="absolute top-1/3 right-0 w-[300px] h-[300px] bg-white/[0.02] rounded-full blur-[80px]" aria-hidden="true" />

      {/* Rotating accent ring */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/[0.03] rounded-full animate-rotate-slow" aria-hidden="true" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-[#E53935]/[0.03] rounded-full animate-rotate-slow" style={{ animationDirection: 'reverse', animationDuration: '45s' }} aria-hidden="true" />

      {/* Light mode overlay — covers dark bg, invisible in dark mode */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-red-50 dark:hidden z-[1]" aria-hidden="true" />
      {/* Light mode: diagonal red accent block bottom-right */}
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-red-100/60 to-transparent dark:hidden z-[1]" aria-hidden="true" />
      {/* Light mode: section bottom divider */}
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#E53935]/40 to-transparent dark:hidden z-[1]" aria-hidden="true" />

      <div className="relative z-[2] container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <Badge className="mb-4 bg-[#E53935]/10 dark:bg-white/10 text-[#E53935] border-[#E53935]/20 backdrop-blur-sm px-4 py-1.5">
            <Gauge className="w-3.5 h-3.5 mr-1.5" aria-hidden="true" />
            Our Inventory
          </Badge>
          <h2 className="font-display text-h2 text-gray-900 dark:text-white mb-4">
            Featured <span className="text-gradient">Vehicles</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-body-lg">
            Explore our hand-picked selection of quality Toyota, Lexus, and Mercedes-Benz
            vehicles. Each car undergoes thorough inspection.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {featuredCars.map((car) => (
            <VehicleCard key={car.id} vehicle={car} />
          ))}
        </div>

        <div className="text-center mt-12 md:mt-16">
          <Link href="/inventory">
            <Button
              size="lg"
              className="bg-[#E53935] hover:bg-[#C62828] text-white font-bold px-8 btn-luxury transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-red-500/30 group"
            >
              View All Vehicles
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
