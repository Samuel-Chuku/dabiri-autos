'use client'

/*
 * The valet tag: the signature move of this site.
 * Every car the visitor tags, on any page, is clipped to one tag that follows
 * them around. At the counter (end of home, the Visit page) the tag becomes a
 * ready-written WhatsApp message. Stored per browser only, as a convenience.
 */
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { vehicles } from '@/data/vehicles'
import { Vehicle } from '@/types'

const KEY = 'dabiri.tag.v1'

type TagState = {
  ids: number[]
  cars: Vehicle[]
  has: (id: number) => boolean
  toggle: (id: number) => void
  clear: () => void
  /** id of the car most recently clipped, for the swing animation */
  last: number | null
  message: (extra?: string) => string
}

const Ctx = createContext<TagState | null>(null)

export function TagProvider({ children }: { children: React.ReactNode }) {
  const [ids, setIds] = useState<number[]>([])
  const [last, setLast] = useState<number | null>(null)

  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY)
      if (raw) {
        const parsed = JSON.parse(raw)
        if (Array.isArray(parsed)) setIds(parsed.filter((n) => vehicles.some((v) => v.id === n)))
      }
    } catch {}
  }, [])

  const persist = (next: number[]) => {
    try { localStorage.setItem(KEY, JSON.stringify(next)) } catch {}
  }

  const toggle = useCallback((id: number) => {
    setIds((cur) => {
      const on = cur.includes(id)
      const next = on ? cur.filter((x) => x !== id) : [...cur, id]
      persist(next)
      setLast(on ? null : id)
      return next
    })
  }, [])

  const clear = useCallback(() => { setIds([]); setLast(null); persist([]) }, [])

  const value = useMemo<TagState>(() => {
    const cars = ids.map((id) => vehicles.find((v) => v.id === id)).filter(Boolean) as Vehicle[]
    return {
      ids, cars, last,
      has: (id) => ids.includes(id),
      toggle, clear,
      message: (extra) => {
        const lines = ['Hello Dabiri Autos.']
        if (cars.length) {
          lines.push('', cars.length === 1 ? 'I would like to ask about this car:' : 'I would like to ask about these cars:')
          cars.forEach((c) => lines.push(`- ${c.name}, ${c.year}, ${c.price}`))
        }
        if (extra && extra.trim()) lines.push('', extra.trim())
        if (!cars.length && !(extra && extra.trim())) lines.push('I would like to ask about a car.')
        return lines.join('\n')
      },
    }
  }, [ids, last, toggle, clear])

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>
}

export function useTag() {
  const v = useContext(Ctx)
  if (!v) throw new Error('useTag outside TagProvider')
  return v
}
