'use client'

import { useState } from 'react'
import { useTag } from './tag-context'
import { CTA, whatsappHref } from '@/data/site'

/*
 * The tag, laid out full size on the counter. This is where the signature move
 * resolves: the cars collected on the walk become a written message.
 */
const reasons = [
  { id: 'buy', label: 'Buying a car', line: 'I am looking to buy.' },
  { id: 'ibuy', label: 'Selling mine (iBUY)', line: 'I would like to sell my car to you (iBUY).' },
  { id: 'iswap', label: 'Swapping (iSWAP)', line: 'I would like to swap my car for one of yours (iSWAP).' },
  { id: 'finance', label: 'Financing', line: 'I would like to ask about financing.' },
  { id: 'papers', label: 'Papers', line: 'I need help with vehicle documentation.' },
]

export function CounterTicket({ withNote = false }: { withNote?: boolean }) {
  const tag = useTag()
  const [note, setNote] = useState('')
  const [reason, setReason] = useState<string | null>(null)
  const n = tag.cars.length
  const reasonLine = reasons.find((r) => r.id === reason)?.line ?? ''
  const extra = [reasonLine, note.trim()].filter(Boolean).join('\n')
  return (
    <div className="ticket" data-counter>
      <span className="ticket__hole" aria-hidden="true" />
      <div className="ticket__head">
        <p className="ticket__kicker">Your tag</p>
        <p className="ticket__meta">Dabiri Autos · Surulere</p>
      </div>
      {n === 0 ? (
        <p className="ticket__empty">
          No cars tagged. That is fine: say hello and tell us what you are looking for, or go back to the floor and tag the ones you like.
        </p>
      ) : (
        <ol className="ticket__list">
          {tag.cars.map((c) => (
            <li key={c.id}>
              <span className="ticket__car">{c.name}</span>
              <span className="ticket__spec">{c.year} · {c.mileage} · {c.condition}</span>
              <span className="ticket__price sc-nums">{c.price}</span>
              <button type="button" className="ticket__x" onClick={() => tag.toggle(c.id)} aria-label={`Remove ${c.name} from your tag`}>
                <svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true"><path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg>
              </button>
            </li>
          ))}
        </ol>
      )}
      {withNote && (
        <fieldset className="ticket__reasons">
          <legend>What is it about?</legend>
          <div>
            {reasons.map((r) => (
              <button key={r.id} type="button" className={`chip ${reason === r.id ? 'is-on' : ''}`} aria-pressed={reason === r.id} onClick={() => setReason(reason === r.id ? null : r.id)}>
                {r.label}
              </button>
            ))}
          </div>
        </fieldset>
      )}
      {withNote && (
        <label className="ticket__note">
          <span>Add a note (optional)</span>
          <textarea rows={3} value={note} onChange={(e) => setNote(e.target.value)} placeholder="When you can come in, a budget, a swap you have in mind…" />
        </label>
      )}
      <div className="ticket__perf" aria-hidden="true" />
      <a className="btn btn--accent btn--lg btn--block" href={whatsappHref(tag.message(extra))} target="_blank" rel="noopener noreferrer">
        {CTA}
      </a>
      <p className="ticket__fine">Opens WhatsApp with this message written. Nothing is sent until you press send.</p>
    </div>
  )
}
