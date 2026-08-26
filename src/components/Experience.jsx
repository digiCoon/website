import '../styles/Experience.css'

function Experience() {
    const entries = [
        {
            type: 'education',
            title: 'fachinformatikerin anwendungsentwicklung',
            company: '//umschulung @damago gmbh',
            period: 'jul 25 - heute',
            details: ['in progress -> ihk-abschluss 27 ', 'java, python, webentwicklung, datenbanken, linux & it-security']
        },
        {
            type: 'education',
            title: 'fullstack web & app development',
            company: '//bootcamp @wbs coding school',
            period: 'mai 24 - sep 24',
            details: ['17-wöchiges intensiv-bootcamp w/ zertifikat', 'javascript/react, node.js, sql/nosql, restful apis, git & agile methoden']
        },
        {
            type: 'job',
            title: 'digital marketing & adtech',
            company: '@[retresco, weventure, roobeo, viafon]: gmbh',
            period: 'aug 17 - feb 24',
            details: ['seo- & sea-strategie (inhouse & agenturseitig)', 'tracking-implementierung & reporting', 'kundenbetreuung & workshops']
        },
        {
            type: 'education',
            title: 'it-system kauffrau',
            company: '//ausbildung @arktis gmbh',
            period: 'sep 15 - jul 17',
            details: ['verkürzt: 2 jahre w/ ihk-abschluss', 'it-vertrieb & it-systemlösungen (tk-anlagen)']
        }
    ]

    return (
        <section id="experience">
            <h2>#erfahrung</h2>
            <div className="experience-zigzag">
                {entries.map((entry, index) => (
                    <div key={index} className={`zigzag-item ${index % 2 === 0 ? 'side-right' : 'side-left'}`}>
                        <div className="zigzag-content">
                            <span className="zigzag-period">{entry.period}</span>
                            <span className="zigzag-title">{entry.title}</span>
                            <span className="zigzag-company">{entry.company}</span>
                            <ul className="zigzag-details">
                                {entry.details.map((detail, i) => (
                                    <li key={i}>{detail}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Experience