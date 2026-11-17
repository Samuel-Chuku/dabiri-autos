import Link from 'next/link'
import { srcSet } from '@/data/media'
import { ScrollStage } from '@/components/engine/scroll-stage'
import { TagButton } from '@/components/tag/tag-button'
import { CounterTicket } from '@/components/tag/counter-ticket'
import { VisitPlate } from '@/components/site/visit-plate'
import { Footer } from '@/components/site/footer'
import { NoPhoto } from '@/components/site/no-photo'
import { vehicles } from '@/data/vehicles'
import { CTA, company, services, stats, whatsappHref } from '@/data/site'

const hero = vehicles.find((v) => v.slug === 'mercedes-benz-c300')!
const checks = ['Engine', 'Transmission', 'Body and paint', 'Interior', 'Documents']

export default function Home() {
  return (
    <ScrollStage>
      <main id="main">
        {/* 1 · ANTICIPATION: the shutter rolls up on object one */}
        <section className="hero" data-sc-act="pin" data-sc-span="1.9" data-sc-drift="#0d0b0b" aria-labelledby="hero-h">
          <div data-sc-stage className="hero__stage">
            <picture className="hero__plate" aria-hidden="true">
              <source media="(max-width: 700px), (orientation: portrait) and (max-width: 1100px)" srcSet="/media/hero-plate-m.webp" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/media/hero-plate.webp" alt="" width="2400" height="1350" fetchPriority="high" />
            </picture>
            <div className="hero__dim" aria-hidden="true" />
            <p className="hero__word" aria-hidden="true">DABIRI</p>
            <div className="hero__car">
              <div className="hero__shadow" aria-hidden="true" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/media/hero-car.webp" alt="A white Mercedes-Benz C300 under the showroom light" width="1700" height="816" fetchPriority="high" />
            </div>
            <div className="hero__haze" aria-hidden="true" />
            <div className="hero__shutter" aria-hidden="true"><span /></div>
            <div className="hero__floor" aria-hidden="true" />
            <div className="hero__scrim" aria-hidden="true" />

            <div className="hero__copy" data-sc-cue="0 0.8 0 0.3">
              <div className="hero__mlabel">
                <p><span>{hero.name}</span> <span className="sc-nums">{hero.price}</span></p>
                <TagButton id={hero.id} name={hero.name} />
              </div>
              <h1 id="hero-h" className="hero__h1">On the floor today in&nbsp;Surulere.</h1>
              <p className="hero__sub">Nigerian and foreign used cars. Bought, sold and swapped at {company.street}.</p>
              <div className="hero__acts">
                <a className="btn btn--accent btn--lg" href={whatsappHref('Hello Dabiri Autos. I would like to ask about a car.')} target="_blank" rel="noopener noreferrer">{CTA}</a>
                <Link className="btn btn--ghost btn--lg" href="/inventory">See inventory</Link>
              </div>
            </div>

            <div className="hero__label label" data-sc-cue="0 0.94 0 0.12">
              <p className="label__name">{hero.name}</p>
              <p className="label__spec">{hero.year} · {hero.mileage} · {hero.condition} · {hero.transmission}</p>
              <div className="label__row">
                <p className="label__price sc-nums">{hero.price}</p>
                <TagButton id={hero.id} name={hero.name} />
              </div>
            </div>
          </div>
        </section>

        {/* 2 · TRUST: the real lot, real numbers */}
        <section className="lot" aria-labelledby="lot-h">
          <div className="lot__grid sc-wrap">
            <figure className="lot__main" data-sc-in>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/media/lot-lineup.webp" srcSet={srcSet("/media/lot-lineup.webp")} sizes="(max-width: 860px) 100vw, 55vw" alt="A row of cars parked on the Dabiri Autos lot under the company sign" width="1378" height="725" loading="lazy" />
              <figcaption>The lineup, {company.addressLine}.</figcaption>
            </figure>
            <div className="lot__text" data-sc-stagger="70" data-sc-in>
              <h2 id="lot-h" className="h2">The lot is real. Come and walk it.</h2>
              <p className="body">
                Dabiri Autos Limited is a registered Nigerian dealership ({company.rc}) for Nigerian used and foreign used cars,
                with Toyota, Lexus and Mercedes-Benz at the heart of the floor. Walk it, sit in it, then decide.
              </p>
              <dl className="stats">
                {stats.map((s) => (
                  <div key={s.label}>
                    <dt>{s.label}</dt>
                    <dd className="sc-nums"><span data-sc-count={`0 ${s.value.toLocaleString('en-US')}`}>{s.value.toLocaleString('en-US')}</span>{s.suffix}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <figure className="lot__side lot__side--a" data-sc-in>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/media/highlander-red-floor.webp" srcSet={srcSet("/media/highlander-red-floor.webp")} sizes="(max-width: 860px) 50vw, 30vw" alt="A grey Toyota Highlander on the lot's red painted floor" width="1196" height="1400" loading="lazy" />
              <figcaption>On the red floor.</figcaption>
            </figure>
            <figure className="lot__side lot__side--b" data-sc-in>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/media/sonata-lot.webp" srcSet={srcSet("/media/sonata-lot.webp")} sizes="(max-width: 860px) 50vw, 40vw" alt="A black Hyundai Sonata parked on the lot" width="1400" height="1400" loading="lazy" />
              <figcaption>Afternoon, Surulere.</figcaption>
            </figure>
          </div>
        </section>

        {/* 3 · APPETITE: walk the floor sideways */}
        <section id="floor" className="floor" data-sc-act="pan" data-sc-span="3.4" data-sc-drift="#110d0c" aria-labelledby="floor-h">
          <div data-sc-stage className="floor__stage">
            <div className="floor__rail" data-sc-pan="0.04">
              <div className="floor__lead">
                <h2 id="floor-h" className="h2">The floor.</h2>
                <p className="body">{vehicles.length} cars in stock now. Press <b>Tag</b> on the ones you want to ask about and they follow you to the counter.</p>
              </div>
              {vehicles.map((v, i) => (
                <article className="obj" key={v.id} style={{ ['--i' as string]: i + 1 }}>
                  <div className="obj__img" data-sc-tilt="5">
                    {v.image ? (
                      /* eslint-disable-next-line @next/next/no-img-element */
                      <img src={v.image} srcSet={srcSet(v.image)} sizes="(max-width: 700px) 72vw, 26vw" alt={`${v.name} on the Dabiri Autos lot`} width="800" height="1000" loading="lazy" />
                    ) : (
                      <NoPhoto name={v.name} />
                    )}
                  </div>
                  <div className="obj__label label">
                    <h3 className="label__name">{v.name}</h3>
                    <p className="label__spec">{v.year} · {v.mileage} · {v.transmission} · {v.fuel}</p>
                    <p className="label__cond">{v.condition} · {v.bodyType}</p>
                    <div className="label__row">
                      <p className="label__price sc-nums">{v.price}</p>
                      <TagButton id={v.id} name={v.name} />
                    </div>
                  </div>
                </article>
              ))}
              <div className="floor__end">
                <p className="body">Looking for something that is not on the floor? We source to order.</p>
                <Link className="arrowlink" href="/inventory">Open the full inventory</Link>
              </div>
            </div>
          </div>
        </section>

        {/* 4 · CONFIDENCE: what we do, as a ledger */}
        <section id="services" className="ledger" aria-labelledby="svc-h">
          <div className="sc-wrap">
            <h2 id="svc-h" className="h2 ledger__h">What happens on the lot.</h2>
            <ol className="ledger__rows" data-sc-stagger="55" data-sc-in>
              {services.map((s) => (
                <li key={s.code}>
                  <span className="ledger__code">{s.code}</span>
                  <span className="ledger__name">{s.name}</span>
                  <span className="ledger__line">{s.line}</span>
                </li>
              ))}
            </ol>
            <p className="ledger__note">Questions at any hour, any day: the WhatsApp line is answered around the clock.</p>
          </div>
        </section>

        {/* 5 · INTIMACY: authored near-silence before the peak */}
        <section className="inside" data-sc-act="flow" data-sc-drift="#0a0909" aria-label="Inside the car">
          <div className="inside__wrap">
            <figure className="inside__fig" data-sc-reveal="up" data-sc-reveal-at="0.12 0.5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/media/c300-interior.webp" srcSet={srcSet("/media/c300-interior.webp")} sizes="(max-width: 860px) 90vw, 34rem" alt="Black leather front seats of the Mercedes-Benz C-Class, door open" width="1400" height="1400" loading="lazy" />
            </figure>
            <p className="inside__line" data-sc-cue="0.32 0.95 0.25 0.2">
              Sit in it before you pay for it.
              <span>Every car on the floor can be seen, sat in and inspected at the lot.</span>
            </p>
          </div>
        </section>

        {/* 6 · AWE (PEAK): one car turns a full circle under inspection */}
        <section className="turn" data-sc-act="pin" data-sc-span="4.2" data-sc-drift="#080707" aria-labelledby="turn-h">
          <div data-sc-stage className="turn__stage">
            <div className="turn__view">
              <canvas data-sc-sequence="/media/turn/frame_{iiii}.webp:169:1" data-sc-sequence-mobile="/media/turn-m/frame_{iiii}.webp:85:1" aria-hidden="true" />
              <div className="turn__sweep" aria-hidden="true" />
            </div>
            <div className="turn__copy" data-sc-cue="0 0.97 0 0.08">
              <h2 id="turn-h" className="turn__h">
                <span className="turn__num sc-nums" data-sc-count="0 150" data-sc-count-at="0.04 0.86">150</span>
                <span className="turn__unit">points, checked on every car before it reaches the floor.</span>
              </h2>
              <ul className="turn__checks">
                {checks.map((c, i) => (
                  <li key={c} style={{ ['--at' as string]: (0.1 + i * 0.16).toFixed(2) }}>
                    <span className="turn__tick" aria-hidden="true" />{c}
                  </li>
                ))}
              </ul>
              <p className="turn__cap">Studio turntable, Hyundai Sonata.</p>
            </div>
          </div>
        </section>

        {/* 7 · RESOLVE: the counter, where the tag becomes a message */}
        <section id="counter" className="counter" aria-labelledby="counter-h">
          <div className="counter__wrap sc-wrap">
            <div className="counter__intro" data-sc-in>
              <h2 id="counter-h" className="h2">The counter.</h2>
              <p className="body">Everything you tagged on the walk is on this ticket. One press and it is a WhatsApp message to the lot.</p>
            </div>
            <CounterTicket />
            <VisitPlate as="h3" />
          </div>
          <Footer />
        </section>
      </main>
    </ScrollStage>
  )
}
