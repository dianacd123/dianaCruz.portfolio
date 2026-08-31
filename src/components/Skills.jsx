import { useTranslation } from 'react-i18next'
import { skills } from '../data/skills'

function Skills() {
  const { t } = useTranslation()

  return (
    <section>
      <h2>{t('sections.skills')}</h2>

      <div>
        <h3>{t('skills.frontend')}</h3>
        <ul>
          {skills.frontend.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </div>

      <div>
        <h3>{t('skills.backend')}</h3>
        <ul>
          {skills.backend.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </div>

      <div>
        <h3>{t('skills.databases')}</h3>
        <ul>
          {skills.databases.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </div>

      <div>
        <h3>{t('skills.tools')}</h3>
        <ul>
          {skills.tools.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Skills