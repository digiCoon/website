import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import raccoonTrash from '../assets/raccoon-trash-404.webp'
import '../styles/NotFound.css'

function NotFound() {
    const { t, i18n } = useTranslation()

    return (
        <section id="not-found">
            <div>
                <h1>404</h1>
                <p>{t('notFound.text')}</p>
                <Link to={i18n.language === 'en' ? '/en' : '/'}>{t('notFound.link')}</Link>
            </div>
            <img src={raccoonTrash} alt="" className="not-found-image" />
        </section>
    )
}

export default NotFound