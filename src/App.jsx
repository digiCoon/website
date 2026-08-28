import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import './styles/App.css'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Legal from './components/Legal'
import NotFound from './components/NotFound'
import LanguageSwitcher from './components/LanguageSwitcher'
import digicoon_single from './assets/digicoon-single.webp'

function Home() {
    return (
        <>
            <Hero />
            <Skills />
            <Projects />
            <Experience />
            <Contact />
            <Footer />
        </>
    )
}

function App() {
    const location = useLocation()
    const { i18n } = useTranslation()
    const prevBasePath = useRef(null)

    useEffect(() => {
        const lang = location.pathname.startsWith('/en') ? 'en' : 'de'
        i18n.changeLanguage(lang)

        const basePath = location.pathname.replace(/^\/en/, '') || '/'
        if (prevBasePath.current !== null && prevBasePath.current !== basePath) {
            window.scrollTo(0, 0)
        }
        prevBasePath.current = basePath
    }, [location.pathname, i18n])

    return (
        <>
            <img src={digicoon_single} alt="Background Image" className="site-bg-raccoon" />
            <LanguageSwitcher />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/impressum" element={<Legal />} />
                <Route path="/en" element={<Home />} />
                <Route path="/en/impressum" element={<Legal />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    )
}

export default App