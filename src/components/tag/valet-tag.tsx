'use client'

import { useEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'
import { useTag } from './tag-context'
import { CTA, whatsappHref } from '@/data/site'

/*
 * The floating tag. It hangs at the edge of the screen on every page, swings
 * when a car is clipped to it, and hides itself once the visitor reaches a
 * counter ([data-counter]) where the full ticket is laid out instead.
 */
export function ValetTag() {
  const tag = useTag()
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [atCounter, setAtCounter] = useState(false)
  const [swing, setSwing] = useState(0)
  const panelRef = useRef<HTMLDivElement>(null)
  const btnRef = useRef<HTMLButtonElement>(null)

  useEffect(() => { if (tag.last) setSwing((n) => n + 1) }, [tag.last, tag.ids.length])
  useEffect(() => { setOpen(false) }, [pathname])

  useEffect(() => {
    const els = Array.from(document.querySelectorAll('[data-counter]'))
    if (!els.length) { setAtCounter(false); return }
    const seen = new Set<Element>()
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => (e.isIntersecting ? seen.add(e.target) : seen.delete(e.target)))
      setAtCounter(seen.size > 0)
    }, { rootMargin: '0px 0px -35% 0px' })
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [pathname])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') { setOpen(false); btnRef.current?.focus() } }
    const onDown = (e: PointerEvent) => {
      if (!panelRef.current?.contains(e.target as Node) && !btnRef.current?.contains(e.target as Node)) setOpen(false)
    }
    addEventListener('keydown', onKey)
    addEventListener('pointerdown', onDown)
    return () => { removeEventListener('keydown', onKey); removeEventListener('pointerdown', onDown) }
  }, [open])

  const n = tag.cars.length

  return (
    <div className={`vtag ${atCounter ? 'is-away' : ''} ${open ? 'is-open' : ''}`} aria-hidden={atCounter ? true : undefined}>
      {open && (
        <div className="vtag__panel" ref={panelRef} role="dialog" aria-label="Your tag">
          <p className="vtag__kicker">Your tag</p>
          {n === 0 ? (
            <p className="vtag__empty">Nothing tagged yet. Press <b>Tag</b> on any car and it is clipped here, ready to send.</p>
          ) : (
            <ul className="vtag__list">
              {tag.cars.map((c) => (
                <li key={c.id}>
                  <span>{c.name}<small>{c.price}</small></span>
                  <button type="button" onClick={() => tag.toggle(c.id)} aria-label={`Remove ${c.name}`}>Remove</button>
                </li>
              ))}
            </ul>
          )}
          <a className="btn btn--accent btn--block" href={whatsappHref(tag.message())} target="_blank" rel="noopener noreferrer">{CTA}</a>
          <p className="vtag__fine">Opens WhatsApp with the message written. Nothing sends until you press send.</p>
        </div>
      )}
      <button
        ref={btnRef}
        type="button"
        className="vtag__card"
        key={swing}
        data-swing={swing > 0 ? '' : undefined}
        aria-expanded={open}
        tabIndex={atCounter ? -1 : 0}
        onClick={() => setOpen((o) => !o)}
      >
        <span className="vtag__hole" aria-hidden="true" />
        <span className="vtag__label">Your tag</span>
        <span className="vtag__count sc-nums">{n}</span>
        <span className="vtag__sub">{n === 0 ? 'cars tagged' : n === 1 ? 'car, ready to send' : 'cars, ready to send'}</span>
      </button>
    </div>
  )
}
