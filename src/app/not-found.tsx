import Link from 'next/link'
import { Car, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <div className="min-h-[calc(100dvh-10rem)] flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-pattern-dots opacity-5" aria-hidden="true" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-white/5 rounded-full blur-2xl" aria-hidden="true" />

      <div className="relative text-center px-4 py-16">
        <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-8">
          <Car className="w-12 h-12 text-primary" aria-hidden="true" />
        </div>

        <h1 className="font-display text-display text-white mb-4">404</h1>
        <h2 className="font-display text-h2 text-gray-300 mb-4">Page Not Found</h2>
        <p className="text-gray-400 max-w-md mx-auto mb-8 text-body-lg">
          Looks like this road leads nowhere. Let&apos;s get you back on track — browse our
          vehicles or head back home.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/">
            <Button
              size="lg"
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10 min-h-[44px]"
            >
              Back to Home
            </Button>
          </Link>
          <Link href="/inventory">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary-dark text-white btn-luxury min-h-[44px]"
            >
              Browse Vehicles
              <ArrowRight className="w-5 h-5 ml-2" aria-hidden="true" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
