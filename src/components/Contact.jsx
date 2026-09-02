import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { useTranslation } from 'react-i18next'

import {
  Github,
  Linkedin,
  Mail
} from 'pixelarticons/react'


import { Send } from 'pixelarticons/react'

function Contact() {
  const { t } = useTranslation()
  const form = useRef()

  const [status, setStatus] = useState('')
  const [isSending, setIsSending] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault()

    setIsSending(true)
    setStatus('')

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        }
      )
      .then(
        () => {
          setStatus('success')
          setIsSending(false)
          form.current.reset()
        },
        (error) => {
          console.log('Error al enviar el mensaje:', error.text)
          setStatus('error')
          setIsSending(false)
        }
      )
  }

  return (
    <section id="contact" className="container contact">
      <div className="contact-info">
        <h2>{t('sections.contact')}</h2>

        <p>{t('contact.intro')}</p>

        <div className="contact-links">

          <a
            href="https://www.linkedin.com/in/diana-cd"
            target="_blank"
            rel="noreferrer"
          >
           <Linkedin></Linkedin>
          </a>

          <a
            href="https://github.com/dianacd123"
            target="_blank"
            rel="noreferrer"
          >
            <Github></Github>
          </a>
        </div>
      </div>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="contact-form"
      >
        <div className="form-group">
          <label htmlFor="name">
            {t('contact.name')}
          </label>

          <input
            type="text"
            id="name"
            name="user_name"
            minLength="2"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">
            {t('contact.email')}
          </label>

          <input
            type="email"
            id="email"
            name="user_email"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">
            {t('contact.message')}
          </label>

          <textarea
            id="message"
            name="message"
            minLength="10"
            required
          />
        </div>

        <span className="pixel-button-wrapper">
          <button
            type="submit"
            className="pixel-button"
            disabled={isSending}
          >
            <Send />
            {isSending
              ? t('contact.sending')
              : t('contact.send')}
          </button>
        </span>

        {status === 'success' && (
          <p className="form-status">
            {t('contact.success')}
          </p>
        )}

        {status === 'error' && (
          <p className="form-status">
            {t('contact.error')}
          </p>
        )}
      </form>
    </section>
  )
}

export default Contact