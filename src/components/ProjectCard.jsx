import { useTranslation } from 'react-i18next'

function ProjectCard({ project, index }) {
  const { t } = useTranslation()

  const projectText = t(`projects.items.${index}`, {
    returnObjects: true
  })

  return (
    <article>
      <img
        src={project.image}
        alt={projectText.title}
      />

      <h3>{projectText.title}</h3>
      <p>{projectText.role}</p>
      <p>{projectText.description}</p>

      <ul>
        {project.technologies.map((technology) => (
          <li key={technology}>{technology}</li>
        ))}
      </ul>

      <div>
        {project.repository && (
          <a
            href={project.repository}
            target="_blank"
            rel="noreferrer"
            aria-label={`GitHub - ${projectText.title}`}
          >
            GitHub
          </a>
        )}

        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            aria-label={`Demo - ${projectText.title}`}
          >
            Demo
          </a>
        )}
      </div>
    </article>
  )
}

export default ProjectCard