'use client'

import { MapPin, Phone, Clock, Instagram, Navigation } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { ContactForm } from '@/components/shared/contact-form'
import { WhatsAppIcon } from '@/components/shared/whatsapp-icon'
import { AuroraBg } from '@/components/shared/aurora-bg'

const contactInfo = [
  {
    href: '#map-section',
    icon: MapPin,
    title: 'Visit Our Lot',
    detail: '14 Olatunde Onimole St, Surulere, Lagos 100011, Lagos',
  },
  {
    href: 'tel:+2348102487687',
    icon: Phone,
    title: 'Phone / WhatsApp',
    detail: '08102487687',
  },
  {
    href: 'https://instagram.com/dabiri_autos',
    icon: Instagram,
    title: 'Follow Us',
    detail: '@dabiri_autos',
    external: true,
  },
]

export function ContactSection() {
  return (
    <section id="contact" className="relative overflow-hidden">
      {/* Desktop layout */}
      <div className="hidden lg:grid lg:grid-cols-2 min-h-[700px]">
        {/* Contact info + form */}
        <AuroraBg className="py-16 px-8 xl:px-16 overflow-y-auto">
          <div className="max-w-xl mx-auto">
            <Badge className="mb-3 bg-primary/10 text-primary">Contact Us</Badge>
            <h2 className="font-display text-h2 text-white mb-4">
              Get In <span className="text-gradient">Touch</span>
            </h2>
            <p className="text-gray-400 mb-8 text-body">
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
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors duration-slow min-w-[44px] min-h-[44px]">
                    <item.icon className="w-6 h-6 text-white group-hover:text-white transition-colors" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-1">{item.title}</h3>
                    <p className="text-gray-400 group-hover:text-primary transition-colors">
                      {item.detail}
                    </p>
                  </div>
                </a>
              ))}

              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors duration-slow min-w-[44px] min-h-[44px]">
                  <Clock className="w-6 h-6 text-white group-hover:text-white transition-colors" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-bold text-white mb-1">Business Hours</h3>
                  <p className="text-gray-400">Mon - Sat: 9:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>

            <ContactForm />
          </div>
        </AuroraBg>

        {/* Map */}
        <div id="map-section" className="relative h-[700px] sticky top-20">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.0289!2d3.3525!3d6.4971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b5b3f7d7a1d%3A0x4e6b5c5f8a9b0c1d!2s14%20Olatunde%20Onimole%20St%2C%20Surulere%2C%20Lagos!5e0!3m2!1sen!2sng!4v1699999999999!5m2!1sen!2sng"
            className="absolute inset-0 w-full h-full border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Dabiri Autos location on Google Maps"
          />

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
                  <span className="text-xs text-gray-400">Closes 6:00 PM</span>
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
                href="tel:+2348102487687"
                className="flex items-center justify-center gap-2 bg-primary text-white px-4 py-3 rounded-xl font-medium hover:bg-primary-dark transition-colors min-h-[44px]"
                aria-label="Call Dabiri Autos"
              >
                <Phone className="w-4 h-4" aria-hidden="true" />
                Call
              </a>
            </div>
            <a
              href="https://wa.me/2348102487687"
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
      <AuroraBg className="lg:hidden py-12 px-4">
        <div>
          <Badge className="mb-3 bg-primary/10 text-primary">Contact Us</Badge>
          <h2 className="font-display text-h2 text-white mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-gray-400 mb-6 text-body">
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
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center min-w-[44px] min-h-[44px]">
                  <item.icon className="w-5 h-5 text-white" aria-hidden="true" />
                </div>
                <div>
                  <span className="text-xs text-gray-400">{item.title}</span>
                  <p className="text-sm font-medium text-white">{item.detail}</p>
                </div>
              </a>
            ))}

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center min-w-[44px] min-h-[44px]">
                <Clock className="w-5 h-5 text-white" aria-hidden="true" />
              </div>
              <div>
                <span className="text-xs text-gray-400">Hours</span>
                <p className="text-sm font-medium text-white">Mon - Sat: 9AM - 6PM</p>
              </div>
            </div>
          </div>

          <div className="flex gap-3 mb-6">
            <a
              href="tel:+2348102487687"
              className="flex-1 flex items-center justify-center gap-2 bg-black text-white px-4 py-3 rounded-xl font-medium min-h-[44px]"
              aria-label="Call Dabiri Autos"
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
              Call
            </a>
            <a
              href="https://wa.me/2348102487687"
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
      <div className="lg:hidden relative h-[300px] w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.0289!2d3.3525!3d6.4971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b5b3f7d7a1d%3A0x4e6b5c5f8a9b0c1d!2s14%20Olatunde%20Onimole%20St%2C%20Surulere%2C%20Lagos!5e0!3m2!1sen!2sng!4v1699999999999!5m2!1sen!2sng"
          className="absolute inset-0 w-full h-full border-0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Dabiri Autos location on Google Maps"
        />
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
