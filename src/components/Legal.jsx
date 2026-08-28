import { useTranslation } from 'react-i18next'
import '../styles/Legal.css'
import { Link } from 'react-router-dom'
import DatenschutzDE from './legal/DatenschutzDE'
import DatenschutzEN from './legal/DatenschutzEN'

function ObfuscatedAddress() {
    const street = 'Feldstraße 21'
    const city = '12207 Berlin'
    return (
        <>
            {street}<br />
            {city}
        </>
    )
}

function ObfuscatedEmail() {
    const user = 'kontakt'
    const domain = 'js-ries.de'
    return <span>{user}@{domain}</span>
}

function Legal() {
    const { t, i18n } = useTranslation()

    return (
        <section id="legal">
            <h1>Impressum & Datenschutz</h1>
            <Link to={i18n.language === 'en' ? '/en' : '/'}>{t('common.backHome')}</Link>
            <h2 id="impressum">Impressum</h2>
            {i18n.language === 'en' && <p><em>This section is only available in German for legal reasons.</em></p>}

            <h3>Angaben gemäß § 5 TMG und § 18 Abs. 2 MStV</h3>
            <p>
                Jessica S. Ries<br />
                <ObfuscatedAddress />
                <br />
                Deutschland
            </p>

            <h3>Kontakt</h3>
            <p>
                E-Mail: <ObfuscatedEmail />
            </p>

            <h3>Haftungsausschluss</h3>
            <h4>Haftung für Inhalte</h4>
            <p>Die Inhalte dieser Website wurden mit größtmöglicher Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit
                und Aktualität der Inhalte kann jedoch keine Gewähr übernommen werden. Als Diensteanbieterin bin ich gemäß §
                7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis
                10 TMG bin ich jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen
                oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.</p>

            <h4>Haftung für Links</h4>
            <p>Diese Website enthält gegebenenfalls Links zu externen Websites Dritter, auf deren Inhalte kein Einfluss
                besteht. Deshalb kann für diese fremden Inhalte auch keine Gewähr übernommen werden. Für die Inhalte der
                verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.</p>

            <h4>Urheberrecht</h4>
            <p>Die durch mich erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die
                Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des
                Urheberrechtes bedürfen der schriftlichen Zustimmung der jeweiligen Autorin bzw. des jeweiligen Erstellers.</p>

            {i18n.language === 'en' ? <DatenschutzEN /> : <DatenschutzDE />}

            < br/>
            <Link to={i18n.language === 'en' ? '/en' : '/'}>{t('common.backHome')}</Link>
        </section>
    )
}

export default Legal