'use client'

import { useEffect, useRef } from 'react'

interface AutoLoopFramesProps {
  frameDir: string
  totalFrames: number
  fps?: number
  overlayOpacity?: number
  className?: string
}

export function AutoLoopFrames({
  frameDir,
  totalFrames,
  fps = 14,
  overlayOpacity = 0.75,
  className = '',
}: AutoLoopFramesProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const frameIndexRef = useRef(0)
  const imagesRef = useRef<HTMLImageElement[]>([])
  const loadedCountRef = useRef(0)
  const rafRef = useRef<number>()
  const lastTickRef = useRef(0)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')
    if (!canvas || !ctx) return

    const ro = new ResizeObserver(() => {
      const dpr = window.devicePixelRatio || 1
      const w = canvas.offsetWidth
      const h = canvas.offsetHeight
      if (w === 0 || h === 0) return
      canvas.width = w * dpr
      canvas.height = h * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    })
    ro.observe(canvas)

    const images: HTMLImageElement[] = []
    for (let i = 1; i <= totalFrames; i++) {
      const img = new Image()
      img.src = `${frameDir}/frame_${String(i).padStart(4, '0')}.jpg`
      img.onload = () => { loadedCountRef.current++ }
      images.push(img)
    }
    imagesRef.current = images

    const interval = 1000 / fps

    const tick = (now: number) => {
      rafRef.current = requestAnimationFrame(tick)
      if (now - lastTickRef.current < interval) return
      lastTickRef.current = now

      if (loadedCountRef.current < 5) return

      const cw = canvas.offsetWidth
      const ch = canvas.offsetHeight
      if (cw === 0 || ch === 0) return

      const img = images[frameIndexRef.current]
      if (!img?.complete || img.naturalWidth === 0) return

      const scale = Math.max(cw / img.naturalWidth, ch / img.naturalHeight)
      const sw = img.naturalWidth * scale
      const sh = img.naturalHeight * scale
      ctx.drawImage(img, (cw - sw) / 2, (ch - sh) / 2, sw, sh)

      frameIndexRef.current = (frameIndexRef.current + 1) % totalFrames
    }

    rafRef.current = requestAnimationFrame(tick)

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      ro.disconnect()
    }
  }, [frameDir, totalFrames, fps])

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      <div
        className="absolute inset-0"
        style={{ background: `rgba(0,0,0,${overlayOpacity})` }}
      />
    </div>
  )
}
