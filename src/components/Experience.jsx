import { useTranslation } from 'react-i18next'
import '../styles/Experience.css'

function Experience() {
    const { t } = useTranslation()

    const entries = [
        { type: 'education', id: 'damago' },
        { type: 'education', id: 'wbs' },
        { type: 'job', id: 'marketing' },
        { type: 'education', id: 'arktis' }
    ]

    return (
        <section id="experience">
            <h2>{t('experience.heading')}</h2>
            <div className="experience-zigzag">
                {entries.map((entry, index) => {
                    const details = t(`experience.${entry.id}.details`, { returnObjects: true })
                    return (
                        <div key={index} className={`zigzag-item ${index % 2 === 0 ? 'side-right' : 'side-left'}`}>
                            <div className="zigzag-content">
                                <span className="zigzag-period">{t(`experience.${entry.id}.period`)}</span>
                                <span className="zigzag-title">{t(`experience.${entry.id}.title`)}</span>
                                <span className="zigzag-company">{t(`experience.${entry.id}.company`)}</span>
                                <ul className="zigzag-details">
                                    {details.map((detail, i) => (
                                        <li key={i}>{detail}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Experience