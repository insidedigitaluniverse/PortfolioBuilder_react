import { useState } from 'react'
import { portfolio } from '../data/portfolio.js'
import Section from './Section.jsx'
import { cx } from '../utils.js'

export default function Skills() {
  const [openTitle, setOpenTitle] = useState('')

  function toggle(title) {
    if (openTitle === title) {
      setOpenTitle('')
    } else {
      setOpenTitle(title)
    }
  }

  function onKey(event, title) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      toggle(title)
    }
  }

  return (
    <Section id="skills">
      <div className="skills-grid">
        {portfolio.skills.map((group, index) => (
          <div
            key={group.title}
            className={cx('card skill-card reveal', openTitle === group.title && 'open')}
            style={{ '--i': index }}
            role="button"
            tabIndex={0}
            aria-expanded={openTitle === group.title}
            onClick={() => toggle(group.title)}
            onKeyDown={(event) => onKey(event, group.title)}
          >
            <div className="skill-head">
              {group.icon && (
                <span className="skill-icon" aria-hidden="true">
                  {group.icon}
                </span>
              )}
              <h3>{group.title}</h3>
              <span className="skill-count">{group.items.length}</span>
            </div>
            <div className="skill-more">
              <div className="skill-inner">
                <div className="chips">
                  {group.items.map((item) => (
                    <span key={item} className="chip">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
