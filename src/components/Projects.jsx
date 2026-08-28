import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import '../styles/Projects.css'

function Projects() {
    const { t } = useTranslation()

    const projects = [
        {
            id: 'digicoon',
            name: 'digiCoon. building things',
            tech: 'react · vite · css',
            link: 'https://github.com/digiCoon/website'
        },
        {
            id: 'measy',
            name: 'measy',
            tech: 'flask · sqlalchemy · sqlite · bootstrap',
            link: 'https://github.com/digiCoon/measy'
        },
        {
            id: 'todo-list',
            name: 'todo-list',
            tech: 'python',
            link: 'https://github.com/digiCoon/todo-list'
        },
        {
            id: 'lottoziehung',
            name: 'lottoZiehung',
            tech: 'java',
            link: 'https://github.com/digiCoon/lottoZiehung'
        }
    ]

    const [activeId, setActiveId] = useState(projects[0].id)
    const active = projects.find(p => p.id === activeId)

    return (
        <section id="projects">
            <h2>{t('projects.heading')}</h2>
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
                        <p>{t(`projects.${active.id}.description`)}</p>
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