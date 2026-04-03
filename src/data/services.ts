import {
  Car,
  CreditCard,
  FileCheck,
  Repeat,
  Search,
} from 'lucide-react'
import React from 'react'
import { Service } from '@/types'

const NairaSign = ({ className }: { className?: string }) =>
  React.createElement('span', { className, style: { fontWeight: 700, lineHeight: 1 } }, '₦')

export const services: Service[] = [
  {
    icon: NairaSign,
    title: 'iBUY',
    description:
      'Looking to sell your car? We offer competitive prices for your neatly used vehicles. Fast valuation and instant payment guaranteed.',
    color: 'from-[#E53935] to-[#B71C1C]',
  },
  {
    icon: Car,
    title: 'iSELL',
    description:
      'Browse our extensive collection of quality Nigerian and foreign used vehicles. Toyota, Lexus, Mercedes-Benz and more available.',
    color: 'from-[#1a237e] to-[#283593]',
  },
  {
    icon: Repeat,
    title: 'iSWAP',
    description:
      'Want to upgrade? Swap your current vehicle for a new one. We make the exchange process seamless and hassle-free.',
    color: 'from-[#004D40] to-[#00695C]',
  },
  {
    icon: CreditCard,
    title: 'Car Financing',
    description:
      'Flexible car financing options available. Drive your dream car home today with our convenient payment plans.',
    color: 'from-[#E53935] to-[#B71C1C]',
  },
  {
    icon: Search,
    title: 'Vehicle Inspection',
    description:
      'Comprehensive 150-point inspection for every vehicle. We check engine, transmission, body, and more for your peace of mind.',
    color: 'from-[#1a237e] to-[#283593]',
  },
  {
    icon: FileCheck,
    title: 'Documentation',
    description:
      'Complete vehicle documentation services including transfer of ownership, customs papers, and vehicle registration.',
    color: 'from-[#004D40] to-[#00695C]',
  },
]
