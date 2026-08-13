import { useState } from 'react'
import './Contact.css'

function Contact() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')
    const [trash_panda_trap, setTrash_panda_trap] = useState('')
    const [status, setStatus] = useState(null) // null | 'sending' | 'success' | 'error'

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (trash_panda_trap) {
            return // Bot detected, form will not be submitted
        }

        setStatus('sending')

        try {
            const response = await fetch('/send-mail.php', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, subject, message, trash_panda_trap })
            })

            const result = await response.json()

            if (result.success) {
                setStatus('success')
                setName('')
                setEmail('')
                setSubject('')
                setMessage('')
            } else {
                setStatus('error')
            }
        } catch (error) {
            setStatus('error')
        }
    }


    return (
        <section id="contact">
            <h2>#kontakt</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-top">
                    <label>name
                        <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} required />
                    </label>
                    <label>e-mail
                        <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </label>
                </div>
                <label>betreff
                    <input type="text" name="subject" value={subject} onChange={(e) => setSubject(e.target.value)} required />
                </label>
                <label>nachricht
                    <textarea name="message" rows="5" value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
                </label>
                <div style={{ display: 'none' }}>
                    <label>trash panda trap</label>
                    <input name="trash_panda_trap" tabIndex="-1" autoComplete="off" value={trash_panda_trap} onChange={(e) => setTrash_panda_trap(e.target.value)} />
                </div>
                <input type="submit" value={status === 'sending' ? 'wird gesendet...' : 'abschicken'} disabled={status === 'sending'} />

                {status === 'success' && <p className="form-status success">nachricht gesendet, danke!</p>}
                {status === 'error' && <p className="form-status error">etwas ist schiefgelaufen, bitte versuch es später nochmal.</p>}
            </form>
        </section>
    )
}

export default Contact