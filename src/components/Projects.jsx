import './Projects.css'

function Projects() {
    const projects = [
        {
            name: 'digiCoon. building things',
            description: 'Diese eigene Portfolio-Seite, gebaut mit React & Vite.',
            tech: 'React · Vite · CSS',
            link: 'https://github.com/digiCoon/website'
        },
        {
            name: 'measy',
            description: 'App zum unkomplizierten Verabreden mit Freunden. Teamprojekt, meine Rolle: Datenbank.',
            tech: 'Python',
            link: 'https://github.com/digiCoon/measy'
        },
        {
            name: 'todo-list',
            description: 'To-do-App mit Unterstützung für wiederkehrende Aufgaben.',
            tech: 'Python',
            link: 'https://github.com/digiCoon/todo-list'
        },
        {
            name: 'lottoZiehung',
            description: 'Konsolenprogramm, das eine Lottoziehung simuliert und die Trefferzahl auswertet.',
            tech: 'Java',
            link: 'https://github.com/digiCoon/lottoZiehung'
        }
    ]

    return (
        <section id="projects">
            {projects.map((project, index) => (
                <div key={index} className="project-item">
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                    <span className="project-tech">{project.tech}</span>
                    <p>{project.link && (
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                            GitHub ↗
                        </a>
                    )}</p>
                </div>
            ))}
        </section>
    )
}

export default Projects