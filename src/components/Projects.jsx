import { useState } from 'react'
import './Projects.css'

function Projects() {
    const projects = [
        {
            id: 'digicoon',
            name: 'digiCoon. building things',
            description: 'portfolio-seite, gebaut mit react & vite. eigenes design, responsive, mit interaktiven elementen wie diesem terminal.',
            tech: 'react · vite · css',
            link: 'https://github.com/digiCoon/website'
        },
        {
            id: 'measy',
            name: 'measy',
            description: 'app zum unkomplizierten verabreden mit freunden. teamprojekt aus der umschulung, meine rolle: datenbank & backend-logik.',
            tech: 'flask · sqlalchemy · sqlite · bootstrap',
            link: 'https://github.com/digiCoon/measy'
        },
        {
            id: 'todo-list',
            name: 'todo-list',
            description: 'to-do-app mit wiederkehrenden aufgaben. aktuell phase 1 von 7 (cli fertig, persistenz & api als nächstes).',
            tech: 'python',
            link: 'https://github.com/digiCoon/todo-list'
        },
        {
            id: 'lottoziehung',
            name: 'lottoZiehung',
            description: 'konsolenprogramm, das eine lottoziehung simuliert. 6 zahlen ziehen, vergleichen, treffer auswerten.',
            tech: 'java',
            link: 'https://github.com/digiCoon/lottoZiehung'
        }
    ]

    const [activeId, setActiveId] = useState(projects[0].id)
    const active = projects.find(p => p.id === activeId)

    return (
        <section id="projects">
            <h2>#projekte</h2>
            <div className="terminal">
                <div className="terminal-titlebar">
                    <span className="terminal-path">jessica@digicoon:~/projects$</span>
                </div>

                <div className="terminal-body">
                    <div className="terminal-line">
                        <span className="prompt">$</span> ls
                    </div>

                    <div className="terminal-list">
                        {projects.map(p => (
                            <button
                                key={p.id}
                                className={`terminal-item ${p.id === activeId ? 'active' : ''}`}
                                onClick={() => setActiveId(p.id)}
                            >
                                {p.id}
                            </button>
                        ))}
                    </div>

                    <div className="terminal-line">
                        <span className="prompt">$</span> cat {active.id}
                    </div>

                    <div className="terminal-output">
                        <h3>{active.name}</h3>
                        <p>{active.description}</p>
                        <span className="terminal-tech">{active.tech}</span>
                    </div>
                    <div className="terminal-line terminal-link-line">
                        <span className="prompt">$</span> open{' '}
                        <a href={active.link} target="_blank" rel="noopener noreferrer" className="terminal-link">
                            github
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects