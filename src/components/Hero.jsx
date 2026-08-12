import './Hero.css'
import digicoonLogo from '../assets/digicoon-logo.webp'

function Hero() {
    return (
        <section id="hero">
            <div className="hero-header">
                <img src={digicoonLogo} alt="digiCoon Logo" className="hero-logo" />
                <h1>jessica<br />ries</h1>
                <div id="job-title">
                    <h2>fachinformatikerin<br />anwendungsentwicklung</h2>
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
                </div>
            </div>
        </section>
    )
}

export default Hero