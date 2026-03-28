import { MapPin, Phone, Clock, Instagram, Navigation } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { ContactForm } from '@/components/shared/contact-form'
import { WhatsAppIcon } from '@/components/shared/whatsapp-icon'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us | Dabiri Autos Limited',
  description:
    'Get in touch with Dabiri Autos Limited. Visit our lot in Surulere, Lagos or contact us via phone, WhatsApp, or email.',
}

const contactInfo = [
  {
    href: '#map',
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

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="absolute inset-0 bg-pattern-dots opacity-10" aria-hidden="true" />
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" aria-hidden="true" />

        <div className="relative container mx-auto px-4 text-center">
          <Badge className="mb-3 bg-primary/20 text-primary border-primary/30">
            Contact Us
          </Badge>
          <h1 className="font-display text-h1 text-white mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-body-lg">
            Interested in a vehicle? Want to sell or swap your car? We&apos;re here to help.
            Reach out via any channel below.
          </p>
        </div>
      </section>

      {/* Contact content */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-[#0d0d12] dark:via-[#0a0a0f] dark:to-[#0d0d12] relative">
        <div className="absolute inset-0 bg-pattern-grid" aria-hidden="true" />

        <div className="relative container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left: Info */}
            <div>
              <h2 className="font-display text-h2 text-black dark:text-white mb-8">
                How to Reach Us
              </h2>

              <div className="space-y-6 mb-10">
                {contactInfo.map((item) => (
                  <a
                    key={item.title}
                    href={item.href}
                    target={item.external ? '_blank' : undefined}
                    rel={item.external ? 'noopener noreferrer' : undefined}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-14 h-14 bg-black/5 dark:bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors duration-slow min-w-[44px] min-h-[44px]">
                      <item.icon className="w-6 h-6 text-black dark:text-white group-hover:text-white transition-colors" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-gray-900 dark:text-white mb-1">{item.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400 group-hover:text-primary transition-colors">
                        {item.detail}
                      </p>
                    </div>
                  </a>
                ))}

                <div className="flex items-start gap-4 group">
                  <div className="w-14 h-14 bg-black/5 dark:bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors duration-slow min-w-[44px] min-h-[44px]">
                    <Clock className="w-6 h-6 text-black dark:text-white group-hover:text-white transition-colors" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-gray-900 dark:text-white mb-1">Business Hours</h3>
                    <p className="text-gray-600 dark:text-gray-400">Monday - Saturday: 9:00 AM - 6:00 PM</p>
                    <p className="text-gray-400 text-sm">Sunday: Closed</p>
                  </div>
                </div>
              </div>

              {/* Quick action buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="tel:+2348102487687"
                  className="flex-1 flex items-center justify-center gap-2 bg-black text-white px-6 py-4 rounded-xl font-semibold hover:bg-gray-800 transition-colors min-h-[44px]"
                  aria-label="Call Dabiri Autos"
                >
                  <Phone className="w-5 h-5" aria-hidden="true" />
                  Call Now
                </a>
                <a
                  href="https://wa.me/2348102487687"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] text-white px-6 py-4 rounded-xl font-semibold hover:bg-[#128C7E] transition-colors min-h-[44px]"
                  aria-label="Message Dabiri Autos on WhatsApp"
                >
                  <WhatsAppIcon className="w-5 h-5" />
                  WhatsApp Us
                </a>
              </div>
            </div>

            {/* Right: Form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section id="map" className="relative h-[400px] md:h-[500px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.0289!2d3.3525!3d6.4971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b5b3f7d7a1d%3A0x4e6b5c5f8a9b0c1d!2s14%20Olatunde%20Onimole%20St%2C%20Surulere%2C%20Lagos!5e0!3m2!1sen!2sng!4v1699999999999!5m2!1sen!2sng"
          className="absolute inset-0 w-full h-full border-0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Dabiri Autos location on Google Maps"
        />
        <div className="absolute bottom-6 left-6 right-6 md:left-auto md:right-6 bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-5 max-w-sm z-10">
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
                14 Olatunde Onimole St, Surulere, Lagos
              </p>
            </div>
          </div>
          <a
            href="https://maps.app.goo.gl/y31juV7bfN5zcSNa6"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 w-full flex items-center justify-center gap-2 bg-black text-white px-4 py-3 rounded-xl font-medium hover:bg-gray-800 transition-colors min-h-[44px]"
            aria-label="Get directions to Dabiri Autos"
          >
            <Navigation className="w-4 h-4" aria-hidden="true" />
            Get Directions
          </a>
        </div>
      </section>
    </div>
  )
}
