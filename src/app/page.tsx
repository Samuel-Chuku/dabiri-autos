'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import { 
  Car, 
  Phone, 
  MapPin, 
  Clock, 
  Shield, 
  Award, 
  Users, 
  CheckCircle2,
  Menu,
  X,
  Instagram,
  Facebook,
  MessageCircle,
  CreditCard,
  ArrowRight,
  Star,
  Repeat,
  DollarSign,
  ChevronRight,
  Sparkles,
  Gauge,
  Wrench,
  FileCheck,
  HeadphonesIcon,
  Search,
  Navigation
} from 'lucide-react'

const cars = [
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
  },
]

const services = [
  {
    icon: DollarSign,
    title: 'iBUY',
    description: 'Looking to sell your car? We offer competitive prices for your neatly used vehicles. Fast valuation and instant payment guaranteed.',
    color: 'from-emerald-500 to-green-600',
  },
  {
    icon: Car,
    title: 'iSELL',
    description: 'Browse our extensive collection of quality Nigerian and foreign used vehicles. Toyota, Lexus, Mercedes-Benz and more available.',
    color: 'from-[#E53935] to-[#B71C1C]',
  },
  {
    icon: Repeat,
    title: 'iSWAP',
    description: 'Want to upgrade? Swap your current vehicle for a new one. We make the exchange process seamless and hassle-free.',
    color: 'from-violet-500 to-purple-600',
  },
  {
    icon: CreditCard,
    title: 'Car Financing',
    description: 'Flexible car financing options available. Drive your dream car home today with our convenient payment plans.',
    color: 'from-amber-500 to-orange-600',
  },
  {
    icon: Search,
    title: 'Vehicle Inspection',
    description: 'Comprehensive 150-point inspection for every vehicle. We check engine, transmission, body, and more for your peace of mind.',
    color: 'from-cyan-500 to-teal-600',
  },
  {
    icon: FileCheck,
    title: 'Documentation',
    description: 'Complete vehicle documentation services including transfer of ownership, customs papers, and vehicle registration.',
    color: 'from-blue-500 to-indigo-600',
  },
  {
    icon: Wrench,
    title: 'After-Sales Service',
    description: 'Our commitment continues after your purchase. Get maintenance support, spare parts sourcing, and technical assistance.',
    color: 'from-rose-500 to-pink-600',
  },
  {
    icon: HeadphonesIcon,
    title: '24/7 Support',
    description: 'Have questions? Our automotive experts are available around the clock to assist you with any inquiries.',
    color: 'from-slate-500 to-gray-600',
  },
]

