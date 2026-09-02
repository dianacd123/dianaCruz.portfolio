import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'

import raizDoodle from './assets/doodles/raiz.png'
import narutoDoodle from './assets/doodles/naruto.png'
import starDoodle from './assets/doodles/star.png'
import strellaDoodle from './assets/doodles/strella.png'

function App() {
  return (
    <>

      <div className="doodle-layer" aria-hidden="true">
        <img
          src={raizDoodle}
          alt=""
          className="doodle doodle-raiz"
          draggable="false"
        />
        <img
          src={narutoDoodle}
          alt=""
          className="doodle doodle-naruto"
          draggable="false"
        />
        <img
          src={starDoodle}
          alt=""
          className="doodle doodle-star"
          draggable="false"
        />
        <img
          src={strellaDoodle}
          alt=""
          className="doodle doodle-strella"
          draggable="false"
        />
      </div>


      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>

      <Footer />
    </>
  )
}

export default App