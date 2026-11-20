import useReveal from './useReveal.js'

export default function Section({ id, no, eyebrow, title, accent, subtitle, children }) {
  const ref = useReveal()
  return (
    <section id={id} className="section" aria-labelledby={`${id}-h`}>
      <div className="container reveal" ref={ref}>
        <header className="section-head">
          <span className="eyebrow"><b>{no}</b> / {eyebrow}</span>
          <h2 id={`${id}-h`}>{title} <em>{accent}</em></h2>
          {subtitle && <p>{subtitle}</p>}
        </header>
        {children}
      </div>
    </section>
  )
}
