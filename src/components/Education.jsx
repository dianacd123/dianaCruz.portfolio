import { useTranslation } from 'react-i18next'

function Education() {
  const { t } = useTranslation()

  const education = t('education.items', {
    returnObjects: true
  })

  const courses = t('courses.items', {
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

      <div>
        <h3>{t('courses.title')}</h3>

        <ul>
          {courses.map((course, index) => (
            <li key={index}>{course}</li>
          ))}
        </ul>
      </div>

      <div>
        <h3>{t('languages.title')}</h3>
        <p>{t('languages.english')}</p>
      </div>
    </section>
  )
}

export default Education