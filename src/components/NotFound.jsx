import { Link } from 'react-router-dom'
import raccoonTrash from '../assets/raccoon-trash-404.webp'
import './NotFound.css'

function NotFound() {
    return (
        <section id="not-found">
            <div>
                <h1>404</h1>
                <p>diese seite hat sich in den mülleimer verkrochen.</p>
                <Link to="/">zurück zur startseite</Link>
            </div>
            <img src={raccoonTrash} alt="" className="not-found-image" />
        </section>
    )
}

export default NotFound