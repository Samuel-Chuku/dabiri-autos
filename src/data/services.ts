import {
  Car,
  CreditCard,
  DollarSign,
  FileCheck,
  HeadphonesIcon,
  Repeat,
  Search,
  Wrench,
} from 'lucide-react'
import { Service } from '@/types'

export const services: Service[] = [
  {
    icon: DollarSign,
    title: 'iBUY',
    description:
      'Looking to sell your car? We offer competitive prices for your neatly used vehicles. Fast valuation and instant payment guaranteed.',
    color: 'from-emerald-500 to-green-600',
  },
  {
    icon: Car,
    title: 'iSELL',
    description:
      'Browse our extensive collection of quality Nigerian and foreign used vehicles. Toyota, Lexus, Mercedes-Benz and more available.',
    color: 'from-[#E53935] to-[#B71C1C]',
  },
  {
    icon: Repeat,
    title: 'iSWAP',
    description:
      'Want to upgrade? Swap your current vehicle for a new one. We make the exchange process seamless and hassle-free.',
    color: 'from-violet-500 to-purple-600',
  },
  {
    icon: CreditCard,
    title: 'Car Financing',
    description:
      'Flexible car financing options available. Drive your dream car home today with our convenient payment plans.',
    color: 'from-amber-500 to-orange-600',
  },
  {
    icon: Search,
    title: 'Vehicle Inspection',
    description:
      'Comprehensive 150-point inspection for every vehicle. We check engine, transmission, body, and more for your peace of mind.',
    color: 'from-cyan-500 to-teal-600',
  },
  {
    icon: FileCheck,
    title: 'Documentation',
    description:
      'Complete vehicle documentation services including transfer of ownership, customs papers, and vehicle registration.',
    color: 'from-blue-500 to-indigo-600',
  },
  {
    icon: Wrench,
    title: 'After-Sales Service',
    description:
      'Our commitment continues after your purchase. Get maintenance support, spare parts sourcing, and technical assistance.',
    color: 'from-rose-500 to-pink-600',
  },
  {
    icon: HeadphonesIcon,
    title: '24/7 Support',
    description:
      'Have questions? Our automotive experts are available around the clock to assist you with any inquiries.',
    color: 'from-slate-500 to-gray-600',
  },
]
