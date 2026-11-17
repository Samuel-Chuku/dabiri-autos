'use client'

import { srcSet } from '@/data/media'
import { useEffect, useMemo, useRef, useState } from 'react'
import { vehicles, makes, conditions, bodyTypes, priceRanges } from '@/data/vehicles'
import { CTA, whatsappHref } from '@/data/site'
import { TagButton } from '@/components/tag/tag-button'
import { NoPhoto } from '@/components/site/no-photo'
import { Vehicle } from '@/types'

const sorts = [
  { id: 'featured', label: 'Featured first' },
  { id: 'price-asc', label: 'Price, low to high' },
  { id: 'price-desc', label: 'Price, high to low' },
  { id: 'km-asc', label: 'Mileage, lowest' },
] as const

const km = (v: Vehicle) => parseInt(v.mileage.replace(/\D/g, ''), 10) || 0

export function InventoryBrowser() {
  const [make, setMake] = useState<string>('All')
  const [body, setBody] = useState<string>('All')
  const [cond, setCond] = useState<string>('All')
  const [price, setPrice] = useState<number>(0)
  const [sort, setSort] = useState<string>('featured')
  const [open, setOpen] = useState<Vehicle | null>(null)
  const [panel, setPanel] = useState(false)

  const list = useMemo(() => {
    const r = priceRanges[price]
    const out = vehicles.filter((v) =>
      (make === 'All' || v.make === make) &&
      (body === 'All' || v.bodyType === body) &&
      (cond === 'All' || v.condition === cond) &&
      v.priceValue >= r.min && v.priceValue < r.max)
    const s = [...out]
    if (sort === 'price-asc') s.sort((a, b) => a.priceValue - b.priceValue)
    if (sort === 'price-desc') s.sort((a, b) => b.priceValue - a.priceValue)
    if (sort === 'km-asc') s.sort((a, b) => km(a) - km(b))
    if (sort === 'featured') s.sort((a, b) => Number(b.featured) - Number(a.featured))
    return s
  }, [make, body, cond, price, sort])

  const active = [make !== 'All', body !== 'All', cond !== 'All', price !== 0].filter(Boolean).length
  const filtered = active > 0
  const reset = () => { setMake('All'); setBody('All'); setCond('All'); setPrice(0) }

  return (
    <>
      <header className="inv__head sc-wrap">
        <h1 className="inv__h1">Inventory</h1>
        <p className="body" aria-live="polite">
          {list.length === vehicles.length
            ? `${vehicles.length} cars on the floor in Surulere.`
            : `${list.length} of ${vehicles.length} cars match.`}
        </p>
      </header>

      <div className="filters" role="search" aria-label="Filter cars">
        <div className="filters__inner sc-wrap">
          <button type="button" className="filters__toggle" aria-expanded={panel} aria-controls="filter-panel" onClick={() => setPanel((o) => !o)}>
            <svg viewBox="0 0 20 20" width="16" height="16" aria-hidden="true"><path d="M3 5h14M6 10h8M9 15h2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg>
            Filter and sort{active > 0 && <span className="filters__badge sc-nums">{active}</span>}
          </button>
          <span className="filters__count sc-nums">{list.length} of {vehicles.length}</span>
          <div id="filter-panel" className="filters__panel" data-open={panel}>
          <Select label="Make" value={make} onChange={setMake} options={makes.map((m) => ({ v: m, l: m === 'All' ? 'Any make' : m }))} />
          <Select label="Body" value={body} onChange={setBody} options={bodyTypes.map((m) => ({ v: m, l: m === 'All' ? 'Any body' : m }))} />
          <Select label="Condition" value={cond} onChange={setCond} options={conditions.map((m) => ({ v: m, l: m === 'All' ? 'Any condition' : m }))} />
          <Select label="Price" value={String(price)} onChange={(v) => setPrice(Number(v))} options={priceRanges.map((p, i) => ({ v: String(i), l: p.label }))} />
          <Select label="Sort" value={sort} onChange={setSort} options={sorts.map((s) => ({ v: s.id, l: s.label }))} />
          {filtered && <button type="button" className="filters__reset" onClick={reset}>Clear</button>}
          </div>
        </div>
      </div>

      <section className="sc-wrap inv__list" aria-label="Cars">
        {list.length === 0 ? (
          <div className="inv__empty">
            <p className="h3">Nothing on the floor matches that.</p>
            <p className="body">We source to order, so tell us what you are after.</p>
            <div className="inv__emptyacts">
              <button type="button" className="btn btn--ghost" onClick={reset}>Clear filters</button>
              <a className="btn btn--accent" href={whatsappHref('Hello Dabiri Autos. I am looking for a car that is not on your floor:')} target="_blank" rel="noopener noreferrer">{CTA}</a>
            </div>
          </div>
        ) : (
          <ul className="inv__grid">
            {list.map((v) => (
              <li key={v.id} className="row">
                <button type="button" className="row__img" onClick={() => setOpen(v)} aria-label={`Open details for ${v.name}`}>
                  {v.image ? (
                    /* eslint-disable-next-line @next/next/no-img-element */
                    <img src={v.image} srcSet={srcSet(v.image)} sizes="(max-width: 760px) 100vw, 45vw" alt="" width="800" height="600" loading="lazy" />
                  ) : <NoPhoto name={v.name} />}
                </button>
                <div className="row__label label">
                  <h2 className="label__name">{v.name}</h2>
                  <dl className="specs">
                    <div><dt>Year</dt><dd>{v.year}</dd></div>
                    <div><dt>Mileage</dt><dd>{v.mileage}</dd></div>
                    <div><dt>Gearbox</dt><dd>{v.transmission}</dd></div>
                    <div><dt>Condition</dt><dd>{v.condition}</dd></div>
                  </dl>
                  <div className="label__row">
                    <p className="label__price sc-nums">{v.price}</p>
                    <div className="row__acts">
                      <button type="button" className="textbtn" onClick={() => setOpen(v)}>Details</button>
                      <TagButton id={v.id} name={v.name} />
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </section>

      <section className="sc-wrap inv__tail">
        <p className="body">Not on the floor? We source to order and can tell you what is arriving.</p>
        <a className="btn btn--accent btn--lg" href={whatsappHref('Hello Dabiri Autos. I am looking for a car that is not on your floor:')} target="_blank" rel="noopener noreferrer">{CTA}</a>
      </section>

      <Details car={open} onClose={() => setOpen(null)} />
    </>
  )
}

function Select({ label, value, onChange, options }: {
  label: string; value: string; onChange: (v: string) => void; options: { v: string; l: string }[]
}) {
  return (
    <label className="sel">
      <span>{label}</span>
      <select value={value} onChange={(e) => onChange(e.target.value)}>
        {options.map((o) => <option key={o.v} value={o.v}>{o.l}</option>)}
      </select>
    </label>
  )
}

function Details({ car, onClose }: { car: Vehicle | null; onClose: () => void }) {
  const ref = useRef<HTMLDialogElement>(null)
  useEffect(() => {
    const d = ref.current
    if (!d) return
    if (car && !d.open) d.showModal()
    if (!car && d.open) d.close()
  }, [car])
  return (
    <dialog
      ref={ref}
      className="sheet"
      onClose={onClose}
      onClick={(e) => { if (e.target === ref.current) onClose() }}
      aria-labelledby="sheet-h"
    >
      {car && (
        <div className="sheet__inner">
          <div className="sheet__img">
            {car.image ? (
              /* eslint-disable-next-line @next/next/no-img-element */
              <img src={car.image} srcSet={srcSet(car.image)} sizes="(max-width: 760px) 100vw, 50vw" alt={`${car.name} on the Dabiri Autos lot`} width="1000" height="800" />
            ) : <NoPhoto name={car.name} />}
          </div>
          <div className="sheet__body label">
            <h2 id="sheet-h" className="label__name">{car.name}</h2>
            <p className="label__price sc-nums">{car.price}</p>
            <p className="body">{car.description}</p>
            <dl className="specs specs--full">
              <div><dt>Year</dt><dd>{car.year}</dd></div>
              <div><dt>Mileage</dt><dd>{car.mileage}</dd></div>
              <div><dt>Fuel</dt><dd>{car.fuel}</dd></div>
              <div><dt>Gearbox</dt><dd>{car.transmission}</dd></div>
              <div><dt>Condition</dt><dd>{car.condition}</dd></div>
              <div><dt>Body</dt><dd>{car.bodyType}</dd></div>
            </dl>
            {!car.image && <p className="sheet__fine">No photo of this car is up yet. Ask on WhatsApp and we will send pictures.</p>}
            <div className="sheet__acts">
              <a className="btn btn--accent" href={whatsappHref(`Hello Dabiri Autos. I would like to ask about the ${car.name}, ${car.year}, ${car.price}.`)} target="_blank" rel="noopener noreferrer">{CTA}</a>
              <TagButton id={car.id} name={car.name} />
            </div>
          </div>
          <button type="button" className="sheet__close" onClick={onClose} aria-label="Close details">
            <svg viewBox="0 0 16 16" width="16" height="16" aria-hidden="true"><path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg>
          </button>
        </div>
      )}
    </dialog>
  )
}
