import { useEffect, useState } from 'react'
import { navLinks, profile } from '../data.js'
import Icon from './Icon.jsx'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')
  const [scrolled, setScrolled] = useState(false)
  const [theme, setTheme] = useState(() => {
    try { return localStorage.getItem('theme') || 'light' } catch { return 'light' }
  })

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    try { localStorage.setItem('theme', theme) } catch { /* ignore */ }
  }, [theme])

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10)
      let cur = 'home'
      for (const [, id] of navLinks) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= 120) cur = id
      }
      setActive(cur)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`nav ${scrolled ? "scrolled" : ""}`}>
      <div className="container nav-inner">
        <a href="#home" className="logo" onClick={() => setOpen(false)}>Suganya R<span className="accent">.</span></a>
        <nav aria-label="Primary" className={`nav-links ${open ? 'open' : ''}`}>
          {navLinks.map(([label, id]) => (
            <a key={id} href={`#${id}`} className={active === id ? 'active' : ''}
              aria-current={active === id ? 'true' : undefined} onClick={() => setOpen(false)}>{label}</a>
          ))}
          <a className="btn btn-primary nav-cta-m" href={profile.resume} download>
            <Icon name="download" size={16} /> Download Resume
          </a>
        </nav>
        <button className="icon-btn theme-btn" onClick={() => setTheme(t => (t === 'dark' ? 'light' : 'dark'))}
          aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}>
          <Icon name={theme === 'dark' ? 'sun' : 'moon'} size={18} />
        </button>
        <a className="btn btn-primary nav-cta" href={profile.resume} download>
          <Icon name="download" size={16} /> Download Resume
        </a>
        <button className="menu-btn" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open}
          onClick={() => setOpen(o => !o)}>
          <Icon name={open ? 'close' : 'menu'} />
        </button>
      </div>
    </header>
  )
}
