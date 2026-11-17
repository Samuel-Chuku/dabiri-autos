import type { Metadata } from 'next'
import { ScrollStage } from '@/components/engine/scroll-stage'
import { InventoryBrowser } from '@/components/inventory/inventory-browser'
import { Footer } from '@/components/site/footer'

export const metadata: Metadata = {
  title: 'Inventory · Dabiri Autos, Surulere',
  description: 'Every car on the Dabiri Autos floor in Surulere, Lagos, with year, mileage, condition and price. Tag the ones you like and chat with us on WhatsApp.',
}

export default function InventoryPage() {
  return (
    <ScrollStage>
      <main id="main" className="inv">
        <InventoryBrowser />
      </main>
      <Footer />
    </ScrollStage>
  )
}
