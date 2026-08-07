import './Hero.css'
import loading from '../assets/loading-bar.png'

function Hero() {
    return (
        <section id="hero">
            <h1>jessica s. ries</h1>
            <p>fachinformatikerin anwendungsentwicklung</p>
            <div className="loading-bar">
                <div className="loading-bar-track">
                    <div className="loading-bar-fill">
                        <span className="loading-bar-text">loading...</span>
                    </div>
                </div>
            </div>
            <div className="tagline">
                <p>raccoon at heart, nerd by choice</p>
                <p>building things · breaking things · fixing things</p>
            </div>
        </section>
    )
}

export default Hero