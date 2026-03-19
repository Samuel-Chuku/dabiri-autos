import { Vehicle } from '@/types'

export const vehicles: Vehicle[] = [
  {
    id: 1,
    name: 'Toyota Camry 2024',
    price: '₦38,000,000',
    image: '/car-toyota.png',
    year: 2024,
    mileage: '12,000 km',
    fuel: 'Petrol',
    transmission: 'Automatic',
    condition: 'Nigerian Used',
    featured: true,
    bodyType: 'Sedan',
    make: 'Toyota',
    description:
      'Well-maintained Toyota Camry with low mileage. Full service history available. Premium interior with leather seats and advanced safety features.',
  },
  {
    id: 2,
    name: 'Mercedes-Benz C300',
    price: '₦58,000,000',
    image: '/car-mercedes.png',
    year: 2024,
    mileage: '8,500 km',
    fuel: 'Petrol',
    transmission: 'Automatic',
    condition: 'Foreign Used',
    featured: true,
    bodyType: 'Sedan',
    make: 'Mercedes-Benz',
    description:
      'Luxury Mercedes-Benz C300 in excellent condition. Foreign used with complete documentation. AMG line package with panoramic sunroof.',
  },
  {
    id: 3,
    name: 'Lexus RX 350',
    price: '₦75,000,000',
    image: '/car-lexus.png',
    year: 2024,
    mileage: '10,000 km',
    fuel: 'Petrol',
    transmission: 'Automatic',
    condition: 'Foreign Used',
    featured: true,
    bodyType: 'SUV',
    make: 'Lexus',
    description:
      'Premium Lexus RX 350 SUV with luxury package. Mark Levinson sound system, adaptive cruise control, and heads-up display.',
  },
  {
    id: 4,
    name: 'Toyota Corolla 2024',
    price: '₦28,000,000',
    image: '/car-honda.png',
    year: 2024,
    mileage: '15,000 km',
    fuel: 'Petrol',
    transmission: 'Automatic',
    condition: 'Nigerian Used',
    featured: false,
    bodyType: 'Sedan',
    make: 'Toyota',
    description:
      'Reliable Toyota Corolla perfect for daily driving. Excellent fuel economy with modern safety features and comfortable interior.',
  },
  {
    id: 5,
    name: 'Mercedes-Benz GLE 450',
    price: '₦95,000,000',
    image: '/car-landcruiser.png',
    year: 2024,
    mileage: '6,000 km',
    fuel: 'Petrol',
    transmission: 'Automatic',
    condition: 'Foreign Used',
    featured: true,
    bodyType: 'SUV',
    make: 'Mercedes-Benz',
    description:
      'Top-of-the-line Mercedes-Benz GLE 450 with AMG styling. Burmester sound system, 360-degree camera, and air suspension.',
  },
]

export const makes = ['All', 'Toyota', 'Lexus', 'Mercedes-Benz'] as const
export const conditions = ['All', 'Nigerian Used', 'Foreign Used', 'Brand New'] as const
export const bodyTypes = ['All', 'Sedan', 'SUV', 'Coupe', 'Truck'] as const
export const priceRanges = [
  { label: 'All Prices', min: 0, max: Infinity },
  { label: 'Under ₦30M', min: 0, max: 30000000 },
  { label: '₦30M - ₦50M', min: 30000000, max: 50000000 },
  { label: '₦50M - ₦80M', min: 50000000, max: 80000000 },
  { label: 'Above ₦80M', min: 80000000, max: Infinity },
] as const
