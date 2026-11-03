import { portfolio } from '../data/portfolio.js'

export default function Section({ id, children }) {
  const { eyebrow, title, subtitle } = portfolio.sections[id]
  return (
    <section id={id} className="section">
      <div className="container">
        <div className="section-head reveal">
          {eyebrow && <span className="eyebrow">{eyebrow}</span>}
          <h2>{title}</h2>
          {subtitle && <p className="section-subtitle">{subtitle}</p>}
        </div>
        {children}
      </div>
    </section>
  )
}
