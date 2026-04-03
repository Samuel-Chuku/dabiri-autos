import { Car, ChevronRight, Gauge, MessageCircle, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Vehicle } from '@/types'
import Link from 'next/link'

interface VehicleCardProps {
  vehicle: Vehicle
  showWhatsApp?: boolean
}

export function VehicleCard({ vehicle, showWhatsApp = true }: VehicleCardProps) {
  const whatsappMessage = encodeURIComponent(
    `Hi Dabiri Autos! I'm interested in the ${vehicle.name} (${vehicle.condition}) listed at ${vehicle.price}. Is it still available?`
  )

  return (
    <div className="group">
      <Card className="overflow-hidden bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl border border-gray-700/50 hover:border-[#E53935]/50 transition-all duration-500 hover:shadow-2xl hover:shadow-[#E53935]/10 hover:-translate-y-2">
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={vehicle.image}
            alt={`${vehicle.name} - ${vehicle.condition} vehicle for sale at Dabiri Autos`}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            loading="lazy"
            width={400}
            height={300}
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            aria-hidden="true"
          />
          <div className="absolute top-3 left-3 flex gap-2">
            <Badge className="bg-black/80 backdrop-blur-sm text-white border border-white/10">
              {vehicle.condition}
            </Badge>
          </div>
          {vehicle.featured && (
            <div className="absolute top-3 right-3">
              <Badge className="bg-[#E53935] text-white border-0">
                <Star className="w-3 h-3 mr-1 fill-white" aria-hidden="true" />
                Featured
              </Badge>
            </div>
          )}
        </div>
        <CardContent className="p-5 md:p-6">
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-display font-bold text-white text-lg group-hover:text-[#E53935] transition-colors duration-300">
              {vehicle.name}
            </h3>
          </div>
          <div className="text-xl md:text-2xl font-bold text-[#E53935] mb-4">{vehicle.price}</div>
          <div className="grid grid-cols-2 gap-2 text-sm text-gray-400 mb-4">
            <div className="flex items-center gap-2 bg-white/5 rounded-lg px-3 py-2">
              <Car className="w-4 h-4 text-[#E53935]" aria-hidden="true" />
              <span>{vehicle.year}</span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 rounded-lg px-3 py-2">
              <Gauge className="w-4 h-4 text-[#E53935]" aria-hidden="true" />
              <span>{vehicle.mileage}</span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 rounded-lg px-3 py-2">
              <span className="text-[#E53935]" aria-hidden="true">⚡</span>
              <span>{vehicle.fuel}</span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 rounded-lg px-3 py-2">
              <span className="text-[#E53935]" aria-hidden="true">⚙️</span>
              <span>{vehicle.transmission}</span>
            </div>
          </div>
          <div className="flex gap-2">
            <Link href={`/inventory#vehicle-${vehicle.id}`} className="flex-1">
              <Button className="w-full bg-white hover:bg-gray-100 text-black font-semibold transition-all duration-300 hover:scale-105">
                View Details
                <ChevronRight className="w-4 h-4 ml-1" aria-hidden="true" />
              </Button>
            </Link>
            {showWhatsApp && (
              <a
                href={`https://wa.me/2347025317059?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Inquire about ${vehicle.name} on WhatsApp`}
              >
                <Button className="border-[#E53935] text-[#E53935] hover:bg-[#E53935] hover:text-white transition-all duration-300">
                  <MessageCircle className="w-4 h-4" aria-hidden="true" />
                </Button>
              </a>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
