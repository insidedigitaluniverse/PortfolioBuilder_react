import { portfolio } from '../data/portfolio.js'
import Section from './Section.jsx'
import Timeline from './Timeline.jsx'
import { BriefcaseIcon, CapIcon } from './Icons.jsx'

export function Experience() {
  const items = portfolio.experience.map((job) => ({
    title: job.role,
    place: job.company,
    period: job.period,
    text: '',
    points: job.points || [],
  }))

  return (
    <Section id="experience">
      <Timeline items={items} IconComponent={BriefcaseIcon} />
    </Section>
  )
}

export function Education() {
  const items = portfolio.education.map((entry) => ({
    title: entry.degree,
    place: entry.school,
    period: entry.period,
    text: entry.details,
    points: [],
  }))

  return (
    <Section id="education">
      <Timeline items={items} IconComponent={CapIcon} />
    </Section>
  )
}
