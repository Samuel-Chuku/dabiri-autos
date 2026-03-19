import { ChevronRight } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Service } from '@/types'

interface ServiceCardProps {
  service: Service
}

export function ServiceCard({ service }: ServiceCardProps) {
  const Icon = service.icon

  return (
    <div className="group">
      <Card className="h-full p-6 bg-white/80 backdrop-blur-xl border border-gray-200/50 hover:border-[#E53935]/30 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 overflow-hidden relative">
        <div
          className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
          aria-hidden="true"
        />
        <div
          className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}
        >
          <Icon className="w-7 h-7 text-white" aria-hidden="true" />
        </div>
        <h3 className="text-lg font-display font-bold text-black mb-2 group-hover:text-[#E53935] transition-colors duration-300">
          {service.title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
        <div className="mt-4 flex items-center text-[#E53935] font-medium text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
          Learn More
          <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
        </div>
      </Card>
    </div>
  )
}
