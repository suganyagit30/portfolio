import Section from './Section.jsx'
import Icon from './Icon.jsx'
import { projects } from '../data.js'

// Decorative thumbnail (no real screenshot provided yet).
function Thumb({ kind, title }) {
  return (
    <div className={`thumb ${kind}`} role="img" aria-label={`${title} preview placeholder`}>
      <div className="thumb-bar"><i /><i /><i /></div>
      <div className="thumb-body">
        {kind === 'career'
          ? <><b /><b className="w60" /><div className="row"><u /><u /><u /></div></>
          : <><div className="row"><s /><b className="w60" /></div><div className="row"><s /><b className="w40" /></div><b /></>}
      </div>
      <small>Replace with a project screenshot</small>
    </div>
  )
}

function LinkBtn({ href, children, primary }) {
  const cls = `btn ${primary ? 'btn-primary' : 'btn-outline'}`
  if (!href) {
    return <span className={`${cls} disabled`} aria-disabled="true" title="Link coming soon">{children}</span>
  }
  return <a className={cls} href={href} target="_blank" rel="noopener noreferrer">{children}</a>
}

export default function Projects() {
  return (
    <Section id="projects" no="04" eyebrow="Projects" title="Selected" accent="work" subtitle="A selection of things I've built.">
      <div className="plist">
        {projects.map((p, i) => (
          <article key={p.title} className="proj">
            <div className="proj-media"><Thumb kind={p.thumb} title={p.title} /></div>
            <div className="proj-body">
              <span className="proj-no">Project {String(i + 1).padStart(2, '0')}</span>
              <h3>{p.title}</h3>
              <p className="muted">{p.description}</p>
              <ul className="tags">{p.tech.map(t => <li key={t}>{t}</li>)}</ul>
              <h4>Key features</h4>
              <ul className="features">
                {p.features.map(f => <li key={f}><Icon name="check" size={16} />{f}</li>)}
              </ul>
              <div className="cta-row">
                <LinkBtn href={p.demo} primary><Icon name="external" size={16} /> View Project</LinkBtn>
                <LinkBtn href={p.repo}><Icon name="github" size={16} /> GitHub Repository</LinkBtn>
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}
