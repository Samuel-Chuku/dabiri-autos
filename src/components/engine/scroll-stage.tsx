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
