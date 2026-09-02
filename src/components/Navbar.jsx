import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

function Navbar() {
  const { t, i18n } = useTranslation()
  const [menuOpen, setMenuOpen] = useState(false)
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') || 'light'
  )

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }
  const closeMenu = () => {
    setMenuOpen(false)
  }

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
    <>
      <nav className="navbar">
        <div className="navbar-container container">

          <a href="#home" className="navbar-brand">
            DianaCD
          </a>

          <ul
            id="navbar-links"
            className={`navbar-links ${menuOpen ? 'navbar-links--open' : ''
              }`}
          >
            <li>
              <a href="#about" onClick={closeMenu}>
                {t('nav.about')}
              </a>
            </li>

            <li>
              <a href="#projects" onClick={closeMenu}>
                {t('nav.projects')}
              </a>
            </li>

            <li>
              <a href="#experience" onClick={closeMenu}>
                {t('nav.experience')}
              </a>
            </li>

            <li>
              <a href="#contact" onClick={closeMenu}>
                {t('nav.contact')}
              </a>
            </li>
          </ul>

          <div className="navbar-actions">
            <button
              type="button"
              className="language-toggle"
              onClick={() =>
                changeLanguage(
                  i18n.language === 'es' ? 'en' : 'es'
                )
              }
              aria-label="Cambiar idioma"
            >
              <span className="language-option">ES</span>

              <span
                className={`language-thumb ${i18n.language === 'en'
                    ? 'language-thumb--right'
                    : ''
                  }`}
              />

              <span className="language-option">EN</span>
            </button>

            <button
              type="button"
              onClick={toggleTheme}
              aria-label={
                theme === 'light'
                  ? 'Activar modo oscuro'
                  : 'Activar modo claro'
              }
            >
              {theme === 'light' ? '☾' : '☀'}
            </button>
          </div>

          <button
            type="button"
            className="navbar-toggle"
            onClick={toggleMenu}
            aria-expanded={menuOpen}
            aria-controls="navbar-links"
            aria-label={
              menuOpen
                ? 'Cerrar menú de navegación'
                : 'Abrir menú de navegación'
            }
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

        </div>
      </nav>

      {menuOpen && (
        <div
          className="navbar-overlay"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}
    </>
  )
}

export default Navbar