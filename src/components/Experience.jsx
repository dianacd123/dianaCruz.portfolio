import { useTranslation } from 'react-i18next'

function Experience() {
  const { t } = useTranslation()

  const experience = t('experience.items', {
    returnObjects: true
  })

  return (
    <section id="experience" className="container experience">
      <h2>{t('sections.experience')}</h2>

      <div className="experience-list">
        {experience.map((job) => (
          <article className="experience-item" key={job.id}>
            <div className="experience-marker"></div>

            <div className="experience-content">
              <h3>{job.role}</h3>
              <p className="experience-company">{job.company}</p>
              <p className="experience-period">{job.period}</p>

              <ul>
                {job.description.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Experience