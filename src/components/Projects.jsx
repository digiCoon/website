import { useState } from 'react'
import { FaGithub } from 'react-icons/fa'
import './Projects.css'

function Projects() {
    const [activeIndex, setActiveIndex] = useState(0)

    const projects = [
        {
            name: 'digiCoon. building things',
            description: 'portfolio-seite, gebaut mit react & vite.',
            tech: 'react · vite · css',
            link: 'https://github.com/digiCoon/website'
        },
        {
            name: 'measy',
            description: 'app zum unkomplizierten verabreden mit freunden. teamprojekt, meine rolle: datenbank.',
            tech: 'python · sqlalchemy',
            link: 'https://github.com/digiCoon/measy'
        },
        {
            name: 'todo-list',
            description: 'to-do-app mit unterstützung für wiederkehrende aufgaben.',
            tech: 'python',
            link: 'https://github.com/digiCoon/todo-list'
        },
        {
            name: 'lottoZiehung',
            description: 'konsolenprogramm, das eine lottoziehung simuliert und die trefferzahl auswertet.',
            tech: 'java',
            link: 'https://github.com/digiCoon/lottoZiehung'
        }
    ]

    const goPrev = () => {
        setActiveIndex((activeIndex - 1 + projects.length) % projects.length)
    }

    const goNext = () => {
        setActiveIndex((activeIndex + 1) % projects.length) % projects.length
    }

    const current = projects[activeIndex]

    return (
        <section id="projects">
            <h2>#projekte</h2>
            <div className="carousel">
                <button className="carousel-arrow" onClick={goPrev} aria-label="vorheriges projekt">‹</button>

                <div className="carousel-card">
                    <h3>
                        <a href={current.link} target="_blank" rel="noopener noreferrer" title="github">
                            {current.name} <FaGithub /> ↗
                        </a>
                    </h3>
                    <p>{current.description}</p>
                    <span className="carousel-tech">{current.tech}</span>
                </div>

                <button className="carousel-arrow" onClick={goNext} aria-label="nächstes projekt">›</button>
            </div>

            <div className="carousel-dots">
                {projects.map((_, index) => (
                    <button
                        key={index}
                        className={`dot ${index === activeIndex ? 'active' : ''}`}
                        onClick={() => setActiveIndex(index)}
                        aria-label={`projekt ${index + 1}`}
                    />
                ))}
            </div>
        </section>
    )
}

export default Projects