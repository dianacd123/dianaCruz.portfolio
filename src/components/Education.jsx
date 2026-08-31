import { useTranslation } from 'react-i18next'

function Education() {
  const { t } = useTranslation()

  const education = t('education.items', {
    returnObjects: true
  })

  return (
    <section>
      <h2>{t('sections.education')}</h2>

      {education.map((item) => (
        <article key={item.id}>
          <h3>{item.degree}</h3>
          <p>{item.institution}</p>
          <p>{item.period}</p>
          <p>{item.status}</p>
        </article>
      ))}
    </section>
  )
}

export default Education