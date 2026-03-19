export interface Vehicle {
  id: number
  name: string
  price: string
  image: string
  year: number
  mileage: string
  fuel: string
  transmission: string
  condition: 'Nigerian Used' | 'Foreign Used' | 'Brand New'
  featured: boolean
  bodyType?: string
  make?: string
  description?: string
}

export interface Service {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
  color: string
}

export interface Stat {
  value: string
  label: string
  icon: React.ComponentType<{ className?: string }>
}

export interface ContactFormData {
  name: string
  email: string
  phone: string
  message: string
  vehicleInterest?: string
}
