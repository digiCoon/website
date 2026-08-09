import { Routes, Route} from "react-router-dom";
import Hero from './components/Hero'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Legal from './components/Legal'

function App() {
  return (
      <Routes>
          <Route path="/" element={
             <>
                 <Hero />
                 <Skills />
                 <Projects />
                 <Experience />
                 <Contact />
                 <Footer />
             </>
          } />
          <Route path="/impressum" element={<Legal />} />
      </Routes>
  )
}

export default App