import Link from 'next/link'
import { company } from '@/data/site'

export function Footer() {
  return (
    <footer className="foot">
      <div className="foot__inner">
        <p>© {new Date().getFullYear()} {company.name} · {company.rc}</p>
        <nav aria-label="Footer">
          <Link href="/">Home</Link>
          <Link href="/inventory">Inventory</Link>
          <Link href="/contact">Visit</Link>
          <a href={company.instagramHref} target="_blank" rel="noopener noreferrer">Instagram</a>
        </nav>
      </div>
    </footer>
  )
}
