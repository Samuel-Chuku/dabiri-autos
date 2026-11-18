'use client'

/* The week on a board, today lit. Lagos time, so it is right from anywhere. */
import { useEffect, useState } from 'react'
import { lagosNow } from './open-status'

const WEEK = [
  { d: 1, name: 'Monday' }, { d: 2, name: 'Tuesday' }, { d: 3, name: 'Wednesday' },
  { d: 4, name: 'Thursday' }, { d: 5, name: 'Friday' }, { d: 6, name: 'Saturday' }, { d: 0, name: 'Sunday' },
]

export function HoursBoard() {
  const [today, setToday] = useState<number | null>(null)
  useEffect(() => {
    setToday(lagosNow().day)
    const id = setInterval(() => setToday(lagosNow().day), 60_000)
    return () => clearInterval(id)
  }, [])
  return (
    <ol className="hours" aria-label="Opening hours, Lagos time">
      {WEEK.map((w) => {
        const open = w.d !== 0
        const isToday = today === w.d
        return (
          <li key={w.d} className={`${isToday ? 'is-today' : ''} ${open ? '' : 'is-shut'}`} aria-current={isToday ? 'date' : undefined}>
            <span className="hours__day">{w.name}{isToday && <em>Today</em>}</span>
            <span className="hours__time sc-nums">{open ? '09:00 – 18:00' : 'Closed'}</span>
          </li>
        )
      })}
    </ol>
  )
}
