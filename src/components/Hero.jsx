import { useTranslation } from 'react-i18next'

function Hero() {
  const { t } = useTranslation()

  return (
    <section href="#home">
      <p>{t('hero.portfolio')}</p>
      <h1>{t('hero.name')}</h1>
      <h2>{t('hero.role')}</h2>
      <p>{t('hero.description')}</p>
      <p>{t('hero.availability')}</p>

      <div>
        <a href="#contact">
          {t('hero.contact')}
        </a>

        <a href="/cv/Diana-Cruz-CV-ES.pdf" download>
          {t('hero.downloadCV')}
        </a>
      </div>
      <div>
        <a
          href="mailto:dianacruzd01@outlook.com"
          target="_blank"
          rel="noreferrer"
        >
          Email
        </a>

        <a
          href="www.linkedin.com/in/diana-cd"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>

        <a
          href="https://github.com/dianacd123"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
      </div>
    </section>
  )
}

export default Hero