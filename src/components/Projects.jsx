import { useState } from 'react'
import { portfolio } from '../data/portfolio.js'
import Section from './Section.jsx'
import { cx } from '../utils.js'
import { SparkIcon, ExternalIcon } from './Icons.jsx'

const ALL = 'All'

function ProjectCover({ project }) {
  if (project.image) {
    return <img src={project.image} alt={project.title} className="project-image" loading="lazy" />
  }
  return (
    <div className="project-placeholder" aria-hidden="true">
      <SparkIcon size={40} />
    </div>
  )
}

export default function Projects() {
  const [filter, setFilter] = useState(ALL)
  const categories = [ALL, ...new Set(portfolio.projects.map((project) => project.category).filter(Boolean))]

  let shown = portfolio.projects
  if (filter !== ALL) {
    shown = portfolio.projects.filter((project) => project.category === filter)
  }

  return (
    <Section id="projects">
      {categories.length > 2 && (
        <div className="filters reveal" role="tablist">
          {categories.map((category) => (
            <button
              key={category}
              role="tab"
              aria-selected={filter === category}
              className={cx('filter', filter === category && 'active')}
              onClick={() => setFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>
      )}
      <div className="projects-grid reveal">
        {shown.map((project, index) => {
          const links = (project.links || []).filter((link) => link.url)
          const tags = project.tags || []
          return (
            <article key={`${filter}-${project.title}`} className="card project-card tilt" style={{ '--i': index }}>
              <div className="project-cover">
                <ProjectCover project={project} />
              </div>
              <div className="project-body">
                {project.category && <span className="project-category">{project.category}</span>}
                <h3>{project.title}</h3>
                <p className="muted">{project.description}</p>
                {tags.length > 0 && (
                  <div className="chips">
                    {tags.map((tag) => (
                      <span key={tag} className="chip chip-small">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
                {links.length > 0 && (
                  <div className="project-links">
                    {links.map((link) => (
                      <a key={link.url} href={link.url} target="_blank" rel="noreferrer" className="text-link">
                        <ExternalIcon size={16} />
                        {link.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </article>
          )
        })}
      </div>
    </Section>
  )
}
