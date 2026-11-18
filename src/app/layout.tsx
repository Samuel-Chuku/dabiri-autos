import type { Metadata, Viewport } from 'next'
import { Archivo, IBM_Plex_Mono } from 'next/font/google'
import './scrollcraft.css'
import './globals.css'
import { TagProvider } from '@/components/tag/tag-context'
import { ValetTag } from '@/components/tag/valet-tag'
import { Header } from '@/components/site/header'
import { Ambient } from '@/components/site/ambient'
import { themeScript } from '@/components/site/theme-script'

const archivo = Archivo({ subsets: ['latin'], axes: ['wdth'], variable: '--font-archivo', display: 'swap' })
const mono = IBM_Plex_Mono({ subsets: ['latin'], weight: ['400', '500'], variable: '--font-mono', display: 'swap' })

export const metadata: Metadata = {
  title: 'Dabiri Autos · Cars on the floor in Surulere, Lagos',
  description:
    'Nigerian and foreign used cars in Surulere, Lagos. Buy, sell or swap at Dabiri Autos Limited, RC 8313006. Tag the cars you like and chat with us on WhatsApp.',
  openGraph: {
    title: 'Dabiri Autos · Surulere, Lagos',
    description: 'Nigerian and foreign used cars. Buy, sell or swap. Tag the cars you like and chat on WhatsApp.',
    images: ['/media/c300.webp'],
    type: 'website',
  },
  icons: { icon: '/favicon.svg' },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f3efea' },
    { media: '(prefers-color-scheme: dark)', color: '#0d0b0b' },
  ],
  viewportFit: 'cover',
  colorScheme: 'dark light',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${archivo.variable} ${mono.variable}`} data-theme="dark" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <a href="#main" className="skip">Skip to content</a>
        <Ambient />
        <TagProvider>
          <Header />
          <div className="sc-grain" aria-hidden="true" />
          {children}
          <ValetTag />
        </TagProvider>
      </body>
    </html>
  )
}
