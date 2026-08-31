import { useTranslation } from 'react-i18next'

function ProjectCard({ project, index }) {
  const { t } = useTranslation()

  const projectText = t(`projects.items.${index}`, {
    returnObjects: true
  })

  return (
    <article>
      <h3>{projectText.title}</h3>
      <p>{projectText.type}</p>
      <p>{projectText.role}</p>
      <p>{projectText.period}</p>
      <p>{projectText.description}</p>

      <ul>
        {project.technologies.map((technology) => (
          <li key={technology}>{technology}</li>
        ))}
      </ul>
    </article>
  )
}

export default ProjectCard