'use client'

import { useEffect, useRef } from 'react'
import { useTheme } from 'next-themes'
import 'mapbox-gl/dist/mapbox-gl.css'

const DABIRI_LNG = 3.3525
const DABIRI_LAT = 6.4971

const MAP_STYLES = {
  dark: 'mapbox://styles/mapbox/navigation-night-v1',
  light: 'mapbox://styles/mapbox/navigation-day-v1',
}

function createMarkerEl() {
  const el = document.createElement('div')
  el.style.cssText = 'display:flex;flex-direction:column;align-items:center;cursor:pointer;filter:drop-shadow(0 6px 16px rgba(229,57,53,0.45));'
  el.innerHTML = `
    <div style="
      width:56px;height:56px;
      background:#E53935;
      border-radius:50%;
      border:3px solid #fff;
      display:flex;align-items:center;justify-content:center;
    ">
      <svg width="34" height="34" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 11L6.5 6.5C6.8 5.6 7.6 5 8.6 5H15.4C16.4 5 17.2 5.6 17.5 6.5L19 11" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
        <rect x="2" y="11" width="20" height="7" rx="2" fill="white" fill-opacity="0.15" stroke="white" stroke-width="1.5"/>
        <path d="M2 15H22" stroke="white" stroke-width="1.2"/>
        <path d="M8 11L9.5 7H14.5L16 11" fill="white" fill-opacity="0.25"/>
        <circle cx="6.5" cy="18.5" r="2" fill="white"/>
        <circle cx="17.5" cy="18.5" r="2" fill="white"/>
        <path d="M2 13H4M20 13H22" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
      </svg>
    </div>
    <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin-top:-1px;display:block;">
      <path d="M7 10L0 0H14L7 10Z" fill="#E53935"/>
    </svg>
  `
  return el
}

export function MapboxMap({ className }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const mapRef = useRef<mapboxgl.Map | null>(null)
  const { resolvedTheme } = useTheme()

  // Init map once on mount — read theme from DOM directly since resolvedTheme may not be settled yet
  useEffect(() => {
    if (!containerRef.current || mapRef.current) return

    let map: mapboxgl.Map
    let marker: mapboxgl.Marker

    async function initMap() {
      const mapboxgl = (await import('mapbox-gl')).default
      mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN!

      const isDark = document.documentElement.classList.contains('dark')

      map = new mapboxgl.Map({
        container: containerRef.current!,
        style: isDark ? MAP_STYLES.dark : MAP_STYLES.light,
        center: [DABIRI_LNG, DABIRI_LAT],
        zoom: 16,
        pitch: 30,
        attributionControl: false,
      })

      map.addControl(new mapboxgl.AttributionControl({ compact: true }), 'bottom-right')
      map.addControl(new mapboxgl.NavigationControl({ showCompass: false }), 'bottom-right')

      marker = new mapboxgl.Marker({ element: createMarkerEl(), anchor: 'bottom' })
        .setLngLat([DABIRI_LNG, DABIRI_LAT])
        .addTo(map)

      mapRef.current = map
    }

    initMap()

    return () => {
      marker?.remove()
      map?.remove()
      mapRef.current = null
    }
  }, [])

  // Switch style when theme toggles — markers survive setStyle
  useEffect(() => {
    if (!mapRef.current || !resolvedTheme) return
    mapRef.current.setStyle(
      resolvedTheme === 'dark' ? MAP_STYLES.dark : MAP_STYLES.light
    )
  }, [resolvedTheme])

  return <div ref={containerRef} className={className} />
}
