import { useTranslation } from 'react-i18next'
import {
  Github,
  Linkedin,
  Mail
} from 'pixelarticons/react'



function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="footer">
      <div className="container footer-content">
        <div>
          <p>{t('footer.text')}</p>
        </div>

        <div className="footer-links">
          <a
            href="mailto:dianacruzd01@outlook.com"
            aria-label="Email"
          >
            <Mail />
          </a>

          <a
            href="https://www.linkedin.com/in/diana-cd"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin />
          </a>

          <a
            href="https://github.com/dianacd123"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <Github />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer