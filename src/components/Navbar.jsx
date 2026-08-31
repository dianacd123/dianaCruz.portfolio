import { useTranslation } from 'react-i18next'

function Navbar() {
  const { i18n } = useTranslation()

  const changeLanguage = (language) => {
    i18n.changeLanguage(language)
    localStorage.setItem('language', language)
  }

  return (
    <nav>
      <p>Navbar</p>

      <button onClick={() => changeLanguage('es')}>
        ES
      </button>

      <button onClick={() => changeLanguage('en')}>
        EN
      </button>
    </nav>
  )
}

export default Navbar