import { company } from '@/data/site'

/* The company's facts, set like an object label. Used at every counter. */
export function VisitPlate({ as: H = 'h2' }: { as?: 'h2' | 'h3' }) {
  return (
    <div className="plate">
      <H className="plate__title">Dabiri Autos Limited</H>
      <dl className="plate__rows">
        <div><dt>Lot</dt><dd>{company.street}<br />{company.area}</dd></div>
        <div><dt>Open</dt><dd>{company.hours}</dd></div>
        <div><dt>Call</dt><dd><a href={company.phoneHref}>{company.phoneDisplay}</a></dd></div>
        <div><dt>Instagram</dt><dd><a href={company.instagramHref} target="_blank" rel="noopener noreferrer">{company.instagramHandle}</a></dd></div>
        <div><dt>Registered</dt><dd>{company.rc}</dd></div>
      </dl>
      <a className="plate__dir" href={company.mapsHref} target="_blank" rel="noopener noreferrer">Directions to the lot</a>
    </div>
  )
}
