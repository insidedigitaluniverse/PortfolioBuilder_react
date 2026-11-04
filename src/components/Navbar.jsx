import { useEffect, useState } from 'react'
import { portfolio } from '../data/portfolio.js'
import { useActiveSection } from '../hooks/useActiveSection.js'
import { cx } from '../utils.js'
import { MenuIcon, CloseIcon, socialLinks } from './Icons.jsx'
import ThemeToggle from './ThemeToggle.jsx'

export default function Navbar({ sections, theme, onToggleTheme }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const active = useActiveSection(sections.map(([id]) => id))

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 20)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) {
      return
    }
    function onKey(event) {
      if (event.key === 'Escape') {
        setOpen(false)
      }
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open])

  function renderLinks(base) {
    return sections.map(([id, label], index) => (
      <a
        key={id}
        href={`#${id}`}
        className={cx(base, active === id && 'active')}
        style={{ '--i': index }}
        onClick={() => setOpen(false)}
      >
        {label}
      </a>
    ))
  }

  const socials = socialLinks(portfolio.socials)

  let brandMark = <span className="brand-mark">{portfolio.initials}</span>
  if (portfolio.logo) {
    brandMark = <img src={portfolio.logo} alt="" className="brand-logo" width="38" height="38" />
  }

  let themeLabel = 'Light theme'
  if (theme === 'dark') {
    themeLabel = 'Dark theme'
  }

  return (
    <>
      <header className={cx('navbar', scrolled && 'scrolled')}>
        <div className="container navbar-inner">
          <a href="#home" className="brand">
            {brandMark}
            <span className="brand-name">{portfolio.name}</span>
          </a>
          <nav className="nav-links">{renderLinks('nav-link')}</nav>
          <div className="nav-actions">
            <span className="nav-theme">
              <ThemeToggle theme={theme} onToggle={onToggleTheme} />
            </span>
            <button className="icon-button menu-button" aria-label="Open menu" aria-expanded={open} onClick={() => setOpen(true)}>
              <MenuIcon />
            </button>
          </div>
        </div>
      </header>

      <div className={cx('drawer-overlay', open && 'open')} onClick={() => setOpen(false)} />
      <aside className={cx('drawer', open && 'open')} aria-hidden={!open}>
        <div className="drawer-head">
          {brandMark}
          <button className="icon-button" aria-label="Close menu" onClick={() => setOpen(false)}>
            <CloseIcon />
          </button>
        </div>
        <nav className="drawer-links">{renderLinks('drawer-link')}</nav>
        {socials.length > 0 && (
          <div className="social-row drawer-socials">
            {socials.map(({ key, label, url, IconComponent }) => (
              <a key={key} href={url} target="_blank" rel="noreferrer" className="social-link" aria-label={label} title={label}>
                <IconComponent />
              </a>
            ))}
          </div>
        )}
        <div className="drawer-theme">
          <span>{themeLabel}</span>
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
        </div>
      </aside>
    </>
  )
}
