'use client'

import { MapPin, Phone, Clock, Instagram, Mail, Navigation } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { ContactForm } from '@/components/shared/contact-form'
import { WhatsAppIcon } from '@/components/shared/whatsapp-icon'
import { AuroraBg } from '@/components/shared/aurora-bg'
import { MapboxMap } from '@/components/shared/mapbox-map'

const contactInfo = [
  {
    href: '#map-section',
    icon: MapPin,
    title: 'Visit Our Lot',
    detail: '14 Olatunde Onimole St, Surulere, Lagos 100011, Lagos',
  },
  {
    href: 'tel:+2347025317059',
    icon: Phone,
    title: 'Phone / WhatsApp',
    detail: '07025317059',
  },
  {
    href: 'https://instagram.com/dabiri_autos',
    icon: Instagram,
    title: 'Follow Us',
    detail: '@dabiri_autos',
    external: true,
  },
  {
    href: 'mailto:info@dabiriautos.ng',
    icon: Mail,
    title: 'Email Us',
    detail: 'info@dabiriautos.ng',
  },
]

export function ContactSection() {
  return (
    <section id="contact" className="relative overflow-hidden">
      {/* Light mode background */}
      <div className="absolute inset-0 bg-white dark:hidden z-[1]" aria-hidden="true" />
      {/* Light mode: red-tinted left half panel — desktop only (left column tint for split layout) */}
      <div className="hidden lg:block dark:hidden absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-red-50 to-transparent z-[1]" aria-hidden="true" />
      {/* Light mode: top gradient wash — mobile only */}
      <div className="lg:hidden dark:hidden absolute top-0 inset-x-0 h-48 bg-gradient-to-b from-red-50 to-transparent z-[1]" aria-hidden="true" />

      {/* Desktop layout */}
      <div className="hidden lg:grid lg:grid-cols-2 min-h-[700px] relative z-[2]">
        {/* Contact info + form */}
        <AuroraBg className="overflow-y-auto">
          <div className="py-16 px-8 xl:px-16 bg-white dark:bg-transparent">
          <div className="max-w-xl mx-auto">
            <Badge className="mb-3 bg-primary/10 text-primary">Contact Us</Badge>
            <h2 className="font-display text-h2 text-gray-900 dark:text-white mb-4">
              Get In <span className="text-gradient">Touch</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8 text-body">
              Interested in a vehicle? Want to sell or swap your car? Contact us today or visit
              our lot.
            </p>

            <div className="space-y-5 mb-8">
              {contactInfo.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'noopener noreferrer' : undefined}
                  className="flex items-start gap-4 group cursor-pointer"
                >
                  <div className="w-12 h-12 bg-gray-100 dark:bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors duration-slow min-w-[44px] min-h-[44px]">
                    <item.icon className="w-6 h-6 text-gray-700 dark:text-white group-hover:text-white transition-colors" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white mb-1">{item.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 group-hover:text-primary transition-colors">
                      {item.detail}
                    </p>
                  </div>
                </a>
              ))}

              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 bg-gray-100 dark:bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors duration-slow min-w-[44px] min-h-[44px]">
                  <Clock className="w-6 h-6 text-gray-700 dark:text-white group-hover:text-white transition-colors" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-1">Business Hours</h3>
                  <p className="text-gray-600 dark:text-gray-400">Mon - Sat: 9:00 AM - 8:00 PM</p>
                </div>
              </div>
            </div>

            <ContactForm />
          </div>
          </div>
        </AuroraBg>

        {/* Map */}
        <div id="map-section" className="relative h-full min-h-[700px] sticky top-20">
          <MapboxMap className="absolute inset-0 w-full h-full" />

          <div className="absolute top-6 left-6 right-6 bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-5 max-w-sm z-10">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg border border-gray-100 overflow-hidden">
                <img
                  src="/dabiri-logo.png"
                  alt="Dabiri Autos"
                  className="w-12 h-12 object-contain"
                  width={48}
                  height={48}
                />
              </div>
              <div className="flex-1">
                <h3 className="font-display font-bold text-gray-900 dark:text-white text-lg">
                  Dabiri Autos Limited
                </h3>
                <p className="text-gray-500 text-sm mt-1">
                  14 Olatunde Onimole St, Surulere, Lagos 100011, Lagos
                </p>
                <div className="flex items-center gap-2 mt-2">
                  <Badge className="bg-green-100 text-green-700 text-xs">Open Now</Badge>
                  <span className="text-xs text-gray-400">Closes 8:00 PM</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 mt-4">
              <a
                href="https://maps.app.goo.gl/y31juV7bfN5zcSNa6"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-black text-white px-4 py-3 rounded-xl font-medium hover:bg-gray-800 transition-colors min-h-[44px]"
                aria-label="Get directions to Dabiri Autos"
              >
                <Navigation className="w-4 h-4" aria-hidden="true" />
                Directions
              </a>
              <a
                href="tel:+2347025317059"
                className="flex items-center justify-center gap-2 bg-primary text-white px-4 py-3 rounded-xl font-medium hover:bg-primary-dark transition-colors min-h-[44px]"
                aria-label="Call Dabiri Autos"
              >
                <Phone className="w-4 h-4" aria-hidden="true" />
                Call
              </a>
            </div>
            <a
              href="https://wa.me/2347025317059"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 w-full flex items-center justify-center gap-2 bg-whatsapp text-white px-4 py-3 rounded-xl font-medium hover:bg-whatsapp-dark transition-colors min-h-[44px]"
              aria-label="Message Dabiri Autos on WhatsApp"
            >
              <WhatsAppIcon className="w-5 h-5" />
              Message on WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Mobile layout */}
      <AuroraBg className="lg:hidden relative z-[2]">
        <div className="py-12 px-4 bg-white dark:bg-transparent">
          <Badge className="mb-3 bg-primary/10 text-primary">Contact Us</Badge>
          <h2 className="font-display text-h2 text-gray-900 dark:text-white mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6 text-body">
            Interested in a vehicle? Want to sell or swap your car? Contact us today.
          </p>

          <div className="space-y-4 mb-6">
            {contactInfo.map((item) => (
              <a
                key={item.title}
                href={item.href}
                target={item.external ? '_blank' : undefined}
                rel={item.external ? 'noopener noreferrer' : undefined}
                className="flex items-center gap-3 cursor-pointer"
              >
                <div className="w-10 h-10 bg-gray-100 dark:bg-white/10 rounded-lg flex items-center justify-center min-w-[44px] min-h-[44px]">
                  <item.icon className="w-5 h-5 text-gray-700 dark:text-white" aria-hidden="true" />
                </div>
                <div>
                  <span className="text-xs text-gray-500 dark:text-gray-400">{item.title}</span>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">{item.detail}</p>
                </div>
              </a>
            ))}

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gray-100 dark:bg-white/10 rounded-lg flex items-center justify-center min-w-[44px] min-h-[44px]">
                <Clock className="w-5 h-5 text-gray-700 dark:text-white" aria-hidden="true" />
              </div>
              <div>
                <span className="text-xs text-gray-500 dark:text-gray-400">Hours</span>
                <p className="text-sm font-medium text-gray-900 dark:text-white">Mon - Sat: 9AM - 8PM</p>
              </div>
            </div>
          </div>

          <div className="flex gap-3 mb-6">
            <a
              href="tel:+2347025317059"
              className="flex-1 flex items-center justify-center gap-2 bg-black text-white px-4 py-3 rounded-xl font-medium min-h-[44px]"
              aria-label="Call Dabiri Autos"
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
              Call
            </a>
            <a
              href="https://wa.me/2347025317059"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 bg-whatsapp text-white px-4 py-3 rounded-xl font-medium min-h-[44px]"
              aria-label="Message Dabiri Autos on WhatsApp"
            >
              <WhatsAppIcon className="w-4 h-4" />
              WhatsApp
            </a>
          </div>

          <ContactForm compact />
        </div>
      </AuroraBg>

      {/* Mobile Map */}
      <div className="lg:hidden relative h-[300px] w-full z-[2]">
        <MapboxMap className="absolute inset-0 w-full h-full" />
        <div className="absolute bottom-4 left-4 right-4 bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-4 z-10">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-md border border-gray-100 overflow-hidden">
                <img
                  src="/dabiri-logo.png"
                  alt="Dabiri Autos"
                  className="w-10 h-10 object-contain"
                  width={40}
                  height={40}
                />
              </div>
              <div>
                <h3 className="font-display font-bold text-gray-900 dark:text-white">Dabiri Autos Limited</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">14 Olatunde Onimole St, Surulere</p>
              </div>
            </div>
            <a
              href="https://maps.app.goo.gl/y31juV7bfN5zcSNa6"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 bg-black text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors min-h-[44px]"
              aria-label="Get directions to Dabiri Autos"
            >
              <Navigation className="w-4 h-4" aria-hidden="true" />
              Directions
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
