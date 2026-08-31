import { useTranslation } from 'react-i18next'

function About() {
  const { t } = useTranslation()

  return (
    <section id="about">
      <h2>{t('about.title')}</h2>
      <p>{t('about.paragraph1')}</p>
      <p>{t('about.paragraph2')}</p>
    </section>
  )
}

export default About