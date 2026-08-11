import { useState } from 'react'
import './Contact.css'

function Contact() {
    const handleSubmit = (e) => {
        e.preventDefault()
        if (trash_panda_trap) {
            return  // Bot detected, form will not be submitted
        }
        console.log({name, gender, email, message})
    }

    const [name, setName] = useState('')
    const [gender, setGender] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')
    const [trash_panda_trap, setTrash_panda_trap] = useState('')

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
                    <fieldset className="gender-row">
                        <legend>geschlecht</legend>
                        <label><input type="radio" name="gender" value="male" checked={gender === 'male'} onChange={(e) => setGender(e.target.value)} required />m</label>
                        <label><input type="radio" name="gender" value="female" checked={gender === 'female'} onChange={(e) => setGender(e.target.value)} required />w</label>
                        <label><input type="radio" name="gender" value="divers" checked={gender === 'divers'} onChange={(e) => setGender(e.target.value)} required />d</label>
                    </fieldset>
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
                <input type="submit" value="abschicken" />
            </form>
        </section>
    )
}

export default Contact