import './Footer.css'
import { FaGithub, FaLinkedin, FaXing } from 'react-icons/fa'

function Footer() {
    const year = new Date().getFullYear()

    return (
        <footer>
            <div className="footer-social-media">
                <a href="https://www.linkedin.com/in/jessica-ries/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                    <FaLinkedin />
                </a>
                <a href="https://github.com/digiCoon" target="_blank" rel="noopener noreferrer" title="GitHub">
                    <FaGithub />
                </a>
                <a href="https://www.xing.com/profile/Jessica_Ries3" target="_blank" rel="noopener noreferrer" title="Xing">
                    <FaXing />
                </a>
            </div>
            <div className="footer-legal">
                <a href="/impressum">Impressum & Datenschutz</a>
            </div>
            <p>&copy;{year} Jessica S. Ries</p>
        </footer>
    )
}

export default Footer