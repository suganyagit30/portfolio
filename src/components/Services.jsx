import Section from './Section.jsx'
import Icon from './Icon.jsx'
import { services } from '../data.js'

export default function Services() {
  return (
    <Section id="services" no="03" eyebrow="Services" title="What I can" accent="help you build">
      <div className="stiles">
        {services.map((s, i) => (
          <article key={s.title} className={`stile c${i}`}>
            <div className="stile-top">
              <span className="big-no">{String(i + 1).padStart(2, '0')}</span>
              <span className="ico"><Icon name={s.icon} size={22} /></span>
            </div>
            <h3>{s.title}</h3>
            <p>{s.text}</p>
          </article>
        ))}
      </div>
    </Section>
  )
}
