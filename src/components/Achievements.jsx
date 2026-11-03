import { portfolio } from '../data/portfolio.js'
import Section from './Section.jsx'
import { AwardIcon, ExternalIcon } from './Icons.jsx'

export default function Achievements() {
  return (
    <Section id="achievements">
      <div className="achievements-grid">
        {portfolio.achievements.map((item, index) => (
          <div key={`${item.title}-${item.year}`} className="card achievement-card reveal" style={{ '--i': index }}>
            <span className="fact-icon">
              <AwardIcon size={20} />
            </span>
            <div className="achievement-body">
              <h3>{item.title}</h3>
              <p className="muted">
                {item.issuer}
                {item.issuer && item.year && ' · '}
                {item.year}
              </p>
              {item.url && (
                <a href={item.url} target="_blank" rel="noreferrer" className="text-link">
                  <ExternalIcon size={16} />
                  View
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
