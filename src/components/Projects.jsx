import './Projects.css'

function Projects() {
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

    return (
        <section id="projects">
            {projects.map((project, index) => (
                <div key={index} className="project-item">
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                    <span className="project-tech">{project.tech}</span>
                    <p>{project.link && (
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                            github ↗
                        </a>
                    )}</p>
                </div>
            ))}
        </section>
    )
}

export default Projects