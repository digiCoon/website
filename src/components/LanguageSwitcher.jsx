import { Link, useLocation } from 'react-router-dom'
import '../styles/LanguageSwitcher.css'

function LanguageSwitcher() {
    const location = useLocation()
    const isEnglish = location.pathname.startsWith('/en')

    const dePath = isEnglish ? location.pathname.replace(/^\/en/, '') || '/' : location.pathname
    const enPath = isEnglish ? location.pathname : `/en${location.pathname === '/' ? '' : location.pathname}`

    return (
        <div className="lang-switch">
            <Link to={dePath} className={!isEnglish ? 'active' : ''}>DE</Link>
            <span>/</span>
            <Link to={enPath} className={isEnglish ? 'active' : ''}>EN</Link>
        </div>
    )
}

export default LanguageSwitcher