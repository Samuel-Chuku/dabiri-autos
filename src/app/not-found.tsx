import Link from 'next/link'

export default function NotFound() {
  return (
    <main id="main" className="lost">
      <p className="lost__code sc-nums">404</p>
      <h1 className="h2">Wrong turn.</h1>
      <p className="body">That page is not on the lot.</p>
      <div className="lost__acts">
        <Link className="btn btn--accent btn--lg" href="/">Back to the floor</Link>
        <Link className="btn btn--ghost btn--lg" href="/inventory">See inventory</Link>
      </div>
    </main>
  )
}
