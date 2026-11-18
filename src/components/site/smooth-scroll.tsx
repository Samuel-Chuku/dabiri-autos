'use client'

/*
 * Wheel smoothing. A mouse wheel moves the page in ~100px notches, and every
 * scroll-driven effect on the site (pins, the floor rail, counters, the
 * turntable) jumps with it. This turns each notch into a short eased glide by
 * moving the real window scroll, so the engine and everything else still read
 * plain scrollY. Desktop pointers only: touch scrolling is already smooth and
 * is left native. Off under reduced motion. Nested scrollers, open dialogs,
 * the map and pinch/ctrl-zoom keep native behaviour.
 */
import { useEffect } from 'react'

const EASE_MS = 110 // time constant: ~90% of a notch lands in ~250ms

function scrollableAncestor(el: Element | null, dy: number): boolean {
  for (let n = el; n && n !== document.body && n !== document.documentElement; n = n.parentElement) {
    const s = getComputedStyle(n)
    if (!/(auto|scroll|overlay)/.test(s.overflowY) || n.scrollHeight <= n.clientHeight + 1) continue
    if (dy < 0 ? n.scrollTop > 0 : n.scrollTop + n.clientHeight < n.scrollHeight - 1) return true
  }
  return false
}

export function SmoothScroll() {
  useEffect(() => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return
    if (!matchMedia('(hover: hover) and (pointer: fine)').matches) return

    const root = document.documentElement
    let target = scrollY
    let current = scrollY
    let raf = 0
    let last = 0

    const max = () => Math.max(0, root.scrollHeight - innerHeight)
    const go = (y: number) => scrollTo({ top: y, behavior: 'instant' as ScrollBehavior })

    const tick = (now: number) => {
      const dt = last ? Math.min(now - last, 64) : 16
      last = now
      current += (target - current) * (1 - Math.exp(-dt / EASE_MS))
      if (Math.abs(target - current) < 0.4) {
        current = target; go(current); raf = 0; last = 0
        return
      }
      go(current)
      raf = requestAnimationFrame(tick)
    }

    const onWheel = (e: WheelEvent) => {
      if (e.ctrlKey || e.defaultPrevented) return
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) return
      if (root.classList.contains('menu-open')) return
      const t = e.target as Element | null
      if (t?.closest('dialog[open], .lotmap, [data-native-scroll]')) return
      if (scrollableAncestor(t, e.deltaY)) return
      e.preventDefault()
      let d = e.deltaY
      if (e.deltaMode === 1) d *= 16
      else if (e.deltaMode === 2) d *= innerHeight
      if (!raf) { target = current = scrollY }
      target = Math.min(max(), Math.max(0, target + d))
      if (!raf) raf = requestAnimationFrame(tick)
    }

    // Keyboard, scrollbar drags and anchor jumps move the page without us:
    // follow them so the next wheel notch starts from where the page really is.
    const onScroll = () => {
      if (raf && Math.abs(scrollY - current) < 3) return // our own glide
      if (raf) { cancelAnimationFrame(raf); raf = 0; last = 0 }
      target = current = scrollY
    }

    addEventListener('wheel', onWheel, { passive: false })
    addEventListener('scroll', onScroll, { passive: true })
    return () => {
      removeEventListener('wheel', onWheel)
      removeEventListener('scroll', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])
  return null
}
