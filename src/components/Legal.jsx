import { useTranslation } from 'react-i18next'
import '../styles/Legal.css'
import { Link } from 'react-router-dom'
import DatenschutzDE from './legal/DatenschutzDE'
import DatenschutzEN from './legal/DatenschutzEN'

function ObfuscatedAddress() {
    const street = ['Feld', 'straße', ' 21'].join('')
    const city = ['122', '07', ' Berlin'].join('')
    return (
        <>
            {street}<br />
            {city}
        </>
    )
}

function ObfuscatedEmail() {
    const user = 'kontakt'
    const domain = ['js-ries', 'de'].join('.')
    return <span>{user}@{domain}</span>
}

function Legal() {
    const { t, i18n } = useTranslation()
    const homePath = i18n.language === 'en' ? '/en' : '/'

    return (
        <section id="legal">
            <h1>{t('legal.heading')}</h1>
            <Link to={homePath}>{t('common.backHome')}</Link>

            <h2 id="impressum">Impressum</h2>
            {i18n.language === 'en' && <p><em>This section is only available in German for legal reasons. The <a href="#privacy-policy">privacy policy</a> below is available in English.</em></p>}

            <h3 id="m46">Diensteanbieter</h3>
            <p>
                Jessica S. Ries<br />
                <ObfuscatedAddress />
                <br />
                Deutschland
            </p>

            <h3 id="m56">Kontaktmöglichkeiten</h3>
            <p>
                E-Mail-Adresse: <ObfuscatedEmail />
            </p>
            <p>
                Kontaktformular: <Link to={homePath}>auf der Startseite</Link>
            </p>

            <h3 id="m5234">Vorbehalt der Nutzung für Text und Data Mining</h3>
            <p>Vorbehalt der Nutzung für Text und Data Mining: Der Inhaber dieser Website gestattet die Nutzung oder das
                Herunterladen von Inhalten dieser Website durch Dritte für die Entwicklung, das Training oder den Betrieb
                von künstlicher Intelligenz oder anderen maschinellen Lernsystemen ("Text und Data Mining") ausschließlich
                mit ausdrücklicher schriftlicher Zustimmung des Inhabers. Ohne eine solche Zustimmung ist es untersagt, die
                Inhalte für Text und Data Mining zu verwenden. Dies gilt auch, wenn auf der Website keine Meta-Angaben
                vorhanden sind, die entsprechende Verfahren aussperren, und selbst dann, wenn Bots, die den Zweck haben,
                die Website zu Zwecken des Text und Data Mining auszulesen, nicht ausgesperrt werden.</p>
            <p>Dieser Nutzungsvorbehalt ist zusätzlich in maschinenlesbarer Form in der{' '}
                <a href="/robots.txt" target="_blank" rel="noopener noreferrer">robots.txt</a> dieser Website
                hinterlegt (§ 44b Abs. 3 UrhG).</p>

            <p className="seal">
                <a href="https://datenschutz-generator.de/"
                   title="Rechtstext von Dr. Schwenke - für weitere Informationen bitte anklicken."
                   target="_blank" rel="noopener noreferrer nofollow">
                    Erstellt mit kostenlosem Datenschutz-Generator.de von Dr. Thomas Schwenke
                </a>
            </p>

            {i18n.language === 'en' ? <DatenschutzEN /> : <DatenschutzDE />}

            <br />
            <Link to={homePath}>{t('common.backHome')}</Link>
        </section>
    )
}

export default Legal
