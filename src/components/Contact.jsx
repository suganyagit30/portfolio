import { useState } from 'react'
import Icon from './Icon.jsx'
import { profile } from '../data.js'

// Set VITE_FORM_ENDPOINT (e.g. a Formspree URL) in .env to enable real submissions.
const ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT

const empty = { name: '', email: '', subject: '', message: '' }

function validate(v) {
  const e = {}
  if (v.name.trim().length < 2) e.name = 'Please enter your name.'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email)) e.email = 'Please enter a valid email address.'
  if (v.subject.trim().length < 3) e.subject = 'Please enter a subject.'
  if (v.message.trim().length < 10) e.message = 'Message should be at least 10 characters.'
  return e
}

export default function Contact() {
  const [v, setV] = useState(empty)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState({ state: 'idle', msg: '' })

  const set = k => ev => setV({ ...v, [k]: ev.target.value })

  async function onSubmit(ev) {
    ev.preventDefault()
    const errs = validate(v)
    setErrors(errs)
    if (Object.keys(errs).length) return
    if (!ENDPOINT) {
      setStatus({ state: 'error', msg: 'The contact form is not connected to a service yet, so nothing was sent. Please email me directly instead.' })
      return
    }
    setStatus({ state: 'sending', msg: '' })
    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(v),
      })
      if (!res.ok) throw new Error()
      setStatus({ state: 'success', msg: 'Thanks! Your message has been sent.' })
      setV(empty)
    } catch {
      setStatus({ state: 'error', msg: 'Something went wrong and your message was not sent. Please try again or email me directly.' })
    }
  }

  const field = (k, label, type = 'text') => (
    <div className="field">
      <label htmlFor={k}>{label}</label>
      {k === 'message'
        ? <textarea id={k} rows="5" value={v[k]} onChange={set(k)} aria-invalid={!!errors[k]} aria-describedby={errors[k] ? `${k}-e` : undefined} />
        : <input id={k} type={type} value={v[k]} onChange={set(k)} aria-invalid={!!errors[k]} aria-describedby={errors[k] ? `${k}-e` : undefined} autoComplete={k === 'name' ? 'name' : k === 'email' ? 'email' : 'off'} />}
      {errors[k] && <span className="err" id={`${k}-e`} role="alert">{errors[k]}</span>}
    </div>
  )

  return (
    <section id="contact" className="section" aria-labelledby="contact-h">
      <div className="container">
        <div className="contact-panel">
          <div className="contact-left">
            <span className="eyebrow"><b>06</b> / Contact</span>
            <h2 id="contact-h">Let's <em>Connect</em></h2>
            <p>I'm always interested in connecting with people, exploring opportunities, and discussing software development projects.</p>
            <ul className="contact-list">
              <li><Icon name="mail" size={18} /><a href={`mailto:${profile.email}`}>{profile.email}</a></li>
              <li><Icon name="pin" size={18} /><span>{profile.location}</span></li>
              <li><Icon name="linkedin" size={18} /><a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li><Icon name="github" size={18} /><a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a></li>
            </ul>
          </div>
          <form className="form" onSubmit={onSubmit} noValidate>
            <div className="two">{field('name', 'Name')}{field('email', 'Email', 'email')}</div>
            {field('subject', 'Subject')}
            {field('message', 'Message')}
            <button className="btn btn-primary" type="submit" disabled={status.state === 'sending'}>
              <Icon name="send" size={16} /> {status.state === 'sending' ? 'Sending…' : 'Send Message'}
            </button>
            <p className={`status ${status.state}`} role="status" aria-live="polite">{status.msg}</p>
          </form>
        </div>
      </div>
    </section>
  )
}
