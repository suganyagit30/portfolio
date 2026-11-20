const items = ['Python', 'JavaScript', 'React.js', 'Node.js', 'Express.js', 'MySQL', 'MongoDB', 'Git & GitHub', 'Streamlit', 'Pandas']

export default function TechStrip() {
  const row = [...items, ...items]
  return (
    <div className="marquee" aria-label="Technologies I work with">
      <ul className="marquee-track">
        {row.map((t, i) => <li key={i} aria-hidden={i >= items.length || undefined}>{t}<i>✦</i></li>)}
      </ul>
    </div>
  )
}
