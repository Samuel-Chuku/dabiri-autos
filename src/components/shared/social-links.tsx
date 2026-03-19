import { Instagram, Facebook, Phone } from 'lucide-react'
import { WhatsAppIcon } from './whatsapp-icon'

interface SocialLinksProps {
  size?: 'sm' | 'md'
  showLabel?: boolean
}

export function SocialLinks({ size = 'md', showLabel = false }: SocialLinksProps) {
  const iconSize = size === 'sm' ? 'w-4 h-4' : 'w-5 h-5'
  const buttonSize = size === 'sm' ? 'w-8 h-8' : 'w-10 h-10'

  const links = [
    {
      href: 'https://instagram.com/dabiri_autos',
      label: 'Follow Dabiri Autos on Instagram',
      icon: <Instagram className={`${iconSize} text-white`} aria-hidden="true" />,
      bg: 'bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400',
      hoverShadow: 'hover:shadow-pink-500/30',
    },
    {
      href: 'https://facebook.com/dabiri_autos',
      label: 'Follow Dabiri Autos on Facebook',
      icon: <Facebook className={`${iconSize} text-white`} aria-hidden="true" />,
      bg: 'bg-[#1877F2]',
      hoverShadow: 'hover:shadow-blue-500/30',
    },
    {
      href: 'https://wa.me/2348102487687',
      label: 'Message Dabiri Autos on WhatsApp',
      icon: <WhatsAppIcon className={`${iconSize} text-white`} />,
      bg: 'bg-[#25D366]',
      hoverShadow: 'hover:shadow-green-500/30',
    },
    {
      href: 'tel:+2348102487687',
      label: 'Call Dabiri Autos',
      icon: <Phone className={`${iconSize} text-white`} aria-hidden="true" />,
      bg: 'bg-[#E53935]',
      hoverShadow: 'hover:shadow-red-500/30',
    },
  ]

  return (
    <div className="flex items-center gap-3">
      {showLabel && <span className="text-gray-400 text-sm">Follow us:</span>}
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target={link.href.startsWith('tel:') ? undefined : '_blank'}
          rel={link.href.startsWith('tel:') ? undefined : 'noopener noreferrer'}
          aria-label={link.label}
          className={`${buttonSize} ${link.bg} rounded-full flex items-center justify-center hover:scale-110 transition-all duration-slow hover:shadow-lg ${link.hoverShadow}`}
        >
          {link.icon}
        </a>
      ))}
    </div>
  )
}
