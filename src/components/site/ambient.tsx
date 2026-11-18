'use client'

/*
 * The room the whole site sits in: a night showroom. Two lights (warm overhead,
 * Dabiri red key) drift as the visitor moves down the page, over a faint
 * corrugated wall. Fixed, behind everything, transform/opacity only.
 */
import { useEffect } from 'react'

export function Ambient() {
  useEffect(() => {
    const root = document.documentElement
    // Written on the ambient layer itself, never on <html>: a custom property
    // on the root restyles the whole document every frame.
    const amb = document.querySelector<HTMLElement>('.amb')
    if (!amb) return
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) { amb.style.setProperty('--page-p', '0.3'); return }
    let raf = 0
    const write = () => {
      raf = 0
      const max = Math.max(1, root.scrollHeight - innerHeight)
      amb.style.setProperty('--page-p', (scrollY / max).toFixed(4))
    }
    const on = () => { if (!raf) raf = requestAnimationFrame(write) }
    write()
    addEventListener('scroll', on, { passive: true })
    addEventListener('resize', on)
    return () => { removeEventListener('scroll', on); removeEventListener('resize', on); if (raf) cancelAnimationFrame(raf) }
  }, [])

  return (
    <div className="amb" aria-hidden="true">
      <div className="amb__wall" />
      <div className="amb__light amb__light--warm" />
      <div className="amb__light amb__light--red" />
      <div className="amb__strip" />
      <div className="amb__vignette" />
    </div>
  )
}
