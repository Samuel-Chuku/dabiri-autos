export interface Vehicle {
  id: number
  slug: string
  name: string
  price: string
  priceValue: number
  /** null when no photo of this exact car is on file */
  image: string | null
  year: number
  mileage: string
  fuel: string
  transmission: string
  condition: 'Nigerian Used' | 'Foreign Used' | 'Brand New'
  featured: boolean
  bodyType: string
  make: string
  description: string
}

export interface Service {
  code: string
  name: string
  line: string
}
