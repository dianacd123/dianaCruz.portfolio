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
    <section className="container education">
      <h2>{t('sections.education')}</h2>

      <div className="education-grid">
        {education.map((item) => (
          <article
            className="education-item"
            key={item.id}
          >
            <h3>{item.degree}</h3>
            <p className="education-institution">
              {item.institution}
            </p>
            <p className="education-period">
              {item.period}
            </p>
            <p className="education-status">
              {item.status}
            </p>
          </article>
        ))}
      </div>

      <div className="education-extra">
        <div className="courses">
          <h3>{t('courses.title')}</h3>

          <ul>
            {courses.map((course, index) => (
              <li key={index}>
                {course}
              </li>
            ))}
          </ul>
        </div>

        <div className="languages">
          <h3>{t('languages.title')}</h3>
          <p>{t('languages.english')}</p>
        </div>
      </div>
    </section>
  )
}

export default Education