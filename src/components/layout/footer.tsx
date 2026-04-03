import Link from 'next/link'
import { MapPin, Phone, Instagram, Facebook, MessageCircle, ChevronRight } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-white dark:bg-black text-gray-900 dark:text-white relative overflow-hidden border-t border-gray-200 dark:border-white/10">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" aria-hidden="true" />

      {/* === Decorative background icons laced throughout footer === */}
      {/* Steering wheel SVG component reused inline at different positions/sizes/rotations */}

      {/* Row 1 — top strip */}
      <svg aria-hidden="true" viewBox="0 0 100 100" className="absolute top-3 left-[4%] w-16 h-16 opacity-[0.05] dark:opacity-[0.07] pointer-events-none select-none rotate-12" fill="none" stroke="currentColor">
        <circle cx="50" cy="50" r="44" strokeWidth="6"/><circle cx="50" cy="50" r="10" strokeWidth="5"/><circle cx="50" cy="50" r="4" fill="currentColor" stroke="none"/>
        <line x1="50" y1="40" x2="50" y2="7" strokeWidth="5" strokeLinecap="round"/><line x1="58" y1="55" x2="89" y2="72" strokeWidth="5" strokeLinecap="round"/><line x1="42" y1="55" x2="11" y2="72" strokeWidth="5" strokeLinecap="round"/>
      </svg>
      <svg aria-hidden="true" viewBox="0 0 100 100" className="absolute top-2 left-[22%] w-10 h-10 opacity-[0.04] dark:opacity-[0.05] pointer-events-none select-none -rotate-20" fill="none" stroke="currentColor">
        <circle cx="50" cy="50" r="46" strokeWidth="5"/><circle cx="50" cy="50" r="36" strokeWidth="2"/><circle cx="50" cy="50" r="7" strokeWidth="4"/>
        <line x1="50" y1="43" x2="50" y2="15" strokeWidth="4" strokeLinecap="round"/><line x1="50" y1="43" x2="76" y2="58" strokeWidth="4" strokeLinecap="round"/><line x1="50" y1="43" x2="66" y2="84" strokeWidth="4" strokeLinecap="round"/><line x1="50" y1="43" x2="34" y2="84" strokeWidth="4" strokeLinecap="round"/><line x1="50" y1="43" x2="24" y2="58" strokeWidth="4" strokeLinecap="round"/>
      </svg>
      <svg aria-hidden="true" viewBox="0 0 100 100" className="absolute -top-4 left-[42%] w-20 h-20 opacity-[0.04] dark:opacity-[0.06] pointer-events-none select-none rotate-30" fill="none" stroke="currentColor">
        <circle cx="50" cy="50" r="44" strokeWidth="6"/><circle cx="50" cy="50" r="10" strokeWidth="5"/><circle cx="50" cy="50" r="4" fill="currentColor" stroke="none"/>
        <line x1="50" y1="40" x2="50" y2="7" strokeWidth="5" strokeLinecap="round"/><line x1="58" y1="55" x2="89" y2="72" strokeWidth="5" strokeLinecap="round"/><line x1="42" y1="55" x2="11" y2="72" strokeWidth="5" strokeLinecap="round"/>
      </svg>
      <svg aria-hidden="true" viewBox="0 0 100 100" className="absolute top-4 left-[63%] w-12 h-12 opacity-[0.035] dark:opacity-[0.055] pointer-events-none select-none -rotate-10" fill="none" stroke="currentColor">
        <circle cx="50" cy="50" r="46" strokeWidth="5"/><circle cx="50" cy="50" r="36" strokeWidth="2"/><circle cx="50" cy="50" r="7" strokeWidth="4"/>
        <line x1="50" y1="43" x2="50" y2="15" strokeWidth="4" strokeLinecap="round"/><line x1="50" y1="43" x2="76" y2="58" strokeWidth="4" strokeLinecap="round"/><line x1="50" y1="43" x2="66" y2="84" strokeWidth="4" strokeLinecap="round"/><line x1="50" y1="43" x2="34" y2="84" strokeWidth="4" strokeLinecap="round"/><line x1="50" y1="43" x2="24" y2="58" strokeWidth="4" strokeLinecap="round"/>
      </svg>
      <svg aria-hidden="true" viewBox="0 0 100 100" className="absolute top-1 right-[3%] w-14 h-14 opacity-[0.05] dark:opacity-[0.07] pointer-events-none select-none rotate-45" fill="none" stroke="currentColor">
        <circle cx="50" cy="50" r="44" strokeWidth="6"/><circle cx="50" cy="50" r="10" strokeWidth="5"/><circle cx="50" cy="50" r="4" fill="currentColor" stroke="none"/>
        <line x1="50" y1="40" x2="50" y2="7" strokeWidth="5" strokeLinecap="round"/><line x1="58" y1="55" x2="89" y2="72" strokeWidth="5" strokeLinecap="round"/><line x1="42" y1="55" x2="11" y2="72" strokeWidth="5" strokeLinecap="round"/>
      </svg>

      {/* Row 2 — middle strip */}
      <svg aria-hidden="true" viewBox="0 0 100 100" className="absolute top-[40%] -left-4 w-20 h-20 opacity-[0.04] dark:opacity-[0.06] pointer-events-none select-none rotate-20" fill="none" stroke="currentColor">
        <circle cx="50" cy="50" r="46" strokeWidth="5"/><circle cx="50" cy="50" r="36" strokeWidth="2"/><circle cx="50" cy="50" r="7" strokeWidth="4"/>
        <line x1="50" y1="43" x2="50" y2="15" strokeWidth="4" strokeLinecap="round"/><line x1="50" y1="43" x2="76" y2="58" strokeWidth="4" strokeLinecap="round"/><line x1="50" y1="43" x2="66" y2="84" strokeWidth="4" strokeLinecap="round"/><line x1="50" y1="43" x2="34" y2="84" strokeWidth="4" strokeLinecap="round"/><line x1="50" y1="43" x2="24" y2="58" strokeWidth="4" strokeLinecap="round"/>
      </svg>
      <svg aria-hidden="true" viewBox="0 0 100 100" className="absolute top-[35%] left-[15%] w-11 h-11 opacity-[0.035] dark:opacity-[0.05] pointer-events-none select-none -rotate-35" fill="none" stroke="currentColor">
        <circle cx="50" cy="50" r="44" strokeWidth="6"/><circle cx="50" cy="50" r="10" strokeWidth="5"/><circle cx="50" cy="50" r="4" fill="currentColor" stroke="none"/>
        <line x1="50" y1="40" x2="50" y2="7" strokeWidth="5" strokeLinecap="round"/><line x1="58" y1="55" x2="89" y2="72" strokeWidth="5" strokeLinecap="round"/><line x1="42" y1="55" x2="11" y2="72" strokeWidth="5" strokeLinecap="round"/>
      </svg>
      <svg aria-hidden="true" viewBox="0 0 100 100" className="absolute top-[45%] left-[33%] w-14 h-14 opacity-[0.04] dark:opacity-[0.055] pointer-events-none select-none rotate-15" fill="none" stroke="currentColor">
        <circle cx="50" cy="50" r="46" strokeWidth="5"/><circle cx="50" cy="50" r="36" strokeWidth="2"/><circle cx="50" cy="50" r="7" strokeWidth="4"/>
        <line x1="50" y1="43" x2="50" y2="15" strokeWidth="4" strokeLinecap="round"/><line x1="50" y1="43" x2="76" y2="58" strokeWidth="4" strokeLinecap="round"/><line x1="50" y1="43" x2="66" y2="84" strokeWidth="4" strokeLinecap="round"/><line x1="50" y1="43" x2="34" y2="84" strokeWidth="4" strokeLinecap="round"/><line x1="50" y1="43" x2="24" y2="58" strokeWidth="4" strokeLinecap="round"/>
      </svg>
      <svg aria-hidden="true" viewBox="0 0 100 100" className="absolute top-[38%] left-[55%] w-10 h-10 opacity-[0.03] dark:opacity-[0.05] pointer-events-none select-none -rotate-25" fill="none" stroke="currentColor">
        <circle cx="50" cy="50" r="44" strokeWidth="6"/><circle cx="50" cy="50" r="10" strokeWidth="5"/><circle cx="50" cy="50" r="4" fill="currentColor" stroke="none"/>
        <line x1="50" y1="40" x2="50" y2="7" strokeWidth="5" strokeLinecap="round"/><line x1="58" y1="55" x2="89" y2="72" strokeWidth="5" strokeLinecap="round"/><line x1="42" y1="55" x2="11" y2="72" strokeWidth="5" strokeLinecap="round"/>
      </svg>
      <svg aria-hidden="true" viewBox="0 0 100 100" className="absolute top-[42%] left-[75%] w-16 h-16 opacity-[0.04] dark:opacity-[0.06] pointer-events-none select-none rotate-40" fill="none" stroke="currentColor">
        <circle cx="50" cy="50" r="46" strokeWidth="5"/><circle cx="50" cy="50" r="36" strokeWidth="2"/><circle cx="50" cy="50" r="7" strokeWidth="4"/>
        <line x1="50" y1="43" x2="50" y2="15" strokeWidth="4" strokeLinecap="round"/><line x1="50" y1="43" x2="76" y2="58" strokeWidth="4" strokeLinecap="round"/><line x1="50" y1="43" x2="66" y2="84" strokeWidth="4" strokeLinecap="round"/><line x1="50" y1="43" x2="34" y2="84" strokeWidth="4" strokeLinecap="round"/><line x1="50" y1="43" x2="24" y2="58" strokeWidth="4" strokeLinecap="round"/>
      </svg>
      <svg aria-hidden="true" viewBox="0 0 100 100" className="absolute top-[36%] -right-6 w-24 h-24 opacity-[0.05] dark:opacity-[0.07] pointer-events-none select-none -rotate-18" fill="none" stroke="currentColor">
        <circle cx="50" cy="50" r="44" strokeWidth="6"/><circle cx="50" cy="50" r="10" strokeWidth="5"/><circle cx="50" cy="50" r="4" fill="currentColor" stroke="none"/>
        <line x1="50" y1="40" x2="50" y2="7" strokeWidth="5" strokeLinecap="round"/><line x1="58" y1="55" x2="89" y2="72" strokeWidth="5" strokeLinecap="round"/><line x1="42" y1="55" x2="11" y2="72" strokeWidth="5" strokeLinecap="round"/>
      </svg>

      {/* Row 3 — bottom strip */}
      <svg aria-hidden="true" viewBox="0 0 100 100" className="absolute bottom-4 left-[2%] w-12 h-12 opacity-[0.04] dark:opacity-[0.06] pointer-events-none select-none rotate-25" fill="none" stroke="currentColor">
        <circle cx="50" cy="50" r="46" strokeWidth="5"/><circle cx="50" cy="50" r="36" strokeWidth="2"/><circle cx="50" cy="50" r="7" strokeWidth="4"/>
        <line x1="50" y1="43" x2="50" y2="15" strokeWidth="4" strokeLinecap="round"/><line x1="50" y1="43" x2="76" y2="58" strokeWidth="4" strokeLinecap="round"/><line x1="50" y1="43" x2="66" y2="84" strokeWidth="4" strokeLinecap="round"/><line x1="50" y1="43" x2="34" y2="84" strokeWidth="4" strokeLinecap="round"/><line x1="50" y1="43" x2="24" y2="58" strokeWidth="4" strokeLinecap="round"/>
      </svg>
      <svg aria-hidden="true" viewBox="0 0 100 100" className="absolute bottom-2 left-[20%] w-16 h-16 opacity-[0.035] dark:opacity-[0.055] pointer-events-none select-none -rotate-15" fill="none" stroke="currentColor">
        <circle cx="50" cy="50" r="44" strokeWidth="6"/><circle cx="50" cy="50" r="10" strokeWidth="5"/><circle cx="50" cy="50" r="4" fill="currentColor" stroke="none"/>
        <line x1="50" y1="40" x2="50" y2="7" strokeWidth="5" strokeLinecap="round"/><line x1="58" y1="55" x2="89" y2="72" strokeWidth="5" strokeLinecap="round"/><line x1="42" y1="55" x2="11" y2="72" strokeWidth="5" strokeLinecap="round"/>
      </svg>
      <svg aria-hidden="true" viewBox="0 0 100 100" className="absolute -bottom-6 left-[40%] w-24 h-24 opacity-[0.05] dark:opacity-[0.07] pointer-events-none select-none rotate-10" fill="none" stroke="currentColor">
        <circle cx="50" cy="50" r="46" strokeWidth="5"/><circle cx="50" cy="50" r="36" strokeWidth="2"/><circle cx="50" cy="50" r="7" strokeWidth="4"/>
        <line x1="50" y1="43" x2="50" y2="15" strokeWidth="4" strokeLinecap="round"/><line x1="50" y1="43" x2="76" y2="58" strokeWidth="4" strokeLinecap="round"/><line x1="50" y1="43" x2="66" y2="84" strokeWidth="4" strokeLinecap="round"/><line x1="50" y1="43" x2="34" y2="84" strokeWidth="4" strokeLinecap="round"/><line x1="50" y1="43" x2="24" y2="58" strokeWidth="4" strokeLinecap="round"/>
      </svg>
      <svg aria-hidden="true" viewBox="0 0 100 100" className="absolute bottom-3 left-[62%] w-10 h-10 opacity-[0.04] dark:opacity-[0.06] pointer-events-none select-none -rotate-30" fill="none" stroke="currentColor">
        <circle cx="50" cy="50" r="44" strokeWidth="6"/><circle cx="50" cy="50" r="10" strokeWidth="5"/><circle cx="50" cy="50" r="4" fill="currentColor" stroke="none"/>
        <line x1="50" y1="40" x2="50" y2="7" strokeWidth="5" strokeLinecap="round"/><line x1="58" y1="55" x2="89" y2="72" strokeWidth="5" strokeLinecap="round"/><line x1="42" y1="55" x2="11" y2="72" strokeWidth="5" strokeLinecap="round"/>
      </svg>
      <svg aria-hidden="true" viewBox="0 0 100 100" className="absolute -bottom-4 right-[5%] w-20 h-20 opacity-[0.05] dark:opacity-[0.07] pointer-events-none select-none rotate-22" fill="none" stroke="currentColor">
        <circle cx="50" cy="50" r="46" strokeWidth="5"/><circle cx="50" cy="50" r="36" strokeWidth="2"/><circle cx="50" cy="50" r="7" strokeWidth="4"/>
        <line x1="50" y1="43" x2="50" y2="15" strokeWidth="4" strokeLinecap="round"/><line x1="50" y1="43" x2="76" y2="58" strokeWidth="4" strokeLinecap="round"/><line x1="50" y1="43" x2="66" y2="84" strokeWidth="4" strokeLinecap="round"/><line x1="50" y1="43" x2="34" y2="84" strokeWidth="4" strokeLinecap="round"/><line x1="50" y1="43" x2="24" y2="58" strokeWidth="4" strokeLinecap="round"/>
      </svg>

      <div className="container mx-auto px-4 py-4 md:py-7 relative">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          <div className="col-span-2 md:col-span-1">
            <div className="bg-gray-100 dark:bg-white rounded-lg p-1.5 inline-block mb-2">
              <img
                src="/dabiri-logo.png"
                alt="Dabiri Autos Logo"
                className="h-7 w-auto object-contain"
                width={28}
                height={28}
              />
            </div>
            <p className="text-gray-500 dark:text-gray-400 text-xs mb-2">
              Your trusted partner for quality vehicles in Nigeria.{' '}
              <span className="text-primary">iBUY &bull; iSELL &bull; iSWAP</span>
            </p>
            <div className="flex gap-3">
              {[
                { href: 'https://instagram.com/dabiri_autos', icon: Instagram, label: 'Instagram' },
                { href: 'https://facebook.com/dabiri_autos', icon: Facebook, label: 'Facebook' },
                { href: 'https://wa.me/2347025317059', icon: MessageCircle, label: 'WhatsApp' },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Follow Dabiri Autos on ${social.label}`}
                  className="w-10 h-10 bg-gray-100 dark:bg-white/5 text-gray-700 dark:text-white rounded-xl flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-slow hover:scale-110 hover:shadow-lg hover:shadow-red-500/20 min-w-[44px] min-h-[44px]"
                >
                  <social.icon className="w-5 h-5" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold mb-2 text-primary text-sm">Quick Links</h4>
            <ul className="space-y-0.5">
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
                    className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors text-sm flex items-center group min-h-[32px]"
                  >
                    <ChevronRight className="w-4 h-4 mr-1 opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold mb-2 text-primary text-sm">Our Services</h4>
            <ul className="space-y-0.5">
              {['iBUY - Sell Your Car', 'iSELL - Buy a Car', 'iSWAP - Trade-In', 'Car Financing', 'Vehicle Inspection'].map((service) => (
                <li key={service}>
                  <Link
                    href="/#services"
                    className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors text-sm flex items-center group min-h-[32px]"
                  >
                    <ChevronRight className="w-4 h-4 mr-1 opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold mb-2 text-primary text-sm">Contact Info</h4>
            <ul className="space-y-2">
              {[
                { icon: MapPin, text: '14 Olatunde Onimole St, Surulere, Lagos' },
                { icon: Phone, text: '07025317059' },
                { icon: Instagram, text: '@dabiri_autos' },
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm group">
                  <item.icon className="w-4 h-4 text-primary flex-shrink-0" aria-hidden="true" />
                  <span className="group-hover:text-gray-900 dark:group-hover:text-white transition-colors">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-white/10 mt-5 md:mt-7 pt-3 md:pt-4 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-gray-500 dark:text-gray-400 text-sm text-center md:text-left">
            &copy; {currentYear} Dabiri Autos Limited. All rights reserved.{' '}
            <span className="text-primary">RC: 8313006</span>
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-gray-500 dark:text-gray-400 hover:text-primary transition-colors text-sm min-h-[44px] flex items-center">
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
