import { useTranslation } from 'react-i18next'

function About() {
  const { t } = useTranslation()

  return (
    <section id="about" className="container about">
      <h2>{t('about.title')}</h2>

      <div className="about-content">
        <p>{t('about.paragraph1')}</p>
        <p>{t('about.paragraph2')}</p>
      </div>
    </section>
  )
}

export default About