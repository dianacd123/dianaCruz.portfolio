import { useTranslation } from 'react-i18next'

function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="footer">
      <div className="container footer-content">
        <div>
          <p>{t('footer.text')}</p>
        </div>

        <div className="footer-links">
          <a href="mailto:dianacruzd01@outlook.com">
            Email
          </a>

          <a
            href="https://www.linkedin.com/in/diana-cd"
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

          <a
            href="/cv/Diana-Cruz-CV-ES.pdf"
            download
          >
            CV
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer