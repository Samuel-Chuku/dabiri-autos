import { srcSet } from '@/data/media'
import type { Metadata } from 'next'
import { ScrollStage } from '@/components/engine/scroll-stage'
import { CounterTicket } from '@/components/tag/counter-ticket'
import { VisitPlate } from '@/components/site/visit-plate'
import { Footer } from '@/components/site/footer'
import { OpenStatus } from '@/components/site/open-status'
import { HoursBoard } from '@/components/site/hours-board'
import { LotMap } from '@/components/site/lot-map'
import { company, CTA, whatsappHref } from '@/data/site'

export const metadata: Metadata = {
  title: 'Visit · Dabiri Autos, Surulere',
  description: `Visit Dabiri Autos at ${company.addressLine}. ${company.hours}. Call ${company.phoneDisplay} or chat on WhatsApp.`,
}

const steps = [
  {
    n: '01', h: 'Walk the red floor',
    p: 'Every car on the floor can be seen, sat in and inspected. Take your time; nobody hurries you to a decision.',
    img: '/media/highlander-red-floor.webp', alt: 'A grey Toyota Highlander on the lot’s red painted floor', w: 1196, h2: 1400,
  },
  {
    n: '02', h: 'Sit in it, check it',
    p: 'Doors open, engine on. Look at the papers for the car you like before any money moves.',
    img: '/media/c300-interior.webp', alt: 'Black leather front seats of a Mercedes-Benz C-Class, door open', w: 1400, h2: 1400,
  },
  {
    n: '03', h: 'Bring yours to swap',
    p: 'Selling or swapping? Drive your car in and we value it on the spot. Change of ownership and papers, handled.',
    img: '/media/accord-lot.webp', alt: 'A white Honda Accord parked outside on gravel', w: 661, h2: 792,
  },
]

export default function ContactPage() {
  return (
    <ScrollStage>
      <main id="main" className="visit">
        {/* arrival: the door, the hours, one car under the light */}
        <section className="vhero stage-dark" aria-labelledby="visit-h">
          <div className="vhero__copy" data-sc-stagger="80" data-sc-in>
            <p className="vhero__kicker mono">{company.street} · Surulere · Lagos</p>
            <h1 id="visit-h" className="visit__h1">Visit the lot.</h1>
            <p className="vhero__sub">Open {company.hoursShort.toLowerCase()}. Bring your car if you are selling or swapping and we will value it on the spot.</p>
            <OpenStatus />
            <div className="vhero__acts">
              <a className="btn btn--accent btn--lg" href={company.mapsHref} target="_blank" rel="noopener noreferrer">Get directions</a>
              <a className="btn btn--ghost btn--lg" href={company.phoneHref}>Call {company.phoneDisplay}</a>
              <a className="btn btn--ghost btn--lg" href={whatsappHref('Hello Dabiri Autos. I would like to visit the lot.')} target="_blank" rel="noopener noreferrer">{CTA}</a>
            </div>
          </div>
          <figure className="vhero__fig" data-sc-in>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/media/sonata-lot.webp" srcSet={srcSet('/media/sonata-lot.webp')} sizes="(max-width: 860px) 100vw, 50vw" alt="A black Hyundai Sonata parked on the Dabiri Autos lot" width="1400" height="1400" fetchPriority="high" />
          </figure>
        </section>

        {/* the way there */}
        <section className="vmap" aria-labelledby="map-h">
          <div className="vmap__frame">
            <LotMap />
          </div>
          <aside className="vmap__card" data-sc-in>
            <h2 id="map-h" className="h3">Find us in Surulere</h2>
            <p className="vmap__addr">{company.street}<br />{company.area}</p>
            <HoursBoard />
            <a className="arrowlink" href={company.mapsHref} target="_blank" rel="noopener noreferrer">Open in Google Maps</a>
          </aside>
        </section>

        {/* what a visit is */}
        <section className="vsteps sc-wrap" aria-labelledby="steps-h">
          <h2 id="steps-h" className="h2 vsteps__h">When you come.</h2>
          <ol className="vsteps__list" data-sc-stagger="110" data-sc-in>
            {steps.map((s) => (
              <li key={s.n} className="vstep">
                <figure className="vstep__img">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={s.img} srcSet={s.w >= 1000 ? srcSet(s.img) : undefined} sizes="(max-width: 860px) 100vw, 30vw" alt={s.alt} width={s.w} height={s.h2} loading="lazy" />
                </figure>
                <p className="vstep__n mono">{s.n}</p>
                <h3 className="vstep__h">{s.h}</h3>
                <p className="vstep__p">{s.p}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* the counter */}
        <section className="vwrite sc-wrap" aria-labelledby="write-h">
          <div className="vwrite__left">
            <h2 id="write-h" className="h2">Write to the lot.</h2>
            <p className="body">Tag cars on the floor or in the inventory and they appear on this ticket. Pick what it is about, add a note, and it goes to us as one WhatsApp message.</p>
            <VisitPlate as="h3" />
          </div>
          <div className="vwrite__right">
            <CounterTicket withNote />
          </div>
        </section>

        {/* the lineup, fading up out of the page: the last thing before the sign */}
        <figure className="visit__strip">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/media/lot-lineup.webp" srcSet={srcSet('/media/lot-lineup.webp')} sizes="100vw" alt="Cars lined up on the Dabiri Autos lot under the company sign" width="1378" height="725" loading="lazy" />
        </figure>
      </main>
      <Footer slim />
    </ScrollStage>
  )
}
