/* Honest placeholder for a listing with no photo of the actual car on file. */
export function NoPhoto({ name }: { name: string }) {
  return (
    <div className="nophoto" role="img" aria-label={`No photo of the ${name} yet`}>
      <svg viewBox="0 0 120 48" width="120" height="48" aria-hidden="true">
        <path d="M6 34h108M14 34c0-6 4-10 10-11l14-9c3-2 6-3 10-3h22c5 0 9 2 12 5l8 7h10c6 0 10 4 10 11" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="32" cy="35" r="7" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="90" cy="35" r="7" fill="none" stroke="currentColor" strokeWidth="1.5" />
      </svg>
      <p>Photo on request</p>
    </div>
  )
}
