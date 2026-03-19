import { WhatsAppIcon } from './whatsapp-icon'
import { Button } from '@/components/ui/button'

interface WhatsAppButtonProps {
  message?: string
  size?: 'default' | 'lg'
  className?: string
  children?: React.ReactNode
}

export function WhatsAppButton({
  message = 'Hi Dabiri Autos! I would like to inquire about your vehicles.',
  size = 'lg',
  className = '',
  children,
}: WhatsAppButtonProps) {
  const encodedMessage = encodeURIComponent(message)

  return (
    <a
      href={`https://wa.me/2348102487687?text=${encodedMessage}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Send us a message on WhatsApp"
    >
      <Button
        size={size}
        className={`bg-[#25D366] hover:bg-[#128C7E] text-white font-semibold transition-all duration-slow hover:scale-105 hover:shadow-xl hover:shadow-green-500/30 ${className}`}
      >
        <WhatsAppIcon className="w-5 h-5 mr-2" />
        {children || 'Send Us A Message On WhatsApp'}
      </Button>
    </a>
  )
}
