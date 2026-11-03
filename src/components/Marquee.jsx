import { portfolio } from '../data/portfolio.js'

const words = [...new Set(portfolio.skills.flatMap((group) => group.items))]

export default function Marquee() {
  if (words.length === 0) {
    return null
  }
  const loop = [...words, ...words]
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {loop.map((word, index) => (
          <span key={`${word}-${index}`} className="marquee-item">
            <span className="marquee-star">✦</span>
            {word}
          </span>
        ))}
      </div>
    </div>
  )
}
