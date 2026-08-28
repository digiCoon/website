import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
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

    useEffect(() => {
        const lang = location.pathname.startsWith('/en') ? 'en' : 'de'
        i18n.changeLanguage(lang)
    }, [location.pathname, i18n])

    return (
        <>
            <img src={digicoon_single} alt="Background Image" className="site-bg-raccoon" />
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