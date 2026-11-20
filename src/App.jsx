import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Services from './components/Services.jsx'
import Projects from './components/Projects.jsx'
import Journey from './components/Journey.jsx'
import TechStrip from './components/TechStrip.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import BackToTop from './components/BackToTop.jsx'

export default function App() {
  return (
    <>
      <a className="skip" href="#about">Skip to content</a>
      <Navbar />
      <main>
        <Hero />
        <TechStrip />
        <About />
        <Skills />
        <Services />
        <Projects />
        <Journey />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
