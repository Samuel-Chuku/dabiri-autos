'use client'

/*
 * The lot on a map. Mapbox Standard, lit to match the site: night preset in
 * the night showroom, day preset in the day one, switched live with the
 * toggle. Loaded from Mapbox's CDN only when the map nears the viewport, so it
 * costs nothing to visitors who never scroll this far. Scroll-zoom is
 * cooperative (ctrl/two fingers) so the map never swallows the page scroll.
 * With no token at build time it falls back to the Google embed.
 */
import { useEffect, useRef, useState } from 'react'
import { company } from '@/data/site'

const TOKEN = process.env.NEXT_PUBLIC_MAPBOX_TOKEN
const GL = 'https://api.mapbox.com/mapbox-gl-js/v3.9.0'

type MapLike = {
  on: (e: string, cb: () => void) => void
  setConfigProperty: (scope: string, key: string, value: unknown) => void
  flyTo: (o: Record<string, unknown>) => void
  addControl: (c: unknown, pos?: string) => void
  remove: () => void
}
type GLNS = {
  accessToken: string
  Map: new (o: Record<string, unknown>) => MapLike
  Marker: new (o: Record<string, unknown>) => { setLngLat: (l: [number, number]) => { addTo: (m: MapLike) => unknown } }
  NavigationControl: new (o: Record<string, unknown>) => unknown
}
declare global { interface Window { mapboxgl?: GLNS } }

let loading: Promise<void> | null = null
function loadGL() {
  if (window.mapboxgl) return Promise.resolve()
  if (!loading) {
    loading = new Promise((resolve, reject) => {
      const css = document.createElement('link')
      css.rel = 'stylesheet'; css.href = `${GL}/mapbox-gl.css`
      document.head.appendChild(css)
      const s = document.createElement('script')
      s.src = `${GL}/mapbox-gl.js`; s.async = true
      s.onload = () => resolve()
      s.onerror = () => { loading = null; reject(new Error('mapbox-gl failed to load')) }
      document.head.appendChild(s)
    })
  }
  return loading
}

const preset = () => (document.documentElement.getAttribute('data-theme') === 'light' ? 'day' : 'night')

function pin() {
  const el = document.createElement('div')
  el.className = 'mpin'
  el.innerHTML = '<span class="mpin__ring"></span><span class="mpin__head"><b>D</b></span><span class="mpin__label">Dabiri Autos</span>'
  return el
}

export function LotMap() {
  const box = useRef<HTMLDivElement>(null)
  const [failed, setFailed] = useState(false)

  useEffect(() => {
    if (!TOKEN || !box.current) return
    let map: MapLike | null = null
    let dead = false
    let themeObs: MutationObserver | null = null
    const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches

    const start = async () => {
      try { await loadGL() } catch { if (!dead) setFailed(true); return }
      if (dead || !box.current || !window.mapboxgl) return
      const gl = window.mapboxgl
      gl.accessToken = TOKEN
      map = new gl.Map({
        container: box.current,
        style: 'mapbox://styles/mapbox/standard',
        config: { basemap: { lightPreset: preset(), showPointOfInterestLabels: false } },
        center: company.lngLat,
        zoom: reduced ? 16.4 : 13.2,
        pitch: reduced ? 55 : 20,
        bearing: -18,
        cooperativeGestures: true,
        attributionControl: true,
      })
      map.addControl(new gl.NavigationControl({ showCompass: false }), 'bottom-right')
      new gl.Marker({ element: pin(), anchor: 'bottom' }).setLngLat(company.lngLat).addTo(map)
      map.on('load', () => {
        if (!reduced) map?.flyTo({ center: company.lngLat, zoom: 16.4, pitch: 58, bearing: -28, duration: 3200, essential: false })
      })
      themeObs = new MutationObserver(() => map?.setConfigProperty('basemap', 'lightPreset', preset()))
      themeObs.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] })
    }

    const io = new IntersectionObserver((es) => {
      if (es.some((e) => e.isIntersecting)) { io.disconnect(); start() }
    }, { rootMargin: '300px 0px' })
    io.observe(box.current)
    return () => { dead = true; io.disconnect(); themeObs?.disconnect(); map?.remove() }
  }, [])

  if (!TOKEN || failed) {
    return (
      <div className="lotmap lotmap--embed">
        <iframe src={company.mapEmbed} title={`Map showing Dabiri Autos, ${company.addressLine}`} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
      </div>
    )
  }
  return <div ref={box} className="lotmap" role="region" aria-label={`Map showing Dabiri Autos, ${company.addressLine}`} />
}
