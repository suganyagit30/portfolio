import Section from './Section.jsx'
import Icon from './Icon.jsx'
import { skills } from '../data.js'

export default function Skills() {
  return (
    <Section id="skills" no="02" eyebrow="Skills" title="Tools of" accent="the trade">
      <div className="srows">
        {skills.map((s, i) => (
          <article key={s.title} className="srow">
            <span className="num">{String(i + 1).padStart(2, '0')}</span>
            <h3><Icon name={s.icon} size={22} /> {s.title}</h3>
            <ul>{s.items.map(t => <li key={t}>{t}</li>)}</ul>
          </article>
        ))}
      </div>
    </Section>
  )
}
