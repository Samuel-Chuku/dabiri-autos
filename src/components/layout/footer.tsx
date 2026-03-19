import Link from 'next/link'
import { MapPin, Phone, Instagram, Facebook, MessageCircle, ChevronRight } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" aria-hidden="true" />

      <div className="container mx-auto px-4 py-12 md:py-16 relative">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          <div className="col-span-2 md:col-span-1">
            <div className="bg-white rounded-xl p-3 inline-block mb-4">
              <img
                src="/dabiri-logo.png"
                alt="Dabiri Autos Logo"
                className="h-10 w-auto object-contain"
                width={40}
                height={40}
              />
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Your trusted partner for quality vehicles in Nigeria.{' '}
              <span className="text-primary">iBUY &bull; iSELL &bull; iSWAP</span>
            </p>
            <div className="flex gap-3">
              {[
                { href: 'https://instagram.com/dabiri_autos', icon: Instagram, label: 'Instagram' },
                { href: 'https://facebook.com/dabiri_autos', icon: Facebook, label: 'Facebook' },
                { href: 'https://wa.me/2348102487687', icon: MessageCircle, label: 'WhatsApp' },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Follow Dabiri Autos on ${social.label}`}
                  className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center hover:bg-primary transition-all duration-slow hover:scale-110 hover:shadow-lg hover:shadow-red-500/20 min-w-[44px] min-h-[44px]"
                >
                  <social.icon className="w-5 h-5" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold mb-4 text-primary">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: 'Home', href: '/' },
                { label: 'Vehicles', href: '/inventory' },
                { label: 'Services', href: '/#services' },
                { label: 'About Us', href: '/#aboutus' },
                { label: 'Contact', href: '/contact' },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm flex items-center group min-h-[36px]"
                  >
                    <ChevronRight className="w-4 h-4 mr-1 opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold mb-4 text-primary">Our Services</h4>
            <ul className="space-y-2">
              {['iBUY - Sell Your Car', 'iSELL - Buy a Car', 'iSWAP - Trade-In', 'Car Financing', 'Vehicle Inspection'].map((service) => (
                <li key={service}>
                  <Link
                    href="/#services"
                    className="text-gray-400 hover:text-white transition-colors text-sm flex items-center group min-h-[36px]"
                  >
                    <ChevronRight className="w-4 h-4 mr-1 opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold mb-4 text-primary">Contact Info</h4>
            <ul className="space-y-3">
              {[
                { icon: MapPin, text: '14 Olatunde Onimole St, Surulere, Lagos' },
                { icon: Phone, text: '08102487687' },
                { icon: Instagram, text: '@dabiri_autos' },
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-2 text-gray-400 text-sm group">
                  <item.icon className="w-4 h-4 text-primary group-hover:text-white transition-colors flex-shrink-0" aria-hidden="true" />
                  <span className="group-hover:text-white transition-colors">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 md:mt-12 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm text-center md:text-left">
            &copy; {currentYear} Dabiri Autos Limited. All rights reserved.{' '}
            <span className="text-primary">RC: 8313006</span>
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-gray-400 hover:text-primary transition-colors text-sm min-h-[44px] flex items-center">
              Privacy Policy
            </Link>
            <Link href="#" className="text-gray-400 hover:text-primary transition-colors text-sm min-h-[44px] flex items-center">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
