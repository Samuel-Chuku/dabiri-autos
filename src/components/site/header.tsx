'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { CTA, company, whatsappHref } from '@/data/site'
import { useTag } from '@/components/tag/tag-context'

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

  useEffect(() => { setMenu(false) }, [pathname])
  useEffect(() => {
    const on = () => setScrolled(scrollY > 24)
    on(); addEventListener('scroll', on, { passive: true })
    return () => removeEventListener('scroll', on)
  }, [])
  useEffect(() => {
    if (!menu) return
    const k = (e: KeyboardEvent) => e.key === 'Escape' && setMenu(false)
    addEventListener('keydown', k)
    document.documentElement.classList.add('menu-open')
    return () => { removeEventListener('keydown', k); document.documentElement.classList.remove('menu-open') }
  }, [menu])

  const isActive = (href: string) => (href.startsWith('/#') ? false : pathname === href)

  return (
    <header className={`bar ${scrolled ? 'is-scrolled' : ''} ${menu ? 'is-menu' : ''}`}>
      <div className="bar__inner">
        <Link href="/" className="bar__mark" aria-label="Dabiri Autos, home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/media/logo-light.webp" alt="" width="711" height="182" />
        </Link>
        <nav className="bar__nav" aria-label="Main">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className={isActive(l.href) ? 'is-active' : ''} aria-current={isActive(l.href) ? 'page' : undefined}>
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="bar__end">
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
