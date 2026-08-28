import { useTranslation } from 'react-i18next'
import '../styles/Footer.css'
import { FaGithub, FaLinkedin, FaXing } from 'react-icons/fa'

function Footer() {
    const { t, i18n } = useTranslation()
    const year = new Date().getFullYear()

    return (
        <footer>
            <div className="footer-social-media">
                <a href="https://github.com/digiCoon" target="_blank" rel="noopener noreferrer" title="github">
                    <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/jessica-ries/" target="_blank" rel="noopener noreferrer" title="linkedin">
                    <FaLinkedin />
                </a>
                <a href="https://www.xing.com/profile/Jessica_Ries3" target="_blank" rel="noopener noreferrer" title="xing">
                    <FaXing />
                </a>
            </div>
            <div className="footer-legal">
                <a href={i18n.language === 'en' ? '/en/impressum' : '/impressum'}>{t('footer.legal')}</a>
            </div>
            <p>&copy;{year} jessica s. ries</p>
        </footer>
    )
}

export default Footer