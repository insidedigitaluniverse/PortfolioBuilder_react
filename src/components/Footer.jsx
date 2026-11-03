import { portfolio } from '../data/portfolio.js'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>
          © {year} {portfolio.name}. All rights reserved.
        </p>
        <p className="footer-credit">
          Template by{' '}
          <a href="https://github.com/insidedigitaluniverse" target="_blank" rel="noreferrer" className="text-link">
            InsideDigitalUniverse
          </a>
        </p>
      </div>
    </footer>
  )
}
