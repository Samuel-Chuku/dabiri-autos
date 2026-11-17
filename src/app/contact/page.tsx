import { srcSet } from '@/data/media'
import type { Metadata } from 'next'
import { ScrollStage } from '@/components/engine/scroll-stage'
import { CounterTicket } from '@/components/tag/counter-ticket'
import { VisitPlate } from '@/components/site/visit-plate'
import { Footer } from '@/components/site/footer'
import { company } from '@/data/site'

export const metadata: Metadata = {
  title: 'Visit · Dabiri Autos, Surulere',
  description: `Visit Dabiri Autos at ${company.addressLine}. ${company.hours}. Call ${company.phoneDisplay} or chat on WhatsApp.`,
}

export default function ContactPage() {
  return (
    <ScrollStage>
      <main id="main" className="visit">
        <header className="visit__head sc-wrap" data-sc-stagger="70" data-sc-in>
          <h1 className="visit__h1">Visit the lot.</h1>
          <p className="body">{company.street}, Surulere. Open {company.hoursShort.toLowerCase()}. Bring your car if you are selling or swapping and we will value it on the spot.</p>
        </header>

        <div className="visit__grid sc-wrap">
          <div className="visit__left">
            <VisitPlate />
            <div className="visit__map">
              <iframe
                src={company.mapEmbed}
                title="Map showing Dabiri Autos, 14 Olatunde Onimole St, Surulere, Lagos"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
          <div className="visit__right">
            <h2 className="h3 visit__h2">Write to the lot</h2>
            <CounterTicket withNote />
          </div>
        </div>

        <figure className="visit__strip">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/media/lot-lineup.webp" srcSet={srcSet("/media/lot-lineup.webp")} sizes="100vw" alt="Cars lined up on the Dabiri Autos lot under the company sign" width="1378" height="725" loading="lazy" />
        </figure>
      </main>
      <Footer />
    </ScrollStage>
  )
}
