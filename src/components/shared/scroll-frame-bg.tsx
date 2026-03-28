'use client'

import { useEffect, useRef, ReactNode } from 'react'

interface ScrollFrameBgProps {
  frameDir: string
  totalFrames: number
  children: ReactNode
  overlayOpacity?: number
  // 1.0 = full playback per section scroll, 0.5 = half speed (slower/longer)
  playbackRate?: number
}

export function ScrollFrameBg({
  frameDir,
  totalFrames,
  children,
  overlayOpacity = 0.65,
  playbackRate = 0.4,
}: ScrollFrameBgProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const framesRef = useRef<HTMLImageElement[]>([])
  const targetFrameRef = useRef(0)
  const currentFrameRef = useRef(0)
  const rafRef = useRef<number>()
  const lastDrawnRef = useRef(-1)

  const frameUrl = (i: number) =>
    `${frameDir}/frame_${String(i).padStart(4, '0')}.jpg`

  // Draw with cover math so the square frame fills any rectangle
  const drawFrame = (index: number) => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    const img = framesRef.current[index]
    if (!img?.complete || img.naturalWidth === 0) return

    const cw = canvas.width
    const ch = canvas.height
    const iw = img.naturalWidth
    const ih = img.naturalHeight
    const scale = Math.max(cw / iw, ch / ih)
    const sw = iw * scale
    const sh = ih * scale
    const ox = (cw - sw) / 2
    const oy = (ch - sh) / 2
    ctx.clearRect(0, 0, cw, ch)
    ctx.drawImage(img, ox, oy, sw, sh)
  }

  // Resize canvas to match container pixel size
  useEffect(() => {
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container) return

    const ro = new ResizeObserver(() => {
      const dpr = window.devicePixelRatio || 1
      canvas.width = container.offsetWidth * dpr
      canvas.height = container.offsetHeight * dpr
      drawFrame(Math.round(currentFrameRef.current))
    })
    ro.observe(container)
    return () => ro.disconnect()
  }, [])

  // Preload all frames
  useEffect(() => {
    const images: HTMLImageElement[] = new Array(totalFrames)
    let loaded = 0

    for (let i = 0; i < totalFrames; i++) {
      const img = new window.Image()
      img.src = frameUrl(i + 1)
      img.onload = () => {
        loaded++
        images[i] = img
        if (i === 0) {
          framesRef.current = images
          drawFrame(0)
        }
        if (loaded === totalFrames) {
          framesRef.current = images
        }
      }
      images[i] = img
    }
    framesRef.current = images
  }, [frameDir, totalFrames])

  // RAF loop — lerp current frame toward target, only draw when changed
  useEffect(() => {
    const LERP = 0.07 // lower = smoother easing, higher = snappier

    const tick = () => {
      const cur = currentFrameRef.current
      const tgt = targetFrameRef.current
      const diff = tgt - cur

      if (Math.abs(diff) > 0.05) {
        const next = cur + diff * LERP
        currentFrameRef.current = next

        const rounded = Math.round(next)
        if (rounded !== lastDrawnRef.current) {
          lastDrawnRef.current = rounded
          drawFrame(Math.min(Math.max(rounded, 0), totalFrames - 1))
        }
      }

      rafRef.current = requestAnimationFrame(tick)
    }

    rafRef.current = requestAnimationFrame(tick)
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [totalFrames])

  // Scroll → target frame
  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current
      if (!container) return

      const rect = container.getBoundingClientRect()
      const sectionH = container.offsetHeight
      const viewportH = window.innerHeight
      const scrollable = sectionH - viewportH

      if (scrollable <= 0) return

      const rawProgress = Math.min(Math.max(-rect.top / scrollable, 0), 1)
      // Apply playbackRate to slow down how quickly frames advance
      const progress = Math.min(rawProgress * (1 / playbackRate), 1)
      targetFrameRef.current = Math.min(
        Math.floor(progress * (totalFrames - 1)),
        totalFrames - 1
      )
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [totalFrames, playbackRate])

  return (
    <div ref={containerRef} className="relative overflow-hidden">
      {/* Frame canvas */}
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="absolute inset-0"
        style={{ width: '100%', height: '100%' }}
      />

      {/* Dark overlay for text readability */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{ background: `rgba(0,0,0,${overlayOpacity})` }}
      />

      {/* Section content */}
      <div className="relative z-10">{children}</div>
    </div>
  )
}
