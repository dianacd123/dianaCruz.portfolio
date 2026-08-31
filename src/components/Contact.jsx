import { useTranslation } from 'react-i18next'

function Contact() {
  const { t } = useTranslation()

  return (
    <section id="contact">
      <h2>{t('sections.contact')}</h2>

      <p>{t('contact.intro')}</p>

      <form>
        <div>
          <label htmlFor="name">{t('contact.name')}</label>
          <input
            type="text"
            id="name"
            name="name"
          />
        </div>

        <div>
          <label htmlFor="email">{t('contact.email')}</label>
          <input
            type="email"
            id="email"
            name="email"
          />
        </div>

        <div>
          <label htmlFor="message">{t('contact.message')}</label>
          <textarea
            id="message"
            name="message"
          />
        </div>

        <button type="submit">
          {t('contact.send')}
        </button>
      </form>
    </section>
  )
}

export default Contact