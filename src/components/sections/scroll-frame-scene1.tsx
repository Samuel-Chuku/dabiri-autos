'use client'

import { useEffect, useRef, useState } from 'react'

const TOTAL_FRAMES = 169
const frameUrl = (i: number) =>
  `/frames/scene1/frame_${String(i).padStart(4, '0')}.jpg`

export function ScrollFrameScene1() {
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const framesRef = useRef<HTMLImageElement[]>([])
  const lastFrameRef = useRef(-1)
  const [loadProgress, setLoadProgress] = useState(0)
  const [ready, setReady] = useState(false)
  const [textVisible, setTextVisible] = useState(false)

  // Preload all frames
  useEffect(() => {
    const images: HTMLImageElement[] = new Array(TOTAL_FRAMES)
    let loaded = 0

    for (let i = 0; i < TOTAL_FRAMES; i++) {
      const img = new window.Image()
      img.src = frameUrl(i + 1)
      img.onload = () => {
        loaded++
        setLoadProgress(loaded)
        if (loaded === TOTAL_FRAMES) {
          framesRef.current = images
          setReady(true)
          drawFrame(images, 0)
        }
        // Draw first frame as soon as it loads
        if (i === 0) drawFrame(images, 0)
      }
      images[i] = img
    }
    framesRef.current = images
  }, [])

  const drawFrame = (images: HTMLImageElement[], index: number) => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    const img = images[index]
    if (!img?.complete || img.naturalWidth === 0) return
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height)
  }

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current
      if (!container || framesRef.current.length === 0) return

      const rect = container.getBoundingClientRect()
      const scrolled = -rect.top
      const scrollable = container.offsetHeight - window.innerHeight

      if (scrolled < 0 || scrolled > scrollable) return

      const progress = scrolled / scrollable
      const frameIndex = Math.min(
        Math.floor(progress * TOTAL_FRAMES),
        TOTAL_FRAMES - 1
      )

      if (frameIndex !== lastFrameRef.current) {
        lastFrameRef.current = frameIndex
        drawFrame(framesRef.current, frameIndex)
      }

      // Show text between 30%–75% scroll progress
      setTextVisible(progress >= 0.3 && progress <= 0.75)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div ref={containerRef} style={{ height: '500vh' }} className="relative">
      <div className="sticky top-0 h-screen bg-black flex items-center justify-center overflow-hidden">

        {/* Canvas */}
        <canvas
          ref={canvasRef}
          width={1440}
          height={1440}
          className="absolute"
          style={{
            height: '90vh',
            width: '90vh',
            maxWidth: '95vw',
            maxHeight: '95vw',
          }}
        />

        {/* Loading bar */}
        {!ready && (
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
            <div className="w-48 h-0.5 bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-primary rounded-full transition-all duration-100"
                style={{ width: `${(loadProgress / TOTAL_FRAMES) * 100}%` }}
              />
            </div>
            <span className="text-white/40 text-xs tracking-widest uppercase">
              Loading
            </span>
          </div>
        )}

        {/* Overlay text */}
        <div
          className={`absolute inset-0 flex flex-col items-center justify-end pb-16 md:pb-24 pointer-events-none transition-opacity duration-700 ${
            textVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <p className="text-primary text-xs uppercase tracking-[0.3em] mb-3 font-medium">
            Dabiri Autos
          </p>
          <h2 className="text-white text-3xl md:text-5xl lg:text-6xl font-display font-bold text-center leading-tight px-6">
            Every car.<br />Carefully selected.
          </h2>
          <p className="text-white/60 text-base md:text-lg mt-4 text-center max-w-sm px-6">
            Premium vehicles inspected and ready for you.
          </p>
        </div>

        {/* Scroll hint at start */}
        {ready && (
          <div
            className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 pointer-events-none transition-opacity duration-500"
            style={{ opacity: textVisible ? 0 : 0.5 }}
          >
            <div className="w-px h-8 bg-white/40 animate-pulse" />
            <span className="text-white/40 text-xs tracking-widest uppercase">Scroll</span>
          </div>
        )}
      </div>
    </div>
  )
}
