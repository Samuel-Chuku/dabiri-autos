'use client'

/*
 * Touch screens get the floor as a swipe rail instead of a scroll-driven pan.
 * These are its controls: back, forward, where you are, and how far along.
 */
import { useEffect, useRef, useState } from 'react'

export function FloorNav({ count }: { count: number }) {
  const [i, setI] = useState(0)
  const [atStart, setAtStart] = useState(true)
  const [atEnd, setAtEnd] = useState(false)
  const [p, setP] = useState(0)
  const rail = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const r = document.querySelector<HTMLElement>('#floor .floor__rail')
    if (!r) return
    rail.current = r
    let raf = 0
    const read = () => {
      raf = 0
      const max = r.scrollWidth - r.clientWidth
      const cards = Array.from(r.querySelectorAll<HTMLElement>('.obj'))
      const x = r.scrollLeft + 1
      let k = 0
      cards.forEach((c, n) => { if (c.offsetLeft - r.offsetLeft - parseFloat(getComputedStyle(r).paddingLeft) <= x + c.offsetWidth / 2) k = n })
      setI(k); setAtStart(r.scrollLeft < 4); setAtEnd(r.scrollLeft > max - 4); setP(max > 0 ? r.scrollLeft / max : 0)
    }
    const on = () => { if (!raf) raf = requestAnimationFrame(read) }
    read()
    r.addEventListener('scroll', on, { passive: true })
    addEventListener('resize', on)
    return () => { r.removeEventListener('scroll', on); removeEventListener('resize', on); if (raf) cancelAnimationFrame(raf) }
  }, [])

  const step = (dir: 1 | -1) => {
    const r = rail.current
    if (!r) return
    const card = r.querySelector<HTMLElement>('.obj')
    const gap = parseFloat(getComputedStyle(r).columnGap) || 16
    const w = (card?.offsetWidth ?? r.clientWidth * 0.8) + gap
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches
    r.scrollBy({ left: dir * w, behavior: reduce ? 'auto' : 'smooth' })
  }

  return (
    <div className="fnav" aria-label="Browse the floor">
      <div className="fnav__count mono" aria-live="polite">
        <span className="sc-nums">{String(Math.min(i + 1, count)).padStart(2, '0')}</span> / <span className="sc-nums">{String(count).padStart(2, '0')}</span>
      </div>
      <div className="fnav__bar" aria-hidden="true"><i style={{ transform: `scaleX(${Math.max(0.06, p)})` }} /></div>
      <div className="fnav__btns">
        <button type="button" className="fnav__btn" onClick={() => step(-1)} disabled={atStart} aria-label="Previous car">
          <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><path d="M15 5l-7 7 7 7" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </button>
        <button type="button" className="fnav__btn fnav__btn--next" onClick={() => step(1)} disabled={atEnd} aria-label="Next car">
          <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><path d="M9 5l7 7-7 7" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </button>
      </div>
    </div>
  )
}
