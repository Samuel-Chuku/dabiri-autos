import { AutoLoopFrames } from '@/components/shared/auto-loop-frames'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      <AutoLoopFrames
        frameDir="/frames/scene1"
        totalFrames={169}
        fps={14}
        overlayOpacity={0.6}
      />

      <div className="relative z-10 flex flex-col items-center gap-8 px-6 text-center">
        <Image
          src="/dabiri-logo.png"
          alt="Dabiri Autos"
          width={160}
          height={80}
          className="object-contain"
          priority
        />

        <div className="flex flex-col items-center gap-3">
          <h1 className="text-white text-3xl sm:text-4xl font-bold tracking-tight font-heading">
            Under Maintenance
          </h1>
          <p className="text-white/70 text-base sm:text-lg max-w-sm leading-relaxed">
            We&apos;re making improvements to serve you better. Check back soon.
          </p>
        </div>
      </div>
    </div>
  )
}
