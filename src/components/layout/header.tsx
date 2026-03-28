'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { createPortal } from 'react-dom'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Phone, Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ThemeToggle } from '@/components/shared/theme-toggle'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Vehicles', href: '/inventory' },
  { label: 'Services', href: '/#services' },
  { label: 'About Us', href: '/#aboutus' },
  { label: 'Contact', href: '/contact' },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const toggleRef = useRef<HTMLButtonElement>(null)
  const pathname = usePathname()

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close menu on route change
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])

  // Focus trap inside mobile menu
  useEffect(() => {
    if (!mobileMenuOpen) return

    const menu = menuRef.current
    if (!menu) return

    const focusableElements = menu.querySelectorAll<HTMLElement>(
      'a[href], button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
    )
    const firstEl = focusableElements[0]
    const lastEl = focusableElements[focusableElements.length - 1]

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false)
        toggleRef.current?.focus()
        return
      }
      if (e.key !== 'Tab') return

      if (e.shiftKey) {
        if (document.activeElement === firstEl) {
          e.preventDefault()
          lastEl?.focus()
        }
      } else {
        if (document.activeElement === lastEl) {
          e.preventDefault()
          firstEl?.focus()
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    firstEl?.focus()

    // Prevent body scroll
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen])

  const closeMobileMenu = useCallback(() => {
    setMobileMenuOpen(false)
    toggleRef.current?.focus()
  }, [])

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-slow ${
          scrolled
            ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl shadow-lg border-b border-gray-100 dark:border-white/10'
            : 'bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-white/10 shadow-md'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            <Link href="/" className="flex items-center gap-3" aria-label="Dabiri Autos - Home">
              <img
                src="/dabiri-logo.png"
                alt="Dabiri Autos Logo"
                className="h-10 md:h-12 w-auto object-contain transition-transform duration-slow hover:scale-105"
                width={48}
                height={48}
              />
            </Link>

            <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white font-medium transition-colors relative group"
                >
                  {link.label}
                  <span
                    className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-slow group-hover:w-full"
                    aria-hidden="true"
                  />
                </Link>
              ))}
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <ThemeToggle />
              <a href="tel:+2348102487687" aria-label="Call Dabiri Autos">
                <Button variant="outline" className="border-black dark:border-white text-black dark:text-white hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-all duration-slow">
                  <Phone className="w-4 h-4 mr-2" aria-hidden="true" />
                  Call Us
                </Button>
              </a>
              <Link href="/inventory">
                <Button className="bg-primary hover:bg-primary-dark text-white btn-luxury transition-all duration-slow hover:scale-105 hover:shadow-lg hover:shadow-red-500/30">
                  View Inventory
                </Button>
              </Link>
            </div>

            <button
              ref={toggleRef}
              className="lg:hidden p-2 text-gray-700 dark:text-gray-300 min-w-[44px] min-h-[44px] flex items-center justify-center"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu - portaled to body to escape header stacking context */}
      {mounted && createPortal(
        <>
          {/* Mobile menu overlay */}
          {mobileMenuOpen && (
            <div
              className="fixed inset-0 bg-black/50 z-[9998] lg:hidden animate-fade-in"
              onClick={closeMobileMenu}
              aria-hidden="true"
            />
          )}

          {/* Mobile menu drawer */}
          <div
            ref={menuRef}
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            className={`fixed top-0 right-0 h-full w-[280px] bg-white dark:bg-gray-900 shadow-2xl z-[9999] lg:hidden transition-transform duration-slow ${
              mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-white/10">
              <span className="font-display font-bold text-lg dark:text-white">Menu</span>
              <button
                onClick={closeMobileMenu}
                className="p-2 text-gray-700 dark:text-gray-300 min-w-[44px] min-h-[44px] flex items-center justify-center"
                aria-label="Close navigation menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <nav className="flex flex-col p-4" aria-label="Mobile navigation">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white font-medium py-3 px-2 border-b border-gray-100 dark:border-white/10 min-h-[44px] flex items-center"
                  onClick={closeMobileMenu}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex flex-col gap-3 mt-6">
                <a href="tel:+2348102487687" aria-label="Call Dabiri Autos">
                  <Button variant="outline" className="border-black dark:border-white text-black dark:text-white w-full min-h-[44px]">
                    <Phone className="w-4 h-4 mr-2" aria-hidden="true" />
                    Call Us
                  </Button>
                </a>
                <Link href="/inventory" onClick={closeMobileMenu}>
                  <Button className="bg-primary hover:bg-primary-dark text-white w-full min-h-[44px]">
                    View Inventory
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        </>,
        document.body
      )}
    </>
  )
}
