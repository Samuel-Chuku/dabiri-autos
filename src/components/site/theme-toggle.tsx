'use client'

/*
 * Night showroom / day showroom. The choice is stored per visitor; with no
 * choice the page follows the device. The pre-paint script in layout.tsx
 * sets data-theme before first paint, so there is never a flash.
 */
import { useEffect, useState } from 'react'
import { THEME_KEY, THEME_COLORS as COLORS } from './theme-script'

export type Theme = 'light' | 'dark'

function apply(t: Theme) {
  document.documentElement.setAttribute('data-theme', t)
  document.querySelectorAll('meta[name="theme-color"]').forEach((m) => m.setAttribute('content', COLORS[t]))
}

export function ThemeToggle({ className = '' }: { className?: string }) {
  const [theme, setTheme] = useState<Theme | null>(null)

  useEffect(() => {
    const now = (document.documentElement.getAttribute('data-theme') as Theme) || 'dark'
    apply(now); setTheme(now)
    // Follow the device until the visitor picks one.
    const mq = matchMedia('(prefers-color-scheme: light)')
    const on = () => {
      let saved: string | null = null
      try { saved = localStorage.getItem(THEME_KEY) } catch {}
      if (saved) return
      const t: Theme = mq.matches ? 'light' : 'dark'
      apply(t); setTheme(t)
    }
    mq.addEventListener('change', on)
    return () => mq.removeEventListener('change', on)
  }, [])

  const flip = () => {
    const next: Theme = theme === 'light' ? 'dark' : 'light'
    const root = document.documentElement
    root.classList.add('theme-swap')
    apply(next)
    setTheme(next)
    try { localStorage.setItem(THEME_KEY, next) } catch {}
    window.setTimeout(() => root.classList.remove('theme-swap'), 420)
  }

  const label = theme === 'light' ? 'Switch to night showroom (dark)' : 'Switch to day showroom (light)'
  return (
    <button type="button" className={`themebtn ${className}`} onClick={flip} aria-label={label} title={label}>
      <svg className="themebtn__sun" viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
        <circle cx="12" cy="12" r="4.2" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <path d="M12 2.5v2.2M12 19.3v2.2M2.5 12h2.2M19.3 12h2.2M5.3 5.3l1.55 1.55M17.15 17.15l1.55 1.55M5.3 18.7l1.55-1.55M17.15 6.85l1.55-1.55" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
      <svg className="themebtn__moon" viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
        <path d="M20 14.6A8.2 8.2 0 0 1 9.4 4a8.2 8.2 0 1 0 10.6 10.6Z" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      </svg>
    </button>
  )
}
