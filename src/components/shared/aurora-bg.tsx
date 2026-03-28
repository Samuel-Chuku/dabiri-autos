'use client'

import { useEffect, useRef, ReactNode } from 'react'

interface AuroraBgProps {
  children: ReactNode
  className?: string
}

interface Orb {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  r: number
  g: number
  b: number
  scrollFactor: number
}

export function AuroraBg({ children, className = '' }: AuroraBgProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const orbsRef = useRef<Orb[]>([])
  const rafRef = useRef<number>()
  const scrollYRef = useRef(0)
  const timeRef = useRef(0)

  useEffect(() => {
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resize = () => {
      const dpr = window.devicePixelRatio || 1
      canvas.width = container.offsetWidth * dpr
      canvas.height = container.offsetHeight * dpr
      ctx.scale(dpr, dpr)
      initOrbs(container.offsetWidth, container.offsetHeight)
    }

    const initOrbs = (w: number, h: number) => {
      orbsRef.current = [
        // Large deep red blob — top left
        { x: w * 0.15, y: h * 0.2, vx: 0.18, vy: 0.12, radius: Math.min(w, h) * 0.45, r: 229, g: 57, b: 53, scrollFactor: 0.04 },
        // Medium dark crimson — bottom right
        { x: w * 0.85, y: h * 0.75, vx: -0.14, vy: -0.09, radius: Math.min(w, h) * 0.38, r: 183, g: 28, b: 28, scrollFactor: -0.03 },
        // Small red accent — centre right
        { x: w * 0.7, y: h * 0.3, vx: 0.09, vy: 0.16, radius: Math.min(w, h) * 0.25, r: 211, g: 47, b: 47, scrollFactor: 0.02 },
        // Deep near-black charcoal — centre
        { x: w * 0.4, y: h * 0.6, vx: -0.11, vy: 0.08, radius: Math.min(w, h) * 0.5, r: 30, g: 10, b: 10, scrollFactor: 0.01 },
        // Faint rose highlight — top right
        { x: w * 0.8, y: h * 0.1, vx: 0.07, vy: 0.13, radius: Math.min(w, h) * 0.2, r: 244, g: 67, b: 54, scrollFactor: -0.05 },
      ]
    }

    resize()
    window.addEventListener('resize', resize)

    const handleScroll = () => {
      scrollYRef.current = window.scrollY
    }
    window.addEventListener('scroll', handleScroll, { passive: true })

    const w = () => container.offsetWidth
    const h = () => container.offsetHeight

    const draw = () => {
      timeRef.current += 0.004
      const t = timeRef.current
      const cw = w()
      const ch = h()

      // Deep base
      ctx.fillStyle = '#08080d'
      ctx.fillRect(0, 0, cw, ch)

      // Draw orbs
      if (cw === 0 || ch === 0) return

      orbsRef.current.forEach((orb) => {
        // Slow organic drift
        orb.x += orb.vx + Math.sin(t + orb.scrollFactor * 10) * 0.3
        orb.y += orb.vy + Math.cos(t * 0.7 + orb.scrollFactor * 8) * 0.2

        // Scroll influence — each orb shifts slightly on scroll
        const scrollShift = scrollYRef.current * orb.scrollFactor
        const safeShift = isFinite(scrollShift) ? scrollShift % ch : 0

        // Soft bounce off edges
        if (orb.x < -orb.radius) orb.x = cw + orb.radius
        if (orb.x > cw + orb.radius) orb.x = -orb.radius
        if (orb.y < -orb.radius) orb.y = ch + orb.radius
        if (orb.y > ch + orb.radius) orb.y = -orb.radius

        const grd = ctx.createRadialGradient(
          orb.x, orb.y + safeShift, 0,
          orb.x, orb.y + safeShift, orb.radius
        )
        grd.addColorStop(0, `rgba(${orb.r},${orb.g},${orb.b},0.28)`)
        grd.addColorStop(0.5, `rgba(${orb.r},${orb.g},${orb.b},0.08)`)
        grd.addColorStop(1, `rgba(${orb.r},${orb.g},${orb.b},0)`)

        ctx.globalCompositeOperation = 'screen'
        ctx.fillStyle = grd
        ctx.beginPath()
        ctx.arc(orb.x, orb.y + (scrollShift % ch), orb.radius, 0, Math.PI * 2)
        ctx.fill()
      })

      ctx.globalCompositeOperation = 'source-over'

      // Film grain overlay
      const imageData = ctx.getImageData(0, 0, cw, ch)
      const data = imageData.data
      const grainAmount = 18
      for (let i = 0; i < data.length; i += 16) {
        const noise = (Math.random() - 0.5) * grainAmount
        data[i] = Math.min(255, Math.max(0, data[i] + noise))
        data[i + 1] = Math.min(255, Math.max(0, data[i + 1] + noise))
        data[i + 2] = Math.min(255, Math.max(0, data[i + 2] + noise))
      }
      ctx.putImageData(imageData, 0, 0)

      // Subtle vignette
      const vignette = ctx.createRadialGradient(cw / 2, ch / 2, ch * 0.3, cw / 2, ch / 2, ch * 0.9)
      vignette.addColorStop(0, 'rgba(0,0,0,0)')
      vignette.addColorStop(1, 'rgba(0,0,0,0.55)')
      ctx.globalCompositeOperation = 'source-over'
      ctx.fillStyle = vignette
      ctx.fillRect(0, 0, cw, ch)

      rafRef.current = requestAnimationFrame(draw)
    }

    rafRef.current = requestAnimationFrame(draw)

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      window.removeEventListener('resize', resize)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{ width: '100%', height: '100%' }}
      />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}
