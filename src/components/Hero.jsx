import { useTranslation } from 'react-i18next'
import {
  Briefcase,
  Mail,
  Download,
  Linkedin,
  Github
} from 'pixelarticons/react'

import dianaPhoto from '../assets/images/diana.png'

function Hero() {
  const { t } = useTranslation()

  return (
    <section id="home" className="container hero">
      <div className="hero-content">
        <p>{t('hero.portfolio')}</p>

        <h1 className="hero-name">
          {t('hero.name')}
        </h1>

        <h2>{t('hero.role')}</h2>

        <p>{t('hero.description')}</p>

       <p className="hero-availability">
  <Briefcase />
  {t('hero.availability')}
</p>

        <div className="hero-actions">

          <span className="pixel-button-wrapper">
            <a
              href="#contact"
              className="pixel-button"
            >
              <Mail />
              {t('hero.contact')}
            </a>
          </span>

          <details className="cv-download">
            <summary className="pixel-button-wrapper">
              <span className="pixel-button">
                <Download />
                {t('hero.downloadCV')}
              </span>
            </summary>

            <div className="cv-download-menu">
              <a
                href="/cv/Diana-Cruz-CV-ES.pdf"
                download
              >
                Español
              </a>

              <a
                href="/cv/Diana-Cruz-CV-EN.pdf"
                download
              >
                English
              </a>
            </div>
          </details>

        </div>

        <div className="hero-socials">

          <a
            href="https://www.linkedin.com/in/diana-cd"
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin />
            
          </a>

          <a
            href="https://github.com/dianacd123"
            target="_blank"
            rel="noreferrer"
          >
            <Github />
            
          </a>
        </div>
      </div>

      <div className="hero-image">
        <img
          src={dianaPhoto}
          alt="Diana Cruz Delgado"
          className="hero-photo"

        />
      </div>
    </section>
  )
}

export default Hero