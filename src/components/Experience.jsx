import './Experience.css'

function Experience() {
    const entries = [
        {
            type: 'education',
            title: 'fachinformatikerin anwendungsentwicklung',
            company: 'damago gmbh',
            period: 'jul 25 - heute',
            details: ['umschulung mit schwerpunkt python & java', 'webentwicklung, datenbanken, linux & it-security']
        },
        {
            type: 'education',
            title: 'fullstack web & app development',
            company: 'wbs coding school',
            period: 'mai 24 - sep 24',
            details: ['17-wöchiges intensiv-bootcamp', 'javascript/react, node.js, sql/nosql, restful apis, git & agile methoden']
        },
        {
            type: 'job',
            title: 'digital marketing managerin',
            company: 'retresco gmbh',
            period: 'jan 23 - feb 24',
            details: ['digital-performance-marketing & seo-strategie', 'paid ads (google, microsoft & linkedin)']
        },
        {
            type: 'job',
            title: 'technical digital marketing managerin',
            company: 'weventure gmbh',
            period: 'mai 20 - dez 22',
            details: ['seo-kundenbetreuung & web analytics', 'sea-kundenbetreuung (google & microsoft ads)']
        },
        {
            type: 'job',
            title: 'marketing managerin',
            company: 'roobeo gmbh',
            period: 'okt 18 - feb 20',
            details: ['marketingstrategie, webpräsenz (wordpress) & seo', 'paid ads, newsletter & social media']
        },
        {
            type: 'job',
            title: 'online marketing managerin',
            company: 'viafon gmbh',
            period: 'aug 17 - sep 18',
            details: ['neukundenakquise & google/facebook ads', 'google adwords kundenbetreuung i. a. google inc.']
        },
        {
            type: 'education',
            title: 'it-system kauffrau',
            company: 'arktis gmbh',
            period: 'sep 15 - jul 17',
            details: ['ihk-abschluss, verkürzte ausbildung (2 jahre)', 'schwerpunkt it-vertrieb & it-systemlösungen (telekommunikationsanlagen)']
        },
        {
            type: 'job',
            title: 'customer support & retention',
            company: 'perry & knorr berlin gmbh',
            period: 'sep 13 - mai 15',
            details: ['kundenbetreuung und bestandskundenmanagement im customer-service-bereich']
        },
        {
            type: 'job',
            title: 'studentische hilfskraft',
            company: 'forschungsgruppe wahlen e.v.',
            period: 'jan 08 - jul 13',
            details: ['office management', 'mitarbeit an der produktion des zdf-politbarometers']
        },
        {
            type: 'education',
            title: 'bwl-studium',
            company: 'universität mannheim',
            period: 'apr 06 - jul 13',
            details: ['studium der betriebswirtschaftslehre (diplom)']
        },
        {
            type: 'job',
            title: 'physio- und lymphtherapeutin',
            company: 'krankengymnastik thiel',
            period: 'mär 06 - mär 07',
            details: ['phyiotherapie und lymphdrainage in der praxis "krankengymnastik thiel"']
        },
        {
            type: 'education',
            title: 'physiotherapeutin',
            company: 'schule f. physiotherapeuten mannheim',
            period: 'nov 02 - okt 05',
            details: ['staatsexamen zur physiotherapeutin']
        }
    ]
    return (
        <section id="experience">
            <div className="experience-grid">
                {entries.map((entry, index) => (
                    <div key={index} className={`flip-card ${entry.type}`}>
                        <div className="flip-card-inner">
                            <div className="card-front">
                                <span className="card-type">{entry.type === 'job' ? 'job' : 'study'}</span>
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