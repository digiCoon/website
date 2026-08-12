import { Routes, Route} from "react-router-dom";
import './App.css'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Legal from './components/Legal'
import NotFound from './components/NotFound'
import digicoon_single from './assets/digicoon-single.png'

function App() {
  return (
      <>
          <img src={digicoon_single} alt="Background Image" className="site-bg-raccoon" />
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
              <Route path="*" element={<NotFound />} />
          </Routes>
      </>
  )
}

export default App