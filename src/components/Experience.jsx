import './Experience.css'

function Experience() {
    const entries = [
        {
            type: 'education',
            title: 'Fachinformatikerin Anwendungsentwicklung',
            company: 'damago GmbH',
            period: 'Jul 25 - Heute',
            details: ['Umschulung mit Schwerpunkt Python & Java', 'Webentwicklung, Datenbanken, Linux & IT-Security']
        },
        {
            type: 'job',
            title: 'Digital Marketing Managerin',
            company: 'Retresco GmbH',
            period: 'Jan 23 - Feb 24',
            details: ['Digital-Performance-Marketing & SEO-Strategie', 'Paid Ads (Google, Microsoft & LinkedIn)']
        },
        {
            type: 'job',
            title: 'Technical Digital Marketing Managerin',
            company: 'WEVENTURE GmbH',
            period: 'Mai 20 - Dez 22',
            details: ['SEO-Kundenbetreuung & Web Analytics', 'SEA-Kundenbetreuung (Google & Microsoft Ads)']
        },
        {
            type: 'job',
            title: 'Marketing Managerin',
            company: 'ROOBEO GmbH',
            period: 'Okt 18 - Feb 20',
            details: ['Marketingstrategie, Webpräsenz (WordPress) & SEO', 'Paid Ads, Newsletter & Social Media']
        },
        {
            type: 'job',
            title: 'Online Marketing Managerin',
            company: 'Viafon GmbH',
            period: 'Aug 17 - Sep 18',
            details: ['Neukundenakquise & Google/Facebook Ads', 'Google AdWords Kundenbetreuung i. A. Google Inc.']
        },
        {
            type: 'education',
            title: 'IT-System Kauffrau',
            company: 'IHK',
            period: 'Sep 15 - Jul 17',
            details: ['IHK-Abschluss, verkürzte Ausbildung (2 Jahre)', 'Schwerpunkt IT-Vertrieb & IT-Systemlösungen (Telekommunikationsanlagen)']
        },
        {
            type: 'job',
            title: 'Customer Support & Retention',
            company: 'Perry & Knorr Berlin GmbH',
            period: 'Sep 13 - Mai 15',
            details: ['Kundenbetreuung und Bestandskundenmanagement im Customer-Service-Bereich']
        },
        {
            type: 'job',
            title: 'Studentische Hilfskraft',
            company: 'Forschungsgruppe Wahlen e.V.',
            period: 'Jan 08 - Jul 13',
            details: ['Office Management', 'Mitarbeit an der Produktion des ZDF-Politbarometers']
        },
        {
            type: 'education',
            title: 'BWL',
            company: 'Universität Mannheim',
            period: 'Apr 06 - Jul 13',
            details: ['Studium der Betriebswirtschaftslehre']
        },
        {
            type: 'job',
            title: 'Physio- und Lymphtherapeutin',
            company: 'Krankengymnastik Thiel',
            period: 'Mär 06 - Mär 07',
            details: ['Physiotherapeutische Behandlung und Lymphdrainage in der Praxis "Krankengymnastik Thiel"']
        },
        {
            type: 'education',
            title: 'Physiotherapeutin',
            company: 'Schule f. Physiotherapeuten Mannheim',
            period: 'Nov 02 - Okt 05',
            details: ['Staatsexamen zur Physiotherapeutin']
        }
    ]
    return (
        <section id="experience">
            <div className="experience-grid">
                {entries.map((entry, index) => (
                    <div key={index} className={`flip-card ${entry.type}`}>
                        <div className="flip-card-inner">
                            <div className="card-front">
                                <h3>{entry.company}</h3>
                                <p>{entry.title}</p>
                                <span>{entry.period}</span>
                            </div>
                            <div className="card-back">
                                <ul>
                                    {entry.details.map((detail, i) => (
                                        <li key={i}>{detail}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Experience