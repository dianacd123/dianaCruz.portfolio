import { useTranslation } from 'react-i18next'

function Navbar() {
  const { t, i18n } = useTranslation()

  const changeLanguage = (language) => {
    i18n.changeLanguage(language)
    localStorage.setItem('language', language)
  }

  return (
    <nav>
      <a href="#home">Diana CD</a>

      <ul>
        <li>
          <a href="#about">{t('nav.about')}</a>
        </li>

        <li>
          <a href="#projects">{t('nav.projects')}</a>
        </li>

        <li>
          <a href="#experience">{t('nav.experience')}</a>
        </li>

        <li>
          <a href="#contact">{t('nav.contact')}</a>
        </li>
      </ul>

      <div>
        <button onClick={() => changeLanguage('es')}>
          ES
        </button>

        <button onClick={() => changeLanguage('en')}>
          EN
        </button>
      </div>
    </nav>
  )
}

export default Navbar