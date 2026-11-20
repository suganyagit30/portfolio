import { useState } from 'react'
import Section from './Section.jsx'
import Icon from './Icon.jsx'
import { highlights, profile } from '../data.js'

export default function About() {
  const [imgOk, setImgOk] = useState(true)
  return (
    <Section id="about" no="01" eyebrow="About" title="A fresher with" accent="a builder's mindset">
      <div className="bento">
        <div className="tile t-photo">
          {imgOk
            ? <img src={profile.photo} alt="Suganya R" width="420" height="520" loading="lazy" onError={() => setImgOk(false)} />
            : <div className="photo-ph" aria-hidden="true"><span>SR</span><small>Add /public/profile.jpg</small></div>}
        </div>
        <div className="tile t-text">
          <p>
            I'm Suganya R, a B.Sc. Computer Science graduate from the University of Madras (2025). I'm a fresher with a
            strong interest in software development and backend development. I have hands-on knowledge of Python,
            React.js, Node.js, MySQL, RESTful APIs, and object-oriented programming concepts. I also have experience
            working with Python-based data analysis tools and have completed a Data Science internship. I'm passionate
            about learning new technologies and building practical software applications. My career goal is to become a
            Software Developer.
          </p>
        </div>
        {highlights.map(([icon, text], i) => (
          <div key={text} className={`tile t-hl h${i}`}>
            <span className="ico"><Icon name={icon} size={20} /></span>
            <strong>{text}</strong>
          </div>
        ))}
      </div>
    </Section>
  )
}
