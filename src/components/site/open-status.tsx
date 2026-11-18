'use client'

/* "Open now" computed from the real hours (Mon to Sat, 9:00 to 18:00) in Lagos time. */
import { useEffect, useState } from 'react'

const OPEN = 9, CLOSE = 18
const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

export function lagosNow() {
  const parts = new Intl.DateTimeFormat('en-GB', { timeZone: 'Africa/Lagos', weekday: 'long', hour: '2-digit', minute: '2-digit', hour12: false }).formatToParts(new Date())
  const get = (t: string) => parts.find((p) => p.type === t)?.value ?? ''
  return { day: DAYS.indexOf(get('weekday')), mins: parseInt(get('hour'), 10) % 24 * 60 + parseInt(get('minute'), 10) }
}

function status() {
  const { day, mins } = lagosNow()
  const workday = day >= 1 && day <= 6
  if (workday && mins >= OPEN * 60 && mins < CLOSE * 60) {
    const left = CLOSE * 60 - mins
    return { open: true, text: left <= 60 ? `Open now · closes in ${left} min` : 'Open now · until 6pm' }
  }
  if (workday && mins < OPEN * 60) return { open: false, text: 'Closed · opens 9am today' }
  const next = day === 6 || day === 0 ? 'Monday' : 'tomorrow'
  return { open: false, text: `Closed · opens 9am ${next}` }
}

export function OpenStatus() {
  const [s, setS] = useState<{ open: boolean; text: string } | null>(null)
  useEffect(() => {
    setS(status())
    const id = setInterval(() => setS(status()), 60_000)
    return () => clearInterval(id)
  }, [])
  return (
    <p className={`openst ${s?.open ? 'is-open' : ''}`} aria-live="polite">
      <span className="openst__dot" aria-hidden="true" />
      {s ? s.text : 'Mon to Sat, 9am to 6pm'}
      <span className="openst__tz">Lagos time</span>
    </p>
  )
}
