import Link from 'next/link'
import { company, CTA, whatsappHref } from '@/data/site'
import { OpenStatus } from './open-status'

/*
 * The sign over the lot: a light strip, the facts in four short columns, and
 * the name set huge and cropped by the edge of the page like a fascia board.
 */
export function Footer({ slim = false }: { slim?: boolean }) {
  const year = new Date().getFullYear()
  return (
    <footer className={`foot ${slim ? 'foot--slim' : ''}`}>
      <div className="foot__strip" aria-hidden="true" />
      <div className="foot__inner">
        {!slim && (
          <div className="foot__grid">
            <div className="foot__lead">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/media/logo-light.webp" alt="Dabiri Autos" width="711" height="182" className="foot__logo" loading="lazy" />
              <p className="foot__line">Nigerian and foreign used cars, bought, sold and swapped on the red floor in Surulere.</p>
              <OpenStatus />
              <a className="btn btn--accent foot__cta" href={whatsappHref('Hello Dabiri Autos. I would like to ask about a car.')} target="_blank" rel="noopener noreferrer">{CTA}</a>
            </div>
            <div className="foot__col">
              <h2 className="foot__h">Visit</h2>
              <p>{company.street}<br />{company.area}</p>
              <p className="foot__soft">{company.hours}</p>
              <a className="foot__link" href={company.mapsHref} target="_blank" rel="noopener noreferrer">Directions</a>
            </div>
            <div className="foot__col">
              <h2 className="foot__h">Talk to us</h2>
              <a className="foot__link" href={company.phoneHref}>{company.phoneDisplay}</a>
              <a className="foot__link" href={whatsappHref()} target="_blank" rel="noopener noreferrer">WhatsApp</a>
              <a className="foot__link" href={company.instagramHref} target="_blank" rel="noopener noreferrer">Instagram {company.instagramHandle}</a>
            </div>
            <nav className="foot__col" aria-label="Footer">
              <h2 className="foot__h">The lot</h2>
              <Link className="foot__link" href="/#floor">The floor</Link>
              <Link className="foot__link" href="/inventory">Inventory</Link>
              <Link className="foot__link" href="/#services">Services</Link>
              <Link className="foot__link" href="/contact">Visit</Link>
            </nav>
          </div>
        )}
        <div className="foot__base">
          <p>© {year} {company.name} · {company.rc}</p>
          {slim && (
            <nav className="foot__mini" aria-label="Footer">
              <Link href="/">Home</Link>
              <Link href="/inventory">Inventory</Link>
              <a href={company.instagramHref} target="_blank" rel="noopener noreferrer">Instagram</a>
            </nav>
          )}
          <a className="foot__top" href="#main">Back to top</a>
        </div>
      </div>
      <p className="foot__sign" aria-hidden="true">DABIRI AUTOS</p>
    </footer>
  )
}
