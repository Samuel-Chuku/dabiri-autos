'use client'

/*
 * Mounts the scrollcraft engine (public/sc/scrollcraft.js, unmodified) on this
 * page's root, and destroys it on route change so client navigation never
 * leaves a stale instance running.
 */
import { useEffect, useRef } from 'react'

type SCApi = { destroy: () => void }
declare global {
  interface Window { ScrollCraft?: { mount: (root: Element) => SCApi } }
}

/* Must match the touch-rail media query in globals.css. */
const TOUCH_RAIL = '(max-width: 900px), (hover: none) and (pointer: coarse)'

let loading: Promise<void> | null = null
function loadEngine() {
  if (typeof window === 'undefined') return Promise.resolve()
  if (window.ScrollCraft) return Promise.resolve()
  if (!loading) {
    loading = new Promise((resolve, reject) => {
      const s = document.createElement('script')
      s.src = '/sc/scrollcraft.js'
      s.async = true
      s.onload = () => resolve()
      s.onerror = () => { loading = null; reject(new Error('engine failed to load')) }
      document.head.appendChild(s)
    })
  }
  return loading
}

export function ScrollStage({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    let api: SCApi | null = null
    let dead = false
    const go = () => {
      if (dead || !ref.current || !window.ScrollCraft) return
      // Phones get a lighter frame set (half the frames, 720px) before the
      // engine reads the attribute. Page code, so the engine stays untouched.
      if (matchMedia('(max-width: 700px)').matches) {
        ref.current.querySelectorAll<HTMLCanvasElement>('canvas[data-sc-sequence-mobile]').forEach((c) => {
          c.setAttribute('data-sc-sequence', c.getAttribute('data-sc-sequence-mobile')!)
        })
      }
      // Touch screens: a scroll-driven sideways pan reads as a page that will
      // not scroll. Acts marked data-sc-touch="rail" become plain flow
      // sections whose rail the visitor swipes, with their own controls.
      if (matchMedia(TOUCH_RAIL).matches) {
        ref.current.querySelectorAll<HTMLElement>('[data-sc-touch="rail"]').forEach((act) => {
          act.removeAttribute('data-sc-act'); act.removeAttribute('data-sc-span')
          act.querySelectorAll('[data-sc-stage]').forEach((n) => n.removeAttribute('data-sc-stage'))
          act.querySelectorAll('[data-sc-pan]').forEach((n) => n.removeAttribute('data-sc-pan'))
          act.querySelectorAll('[data-sc-tilt]').forEach((n) => n.removeAttribute('data-sc-tilt'))
          act.classList.add('is-rail')
        })
      }
      api = window.ScrollCraft.mount(ref.current)
    }
    loadEngine().then(() => {
      // Mount after fonts settle so measured layout matches the final render.
      if (document.fonts?.ready) document.fonts.ready.then(go)
      else go()
    }).catch(() => {
      // No engine: the page is still complete, plain document flow.
      document.documentElement.classList.add('sc-off')
    })
    return () => { dead = true; api?.destroy() }
  }, [])
  return <div ref={ref} className={className}>{children}</div>
}
