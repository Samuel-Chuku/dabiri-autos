'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { CTA, company, whatsappHref } from '@/data/site'
import { useTag } from '@/components/tag/tag-context'
import { ThemeToggle } from './theme-toggle'

const links = [
  { href: '/#floor', label: 'The floor' },
  { href: '/inventory', label: 'Inventory' },
  { href: '/#services', label: 'Services' },
  { href: '/contact', label: 'Visit' },
]

export function Header() {
  const pathname = usePathname()
  const tag = useTag()
  const [menu, setMenu] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [onDark, setOnDark] = useState(false)

  useEffect(() => { setMenu(false) }, [pathname])
  useEffect(() => {
    // In the day theme the bar still passes over night stages (hero, turntable,
    // footer). Whatever sits under the bar's bottom edge decides its theme.
    let raf = 0
    const read = () => {
      raf = 0
      setScrolled(scrollY > 24)
      const y = (document.querySelector('.bar') as HTMLElement | null)?.offsetHeight ?? 72
      let dark = false
      document.querySelectorAll<HTMLElement>('.stage-dark:not(.bar)').forEach((el) => {
        const r = el.getBoundingClientRect()
        if (r.top <= y && r.bottom > y) dark = true
      })
      setOnDark(dark)
    }
    const on = () => { if (!raf) raf = requestAnimationFrame(read) }
    // The engine sizes pinned acts after mount, so re-read whenever the page grows.
    const ro = new ResizeObserver(on); ro.observe(document.body)
    read(); addEventListener('scroll', on, { passive: true }); addEventListener('resize', on)
    return () => { ro.disconnect(); removeEventListener('scroll', on); removeEventListener('resize', on); if (raf) cancelAnimationFrame(raf) }
  }, [pathname])
  useEffect(() => {
    if (!menu) return
    const k = (e: KeyboardEvent) => e.key === 'Escape' && setMenu(false)
    addEventListener('keydown', k)
    document.documentElement.classList.add('menu-open')
    return () => { removeEventListener('keydown', k); document.documentElement.classList.remove('menu-open') }
  }, [menu])

  const isActive = (href: string) => (href.startsWith('/#') ? false : pathname === href)
  const overDark = onDark && !menu

  return (
    <header className={`bar ${scrolled ? 'is-scrolled' : ''} ${menu ? 'is-menu' : ''} ${overDark ? 'stage-dark' : ''}`}>
      <div className="bar__inner">
        <Link href="/" className="bar__mark" aria-label="Dabiri Autos, home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="logo-on-dark" src="/media/logo-light.webp" alt="" width="711" height="182" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="logo-on-light" src="/media/logo-dark.webp" alt="" width="711" height="182" />
        </Link>
        <nav className="bar__nav" aria-label="Main">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className={isActive(l.href) ? 'is-active' : ''} aria-current={isActive(l.href) ? 'page' : undefined}>
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="bar__end">
          <ThemeToggle />
          <a className="btn btn--accent bar__cta" href={whatsappHref(tag.message())} target="_blank" rel="noopener noreferrer">
            {CTA}
          </a>
          <button type="button" className="bar__burger" aria-expanded={menu} aria-controls="menu" onClick={() => setMenu((m) => !m)}>
            <span className="sr">{menu ? 'Close menu' : 'Open menu'}</span>
            <i aria-hidden="true" /><i aria-hidden="true" />
          </button>
        </div>
      </div>
      <div id="menu" className="menu" hidden={!menu}>
        <nav aria-label="Mobile">
          {links.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setMenu(false)}>{l.label}</Link>
          ))}
        </nav>
        <a className="btn btn--accent btn--lg btn--block" href={whatsappHref(tag.message())} target="_blank" rel="noopener noreferrer">{CTA}</a>
        <p className="menu__facts">
          <a href={company.phoneHref}>Call {company.phoneDisplay}</a>
          <span>{company.street}, Surulere · {company.hoursShort}</span>
        </p>
      </div>
    </header>
  )
}
