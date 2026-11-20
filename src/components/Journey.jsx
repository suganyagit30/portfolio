import Section from './Section.jsx'
import { internship as i, education as e } from '../data.js'

export default function Journey() {
  return (
    <Section id="experience" no="05" eyebrow="Experience & Education" title="My" accent="journey so far">
      <div className="tl">
        <div className="tl-row">
          <div className="tl-when"><b>{i.duration}</b><span>Internship</span></div>
          <article className="tl-card">
            <h3>{i.title}</h3>
            <p className="muted">{i.description}</p>
            <ul className="tags">{i.tools.map(t => <li key={t}>{t}</li>)}</ul>
            <p className="note">Hands-on practical learning through project-based work.</p>
          </article>
        </div>
        <div className="tl-row" id="education">
          <div className="tl-when"><b>{e.year}</b><span>Education</span></div>
          <article className="tl-card">
            <h3>{e.degree}</h3>
            <p className="muted">{e.institution}</p>
            <p><strong>CGPA:</strong> {e.cgpa}</p>
          </article>
        </div>
      </div>
    </Section>
  )
}
