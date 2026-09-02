import { useTranslation } from 'react-i18next'

function ProjectCard({ project, index }) {
  const { t } = useTranslation()

  const projectText = t(`projects.items.${index}`, {
    returnObjects: true
  })

  return (
    <article className="project-card">
      <div className="project-image-wrapper">
        <img
          src={project.imagePixel}
          alt={projectText.title}
          className="project-image project-image-pixel"
        />

        <img
          src={project.imageNormal}
          alt=""
          className="project-image project-image-normal"
        />
      </div>

      <div className="project-content">
        <h3>{projectText.title}</h3>
        <p className="project-role">{projectText.role}</p>
        <p>{projectText.description}</p>

        <ul className="project-technologies">
          {project.technologies.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>

        <div className="project-links">
          {project.repository && (
            <span className="pixel-button-wrapper">
              <a
                href={project.repository}
                target="_blank"
                rel="noreferrer"
                className="pixel-button"
                aria-label={`GitHub - ${projectText.title}`}
              >
                GitHub
              </a>
            </span>
          )}

          {project.demo && (
            <span className="pixel-button-wrapper">
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="pixel-button"
                aria-label={`Demo - ${projectText.title}`}
              >
                Demo
              </a>
            </span>
          )}
        </div>
      </div>
    </article>
  )
}

export default ProjectCard