const stats = [
  { value: '363+', label: 'Cars Sold', icon: Car },
  { value: '8,655+', label: 'Happy Followers', icon: Users },
  { value: '100%', label: 'Verified Vehicles', icon: Shield },
  { value: 'RC: 8313006', label: 'Registered Company', icon: Award },
]

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Thank you for your inquiry! We will contact you shortly.')
    setFormData({ name: '', email: '', phone: '', message: '' })
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Header */}
      <header className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-white/95 backdrop-blur-xl shadow-lg border-b border-gray-100' : 'bg-white border-b border-gray-200 shadow-md'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            <div className="flex items-center gap-3">
              <img 
                src="/dabiri-logo.png" 
                alt="Dabiri Autos Logo" 
                className="h-10 md:h-12 w-auto object-contain transition-transform duration-300 hover:scale-105"
              />
            </div>

            <nav className="hidden lg:flex items-center gap-8">
              {['Home', 'Vehicles', 'Services', 'About Us', 'Contact'].map((link) => (
                <a 
                  key={link}
                  href={`#${link.toLowerCase().replace(' ', '')}`} 
                  className="text-gray-700 hover:text-black font-medium transition-colors relative group"
                >
                  {link}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#E53935] transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <Button variant="outline" className="border-black text-black hover:bg-black hover:text-white transition-all duration-300">
                <Phone className="w-4 h-4 mr-2" />
                Call Us
              </Button>
              <Button className="bg-[#E53935] hover:bg-[#C62828] text-white btn-luxury transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-red-500/30">
                View Inventory
              </Button>
            </div>

            <button 
              className="lg:hidden p-2 text-gray-700"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="lg:hidden py-4 border-t border-gray-200">
              <nav className="flex flex-col gap-3">
                {['Home', 'Vehicles', 'Services', 'About Us', 'Contact'].map((link) => (
                  <a key={link} href={`#${link.toLowerCase().replace(' ', '')}`} className="text-gray-700 hover:text-black font-medium py-2">
                    {link}
                  </a>
                ))}
                <div className="flex flex-col gap-2 mt-3 pt-3 border-t border-gray-200">
                  <Button variant="outline" className="border-black text-black w-full">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Us
                  </Button>
                  <Button className="bg-[#E53935] text-white w-full">
                    View Inventory
                  </Button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section id="home" className="relative min-h-[600px] md:min-h-[700px] flex items-center overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
            style={{ backgroundImage: 'url(/dabiri-bg.png)' }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-black/60"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30"></div>
          </div>
          
          <div className="absolute top-20 right-20 w-64 h-64 bg-[#E53935]/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-48 h-48 bg-white/5 rounded-full blur-2xl"></div>

          <div className="relative container mx-auto px-4 py-16 md:py-24">
            <div className="max-w-2xl">
              <Badge className="mb-4 bg-[#E53935]/20 text-[#E53935] border-[#E53935]/30 hover:bg-[#E53935]/30">
                <Sparkles className="w-3 h-3 mr-1" />
                Trusted Nigerian Auto Dealer
              </Badge>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight">
                Revving Up Your Ride With <span className="text-gradient">Top-Notch Cars</span>
              </h1>
              <p className="text-base md:text-lg text-gray-300 mb-6 md:mb-8 max-w-xl">
                Your trusted partner for quality Nigerian used and foreign used vehicles. We specialize in Toyota, Lexus, and Mercedes-Benz. 
                <span className="text-[#E53935] font-semibold"> iBUY • iSELL • iSWAP</span>
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                <Button size="lg" className="bg-[#E53935] hover:bg-[#C62828] text-white font-bold text-base md:text-lg px-6 md:px-8 btn-luxury hover:scale-105 hover:shadow-xl hover:shadow-red-500/30 transition-all duration-300">
                  Browse Our Cars
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button 
                  size="lg" 
                  className="bg-[#25D366] hover:bg-[#128C7E] text-white font-semibold text-base md:text-lg px-6 md:px-8 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-green-500/30"
                  onClick={() => window.open('https://wa.me/2348102487687', '_blank')}
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  Send Us A Message On WhatsApp
                </Button>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 md:mt-12">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center md:text-left group">
                    <div className="text-2xl md:text-3xl font-bold text-[#E53935] group-hover:scale-110 transition-transform duration-300">{stat.value}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-4 mt-8 md:mt-12 pt-6 border-t border-white/10">
                <span className="text-gray-400 text-sm">Follow us:</span>
                <div className="flex items-center gap-3">
                  <a 
                    href="https://instagram.com/dabiri_autos" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/30"
                  >
                    <Instagram className="w-5 h-5 text-white" />
                  </a>
                  <a 
                    href="https://facebook.com/dabiri_autos" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-[#1877F2] rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30"
                  >
                    <Facebook className="w-5 h-5 text-white" />
                  </a>
                  <a 
                    href="https://wa.me/2348102487687" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-[#25D366] rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/30"
                  >
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                  </a>
                  <a 
                    href="tel:+2348102487687" 
                    className="w-10 h-10 bg-[#E53935] rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/30"
                  >
                    <Phone className="w-5 h-5 text-white" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Vehicles Section */}
        <section id="vehicles" className="py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900 to-black"></div>
          <div className="absolute inset-0 bg-pattern-dots opacity-5"></div>
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black/50 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/50 to-transparent"></div>
          
          <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[#E53935]/5 rounded-full blur-3xl"></div>
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-white/5 rounded-full blur-2xl"></div>

          <div className="relative container mx-auto px-4">
            <div className="text-center mb-10 md:mb-12">
              <Badge className="mb-3 bg-[#E53935]/20 text-[#E53935] border-[#E53935]/30">
                <Gauge className="w-3 h-3 mr-1" />
                Our Inventory
              </Badge>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 md:mb-4">
                Featured <span className="text-gradient">Vehicles</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
                Explore our hand-picked selection of quality Toyota, Lexus, and Mercedes-Benz vehicles. 
                Each car undergoes thorough inspection.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {cars.filter(car => car.featured).map((car, index) => (
                <div key={car.id} className="group">
                  <Card className="overflow-hidden bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl border border-gray-700/50 hover:border-[#E53935]/50 transition-all duration-500 hover:shadow-2xl hover:shadow-[#E53935]/10 hover:-translate-y-2">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img src={car.image} alt={car.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute top-3 left-3 flex gap-2">
                        <Badge className="bg-black/80 backdrop-blur-sm text-white border border-white/10">{car.condition}</Badge>
                      </div>
                      <div className="absolute top-3 right-3">
                        <Badge className="bg-[#E53935] text-white border-0">
                          <Star className="w-3 h-3 mr-1 fill-white" />
                          Featured
                        </Badge>
                      </div>
                    </div>
                    <CardContent className="p-5 md:p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-bold text-white text-lg group-hover:text-[#E53935] transition-colors duration-300">{car.name}</h3>
                      </div>
                      <div className="text-xl md:text-2xl font-bold text-[#E53935] mb-4">{car.price}</div>
                      <div className="grid grid-cols-2 gap-2 text-sm text-gray-400 mb-4">
                        <div className="flex items-center gap-2 bg-white/5 rounded-lg px-3 py-2">
                          <Car className="w-4 h-4 text-[#E53935]" />
                          <span>{car.year}</span>
                        </div>
                        <div className="flex items-center gap-2 bg-white/5 rounded-lg px-3 py-2">
                          <Gauge className="w-4 h-4 text-[#E53935]" />
                          <span>{car.mileage}</span>
                        </div>
                        <div className="flex items-center gap-2 bg-white/5 rounded-lg px-3 py-2">
                          <span className="text-[#E53935]">⚡</span>
                          <span>{car.fuel}</span>
                        </div>
                        <div className="flex items-center gap-2 bg-white/5 rounded-lg px-3 py-2">
                          <span className="text-[#E53935]">⚙️</span>
                          <span>{car.transmission}</span>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button className="flex-1 bg-white hover:bg-gray-100 text-black font-semibold transition-all duration-300 hover:scale-105">
                          View Details
                          <ChevronRight className="w-4 h-4 ml-1" />
                        </Button>
                        <Button className="border-[#E53935] text-[#E53935] hover:bg-[#E53935] hover:text-white transition-all duration-300">
                          <MessageCircle className="w-4 h-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>

            <div className="text-center mt-10 md:mt-12">
              <Button size="lg" className="bg-[#E53935] hover:bg-[#C62828] text-white font-bold px-8 btn-luxury transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-red-500/30 group">
                View All Vehicles
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100"></div>
          <div className="absolute inset-0 bg-pattern-grid"></div>
          <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-[#E53935]/5 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-black/5 to-transparent rounded-full blur-2xl"></div>
          
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-300/50 to-transparent"></div>
          <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#E53935]/20 to-transparent"></div>
          <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-300/50 to-transparent"></div>

          <div className="relative container mx-auto px-4">
            <div className="text-center mb-10 md:mb-12">
              <Badge className="mb-3 bg-[#E53935]/10 text-[#E53935]">
                <Gauge className="w-3 h-3 mr-1" />
                What We Offer
              </Badge>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-3 md:mb-4">
                Our <span className="text-gradient">Services</span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
                From buying and selling to maintenance and documentation, we provide end-to-end automotive solutions for all your needs.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {services.map((service, index) => (
                <div key={index} className="group">
                  <Card className="h-full p-6 bg-white/80 backdrop-blur-xl border border-gray-200/50 hover:border-[#E53935]/30 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 overflow-hidden relative">
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}>
                      <service.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-black mb-2 group-hover:text-[#E53935] transition-colors duration-300">{service.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                    <div className="mt-4 flex items-center text-[#E53935] font-medium text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      Learn More
                      <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="aboutus" className="py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>
          <div className="absolute inset-0 bg-pattern-dots opacity-10"></div>
          <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#E53935]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-white/5 rounded-full blur-2xl"></div>

          <div className="relative container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
              <div>
                <Badge className="mb-3 bg-[#E53935]/20 text-[#E53935] border-[#E53935]/30">About Us</Badge>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 md:mb-6">
                  Your Trusted Auto Dealer in <span className="text-gradient">Lagos</span>
                </h2>
                <p className="text-gray-400 mb-4 md:mb-6 text-sm md:text-base leading-relaxed">
                  Dabiri Autos Limited is a registered Nigerian auto dealership (RC: 8313006) specializing in quality 
                  Nigerian used and foreign used vehicles. We are passionate about helping you find the perfect car 
                  that fits your lifestyle and budget.
                </p>
                <p className="text-gray-400 mb-6 md:mb-8 text-sm md:text-base leading-relaxed">
                  Located in Surulere, Lagos, we offer a wide selection of vehicles from top brands including 
                  Toyota, Lexus, and Mercedes-Benz. Our services include iBUY (we buy your car), iSELL (quality 
                  vehicles for sale), and iSWAP (trade-in your vehicle).
                </p>

                <div className="grid grid-cols-2 gap-3 md:gap-4 mb-6 md:mb-8">
                  {['Toyota Specialists', 'Lexus Experts', 'Mercedes-Benz', 'Car Financing', 'Trade-In Options', 'Verified Vehicles'].map((item, index) => (
                    <div key={index} className="flex items-center gap-2 group">
                      <div className="w-5 h-5 rounded-full bg-[#E53935]/20 flex items-center justify-center group-hover:bg-[#E53935] transition-colors duration-300">
                        <CheckCircle2 className="w-3 h-3 text-[#E53935] group-hover:text-white" />
                      </div>
                      <span className="text-gray-300 text-sm md:text-base group-hover:text-white transition-colors">{item}</span>
                    </div>
                  ))}
                </div>

                <Button size="lg" className="bg-[#E53935] hover:bg-[#C62828] text-white btn-luxury hover:scale-105 transition-all duration-300">
                  Contact Us Today
                </Button>
              </div>

              <div className="grid grid-cols-2 gap-4 md:gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="group">
                    <Card className="p-5 md:p-6 text-center bg-white/5 backdrop-blur-xl border border-white/10 hover:border-[#E53935]/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#E53935]/10">
                      <div className="w-12 h-12 md:w-14 md:h-14 bg-[#E53935]/20 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4 group-hover:bg-[#E53935] transition-colors duration-300">
                        <stat.icon className="w-6 h-6 md:w-7 md:h-7 text-[#E53935] group-hover:text-white transition-colors" />
                      </div>
                      <div className="text-xl md:text-2xl font-bold text-white group-hover:text-[#E53935] transition-colors">{stat.value}</div>
                      <div className="text-gray-400 text-sm md:text-base">{stat.label}</div>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-900 to-black"></div>
          <div className="absolute inset-0 bg-pattern-dots opacity-10"></div>
          <div className="absolute top-20 left-20 w-32 h-32 border border-[#E53935]/20 rounded-full"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 border border-white/10 rounded-full"></div>
          
          <div className="relative container mx-auto px-4">
            <div className="text-center mb-10 md:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 md:mb-4">
                Why Choose <span className="text-gradient">Dabiri Autos?</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
                We are committed to providing you with the best car buying experience in Nigeria.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {[
                { title: 'Verified Vehicles', description: 'Every vehicle undergoes thorough inspection to ensure quality and reliability.' },
                { title: 'Competitive Pricing', description: 'We offer the best prices for both buying and selling your vehicle.' },
                { title: 'Flexible Payment', description: 'Car financing options available to help you drive your dream car home.' },
                { title: 'Trade-In Options', description: 'Upgrade your ride with our seamless iSWAP trade-in service.' },
                { title: 'Expert Support', description: 'Our knowledgeable team is here to guide you through every step.' },
                { title: 'Trusted Service', description: 'Registered company (RC: 8313006) with thousands of satisfied customers.' },
              ].map((item, index) => (
                <div key={index} className="group p-6 md:p-8 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 hover:border-[#E53935]/50 hover:bg-white/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#E53935]/10">
                  <div className="w-12 h-12 bg-[#E53935]/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#E53935] transition-all duration-300 group-hover:scale-110">
                    <CheckCircle2 className="w-6 h-6 text-[#E53935] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-white mb-2 group-hover:text-[#E53935] transition-colors">{item.title}</h3>
                  <p className="text-gray-400 text-sm md:text-base leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="relative overflow-hidden">
          <div className="hidden lg:grid lg:grid-cols-2 min-h-[700px]">
            <div className="relative bg-gradient-to-br from-gray-50 via-white to-gray-100 py-16 px-8 xl:px-16 overflow-y-auto">
              <div className="absolute inset-0 bg-pattern-grid"></div>
              <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-[#E53935]/5 to-transparent rounded-full blur-3xl"></div>
              
              <div className="relative max-w-xl mx-auto">
                <Badge className="mb-3 bg-[#E53935]/10 text-[#E53935]">Contact Us</Badge>
                <h2 className="text-3xl xl:text-4xl font-bold text-black mb-4">
                  Get In <span className="text-gradient">Touch</span>
                </h2>
                <p className="text-gray-600 mb-8">
                  Interested in a vehicle? Want to sell or swap your car? Contact us today or visit our lot.
                </p>

                <div className="space-y-5 mb-8">
                  <a href="#map-section" className="flex items-start gap-4 group cursor-pointer">
                    <div className="w-12 h-12 bg-black/5 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#E53935] transition-colors duration-300">
                      <MapPin className="w-6 h-6 text-black group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Visit Our Lot</h3>
                      <p className="text-gray-600 group-hover:text-[#E53935] transition-colors">14 Olatunde Onimole St, Surulere, Lagos 100011, Lagos</p>
                    </div>
                  </a>

                  <a href="tel:+2348102487687" className="flex items-start gap-4 group cursor-pointer">
                    <div className="w-12 h-12 bg-black/5 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#E53935] transition-colors duration-300">
                      <Phone className="w-6 h-6 text-black group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Phone / WhatsApp</h3>
                      <p className="text-gray-600 group-hover:text-[#E53935] transition-colors">08102487687</p>
                    </div>
                  </a>

                  <a href="https://instagram.com/dabiri_autos" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 group cursor-pointer">
                    <div className="w-12 h-12 bg-black/5 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#E53935] transition-colors duration-300">
                      <Instagram className="w-6 h-6 text-black group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Follow Us</h3>
                      <p className="text-gray-600 group-hover:text-[#E53935] transition-colors">@dabiri_autos</p>
                    </div>
                  </a>

                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 bg-black/5 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#E53935] transition-colors duration-300">
                      <Clock className="w-6 h-6 text-black group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Business Hours</h3>
                      <p className="text-gray-600">Mon - Sat: 9:00 AM - 6:00 PM</p>
                    </div>
                  </div>
                </div>

                <Card className="p-6 shadow-xl border-0 bg-white/90 backdrop-blur-xl">
                  <h3 className="text-xl font-bold text-black mb-4">Send Us a Message</h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                        <Input placeholder="Your name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="h-11" required />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                        <Input type="tel" placeholder="Your phone" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="h-11" required />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                      <Input type="email" placeholder="Your email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="h-11" required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                      <Textarea placeholder="Tell us what vehicle you're looking for..." value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="min-h-[100px] resize-none" required />
                    </div>
                    <Button type="submit" className="w-full bg-[#E53935] hover:bg-[#C62828] text-white h-12 font-semibold btn-luxury">
                      Send Message
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </form>
                </Card>
              </div>
            </div>

            <div id="map-section" className="relative h-[700px] sticky top-20">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.0289!2d3.3525!3d6.4971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b5b3f7d7a1d%3A0x4e6b5c5f8a9b0c1d!2s14%20Olatunde%20Onimole%20St%2C%20Surulere%2C%20Lagos!5e0!3m2!1sen!2sng!4v1699999999999!5m2!1sen!2sng"
                className="absolute inset-0 w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              
              <div className="absolute top-6 left-6 right-6 bg-white rounded-2xl shadow-2xl p-5 max-w-sm z-10">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg border border-gray-100 overflow-hidden">
                    <img src="/dabiri-logo.png" alt="Dabiri Autos" className="w-12 h-12 object-contain" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 text-lg">Dabiri Autos Limited</h3>
                    <p className="text-gray-500 text-sm mt-1">14 Olatunde Onimole St, Surulere, Lagos 100011, Lagos</p>
                    <div className="flex items-center gap-2 mt-2">
                      <Badge className="bg-green-100 text-green-700 text-xs">Open Now</Badge>
                      <span className="text-xs text-gray-400">Closes 6:00 PM</span>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-3 mt-4">
                  <a href="https://maps.app.goo.gl/y31juV7bfN5zcSNa6" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-black text-white px-4 py-3 rounded-xl font-medium hover:bg-gray-800 transition-colors">
                    <Navigation className="w-4 h-4" />
                    Directions
                  </a>
                  <a href="tel:+2348102487687" className="flex items-center justify-center gap-2 bg-[#E53935] text-white px-4 py-3 rounded-xl font-medium hover:bg-[#C62828] transition-colors">
                    <Phone className="w-4 h-4" />
                    Call
                  </a>
                </div>
                <a href="https://wa.me/2348102487687" target="_blank" rel="noopener noreferrer" className="mt-3 w-full flex items-center justify-center gap-2 bg-[#25D366] text-white px-4 py-3 rounded-xl font-medium hover:bg-[#128C7E] transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  Message on WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Mobile Contact */}
          <div className="lg:hidden bg-gradient-to-br from-gray-50 via-white to-gray-100 py-12 px-4">
            <div className="relative">
              <Badge className="mb-3 bg-[#E53935]/10 text-[#E53935]">Contact Us</Badge>
              <h2 className="text-2xl font-bold text-black mb-4">
                Get In <span className="text-gradient">Touch</span>
              </h2>
              <p className="text-gray-600 mb-6 text-sm">
                Interested in a vehicle? Want to sell or swap your car? Contact us today.
              </p>

              <div className="space-y-4 mb-6">
                <a href="#map-section" className="flex items-center gap-3 cursor-pointer">
                  <div className="w-10 h-10 bg-black/5 rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-black" />
                  </div>
                  <div>
                    <span className="text-xs text-gray-500">Visit Our Lot</span>
                    <p className="text-sm font-medium text-gray-900">14 Olatunde Onimole St, Surulere, Lagos</p>
                  </div>
                </a>

                <a href="tel:+2348102487687" className="flex items-center gap-3 cursor-pointer">
                  <div className="w-10 h-10 bg-black/5 rounded-lg flex items-center justify-center">
                    <Phone className="w-5 h-5 text-black" />
                  </div>
                  <div>
                    <span className="text-xs text-gray-500">Phone / WhatsApp</span>
                    <p className="text-sm font-medium text-gray-900">08102487687</p>
                  </div>
                </a>

                <a href="https://instagram.com/dabiri_autos" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 cursor-pointer">
                  <div className="w-10 h-10 bg-black/5 rounded-lg flex items-center justify-center">
                    <Instagram className="w-5 h-5 text-black" />
                  </div>
                  <div>
                    <span className="text-xs text-gray-500">Instagram</span>
                    <p className="text-sm font-medium text-gray-900">@dabiri_autos</p>
                  </div>
                </a>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-black/5 rounded-lg flex items-center justify-center">
                    <Clock className="w-5 h-5 text-black" />
                  </div>
                  <div>
                    <span className="text-xs text-gray-500">Hours</span>
                    <p className="text-sm font-medium text-gray-900">Mon - Sat: 9AM - 6PM</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-3 mb-6">
                <a href="tel:+2348102487687" className="flex-1 flex items-center justify-center gap-2 bg-black text-white px-4 py-3 rounded-xl font-medium">
                  <Phone className="w-4 h-4" />
                  Call
                </a>
                <a href="https://wa.me/2348102487687" target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] text-white px-4 py-3 rounded-xl font-medium">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  WhatsApp
                </a>
              </div>

              <Card className="p-5 shadow-lg border-0 bg-white">
                <h3 className="text-lg font-bold text-black mb-4">Send Us a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-3">
                  <Input placeholder="Your name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="h-11" required />
                  <Input type="tel" placeholder="Your phone number" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="h-11" required />
                  <Input type="email" placeholder="Your email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="h-11" required />
                  <Textarea placeholder="What vehicle are you looking for?" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="min-h-[80px] resize-none" required />
                  <Button type="submit" className="w-full bg-[#E53935] hover:bg-[#C62828] text-white h-11 font-semibold">
                    Send Message
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </form>
              </Card>
            </div>
          </div>

          {/* Mobile Map */}
          <div id="map-section" className="lg:hidden relative h-[300px] w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.0289!2d3.3525!3d6.4971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b5b3f7d7a1d%3A0x4e6b5c5f8a9b0c1d!2s14%20Olatunde%20Onimole%20St%2C%20Surulere%2C%20Lagos!5e0!3m2!1sen!2sng!4v1699999999999!5m2!1sen!2sng"
              className="absolute inset-0 w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="absolute bottom-4 left-4 right-4 bg-white rounded-2xl shadow-2xl p-4 z-10">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-md border border-gray-100 overflow-hidden">
                    <img src="/dabiri-logo.png" alt="Dabiri Autos" className="w-10 h-10 object-contain" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Dabiri Autos Limited</h3>
                    <p className="text-sm text-gray-500">14 Olatunde Onimole St, Surulere</p>
                  </div>
                </div>
                <a href="https://maps.app.goo.gl/y31juV7bfN5zcSNa6" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 bg-black text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors">
                  <Navigation className="w-4 h-4" />
                  Directions
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#E53935] to-transparent"></div>
        
        <div className="container mx-auto px-4 py-12 md:py-16 relative">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <div className="col-span-2 md:col-span-1">
              <div className="bg-white rounded-xl p-3 inline-block mb-4">
                <img src="/dabiri-logo.png" alt="Dabiri Autos Logo" className="h-10 w-auto object-contain" />
              </div>
              <p className="text-gray-400 text-sm mb-4">
                Your trusted partner for quality vehicles in Nigeria. <span className="text-[#E53935]">iBUY • iSELL • iSWAP</span>
              </p>
              <div className="flex gap-3">
                {[
                  { href: 'https://instagram.com/dabiri_autos', icon: Instagram },
                  { href: '#', icon: Facebook },
                  { href: 'https://wa.me/2348102487687', icon: MessageCircle },
                ].map((social, index) => (
                  <a key={index} href={social.href} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center hover:bg-[#E53935] transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-red-500/20">
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-[#E53935]">Quick Links</h4>
              <ul className="space-y-2">
                {['Home', 'Vehicles', 'Services', 'About Us', 'Contact'].map((link) => (
                  <li key={link}>
                    <a href={`#${link.toLowerCase().replace(' ', '')}`} className="text-gray-400 hover:text-white transition-colors text-sm flex items-center group">
                      <ChevronRight className="w-4 h-4 mr-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-[#E53935]">Our Services</h4>
              <ul className="space-y-2">
                {['iBUY - Sell Your Car', 'iSELL - Buy a Car', 'iSWAP - Trade-In', 'Car Financing', 'Vehicle Inspection'].map((service) => (
                  <li key={service}>
                    <a href="#services" className="text-gray-400 hover:text-white transition-colors text-sm flex items-center group">
                      <ChevronRight className="w-4 h-4 mr-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-[#E53935]">Contact Info</h4>
              <ul className="space-y-3">
                {[
                  { icon: MapPin, text: '14 Olatunde Onimole St, Surulere, Lagos' },
                  { icon: Phone, text: '08102487687' },
                  { icon: Instagram, text: '@dabiri_autos' },
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-2 text-gray-400 text-sm group">
                    <item.icon className="w-4 h-4 text-[#E53935] group-hover:text-white transition-colors" />
                    <span className="group-hover:text-white transition-colors">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 mt-10 md:mt-12 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Dabiri Autos Limited. All rights reserved. <span className="text-[#E53935]">RC: 8313006</span>
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-[#E53935] transition-colors text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-[#E53935] transition-colors text-sm">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
