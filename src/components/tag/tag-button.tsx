'use client'

import { useTag } from './tag-context'

export function TagButton({ id, name, className = '' }: { id: number; name: string; className?: string }) {
  const tag = useTag()
  const on = tag.has(id)
  return (
    <button
      type="button"
      className={`tagbtn ${on ? 'is-on' : ''} ${className}`}
      aria-pressed={on}
      aria-label={on ? `Remove ${name} from your tag` : `Add ${name} to your tag`}
      onClick={() => tag.toggle(id)}
    >
      <svg viewBox="0 0 20 20" width="14" height="14" aria-hidden="true">
        <path d="M3 4.5A1.5 1.5 0 0 1 4.5 3h5.6a1.5 1.5 0 0 1 1.06.44l5.4 5.4a1.5 1.5 0 0 1 0 2.12l-5.6 5.6a1.5 1.5 0 0 1-2.12 0l-5.4-5.4A1.5 1.5 0 0 1 3 10.1Z" fill={on ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="1.5" />
        <circle cx="7" cy="7" r="1.4" fill={on ? 'var(--tagbtn-hole)' : 'currentColor'} />
      </svg>
      <span>{on ? 'Tagged' : 'Tag'}</span>
    </button>
  )
}
