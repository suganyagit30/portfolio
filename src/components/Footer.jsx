import { navLinks, profile } from '../data.js'
import Icon from './Icon.jsx'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="foot-grid">
          <div>
            <div className="logo">Suganya R<span className="accent">.</span></div>
            <p className="muted">Aspiring Software Developer</p>
          </div>
          <nav aria-label="Footer" className="foot-links">
            {navLinks.map(([l, id]) => <a key={id} href={`#${id}`}>{l}</a>)}
          </nav>
          <div className="socials">
            <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="icon-btn"><Icon name="github" size={18} /></a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="icon-btn"><Icon name="linkedin" size={18} /></a>
          </div>
        </div>
        <div className="wordmark" aria-hidden="true">Suganya R.</div>
        <p className="copy">© 2026 Suganya R. All Rights Reserved.</p>
      </div>
    </footer>
  )
}
