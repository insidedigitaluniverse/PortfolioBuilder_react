import { portfolio } from '../data/portfolio.js'
import Section from './Section.jsx'
import CountUp from './CountUp.jsx'
import { MapPinIcon, MailIcon, PhoneIcon } from './Icons.jsx'

export default function About() {
  const facts = [
    ['location', MapPinIcon, portfolio.location, ''],
    ['email', MailIcon, portfolio.email, `mailto:${portfolio.email}`],
    ['phone', PhoneIcon, portfolio.phone, `tel:${portfolio.phone}`],
  ].filter(([, , value]) => value)

  return (
    <Section id="about">
      <div className="about-grid">
        <div className="about-text reveal">
          {portfolio.about.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          {facts.length > 0 && (
            <ul className="fact-list">
              {facts.map(([key, IconComponent, value, href]) => (
                <li key={key}>
                  <span className="fact-icon">
                    <IconComponent size={18} />
                  </span>
                  {href && (
                    <a href={href} className="text-link">
                      {value}
                    </a>
                  )}
                  {!href && <span>{value}</span>}
                </li>
              ))}
            </ul>
          )}
        </div>
        {portfolio.stats.length > 0 && (
          <div className="stats reveal">
            {portfolio.stats.map((stat) => (
              <div key={stat.label} className="card stat-card">
                <CountUp value={stat.value} className="stat-value gradient-text" />
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </Section>
  )
}
