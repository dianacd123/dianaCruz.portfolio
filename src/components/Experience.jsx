import { useTranslation } from 'react-i18next'

function Experience() {
  const { t } = useTranslation()

  const experience = t('experience.items', {
    returnObjects: true
  })

  return (
    <section>
      <h2>{t('sections.experience')}</h2>

      {experience.map((job) => (
        <article key={job.id}>
          <h3>{job.role}</h3>
          <p>{job.company}</p>
          <p>{job.period}</p>

          <ul>
            {job.description.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </article>
      ))}
    </section>
  )
}

export default Experience