import { Service } from '@/types'

/* Company facts. Kept verbatim from the previous site. */
export const company = {
  name: 'Dabiri Autos Limited',
  short: 'Dabiri Autos',
  rc: 'RC 8313006',
  street: '14 Olatunde Onimole St',
  area: 'Surulere, Lagos 100011',
  addressLine: '14 Olatunde Onimole St, Surulere, Lagos',
  phoneDisplay: '+234 810 248 7687',
  phoneHref: 'tel:+2348102487687',
  whatsappNumber: '2348102487687',
  instagramHandle: '@dabiri_autos',
  instagramHref: 'https://instagram.com/dabiri_autos',
  hours: 'Monday to Saturday, 9:00 to 18:00',
  hoursShort: 'Mon to Sat, 9am to 6pm',
  mapsHref: 'https://www.google.com/maps/search/?api=1&query=14+Olatunde+Onimole+St%2C+Surulere%2C+Lagos',
  mapEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.0289!2d3.3525!3d6.4971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b5b3f7d7a1d%3A0x4e6b5c5f8a9b0c1d!2s14%20Olatunde%20Onimole%20St%2C%20Surulere%2C%20Lagos!5e0!3m2!1sen!2sng!4v1699999999999!5m2!1sen!2sng',
}

/* Real figures, confirmed by the owner. */
export const stats = [
  { value: 363, suffix: '+', label: 'Cars sold' },
  { value: 8655, suffix: '+', label: 'Instagram followers' },
  { value: 100, suffix: '%', label: 'Vehicles verified' },
]

/* The one action, one label, everywhere. */
export const CTA = 'Chat on WhatsApp'

export function whatsappHref(message?: string) {
  const base = `https://wa.me/${company.whatsappNumber}`
  return message ? `${base}?text=${encodeURIComponent(message)}` : base
}

export const services: Service[] = [
  { code: 'iBUY', name: 'We buy your car', line: 'Bring a neatly used car to the lot. Fast valuation, instant payment.' },
  { code: 'iSELL', name: 'Buy from the floor', line: 'Nigerian and foreign used cars, inspected and documented before they reach the floor.' },
  { code: 'iSWAP', name: 'Trade up', line: 'Drive in with your current car, drive out in the next one. We value yours against ours.' },
  { code: 'Finance', name: 'Pay over time', line: 'Flexible payment plans so the car goes home with you today.' },
  { code: 'Papers', name: 'Documentation', line: 'Change of ownership, customs papers and registration, handled.' },
  { code: 'Care', name: 'After the sale', line: 'Maintenance support, spare parts sourcing and technical help once it is yours.' },
]
