import { portfolio } from '../data/portfolio.js'
import { useTyping } from '../hooks/useTyping.js'
import { ArrowRightIcon, ChevronDownIcon, DownloadIcon, MailIcon, socialLinks } from './Icons.jsx'

function scrollToNext() {
  const next = document.querySelector('main > .section')
  if (next) {
    next.scrollIntoView({ behavior: 'smooth' })
  }
}

const floatingSkills = portfolio.highlights.slice(0, 6)

const particles = Array.from({ length: 16 }, (_, index) => ({
  left: `${(index * 37 + 11) % 100}%`,
  top: `${(index * 53 + 7) % 100}%`,
  size: `${3 + (index % 3) * 2}px`,
  delay: `${-index * 0.9}s`,
  duration: `${7 + (index % 5)}s`,
}))

export default function Hero() {
  const role = useTyping(portfolio.roles)
  const socials = socialLinks(portfolio.socials)
  const hasProjects = portfolio.projects.length > 0

  return (
    <section id="home" className="hero">
      <div className="hero-bg" aria-hidden="true">
        <span className="blob blob-1" />
        <span className="blob blob-2" />
        <span className="grid-lines" />
        {particles.map((particle, index) => (
          <span
            key={index}
            className="particle"
            style={{
              left: particle.left,
              top: particle.top,
              width: particle.size,
              height: particle.size,
              animationDelay: particle.delay,
              animationDuration: particle.duration,
            }}
          />
        ))}
      </div>
      <div className="container hero-inner">
        <div className="hero-text reveal">
          {portfolio.availableText && (
            <span className="status-pill">
              <span className="status-dot" />
              {portfolio.availableText}
            </span>
          )}
          <h1>
            Hi, I'm <span className="gradient-text">{portfolio.name}</span>
          </h1>
          <p className="hero-role">
            <span>{role}</span>
            <span className="caret" aria-hidden="true" />
          </p>
          <p className="hero-tagline">{portfolio.tagline}</p>
          <div className="hero-actions">
            {hasProjects && (
              <a href="#projects" className="button button-primary">
                View my work
                <ArrowRightIcon size={18} />
              </a>
            )}
            {portfolio.resumeUrl && (
              <a href={portfolio.resumeUrl} className="button" target="_blank" rel="noreferrer">
                <DownloadIcon size={18} />
                Resume
              </a>
            )}
            {!portfolio.resumeUrl && (
              <a href="#contact" className="button">
                <MailIcon size={18} />
                Contact me
              </a>
            )}
          </div>
          {(socials.length > 0 || portfolio.email) && (
            <div className="social-row">
              {socials.map(({ key, label, url, IconComponent }) => (
                <a key={key} href={url} target="_blank" rel="noreferrer" className="social-link" aria-label={label} title={label}>
                  <IconComponent />
                </a>
              ))}
              {portfolio.email && (
                <a href={`mailto:${portfolio.email}`} className="social-link" aria-label="Email" title={portfolio.email}>
                  <MailIcon />
                </a>
              )}
            </div>
          )}
          <button type="button" className="scroll-arrow" aria-label="Scroll down" onClick={scrollToNext}>
            <ChevronDownIcon size={26} />
          </button>
        </div>

        <div className="hero-visual reveal">
          <div className="photo-ring">
            <img src={portfolio.photo} alt={portfolio.name} className="photo" width="360" height="360" />
          </div>
          {floatingSkills.map((skill, index) => (
            <span key={skill} className={`float-chip float-chip-${index + 1}`}>
              {skill}
            </span>
          ))}
        </div>
      </div>
      <a href="#about" className="scroll-hint" aria-label="Scroll down">
        <span />
      </a>
    </section>
  )
}
