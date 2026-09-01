import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { useTranslation } from 'react-i18next'

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
    <section id="contact">
      <h2>{t('sections.contact')}</h2>

      <p>{t('contact.intro')}</p>

      <form ref={form} onSubmit={sendEmail}>
        <div>
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

        <div>
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

        <div>
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

        <button
          type="submit"
          disabled={isSending}
        >
          {isSending
            ? t('contact.sending')
            : t('contact.send')
          }
        </button>
      </form>

      {status === 'success' && (
        <p>{t('contact.success')}</p>
      )}

      {status === 'error' && (
        <p>{t('contact.error')}</p>
      )}
    </section>
  )
}

export default Contact