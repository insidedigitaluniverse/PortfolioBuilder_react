import { useState } from 'react'
import { portfolio } from '../data/portfolio.js'
import Section from './Section.jsx'
import { MailIcon, MapPinIcon, PhoneIcon, socialLinks } from './Icons.jsx'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const socials = socialLinks(portfolio.socials)

  function update(event) {
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  function submit(event) {
    event.preventDefault()
    const subject = encodeURIComponent(`Portfolio message from ${form.name}`)
    const body = encodeURIComponent(`${form.message}\n\nFrom: ${form.name} (${form.email})`)
    window.location.href = `mailto:${portfolio.email}?subject=${subject}&body=${body}`
  }

  return (
    <Section id="contact">
      <div className="contact-grid">
        <div className="contact-info reveal">
          <a href={`mailto:${portfolio.email}`} className="card contact-card">
            <span className="fact-icon">
              <MailIcon />
            </span>
            <span>
              <span className="contact-label">Email</span>
              <span className="contact-value">{portfolio.email}</span>
            </span>
          </a>
          {portfolio.phone && (
            <a href={`tel:${portfolio.phone}`} className="card contact-card">
              <span className="fact-icon">
                <PhoneIcon />
              </span>
              <span>
                <span className="contact-label">Phone</span>
                <span className="contact-value">{portfolio.phone}</span>
              </span>
            </a>
          )}
          {portfolio.location && (
            <div className="card contact-card">
              <span className="fact-icon">
                <MapPinIcon />
              </span>
              <span>
                <span className="contact-label">Location</span>
                <span className="contact-value">{portfolio.location}</span>
              </span>
            </div>
          )}
          {socials.length > 0 && (
            <div className="social-row contact-socials">
              {socials.map(({ key, label, url, IconComponent }) => (
                <a key={key} href={url} target="_blank" rel="noreferrer" className="social-link" aria-label={label} title={label}>
                  <IconComponent />
                </a>
              ))}
            </div>
          )}
        </div>

        <form className="card contact-form reveal" onSubmit={submit}>
          <label>
            <span>Your name</span>
            <input name="name" value={form.name} onChange={update} required autoComplete="name" />
          </label>
          <label>
            <span>Your email</span>
            <input name="email" type="email" value={form.email} onChange={update} required autoComplete="email" />
          </label>
          <label>
            <span>Message</span>
            <textarea name="message" rows="5" value={form.message} onChange={update} required />
          </label>
          <button type="submit" className="button button-primary">
            <MailIcon size={18} />
            Send message
          </button>
          <p className="form-note">This opens your email app with the message ready to send.</p>
        </form>
      </div>
    </Section>
  )
}
