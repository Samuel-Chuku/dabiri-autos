import { Card } from '@/components/ui/card'
import { Stat } from '@/types'

interface StatCardProps {
  stat: Stat
}

export function StatCard({ stat }: StatCardProps) {
  const Icon = stat.icon

  return (
    <div className="group">
      <Card className="p-5 md:p-6 text-center bg-white/5 backdrop-blur-xl border border-white/10 hover:border-[#E53935]/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#E53935]/10">
        <div className="w-12 h-12 md:w-14 md:h-14 bg-[#E53935]/20 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4 group-hover:bg-[#E53935] transition-colors duration-300">
          <Icon className="w-6 h-6 md:w-7 md:h-7 text-[#E53935] group-hover:text-white transition-colors" aria-hidden="true" />
        </div>
        <div className="text-xl md:text-2xl font-display font-bold text-white group-hover:text-[#E53935] transition-colors">
          {stat.value}
        </div>
        <div className="text-gray-400 text-sm md:text-base">{stat.label}</div>
      </Card>
    </div>
  )
}
