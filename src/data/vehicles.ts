import { Vehicle } from '@/types'

/*
 * Listings are the owner's current sample stock ("use those for now").
 * Names, prices and specs are unchanged from the previous site. Images are
 * mapped to the photo that actually shows that body:
 *   - C300 uses the white C-Class lot photo (was a black GLE).
 *   - GLE 450 uses the black GLE lot photo (was a Toyota Highlander).
 *   - The Corolla has no photo on file, so it shows a "photo on request" plate
 *     rather than a Honda labelled as a Toyota.
 */
export const vehicles: Vehicle[] = [
  {
    id: 1,
    slug: 'mercedes-benz-c300',
    name: 'Mercedes-Benz C300',
    price: '₦58,000,000',
    priceValue: 58_000_000,
    image: '/media/c300.webp',
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
    id: 2,
    slug: 'lexus-rx-350',
    name: 'Lexus RX 350',
    price: '₦75,000,000',
    priceValue: 75_000_000,
    image: '/media/rx-350.webp',
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
    id: 3,
    slug: 'mercedes-benz-gle-450',
    name: 'Mercedes-Benz GLE 450',
    price: '₦95,000,000',
    priceValue: 95_000_000,
    image: '/media/gle-450.webp',
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
  {
    id: 4,
    slug: 'toyota-camry-2024',
    name: 'Toyota Camry 2024',
    price: '₦38,000,000',
    priceValue: 38_000_000,
    image: '/media/camry.webp',
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
    id: 5,
    slug: 'toyota-corolla-2024',
    name: 'Toyota Corolla 2024',
    price: '₦28,000,000',
    priceValue: 28_000_000,
    image: null,
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
]

export const makes = ['All', 'Toyota', 'Lexus', 'Mercedes-Benz'] as const
export const conditions = ['All', 'Nigerian Used', 'Foreign Used'] as const
export const bodyTypes = ['All', 'Sedan', 'SUV'] as const
export const priceRanges = [
  { label: 'Any price', min: 0, max: Infinity },
  { label: 'Under ₦30M', min: 0, max: 30_000_000 },
  { label: '₦30M to ₦50M', min: 30_000_000, max: 50_000_000 },
  { label: '₦50M to ₦80M', min: 50_000_000, max: 80_000_000 },
  { label: 'Above ₦80M', min: 80_000_000, max: Infinity },
] as const
