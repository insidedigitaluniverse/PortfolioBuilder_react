import { Fragment, useEffect } from 'react'
import { portfolio } from './data/portfolio.js'
import { useTheme } from './hooks/useTheme.js'
import { useReveal } from './hooks/useReveal.js'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import { Experience, Education } from './components/Experience.jsx'
import Projects from './components/Projects.jsx'
import Achievements from './components/Achievements.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import Marquee from './components/Marquee.jsx'
import ScrollExtras from './components/ScrollExtras.jsx'
import { usePointerEffects } from './hooks/usePointerEffects.js'

function hasItems(list) {
  return Array.isArray(list) && list.length > 0
}

const sections = [
  ['home', 'Home', true, Hero],
  ['about', portfolio.sections.about.menu, hasItems(portfolio.about), About],
  ['skills', portfolio.sections.skills.menu, hasItems(portfolio.skills), Skills],
  ['experience', portfolio.sections.experience.menu, hasItems(portfolio.experience), Experience],
  ['projects', portfolio.sections.projects.menu, hasItems(portfolio.projects), Projects],
  ['achievements', portfolio.sections.achievements.menu, hasItems(portfolio.achievements), Achievements],
  ['education', portfolio.sections.education.menu, hasItems(portfolio.education), Education],
  ['contact', portfolio.sections.contact.menu, Boolean(portfolio.email), Contact],
].filter(([, , enabled]) => enabled)

export default function App() {
  const [theme, toggleTheme] = useTheme(portfolio.defaultTheme)
  useReveal()
  usePointerEffects()

  useEffect(() => {
    document.documentElement.style.setProperty('--accent', portfolio.accentColor)
    let title = portfolio.name
    if (hasItems(portfolio.roles)) {
      title = `${portfolio.name} | ${portfolio.roles[0]}`
    }
    document.title = title
  }, [])

  return (
    <>
      <ScrollExtras />
      <Navbar sections={sections} theme={theme} onToggleTheme={toggleTheme} />
      <main>
        {sections.map(([id, , , Component]) => (
          <Fragment key={id}>
            <Component />
            {id === 'home' && <Marquee />}
          </Fragment>
        ))}
      </main>
      <Footer />
    </>
  )
}
