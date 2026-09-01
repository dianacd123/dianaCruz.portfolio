import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

function Navbar() {
  const { t, i18n } = useTranslation()
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') || 'light'
  )
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])
  const changeLanguage = (language) => {
    i18n.changeLanguage(language)
    localStorage.setItem('language', language)
  }
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'

    document.body.classList.add('theme-transition')

    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    document.documentElement.setAttribute('data-theme', newTheme)

    setTimeout(() => {
      document.body.classList.remove('theme-transition')
    }, 1000)
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
        <button
          type="button"
          className="language-toggle"
          onClick={() =>
            changeLanguage(i18n.language === 'es' ? 'en' : 'es')
          }
          aria-label="Cambiar idioma"
        >
          <span className="language-option">ES</span>

          <span
            className={`language-thumb ${i18n.language === 'en' ? 'language-thumb--right' : ''
              }`}
          />

          <span className="language-option">EN</span>
        </button>

        <button
          type="button"
          onClick={toggleTheme}
          aria-label={theme === 'light' ? 'Activar modo oscuro' : 'Activar modo claro'}
        >
          {theme === 'light' ? '☾' : '☀'}
        </button>
      </div>
    </nav>
  )
}

export default Navbar